(function(exports) {

    'use strict';

    var AREA_PROJECTS = (function() {

        var _w = window,
            _d = document;

        var _animationCovers,
            _animationElY,
            _projectNumber;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _animationCovers = _d.querySelectorAll('.animation-cover');
            _animationElY = _d.querySelectorAll('.animation-y');
            _projectNumber   = _d.querySelectorAll('.project__number');
        }

        function _animationY() {
            Array.prototype.forEach.call(_animationElY, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.children, .3, {
                    y: '0%',
                    ease: Expo.easeOut
                })

                new ScrollMagic.Scene({
                    triggerElement: _animationElY[i],
                    offset: - _w.innerHeight/5
                })
                .setTween(tl[i])
                .addTo(animationCtrl);

            });
        }

        function _animationCover() {

            Array.prototype.forEach.call(_animationCovers, function(el, i){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to(el.querySelector('.animation-cover__mask'), .5, {
                    x: 0,
                    ease: Expo.easeOut
                }).to(el.querySelector('.animation-cover__text'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                })

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

            });

        }

        function _initAnimation() {
            console.log('AREA_PROJECTS init')
            _initialize()
            _parallaxNumber()
            _animationCover()
            _animationY()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_PROJECTS = exports.AREA_PROJECTS || AREA_PROJECTS;

}(window));