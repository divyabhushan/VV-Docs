(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{201:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),o=(n(0),n(210)),c=n(211),r=(n(212),n(213)),b=(n(53),{id:"bobj",title:"BOBJ Platform Configuration",sidebar_label:"BOBJ"}),s={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj",id:"admin-guide/getting-started/prerequisite/bi-platform-config/bobj",isDocsHomePage:!1,title:"BOBJ Platform Configuration",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj.md",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/bobj",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj",version:"current",sidebar_label:"BOBJ",sidebar:"adminGuide",previous:{title:"Add New Agent",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/add-new-agent"},next:{title:"BOBJ REST BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj-rest-bi"}},d=[],m={rightToc:d};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BOBJ Agent uses the Trusted Secret Key file mechanism to authenticate itself with the BOBJ.\nGenerate and download the Trusted Secret Key for BOBJ authentication with the following steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Log-in")," to the ",Object(o.b)("strong",{parentName:"li"},"BOBJ CMC"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"Central Management Console")," Screen, select ",Object(o.b)("strong",{parentName:"p"},"Authentication")," from drop-down list.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select ",Object(o.b)("strong",{parentName:"p"},"Enterprise")," in the ",Object(o.b)("em",{parentName:"p"},"Title")," drop-down menu list."),Object(o.b)("div",{class:"center"},Object(o.b)(r.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"img",src:Object(c.a)("/doc-images/bobj-central-management-console.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next scroll down to the ",Object(o.b)("strong",{parentName:"p"},"Trusted Authentication")," segment and enable the checkbox ",Object(o.b)("strong",{parentName:"p"},"Trusted Authentication is enabled"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(r.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"img",src:Object(c.a)("/doc-images/bobj-trusted1.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Next click on the ",Object(o.b)("strong",{parentName:"p"},"New Shared Secret")," button and click ",Object(o.b)("strong",{parentName:"p"},"Download Shared Secret"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(r.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"img",src:Object(c.a)("/doc-images/bobj-trusted2.png")}))),Object(o.b)("div",{class:"center"},Object(o.b)(r.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"img",src:Object(c.a)("/doc-images/bobj-trusted3.png")})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u2705 The ",Object(o.b)("inlineCode",{parentName:"p"},"TrustedPrinciple.conf")," file will get downloaded. "))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Copy the ",Object(o.b)("em",{parentName:"p"},"TrustedPrinciple.conf")," file to the ",Object(o.b)("inlineCode",{parentName:"p"},"<agent installation location>/TRUSTED/")," directory to ensure that the BOBJ instance is started."))))}l.isMDXComponent=!0}}]);