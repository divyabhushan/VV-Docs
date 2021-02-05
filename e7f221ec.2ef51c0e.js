(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var i=t(3),a=t(7),s=(t(0),t(213)),c=t(214),o=t(215),r=t(216),l=(t(53),{id:"scheduled-synch-bi",title:"Scheduled Synchronization with BI platforms",sidebar_label:"Scheduled Synchronization with BI platforms"}),b={unversionedId:"admin-guide/admin-utilities/scheduled-synch-bi",id:"admin-guide/admin-utilities/scheduled-synch-bi",isDocsHomePage:!1,title:"Scheduled Synchronization with BI platforms",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/admin-utilities/scheduled-synch-bi.md",slug:"/admin-guide/admin-utilities/scheduled-synch-bi",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-synch-bi",version:"current",sidebar_label:"Scheduled Synchronization with BI platforms",sidebar:"adminGuide",previous:{title:"Scheduled Synchronization with AD/LDAP",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-synch-ad"},next:{title:"Troubleshooting",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/troubleshoot"}},d=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Synchronize Users or Reports",id:"synchronize-users-or-reports",children:[{value:"To Synchronize Users",id:"to-synchronize-users",children:[]},{value:"To Synchronize Reports",id:"to-synchronize-reports",children:[]}]}],u={rightToc:d};function m(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(i.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(s.b)("p",null,"All the Agents must be configured in the BI Hub platform and the instances must be up and in running status."),Object(s.b)("h2",{id:"synchronize-users-or-reports"},"Synchronize Users or Reports"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Go to ",Object(s.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer\\utilities"),"."),Object(s.b)("li",{parentName:"ol"},"Click on ",Object(s.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator")," and type the command: ",Object(s.b)("inlineCode",{parentName:"li"},'"BI Hub Instance Synchronisation.exe"'))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The command accepts 2 parameters:",Object(s.b)("ol",{parentName:"li"},Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Synchronization option"),": It can either be Users or Reports to synchronize users and reports respectively."),Object(s.b)("li",{parentName:"ol"},Object(s.b)("strong",{parentName:"li"},"Instance list"),": List of configured Instances for which the synchronization process should take place. ",Object(s.b)("blockquote",{parentName:"li"},Object(s.b)("p",{parentName:"blockquote"},'An Instance name with more than one word must be included in double quotes(").')))))),Object(s.b)("p",null,"Here are some sample commands that can be stored in a batch file and scheduled to run using the organization\u2019s scheduling tool:"),Object(s.b)("h3",{id:"to-synchronize-users"},"To Synchronize Users"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'#Synchronize users from all instances\n"BI Hub Instance Synchronisation.exe" --u -i\n\n#Synchronize Users from certain instances\n"BI Hub Instance Synchronisation.exe" --u \u2013i "BOBJ_Rest SSL" Tableau "QlikSense SSL"\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"--u")," : Users"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"-i")," : Instance"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"BOBJ, Tableau and Qlik Sense")," : Instance names configured in BI Hub.")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Only common users from all the agents will be synchronized, rest excluded."),"  ",Object(s.b)("div",{class:"center"},Object(s.b)(r.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sync details",src:Object(c.a)("doc-images/admin-guide/admin-utilities/agents-users-sync.png")})),Object(s.b)("p",null,"Sync details")))),Object(s.b)("h3",{id:"to-synchronize-reports"},"To Synchronize Reports"),Object(s.b)("pre",null,Object(s.b)("code",Object(i.a)({parentName:"pre"},{className:"language-bash"}),'#Synchronize Reports from all instances\n"BI Hub Instance Synchronisation.exe" --r -i\n\n#Synchronize Reports from certain instances\n"BI Hub Instance Synchronisation.exe" --r \u2013i BOBJ Tableau\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"--r")," : Reports"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"-i")," : Instance"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("inlineCode",{parentName:"li"},"BOBJ, Tableau")," : Instance names configured in BI Hub.")),Object(s.b)("p",null,"In case of a failure, refer the ",Object(s.b)(o.a,{to:Object(c.a)("docs/admin-guide/admin-utilities/troubleshoot"),mdxType:"Link"},"Troubleshooting")," section."))}m.isMDXComponent=!0}}]);