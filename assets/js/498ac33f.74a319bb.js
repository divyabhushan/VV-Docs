(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return h}));var n=a(3),i=a(7),c=(a(0),a(219)),o=a(220),s=a(221),d=a(222),r=(a(56),{id:"manage-auth",title:"Authentication",sidebar_label:"Authentication Manager"}),b={unversionedId:"admin-guide/authenticate/manage-auth",id:"admin-guide/authenticate/manage-auth",isDocsHomePage:!1,title:"Authentication",description:"Intro about Authentication....",source:"@site/docs/admin-guide/authenticate/manage-auth.mdx",sourceDirName:"admin-guide/authenticate",slug:"/admin-guide/authenticate/manage-auth",permalink:"/VV-Docs/docs/admin-guide/authenticate/manage-auth",version:"current",sidebar_label:"Authentication Manager",frontMatter:{id:"manage-auth",title:"Authentication",sidebar_label:"Authentication Manager"},sidebar:"adminGuide",previous:{title:"Dashboard Administration",permalink:"/VV-Docs/docs/admin-guide/user-manager/dashboard-admin"},next:{title:"Reports",permalink:"/VV-Docs/docs/admin-guide/reports/reports"}},l=[{value:"Add Authentication",id:"add-authentication",children:[{value:"Add Microsoft AD details to BI Hub",id:"add-microsoft-ad-details-to-bi-hub",children:[]},{value:"Add SAML Authentication",id:"add-saml-authentication",children:[]}]},{value:"Edit Authentication details in BI Hub",id:"edit-authentication-details-in-bi-hub",children:[]},{value:"Synchronize Users with BI Hub",id:"synchronize-users-with-bi-hub",children:[{value:"Next Steps",id:"next-steps",children:[]}]},{value:"Delete Authentication in BI Hub",id:"delete-authentication-in-bi-hub",children:[]}],u={toc:l};function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Intro about Authentication....\nThe types of Authentication BI Hub Platform supports are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Native"),":"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Windows AD"),":"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"SAML"),": Mapping the user credentials between Microsoft Office 365 and BI Hub Platform.")),Object(c.b)("h2",{id:"add-authentication"},"Add Authentication"),Object(c.b)("p",null,"To manage Authentications Admin(bihubadmin) must go the ",Object(c.b)("strong",{parentName:"p"},"Authentication > Authentication Manager")," section and click ",Object(c.b)("strong",{parentName:"p"},"Add Authentication"),"."),Object(c.b)("h3",{id:"add-microsoft-ad-details-to-bi-hub"},"Add Microsoft AD details to BI Hub"),Object(c.b)("p",null,"Windows AD authentication allows the users/groups to be fetched from a Windows Active Directory."),Object(c.b)("p",null,"To add MS AD Authentication, select the ",Object(c.b)("strong",{parentName:"p"},"Authentication Type"),' as "LDAP" from the drop-down list.\nEnter the form fields and click ',Object(c.b)("strong",{parentName:"p"},"Submit"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(d.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Authentication Manager Menu",src:Object(o.a)("doc-images/admin-guide/auth/win-ad-auth-settings.png")})),Object(c.b)("p",null,"Windows AD Authentication Settings")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Following are the fields and their descriptions:",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Base DN: DC=VBI , DC=SOLUTIONS"),Object(c.b)("li",{parentName:"ul"},"URL: ",Object(c.b)("inlineCode",{parentName:"li"},"<ldap://xxxdomain.companyname.solutions>")),Object(c.b)("li",{parentName:"ul"},"Username: username of the account present in Windows AD"),Object(c.b)("li",{parentName:"ul"},"Password: password of the user"),Object(c.b)("li",{parentName:"ul"},"Groups: Name of the groups to synchronize the users from."),Object(c.b)("li",{parentName:"ul"},"Additional User Attribute:"),Object(c.b)("li",{parentName:"ul"},"Full SSO: If Full SSO setup is established in the organization, then enable the check box and BI Hub will leverage that setup.")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"In such a scenario, when the user does a sign-on successfully into the company\u2019s network, then BI Hub will not prompt for a login and the user can work on the product directly.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Bring Subgroup Members:")),Object(c.b)("h3",{id:"add-saml-authentication"},"Add SAML Authentication"),Object(c.b)("h2",{id:"edit-authentication-details-in-bi-hub"},"Edit Authentication details in BI Hub"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"To edit the authentication details, admin can select the type and click ",Object(c.b)("strong",{parentName:"p"},"Edit"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Edit the required fields in the ",Object(c.b)("strong",{parentName:"p"},"Edit Authentication"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Save"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(d.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Edit Authentication details",src:Object(o.a)("doc-images/admin-guide/auth/edit-auth.png")})),Object(c.b)("p",null,"Edit Authentication screen")))),Object(c.b)("h2",{id:"synchronize-users-with-bi-hub"},"Synchronize Users with BI Hub"),Object(c.b)("p",null,"Go to ",Object(c.b)("strong",{parentName:"p"},"Authentication")," page, select the platform (Windows AD or SAML) and click ",Object(c.b)("strong",{parentName:"p"},"Sync Users"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(d.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Authentication Manager Menu",src:Object(o.a)("doc-images/admin-guide/synch/sync-ad-users.png")}))),Object(c.b)("p",null,"All the users under the given Authentication information will be added to BI Hub."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"If users of all BI platforms are authenticated using Microsoft AD/LDAP and user names are identical across platforms, then proceed to ",Object(c.b)(s.a,{to:Object(o.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-reports"),mdxType:"Link"},"Synchronize Reports of Users")," section. "))),Object(c.b)("h3",{id:"next-steps"},"Next Steps"),Object(c.b)("p",null,"Consider the scenario When one BI platform authenticates through Microsoft AD and the other BI platform authenticates Native users, also if the user names are different between BI platforms.\nIn such a case, the above sync would import the users only with the Microsoft AD authentication."),Object(c.b)("p",null,"In order to import users from the other BI Platform(s), proceed to ",Object(c.b)(s.a,{to:Object(o.a)("docs/admin-guide/user-manager/user-management#add-users-from-other-bi-platforms"),mdxType:"Link"},"Add Users from other BI Platforms (users having different user names across BI Platforms)")," section."),Object(c.b)("p",null,"Next proceed to ",Object(c.b)(s.a,{to:Object(o.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-reports"),mdxType:"Link"},"Synchronize Reports of Users")," section."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"You can schedule to sync the Windows AD users automatically using the Authentication Synchronization utility. ","[Refer the ",Object(c.b)(s.a,{to:Object(o.a)("docs/admin-guide/admin-utilities/scheduled-sync-ad"),mdxType:"Link"}," Scheduled synchronization with AD"),"]"," section."))),Object(c.b)("p",null,'To set the default Authentication type, select the Authentication name - "Windows AD" and click ',Object(c.b)("strong",{parentName:"p"},"Set as Default"),":"),Object(c.b)("div",{class:"center"},Object(c.b)(d.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Authentication Manager - Default Authentication Type",src:Object(o.a)("doc-images/admin-guide/synch/win-ad-default.png")})),Object(c.b)("p",null,"Windows AD selected as the Default Authentication Type")),Object(c.b)("h2",{id:"delete-authentication-in-bi-hub"},"Delete Authentication in BI Hub"),Object(c.b)("p",null,"Select the Authentication type and click ",Object(c.b)("strong",{parentName:"p"},"Delete"),"."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Deleting the Windows Authentication will delete not only the AD entry but also all the users and reports connected to AD and the operation cannot be undone."))))}h.isMDXComponent=!0}}]);