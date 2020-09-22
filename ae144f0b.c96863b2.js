(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{168:function(t,e,i){"use strict";i.r(e),i.d(e,"frontMatter",(function(){return l})),i.d(e,"metadata",(function(){return c})),i.d(e,"rightToc",(function(){return b})),i.d(e,"default",(function(){return u}));var n=i(2),o=i(6),a=(i(0),i(214)),r=i(215),s=(i(216),i(217)),l=(i(47),{id:"spotfire",sidebar_label:"SPOTFIRE",title:"Spotfire Platform Configuration"}),c={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire",isDocsHomePage:!1,title:"Spotfire Platform Configuration",description:"Spotfire requires external authentication to be enabled to work with BI Hub.",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire.md",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/spotfire",sidebar_label:"SPOTFIRE",sidebar:"installationGuide",previous:{title:"SSRS Platform Configuration",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/ssrs"},next:{title:"Microstrategy Platform Configuration",permalink:"/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/microstrategy"}},b=[],p={rightToc:b};function u(t){var e=t.components,i=Object(o.a)(t,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,i,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Spotfire requires external authentication to be enabled to work with BI Hub."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Copy all the files from ",Object(a.b)("inlineCode",{parentName:"p"},"<spotfire installation location>/ext_auth/ directory")," and paste that to ",Object(a.b)("inlineCode",{parentName:"p"},'"tibco\\tss\\tomcat\\lib\\webapps\\spotfire\\WEB-INF\\lib"'),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'In Spotfire configuration utility, to enable Spotfire Server to use the custom Java authentication filter, set the type in the external authentication to "Authentication Filter".\nWith the external authentication set to "Authentication Filter", the Filter class in the authentication filter configuration is set to ',Object(a.b)("inlineCode",{parentName:"p"},'"vbi.spotfireagent.VbiExtAuthenticator"'),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Service account needs to be created for this agent and that account should have the role of API User, Impersonator."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(s.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Users and Groups",src:Object(r.a)("/doc-images/spotfire/users-groups.png")}))),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(s.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Add Users",src:Object(r.a)("/doc-images/spotfire/add-users.png")}))))),Object(a.b)("p",null,"Restart the server for the changes to take place."))}u.isMDXComponent=!0}}]);