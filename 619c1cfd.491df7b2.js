(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(236)),a=n(237),c=n(238),s={id:"move-instance",title:"Move BI Hub instance from one server to another",sidebar_label:"Move BI Hub instance from one server to another"},u={unversionedId:"installation-guide/move-instance/move-instance",id:"installation-guide/move-instance/move-instance",isDocsHomePage:!1,title:"Move BI Hub instance from one server to another",description:"BI Hub Instance can be moved from one server to another by following the steps below:",source:"@site/docs/installation-guide/move-instance/move-instance.md",slug:"/installation-guide/move-instance/move-instance",permalink:"/VV-Docs/docs/installation-guide/move-instance/move-instance",version:"current",sidebar_label:"Move BI Hub instance from one server to another",sidebar:"installationGuide",previous:{title:"Upgrade Of BI Hub",permalink:"/VV-Docs/docs/installation-guide/upgrade-trial/upgrade-trial"},next:{title:"Uninstallation of BI Hub in Windows Platform",permalink:"/VV-Docs/docs/installation-guide/uninstall-reinstall/uninstall-bihub"}},l=[],f={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BI Hub Instance can be moved from one server to another by following the steps below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Uninstall the entire application in the existing server by following the steps given under the section ",Object(i.b)(c.a,{to:Object(a.a)("docs/installation-guide/uninstall-reinstall/uninstall-bihub"),mdxType:"Link"},'"Un-installation of the BI Hub"'),"."),Object(i.b)("li",{parentName:"ol"},"The next step is to Install the application in the other server again by following the steps given under the section ",Object(i.b)(c.a,{to:Object(a.a)("docs/installation-guide/install-bihub-windows/install"),mdxType:"Link"},'"Installation of BI Hub for Windows Platform"'),".")))}b.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(n),p=r,d=f["".concat(a,".").concat(p)]||f[p]||b[p]||i;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(22),o=n(239);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},238:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(10),a=n(239),c=n(11),s=Object(r.createContext)({collectLink:function(){}}),u=n(237),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,b=e.isNavLink,p=e.to,d=e.href,v=e.activeClassName,m=e.isActive,O=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),g=Object(u.b)().withBaseUrl,y=Object(r.useContext)(s),w=p||d,j=Object(a.a)(w),k=null==w?void 0:w.replace("pathname://",""),I=void 0!==k?function(e){return e.startsWith("/")}(n=k)?g(n):n:void 0,P=Object(r.useRef)(!1),x=b?i.e:i.c,B=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!B&&j&&window.docusaurus.prefetch(I),function(){B&&f&&f.disconnect()}}),[I,B,j]);var E=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,C=!I||!j||E;return I&&j&&!E&&!O&&y.collectLink(I),C?o.a.createElement("a",Object.assign({href:I},w&&!j&&{target:"_blank",rel:"noopener noreferrer"},h)):o.a.createElement(x,Object.assign({},h,{onMouseEnter:function(){P.current||(window.docusaurus.preload(I),P.current=!0)},innerRef:function(e){var t,n;B&&e&&j&&(t=e,n=function(){window.docusaurus.prefetch(I)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:I||""},b&&{isActive:m,activeClassName:v}))}},239:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);