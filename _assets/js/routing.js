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

        var PageAnimation = Barba.BaseTransition.extend({
            start: function() {
                Promise
                    .all([this.newContainerLoading, this.showPreloader()])
                    .then(this.hidePreloader.bind(this));
            },
            showPreloader: function() {
                return new Promise(function(resolve){
                    console.log('loading')
                    resolve()
                })
            },
            hidePreloader: function() {
                console.log('end loading')
                var _this = this,
                    _new  = this.newContainer,
                    _old  = this.oldContainer;

                TweenLite.set(_new, {
                    visibility: 'visible',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    y: '100%',
                    width: '100%',
                    zIndex: 9999,
                    willChange: 'transform'
                })

                TweenLite.to(this.oldContainer, 1.5,{
                    y: '1%',
                    ease: Expo.easeInOut
                })

                TweenLite.to(_new, 1.5,{
                    y: '0%',
                    ease: Expo.easeInOut
                })

                PRELOADER.remove(function(){

                    TweenLite.to(window, 0, {scrollTo:0});
                    TweenLite.set(_new, {
                        top: 0,
                        left: 0,
                    })
                    setTimeout(function(_new){
                        TweenLite.set('.barba-container', {
                            position: 'relative'
                        })
                    }, 500)
                    _this.done()
                })
            }

        });

        var lastClickEl;
        Barba.Dispatcher.on('linkClicked', function(el) {
          lastClickEl = el;
        });

        Barba.Pjax.getTransition = function(e) {
            var transitionObj = PreloaderAnimation;
            if (lastClickEl.getAttribute('data-transition') == 'case-history') {
                transitionObj = PageAnimation;
            }
            return transitionObj;
        };

        var Homepage = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function() {
                document.querySelector('body').setAttribute('style', '');
                document.querySelector('body').style.overflow = "scroll";
                SHARER.init()
                AREA_PROJECTS.init()
                ANIMATIONS.drawGlass()
                ANIMATIONS.showWords()
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
                if (_w.outerWidth > 768) {
                    ANIMATIONS.fadeIn()
                }
                ANIMATIONS.maskIn()
            },
        });

        var CaseHistory = Barba.BaseView.extend({
            namespace: 'case-history',
            onEnter: function() {
                document.querySelector('body').setAttribute('style', '');
                document.querySelector('body').style.overflow = "scroll";
                TweenLite.set('body', {
                    cursor: 'wait'
                })
            },
            onEnterCompleted: function() {
                TweenLite.set('body', {
                    cursor: 'default'
                })
                SHARER.init()
                AREA_PROJECTS.init()
                ANIMATIONS.bigText()
                ANIMATIONS.showImage()
                ANIMATIONS.headerLine()
                ANIMATIONS.showCircleButtons()
                ANIMATIONS.showWords()

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