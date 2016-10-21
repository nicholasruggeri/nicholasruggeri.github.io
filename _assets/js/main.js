(function(exports, undefined) {

    'use strict';

    var MAIN = (function() {

        function _callback() {
            WIDGETSECTION.init()
            ANIMATIONS.init()
            HEADER.init()
        }

        function _init() {
            PRELOADER.remove(_callback)
        }

        return {
            init: _init
        }

    }());

    window.onload = function(){
        MAIN.init()
    };

}(window));