(function(exports) {

    'use strict';

    var MAIN = (function() {

        function _defer() {
            ROUTING.init()
        }

        function loadProgressHandler(loader, resource) {

            //Display the file `url` currently being loaded
            console.log("loading: " + resource.url);

            //Display the precentage of files currently loaded
            console.log("progress: " + loader.progress + "%");

            //If you gave your files names as the first argument
            //of the `add` method, you can access them like this
            //console.log("loading: " + resource.name);
        }

        function _initPixi() {

            var stage = new PIXI.Container();

            PIXI.loader
              .add([
                    "http://www.pleasetrump.it/1000x1000",
                    "http://www.pleasetrump.it/1000x1011",
                    "http://www.pleasetrump.it/1000x1004",
                    "http://www.pleasetrump.it/1000x10"
              ])
              .on("progress", loadProgressHandler)
              .load(setup);

            //Create the renderer
            var renderer = PIXI.autoDetectRenderer(500, 500, {transparent: true, resolution: 2});
            renderer.view.style.position = "fixed";
            renderer.view.style.display = "block";
            renderer.autoResize = true;
            renderer.resize(window.outerWidth, window.outerHeight);

            var mask = new PIXI.Graphics();
            var lineBg = new PIXI.Graphics();
            var lineAnim = new PIXI.Graphics();

            mask.lineStyle(1, 0x000000, 1);
            mask.moveTo(0, -window.innerHeight/10);
            mask.lineTo(0, window.innerHeight/10);
            mask.x = window.innerWidth/2;
            mask.y = window.innerHeight/2;

            console.log(mask.width)

            lineBg.lineStyle(1, 0xff0000, 1);
            lineBg.moveTo(0, 0);
            lineBg.lineTo(0, window.innerWidth);
            lineBg.x = window.innerWidth/2;
            lineBg.y = 0;
            lineBg.mask = mask;

            lineAnim.lineStyle(1, 0x0000ff, 1);
            lineAnim.moveTo(0, -window.innerWidth/10);
            lineAnim.lineTo(0, window.innerWidth/10);
            lineAnim.x = window.innerWidth/2;
            lineAnim.y = window.innerHeight/2 - (window.innerWidth/10*2);
            lineAnim.mask = mask;

            //Add the canvas to the HTML document
            document.body.appendChild(renderer.view);

            //Create a container object called the `stage`

            stage.addChild(mask);
            stage.addChild(lineBg);
            stage.addChild(lineAnim);

            var tween = TweenLite.to(lineAnim, 2.5, {
                y: window.innerHeight/2 + (window.innerWidth/10*2),
                ease: Quint.easeInOut,
                onComplete: function(){
                    tween.restart()
                },
                onReverseComplete: function(){
                    tween.reverse()
                }
            });

            function setup() {
                console.log("All files loaded");
                TweenLite.to(mask, 1.5, {
                    y: window.innerHeight/2,
                    height: window.innerHeight,
                    ease: Expo.easeInOut
                });
                TweenLite.to(lineAnim, .5, {
                    alpha: 0,
                });
            }

            TweenLite.ticker.addEventListener('tick', function(){
                renderer.render(stage);
            })

        }

        function _init() {

            // _initPixi()

            var css = 'font-size:10px;color:#f9f9f9;background:#1a1a1a;padding:10px 7px;';
            console.log(' ')
            console.style('<css="' + css + '">www.ruggeri.io</css>');
            console.log(' ')
            console.style('<img="background:url(http://cultofthepartyparrot.com/parrots/parrot.gif);width:30px;height:21.4px">');
            console.log(' ')

            PRELOADER.remove(function(){
                _defer()
            })
        }

        return {
            init: _init
        }

    }());

    // exports.MAIN = exports.MAIN || MAIN;

    window.onload = function(){
        MAIN.init()
    };

}(window));