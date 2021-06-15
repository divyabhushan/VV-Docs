(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{153:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return r})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return u}));var t=a(3),i=(a(0),a(209)),o=a(210),d=a(211);a(56);const r={id:"advanced",title:"Advanced Agent Configuration",sidebar_label:"Advanced Agent Configuration"},l={unversionedId:"installation-guide/advanced/advanced",id:"installation-guide/advanced/advanced",isDocsHomePage:!1,title:"Advanced Agent Configuration",description:"Edit the manager.ini file to edit the default BI Hub Agent configurations.",source:"@site/docs/installation-guide/advanced/advanced.mdx",sourceDirName:"installation-guide/advanced",slug:"/installation-guide/advanced/advanced",permalink:"/VV-Docs/docs/installation-guide/advanced/advanced",version:"current",sidebar_label:"Advanced Agent Configuration",frontMatter:{id:"advanced",title:"Advanced Agent Configuration",sidebar_label:"Advanced Agent Configuration"},sidebar:"installationGuide",previous:{title:"Configure SSL for BI Hub Agents",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-agents"},next:{title:"Upgrade Of BI Hub",permalink:"/VV-Docs/docs/installation-guide/upgrade/upgrade-bihub"}},c=[],s={toc:c};function u({components:e,...n}){return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Edit the ",Object(i.b)("inlineCode",{parentName:"p"},"manager.ini")," file to edit the default BI Hub Agent configurations."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the ",Object(i.b)("strong",{parentName:"li"},"manager.ini")," file in edit mode with administrative privileges. The file is located in ",Object(i.b)("inlineCode",{parentName:"li"},"<agent installation location>/")," directory.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="C:\\Program Files\\Visual BI Solutions\\VBI View\\<agent name>\\manager.ini"',title:'"C:\\Program',"Files\\Visual":!0,BI:!0,"Solutions\\VBI":!0,"View\\<agent":!0,'name>\\manager.ini"':!0},"[Main]\nPort=12200 //Agent port number\n\n[Log]\nLog Level=INFO //INFO| Error| All\nMaximum Size of a log file in MB=50\nNumber of log files to use=10\n\n[SSL]\nEnable SSL=True //Default value: False\n\n[Configuration]\nSocket Queue Size=1024\nThread Pool Size=50\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Save the file and restart the agent service manager from ",Object(i.b)("strong",{parentName:"li"},"Start > services.msc"),".")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The service name will be ",Object(i.b)("inlineCode",{parentName:"p"},"VBI<Agentname>SM"),". For example ",Object(i.b)("em",{parentName:"p"},"Tableau")," agent service name will be ",Object(i.b)("strong",{parentName:"p"},"VBITableauSM"),".")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"If you edit Agent port number in the ",Object(i.b)("inlineCode",{parentName:"p"},"manager.ini")," file, you must also update the same port number in the ",Object(i.b)(d.a,{to:Object(o.a)("docs/admin-guide/agent-manager/agent/agent-management#edit-agent"),mdxType:"Link"},"Edit Agent")," screen."))))}u.isMDXComponent=!0}}]);