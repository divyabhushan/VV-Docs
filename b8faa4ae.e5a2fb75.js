(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{179:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),l=(a(0),a(217)),b=a(218),o=a(219),r={id:"install",title:"Installation of BI Hub Web",sidebar_label:"Installation of BI Hub Web"},c={unversionedId:"installation-guide/install-bihub-windows/web/install",id:"installation-guide/install-bihub-windows/web/install",isDocsHomePage:!1,title:"Installation of BI Hub Web",description:"Before you install and configure the BI Hub Web the following prerequisites are met:",source:"@site/docs/installation-guide/install-bihub-windows/web/install.md",slug:"/installation-guide/install-bihub-windows/web/install",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/install",version:"current",sidebar_label:"Installation of BI Hub Web",sidebar:"installationGuide",previous:{title:"Troubleshooting Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/troubleshooting"},next:{title:"BI Hub Web Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/config"}},s=[{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:s};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Before you install and configure the ",Object(l.b)("strong",{parentName:"p"},"BI Hub Web")," the following prerequisites are met:"),Object(l.b)("p",null,"\u2705 ",Object(l.b)(o.a,{to:Object(b.a)("docs/installation-guide/install-bihub-windows/server/install"),mdxType:"Link"},"BI Hub Server")," is installed."),Object(l.b)("p",null,"\u2705 ",Object(l.b)(o.a,{to:Object(b.a)("#"),mdxType:"Link"},"At least one instance of BI Hub Server is configured and in running state"),"."),Object(l.b)("p",null,"Follow the steps below to install the BI Hub Web:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Double click the ",Object(l.b)(o.a,{to:Object(b.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"BIHubWeb-X.X.X-windows-installer.exe")," file that you downloaded to start the installation process."),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Next")," in the startup page."),Object(l.b)("li",{parentName:"ol"},"Read through the license terms and conditions. To proceed further accept the license terms and click ",Object(l.b)("strong",{parentName:"li"},"Next")," to continue."),Object(l.b)("li",{parentName:"ol"},"In the next screen provide the ",Object(l.b)("em",{parentName:"li"},"DNS resolvable URL")," and ",Object(l.b)("em",{parentName:"li"},"Port details")," of the ",Object(l.b)("strong",{parentName:"li"},"BI Hub Server instance"),". This URL should be accessed by the Users (i.e., External URL of the BI Hub Server).",Object(l.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The installation will not proceed if the URL is not accessible.")))),Object(l.b)("li",{parentName:"ol"},"In the ",Object(l.b)("strong",{parentName:"li"},"Component Selection")," screen select either:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"BI Hub Web with NGINX")," if you prefer the bundled NGINX webserver or"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("em",{parentName:"li"},"BI Hub Web without NGINX")," If you have your webserver like ",Object(l.b)("em",{parentName:"li"},"Apache")," or ",Object(l.b)("em",{parentName:"li"},"Tomcat")," INX"))),Object(l.b)("li",{parentName:"ol"},"In the ",Object(l.b)("strong",{parentName:"li"},"Directory Selection")," screen, choose the directory to install the BI Hub Server. The default directory is ",Object(l.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\BI Hub\\BIHubWeb"),". ",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"For ",Object(l.b)("em",{parentName:"li"},"BI Hub Web without NGINX")," Component Selection version, choose the ",Object(l.b)("em",{parentName:"li"},"web root")," directory of your webserver.",Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("em",{parentName:"li"},"Apache")," the directory should be ",Object(l.b)("inlineCode",{parentName:"li"},"<Apache installation directory>/htdocs"),"."),Object(l.b)("li",{parentName:"ul"},"For ",Object(l.b)("em",{parentName:"li"},"Nginx")," the directory should be ",Object(l.b)("inlineCode",{parentName:"li"},"<Nginx Installation directory>/html"),".")))),Object(l.b)("li",{parentName:"ol"},"For ",Object(l.b)("em",{parentName:"li"},"BI Hub Web with NGINX(bundled)")," in the ",Object(l.b)("em",{parentName:"li"},"NGINX Port")," details screen, accept the default port or provide your ",Object(l.b)("em",{parentName:"li"},"Port")," details."))),Object(l.b)("li",{parentName:"ol"},"Click ",Object(l.b)("strong",{parentName:"li"},"Next")," to verify the installation details and start installing the ",Object(l.b)("em",{parentName:"li"},"BI Hub Web")," with all the selected components."),Object(l.b)("li",{parentName:"ol"},"A successful installation screen provides options to open the ",Object(l.b)("em",{parentName:"li"},"Readme file"),".")),Object(l.b)("p",null,"\u2705 ",Object(l.b)("strong",{parentName:"p"},"BI Hub Web")," is installed with basic default configurations in your Server."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"The HTTP version of BI Hub Web is now available.")),Object(l.b)("h3",{id:"next-steps"},"Next Steps"),Object(l.b)("ul",{className:"contains-task-list"},Object(l.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(l.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","For advanced ",Object(l.b)("em",{parentName:"li"},"BI Hub Web")," configuration, follow the next section.")))}d.isMDXComponent=!0}}]);