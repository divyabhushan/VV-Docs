(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{165:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return r})),n.d(i,"metadata",(function(){return l})),n.d(i,"rightToc",(function(){return u})),n.d(i,"default",(function(){return m}));var t=n(3),o=n(7),a=(n(0),n(204)),c=n(205),s=n(206),d=n(207),r=(n(53),{id:"scheduled-sync-ad",title:"Scheduled Synchronization with AD/LDAP",sidebar_label:"Scheduled Synchronization with AD/LDAP"}),l={unversionedId:"admin-guide/admin-utilities/scheduled-sync-ad",id:"admin-guide/admin-utilities/scheduled-sync-ad",isDocsHomePage:!1,title:"Scheduled Synchronization with AD/LDAP",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/admin-utilities/scheduled-sync-ad.mdx",slug:"/admin-guide/admin-utilities/scheduled-sync-ad",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-ad",version:"current",sidebar_label:"Scheduled Synchronization with AD/LDAP",sidebar:"adminGuide",previous:{title:"Change Administrator Password",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/change-passwd"},next:{title:"Scheduled Synchronization with BI platforms",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-sync-bi"}},u=[],b={rightToc:u};function m(e){var i=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},b,n,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To synchronize the users from Windows AD or LDAP, follow the steps below."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Go to ",Object(a.b)("inlineCode",{parentName:"li"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\VBIViewServer\\utilities"),"."),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator")," and type the command:")),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),'#Authentication synch for Windows AD\n"BI Hub Authentication Synchronization.exe" -a "Windows AD"\n\n#Authentication synch for LDAP\n"BI Hub Authentication Synchronization.exe" -a LDAP\n')),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"-a")," flag: stands for authentications for which the synchronization is triggered."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},'"Windows AD"')," or ",Object(a.b)("inlineCode",{parentName:"p"},'"LDAP"')," : Name of the Authentication."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'If the authentication name is more than one parameter, it should be enclosed within double quotes (").')),Object(a.b)("div",{class:"center"},Object(a.b)(d.a,{mdxType:"Zoom"},Object(a.b)("img",{alt:"Agent Manager",height:"50",src:Object(c.a)("doc-images/admin-guide/admin-utilities/auth-synch-success.png")})),Object(a.b)("p",null,"LDAP authorization sync success")),Object(a.b)("p",null,"\u2705 The users from Windows AD or LDAP Authentication will be synchronized to BI Hub and a success message will be shown."),Object(a.b)(s.a,{to:Object(c.a)("docs/admin-guide/admin-utilities/admin-utilities#synchronization-information"),mdxType:"Link"},"Synchronization information")," is displayed on the Home screen of the Admin. In case of errors, check the ",Object(a.b)(s.a,{to:Object(c.a)("docs/admin-guide/admin-utilities/troubleshoot"),mdxType:"Link"},"Troubleshooting")," section.",Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The above commands can be stored in a batch file and scheduled to run using the organization\u2019s scheduling tool.")))}m.isMDXComponent=!0}}]);