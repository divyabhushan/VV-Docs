(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(236)),o=n(237),c=n(238),l={id:"agent-config",title:"BI Hub Agent Configuration",sidebar_label:"BI Hub Agent Configuration"},s={unversionedId:"installation-guide/advanced/agent-config",id:"installation-guide/advanced/agent-config",isDocsHomePage:!1,title:"BI Hub Agent Configuration",description:"SSL Configuration",source:"@site/docs/installation-guide/advanced/agent-config.md",slug:"/installation-guide/advanced/agent-config",permalink:"/VV-Docs/docs/installation-guide/advanced/agent-config",version:"current",sidebar_label:"BI Hub Agent Configuration"},b=[{value:"SSL Configuration",id:"ssl-configuration",children:[{value:"SSL Configuration for BOBJ Agent",id:"ssl-configuration-for-bobj-agent",children:[]}]},{value:"Advanced Agent Configuration",id:"advanced-agent-configuration",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ssl-configuration"},"SSL Configuration"),Object(r.b)("p",null,"BI Hub Agents will communicate with BI Hub Server and Web via the REST API connection. For configuring these REST connections to https, kindly follow the steps below. This step is common for all the agents except BOBJ Agent. For BOBJ Agent proceed to the next section. Kindly have the proper SSL certificate from the authorized vendor in .crt format and key file. You can also have your own Self-Signed SSL certificate, but you need to make sure that certificate to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. BI Hub recommends having the proper SSL certificate from the authorized vendor."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the manager.ini file in edit mode with administrative privileges. File location in ",Object(r.b)("inlineCode",{parentName:"li"},"<installation location>"),"."),Object(r.b)("li",{parentName:"ul"},"Change the SSL property from False to True and save the file"),Object(r.b)("li",{parentName:"ul"},"Copy and paste the SSL files to the SSL folder found in the ",Object(r.b)("inlineCode",{parentName:"li"},"<Agent Installation Folder>/SSL")),Object(r.b)("li",{parentName:"ul"},"Rename the file ",Object(r.b)("inlineCode",{parentName:"li"},"<your name>.crt")," to ",Object(r.b)("inlineCode",{parentName:"li"},"public.crt")," and ",Object(r.b)("inlineCode",{parentName:"li"},"<your name>.key")," to private.key"),Object(r.b)("li",{parentName:"ul"},"Restart the agent service manager by going into services.msc. The service name will be ",Object(r.b)("inlineCode",{parentName:"li"},"BIHub<Agent name>SM"),". For example for tableau agent the service name will be VBITableauSM"),Object(r.b)("li",{parentName:"ul"},"Now the SSL has been configured successfully.")),Object(r.b)("h3",{id:"ssl-configuration-for-bobj-agent"},"SSL Configuration for BOBJ Agent"),Object(r.b)("p",null,"For BOBJ Agent, the SSL certificates also need to be in ",Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},".jks"))," format which is Java Key Store format apart from ",Object(r.b)("em",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"em"},".crt"))," format."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Open the ",Object(r.b)("em",{parentName:"li"},"manager.ini")," file in edit mode with administrative privileges. File location in ",Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"<installation location>")),"."),Object(r.b)("li",{parentName:"ul"},"Change the SSL property from False to True and save the file"),Object(r.b)("li",{parentName:"ul"},"Rename the file ",Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"<your name>.crt"))," to ",Object(r.b)("em",{parentName:"li"},"public.crt")," and ",Object(r.b)("em",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"em"},"<your name>.key"))," to ",Object(r.b)("em",{parentName:"li"},"private.key")),Object(r.b)("li",{parentName:"ul"},"Copy and paste the SSL files to the SSL folder found in the ",Object(r.b)("inlineCode",{parentName:"li"},"< BOBJ Instance installation location >/SSL")),Object(r.b)("li",{parentName:"ul"},"Import the SSL Certificate and key into the Java KeyStore."),Object(r.b)("li",{parentName:"ul"},"Make sure that the Java KeyStore file generated is in the name ",Object(r.b)("strong",{parentName:"li"},"BOBJ_Keystore.jks"),"."),Object(r.b)("li",{parentName:"ul"},"Place the generated file in the SSL folder under the location ",Object(r.b)("inlineCode",{parentName:"li"},"<BOBJ Instance installation location>/SSL")),Object(r.b)("li",{parentName:"ul"},"Enter the appropriate password of the generated KeyStore file in the SSL Password field in the ",Object(r.b)("inlineCode",{parentName:"li"},"manager.ini")," file.\nThis must be given after the SSL field.\nExample : ",Object(r.b)("inlineCode",{parentName:"li"},"SSL Password = password")," of the ",Object(r.b)("em",{parentName:"li"},"keystore.jks")),Object(r.b)("li",{parentName:"ul"},"Restart the agent service manager by going into ",Object(r.b)("em",{parentName:"li"},"services.msc"),". The service name will be ",Object(r.b)("strong",{parentName:"li"},"BIHUBBOBJSM"),".")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"SSL has been configured successfully for BOBJ Agent."))),Object(r.b)("h2",{id:"advanced-agent-configuration"},"Advanced Agent Configuration"),Object(r.b)("p",null,"By default, the agent will be configured with the basic default configuration and the port number given during the installation process.\nIf you want to change any property of the agent, you can change it by editing the ",Object(r.b)("inlineCode",{parentName:"p"},"manager.ini")," file.\nOpen the ",Object(r.b)("inlineCode",{parentName:"p"},"manager.ini")," file in edit mode with administrative privileges. The file will be located in ",Object(r.b)("inlineCode",{parentName:"p"},"<agent installation location>/"),".\nChange the required property to the desired value. Save the file and restart the agent service manager by going into ",Object(r.b)("inlineCode",{parentName:"p"},"services.msc"),".\nThe service name will be ",Object(r.b)("inlineCode",{parentName:"p"},"BIHub<Agentname>SM"),".\nFor example for tableau agent the service name will be BIHubTableauSM."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A new ",Object(r.b)("em",{parentName:"p"},"Agent")," instance must be added and each agent must be configured with the the BI Platform. These steps are covered in the ",Object(r.b)(c.a,{to:Object(o.a)("docs/admin-guide/getting-started/prerequisite/prerequisite"),mdxType:"Link"},"Administration Guide - pre-requisite")," section."))))}d.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(22),i=n(239);function r(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var r=void 0===a?{}:a,o=r.forcePrependBaseUrl,c=void 0!==o&&o,l=r.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var b=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+b:b}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},238:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(10),o=n(239),c=n(11),l=Object(a.createContext)({collectLink:function(){}}),s=n(237),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,p=e.to,m=e.href,f=e.activeClassName,g=e.isActive,h=e["data-noBrokenLinkCheck"],O=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(s.b)().withBaseUrl,j=Object(a.useContext)(l),y=p||m,N=Object(o.a)(y),w=null==y?void 0:y.replace("pathname://",""),S=void 0!==w?function(e){return e.startsWith("/")}(n=w)?v(n):n:void 0,C=Object(a.useRef)(!1),B=d?r.e:r.c,L=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!L&&N&&window.docusaurus.prefetch(S),function(){L&&u&&u.disconnect()}}),[S,L,N]);var k=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,A=!S||!N||k;return S&&N&&!k&&!h&&j.collectLink(S),A?i.a.createElement("a",Object.assign({href:S},y&&!N&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(B,Object.assign({},O,{onMouseEnter:function(){C.current||(window.docusaurus.preload(S),C.current=!0)},innerRef:function(e){var t,n;L&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(S)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:S||""},d&&{isActive:g,activeClassName:f}))}},239:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}))}}]);