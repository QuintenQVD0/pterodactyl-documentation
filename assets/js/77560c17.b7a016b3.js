"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={},i="Additional Configuration",o={unversionedId:"Documentation/Wings/configuration",id:"Documentation/Wings/configuration",title:"Additional Configuration",description:"These are advanced configurations for Wings. You risk breaking Wings and making containers unusable if",source:"@site/docs/Documentation/Wings/configuration.md",sourceDirName:"Documentation/Wings",slug:"/Documentation/Wings/configuration",permalink:"/docs/Documentation/Wings/configuration",draft:!1,editUrl:"https://github.com/pterodactyl/documentation/docs/Documentation/Wings/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"DocsSidebar",previous:{title:"Migrating to Wings",permalink:"/docs/Documentation/Wings/migrating"},next:{title:"Setting up MySQL",permalink:"/docs/Documentation/Tutorials/mysql_setup"}},s={},m=[{value:"Private Registries",id:"private-registries",level:2},{value:"Available Keys",id:"available-keys",level:3},{value:"Example of usage",id:"example-of-usage",level:3},{value:"Custom Network Interfaces",id:"custom-network-interfaces",level:2},{value:"Example of usage",id:"example-of-usage-1",level:3},{value:"Enabling Cloudflare proxy",id:"enabling-cloudflare-proxy",level:2},{value:"Container PID Limit",id:"container-pid-limit",level:2},{value:"Example of usage",id:"example-of-usage-2",level:3},{value:"Throttles Limits",id:"throttles-limits",level:2},{value:"Example of usage",id:"example-of-usage-3",level:3},{value:"Installer Limits",id:"installer-limits",level:2},{value:"Example of usage",id:"example-of-usage-4",level:3},{value:"Other values",id:"other-values",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"additional-configuration"},"Additional Configuration"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"These are advanced configurations for Wings. You risk breaking Wings and making containers unusable if\nyou misconfigure something. Proceed only if you know what each configuration value does.")),(0,r.kt)("p",null,"You must apply all changes to your Wings ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," file located at ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/pterodactyl")," and restart wings. Verify your config file using ",(0,r.kt)("a",{parentName:"p",href:"http://www.yamllint.com/"},"Yaml Lint")," should you receive errors related to YAML parsing."),(0,r.kt)("h2",{id:"private-registries"},"Private Registries"),(0,r.kt)("p",null,"You can use these settings to authenticate against (private) docker registries when pulling images."),(0,r.kt)("h3",{id:"available-keys"},"Available Keys"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Registry address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:"center"},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Registry username")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:"center"},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"Registry password")))),(0,r.kt)("h3",{id:"example-of-usage"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'docker:\n  registries:\n    registry.example.com:\n      username: "registryusername"\n      password: "registrypassword"\n')),(0,r.kt)("h2",{id:"custom-network-interfaces"},"Custom Network Interfaces"),(0,r.kt)("p",null,"You can change the network interface that Wings uses for all containers by editing the network name; it is by default set to ",(0,r.kt)("inlineCode",{parentName:"p"},"pterodactyl_nw"),". For example, to enable Docker host mode change the network name to ",(0,r.kt)("inlineCode",{parentName:"p"},"host"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Changing network mode to ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," grants Pterodactyl direct access to all machine interfaces and Panel users can bind to any IP or Port even if it's not allocated to their container. You will lose all benefits of Docker network isolation. It is not recommended for public installations that are hosting other users' servers.")),(0,r.kt)("h3",{id:"example-of-usage-1"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"docker:\n  network:\n    name: host\n    network_mode: host\n")),(0,r.kt)("p",null,"After making changes, the following commands will stop the Wings, remove the Pterodactyl network, and start the Wings again. Run at your own risk.\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl stop wings && docker network rm pterodactyl_nw && systemctl start wings")),(0,r.kt)("h2",{id:"enabling-cloudflare-proxy"},"Enabling Cloudflare proxy"),(0,r.kt)("p",null,"Cloudflare proxying of the Wings isn't beneficial since users will be connecting to the machine directly and bypassing any Cloudflare protection. As such, your Node machine IP will still be exposed."),(0,r.kt)("p",null,"To enable Cloudflare proxy, you must change the Wings port to one of the Cloudflare HTTPS ports with caching enabled (more info ",(0,r.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/fundamentals/get-started/reference/network-ports/"},"here"),'), such as 8443, because Cloudflare only supports HTTP on port 8080. Select your Node in the Admin Panel, and on the settings tab, change the port. Make sure that you set "Not Behind Proxy" when using Full SSL settings in Cloudflare. Then on Cloudflare dashboard, your FQDN must have an orange cloud enabled beside it.'),(0,r.kt)("p",null,"You are unable to proxy the SFTP port through Cloudflare unless you have their enterprise plan."),(0,r.kt)("h2",{id:"container-pid-limit"},"Container PID Limit"),(0,r.kt)("p",null,"You can change the total number of processes that can be active in a container at any given moment by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"container_pid_limit")," value. The default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"512"),".\nYou can set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to disable the limit completely. However, this is ",(0,r.kt)("em",{parentName:"p"},"not")," recommended as the limit prevents malicious overloading of the node.\nRestart wings and your game server to apply the new limit."),(0,r.kt)("h3",{id:"example-of-usage-2"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"docker:\n  ...\n  container_pid_limit: 512\n  ...\n")),(0,r.kt)("h2",{id:"throttles-limits"},"Throttles Limits"),(0,r.kt)("p",null,"You can use these settings to adjust or completely disable throttling."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"enabled"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not the throttler is enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"lines"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2000"),(0,r.kt)("td",{parentName:"tr",align:null},"Total lines that can be output in a given line_reset_interval period")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maximum_trigger_count"),(0,r.kt)("td",{parentName:"tr",align:"center"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of times throttle limit can be triggered before the server will be stopped")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"line_reset_interval"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time after which the number of lines processed is reset to 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"decay_interval"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10000"),(0,r.kt)("td",{parentName:"tr",align:null},"Time in milliseconds that must pass without triggering throttle limit before trigger count is decremented")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"stop_grace_period"),(0,r.kt)("td",{parentName:"tr",align:"center"},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Time that a server is allowed to be stopping for before it is terminated forcefully if it triggers output throttle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"write_limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Impose I/O write limit for backups to the disk, 0 = unlimited. Value greater than 0 throttles write speed to the set value in MiB/s")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"download_limit"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Impose a Network I/O read limit for archives, 0 = unlimited. Value greater than 0 throttles read speed to the set value in MiB/s")))),(0,r.kt)("h3",{id:"example-of-usage-3"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"throttles:\n  enabled: true\n  lines: 2000\n  maximum_trigger_count: 5\n  line_reset_interval: 100\n  decay_interval: 10000\n  stop_grace_period: 15\n")),(0,r.kt)("h2",{id:"installer-limits"},"Installer Limits"),(0,r.kt)("p",null,"Defines the limits on the installer containers that prevents a server's installation process from unintentionally consuming more resources than expected. This is used in conjunction with the server's defined limits. Whichever value is higher will take precedence in the install containers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Setting Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"memory"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of memory install container can use unless server memory limit is higher than this value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cpu"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum amount of cpu install container can use unless server cpu limit is higher than this value")))),(0,r.kt)("h3",{id:"example-of-usage-4"},"Example of usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"installer_limits:\n  memory: 1024\n  cpu: 100\n")),(0,r.kt)("h2",{id:"other-values"},"Other values"),(0,r.kt)("p",null,"More commonly discussed values. View all Wings config values and explanations in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pterodactyl/wings/tree/develop/config"},"these two files.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting Key"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:"center"},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Force Wings to run in debug mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tmpfs_size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"The size of the /tmp directory in MB when mounted into a container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"websocket_log_count"),(0,r.kt)("td",{parentName:"tr",align:"center"},"150"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of lines to display in the console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"detect_clean_exit_as_crash"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark server as crashed if it's stopped without user interaction, e.g., not pressing stop button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"(crash detection) timeout"),(0,r.kt)("td",{parentName:"tr",align:"center"},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout between server crashes that will not cause the server to be automatically restarted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app_name"),(0,r.kt)("td",{parentName:"tr",align:"center"},'"Pterodactyl"'),(0,r.kt)("td",{parentName:"tr",align:null},"Changes the name of the daemon, shown in the panel's game console")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check_permissions_on_boot"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Check all file permissions on each boot. Disable this when you have a very large amount of files and the server startup is hanging on checking permissions")))))}d.isMDXComponent=!0}}]);