(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=(n(0),n(209)),o=n(210),l=(n(211),n(212));n(56);const r={id:"log-levels",title:"Log Levels",sidebar_label:"Log Levels"},s={unversionedId:"admin-guide/log-levels/log-levels",id:"admin-guide/log-levels/log-levels",isDocsHomePage:!1,title:"Log Levels",description:"The application log contains events that happen in the application.",source:"@site/docs/admin-guide/log-levels/log-levels.mdx",sourceDirName:"admin-guide/log-levels",slug:"/admin-guide/log-levels/log-levels",permalink:"/VV-Docs/docs/admin-guide/log-levels/log-levels",version:"current",sidebar_label:"Log Levels",frontMatter:{id:"log-levels",title:"Log Levels",sidebar_label:"Log Levels"},sidebar:"adminGuide",previous:{title:"Recovery (in the event of a system crash)",permalink:"/VV-Docs/docs/admin-guide/backup-recovery/recovery"},next:{title:"Administrator Utilities",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/admin-utilities"}},c=[{value:"Server Logs and Configuration",id:"server-logs-and-configuration",children:[]},{value:"Agents Logs and Configuration",id:"agents-logs-and-configuration",children:[]}],g={toc:c};function b({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The application log contains events that happen in the application.\nThere are three Logger Levels:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Info")," : Represents all information messages that capture the events occurring during the usage of the application"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Error")," : Represents error events that occur during the application"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Warning")," : Represents warning messages")),Object(i.b)("h2",{id:"server-logs-and-configuration"},"Server Logs and Configuration"),Object(i.b)("p",null,"To change the logger level in the Server, go to the location ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer"),". Right-click on the file ",Object(i.b)("inlineCode",{parentName:"p"},"BI Hub Server Config")," and click ",Object(i.b)("strong",{parentName:"p"},"Run as administrator"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"BI Hub Server Config Utility",src:Object(o.a)("doc-images/admin-guide/server-info-level.png")})),Object(i.b)("p",null,"BI Hub Server Config Utility")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In the ",Object(i.b)("strong",{parentName:"li"},"Configuration > Log Level")," drop-down list, select the log level as - 'Info', 'error', or 'warning'.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Restart the BI Hub Server instance for the log changes to take effect."),"  ",Object(i.b)("div",{class:"center"},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"BI Hub Server Instances Configuration",src:Object(o.a)("doc-images/installation-guide/bihub-server-instances.png")})),Object(i.b)("p",null,"BI Hub Server Instance")))),Object(i.b)("p",null,"Here is a screenshot of the Server running logs with 'INFO' and 'ERROR' log types:"),Object(i.b)("div",{class:"center"},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Server Running Logs",src:Object(o.a)("doc-images/admin-guide/server-logs.png")})),Object(i.b)("p",null,"Server Running Logs")),Object(i.b)("h2",{id:"agents-logs-and-configuration"},"Agents Logs and Configuration"),Object(i.b)("p",null,"To change the logger level for agents, go to the ",Object(i.b)("inlineCode",{parentName:"p"},"<agent installation directory>"),". "),Object(i.b)("p",null,"For example change location to ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\TableauAgent")," for Tableau agent, and edit the ",Object(i.b)("inlineCode",{parentName:"p"},"manager.ini")," file."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json",metastring:'title="<agent installation directory>\\manager.ini"',title:'"<agent',installation:!0,'directory>\\manager.ini"':!0},"[Log]\nlog level = INFO //ERROR or WARNING\n")),Object(i.b)("p",null,"Set the 'log level' property to 'INFO', 'ERROR', or 'WARNING'."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Restart the instances/ services for the log level changes to take place"))),Object(i.b)("div",{class:"center"},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Tableau Agent Logs",src:Object(o.a)("doc-images/admin-guide/agent-log.png")})),Object(i.b)("p",null,"Tableau Agent Logs")),Object(i.b)("p",null,"Logs recorded in the log files are in the following format: ",Object(i.b)("inlineCode",{parentName:"p"},"TIMESTAMP [ LOG TYPE ] <username>: MESSAGE")))}b.isMDXComponent=!0}}]);