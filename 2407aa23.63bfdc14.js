(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{220:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,b=f["".concat(i,".").concat(p)]||f[p]||d[p]||a;return t?o.a.createElement(b,c(c({ref:n},l),{},{components:t})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},221:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}));var r=t(224),o=t(223);function a(){var e=Object(r.a)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,a=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var s=!t.startsWith(n)?n+t.replace(/^\//,""):t;return l?e+s:s}(a,t,e,n)}}}function i(e,n){return void 0===n&&(n={}),(0,a().withBaseUrl)(e,n)}},222:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(13),i=t(223),c=t(10),u=Object(r.createContext)({collectLink:function(){}}),l=t(221),s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.a=function(e){var n,t,f,d=e.isNavLink,p=e.to,b=e.href,v=e.activeClassName,O=e["data-noBrokenLinkCheck"],g=s(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),m=Object(l.b)().withBaseUrl,y=Object(r.useContext)(u),w=p||b,j=void 0!==w?function(e){return e.startsWith("/")}(t=w)?m(t):w:void 0,h=Object(i.a)(j),k=Object(r.useRef)(!1),P=d?a.e:a.c,E=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&h&&window.docusaurus.prefetch(j),function(){E&&f&&f.disconnect()}}),[j,E,h]);var x=null!==(n=null==j?void 0:j.startsWith("#"))&&void 0!==n&&n,C=!j||!h||x;return j&&h&&!x&&!O&&y.collectLink(j),C?o.a.createElement("a",Object.assign({href:j},!h&&{target:"_blank",rel:"noopener noreferrer"},g)):o.a.createElement(P,Object.assign({},g,{onMouseEnter:function(){k.current||(window.docusaurus.preload(j),k.current=!0)},innerRef:function(e){var n,t;E&&e&&h&&(n=e,t=function(){window.docusaurus.prefetch(j)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(n),f.disconnect(),t())}))}))).observe(n))},to:j},d&&{activeClassName:v}))}},223:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},224:function(e,n,t){"use strict";var r=t(0),o=t(19);n.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},81:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(6),a=(t(0),t(220)),i=(t(221),t(222),{id:"load-balance",title:"Load Balancing",sidebar_label:"Load Balancing"}),c={unversionedId:"installation-guide/advanced/load-balance",id:"installation-guide/advanced/load-balance",isDocsHomePage:!1,title:"Load Balancing",source:"@site/docs/installation-guide/advanced/load-balance.md",permalink:"/VV-Docs/docs/installation-guide/advanced/load-balance",sidebar_label:"Load Balancing",sidebar:"installationGuide",previous:{title:"BI Hub Agent Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/agent-config"},next:{title:"Architecture",permalink:"/VV-Docs/docs/installation-guide/advanced/architecture"}},u=[],l={rightToc:u};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}))}s.isMDXComponent=!0}}]);