(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _defer() {
            ROUTING.init()
        }

        function _init() {
            console.log('MAIN init')
            PRELOADER.remove(function(){
                _defer()
            })
        }

        return {
            init: _init
        }

    }());

    // exports.MAIN = exports.MAIN || MAIN;

    window.onload = function(){
        MAIN.init()
    };

}(window));