(function(exports) {

    'use strict';

    var AREA_BIGTEXT = (function() {

        var _w = window,
            _d = document;

        var _bigTexts;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _bigTexts     = _d.querySelectorAll('.big-text');
        }

        function _maskText() {

            tl[1] = new TimelineLite({ paused: false });

            if (_bigTexts.length > 2) {
                tl[2] = new TimelineLite({ paused: false });
                tl[2].to(_bigTexts[2], 1.5, {
                    x: '-8%',
                    y: '-50%',
                    opacity: 1,
                    ease: Cubic.easeOut
                }, "+=.5")
                tl[2].to(_bigTexts[3], 1.5, {
                    x: '-8%',
                    y: '-50%',
                    opacity: 1,
                    ease: Cubic.easeOut
                }, "-=1")
                var s2 = new ScrollMagic.Scene({
                    triggerElement: _bigTexts[2],
                    // offset: - _w.innerHeight/3
                })
                .setTween(tl[2])
                .addTo(animationCtrl);
            }


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


        function _initAnimation() {
            console.log('AREA_BIGTEXT init')
            _initialize()
            _maskText()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_BIGTEXT = exports.AREA_BIGTEXT || AREA_BIGTEXT;

}(window));
(function(exports) {

    'use strict';

    var AREA_PROJECTS = (function() {

        var _w = window,
            _d = document;

        var _animationCovers,
            _animationElY,
            _sectionParallax;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _animationCovers = _d.querySelectorAll('.animation-cover');
            _animationElY = _d.querySelectorAll('.animation-y');
            _sectionParallax   = _d.querySelectorAll('.section-parallax');
        }

        function _animationY() {
            Array.prototype.forEach.call(_animationElY, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.children, 1, {
                    y: '0%',
                    opacity: 1,
                    ease: Expo.easeOut
                })

                new ScrollMagic.Scene({
                    triggerElement: _animationElY[i],
                    offset: - _w.innerHeight/5
                })
                .setTween(tl[i])
                .reverse(false)
                .addTo(animationCtrl);

            });
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

        function _parallaxNumber() {

            Array.prototype.forEach.call(_sectionParallax, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: el,
                    duration: _w.innerHeight*2,
                    triggerHook: 'onEnter'
                })
                .setTween(el.querySelector('.project__number'), {
                    y: '-45%'
                })
                .addTo(animationCtrl)

            });

        }

        function _initAnimation() {
            console.log('AREA_PROJECTS init')
            _initialize()
            _parallaxNumber()
            _animationCover()
            _animationY()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_PROJECTS = exports.AREA_PROJECTS || AREA_PROJECTS;

}(window));
(function(exports) {

    'use strict';

    var INTRO = (function() {

        var _headerLetters = document.querySelectorAll('.header i'),
            _d             = document;

        var _titleLetters,
            _titleMask,
            _subTitleLetters,
            _subTitleMask,
            _bigTexts;

        var animationCtrl,
            tl;

        function _initialize() {
            tl               = [];
            animationCtrl    = new ScrollMagic.Controller();
            _titleLetters    = _d.querySelectorAll('.header__title i');
            _titleMask       = _d.getElementsByClassName('header__title-mask')[0];
            _subTitleLetters = _d.querySelectorAll('.header__subtitle i');
            _subTitleMask    = _d.getElementsByClassName('header__subtitle-mask')[0];
            _bigTexts        = _d.querySelectorAll('.big-text');
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
            console.log('INTRO init')
            _initialize()
            _headerAnimation()
        }

        return {
            init: _initAnimation
        }

    }());

    exports.INTRO = exports.INTRO || INTRO;

}(window));
(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _defer() {
            ROUTING.init()
        }

        function _init() {
            console.log('MAIN init')
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

    var PAGE_ABOUT = (function() {

        function _init() {
            console.log('PAGE_ABOUT init')
        }

        return {
            init: _init
        };

    }());

    exports.PAGE_ABOUT = exports.PAGE_ABOUT || PAGE_ABOUT;

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
                    var _className = 'is-load';

                    if (cb)
                        cb()

                    if (_body.classList)
                        _body.classList.add(_className);
                    else
                        _body.className += ' ' + _className;
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
                SHARER.init()
                AREA_PROJECTS.init()
                // The new Container is ready and attached to the DOM.
            },
            onEnterCompleted: function() {
                SCROLLTO.init()
                INTRO.init()
                AREA_BIGTEXT.init()
                // The Transition has just finished.
            },
            onLeave: function() {
                // A new Transition toward a new page has just started.
            },
            onLeaveCompleted: function() {
                // The Container has just been removed from the DOM.
            }
        });


        var About = Barba.BaseView.extend({
            namespace: 'about',
            onEnter: function() {
            },
            onEnterCompleted: function() {
                INTRO.init()
                AREA_BIGTEXT.init()
            }
        });

        function _init() {
            console.log('ROUTING init')
            Homepage.init();
            About.init();
            Barba.Pjax.start();
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
            _elements      = _d.getElementsByClassName('scroll-to'),
            animationCtrl  = new ScrollMagic.Controller(),
            _scrollToArrow = _d.querySelectorAll('.section-header .scroll-to');
        }

        function _showArrow() {
            TweenLite.to(_scrollToArrow, 0.5, {
                scale: 1,
                ease: Expo.easeOut,
                onComplete: function(){
                     TweenLite.to(_scrollToArrow[0].querySelectorAll('.svg-icon'), 0.5, {
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
                ease: Expo.easeInOut
            })
            .reverse(false)
            .addTo(animationCtrl);

            _scrollToArrow[0].addEventListener('click', function(){
                TweenLite.to(_w, 2, {
                    scrollTo: _w.innerHeight/1.25,
                    ease: Expo.easeInOut
                });
            })

            _elements[1].addEventListener('click', function(){
                TweenLite.to(_w, 2, {
                    scrollTo: 0,
                    ease: Expo.easeInOut
                });
            })

        }

        function _init(){
            console.log('SCROLLTO init')
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
            console.log('SHARER init')
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