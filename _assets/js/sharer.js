(function($, exports) {

    'use strict';

    var SHARER = (function() {

        var $shCt = $(".messanger-share"),
            width,
            height,
            pos,
            url;

        function _openPopup(url, width, height) {

            if (!url) return;
            width = width ? width : 600;
            height = height ? height : 600;
            pos = {
                left: screen.width / 2 - width / 2,
                top: screen.height / 2 - height / 2
            };
            window.open(url, "Share", "width=" + width + ",height=" + height + ",left=" + pos.left + ",top=" + pos.top);
        };

        function _facebookShare(url) {
            _openPopup(url, 470, 640);
        };

        function _init() {

            if (!$shCt.length) {
                return false;
            }

            $shCt.on("click", function(evt) {

                var $this = $(this);

                url = $this.attr("href");
                evt.preventDefault();
                evt.stopPropagation();

                _facebookShare(url);

            });
        };

        // esporto i metodi pubblici
        return {
            init: _init
        };
    }());

    exports.SHARER = exports.SHARER || SHARER;

}(jQuery, window));