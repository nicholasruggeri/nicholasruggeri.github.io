(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _defer() {
            ROUTING.init()
        }

        function _init() {

            var css = 'font-size:10px;color:#f9f9f9;background:#1a1a1a;padding:10px 7px;';
            console.log(' ')
            console.style('<css="' + css + '">www.ruggeri.io</css>');
            console.log(' ')
            console.style('<img="background:url(http://cultofthepartyparrot.com/parrots/parrot.gif);width:30px;height:21.4px">');
            console.log(' ')

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