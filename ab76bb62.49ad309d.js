(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),r=(a(0),a(210)),c=a(211),b=(a(212),a(213)),l=(a(53),{id:"power-bi",sidebar_label:"POWER BI",title:"Power BI Platform Configuration"}),o={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",id:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",isDocsHomePage:!1,title:"Power BI Platform Configuration",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi.md",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",version:"current",sidebar_label:"POWER BI",sidebar:"adminGuide",previous:{title:"File BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/file-bi"},next:{title:"SSRS Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/ssrs"}},p=[{value:"Set up the Application in Azure",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]},{value:"Configure Permissions for the Application",id:"configure-permissions-for-the-application",children:[]}],s={rightToc:p};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","We need to Setup the application in Azure Active Directory ")),Object(r.b)("p",null,"This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant"}),"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant")," for steps to acquire a tenant."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Contact the Active Directory Administrator to perform the following steps as some of the actions will require administrator consent."))),Object(r.b)("p",null,"There are 3 main steps to configure Power BI agent:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#set-up-the-application-in-azure"}),"Set up the Application in Azure")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#create-the-application-secret"}),"Create the Application Secret")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#configure-permissions-for-the-application"}),"Configure Permissions for the Application"))),Object(r.b)("h3",{id:"set-up-the-application-in-azure"},"Set up the Application in Azure"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Azure portal > ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://portal.azure.com"}),"https://portal.azure.com"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Azure Active Directory > App Registrations > New Application registration")),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Azure Application setup",src:Object(c.a)("/doc-images/powerbi/azure-app-setup.png")})),Object(r.b)("p",null,"Azure Application setup")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Set the name, type and redirect URI of the application. "),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Application Registration",src:Object(c.a)("/doc-images/powerbi/application-registration.png")})),Object(r.b)("p",null,"Application Registration")))),Object(r.b)("p",null," :::note\nThe type should be Native and the Redirect URI must be formatted as ",Object(r.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect"),"\n:::"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Create"),"."),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This URI should reflect the PowerBI Agent machine hostname or public IP address and the port at which the new agent instance needs to be created.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Note the Application ID upon successfully registering the application."),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"New Application Id",src:Object(c.a)("/doc-images/powerbi/new-app-id.png")}))),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Provide this under the key "CLIENTID" during the configuration of Power BI agent in BI Hub. ')))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To verify the Redirect URI, Click on the application and go to Authentication. "),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"The URL shown here is the one that you entered while creating the new application. ")),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Settings page & Redirect URI",src:Object(c.a)("/doc-images/powerbi/settings-redirect.png")})),Object(r.b)("p",null,"Settings page & Redirect URI")))),Object(r.b)("h3",{id:"create-the-application-secret"},"Create the Application Secret"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Navigate to ",Object(r.b)("strong",{parentName:"p"},"Certificates & Secrets")," and click on ",Object(r.b)("strong",{parentName:"p"},"New Client secret")," to add a new key.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Specify a description and duration for client secret and click on ",Object(r.b)("strong",{parentName:"p"},"Add"),".  "),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Client secret setup",src:Object(c.a)("/doc-images/powerbi/app-key-setup.png")})),Object(r.b)("p",null,"Client Secret Setup")),Object(r.b)("p",{parentName:"li"},"The Client secret is added and the value is displayed."),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Client Secret",src:Object(c.a)("/doc-images/powerbi/client-secret.png")})),Object(r.b)("p",null,"Client Secret")),Object(r.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'Provide this under the key "CLIENTSECRET" during the configuration of Power BI agent in BI Hub.\nIf failed to note down the value, please repeat the step ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#create-the-application-secret"}),"Create the Application Secret")," to create a new key."))))),Object(r.b)("h3",{id:"configure-permissions-for-the-application"},"Configure Permissions for the Application"),Object(r.b)("p",null," The application requires some permission level actions on behalf of the user. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Go to ",Object(r.b)("strong",{parentName:"li"},"Azure portal > azure active directory > App registrations")," and click on your application and select ",Object(r.b)("strong",{parentName:"li"},"API permissions"),"."),Object(r.b)("li",{parentName:"ul"},"Click on Add."),Object(r.b)("li",{parentName:"ul"},"Map the permissions for the API's referring to the table below for ",Object(r.b)("strong",{parentName:"li"},"Microsoft Graph API , Windows Azure Active Directory API")," and ",Object(r.b)("strong",{parentName:"li"},"Microsoft Power BI")," API.")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"API")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Permissions")),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Access Details")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Microsoft Graph")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Profile"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Users Basic Profile")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Users Email Address")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Groups")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read all users' full profile")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Microsoft Azure Active Directory")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read Directory Data")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Groups")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Users' full profiles")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sign in and read user profile")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory.AccessAsUser.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access the directory as the signed-in user")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Power BI Service")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dashboard.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Dashboards")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all datasets")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Metadata.View_Any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Content Properties")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Reports")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Groups")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View User's Group")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"App.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All PowerBI Apps")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Capacity.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all capacities")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tenant.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All content in tenant")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Workspace.Read.All"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all workspaces")))),Object(r.b)("p",null," ",Object(r.b)("em",{parentName:"p"},"Permissions to be given")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Save")," and then click ",Object(r.b)("strong",{parentName:"li"},"Grant Permissions")," to delegate the permissions to the service account.")),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Permissions to be given",src:Object(c.a)("/doc-images/powerbi/permissions-consolidated.png")})),Object(r.b)("p",null,"Permissions")),Object(r.b)("p",null,"The permissions must be given to the BI Hub Power BI Agent service account:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Office 365 Global Administrator"),Object(r.b)("li",{parentName:"ul"},"Power BI Service Administrator")))}d.isMDXComponent=!0}}]);