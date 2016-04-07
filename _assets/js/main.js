(function(exports) {

    var MAIN = (function() {

        function _loadImages() {

            var _this, url, $image = $('.content-image img');

            $image.each(function(){
                _this = $(this);
                url = _this.attr('src');
                _this.attr('srcset', url)
            });

        }

        function _init() {
            _loadImages()
            ANIMATIONS.init()
            PRELOADER.remove()
            SHARER.init()
        }


        return {
            init: _init
        };
    }());

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $(window).on('load', MAIN.init);

}(window));