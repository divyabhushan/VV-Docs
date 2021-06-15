(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(3),r=(a(0),a(210));const o={id:"recovery",title:"Recovery (in the event of a system crash)",sidebar_label:"Recovery (in the event of a system crash)"},i={unversionedId:"admin-guide/backup-recovery/recovery",id:"admin-guide/backup-recovery/recovery",isDocsHomePage:!1,title:"Recovery (in the event of a system crash)",description:"Follow the steps below in case of a Recovery:",source:"@site/docs/admin-guide/backup-recovery/recovery.md",sourceDirName:"admin-guide/backup-recovery",slug:"/admin-guide/backup-recovery/recovery",permalink:"/VV-Docs/docs/admin-guide/backup-recovery/recovery",version:"current",sidebar_label:"Recovery (in the event of a system crash)",frontMatter:{id:"recovery",title:"Recovery (in the event of a system crash)",sidebar_label:"Recovery (in the event of a system crash)"},sidebar:"adminGuide",previous:{title:"Backup",permalink:"/VV-Docs/docs/admin-guide/backup-recovery/backup"},next:{title:"Log Levels",permalink:"/VV-Docs/docs/admin-guide/log-levels/log-levels"}},c=[],s={toc:c};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Follow the steps below in case of a Recovery:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In the event of a system crash and if the application needs to be re-installed OR if the application needs to be migrated from one server to another, contact Visual BI support (",Object(r.b)("a",{parentName:"li",href:"mailto:support@bihub.com"},"support@bihub.com"),") to deactivate the current instance details and activate a new one."),Object(r.b)("li",{parentName:"ul"},"BI Hub Server:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"As a part of your application recovery, when you configure the application database, use the recent database backup."),Object(r.b)("li",{parentName:"ol"},"Replace the backup files in the appropriate folder and create the instances BI Hub Agents:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"To restore all the agent instances, after the new installation of agents follow the steps below",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Stop the service manager if it is running"),Object(r.b)("li",{parentName:"ol"},"Replace the manager.ini and the conf folder which has been backed up as said in Backup"),Object(r.b)("li",{parentName:"ol"},"Open manager.ini file and add Mode=recovery under the Main section"),Object(r.b)("li",{parentName:"ol"},"Start the service manager. This recovers all the agent instances and logs the output in logsServiceManager.log"),Object(r.b)("li",{parentName:"ol"},"After recovery of instances, remove the value that has been added in 3 above"))),Object(r.b)("li",{parentName:"ul"},"Repeat the above steps for all the agents to be recovered.")))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"BI Hub Web:")),Object(r.b)("p",null,"Replace the backup files in the appropriate folder inside the installation directory."))}l.isMDXComponent=!0}}]);