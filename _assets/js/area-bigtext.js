(function(exports) {

    'use strict';

    var AREA_BIGTEXT = (function() {

        var _w = window,
            _d = document;

        var _bigTexts;

        var animationCtrl, tl;

        function _initialize() {
            tl = [];
            animationCtrl = new ScrollMagic.Controller();
            _bigTexts     = _d.querySelectorAll('.big-text');
        }

        function _maskText() {

            tl[1] = new TimelineLite({ paused: false });

            if (_bigTexts.length > 2) {
                tl[2] = new TimelineLite({ paused: false });
                tl[2].to(_bigTexts[2], 1.5, {
                    x: '-8%',
                    y: '-50%',
                    opacity: 1,
                    ease: Cubic.easeOut
                }, "+=.5")
                tl[2].to(_bigTexts[3], 1.5, {
                    x: '-8%',
                    y: '-50%',
                    opacity: 1,
                    ease: Cubic.easeOut
                }, "-=1")
                var s2 = new ScrollMagic.Scene({
                    triggerElement: _bigTexts[2]
                })
                .setTween(tl[2])
                .addTo(animationCtrl);
            }


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

        function _initAnimation() {
            _initialize()
            _maskText()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_BIGTEXT = exports.AREA_BIGTEXT || AREA_BIGTEXT;

}(window));