
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var exec = require('child_process').exec;
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var concat = require("gulp-concat");
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var deploy = require('gulp-gh-pages');


/**
 * Project Configuration
 * =====================
 */

var prod = false,
    basePath = 'src',
    vendorPath = basePath + '/_assets/_vendor',
    jsplugins = [
        vendorPath + '/jquery/dist/jquery.js',
        vendorPath + '/gsap/src/minified/TweenLite.min.js',
        vendorPath + '/gsap/src/minified/easing/EasePack.min.js',
        vendorPath + '/gsap/src/minified/plugins/CSSPlugin.min.js'
    ];

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function () {
    console.log('jb');
    exec('jekyll build', function(err, stdout, stderr) {
        browserSync.notify('jekyll build');
        browserSync.reload();
    });
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    console.log('bs');
    browserSync({
        server: {
            baseDir: 'web'
        }
    });
});





/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
        return gulp.src(basePath + '/_assets/_scss/style.scss')
            .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sass())
        .pipe(prefix(['last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'], { cascade: true }))
        .pipe(gulp.dest('web/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(basePath + '/css'))
});

/**
* Concat compress js
*/
gulp.task('js', function() {
    return gulp.src(basePath + '/_assets/_js/**/*.js')
        .pipe(gulpif(prod === true, uglify({
            preserveComments: 'some'
        })))
        .pipe(concat('script.js'))
        .pipe(gulp.dest(basePath + '/js'));
});






/**
* Concat compress js
*/
gulp.task('js:vendor', function() {
    return gulp.src(jsplugins)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(basePath + '/js'));
});










/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(basePath + '/_assets/_js/**/*.js', ['js', 'jekyll-build']);
    gulp.watch(basePath + '/_assets/_scss/**/*.scss', ['sass']);
    gulp.watch(basePath + '/**/*.html', ['jekyll-rebuild']);
    gulp.watch(basePath + '/img/**/*', ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['js', 'js:vendor', 'sass', 'browser-sync', 'watch']);


/**
* Gulp Prod
* =========
* Prod
*/

gulp.task('prod', function() {
    prod = true;
    runSequence('sass', 'js', 'js:vendor', 'jekyll-build')
});




/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['prod'], function () {
  return gulp.src("./web/**/*")
    .pipe(deploy({
        branch: 'master'
    }))
});