(function(exports) {

    var Preloader = (function() {

        var $site = $('.site'),
            $header = $('.section-header'),
            $animatedText = $('h1,h2'),
            $animatedMask = $('.header span'),
            $image = $('.content-image img');

        function _initPreloader() {
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

        function _loadImages() {
            var _this, url;
            $image.each(function(){
                _this = $(this);
                url = _this.attr( 'src');
                _this.attr( 'srcset', url)
            });
        }

        function _animation() {
            var animationCtrl = new ScrollMagic.Controller();
            var $workImage = $('.content-image');
            var $tag = $('.section-info li');
            $workImage.each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $workImage[i],
                    triggerHook: 'onEnter',
                })
                .setTween($(elem), {
                    y: '0%',
                    opacity: 1
                })
                .addTo(animationCtrl)
                .reverse(false);
            });

            $tag.each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $tag[i],
                    triggerHook: 'onEnter'
                })
                .setTween($(elem), {
                    y: '0%',
                    opacity: 1,
                    delay: 0.1*i
                })
                .addTo(animationCtrl)
                .reverse(false);
            });
        }

        function init() {
            _initPreloader();
            _loadImages();
            _animation();
        }


        return {
            init: init
        };
    }());

    $(document).ready(function(){
        $(this).scrollTop(0);
    });

    $(window).on('load', Preloader.init);

}(window));