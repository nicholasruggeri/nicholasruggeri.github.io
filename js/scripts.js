(function(exports) {

    'use strict';

    var ANIMATIONS = (function() {

        var _d = document,
            _w = window;

        function _fadeIn() {

            var _animationFadeIn,
                _animationElY,
                animationCtrl,
                tl;

            _animationFadeIn = _d.querySelectorAll('.animation-fade-in');
            animationCtrl    = new ScrollMagic.Controller();
            tl               = [];

            Array.prototype.forEach.call(_animationFadeIn, function(el, i){
                tl[i] = new TimelineLite({ paused: false });
                tl[i].to(el, 2, {
                    opacity: 1,
                    ease: Expo.easeOut
                })
                new ScrollMagic.Scene({
                    triggerElement: _animationFadeIn[i],
                    triggerHook: 'onEnter'
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);
            });

        }

        function _translateY() {

            var _animationElY,
                animationCtrl,
                tl;

            _animationElY = _d.querySelectorAll('.animation-y');
            animationCtrl = new ScrollMagic.Controller();
            tl            = [];

            Array.prototype.forEach.call(_animationElY, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.children, 1, {
                    y: '0%',
                    opacity: 1,
                    ease: Expo.easeOut
                })

                new ScrollMagic.Scene({
                    triggerElement: _animationElY[i],
                    triggerHook: 'onEnter'
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);

            });

        }

        function _slideY() {

            var _animationElSlideY,
                animationCtrl,
                tl;

            _animationElSlideY = _d.querySelectorAll('.animation-slide-y');
            animationCtrl = new ScrollMagic.Controller();
            tl            = [];

            Array.prototype.forEach.call(_animationElSlideY, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el, 1, {
                    y: '0%',
                    opacity: 1,
                    ease: Expo.easeOut
                })

                new ScrollMagic.Scene({
                    triggerElement: _animationElSlideY[i],
                    triggerHook: 'onEnter'
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);

            });

        }

        function _drawGlass() {

            var _avatar,
                animationCtrl;

            animationCtrl = new ScrollMagic.Controller();
            _avatar = _d.querySelector('.avatar');

            new ScrollMagic.Scene({
                triggerElement: _avatar,
                triggerHook: 'onEnter'
            })
            .on('enter', function(){
                _avatar.className += ' ' + 'is-active';
            })
            .reverse(false)
            .addTo(animationCtrl);

        }

        function _bigText() {

            var _bigTexts,
                animationCtrl,
                tl;

            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _bigTexts     = _d.querySelectorAll('.big-text');

            tl[1] = new TimelineLite({ paused: false });

            tl[1].to(_bigTexts[0], 1.5, {
                x: '-8%',
                y: '-50%',
                opacity: 1,
                ease: Cubic.easeOut
            })
            tl[1].to(_bigTexts[1], 1.5, {
                x: '-8%',
                y: '-50%',
                opacity: 1,
                ease: Cubic.easeOut
            }, "-=1")


            var s1 = new ScrollMagic.Scene({
                triggerElement: _bigTexts[0],
                offset: - _w.innerHeight/3
            })
            .setTween(tl[1])
            .addTo(animationCtrl);

        }

        function _parallax() {

            var _sectionParallax,
                animationCtrl;

            animationCtrl = new ScrollMagic.Controller();
            _sectionParallax = _d.querySelectorAll('.section-parallax');

            Array.prototype.forEach.call(_sectionParallax, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: el,
                    duration: _w.innerHeight*2,
                    triggerHook: 'onEnter'
                })
                .setTween(el.querySelectorAll('.section-parallax__element'), {
                    y: '-40%'
                })
                .addTo(animationCtrl)

            });

        }

        function _showImage() {

            var _boxImg,
                animationCtrl,
                tl;

            _boxImg = _d.querySelectorAll('.m-full-width');
            animationCtrl = new ScrollMagic.Controller();
            tl            = [];

            Array.prototype.forEach.call(_boxImg, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelectorAll('.m-full-width__cover-l'), 1, {
                    y: '-100%',
                    ease: Expo.easeInOut
                })
                tl[i].to(el.querySelectorAll('.m-full-width__cover-r'), 1, {
                    y: '100%',
                    ease: Expo.easeInOut
                }, '-=.7')

                new ScrollMagic.Scene({
                    triggerElement: _boxImg[i]
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);

            });

        }

        function _headerLine() {

            var _headerLineLoop,
                animationCtrl,
                tl;

            _headerLineLoop = _d.getElementById("header__line-loop");

            tl = new TimelineLite();

            tl.to(_headerLineLoop, 2.5, {
                    y: '100%',
                    ease: Expo.easeInOut,
                    onComplete: function(){
                        tl.restart()
                    }
                })
            tl.play();

        }

        return {
            fadeIn: _fadeIn,
            slideY: _slideY,
            translateY: _translateY,
            drawGlass: _drawGlass,
            bigText: _bigText,
            parallax: _parallax,
            showImage: _showImage,
            headerLine: _headerLine
        };

    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(window));
