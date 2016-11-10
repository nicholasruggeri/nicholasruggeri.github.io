(function(exports) {

    'use strict';

    var AREA_ABOUT = (function() {

        var _d = document,
            _avatar,
            animationCtrl;

        function _initialize() {
            animationCtrl = new ScrollMagic.Controller();
            _avatar = _d.querySelector('.avatar');
        }

        function _drawGlass() {
            new ScrollMagic.Scene({
                triggerElement: _avatar,
                triggerHook: 'onEnter'
            })
            .on('enter', function(){
                _avatar.className += ' ' + 'is-active';
            })
            .reverse(false)
            .addTo(animationCtrl);
        }

        function _initAnimation() {
            _initialize()
            _drawGlass()
        }

        return {
            init: _initAnimation
        };

    }());

    exports.AREA_ABOUT = exports.AREA_ABOUT || AREA_ABOUT;

}(window));