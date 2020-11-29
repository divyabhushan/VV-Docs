(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{182:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return d})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return u}));var o,n=i(3),r=i(7),a=(i(0),i(217)),c=i(218),b=i(219),l={id:"row-level-security",title:"Row Level Security for Power BI Reports",sidebar_label:"Row Level Security for Power BI Reports"},d={unversionedId:"admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",id:"admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",isDocsHomePage:!1,title:"Row Level Security for Power BI Reports",description:"The Row Level Security feature has been implemented for the Power BI",source:"@site/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security.md",slug:"/admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",permalink:"/VV-Docs/docs/admin-guide/admin-functions/integrate-bihub-platform-msad/row-level-security",version:"current",sidebar_label:"Row Level Security for Power BI Reports"},s=[{value:"Admin Mode",id:"admin-mode",children:[]},{value:"User Mode",id:"user-mode",children:[]}],m=(o="Zoom",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),p={rightToc:s};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Row Level Security feature has been implemented for the Power BI\nReports. The steps followed for the configuration of the Row Level\nSecurity feature has been explained below for each mode:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#admin-mode"}),"Admin Mode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#user-mode"}),"User Mode"))),Object(a.b)("h2",{id:"admin-mode"},"Admin Mode"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"For Power BI Agent, once the Instance is being newly added, then the status will be in \u201cYellow\u201d color in the Instance Manager screen (see Figure below). The Yellow color status indicates that the Authentication is pending for the Agent."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Authentication Pending",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw1.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'Now select the Instance and click the "Login as Admin" button as shown in the below Figure.'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Login as Admin",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw2.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"A pop up window appears where the Admin needs to provide the Power BI Administrator Login credentials (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Power BI Administrator Login pop window",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw3.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now the user will be authenticated successfully as shown in the below Figure."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Successful User Authentication",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw4.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After providing the login credentials, the Power BI Agent will be activated and now the status will be in \u201cGreen\u201d color in the Instance Manager screen (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Instance Manager active",src:Object(c.a)("doc-images/admin-guide/admin-mode/rw5.jpg")}))))),Object(a.b)("h2",{id:"user-mode"},"User Mode"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"After logging in as an User in BI Hub application, the user will be able to access the Power BI Reports (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Power BI Report",src:Object(c.a)("doc-images/admin-guide/user-mode/rw6.jpg")}))),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},"Power BI Report"))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'In our example, the VBI View Demo user has mapped the Power BI Agent "Power BI QE Test" with the user \u201cpowerbiagent\u201d in the Agent Mapping screen in Admin Mode (see Figure below).'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Agent Mapping",src:Object(c.a)("doc-images/admin-guide/user-mode/rw7.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Now when the VBI View Demo user selects the Power BI Report in the User screen (see Figure: ",Object(a.b)(b.a,{to:Object(c.a)("#user-mode"),mdxType:"Link"},"Power BI Report"),") then he needs to provide the powerbiagent login credentials to access the Power BI Report (see Figure below)."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Powerbiagent Login Credentials",src:Object(c.a)("doc-images/admin-guide/user-mode/rw8.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"If the VBI View Demo user has provided any other user login credentials (other than powerbiagent), then an Error Message will be\ndisplayed as shown below."),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Authentication Error Message",src:Object(c.a)("doc-images/admin-guide/user-mode/rw9.jpg")})))),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},'For the Row Level Security implementation in the Power BI Platform Reports, the Toggle button for the "Comply with Row Level Security" option in the Add Agent screen of the Admin Mode should be enabled (see Figure below).'),Object(a.b)("div",{style:{textAlign:"center"}},Object(a.b)(m,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Row Level Security",src:Object(c.a)("doc-images/admin-guide/user-mode/rw10.jpg")}))),Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},"Row Level Security")))))}u.isMDXComponent=!0}}]);