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
            _scrollToArrow = _d.querySelectorAll('.section-header .scroll-to');
            animationCtrl  = new ScrollMagic.Controller();
        }

        function _handleEvents() {
            new ScrollMagic.Scene({
                triggerElement: _scrollToArrow,
                triggerHook: 'onLeave',
                offset: - _w.innerHeight/3
            })
            .setTween(_scrollToArrow, 1, {
                y: '-100%',
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete: function(){
                    _scrollToArrow[0].style.display = 'none';
                }
            })
            .reverse(false)
            .addTo(animationCtrl);

            _scrollToArrow[0].addEventListener('click', function(){
                setTimeout(function(){
                    TweenLite.to(_w, 1, {
                        scrollTo: _w.innerHeight/1.25,
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