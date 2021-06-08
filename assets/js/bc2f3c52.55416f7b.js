(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return m}));var n=a(3),i=a(7),r=(a(0),a(216)),o=a(217),b=(a(218),a(219)),l=(a(56),{id:"spotfire",sidebar_label:"SPOTFIRE",title:"Spotfire Platform Configuration"}),c={unversionedId:"admin-guide/getting-started/prerequisite/bi-platform-config/spotfire",id:"admin-guide/getting-started/prerequisite/bi-platform-config/spotfire",isDocsHomePage:!1,title:"Spotfire Platform Configuration",description:"- [ ] Spotfire requires external authentication to be enabled to work with BI Hub.",source:"@site/docs/admin-guide/getting-started/prerequisite/bi-platform-config/spotfire.md",sourceDirName:"admin-guide/getting-started/prerequisite/bi-platform-config",slug:"/admin-guide/getting-started/prerequisite/bi-platform-config/spotfire",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/spotfire",version:"current",sidebar_label:"SPOTFIRE",frontMatter:{id:"spotfire",sidebar_label:"SPOTFIRE",title:"Spotfire Platform Configuration"},sidebar:"adminGuide",previous:{title:"SSRS Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/ssrs"},next:{title:"SAC Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/sac"}},p=[{value:"v10.6.0",id:"v1060",children:[]},{value:"v7.10.0",id:"v7100",children:[]}],s={toc:p};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Spotfire requires external authentication to be enabled to work with BI Hub.")),Object(r.b)("h2",{id:"v1060"},"v10.6.0"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Register a new ",Object(r.b)("strong",{parentName:"li"},"OAuth Client"),".")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"On the computer running Spotfire Server, open a command line as an administrator and change the directory to the location of the ",Object(r.b)("inlineCode",{parentName:"li"},"config.bat")," file (",Object(r.b)("inlineCode",{parentName:"li"},"config.sh")," in Linux). The default location is ",Object(r.b)("inlineCode",{parentName:"li"},"<server installation dir>/tomcat/spotfire-bin"),"."),Object(r.b)("li",{parentName:"ul"},"Run the below command to register a new ",Object(r.b)("em",{parentName:"li"},"OAuth Client"),":")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'$ register-api-client --name="BIHubAPIClient" -S api.soap.user-directory-service -S api.soap.impersonate -S api.soap.library-service\n')),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Copy both the ",Object(r.b)("strong",{parentName:"li"},"Client ID")," and ",Object(r.b)("strong",{parentName:"li"},"Client Secret")," displayed on the output screen.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"These details are displayed just once, and lost once you close the screen.")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Copy and paste the contents of ",Object(r.b)("inlineCode",{parentName:"p"},"<Spotfire Agent installation folder>/ext_auth")," to the ",Object(r.b)("inlineCode",{parentName:"p"},"<Server installation dir>/tomcat/webapps/spotfire/WEB-INF/lib")," location.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Enable External Authentication")," and set the type and class name."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open ",Object(r.b)("strong",{parentName:"p"},"Spotfire Server Configuration")," utility.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Configuration")," tab, select ",Object(r.b)("strong",{parentName:"p"},"External Authentication")," in the left panel."),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Enable External Authentication and configure",src:Object(o.a)("/doc-images/admin-guide/spotfire-config-tool.png")})),Object(r.b)("p",null,"Spotfire External Authentication configurations"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Yes")," to ",Object(r.b)("strong",{parentName:"p"},"Enable external authentication")," in the right panel.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Type")," label, select ",Object(r.b)("strong",{parentName:"p"},"Custom Authenticator")," from the dropdown list.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Class name")," label, enter: ",Object(r.b)("strong",{parentName:"p"},"vbi.spotfireagent.VbiExtAuthenticator"),".  ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Save Configuration")," and restart Spotfire related services."))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If there is an error in starting the Spotfire services, check the access log or system log for any errors and make sure the file is in the location mentioned.")),Object(r.b)("p",null,"Following are the configuration fields details required from the BI Platform:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Spotfire Server URL"),Object(r.b)("li",{parentName:"ul"},"Spotfire Server Port"),Object(r.b)("li",{parentName:"ul"},"Spotfire Service Account Username"),Object(r.b)("li",{parentName:"ul"},"Spotfire Service Account Domain"),Object(r.b)("li",{parentName:"ul"},"Spotfire Platform Version"),Object(r.b)("li",{parentName:"ul"},"Client ID \u2013 Registered OAuth Client ID"),Object(r.b)("li",{parentName:"ul"},"Client Secret - Registered OAuth Client ID")),Object(r.b)("h2",{id:"v7100"},"v7.10.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Copy all the files from ",Object(r.b)("inlineCode",{parentName:"p"},"<spotfire installation location>/ext_auth/ directory")," and paste them to the location - ",Object(r.b)("inlineCode",{parentName:"p"},'"tibco\\tss\\tomcat\\lib\\webapps\\spotfire\\WEB-INF\\lib"'),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Spotfire Server Configuration > External Authentication"),", and set the ",Object(r.b)("strong",{parentName:"p"},"Type")," as ",Object(r.b)("strong",{parentName:"p"},"Authentication Filter"),". This will enable Spotfire Server to use the custom Java authentication filter.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter the ",Object(r.b)("strong",{parentName:"p"},"Class Name")," as - ",Object(r.b)("strong",{parentName:"p"},"vbi.spotfireagent.VbiExtAuthenticator"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Users and Groups",src:Object(o.a)("/doc-images/spotfire/users-groups.jpg")})),Object(r.b)("p",null,"Manage Users and Groups account"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("strong",{parentName:"p"},"Service account")," for the ",Object(r.b)("em",{parentName:"p"},"Spotfire")," agent with both ",Object(r.b)("strong",{parentName:"p"},"API User"),", and ",Object(r.b)("strong",{parentName:"p"},"Impersonator")," user roles.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Add Users")," and add the user members with the ",Object(r.b)("em",{parentName:"p"},"Display name"),", and ",Object(r.b)("em",{parentName:"p"},"Composite name"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(b.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Add Users",src:Object(o.a)("/doc-images/spotfire/add-users.png")})),Object(r.b)("p",null,"Add Users")))),Object(r.b)("p",null,"Restart the server for the changes to take place."),Object(r.b)("p",null,"\u2705 Spotfire agent configured with the BI Platform."))}m.isMDXComponent=!0}}]);