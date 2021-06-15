(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return l}));var i=r(3),n=(r(0),r(209));const a={id:"user-role",title:"User Role and Privileges",sidebar_label:"User Role and Privileges"},s={unversionedId:"admin-guide/getting-started/prerequisite/user-role",id:"admin-guide/getting-started/prerequisite/user-role",isDocsHomePage:!1,title:"User Role and Privileges",description:"BI Hub Web application ensures data security by providing different access permissions to the assigned users.",source:"@site/docs/admin-guide/getting-started/prerequisite/user-role.md",sourceDirName:"admin-guide/getting-started/prerequisite",slug:"/admin-guide/getting-started/prerequisite/user-role",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/user-role",version:"current",sidebar_label:"User Role and Privileges",frontMatter:{id:"user-role",title:"User Role and Privileges",sidebar_label:"User Role and Privileges"},sidebar:"adminGuide",previous:{title:"Administration Pre-requisite Guide",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/prerequisite"},next:{title:"Multiple Administrator Account",permalink:"/VV-Docs/docs/admin-guide/multiple-admin-acct"}},d=[],o={toc:d};function l({components:e,...t}){return Object(n.b)("wrapper",Object(i.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"BI Hub Web application ensures data security by providing different access permissions to the assigned users.\nThese permissions define administrative tasks each role is allowed on BI Hub platform."),Object(n.b)("p",null,"We use Microsoft 365 and Windows AD to create user accounts for every user who needs access to BI Hub Reports."),Object(n.b)("p",null,"BI Hub Super Admin is a pre-defined role, that gets created at the time of installation.  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"User"),Object(n.b)("th",{parentName:"tr",align:null},"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("strong",{parentName:"td"},"Super Admin")),Object(n.b)("td",{parentName:"tr",align:null},'User( most privileged ) configured while installing BI Hub. Super Admin is added to the "Admin" group and is the default user.')),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("strong",{parentName:"td"},"Admin")),Object(n.b)("td",{parentName:"tr",align:null},'User added to the "Admin" group by Super Admin and granted all the privileges like a Super admin. Except that Admins cannot modify "admin" group permissions, nor can add/remove other Admins. Have both admin-mode',Object(n.b)("sup",null,"1")," and user-mode",Object(n.b)("sup",null,"2"),".")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("strong",{parentName:"td"},"Power User")),Object(n.b)("td",{parentName:"tr",align:null},"Special user added by an Admin. A Power user can perform all the assigned admin tasks, except they cannot modify the group permissions. A Power user has both admin and user-mode.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("strong",{parentName:"td"},"User")),Object(n.b)("td",{parentName:"tr",align:null},"This is a regular user with just user-mode",Object(n.b)("sup",null,"2"),".")))),Object(n.b)("sup",null,"1"),"Admin mode: User with administrative tasks",Object(n.b)("br",null),Object(n.b)("sup",null,"2"),"User mode: Regular user activities such as accessing the Reports and customizing own profile settings.")}l.isMDXComponent=!0}}]);