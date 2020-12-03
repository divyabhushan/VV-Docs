(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),c=(n(0),n(210)),r=n(211),o=n(212),l=n(213),s=(n(53),{id:"install",title:"Installation of BI Hub Server"}),b={unversionedId:"installation-guide/install-bihub-windows/server/install",id:"installation-guide/install-bihub-windows/server/install",isDocsHomePage:!1,title:"Installation of BI Hub Server",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/installation-guide/install-bihub-windows/server/install.md",slug:"/installation-guide/install-bihub-windows/server/install",permalink:"/docs/installation-guide/install-bihub-windows/server/install",version:"current",sidebar:"installationGuide",previous:{title:"Before you begin",permalink:"/docs/installation-guide/install-pre"},next:{title:"BI Hub Server Configuration",permalink:"/docs/installation-guide/install-bihub-windows/server/config/config"}},p=[{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Following are the sequence of steps to install the BI Hub Server:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Double click the installer ",Object(c.b)(o.a,{to:Object(r.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"BIHubServer-X.X.X-windows-installer.exe")," file that you downloaded to start the installation process.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Next")," in the ",Object(c.b)("strong",{parentName:"p"},"Startup Info")," page.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Read through the license terms and conditions. To proceed further accept the license terms and click next to continue.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the next ",Object(c.b)("strong",{parentName:"p"},"Component Selection")," screen:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Select ",Object(c.b)("strong",{parentName:"li"},"MySQL component")," to install the bundled ",Object(c.b)("em",{parentName:"li"},"MySql database")),Object(c.b)("li",{parentName:"ul"},"Click ",Object(c.b)("strong",{parentName:"li"},"Next")," to install your own database."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"Directory Selection")," screen, choose the directory to install the BI Hub Server. The default directory is ",Object(c.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\BI Hub\\BIHubServer"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the next ",Object(c.b)("strong",{parentName:"p"},"Message Queue")," screen, enter the ",Object(c.b)("em",{parentName:"p"},"Port number (default: 5672), Username"),", and ",Object(c.b)("em",{parentName:"p"},"Password")," to be used in ",Object(c.b)(o.a,{to:Object(r.a)("docs/installation-guide/install-bihub-windows/server/config/config"),mdxType:"Link"},"BI Hub Server Configuration"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Select the preferred License activation step and click ",Object(c.b)("strong",{parentName:"p"},"Next"),":"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Online Mode")," - Choose this option if this machine is connected to the internet. If this machine is behind the firewall, make sure to whitelist the URL ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://products.visualbi.com."}),"https://products.visualbi.com.")," If the installer can reach the BI Hub activation server, then it will navigate to the next screen."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Offline Mode")," - Choose this option if this machine is not connected to the internet. The license can be activated offline."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"If ",Object(c.b)("em",{parentName:"p"},"Offline mode")," is chosen, continue with this step, else skip to Step 12. The next screen will give a unique activation key for this installation instance. Open ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://products.visualbi.com/license-generator"}),"https://products.visualbi.com/license-generator")," (Refer the screenshot below) in another computer which has internet connection. In that page, type the registered email address, the license key, and copy & paste the activation key generated into the Key code box."),Object(c.b)("div",null,Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"License File Generator",src:Object(r.a)("/doc-images/fig3.1-licence-generator.png")}))),Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Offline License Generator Webpage"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click the ",Object(c.b)("strong",{parentName:"p"},"Download File")," button that generates the ",Object(c.b)("inlineCode",{parentName:"p"},"license.licx")," file and prompt you to download the file on your system.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download the file and save it on the system where the installer is currently running and click ",Object(c.b)("strong",{parentName:"p"},"Next"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Browse and select the correct downloaded license file (",Object(c.b)("inlineCode",{parentName:"p"},"license.licx"),"). "),Object(c.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This file is valid only for the current installation, it cannot be reused for another fresh installation in another machine or same machine.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"On clicking ",Object(c.b)("strong",{parentName:"p"},"Next"),", the selected license file will be verified and on successful verification the next screen is shown. Skip the next step and go to step number 13.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the next screen, fill out license information in its respective box. On clicking next, the installer will try to activate your license with the information provided. On successful validation, the next screen is shown.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"If the MySQL component is selected in Step:4, Enter the ",Object(c.b)("strong",{parentName:"p"},"Port")," and ",Object(c.b)("strong",{parentName:"p"},"Root user password")," details."),Object(c.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The Root password must not contain special characters such as '@'.")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Enter and save the ",Object(c.b)("strong",{parentName:"p"},"Elastic Search")," user details that is used to ",Object(c.b)(o.a,{to:Object(r.a)("docs/installation-guide/install-bihub-windows/server/config/config-tab#elastic-search-section"),mdxType:"Link"},"connect Elastic search with BI Hub Server"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"Elastic Search Port Configuration"),", either use the default value or use the ports which are free. Save the details to be used in configuring the BI Hub Server.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Next")," to install the BI Hub Server with all the selected components.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"After successful installation, the final screen provides options to Open ",Object(c.b)("em",{parentName:"p"},"Readme file")," and to Open ",Object(c.b)("em",{parentName:"p"},"BI Hub Server Configuration Utility"),". After viewing the readme file, proceed with the Configuration utility.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Click ",Object(c.b)("strong",{parentName:"p"},"Finish")," with the required option."))),Object(c.b)("p",null,"\u2705 ",Object(c.b)("strong",{parentName:"p"},"BI Hub Server")," is now installed."),Object(c.b)("h3",{id:"next-steps"},"Next Steps"),Object(c.b)("ul",{className:"contains-task-list"},Object(c.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(c.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Configure and start the BI Hub Server as described in the next section.")))}d.isMDXComponent=!0}}]);