(function(exports) {

    'use strict';

    var AREA_PROJECTS = (function() {

        var _w = window,
            _d = document;

        var _animationCovers;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _animationCovers = _d.querySelectorAll('.animation-cover');
        }


        function _animationCover() {

            Array.prototype.forEach.call(_animationCovers, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelector('.animation-cover__mask'), .5, {
                    x: 0,
                    ease: Expo.easeOut
                }).to(el.querySelector('.animation-cover__text'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                })

                new ScrollMagic.Scene({
                    triggerElement: _animationCovers[i],
                    offset: - _w.innerHeight/4
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);

            });

        }

        function _initAnimation() {
            // console.log('AREA_PROJECTS init')
            _initialize()
            _animationCover()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_PROJECTS = exports.AREA_PROJECTS || AREA_PROJECTS;

}(window));
(function(exports) {

    'use strict';

    var COUNTDOWN = (function() {

        var _countdown,
            _counter = 5,
            IN;

        var animationCtrl;

        function _initialize() {
            _countdown = document.querySelector(".countdown");
        }

        function _start(){

            animationCtrl = new ScrollMagic.Controller();

            new ScrollMagic.Scene({
                triggerElement: '.countdown',
                triggerHook: 'onEnter'
            })
            .on('enter', function(){
                console.log('enter')
                IN = setInterval(function() {
                    _counter--;
                    if (_counter < 1) {
                        clearInterval(IN);
                        // Barba.Pjax.goTo(_countdown.getAttribute("data-href") + '.html')
                    } else {
                        _countdown.textContent = _counter.toString()
                    }
                }, 1000);
            })
            .on('leave', function(){
                console.log('leave')
                _counter = 5;
                _countdown.textContent = _counter.toString()
                clearInterval(IN);
            })
            .addTo(animationCtrl);


        }

        function _init(){
            // _initialize()
            // _start()
        }

        return {
            init: _init,
        }

    }());

    exports.COUNTDOWN = exports.COUNTDOWN || COUNTDOWN;

}(window));
(function(exports) {

    'use strict';

    var INTRO = (function() {

        var _d = document;

        var _titleLetters,
            _titleMask,
            _subTitleLetters,
            _subTitleMask,
            _bigTexts,
            _headerLineLoop;

        var tl;

        function _initialize() {
            _titleLetters    = _d.querySelectorAll('.header__title i');
            _titleMask       = _d.getElementsByClassName('header__title-mask')[0];
            _subTitleLetters = _d.querySelectorAll('.header__subtitle i');
            _subTitleMask    = _d.getElementsByClassName('header__subtitle-mask')[0];
            _bigTexts        = _d.querySelectorAll('.big-text');
            _headerLineLoop  = _d.getElementById("header__line-loop");
        }

        function _lineAnimation() {

            tl = new TimelineLite();

            tl.to(_headerLineLoop, 2.5, {
                    y: '100%',
                    ease: Expo.easeInOut,
                    onComplete: function(){
                        tl.restart()
                    }
                })
            tl.play();

        }

        function _headerAnimation() {

            var tl = new TimelineLite({
                paused: true,
                onComplete: function(cb) {
                    if (cb)
                        cb()
                }
            });

            tl.to(_titleMask, .5, {
                x: 0,
                ease: Expo.easeIn,
                onComplete: function(){
                    TweenLite.to(_titleLetters, 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                }
            }, ".5")
            tl.to(_subTitleMask, .5, {
                x: 0,
                delay: .3,
                ease: Expo.easeIn,
                onComplete: function(){
                    TweenLite.to(_subTitleLetters, 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                }
            }, "-=0.5")
            setTimeout(function () {
                tl.play()
            }, 0);
        }

        function _initAnimation() {
            _initialize()
            _headerAnimation()
            _lineAnimation()
        }

        return {
            init: _initAnimation
        }

    }());

    exports.INTRO = exports.INTRO || INTRO;

}(window));
(function(exports) {

    'use strict';

    var LIST_PROJECTS = (function() {

        var _d = document,
            _w = window,
            _trigger,
            _menu,
            _menuLink,
            _menuLink1,
            _menuLink2,
            tl, tl2;

        function _initialize() {
            _trigger = _d.querySelector('.trigger-projects-menu');
            _menuLink = _d.querySelectorAll('.projects-menu__title');
            _menuLink1 = _d.querySelectorAll('.project-menu__first .projects-menu__title');
            _menuLink2 = _d.querySelectorAll('.project-menu__second .projects-menu__title');
            _menu = _d.querySelector('.projects-menu');
        }

        function _handleEvents() {

            Array.prototype.forEach.call(_menuLink, function(el, i){

                el.addEventListener("mouseover", function(el){
                    _menu.classList.add(el.target.attributes[2].nodeValue)
                });

                el.addEventListener("mouseout", function(){
                    _menu.classList.remove('is-ciak')
                    _menu.classList.remove('is-molteni')
                    _menu.classList.remove('is-snap')
                    _menu.classList.remove('is-weatherymood')
                });

            });




            _trigger.addEventListener('click', function(evt){
                if (_trigger.classList.contains('is-active')){
                    _trigger.classList.remove('is-active')
                    _d.querySelector('body').style.overflow = "scroll";
                    _hide()
                }
                else {
                    _trigger.classList.add('is-active')
                    _d.querySelector('body').style.overflow = "hidden";
                    _show()
                }
            })

        }

        function _show() {

            var isFirst;

            tl = new TimelineLite({ paused: false });
            tl.to(_menu, .5, {
                display: 'flex',
                opacity: 1,
                ease: Expo.easeOut
            })

            tl2 = new TimelineLite({ paused: false });
            tl2.to(_menu, .5, {
                display: 'flex',
                opacity: 1,
                ease: Expo.easeOut
            })

            Array.prototype.forEach.call(_menuLink1, function(el, i){

                if (i == 0)
                    isFirst = "+=0";
                else
                    isFirst = "-=.9";

                tl.to(el, 1.5, {
                    opacity: 1,
                    x: 0,
                    ease: Cubic.easeOut
                }, isFirst)

            });

            Array.prototype.forEach.call(_menuLink2, function(el, i){

                if (i == 0)
                    isFirst = "+=.3";
                else
                    isFirst = "-=.9";

                tl2.to(el, 1.5, {
                    opacity: 1,
                    x: 0,
                    ease: Cubic.easeOut
                }, isFirst)

            });


            tl.play()
            tl2.play()

        }

        function _hide() {

            tl = new TimelineLite({ paused: false });
            tl.to(_menu, .5, {
                opacity: 0,
                display: 'none',
                ease: Expo.easeOut
            })
            tl.play()

        }

        function _init() {
            _initialize()
            _handleEvents()
        }

        return {
            init: _init
        };

    }());

    exports.LIST_PROJECTS = exports.LIST_PROJECTS || LIST_PROJECTS;

}(window));
(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _defer() {
            ROUTING.init()
        }

        function loadProgressHandler(loader, resource) {

            //Display the file `url` currently being loaded
            console.log("loading: " + resource.url);

            //Display the precentage of files currently loaded
            console.log("progress: " + loader.progress + "%");

            //If you gave your files names as the first argument
            //of the `add` method, you can access them like this
            //console.log("loading: " + resource.name);
        }

        function _initPixi() {

            var stage = new PIXI.Container();

            PIXI.loader
              .add([
                    "http://www.pleasetrump.it/1000x1000",
                    "http://www.pleasetrump.it/1000x1011",
                    "http://www.pleasetrump.it/1000x1004",
                    "http://www.pleasetrump.it/1000x10"
              ])
              .on("progress", loadProgressHandler)
              .load(setup);

            //Create the renderer
            var renderer = PIXI.autoDetectRenderer(500, 500, {transparent: true, resolution: 2});
            renderer.view.style.position = "fixed";
            renderer.view.style.display = "block";
            renderer.autoResize = true;
            renderer.resize(window.outerWidth, window.outerHeight);

            var mask = new PIXI.Graphics();
            var lineBg = new PIXI.Graphics();
            var lineAnim = new PIXI.Graphics();

            mask.lineStyle(1, 0x000000, 1);
            mask.moveTo(0, -window.innerHeight/10);
            mask.lineTo(0, window.innerHeight/10);
            mask.x = window.innerWidth/2;
            mask.y = window.innerHeight/2;

            console.log(mask.width)

            lineBg.lineStyle(1, 0xff0000, 1);
            lineBg.moveTo(0, 0);
            lineBg.lineTo(0, window.innerWidth);
            lineBg.x = window.innerWidth/2;
            lineBg.y = 0;
            lineBg.mask = mask;

            lineAnim.lineStyle(1, 0x0000ff, 1);
            lineAnim.moveTo(0, -window.innerWidth/10);
            lineAnim.lineTo(0, window.innerWidth/10);
            lineAnim.x = window.innerWidth/2;
            lineAnim.y = window.innerHeight/2 - (window.innerWidth/10*2);
            lineAnim.mask = mask;

            //Add the canvas to the HTML document
            document.body.appendChild(renderer.view);

            //Create a container object called the `stage`

            stage.addChild(mask);
            stage.addChild(lineBg);
            stage.addChild(lineAnim);

            var tween = TweenLite.to(lineAnim, 2.5, {
                y: window.innerHeight/2 + (window.innerWidth/10*2),
                ease: Quint.easeInOut,
                onComplete: function(){
                    tween.restart()
                },
                onReverseComplete: function(){
                    tween.reverse()
                }
            });

            function setup() {
                console.log("All files loaded");
                TweenLite.to(mask, 1.5, {
                    y: window.innerHeight/2,
                    height: window.innerHeight,
                    ease: Expo.easeInOut
                });
                TweenLite.to(lineAnim, .5, {
                    alpha: 0,
                });
            }

            TweenLite.ticker.addEventListener('tick', function(){
                renderer.render(stage);
            })

        }

        function _init() {

            // _initPixi()

            var css = 'font-size:10px;color:#f9f9f9;background:#1a1a1a;padding:10px 7px;';
            console.log(' ')
            console.style('<css="' + css + '">www.ruggeri.io</css>');
            console.log(' ')
            console.style('<img="background:url(http://cultofthepartyparrot.com/parrots/parrot.gif);width:30px;height:21.4px">');
            console.log(' ')

            PRELOADER.remove(function(){
                _defer()
            })
        }

        return {
            init: _init
        }

    }());

    // exports.MAIN = exports.MAIN || MAIN;

    window.onload = function(){
        MAIN.init()
    };

}(window));
(function(exports) {

    'use strict';

    var PRELOADER = (function() {

        var _d                 = document,
            _body              = _d.getElementsByTagName('body')[0],
            _preloader         = _d.getElementsByClassName('preloader')[0],
            _cPreoader         = _d.getElementsByClassName('content-preloader')[0],
            _titleLetters      = _d.querySelectorAll('.header__title i'),
            _titleMask         = _d.getElementsByClassName('header__title-mask')[0],
            _subTitleLetters   = _d.querySelectorAll('.header__subtitle i'),
            _subTitleMask      = _d.getElementsByClassName('header__subtitle-mask')[0],
            _contPreloaderMask = _d.getElementsByClassName('content-preloader__mask');

        function _show(cb) {

            _preloader.style.height = '100%';

            var tl = new TimelineLite({
                paused: true,
                onComplete: function(){
                    if (cb)
                        cb()
                }
            });


            tl.set(_cPreoader, {
                zIndex: 9999999999,
            })
            tl.to(_preloader, 1, {
                opacity: 1,
                ease: Expo.easeInOut,
            }, "-=1")
            tl.to(_contPreloaderMask, 1, {
                x: '0%',
                ease: Expo.easeInOut,
                onComplete: function(){
                    TweenLite.to(window, 0.2, {scrollTo:0});
                }
            })
            tl.to(_preloader, 1.5, {
                height: '20%',
                ease: Expo.easeInOut
            })
            setTimeout(function () {
                tl.play()
            }, 0);

        }

        function _remove(cb) {

            var tl = new TimelineLite({
                paused: true,
                onComplete: function(){
                    if (cb)
                        cb()
                }
            });

            tl.to(_preloader, 1, {
                height: '100%',
                ease: Expo.easeIn
            })
            tl.to(_contPreloaderMask, 1, {
                x: '101%',
                ease: Expo.easeOut
            })
            tl.to(_preloader, 1, {
                opacity: 0,
                ease: Expo.easeInOut
            }, "-=1")
            tl.set(_cPreoader, {
                zIndex: -1,
            })
            setTimeout(function () {
                tl.play()
            }, 0);

        }

        function _init() {

            var tl = new TimelineLite({
                paused: true,
                onComplete: function(){
                    alert()
                    var _className = 'is-load';
                    if (_body.classList)
                        _body.classList.add(_className);
                    else
                        _body.className += ' ' + _className;
                }
            });

            tl.to(_preloader, 1, {
                height: '95%',
                ease: Expo.easeInOut
            })
            tl.to(_contPreloaderMask, 1, {
                x: '101%',
                ease: Expo.easeInOut
            })
            tl.to(_preloader, 1, {
                opacity: 0,
                ease: Expo.easeInOut
            }, "-=1")
            tl.to(_titleMask, .5, {
                x: 0,
                ease: Expo.easeIn,
                onComplete: function(){
                    TweenLite.to(_titleLetters, 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                }
            }, "-=0.5")
            tl.to(_subTitleMask, .5, {
                x: 0,
                delay: .3,
                ease: Expo.easeIn,
                onComplete: function(){
                    TweenLite.to(_subTitleLetters, 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                }
            }, "-=0.5")
            tl.set(_cPreoader, {
                zIndex: -1,
            })
            setTimeout(function () {
                tl.play()
            }, 0);

        }

        return {
            init: _init,
            remove: _remove,
            show: _show
        };

    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));
(function(exports) {

    'use strict';

    var ROUTING = (function() {

        var PreloaderAnimation = Barba.BaseTransition.extend({
            start: function() {
                Promise
                    .all([this.newContainerLoading, this.showPreloader()])
                    .then(this.hidePreloader.bind(this));
            },
            showPreloader: function() {
                return new Promise(function(resolve){
                    PRELOADER.show(resolve)
                })
            },
            hidePreloader: function() {
                var _this = this,
                    _new  = this.newContainer,
                    _old  = this.oldContainer;
                _old.style.display = 'none';
                _new.style.visibility = "visible";
                PRELOADER.remove(function(){
                    _this.done()
                })
            }

        });

        Barba.Pjax.getTransition = function() {
            return PreloaderAnimation;
        };

        var Homepage = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function() {
                document.querySelector('body').style.overflow = "scroll";
                SHARER.init()
                AREA_PROJECTS.init()
                ANIMATIONS.drawGlass()
                ANIMATIONS.parallax()
            },
            onEnterCompleted: function() {
                SCROLLTO.init()
                INTRO.init()
                ANIMATIONS.bigText()
                ANIMATIONS.headerLine()

                // Generic Animations
                ANIMATIONS.fadeIn()
                ANIMATIONS.slideY()
                ANIMATIONS.translateY()
            },
        });

        var CaseHistory = Barba.BaseView.extend({
            namespace: 'case-history',
            onEnter: function() {
                document.querySelector('body').style.overflow = "scroll";
            },
            onEnterCompleted: function() {
                SHARER.init()
                AREA_PROJECTS.init()
                SCROLLTO.init()
                COUNTDOWN.init()
                // INTRO.init()
                ANIMATIONS.bigText()
                ANIMATIONS.showImage()
                ANIMATIONS.headerLine()

                // Generic Animations
                ANIMATIONS.fadeIn()
                ANIMATIONS.slideY()
                ANIMATIONS.translateY()

                LIST_PROJECTS.init()
            }
        });

        function _init() {

            // Page
            Homepage.init()
            CaseHistory.init()

            // Routing
            Barba.Pjax.start()
            Barba.Prefetch.init();
        }

        return {
            init: _init
        }

    }());

    exports.ROUTING = exports.ROUTING || ROUTING;

}(window));
(function(exports) {

    'use strict';

    var SCROLLTO = (function() {

        var _w = window,
            _d = document,
            _elements,
            animationCtrl,
            _scrollToArrow;

        function _initialize() {
            _elements      = _d.getElementsByClassName('scroll-to');
            _scrollToArrow = _d.querySelectorAll('.section-header .scroll-to');
            animationCtrl  = new ScrollMagic.Controller();
        }

        function _showArrow() {
            TweenLite.to(_scrollToArrow, 0.5, {
                scale: 1,
                ease: Expo.easeOut,
                onComplete: function(){
                     TweenLite.to(_scrollToArrow[0].querySelector('.svg-icon'), 0.5, {
                        y: '-50%',
                        opacity: 1,
                        ease: Expo.easeOut
                    });
                }
            });
        }

        function _handleEvents() {
            new ScrollMagic.Scene({
                triggerElement: _scrollToArrow,
                triggerHook: 'onLeave',
                offset: - _w.innerHeight/3
            })
            .setTween(_scrollToArrow, 1, {
                y: '-100%',
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete: function(){
                    _scrollToArrow[0].style.display = 'none';
                }
            })
            .reverse(false)
            .addTo(animationCtrl);

            _scrollToArrow[0].addEventListener('click', function(){
                setTimeout(function(){
                    TweenLite.to(_w, 1, {
                        scrollTo: _w.innerHeight/1.25,
                        ease: Quint.easeInOut
                    });
                }, 0)
            })

            _elements[1].addEventListener('click', function(){
                setTimeout(function(){
                    TweenLite.to(_w, 1, {
                        scrollTo: 0,
                        ease: Quint.easeInOut
                    });
                }, 0)
            })

        }

        function _init(){
            // console.log('SCROLLTO init')
            _initialize()
            setTimeout(function(){
                _showArrow()
            }, 2000)
            _handleEvents()
        }

        return {
            init: _init,
        }

    }());

    exports.SCROLLTO = exports.SCROLLTO || SCROLLTO;

}(window));
(function(exports) {

    'use strict';

    var SHARER = (function() {

        var _d       = document,
            _trigger = _d.getElementsByClassName('trigger-share')[0],
            width,
            height,
            pos,
            url;

        function _openPopup(url, width, height) {
            if (!url) return;
            width = width ? width : 600;
            height = height ? height : 600;
            pos = {
                left: screen.width / 2 - width / 2,
                top: screen.height / 2 - height / 2
            };
            window.open(url, "Share", "width=" + width + ",height=" + height + ",left=" + pos.left + ",top=" + pos.top);
        };

        function _facebookShare(url) {
            _openPopup(url, 626, 436);
        };

        function _init() {
            // console.log('SHARER init')
            if (_trigger === undefined) return false;
            _trigger.addEventListener('click', function(evt){
                url = evt.target.getAttribute('href');
                evt.preventDefault();
                evt.stopPropagation();
                _facebookShare(url);
            })
        };

        return {
            init: _init
        };

    }());

    exports.SHARER = exports.SHARER || SHARER;

}(window));