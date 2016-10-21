(function(exports, undefined) {

    'use strict';

    var PRELOADER = (function() {

        var _body              = document.getElementsByTagName('body')[0],
            _preloader         = document.getElementsByClassName('preloader')[0],
            _cPreoader         = document.getElementsByClassName('content-preloader')[0],
            _titleLetters      = document.querySelectorAll('.header__title i'),
            _titleMask         = document.getElementsByClassName('header__title-mask')[0],
            _subTitleLetters   = document.querySelectorAll('.header__subtitle i'),
            _subTitleMask      = document.getElementsByClassName('header__subtitle-mask')[0],
            _contPreloaderMask = document.getElementsByClassName('content-preloader__mask');

        function _remove(cb) {
            var tl = new TimelineLite({
                paused: true,
                onComplete: function(){
                    _body.className += 'is-load'
                    cb()
                }
            });

            tl.to(_preloader, 1.5, {
                height: '100%',
                ease: Expo.easeInOut
            })
            tl.to(_contPreloaderMask, 1, {
                x: '101%',
                ease: Expo.easeInOut
            })
            tl.to(_preloader, 1, {
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete: function(){
                    _cPreoader.parentNode.removeChild(_cPreoader)
                }
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
            setTimeout(function () {
                tl.play()
            }, 0);
        }

        return {
            remove: _remove
        };

    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));