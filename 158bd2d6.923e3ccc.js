(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{225:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(225)),o={id:"ssl-config",title:"SSL Configuration",sidebar_label:"SSL Configuration"},c={unversionedId:"installation-guide/advanced/ssl-config",id:"installation-guide/advanced/ssl-config",isDocsHomePage:!1,title:"SSL Configuration",description:"This section explains the steps to configure the SSL, if you have installed BI Hub Web with Nginx.",source:"@site/docs/installation-guide/advanced/ssl-config.md",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl-config",sidebar_label:"SSL Configuration",sidebar:"installationGuide",previous:{title:"Post Installation Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/post-install"},next:{title:"BI Hub Agent Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/agent-config"}},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section explains the steps to ",Object(r.b)("em",{parentName:"p"},"configure the SSL"),", if you have installed ",Object(r.b)("em",{parentName:"p"},"BI Hub Web with Nginx"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you have installed BI Hub Web without Nginx, then configuring SSL will be out of the scope for this document. "))),Object(r.b)("p",null,"By default,the bundled Nginx will contain the self-signed SSL certificate issued to example.com. Kindly have the proper SSL certificate from the authorized vendor in .crt format and key file. You can also have your own Self-Signed SSL certificate, but you need to make sure that certificate to a trusted certificate store by following the configuration steps provided by the particular browser which is out of scope for this document. BI Hub recommends having the proper SSL certificate from the authorized vendor."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Rename the SSL files to the required names. The X.X.X.X.crt file should be renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"server.crt")," file and the ",Object(r.b)("inlineCode",{parentName:"li"},"X.X.X.X.key")," file should be renamed to ",Object(r.b)("inlineCode",{parentName:"li"},"server.key"),"."),Object(r.b)("li",{parentName:"ol"},"Take a backup of the ",Object(r.b)("inlineCode",{parentName:"li"},"server.crt")," and ",Object(r.b)("inlineCode",{parentName:"li"},"server.key")," files which could be found in the folder location ",Object(r.b)("inlineCode",{parentName:"li"},"<installation_folder>/VBIViewWeb/nginx/nginx/conf"),". In case of any failure in SSL configuration, we will need this file to bring back the server to normal working condition."),Object(r.b)("li",{parentName:"ol"},"Now replace these files with your SSL files."),Object(r.b)("li",{parentName:"ol"},"Nginx Server needs to be restarted for the configuration to take effect. For restarting the Nginx server, open ",Object(r.b)("inlineCode",{parentName:"li"},"manager-windows.exe")," file in administrator mode which could be found in the location ",Object(r.b)("inlineCode",{parentName:"li"},"<installation_folder>/VBIViewWeb/nginx/"),"."),Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("strong",{parentName:"li"},"Manage Server > Nginx")," and click ",Object(r.b)("strong",{parentName:"li"},"Restart"),". Wait for the server to get restarted.")),Object(r.b)("p",null,"\u2705 SSL is configured successfully for your BI Hub Web."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},"If there is any problem in restarting the server, check the log files for the errors which could be found at ",Object(r.b)("inlineCode",{parentName:"li"},"<installation_folder>/VBIViewWeb/nginx/nginx/logs/"),"."),Object(r.b)("li",{parentName:"ul"},"If you couldn\u2019t troubleshoot the errors, kindly replace the old SSL file with the new one and restart the server."),Object(r.b)("li",{parentName:"ul"},"If the server starts successfully, then the problem will be mostly with the SSL file. Kindly verify the SSL certificate format and have a proper SSL format.")),Object(r.b)("p",{parentName:"div"},"If you continue to have the problem, you could raise the support ticket in the support portal or by sending an email to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@visualbi.comwith"}),"support@visualbi.comwith")," supported log files and error images."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you are going to configure SSL, please make sure that BI Hub Server and BI Hub Agents and its respective BI platforms should also be configured with proper SSL. You cannot access HTTP content from the https protocol. The browser will throw the mixed content error if you try to access HTTP content from the https URL."))))}b.isMDXComponent=!0}}]);