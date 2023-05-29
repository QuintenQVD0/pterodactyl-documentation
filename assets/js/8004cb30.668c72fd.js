"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Introduction",l={unversionedId:"documentation/project/introduction",id:"documentation/project/introduction",title:"Introduction",description:"Pterodactyl is the open-source game server management panel built with PHP, React, and Go. Designed with",source:"@site/docs/documentation/project/introduction.md",sourceDirName:"documentation/project",slug:"/documentation/project/introduction",permalink:"/pterodactyl-documentation/docs/documentation/project/introduction",draft:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/docs/documentation/project/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",next:{title:"About",permalink:"/pterodactyl-documentation/docs/documentation/project/about"}},c={},u=[{value:"Supported Games",id:"supported-games",level:2},{value:"Responsible Disclosure",id:"responsible-disclosure",level:2}],s={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Pterodactyl is the open-source game server management panel built with PHP, React, and Go. Designed with\nsecurity in mind, Pterodactyl runs all game servers in isolated Docker containers while exposing a beautiful\nand intuitive UI to administrators and users. What more are you waiting for? Make game servers a first-class\ncitizen on your platform today."),(0,o.kt)("h2",{id:"supported-games"},"Supported Games"),(0,o.kt)("p",null,"We support a huge variety of games by utilizing Docker containers to isolate each instance, giving you the power\nto host your games across the world without having to bloat each physical machine with additional dependencies."),(0,o.kt)("p",null,"Some of our core supported games include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minecraft \u2014 including Spigot, Sponge, Bungeecord, Waterfall, and more"),(0,o.kt)("li",{parentName:"ul"},"Rust"),(0,o.kt)("li",{parentName:"ul"},"Terraria"),(0,o.kt)("li",{parentName:"ul"},"Teamspeak"),(0,o.kt)("li",{parentName:"ul"},"Mumble"),(0,o.kt)("li",{parentName:"ul"},"Team Fortress 2"),(0,o.kt)("li",{parentName:"ul"},"Counter Strike: Global Offensive"),(0,o.kt)("li",{parentName:"ul"},"Garry's Mod"),(0,o.kt)("li",{parentName:"ul"},"ARK: Survival Evolved")),(0,o.kt)("p",null,"In addition to our standard nest of supported games, our community is constantly pushing the limits of this software\nand there are plenty more games available provided by the community. Some of these games include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Factorio"),(0,o.kt)("li",{parentName:"ul"},"San Andreas: MP"),(0,o.kt)("li",{parentName:"ul"},"Pocketmine MP"),(0,o.kt)("li",{parentName:"ul"},"Squad"),(0,o.kt)("li",{parentName:"ul"},"FiveM"),(0,o.kt)("li",{parentName:"ul"},"Xonotic"),(0,o.kt)("li",{parentName:"ul"},"Discord ATLBot"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/parkervcp/eggs"},"and many more..."))),(0,o.kt)("h2",{id:"responsible-disclosure"},"Responsible Disclosure"),(0,o.kt)("p",null,"Pterodactyl is completely open-source, and as such completely open to independent users and auditors to browse our\ncode base and hunt for security issues. If you come across anything that raises red flags for you, please do not\nhesitate to reach out directly to ",(0,o.kt)("inlineCode",{parentName:"p"},"support@pterodactyl.io"),". We ask that you please be responsible when disclosing\nany security concerns and ",(0,o.kt)("em",{parentName:"p"},"do not")," report them on our public facing bug tracker."))}d.isMDXComponent=!0}}]);