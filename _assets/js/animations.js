(function($, exports) {

    'use strict';

    var ANIMATIONS = (function() {

        var animationCtrl = new ScrollMagic.Controller();


        function _initAnimation() {
            _animation()
        }

        function _animation() {

            var $workImage = $('.project__content-cover');

            var $headerLetters = $('.header i'),
                $title = $('.header__title'),
                $titleMask = $('.header__title span'),
                $subTitle = $('.header__subtitle'),
                $subTitleMask = $('.header__subtitle span');

            var $animationCover = $('.animation-cover');

            $animationCover.each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $animationCover[i],
                    triggerHook: 'onEnter'
                })
                .setTween($(elem).children('.animation-cover__mask'), 0.5, {
                    x: 0,
                    ease: Expo.easeOut,
                    onComplete: function(){
                        TweenLite.to($(elem).children('.animation-cover__text'), 0.5, {
                            y: '0%',
                            ease: Expo.easeOut
                        })
                    }
                })
                .reverse(false)
                .addTo(animationCtrl);
            });

            $workImage.each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $workImage[i],
                    duration: $(window).height()/2,
                    triggerHook: 'onEnter'
                })
                .setTween($(elem).children('div'), {
                    scale: 1
                })
                .on("end", function (event) {
                    $(elem).addClass('is-active')
                })
                .addTo(animationCtrl);
            });


            $headerLetters.each(function(i, elem){
                new ScrollMagic.Scene({
                    duration: $(window).height()/2,
                })
                .setTween($(elem), {
                    y: - Math.floor(Math.random() * 100) + 1,
                    opacity: 0
                })
                .addTo(animationCtrl);
            });

            TweenLite.to($titleMask, 0.5, {
                x: 0,
                delay: 0.3,
                ease: Expo.easeIn,
                onComplete: function(){
                    $title.css({
                        'color': 'rgba(0,0,0,1)'
                    })

                    TweenLite.to($title.find('i'), 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                }
            });

            TweenLite.to($subTitleMask, 0.5, {
                x: 0,
                delay: 1,
                ease: Expo.easeIn,
                onComplete: function(){
                    $subTitle.css({
                        'color': 'rgba(0,0,0,1)'
                    })
                    TweenLite.to($subTitle.find('i'), 0.5, {
                        y: '0%',
                        ease: Expo.easeOut
                    });
                    TweenLite.to('.header__extra', 1, {
                        opacity: 1,
                        x: 0
                    });
                }
            });
        }

        return {
            init: _initAnimation
        };
    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(jQuery, window));