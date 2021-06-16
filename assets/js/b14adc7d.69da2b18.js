(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{164:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return s})),i.d(t,"metadata",(function(){return c})),i.d(t,"toc",(function(){return b})),i.d(t,"default",(function(){return p}));var a=i(3),n=i(7),r=(i(0),i(210)),o=i(211),l=(i(212),i(213)),s=(i(56),{id:"qliksense",sidebar_label:"QLIKSENSE",title:"QlikSense Platform Configuration"}),c={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",id:"admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",isDocsHomePage:!1,title:"QlikSense Platform Configuration",description:"Follow the below steps to Generate Qliksense Certificates:",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qliksense.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",version:"current",sidebar_label:"QLIKSENSE",frontMatter:{id:"qliksense",sidebar_label:"QLIKSENSE",title:"QlikSense Platform Configuration"},sidebar:"adminGuide",previous:{title:"Tableau Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/tableau"},next:{title:"File BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/file-bi"}},b=[],m={toc:b};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Follow the below steps to ",Object(r.b)("strong",{parentName:"p"},"Generate Qliksense Certificates"),":"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log in to ",Object(r.b)("strong",{parentName:"p"},"Qlik Sense QMC")," as an ",Object(r.b)("em",{parentName:"p"},"Administrator"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Configure System")," menu on the left, click ",Object(r.b)("strong",{parentName:"p"},"Certificates"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",height:"500",src:Object(o.a)("/doc-images/qliksense/certificates.png")})))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Certificates")," generation window click ",Object(r.b)("strong",{parentName:"p"},"Add machine name"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(l.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"certificates",src:Object(o.a)("/doc-images/qliksense/qliksense-governance.png")}))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Select ",Object(r.b)("strong",{parentName:"li"},"Platform Independent PEM-format")," in the ",Object(r.b)("strong",{parentName:"li"},"Export file format for certificates")," drop-down list."),Object(r.b)("li",{parentName:"ul"},"Fill in the other additional optional fields."),Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Export certificates"),".")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The certificate files will be generated and will be exported to the location shown in that form itself.",Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Here is a list of the files that will be generated-"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"client.pem"),Object(r.b)("li",{parentName:"ul"},"client_key.pem"),Object(r.b)("li",{parentName:"ul"},"root.pem"),Object(r.b)("li",{parentName:"ul"},"server.pem"),Object(r.b)("li",{parentName:"ul"},"server_key.pem")))),Object(r.b)("li",{parentName:"ul"},"Copy and paste these certificate files in the ",Object(r.b)("inlineCode",{parentName:"li"},"<installation location>/TRUSTED")," directory.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"These certificate files are needed to start the Qliksense agent."))))}p.isMDXComponent=!0}}]);