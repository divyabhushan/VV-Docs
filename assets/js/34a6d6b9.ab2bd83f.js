(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(210)),r=n(211),b=n(212),l=n(213),c=(n(56),{id:"ssl-agents",title:"Configure SSL for BI Hub Agents",sidebar_label:"Configure SSL for BI Hub Agents"}),s={unversionedId:"installation-guide/advanced/ssl/ssl-agents",id:"installation-guide/advanced/ssl/ssl-agents",isDocsHomePage:!1,title:"Configure SSL for BI Hub Agents",description:"BI Hub Agents will communicate with BI Hub Server and Web via REST API connection.",source:"@site/docs/installation-guide/advanced/ssl/ssl-agents.md",sourceDirName:"installation-guide/advanced/ssl",slug:"/installation-guide/advanced/ssl/ssl-agents",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-agents",version:"current",sidebar_label:"Configure SSL for BI Hub Agents",frontMatter:{id:"ssl-agents",title:"Configure SSL for BI Hub Agents",sidebar_label:"Configure SSL for BI Hub Agents"},sidebar:"installationGuide",previous:{title:"Configure SSL for BI Hub Web",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-web"},next:{title:"Advanced Agent Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/advanced"}},p=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"SSL Configuration for BOBJ Agent",id:"ssl-configuration-for-bobj-agent",children:[]}],m={toc:p};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BI Hub Agents will communicate with BI Hub Server and Web via REST API connection."),Object(o.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(o.b)("p",null,"You must have a proper SSL certificate (recommended) from the authorized vendor in ",Object(o.b)("inlineCode",{parentName:"p"},".crt")," format and ",Object(o.b)("inlineCode",{parentName:"p"},".key")," file."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You can also have a Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser (The steps are browser-specific and out of scope for this document).")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Follow the below common steps to configure the ",Object(o.b)("em",{parentName:"p"},"REST")," connections from all the agents (except BOBJ agent) to https:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the ",Object(o.b)("inlineCode",{parentName:"p"},"manager.ini")," file in edit mode with administrative privileges. The file is located in the ",Object(o.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\<installing agent name>")," location.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Change the ",Object(o.b)("strong",{parentName:"p"},"SSL")," property from ",Object(o.b)("strong",{parentName:"p"},"False")," to ",Object(o.b)("strong",{parentName:"p"},"True")," and save the file:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="C:\\Program Files\\Visual BI Solutions\\VBI View\\<installing agent name>\\manager.ini" {2}',title:'"C:\\Program',"Files\\Visual":!0,BI:!0,"Solutions\\VBI":!0,"View\\<installing":!0,agent:!0,'name>\\manager.ini"':!0,"{2}":!0},'[SSL]\nenable ssl = True //Default value is "False"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy and paste the SSL files to the SSL folder - ",Object(o.b)("inlineCode",{parentName:"p"},"<Agent Installation Folder>/SSL"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename the file ",Object(o.b)("inlineCode",{parentName:"p"},"<your name>.crt")," to ",Object(o.b)("inlineCode",{parentName:"p"},"public.crt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<your name>.key")," to ",Object(o.b)("inlineCode",{parentName:"p"},"private.key"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Start > services.msc")," and restart the ",Object(o.b)("strong",{parentName:"p"},"Agent Service Manager"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"The service name will be ",Object(o.b)("inlineCode",{parentName:"p"},"VBI<Agent name>SM"),".\nFor example for ",Object(o.b)("em",{parentName:"p"},"Tableau")," agent, the service name will be ",Object(o.b)("strong",{parentName:"p"},"VBITableauSM"),"."))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open the browser and type the url - ",Object(o.b)("inlineCode",{parentName:"p"},"<https://Backend server url:<Agent Port Number>"),"."),Object(o.b)("div",{class:"center"},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"BI Hub Agent with secured SSL connection",src:Object(r.a)("doc-images/installation-guide/agent-ssl-confirm.png")})),Object(o.b)("p",null,"BI Hub Agent with secured SSL connection")))),Object(o.b)("p",null,"\u2705 This loads up Agent Service Manager success screen with a secured SSL connection."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"<Agent Port number>")," is the same that you entered while ",Object(o.b)(b.a,{to:Object(r.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"installing the Agents"),".")),Object(o.b)("h2",{id:"ssl-configuration-for-bobj-agent"},"SSL Configuration for BOBJ Agent"),Object(o.b)("p",null,"For BOBJ Agent, the SSL certificates also need to be in ",Object(o.b)("inlineCode",{parentName:"p"},".jks")," (Java Key Store) format apart from ",Object(o.b)("inlineCode",{parentName:"p"},".crt")," format."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("strong",{parentName:"p"},"manager.ini")," file in edit mode with administrative privileges.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In the ",Object(o.b)("strong",{parentName:"p"},"SSL")," section, set ",Object(o.b)("inlineCode",{parentName:"p"},"enable ssl = True")," and save the file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copy and paste the SSL files to the SSL folder found in the ",Object(o.b)("inlineCode",{parentName:"p"},"< BOBJ Instance installation location >/SSL"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Rename the file ",Object(o.b)("inlineCode",{parentName:"p"},"<your name>.crt")," to ",Object(o.b)("inlineCode",{parentName:"p"},"public.crt")," and ",Object(o.b)("inlineCode",{parentName:"p"},"<your name>.key")," to ",Object(o.b)("inlineCode",{parentName:"p"},"private.key"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Import the SSL Certificate and key into the Java KeyStore.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure that the Java KeyStore file is generated with the name ",Object(o.b)("strong",{parentName:"p"},"BOBJ_Keystore.jks"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Move the ",Object(o.b)("strong",{parentName:"p"},"BOBJ_Keystore.jks")," file to the SSL folder: ",Object(o.b)("inlineCode",{parentName:"p"},"<BOBJ Instance installation location>/SSL"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Enter an appropriate password of the generated KeyStore file in the SSL Password field in the ",Object(o.b)("inlineCode",{parentName:"p"},"manager.ini")," file.( This must be given after the SSL field )."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"Example : ",Object(o.b)("inlineCode",{parentName:"p"},"SSL Password = password")," of the ",Object(o.b)("em",{parentName:"p"},"keystore.jks")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("strong",{parentName:"p"},"Start > services.msc")," and restart the ",Object(o.b)("strong",{parentName:"p"},"Agent Service Manager"),"."),Object(o.b)("blockquote",{parentName:"li"},Object(o.b)("p",{parentName:"blockquote"},"The service name will be ",Object(o.b)("strong",{parentName:"p"},"BIHUBBOBJSM"),".")))),Object(o.b)("p",null,"\u2705 SSL successfully configured for BOBJ Agent."))}d.isMDXComponent=!0}}]);