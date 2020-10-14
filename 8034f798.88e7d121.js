(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),o=(n(0),n(220)),a=(n(221),{id:"welcome",title:"Welcome to BI Hub Admin Guide\u2019s Documentation!",sidebar_label:"Welcome to BI Hub Admin Guide\u2019s Documentation"}),u={unversionedId:"admin-guide/welcome",id:"admin-guide/welcome",isDocsHomePage:!1,title:"Welcome to BI Hub Admin Guide\u2019s Documentation!",description:"Who Should Read This Guide?",source:"@site/docs/admin-guide/welcome.md",permalink:"/VV-Docs/docs/admin-guide/welcome",sidebar_label:"Welcome to BI Hub Admin Guide\u2019s Documentation"},c=[{value:"Who Should Read This Guide?",id:"who-should-read-this-guide",children:[]},{value:"What is BI Hub?",id:"what-is-bi-hub",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"who-should-read-this-guide"},"Who Should Read This Guide?"),Object(o.b)("p",null,"This Administrator guide for the BI Hub product offered by Visual BI is meant for Administrators (further referred as admin) who are going to administer the entire application."),Object(o.b)("p",null,"Administration includes configuring agents, authentication, adding users and reports, on-going maintenance, etc. "),Object(o.b)("p",null,"Users of BI Hub do not have permission to perform these activities."),Object(o.b)("h2",{id:"what-is-bi-hub"},"What is BI Hub?"),Object(o.b)("p",null,"BI Hub a Visual BI product, is a web-based application which enables users to view and analyze reports built in various BI platforms in one page, without having to login into those platforms individually. Highlights of this product includes but not limited to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Smart view and Discovery of BI assets \u2013 Discover not accessible assets and request access")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Unified view of BI assets \u2013 A consolidated view of reports from multiple BI platforms in one page.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Incredibly easy setup and maintenance \u2013 Easy to setup and 100% automated synchronization between BI Hub and BI platforms"))))}l.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,f=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?i.a.createElement(f,u(u({ref:t},s),{},{components:n})):i.a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(224),i=n(223);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,u=void 0!==a&&a,c=o.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(u)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},223:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},224:function(e,t,n){"use strict";var r=n(0),i=n(19);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);