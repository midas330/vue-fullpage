/*!
 * vue-fullpage.js v0.1.2
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullpageJs"] = factory();
	else
		root["VueFullpageJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.4 - Extensions 0.1.7
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e.fullpage=o(t,n),e.fullpage}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(Vt,Zt){"use strict";var Gt="fullpage-wrapper",Ft="."+Gt,Ut="fp-responsive",_t="fp-notransition",Qt="fp-destroyed",Jt="fp-enabled",Kt="fp-viewing",qt="active",$t="."+qt,en="fp-completely",tn="fp-section",nn="."+tn,on=nn+$t,rn="fp-tableCell",ln="."+rn,an="fp-auto-height",sn="fp-normal-scroll",cn="fp-nav",un="#"+cn,fn="fp-tooltip",dn="fp-slide",vn="."+dn,pn=vn+$t,hn="fp-slides",gn="."+hn,mn="fp-slidesContainer",Sn="."+mn,bn="fp-table",wn="fp-slidesNav",yn="."+wn,En=yn+" a",e="fp-controlArrow",xn="."+e,An="fp-prev",Ln=xn+".fp-prev",Mn=xn+".fp-next";function Tn(e,t){Vt.console&&Vt.console[e]&&Vt.console[e]("fullPage: "+t)}function On(e,t){return(t=1<arguments.length?t:Zt)?t.querySelectorAll(e):null}function kn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=kn(e[r],o[r]))}return e}function Cn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Hn(){return"innerHeight"in Vt?Vt.innerHeight:Zt.documentElement.offsetHeight}function Rn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!to(o,t);)o=o[n];return o}function In(e,t){return n(e,t,"previousElementSibling")}function zn(e,t){return n(e,t,"nextElementSibling")}function Bn(e,t){if(null==t)return e.previousElementSibling;var n=Bn(e);return n&&to(n,t)?n:null}function Nn(e,t){if(null==t)return e.nextElementSibling;var n=Nn(e);return n&&to(n,t)?n:null}function jn(e){return e[e.length-1]}function Pn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?On(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Yn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function Dn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Wn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Xn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function Vn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Zt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function Zn(e,t){o(e,t,!0)}function Gn(e,t){for("string"==typeof t&&(t=oo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Fn(e){for(var t=Zt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Un(e,t){return e&&1===e.nodeType?to(e,t)?e:Un(e.parentNode,t):null}function _n(e,t){r(e,e.nextSibling,t)}function Qn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=oo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Jn(){var e=Zt.documentElement;return(Vt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Kn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function qn(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function $n(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function eo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Vt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Zt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function to(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function no(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function oo(e){var t=Zt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function ro(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(to(o,t)||null==t)&&r.push(o),o=o[n];return r}function io(e,t){return a(e,t,"nextElementSibling")}function lo(e,t){return a(e,t,"previousElementSibling")}function ao(e,t){e.insertBefore(t,e.firstChild)}return Vt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Vt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Vt.fp_utils={$:On,deepExtend:kn,hasClass:Cn,getWindowHeight:Hn,css:Rn,until:n,prevUntil:In,nextUntil:zn,prev:Bn,next:Nn,last:jn,index:Pn,getList:l,hide:Yn,show:Dn,isArrayOrList:i,addClass:Wn,removeClass:Xn,appendTo:Vn,wrap:o,wrapAll:Zn,wrapInner:Gn,unwrap:Fn,closest:Un,after:_n,before:Qn,insertBefore:r,getScrollTop:Jn,siblings:Kn,preventDefault:qn,isFunction:$n,trigger:eo,matches:to,toggle:no,createElementFromHTML:oo,remove:ro,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:io,prevAll:lo,showError:Tn,prependTo:ao,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Cn(e,t);o&&null==n||!n?Xn(e,t):(!o&&null==n||n)&&Wn(e,t)}}},function(e,g){var t=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<Zt.domain.indexOf("alvarotrigo.com");if(!Cn(On("html"),Jt)){var r=On("html, body"),m=On("body")[0],S={};g=kn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Vt.fp_scrolloverflow?Vt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,i,c,u,a=!1,n=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),o="ontouchstart"in Vt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?On(e)[0]:e,y=Hn(),E=!1,l=!0,x=!0,f=[],d={m:{up:!0,down:!0,left:!0,right:!0}};d.k=kn({},d.m);var v,s,p,h,A,L,M,T,O,k=Lt(),C={touchmove:"ontouchmove"in Vt?"touchmove":k.move,touchstart:"ontouchstart"in Vt?"touchstart":k.down},H=!1,R='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',I=kn({},g),z=!1,B={};jt(),Vt.fp_easings=kn(Vt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.2",S.setAutoScrolling=_,S.setRecordHistory=Q,S.setScrollingSpeed=J,S.setFitToSection=K,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=q,S.setAllowScrolling=$,S.setKeyboardScrolling=te,S.moveSectionUp=ne,S.moveSectionDown=oe,S.silentMoveTo=re,S.moveTo=ie,S.moveSlideRight=le,S.moveSlideLeft=ae,S.fitToSection=be,S.reBuild=se,S.setResponsive=ce,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:d,getDestinationPosition:ke,isTouch:o,c:Fe,getXmovement:pt,removeAnimation:ft,getTransforms:kt,lazyLoad:je,addAnimation:ut,performHorizontalMove:at,landscapeScroll:rt,silentLandscapeScroll:Tt,keepSlidesPosition:Oe,silentScroll:Ot,styleSlides:pe,scrollHandler:Se,getEventsPage:Mt,getMSPointer:Lt,isReallyTouch:xe,usingExtension:Rt,toggleControlArrows:it,touchStartHandler:Ae,touchMoveHandler:Ee}}},S.destroy=function(e){eo(w,"destroy",e),_(!1,"internal"),$(!0),ee(!1),te(!1),Wn(w,Qt),clearTimeout(h),clearTimeout(p),clearTimeout(s),clearTimeout(A),clearTimeout(L),Vt.removeEventListener("scroll",Se),Vt.removeEventListener("hashchange",Qe),Vt.removeEventListener("resize",st),Zt.removeEventListener("keydown",Ke),Zt.removeEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.removeEventListener(e,ue)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Zt.removeEventListener(e,de,!0)}),Rt("dragAndMove")&&S.dragAndMove.destroy(),clearTimeout(h),clearTimeout(p),e&&(Ot(0),On("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Ne(e,"src")}),On("img[data-srcset]").forEach(function(e){Ne(e,"srcset")}),ro(On(un+", "+yn+", "+xn)),Rn(On(nn),{height:"","background-color":"",padding:""}),Rn(On(vn),{width:""}),Rn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Rn(r,{overflow:"",height:""}),Xn(On("html"),Jt),Xn(m,Ut),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(Kt)&&Xn(m,e)}),On(nn+", "+vn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),Xn(e,bn+" "+qt+" "+en);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Cn(e,tn)&&!z&&e.removeAttribute("data-anchor")}),Ht(w),[ln,Sn,gn].forEach(function(e){On(e,w).forEach(function(e){Fn(e)})}),Vt.scrollTo(0,0),[tn,dn,mn].forEach(function(e){Xn(On("."+e),e)}))},S.getActiveSection=function(){return new Wt(On(on)[0])},S.getActiveSlide=function(){return Ie(On(pn,On(on)[0])[0])},S.landscapeScroll=rt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<On(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:_},S.shared={afterRenderActions:me},Vt.fullpage_api=S,ve("continuousHorizontal"),ve("scrollHorizontally"),ve("resetSliders"),ve("interlockedSlides"),ve("responsiveSlides"),ve("fadingEffect"),ve("dragAndMove"),ve("offsetSections"),ve("scrollOverflowReset"),ve("parallax"),Rt("dragAndMove")&&S.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=Zt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",Zt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Vt.getComputedStyle(t).getPropertyValue(n[o]));return Zt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=On(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&(z=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var e="[data-tooltip]",n=On(g.sectionSelector.split(",").join(e+",")+e,w);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Rn(w,{height:"100%",position:"relative"}),Wn(w,Gt),Wn(On("html"),Jt),y=Hn(),Xn(w,Qt),Wn(On(g.sectionSelector,w),tn),Wn(On(g.slideSelector,w),dn),It("parallax","init");for(var e=On(nn),t=0;t<e.length;t++){var n=t,o=e[t],r=On(vn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=On(on)[0]||Wn(s,qt),u=On(on)[0],Rn(s,{height:he(s)+"px"}),g.paddingTop&&Rn(s,{"padding-top":g.paddingTop}),g.paddingBottom&&Rn(s,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[c]&&Rn(s,{"background-color":g.sectionsColor[c]}),void 0!==g.anchors[c]&&s.setAttribute("data-anchor",g.anchors[c]),l=o,a=n,void 0!==g.anchors[a]&&Cn(l,qt)&&dt(g.anchors[a],a),g.menu&&g.css3&&null!=Un(On(g.menu)[0],Ft)&&m.appendChild(On(g.menu)[0]),0<i?pe(o,r,i):g.verticalCentered&&ht(o)}var l,a,s,c;g.fixedElements&&g.css3&&On(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=Zt.createElement("div");e.setAttribute("id",cn);var t=Zt.createElement("ul");e.appendChild(t),Vn(e,m);var n=On(un)[0];Wn(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&Wn(n,"fp-show-active");for(var o="",r=0;r<On(nn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ge(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+fn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}On("ul",n)[0].innerHTML=o,Rn(On(un),{"margin-top":"-"+On(un)[0].offsetHeight/2+"px"}),Wn(On("a",On("li",On(un)[0])[Pn(On(on)[0],nn)]),qt)}(),On('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),g.fadingEffect&&S.fadingEffect&&S.fadingEffect.apply(),g.scrollOverflow&&(v=g.scrollOverflowHandler.init(g))}(),$(!0),ee(!0),_(g.autoScrolling,"internal"),ct(),At(),"complete"===Zt.readyState&&_e(),Vt.addEventListener("load",_e),g.scrollOverflow||me(),Vt.addEventListener("scroll",Se),Vt.addEventListener("hashchange",Qe),Vt.addEventListener("blur",nt),Vt.addEventListener("resize",st),Zt.addEventListener("keydown",Ke),Zt.addEventListener("keyup",qe),["click","touchstart"].forEach(function(e){Zt.addEventListener(e,ue)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){fe(e,!1)}),["mouseleave","touchend"].forEach(function(e){fe(e,!0)})),Rt("dragAndMove")&&S.dragAndMove.turnOffTouch());var N,j,P,Y=!1,D=0,W=0,X=0,V=0,Z=(new Date).getTime(),G=0,F=0,U=y;return S}function _(e,t){e||Ot(0),Nt("autoScrolling",e,t);var n=On(on)[0];if(g.autoScrolling&&!g.scrollBar)Rn(r,{overflow:"hidden",height:"100%"}),Q(I.recordHistory,"internal"),Rn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Ot(n.offsetTop);else if(Rn(r,{overflow:"visible",height:"initial"}),Q(!1,"internal"),Rn(w,{"-ms-touch-action":"","touch-action":""}),Ht(w),null!=n){var o=ze(n.offsetTop);o.element.scrollTo(0,o.options)}eo(w,"setAutoScrolling",e)}function Q(e,t){Nt("recordHistory",e,t)}function J(e,t){"internal"!==t&&g.fadingEffect&&S.fadingEffect&&S.fadingEffect.update(e),Nt("scrollingSpeed",e,t)}function K(e,t){Nt("fitToSection",e,t)}function q(e){e?(function(){var e,t="";Vt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Zt.createElement("div")?"wheel":void 0!==Zt.onmousewheel?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==n?Zt[e](t+"MozMousePixelScroll",Me,!1):Zt[e](t+n,Me,!1)}(),w.addEventListener("mousedown",$e),w.addEventListener("mouseup",et)):(Zt.addEventListener?(Zt.removeEventListener("mousewheel",Me,!1),Zt.removeEventListener("wheel",Me,!1),Zt.removeEventListener("MozMousePixelScroll",Me,!1)):Zt.detachEvent("onmousewheel",Me),w.removeEventListener("mousedown",$e),w.removeEventListener("mouseup",et))}function $(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"m")}):Ct(t,"all","m"),eo(w,"setAllowScrolling",{value:t,directions:e})}function ee(e){e?(q(!0),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,ye,{passive:!1}),m.addEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}),e.addEventListener(C.touchstart,Ae),e.addEventListener(C.touchmove,Ee,{passive:!1}))}}()):(q(!1),function(){if(n||o){g.autoScrolling&&(m.removeEventListener(C.touchmove,Ee,{passive:!1}),m.removeEventListener(C.touchmove,ye,{passive:!1}));var e=On(Ft)[0];e&&(e.removeEventListener(C.touchstart,Ae),e.removeEventListener(C.touchmove,Ee,{passive:!1}))}}())}function te(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ct(t,e,"k")}):(Ct(t,"all","k"),g.keyboardScrolling=t)}function ne(){var e=In(On(on)[0],nn);e||!g.loopTop&&!g.continuousVertical||(e=jn(On(nn))),null!=e&&Ce(e,null,!0)}function oe(){var e=zn(On(on)[0],nn);e||!g.loopBottom&&!g.continuousVertical||(e=On(nn)[0]),null!=e&&Ce(e,null,!1)}function re(e,t){J(0,"internal"),ie(e,t),J(I.scrollingSpeed,"internal")}function ie(e,t){var n=St(e);void 0!==t?bt(e,t):null!=n&&Ce(n)}function le(e){Te("right",e)}function ae(e){Te("left",e)}function se(e){if(!Cn(w,Qt)){E=!0,y=Hn();for(var t=On(nn),n=0;n<t.length;++n){var o=t[n],r=On(gn,o)[0],i=On(vn,o);g.verticalCentered&&Rn(On(ln,o),{height:gt(o)+"px"}),Rn(o,{height:he(o)+"px"}),1<i.length&&rt(r,On(pn,r)[0])}g.scrollOverflow&&v.createScrollBarForAll();var l=Pn(On(on)[0],nn);l&&!Rt("fadingEffect")&&re(l+1),E=!1,$n(g.afterResize)&&e&&g.afterResize.call(w,Vt.innerWidth,Vt.innerHeight),$n(g.afterReBuild)&&!e&&g.afterReBuild.call(w),eo(w,"afterRebuild")}}function ce(e){var t=Cn(m,Ut);e?t||(_(!1,"internal"),K(!1,"internal"),Yn(On(un)),Wn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSections(),eo(w,"afterResponsive",e),g.scrollOverflow&&v.createScrollBarForAll()):t&&(_(I.autoScrolling,"internal"),K(I.autoScrolling,"internal"),Dn(On(un)),Xn(m,Ut),$n(g.afterResponsive)&&g.afterResponsive.call(w,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSlides(),eo(w,"afterResponsive",e))}function ue(e){var t=e.target;t&&Un(t,un+" a")?function(e){qn(e);var t=Pn(Un(this,un+" li"));Ce(On(nn)[t])}.call(t,e):to(t,".fp-tooltip")?function(){eo(Bn(this),"click")}.call(t):to(t,xn)?function(){var e=Un(this,nn);Cn(this,An)?d.m.left&&ae(e):d.m.right&&le(e)}.call(t,e):to(t,En)||null!=Un(t,En)?function(e){qn(e);var t=On(gn,Un(this,nn))[0],n=On(vn,t)[Pn(Un(this,"li"))];rt(t,n)}.call(t,e):Un(t,g.menu+" [data-menuanchor]")&&function(e){!On(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(qn(e),ie(this.getAttribute("data-menuanchor")))}.call(t,e)}function fe(e,t){Zt["fp_"+e]=t,Zt.addEventListener(e,de,!0)}function de(t){t.target!=Zt&&g.normalScrollElements.split(",").forEach(function(e){null!=Un(t.target,e)&&ee(Zt["fp_"+t.type])})}function ve(e){var t="fp_"+e+"Extension";B[e]=g[e+"Key"],S[e]=void 0!==Vt[t]?new Vt[t]:null,S[e]&&S[e].c(e)}function pe(e,t,n){var o=100*n,r=100/n,i=Zt.createElement("div");i.className=hn,Zn(t,i);var l,a,s=Zt.createElement("div");s.className=mn,Zn(t,s),Rn(On(Sn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[oo('<div class="fp-controlArrow fp-prev"></div>'),oo('<div class="fp-controlArrow fp-next"></div>')],_n(On(gn,l)[0],a),"#fff"!==g.controlArrowColor&&(Rn(On(Mn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Rn(On(Ln,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||Yn(On(Ln,l))),g.slidesNavigation&&function(e,t){Vn(oo('<div class="'+wn+'"><ul></ul></div>'),e);var n=On(yn,e)[0];Wn(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)Vn(oo('<li><a href="#"><span class="fp-sr-only">'+ge(o,"Slide")+"</span><span></span></a></li>"),On("ul",n)[0]);Rn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Wn(On("a",On("li",n)[0]),qt)}(e,n)),t.forEach(function(e){Rn(e,{width:r+"%"}),g.verticalCentered&&ht(e)});var c=On(pn,e)[0];null!=c&&(0!==Pn(On(on),nn)||0===Pn(On(on),nn)&&0!==Pn(c))?(Tt(c,"internal"),Wn(c,"fp-initial")):Wn(t[0],qt)}function he(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Hn()}function ge(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}function me(){var e,t=On(on)[0];Wn(t,en),je(t),Pe(t),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),(!(e=St(Je().section))||void 0!==e&&Pn(e)===Pn(u))&&$n(g.afterLoad)&&He("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:Pn(t,nn)}),$n(g.afterRender)&&He("afterRender"),eo(w,"afterRender")}function Se(){var e;if(eo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||Rt("dragAndMove"))&&!Bt()){var t=Rt("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):Jn(),n=0,o=t+Hn()/2,r=(Rt("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Hn())===t,i=On(nn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Cn(e=i[n],qt)){Y=!0;var a,s,c=On(on)[0],u=Pn(c,nn)+1,f=vt(e),d=e.getAttribute("data-anchor"),v=Pn(e,nn)+1,p=On(pn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=Pn(p)),x&&(Wn(e,qt),Xn(Kn(e),qt),It("parallax","afterLoad"),$n(g.onLeave)&&He("onLeave",h),$n(g.afterLoad)&&He("afterLoad",h),g.resetSliders&&S.resetSliders&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),De(c),je(e),Pe(e),dt(d,v-1),g.anchors.length&&(b=d),yt(a,s,d)),clearTimeout(A),A=setTimeout(function(){Y=!1},100)}g.fitToSection&&(clearTimeout(L),L=setTimeout(function(){g.fitToSection&&On(on)[0].offsetHeight<=y&&be()},g.fitToSectionDelay))}}function be(){x&&(E=!0,Ce(On(on)[0]),E=!1)}function we(e){if(d.m[e]){var t="down"===e?oe:ne;if(S.scrollHorizontally&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(On(on)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ye(e){g.autoScrolling&&xe(e)&&qn(e)}function Ee(e){var t=Un(e.target,nn);if(xe(e)){g.autoScrolling&&qn(e);var n=Mt(e);X=n.y,V=n.x,On(gn,t).length&&Math.abs(W-V)>Math.abs(D-X)?!a&&Math.abs(W-V)>Vt.innerWidth/100*g.touchSensitivity&&(V<W?d.m.right&&le(t):d.m.left&&ae(t)):g.autoScrolling&&x&&Math.abs(D-X)>Vt.innerHeight/100*g.touchSensitivity&&(X<D?we("down"):D<X&&we("up"))}}function xe(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Ae(e){if(g.fitToSection&&(O=!1),xe(e)){var t=Mt(e);D=t.y,W=t.x}}function Le(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Me(e){var t=(new Date).getTime(),n=Cn(On(".fp-completely")[0],sn);if(!d.m.down&&!d.m.up)return qn(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||Vt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<f.length&&f.shift(),f.push(Math.abs(o)),g.scrollBar&&qn(e);var a=t-Z;if(Z=t,200<a&&(f=[]),x&&!zt()){var s=Le(f,10);Le(f,70)<=s&&l&&we(r<0?"down":"up")}return!1}g.fitToSection&&(O=!1)}function Te(e,t){var n=null==t?On(on)[0]:t,o=On(gn,n)[0];if(!(null==o||zt()||a||On(vn,o).length<2)){var r=On(pn,o)[0],i=null;if(null==(i="left"===e?In(r,vn):zn(r,vn))){if(!g.loopHorizontal)return;var l=Kn(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,rt(o,i,e)}}function Oe(){for(var e=On(pn),t=0;t<e.length;t++)Tt(e[t],"internal")}function ke(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Rt("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():G<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==Nn(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),G=o}function Ce(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:ke(e),yMovement:vt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Pn(e,nn),activeSlide:On(pn,e)[0],activeSection:On(on)[0],leavingSection:Pn(On(on),nn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&Jn()===i.dtop&&!Cn(e,an))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=Pn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,$n(g.onLeave)&&!1===He("onLeave",i))return}var a;It("parallax","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?Qn(On(on)[0],io(s.activeSection,nn)):_n(On(on)[0],lo(s.activeSection,nn).reverse()),Ot(On(on)[0].offsetTop),Oe(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=vt(s.element),s.leavingSection=Pn(s.activeSection,nn)+1,s.sectionIndex=Pn(s.element,nn),eo(On(Ft)[0],"onContinuousVertical",s),i=s),Rt("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||De(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),Wn(e,qt),Xn(Kn(e),qt),je(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,yt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";mt(t,!0),g.scrollingSpeed?(clearTimeout(p),p=setTimeout(function(){Be(e)},g.scrollingSpeed)):Be(e)}else{var n=ze(e.dtop);S.test.top=-e.dtop+"px",Pt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Be(e)},30):Be(e)})}}(i),b=i.anchorLink,dt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?On(nn).length-1:0)}}var s}function He(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Re(On(on)[0]),slide:Ie(On(pn,On(on)[0])[0])}},onLeave:function(){return{origin:Re(r.activeSection),destination:Re(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Re(r.section),origin:Ie(r.prevSlide),destination:Ie(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(eo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Re(e){return e?new Wt(e):null}function Ie(e){return e?new Xt(e):null}function ze(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=On(Ft)[0]):(t.options=e,t.element=Vt),t}function Be(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Qn(On(nn)[0],t.wrapAroundElements):_n(On(nn)[On(nn).length-1],t.wrapAroundElements),Ot(On(on)[0].offsetTop),Oe(),t.sectionIndex=Pn(t.element,nn),t.leavingSection=Pn(t.activeSection,nn)+1),$n(g.afterLoad)&&!e.localIsResizing&&He("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),It("parallax","afterLoad"),Rt("scrollOverflowReset")&&S.scrollOverflowReset.reset(),Rt("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||Pe(e.element),Wn(e.element,en),Xn(Kn(e.element),en),x=!0,$n(e.callback)&&e.callback()}function Ne(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function je(e){g.lazyLoading&&On("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",We(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Ne(n,e)}),to(n,"source")){var e=Un(n,"video, audio");e&&e.load()}})}function Pe(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ye(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ye(e)}})}function Ye(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function De(e){var t=We(e);On("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),On('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function We(e){var t=On(pn,e);return t.length&&(e=t[0]),e}function Xe(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function Ve(e){var t=function(){if(Zt.domain.length){for(var e=Zt.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=Xe(n[0]),r=Xe(n[1]),i=Xe(n[2]),l=Xe(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length,s=void 0!==B[e]&&B[e].length;if(!s&&a)return!1;var c=s?Xe(B[e]):"",u=1<(c=c.split("_")).length&&-1<c[1].indexOf(e,c[1].length-e.length);return!(c[0].indexOf(t,c[0].length-t.length)<0&&a&&l!=c[0])&&u||!a}function Ze(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(j)&&(clearTimeout(P),P=setTimeout(Ge,900))})}function Ge(){H=!1}function Fe(e){j=Zt.createElement("div"),N=Xe("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),j.innerHTML=N,j=j.firstChild,"MutationObserver"in Vt&&new MutationObserver(Ze).observe(Zt.body,{childList:!0,subtree:!1}),Rt(e)&&S[e]&&(Ve(e)||(Ue(),setInterval(Ue,2e3)))}function Ue(){j&&(H||(Math.random()<.5?ao(m,j):Vn(j,m),H=!0),j.setAttribute("style",Xe("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Xe("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function _e(){var e=Je(),t=e.section,n=e.slide;t&&(g.animateAnchor?bt(t,n):re(t,n))}function Qe(){if(!Y&&!g.lockAnchors){var e=Je(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;t&&t.length&&(t&&t!==b&&!o||r||!a&&i!=n)&&bt(t,n)}}function Je(){var e,t,n=Vt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Ke(e){clearTimeout(M);var t=Zt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=Zt.activeElement,u=tt(We(On(on)[0]));function f(e){return qn(e),u[0]?u[0].focus():null}(t=e,n=tt(Zt),o=n.indexOf(Zt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ie(Un(i,vn)),a=Re(Un(i,nn)),l||a)&&(c?null==Un(c,on+","+on+" "+pn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&qn(e))}(e):to(t,"textarea")||to(t,"input")||to(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&qn(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey;if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:d.k.up&&ne();break;case 32:if(t&&d.k.up){ne();break}case 40:case 34:d.k.down&&oe();break;case 36:d.k.up&&ie(1);break;case 35:d.k.down&&ie(On(nn).length);break;case 37:d.k.left&&ae();break;case 39:d.k.right&&le()}}(e)},150))}function qe(e){l&&(c=e.ctrlKey)}function $e(e){2==e.which&&(F=e.pageY,w.addEventListener("mousemove",ot))}function et(e){2==e.which&&w.removeEventListener("mousemove",ot)}function tt(e){return[].slice.call(On(R,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function nt(){c=l=!1}function ot(e){x&&(e.pageY<F&&d.m.up?ne():e.pageY>F&&d.m.down&&oe()),F=e.pageY}function rt(e,t,n){var o=Un(e,nn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Pn(t),section:o,sectionIndex:Pn(o,nn),anchorLink:o.getAttribute("data-anchor"),slidesNav:On(yn,o)[0],slideAnchor:xt(t),prevSlide:On(pn,o)[0],prevSlideIndex:Pn(On(pn,o)[0]),localIsResizing:E};r.xMovement=pt(r.prevSlideIndex,r.slideIndex),r.localIsResizing||(x=!1),It("parallax","applyHorizontal",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&$n(g.onSlideLeave)&&!1===He("onSlideLeave",r)?a=!1:(Wn(t,qt),Xn(Kn(t),qt),r.localIsResizing||(De(r.prevSlide),je(t)),it(r),Cn(o,qt)&&!r.localIsResizing&&yt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Bt()?lt(r):at(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Rt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function it(e){!g.loopHorizontal&&g.controlArrows&&(no(On(Ln,e.section),0!==e.slideIndex),no(On(Mn,e.section),null!=Nn(e.destiny)))}function lt(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(Xn(On($t,t),qt),Wn(On("a",On("li",t)[n]),qt)),e.localIsResizing||(It("parallax","afterSlideLoads"),$n(g.afterSlideLoad)&&He("afterSlideLoad",e),x=!0,Pe(e.destiny)),a=!1,Rt("interlockedSlides")&&S.interlockedSlides.apply(e)}function at(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Rn(ut(On(Sn,e)),kt(r)),h=setTimeout(function(){n&&lt(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),Pt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&lt(t)})}function st(){if(eo(w,"onResize"),ct(),n){var e=Zt.activeElement;if(!to(e,"textarea")&&!to(e,"input")&&!to(e,"select")){var t=Hn();Math.abs(t-U)>20*Math.max(U,t)/100&&(s=setTimeout(function(){se(!0),U=t},navigator.userAgent.match("CriOS")?50:0))}}else clearTimeout(s),s=setTimeout(function(){se(!0)},350)}function ct(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&Vt.innerWidth<e,o=t&&Vt.innerHeight<t;e&&t?ce(n||o):e?ce(n):t&&ce(o)}function ut(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return Xn(e,_t),Rn(e,{"-webkit-transition":t,transition:t})}function ft(e){return Wn(e,_t)}function dt(e,t){var n,o,r,i;n=e,o=On(g.menu)[0],g.menu&&null!=o&&(Xn(On($t,o),qt),Wn(On('[data-menuanchor="'+n+'"]',o),qt)),r=e,i=t,g.navigation&&null!=On(un)[0]&&(Xn(On($t,On(un)[0]),qt),Wn(r?On('a[href="#'+r+'"]',On(un)[0]):On("a",On("li",On(un)[0])[i]),qt))}function vt(e){var t=Pn(On(on)[0],nn),n=Pn(e,nn);return t==n?"none":n<t?"up":"down"}function pt(e,t){return e==t?"none":t<e?"left":"right"}function ht(e){if(!Cn(e,bn)){var t=Zt.createElement("div");t.className=rn,t.style.height=gt(e)+"px",Wn(e,bn),Gn(e,t)}}function gt(e){var t=he(e);if(g.paddingTop||g.paddingBottom){var n=e;Cn(n,tn)||(n=Un(e,nn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function mt(e,t){t?ut(w):ft(w),clearTimeout(T),Rn(w,kt(e)),S.test.translate3d=e,T=setTimeout(function(){Xn(w,_t)},10)}function St(e){var t=On(nn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=On(nn)[n]}return t}function bt(e,t){var n=St(e);if(null!=n){var o,r,i,l=(null==(i=On(vn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=On(vn,r)[o]),i);xt(n)===b||Cn(n,qt)?wt(l):Ce(n,function(){wt(l)})}}function wt(e){null!=e&&rt(Un(e,gn),e)}function yt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Et(r+"/"+(i=t))):(null!=e&&(i=t),Et(n))),At()}function Et(e){if(g.recordHistory)location.hash=e;else if(n||o)Vt.history.replaceState(void 0,void 0,"#"+e);else{var t=Vt.location.href.split("#")[0];Vt.location.replace(t+"#"+e)}}function xt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Pn(e);return null==t&&(t=n),t}function At(){var e=On(on)[0],t=On(pn,e)[0],n=xt(e),o=xt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Kt+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),Wn(m,Kt+"-"+r)}function Lt(){return Vt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Mt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,o&&xe(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Tt(e,t){J(0,"internal"),void 0!==t&&(E=!0),rt(Un(e,gn),e),void 0!==t&&(E=!1),J(I.scrollingSpeed,"internal")}function Ot(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)mt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Rn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=ze(t);Yt(n.element,n.options)}}function kt(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ct(t,e,n){"all"!==e?d[n][e]=t:Object.keys(d[n]).forEach(function(e){d[n][e]=t})}function Ht(e){return Rn(e,{"-webkit-transition":"none",transition:"none"})}function Rt(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function It(e,t,n){if(Rt(e))return S[e][t](n)}function zt(){return Rt("dragAndMove")&&S.dragAndMove.isAnimating}function Bt(){return Rt("dragAndMove")&&S.dragAndMove.isGrabbing}function Nt(e,t,n){g[e]=t,"internal"!==n&&(I[e]=t)}function jt(){t||(Tn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Tn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Cn(On("html"),Jt)?Tn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Tn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Tn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Tn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Tn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(On("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(On("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});(n.length||e.length)&&(Tn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&Tn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&Tn("error",'"'+t+'" is is being used by another element `name` property'))}))}function Pt(t,n,o,r){var e,i=(e=t).self!=Vt&&Cn(e,hn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?Jn():e.offsetTop,l=n-i,a=0;O=!0;var s=function(){if(O){var e=n;a+=20,o&&(e=Vt.fp_easings[g.easing](a,i,l,o)),Yt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Yt(e,t){!g.autoScrolling||g.scrollBar||e.self!=Vt&&Cn(e,hn)?e.self!=Vt&&Cn(e,hn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Dt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Pn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Wt(e){Dt.call(this,e,nn)}function Xt(e){Dt.call(this,e,vn)}jt()}}),window.jQuery&&window.fullpage&&function(n,o){"use strict";n&&o?n.fn.fullpage=function(e){var t=new o(this[0],e);Object.keys(t).forEach(function(e){n.fn.fullpage[e]=t[e]})}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alvarotrigolopez/Sites/vue-fullpage.js/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-103a4254", Component.options)
  } else {
    hotAPI.reload("data-v-103a4254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      this.api = new _fullpageExtensions2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
if (!window.fullpage_api) {
  window.fullpage = _fullpageExtensions2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-103a4254", module.exports)
  }
}

/***/ })
/******/ ]);
});