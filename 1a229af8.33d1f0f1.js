(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(204)),s=n(205),c=(n(206),n(207)),l=(n(53),{id:"cluster",title:"Multiple Instances of BI Hub",sidebar_label:"Cluster Manager"}),o={unversionedId:"admin-guide/agent-manager/cluster",id:"admin-guide/agent-manager/cluster",isDocsHomePage:!1,title:"Multiple Instances of BI Hub",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/admin-guide/agent-manager/cluster.mdx",slug:"/admin-guide/agent-manager/cluster",permalink:"/VV-Docs/docs/admin-guide/agent-manager/cluster",version:"current",sidebar_label:"Cluster Manager",sidebar:"adminGuide",previous:{title:"Row Level Security for Power BI/Onedrive Reports",permalink:"/VV-Docs/docs/admin-guide/agent-manager/agent/row-level-security"},next:{title:"User Manager Welcome Screen",permalink:"/VV-Docs/docs/admin-guide/user-manager/user-manager-main"}},b=[{value:"Create a Cluster",id:"create-a-cluster",children:[]}],u={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To ensure high availability or perform load balancing when a large number of concurrent users (excess of 800) use BI Hub, multiple instances of BI Hub agents are required. Two or more instances of the same agent type can be clustered together and they point to the same BI\nplatform. "),Object(i.b)("p",null,"For example, two ",Object(i.b)("em",{parentName:"p"},"Tableau")," agents are created to form a cluster and these two agents point to the same Tableau platform. If one agent fails, the load will be taken by another instance, thus ensuring high availability.\nSimilarly, if a large number of BI Hub concurrent users launch Tableau reports, these two agents perform load balancing. Tying up the two agents to form an agent cluster is accomplished using the BI Hub cluster manager. This BI Hub agent cluster interacts with the cluster/load balancer already setup in the enterprise to handle load balancing/high availability. In fact, the details entered during BI Hub cluster setup such as URL, Port etc., is based on the configuration of\nthe Load Balancer used in the enterprise."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"To create a Cluster, the agents should not have any users mapped to them.\nOr in other words, you can only create clusters on one or more newly created instances."))),Object(i.b)("h2",{id:"create-a-cluster"},"Create a Cluster"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Configure the nginx conf file to include the instances to be clustered and the cluster port number.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the Server location ",Object(i.b)("inlineCode",{parentName:"p"},"C:\\nginx-1.14.2\\nginx-1.15.12\\conf"),", and open the ",Object(i.b)("inlineCode",{parentName:"p"},"nginx.conf")," file.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"http")," section, enter the instances ",Object(i.b)("inlineCode",{parentName:"p"},"<url>:<port number>")," to be clustered."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="nginx.conf" {3,4,7-9}',title:'"nginx.conf"',"{3,4,7-9}":!0}),"http {\n  upstream cluster {\n    server solutionsdevtest.product.solutions:13414;\n    server solutionsdevtest.product.solutions:13417;\n  }\n  upstream cluster1 {\n    server solutionsdevtest.product.solutions:12601;\n    server solutionsdevtest.product.solutions:12602;\n    server solutionsdevtest.product.solutions:12603;\n  }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the ",Object(i.b)("inlineCode",{parentName:"p"},"server"),' section, give the port number for the Cluster in the same sequence as that of the Instance port number.\nThis port number is used in the BI Hub "Add Cluster" form.'),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="nginx.conf" {2,11}',title:'"nginx.conf"',"{2,11}":!0}),"   server {\n       listen  13415; //Cluster port number\n       server_name  localhost;\n\n       #charset koi8-r;\n\n       #access_log  logs/host.access.log  main;\n\n\n       location / {\n           proxy_pass http://cluster;\n       }\n\n       #error_page  404              /404.html;\n")),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},'The "proxy_pass" name and upstream function name should be the same.')))),Object(i.b)("p",null,"Save and close the ",Object(i.b)("inlineCode",{parentName:"p"},"nginx.conf")," file."),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"In the nginx directory ",Object(i.b)("inlineCode",{parentName:"li"},"C:\\nginx-1.14.2\\nginx-1.15.12"),". Click ",Object(i.b)("inlineCode",{parentName:"li"},"nginx.exe"),", go to ",Object(i.b)("strong",{parentName:"li"},"File > Open command prompt > Open command prompt as administrator"),".")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#For config changes done while nginx is stopped\nC:\\nginx-1.14.2\\nginx-1.15.12>start nginx \n\n#For config changes done while nginx is running\nC:\\nginx-1.14.2\\nginx-1.15.12>nginx -s reload \n")),Object(i.b)("p",null,"\u2705 You have successfully added the instance clusters in the backend."),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"In BI Hub, go to ",Object(i.b)("strong",{parentName:"li"},"Agent Manager > Cluster Manager")," screen, click ",Object(i.b)("strong",{parentName:"li"},"Add Cluster"),".",Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},"w",Object(i.b)("img",{alt:"Add a Cluster",src:Object(s.a)("doc-images/admin-guide/agent/add-cluster.png")})),Object(i.b)("p",null,"Add a Cluster")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter ",Object(i.b)("strong",{parentName:"p"},"Name, URL, Port")," (Cluster port number entered in the ",Object(i.b)("inlineCode",{parentName:"p"},"nginx.conf")," file), and ",Object(i.b)("strong",{parentName:"p"},"Type"),"."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Click on the ",Object(i.b)("strong",{parentName:"li"},"Type")," drop-down list to select the agent, and click ",Object(i.b)("strong",{parentName:"li"},"Add clusters"),"."),Object(i.b)("li",{parentName:"ul"},"Select a minimum of 2 Agent clusters on the left and click ",Object(i.b)("strong",{parentName:"li"},"Save"),".")),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Enter Cluster details",src:Object(s.a)("doc-images/admin-guide/agent/create-cluster-form.png")})),Object(i.b)("p",null,"Enter Cluster details"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Submit"),"."),Object(i.b)("div",{class:"center"},Object(i.b)(c.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"QlikView instances Cluster created",src:Object(s.a)("doc-images/admin-guide/agent/cluster-added.png")})),Object(i.b)("p",null,"QlikView instances Cluster created")))),Object(i.b)("p",null,"\u2705 You have created a cluster of 2 QlikView instances."))}d.isMDXComponent=!0}}]);