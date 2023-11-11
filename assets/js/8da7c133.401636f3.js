"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[702],{5918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(5893),i=t(1151);const a={slug:"/tutorials/node"},s="Creating a New Node",r={id:"community/tutorials/add_node",title:"Creating a New Node",description:"Location",source:"@site/docs/community/tutorials/add_node.md",sourceDirName:"community/tutorials",slug:"/tutorials/node",permalink:"/pterodactyl-documentation/docs/tutorials/node",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/tutorials/add_node.md",tags:[],version:"current",frontMatter:{slug:"/tutorials/node"},sidebar:"CommunitySidebar",previous:{title:"Minecraft",permalink:"/pterodactyl-documentation/docs/games/minecraft"},next:{title:"Artisan CLI",permalink:"/pterodactyl-documentation/docs/tutorials/artisan"}},d={},l=[{value:"Location",id:"location",level:2},{value:"Information Required",id:"information-required",level:2},{value:"Install the Wings",id:"install-the-wings",level:2},{value:"Configuring the Node",id:"configuring-the-node",level:2},{value:"Auto-Deploy",id:"auto-deploy",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"creating-a-new-node",children:"Creating a New Node"}),"\n",(0,o.jsx)(n.h2,{id:"location",children:"Location"}),"\n",(0,o.jsx)(n.p,{children:"Head to the admin panel and click the Nodes tab on the left sidebar. After that, click 'Create New' on the\ntop right side to open the page to add a node."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7812).Z+"",width:"1879",height:"939"})}),"\n",(0,o.jsx)(n.h2,{id:"information-required",children:"Information Required"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(7800).Z+"",width:"1879",height:"939"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Name"}),": a quick identifiable name for the node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Description"}),": a long description that is used to help you identify the node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Location"}),": the location you want the node in. These are configured in the 'Locations' section of the panel and one\nmust be created before a node can be created. These simply act as categories for nodes and serve no other purpose at\nthis time."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"FQDN"}),": the fully qualified domain name for the node \u2014 for example: ",(0,o.jsx)(n.code,{children:"node.pterodactyl.io"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Communicate over SSL"}),": if the panel is using SSL the Daemon is required to use SSL as well."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Behind Proxy"}),": if you have the Daemon behind a proxy that terminates SSL connections before arriving at the Daemon\nthen this option should be selected. If none of that sentence made sense, this doesn't affect you."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Server File Directory"}),": the location on the physical server where the daemon is to store the files the servers\ngenerate. By default this is ",(0,o.jsx)(n.code,{children:"/var/lib/pterodactyl/volumes"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{title:"OVH Users",type:"tip",children:(0,o.jsxs)(n.p,{children:["Some OVH users regularly have their ",(0,o.jsx)(n.code,{children:"/home"})," folder be the largest filesystem. You may want to change to use\n",(0,o.jsx)(n.code,{children:"/home/pterodactyl/volumes"})," if you are on a default OVH box."]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total Memory"}),": the total amount of RAM the node should be able to allocate automatically."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Memory Overallocate"}),": the percentage of RAM to over-allocate on a node. For example, if you have set a 10GB memory\nlimit, with a 20% overallocation, the Panel will allocate up to 12GB of memory on this node in total."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Total Disk Space"}),": the total amount of disk space the node should be able to allocate automatically."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Disk Overallocate"}),": works the same way as memory overallocation."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"Don't forget to account for OS overhead and other software requirements on machines."})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Daemon Port"}),": the port that the Daemon should listen on."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Daemon SFTP Port"}),": the port the Daemon sftp-server or standalone SFTP server should listen on."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"install-the-wings",children:"Install the Wings"}),"\n",(0,o.jsxs)(n.p,{children:["At this point you'll need to have the Daemon installed on your machine. Check out the ",(0,o.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/wings/installing",children:"documentation"}),"\nfor more information, or try one of the community guides for ",(0,o.jsx)(n.a,{href:"/pterodactyl-documentation/docs/community/installation-guides/wings/centos8",children:"CentOS"}),",\n",(0,o.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/wings/configuration",children:"Ubuntu"}),", or ",(0,o.jsx)(n.a,{href:"/pterodactyl-documentation/docs/community/installation-guides/wings/debian",children:"Debian"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-the-node",children:"Configuring the Node"}),"\n",(0,o.jsx)(n.p,{children:"Go to the Node Configuration page"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(3897).Z+"",width:"1879",height:"939"})}),"\n",(0,o.jsxs)(n.p,{children:["Copy and paste the config into the ",(0,o.jsx)(n.code,{children:"config.yml"})," file. (Default location is ",(0,o.jsx)(n.code,{children:"/etc/pterodactyl/config.yml"}),")"]}),"\n",(0,o.jsx)(n.h3,{id:"auto-deploy",children:"Auto-Deploy"}),"\n",(0,o.jsx)(n.p,{children:"This will generate a command to run on the node server to configure the daemon for you."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3897:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/pterodactyl_add_node_config-181dfe5ca99196d2543b963ddc509479.png"},7812:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/pterodactyl_add_node_create_button-9caf1a22bb20aefb19786a9f9b763572.png"},7800:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/pterodactyl_add_node_new_page-28ab83fe1dc76f1c856d3d12d8b5dec4.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);