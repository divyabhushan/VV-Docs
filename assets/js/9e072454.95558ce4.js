(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),s=(a(0),a(222)),i=a(223),c=a(224),b=a(225),o=(a(56),{id:"user-management",sidebar_label:"User Management",title:"User Management",hide_title:!0}),d={unversionedId:"admin-guide/user-manager/user-management",id:"admin-guide/user-manager/user-management",isDocsHomePage:!1,title:"User Management",description:"Add a New User",source:"@site/docs/admin-guide/user-manager/user-management.mdx",sourceDirName:"admin-guide/user-manager",slug:"/admin-guide/user-manager/user-management",permalink:"/VV-Docs/docs/admin-guide/user-manager/user-management",version:"current",sidebar_label:"User Management",frontMatter:{id:"user-management",sidebar_label:"User Management",title:"User Management",hide_title:!0},sidebar:"adminGuide",previous:{title:"User Manager Welcome Screen",permalink:"/VV-Docs/docs/admin-guide/user-manager/user-manager-main"},next:{title:"Group Management",permalink:"/VV-Docs/docs/admin-guide/user-manager/group-management"}},l=[{value:"Add a New User",id:"add-a-new-user",children:[{value:"Add Users from other BI Platforms",id:"add-users-from-other-bi-platforms",children:[]}]},{value:"Edit User",id:"edit-user",children:[{value:"Edit the Password of BI Hub (Native) authenticated user",id:"edit-the-password-of-bi-hub-native-authenticated-user",children:[]}]},{value:"Delete User",id:"delete-user",children:[]},{value:"Add Reports to an existing User",id:"add-reports-to-an-existing-user",children:[{value:"Troubleshooting",id:"troubleshooting",children:[]}]},{value:"Filter the User&#39;s list",id:"filter-the-users-list",children:[]},{value:"Sync Metadata",id:"sync-metadata",children:[]}],m={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"add-a-new-user"},"Add a New User"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Click ",Object(s.b)("strong",{parentName:"li"},"Add User")," at the top-right corner.",Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Add User option",src:Object(i.a)("doc-images/admin-guide/user-manager/add-user.png")})),Object(s.b)("p",null,"Add User"))),Object(s.b)("li",{parentName:"ul"},"Enter ",Object(s.b)("strong",{parentName:"li"},"Fullname"),", and select: ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Native")," to add a user who will be authenticated by BI Hub (because the user is currently authenticated by BI platforms and not AD).\nOR "),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Windows AD")," to add a user who will be authenticated by Windows AD."))),Object(s.b)("li",{parentName:"ul"},"Click ",Object(s.b)("strong",{parentName:"li"},"Continue"),".",Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Select Agent(s)",src:Object(i.a)("doc-images/admin-guide/user-manager/select-agent.png")})),Object(s.b)("p",null,"Select Agent(s)"))),Object(s.b)("li",{parentName:"ul"},"Select the agent to be added for the user and the corresponding username. Click ",Object(s.b)("strong",{parentName:"li"},"Add")," to include more agents."),Object(s.b)("li",{parentName:"ul"},"Click ",Object(s.b)("strong",{parentName:"li"},"Submit")," when you are finished adding the agent(s).")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The added user will be reflected in the User Manager's list.")),Object(s.b)("p",null,"In order to synchronize reports for this user, one of the following actions can be performed:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Wait till the next scheduled synchronization activity happens."),Object(s.b)("li",{parentName:"ul"},"Follow steps in Section ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-reports"),mdxType:"Link"},"Synchronize Reports of Users")," to Sync Reports with a single click"),Object(s.b)("li",{parentName:"ul"},"Manually add reports to the user using User Manager as explained in section ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/user-manager/user-management#add-reports-to-an-existing-user"),mdxType:"Link"},"Add Reports to an existing user"),".")),Object(s.b)("h3",{id:"add-users-from-other-bi-platforms"},"Add Users from other BI Platforms"),Object(s.b)("p",null,"An Admin can map users who have different user names across BI Platforms into one BI Hub user as follows:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Go to ",Object(s.b)("strong",{parentName:"li"},"User Manager"),".",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},"The users added previously (either from Section ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-users-between-agent-and-bi-hub"),mdxType:"Link"},"Synchronize Users between Agent and BI Hub")," or ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/authenticate/synch-ms-ad-bihub"),mdxType:"Link"},"Synchronize Microsoft AD users with BI Hub"),") will be listed. ")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Select the user and click ",Object(s.b)("strong",{parentName:"li"},"Edit"),", and then click ",Object(s.b)("strong",{parentName:"li"},"Add"),".")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"From the drop-down list boxes, select the appropriate ",Object(s.b)("strong",{parentName:"p"},"Agent")," name and ",Object(s.b)("strong",{parentName:"p"},"User")," name. ( To search a user name, start typing the name in the drop-down box. )"),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Edit User",height:"400",src:Object(i.a)("doc-images/admin-guide/edit-user.jpg")})),Object(s.b)("p",null,"Edit User"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Update"),". "))),Object(s.b)("p",null,"Now the BI Hub user chosen in the ",Object(s.b)("strong",{parentName:"p"},"User Manager")," page has been mapped to the user name from the BI platform. Repeat the steps until users of all BI platforms are mapped.\nNext, proceed with the ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-reports"),mdxType:"Link"},"Synchronize reports of Users")," section."),Object(s.b)("h2",{id:"edit-user"},"Edit User"),Object(s.b)("p",null,"Power user can edit user settings such as agents, authentication, and group membership. Select the user and click ",Object(s.b)("strong",{parentName:"p"},"Edit"),"."),Object(s.b)("h4",{id:"add-a-new-agent"},"Add a new Agent"),Object(s.b)("p",null,"To add a new agent, select the ",Object(s.b)("strong",{parentName:"p"},"Agent Users")," tab and click ",Object(s.b)("strong",{parentName:"p"},"Add"),"."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Manage Agents",src:Object(i.a)("doc-images/admin-guide/user-manager/edit-user-agent.png")})),Object(s.b)("p",null,"Manage Agents added to a user")),Object(s.b)("p",null,"Select the agent name from the drop-down list, and a username."),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"To delete the agent(s), click the Delete ( ",Object(s.b)("img",{width:"25",src:Object(i.a)("img/delete.png")})," ) icon next to the agent.")),Object(s.b)("h4",{id:"edit-the-authentication-type-for-a-user"},"Edit the Authentication type for a user"),Object(s.b)("p",null,"In the ",Object(s.b)("strong",{parentName:"p"},"Authentication")," tab, select and edit the Authentication type."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{height:"400",alt:"Edit Authentication",src:Object(i.a)("doc-images/admin-guide/user-manager/edit-user-authenticate.png")})),Object(s.b)("p",null,"Edit Authentication")),Object(s.b)("h4",{id:"addremove-a-user-tofrom-a-group"},"Add/remove a user to/from a Group"),Object(s.b)("p",null,"In the ",Object(s.b)("strong",{parentName:"p"},"Membership")," tab"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("strong",{parentName:"p"},"Add")," and select a Group to add the user to the group.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Remove")," against a Group's name to remove the user from the assigned group."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Group Management",src:Object(i.a)("doc-images/admin-guide/user-manager/edit-user-group.png")})),Object(s.b)("p",null,"Manage User's Groups")))),Object(s.b)("h3",{id:"edit-the-password-of-bi-hub-native-authenticated-user"},"Edit the Password of BI Hub (Native) authenticated user"),Object(s.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"To reset the lost BI Hub password, the user must request a change password through an internal Ticketing system choosing BI Hub as 'Authentication Type'."))),Object(s.b)("p",null,"The BI Hub Admin must take the following steps to set the password to a generic one and notify the user:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Go to ",Object(s.b)("strong",{parentName:"li"},"User Manager"),"."),Object(s.b)("li",{parentName:"ul"},"Select the user whose password is to be edited and click ",Object(s.b)("strong",{parentName:"li"},"Edit"),"."),Object(s.b)("li",{parentName:"ul"},"In the ",Object(s.b)("strong",{parentName:"li"},"Edit User")," screen, click the ",Object(s.b)("strong",{parentName:"li"},"Authentication")," tab and expand the ",Object(s.b)("strong",{parentName:"li"},"Native")," option. Enter the new password as received from administrator and click on Update.",Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Reset Native password",height:"400",src:Object(i.a)("doc-images/admin-guide/admin-functions/maintenance-bihub/edituserpwd.jpg")})),Object(s.b)("p",null,"Reset Native user Password")))),Object(s.b)("p",null,"When the user logs-in to the BI Hub application, the user will be prompted to change the password that was reset by BI Hub admin."),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},"If a user wants to reset the Windows AD password, then the user must approach the Windows AD administrator."))),Object(s.b)("h2",{id:"delete-user"},"Delete User"),Object(s.b)("p",null,"Delete the entire user information and the user\u2019s reports from the application."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Delete User",src:Object(i.a)("doc-images/admin-guide/delete-user.png")})),Object(s.b)("p",null,"Delete a user")),Object(s.b)("h2",{id:"add-reports-to-an-existing-user"},"Add Reports to an existing User"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"In the ",Object(s.b)("strong",{parentName:"li"},"User Manager")," screen, select the user and click ",Object(s.b)("strong",{parentName:"li"},"Manage Reports"),".")),Object(s.b)("p",null,"A list of agents configured for the user will be displayed on the left, and assigned reports on the right."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Select an agent, and click ",Object(s.b)("strong",{parentName:"p"},"Add/Remove Reports"),"."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Agent User Mapping",src:Object(i.a)("doc-images/admin-guide/admin-functions/maintenance-bihub/agentusermapping.jpg")})),Object(s.b)("p",null,"Agent User Mapping"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A list of unassigned reports will be on the left and assigned reports on the right."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Assigning Reports",src:Object(i.a)("doc-images/admin-guide/admin-functions/maintenance-bihub/assigningreports.jpg")})))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Select the reports or folders in the ",Object(s.b)("strong",{parentName:"p"},"Unassigned Reports")," pane and click ",Object(s.b)("strong",{parentName:"p"},"Move")," that moves the reports in the ",Object(s.b)("strong",{parentName:"p"},"Assigned Reports")," section."))),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"The ",Object(s.b)("strong",{parentName:"p"},"Search Reports")," on the top-right can be used to search for reports in both Assigned and Unassigned columns. "),Object(s.b)("p",{parentName:"blockquote"},"The breadcrumb on the top sets the context by displaying ",Object(s.b)("strong",{parentName:"p"},"BI Hub user name > Agent Name > BI platform user name"),".")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"To remove the reports displayed under an agent, select the reports or folders in the ",Object(s.b)("strong",{parentName:"li"},"Assigned Reports")," pane and click ",Object(s.b)("strong",{parentName:"li"},"Remove"),".")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",{parentName:"div",className:"admonition-heading"},Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",{parentName:"h5",className:"admonition-icon"},Object(s.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(s.b)("div",{parentName:"div",className:"admonition-content"},Object(s.b)("p",{parentName:"div"},'Once you complete the reports assignment, a message pops-up on the screen: "Action Completed Succcessfully".'))),Object(s.b)("p",null,"Click ",Object(s.b)("strong",{parentName:"p"},"Back")," to assign/unassign reports for the other agents against the same user. "),Object(s.b)("p",null,"To complete the manual assignment of reports to BI Hub, click ",Object(s.b)("strong",{parentName:"p"},"Sync Metadata"),"."),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sync Metadata",src:Object(i.a)("doc-images/admin-guide/admin-functions/maintenance-bihub/syncmetadata.jpg")})),Object(s.b)("p",null,"Sync Metadata")),Object(s.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(s.b)("p",null,"If the Agent is down/inactive, the Reports cannot be retrieved. An Alert Message is displayed as shown below:"),Object(s.b)("div",{class:"center"},Object(s.b)(b.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Reports in disabled status",src:Object(i.a)("doc-images/admin-guide/admin-functions/maintenance-bihub/alert1.png")})),Object(s.b)("p",null,"Reports in disabled status")),Object(s.b)("p",null,"You must ",Object(s.b)(c.a,{to:Object(i.a)("docs/admin-guide/agent-manager/agent/agent-management#start-the-instance"),mdxType:"Link"},"Start the Instance")," from the ",Object(s.b)("strong",{parentName:"p"},"Agent Manager")," screen."),Object(s.b)("h2",{id:"filter-the-users-list"},"Filter the User's list"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Username"),Object(s.b)("li",{parentName:"ul"},"Agents name"),Object(s.b)("li",{parentName:"ul"},"Authentication")),Object(s.b)("h2",{id:"sync-metadata"},"Sync Metadata"))}p.isMDXComponent=!0}}]);