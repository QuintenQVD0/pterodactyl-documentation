"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[215],{4055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(5893),r=t(1151);const i={},a="Getting Started",o={id:"documentation/panel/getting_started",title:"Getting Started",description:"Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order to run and use this panel.",source:"@site/docs/documentation/panel/getting_started.md",sourceDirName:"documentation/panel",slug:"/documentation/panel/getting_started",permalink:"/pterodactyl-documentation/docs/documentation/panel/getting_started",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/panel/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Community Standards",permalink:"/pterodactyl-documentation/docs/documentation/project/community"},next:{title:"Webserver Configuration",permalink:"/pterodactyl-documentation/docs/documentation/panel/webserver_configuration"}},d={},l=[{value:"Picking a Server OS",id:"picking-a-server-os",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Example Dependency Installation",id:"example-dependency-installation",level:3},{value:"Installing Composer",id:"installing-composer",level:3},{value:"Download Files",id:"download-files",level:2},{value:"Installation",id:"installation",level:2},{value:"Environment Configuration",id:"environment-configuration",level:3},{value:"Database Setup",id:"database-setup",level:3},{value:"Add The First User",id:"add-the-first-user",level:3},{value:"Set Permissions",id:"set-permissions",level:3},{value:"Queue Listeners",id:"queue-listeners",level:2},{value:"Crontab Configuration",id:"crontab-configuration",level:3},{value:"Create Queue Worker",id:"create-queue-worker",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"Next Step: Webserver Configuration",id:"next-step-webserver-configuration",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:"Pterodactyl Panel is designed to run on your own web server. You will need to have root access to your server in order to run and use this panel."}),"\n",(0,s.jsxs)(n.p,{children:["You are expected to understand how to read documentation to use this Panel. We have spent many hours detailing how to install or upgrade our\nsoftware; take some time and read rather than copy and pasting and then complaining when things do not work. This panel does\nnot exist as a drag-and-drop service to run your servers. It is a highly complex system requiring multiple dependencies and\nadministrators willing to spend some time learning how to use it. ",(0,s.jsx)(n.strong,{children:"If you expect to be able to install this with no understanding\nof basic linux system administration you should stop and turn around now."})]}),"\n",(0,s.jsx)(n.admonition,{title:"Looking for something simple to setup?",type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://wisp.gg",children:"WISP"})," is a Pterodactyl powered SaaS suitable for enterprise and personal use. Offering all the features without the setup hassle, and fully compatible with Pterodactyl eggs. Comparable to MultiCraft or TCAdmin while offering new and unique features. Click here to ",(0,s.jsx)(n.a,{href:"https://wisp.gg/features",children:"learn more"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"picking-a-server-os",children:"Picking a Server OS"}),"\n",(0,s.jsx)(n.p,{children:"Pterodactyl runs on a wide range of operating systems, so pick whichever you are most comfortable using."}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Pterodactyl does not support most OpenVZ systems due to incompatibilities with Docker. If you are planning on running\nthis software on an OpenVZ based system you will \u2014 most likely \u2014 not be successful."})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operating System"}),(0,s.jsx)(n.th,{children:"Version"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Supported"}),(0,s.jsx)(n.th,{children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Ubuntu"})}),(0,s.jsx)(n.td,{children:"20.04"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"Documentation written assuming Ubuntu 20.04 as the base OS."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"22.04"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"MariaDB can be installed without the repo setup script."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CentOS"})}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"Extra repos are required."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{children:"Note that CentOS 8 is EOL. Use Rocky or Alma Linux."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Debian"})}),(0,s.jsx)(n.td,{children:"11"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"12"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["PHP ",(0,s.jsx)(n.code,{children:"8.1"})," (recommended) with the following extensions: ",(0,s.jsx)(n.code,{children:"cli"}),", ",(0,s.jsx)(n.code,{children:"openssl"}),", ",(0,s.jsx)(n.code,{children:"gd"}),", ",(0,s.jsx)(n.code,{children:"mysql"}),", ",(0,s.jsx)(n.code,{children:"PDO"}),", ",(0,s.jsx)(n.code,{children:"mbstring"}),", ",(0,s.jsx)(n.code,{children:"tokenizer"}),", ",(0,s.jsx)(n.code,{children:"bcmath"}),", ",(0,s.jsx)(n.code,{children:"xml"})," or ",(0,s.jsx)(n.code,{children:"dom"}),", ",(0,s.jsx)(n.code,{children:"curl"}),", ",(0,s.jsx)(n.code,{children:"zip"}),", and ",(0,s.jsx)(n.code,{children:"fpm"})," if you are planning to use NGINX."]}),"\n",(0,s.jsxs)(n.li,{children:["MySQL ",(0,s.jsx)(n.code,{children:"5.7.22"})," and higher (MySQL ",(0,s.jsx)(n.code,{children:"8"})," recommended) ",(0,s.jsx)(n.strong,{children:"or"})," MariaDB ",(0,s.jsx)(n.code,{children:"10.2"})," and higher."]}),"\n",(0,s.jsxs)(n.li,{children:["Redis (",(0,s.jsx)(n.code,{children:"redis-server"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"A webserver (Apache, NGINX, Caddy, etc.)"}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"curl"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"tar"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"unzip"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"git"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"composer"})," v2"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-dependency-installation",children:"Example Dependency Installation"}),"\n",(0,s.jsx)(n.p,{children:"The commands below are simply an example of how you might install these dependencies. Please consult with your\noperating system's package manager to determine the correct packages to install."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Add "add-apt-repository" command\napt -y install software-properties-common curl apt-transport-https ca-certificates gnupg\n\n# Add additional repositories for PHP, Redis, and MariaDB\nLC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php\n\n# Add Redis official APT repository\ncurl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg\necho "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list\n\n# MariaDB repo setup script can be skipped on Ubuntu 22.04\ncurl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash\n\n# Update repositories list\napt update\n\n# Install Dependencies\napt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server\n'})}),"\n",(0,s.jsx)(n.h3,{id:"installing-composer",children:"Installing Composer"}),"\n",(0,s.jsx)(n.p,{children:"Composer is a dependency manager for PHP that allows us to ship everything you'll need code wise to operate the Panel. You'll\nneed composer installed before continuing in this process."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer\n"})}),"\n",(0,s.jsx)(n.h2,{id:"download-files",children:"Download Files"}),"\n",(0,s.jsx)(n.p,{children:"The first step in this process is to create the folder where the panel will live and then move ourselves into that\nnewly created folder. Below is an example of how to perform this operation."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir -p /var/www/pterodactyl\ncd /var/www/pterodactyl\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have created a new directory for the Panel and moved into it you'll need to download the Panel files. This\nis as simple as using ",(0,s.jsx)(n.code,{children:"curl"})," to download our pre-packaged content. Once it is downloaded you'll need to unpack the archive\nand then set the correct permissions on the ",(0,s.jsx)(n.code,{children:"storage/"})," and ",(0,s.jsx)(n.code,{children:"bootstrap/cache/"})," directories. These directories\nallow us to store files as well as keep a speedy cache available to reduce load times."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz\ntar -xzvf panel.tar.gz\nchmod -R 755 storage/* bootstrap/cache/\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Now that all of the files have been downloaded we need to configure some core aspects of the Panel."}),"\n",(0,s.jsxs)(n.admonition,{title:"Database Configuration",type:"tip",children:[(0,s.jsxs)(n.p,{children:["You will need a database setup and a user with the correct permissions created for that database before\ncontinuing any further. See below to create a user and database for your Pterodactyl panel quickly. To find more detailed information\nplease have a look at ",(0,s.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/tutorials/mysql_setup",children:"Setting up MySQL"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"# If using MariaDB (v11.0.0+)\nmariadb -u root -p\n\n# If using MySQL\nmysql -u root -p\n"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"# Remember to change 'yourPassword' below to be a unique password\nCREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';\nCREATE DATABASE panel;\nGRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;\nexit\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"First we will copy over our default environment settings file, install core dependencies, and then generate a\nnew application encryption key."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\ncomposer install --no-dev --optimize-autoloader\n\n# Only run the command below if you are installing this Panel for\n# the first time and do not have any Pterodactyl Panel data in the database.\nphp artisan key:generate --force\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Back up your encryption key (APP_KEY in the ",(0,s.jsx)(n.code,{children:".env"})," file). It is used as an encryption key for all data that needs to be stored securely (e.g. api keys).\nStore it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups."]})}),"\n",(0,s.jsx)(n.h3,{id:"environment-configuration",children:"Environment Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Pterodactyl's core environment is easily configured using a few different CLI commands built into the app. This step\nwill cover setting up things such as sessions, caching, database credentials, and email sending."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'php artisan p:environment:setup\nphp artisan p:environment:database\n\n# To use PHP\'s internal mail sending (not recommended), select "mail". To use a\n# custom SMTP server, select "smtp".\nphp artisan p:environment:mail\n'})}),"\n",(0,s.jsx)(n.h3,{id:"database-setup",children:"Database Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Now we need to setup all of the base data for the Panel in the database you created earlier. ",(0,s.jsxs)(n.strong,{children:["The command below\nmay take some time to run depending on your machine. Please ",(0,s.jsx)(n.em,{children:"DO NOT"})," exit the process until it is completed!"]})," This\ncommand will setup the database tables and then add all of the Nests & Eggs that power Pterodactyl."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"php artisan migrate --seed --force\n"})}),"\n",(0,s.jsx)(n.h3,{id:"add-the-first-user",children:"Add The First User"}),"\n",(0,s.jsxs)(n.p,{children:["You'll then need to create an administrative user so that you can log into the panel. To do so, run the command below.\nAt this time passwords ",(0,s.jsx)(n.strong,{children:"must"})," meet the following requirements: 8 characters, mixed case, at least one number."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"php artisan p:user:make\n"})}),"\n",(0,s.jsx)(n.h3,{id:"set-permissions",children:"Set Permissions"}),"\n",(0,s.jsx)(n.p,{children:"The last step in the installation process is to set the correct permissions on the Panel files so that the webserver can\nuse them correctly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# If using NGINX or Apache (not on CentOS):\nchown -R www-data:www-data /var/www/pterodactyl/*\n\n# If using NGINX on CentOS:\nchown -R nginx:nginx /var/www/pterodactyl/*\n\n# If using Apache on CentOS:\nchown -R apache:apache /var/www/pterodactyl/*\n"})}),"\n",(0,s.jsx)(n.h2,{id:"queue-listeners",children:"Queue Listeners"}),"\n",(0,s.jsx)(n.p,{children:"We make use of queues to make the application faster and handle sending emails and other actions in the background.\nYou will need to setup the queue worker for these actions to be processed."}),"\n",(0,s.jsx)(n.h3,{id:"crontab-configuration",children:"Crontab Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The first thing we need to do is create a new cronjob that runs every minute to process specific Pterodactyl tasks, such\nas session cleanup and sending scheduled tasks to daemons. You'll want to open your crontab using ",(0,s.jsx)(n.code,{children:"sudo crontab -e"})," and\nthen paste the line below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1\n"})}),"\n",(0,s.jsx)(n.h3,{id:"create-queue-worker",children:"Create Queue Worker"}),"\n",(0,s.jsx)(n.p,{children:"Next you need to create a new systemd worker to keep our queue process running in the background. This queue is responsible\nfor sending emails and handling many other background tasks for Pterodactyl."}),"\n",(0,s.jsxs)(n.p,{children:["Create a file called ",(0,s.jsx)(n.code,{children:"pteroq.service"})," in ",(0,s.jsx)(n.code,{children:"/etc/systemd/system"})," with the contents below."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",metastring:'title="/etc/systemd/system/pteroq.service"',children:"# Pterodactyl Queue Worker File\n# ----------------------------------\n\n[Unit]\nDescription=Pterodactyl Queue Worker\nAfter=redis-server.service\n\n[Service]\n# On some systems the user and group might be different.\n# Some systems use `apache` or `nginx` as the user and group.\nUser=www-data\nGroup=www-data\nRestart=always\nExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3\nStartLimitInterval=180\nStartLimitBurst=30\nRestartSec=5s\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Redis on CentOS",type:"tip",children:(0,s.jsxs)(n.p,{children:["If you are using CentOS, you will need to replace ",(0,s.jsx)(n.code,{children:"redis-server.service"})," with ",(0,s.jsx)(n.code,{children:"redis.service"})," at the ",(0,s.jsx)(n.code,{children:"After="})," line in order to ensure ",(0,s.jsx)(n.code,{children:"redis"})," starts before the queue worker."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you are not using ",(0,s.jsx)(n.code,{children:"redis"})," for anything you should remove the ",(0,s.jsx)(n.code,{children:"After="})," line, otherwise you will encounter errors\nwhen the service starts."]})}),"\n",(0,s.jsx)(n.p,{children:"If you are using redis for your system, you will want to make sure to enable that it will start on boot. You can do that by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable --now redis-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, enable the service and set it to boot on machine start."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable --now pteroq.service\n"})}),"\n",(0,s.jsx)(n.h3,{id:"telemetry",children:"Telemetry"}),"\n",(0,s.jsxs)(n.p,{children:["Since 1.11, Pterodactyl will collect anonymous telemetry to help us better understand how the\nsoftware is being used. To learn more about this feature and to opt-out, please see our ",(0,s.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/panel/additional_configuration#telemetry",children:"Telemetry"}),"\ndocumentation. Make sure to continue with the rest of the installation process."]}),"\n",(0,s.jsxs)(n.h4,{id:"next-step-webserver-configuration",children:["Next Step: ",(0,s.jsx)(n.a,{href:"/pterodactyl-documentation/docs/documentation/panel/webserver_configuration",children:"Webserver Configuration"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);