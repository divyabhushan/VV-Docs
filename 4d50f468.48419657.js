(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),a=r(6),o=(r(0),r(220)),i=(r(221),{id:"browser-compatibility",title:"Browser Compatibility",sidebar_label:"Browser Compatibility"}),c={unversionedId:"installation-guide/supported-platforms/browser-compatibility",id:"installation-guide/supported-platforms/browser-compatibility",isDocsHomePage:!1,title:"Browser Compatibility",description:"The following table shows the various Browsers compatible with BI Hub",source:"@site/docs/installation-guide/supported-platforms/browser-compatibility.md",permalink:"/VV-Docs/docs/installation-guide/supported-platforms/browser-compatibility",sidebar_label:"Browser Compatibility",sidebar:"installationGuide",previous:{title:"System Requirements",permalink:"/VV-Docs/docs/installation-guide/supported-platforms/sys-req"},next:{title:"Databases, WebServer",permalink:"/VV-Docs/docs/installation-guide/supported-platforms/db-web"}},l=[],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following table shows the various Browsers compatible with BI Hub"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Chrome"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mozilla Firefox"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Internet Explorer"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Edge"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"35 or above"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30 or above"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"11.xxx"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40 or above")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Table : Browser Compatibility")))}b.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,d=s["".concat(i,".").concat(f)]||s[f]||p[f]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},221:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(224),a=r(223);function o(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,u=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(c)return t+r;var b=!r.startsWith(t)?t+r.replace(/^\//,""):r;return u?e+b:b}(o,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},223:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},224:function(e,t,r){"use strict";var n=r(0),a=r(19);t.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);