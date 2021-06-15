(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var i=a(3),n=(a(0),a(209)),r=a(210),c=(a(211),a(212));a(56);const l={id:"power-bi",sidebar_label:"POWER BI",title:"Power BI Platform Configuration"},o={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",id:"admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",isDocsHomePage:!1,title:"Power BI Platform Configuration",description:"To configure Power BI, We need to set the application in Azure Active Directory.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/power-bi",version:"current",sidebar_label:"POWER BI",frontMatter:{id:"power-bi",sidebar_label:"POWER BI",title:"Power BI Platform Configuration"},sidebar:"adminGuide",previous:{title:"File BI Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/file-bi"},next:{title:"SSRS Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/ssrs"}},b=[{value:"Set up the Application in Azure",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]},{value:"Configure Permissions for the Application",id:"configure-permissions-for-the-application",children:[]}],s={toc:b};function p({components:e,...t}){return Object(n.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"To configure Power BI, We need to set the application in Azure Active Directory."),Object(n.b)("p",null,"This application will be the communication point for the PowerBIAgent. All calls to the Microsoft API's will be made on behalf of this application."),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"This guideline assumes that the user has a tenant in Azure. If the tenant is not present, please refer ",Object(n.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant"},"How to set up an Azure tenant")," for steps to acquire a tenant."))),Object(n.b)("div",{className:"admonition admonition-important alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Contact the Active Directory Administrator to perform the following steps as some of the actions will require administrator consent."))),Object(n.b)("p",null,"There are 3 main steps to configure Power BI agent:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#set-up-the-application-in-azure"},"Set up the Application in Azure")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#create-the-application-secret"},"Create the Application Secret")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",{parentName:"li",href:"#configure-permissions-for-the-application"},"Configure Permissions for the Application"))),Object(n.b)("h3",{id:"set-up-the-application-in-azure"},"Set up the Application in Azure"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Azure portal > ",Object(n.b)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to ",Object(n.b)("strong",{parentName:"p"},"Azure Active Directory > App registrations > New registration"),"."),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Azure Application Registration",src:Object(r.a)("/doc-images/powerbi/azure-new-registration.png")})),Object(n.b)("p",null,"Azure new application registration")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set ",Object(n.b)("strong",{parentName:"p"},"Name, Supported account types"),", and ",Object(n.b)("strong",{parentName:"p"},"Redirect URI")," of the application:"),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Application Registration",src:Object(r.a)("/doc-images/powerbi/register_app.png")})),Object(n.b)("p",null,"Application Registration")))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"The type should be Native and the Redirect URI must be formatted as ",Object(n.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect")," "))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Register"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note the ",Object(n.b)("strong",{parentName:"p"},"Application (client) ID")," upon successfully registering the application.")),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Application registered",src:Object(r.a)("/doc-images/sharepoint/app-registered.png")})),Object(n.b)("p",null,"Application registered")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Provide the ",Object(n.b)("strong",{parentName:"li"},"Application (client) ID")," under the key ",Object(n.b)("strong",{parentName:"li"},"userclientid")," in the configuration of SharePoint in BI Hub."),Object(n.b)("li",{parentName:"ul"},"Click on the newly created Application and go to ",Object(n.b)("strong",{parentName:"li"},"Authentication"),".")),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Authentication",src:Object(r.a)("/doc-images/sharepoint/authentication.png")})),Object(n.b)("p",null,"Authentication")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select the tokens to be issued at authorization endpoints and also choose the supported account types. ")),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Authentication access tokens",src:Object(r.a)("/doc-images/sharepoint/azapp5.png")})),Object(n.b)("p",null,"Authentication access tokens")),Object(n.b)("h3",{id:"create-the-application-secret"},"Create the Application Secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to ",Object(n.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to ",Object(n.b)("strong",{parentName:"p"},"Certificates & Secrets")," and click on ",Object(n.b)("strong",{parentName:"p"},"New Client secret")," to add a new key."),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"User client secret setup",src:Object(r.a)("/doc-images/sharepoint/azapp6.png")})),Object(n.b)("p",null,"User client secret setup"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Specify a ",Object(n.b)("strong",{parentName:"p"},"Description")," and ",Object(n.b)("strong",{parentName:"p"},"Expiry")," duration for client secret and click ",Object(n.b)("strong",{parentName:"p"},"Add"),"."),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Client Secret",src:Object(r.a)("/doc-images/sharepoint/azapp7.png")})),Object(n.b)("p",null,"Client secret submission")))),Object(n.b)("p",null,'The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub'),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Copy the client Secret",src:Object(r.a)("/doc-images/sharepoint/azapp8.png")})),Object(n.b)("p",null,"Copy the Client secret ID")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Copy the client secret value. You will not be able to retrieve if after you perform another operation or leave this blade . If failed to note down the value, please repeat the step ",Object(n.b)("a",{parentName:"p",href:"#setup-the-application-in-azure"},"Set up the application in Azure")," to create a new key."))),Object(n.b)("h3",{id:"configure-permissions-for-the-application"},"Configure Permissions for the Application"),Object(n.b)("p",null," The application requires some permission level actions on behalf of the user. "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Go to ",Object(n.b)("strong",{parentName:"li"},Object(n.b)("a",{parentName:"strong",href:"https://portal.azure.com"},"Azure portal")," > Azure Active Directory > App registrations"),"."),Object(n.b)("li",{parentName:"ul"},"Click on your application and select ",Object(n.b)("strong",{parentName:"li"},"API permissions"),"."),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Add a permission"),"."),Object(n.b)("li",{parentName:"ul"},"Map the permissions for the API's referring to the table below for ",Object(n.b)("strong",{parentName:"li"},"Microsoft Graph API , Windows Azure Active Directory API")," and ",Object(n.b)("strong",{parentName:"li"},"Microsoft Power BI")," API.")),Object(n.b)("div",{class:"center"},Object(n.b)("table",null,Object(n.b)("thead",null,Object(n.b)("tr",null,Object(n.b)("th",null,"API"),Object(n.b)("th",null,"Permissions"),Object(n.b)("th",null,"Access Details"))),Object(n.b)("tbody",null,Object(n.b)("tr",null,Object(n.b)("th",{rowspan:"4"},"Microsoft Graph"),Object(n.b)("td",null,"Profile"),Object(n.b)("td",null,"View Users Basic Profile")),Object(n.b)("tr",null,Object(n.b)("td",null,"Email"),Object(n.b)("td",null,"View Users Email Address")),Object(n.b)("tr",null,Object(n.b)("td",null,"Group.Read.All"),Object(n.b)("td",null,"Read All Groups")),Object(n.b)("tr",null,Object(n.b)("td",null,"User.Read.All"),Object(n.b)("td",null,"Read all users' full profile")),Object(n.b)("tr",null,Object(n.b)("th",{rowspan:"5"},"Microsoft Azure Active Directory"),Object(n.b)("td",null,"Directory.Read.All"),Object(n.b)("td",null,"Read Directory Data")),Object(n.b)("tr",null,Object(n.b)("td",null,"Group.Read.All"),Object(n.b)("td",null,"Read All Groups")),Object(n.b)("tr",null,Object(n.b)("td",null,"User.Read.All"),Object(n.b)("td",null,"Read All Users' full profiles")),Object(n.b)("tr",null,Object(n.b)("td",null,"User.Read"),Object(n.b)("td",null,"Sign in and read user profile")),Object(n.b)("tr",null,Object(n.b)("td",null,"Directory.AccessAsUser.All"),Object(n.b)("td",null,"Access the directory as the signed-in user")),Object(n.b)("tr",null,Object(n.b)("th",{rowspan:"10"},"Power BI Service"),Object(n.b)("td",null,"Dashboard.Read.All"),Object(n.b)("td",null,"View All Dashboards")),Object(n.b)("tr",null,Object(n.b)("td",null,"Dataset.Read.All"),Object(n.b)("td",null,"View all datasets")),Object(n.b)("tr",null,Object(n.b)("td",null,"Metadata.View_Any"),Object(n.b)("td",null,"View Content Properties")),Object(n.b)("tr",null,Object(n.b)("td",null,"Report.Read.All"),Object(n.b)("td",null,"View All Reports")),Object(n.b)("tr",null,Object(n.b)("td",null,"Group.Read.All"),Object(n.b)("td",null,"View All Groups")),Object(n.b)("tr",null,Object(n.b)("td",null,"Group.Read"),Object(n.b)("td",null,"View User's Group")),Object(n.b)("tr",null,Object(n.b)("td",null,"App.Read.All"),Object(n.b)("td",null,"View All PowerBI Apps")),Object(n.b)("tr",null,Object(n.b)("td",null,"Capacity.Read.All"),Object(n.b)("td",null,"View all capacities")),Object(n.b)("tr",null,Object(n.b)("td",null,"Tenant.Read.All"),Object(n.b)("td",null,"View All content in tenant")),Object(n.b)("tr",null,Object(n.b)("td",null,"Workspace.Read.All"),Object(n.b)("td",null,"View all workspaces"))))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Save")," and then click ",Object(n.b)("strong",{parentName:"li"},"Grant Permissions")," to delegate the permissions to the service account.")),Object(n.b)("div",{class:"center"},Object(n.b)(c.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Permissions to be given",src:Object(r.a)("/doc-images/powerbi/permissions-consolidated.png")})),Object(n.b)("p",null,"Permissions granted")),Object(n.b)("p",null,"The permissions must be given to the BI Hub Power BI Agent service account:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Office 365 Global Administrator"),Object(n.b)("li",{parentName:"ul"},"Power BI Service Administrator")))}p.isMDXComponent=!0}}]);