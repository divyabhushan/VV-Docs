(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(236)),o=(n(237),{id:"install-pre",title:"Before you begin",sidebar_label:"Before you begin"}),l={unversionedId:"installation-guide/install-pre",id:"installation-guide/install-pre",isDocsHomePage:!1,title:"Before you begin",description:"* Get the License Key information for BI Hub. You should have received it through the registered email. If not please contact your sales representative.",source:"@site/docs/installation-guide/install-pre.md",slug:"/installation-guide/install-pre",permalink:"/VV-Docs/docs/installation-guide/install-pre",version:"current",sidebar_label:"Before you begin",sidebar:"installationGuide",previous:{title:"Download BI Hub",permalink:"/VV-Docs/docs/installation-guide/download-bihub"},next:{title:"Installation of BI Hub Server",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/install"}},c=[{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Get the ",Object(a.b)("strong",{parentName:"li"},"License Key")," information for BI Hub. You should have received it through the registered email. If not please contact your sales representative."),Object(a.b)("li",{parentName:"ul"},"You need to have ",Object(a.b)("strong",{parentName:"li"},"Administrator access")," on the server in which you are going to install BI Hub."),Object(a.b)("li",{parentName:"ul"},"Enable ",Object(a.b)("strong",{parentName:"li"},"Microsoft .NET Framework 3.5")," by using add or remove roles/features in server manager in the server management tools."),Object(a.b)("li",{parentName:"ul"},"Get the ",Object(a.b)("strong",{parentName:"li"},"Database connection string")," details to install on the Production server. If you are installing for a POC then you can use the embedded database which will come with BI Hub Server."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"SSL certificates")," - If secure communication (https) is desired, The Certificate has to be OpenSSL compatible X.509 with the following format (PEM encoded format)"),Object(a.b)("li",{parentName:"ul"},"Get the ",Object(a.b)("strong",{parentName:"li"},"SMTP Server connection")," details to enable SMTP protocol.")),Object(a.b)("h3",{id:"next-steps"},"Next Steps"),Object(a.b)("ul",{className:"contains-task-list"},Object(a.b)("li",Object(r.a)({parentName:"ul"},{className:"task-list-item"}),Object(a.b)("input",Object(r.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Install ",Object(a.b)("strong",{parentName:"li"},"BI Hub Server"),".")))}u.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,f=b["".concat(o,".").concat(d)]||b[d]||p[d]||a;return n?i.a.createElement(f,l(l({ref:t},s),{},{components:n})):i.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},237:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(22),i=n(239);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,l=void 0!==o&&o,c=a.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},239:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);