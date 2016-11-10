(function(exports) {

    'use strict';

    var ROUTING = (function() {

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
                SHARER.init()
                AREA_PROJECTS.init()
                AREA_ABOUT.init()
                // The new Container is ready and attached to the DOM.
            },
            onEnterCompleted: function() {
                SCROLLTO.init()
                INTRO.init()
                AREA_BIGTEXT.init()
                // The Transition has just finished.
            },
            // onLeave: function() {
            //     // A new Transition toward a new page has just started.
            // },
            // onLeaveCompleted: function() {
            //     // The Container has just been removed from the DOM.
            // }
        });


        // var About = Barba.BaseView.extend({
        //     namespace: 'about',
        //     onEnter: function() {
        //     },
        //     onEnterCompleted: function() {
        //         INTRO.init()
        //         AREA_BIGTEXT.init()
        //     }
        // });

        function _init() {
            // console.log('ROUTING init')
            Homepage.init();
            // About.init();
            Barba.Pjax.start();
        }

        return {
            init: _init
        }

    }());

    exports.ROUTING = exports.ROUTING || ROUTING;

}(window));