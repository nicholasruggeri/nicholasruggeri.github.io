(function(exports) {

    'use strict';

    var SHARER = (function() {

        var _d       = document,
            _trigger = _d.getElementsByClassName('trigger-share')[0],
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
            _openPopup(url, 626, 436);
        };

        function _init() {
            if (_trigger === undefined) return false;
            _trigger.addEventListener('click', function(evt){
                url = evt.target.getAttribute('href');
                evt.preventDefault();
                evt.stopPropagation();
                _facebookShare(url);
            })
        };

        return {
            init: _init
        };

    }());

    exports.SHARER = exports.SHARER || SHARER;

}(window));