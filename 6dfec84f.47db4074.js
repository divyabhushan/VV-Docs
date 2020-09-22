(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return j})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return y}));var a=n(2),i=n(6),o=n(0),r=n.n(o),s=n(214),u=n(215),l=n(216),c=n(229),b=n(219),d=n(127),p=n.n(d),f=37,m=39;var v=function(e){var t=e.block,n=e.children,a=e.defaultValue,i=e.values,s=e.groupId,u=Object(c.a)(),l=u.tabGroupChoices,d=u.setTabGroupChoices,v=Object(o.useState)(a),O=v[0],j=v[1];if(null!=s){var h=l[s];null!=h&&h!==O&&i.some((function(e){return e.value===h}))&&j(h)}var g=function(e){j(e),null!=s&&d(s,e)},I=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(b.a)("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(b.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case f:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(I,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))};var O=function(e){return r.a.createElement("div",null,e.children)},j={id:"intro",title:"What is BI Hub",sidebar_label:"Introduction"},h={unversionedId:"getting-started/intro",id:"getting-started/intro",isDocsHomePage:!0,title:"What is BI Hub",description:"// Add to the top of the file below the front matter.",source:"@site/docs/getting-started/intro.md",permalink:"/VV-Docs/docs/",sidebar_label:"Introduction",sidebar:"sideBar"},g=[],I={rightToc:g};function y(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},I,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"BI Hub is a web-based Visual BI product."),Object(s.b)("p",null,"BI Hub enables users to view and analyse reports built in various BI platforms in one page, without having to login into those platforms individually."),Object(s.b)("p",null,"Highlights of this product includes but not limited to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Smart view and Discovery of BI assets")," - Discover not accessible assets and request access")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Unified view of BI assets")," \u2013 A consolidated view of reports from multiple BI platforms in one page.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Incredibly easy setup and maintenance")," \u2013 Easy to setup and 100% automated synchronization between BI Hub and BI platforms."))),Object(s.b)("p",null,"BI Hub consists of ",Object(s.b)("strong",{parentName:"p"},"BI Hub Server, BI Hub Web, and BI Hub Agents"),"."),Object(s.b)("p",null,"This installation document explains the steps involved in installation of the three components and procedure to check the success/failure of the installation process."),Object(s.b)(v,{defaultValue:"Installation Guide",values:[{label:"Installation Guide",value:"Installation Guide"},{label:"Admin Guide",value:"Admin Guide"},{label:"User Guide",value:"User Guide"}],mdxType:"Tabs"},Object(s.b)(O,{value:"Installation Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/installation-guide/welcome"),mdxType:"Link"},"Installation Guide")),Object(s.b)(O,{value:"Admin Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/admin-guide/getting-started/welcome"),mdxType:"Link"},"Admin Guide")),Object(s.b)(O,{value:"User Guide",mdxType:"TabItem"},Object(s.b)(l.a,{to:Object(u.a)("docs/user-guide/onboard"),mdxType:"Link"},"User Guide"))))}y.isMDXComponent=!0},219:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},228:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},229:function(e,t,n){"use strict";var a=n(0),i=n(228);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);