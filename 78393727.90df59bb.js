(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),i=n(6),o=(n(0),n(223)),a=(n(224),n(225),n(47),{id:"onedrive",title:"Onedrive",sidebar_label:"Onedrive"}),c={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/onedrive",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/onedrive",isDocsHomePage:!1,title:"Onedrive",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/onedrive.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/onedrive",sidebar_label:"Onedrive",sidebar:"installationGuide",previous:{title:"SharePoint Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/sharepoint"},next:{title:"Qlik View",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/qlik-view"}},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}))}l.isMDXComponent=!0},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,b=f["".concat(a,".").concat(p)]||f[p]||d[p]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},224:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(227),i=n(226);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},225:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(13),a=n(226),c=n(10),u=Object(r.createContext)({collectLink:function(){}}),s=n(224),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,p=e.to,b=e.href,v=e.activeClassName,O=e["data-noBrokenLinkCheck"],m=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),w=Object(s.b)().withBaseUrl,g=Object(r.useContext)(u),y=p||b,h=void 0!==y?function(e){return e.startsWith("/")}(n=y)?w(n):y:void 0,j=Object(a.a)(h),k=Object(r.useRef)(!1),P=d?o.e:o.c,E=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&j&&window.docusaurus.prefetch(h),function(){E&&f&&f.disconnect()}}),[h,E,j]);var x=null!==(t=null==h?void 0:h.startsWith("#"))&&void 0!==t&&t,C=!h||!j||x;return h&&j&&!x&&!O&&g.collectLink(h),C?i.a.createElement("a",Object.assign({href:h},!j&&{target:"_blank",rel:"noopener noreferrer"},m)):i.a.createElement(P,Object.assign({},m,{onMouseEnter:function(){k.current||(window.docusaurus.preload(h),k.current=!0)},innerRef:function(e){var t,n;E&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(h)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:h},d&&{activeClassName:v}))}},226:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},227:function(e,t,n){"use strict";var r=n(0),i=n(19);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);