(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[68],{9924:e=>{e.exports=function(e){var t,n=[].forEach,l=[].some,o=document.body,s=!0,i=" ";function r(t,l){var o=l.appendChild(function(t){var l=document.createElement("li"),o=document.createElement("a");e.listItemClass&&l.setAttribute("class",e.listItemClass);e.onClick&&(o.onclick=e.onClick);e.includeTitleTags&&o.setAttribute("title",t.textContent);e.includeHtml&&t.childNodes.length?n.call(t.childNodes,(function(e){o.appendChild(e.cloneNode(!0))})):o.textContent=t.textContent;return o.setAttribute("href",e.basePath+"#"+t.id),o.setAttribute("class",e.linkClass+i+"node-name--"+t.nodeName+i+e.extraLinkClasses),l.appendChild(o),l}(t));if(t.children.length){var s=a(t.isCollapsed);t.children.forEach((function(e){r(e,s)})),o.appendChild(s)}}function a(t){var n=e.orderedList?"ol":"ul",l=document.createElement(n),o=e.listClass+i+e.extraListClasses;return t&&(o+=i+e.collapsibleClass,o+=i+e.isCollapsedClass),l.setAttribute("class",o),l}function c(t){var n=0;return null!==t&&(n=t.offsetTop,e.hasInnerContainers&&(n+=c(t.offsetParent))),n}function d(t){return t&&-1!==t.className.indexOf(e.collapsibleClass)&&-1!==t.className.indexOf(e.isCollapsedClass)?(t.className=t.className.split(i+e.isCollapsedClass).join(""),d(t.parentNode.parentNode)):t}return{enableTocAnimation:function(){s=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(s=!1)},render:function(e,n){var l=a(!1);if(n.forEach((function(e){r(e,l)})),null!==(t=e||t))return t.firstChild&&t.removeChild(t.firstChild),0===n.length?t:t.appendChild(l)},updateToc:function(r){var a;a=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var n;n=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var l=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=t.offsetTop),n>e.fixedSidebarOffset?-1===l.className.indexOf(e.positionFixedClass)&&(l.className+=i+e.positionFixedClass):l.className=l.className.split(i+e.positionFixedClass).join("")}();var u,f=r;if(s&&null!==t&&f.length>0){l.call(f,(function(t,n){return c(t)>a+e.headingsOffset+10?(u=f[0===n?n:n-1],!0):n===f.length-1?(u=f[f.length-1],!0):void 0}));var m=t.querySelector("."+e.activeLinkClass),h=t.querySelector("."+e.linkClass+".node-name--"+u.nodeName+'[href="'+e.basePath+"#"+u.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g,"\\$1")+'"]');if(m===h)return;var p=t.querySelectorAll("."+e.linkClass);n.call(p,(function(t){t.className=t.className.split(i+e.activeLinkClass).join("")}));var C=t.querySelectorAll("."+e.listItemClass);n.call(C,(function(t){t.className=t.className.split(i+e.activeListItemClass).join("")})),h&&-1===h.className.indexOf(e.activeLinkClass)&&(h.className+=i+e.activeLinkClass);var g=h&&h.parentNode;g&&-1===g.className.indexOf(e.activeListItemClass)&&(g.className+=i+e.activeListItemClass);var v=t.querySelectorAll("."+e.listClass+"."+e.collapsibleClass);n.call(v,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=i+e.isCollapsedClass)})),h&&h.nextSibling&&-1!==h.nextSibling.className.indexOf(e.isCollapsedClass)&&(h.nextSibling.className=h.nextSibling.className.split(i+e.isCollapsedClass).join("")),d(h&&h.parentNode.parentNode)}}}}},6774:e=>{e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,includeTitleTags:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1,tocScrollOffset:0}},1068:(e,t,n)=>{var l,o,s,i;i=void 0!==n.g?n.g:window||n.g,o=[],l=function(e){var t,l,o,s=n(6774),i={},r={},a=n(9924),c=n(3305),d=n(9586),u=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||u){var f=Object.prototype.hasOwnProperty;return r.destroy=function(){var e=C(i);null!==e&&(i.skipRendering||e&&(e.innerHTML=""),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(i.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1)))},r.init=function(e){if(u){i=m(s,e||{}),this.options=i,this.state={},i.scrollSmooth&&(i.duration=i.scrollSmoothDuration,i.offset=i.scrollSmoothOffset,r.scrollSmooth=n(2358).initSmoothScrolling(i)),t=a(i),l=c(i),this._buildHtml=t,this._parseContent=l,this._headingsArray=o,r.destroy();var f=p(i);if(null!==f){var g=C(i);if(null!==g&&null!==(o=l.selectHeadings(f,i.headingSelector))){var v=l.nestHeadingsArray(o).nest;i.skipRendering||t.render(g,v),this._scrollListener=h((function(e){t.updateToc(o),!i.disableTocScrollSync&&d(i);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(o),i.scrollEndCallback&&i.scrollEndCallback(e))}),i.throttleTimeout),this._scrollListener(),i.scrollContainer&&document.querySelector(i.scrollContainer)?(document.querySelector(i.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(i.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var S=null;return this._clickListener=h((function(e){i.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(o),S&&clearTimeout(S),S=setTimeout((function(){t.enableTocAnimation()}),i.scrollSmoothDuration)}),i.throttleTimeout),i.scrollContainer&&document.querySelector(i.scrollContainer)?document.querySelector(i.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}}}},r.refresh=function(e){r.destroy(),r.init(e||this.options)},e.tocbot=r,r}function m(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var l in n)f.call(n,l)&&(e[l]=n[l])}return e}function h(e,t,n){var l,o;return t||(t=250),function(){var s=n||this,i=+new Date,r=arguments;l&&i<l+t?(clearTimeout(o),o=setTimeout((function(){l=i,e.apply(s,r)}),t)):(l=i,e.apply(s,r))}}function p(e){try{return e.contentElement||document.querySelector(e.contentSelector)}catch(t){return console.warn("Contents element not found: "+e.contentSelector),null}}function C(e){try{return e.tocElement||document.querySelector(e.tocSelector)}catch(t){return console.warn("TOC element not found: "+e.tocSelector),null}}}(i),void 0===(s="function"==typeof l?l.apply(t,o):l)||(e.exports=s)},3305:e=>{e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function l(e){return+e.nodeName.toUpperCase().replace("H","")}function o(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;const n=t.getAttribute("data-heading-label")||(e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim());var o={id:t.id,children:[],nodeName:t.nodeName,headingLevel:l(t),textContent:n};return e.includeHtml&&(o.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(o,t):o}return{nestHeadingsArray:function(l){return t.call(l,(function(t,l){var s=o(l);return s&&function(t,l){for(var s=o(t),i=s.headingLevel,r=l,a=n(r),c=i-(a?a.headingLevel:0);c>0&&(!(a=n(r))||i!==a.headingLevel);)a&&void 0!==a.children&&(r=a.children),c--;i>=e.collapseDepth&&(s.isCollapsed=!0),r.push(s)}(s,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var l=n;e.ignoreSelector&&(l=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return t.querySelectorAll(l)}catch(e){return console.warn("Headers not found with selector: "+l),null}}}}},2358:(e,t)=>{t.initSmoothScrolling=function(e){var t=e.duration,n=e.offset,l=location.hash?o(location.href):location.href;function o(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(s){var i;"a"!==(i=s.target).tagName.toLowerCase()||!(i.hash.length>0||"#"===i.href.charAt(i.href.length-1))||o(i.href)!==l&&o(i.href)+"#"!==l||s.target.className.indexOf("no-smooth-scroll")>-1||"#"===s.target.href.charAt(s.target.href.length-2)&&"!"===s.target.href.charAt(s.target.href.length-1)||-1===s.target.className.indexOf(e.linkClass)||function(e,t){var n,l,o=window.pageYOffset,s={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||u},i=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]')||document.querySelector('[id="'+e.split("#").join("")+'"]'),r="string"==typeof e?s.offset+(e?i&&i.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,a="function"==typeof s.duration?s.duration(r):s.duration;function c(e){l=e-n,window.scrollTo(0,s.easing(l,o,r,a)),l<a?requestAnimationFrame(c):d()}function d(){window.scrollTo(0,o+r),"function"==typeof s.callback&&s.callback()}function u(e,t,n,l){return(e/=l/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}requestAnimationFrame((function(e){n=e,c(e)}))}(s.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=s.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}},9586:e=>{e.exports=function(e){var t=e.tocElement||document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop-e.tocScrollOffset)}}}}]);
//# sourceMappingURL=68.js.map