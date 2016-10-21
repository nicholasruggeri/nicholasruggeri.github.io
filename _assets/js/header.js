(function(exports) {

    'use strict';

    var HEADER = (function() {

        var _headerLetters = document.querySelectorAll('.header i'),
            _w             = window;

        var animationCtrl  = new ScrollMagic.Controller();

        function _init() {

            Array.prototype.forEach.call(_headerLetters, function(el, i){

                new ScrollMagic.Scene({
                    duration: _w.innerHeight/2,
                })
                .setTween(el, {
                    y: - Math.floor(Math.random() * 100) + 1,
                    opacity: 0
                })
                .addTo(animationCtrl);

            })

        }

        return {
            init: _init
        }

    }());

    exports.HEADER = exports.HEADER || HEADER;

}(window));