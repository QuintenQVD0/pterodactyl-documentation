"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[531],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={},o="CentOS 8, Rocky Linux 8, AlmaLinux 8",l={unversionedId:"Community/Wings Installation/centos8",id:"Community/Wings Installation/centos8",title:"CentOS 8, Rocky Linux 8, AlmaLinux 8",description:"In this guide we will install Pterodactyl's Wings v1.X \u2014 including all of it's dependencies \u2014 and configure it to use a SSL connection.",source:"@site/docs/Community/Wings Installation/centos8.md",sourceDirName:"Community/Wings Installation",slug:"/Community/Wings Installation/centos8",permalink:"/docs/Community/Wings Installation/centos8",draft:!1,editUrl:"https://github.com/pterodactyl/documentation/docs/Community/Wings Installation/centos8.md",tags:[],version:"current",frontMatter:{},sidebar:"CommunitySidebar",previous:{title:"CentOS 7",permalink:"/docs/Community/Wings Installation/centos7"},next:{title:"Debian 10",permalink:"/docs/Community/Wings Installation/debian10"}},s={},c=[{value:"Install Requirements",id:"install-requirements",level:2},{value:"Docker",id:"docker",level:3},{value:"FirewallD Changes",id:"firewalld-changes",level:3},{value:"Installing Wings",id:"installing-wings",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"centos-8-rocky-linux-8-almalinux-8"},"CentOS 8, Rocky Linux 8, AlmaLinux 8"),(0,a.kt)("p",null,"In this guide we will install Pterodactyl's Wings v1.X \u2014 including all of it's dependencies \u2014 and configure it to use a SSL connection."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This guide is based off the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Documentation/Wings/installing"},"official installation documentation")," but is tailored specifically for Enterprise Linux 8.")),(0,a.kt)("h2",{id:"install-requirements"},"Install Requirements"),(0,a.kt)("p",null,"We will first begin by installing all of the Wings' ",(0,a.kt)("a",{parentName:"p",href:"/docs/Documentation/Wings/installing#dependencies"},"required")," dependencies."),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"## Install yum tools\ndnf install -y dnf-utils device-mapper-persistent-data lvm2\n\n## Add the docker repo\ndnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo\n\n## Install docker\ndnf install -y docker-ce --nobest\n\n## Enable docker service\nsystemctl enable docker\nsystemctl start docker\n")),(0,a.kt)("h3",{id:"firewalld-changes"},"FirewallD Changes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"firewall-cmd --add-port 8080/tcp --permanent\nfirewall-cmd --add-port 2022/tcp --permanent\nfirewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0\nfirewall-cmd --zone=trusted --add-masquerade --permanent\nfirewall-cmd --reload\n")),(0,a.kt)("h2",{id:"installing-wings"},"Installing Wings"),(0,a.kt)("p",null,"Great, now all of the dependencies and firewall rules have been dealt with. From here follow the ",(0,a.kt)("a",{parentName:"p",href:"/docs/Documentation/Wings/installing#enabling-swap"},"official Wings installation documentation"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you have SELinux enforcement enabled and you are getting AVC denials from your containers, try relocating your Wings data directory from ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/pterodactyl")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/srv/containers/pterodactyl"),". That is where the targeted policy expects Docker to read and write data from.")))}u.isMDXComponent=!0}}]);