(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{187:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),c=(a(0),a(209)),r=a(210),s=(a(211),a(212)),o=(a(56),{id:"row-level-security",title:"Row Level Security for Power BI/Onedrive Reports",sidebar_label:"Row Level Authentication"}),b={unversionedId:"admin-guide/agent-manager/agent/row-level-security",id:"admin-guide/agent-manager/agent/row-level-security",isDocsHomePage:!1,title:"Row Level Security for Power BI/Onedrive Reports",description:"There is a 2-step authentication for these 2 agents that requires a sign-in validation from both Admins (Super Admin/Admins) and Users:",source:"@site/docs/admin-guide/agent-manager/agent/row-level-security.md",sourceDirName:"admin-guide/agent-manager/agent",slug:"/admin-guide/agent-manager/agent/row-level-security",permalink:"/VV-Docs/docs/admin-guide/agent-manager/agent/row-level-security",version:"current",sidebar_label:"Row Level Authentication",frontMatter:{id:"row-level-security",title:"Row Level Security for Power BI/Onedrive Reports",sidebar_label:"Row Level Authentication"},sidebar:"adminGuide",previous:{title:"Agent Management",permalink:"/VV-Docs/docs/admin-guide/agent-manager/agent/agent-management"},next:{title:"Cluster Management",permalink:"/VV-Docs/docs/admin-guide/agent-manager/cluster"}},l=[{value:"Create Instance: Admin-level authentication",id:"create-instance-admin-level-authentication",children:[]},{value:"Access Reports: User-level authentication",id:"access-reports-user-level-authentication",children:[]}],d={toc:l};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There is a 2-step authentication for these 2 agents that requires a sign-in validation from both ",Object(c.b)("em",{parentName:"p"},"Admins (Super Admin/Admins)")," and ",Object(c.b)("em",{parentName:"p"},"Users"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Admins must create a new instance and authenticate the login credentials."),Object(c.b)("li",{parentName:"ul"},"Regular users must also log-in to the agents and validate the credentials to access the reports.")),Object(c.b)("h2",{id:"create-instance-admin-level-authentication"},"Create Instance: Admin-level authentication"),Object(c.b)("p",null,"Admin creates a new Power BI or Onedrive instance in the ",Object(c.b)("strong",{parentName:"p"},"Agent Manager > Instance Manager ")," screen by clicking ",Object(c.b)("strong",{parentName:"p"},"Add Instance"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Authentication Pending",src:Object(r.a)("doc-images/admin-guide/agent/auth-pending.png")})),Object(c.b)("p",null,"New PowerBI instance created")),Object(c.b)("p",null,"The initial ",Object(c.b)("strong",{parentName:"p"},"Status"),' of the instance will be "Yellow". This status indicates that Authentication is pending for the Agent.'),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Select the Instance and click ",Object(c.b)("strong",{parentName:"p"},"Login As Admin"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Login as Admin",src:Object(r.a)("doc-images/admin-guide/agent/login-as-admin.png")})),Object(c.b)("p",null,"Login as Admin"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In the pop-up window, enter the credentials of an account with administrative privileges:"),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Power BI Administrator Login",src:Object(r.a)("doc-images/admin-guide/admin-mode/rw3.jpg")})))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Now the user will be authenticated successfully:"),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Successful User Authentication",src:Object(r.a)("doc-images/admin-guide/admin-mode/rw4.jpg")})))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},'Power BI/Onedrive Agent is activated with a "Green" status.'),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Instance Manager active",src:Object(r.a)("doc-images/admin-guide/agent/instance-green.png")})),Object(c.b)("p",null,"Instance status activated"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("strong",{parentName:"p"},"Agent Manager"),", select Power BI/Onedrive agents and click ",Object(c.b)("strong",{parentName:"p"},"Sync Users")," and ",Object(c.b)("strong",{parentName:"p"},"Sync Reports"),"."))),Object(c.b)("h2",{id:"access-reports-user-level-authentication"},"Access Reports: User-level authentication"),Object(c.b)("p",null,"For a ",Object(c.b)("em",{parentName:"p"},"User")," to access the Power BI/Onedrive reports, the user has to log-in to the respective agent platform in either of the 2 ways:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"BI Platform"),", select the the Platform name, or")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Go to Profile ",Object(c.b)("strong",{parentName:"p"},"Settings > Authorize Agents")," and select ",Object(c.b)("strong",{parentName:"p"},"Login"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Powerbi agent Login Credentials",src:Object(r.a)("doc-images/admin-guide/agent/authorize-agents.png")}))))),Object(c.b)("p",null,"In both cases, the credentials to be given in the pop-up window must be the same as the platform username mapped for the user."),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Powerbi agent Login Credentials",src:Object(r.a)("doc-images/admin-guide/agent/ms-sign-in.jpg")})),Object(c.b)("p",null,"Microsoft Sign-in screen")),Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Powerbi agent Login Credentials",src:Object(r.a)("doc-images/admin-guide/admin-mode/rw4.jpg")})),Object(c.b)("p",null,"Success credential verification screen")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If there is a mismatch in the platform user mapping and the user credentials, then the below authentication error will be shown:"),"  ",Object(c.b)("div",{class:"center"},Object(c.b)(s.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Powerbi agent Login Credentials",src:Object(r.a)("doc-images/admin-guide/agent/auth-failure.png")}))),Object(c.b)("p",{parentName:"div"},"Check the Microsoft Office login credentials for any other user log-in.\nYou must log out the other user and sign-in as your logged-in user credentials."))))}m.isMDXComponent=!0}}]);