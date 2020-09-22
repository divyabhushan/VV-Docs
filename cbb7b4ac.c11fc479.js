(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{187:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return m}));var n=i(2),a=i(6),b=(i(0),i(214)),o=i(215),c=(i(216),i(217)),l=(i(47),{id:"bobj-rest-bi",title:"BOBJ REST BI Platform Configuration",sidebar_label:"BOBJ Rest BI"}),r={unversionedId:"installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi",id:"installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi",isDocsHomePage:!1,title:"BOBJ REST BI Platform Configuration",description:"* Launch Central Management Console.",source:"@site/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/bobj-rest-bi",sidebar_label:"BOBJ Rest BI",sidebar:"installationGuide",previous:{title:"BOBJ Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/bobj"},next:{title:"Tableau Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/tableau"}},s=[],d={rightToc:s};function m(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Launch Central Management Console."),Object(b.b)("li",{parentName:"ul"},"Go to Authentication Enterprise.")),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/cms.png")}))),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/bobj-central-management-console.png")}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Under Trusted Authentication, check the box against Trusted Authentication is enabled.")),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/bobj-trusted1.png")}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Choose New Shared Secret.This will generate the shared secret key.")),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/bobj-trusted2.png")}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Choose Download Shared Secret and then Update.")),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/bobj-trusted3.png")}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Copy the downloaded file ",Object(b.b)("em",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(b.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\java\\pjs\\container\\bin")," in Windows."),Object(b.b)("li",{parentName:"ul"},"Copy the downloaded file ",Object(b.b)("em",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(b.b)("inlineCode",{parentName:"li"},"INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win64_x64\\")," and ",Object(b.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win32_x86\\")),Object(b.b)("li",{parentName:"ul"},"Next in CMC go to ",Object(b.b)("strong",{parentName:"li"},"Servers -> Core Services -> WebApplicationContainerServer"))),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/core-services.png")}))),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/wac-services.png")}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Now right click that WACS services and then select properties."),Object(b.b)("li",{parentName:"ul"},"In that properties, under Trusted Authentication Configuration set Retrieving Method as 'HTTP_HEADER' and User Name Parameter as 'X-SAP-VBI-TRUSTED-USER' or some other name that you want.")),Object(b.b)("p",null,"Kindly note this parameter name since it will be needed for BOBJ REST Agent creation step."),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)(c.a,{mdxType:"Zoom"},Object(b.b)("img",{alt:"img",src:Object(o.a)("/doc-images/trusted-auth-config.png")}))))}m.isMDXComponent=!0}}]);