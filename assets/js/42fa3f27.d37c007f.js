"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[6365],{3375:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>r});var i=t(5893),l=t(1151);const s={slug:"/community/wings/install/centos8"},a="CentOS 8, Rocky Linux 8, AlmaLinux 8",o={id:"community/installation-guides/wings/centos8",title:"CentOS 8, Rocky Linux 8, AlmaLinux 8",description:"In this guide we will install Pterodactyl's Wings v1.X \u2014 including all of it's dependencies \u2014 and configure it to use a SSL connection.",source:"@site/docs/community/installation-guides/wings/centos8.md",sourceDirName:"community/installation-guides/wings",slug:"/community/wings/install/centos8",permalink:"/pterodactyl-documentation/docs/community/wings/install/centos8",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/installation-guides/wings/centos8.md",tags:[],version:"current",frontMatter:{slug:"/community/wings/install/centos8"},sidebar:"CommunitySidebar",previous:{title:"CentOS 7",permalink:"/pterodactyl-documentation/docs/community/wings/install/centos7"},next:{title:"Debian 11 & 12",permalink:"/pterodactyl-documentation/docs/community/wings/install/debian"}},c={},r=[{value:"Install Requirements",id:"install-requirements",level:2},{value:"Docker",id:"docker",level:3},{value:"FirewallD Changes",id:"firewalld-changes",level:3},{value:"Installing Wings",id:"installing-wings",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"centos-8-rocky-linux-8-almalinux-8",children:"CentOS 8, Rocky Linux 8, AlmaLinux 8"}),"\n",(0,i.jsx)(e.p,{children:"In this guide we will install Pterodactyl's Wings v1.X \u2014 including all of it's dependencies \u2014 and configure it to use a SSL connection."}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["This guide is based off the ",(0,i.jsx)(e.a,{href:"/pterodactyl-documentation/docs/wings/install",children:"official installation documentation"})," but is tailored specifically for Enterprise Linux 8."]})}),"\n",(0,i.jsx)(e.h2,{id:"install-requirements",children:"Install Requirements"}),"\n",(0,i.jsxs)(e.p,{children:["We will first begin by installing all of the Wings' ",(0,i.jsx)(e.a,{href:"/pterodactyl-documentation/docs/wings/install#dependencies",children:"required"})," dependencies."]}),"\n",(0,i.jsx)(e.h3,{id:"docker",children:"Docker"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"## Install yum tools\ndnf install -y dnf-utils device-mapper-persistent-data lvm2\n\n## Add the docker repo\ndnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo\n\n## Install docker\ndnf install -y docker-ce --nobest\n\n## Enable docker service\nsystemctl enable docker\nsystemctl start docker\n"})}),"\n",(0,i.jsx)(e.h3,{id:"firewalld-changes",children:"FirewallD Changes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"firewall-cmd --add-port 8080/tcp --permanent\nfirewall-cmd --add-port 2022/tcp --permanent\nfirewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0\nfirewall-cmd --zone=trusted --add-masquerade --permanent\nfirewall-cmd --reload\n"})}),"\n",(0,i.jsx)(e.h2,{id:"installing-wings",children:"Installing Wings"}),"\n",(0,i.jsxs)(e.p,{children:["Great, now all of the dependencies and firewall rules have been dealt with. From here follow the ",(0,i.jsx)(e.a,{href:"/pterodactyl-documentation/docs/wings/install#enabling-swap",children:"official Wings installation documentation"}),"."]}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["If you have SELinux enforcement enabled and you are getting AVC denials from your containers, try relocating your Wings data directory from ",(0,i.jsx)(e.code,{children:"/var/lib/pterodactyl"})," to ",(0,i.jsx)(e.code,{children:"/var/srv/containers/pterodactyl"}),". That is where the targeted policy expects Docker to read and write data from."]})})]})}function u(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>a});var i=t(7294);const l={},s=i.createContext(l);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);