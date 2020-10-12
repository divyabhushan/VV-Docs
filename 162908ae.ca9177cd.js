(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),o=(n(0),n(214)),s=n(215),l=(n(216),n(217)),r=(n(47),{id:"post-config",title:"Post Configuration Steps",sidebar_label:"Post Configuration Steps"}),c={unversionedId:"installation-guide/install-bihub-windows/agents/post-config",id:"installation-guide/install-bihub-windows/agents/post-config",isDocsHomePage:!1,title:"Post Configuration Steps",description:"After successfully configuring the agent and its respective BI Platforms, you can verify it by following the below steps.",source:"@site/docs/installation-guide/install-bihub-windows/agents/post-config.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/post-config",sidebar_label:"Post Configuration Steps",sidebar:"installationGuide",previous:{title:"Looker Platform Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/bi-platform-config/looker"},next:{title:"SSL Configuration",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl-config"}},b=[],u={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After successfully configuring the agent and its respective BI Platforms, you can verify it by following the below steps."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the Browser and navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"http://<agent_hostname>:<agent_instance_port>")),Object(o.b)("li",{parentName:"ul"},"If you have configured agent with SSL, use https instead of http."),Object(o.b)("li",{parentName:"ul"},"You should see the screen as shown in the figure below.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Change image")),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(l.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Agent Success Screen",src:Object(s.a)("/doc-images/post-config/agent-success.png")}))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Agent Success Screen")),Object(o.b)("p",null,"If you didn\u2019t get the success screen, kindly follow the troubleshooting steps given below."),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"REWRITE"),Object(o.b)("h3",Object(i.a)({parentName:"div"},{id:"troubleshooting-steps"}),"Troubleshooting Steps"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Verify whether the instance is in running state in Agent Instance Manager in BI Hub Web."),Object(o.b)("li",{parentName:"ul"},"Open the log files which could be found in ",Object(o.b)("inlineCode",{parentName:"li"},"<installation folder>/log/<instance_name>.log")),Object(o.b)("li",{parentName:"ul"},"Check the log files for any errors."),Object(o.b)("li",{parentName:"ul"},"If you have enabled SSL, verify whether you have valid SSL certificate. Check the logs for any SSL certificate error. If there is SSL certificate error, Server instance will fall back to http. You could verify by visiting the http URL"),Object(o.b)("li",{parentName:"ul"},"Verify any BI Platform connection or authentication errors have occurred in log."),Object(o.b)("li",{parentName:"ul"},"Change the log level to Info in ",Object(o.b)("inlineCode",{parentName:"li"},"manager.ini")," and try to restart the agent service manager. After that check whether any errors have occurred in the log.")))),Object(o.b)("p",null,"If you are not able to successfully connect the server after following this steps, kindly contact the BI Hub Support Team by raising ticket in the support portal or by sending email to ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"mailto:support@visualbi.com"}),"support@visualbi.com")," with the supporting log files with the logger level set to Info."))}p.isMDXComponent=!0}}]);