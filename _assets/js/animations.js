(function(exports) {

    'use strict';

    var ANIMATIONS = (function() {

        var _w = window,
            _d = document;

        var _animationCovers = _d.querySelectorAll('.animation-cover'),
            _projectContent  = _d.querySelectorAll('.project__content'),
            _projectNumber   = _d.querySelectorAll('.project__number');

        var animationCtrl = new ScrollMagic.Controller(),
            tl            = [];

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
                .addTo(animationCtrl);

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

            _parallaxNumber()
            _parallaxText()
            _maskText()

        }

        return {
            init: _initAnimation
        };

    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(window));