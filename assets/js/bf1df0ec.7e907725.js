(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{175:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return s})),n.d(i,"metadata",(function(){return r})),n.d(i,"toc",(function(){return l})),n.d(i,"default",(function(){return b}));var t=n(3),o=(n(0),n(209)),a=n(210),c=n(211),d=n(212);n(56);const s={id:"scheduled-sync-ad",title:"Scheduled Synchronization with AD/LDAP",sidebar_label:"Scheduled Synchronization with AD/LDAP"},r={unversionedId:"admin-guide/admin-utilities/scheduled-sync-ad",id:"admin-guide/admin-utilities/scheduled-sync-ad",isDocsHomePage:!1,title:"Scheduled Synchronization with AD/LDAP",description:"To synchronize the users from Windows AD or LDAP, follow the steps below.",source:"@site/docs/admin-guide/admin-utilities/scheduled-sync-ad.mdx",sourceDirName:"admin-guide/admin-utilities",slug:"/admin-guide/admin-utilities/scheduled-sync-ad",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-ad",version:"current",sidebar_label:"Scheduled Synchronization with AD/LDAP",frontMatter:{id:"scheduled-sync-ad",title:"Scheduled Synchronization with AD/LDAP",sidebar_label:"Scheduled Synchronization with AD/LDAP"},sidebar:"adminGuide",previous:{title:"Change Administrator Password",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/change-passwd"},next:{title:"Scheduled Synchronization with BI platforms",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-bi"}},l=[],u={toc:l};function b({components:e,...i}){return Object(o.b)("wrapper",Object(t.a)({},u,i,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To synchronize the users from Windows AD or LDAP, follow the steps below."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to ",Object(o.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer\\utilities"),"."),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator")," and type the command:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'#Authentication synch for Windows AD\n"BI Hub Authentication Synchronization.exe" -a "Windows AD"\n\n#Authentication synch for LDAP\n"BI Hub Authentication Synchronization.exe" -a LDAP\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"-a")," flag: stands for authentications for which the synchronization is triggered."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'"Windows AD"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"LDAP"')," : Name of the Authentication."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'If the authentication name is more than one parameter, it should be enclosed within double quotes (").')),Object(o.b)("div",{class:"center"},Object(o.b)(d.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Agent Manager",height:"50",src:Object(a.a)("doc-images/admin-guide/admin-utilities/auth-synch-success.png")})),Object(o.b)("p",null,"LDAP authorization sync success")),Object(o.b)("p",null,"\u2705 The users from Windows AD or LDAP Authentication will be synchronized to BI Hub and a success message will be shown."),Object(o.b)(c.a,{to:Object(a.a)("docs/admin-guide/admin-utilities/admin-utilities#synchronization-information"),mdxType:"Link"},"Synchronization information")," is displayed on the Home screen of the Admin. In case of errors, check the ",Object(o.b)(c.a,{to:Object(a.a)("docs/admin-guide/admin-utilities/troubleshoot"),mdxType:"Link"},"Troubleshooting")," section.",Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The above commands can be stored in a batch file and scheduled to run using the organization\u2019s scheduling tool.")))}b.isMDXComponent=!0}}]);