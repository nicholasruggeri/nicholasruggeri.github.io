(function(exports) {

    'use strict';

    var LIST_PROJECTS = (function() {

        var _d = document,
            _w = window,
            _trigger,
            _menu,
            _menuLink,
            _menuLink1,
            _menuLink2,
            tl, tl2;

        function _initialize() {
            _trigger = _d.querySelector('.trigger-projects-menu');
            _menuLink = _d.querySelectorAll('.projects-menu__title');
            _menuLink1 = _d.querySelectorAll('.project-menu__first .projects-menu__title');
            _menuLink2 = _d.querySelectorAll('.project-menu__second .projects-menu__title');
            _menu = _d.querySelector('.projects-menu');
        }

        function _handleEvents() {

            Array.prototype.forEach.call(_menuLink, function(el, i){

                el.addEventListener("mouseover", function(el){
                    _menu.classList.add(el.target.attributes[2].nodeValue)
                });

                el.addEventListener("mouseout", function(){
                    _menu.classList.remove('is-ciak')
                    _menu.classList.remove('is-molteni')
                    _menu.classList.remove('is-snap')
                    _menu.classList.remove('is-weatherymood')
                });

            });




            _trigger.addEventListener('click', function(evt){
                if (_trigger.classList.contains('is-active')){
                    _trigger.classList.remove('is-active')
                    _d.querySelector('body').style.overflow = "scroll";
                    _hide()
                }
                else {
                    _trigger.classList.add('is-active')
                    _d.querySelector('body').style.overflow = "hidden";
                    _show()
                }
            })

        }

        function _show() {

            var isFirst;

            tl = new TimelineLite({ paused: false });
            tl.to(_menu, .5, {
                display: 'flex',
                opacity: 1,
                ease: Expo.easeOut
            })

            tl2 = new TimelineLite({ paused: false });
            tl2.to(_menu, .5, {
                display: 'flex',
                opacity: 1,
                ease: Expo.easeOut
            })

            Array.prototype.forEach.call(_menuLink1, function(el, i){

                if (i == 0)
                    isFirst = "+=0";
                else
                    isFirst = "-=.9";

                tl.to(el, 1.5, {
                    opacity: 1,
                    x: 0,
                    ease: Cubic.easeOut
                }, isFirst)

            });

            Array.prototype.forEach.call(_menuLink2, function(el, i){

                if (i == 0)
                    isFirst = "+=.3";
                else
                    isFirst = "-=.6";

                tl2.to(el, 1.5, {
                    opacity: 1,
                    x: 0,
                    ease: Cubic.easeOut
                }, isFirst)

            });


            tl.play()
            tl2.play()

        }

        function _hide() {

            tl = new TimelineLite({ paused: false });
            tl.to(_menu, .5, {
                opacity: 0,
                display: 'none',
                ease: Expo.easeOut
            })
            tl.play()

        }

        function _init() {
            _initialize()
            _handleEvents()
        }

        return {
            init: _init
        };

    }());

    exports.LIST_PROJECTS = exports.LIST_PROJECTS || LIST_PROJECTS;

}(window));