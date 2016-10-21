(function($, exports) {

    'use strict';

    var ANIMATIONS = (function() {

        var animationCtrl   = new ScrollMagic.Controller(),
            $animationCover = $('.animation-cover'),
            tl              = [];

        function _maskText() {

            $animationCover.each(function(i, elem){

                tl[i] = new TimelineLite({ paused: false });

                tl[i].to($(elem).children('.animation-cover__mask'), .5, {
                    x: 0,
                    ease: Expo.easeOut
                }).to($(elem).children('.animation-cover__text'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }).to($(elem).next('.project__description').children('span'), .3, {
                    y: '0%',
                    ease: Expo.easeOut
                }, "-=.2")

                new ScrollMagic.Scene({
                    triggerElement: $animationCover[i],
                    offset: - $(window).height()/3
                })
                .setTween(tl[i])
                .addTo(animationCtrl);

            });

        }

        function _parallaxnumber() {
            $('.project__number').each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $('.project__number')[i],
                    duration: $(window).height()
                })
                .setTween($(elem), {
                    y: '10%'
                })
                .addTo(animationCtrl);
            });
        }

        function _parallaxtext() {

            $('.project__content').each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $('.project__content')[i],
                    triggerHook: 'onEnter',
                    duration: $(window).height()
                })
                .setTween($(elem), {
                    y: '-25%',
                })
                .addTo(animationCtrl);
            });

        }

        function _initAnimation() {
            _parallaxnumber()
            _parallaxtext()
            _maskText()
        }

        return {
            init: _initAnimation
        };
    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(jQuery, window));