(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _scrollTo() {
            var _el = document.getElementsByClassName('scroll-to');
            _el[0].addEventListener('click', function(){
                TweenLite.to(window, 2, {
                    scrollTo: 0,
                    ease: Expo.easeInOut
                });
            })
        }

        function _defer() {
            ROUTING.init()
            // PAGE_HP.init()
        }

        function _init() {
            _scrollTo()
            PRELOADER.remove(function(){
                _defer()
            })
        }

        return {
            init: _init,
            scrollTo: _scrollTo
        }

    }());

    exports.MAIN = exports.MAIN || MAIN;

    window.onload = function(){
        MAIN.init()
    };

}(window));