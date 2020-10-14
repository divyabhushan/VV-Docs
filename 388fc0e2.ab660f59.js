(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(220)),o=n(221),c=n(222),u=(n(47),{id:"maintenance-of-bihub",title:"Maintenance of BI Hub",sidebar_label:"Maintenance of BI Hub"}),b={unversionedId:"admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub",id:"admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub",isDocsHomePage:!1,title:"Maintenance of BI Hub",description:"This section of the document provides explanation regarding maintenance of BI Hub after the initial setup is completed. Some of the maintenance activities described are:",source:"@site/docs/admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub.md",permalink:"/VV-Docs/docs/admin-guide/admin-functions/maintenance-bihub/maintenance-of-bihub",sidebar_label:"Maintenance of BI Hub",sidebar:"adminGuide",previous:{title:"Delete Microsoft AD details in BI Hub",permalink:"/VV-Docs/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/del-msad-bihub"},next:{title:"Adding a new user to BI Hub",permalink:"/VV-Docs/docs/admin-guide/admin-functions/maintenance-bihub/add-new-user"}},s=[],d={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section of the document provides explanation regarding maintenance of BI Hub after the initial setup is completed. Some of the maintenance activities described are:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Section"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1. ",Object(i.b)(c.a,{to:Object(o.a)("docs/admin-guide/admin-functions/maintenance-bihub/add-new-user"),mdxType:"Link"},"Adding a new user to BI Hub")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"To add new users manually without synchronizing from Microsoft AD or other LDAP")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2. ",Object(i.b)(c.a,{to:Object(o.a)("docs/admin-guide/admin-functions/maintenance-bihub/add-reports-existing-user"),mdxType:"Link"},"Add Reports to an existing User")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"To add reports to a user manually without performing bulk synchronization")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3. ",Object(i.b)(c.a,{to:Object(o.a)("docs/admin-guide/admin-functions/maintenance-bihub/edit-bihub-users"),mdxType:"Link"},"Edit BI Hub Users")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify existing information of users described")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"4. ",Object(i.b)(c.a,{to:Object(o.a)("docs/admin-guide/admin-functions/maintenance-bihub/edit-password-authenticated-user"),mdxType:"Link"},"Edit the password of BI Hub (Native)")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"To change password of a user authenticated by BI Hub")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5. ",Object(i.b)(c.a,{to:Object(o.a)("docs/admin-guide/admin-functions/maintenance-bihub/del-user"),mdxType:"Link"},"Delete a User")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"To delete a user")))))}l.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||l[f]||i;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(224),a=n(223);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,b=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return b?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},222:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(13),o=n(223),c=n(10),u=Object(r.createContext)({collectLink:function(){}}),b=n(221),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,l=e.isNavLink,f=e.to,m=e.href,p=e.activeClassName,O=e["data-noBrokenLinkCheck"],j=s(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(b.b)().withBaseUrl,g=Object(r.useContext)(u),v=f||m,y=void 0!==v?function(e){return e.startsWith("/")}(n=v)?h(n):v:void 0,w=Object(o.a)(y),N=Object(r.useRef)(!1),x=l?i.e:i.c,k=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(y),function(){k&&d&&d.disconnect()}}),[y,k,w]);var T=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,E=!y||!w||T;return y&&w&&!T&&!O&&g.collectLink(y),E?a.a.createElement("a",Object.assign({href:y},!w&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(x,Object.assign({},j,{onMouseEnter:function(){N.current||(window.docusaurus.preload(y),N.current=!0)},innerRef:function(e){var t,n;k&&e&&w&&(t=e,n=function(){window.docusaurus.prefetch(y)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:y},l&&{activeClassName:p}))}},223:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},224:function(e,t,n){"use strict";var r=n(0),a=n(19);t.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);