(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{183:function(e,n,i){"use strict";i.r(n),i.d(n,"frontMatter",(function(){return r})),i.d(n,"metadata",(function(){return l})),i.d(n,"toc",(function(){return d})),i.d(n,"default",(function(){return u}));var t=i(3),a=(i(0),i(209)),s=i(210),o=i(211),c=i(212);i(56);const r={id:"scheduled-sync-bi",title:"Scheduled Synchronization with BI platforms",sidebar_label:"Scheduled Synchronization with BI platforms"},l={unversionedId:"admin-guide/admin-utilities/scheduled-sync-bi",id:"admin-guide/admin-utilities/scheduled-sync-bi",isDocsHomePage:!1,title:"Scheduled Synchronization with BI platforms",description:"Pre-requisite",source:"@site/docs/admin-guide/admin-utilities/scheduled-sync-bi.mdx",sourceDirName:"admin-guide/admin-utilities",slug:"/admin-guide/admin-utilities/scheduled-sync-bi",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-bi",version:"current",sidebar_label:"Scheduled Synchronization with BI platforms",frontMatter:{id:"scheduled-sync-bi",title:"Scheduled Synchronization with BI platforms",sidebar_label:"Scheduled Synchronization with BI platforms"},sidebar:"adminGuide",previous:{title:"Scheduled Synchronization with AD/LDAP",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-ad"},next:{title:"Troubleshooting",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/troubleshoot"}},d=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Synchronize Users or Reports",id:"synchronize-users-or-reports",children:[{value:"To Synchronize Users",id:"to-synchronize-users",children:[]},{value:"To Synchronize Reports",id:"to-synchronize-reports",children:[]}]}],b={toc:d};function u({components:e,...n}){return Object(a.b)("wrapper",Object(t.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(a.b)("p",null,"All the Agents must be configured in the BI Hub platform and the instances must be up and in running status."),Object(a.b)("h2",{id:"synchronize-users-or-reports"},"Synchronize Users or Reports"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer\\utilities"),"."),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator")," and type the command: ",Object(a.b)("inlineCode",{parentName:"li"},'"BI Hub Instance Synchronisation.exe"'))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The command accepts 2 parameters:",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Synchronization option"),": It can either be Users or Reports to synchronize users and reports respectively."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Instance list"),": List of configured Instances for which the synchronization process should take place. ",Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},'An Instance name with more than one word must be included in double quotes(").')))))),Object(a.b)("p",null,"Here are some sample commands that can be stored in a batch file and scheduled to run using the organization\u2019s scheduling tool:"),Object(a.b)("h3",{id:"to-synchronize-users"},"To Synchronize Users"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#Synchronize users from all instances\n"BI Hub Instance Synchronisation.exe" --u -i\n\n#Synchronize Users from certain instances\n"BI Hub Instance Synchronisation.exe" --u \u2013i "BOBJ_Rest SSL" Tableau "QlikSense SSL"\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--u")," : Users"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-i")," : Instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BOBJ, Tableau and Qlik Sense")," : Instance names configured in BI Hub.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Only common users from all the agents will be synchronized, rest excluded."),"  ",Object(a.b)("div",{class:"center"},Object(a.b)(c.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Sync details",src:Object(s.a)("doc-images/admin-guide/admin-utilities/agents-users-sync.png")})),Object(a.b)("p",null,"Sync details")))),Object(a.b)("h3",{id:"to-synchronize-reports"},"To Synchronize Reports"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#Synchronize Reports from all instances\n"BI Hub Instance Synchronisation.exe" --r -i\n\n#Synchronize Reports from certain instances\n"BI Hub Instance Synchronisation.exe" --r \u2013i BOBJ Tableau\n')),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--r")," : Reports"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-i")," : Instance"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"BOBJ, Tableau")," : Instance names configured in BI Hub.")),Object(a.b)("p",null,"In case of a failure, refer the ",Object(a.b)(o.a,{to:Object(s.a)("docs/admin-guide/admin-utilities/troubleshoot"),mdxType:"Link"},"Troubleshooting")," section."))}u.isMDXComponent=!0}}]);