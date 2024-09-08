"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[8071],{722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=t(4848),r=t(8453),i=t(1470),o=t(9365);const s={slug:"/panel/webserver",hide_table_of_contents:!0},l="Webserver Configuration",c={id:"documentation/panel/webserver_configuration",title:"Webserver Configuration",description:"When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the Creating SSL Certificates documentation page to learn how to create these certificates before continuing.",source:"@site/docs/documentation/panel/webserver_configuration.mdx",sourceDirName:"documentation/panel",slug:"/panel/webserver",permalink:"/pterodactyl-documentation/docs/panel/webserver",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/panel/webserver_configuration.mdx",tags:[],version:"current",frontMatter:{slug:"/panel/webserver",hide_table_of_contents:!0},sidebar:"DocsSidebar",previous:{title:"Getting Started",permalink:"/pterodactyl-documentation/docs/panel/install"},next:{title:"Additional Configuration",permalink:"/pterodactyl-documentation/docs/panel/configuration"}},d={},u=[{value:"Enabling Configuration",id:"enabling-configuration",level:3},{value:"Enabling Configuration",id:"enabling-configuration-1",level:3},{value:"Enabling Configuration",id:"enabling-configuration-2",level:3},{value:"Enabling Configuration",id:"enabling-configuration-3",level:3},{value:"Next Step: Wings Installation",id:"next-step-wings-installation",level:4}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"webserver-configuration",children:"Webserver Configuration"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["When using the SSL configuration you MUST create SSL certificates, otherwise your webserver will fail to start. See the ",(0,a.jsx)(n.a,{href:"/pterodactyl-documentation/docs/tutorials/ssl",children:"Creating SSL Certificates"})," documentation page to learn how to create these certificates before continuing."]})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(o.A,{value:"Nginx With SSL",label:"Nginx With SSL",default:!0,children:[(0,a.jsx)(n.p,{children:"First, remove the default NGINX configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm /etc/nginx/sites-enabled/default\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called ",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/nginx/sites-available/"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/nginx/conf.d/"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nginx",children:'server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration - Replace the example <domain> with your domain\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration",children:"Enabling Configuration"}),(0,a.jsx)(n.p,{children:"The final step is to enable your NGINX configuration and restart it."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n# You need to restart nginx regardless of OS.\nsudo systemctl restart nginx\n"})})]}),(0,a.jsxs)(o.A,{value:"Nginx Without SSL",label:"Nginx Without SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default NGINX configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm /etc/nginx/sites-enabled/default\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/nginx/sites-available/"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/nginx/conf.d/"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-nginx",children:'server {\n    # Replace the example <domain> with your domain name or IP address\n    listen 80;\n    server_name <domain>;\n\n\n    root /var/www/pterodactyl/public;\n    index index.html index.htm index.php;\n    charset utf-8;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location = /favicon.ico { access_log off; log_not_found off; }\n    location = /robots.txt  { access_log off; log_not_found off; }\n\n    access_log off;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-1",children:"Enabling Configuration"}),(0,a.jsx)(n.p,{children:"The final step is to enable your NGINX configuration and restart it."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to symlink this file if you are using CentOS.\nsudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf\n\n# You need to restart nginx regardless of OS.\nsudo systemctl restart nginx\n"})})]}),(0,a.jsxs)(o.A,{value:"Apache With SSL",label:"Apache With SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default Apache configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a2dissite 000-default.conf\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/apache2/sites-available"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/httpd/conf.d/"}),"."]}),(0,a.jsxs)(n.p,{children:["Note: When using Apache, make sure you have the ",(0,a.jsx)(n.code,{children:"libapache2-mod-php"})," package installed or else PHP will not display on your webserver."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-apache",children:'<VirtualHost *:80>\n  ServerName <domain>\n  \n  RewriteEngine On\n  RewriteCond %{HTTPS} !=on\n  RewriteRule ^/?(.*) https://%{SERVER_NAME}/$1 [R,L] \n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n\n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n\n  <Directory "/var/www/pterodactyl/public">\n    Require all granted\n    AllowOverride all\n  </Directory>\n\n  SSLEngine on\n  SSLCertificateFile /etc/letsencrypt/live/<domain>/fullchain.pem\n  SSLCertificateKeyFile /etc/letsencrypt/live/<domain>/privkey.pem\n</VirtualHost> \n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-2",children:"Enabling Configuration"}),(0,a.jsxs)(n.p,{children:["Once you've created the file above, simply run the commands below. If you are on CentOS ",(0,a.jsx)(n.em,{children:"you do not need to run the commands\nbelow!"})," You only need to run ",(0,a.jsx)(n.code,{children:"systemctl restart httpd"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to run any of these commands on CentOS\nsudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\nsudo a2enmod rewrite\nsudo a2enmod ssl\nsudo systemctl restart apache2\n"})})]}),(0,a.jsxs)(o.A,{value:"Apache Without SSL",label:"Apache Without SSL",children:[(0,a.jsx)(n.p,{children:"First, remove the default Apache configuration."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a2dissite 000-default.conf\n"})}),(0,a.jsxs)(n.p,{children:["Now, you should paste the contents of the file below, replacing ",(0,a.jsx)(n.code,{children:"<domain>"})," with your domain name being used in a file called\n",(0,a.jsx)(n.code,{children:"pterodactyl.conf"})," and place the file in ",(0,a.jsx)(n.code,{children:"/etc/apache2/sites-available"}),", or \u2014 if on CentOS, ",(0,a.jsx)(n.code,{children:"/etc/httpd/conf.d/"}),"."]}),(0,a.jsxs)(n.p,{children:["Note: When using Apache, make sure you have the ",(0,a.jsx)(n.code,{children:"libapache2-mod-php"})," package installed or else PHP will not display on your webserver."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-apache",children:'<VirtualHost *:80>\n  ServerName <domain>\n  DocumentRoot "/var/www/pterodactyl/public"\n  \n  AllowEncodedSlashes On\n  \n  php_value upload_max_filesize 100M\n  php_value post_max_size 100M\n  \n  <Directory "/var/www/pterodactyl/public">\n    AllowOverride all\n    Require all granted\n  </Directory>\n</VirtualHost>\n'})}),(0,a.jsx)(n.h3,{id:"enabling-configuration-3",children:"Enabling Configuration"}),(0,a.jsxs)(n.p,{children:["Once you've created the file above, simply run the commands below. If you are on CentOS ",(0,a.jsx)(n.em,{children:"you do not need to run the commands\nbelow!"})," You only need to run ",(0,a.jsx)(n.code,{children:"systemctl restart httpd"}),"."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You do not need to run any of these commands on CentOS\nsudo ln -s /etc/apache2/sites-available/pterodactyl.conf /etc/apache2/sites-enabled/pterodactyl.conf\nsudo a2enmod rewrite\nsudo systemctl restart apache2\n"})})]})]}),"\n",(0,a.jsxs)(n.h4,{id:"next-step-wings-installation",children:["Next Step: ",(0,a.jsx)(n.a,{href:"/pterodactyl-documentation/docs/wings/install",children:"Wings Installation"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(8215);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>S});var a=t(6540),r=t(8215),i=t(3104),o=t(6347),s=t(205),l=t(7485),c=t(1682),d=t(9466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,u]=f({queryString:t,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),b=(()=>{const e=c??g;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function _(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,x.jsx)(_,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function S(e){const n=(0,m.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o});var a=t(6540);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);