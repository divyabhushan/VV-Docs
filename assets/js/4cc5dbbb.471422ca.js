(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var s=n(3),i=n(7),a=(n(0),n(209)),r={id:"ssl",title:"What is SSL",sidebar_label:"What is SSL"},o={unversionedId:"installation-guide/advanced/ssl/ssl",id:"installation-guide/advanced/ssl/ssl",isDocsHomePage:!1,title:"What is SSL",description:"SSL is an acronym for Secure Socket Layer.",source:"@site/docs/installation-guide/advanced/ssl/ssl.md",sourceDirName:"installation-guide/advanced/ssl",slug:"/installation-guide/advanced/ssl/ssl",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl",version:"current",sidebar_label:"What is SSL",frontMatter:{id:"ssl",title:"What is SSL",sidebar_label:"What is SSL"},sidebar:"installationGuide",previous:{title:"Post Installation Steps",permalink:"/VV-Docs/docs/installation-guide/install-bihub-windows/agents/post-install"},next:{title:"Configure SSL for BI Hub Server",permalink:"/VV-Docs/docs/installation-guide/advanced/ssl/ssl-server"}},c=[{value:"Considerations",id:"considerations",children:[]},{value:"SSL Format and conversion",id:"ssl-format-and-conversion",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"SSL")," is an acronym for ",Object(a.b)("strong",{parentName:"p"},"Secure Socket Layer"),".\nSSL certificates create a foundation of trust by establishing a secure connection. To assure visitors their connection is secure, browsers provide special visual cues that range anything from a green padlock to a branded URL bar."),Object(a.b)("p",null,"SSL certificates have a key pair: a ",Object(a.b)("strong",{parentName:"p"},"public")," and a ",Object(a.b)("strong",{parentName:"p"},"private")," key. These keys work together to establish an encrypted connection."),Object(a.b)("h2",{id:"considerations"},"Considerations"),Object(a.b)("p",null,"Here are the key points to be considered, if you want to configure all the BI Hub components including the BI Platforms for SSL (Self Signed SSL)."),Object(a.b)("p",null,"It is always recommended to use SSL wherever it is supported & allowed.\nIt is security recommended practice to use SSL when you are handling logins and credentials so that they would not be transmitted over the networks in plaintext form."),Object(a.b)("p",null,"There is no difference in terms of security provided by the Self-Signed certificate versus the Publicly Trusted certificate except for the Certificate Authority (CA) which signs the certificate.\nFor Self-Signed certificates, the CA\u2019s root certificate should be internally trusted across all systems which will be accessing the website."),Object(a.b)("h2",{id:"ssl-format-and-conversion"},"SSL Format and conversion"),Object(a.b)("p",null,"There are multiple types of encoding supported in SSL and their use cases vary with platform and web servers.\nThe common ones that are widely supported would be ",Object(a.b)("strong",{parentName:"p"},"PEM (Privacy Enhanced Mail)")," & ",Object(a.b)("strong",{parentName:"p"},"DER (Distinguished Encoding Rules)"),"."),Object(a.b)("p",null,"Here is a simple example for converting a ",Object(a.b)("strong",{parentName:"p"},"DER")," certificate into ",Object(a.b)("strong",{parentName:"p"},"PEM"),":"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},"openssl x509 -inform der -in der_certificate.cer -out pem_certificate.crt\n")))}d.isMDXComponent=!0}}]);