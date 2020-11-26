(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(236)),a=n(237),c=n(238),u={id:"prerequisite",title:"Administration Pre-requisite Guide",sidebar_label:"Administration Pre-requisite Guide"},s={unversionedId:"admin-guide/getting-started/prerequisite/prerequisite",id:"admin-guide/getting-started/prerequisite/prerequisite",isDocsHomePage:!1,title:"Administration Pre-requisite Guide",description:"BI Hub application requires the below components:",source:"@site/docs/admin-guide/getting-started/prerequisite/prerequisite.md",slug:"/admin-guide/getting-started/prerequisite/prerequisite",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/prerequisite",version:"current",sidebar_label:"Administration Pre-requisite Guide",sidebar:"adminGuide",previous:{title:"Welcome to BI Hub Admin Guide\u2019s Documentation!",permalink:"/VV-Docs/docs/admin-guide/getting-started/welcome"},next:{title:"Add New Agent",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/add-new-agent"}},d=[{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:d};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BI Hub application requires the below components:"),Object(o.b)("p",null,"\u2705 BI Hub Server installed"),Object(o.b)("p",null,"\u2705 BI Hub Web installed"),Object(o.b)("p",null,"\u2705 BI Hub Agents installed"),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0})),Object(o.b)(c.a,{to:Object(a.a)("docs/admin-guide/getting-started/prerequisite/add-new-agent"),mdxType:"Link"},"Add new Agent"),": An Agent instance must be created and configured with the BI Hub Platform.")))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,b=l["".concat(a,".").concat(f)]||l[f]||p[f]||o;return n?i.a.createElement(b,c(c({ref:t},s),{},{components:n})):i.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(22),i=n(239);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},238:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(10),a=n(239),c=n(11),u=Object(r.createContext)({collectLink:function(){}}),s=n(237),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,l,p=e.isNavLink,f=e.to,b=e.href,m=e.activeClassName,g=e.isActive,v=e["data-noBrokenLinkCheck"],O=d(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),y=Object(s.b)().withBaseUrl,j=Object(r.useContext)(u),w=f||b,h=Object(a.a)(w),k=null==w?void 0:w.replace("pathname://",""),P=void 0!==k?function(e){return e.startsWith("/")}(n=k)?y(n):n:void 0,x=Object(r.useRef)(!1),q=p?o.e:o.c,A=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!A&&h&&window.docusaurus.prefetch(P),function(){A&&l&&l.disconnect()}}),[P,A,h]);var E=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,N=!P||!h||E;return P&&h&&!E&&!v&&j.collectLink(P),N?i.a.createElement("a",Object.assign({href:P},w&&!h&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(q,Object.assign({},O,{onMouseEnter:function(){x.current||(window.docusaurus.preload(P),x.current=!0)},innerRef:function(e){var t,n;A&&e&&h&&(t=e,n=function(){window.docusaurus.prefetch(P)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),n())}))}))).observe(t))},to:P||""},p&&{isActive:g,activeClassName:m}))}},239:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);