(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r,o=n(2),i=n(6),a=(n(0),n(220)),c=n(221),s=n(222),l={id:"row-level-security",title:"Row Level Security for Power BI Reports",sidebar_label:"Row Level Security for Power BI Reports"},b={unversionedId:"admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",id:"admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",isDocsHomePage:!1,title:"Row Level Security for Power BI Reports",description:"The Row Level Security feature has been implemented for the Power BI",source:"@site/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security.md",permalink:"/VV-Docs/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",sidebar_label:"Row Level Security for Power BI Reports",sidebar:"adminGuide",previous:{title:"Add New Agent",permalink:"/VV-Docs/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/add-new-agent"},next:{title:"Synchronize Users between Agent and BI Hub",permalink:"/VV-Docs/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/synch"}},u=[{value:"Admin Mode",id:"admin-mode",children:[]},{value:"User Mode",id:"user-mode",children:[]}],d=(r="Zoom",function(e){return console.warn("Component '"+r+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),m={rightToc:u};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Row Level Security feature has been implemented for the Power BI\nReports. The steps followed for the configuration of the Row Level\nSecurity feature has been explained below for each mode:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#admin-mode"}),"Admin Mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#user-mode"}),"User Mode"))),Object(a.b)("h2",{id:"admin-mode"},"Admin Mode"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"For Power BI Agent, once the Instance is being newly added, then the status will be in \u201cYellow\u201d color in the Instance Manager screen (see Figure below). The Yellow color status indicates that the Authentication is pending for the Agent."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Authentication Pending",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw1.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Now select the Instance and click the "Login as Admin" button as shown in the below Figure.'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Login as Admin",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw2.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"A pop up window appears where the Admin needs to provide the Power BI Administrator Login credentials (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Power BI Administrator Login pop window",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw3.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now the user will be authenticated successfully as shown in the below Figure."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Successful User Authentication",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw4.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After providing the login credentials, the Power BI Agent will be activated and now the status will be in \u201cGreen\u201d color in the Instance Manager screen (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Instance Manager active",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw5.jpg")}))))),Object(a.b)("h2",{id:"user-mode"},"User Mode"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After logging in as an User in BI Hub application, the user will be able to access the Power BI Reports (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Power BI Report",src:Object(c.a)("doc-images/admin-guide/user-mode/rw6.jpg")}))),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},"Power BI Report"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'In our example, the VBI View Demo user has mapped the Power BI Agent "Power BI QE Test" with the user \u201cpowerbiagent\u201d in the Agent Mapping screen in Admin Mode (see Figure below).'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Agent Mapping",src:Object(c.a)("doc-images/admin-guide/user-mode/rw7.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now when the VBI View Demo user selects the Power BI Report in the User screen (see Figure: ",Object(a.b)(s.a,{to:Object(c.a)("#user-mode"),mdxType:"Link"},"Power BI Report"),") then he needs to provide the powerbiagent login credentials to access the Power BI Report (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Powerbiagent Login Credentials",src:Object(c.a)("doc-images/admin-guide/user-mode/rw8.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If the VBI View Demo user has provided any other user login credentials (other than powerbiagent), then an Error Message will be\ndisplayed as shown below."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Authentication Error Message",src:Object(c.a)("doc-images/admin-guide/user-mode/rw9.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'For the Row Level Security implementation in the Power BI Platform Reports, the Toggle button for the "Comply with Row Level Security" option in the Add Agent screen of the Admin Mode should be enabled (see Figure below).'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(d,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Row Level Security",src:Object(c.a)("doc-images/admin-guide/user-mode/rw10.jpg")}))),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},"Row Level Security")))))}p.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,p=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},221:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(224),o=n(223);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var b=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+b:b}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},222:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(13),a=n(223),c=n(10),s=Object(r.createContext)({collectLink:function(){}}),l=n(221),b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,m=e.to,p=e.href,g=e.activeClassName,f=e["data-noBrokenLinkCheck"],w=b(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),O=Object(l.b)().withBaseUrl,j=Object(r.useContext)(s),h=m||p,v=void 0!==h?function(e){return e.startsWith("/")}(n=h)?O(n):h:void 0,y=Object(a.a)(v),P=Object(r.useRef)(!1),x=d?i.e:i.c,N=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!N&&y&&window.docusaurus.prefetch(v),function(){N&&u&&u.disconnect()}}),[v,N,y]);var A=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,I=!v||!y||A;return v&&y&&!A&&!f&&j.collectLink(v),I?o.a.createElement("a",Object.assign({href:v},!y&&{target:"_blank",rel:"noopener noreferrer"},w)):o.a.createElement(x,Object.assign({},w,{onMouseEnter:function(){P.current||(window.docusaurus.preload(v),P.current=!0)},innerRef:function(e){var t,n;N&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(v)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:v},d&&{activeClassName:g}))}},223:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},224:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);