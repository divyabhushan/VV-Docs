(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),i=(a(0),a(210)),c=a(211),b=(a(212),a(213)),l=(a(53),{id:"power-bi",sidebar_label:"POWER BI",title:"Power BI Platform Configuration"}),o={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",id:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",isDocsHomePage:!1,title:"Power BI Platform Configuration",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi.md",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",version:"current",sidebar_label:"POWER BI",sidebar:"adminGuide",previous:{title:"File BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/file-bi"},next:{title:"SSRS Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/ssrs"}},p=[{value:"Set up the Application in Azure",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]},{value:"Configure Permissions for the Application",id:"configure-permissions-for-the-application",children:[]}],s={rightToc:p};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To configure Power BI, We need to set the application in Azure Active Directory."),Object(i.b)("p",null,"This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant"}),"How to set up an Azure tenant")," for steps to acquire a tenant."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Contact the Active Directory Administrator to perform the following steps as some of the actions will require administrator consent."))),Object(i.b)("p",null,"There are 3 main steps to configure Power BI agent:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#set-up-the-application-in-azure"}),"Set up the Application in Azure")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#create-the-application-secret"}),"Create the Application Secret")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#configure-permissions-for-the-application"}),"Configure Permissions for the Application"))),Object(i.b)("h3",{id:"set-up-the-application-in-azure"},"Set up the Application in Azure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Azure portal > ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://portal.azure.com"}),"https://portal.azure.com"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Azure Active Directory > App registrations > New registration"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Azure Application Registration",src:Object(c.a)("/doc-images/powerbi/azure-new-registration.png")})),Object(i.b)("p",null,"Azure new application registration")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("strong",{parentName:"p"},"Name, Supported account types"),", and ",Object(i.b)("strong",{parentName:"p"},"Redirect URI")," of the application:"),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Application Registration",src:Object(c.a)("/doc-images/powerbi/register_app.png")})),Object(i.b)("p",null,"Application Registration")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The type should be Native and the Redirect URI must be formatted as ",Object(i.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect")," "))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Register"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note the ",Object(i.b)("strong",{parentName:"p"},"Application (client) ID")," upon successfully registering the application.")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Application registered",src:Object(c.a)("/doc-images/sharepoint/app-registered.png")})),Object(i.b)("p",null,"Application registered")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Provide the ",Object(i.b)("strong",{parentName:"li"},"Application (client) ID")," under the key ",Object(i.b)("strong",{parentName:"li"},"userclientid")," in the configuration of SharePoint in BI Hub."),Object(i.b)("li",{parentName:"ul"},"Click on the newly created Application and go to ",Object(i.b)("strong",{parentName:"li"},"Authentication"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Authentication",src:Object(c.a)("/doc-images/sharepoint/authentication.png")})),Object(i.b)("p",null,"Authentication")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the tokens to be issued at authorization endpoints and also choose the supported account types. ")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Authentication access tokens",src:Object(c.a)("/doc-images/sharepoint/azapp5.png")})),Object(i.b)("p",null,"Authentication access tokens")),Object(i.b)("h3",{id:"create-the-application-secret"},"Create the Application Secret"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"Certificates & Secrets")," and click on ",Object(i.b)("strong",{parentName:"p"},"New Client secret")," to add a new key."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User client secret setup",src:Object(c.a)("/doc-images/sharepoint/azapp6.png")})),Object(i.b)("p",null,"User client secret setup"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specify a ",Object(i.b)("strong",{parentName:"p"},"Description")," and ",Object(i.b)("strong",{parentName:"p"},"Expiry")," duration for client secret and click ",Object(i.b)("strong",{parentName:"p"},"Add"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp7.png")})),Object(i.b)("p",null,"Client secret submission")))),Object(i.b)("p",null,'The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub'),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Copy the client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp8.png")})),Object(i.b)("p",null,"Copy the Client secret ID")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Copy the client secret value. You will not be able to retrieve if after you perform another operation or leave this blade . If failed to note down the value, please repeat the step ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setup-the-application-in-azure"}),"Set up the application in Azure")," to create a new key."))),Object(i.b)("h3",{id:"configure-permissions-for-the-application"},"Configure Permissions for the Application"),Object(i.b)("p",null," The application requires some permission level actions on behalf of the user. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"strong"},{href:"https://portal.azure.com"}),"Azure portal")," > Azure Active Directory > App registrations"),"."),Object(i.b)("li",{parentName:"ul"},"Click on your application and select ",Object(i.b)("strong",{parentName:"li"},"API permissions"),"."),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Add a permission"),"."),Object(i.b)("li",{parentName:"ul"},"Map the permissions for the API's referring to the table below for ",Object(i.b)("strong",{parentName:"li"},"Microsoft Graph API , Windows Azure Active Directory API")," and ",Object(i.b)("strong",{parentName:"li"},"Microsoft Power BI")," API.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"API")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Permissions")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Access Details")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Microsoft Graph")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Profile"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Users Basic Profile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Users Email Address")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Groups")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read all users' full profile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Microsoft Azure Active Directory")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read Directory Data")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Groups")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read All Users' full profiles")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User.Read"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sign in and read user profile")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directory.AccessAsUser.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access the directory as the signed-in user")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Power BI Service")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dashboard.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Dashboards")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all datasets")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Metadata.View_Any"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View Content Properties")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Report.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Reports")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All Groups")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Group.Read"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View User's Group")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"App.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All PowerBI Apps")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Capacity.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all capacities")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tenant.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View All content in tenant")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Workspace.Read.All"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View all workspaces")))),Object(i.b)("div",{class:"center"},Object(i.b)("p",null,"API Permissions")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Save")," and then click ",Object(i.b)("strong",{parentName:"li"},"Grant Permissions")," to delegate the permissions to the service account.")),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Permissions to be given",src:Object(c.a)("/doc-images/powerbi/permissions-consolidated.png")})),Object(i.b)("p",null,"Permissions granted")),Object(i.b)("p",null,"The permissions must be given to the BI Hub Power BI Agent service account:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Office 365 Global Administrator"),Object(i.b)("li",{parentName:"ul"},"Power BI Service Administrator")))}O.isMDXComponent=!0}}]);