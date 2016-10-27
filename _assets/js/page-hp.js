(function(exports) {

    'use strict';

    var PAGE_HP = (function() {

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

            tl.to(_bigTexts[0], 1.5, {
                x: '-8%',
                y: '-50%',
                opacity: 1,
                ease: Cubic.easeOut
            })
            tl.to(_bigTexts[1], 1.5, {
                x: '-8%',
                y: '-50%',
                opacity: 1,
                ease: Cubic.easeOut
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
            }, "-=1.5")
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
            }, "-=1.5")
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