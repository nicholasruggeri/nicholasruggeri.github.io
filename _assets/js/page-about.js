(function(exports) {

    'use strict';

    var PAGE_ABOUT = (function() {

        function _init() {
            console.log('PAGE_ABOUT init')
        }

        return {
            init: _init
        };

    }());

    exports.PAGE_ABOUT = exports.PAGE_ABOUT || PAGE_ABOUT;

}(window));