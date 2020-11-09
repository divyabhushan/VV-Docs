(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),i=(n(0),n(224)),a=(n(225),{id:"troubleshooting",title:"Troubleshooting Steps",sidebar_label:"Troubleshooting Steps"}),c={unversionedId:"installation-guide/install-bihub-windows/server/troubleshooting",id:"installation-guide/install-bihub-windows/server/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Steps",description:"If you didn\u2019t get the webpage response then kindly follow the steps below to troubleshoot",source:"@site/docs/installation-guide/install-bihub-windows/server/troubleshooting.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/troubleshooting",sidebar_label:"Troubleshooting Steps",sidebar:"installationGuide",previous:{title:"Post Configuration Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/post-config"},next:{title:"Installation of BI Hub Web",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/install"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you didn\u2019t get the webpage response then kindly follow the steps below to troubleshoot "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify whether the instance is in running state in Configuration Utility.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Also verify that the Server instance service is running by opening up the ",Object(i.b)("inlineCode",{parentName:"p"},"Start > Run > Services.msc"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the log files which could be found in ",Object(i.b)("inlineCode",{parentName:"p"},"<installation folder>/server/log/app-log/<instance_name>.log"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the log files for any errors. "),Object(i.b)("div",Object(r.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For more information you have to set the log type. Please change the ",Object(i.b)("strong",{parentName:"p"},"Log Level")," as ",Object(i.b)("strong",{parentName:"p"},"info")," in the ",Object(i.b)("strong",{parentName:"p"},"General Section")," of the ",Object(i.b)("strong",{parentName:"p"},"Configuration Utility"),".\nRemember to restart the instance after changing the value.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you have enabled SSL, verify whether you have a valid SSL certificate. Check the logs for any SSL certificate error. If there is an SSL certificate error, the Server instance will fall back to HTTP. You could verify by visiting the HTTP URL.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Verify the log if there are any database connection errors."))),Object(i.b)("p",null,"If you are not able to successfully connect to the server after following these steps, kindly contact the BI Hub Support Team by raising a ticket in the support portal or by sending an email to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:support@bihub.com."}),"support@bihub.com.")," Kindly attach the supporting log files with the logger level set to ",Object(i.b)("strong",{parentName:"p"},"Info")," in the ",Object(i.b)("strong",{parentName:"p"},"Configuration Utility"),"."))}u.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,d=b["".concat(a,".").concat(f)]||b[f]||p[f]||i;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(228),o=n(227);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},227:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},228:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);