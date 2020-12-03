(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return y}));var a=n(3),i=n(7),o=n(0),r=n.n(o),s=n(210),u=n(211),l=n(212),c=n(223),b=n(215),d=n(129),p=n.n(d),m=37,f=39;var v=function(e){var t=e.lazy,n=e.block,a=e.children,i=e.defaultValue,s=e.values,u=e.groupId,l=e.className,d=Object(c.a)(),v=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(o.useState)(i),g=j[0],h=j[1];if(null!=u){var I=v[u];null!=I&&I!==g&&s.some((function(e){return e.value===I}))&&h(I)}var y=function(e){h(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":n},l)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(b.a)("tabs__item",p.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case f:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case m:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(o.cloneElement)(a.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},a.map((function(e,t){return Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};var O=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)},j={id:"intro",title:"What is BI Hub",sidebar_label:"Introduction",slug:"/"},g={unversionedId:"getting-started/intro",id:"getting-started/intro",isDocsHomePage:!1,title:"What is BI Hub",description:"BI Hub is a web-based Visual BI product.",source:"@site/docs/getting-started/intro.md",slug:"/",permalink:"/docs/",version:"current",sidebar_label:"Introduction",sidebar:"sideBar"},h=[],I={rightToc:h};function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},I,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"BI Hub is a web-based Visual BI product."),Object(s.b)("p",null,"BI Hub enables users to view and analyze reports built-in various BI platforms in one page, without having to login into those platforms individually."),Object(s.b)("p",null,"Highlights of this product includes but not limited to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Smart view and Discovery of BI assets")," - Discover not accessible assets and request access")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Unified view of BI assets")," \u2013 A consolidated view of reports from multiple BI platforms in one page.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Incredibly easy setup and maintenance")," \u2013 Easy to setup and 100% automated synchronization between BI Hub and BI platforms."))),Object(s.b)("p",null,"BI Hub consists of ",Object(s.b)("strong",{parentName:"p"},"BI Hub Server, BI Hub Web, and BI Hub Agents"),"."),Object(s.b)("p",null,"This installation document explains the steps involved in the installation of the three components and the procedure to check the success/failure of the installation process."),Object(s.b)(v,{defaultValue:"Installation Guide",values:[{label:"Installation Guide",value:"Installation Guide"},{label:"Admin Guide",value:"Admin Guide"},{label:"User Guide",value:"User Guide"}],mdxType:"Tabs"},Object(s.b)(O,{value:"Installation Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/installation-guide/welcome"),mdxType:"Link"},"Installation Guide")),Object(s.b)(O,{value:"Admin Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/admin-guide/getting-started/welcome"),mdxType:"Link"},"Admin Guide")),Object(s.b)(O,{value:"User Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/user-guide/onboard"),mdxType:"Link"},"User Guide"))))}y.isMDXComponent=!0},215:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},223:function(e,t,n){"use strict";var a=n(0),i=n(224);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},224:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i}}]);