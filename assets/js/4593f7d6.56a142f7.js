(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(3),r=(a(0),a(210)),i=a(211),o=(a(212),a(213));a(56);const c={id:"microstrategy",sidebar_label:"MICROSTRATEGY",title:"Microstrategy Platform Configuration"},b={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy",id:"admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy",isDocsHomePage:!1,title:"Microstrategy Platform Configuration",description:"To access MicroStrategy reports through BI Hub, SSO should be configured and enabled in the MicroStrategy Platform as the only authentication mode.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy",version:"current",sidebar_label:"MICROSTRATEGY",frontMatter:{id:"microstrategy",sidebar_label:"MICROSTRATEGY",title:"Microstrategy Platform Configuration"},sidebar:"adminGuide",previous:{title:"Cognos",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/cognos"},next:{title:"BI Hub Application overview",permalink:"/VV-Docs/docs/admin-guide/overview"}},s=[],l={toc:s};function p({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To access MicroStrategy reports through BI Hub, SSO should be configured and enabled in the MicroStrategy Platform as the only authentication mode."),Object(r.b)("p",null,"The following steps are to be followed to achieve the same:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Mapping Windows AD users:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In MicroStrategy Developer, select expand the ",Object(r.b)("strong",{parentName:"p"},"Administration")," section.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the right-hand side window, select ",Object(r.b)("strong",{parentName:"p"},"User Manager"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Right-click on each user and select ",Object(r.b)("strong",{parentName:"p"},"Edit"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Microstrategy Developer",src:Object(i.a)("/doc-images/microstrategy/microstrategy-developer.png")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the User Editor window, from the ",Object(r.b)("strong",{parentName:"p"},"Authentication")," menu select ",Object(r.b)("strong",{parentName:"p"},"Metadata"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Link Windows user")," section on the right-hand side, select ",Object(r.b)("strong",{parentName:"p"},"Browse")," to chose the corresponding Windows AD user."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"User Editor",src:Object(i.a)("/doc-images/microstrategy/user-editor.png")}))))),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Create a Group Policy object for Internet Explorer:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In Group Policy Management window, go to ",Object(r.b)("strong",{parentName:"p"},"User Configuration > Administrative Templates > Windows Components > Internet Explorer > Internet Control Panel > Security Page > Site to Zone Assignment List"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"",src:Object(i.a)("/doc-images/microstrategy/site-zone-assign.png")})),Object(r.b)("p",null,"Site to Zone Assignment List"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select the ",Object(r.b)("strong",{parentName:"p"},"Enabled")," option.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Next, select the ",Object(r.b)("strong",{parentName:"p"},"Show")," button.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add MicroStrategy Server URL in the ",Object(r.b)("strong",{parentName:"p"},"Value Name")," field and 2 in the ",Object(r.b)("strong",{parentName:"p"},"Value")," field to mark it as a trusted Server."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Show Content",src:Object(i.a)("/doc-images/microstrategy/show-content.png")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to Windows ",Object(r.b)("strong",{parentName:"p"},"Control Panel > Internet Options > Advanced")," tab.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enable the ",Object(r.b)("em",{parentName:"p"},"Enable Integrated Windows Authentication")," option and select ",Object(r.b)("strong",{parentName:"p"},"OK"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"IE properties",src:Object(i.a)("/doc-images/microstrategy/internet-properties.png")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"MicroStrategy Web Administrator > Default Properties")," option."))),Object(r.b)("div",{class:"center"},Object(r.b)(o.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Admin page",src:Object(i.a)("/doc-images/microstrategy/admin-page.png")}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Login")," section on the right, enable ",Object(r.b)("strong",{parentName:"li"},"Windows Authentication")," and make it the default authentication."),Object(r.b)("li",{parentName:"ul"},"Un-check all the other login mode options."),Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Trusted Authentication Providers")," option, select ",Object(r.b)("strong",{parentName:"li"},"Custom SSO")," from the drop-down list.")),Object(r.b)("p",null,"Restart the server for the changes to take place."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"It is recommended to do the above configuration in IIS Server."))))}p.isMDXComponent=!0}}]);