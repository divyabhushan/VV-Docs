(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),r=(n(0),n(210)),b=n(211),c=n(212),s=n(213),o=(n(53),{id:"add-new-agent",title:"Add New Agent",sidebar_label:"Add New Agent"}),l={unversionedId:"admin-guide/getting-started/prerequisite/add-new-agent",id:"admin-guide/getting-started/prerequisite/add-new-agent",isDocsHomePage:!1,title:"Add New Agent",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/getting-started/prerequisite/add-new-agent.md",slug:"/admin-guide/getting-started/prerequisite/add-new-agent",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/add-new-agent",version:"current",sidebar_label:"Add New Agent",sidebar:"adminGuide",previous:{title:"Administration Pre-requisite Guide",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/prerequisite"},next:{title:"BOBJ Platform Configuration",permalink:"/VV-Docs/docs/admin-guide/getting-started/prerequisite/bi-platform-config/bobj"}},p=[{value:"Adding the Agent/Instances",id:"adding-the-agentinstances",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:p};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The agent is the component that establishes connectivity between BI Hub and\nthe BI platform and this section is applicable for all the above\nscenarios. The first step involved in setting up BI Hub is creating\nagents and its instances necessary to connect with BI platforms.\nMultiple instances of BI Hub agents are required for load balancing and\nhigh availability purposes and these are covered in detail in Section\nmultiple instances of this document."),Object(r.b)("h2",{id:"adding-the-agentinstances"},"Adding the Agent/Instances"),Object(r.b)("p",null,"Follow the steps below to add a new agent:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the ",Object(r.b)("strong",{parentName:"p"},"Admin Home")," screen, select ",Object(r.b)("strong",{parentName:"p"},"Agent Manager Menu")," from the application pane as shown below."),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Agent Manager Menu",src:Object(b.a)("/doc-images/admin-guide/agent/agent-manager-menu.jpg")})))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the ",Object(r.b)("strong",{parentName:"p"},"Agent Manager")," tab and then click ",Object(r.b)("strong",{parentName:"p"},"Add Agent")," at the top right corner.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Type ",Object(r.b)("em",{parentName:"p"},"Agent")," information such as ",Object(r.b)("strong",{parentName:"p"},"Agent name, Server"),", and ",Object(r.b)("strong",{parentName:"p"},"Port")," (This is the same ",Object(r.b)("em",{parentName:"p"},"Port")," number entered while installing the ",Object(r.b)("em",{parentName:"p"},"Agents"),". Refer the ",Object(r.b)(c.a,{to:Object(b.a)("docs/installation-guide/install-bihub-windows/agents/install"),mdxType:"Link"},"BI Hub Installation Guide - Port Requirements")," for reference)."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"The tool tips provide the necessary guidance."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Continue"),", and the ",Object(r.b)("strong",{parentName:"p"},"Add instance")," dialog box appears."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Attributes will be accepted depending on the agent type being added."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"For example: ",Object(r.b)("em",{parentName:"p"},"BOBJ")," agent instance attributes are different from the ",Object(r.b)("em",{parentName:"p"},"Qlik")," agent instance. ")),Object(r.b)("p",{parentName:"li"},"For easier maintenance, the ",Object(r.b)("em",{parentName:"p"},"Port")," number must be entered in the same series as that of the agent."),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"For example; If the agent is at ",Object(r.b)("em",{parentName:"p"},"12100"),", then the instances must be in ",Object(r.b)("em",{parentName:"p"},"12101,12102,...")," series.\nThe ",Object(r.b)("em",{parentName:"p"},"Tool")," tips provide necessary guidance and show screenshots of the BI platform with the values.")),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Instance Manager",src:Object(b.a)("/doc-images/admin-guide/agent/instance-manager.jpg")})),Object(r.b)("p",null,"Agent and the Instances on the similar Port number and Port series")))))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click ",Object(r.b)("strong",{parentName:"li"},"Submit")," to add the instance or click ",Object(r.b)("strong",{parentName:"li"},"Submit")," & ",Object(r.b)("strong",{parentName:"li"},"Add New Instance")," to add another instance of the same agent."),Object(r.b)("li",{parentName:"ul"},"The ",Object(r.b)("strong",{parentName:"li"},"Status")," column of the configured instance is displayed in the ",Object(r.b)("strong",{parentName:"li"},"Home")," page of that agent. Following is the color-coding indicating the status of the ",Object(r.b)("em",{parentName:"li"},"Agent")," and ",Object(r.b)("em",{parentName:"li"},"BI Platform"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-green"},Object(r.b)("b",null,"Green"))," : active"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-red"},Object(r.b)("b",null,"Red"))," : inactive"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{id:"color-orange"},Object(r.b)("b",null,"Orange"))," : The Agent is active but the BI platform is inactive or it cannot reach the platform."))),Object(r.b)("li",{parentName:"ul"},"In the ",Object(r.b)("strong",{parentName:"li"},"Actions")," column, you can ",Object(r.b)("em",{parentName:"li"},"Stop ( ",Object(r.b)("img",{src:Object(b.a)("/img/stop.svg"),width:"15"})," )/Restart ( ",Object(r.b)("img",{src:Object(b.a)("/img/restart.svg"),width:"15"})," )")," the instance.")),Object(r.b)("p",null,"After all the agent instances are successfully created, return to the ",Object(r.b)("em",{parentName:"p"},"Agent Manager")," screen to view the ",Object(r.b)("em",{parentName:"p"},"status")," and details of all agents as shown below. "),Object(r.b)("div",{class:"center"},Object(r.b)(s.a,{mdxType:"Zoom"},Object(r.b)("img",{alt:"Agent Manager New",src:Object(b.a)("/doc-images/admin-guide/agent/agent-manager-new.jpg")})),Object(r.b)("p",null,"Agent Manager with list of Agents installed and their details")),Object(r.b)("p",null,"\u2705 Agents are successfully ",Object(r.b)("em",{parentName:"p"},"installed")," and are in the ",Object(r.b)("em",{parentName:"p"},"running")," state."),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("ul",{className:"contains-task-list"},Object(r.b)("li",Object(a.a)({parentName:"ul"},{className:"task-list-item"}),Object(r.b)("input",Object(a.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Agent Configuration with BI Platform")),Object(r.b)("p",null,"Follow the next section to ",Object(r.b)("strong",{parentName:"p"},"Configure the BI Platform")," and make the trusted connection between the respective ",Object(r.b)("em",{parentName:"p"},"BI Hub Agent")," and its ",Object(r.b)("em",{parentName:"p"},"BI Platform"),"."))}m.isMDXComponent=!0}}]);