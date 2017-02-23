(function(exports) {

    'use strict';

    var SCROLLTO = (function() {

        var _w = window,
            _d = document,
            _elements,
            animationCtrl,
            _scrollToArrow;

        function _initialize() {
            _elements      = _d.getElementsByClassName('scroll-to');
            _scrollToArrow = _d.querySelector('.section-header .scroll-to');
            animationCtrl  = new ScrollMagic.Controller();
        }

        function _handleEvents() {
            new ScrollMagic.Scene({
                triggerElement: _scrollToArrow
            })
            .on('enter', function(event){
                setTimeout(function(){
                    _scrollToArrow.classList.add('is-hidden')
                }, 500)
            })
            .reverse(false)
            .addTo(animationCtrl);

            _scrollToArrow.addEventListener('click', function(){
                setTimeout(function(){
                    TweenLite.to(_w, 1.5, {
                        scrollTo: _w.innerHeight/1.1,
                        ease: Quint.easeInOut
                    });
                }, 0)
            })

            _elements[1].addEventListener('click', function(){
                setTimeout(function(){
                    TweenLite.to(_w, 1, {
                        scrollTo: 0,
                        ease: Quint.easeInOut
                    });
                }, 0)
            })

        }

        function _init(){
            _initialize()
            _handleEvents()
        }

        return {
            init: _init,
        }

    }());

    exports.SCROLLTO = exports.SCROLLTO || SCROLLTO;

}(window));