(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(224)),i=a(225),c=a(226),l={id:"config-tab",title:"Config Tab",sidebar_label:"Config Tab"},o={unversionedId:"installation-guide/install-bihub-windows/server/config/config-tab",id:"installation-guide/install-bihub-windows/server/config/config-tab",isDocsHomePage:!1,title:"Config Tab",description:"Editing the configuration properties affects the BI Hub server and requires a restart of BI Hub Server instances.",source:"@site/docs/installation-guide/install-bihub-windows/server/config/config-tab.md",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/config/config-tab",sidebar_label:"Config Tab",sidebar:"installationGuide",previous:{title:"BI Hub Server Configuration",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/config/config"},next:{title:"Instances Tab",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/server/config/instances-tab"}},s=[{value:"General Section",id:"general-section",children:[]},{value:"Database Section",id:"database-section",children:[]},{value:"Audit Database Section",id:"audit-database-section",children:[]},{value:"SSL Section",id:"ssl-section",children:[]},{value:"Elastic Search Section",id:"elastic-search-section",children:[]},{value:"Mail Connection Server",id:"mail-connection-server",children:[]},{value:"Web Config",id:"web-config",children:[]},{value:"Message Queue",id:"message-queue",children:[]}],u={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Editing the configuration properties affects the BI Hub server and requires a restart of BI Hub Server instances."),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"Click the ",Object(b.b)("strong",{parentName:"p"},"Continue")," button upon changing the instances configuration properties after each section."))),Object(b.b)("p",null,"The ",Object(b.b)("em",{parentName:"p"},"Config")," tab allows the configuration of the following:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#general-section"}),"General Section"),": Configuration fields general to the BI Hub server."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#database-section"}),"Database Section"),": Configuration fields of the main database connection to the server."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#audit-database-section"}),"Audit Database Section"),": Configuration fields of the audit database connection to the server."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#ssl-section"}),"SSL Section"),": Establish a secure connection via SSL between browser and BI Hub Server."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#elastic-search-section"}),"Elastic Search Section"),": Configure the Elastic Search details."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#mail-connection-server"}),"Mail Connection Server"),": Configure Mail connection server."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#web-config"}),"Web Config"),": BI Hub Web configuration."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#message-queue"}),"Message Queue"),": Message Queue configurations")),Object(b.b)("h2",{id:"general-section"},"General Section"),Object(b.b)("p",null,"This section lists out the general BI Hub Server configuration fields."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Size"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum size of the log file in MB"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Count"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of log files that can be generated without a backup. Once the number is reached, the files need to be backed up."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value -10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Log Level"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Level of detail at which the log is written"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"Info")," \u2013 Will log all the available information"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"Warning")," \u2013 Will log all the warnings and errors"),Object(b.b)("li",null,Object(b.b)("strong",{parentName:"td"},"Error")," (Default) \u2013 Will log only errors.")))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agent Timeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout for the Agent health check in seconds"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cache Timeout"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout for the cache storage of BI Hub Server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 1 hour")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CORS (Cross-origin resource sharing)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for the BI Hub Server. To be more secure please set this value of the DNS URL of your machine."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - *")))),Object(b.b)("h2",{id:"database-section"},"Database Section"),Object(b.b)("p",null,"This section defines the configuration fields (same as audit database below) related to the main database connection to the BI Hub server. "),Object(b.b)("h2",{id:"audit-database-section"},"Audit Database Section"),Object(b.b)("p",null,"Audit database connection to the server configurations."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of the database in which the metadata is stored"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MySQL/MSSQL/Oracle/PostgreSQL")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Driver"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only available for MSSQL database type"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won\u2019t be available")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host Name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host name of the preferred database server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 127.0.0.1")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Database server port at which the database server is running"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 3306")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Schema to connect to"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default DB Name : bihubaudit")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter the database username"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"It should have all the privileges for the provided schema. ",Object(b.b)("br",null),"Provide the username that you used while installing the BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the above-provided username."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("br",null),"Provide the password that you used while installing the BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SSL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Enable SSL to have a secured connection between your database and BI Hub Server. Set to "True" to enable, and "False" to disable the SSL.'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - True")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create database"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create the database mentioned if not already present"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the \u2018Name\u2019 property")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Collate"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Database Collation in which you created the database schema. (enabled only when "Create database" is selected)'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - utf8_unicode_ci ",Object(b.b)("br",null),"Use the Default value unless you have a specific requirement.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Character set"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Character set of the database (enabled only when "Create database" is selected)'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - utf8 ",Object(b.b)("br",null),"Use the Default value unless you have a specific requirement.")))),Object(b.b)("h2",{id:"ssl-section"},"SSL Section"),Object(b.b)("p",null,"This section establishes a secure connection via SSL between browser and BI Hub Server.\nFor the initial configuration please skip this section without any changes.\nTo configure SSL in all the BI Hub configuration, please follow the ",Object(b.b)(c.a,{to:Object(i.a)("docs/installation-guide/advanced/ssl-config"),mdxType:"Link"},"SSL Configuration")," section."),Object(b.b)("h2",{id:"elastic-search-section"},"Elastic Search Section"),Object(b.b)("p",null,"This section helps to configure the connection details of the Elastic Search which is pre-installed with the BI Hub Server."),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"If you want to use your Elastic Search instance, you will be allowed to provide the details below."))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provide the URL to reach the elastic search server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("ul",null,Object(b.b)("li",null,"If you are using pre-installed Elastic Search, provide the following values: ",Object(b.b)("inlineCode",{parentName:"td"},"https://127.0.0.1:<https_port>/elasticsearch"),". ",Object(b.b)("br",null),"Note: https_port is the port number that you gave while installing BI Hub Server Elastic Search Port configuration Page. The default value is 9443"),Object(b.b)("li",null,"If you are using your own Elastic Search, then use the following details: ",Object(b.b)("inlineCode",{parentName:"td"},"{http/https}://<hostname>:<port>"))))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username of the Elastic search which is provided in the Elastic Search user configuration section of the installer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default username : esadmin ",Object(b.b)("br",null),"Provide the username that you used while installing the BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the user which is provided in the Elastic Search user configuration section of the installer"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provide the password that you used while installing the BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Index"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name of the index under which all the metadata needs to be stored"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default index : bihub")))),Object(b.b)("h2",{id:"mail-connection-server"},"Mail Connection Server"),Object(b.b)("p",null,"Configure the mail server connection details that is used to send emails from the Smart Search feature of BI Hub."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ServerMail"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Server host name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ex: smtp.office365.com")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port which should be used to connect with mail server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 567")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption type that needs to be used"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default Encryption : TLS")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username that needs to be used for login into the SMTP server."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password that needs to be used for login into the SMTP server"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender email address. Emails generated by Smart Search will use this address in From"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CC Sender"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Address that needs to be provided in CC, to audit all the emails triggered from VBIView"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("p",null,"After configuring all this section, press save and continue to start configuring Instances."),Object(b.b)("h2",{id:"web-config"},"Web Config"),Object(b.b)("p",null,"This section defines the URL and Port configuration required to setup the BI Hub Web."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provide the DNS resolvable URL for the BI Hub Web"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the DNS resolvable URL for logging into the BI Hub Web application")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provide the Port number for the BI Hub Web"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value for HTTP is 80, for HTTPS is 443")))),Object(b.b)("h2",{id:"message-queue"},"Message Queue"),Object(b.b)("p",null,"Message Queue configuration parameters and their description."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hostname for the machine where you have installed the Message Queue"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter localhost as its value (change required only while configuring high availability configuration)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to login"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter the same username you provided while installing BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to login"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter the same password you provided while installing BI Hub Server")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message Queue Port value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value 5672")))))}d.isMDXComponent=!0},224:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=s(a),O=n,j=u["".concat(i,".").concat(O)]||u[O]||d[O]||b;return a?r.a.createElement(j,c(c({ref:t},o),{},{components:a})):r.a.createElement(j,c({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<b;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},225:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return i}));var n=a(228),r=a(227);function b(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var b=void 0===n?{}:n,i=b.forcePrependBaseUrl,c=void 0!==i&&i,l=b.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var s=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+s:s}(b,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(13),i=a(227),c=a(10),l=Object(n.createContext)({collectLink:function(){}}),o=a(225),s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,u,d=e.isNavLink,O=e.to,j=e.href,p=e.activeClassName,m=e["data-noBrokenLinkCheck"],f=s(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),h=Object(o.b)().withBaseUrl,g=Object(n.useContext)(l),N=O||j,v=void 0!==N?function(e){return e.startsWith("/")}(a=N)?h(a):N:void 0,y=Object(i.a)(v),w=Object(n.useRef)(!1),S=d?b.e:b.c,P=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!P&&y&&window.docusaurus.prefetch(v),function(){P&&u&&u.disconnect()}}),[v,P,y]);var C=null!==(t=null==v?void 0:v.startsWith("#"))&&void 0!==t&&t,D=!v||!y||C;return v&&y&&!C&&!m&&g.collectLink(v),D?r.a.createElement("a",Object.assign({href:v},!y&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(S,Object.assign({},f,{onMouseEnter:function(){w.current||(window.docusaurus.preload(v),w.current=!0)},innerRef:function(e){var t,a;P&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(v)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:v},d&&{activeClassName:p}))}},227:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},228:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}}}]);