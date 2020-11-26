(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{214:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return f}));var r=t(3),o=t(7),i=(t(0),t(236)),c=(t(237),t(238),{id:"services-info",title:"Services Information",sidebar_label:"Services Information"}),a={unversionedId:"installation-guide/advanced/services-info",id:"installation-guide/advanced/services-info",isDocsHomePage:!1,title:"Services Information",source:"@site/docs/installation-guide/advanced/services-info.md",slug:"/installation-guide/advanced/services-info",permalink:"/VV-Docs/docs/installation-guide/advanced/services-info",version:"current",sidebar_label:"Services Information"},u=[],s={rightToc:u};function f(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}))}f.isMDXComponent=!0},236:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return v}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),f=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=f(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(t),p=r,v=l["".concat(c,".").concat(p)]||l[p]||d[p]||i;return t?o.a.createElement(v,a(a({ref:n},s),{},{components:t})):o.a.createElement(v,a({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=p;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},237:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return c}));var r=t(22),o=t(239);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,a=void 0!==c&&c,u=i.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(a)return n+t;var f=t.startsWith(n)?t:n+t.replace(/^\//,"");return s?e+f:f}(i,t,e,n)}}}function c(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},238:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(10),c=t(239),a=t(11),u=Object(r.createContext)({collectLink:function(){}}),s=t(237),f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.a=function(e){var n,t,l,d=e.isNavLink,p=e.to,v=e.href,b=e.activeClassName,O=e.isActive,m=e["data-noBrokenLinkCheck"],y=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),j=p||v,h=Object(c.a)(j),P=null==j?void 0:j.replace("pathname://",""),k=void 0!==P?function(e){return e.startsWith("/")}(t=P)?g(t):t:void 0,E=Object(r.useRef)(!1),x=d?i.e:i.c,C=a.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&h&&window.docusaurus.prefetch(k),function(){C&&l&&l.disconnect()}}),[k,C,h]);var I=null!==(n=null==k?void 0:k.startsWith("#"))&&void 0!==n&&n,S=!k||!h||I;return k&&h&&!I&&!m&&w.collectLink(k),S?o.a.createElement("a",Object.assign({href:k},j&&!h&&{target:"_blank",rel:"noopener noreferrer"},y)):o.a.createElement(x,Object.assign({},y,{onMouseEnter:function(){E.current||(window.docusaurus.preload(k),E.current=!0)},innerRef:function(e){var n,t;C&&e&&h&&(n=e,t=function(){window.docusaurus.prefetch(k)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(n),l.disconnect(),t())}))}))).observe(n))},to:k||""},d&&{isActive:O,activeClassName:b}))}},239:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))}}]);