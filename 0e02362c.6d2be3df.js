(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{67:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return d})),i.d(t,"metadata",(function(){return l})),i.d(t,"rightToc",(function(){return b})),i.d(t,"default",(function(){return p}));var n=i(3),a=i(7),o=(i(0),i(210)),r=i(211),s=i(212),c=i(213),d=(i(53),{id:"overview",title:"BI Hub Application overview",sidebar_label:"BI Hub Application overview"}),l={unversionedId:"admin-guide/overview",id:"admin-guide/overview",isDocsHomePage:!1,title:"BI Hub Application overview",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/overview.md",slug:"/admin-guide/overview",permalink:"/docs/admin-guide/overview",version:"current",sidebar_label:"BI Hub Application overview",sidebar:"adminGuide",previous:{title:"Microstrategy Platform Configuration",permalink:"/docs/admin-guide/getting-started/prerequisite/bi-platform-config/microstrategy"},next:{title:"Agent Manager",permalink:"/docs/admin-guide/agent-manager/agent-manager"}},b=[{value:"First-time Login",id:"first-time-login",children:[]},{value:"Forgot Password",id:"forgot-password",children:[]},{value:"Landing Page",id:"landing-page",children:[]},{value:"Admin Home Page",id:"admin-home-page",children:[]}],m={rightToc:b};function p(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BI Hub is used for only viewing reports and it cannot be used to create/modify/delete reports. Those tasks will have to be done from the BI platform. Most of the features explained in this guide are launched from the application pane after the user/admin does a successful login."),Object(o.b)("p",null,"Following are the modules displayed in the application side panel:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)(s.a,{to:Object(r.a)("#admin-home-page"),mdxType:"Link"},"Admin Home Page")),Object(o.b)("li",{parentName:"ul"},Object(o.b)(s.a,{to:Object(r.a)("docs/admin-guide/admin-functions/integrate-bihub-platform-msad/edit-agent-instance"),mdxType:"Link"},"Agent Manager")),Object(o.b)("li",{parentName:"ul"},"User manager"),Object(o.b)("li",{parentName:"ul"},"Authentication"),Object(o.b)("li",{parentName:"ul"},"Audit"),Object(o.b)("li",{parentName:"ul"},"Reports"),Object(o.b)("li",{parentName:"ul"},"User Request"),Object(o.b)("li",{parentName:"ul"},"Settings")),Object(o.b)("p",null,"This is the same order in which the modules are displayed in the application pane as shown below. The functionality of these modules are covered in subsequent sections of this document."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Admin Menu",src:Object(r.a)("/doc-images/admin-guide/overview/admin-menu.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"BI Hub side-panel modules")),Object(o.b)("h3",{id:"first-time-login"},"First-time Login"),Object(o.b)("p",null,"BI Hub administrator-mode and user-mode uses the same product URL and depending on the\nlogin (as admin or user name) appropriate modules of the application are rendered. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"After launching the product, the administrator can log into the application by entering the user ID as ",Object(o.b)("em",{parentName:"li"},"bihubadmin")," and password as ",Object(o.b)("em",{parentName:"li"},"password"),"."),Object(o.b)("li",{parentName:"ul"},"A Set Admin Password screen pops up during the first login to accept a new password.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: The administrator logins with the authentication type set as ",Object(o.b)("em",{parentName:"p"},"Native"),";\nUsers login with authentication type set as ",Object(o.b)("em",{parentName:"p"},"Microsoft AD/LDAP"),".")),Object(o.b)("h3",{id:"forgot-password"},"Forgot Password"),Object(o.b)("p",null,"To reset the forgotten password, run the ",Object(o.b)("strong",{parentName:"p"},"Change Password")," utility as explained in the ",Object(o.b)(s.a,{to:Object(r.a)("docs/admin-guide/admin-utilities/change-passwd"),mdxType:"Link"},"Change Password")," section."),Object(o.b)("h3",{id:"landing-page"},"Landing Page"),Object(o.b)("p",null,"After setting-up the required agents, establishing the connectivity with directory services, and a few successful synchronizations, the landing page loads up with four sections:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Instances configured")," \u2013 List of instances under the agents being configured, along with instances details like ",Object(o.b)("em",{parentName:"li"},"number of Reports, Server URL, Port number"),", and ",Object(o.b)("em",{parentName:"li"},"Status")," of the instance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Authentications configured")," \u2013 ",Object(o.b)("em",{parentName:"li"},"Type")," of authentications and the ",Object(o.b)("em",{parentName:"li"},"Status"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Components configured")," \u2013 List of components like ",Object(o.b)("em",{parentName:"li"},"Elastic Search, Message Queue"),", and ",Object(o.b)("em",{parentName:"li"},"SMTP")," configured along with their ",Object(o.b)("em",{parentName:"li"},"Port")," number, and ",Object(o.b)("em",{parentName:"li"},"Status"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Synchronization Information")," \u2013 Synchronization details for users, reports and authentication. The administrator can check here for recent activities that happened in BI Hub. To view the recent activities over a period of time, the administrator can click on the calendar icon and provide a date range as input.")),Object(o.b)("h3",{id:"admin-home-page"},"Admin Home Page"),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Landing Page New",src:Object(r.a)("/doc-images/admin-guide/overview/landing-page-new.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Admin Home Page")))}p.isMDXComponent=!0}}]);