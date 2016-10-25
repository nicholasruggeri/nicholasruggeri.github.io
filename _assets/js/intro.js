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

        function _hoverSection() {

            var elements = _d.getElementsByClassName('section-links__element'),
                _headerBox = _d.querySelectorAll('.header__box'),
                _line = _d.querySelectorAll('section-links__line');

            for (var i=0; i < elements.length; i++){
                elements[i].addEventListener( 'mouseover', function() {
                    TweenLite.to(this, 2, {
                        width: '70%',
                        ease: Expo.easeOut
                    });

                    if (this.classList.contains('section-links__left')) {
                        TweenLite.to(_headerBox, 2, {
                            x:  window.innerWidth/8 + 'px',
                            ease: Expo.easeOut
                        })
                    } else {
                        TweenLite.to(_headerBox, 2, {
                            x:  - window.innerWidth/8 + 'px',
                            ease: Expo.easeOut
                        })
                    }

                });
                elements[i].addEventListener( 'mouseout', function() {
                    TweenLite.to(this, 2, {
                        width: '50%',
                        ease: Expo.easeOut
                    });
                    TweenLite.to(_headerBox, 2, {
                        x: '0px',
                        opacity: 2,
                        ease: Expo.easeOut
                    });
                    TweenLite.to(_line, 2, {
                        x: '0px',
                        ease: Expo.easeOut
                    })
                });
            }

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
            // _hoverSection()
        }

        return {
            init: _initAnimation
        }

    }());

    exports.INTRO = exports.INTRO || INTRO;

}(window));