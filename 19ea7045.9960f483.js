(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var i=a(3),n=a(7),c=(a(0),a(236)),r=a(237),p=(a(238),a(240)),o=(a(53),{id:"sharepoint",sidebar_label:"SHAREPOINT",title:"SharePoint Platform Configuration"}),b={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",id:"admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",isDocsHomePage:!1,title:"SharePoint Platform Configuration",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint.md",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint",version:"current",sidebar_label:"SHAREPOINT",sidebar:"adminGuide",previous:{title:"Looker Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/looker"},next:{title:"OneDrive",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive"}},s=[{value:"SharePoint App Registration",id:"sharepoint-app-registration",children:[]},{value:"Setup the application in Azure",id:"setup-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]}],l={rightToc:s};function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are two ways to access SharePoint data as listed below:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Microsoft Graph API"),Object(c.b)("li",{parentName:"ol"},"SharePoint REST API")),Object(c.b)("p",null,"We have integrated SharePoint in our BIHub using the second method."),Object(c.b)("h2",{id:"sharepoint-app-registration"},"SharePoint App Registration"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Open the Azure portal > ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://portal.azure.com"}),"https://portal.azure.com"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("strong",{parentName:"p"},"Azure Active Directory > App Registrations > New Application registration"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"The URL of the page will be similar to ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx"}),"https://yourtenantname.sharepoint.com/_layouts/15/appregnew.aspx"),"."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"App Registration",src:Object(r.a)("/doc-images/sharepoint/app-register.png")}))),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"The ",Object(c.b)("strong",{parentName:"p"},"Client Id")," and ",Object(c.b)("strong",{parentName:"p"},"Client Secret")," generated above will be used for the configuration of Sharepoint in BI Hub.")),Object(c.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Copy and save the ",Object(c.b)("strong",{parentName:"p"},"Client Id")," and ",Object(c.b)("strong",{parentName:"p"},"Client Secret")," to be used in further configuration screens.")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Fill the details in the page as per the following table and click ",Object(c.b)("strong",{parentName:"p"},"Create"),"."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"App Registration Fields",src:Object(r.a)("/doc-images/sharepoint/app-register-fields.png")}))),Object(c.b)("p",{parentName:"li"},"Now, the app is being registered and we need to provide the app with some permissions so that it can access data. ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on the ",Object(c.b)("strong",{parentName:"p"},"appinv.aspx")," page (with which you can grant permissions to an app). The URL of that page will be similar to ",Object(c.b)("inlineCode",{parentName:"p"},"https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Paste the Client Id in the ",Object(c.b)("strong",{parentName:"li"},"App Id")," text box and click on ",Object(c.b)("strong",{parentName:"li"},"Lookup"),". This will load the details of the app that we registered previously.")),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"AppInv App Details",src:Object(r.a)("/doc-images/sharepoint/appinv-details.png")}))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"Permission Request XML")," textbox paste the following XML and click ",Object(c.b)("strong",{parentName:"p"},"Create")),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"XML",src:Object(r.a)("/doc-images/sharepoint/xml.png")}))),Object(c.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"}," The XML provides full control to the app over the current web (this is the main permission required to configure the Sharepoint agent)"))),Object(c.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"}," If you want to provide different permissions,then please take a look at ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/add-in-permissions-in-sharepoint"}),"this article")," by Microsoft.\n:::")))))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In the next screen click on ",Object(c.b)("strong",{parentName:"p"},"Trust It")," to allow the app to have the required permissions."))),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Trust SharePoint App",src:Object(r.a)("/doc-images/sharepoint/trust-app.png")}))),Object(c.b)("h2",{id:"setup-the-application-in-azure"},"Setup the application in Azure"),Object(c.b)("p",null,"To enable OAuth for the user, set up the Azure Active Directory."),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The below listed steps need to be followed for the registration of the Azure Active Directory:"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://portal.azure.com"}),"https://portal.azure.com"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on ",Object(c.b)("strong",{parentName:"p"},"Azure Active Directory > App Registrations > New application registration")),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"New App Registration",src:Object(r.a)("/doc-images/powerbi/azure-app-setup.png")})))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Set  the  name, type  and  redirect  URI  of  the  application. "),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Application Registration",src:Object(r.a)("/doc-images/powerbi/application-registeration.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Application Registration")),Object(c.b)("p",{parentName:"li"}," :::note\nThe type should be  Native and  the  Redirect  URI  must  be formatted as: ",Object(c.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect"),".\n:::")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Create"),". "),Object(c.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This URI should reflect the SharePoint Agent machine hostname or public IP address and the port at which the new agent instance needs to be created."))))),Object(c.b)("p",null,"Note the Application ID upon successfully registering the application."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"App registered",src:Object(r.a)("/doc-images/sharepoint/app-registered.png")}))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'Provide this under the key "userclientid" in the configuration of SharePoint in BI Hub')),Object(c.b)("h2",{id:"create-the-application-secret"},"Create the Application Secret"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Go to ",Object(c.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Navigate to Certificates & secrets and click on ",Object(c.b)("strong",{parentName:"p"},"New Client secret")," to add a new key.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Specify a description and duration for client secret and click on ",Object(c.b)("strong",{parentName:"p"},"Add"),".  "),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"User Client secret setup",src:Object(r.a)("/doc-images/powerbi/app-key-setup.png")}))),Object(c.b)("p",{parentName:"li"}," ",Object(c.b)("em",{parentName:"p"},"User client secret setup")),Object(c.b)("p",{parentName:"li"},"The UserClient secret is added and the value is displayed."),Object(c.b)("div",{style:{textAlign:"center"}},Object(c.b)(p.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Client Secret",src:Object(r.a)("/doc-images/powerbi/client-secret.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Client Secret")," "),Object(c.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},'Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub.\nIf failed to note down the value, please repeat the step ',Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"#setup-the-application-in-azure"}),"Setup the application in Azure")," to create a new key."))))))}m.isMDXComponent=!0}}]);