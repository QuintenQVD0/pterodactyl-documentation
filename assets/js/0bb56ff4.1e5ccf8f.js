"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[241],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=r.createContext({}),d=function(e){var t=r.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(A.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,A=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,u=p["".concat(A,".").concat(s)]||p[s]||m[s]||o;return n?r.createElement(u,i(i({ref:t},l),{},{components:n})):r.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var A in t)hasOwnProperty.call(t,A)&&(c[A]=t[A]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={},i="Terminology",c={unversionedId:"Documentation/Project Information/terms",id:"Documentation/Project Information/terms",title:"Terminology",description:"Panel \u2014 This refers to Pterodactyl Panel itself, and is what allows you to add additional",source:"@site/docs/Documentation/Project Information/terms.md",sourceDirName:"Documentation/Project Information",slug:"/Documentation/Project Information/terms",permalink:"/docs/Documentation/Project Information/terms",draft:!1,editUrl:"https://github.com/pterodactyl/documentation/docs/Documentation/Project Information/terms.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"About",permalink:"/docs/Documentation/Project Information/about"},next:{title:"Community Standards",permalink:"/docs/Documentation/Project Information/community"}},A={},d=[{value:"Simple Setup Diagram",id:"simple-setup-diagram",level:2},{value:"Advanced Setup Diagram",id:"advanced-setup-diagram",level:2}],l={toc:d},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Panel")," \u2014 This refers to Pterodactyl Panel itself, and is what allows you to add additional\nnodes and servers to the system."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node")," \u2014 A node is a physical machine that runs an instance of Wings."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wings")," \u2014 The newer service written in Go that interfaces with Docker and the Panel to provide secure access for\ncontrolling servers via the Panel."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Server")," \u2014 In this case, a server refers to a running instance that is created by the panel. These servers are\ncreated on nodes, and you can have multiple servers per node."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker")," \u2014 Docker is a platform that lets you separate the application from your infrastructure into isolated, secure containers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Docker Image"),"  \u2014 A Docker image contains everything needed to run a containerized application. (e.g. Java for a Minecraft Server)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Container")," \u2014 Each server will be running inside an isolated container to enforce hardware limitations\n(such as CPU and RAM) and avoid any interference between servers on one node. These are created by Docker."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Nest")," \u2014 Each nest is usually used as a specific game or service, for example: Minecraft, Teamspeak or Terraria and can contain many eggs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Egg"),"  \u2014 Each egg is usually used to store the configuration of a specific type of game, for example: Vanilla, Spigot or Bungeecord for Minecraft."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Yolks"),"  \u2014 A curated collection of core docker images that can be used with Pterodactyl's Egg system."),(0,a.kt)("h2",{id:"simple-setup-diagram"},"Simple Setup Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3458).Z,width:"602",height:"292"})),(0,a.kt)("h2",{id:"advanced-setup-diagram"},"Advanced Setup Diagram"),(0,a.kt)("admonition",{title:"Panel and Wings on the same machine",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It is also possible to install wings on the panel machine so it acts as panel and node machine at once.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(668).Z,width:"3489",height:"1888"})))}m.isMDXComponent=!0},668:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/example_setup-219788f6d1da81fe2071cb47f2423f82.png"},3458:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);