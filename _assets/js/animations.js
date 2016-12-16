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

        function _maskIn() {

            var _el,
                animationCtrl,
                tl;

            _el = _d.querySelectorAll('.animation-mask');
            animationCtrl = new ScrollMagic.Controller();
            tl            = [];

            Array.prototype.forEach.call(_el, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelector('.animation-mask__cover'), .5, {
                    x: '0%',
                    ease: Expo.easeIn
                }).set(el.querySelector('.animation-mask__text'), {
                    opacity: 1,
                }).to(el.querySelector('.animation-mask__cover'), .5, {
                    x: '100%',
                    ease: Expo.easeOut
                }).set(el.querySelector('.animation-mask__cover'), {
                    display: 'none'
                })

                new ScrollMagic.Scene({
                    triggerElement: _el[i],
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

            animationCtrl = new ScrollMagic.Controller();
            _bigTexts     = _d.querySelectorAll('.big-text');

            tl = new TimelineLite({ paused: false });

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
            tl.play()

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

        function _showCircleButtons() {

            var _circleButtons,
                animationCtrl,
                tl;

            animationCtrl  = new ScrollMagic.Controller();
            _circleButtons = _d.querySelectorAll('.circle-button');

            tl = new TimelineLite({ paused: false });

            if (_circleButtons.length > 1) {
                Array.prototype.forEach.call(_circleButtons, function(el, i){
                    tl.to(el, 1, {
                        x: 0,
                        y: 0,
                        ease: Expo.easeInOut
                    })
                });
            } else {
                tl.to(_circleButtons, 1, {
                    y: 0,
                    ease: Expo.easeInOut
                }, 0)
            }
            setTimeout(function(){
                tl.play()
            }, 0)

        }

        return {
            fadeIn: _fadeIn,
            slideY: _slideY,
            drawGlass: _drawGlass,
            bigText: _bigText,
            parallax: _parallax,
            showImage: _showImage,
            headerLine: _headerLine,
            showCircleButtons: _showCircleButtons,
            maskIn: _maskIn
        };

    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(window));