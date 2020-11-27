(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{213:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),o=(n(0),n(217)),b=n(218),l=n(219),c={id:"config",title:"BI Hub Web Configuration",sidebar_label:"BI Hub Web Configuration"},r={unversionedId:"installation-guide/install-bihub-windows/web/config",id:"installation-guide/install-bihub-windows/web/config",isDocsHomePage:!1,title:"BI Hub Web Configuration",description:"In the previous section, you installed BI Hub Web and configured with basic default configurations.",source:"@site/docs/installation-guide/install-bihub-windows/web/config.md",slug:"/installation-guide/install-bihub-windows/web/config",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/config",version:"current",sidebar_label:"BI Hub Web Configuration",sidebar:"installationGuide",previous:{title:"Installation of BI Hub Web",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/install"},next:{title:"Post Configuration Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/web/post-config"}},s=[{value:"Edit BI Hub Server URL Details",id:"edit-bi-hub-server-url-details",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u2705 In the previous section, you installed ",Object(o.b)("em",{parentName:"p"},"BI Hub Web")," and configured with basic default configurations."),Object(o.b)("p",null,"Follow the ",Object(o.b)("em",{parentName:"p"},"BI Hub Web")," advanced configuration steps, if you need additional SSL configuration or want to change the default configuration."),Object(o.b)("h2",{id:"edit-bi-hub-server-url-details"},"Edit BI Hub Server URL Details"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"BI Hub Web")," is configured with the ",Object(o.b)("em",{parentName:"p"},"URL")," details as entered in step:4 of ",Object(o.b)(l.a,{to:Object(b.a)("#"),mdxType:"Link"},"Installation of BI Hub Web")," section."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Open the ",Object(o.b)("inlineCode",{parentName:"li"},"config.json")," file in administrator mode. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("em",{parentName:"li"},"bundled NGINX")," version of BI Hub Web:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("inlineCode",{parentName:"li"},"config.json")," file is found in the ",Object(o.b)("inlineCode",{parentName:"li"},"<installation folder>/nginx/nginx/html/"),". "),Object(o.b)("li",{parentName:"ol"},"To open the configuration file, right-click ",Object(o.b)("inlineCode",{parentName:"li"},"openconfig.bat")," and choose ",Object(o.b)("em",{parentName:"li"},"run as administrator")," from the same location. "))),Object(o.b)("li",{parentName:"ul"},"For ",Object(o.b)("em",{parentName:"li"},"non-bundled")," version of BI Hub Web:\nThe ",Object(o.b)("inlineCode",{parentName:"li"},"config.json")," file is found in the ",Object(o.b)("inlineCode",{parentName:"li"},"<installation folder>/"),"."))),Object(o.b)("li",{parentName:"ol"},"Replace the ",Object(o.b)("strong",{parentName:"li"},"Host")," with the desired URL of BI Hub Server URL.",Object(o.b)("div",Object(i.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The URL should be DNS resolvable and it should be accessible for all client machines."))))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Replace the ",Object(o.b)("strong",{parentName:"li"},"Port")," with the desired BI Hub Server port. ",Object(o.b)("strong",{parentName:"li"},"Save")," the file. ")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There is no need for restarting the server. Make sure that the client browser cache has been cleared or restart the client browser for the new configuration to take effect."))),Object(o.b)("p",null,"\u2705 BI Hub Server URL details have been updated."))}u.isMDXComponent=!0}}]);