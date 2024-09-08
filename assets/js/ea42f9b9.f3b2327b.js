"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[8119],{807:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>t,toc:()=>h});var s=d(4848),i=d(8453);const n={slug:"/tutorials/docker"},c="Dockerized versions",t={id:"documentation/tutorials/dockerized-versions",title:"Dockerized versions",description:"To use the dockerized versions of Pterodactyl you need to install Docker!",source:"@site/docs/documentation/tutorials/dockerized-versions.md",sourceDirName:"documentation/tutorials",slug:"/tutorials/docker",permalink:"/pterodactyl-documentation/docs/tutorials/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/tutorials/dockerized-versions.md",tags:[],version:"current",frontMatter:{slug:"/tutorials/docker"},sidebar:"DocsSidebar",previous:{title:"Creating SSL Certificates",permalink:"/pterodactyl-documentation/docs/tutorials/ssl"},next:{title:"Guides",permalink:"/pterodactyl-documentation/docs/guides"}},l={},h=[{value:"Panel Image",id:"panel-image",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup",id:"setup",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Cache drivers",id:"cache-drivers",level:4},{value:"Session drivers",id:"session-drivers",level:4},{value:"Queue drivers",id:"queue-drivers",level:4},{value:"Mail drivers",id:"mail-drivers",level:4},{value:"Wings Image",id:"wings-image",level:2},{value:"Requirements",id:"requirements-1",level:3},{value:"Setup",id:"setup-1",level:3},{value:"Environment Variables",id:"environment-variables-1",level:3}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"dockerized-versions",children:"Dockerized versions"}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsxs)(r.p,{children:["To use the dockerized versions of Pterodactyl you need to install Docker!\r\nFor a quick start you can run ",(0,s.jsx)(r.code,{children:"curl -sSL https://get.docker.com/ | CHANNEL=stable bash"}),". For more information refer to the official ",(0,s.jsx)(r.a,{href:"https://docs.docker.com/engine/install/",children:"Docker documentation"}),"."]})}),"\n",(0,s.jsx)(r.h2,{id:"panel-image",children:"Panel Image"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"ghcr.io/pterodactyl/panel"})," is a ready to use docker image for the panel."]}),"\n",(0,s.jsx)(r.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsxs)(r.p,{children:["The docker image requires some additional software to function. The software can either be provided in other containers (see the ",(0,s.jsx)(r.a,{href:"https://github.com/pterodactyl/panel/blob/1.0-develop/docker-compose.example.yml",children:"docker-compose.yml"})," as an example) or as existing instances."]}),"\n",(0,s.jsxs)(r.p,{children:["A mysql database is required. We recommend the stock ",(0,s.jsx)(r.a,{href:"https://hub.docker.com/_/mariadb/",children:"MariaDB Image"})," image if you prefer to run it in a docker container. As a non-containerized option we recommend mariadb."]}),"\n",(0,s.jsxs)(r.p,{children:["A caching software is required as well. We recommend the stock ",(0,s.jsx)(r.a,{href:"https://hub.docker.com/_/redis/",children:"Redis Image"})," image. You can choose any of the ",(0,s.jsx)(r.a,{href:"#cache-drivers",children:"supported options"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["You can provide additional settings using a custom ",(0,s.jsx)(r.code,{children:".env"})," file or by setting the appropriate environment variables in the docker-compose file.\r\nIf using the docker-compose file the location of a custom ",(0,s.jsx)(r.code,{children:".env"})," file would be ",(0,s.jsx)(r.code,{children:"/srv/pterodactyl/var/.env"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(r.p,{children:["Start the docker container and the required dependencies (either provide existing ones or start containers as well, see the ",(0,s.jsx)(r.a,{href:"https://github.com/pterodactyl/panel/blob/1.0-develop/docker-compose.example.yml",children:"docker-compose.yml"})," file as an example)."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# If you are using docker compose\r\ncurl -L -o docker-compose.yml https://raw.githubusercontent.com/pterodactyl/panel/1.0-develop/docker-compose.example.yml\r\ndocker-compose up -d\r\n\r\n# If you are running the docker container without docker compose\r\ndocker create -it --name panel ghcr.io/pterodactyl/panel\n"})}),"\n",(0,s.jsx)(r.p,{children:"After the startup is complete you'll need to create a panel user."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# If you are using docker compose\r\ndocker-compose exec panel php artisan p:user:make\r\n\r\n# If you are running the docker container without docker compose\r\ndocker exec -it panel php artisan p:user:make\n"})}),"\n",(0,s.jsx)(r.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(r.p,{children:["There are multiple environment variables to configure the panel when not providing your own ",(0,s.jsx)(r.code,{children:".env"})," file, see the following table for details on each available option."]}),"\n",(0,s.jsxs)(r.admonition,{type:"warning",children:[(0,s.jsx)(r.mdxAdmonitionTitle,{}),(0,s.jsxs)(r.p,{children:["If your ",(0,s.jsx)(r.code,{children:"APP_URL"})," starts with ",(0,s.jsx)(r.code,{children:"https://"})," you need to provide an ",(0,s.jsx)(r.code,{children:"LE_EMAIL"})," as well so certificates can be generated."]})]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Variable"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"APP_URL"})}),(0,s.jsx)(r.td,{children:"The URL the panel will be reachable with (including protocol)"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"APP_TIMEZONE"})}),(0,s.jsxs)(r.td,{children:["The ",(0,s.jsx)(r.a,{href:"http://php.net/manual/en/timezones.php",children:"timezone"})," to use for the panel"]}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"LE_EMAIL"})}),(0,s.jsx)(r.td,{children:"The email used for letsencrypt certificate generation"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DB_HOST"})}),(0,s.jsx)(r.td,{children:"The host of the mysql instance"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DB_PORT"})}),(0,s.jsx)(r.td,{children:"The port of the mysql instance"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DB_DATABASE"})}),(0,s.jsx)(r.td,{children:"The name of the mysql database"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DB_USERNAME"})}),(0,s.jsx)(r.td,{children:"The mysql user"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"DB_PASSWORD"})}),(0,s.jsx)(r.td,{children:"The mysql password for the specified user"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"CACHE_DRIVER"})}),(0,s.jsxs)(r.td,{children:["The cache driver        (see ",(0,s.jsx)(r.a,{href:"#cache-drivers",children:"Cache drivers"})," for detais)"]}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"SESSION_DRIVER"})}),(0,s.jsxs)(r.td,{children:["The session driver      (see ",(0,s.jsx)(r.a,{href:"#session-drivers",children:"Session drivers"})," for detais)"]}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"QUEUE_DRIVER"})}),(0,s.jsxs)(r.td,{children:["The queue driver        (see ",(0,s.jsx)(r.a,{href:"#queue-drivers",children:"Queue drivers"})," for detais)"]}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"REDIS_HOST"})}),(0,s.jsx)(r.td,{children:"The hostname or IP address of the redis database"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"REDIS_PORT"})}),(0,s.jsx)(r.td,{children:"The port the redis database is using on the host"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"REDIS_PASSWORD"})}),(0,s.jsx)(r.td,{children:"The password used to secure the redis database"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MEMCACHED_HOST"})}),(0,s.jsx)(r.td,{children:"The hostname or IP address of memcached"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MEMCACHED_PORT"})}),(0,s.jsx)(r.td,{children:"The port of memcached"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MEMCACHED_USERNAME"})}),(0,s.jsx)(r.td,{children:"The memcached user"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MEMCACHED_PASSWORD"})}),(0,s.jsx)(r.td,{children:"The memcached password for the specified user"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_DRIVER"})}),(0,s.jsxs)(r.td,{children:["The email driver (see ",(0,s.jsx)(r.a,{href:"#mail-drivers",children:"Mail drivers"})," for details)"]}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_FROM"})}),(0,s.jsx)(r.td,{children:"The email that should be used as the sender email"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_HOST"})}),(0,s.jsx)(r.td,{children:"The host of your mail driver instance"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_PORT"})}),(0,s.jsx)(r.td,{children:"The port of your mail driver instance"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_USERNAME"})}),(0,s.jsx)(r.td,{children:"The username for your mail driver"}),(0,s.jsx)(r.td,{children:"maybe"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_PASSWORD"})}),(0,s.jsx)(r.td,{children:"The password for your mail driver"}),(0,s.jsx)(r.td,{children:"maybe"})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"cache-drivers",children:"Cache drivers"}),"\n",(0,s.jsxs)(r.p,{children:["You can choose between different cache drivers depending on what you prefer.\r\nWe recommend ",(0,s.jsx)(r.code,{children:"redis"})," when using docker as it can be started in a container easily."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Driver"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required variables"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"redis"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://redis.io/",children:"Redis"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"REDIS_HOST"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PORT"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"database"}),(0,s.jsx)(r.td,{children:"MySQL database"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"DB_HOST"}),", ",(0,s.jsx)(r.code,{children:"DB_PORT"}),", ",(0,s.jsx)(r.code,{children:"DB_DATABASE"}),", ",(0,s.jsx)(r.code,{children:"DB_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"DB_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"memcached"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://memcached.org/",children:"Memcached"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"MEMCACHED_HOST"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_PORT"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"file"}),(0,s.jsx)(r.td,{children:"Filesystem"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"session-drivers",children:"Session drivers"}),"\n",(0,s.jsxs)(r.p,{children:["You can choose between different session drivers depending on what you prefer.\r\nWe recommend ",(0,s.jsx)(r.code,{children:"redis"})," when using docker as it can be started in a container easily."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Driver"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required variables"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"redis"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://redis.io/",children:"Redis"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"REDIS_HOST"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PORT"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"database"}),(0,s.jsx)(r.td,{children:"MySQL database"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"DB_HOST"}),", ",(0,s.jsx)(r.code,{children:"DB_PORT"}),", ",(0,s.jsx)(r.code,{children:"DB_DATABASE"}),", ",(0,s.jsx)(r.code,{children:"DB_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"DB_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"memcached"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://memcached.org/",children:"Memcached"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"MEMCACHED_HOST"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_PORT"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"MEMCACHED_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"file"}),(0,s.jsx)(r.td,{children:"Filesystem"}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"cookie"}),(0,s.jsx)(r.td,{children:"Cookies"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"queue-drivers",children:"Queue drivers"}),"\n",(0,s.jsxs)(r.p,{children:["You can choose between different queue drivers depending on what you prefer.\r\nWe recommend ",(0,s.jsx)(r.code,{children:"redis"})," when using docker as it can be started in a container easily."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Driver"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required variables"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"redis"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://redis.io/",children:"Redis"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"REDIS_HOST"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PORT"}),", ",(0,s.jsx)(r.code,{children:"REDIS_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"database"}),(0,s.jsx)(r.td,{children:"MySQL database"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"DB_HOST"}),", ",(0,s.jsx)(r.code,{children:"DB_PORT"}),", ",(0,s.jsx)(r.code,{children:"DB_DATABASE"}),", ",(0,s.jsx)(r.code,{children:"DB_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"DB_PASSWORD"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"sync"}),(0,s.jsx)(r.td,{children:"Run tasks synchronously"}),(0,s.jsx)(r.td,{})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"mail-drivers",children:"Mail drivers"}),"\n",(0,s.jsxs)(r.p,{children:["You can choose between different mail drivers according to your needs.\r\nEvery driver requires ",(0,s.jsx)(r.code,{children:"MAIL_FROM"})," to be set."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Driver"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required variables"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mandrill"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"http://www.mandrill.com/",children:"Mandrill"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_USERNAME"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"postmark"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://postmarkapp.com/",children:"Postmark"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"MAIL_USERNAME"})})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"mailgun"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"https://www.mailgun.com/",children:"Mailgun"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"MAIL_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"MAIL_HOST"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"smtp"}),(0,s.jsx)(r.td,{children:"Any SMTP server can be configured"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"MAIL_USERNAME"}),", ",(0,s.jsx)(r.code,{children:"MAIL_HOST"}),", ",(0,s.jsx)(r.code,{children:"MAIL_PASSWORD"}),", ",(0,s.jsx)(r.code,{children:"MAIL_PORT"})]})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"wings-image",children:"Wings Image"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"ghcr.io/pterodactyl/wings"})," is a ready to use docker image for wings."]}),"\n",(0,s.jsx)(r.h3,{id:"requirements-1",children:"Requirements"}),"\n",(0,s.jsxs)(r.p,{children:["The docker image doesn't require any additional software to function. See the ",(0,s.jsx)(r.a,{href:"https://github.com/pterodactyl/wings/blob/develop/docker-compose.example.yml",children:"docker-compose.yml"})," as an example."]}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"If your panel uses SSL your wings need to use SSL as well. Make sure you generated and provided the needed certificates in that case."})}),"\n",(0,s.jsx)(r.h3,{id:"setup-1",children:"Setup"}),"\n",(0,s.jsx)(r.p,{children:"Start the docker container."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"# If you are using docker compose\r\ncurl -L -o docker-compose.yml https://raw.githubusercontent.com/pterodactyl/wings/develop/docker-compose.example.yml\r\ndocker-compose up -d\r\n\r\n# If you are running the docker container without docker compose\r\ndocker create -it --name wings ghcr.io/pterodactyl/wings\n"})}),"\n",(0,s.jsxs)(r.p,{children:["After the startup is complete you can follow the ",(0,s.jsx)(r.a,{href:"/pterodactyl-documentation/docs/wings/install#configure",children:"normal wings setup guide"})," to create a new node."]}),"\n",(0,s.jsx)(r.h3,{id:"environment-variables-1",children:"Environment Variables"}),"\n",(0,s.jsx)(r.p,{children:"There are some environment variables to configure wings, see the following table for details on each available option."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Variable"}),(0,s.jsx)(r.th,{children:"Description"}),(0,s.jsx)(r.th,{children:"Required"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"TZ"})}),(0,s.jsx)(r.td,{children:"The timezone to use for wings"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WINGS_UID"})}),(0,s.jsx)(r.td,{children:"The UID of the wings user"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WINGS_GID"})}),(0,s.jsx)(r.td,{children:"The GID of the wings user"}),(0,s.jsx)(r.td,{children:"yes"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"WINGS_USERNAME"})}),(0,s.jsx)(r.td,{children:"The username of the wings user"}),(0,s.jsx)(r.td,{children:"yes"})]})]})]})]})}function a(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,r,d)=>{d.d(r,{R:()=>c});var s=d(6540);const i={},n=s.createContext(i);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}}}]);