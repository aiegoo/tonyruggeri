!function(e){"use strict";var t=function(){function e(){var e,t,n;e=c.querySelectorAll(".animation-fade-in"),t=new ScrollMagic.Controller,n=[],Array.prototype.forEach.call(e,function(o,i){n[i]=new TimelineLite({paused:!1}),n[i].to(o,2,{opacity:1,ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(n[i]).reverse(!1).addTo(t)})}function t(){var e,t,n;e=c.querySelectorAll(".animation-y"),t=new ScrollMagic.Controller,n=[],Array.prototype.forEach.call(e,function(o,i){n[i]=new TimelineLite({paused:!1}),n[i].to(o.children,1,{y:"0%",opacity:1,ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(n[i]).reverse(!1).addTo(t)})}function n(){var e,t,n;e=c.querySelectorAll(".animation-slide-y"),t=new ScrollMagic.Controller,n=[],Array.prototype.forEach.call(e,function(o,i){n[i]=new TimelineLite({paused:!1}),n[i].to(o,1,{y:"0%",opacity:1,ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:e[i],triggerHook:"onEnter"}).setTween(n[i]).reverse(!1).addTo(t)})}function o(){var e,t;t=new ScrollMagic.Controller,e=c.querySelector(".avatar"),new ScrollMagic.Scene({triggerElement:e,triggerHook:"onEnter"}).on("enter",function(){e.className+=" is-active"}).reverse(!1).addTo(t)}function i(){var e,t,n;t=new ScrollMagic.Controller,e=c.querySelectorAll(".big-text"),n=new TimelineLite({paused:!1}),n.to(e[0],1.5,{x:"-8%",y:"-50%",opacity:1,ease:Cubic.easeOut}),n.to(e[1],1.5,{x:"-8%",y:"-50%",opacity:1,ease:Cubic.easeOut},"-=1"),n.play()}function r(){var e,t;t=new ScrollMagic.Controller,e=c.querySelectorAll(".section-parallax"),Array.prototype.forEach.call(e,function(e,n){new ScrollMagic.Scene({triggerElement:e,duration:2*u.innerHeight,triggerHook:"onEnter"}).setTween(e.querySelectorAll(".section-parallax__element"),{y:"-40%"}).addTo(t)})}function a(){var e,t,n;e=c.querySelectorAll(".m-full-width"),t=new ScrollMagic.Controller,n=[],Array.prototype.forEach.call(e,function(o,i){n[i]=new TimelineLite({paused:!1}),n[i].to(o.querySelectorAll(".m-full-width__cover-l"),1,{y:"-100%",ease:Expo.easeInOut}),n[i].to(o.querySelectorAll(".m-full-width__cover-r"),1,{y:"100%",ease:Expo.easeInOut},"-=.7"),new ScrollMagic.Scene({triggerElement:e[i]}).setTween(n[i]).reverse(!1).addTo(t)})}function l(){var e,t;e=c.getElementById("header__line-loop"),t=new TimelineLite,t.to(e,2.5,{y:"100%",ease:Expo.easeInOut,onComplete:function(){t.restart()}}),t.play()}function s(){var e,t,n;t=new ScrollMagic.Controller,e=c.querySelectorAll(".circle-button"),n=new TimelineLite({paused:!1}),e.length>1?Array.prototype.forEach.call(e,function(e,t){n.to(e,.5,{x:0,y:0,ease:Expo.easeInOut})}):n.to(e,1.5,{delay:1.5,y:0,ease:Expo.easeInOut}),n.play()}var c=document,u=window;return{fadeIn:e,slideY:n,translateY:t,drawGlass:o,bigText:i,parallax:r,showImage:a,headerLine:l,showCircleButtons:s}}();e.ANIMATIONS=e.ANIMATIONS||t}(window),function(e){"use strict";var t=function(){function e(){r=[],i=new ScrollMagic.Controller,o=l.querySelectorAll(".animation-cover")}function t(){Array.prototype.forEach.call(o,function(e,t){r[t]=new TimelineLite({paused:!1}),r[t].to(e.querySelector(".animation-cover__mask"),.5,{x:0,ease:Expo.easeOut}).to(e.querySelector(".animation-cover__text"),.3,{y:"0%",ease:Expo.easeOut}),new ScrollMagic.Scene({triggerElement:o[t],offset:-a.innerHeight/4}).setTween(r[t]).reverse(!1).addTo(i)})}function n(){e(),t()}var o,i,r,a=window,l=document;return{init:n}}();e.AREA_PROJECTS=e.AREA_PROJECTS||t}(window),function(e){"use strict";var t=function(){function e(){}return{init:e}}();e.COUNTDOWN=e.COUNTDOWN||t}(window),function(e){"use strict";var t=function(){function e(){i=d.querySelectorAll(".header__title i"),r=d.getElementsByClassName("header__title-mask")[0],a=d.querySelectorAll(".header__subtitle i"),l=d.getElementsByClassName("header__subtitle-mask")[0],s=d.querySelectorAll(".big-text"),c=d.getElementById("header__line-loop")}function t(){u=new TimelineLite,u.to(c,2.5,{y:"100%",ease:Expo.easeInOut,onComplete:function(){u.restart()}}),u.play()}function n(){var e=new TimelineLite({paused:!0,onComplete:function(e){e&&e()}});e.to(r,.5,{x:0,ease:Expo.easeIn,onComplete:function(){TweenLite.to(i,.5,{y:"0%",ease:Expo.easeOut})}},".5"),e.to(l,.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){TweenLite.to(a,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),setTimeout(function(){e.play()},0)}function o(){e(),n(),t()}var i,r,a,l,s,c,u,d=document;return{init:o}}();e.INTRO=e.INTRO||t}(window),function(e){"use strict";var t=function(){function e(){r=p.querySelector(".trigger-projects-menu"),l=p.querySelectorAll(".projects-menu__title"),s=p.querySelectorAll(".project-menu__first .projects-menu__title"),c=p.querySelectorAll(".project-menu__second .projects-menu__title"),a=p.querySelector(".projects-menu")}function t(){Array.prototype.forEach.call(l,function(e,t){e.addEventListener("mouseover",function(e){a.classList.add(e.target.attributes[2].nodeValue)}),e.addEventListener("mouseout",function(){a.classList.remove("is-ciak"),a.classList.remove("is-molteni"),a.classList.remove("is-snap"),a.classList.remove("is-weatherymood")})}),r.addEventListener("click",function(e){r.classList.contains("is-active")?(r.classList.remove("is-active"),p.querySelector("body").style.overflow="scroll",p.querySelector("body").style.position="relative",o()):(r.classList.add("is-active"),p.querySelector("body").style.overflow="hidden",p.querySelector("body").style.position="fixed",n())})}function n(){var e;u=new TimelineLite({paused:!1}),u.to(a,.5,{display:"flex",opacity:1,ease:Expo.easeOut}),d=new TimelineLite({paused:!1}),d.to(a,.5,{display:"flex",opacity:1,ease:Expo.easeOut}),Array.prototype.forEach.call(s,function(t,n){e=0==n?"+=0":"-=.9",u.to(t,1.5,{opacity:1,x:0,ease:Cubic.easeOut},e)}),Array.prototype.forEach.call(c,function(t,n){e=0==n?"+=.3":"-=.6",d.to(t,1.5,{opacity:1,x:0,ease:Cubic.easeOut},e)}),u.play(),d.play()}function o(){u=new TimelineLite({paused:!1}),u.to(a,.5,{opacity:0,display:"none",ease:Expo.easeOut}),u.play()}function i(){e(),t()}var r,a,l,s,c,u,d,p=document;window;return{init:i}}();e.LIST_PROJECTS=e.LIST_PROJECTS||t}(window),function(e){"use strict";var t=function(){function e(){ROUTING.init()}function t(){var t="font-size:10px;color:#f9f9f9;background:#1a1a1a;padding:10px 7px;";console.log(" "),console.style('<css="'+t+'">www.ruggeri.io</css>'),console.log(" "),console.style('<img="background:url(http://cultofthepartyparrot.com/parrots/parrot.gif);width:30px;height:21.4px">'),console.log(" "),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&document.querySelector("body").classList.add("is-touch"),PRELOADER.remove(function(){e()})}return{init:t}}();window.onload=function(){t.init()}}(window),function(e){"use strict";var t=function(){function e(e){r.style.height="100%";var t=new TimelineLite({paused:!0,onComplete:function(){e&&e()}});t.set(a,{zIndex:9999999999}),t.to(r,1,{opacity:1,ease:Expo.easeInOut},"-=1"),t.to(d,1,{x:"0%",ease:Expo.easeInOut,onComplete:function(){TweenLite.to(window,.2,{scrollTo:0})}}),t.to(r,1.5,{height:"20%",ease:Expo.easeInOut}),setTimeout(function(){t.play()},0)}function t(e){TweenLite.to(window,.2,{scrollTo:0});var t=new TimelineLite({paused:!0,onComplete:function(){e&&e()}});t.to(r,1,{height:"100%",ease:Expo.easeIn}),t.to(d,1,{x:"101%",ease:Expo.easeOut}),t.to(r,1,{opacity:0,ease:Expo.easeInOut},"-=1"),t.set(a,{zIndex:-1}),setTimeout(function(){t.play()},0)}function n(){var e=new TimelineLite({paused:!0,onComplete:function(){alert();var e="is-load";i.classList?i.classList.add(e):i.className+=" "+e}});e.to(r,1,{height:"95%",ease:Expo.easeInOut}),e.to(d,1,{x:"101%",ease:Expo.easeInOut}),e.to(r,1,{opacity:0,ease:Expo.easeInOut},"-=1"),e.to(s,.5,{x:0,ease:Expo.easeIn,onComplete:function(){TweenLite.to(l,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),e.to(u,.5,{x:0,delay:.3,ease:Expo.easeIn,onComplete:function(){TweenLite.to(c,.5,{y:"0%",ease:Expo.easeOut})}},"-=0.5"),e.set(a,{zIndex:-1}),setTimeout(function(){e.play()},0)}var o=document,i=o.getElementsByTagName("body")[0],r=o.getElementsByClassName("preloader")[0],a=o.getElementsByClassName("content-preloader")[0],l=o.querySelectorAll(".header__title i"),s=o.getElementsByClassName("header__title-mask")[0],c=o.querySelectorAll(".header__subtitle i"),u=o.getElementsByClassName("header__subtitle-mask")[0],d=o.getElementsByClassName("content-preloader__mask");return{init:n,remove:t,show:e}}();e.PRELOADER=e.PRELOADER||t}(window),function(e){"use strict";var t=function(){function e(){n.init(),o.init(),Barba.Pjax.start(),Barba.Prefetch.init()}var t=Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.showPreloader()]).then(this.hidePreloader.bind(this))},showPreloader:function(){return new Promise(function(e){PRELOADER.show(e)})},hidePreloader:function(){var e=this,t=this.newContainer,n=this.oldContainer;n.style.display="none",t.style.visibility="visible",PRELOADER.remove(function(){e.done()})}});Barba.Pjax.getTransition=function(){return t};var n=Barba.BaseView.extend({namespace:"homepage",onEnter:function(){document.querySelector("body").style.overflow="scroll",document.querySelector("body").style.overflow="scroll",SHARER.init(),AREA_PROJECTS.init(),ANIMATIONS.drawGlass(),ANIMATIONS.parallax()},onEnterCompleted:function(){SCROLLTO.init(),INTRO.init(),ANIMATIONS.bigText(),ANIMATIONS.headerLine(),ANIMATIONS.showCircleButtons(),ANIMATIONS.fadeIn(),ANIMATIONS.slideY(),ANIMATIONS.translateY()}}),o=Barba.BaseView.extend({namespace:"case-history",onEnter:function(){document.querySelector("body").style.overflow="scroll"},onEnterCompleted:function(){SHARER.init(),AREA_PROJECTS.init(),SCROLLTO.init(),COUNTDOWN.init(),ANIMATIONS.bigText(),ANIMATIONS.showImage(),ANIMATIONS.headerLine(),ANIMATIONS.showCircleButtons(),ANIMATIONS.fadeIn(),ANIMATIONS.slideY(),ANIMATIONS.translateY(),LIST_PROJECTS.init()}});return{init:e}}();e.ROUTING=e.ROUTING||t}(window),function(e){"use strict";var t=function(){function e(){o=l.getElementsByClassName("scroll-to"),r=l.querySelectorAll(".section-header .scroll-to"),i=new ScrollMagic.Controller}function t(){new ScrollMagic.Scene({triggerElement:r,triggerHook:"onLeave",offset:-a.innerHeight/3}).setTween(r,1,{y:"-100%",opacity:0,ease:Expo.easeInOut,onComplete:function(){r[0].style.display="none"}}).reverse(!1).addTo(i),r[0].addEventListener("click",function(){setTimeout(function(){TweenLite.to(a,1,{scrollTo:a.innerHeight/1.25,ease:Quint.easeInOut})},0)}),o[1].addEventListener("click",function(){setTimeout(function(){TweenLite.to(a,1,{scrollTo:0,ease:Quint.easeInOut})},0)})}function n(){e(),t()}var o,i,r,a=window,l=document;return{init:n}}();e.SCROLLTO=e.SCROLLTO||t}(window),function(e){"use strict";var t=function(){function e(e,t,n){e&&(t=t?t:600,n=n?n:600,o={left:screen.width/2-t/2,top:screen.height/2-n/2},window.open(e,"Share","width="+t+",height="+n+",left="+o.left+",top="+o.top))}function t(t){e(t,626,436)}function n(){return void 0===a?!1:void a.addEventListener("click",function(e){i=e.target.getAttribute("href"),e.preventDefault(),e.stopPropagation(),t(i)})}var o,i,r=document,a=r.getElementsByClassName("trigger-share")[0];return{init:n}}();e.SHARER=e.SHARER||t}(window);