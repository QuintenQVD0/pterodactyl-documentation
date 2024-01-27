"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[3767],{5633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(5893),a=n(1151),o=n(4866),i=n(5162);const s={slug:"/tutorials/ssl"},l="Creating SSL Certificates",c={id:"documentation/tutorials/creating_ssl_certificates",title:"Creating SSL Certificates",description:"This tutorial briefly covers creating new SSL certificates for your panel and wings.",source:"@site/docs/documentation/tutorials/creating_ssl_certificates.md",sourceDirName:"documentation/tutorials",slug:"/tutorials/ssl",permalink:"/pterodactyl-documentation/docs/tutorials/ssl",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/tutorials/creating_ssl_certificates.md",tags:[],version:"current",frontMatter:{slug:"/tutorials/ssl"},sidebar:"DocsSidebar",previous:{title:"Setting up MySQL",permalink:"/pterodactyl-documentation/docs/project/mysql"},next:{title:"Dockerized versions",permalink:"/pterodactyl-documentation/docs/tutorials/docker"}},u={},d=[{value:"Creating a Certificate",id:"creating-a-certificate",level:2},{value:"HTTP challenge",id:"http-challenge",level:3},{value:"DNS challenge",id:"dns-challenge",level:3},{value:"Auto Renewal",id:"auto-renewal",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Obtaining CloudFlare API Key",id:"obtaining-cloudflare-api-key",level:3},{value:"Creating a Certificate",id:"creating-a-certificate-1",level:3},{value:"Auto Renewal",id:"auto-renewal-1",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"creating-ssl-certificates",children:"Creating SSL Certificates"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial briefly covers creating new SSL certificates for your panel and wings."}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsxs)(i.Z,{value:"Method 1: Certbot",label:"Method 1: Certbot",default:!0,children:[(0,r.jsxs)(t.p,{children:["To begin, we will install certbot, a simple script that automatically renews our certificates and allows much\neasier creation of them. The command below is for Ubuntu distributions, but you can always check ",(0,r.jsx)(t.a,{href:"https://certbot.eff.org/",children:"Certbot's official\nsite"})," for installation instructions. We have also included a command below to install certbot's\nNginx/Apache plugin so you won't have to stop your webserver."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo apt update\nsudo apt install -y certbot\n# Run this if you use Nginx\nsudo apt install -y python3-certbot-nginx\n# Run this if you use Apache\nsudo apt install -y python3-certbot-apache\n"})}),(0,r.jsx)(t.h2,{id:"creating-a-certificate",children:"Creating a Certificate"}),(0,r.jsx)(t.p,{children:"After installing the certbot, we need to generate a certificate. There are a couple of ways to do that, but the easiest\nis to use the web server-specific certbot plugin you just installed. For Wings-only machines that don't need a web server, use the standalone or DNS method of the certbot as you don't need a web server for it."}),(0,r.jsxs)(t.p,{children:["Then, in the command below, you should replace ",(0,r.jsx)(t.code,{children:"example.com"})," with the domain you would like to generate a certificate\nfor.  When you have multiple domains you would like certificates for, simply add more ",(0,r.jsx)(t.code,{children:"-d anotherdomain.com"})," flags to the\ncommand. You can also look into generating a wildcard certificate but that is not covered in this tutorial."]}),(0,r.jsxs)(t.p,{children:["When you are using certbot's Nginx/Apache plugin, you won't need to restart your webserver to have the certificate\napplied assuming that you've already configured the webservers to use SSL as instructed in the ",(0,r.jsx)(t.a,{href:"https://pterodactyl.io/panel/1.0/webserver_configuration.html",children:"web server configuration step"}),"."]}),(0,r.jsx)(t.h3,{id:"http-challenge",children:"HTTP challenge"}),(0,r.jsx)(t.p,{children:"HTTP challenge requires you to expose port 80 for the challenge verification."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Nginx\ncertbot certonly --nginx -d example.com\n# Apache\ncertbot certonly --apache -d example.com\n# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.\ncertbot certonly --standalone -d example.com\n"})}),(0,r.jsx)(t.h3,{id:"dns-challenge",children:"DNS challenge"}),(0,r.jsx)(t.p,{children:"DNS challenge requires you to create a new TXT DNS record to verify domain ownership, instead of having to expose port 80. The instructions are displayed when you run the certbot command below."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot -d example.com --manual --preferred-challenges dns certonly\n"})}),(0,r.jsx)(t.h3,{id:"auto-renewal",children:"Auto Renewal"}),(0,r.jsxs)(t.p,{children:["You'll also probably want to configure the automatic renewal of certificates to prevent unexpected certificate expirations.\nYou can open crontab with ",(0,r.jsx)(t.code,{children:"sudo crontab -e"})," and add the line from below to the bottom of it for attempting renewal every day at 23 (11 PM)."]}),(0,r.jsxs)(t.p,{children:["Deploy hook would restart the Nginx service to apply a new certificate when it's renewed successfully. Change ",(0,r.jsx)(t.code,{children:"nginx"})," in the restart command to suit your own needs, such as to ",(0,r.jsx)(t.code,{children:"apache"})," or ",(0,r.jsx)(t.code,{children:"wings"}),"."]}),(0,r.jsxs)(t.p,{children:["For advanced users, we suggest installing and using ",(0,r.jsx)(t.a,{href:"https://acme.sh",children:"acme.sh"}),"\nwhich provides more options, and is much more powerful than certbot."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ini",children:'0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"\n'})}),(0,r.jsx)(t.h3,{id:"troubleshooting",children:"Troubleshooting"}),(0,r.jsxs)(t.p,{children:["If you get an ",(0,r.jsx)(t.code,{children:"Insecure Connection"})," or SSL/TLS related error when trying to access your panel or wings, the certificate has likely expired.\nThis can be easily fixed by renewing the SSL certificate, although using the command ",(0,r.jsx)(t.code,{children:"certbot renew"})," might not do the job if port 80 is in use, as it'll return errors like: ",(0,r.jsx)(t.code,{children:"Error: Attempting to renew cert (domain) from /etc/letsencrypt/renew/domain.conf produced an unexpected error"}),"."]}),(0,r.jsxs)(t.p,{children:["This will happen especially if you're running Nginx instead of Apache. The solution for this is to use Nginx or Apache plugins with ",(0,r.jsx)(t.code,{children:"--nginx"})," and ",(0,r.jsx)(t.code,{children:"--apache"}),". Alternatively, you can stop Nginx, then renew the certificate, finally restart Nginx. Replace ",(0,r.jsx)(t.code,{children:"nginx"})," with your own web server or with ",(0,r.jsx)(t.code,{children:"wings"})," should you be renewing the certificate for Wings."]}),(0,r.jsx)(t.p,{children:"Stop Nginx:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"systemctl stop nginx\n"})}),(0,r.jsx)(t.p,{children:"Renew the certificate:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot renew\n"})}),(0,r.jsx)(t.p,{children:"Once the process has complete, you can restart the Nginx service:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"systemctl start nginx\n"})}),(0,r.jsx)(t.p,{children:"You may also need to restart Wings as not every service is able to automatically apply an updated certificate:"}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"systemctl restart wings\n"})})]}),(0,r.jsxs)(i.Z,{value:"Method 2: acme.sh",label:"Method 2: acme.sh",children:[(0,r.jsxs)(t.p,{children:["This is for advanced users, whose server systems do not have access to port 80. The command below is for Ubuntu distributions and CloudFlare API (you may google for other APIs for other DNS providers), but you can always check ",(0,r.jsx)(t.a,{href:"https://github.com/Neilpang/acme.sh",children:"acme.sh's official site"})," for installation instructions."]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl https://get.acme.sh | sh\n"})}),(0,r.jsx)(t.h3,{id:"obtaining-cloudflare-api-key",children:"Obtaining CloudFlare API Key"}),(0,r.jsx)(t.p,{children:'After installing acme.sh, we need to fetch a CloudFlare API key. On Cloudfare\'s website, select your domain, then on the right side, copy your "Zone ID" and "Account ID" then click on "Get your API token", click on "Create Token" > select the template "Edit zone DNS" > select the scope of "Zone Ressources" and then click on "Continue to summary", copy your token.'}),(0,r.jsx)(t.h3,{id:"creating-a-certificate-1",children:"Creating a Certificate"}),(0,r.jsx)(t.p,{children:"Since the configuration file is based on Certbot, we need to create the folder manually."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo mkdir /etc/letsencrypt/live/example.com\n"})}),(0,r.jsx)(t.p,{children:"After installing acme.sh and obtaining CloudFlare API key, we need to then generate a certificate. First input the CloudFlare API credentials."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'export CF_Token="Your_CloudFlare_API_Key"\nexport CF_Account_ID="Your_CloudFlare_Account_ID"\nexport CF_Zone_ID="Your_CloudFlare_Zone_ID"\n\n'})}),(0,r.jsx)(t.p,{children:"Then create the certificate."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'acme.sh --issue --dns dns_cf -d "example.com" --server letsencrypt \\\n--key-file /etc/letsencrypt/live/example.com/privkey.pem \\\n--fullchain-file /etc/letsencrypt/live/example.com/fullchain.pem\n'})}),(0,r.jsx)(t.h3,{id:"auto-renewal-1",children:"Auto Renewal"}),(0,r.jsx)(t.p,{children:"After running the script for the first time, it will be added to the crontab automatically. You may edit the auto renewal interval by editing the crontab."}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"sudo crontab -e\n"})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),a=n(512),o=n(2466),i=n(6550),s=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(y,{...e,...t}),(0,x.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var r=n(7294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);