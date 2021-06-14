(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n(3),i=(n(0),n(209)),r=n(210),b=(n(211),n(212));n(56);const c={id:"bobj-rest-bi",title:"BOBJ REST BI Platform Configuration",sidebar_label:"BOBJ Rest BI"},o={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",id:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",isDocsHomePage:!1,title:"BOBJ REST BI Platform Configuration",description:"1. Launch Central Management Console and click on Authentication.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi.mdx",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi",version:"current",sidebar_label:"BOBJ Rest BI",frontMatter:{id:"bobj-rest-bi",title:"BOBJ REST BI Platform Configuration",sidebar_label:"BOBJ Rest BI"},sidebar:"adminGuide",previous:{title:"BOBJ Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj"},next:{title:"Tableau Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/tableau"}},l=[],s={toc:l};function m({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Launch ",Object(i.b)("strong",{parentName:"li"},"Central Management Console")," and click on ",Object(i.b)("strong",{parentName:"li"},"Authentication"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Central Management Console screen",src:Object(r.a)("/doc-images/cms.png")})),Object(i.b)("p",null,"Select Authentication in the Central Management Console screen")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the next screen, select ",Object(i.b)("strong",{parentName:"li"},"Authentication > Enterprise"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"img",src:Object(r.a)("/doc-images/admin-guide/central-management-console.png")}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("strong",{parentName:"li"},"Trusted Authentication")," section, check the box against ",Object(i.b)("strong",{parentName:"li"},"Trusted Authentication is enabled"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"img",src:Object(r.a)("/doc-images/bobj-trusted1.png")}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"New Shared Secret")," to generate the shared secret key.")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"img",src:Object(r.a)("/doc-images/bobj-trusted2.png")}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Download Shared Secret"),", and then click ",Object(i.b)("strong",{parentName:"li"},"Update"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"img",src:Object(r.a)("/doc-images/bobj-trusted3.png")}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Copy the downloaded file ",Object(i.b)("inlineCode",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(i.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\java\\pjs\\container\\bin")," in Windows."),Object(i.b)("li",{parentName:"ul"},"Also copy the same file ",Object(i.b)("em",{parentName:"li"},"TrustedPrincipal.conf")," to ",Object(i.b)("inlineCode",{parentName:"li"},"INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win64_x64\\")," and ",Object(i.b)("inlineCode",{parentName:"li"},"<INSTALLDIR>\\SAP BusinessObjects Enterprise XI 4.0\\win32_x86\\")," locations.")),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Next in ",Object(i.b)("strong",{parentName:"li"},"Central Management Console")," select ",Object(i.b)("strong",{parentName:"li"},"Servers"),", and expand  ",Object(i.b)("strong",{parentName:"li"},"Service Categories"),". ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Core Services")," in the right pane.")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Service Categories > Core Services",src:Object(r.a)("/doc-images/core-services.png")})),Object(i.b)("p",null,"Select Core Services")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("em",{parentName:"li"},"Server Name"),", right-click ",Object(i.b)("strong",{parentName:"li"},"BISBX.WebApplicationContainerServer")," and select ",Object(i.b)("em",{parentName:"li"},"properties"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"img",src:Object(r.a)("/doc-images/wac-services.png")}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("strong",{parentName:"li"},"Trusted Authentication Configuration"),", set ",Object(i.b)("strong",{parentName:"li"},"Retrieving Method")," as 'HTTP_HEADER' and ",Object(i.b)("strong",{parentName:"li"},"User Name Parameter")," as 'X-SAP-VBI-TRUSTED-USER' or any other relevant name:")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Trusted Authentication Configuration",src:Object(r.a)("/doc-images/trusted-auth-config.png")})),Object(i.b)("p",null,"Trusted Authentication Configuration parameters")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Kindly note these parameters details to be used for the BOBJ REST Agent creation step.")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Go to the location: ",Object(i.b)("inlineCode",{parentName:"li"},"<BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom"),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Edit the ",Object(i.b)("inlineCode",{parentName:"li"},"global.properties")," file as shown below:")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Edit the global properties file",src:Object(r.a)("/doc-images/global-properties-edit.png")})),Object(i.b)("p",null,"Global properties file content")),Object(i.b)("p",null,"Click below to copy the content of the file:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom\\global.properties"',title:'"BOBJ-Installation-Directory>\\tomcat\\webapps\\BOE\\WEB-INF\\config\\custom\\global.properties"'},"sso.enabled=true \ntrusted.auth.user.retrieval=HTTP_HEADER \ntrusted.auth.user.param=X-SAP-VBI-TRUSTED-USER\n")),Object(i.b)("p",null,"\u2705 BOBJ REST BI configured."))}m.isMDXComponent=!0}}]);