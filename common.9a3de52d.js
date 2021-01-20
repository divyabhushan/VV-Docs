/*! For license information please see common.9a3de52d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=o.a.createContext({}),l=function(e){var t=o.a.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),s=l(n),p=r,v=s["".concat(a,".").concat(p)]||s[p]||d[p]||i;return n?o.a.createElement(v,u(u({ref:t},f),{},{components:n})):o.a.createElement(v,u({ref:t},f))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var f=2;f<i;f++)a[f]=n[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(22),o=n(226);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,u=void 0!==a&&a,c=i.absolute,f=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(u)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return f?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},212:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(10),a=n(226),u=n(11),c=Object(r.createContext)({collectLink:function(){}}),f=n(211),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,s,d=e.isNavLink,p=e.to,v=e.href,y=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],m=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(f.b)().withBaseUrl,w=Object(r.useContext)(c),O=p||v,j=Object(a.a)(O),_=null==O?void 0:O.replace("pathname://",""),E=void 0!==_?function(e){return e.startsWith("/")}(n=_)?g(n):n:void 0,S=Object(r.useRef)(!1),P=d?i.e:i.c,x=u.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&j&&window.docusaurus.prefetch(E),function(){x&&s&&s.disconnect()}}),[E,x,j]);var C=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,k=!E||!j||C;return E&&j&&!C&&!h&&w.collectLink(E),k?o.a.createElement("a",Object.assign({href:E},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},m)):o.a.createElement(P,Object.assign({},m,{onMouseEnter:function(){S.current||(window.docusaurus.preload(E),S.current=!0)},innerRef:function(e){var t,n;x&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(E)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:E||""},d&&{isActive:b,activeClassName:y}))}},213:function(e,t,n){"use strict";n(261);var r=n(0),o=n.n(r),i=n(26),a=n(267),u=n.n(a),c=n(262),f=n.n(c);Object.create;function l(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}Object.create;var s=function(e){return e+"ms"},d=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.isLoaded,i=e.isUnloading,a=e.left,u=e.originalTransform,c=e.top,f=e.transitionDuration,d=e.width,p=e.zoomMargin,v=s(f);if(!o||i){var y=l(["scale(1)","translate(0, 0)"],u?[u]:[]).join(" ");return{height:t,left:a,top:c,transform:y,WebkitTransform:y,transitionDuration:v,width:d}}var b=function(e){var t=e.height,n=e.innerHeight,r=e.innerWidth,o=e.width,i=e.zoomMargin,a=r/(o+i),u=n/(t+i);return Math.min(a,u)}({height:t,innerWidth:r,innerHeight:n,width:d,zoomMargin:p}),h=l(["scale("+b+")","translate("+(r/2-(a+d/2))/b+"px, "+(n/2-(c+t/2))/b+"px)"],u?[u]:[]).join(" ");return{height:t,left:a,top:c,transform:h,WebkitTransform:h,transitionDuration:v,width:d}},p={getBoundingClientRect:function(){return{height:0,left:0,top:0,width:0}},style:{transform:null}},v=Object(r.memo)((function(e){var t=e.children,n=e.closeText,a=void 0===n?"Unzoom Image":n,c=e.onUnload,l=e.onLoad,v=e.overlayBgColorEnd,y=void 0===v?"rgba(255, 255, 255, 0.95)":v,b=e.overlayBgColorStart,h=void 0===b?"rgba(255, 255, 255, 0)":b,m=e.parentRef,g=e.portalEl,w=void 0===g?document.body:g,O=e.scrollableEl,j=void 0===O?window:O,_=e.transitionDuration,E=void 0===_?300:_,S=e.zoomMargin,P=void 0===S?0:S,x=e.zoomZindex,C=void 0===x?2147483647:x,k=Object(r.useRef)(null),T=Object(r.useState)(0)[1],D=Object(r.useState)(!1),L=D[0],M=D[1],z=Object(r.useState)(!1),R=z[0],B=z[1],I=f()(),U=I.width,A=I.height,W=Object(r.useCallback)((function(e){e.preventDefault(),B(!0)}),[]),H=Object(r.useCallback)((function(e){"Escape"!==e.key&&27!==e.keyCode||(e.stopPropagation(),B(!0))}),[]),F=Object(r.useCallback)((function(){T((function(e){return e+1})),R||B(!0)}),[R]);u()("keydown",H,document),u()("scroll",F,j),Object(r.useEffect)((function(){M(!0),l(),k.current&&k.current.focus({preventScroll:!0})}),[l]),Object(r.useEffect)((function(){var e=R?setTimeout(c,E):null;return function(){e&&clearTimeout(e)}}),[R,c,E]);var N=m.current||p,Z=N.getBoundingClientRect(),G=Z.height,J=Z.left,X=Z.top,q=Z.width,Y=function(e){var t=e.isLoaded,n=e.isUnloading,r=e.overlayBgColorEnd,o=e.overlayBgColorStart,i=e.transitionDuration,a=e.zoomZindex,u={backgroundColor:o,transitionDuration:s(i),zIndex:a};return t&&!n&&(u.backgroundColor=r),u}({isLoaded:L,isUnloading:R,overlayBgColorEnd:y,overlayBgColorStart:h,transitionDuration:E,zoomZindex:C}),$=d({height:G,isLoaded:L,innerHeight:A,innerWidth:U,isUnloading:R,left:J,originalTransform:N.style.transform,top:X,transitionDuration:E,width:q,zoomMargin:P});return Object(i.createPortal)(o.a.createElement("div",{"aria-modal":!0,"data-rmiz-overlay":!0,role:"dialog",style:Y},o.a.createElement("div",{"data-rmiz-modal-content":!0,style:$},t),o.a.createElement("button",{"aria-label":a,"data-rmiz-btn-close":!0,onClick:W,ref:k})),w)})),y=Object(r.memo)((function(e){var t=e.children,n=e.closeText,i=void 0===n?"Unzoom image":n,a=e.overlayBgColorEnd,u=void 0===a?"rgba(255, 255, 255, 0.95)":a,c=e.overlayBgColorStart,f=void 0===c?"rgba(255, 255, 255, 0)":c,l=e.portalEl,s=e.openText,d=void 0===s?"Zoom image":s,p=e.scrollableEl,y=e.transitionDuration,b=void 0===y?300:y,h=e.wrapElement,m=void 0===h?"div":h,g=e.wrapStyle,w=e.zoomMargin,O=void 0===w?0:w,j=e.zoomZindex,_=void 0===j?2147483647:j,E=Object(r.useState)(!1),S=E[0],P=E[1],x=Object(r.useState)(!1),C=x[0],k=x[1],T=Object(r.useRef)(null),D=Object(r.useRef)(null),L=Object(r.useCallback)((function(e){S||(e.preventDefault(),P(!0))}),[S]),M=Object(r.useCallback)((function(){k(!0)}),[]),z=Object(r.useCallback)((function(){P(!1),k(!1),D.current&&D.current.focus({preventScroll:!0})}),[]),R=S&&C?"hidden":"visible";return o.a.createElement(r.StrictMode,null,o.a.createElement(m,{"data-rmiz-wrap":R,ref:T,style:g},t,o.a.createElement("button",{"aria-label":d,"data-rmiz-btn-open":!0,onClick:L,ref:D}),"undefined"!=typeof window&&S&&o.a.createElement(v,{closeText:i,onLoad:M,onUnload:z,overlayBgColorEnd:u,overlayBgColorStart:f,parentRef:T,portalEl:l,scrollableEl:p,transitionDuration:b,zoomMargin:O,zoomZindex:_},t)))}));t.a=y},226:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},238:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return u})),n.d(t,"__param",(function(){return c})),n.d(t,"__metadata",(function(){return f})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return s})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return v})),n.d(t,"__read",(function(){return y})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return h})),n.d(t,"__await",(function(){return m})),n.d(t,"__asyncGenerator",(function(){return g})),n.d(t,"__asyncDelegator",(function(){return w})),n.d(t,"__asyncValues",(function(){return O})),n.d(t,"__makeTemplateObject",(function(){return j})),n.d(t,"__importStar",(function(){return _})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return S})),n.d(t,"__classPrivateFieldSet",(function(){return P}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function f(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function d(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}function p(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||(t[n]=e[n])}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function h(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function g(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,f):l(i[0][2],n)}catch(r){l(i[0][3],r)}var n}function c(e){u("next",e)}function f(e){u("throw",e)}function l(e,t){e(t),i.shift(),i.length&&u(i[0][0],i[0][1])}}function w(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function E(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function P(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=n(266)},261:function(e,t){!function(){if("undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof HTMLElement){var e=!1;try{var t=document.createElement("div");t.addEventListener("focus",(function(e){e.preventDefault(),e.stopPropagation()}),!0),t.focus(Object.defineProperty({},"preventScroll",{get:function(){e=!0}}))}catch(n){}if(void 0===HTMLElement.prototype.nativeFocus&&!e){HTMLElement.prototype.nativeFocus=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(e){var t=window.scrollY||window.pageYOffset;this.nativeFocus(),e&&e.preventScroll&&setTimeout((function(){window.scroll(window.scrollX||window.pageXOffset,t)}),0)}}}}()},262:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(238),o=n(0),i=r.__importDefault(n(263)),a=n(246);t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isClient?window.innerWidth:e,height:a.isClient?window.innerHeight:t}),r=n[0],u=n[1];return o.useEffect((function(){if(a.isClient){var e=function(){u({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),r}},263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(238),o=n(0),i=r.__importDefault(n(264));t.default=function(e){var t=o.useRef(0),n=o.useState(e),r=n[0],a=n[1],u=o.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[r,u]}},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(238),o=n(0),i=r.__importDefault(n(265));t.default=function(e){var t=o.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default=function(e){r.useEffect(e,[])}},266:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(246).isClient?window:null,i=function(e){return!!e.addEventListener},a=function(e){return!!e.on};t.default=function(e,t,n,u){void 0===n&&(n=o),r.useEffect((function(){if(t&&n)return i(n)?n.addEventListener(e,t,u):a(n)&&n.on(e,t,u),function(){i(n)?n.removeEventListener(e,t,u):a(n)&&n.off(e,t,u)}}),[e,t,n,JSON.stringify(u)])}}}]);