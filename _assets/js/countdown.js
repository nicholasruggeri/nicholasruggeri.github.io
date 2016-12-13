(function(exports) {

    'use strict';

    var COUNTDOWN = (function() {

        var _countdown,
            _counter = 5,
            IN;

        var animationCtrl;

        function _initialize() {
            _countdown = document.querySelector(".countdown");
        }

        function _start(){

            animationCtrl = new ScrollMagic.Controller();

            new ScrollMagic.Scene({
                triggerElement: '.countdown',
                triggerHook: 'onEnter'
            })
            .on('enter', function(){
                console.log('enter')
                IN = setInterval(function() {
                    _counter--;
                    if (_counter < 1) {
                        clearInterval(IN);
                        // Barba.Pjax.goTo(_countdown.getAttribute("data-href") + '.html')
                    } else {
                        _countdown.textContent = _counter.toString()
                    }
                }, 1000);
            })
            .on('leave', function(){
                console.log('leave')
                _counter = 5;
                _countdown.textContent = _counter.toString()
                clearInterval(IN);
            })
            .addTo(animationCtrl);


        }

        function _init(){
            // _initialize()
            // _start()
        }

        return {
            init: _init,
        }

    }());

    exports.COUNTDOWN = exports.COUNTDOWN || COUNTDOWN;

}(window));