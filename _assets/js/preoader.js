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

            // TweenLite.to(window, 0.2, {scrollTo:0});

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