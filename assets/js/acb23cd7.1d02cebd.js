"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[7626],{1329:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"documentation/panel/troubleshooting","title":"Troubleshooting","description":"Reading Error Logs","source":"@site/docs/documentation/panel/troubleshooting.md","sourceDirName":"documentation/panel","slug":"/panel/troubleshooting","permalink":"/pterodactyl-documentation/docs/panel/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/panel/troubleshooting.md","tags":[],"version":"current","frontMatter":{"slug":"/panel/troubleshooting"},"sidebar":"DocsSidebar","previous":{"title":"Updating the Panel","permalink":"/pterodactyl-documentation/docs/panel/updating"},"next":{"title":"Legacy Upgrades","permalink":"/pterodactyl-documentation/docs/panel/legacy_upgrade"}}');var s=t(4848),o=t(8453);const i={slug:"/panel/troubleshooting"},a="Troubleshooting",l={},d=[{value:"Reading Error Logs",id:"reading-error-logs",level:2},{value:"Parsing the Error",id:"parsing-the-error",level:3},{value:"Understanding the Error",id:"understanding-the-error",level:3},{value:"Utilizing GREP",id:"utilizing-grep",level:3},{value:"Cannot Connect to Server Errors",id:"cannot-connect-to-server-errors",level:2},{value:"Basic Debugging Steps",id:"basic-debugging-steps",level:3},{value:"More Advanced Debugging Steps",id:"more-advanced-debugging-steps",level:3},{value:"Invalid MAC Exception",id:"invalid-mac-exception",level:2},{value:"SELinux Issues",id:"selinux-issues",level:2},{value:"Redis Permissions Errors",id:"redis-permissions-errors",level:3},{value:"Wings Connection Errors",id:"wings-connection-errors",level:3},{value:"Containers don&#39;t have internet? Probably a DNS issue!",id:"containers-dont-have-internet-probably-a-dns-issue",level:3},{value:"FirewallD issues",id:"firewalld-issues",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"})}),"\n",(0,s.jsx)(n.h2,{id:"reading-error-logs",children:"Reading Error Logs"}),"\n",(0,s.jsx)(n.p,{children:"If you ever encounter an unexpected error with the Panel the first thing you will likely be asked for is the logs.\nTo retrieve these, simply execute the command below which will output the last 100 lines of the Panel's log file."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail -n 100 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log\n"})}),"\n",(0,s.jsx)(n.h3,{id:"parsing-the-error",children:"Parsing the Error"}),"\n",(0,s.jsx)(n.p,{children:"When you run the command above, you'll probably be hit with a huge wall of text that might scare you. Fear not,\nthis is simply a stacktrace leading to the cause of the error, and you can actually ignore almost all of it when\nlooking for the cause of the error. Lets take a look at some example output below, which has been truncated to\nmake this easier to follow with."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"#70 /srv/www/vendor/laravel/framework/src/Illuminate/Foundation/Http/Kernel.php(116): Illuminate\\Foundation\\Http\\Kernel->sendRequestThroughRouter(Object(Illuminate\\Http\\Request))\n#71 /srv/www/public/index.php(53): Illuminate\\Foundation\\Http\\Kernel->handle(Object(Illuminate\\Http\\Request))\n#72 {main}\n[2018-07-19 00:50:24] local.ERROR: ErrorException: file_put_contents(/srv/www/storage/framework/views/c9c05d1357df1ce4ec8fc5df78c16c493b0d4f48.php): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\nStack trace:\n#0 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleError(2, 'file_put_conten...', '/srv/www/vendor...', 122, Array)\n#1 /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php(122): file_put_contents('/srv/www/storag...', '<?php $__env->s...', 0)\n#2 /srv/www/vendor/laravel/framework/src/Illuminate/View/Compilers/BladeCompiler.php(122): Illuminate\\Filesystem\\Filesystem->put('/srv/www/storag...', '<?php $__env->s...')\n#3 /srv/www/vendor/laravel/framework/src/Illuminate/View/Engines/CompilerEngine.php(51): Illuminate\\View\\Compilers\\BladeCompiler->compile('/srv/www/resour...')\n#4 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(142): Illuminate\\View\\Engines\\CompilerEngine->get('/srv/www/resour...', Array)\n#5 /srv/www/vendor/laravel/framework/src/Illuminate/View/View.php(125): Illuminate\\View\\View->getContents()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first thing you'll want to do is follow the chain of numbers ",(0,s.jsx)(n.em,{children:"up"})," until you find ",(0,s.jsx)(n.code,{children:"#0"}),", this will be the function that\ntriggered the exception. Right above line 0 you will see a line that has the date and time in brackets, ",(0,s.jsx)(n.code,{children:"[2018-07-19 00:50:24]"}),"\nabove for example. This line will be the human readable exception that you can use to understand what went wrong."]}),"\n",(0,s.jsx)(n.h3,{id:"understanding-the-error",children:"Understanding the Error"}),"\n",(0,s.jsx)(n.p,{children:"In the example above we can see that the actual error was:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-txt",children:"local.ERROR: ErrorException: file_put_contents(...): failed to open stream: Permission denied in /srv/www/vendor/laravel/framework/src/Illuminate/Filesystem/Filesystem.php:122\n"})}),"\n",(0,s.jsxs)(n.p,{children:["From this error we can determine that there was an error performing a ",(0,s.jsx)(n.a,{href:"http://php.net/manual/en/function.file-put-contents.php",children:"file_put_contents()"})," call, and the error was\nthat we couldn't open the file because permissions were denied. Its okay if you don't understand the error at all, but\nit does help you get faster support if you're able to provide these logs, and at least find the source of the error.\nSometimes the errors are pretty straightforward and will tell you exactly what went wrong, such as a ",(0,s.jsx)(n.code,{children:"ConnectionException"}),"\nbeing thrown when the Panel can't connect to the Daemon."]}),"\n",(0,s.jsx)(n.h3,{id:"utilizing-grep",children:"Utilizing GREP"}),"\n",(0,s.jsx)(n.p,{children:"If you're trying to go through a bunch of errors quickly, you can use the command below which will limit the results returned to only\nbe the actual error lines, without all of the stack traces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'tail -n 1000 /var/www/pterodactyl/storage/logs/laravel-$(date +%F).log | grep "\\[$(date +%Y)"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"cannot-connect-to-server-errors",children:"Cannot Connect to Server Errors"}),"\n",(0,s.jsx)(n.h3,{id:"basic-debugging-steps",children:"Basic Debugging Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Check that Wings is running, and not reporting errors. Use ",(0,s.jsx)(n.code,{children:"systemctl status wings"})," to check the current status of\nthe process."]}),"\n",(0,s.jsxs)(n.li,{children:["Check your browser's console by pressing ",(0,s.jsx)(n.code,{children:"Ctrl + Shift + J"})," (in Chrome) or ",(0,s.jsx)(n.code,{children:"Cmd + Alt + I"})," (in Safari). If there is\na red error in it, chances are that it will narrow down the potential problem."]}),"\n",(0,s.jsxs)(n.li,{children:["Make sure Wings is properly installed and the active configuration matches the configuration shown under\n",(0,s.jsx)(n.code,{children:"Admin -> Node -> Configuration"})," in the Panel."]}),"\n",(0,s.jsxs)(n.li,{children:["Check that the Wings ports are open on your firewall. Wings uses ports ",(0,s.jsx)(n.code,{children:"8080"})," or ",(0,s.jsx)(n.code,{children:"8443"})," for HTTP(s) traffic,\nand ",(0,s.jsx)(n.code,{children:"2022"})," for SFTP traffic."]}),"\n",(0,s.jsx)(n.li,{children:"Ensure you have AdBlock disabled or whitelisted for your Panel and Wings domains."}),"\n",(0,s.jsxs)(n.li,{children:["Check that the Panel can reach Wings using the domain that is configured on the Panel. Run ",(0,s.jsx)(n.code,{children:"curl https://domain.com:8080"})," on the Panel server and ensure that it can successfully connect to Wings."]}),"\n",(0,s.jsx)(n.li,{children:"Ensure that you are using the correct HTTP scheme for your Panel and Wings. If the Panel is running over HTTPS\nWings will also need to be running on HTTPS."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"more-advanced-debugging-steps",children:"More Advanced Debugging Steps"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Stop Wings and run ",(0,s.jsx)(n.code,{children:"wings --debug"})," to see if there are any errors being output. If so, try resolving them manually,\nor reach out on ",(0,s.jsx)(n.a,{href:"https://discord.gg/pterodactyl",children:"Discord"})," for more assistance."]}),"\n",(0,s.jsxs)(n.li,{children:["Check your DNS and ensure that the response you receive is the one you expect using a tool such as ",(0,s.jsx)(n.code,{children:"nslookup"})," or ",(0,s.jsx)(n.code,{children:"dig"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["If you use CloudFlare make sure that the orange cloud is disabled for your Wings or Panel ",(0,s.jsx)(n.code,{children:"A"})," records."]}),"\n",(0,s.jsx)(n.li,{children:"Make sure when using Wings behind a firewall \u2014 pfSense, OpenSwitch, etc. \u2014 that the correct NAT settings to access\nthe Wing's ports from the outside network are setup."}),"\n",(0,s.jsx)(n.li,{children:"If nothing is working so far, check your own DNS settings and consider switching DNS servers."}),"\n",(0,s.jsxs)(n.li,{children:["When running the Panel and Wings on one server it can sometimes help if to add an entry in ",(0,s.jsx)(n.code,{children:"/etc/hosts"})," that directs\nthe public IP back to the server. Sometimes the reverse path is also needed, so you may need to add an entry to your\nservers ",(0,s.jsx)(n.code,{children:"/etc/hosts"})," file that points the Panel's domain to the correct IP."]}),"\n",(0,s.jsx)(n.li,{children:"When running Wings and the Panel on separate VM's using the same adapter make sure the VM's can connect to each\nother. Promiscuous mode might be needed."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"invalid-mac-exception",children:"Invalid MAC Exception"}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"This error should never happen if you correctly follow our installation and upgrade guides. The only time we have\never seen this error occur is when you blindly restore the Panel database from a backup and try to use a fresh\ninstallation of the Panel."}),(0,s.jsxs)(n.p,{children:["When restoring backups you should ",(0,s.jsx)(n.em,{children:"always"})," restore the ",(0,s.jsx)(n.code,{children:".env"})," file!"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes when using the Panel you'll unexpectedly encounter a broken page, and upon checking the logs you'll see\nan exception mentioning an invalid MAC when decrypting. This error is caused by mismatched ",(0,s.jsx)(n.code,{children:"APP_KEY"}),"s in your ",(0,s.jsx)(n.code,{children:".env"})," file\nwhen the data was encrypted versus decrypted."]}),"\n",(0,s.jsxs)(n.p,{children:["If you are seeing this error the only solution is to restore the ",(0,s.jsx)(n.code,{children:"APP_KEY"})," from your ",(0,s.jsx)(n.code,{children:".env"})," file. If you have lost that\noriginal key there is no way to recover the lost data."]}),"\n",(0,s.jsx)(n.h2,{id:"selinux-issues",children:"SELinux Issues"}),"\n",(0,s.jsx)(n.p,{children:"On systems with SELinux installed you might encounter unexpected errors when running redis or attempting to connect\nto the daemon to perform actions. These issues can generally be resolved by executing the commands below to allow\nthese programs to work with SELinux."}),"\n",(0,s.jsx)(n.h3,{id:"redis-permissions-errors",children:"Redis Permissions Errors"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"audit2allow -a -M redis_t\nsemodule -i redis_t.pp\n"})}),"\n",(0,s.jsx)(n.h3,{id:"wings-connection-errors",children:"Wings Connection Errors"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"audit2allow -a -M http_port_t\nsemodule -i http_port_t.pp\n"})}),"\n",(0,s.jsx)(n.h3,{id:"containers-dont-have-internet-probably-a-dns-issue",children:"Containers don't have internet? Probably a DNS issue!"}),"\n",(0,s.jsx)(n.p,{children:"Now that Wings has run successfully and you have gotten the green heart on your Nodes page, the wings config at '/etc/pterodactyl/config.yml' will have new values.\nOne of those values is DNS, which by default will be 1.1.1.1 and 1.0.0.1\nIf you are using a host that blocks Cloudflare DNS, you will have to use different DNS Servers; typically the same ones your host system is using.\nYou can view what DNS Servers your host uses through a number of ways depending on how your operating system handles networking. If one of these doesn't work, try another one."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Systemd-Resolve (Ubuntu 20.04)\nsystemd-resolve --status\n# Resolve-CTL (Newer Version of Ubuntu)\nresolvectl status\n# Network Manager\nnmcli dev show\n# Raw file locations that may have your host system's DNS Servers for various distributions\n/etc/resolv.conf\n/etc/network/interfaces\n"})}),"\n",(0,s.jsx)(n.p,{children:"If this returns different DNS Servers than 1.1.1.1 and 1.0.0.1 you'll need to edit the wings 'config.yml' file to use the DNS servers that were returned from the command. If you see output that looks like an IPV6 address in addition to your IPV4 DNS Servers, make sure you put that in the IPV6 section and not the IPV4 section. To be clear, if you have to use different DNS Servers than the default, make sure to REMOVE 1.1.1.1 and 1.0.0.1 from the wings config; don't just add the new servers, replace the old servers."}),"\n",(0,s.jsx)(n.h2,{id:"firewalld-issues",children:"FirewallD issues"}),"\n",(0,s.jsxs)(n.p,{children:["If you are on a RHEL/CentOS server with ",(0,s.jsx)(n.code,{children:"firewalld"})," installed you may have broken DNS."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --zone=trusted --change-interface=pterodactyl0\nfirewall-cmd --reload\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Restart ",(0,s.jsx)(n.code,{children:"docker"})," and ",(0,s.jsx)(n.code,{children:"wings"})," after running these to be sure the rules are applied."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);