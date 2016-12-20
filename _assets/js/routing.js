(function(exports) {

    'use strict';

    var ROUTING = (function() {

        var _w = window,
            _body = document.querySelector('body');

        var PreloaderAnimation = Barba.BaseTransition.extend({
            start: function() {
                Promise
                    .all([this.newContainerLoading, this.showPreloader()])
                    .then(this.hidePreloader.bind(this));
            },
            showPreloader: function() {
                return new Promise(function(resolve){
                    PRELOADER.show(resolve)
                })
            },
            hidePreloader: function() {
                var _this = this,
                    _new  = this.newContainer,
                    _old  = this.oldContainer;
                _old.style.display = 'none';
                _new.style.visibility = "visible";
                PRELOADER.remove(function(){
                    _this.done()
                })
            }

        });

        Barba.Pjax.getTransition = function() {
            return PreloaderAnimation;
        };

        var Homepage = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function() {
                document.querySelector('body').setAttribute('style', '');
                document.querySelector('body').style.overflow = "scroll";
                SHARER.init()
                AREA_PROJECTS.init()
                ANIMATIONS.drawGlass()
                // ANIMATIONS.parallax()
                if (_body.classList.contains('no-touch')) {
                    ANIMATIONS.parallaxProjects()
                }

            },
            onEnterCompleted: function() {
                SCROLLTO.init()
                INTRO.init()
                ANIMATIONS.bigText()
                ANIMATIONS.headerLine()
                ANIMATIONS.showCircleButtons()

                // Generic Animations

                // console.log(_w.outerWidth)
                if (_w.outerWidth > 768) {
                    ANIMATIONS.fadeIn()
                }
                ANIMATIONS.maskIn()
                // ANIMATIONS.slideY()
            },
        });

        var CaseHistory = Barba.BaseView.extend({
            namespace: 'case-history',
            onEnter: function() {
                document.querySelector('body').setAttribute('style', '');
                document.querySelector('body').style.overflow = "scroll";
            },
            onEnterCompleted: function() {
                SHARER.init()
                AREA_PROJECTS.init()
                SCROLLTO.init()
                // COUNTDOWN.init()
                // INTRO.init()
                ANIMATIONS.bigText()
                ANIMATIONS.showImage()
                ANIMATIONS.headerLine()
                ANIMATIONS.showCircleButtons()

                // Generic Animations
                ANIMATIONS.fadeIn()
                ANIMATIONS.slideY()
                ANIMATIONS.maskIn()

                LIST_PROJECTS.init()
            }
        });

        function _init() {

            // Page
            Homepage.init()
            CaseHistory.init()

            // Routing
            Barba.Pjax.start()
            Barba.Prefetch.init();
        }

        return {
            init: _init
        }

    }());

    exports.ROUTING = exports.ROUTING || ROUTING;

}(window));