(function(exports) {

    var PRELOADER = (function() {

        var $html = $('body');



        function _remove() {
            setTimeout(function () {
                $html.addClass('is-load');
            }, 0);
        }

        return {
            remove: _remove
        };
    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));