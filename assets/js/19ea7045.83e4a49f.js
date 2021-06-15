(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{78:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),i=(a(0),a(209)),r=a(210),c=(a(211),a(212));a(56);const p={id:"sharepoint",sidebar_label:"SHAREPOINT",title:"SharePoint Platform Configuration"},o={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",id:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",isDocsHomePage:!1,title:"SharePoint Platform Configuration",description:"Before we connect the SharePoint site to BI Hub, we need to set up the Sharepoint App and Azure App. Create the application Secret, and Configure the permissions.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",version:"current",sidebar_label:"SHAREPOINT",frontMatter:{id:"sharepoint",sidebar_label:"SHAREPOINT",title:"SharePoint Platform Configuration"},sidebar:"adminGuide",previous:{title:"Looker Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/looker"},next:{title:"OneDrive",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive"}},s=[{value:"SharePoint App Registration",id:"sharepoint-app-registration",children:[]},{value:"Set up the application in Azure",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]},{value:"Configure permission for the App",id:"configure-permission-for-the-app",children:[]}],b={toc:s};function l({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Before we connect the ",Object(i.b)("em",{parentName:"p"},"SharePoint")," site to BI Hub, we need to set up the ",Object(i.b)("strong",{parentName:"p"},"Sharepoint App")," and ",Object(i.b)("strong",{parentName:"p"},"Azure App"),". Create the application ",Object(i.b)("strong",{parentName:"p"},"Secret"),", and ",Object(i.b)("strong",{parentName:"p"},"Configure the permissions"),"."),Object(i.b)("h2",{id:"sharepoint-app-registration"},"SharePoint App Registration"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the URL: ",Object(i.b)("inlineCode",{parentName:"p"},"https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx"),". Replace ",Object(i.b)("inlineCode",{parentName:"p"},"yourtenantname")," with your name.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Generate")," to get ",Object(i.b)("strong",{parentName:"p"},"Client Id"),", and ",Object(i.b)("strong",{parentName:"p"},"Client Secret"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter ",Object(i.b)("strong",{parentName:"p"},"Title, App Domain"),", and ",Object(i.b)("strong",{parentName:"p"},"Redirect URI"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"App Registration",src:Object(r.a)("/doc-images/sharepoint/app-register.png")})),Object(i.b)("p",null,"Sharepoint App registration")),Object(i.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Copy and save the ",Object(i.b)("strong",{parentName:"p"},"Client Id")," and ",Object(i.b)("strong",{parentName:"p"},"Client Secret")," to be used in further configuration screens.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"appinv.aspx")," page (with which you can grant permissions to an app). The URL of that page will be similar to ",Object(i.b)("inlineCode",{parentName:"p"},"https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Paste the Client Id in the ",Object(i.b)("strong",{parentName:"li"},"App Id")," text box and click on ",Object(i.b)("strong",{parentName:"li"},"Lookup"),". This will load the details of the app that we registered previously.")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"AppInv App Details",src:Object(r.a)("/doc-images/sharepoint/appinv-details.png")})),Object(i.b)("p",null,"AppInv App Details")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Permission Request XML")," textbox paste the following XML and click ",Object(i.b)("strong",{parentName:"p"},"Create")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<AppPermissionRequests AllowAppOnlyPolicy="true">\n <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl" />\n</AppPermissionRequests>\n')),Object(i.b)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," The XML provides full control to the app over the current web (this is the main permission required to configure the Sharepoint agent)"))),Object(i.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"}," If you want to provide different permissions, please take a look at ",Object(i.b)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint"},"this article")," by Microsoft.")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the next screen click on ",Object(i.b)("strong",{parentName:"p"},"Trust It")," to allow the app to have the required permissions."))),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Trust SharePoint App",src:Object(r.a)("/doc-images/sharepoint/trust-app.jpg")})),Object(i.b)("p",null,"Allow required permissions to the App")),Object(i.b)("h2",{id:"set-up-the-application-in-azure"},"Set up the application in Azure"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Azure Active Directory > App registrations > New registration"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"New App Registration",src:Object(r.a)("/doc-images/powerbi/azure-new-registration.png")})),Object(i.b)("p",null,"Azure new application registration"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Set ",Object(i.b)("strong",{parentName:"p"},"Name, Supported account types"),", and ",Object(i.b)("strong",{parentName:"p"},"Redirect URI")," of the application:"),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Application Registration",src:Object(r.a)("/doc-images/powerbi/register_app.png")})),Object(i.b)("p",null,"Application Registration")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The type should be Native and the Redirect URI must be formatted as: ",Object(i.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect"),"."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Register"),". ")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note the ",Object(i.b)("strong",{parentName:"p"},"Application (client) ID")," upon successfully registering the application.")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Application registered",src:Object(r.a)("/doc-images/sharepoint/app-registered.png")})),Object(i.b)("p",null,"Application registered")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Provide the ",Object(i.b)("strong",{parentName:"li"},"Application (client) ID")," under the key ",Object(i.b)("strong",{parentName:"li"},"userclientid")," in the configuration of SharePoint in BI Hub."),Object(i.b)("li",{parentName:"ul"},"Click on the newly created Application and go to ",Object(i.b)("strong",{parentName:"li"},"Authentication"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Authentication",src:Object(r.a)("/doc-images/sharepoint/authentication.png")})),Object(i.b)("p",null,"Authentication")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select the tokens to be issued at authorization endpoints and also choose the supported account types. ")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Authentication access tokens",src:Object(r.a)("/doc-images/sharepoint/azapp5.png")})),Object(i.b)("p",null,"Authentication access tokens")),Object(i.b)("h2",{id:"create-the-application-secret"},"Create the Application Secret"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("strong",{parentName:"p"},"Certificates & secrets")," and click on ",Object(i.b)("strong",{parentName:"p"},"New Client secret")," to add a new key."),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"User client secret setup",src:Object(r.a)("/doc-images/sharepoint/azapp6.png")})),Object(i.b)("p",null,"User client secret setup")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specify a ",Object(i.b)("strong",{parentName:"p"},"Description")," and ",Object(i.b)("strong",{parentName:"p"},"Expiry")," duration for client secret and click ",Object(i.b)("strong",{parentName:"p"},"Add"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Client Secret",src:Object(r.a)("/doc-images/sharepoint/azapp7.png")})),Object(i.b)("p",null,"Client secret submission")))),Object(i.b)("p",null,'The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub'),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Copy the client Secret",src:Object(r.a)("/doc-images/sharepoint/azapp8.png")})),Object(i.b)("p",null,"Copy the Client secret ID")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Copy the client secret value. You will not be able to retrieve if after you perform another operation or leave this blade . If failed to note down the value, please repeat the step ",Object(i.b)("a",{parentName:"p",href:"#setup-the-application-in-azure"},"Set up the application in Azure")," to create a new key."))),Object(i.b)("h2",{id:"configure-permission-for-the-app"},"Configure permission for the App"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("strong",{parentName:"li"},Object(i.b)("a",{parentName:"strong",href:"https://portal.azure.com"},"Azure portal")," > Azure Active Directory > App registrations"),"."),Object(i.b)("li",{parentName:"ul"},"Click on your application and select ",Object(i.b)("strong",{parentName:"li"},"API permissions"),"."),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Add a permission")," and expand ",Object(i.b)("strong",{parentName:"li"},"Microsoft Graph"),"."),Object(i.b)("li",{parentName:"ul"},"Provide the permissions for ",Object(i.b)("strong",{parentName:"li"},"Sites.Read.All")," and ",Object(i.b)("strong",{parentName:"li"},"User.Read"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Application Permissions configured",src:Object(r.a)("/doc-images/sharepoint/azapp9.png")})),Object(i.b)("p",null,"Application Permissions configured")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Save")," and then click ",Object(i.b)("strong",{parentName:"li"},"Grant Permissions")," to delegate the permissions to the service account.")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Permissions to be given",src:Object(r.a)("/doc-images/powerbi/permissions-consolidated.png")})),Object(i.b)("p",null,"Permissions granted")),Object(i.b)("p",null,"\u2705 Sharepoint agent successfully configured."))}l.isMDXComponent=!0}}]);