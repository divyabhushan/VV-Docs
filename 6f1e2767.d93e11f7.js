(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{131:function(e,i,n){"use strict";n.r(i),n.d(i,"frontMatter",(function(){return s})),n.d(i,"metadata",(function(){return d})),n.d(i,"rightToc",(function(){return c})),n.d(i,"default",(function(){return l}));var t=n(3),o=n(7),a=(n(0),n(210)),s={id:"scheduled-synch-ad",title:"Scheduled synchronization with AD",sidebar_label:"Scheduled synchronization with AD"},d={unversionedId:"admin-guide/admin-utilities/scheduled-synch-ad",id:"admin-guide/admin-utilities/scheduled-synch-ad",isDocsHomePage:!1,title:"Scheduled synchronization with AD",description:"To synchronize the users from Windows AD, follow the steps below.",source:"@site/docs/admin-guide/admin-utilities/scheduled-synch-ad.md",slug:"/admin-guide/admin-utilities/scheduled-synch-ad",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-synch-ad",version:"current",sidebar_label:"Scheduled synchronization with AD",sidebar:"adminGuide",previous:{title:"Change Password",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/change-passwd"},next:{title:"Scheduled synchronization with BI platforms",permalink:"/VV-Docs/docs/admin-guide/admin-utilities/scheduled-synch-bi"}},c=[],r={rightToc:c};function l(e){var i=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},r,n,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To synchronize the users from Windows AD, follow the steps below."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Navigate to the following location to locate the Authentication Synchronization utility:\n",Object(a.b)("inlineCode",{parentName:"li"},"<VBI View Server installation directory\\/utilities/AuthenticationSynchronization.exe")),Object(a.b)("li",{parentName:"ol"},"Click on ",Object(a.b)("strong",{parentName:"li"},"File > Open in command prompt > Open command prompt as administrator")," and type the command: ",Object(a.b)("inlineCode",{parentName:"li"},"AuthenticationSynchronization.exe --a \u201cWindows AD\u201d"))),Object(a.b)("p",null,"The users from Windows AD Authentication will be synchronized to BI Hub and a success message will be shown. This statement can be stored in batch file and it can be scheduled to run using the organization\u2019s\nscheduling tool. Please note that the double quotes should be given only where the parameter has more than one word. If the parameter is just a single term, no quotes are required."))}l.isMDXComponent=!0}}]);