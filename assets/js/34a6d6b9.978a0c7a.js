(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),i=(n(0),n(210)),o=n(211),r=n(212),l=n(213);n(56);const b={id:"ssl-agents",title:"Configure SSL for BI Hub Agents",sidebar_label:"Configure SSL for BI Hub Agents"},c={unversionedId:"installation-guide/advanced/ssl/ssl-agents",id:"installation-guide/advanced/ssl/ssl-agents",isDocsHomePage:!1,title:"Configure SSL for BI Hub Agents",description:"BI Hub Agents will communicate with BI Hub Server and Web via REST API connection.",source:"@site/docs/installation-guide/advanced/ssl/ssl-agents.md",sourceDirName:"installation-guide/advanced/ssl",slug:"/installation-guide/advanced/ssl/ssl-agents",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-agents",version:"current",sidebar_label:"Configure SSL for BI Hub Agents",frontMatter:{id:"ssl-agents",title:"Configure SSL for BI Hub Agents",sidebar_label:"Configure SSL for BI Hub Agents"},sidebar:"installationGuide",previous:{title:"Configure SSL for BI Hub Web",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-web"},next:{title:"Advanced Agent Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/advanced"}},s=[{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"SSL Configuration for BOBJ Agent",id:"ssl-configuration-for-bobj-agent",children:[]}],p={toc:s};function m({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BI Hub Agents will communicate with BI Hub Server and Web via REST API connection."),Object(i.b)("h2",{id:"before-you-begin"},"Before you begin"),Object(i.b)("p",null,"You must have a proper SSL certificate (recommended) from the authorized vendor in ",Object(i.b)("inlineCode",{parentName:"p"},".crt")," format and ",Object(i.b)("inlineCode",{parentName:"p"},".key")," file."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also have a Self-Signed SSL certificate, but you need to make sure that the certificate belongs to a trusted certificate store by following the configuration steps provided by the particular browser (The steps are browser-specific and out of scope for this document).")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Follow the below common steps to configure the ",Object(i.b)("em",{parentName:"p"},"REST")," connections from all the agents (except BOBJ agent) to https:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("inlineCode",{parentName:"p"},"manager.ini")," file in edit mode with administrative privileges. The file is located in the ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\Program Files\\Visual BI Solutions\\VBI View\\<installing agent name>")," location.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Change the ",Object(i.b)("strong",{parentName:"p"},"SSL")," property from ",Object(i.b)("strong",{parentName:"p"},"False")," to ",Object(i.b)("strong",{parentName:"p"},"True")," and save the file:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="C:\\Program Files\\Visual BI Solutions\\VBI View\\<installing agent name>\\manager.ini" {2}',title:'"C:\\Program',"Files\\Visual":!0,BI:!0,"Solutions\\VBI":!0,"View\\<installing":!0,agent:!0,'name>\\manager.ini"':!0,"{2}":!0},'[SSL]\nenable ssl = True //Default value is "False"\n'))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy and paste the SSL files to the SSL folder - ",Object(i.b)("inlineCode",{parentName:"p"},"<Agent Installation Folder>/SSL"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rename the file ",Object(i.b)("inlineCode",{parentName:"p"},"<your name>.crt")," to ",Object(i.b)("inlineCode",{parentName:"p"},"public.crt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<your name>.key")," to ",Object(i.b)("inlineCode",{parentName:"p"},"private.key"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Start > services.msc")," and restart the ",Object(i.b)("strong",{parentName:"p"},"Agent Service Manager"),"."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"The service name will be ",Object(i.b)("inlineCode",{parentName:"p"},"VBI<Agent name>SM"),".\nFor example for ",Object(i.b)("em",{parentName:"p"},"Tableau")," agent, the service name will be ",Object(i.b)("strong",{parentName:"p"},"VBITableauSM"),"."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open the browser and type the url - ",Object(i.b)("inlineCode",{parentName:"p"},"<https://Backend server url:<Agent Port Number>"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(l.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"BI Hub Agent with secured SSL connection",src:Object(o.a)("doc-images/installation-guide/agent-ssl-confirm.png")})),Object(i.b)("p",null,"BI Hub Agent with secured SSL connection")))),Object(i.b)("p",null,"\u2705 This loads up Agent Service Manager success screen with a secured SSL connection."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"<Agent Port number>")," is the same that you entered while ",Object(i.b)(r.a,{to:Object(o.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"installing the Agents"),".")),Object(i.b)("h2",{id:"ssl-configuration-for-bobj-agent"},"SSL Configuration for BOBJ Agent"),Object(i.b)("p",null,"For BOBJ Agent, the SSL certificates also need to be in ",Object(i.b)("inlineCode",{parentName:"p"},".jks")," (Java Key Store) format apart from ",Object(i.b)("inlineCode",{parentName:"p"},".crt")," format."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Open ",Object(i.b)("strong",{parentName:"p"},"manager.ini")," file in edit mode with administrative privileges.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("strong",{parentName:"p"},"SSL")," section, set ",Object(i.b)("inlineCode",{parentName:"p"},"enable ssl = True")," and save the file.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy and paste the SSL files to the SSL folder found in the ",Object(i.b)("inlineCode",{parentName:"p"},"< BOBJ Instance installation location >/SSL"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Rename the file ",Object(i.b)("inlineCode",{parentName:"p"},"<your name>.crt")," to ",Object(i.b)("inlineCode",{parentName:"p"},"public.crt")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<your name>.key")," to ",Object(i.b)("inlineCode",{parentName:"p"},"private.key"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Import the SSL Certificate and key into the Java KeyStore.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Make sure that the Java KeyStore file is generated with the name ",Object(i.b)("strong",{parentName:"p"},"BOBJ_Keystore.jks"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Move the ",Object(i.b)("strong",{parentName:"p"},"BOBJ_Keystore.jks")," file to the SSL folder: ",Object(i.b)("inlineCode",{parentName:"p"},"<BOBJ Instance installation location>/SSL"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter an appropriate password of the generated KeyStore file in the SSL Password field in the ",Object(i.b)("inlineCode",{parentName:"p"},"manager.ini")," file.( This must be given after the SSL field )."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Example : ",Object(i.b)("inlineCode",{parentName:"p"},"SSL Password = password")," of the ",Object(i.b)("em",{parentName:"p"},"keystore.jks")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Go to ",Object(i.b)("strong",{parentName:"p"},"Start > services.msc")," and restart the ",Object(i.b)("strong",{parentName:"p"},"Agent Service Manager"),"."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"The service name will be ",Object(i.b)("strong",{parentName:"p"},"BIHUBBOBJSM"),".")))),Object(i.b)("p",null,"\u2705 SSL successfully configured for BOBJ Agent."))}m.isMDXComponent=!0}}]);