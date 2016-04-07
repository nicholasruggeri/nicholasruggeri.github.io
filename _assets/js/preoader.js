(function(exports) {

    var PRELOADER = (function() {

        var $site = $('.site'),
            $header = $('.section-header'),
            $animatedText = $('h1,h2'),
            $animatedMask = $('.header span');

        function _show() {
        }

        function _remove() {
            $site.removeClass('spinner');
            setTimeout(function () {
                TweenLite.to($header, 1, {
                    x: 0,
                    ease: Expo.easeInOut,
                });
                TweenLite.to($('.header span'), 0.5, {
                    x: 0,
                    delay: 0.3,
                    ease: Expo.easeIn,
                    onComplete: function(){
                        $animatedText.css('color','rgba(255,255,255,1)')
                        TweenLite.to($animatedMask, 1, {
                            x: '105%',
                            ease: Expo.easeOut
                        });
                    }
                });
            }, 0);
        }

        return {
            show: _show,
            remove: _remove
        };
    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));