(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{101:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return O}));var n=a(3),b=a(7),r=(a(0),a(210)),l=a(211),i=a(212),c={id:"config-tab",title:"Config Tab",sidebar_label:"Config Tab"},o={unversionedId:"installation-guide/install-bihub-windows/server/config/config-tab",id:"installation-guide/install-bihub-windows/server/config/config-tab",isDocsHomePage:!1,title:"Config Tab",description:"Editing the configuration properties affects the BI Hub server and requires a restart of BI Hub Server instances.",source:"@site/docs/installation-guide/install-bihub-windows/server/config/config-tab.md",slug:"/installation-guide/install-bihub-windows/server/config/config-tab",permalink:"/docs/installation-guide/install-bihub-windows/server/config/config-tab",version:"current",sidebar_label:"Config Tab",sidebar:"installationGuide",previous:{title:"BI Hub Server Configuration",permalink:"/docs/installation-guide/install-bihub-windows/server/config/config"},next:{title:"Instances Tab",permalink:"/docs/installation-guide/install-bihub-windows/server/config/instances-tab"}},s=[{value:"General Section",id:"general-section",children:[]},{value:"Database Section",id:"database-section",children:[]},{value:"Audit Database Section",id:"audit-database-section",children:[]},{value:"SSL Section",id:"ssl-section",children:[]},{value:"Elastic Search Section",id:"elastic-search-section",children:[]},{value:"Mail Connection Server",id:"mail-connection-server",children:[]},{value:"Web Config",id:"web-config",children:[]},{value:"Message Queue",id:"message-queue",children:[]}],d={rightToc:s};function O(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Editing the configuration properties affects the BI Hub server and requires a restart of BI Hub Server instances."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Click the ",Object(r.b)("strong",{parentName:"p"},"Continue")," button upon changing the instances configuration properties after each section."))),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Config")," tab allows the configuration of the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#general-section"}),"General Section"),": Configuration fields general to the BI Hub server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#database-section"}),"Database Section"),": Configuration fields of the main database connection to the server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#audit-database-section"}),"Audit Database Section"),": Configuration fields of the audit database connection to the server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#ssl-section"}),"SSL Section"),": Establish a secure connection via SSL between browser and BI Hub Server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#elastic-search-section"}),"Elastic Search Section"),": Configure the Elastic Search details."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#mail-connection-server"}),"Mail Connection Server"),": Configure Mail connection server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#web-config"}),"Web Config"),": BI Hub Web configuration."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#message-queue"}),"Message Queue"),": Message Queue configurations")),Object(r.b)("h2",{id:"general-section"},"General Section"),Object(r.b)("p",null,"This section lists out the general BI Hub Server configuration fields."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Size"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum size of the log file in MB"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max Log Count"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Maximum number of log files that can be generated without a backup. Once the number is reached, the files need to be backed up."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value -10")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Log Level"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Level of detail at which the log is written"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("ul",null,Object(r.b)("li",null,Object(r.b)("strong",{parentName:"td"},"Info")," \u2013 Will log all the available information"),Object(r.b)("li",null,Object(r.b)("strong",{parentName:"td"},"Warning")," \u2013 Will log all the warnings and errors"),Object(r.b)("li",null,Object(r.b)("strong",{parentName:"td"},"Error")," (Default) \u2013 Will log only errors.")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Agent Timeout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout for the Agent health check in seconds"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 5")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cache Timeout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Timeout for the cache storage of BI Hub Server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - 1 hour")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"CORS (Cross-origin resource sharing)"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Settings for the BI Hub Server. To be more secure please set this value of the DNS URL of your machine."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value - *")))),Object(r.b)("h2",{id:"database-section"},"Database Section"),Object(r.b)("p",null,"This section defines the configuration fields (same as audit database below) related to the main database connection to the BI Hub server. "),Object(r.b)("h2",{id:"audit-database-section"},"Audit Database Section"),Object(r.b)("p",null,"Audit database connection to the server configurations."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Type of the database in which the metadata is stored"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"MySQL/MSSQL/Oracle/PostgreSQL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Driver"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only available for MSSQL database type"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Kindly provide the name of the MSSQL driver installed in the current system. For other database types, this field won\u2019t be available")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Host name of the preferred database server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 127.0.0.1")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Database server port at which the database server is running"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 3306")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Schema to connect to"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default DB Name : bihubaudit")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Enter the database username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"It should have all the privileges for the provided schema. ",Object(r.b)("br",null),"Provide the username that you used while installing the BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the above-provided username."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("br",null),"Provide the password that you used while installing the BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"SSL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Enable SSL to have a secured connection between your database and BI Hub Server. Set to "True" to enable, and "False" to disable the SSL.'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - True")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create database"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Create the database mentioned if not already present"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If the installer software should create database/schema, check this box. If this box is not checked, the database/schema should be created manually with the same name as indicated in the \u2018Name\u2019 property")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Collate"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Database Collation in which you created the database schema. (enabled only when "Create database" is selected)'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - utf8_unicode_ci ",Object(r.b)("br",null),"Use the Default value unless you have a specific requirement.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Character set"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'Character set of the database (enabled only when "Create database" is selected)'),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value - utf8 ",Object(r.b)("br",null),"Use the Default value unless you have a specific requirement.")))),Object(r.b)("h2",{id:"ssl-section"},"SSL Section"),Object(r.b)("p",null,"This section establishes a secure connection via SSL between browser and BI Hub Server.\nFor the initial configuration please skip this section without any changes.\nTo configure SSL in all the BI Hub configuration, please follow the ",Object(r.b)(i.a,{to:Object(l.a)("docs/installation-guide/advanced/ssl-config"),mdxType:"Link"},"SSL Configuration")," section."),Object(r.b)("h2",{id:"elastic-search-section"},"Elastic Search Section"),Object(r.b)("p",null,"This section helps to configure the connection details of the Elastic Search which is pre-installed with the BI Hub Server."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you want to use your Elastic Search instance, you will be allowed to provide the details below."))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provide the URL to reach the elastic search server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(r.b)("ul",null,Object(r.b)("li",null,"If you are using pre-installed Elastic Search, provide the following values: ",Object(r.b)("inlineCode",{parentName:"td"},"https://127.0.0.1:<https_port>/elasticsearch"),". ",Object(r.b)("br",null),"Note: https_port is the port number that you gave while installing BI Hub Server Elastic Search Port configuration Page. The default value is 9443"),Object(r.b)("li",null,"If you are using your own Elastic Search, then use the following details: ",Object(r.b)("inlineCode",{parentName:"td"},"{http/https}://<hostname>:<port>"))))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username of the Elastic search which is provided in the Elastic Search user configuration section of the installer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default username : esadmin ",Object(r.b)("br",null),"Provide the username that you used while installing the BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password of the user which is provided in the Elastic Search user configuration section of the installer"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Provide the password that you used while installing the BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Index"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Name of the index under which all the metadata needs to be stored"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default index : bihub")))),Object(r.b)("h2",{id:"mail-connection-server"},"Mail Connection Server"),Object(r.b)("p",null,"Configure the mail server connection details that is used to send emails from the Smart Search feature of BI Hub."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ServerMail"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Server host name"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Ex: smtp.office365.com")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Port which should be used to connect with mail server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default value : 567")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Encryption type that needs to be used"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Default Encryption : TLS")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Username that needs to be used for login into the SMTP server."),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Password that needs to be used for login into the SMTP server"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Sender email address. Emails generated by Smart Search will use this address in From"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"CC Sender"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Address that needs to be provided in CC, to audit all the emails triggered from VBIView"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("p",null,"After configuring all this section, press save and continue to start configuring Instances."),Object(r.b)("h2",{id:"web-config"},"Web Config"),Object(r.b)("p",null,"This section defines the URL and Port configuration required to setup the BI Hub Web."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provide the DNS resolvable URL for the BI Hub Web"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This is the DNS resolvable URL for logging into the BI Hub Web application")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provide the Port number for the BI Hub Web"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value for HTTP is 80, for HTTPS is 443")))),Object(r.b)("h2",{id:"message-queue"},"Message Queue"),Object(r.b)("p",null,"Message Queue configuration parameters and their description."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Purpose"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Host"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hostname for the machine where you have installed the Message Queue"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter localhost as its value (change required only while configuring high availability configuration)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Username to login"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter the same username you provided while installing BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Password to login"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enter the same password you provided while installing BI Hub Server")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Port"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Message Queue Port value"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default value 5672")))))}O.isMDXComponent=!0}}]);