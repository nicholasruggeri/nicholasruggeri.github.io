(function($, exports) {

    'use strict';

    var ANIMATIONS = (function() {

        function _animation() {

            var animationCtrl = new ScrollMagic.Controller(),
                $workImage = $('.project--content-image'),
                $tag = $('.section-info li');

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

            // $tag.each(function(i, elem){
            //     new ScrollMagic.Scene({
            //         triggerElement: $tag[i],
            //         triggerHook: 'onEnter'
            //     })
            //     .setTween($(elem), {
            //         y: '0%',
            //         opacity: 1,
            //         delay: 0.1*i
            //     })
            //     .addTo(animationCtrl)
            //     .reverse(false);
            // });
        }

        return {
            init: _animation
        };
    }());

    exports.ANIMATIONS = exports.ANIMATIONS || ANIMATIONS;

}(jQuery, window));