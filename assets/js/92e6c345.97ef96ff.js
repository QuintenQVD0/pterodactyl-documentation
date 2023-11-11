"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[516],{1971:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(5893),i=a(1151);const r={slug:"/tutorials/artisan"},s="Artisan CLI",l={id:"community/tutorials/artisan",title:"Artisan CLI",description:"The Artisan CLI, command line interface, is part of the Laravel framework, which Pterodactyl is built on. The Artisan file is located in /var/www/pterodactyl if you followed the official guide. This guide goes over some more Pterodactyl specific/related Artisan commands, which are all prefixed with the letter p (e.g. pmake). If you'd like to view all commands, you can do so by running:",source:"@site/docs/community/tutorials/artisan.md",sourceDirName:"community/tutorials",slug:"/tutorials/artisan",permalink:"/pterodactyl-documentation/docs/tutorials/artisan",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/tutorials/artisan.md",tags:[],version:"current",frontMatter:{slug:"/tutorials/artisan"},sidebar:"CommunitySidebar",previous:{title:"Creating a New Node",permalink:"/pterodactyl-documentation/docs/tutorials/node"},next:{title:"Building Panel Assets",permalink:"/pterodactyl-documentation/docs/customization/panel"}},o={},d=[{value:"User Management",id:"user-management",level:2},{value:"Create User",id:"create-user",level:3},{value:"Delete User",id:"delete-user",level:3},{value:"Disable 2FA",id:"disable-2fa",level:3},{value:"Server &amp; Node Management",id:"server--node-management",level:2},{value:"Create Location",id:"create-location",level:3},{value:"Delete Location",id:"delete-location",level:3},{value:"Server Bulk Power",id:"server-bulk-power",level:3},{value:"Panel Management",id:"panel-management",level:2},{value:"View Panel Info",id:"view-panel-info",level:3},{value:"Update Panel",id:"update-panel",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"artisan-cli",children:"Artisan CLI"}),"\n",(0,t.jsxs)(n.p,{children:["The Artisan CLI, command line interface, is part of the Laravel framework, which Pterodactyl is built on. The Artisan file is located in ",(0,t.jsx)(n.code,{children:"/var/www/pterodactyl"})," if you followed the official guide. This guide goes over some more Pterodactyl specific/related Artisan commands, which are all prefixed with the letter ",(0,t.jsx)(n.code,{children:"p"})," (e.g. ",(0,t.jsx)(n.code,{children:"p:user:make"}),"). If you'd like to view all commands, you can do so by running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan list\n"})}),"\n",(0,t.jsx)(n.p,{children:"To get information regarding a specific command you can do so by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan help <command>\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"To simplify this documentation, in command usage you'll see things like the following:"}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<hello-world>"})," - Required argument"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[hello-world]"})," - Optional argument"]}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{--hello-world}"})," - Option"]})]}),"\n",(0,t.jsx)(n.h2,{id:"user-management",children:"User Management"}),"\n",(0,t.jsx)(n.p,{children:"When running any of the following commands, you can either use the options or don't pass through anything and use the interactive prompt. You can also do both passing through options and using interactive prompts as well."}),"\n",(0,t.jsx)(n.h3,{id:"create-user",children:"Create User"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:user:make {--email=user@example.com}\n                        {--username=myusername}\n                        {--name-first=My}\n                        {--name-last=Name}\n                        {--password=supersecret}\n                        {--admin=1|0}\n                        {--no-password}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"delete-user",children:"Delete User"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:user:delete {--user=username/email/UUID}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"disable-2fa",children:"Disable 2FA"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Disabling 2-factor authentication should only be used as a last resort for user recovery. ",(0,t.jsx)(n.strong,{children:"Please use this with caution."})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:user:disable2fa {--email=user@example.com}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"server--node-management",children:"Server & Node Management"}),"\n",(0,t.jsx)(n.h3,{id:"create-location",children:"Create Location"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'php artisan p:location:make {--short=us1}\n                            {--long="A description of this location."}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"delete-location",children:"Delete Location"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:location:delete {--short=us1}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"server-bulk-power",children:"Server Bulk Power"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:server:bulk-power <start, stop, kill, restart>\n                                {--servers=1,2,3}\n                                {--nodes=1,2,3}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"panel-management",children:"Panel Management"}),"\n",(0,t.jsx)(n.h3,{id:"view-panel-info",children:"View Panel Info"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:info\n"})}),"\n",(0,t.jsx)(n.p,{children:"Displays a variety of panel information that can be used to check the configuration of things such as database and email."}),"\n",(0,t.jsx)(n.h3,{id:"update-panel",children:"Update Panel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"php artisan p:upgrade   {--user=www-data}\n                        {--group=www-data}\n                        {--url=https://example.com/panel.tar.gz}\n                        {--release=latest}\n                        {--skip-download}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Downloads a new archive for Pterodactyl and executes the normal upgrade commands."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>s});var t=a(7294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);