(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),i=(a(0),a(210)),r=a(211),o=a(212),b=a(213);a(56);const c={id:"upgrade-bihub",title:"Upgrade Of BI Hub",sidebar_label:"Upgrade of BI Hub"},s={unversionedId:"installation-guide/upgrade/upgrade-bihub",id:"installation-guide/upgrade/upgrade-bihub",isDocsHomePage:!1,title:"Upgrade Of BI Hub",description:"The user can upgrade the trial version to either the production version or extend the trial period.",source:"@site/docs/installation-guide/upgrade/upgrade-bihub.md",sourceDirName:"installation-guide/upgrade",slug:"/installation-guide/upgrade/upgrade-bihub",permalink:"/VV-Docs/docs/installation-guide/upgrade/upgrade-bihub",version:"current",sidebar_label:"Upgrade of BI Hub",frontMatter:{id:"upgrade-bihub",title:"Upgrade Of BI Hub",sidebar_label:"Upgrade of BI Hub"},sidebar:"installationGuide",previous:{title:"Advanced Agent Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/advanced"},next:{title:"Uninstallation of BI Hub in Windows Platform",permalink:"/VV-Docs/docs/installation-guide/uninstall-reinstall/uninstall-bihub"}},l=[{value:"Upgrade from the previous version to the new version",id:"upgrade-from-the-previous-version-to-the-new-version",children:[]}],d={toc:l};function p({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The user can upgrade the trial version to either the production version or extend the trial period."),Object(i.b)("h2",{id:"upgrade-from-the-previous-version-to-the-new-version"},"Upgrade from the previous version to the new version"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)(o.a,{to:Object(r.a)("docs/installation-guide/download-bihub"),mdxType:"Link"},"Download")," the latest versions of BI Hub Web, BI Hub Server, and BI Hub agents."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Double click on the ",Object(i.b)("inlineCode",{parentName:"p"},"<desired agent name>Agent-X.X.X-windows-installer.exe")," file to start the upgrade process.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The installer pops up with a ",Object(i.b)("em",{parentName:"p"},"Setup")," screen with the message that indicates that a previous version is already running. If you wish to proceed, click ",Object(i.b)("strong",{parentName:"p"},"Next"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Upgrade BI Hub setup screen",src:Object(r.a)("/doc-images/installation-guide/upgrade-confirm.png")})),Object(i.b)("p",null,"Confirm to upgrade BI Hub version"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Read through the license agreement and accept the terms before proceeding with the upgrade.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"On the next screen click ",Object(i.b)("strong",{parentName:"p"},"Next")," to confirm the upgrade from the current version to the new version.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A successful upgrade screen provides options to open the Readme file."))),Object(i.b)("p",null,"Similar steps need to be followed for all other agents and BI Hub Web."),Object(i.b)("p",null,"For BI Hub Server however, we have a couple of extra steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Before you upgrade, stop the backend instances."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Stop backend instances",src:Object(r.a)("/doc-images/installation-guide/stop-backend-instance.png")}))))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Next"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"Config utility")," window, select ",Object(i.b)("strong",{parentName:"p"},"Instances")," tab and stop ( ",Object(i.b)("img",{alt:"icon",src:a(274).default})," ) all the running ",Object(i.b)("em",{parentName:"p"},"instances"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"BI Hub Server instances",src:Object(r.a)("/doc-images/installation-guide/bihub-server-instances.png")})),Object(i.b)("p",null,"BI Hub Server instances")))),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Ensure all the instances listed in the ",Object(i.b)("em",{parentName:"p"},"Config utility")," are stopped before proceeding."))),Object(i.b)("p",null,"The below screenshot indicates the above ",Object(i.b)("em",{parentName:"p"},"Backend")," instance is stopped and the ",Object(i.b)("em",{parentName:"p"},"Play")," button ( ",Object(i.b)("img",{alt:"icon",src:a(275).default})," ) is now highlighted."),Object(i.b)("div",{class:"center"},Object(i.b)(b.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"BI Hub Server instances",src:Object(r.a)("/doc-images/installation-guide/stopped-instances.png")}))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Close the ",Object(i.b)("strong",{parentName:"p"},"Config utility")," after you stop the backend instances before you proceed with the installer, if not an error will be thrown during the upgrade."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Next")," to start the upgrade process.")),Object(i.b)("p",null,"On successful upgrade, you will be prompted to open the ",Object(i.b)("em",{parentName:"p"},"Config utility")," and the ",Object(i.b)("em",{parentName:"p"},"Readme")," file."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Restart all the backend instances in the ",Object(i.b)("em",{parentName:"li"},"Config utility")," one by one.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"Give some time before starting every instance. Do not start the instances one after the other."),Object(i.b)("li",{parentName:"ul"},"No ",Object(i.b)("em",{parentName:"li"},"Port")," number should be asked during the upgrade. If you are prompted for the ",Object(i.b)("em",{parentName:"li"},"port")," number, kindly contact the support team at ",Object(i.b)("a",{parentName:"li",href:"mailto:support@bihub.com"},"support@bihub.com"),".")))))}p.isMDXComponent=!0},274:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgZmlsbD0iI0ZENzgzRiIvPgo8L3N2Zz4K"},275:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxOCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0xNy4wNTE4IDguMzg2ODFMMi45MDg5MyAwLjI1NzkwM0MxLjc1OTgyIC0wLjQwMjI1MyAwIDAuMjM4MzcyIDAgMS44NzExOFYxOC4xMjUxQzAgMTkuNTg5OSAxLjYzNTI3IDIwLjQ3MjcgMi45MDg5MyAxOS43Mzg0TDE3LjA1MTggMTEuNjEzNEMxOC4zMTM0IDEwLjg5MDcgMTguMzE3NCA5LjEwOTQ3IDE3LjA1MTggOC4zODY4MVY4LjM4NjgxWiIgZmlsbD0iIzAwODAwMCIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="}}]);