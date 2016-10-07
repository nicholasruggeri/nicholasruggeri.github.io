(function($, exports) {

    'use strict';

    var ANIMATIONS = (function() {

        function _animation() {

            var animationCtrl = new ScrollMagic.Controller(),
                $workImage = $('.project--content-cover'),
                $tag = $('.section-info li');

            $workImage.each(function(i, elem){
                new ScrollMagic.Scene({
                    triggerElement: $workImage[i],
                    duration: $(window).height(),
                    triggerHook: 'onEnter'
                })
                .setTween($(elem), {
                    width: 0
                })
                .addTo(animationCtrl);
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