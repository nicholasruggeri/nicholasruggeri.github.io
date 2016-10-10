(function(exports) {

    var MAIN = (function() {

        function _init() {
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