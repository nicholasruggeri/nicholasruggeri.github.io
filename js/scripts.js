!function(e){"use strict";var t=function(){function e(){var e,t,o;e=u.querySelectorAll(".animation-fade-in"),t=new ScrollMagic.Controller,o=[],Array.prototype.forEach.call(e,function(n,i){o[i]=new TimelineLite({paused:!1}),o[i].to(n,2,{opacity:1,ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(o[i]).reverse(!1).addTo(t)})}function t(){var e,t,o;e=u.querySelectorAll(".animation-mask:not(.no-animation)"),console.log(e),t=new ScrollMagic.Controller,o=[],Array.prototype.forEach.call(e,function(n,i){o[i]=new TimelineLite({paused:!1}),o[i].to(n.querySelector(".animation-mask__cover"),.5,{x:"0%",ease:Expo.easeIn}).set(n.querySelector(".animation-mask__text"),{opacity:1}).to(n.querySelector(".animation-mask__cover"),.5,{x:"100%",ease:Expo.easeOut}).set(n.querySelector(".animation-mask__cover"),{display:"none"}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(o[i]).reverse(!1).addTo(t)})}function o(){var e,t,o;e=u.querySelectorAll(".animation-slide-y"),t=new ScrollMagic.Controller,o=[],Array.prototype.forEach.call(e,function(n,i){o[i]=new TimelineLite({paused:!1}),o[i].to(n,1,{y:"0%",opacity:1,ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(o[i]).reverse(!1).addTo(t)})}function n(){var e,t;t=new ScrollMagic.Controller,e=u.querySelector(".avatar"),new ScrollMagic.Scene({triggerElement:e,triggerHook:"onEnter"}).on("enter",function(){e.className+=" is-active"}).reverse(!1).addTo(t)}function i(){var e,t,o;t=new ScrollMagic.Controller,e=u.querySelectorAll(".big-text"),o=new TimelineLite({paused:!1}),o.to(e[0],1.5,{x:"-8%",y:"-50%",opacity:1,ease:Cubic.easeOut}),o.to(e[1],1.5,{x:"-8%",y:"-50%",opacity:1,ease:Cubic.easeOut},"-=1"),o.play()}function r(){var e,t;t=new ScrollMagic.Controller,e=u.querySelectorAll(".section-parallax"),Array.prototype.forEach.call(e,function(e,o){new ScrollMagic.Scene({triggerElement:e,duration:2*d.innerHeight,triggerHook:"onEnter"}).setTween(e.querySelectorAll(".section-parallax__element"),{y:"-40%"}).addTo(t)})}function a(){var e,t,o;e=u.querySelectorAll(".m-full-width"),t=new ScrollMagic.Controller,o=[],Array.prototype.forEach.call(e,function(n,i){o[i]=new TimelineLite({paused:!1}),o[i].to(n.querySelectorAll(".m-full-width__cover-l"),1,{y:"-100%",ease:Expo.easeInOut}),o[i].to(n.querySelectorAll(".m-full-width__cover-r"),1,{y:"100%",ease:Expo.easeInOut},"-=.7"),new ScrollMagic.Scene({triggerElement:e[i]}).setTween(o[i]).reverse(!1).addTo(t)})}function l(){var e,t;e=u.getElementById("header__line-loop"),t=new TimelineLite,t.to(e,2.5,{y:"100%",ease:Expo.easeInOut,onComplete:function(){t.restart()}}),t.play()}function c(){var e,t,o;t=new ScrollMagic.Controller,e=u.querySelectorAll(".circle-button"),o=new TimelineLite({paused:!1}),e.length>1?Array.prototype.forEach.call(e,function(e,t){o.to(e,1,{x:0,y:0,ease:Expo.easeInOut})}):o.to(e,1,{y:0,ease:Expo.easeInOut},0),setTimeout(function(){o.play()},0)}function s(){var e=u.querySelector(".list-projects"),t=u.querySelectorAll(".project"),o=new ScrollMagic.Controller,n=new TimelineLite,i=new TimelineLite,r=new TimelineLite,a=new TimelineLite;Array.prototype.forEach.call(t,function(e,o){e.style.zIndex=5-o,n.fromTo(t[o],1,{y:"0%"},{y:"-100%",ease:Linear.easeNone})}),Array.prototype.forEach.call(t,function(e,o){i.fromTo(t[o].querySelector(".project__number"),1,{y:"0%",opacity:.5},{y:"-50%",opacity:1,ease:Linear.easeNone})}),Array.prototype.forEach.call(t,function(e,o){r.fromTo(t[o].querySelector(".content-image"),1,{y:"50%",x:"-50%"},{y:"-50%",x:"-50%",ease:Linear.easeNone})}),Array.prototype.forEach.call(t,function(e,t){a.fromTo(e.querySelector(".project__content-text"),1,{y:"70%"},{y:"-50%",ease:Linear.easeNone})});new ScrollMagic.Scene({triggerElement:e,duration:"400%",triggerHook:"onLeave"}).setPin(e).setTween(n).addTo(o),new ScrollMagic.Scene({triggerElement:e,duration:"400%",triggerHook:"onLeave",offset:-d.innerHeight}).setTween(i).setTween(i).addTo(o),new ScrollMagic.Scene({triggerElement:e,duration:"400%",triggerHook:"onLeave",offset:-d.innerHeight}).setTween(r).addTo(o),new ScrollMagic.Scene({triggerElement:e,duration:"400%",triggerHook:"onLeave",offset:-d.innerHeight}).setTween(a).addTo(o)}var u=document,d=window;return{fadeIn:e,slideY:o,drawGlass:n,bigText:i,parallax:r,showImage:a,headerLine:l,showCircleButtons:c,maskIn:t,parallaxProjects:s}}();e.ANIMATIONS=e.ANIMATIONS||t}(window),function(e){"use strict";var t=function(){function e(){r=[],i=new ScrollMagic.Controller,n=l.querySelectorAll(".animation-cover")}function t(){Array.prototype.forEach.call(n,function(e,t){r[t]=new TimelineLite({paused:!1}),r[t].to(e.querySelector(".animation-cover__mask"),.5,{x:0,ease:Expo.easeOut}).to(e.querySelector(".animation-cover__text"),.3,{y:"0%",ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:n[t],offset:-a.innerHeight/4}).setTween(r[t]).reverse(!1).addTo(i)})}function o(){e(),t()}var n,i,r,a=window,l=document;return{init:o}}();e.AREA_PROJECTS=e.AREA_PROJECTS||t}(window),function(e){"use strict";var t=function(){function e(){}return{init:e}}();e.COUNTDOWN=e.COUNTDOWN||t}(window),function(e){"use strict";var t=function(){function e(){i=d.querySelectorAll(".header__title i"),r=d.getElementsByClassName("header__title-mask")[0],a=d.querySelectorAll(".header__subtitle i"),l=d.getElementsByClassName("header__subtitle-mask")[0],c=d.querySelectorAll(".big-text"),s=d.getElementById("header__line-loop")}function t(){u=new TimelineLite,u.to(s,2.5,{y:"100%",ease:Expo.easeInOut,onComplete:function(){u.restart()}}),u.play()}function o(){var e=new TimelineLite({paused:!0,onComplete:function(e){e&&e()}});e.to(r,.5,{x:0,ease:Expo.easeIn,onComplete:function(){TweenLite.to(i,.5,{y:"0%",ease:Expo.easeOut})}},".5"),e.to(l,.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){TweenLite.to(a,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),setTimeout(function(){e.play()},0)}function n(){e(),o(),t()}var i,r,a,l,c,s,u,d=document;return{init:n}}();e.INTRO=e.INTRO||t}(window),function(e){"use strict";var t=function(){function e(){r=y.querySelector(".trigger-projects-menu"),l=y.querySelectorAll(".projects-menu__title"),c=y.querySelectorAll(".project-menu__first .projects-menu__title"),s=y.querySelectorAll(".project-menu__second .projects-menu__title"),a=y.querySelector(".projects-menu")}function t(){Array.prototype.forEach.call(l,function(e,t){e.addEventListener("mouseover",function(e){a.classList.add(e.target.attributes[2].nodeValue)}),e.addEventListener("mouseout",function(){a.classList.remove("is-ciak"),a.classList.remove("is-molteni"),a.classList.remove("is-snap"),a.classList.remove("is-weatherymood")})}),r.addEventListener("click",function(e){r.classList.contains("is-active")?(r.classList.remove("is-active"),y.querySelector("body").style.overflow="scroll",y.querySelector("body").setAttribute("style",""),n()):(r.classList.add("is-active"),y.querySelector("body").style.overflow="hidden",y.querySelector("body").style.position="fixed",o())})}function o(){var e;u=new TimelineLite({paused:!1}),u.to(a,.5,{display:"flex",opacity:1,ease:Expo.easeOut}),d=new TimelineLite({paused:!1}),d.to(a,.5,{display:"flex",opacity:1,ease:Expo.easeOut}),Array.prototype.forEach.call(c,function(t,o){e=0==o?"+=0":"-=.9",u.to(t,1.5,{opacity:1,x:0,ease:Cubic.easeOut},e)}),Array.prototype.forEach.call(s,function(t,o){e=0==o?"+=.3":"-=.6",d.to(t,1.5,{opacity:1,x:0,ease:Cubic.easeOut},e)}),u.play(),d.play()}function n(){u=new TimelineLite({paused:!1}),u.to(a,.5,{opacity:0,display:"none",ease:Expo.easeOut}),u.play()}function i(){e(),t()}var r,a,l,c,s,u,d,y=document;window;return{init:i}}();e.LIST_PROJECTS=e.LIST_PROJECTS||t}(window),function(e){"use strict";var t=function(){function e(){ROUTING.init()}function t(){var t=document,o="font-size:10px;color:#f9f9f9;background:#1a1a1a;padding:10px 7px;";console.log(" "),console.style('<css="'+o+'">www.ruggeri.io</css>'),console.log(" "),console.style('<img="background:url(http://cultofthepartyparrot.com/parrots/parrot.gif);width:30px;height:21.4px">'),console.log(" "),"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?t.querySelector("body").classList.add("is-touch"):t.querySelector("body").classList.add("no-touch"),PRELOADER.remove(function(){e()})}return{init:t}}();window.onload=function(){t.init()}}(window),function(e){"use strict";var t=function(){function e(e){r.style.height="100%";var t=new TimelineLite({paused:!0,onComplete:function(){e&&e()}});t.set(a,{zIndex:9999999999}),t.to(r,1,{opacity:1,ease:Expo.easeInOut},"-=1"),t.to(d,1,{x:"0%",ease:Expo.easeInOut,onComplete:function(){TweenLite.to(window,.2,{scrollTo:0})}}),t.to(r,1.5,{height:"20%",ease:Expo.easeInOut}),setTimeout(function(){t.play()},0)}function t(e){TweenLite.to(window,.2,{scrollTo:0});var t=new TimelineLite({paused:!0,onComplete:function(){e&&e()}});t.to(r,1,{height:"100%",ease:Expo.easeIn}),t.to(d,1,{x:"101%",ease:Expo.easeOut}),t.to(r,1,{opacity:0,ease:Expo.easeInOut},"-=1"),t.set(a,{zIndex:-1}),setTimeout(function(){t.play()},0)}function o(){var e=new TimelineLite({paused:!0,onComplete:function(){alert();var e="is-load";i.classList?i.classList.add(e):i.className+=" "+e}});e.to(r,1,{height:"95%",ease:Expo.easeInOut}),e.to(d,1,{x:"101%",ease:Expo.easeInOut}),e.to(r,1,{opacity:0,ease:Expo.easeInOut},"-=1"),e.to(c,.5,{x:0,ease:Expo.easeIn,onComplete:function(){TweenLite.to(l,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),e.to(u,.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){TweenLite.to(s,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),e.set(a,{zIndex:-1}),setTimeout(function(){e.play()},0)}var n=document,i=n.getElementsByTagName("body")[0],r=n.getElementsByClassName("preloader")[0],a=n.getElementsByClassName("content-preloader")[0],l=n.querySelectorAll(".header__title i"),c=n.getElementsByClassName("header__title-mask")[0],s=n.querySelectorAll(".header__subtitle i"),u=n.getElementsByClassName("header__subtitle-mask")[0],d=n.getElementsByClassName("content-preloader__mask");return{init:o,remove:t,show:e}}();e.PRELOADER=e.PRELOADER||t}(window),function(e){"use strict";var t=function(){function e(){i.init(),r.init(),Barba.Pjax.start(),Barba.Prefetch.init()}var t=window,o=document.querySelector("body"),n=Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.showPreloader()]).then(this.hidePreloader.bind(this))},showPreloader:function(){return new Promise(function(e){PRELOADER.show(e)})},hidePreloader:function(){var e=this,t=this.newContainer,o=this.oldContainer;o.style.display="none",t.style.visibility="visible",PRELOADER.remove(function(){e.done()})}});Barba.Pjax.getTransition=function(){return n};var i=Barba.BaseView.extend({namespace:"homepage",onEnter:function(){document.querySelector("body").setAttribute("style",""),document.querySelector("body").style.overflow="scroll",SHARER.init(),AREA_PROJECTS.init(),ANIMATIONS.drawGlass(),o.classList.contains("no-touch")&&ANIMATIONS.parallaxProjects()},onEnterCompleted:function(){SCROLLTO.init(),INTRO.init(),ANIMATIONS.bigText(),ANIMATIONS.headerLine(),ANIMATIONS.showCircleButtons(),t.outerWidth>768&&ANIMATIONS.fadeIn(),ANIMATIONS.maskIn()}}),r=Barba.BaseView.extend({namespace:"case-history",onEnter:function(){document.querySelector("body").setAttribute("style",""),document.querySelector("body").style.overflow="scroll"},onEnterCompleted:function(){SHARER.init(),AREA_PROJECTS.init(),SCROLLTO.init(),ANIMATIONS.bigText(),ANIMATIONS.showImage(),ANIMATIONS.headerLine(),ANIMATIONS.showCircleButtons(),ANIMATIONS.fadeIn(),ANIMATIONS.slideY(),ANIMATIONS.maskIn(),LIST_PROJECTS.init()}});return{init:e}}();e.ROUTING=e.ROUTING||t}(window),function(e){"use strict";var t=function(){function e(){n=l.getElementsByClassName("scroll-to"),r=l.querySelectorAll(".section-header .scroll-to"),i=new ScrollMagic.Controller}function t(){new ScrollMagic.Scene({triggerElement:r,triggerHook:"onLeave",offset:-a.innerHeight/3}).setTween(r,1,{y:"-100%",opacity:0,ease:Expo.easeInOut,onComplete:function(){r[0].style.display="none"}}).reverse(!1).addTo(i),r[0].addEventListener("click",function(){setTimeout(function(){TweenLite.to(a,1,{scrollTo:a.innerHeight/1.25,ease:Quint.easeInOut})},0)}),n[1].addEventListener("click",function(){setTimeout(function(){TweenLite.to(a,1,{scrollTo:0,ease:Quint.easeInOut})},0)})}function o(){e(),t()}var n,i,r,a=window,l=document;return{init:o}}();e.SCROLLTO=e.SCROLLTO||t}(window),function(e){"use strict";var t=function(){function e(e,t,o){e&&(t=t?t:600,o=o?o:600,n={left:screen.width/2-t/2,top:screen.height/2-o/2},window.open(e,"Share","width="+t+",height="+o+",left="+n.left+",top="+n.top))}function t(t){e(t,626,436)}function o(){return void 0===a?!1:void a.addEventListener("click",function(e){i=e.target.getAttribute("href"),e.preventDefault(),e.stopPropagation(),t(i)})}var n,i,r=document,a=r.getElementsByClassName("trigger-share")[0];return{init:o}}();e.SHARER=e.SHARER||t}(window);