(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(22),a=n(239);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,b=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+l:l}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},238:function(e,t,n){"use strict";var i=n(0),a=n.n(i),r=n(10),o=n(239),c=n(11),s=Object(i.createContext)({collectLink:function(){}}),b=n(237),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,p=e.to,m=e.href,g=e.activeClassName,f=e.isActive,O=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(b.b)().withBaseUrl,j=Object(i.useContext)(s),w=p||m,y=Object(o.a)(w),x=null==w?void 0:w.replace("pathname://",""),N=void 0!==x?function(e){return e.startsWith("/")}(n=x)?v(n):n:void 0,T=Object(i.useRef)(!1),I=d?r.e:r.c,S=c.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!S&&y&&window.docusaurus.prefetch(N),function(){S&&u&&u.disconnect()}}),[N,S,y]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,k=!N||!y||A;return N&&y&&!A&&!O&&j.collectLink(N),k?a.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},h)):a.a.createElement(I,Object.assign({},h,{onMouseEnter:function(){T.current||(window.docusaurus.preload(N),T.current=!0)},innerRef:function(e){var t,n;S&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:f,activeClassName:g}))}},239:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var i,a=n(3),r=n(7),o=(n(0),n(236)),c=n(237),s=n(238),b={id:"general",title:"General Tab",sidebar_label:"General Tab"},l={unversionedId:"admin-guide/admin-functions/settings/general",id:"admin-guide/admin-functions/settings/general",isDocsHomePage:!1,title:"General Tab",description:"In General Tab, you have four different categories as listed below:",source:"@site/docs/admin-guide/admin-functions/settings/general.md",slug:"/admin-guide/admin-functions/settings/general",permalink:"/VV-Docs/docs/admin-guide/admin-functions/settings/general",version:"current",sidebar_label:"General Tab",sidebar:"adminGuide",previous:{title:"Settings",permalink:"/VV-Docs/docs/admin-guide/admin-functions/settings/settings"},next:{title:"Report Tab",permalink:"/VV-Docs/docs/admin-guide/admin-functions/settings/report"}},u=[{value:"Navigation",id:"navigation",children:[]},{value:"Search",id:"search",children:[]},{value:"Views",id:"views",children:[]},{value:"Customization",id:"customization",children:[]}],d=(i="Zoom",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),p={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In General Tab, you have four different categories as listed below:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(c.a)("#navigation"),mdxType:"Link"},"Navigation")),Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(c.a)("#search"),mdxType:"Link"},"Search")),Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(c.a)("#views"),mdxType:"Link"},"Views")),Object(o.b)("li",{parentName:"ol"},Object(o.b)(s.a,{to:Object(c.a)("#customization"),mdxType:"Link"},"Customization"))),Object(o.b)("h2",{id:"navigation"},"Navigation"),Object(o.b)("p",null,'In the Navigation category, the Admin will be able to rename and enable/disable the Navigation Menu items for the Users. For our example, the Navigation Menu item "Favorites" has been renamed as "My Favorites" and the Menu items "BI Platform" and "History" have been disabled.'),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/nav1.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"Navigation Tab in User Screen - Rename and Enable/Disable Navigation Menu Items")),Object(o.b)("p",null,"Based on the above configuration, you will be able to view the Navigation Menu items for the Users as shown below."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Navigation Menu Items in User Screen",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/nav2.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Navigation Menu Items in User Screen")),Object(o.b)("h2",{id:"search"},"Search"),Object(o.b)("p",null,"In Search category, the Admin can enable the Show Inaccessible Reports option as shown in the Figure below."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Search - Show Inaccessible Reports",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/sea1.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"Search - Show Inaccessible Reports")),Object(o.b)("p",null,"Based on the above configuration, the users will be able to view the\nInaccessible Reports in the User pages (see Figure below)."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Inaccessible Reports",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/ina.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"Inaccessible Reports")),Object(o.b)("h2",{id:"views"},"Views"),Object(o.b)("p",null,"In Views category, the Admin will be able to enable the Show Agent Instance option (see Figure below). The Show Agent Instance option is activated as shown in the below Figure."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"View - Show Agent Instance option",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/vw2.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"View - Show Agent Instance option")),Object(o.b)("p",null,"When the Show Agent Instance option is activated, the user can view the Report with the Instance Agent details in the User pages (see Figure below)."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Report with Instance Agent Display",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/newad2.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"Report with Instance Agent Display")),Object(o.b)("h2",{id:"customization"},"Customization"),Object(o.b)("p",null,"In the Customization category, the Admin will be now able to enable the \u201cLaunch Reports in New Tab\u201d option (see Figure below). When this option is enabled by the Admin, the user will be able to view the \u201cLaunch Reports in New Tab\u201d option being enabled in the Profile Settings for his first login and by later the user can configure the same based on his\nchoice."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(d,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Customization \u2013 Launch Reports in New Tab",src:Object(c.a)("doc-images/admin-guide/admin-functions/settings/cust.png")}))),Object(o.b)("p",null,"  ",Object(o.b)("em",{parentName:"p"},"Customization \u2013 Launch Reports in New Tab")))}m.isMDXComponent=!0}}]);