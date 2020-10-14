(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(220)),o={id:"change-passwd",title:"Change Password",sidebar_label:"Change Password"},c={unversionedId:"admin-guide/admin-utilities/change-passwd",id:"admin-guide/admin-utilities/change-passwd",isDocsHomePage:!1,title:"Change Password",description:"To reset the admin password, follow the steps below:",source:"@site/docs/admin-guide/admin-utilities/change-passwd.md",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/change-passwd",sidebar_label:"Change Password",sidebar:"adminGuide",previous:{title:"Administrator Utilities",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/admin-utilities"},next:{title:"Scheduled synchronization with AD",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-synch-ad"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To reset the admin password, follow the steps below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Navigate to the following location to locate the Change Password utility:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"<VBI View Server installation directory>/utilities/ChangePassword.exe")))),Object(i.b)("li",{parentName:"ol"},"Click on ",Object(i.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator"),". Enter the following command: ChangePassword.exe"),Object(i.b)("li",{parentName:"ol"},"A prompt to enter the new password appears. Type the password and press ENTER"),Object(i.b)("li",{parentName:"ol"},"A prompt to confirm the password appears. Once confirmed, the admin password will be reset.")))}p.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);