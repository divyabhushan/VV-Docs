(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{225:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),f=r,d=b["".concat(a,".").concat(f)]||b[f]||p[f]||o;return n?i.a.createElement(d,c(c({ref:t},s),{},{components:n})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},226:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(229),i=n(228);function o(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=!n.startsWith(t)?t+n.replace(/^\//,""):n;return s?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},228:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},229:function(e,t,n){"use strict";var r=n(0),i=n(19);t.a=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),o=(n(0),n(225)),a=(n(226),{id:"install-pre",title:"Before you begin",sidebar_label:"Before you begin"}),c={unversionedId:"installation-guide/install-pre",id:"installation-guide/install-pre",isDocsHomePage:!1,title:"Before you begin",description:"* Get the License Key information for BI Hub. You should have received it through the registered email. If not please contact your sales representative.",source:"@site/docs/installation-guide/install-pre.md",permalink:"/VV-Docs/docs/installation-guide/install-pre",sidebar_label:"Before you begin",sidebar:"installationGuide",previous:{title:"Download BI Hub",permalink:"/VV-Docs/docs/installation-guide/download-bihub"},next:{title:"Installation of BI Hub Server",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/install"}},l=[{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Get the ",Object(o.b)("strong",{parentName:"li"},"License Key")," information for BI Hub. You should have received it through the registered email. If not please contact your sales representative."),Object(o.b)("li",{parentName:"ul"},"You need to have ",Object(o.b)("strong",{parentName:"li"},"Administrator access")," on the server in which you are going to install BI Hub."),Object(o.b)("li",{parentName:"ul"},"Enable ",Object(o.b)("strong",{parentName:"li"},"Microsoft .NET Framework 3.5")," by using add or remove roles/features in server manager in the server management tools."),Object(o.b)("li",{parentName:"ul"},"Get the ",Object(o.b)("strong",{parentName:"li"},"Database connection string")," details to install on the Production server. If you are installing for a POC then you can use the embedded database which will come with BI Hub Server."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"SSL certificates")," - If secure communication (https) is desired, The Certificate has to be OpenSSL compatible X.509 with the following format (PEM encoded format)"),Object(o.b)("li",{parentName:"ul"},"Get the ",Object(o.b)("strong",{parentName:"li"},"SMTP Server connection")," details to enable SMTP protocol.")),Object(o.b)("h3",{id:"next-steps"},"Next Steps"),Object(o.b)("ul",{className:"contains-task-list"},Object(o.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(o.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Install ",Object(o.b)("strong",{parentName:"li"},"BI Hub Server"),".")))}u.isMDXComponent=!0}}]);