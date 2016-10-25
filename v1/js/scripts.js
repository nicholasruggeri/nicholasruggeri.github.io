(function(exports) {

    'use strict';

    var INTRO = (function() {

        var _d = document,
            _titleLetters,
            _titleMask;

        var animationCtrl, tl;

        function _initialize() {
            tl            = [];
            animationCtrl = new ScrollMagic.Controller();
            _titleLetters = _d.querySelectorAll('.header__title i');
            _titleMask    = _d.getElementsByClassName('header__title-mask')[0];
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
            })
            setTimeout(function () {
                tl.play()
            }, 0);
        }

        function _initAnimation() {
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
            // PAGE_HP.init()
        }

        function _init() {
            PRELOADER.remove(function(){
                _defer()
            })
        }

        return {
            init: _init
        }

    }());

    exports.MAIN = exports.MAIN || MAIN;

    window.onload = function(){
        MAIN.init()
    };

}(window));
(function(exports) {

    'use strict';

    var PAGE_ABOUT = (function() {

        var _w = window,
            _d = document;

        var _animationCovers,
            _projectContent,
            _projectNumber;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _animationCovers = _d.querySelectorAll('.animation-cover');
            _projectContent  = _d.querySelectorAll('.project__content');
            _projectNumber   = _d.querySelectorAll('.project__number');
        }

        function _maskText() {

            Array.prototype.forEach.call(_animationCovers, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelector('.animation-cover__mask'), .5, {
                    x: 0,
                    ease: Expo.easeOut
                }).to(el.querySelector('.animation-cover__text'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }).to(el.nextElementSibling.children, .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }, "-=.2")

                new ScrollMagic.Scene({
                    triggerElement: _animationCovers[i],
                    offset: - _w.innerHeight/3
                })
                .setTween(tl[i])
                .addTo(animationCtrl);

            });

        }

        function _parallaxNumber() {

            Array.prototype.forEach.call(_projectNumber, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: _projectNumber[i],
                    duration: _w.innerHeight
                })
                .setTween(el, {
                    y: '10%'
                })
                .addTo(animationCtrl)
                .update()

            });

        }

        function _parallaxText() {

            Array.prototype.forEach.call(_projectContent, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: _projectContent[i],
                    triggerHook: 'onEnter',
                    duration: _w.innerHeight
                })
                .setTween(el, {
                    y: '-25%'
                })
                .addTo(animationCtrl);

            });

        }

        function _initAnimation() {

            _initialize()
            _parallaxNumber()
            _parallaxText()
            _maskText()

        }

        return {
            init: _initAnimation
        };

    }());

    exports.PAGE_ABOUT = exports.PAGE_ABOUT || PAGE_ABOUT;

}(window));
(function(exports) {

    'use strict';

    var PAGE_HP = (function() {

        var _headerLetters = document.querySelectorAll('.header i'),
            _w             = window,
            _d             = document;

        var _titleLetters     = _d.querySelectorAll('.header__title i'),
            _titleMask        = _d.getElementsByClassName('header__title-mask')[0],
            _subTitleLetters  = _d.querySelectorAll('.header__subtitle i'),
            _subTitleMask     = _d.getElementsByClassName('header__subtitle-mask')[0];

        var animationCtrl  = new ScrollMagic.Controller(),
            tl             = [];


        function _initialize() {
            tl               = [];
            animationCtrl    = new ScrollMagic.Controller();
            _titleLetters    = _d.querySelectorAll('.header__title i');
            _titleMask       = _d.getElementsByClassName('header__title-mask')[0];
            _subTitleLetters = _d.querySelectorAll('.header__subtitle i');
            _subTitleMask    = _d.getElementsByClassName('header__subtitle-mask')[0];
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
            })
            tl.to(_subTitleMask, .5, {
                x: 0,
                delay: .3,
                ease: Expo.easeIn,
                onComplete: function(){
                    TweenLite.to(_subTitleLetters, 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                    TweenLite.to('.header__extra', 1, {
                        opacity: 1,
                        x: 0
                    });
                }
            }, "-=0.5")
            setTimeout(function () {
                tl.play()
            }, 0);
        }

        function _initAnimation() {
            console.log('PAGE_HP init')
            _initialize()
            _headerAnimation()
        }

        return {
            init: _initAnimation
        }

    }());

    exports.PAGE_HP = exports.PAGE_HP || PAGE_HP;

}(window));
(function(exports) {

    'use strict';

    var PAGE_PROJECTS = (function() {

        var _w = window,
            _d = document;

        var _animationCovers,
            _projectContent,
            _projectNumber;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _animationCovers = _d.querySelectorAll('.animation-cover');
            _projectContent  = _d.querySelectorAll('.project__content');
            _projectNumber   = _d.querySelectorAll('.project__number');
        }

        function _maskText() {

            Array.prototype.forEach.call(_animationCovers, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelector('.animation-cover__mask'), .5, {
                    x: 0,
                    ease: Expo.easeOut
                }).to(el.querySelector('.animation-cover__text'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }).to(el.nextElementSibling.children, .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }, "-=.2")

                new ScrollMagic.Scene({
                    triggerElement: _animationCovers[i],
                    offset: - _w.innerHeight/3
                })
                .setTween(tl[i])
                .addTo(animationCtrl);

            });

        }

        function _parallaxNumber() {

            Array.prototype.forEach.call(_projectNumber, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: _projectNumber[i],
                    duration: _w.innerHeight
                })
                .setTween(el, {
                    y: '10%'
                })
                .addTo(animationCtrl)
                .update()

            });

        }

        function _parallaxText() {

            Array.prototype.forEach.call(_projectContent, function(el, i){

                new ScrollMagic.Scene({
                    triggerElement: _projectContent[i],
                    triggerHook: 'onEnter',
                    duration: _w.innerHeight
                })
                .setTween(el, {
                    y: '-25%'
                })
                .addTo(animationCtrl);

            });

        }

        function _initAnimation() {

            _initialize()
            _parallaxNumber()
            _parallaxText()
            _maskText()

        }

        return {
            init: _initAnimation
        };

    }());

    exports.PAGE_PROJECTS = exports.PAGE_PROJECTS || PAGE_PROJECTS;

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
                ease: Expo.easeInOut
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
                    TweenLite.to('.header__extra', 1, {
                        opacity: 1,
                        x: 0
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

        var FadeTransition = Barba.BaseTransition.extend({
          start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
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

            PRELOADER.remove()
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */
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
            /**
            * Here you can use your own logic!
            * For example you can use different Transition based on the current page or link...
            */
            return FadeTransition;
        };

        var Homepage = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function() {
                // The new Container is ready and attached to the DOM.
            },
            onEnterCompleted: function() {
                PAGE_HP.init()
                // The Transition has just finished.
            },
            onLeave: function() {
                console.log('asd3')
                // A new Transition toward a new page has just started.
            },
            onLeaveCompleted: function() {
                console.log('asd4')
                // The Container has just been removed from the DOM.
            }
        });

        var Projects = Barba.BaseView.extend({
            namespace: 'projects',
            onEnter: function() {
                console.log('onEnter PRJ')
            },
            onEnterCompleted: function() {
                PAGE_PROJECTS.init()
                INTRO.init()
                console.log('onEnterCompleted PRJ')
            }
        });

        var About = Barba.BaseView.extend({
            namespace: 'about',
            onEnter: function() {
                console.log('onEnter ABOUT')
            },
            onEnterCompleted: function() {
                PAGE_ABOUT.init()
                INTRO.init()
                console.log('onEnterCompleted ABOUT')
            }
        });

        function _init() {
            Homepage.init();
            Projects.init();
            Barba.Pjax.start();
        }

        return {
            init: _init
        }

    }());

    exports.ROUTING = exports.ROUTING || ROUTING;

}(window));