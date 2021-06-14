(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var i=a(3),n=(a(0),a(209)),c=a(210),r=(a(211),a(212));a(56);const o={id:"onedrive",title:"OneDrive",sidebar_label:"OneDrive"},p={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/onedrive",id:"admin-guide/getting-started/prerequisite/bi-platform-config/onedrive",isDocsHomePage:!1,title:"OneDrive",description:"The Onedrive agent needs no special configuration, apart from setting the application in Azure and creating the application secret.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/onedrive",version:"current",sidebar_label:"OneDrive",frontMatter:{id:"onedrive",title:"OneDrive",sidebar_label:"OneDrive"},sidebar:"adminGuide",previous:{title:"SharePoint Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sharepoint"},next:{title:"Qlik View",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/qlik-view"}},b=[{value:"Set up the Application in Azure.",id:"set-up-the-application-in-azure",children:[]},{value:"Create the Application Secret",id:"create-the-application-secret",children:[]}],s={toc:b};function l({components:e,...t}){return Object(n.b)("wrapper",Object(i.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The Onedrive agent needs no special configuration, apart from setting the application in Azure and creating the application secret."),Object(n.b)("h2",{id:"set-up-the-application-in-azure"},"Set up the Application in Azure."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to ",Object(n.b)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"Azure Active Directory > App registrations > New registration"),"."),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"New App Registration",src:Object(c.a)("/doc-images/powerbi/azure-new-registration.png")})),Object(n.b)("p",null,"Azure new application registration"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set ",Object(n.b)("strong",{parentName:"p"},"Name, Supported account types"),", and ",Object(n.b)("strong",{parentName:"p"},"Redirect URI")," of the application:"),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Application Registration",src:Object(c.a)("/doc-images/powerbi/register_app.png")})),Object(n.b)("p",null,"Application Registration")),Object(n.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"The type should be  Native and  the  Redirect  URI  must  be formatted as: ",Object(n.b)("inlineCode",{parentName:"p"},"https://servername:port/Redirect"),".")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click ",Object(n.b)("strong",{parentName:"p"},"Register"),". "))),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"This URI should reflect the OneDrive Agent machine hostname or public IP address and the port at which the new agent instance needs to be created."))),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Note the ",Object(n.b)("strong",{parentName:"p"},"Application (client) ID")," upon successfully registering the application.")),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Application registered",src:Object(c.a)("/doc-images/sharepoint/app-registered.png")})),Object(n.b)("p",null,"Application registered")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Provide the ",Object(n.b)("strong",{parentName:"li"},"Application (client) ID")," under the key ",Object(n.b)("strong",{parentName:"li"},"userclientid")," in the configuration of SharePoint in BI Hub."),Object(n.b)("li",{parentName:"ul"},"Click on the newly created Application and go to ",Object(n.b)("strong",{parentName:"li"},"Authentication"),".")),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Authentication",src:Object(c.a)("/doc-images/sharepoint/authentication.png")})),Object(n.b)("p",null,"Authentication")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select the tokens to be issued at authorization endpoints and also choose the supported account types. ")),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Authentication access tokens",src:Object(c.a)("/doc-images/sharepoint/azapp5.png")})),Object(n.b)("p",null,"Authentication access tokens")),Object(n.b)("h2",{id:"create-the-application-secret"},"Create the Application Secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to ",Object(n.b)("strong",{parentName:"p"},"Azure portal > azure active directory > App registrations")," and click on your application.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Navigate to ",Object(n.b)("strong",{parentName:"p"},"Certificates & secrets")," and click on ",Object(n.b)("strong",{parentName:"p"},"New Client secret")," to add a new key."),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"User client secret setup",src:Object(c.a)("/doc-images/sharepoint/azapp6.png")})),Object(n.b)("p",null,"User client secret setup")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Specify a ",Object(n.b)("strong",{parentName:"p"},"Description")," and ",Object(n.b)("strong",{parentName:"p"},"Expiry")," duration for client secret and click ",Object(n.b)("strong",{parentName:"p"},"Add"),"."),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp7.png")})),Object(n.b)("p",null,"Client secret submission")))),Object(n.b)("p",null,'The UserClient secret is added and the value is displayed. Provide this under the key "USERCLIENTSECRET" during the configuration of Sharepoint agent in BI Hub'),Object(n.b)("div",{class:"center"},Object(n.b)(r.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Copy the client Secret",src:Object(c.a)("/doc-images/sharepoint/azapp8.png")})),Object(n.b)("p",null,"Copy the Client secret ID")),Object(n.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Copy the client secret value. You will not be able to retrieve if after you perform another operation or leave this blade . If failed to note down the value, please repeat the step ",Object(n.b)("a",{parentName:"p",href:"#setup-the-application-in-azure"},"Set up the application in Azure")," to create a new key."))))}l.isMDXComponent=!0}}]);