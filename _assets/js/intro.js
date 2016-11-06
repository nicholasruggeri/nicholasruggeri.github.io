(function(exports) {

    'use strict';

    var INTRO = (function() {

        var _headerLetters = document.querySelectorAll('.header i'),
            _d             = document;

        var _titleLetters,
            _titleMask,
            _subTitleLetters,
            _subTitleMask,
            _bigTexts,
            _headerLineLoop;

        var animationCtrl,
            tl;

        function _initialize() {
            animationCtrl    = new ScrollMagic.Controller();
            _titleLetters    = _d.querySelectorAll('.header__title i');
            _titleMask       = _d.getElementsByClassName('header__title-mask')[0];
            _subTitleLetters = _d.querySelectorAll('.header__subtitle i');
            _subTitleMask    = _d.getElementsByClassName('header__subtitle-mask')[0];
            _bigTexts        = _d.querySelectorAll('.big-text');
            _headerLineLoop  = _d.getElementById("header__line-loop");
        }

        function _lineAnimation() {

            var tl = new TimelineLite();

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