(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{204:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),i=(r(0),r(224)),c=(r(225),r(226),r(47),{id:"cognos",title:"Cognos",sidebar_label:"Cognos"}),a={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/cognos",id:"admin-guide/getting-started/prerequisite/bi-platform-config/cognos",isDocsHomePage:!1,title:"Cognos",description:"- User Privileges:",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/cognos.md",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/cognos",sidebar_label:"Cognos",sidebar:"adminGuide",previous:{title:"Qlik View",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qlik-view"},next:{title:"Microstrategy Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy"}},s=[],u={rightToc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"User Privileges:")),Object(i.b)("p",null,"By default, the Cognos built-in entries include the role ",Object(i.b)("strong",{parentName:"p"},"System Administrators")," which is a special role. Members of this role are considered root users or super users. They may access any object in the content store. "),Object(i.b)("p",null,"In BI Hub, the username used to configure Cognos Instance should be a member of this role(",Object(i.b)("strong",{parentName:"p"},"System Administrators"),"), only then the sync reports will fetch reports for all the existing users otherwise it will fetch reports for the user who is configured in Cognos Instance alone."))}l.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=n,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return r?o.a.createElement(b,a(a({ref:t},u),{},{components:r})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},225:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return c}));var n=r(228),o=r(227);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,c=i.forcePrependBaseUrl,a=void 0!==c&&c,s=i.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;var l=!r.startsWith(t)?t+r.replace(/^\//,""):r;return u?e+l:l}(i,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},226:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(13),c=r(227),a=r(10),s=Object(n.createContext)({collectLink:function(){}}),u=r(225),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r,f,p=e.isNavLink,d=e.to,b=e.href,g=e.activeClassName,m=e["data-noBrokenLinkCheck"],v=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(u.b)().withBaseUrl,y=Object(n.useContext)(s),h=d||b,w=void 0!==h?function(e){return e.startsWith("/")}(r=h)?O(r):h:void 0,j=Object(c.a)(w),C=Object(n.useRef)(!1),P=p?i.e:i.c,k=a.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&j&&window.docusaurus.prefetch(w),function(){k&&f&&f.disconnect()}}),[w,k,j]);var x=null!==(t=null==w?void 0:w.startsWith("#"))&&void 0!==t&&t,E=!w||!j||x;return w&&j&&!x&&!m&&y.collectLink(w),E?o.a.createElement("a",Object.assign({href:w},!j&&{target:"_blank",rel:"noopener noreferrer"},v)):o.a.createElement(P,Object.assign({},v,{onMouseEnter:function(){C.current||(window.docusaurus.preload(w),C.current=!0)},innerRef:function(e){var t,r;k&&e&&j&&(t=e,r=function(){window.docusaurus.prefetch(w)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())}))}))).observe(t))},to:w},p&&{activeClassName:g}))}},227:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},228:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);