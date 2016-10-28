(function(exports) {

    'use strict';

    var SCROLLTO = (function() {

        var _w = window,
            _d = document,
            _elements,
            animationCtrl,
            _scrollToArrow;

        function _initialize() {
            _elements      = _d.getElementsByClassName('scroll-to'),
            animationCtrl  = new ScrollMagic.Controller(),
            _scrollToArrow = _d.querySelectorAll('.section-header .scroll-to');
        }

        function _showArrow() {
            TweenLite.to(_scrollToArrow, 0.5, {
                scale: 1,
                ease: Expo.easeOut,
                onComplete: function(){
                     TweenLite.to(_scrollToArrow[0].querySelectorAll('.svg-icon'), 0.5, {
                        y: '-50%',
                        opacity: 1,
                        ease: Expo.easeOut
                    });
                }
            });
        }

        function _handleEvents() {
            new ScrollMagic.Scene({
                triggerElement: _scrollToArrow,
                triggerHook: 'onLeave',
                offset: - _w.innerHeight/3
            })
            .setTween(_scrollToArrow, .5, {
                scale: 0,
                ease: Expo.easeOut
            })
            .reverse(false)
            .addTo(animationCtrl);

            _scrollToArrow[0].addEventListener('click', function(){
                TweenLite.to(_w, 2, {
                    scrollTo: _w.innerHeight,
                    ease: Expo.easeInOut
                });
            })

            _elements[1].addEventListener('click', function(){
                TweenLite.to(_w, 2, {
                    scrollTo: 0,
                    ease: Expo.easeInOut
                });
            })

        }

        function _init(){
            console.log('SCROLLTO init')
            _initialize()
            setTimeout(function(){
                _showArrow()
            }, 2000)
            _handleEvents()
        }

        return {
            init: _init,
        }

    }());

    exports.SCROLLTO = exports.SCROLLTO || SCROLLTO;

}(window));