(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(210)),b=n(211),c=n(212),s=n(213),d=(n(56),{id:"add-new-agent",title:"Add New Agent",sidebar_label:"Add New Agent"}),l={unversionedId:"admin-guide/getting-started/prerequisite/add-new-agent",id:"admin-guide/getting-started/prerequisite/add-new-agent",isDocsHomePage:!1,title:"Add New Agent",description:"The agent is the component that establishes connectivity between BI Hub and BI platform.",source:"@site/docs/admin-guide/getting-started/prerequisite/add-new-agent.md",sourceDirName:"admin-guide/getting-started/prerequisite",slug:"/admin-guide/getting-started/prerequisite/add-new-agent",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/add-new-agent",version:"current",sidebar_label:"Add New Agent",frontMatter:{id:"add-new-agent",title:"Add New Agent",sidebar_label:"Add New Agent"},sidebar:"adminGuide",previous:{title:"Multiple Administrator Account",permalink:"/VV-Docs/docs/admin-guide/multiple-admin-acct"},next:{title:"BOBJ Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj"}},o=[{value:"Adding the Agent/Instances",id:"adding-the-agentinstances",children:[]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Further Steps",id:"further-steps",children:[]}],g={toc:o};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The agent is the component that establishes connectivity between BI Hub and BI platform."),Object(r.b)("p",null,"The first step involved in setting up BI Hub is creating agents and the instances necessary to connect with BI platforms."),Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/agent-manager/cluster"),mdxType:"Link"},"Multiple instances of BI Hub agents")," are required for load balancing and high availability purposes.",Object(r.b)("h2",{id:"adding-the-agentinstances"},"Adding the Agent/Instances"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"From the application pane on the left, select ",Object(r.b)("strong",{parentName:"p"},"Agent Manager"),"."),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Agent Manager",src:Object(b.a)("/doc-images/admin-guide/agent/agent-manager-add-agent.png")})),Object(r.b)("p",null,"Agent Manager"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Select the ",Object(r.b)("strong",{parentName:"p"},"Agent Manager")," tab and then click ",Object(r.b)("strong",{parentName:"p"},"Add Agent")," at the top right corner."))),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Add new agent",height:"400",src:Object(b.a)("/doc-images/admin-guide/agent/new-agent-form.png")})),Object(r.b)("p",null,"Add new agent")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Enter ",Object(r.b)("strong",{parentName:"li"},"Agent Name")," ( This can be any relevant name ), ",Object(r.b)("strong",{parentName:"li"},"Server"),", and ",Object(r.b)("strong",{parentName:"li"},"Port")," number.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Server and Port number must be the same that was entered while installing the agents. ( Refer ",Object(r.b)(c.a,{to:Object(b.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"BI Hub Installation Guide - Port Requirements")," for your reference).")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Continue"),".")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"In the next ",Object(r.b)("strong",{parentName:"p"},"Add Agent")," screen, fill in the instance details."),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Add agent instance details",height:"400",src:Object(b.a)("/doc-images/admin-guide/agent/add-agent-instance.png")})),Object(r.b)("p",null,"Add instance details")),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"Attributes will be accepted depending on the agent type being added.\nFor example: ",Object(r.b)("em",{parentName:"p"},"BOBJ")," agent instance attributes are different from the ",Object(r.b)("em",{parentName:"p"},"Qlik")," agent instance. ")),Object(r.b)("p",{parentName:"li"},"For easy maintenance, the ",Object(r.b)("em",{parentName:"p"},"Port")," number must be entered in the same series as that of the agent."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"For example; If the agent is at ",Object(r.b)("em",{parentName:"p"},"12100"),", then the instances must be in ",Object(r.b)("em",{parentName:"p"},"12101,12102,...")," series.  "),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Instance Manager",src:Object(b.a)("/doc-images/admin-guide/agent/instance-manager.jpg")})),Object(r.b)("p",null,"Agent and the Instances on the similar Port number and Port series"))))),Object(r.b)("p",null,"The Tool-tips provide necessary guidance and show screenshots of the BI platform with the values."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Submit")," to add the instance or click ",Object(r.b)("strong",{parentName:"p"},"Submit")," & ",Object(r.b)("strong",{parentName:"p"},"Add New Instance")," to add another instance of the same agent.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("strong",{parentName:"p"},"Status")," column of the configured instance is displayed in the ",Object(r.b)("strong",{parentName:"p"},"Home")," page of that agent. Following is the color-coding indicating the status of the ",Object(r.b)("em",{parentName:"p"},"Agent")," and ",Object(r.b)("em",{parentName:"p"},"BI Platform"),":"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-green"},Object(r.b)("b",null,"Green"))," : active"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-red"},Object(r.b)("b",null,"Red"))," : inactive - You must ",Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/agent-manager/agent/agent-management#start-the-instance"),mdxType:"Link"},"Start the Instance"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-orange"},Object(r.b)("b",null,"Orange"))," : The Agent is active but the BI platform is inactive or it cannot reach the platform. You must ",Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/agent-manager/agent/agent-management#restart-instance-service-when-bi-platform-not-reachable"),mdxType:"Link"},"restart the Agent's Instance Service from the backend Server"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-yellow"},Object(r.b)("b",null,"Yellow")),": ",Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/agent-manager/agent/row-level-security"),mdxType:"Link"},"Authentication Pending")," applicable only for PowerBI and Onedrive agents."),Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Actions")," column, you can ",Object(r.b)("em",{parentName:"li"},"Stop ( ",Object(r.b)("img",{src:Object(b.a)("/img/stop.svg"),width:"15"})," )/Restart ( ",Object(r.b)("img",{src:Object(b.a)("/img/restart.svg"),width:"15"})," )")," the instance.")))),Object(r.b)("p",null,"After all the agent instances are successfully created, return to the ",Object(r.b)("em",{parentName:"p"},"Agent Manager")," screen to view the ",Object(r.b)("em",{parentName:"p"},"status")," and details of all agents as shown below."),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Agent Manager New",src:Object(b.a)("/doc-images/admin-guide/agent/agent-manager.png")})),Object(r.b)("p",null,"Agent Manager with list of Agents installed and their details")),Object(r.b)("p",null,"\u2705 Agents are now ",Object(r.b)("em",{parentName:"p"},"installed")," and are in the ",Object(r.b)("em",{parentName:"p"},"running")," state."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("p",null,"Import (Sync) users from BI platform into BI Hub portal for the added agents (or all agents).\nYou can sync users from the ",Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/agent-manager/agent/agent-management#sync-users-between-agent-and-bi-hub"),mdxType:"Link"},"Agent Manager")," screen or from ",Object(r.b)(c.a,{to:Object(b.a)("docs/admin-guide/authenticate/manage-auth#synchronize-users-with-bi-hub"),mdxType:"Link"},"Authentication Manager")," screen."),Object(r.b)("h2",{id:"further-steps"},"Further Steps"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",{parentName:"ul",className:"task-list-item"},Object(r.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Agent Configuration with BI Platform")),Object(r.b)("p",null,"Next, ",Object(r.b)("strong",{parentName:"p"},"Configure the BI Platform")," and make trusted connection between respective ",Object(r.b)("em",{parentName:"p"},"BI Hub Agent(s)")," and its ",Object(r.b)("em",{parentName:"p"},"BI Platform"),"."))}m.isMDXComponent=!0}}]);