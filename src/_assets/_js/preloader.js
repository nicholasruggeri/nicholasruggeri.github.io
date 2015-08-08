(function(exports) {

    var preloader = (function() {

        function init() {
            var $el = $('.section-header');
            $('.site').removeClass('spinner');
            setTimeout(function () {
                TweenLite.to($el, 1, {
                    x:0,
                    ease: Expo.easeInOut,
                });
                TweenLite.to($('.header span'), 0.5, {
                    x:0,
                    delay: 0.3,
                    ease: Expo.easeIn,
                    onComplete: function(){
                        $('h1,h2').css('color','rgba(255,255,255,1)')
                        TweenLite.to($('.header span'), 1, {
                            x:'105%',
                            ease: Expo.easeOut
                        });
                    }
                });
            }, 0);
        }

        return {
            init: init
        };
    }());

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $(window).on('load', preloader.init);

}(window));