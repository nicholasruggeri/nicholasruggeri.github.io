(function(exports) {

    var PRELOADER = (function() {

        var $title = $('.title'),
            $titleMask = $('.title span'),
            $subTitle = $('.subtitle'),
            $subTitleMask = $('.subtitle span');



        function _remove() {
            setTimeout(function () {

                TweenLite.to($titleMask, 0.5, {
                    x: 0,
                    delay: 0.3,
                    ease: Expo.easeIn,
                    onComplete: function(){
                        $title.css('color','rgba(255,255,255,1)')
                        TweenLite.to($titleMask, 1, {
                            x: '105%',
                            ease: Expo.easeOut
                        });
                    }
                });

                TweenLite.to($subTitleMask, 0.5, {
                    x: 0,
                    delay: 1,
                    ease: Expo.easeIn,
                    onComplete: function(){
                        $subTitle.css('color','rgba(255,255,255,1)')
                        TweenLite.to($subTitleMask, 1, {
                            x: '105%',
                            ease: Expo.easeOut
                        });
                    }
                });

            }, 0);
        }

        return {
            remove: _remove
        };
    }());

    exports.PRELOADER = exports.PRELOADER || PRELOADER;

}(window));