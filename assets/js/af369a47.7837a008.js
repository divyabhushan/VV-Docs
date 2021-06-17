(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return b})),t.d(a,"default",(function(){return c}));var n=t(3),o=(t(0),t(210));const r={id:"tableau",sidebar_label:"TABLEAU",title:"Tableau Platform Configuration"},i={unversionedId:"bi-platform-config/tableau",id:"bi-platform-config/tableau",isDocsHomePage:!1,title:"Tableau Platform Configuration",description:"Configuration of Tableau Server - Version 2018.2 and above",source:"@site/docs/bi-platform-config/tableau.md",sourceDirName:"bi-platform-config",slug:"/bi-platform-config/tableau",permalink:"/VV-Docs/docs/bi-platform-config/tableau",version:"current",sidebar_label:"TABLEAU",frontMatter:{id:"tableau",sidebar_label:"TABLEAU",title:"Tableau Platform Configuration"}},b=[{value:"Configuration of Tableau Server - Version 2018.2 and above",id:"configuration-of-tableau-server---version-20182-and-above",children:[]},{value:"Configuration of Tableau Server - Before Version 2018.2",id:"configuration-of-tableau-server---before-version-20182",children:[]}],l={toc:b};function c({components:e,...a}){return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"configuration-of-tableau-server---version-20182-and-above"},"Configuration of Tableau Server - Version 2018.2 and above"),Object(o.b)("p",null,"Follow the below steps to configure the Tableau Server Version 2018.2 and above."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the Start button and select ",Object(o.b)("strong",{parentName:"p"},"All Programs > Accessories > Command Prompt"),".\nRight-click Command Prompt and select ",Object(o.b)("strong",{parentName:"p"},"Run as administrator"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For disabling the ClickJack protection, follow the below command:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"tsm configuration set -k wgserver.clickjack_defense.enabled -v false"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For adding the Trusted Hosts, follow the below command:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"tsm authentication trusted configure -th <trusted IP address1 or host name1>,<trusted IP address2 or host name2>"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"For enabling API Access, follow the below command:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"tsm configuration set -k api.server.enabled -v true"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Follow the below command to save all the above changes:"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"tsm pending-changes apply")))),Object(o.b)("h2",{id:"configuration-of-tableau-server---before-version-20182"},"Configuration of Tableau Server - Before Version 2018.2"),Object(o.b)("p",null,"Follow the below steps to configure the Tableau Server before Version 2018.2."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click the Start button and select ",Object(o.b)("strong",{parentName:"p"},"All Programs>Accessories>Command Prompt"),".\nRight-click Command Prompt and select ",Object(o.b)("strong",{parentName:"p"},"Run as administrator"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To enable the trusted host run the following commands in the command prompt. IP address or host name of the Tableau agent Server machine should be given in the place of ",Object(o.b)("inlineCode",{parentName:"p"},"<trusted IP addresses or host names>")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},'cd "<Tableau Server Installation Location>\\Tableau\\Tableau Server\\<version>\\bin"\n\ntabadmin stop\n\ntabadmin set wgserver.trusted_hosts "<trusted IP addresses or host names>" \n\ntabadmin config\n\ntabadmin start\n\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To disable clickjack protection run the following commands in the command prompt"),Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},'cd "<Tableau Server Installation Location> \\Tableau\\Tableau Server\\<version>\\bin"')),Object(o.b)("p",{parentName:"li"},"Run the following commands, in order:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"\ntabadmin stop\n\ntabadmin set wgserver.clickjack_defense.enabled false\n\ntabadmin config\n\ntabadmin start\n\n")))))}c.isMDXComponent=!0}}]);