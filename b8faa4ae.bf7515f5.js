(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(236)),o=n(237),l=n(238),c={id:"install",title:"Installation of BI Hub Web",sidebar_label:"Installation of BI Hub Web"},b={unversionedId:"installation-guide/install-bihub-windows/web/install",id:"installation-guide/install-bihub-windows/web/install",isDocsHomePage:!1,title:"Installation of BI Hub Web",description:"Before you install and configure the BI Hub Web the following prerequisites are met:",source:"@site/docs/installation-guide/install-bihub-windows/web/install.md",slug:"/installation-guide/install-bihub-windows/web/install",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/install",version:"current",sidebar_label:"Installation of BI Hub Web",sidebar:"installationGuide",previous:{title:"Troubleshooting Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/troubleshooting"},next:{title:"BI Hub Web Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/config"}},s=[{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Before you install and configure the ",Object(a.b)("strong",{parentName:"p"},"BI Hub Web")," the following prerequisites are met:"),Object(a.b)("p",null,"\u2705 ",Object(a.b)(l.a,{to:Object(o.a)("docs/installation-guide/install-bihub-windows/server/install"),mdxType:"Link"},"BI Hub Server")," is installed."),Object(a.b)("p",null,"\u2705 ",Object(a.b)(l.a,{to:Object(o.a)("#"),mdxType:"Link"},"At least one instance of BI Hub Server is configured and in running state"),"."),Object(a.b)("p",null,"Follow the steps below to install the BI Hub Web:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Double click the ",Object(a.b)(l.a,{to:Object(o.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"BIHubWeb-X.X.X-windows-installer.exe")," file that you downloaded to start the installation process."),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Next")," in the startup page."),Object(a.b)("li",{parentName:"ol"},"Read through the license terms and conditions. To proceed further accept the license terms and click ",Object(a.b)("strong",{parentName:"li"},"Next")," to continue."),Object(a.b)("li",{parentName:"ol"},"In the next screen provide the ",Object(a.b)("em",{parentName:"li"},"DNS resolvable URL")," and ",Object(a.b)("em",{parentName:"li"},"Port details")," of the ",Object(a.b)("strong",{parentName:"li"},"BI Hub Server instance"),". This URL should be accessed by the Users (i.e., External URL of the BI Hub Server).",Object(a.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The installation will not proceed if the URL is not accessible.")))),Object(a.b)("li",{parentName:"ol"},"In the ",Object(a.b)("strong",{parentName:"li"},"Component Selection")," screen select either:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BI Hub Web with NGINX")," if you prefer the bundled NGINX webserver or"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},"BI Hub Web without NGINX")," If you have your webserver like ",Object(a.b)("em",{parentName:"li"},"Apache")," or ",Object(a.b)("em",{parentName:"li"},"Tomcat")," INX"))),Object(a.b)("li",{parentName:"ol"},"In the ",Object(a.b)("strong",{parentName:"li"},"Directory Selection")," screen, choose the directory to install the BI Hub Server. The default directory is ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\BI Hub\\BIHubWeb"),". ",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"For ",Object(a.b)("em",{parentName:"li"},"BI Hub Web without NGINX")," Component Selection version, choose the ",Object(a.b)("em",{parentName:"li"},"web root")," directory of your webserver.",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("ul",{parentName:"blockquote"},Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("em",{parentName:"li"},"Apache")," the directory should be ",Object(a.b)("inlineCode",{parentName:"li"},"<Apache installation directory>/htdocs"),"."),Object(a.b)("li",{parentName:"ul"},"For ",Object(a.b)("em",{parentName:"li"},"Nginx")," the directory should be ",Object(a.b)("inlineCode",{parentName:"li"},"<Nginx Installation directory>/html"),".")))),Object(a.b)("li",{parentName:"ol"},"For ",Object(a.b)("em",{parentName:"li"},"BI Hub Web with NGINX(bundled)")," in the ",Object(a.b)("em",{parentName:"li"},"NGINX Port")," details screen, accept the default port or provide your ",Object(a.b)("em",{parentName:"li"},"Port")," details."))),Object(a.b)("li",{parentName:"ol"},"Click ",Object(a.b)("strong",{parentName:"li"},"Next")," to verify the installation details and start installing the ",Object(a.b)("em",{parentName:"li"},"BI Hub Web")," with all the selected components."),Object(a.b)("li",{parentName:"ol"},"A successful installation screen provides options to open the ",Object(a.b)("em",{parentName:"li"},"Readme file"),".")),Object(a.b)("p",null,"\u2705 ",Object(a.b)("strong",{parentName:"p"},"BI Hub Web")," is installed with basic default configurations in your Server."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The HTTP version of BI Hub Web is now available.")),Object(a.b)("h3",{id:"next-steps"},"Next Steps"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","For advanced ",Object(a.b)("em",{parentName:"li"},"BI Hub Web")," configuration, follow the next section.")))}p.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(22),i=n(239);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,b=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},238:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(10),o=n(239),l=n(11),c=Object(r.createContext)({collectLink:function(){}}),b=n(237),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,u,p=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],j=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(b.b)().withBaseUrl,N=Object(r.useContext)(c),w=d||m,g=Object(o.a)(w),y=null==w?void 0:w.replace("pathname://",""),I=void 0!==y?function(e){return e.startsWith("/")}(n=y)?v(n):n:void 0,k=Object(r.useRef)(!1),B=p?a.e:a.c,x=l.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&g&&window.docusaurus.prefetch(I),function(){x&&u&&u.disconnect()}}),[I,x,g]);var H=null!==(t=null==I?void 0:I.startsWith("#"))&&void 0!==t&&t,P=!I||!g||H;return I&&g&&!H&&!h&&N.collectLink(I),P?i.a.createElement("a",Object.assign({href:I},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(B,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(I),k.current=!0)},innerRef:function(e){var t,n;x&&e&&g&&(t=e,n=function(){window.docusaurus.prefetch(I)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:I||""},p&&{isActive:O,activeClassName:f}))}},239:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);