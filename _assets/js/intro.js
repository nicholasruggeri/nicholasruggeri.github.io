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