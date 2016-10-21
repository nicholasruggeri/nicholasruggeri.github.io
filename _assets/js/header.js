(function(exports, $) {

    'use strict';

    var HEADER = (function() {

        var animationCtrl = new ScrollMagic.Controller();

        var $headerLetters = $('.header i'),
            $window        = $(window);

        function _init() {

            $headerLetters.each(function(i, elem){
                new ScrollMagic.Scene({
                    duration: $window.height()/2,
                })
                .setTween($(elem), {
                    y: - Math.floor(Math.random() * 100) + 1,
                    opacity: 0
                })
                .addTo(animationCtrl);
            });

        }

        return {
            init: _init
        }

    }());

    exports.HEADER = exports.HEADER || HEADER;

}(window, jQuery));