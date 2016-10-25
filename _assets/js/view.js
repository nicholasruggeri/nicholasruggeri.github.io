(function(exports) {

    'use strict';

    var ROUTING = (function() {

        var FadeTransition = Barba.BaseTransition.extend({
          start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
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

            PRELOADER.remove()
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */
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
            /**
            * Here you can use your own logic!
            * For example you can use different Transition based on the current page or link...
            */
            return FadeTransition;
        };

        var Homepage = Barba.BaseView.extend({
            namespace: 'homepage',
            onEnter: function() {
                // The new Container is ready and attached to the DOM.
            },
            onEnterCompleted: function() {
                PAGE_HP.init()
                PAGE_PROJECTS.init()
                MAIN.scrollTo()
                // The Transition has just finished.
            },
            onLeave: function() {
                console.log('asd3')
                // A new Transition toward a new page has just started.
            },
            onLeaveCompleted: function() {
                console.log('asd4')
                // The Container has just been removed from the DOM.
            }
        });


        var About = Barba.BaseView.extend({
            namespace: 'about',
            onEnter: function() {
                console.log('onEnter ABOUT')
            },
            onEnterCompleted: function() {
                PAGE_ABOUT.init()
                INTRO.init()
                MAIN.scrollTo()
                console.log('onEnterCompleted ABOUT')
            }
        });

        function _init() {
            Homepage.init();
            About.init();
            Barba.Pjax.start();
        }

        return {
            init: _init
        }

    }());

    exports.ROUTING = exports.ROUTING || ROUTING;

}(window));