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