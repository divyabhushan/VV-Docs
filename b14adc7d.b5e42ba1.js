(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{174:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return b})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return p}));var a=i(2),n=i(6),r=(i(0),i(224)),c=i(225),o=(i(226),i(229)),l=(i(47),{id:"qliksense",sidebar_label:"QLIKSENSE",title:"QlikSense Platform Configuration"}),b={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",id:"admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",isDocsHomePage:!1,title:"QlikSense Platform Configuration",description:"Below are the steps to generate certificates:",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qliksense.md",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qliksense",sidebar_label:"QLIKSENSE",sidebar:"adminGuide",previous:{title:"Tableau Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/tableau"},next:{title:"File BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/file-bi"}},s=[],m={rightToc:s};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Below are the steps to generate certificates:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Log in to Qlik Sense QMC as an administrator.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the left side menu bar click Certificates menu under the configure system menu sections."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"img",src:Object(c.a)("/doc-images/qliksense/qlicksense-governance.png")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Certificate generation form opens.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on Add machine name to which the certificate needs to be generated.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the export file format for certificate dropdown, select platform-independent PEM-format.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Fill in other additional optional fields, but it\u2019s not necessary.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click the export certificate button in the bottom."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"certificates",src:Object(c.a)("/doc-images/qliksense/certificates.png")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The certificate files will be generated and will be exported to the location shown in that form itself."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Here is a list of the files that will be generated-"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"client.pem"),Object(r.b)("li",{parentName:"ul"},"client_key.pem"),Object(r.b)("li",{parentName:"ul"},"root.pem"),Object(r.b)("li",{parentName:"ul"},"server.pem"),Object(r.b)("li",{parentName:"ul"},"server_key.pem")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Copy and paste these certificate files in the ",Object(r.b)("inlineCode",{parentName:"p"},"<installation location>/TRUSTED")," directory."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"These certificate files are needed to start the Qliksense agent."))))}p.isMDXComponent=!0}}]);