/*==========================================================
How to Gulp
Author: @trevisojs       - https://treviso.js.org
Author: @nicholasruggeri - http://ruggeri.io
==========================================================*/


/**
* List gulp dependencies
**/
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    plumber     = require('gulp-plumber'),
    notify      = require("gulp-notify"),
    del         = require('del'),
    gulpif      = require('gulp-if'),
    browserSync = require('browser-sync').create(),
    nunjucksRender = require('gulp-nunjucks-render'),
    minifyHTML  = require('gulp-minify-html'),
    ghPages     = require('gulp-gh-pages');

var critical = require('critical').stream;


var prod = false,
    vendorPath = '_assets/vendor',
    customPath = '_assets/js',
    jsplugins = [
        vendorPath + '/Barba/barba.min.js',
        vendorPath + '/GreenSock-JS/src/minified/TimelineLite.min.js',
        vendorPath + '/GreenSock-JS/src/minified/TweenLite.min.js',
        vendorPath + '/GreenSock-JS/src/minified/easing/EasePack.min.js',
        vendorPath + '/GreenSock-JS/src/minified/plugins/CSSPlugin.min.js',
        vendorPath + '/GreenSock-JS/src/minified/plugins/ScrollToPlugin.min.js'
    ],
    jscustoms = [
        customPath + '/intro.js',
        customPath + '/sharer.js',
        customPath + '/preloader.js',
        customPath + '/scroll-to.js',
        customPath + '/area-projects.js',
        customPath + '/page-about.js',
        customPath + '/page-hp.js',
        customPath + '/routing.js',
        customPath + '/main.js'
    ]



/**
*
* Styles
* - Catch errors (gulp-plumber)
* - Compile with 'compressed' output if prod
* - Autoprefixer
*
**/
gulp.task('styles', function() {
    del.sync('web/css');
    gulp.src('_assets/scss/*.scss')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(prefix())
        .pipe(gulp.dest('web/css'))
        .pipe(browserSync.stream());
});


/**
*
* Scripts
* - Catch errors (gulp-plumber)
* - Concat
* - Uglify if prod
*
**/
gulp.task('scripts', function() {
    //del.sync('web/js');
    gulp.src('_assets/js/**/*.js')
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(concat('scripts.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('web/js'))
        .pipe(browserSync.stream());
});


/**
* Concat compress js
*/
gulp.task('js:vendor', function() {
    return gulp.src(jsplugins)
        .pipe(uglify())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('web/js'));
});


/**
*
* Img
* - Copy imgs in web
*
**/
gulp.task('images', function () {
    del.sync('web/img');
    gulp.src('_assets/img/**/*')
        .pipe(gulp.dest('web/img'));
});


/**
*
* Html
* - copy html
* - minify html if prod
*
**/
gulp.task('html', function() {
    del.sync('web/**/*.html');
    gulp.src('_views/**/*.html')
        .pipe(gulp.dest('web'));
});


/**
*
* Watch assets
*
**/
gulp.task('watch', function() {
    gulp.watch('_assets/scss/**/*.scss', ['styles']);
    gulp.watch('_assets/js/**/*.js', ['scripts']);
    gulp.watch('_assets/img/**/*', ['images']);
    gulp.watch('_views/**/*.+(html)', ['nunjucks']).on('change', browserSync.reload);
});


/**
*
* Build task
*
**/
gulp.task('build', function() {
    console.log('init build')
    gulp.start('styles', 'scripts', 'images', 'nunjucks', 'minify-html');
});








gulp.task('nunjucks', function () {
  del.sync('web/index.html');
  return gulp.src('_views/_pages/*.html')
    .pipe(nunjucksRender({
      path: ['_views/'] // String or Array
    }))
    .pipe(gulp.dest('web'));
});


/**
*
* Serve - BrowserSync.io
* - Watch CSS, JS, IMG & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('serve', ['build','watch'], function() {
    browserSync.init({
        server: "./web"
    });
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('web/index.html')
        .pipe(critical({base: 'web/', inline: true, css: ['web/css/style.css']}))
        .pipe(gulp.dest('web'));
});



gulp.task('minify-html', function() {
    console.log('init minify-html')
    var opts = {
        conditionals: true,
        spare:true
    };

    return gulp.src('web/index.html')
        .pipe(minifyHTML())
        .pipe(gulp.dest('web/'));
});


/**
* Gulp Prod
* - build all the assets in production env
*/
gulp.task('prod', ['build'], function(){
    console.log('init prod')
    gulp.src('CNAME').pipe(gulp.dest('web'));
    prod = true;
});

/**
*
* Default task
* - launch serve
*
**/
gulp.task('default', ['serve']);

gulp.task('deploy', function () {
  return gulp.src("./web/**/*")
    .pipe(ghPages({
        branch: 'master'
    }))
});