(function(exports) {

    'use strict';

    var WIDGETSECTION = (function() {

        var animationCtrl = new ScrollMagic.Controller();

        function _init() {

            new ScrollMagic.Scene({
                triggerElement: '.list-projects',
            })
            .setTween('.name-section', .5, {
                y: '0%',
            })
            .addTo(animationCtrl);

        }

        return {
            init: _init
        }

    }());

    exports.WIDGETSECTION = exports.WIDGETSECTION || WIDGETSECTION;

}(window));