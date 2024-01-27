"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[6038],{86:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=s(5893),i=s(1151);const r={slug:"/eggs/egg"},o="Creating a Custom Egg",a={id:"community/creating_eggs/creating_a_custom_egg",title:"Creating a Custom Egg",description:"You should not edit existing services or options that ship with the Panel. Each upgrade we push can make minor",source:"@site/docs/community/creating_eggs/creating_a_custom_egg.md",sourceDirName:"community/creating_eggs",slug:"/eggs/egg",permalink:"/pterodactyl-documentation/docs/eggs/egg",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/creating_eggs/creating_a_custom_egg.md",tags:[],version:"current",frontMatter:{slug:"/eggs/egg"},sidebar:"CommunitySidebar",previous:{title:"Creating Eggs",permalink:"/pterodactyl-documentation/docs/eggs"},next:{title:"Creating a Custom Docker Image",permalink:"/pterodactyl-documentation/docs/eggs/image"}},d={},l=[{value:"Create New Option",id:"create-new-option",level:2},{value:"The Pterodactyl Install Procces",id:"the-pterodactyl-install-procces",level:2},{value:"Configure Process Management",id:"configure-process-management",level:2},{value:"Stop Command",id:"stop-command",level:3},{value:"Log Storage",id:"log-storage",level:3},{value:"Configuration Files",id:"configuration-files",level:3},{value:"File Parser",id:"file-parser",level:4},{value:"Start Configuration",id:"start-configuration",level:3},{value:"Copy Settings From",id:"copy-settings-from",level:2},{value:"Egg Variables",id:"egg-variables",level:2},{value:"List of default variables",id:"list-of-default-variables",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"creating-a-custom-egg",children:"Creating a Custom Egg"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"You should not edit existing services or options that ship with the Panel. Each upgrade we push can make minor\nchanges to these, and you'll lose any changes you've made."})}),"\n",(0,t.jsxs)(n.p,{children:["The first thing you'll need to do is create a new service. In this case, the name and description speak for themselves.\nThe ",(0,t.jsx)(n.code,{children:"Folder Name"})," ",(0,t.jsx)(n.em,{children:"must be a unique name"})," not being used by any other service, and should only\ncontain letters, numbers, underscores, and dashes. This is the name of the folder where the daemon will be storing\nthe service options on the daemon."]}),"\n",(0,t.jsx)(n.p,{children:"The default start command is also required, however it can be changed per-option."}),"\n",(0,t.jsx)(n.h2,{id:"create-new-option",children:"Create New Option"}),"\n",(0,t.jsxs)(n.p,{children:["After creating the service, in the bottom right of the page you should see a button titled ",(0,t.jsx)(n.code,{children:"New Egg"}),", press it."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9455).Z+"",width:"1764",height:"1119"})}),"\n",(0,t.jsxs)(n.p,{children:["You will be taken to a new service option page which is where most of the configuration happens. The first thing\nyou need to do is select your service that you created previously from the ",(0,t.jsx)(n.code,{children:"Associated Nest"})," dropdown."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9463).Z+"",width:"1765",height:"1125"})}),"\n",(0,t.jsxs)(n.p,{children:["After that, enter an Option Name to describe it, in this case I am using ",(0,t.jsx)(n.code,{children:"Widget"}),". You will also need to provide a\n",(0,t.jsx)(n.em,{children:"valid"})," docker image, as well as a start command to be assigned to servers under this service option (remember, this\ncan be tweaked per-server if needed)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Docker images must be specifically designed to work with Pterodactyl Panel."})," You should read more about that in\nour ",(0,t.jsx)(n.a,{href:"/pterodactyl-documentation/docs/eggs/image",children:"Creating a Docker Image"})," guide."]}),"\n",(0,t.jsx)(n.h2,{id:"the-pterodactyl-install-procces",children:"The Pterodactyl Install Procces"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please be aware of how the pterodactyl install process works!"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1. Spin up install container\n    Creates a new container using an install image which runs as root.\n    Uses a volume mount on `/mnt/server` for the server files, which is the working directory during installation.\n    The volume will be later mounted as `/home/container` for the server container. Any files outside of `/mnt/server` will be gone after installation.\n    The installation script can set up everything that's required to run the server, such as writing files, creating directories, or compiling apps.\n    It is regularly used to just download the files required, such as server files and configs.\n    \n2. Stop and destroy install container\n\n3. Start a new container with the server files in /home/container\n    This is where the server is is actually ran, without root privileges.\n    Any dependencies installed during the install process are gone.\n    The container that is started should have everything you need.\n    No packages can be installed. Any required dependencies must exist in the used Docker image.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"configure-process-management",children:"Configure Process Management"}),"\n",(0,t.jsx)(n.p,{children:"This is perhaps the most important step in this service option configuration, as this tells the Daemon how to run everything."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9463).Z+"",width:"1765",height:"1125"})}),"\n",(0,t.jsxs)(n.p,{children:["The first field you'll encounter is ",(0,t.jsx)(n.code,{children:"Copy Settings From"}),". The default selection is ",(0,t.jsx)(n.code,{children:"None"}),". That is expected, and okay.\nThis dropdown is discussed at the end of this article."]}),"\n",(0,t.jsx)(n.h3,{id:"stop-command",children:"Stop Command"}),"\n",(0,t.jsxs)(n.p,{children:["Next, you'll encounter ",(0,t.jsx)(n.code,{children:"Stop Command"})," and, as the name implies, this should be the command used to safely stop the\noption. For some games, this is ",(0,t.jsx)(n.code,{children:"stop"})," or ",(0,t.jsx)(n.code,{children:"end"}),". Certain programs and games don't have a specified stop command, so\nyou can enter ",(0,t.jsx)(n.code,{children:"^C"})," to have the daemon execute a ",(0,t.jsx)(n.code,{children:"SIGINT"})," to end the process."]}),"\n",(0,t.jsx)(n.h3,{id:"log-storage",children:"Log Storage"}),"\n",(0,t.jsx)(n.p,{children:"Logs are competely handeled by the daemon now and use the docker logs to output the complete output from the server.\nThis can be set like below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"{}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-files",children:"Configuration Files"}),"\n",(0,t.jsxs)(n.p,{children:["The next block is one of the most complex blocks, the ",(0,t.jsx)(n.code,{children:"Configuration Files"})," descriptor. The Daemon will process this\nblock prior to booting the server to ensure all of the required settings are defined and set correctly."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "server.properties": {\n        "parser": "properties",\n        "find": {\n            "server-ip": "0.0.0.0",\n            "enable-query": "true",\n            "server-port": "{{server.build.default.port}}",\n            "query.port": "{{server.build.default.port}}"\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we are telling the Daemon to read ",(0,t.jsx)(n.code,{children:"server.properties"})," in ",(0,t.jsx)(n.code,{children:"/home/container"}),". Within this block, we\ndefine a ",(0,t.jsx)(n.code,{children:"parser"}),", in this case ",(0,t.jsx)(n.code,{children:"properties"})," but the following are ",(0,t.jsx)(n.a,{href:"https://github.com/pterodactyl/wings/blob/develop/parser/parser.go#L25-L30",children:"valid parsers"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"file"})," \u2014 This parser goes based on matching the beginning of lines, and not a specific property like the other five.\nAvoid using this parser if possible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"yaml"})," (supports ",(0,t.jsx)(n.code,{children:"*"})," notation)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"properties"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ini"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"json"})," (supports ",(0,t.jsx)(n.code,{children:"*"})," notation)"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"xml"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If you want to use egg non stock variables in the configuration parser you must reference them as ",(0,t.jsx)(n.code,{children:"{{server.build.env.ENVNAME}}"})," or just ",(0,t.jsx)(n.code,{children:"{{env.ENVNAME}}"}),". Do not forget to to replace ",(0,t.jsx)(n.code,{children:"ENVNAME"})," with the actual environment name you have setup."]})}),"\n",(0,t.jsxs)(n.p,{children:["Once you have defined a parser, we then define a ",(0,t.jsx)(n.code,{children:"find"})," block which tells the Daemon what specific elements to find\nand replace. In this example, we have provided four separate items within the ",(0,t.jsx)(n.code,{children:"server.properties"})," file that we want to\nfind and replace to the assigned values. You can use either an exact value, or define a specific server setting from\nthe ",(0,t.jsx)(n.code,{children:"server.json"})," file. In this case, we're assigning the default server port to be used as the ",(0,t.jsx)(n.code,{children:"server-port"})," and\n",(0,t.jsx)(n.code,{children:"query.port"}),". ",(0,t.jsx)(n.strong,{children:"These placeholders are case sensitive, and should have no spaces in them."})]}),"\n",(0,t.jsxs)(n.p,{children:["You can have multiple files listed here, the Daemon will process them in parallel before starting the server. When\nusing ",(0,t.jsx)(n.code,{children:"yaml"})," or ",(0,t.jsx)(n.code,{children:"json"})," you can use more advanced searching for elements."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "config.yml": {\n        "parser": "yaml",\n        "find": {\n            "listeners[0].query_enabled": true,\n            "listeners[0].query_port": "{{server.build.default.port}}",\n            "listeners[0].host": "0.0.0.0:{{server.build.default.port}}",\n            "servers.*.address": {\n                "127.0.0.1": "{{config.docker.interface}}",\n                "localhost": "{{config.docker.interface}}"\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, we are parsing ",(0,t.jsx)(n.code,{children:"config.yml"})," using the ",(0,t.jsx)(n.code,{children:"yaml"})," parser. The first three find items are simply assigning\nports and IPs for the first listener block. The last one, ",(0,t.jsx)(n.code,{children:"servers.*.address"})," uses wildcard matching to match any items\nwithin the ",(0,t.jsx)(n.code,{children:"servers"})," block, and then finding each ",(0,t.jsx)(n.code,{children:"address"})," block for those items."]}),"\n",(0,t.jsx)(n.admonition,{title:"v-pre",type:"note",children:(0,t.jsxs)(n.p,{children:["An advanced feature of this file configuration is the ability to define multiple find and replace statements for a\nsingle matching line. In this case, we are looking for either ",(0,t.jsx)(n.code,{children:"127.0.0.1"})," or ",(0,t.jsx)(n.code,{children:"localhost"})," and replacing them with the\ndocker interface defined in the configuration file using ",(0,t.jsx)(n.code,{children:"{{config.docker.interface}}"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"file-parser",children:"File Parser"}),"\n",(0,t.jsx)(n.p,{children:"The file parser replaces the whole line that you are trying to edit. So you have to use it like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "main/server.cfg": {\n        "parser": "file",\n        "find": {\n            "seta sv_hostname": "seta sv_hostname \\"{{env.SERVER_NAME}}\\"",\n            "seta sv_maxClients": "seta sv_maxClients \\"{{env.SERVER_MAXCLIENTS}}\\"",\n            "seta rconPassword": "seta rconPassword \\"{{env.RCON_PASSWORD}}\\"",\n            "seta g_password": "seta g_password \\"{{env.SERVER_PASSWORD}}\\"",\n            "Map": "Map {{env.SERVER_MAP}}"\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:'"'})," on the right side are escaped with a ",(0,t.jsx)(n.code,{children:"\\"})," because else they would break the json syntax for the parser."]}),"\n",(0,t.jsx)(n.h3,{id:"start-configuration",children:"Start Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["The last block to configure is the ",(0,t.jsx)(n.code,{children:"Start Configuration"})," for servers running using this service option."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "done": ")! For help, type "\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the example block above, we define ",(0,t.jsx)(n.code,{children:"done"})," as the entire line, or part of a line that indicates a server is done\nstarting, and is ready for players to join. When the Daemon sees this output, it will mark the server as ",(0,t.jsx)(n.code,{children:"ON"})," rather\nthan ",(0,t.jsx)(n.code,{children:"STARTING"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If your application has multiple messages that mean that it is fully startup then you can also do it like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "done":[\n    "change this text 1",\n    "change this text 2"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"That concludes basic service option configuration."}),"\n",(0,t.jsx)(n.h2,{id:"copy-settings-from",children:"Copy Settings From"}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned above, there is a unique ",(0,t.jsx)(n.code,{children:"Copy Settings From"})," dropdown when adding a new option. This gives you the\nability to, as the name suggests, copy settings defined above from a different option."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2272).Z+"",width:"840",height:"616"})}),"\n",(0,t.jsx)(n.p,{children:"In the panel, we use this to copy settings that remain the same between similar service options, such as many of the\nMinecraft options."}),"\n",(0,t.jsxs)(n.p,{children:["For example, lets look at the ",(0,t.jsx)(n.code,{children:"Sponge (SpongeVanilla)"})," service option."]}),"\n",(0,t.jsxs)(n.p,{children:["As you can see, it as been told to copy settings from ",(0,t.jsx)(n.code,{children:"Vanilla Minecraft"}),". This means that any of the fields that are\nleft blank will inherit from the assigned parent. We then define a specific ",(0,t.jsx)(n.code,{children:"userInteraction"})," line that is different in\nSponge compared to Vanilla, but tell it that everything else should remain the same."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Please note that ",(0,t.jsx)(n.code,{children:"Copy Settings From"})," does not support nested copies, you can only copy from a single parent,\nand that parent ",(0,t.jsx)(n.strong,{children:"must not be copying from another option."})]})}),"\n",(0,t.jsx)(n.h2,{id:"egg-variables",children:"Egg Variables"}),"\n",(0,t.jsxs)(n.p,{children:["One of the great parts of the Egg Variables is the ability to define specific variables that users and/or admins can\ncontrol to tweak different settings without letting users modify the startup command. To create new variables, or edit\nexisting ones, visit the new service option you created, and click the ",(0,t.jsx)(n.code,{children:"Variables"})," tab at the top of the page. Lets take\na look at an example variable that we can create."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2604).Z+"",width:"1765",height:"1124"})}),"\n",(0,t.jsx)(n.admonition,{title:"v-pre",type:"note",children:(0,t.jsxs)(n.p,{children:["The name and description are rather self-explanitory, so I'll skip down to the ",(0,t.jsx)(n.code,{children:"Environment Variable"})," box. This should\nbe an Alpha-Numeric name with underscores, and should be uppercase. This will be the name of the environment variable\nwhich can be accessed in the startup command as ",(0,t.jsx)(n.code,{children:"{{WOOZLE_WOO}}"}),", within file modifications as ",(0,t.jsx)(n.code,{children:"{{env.WOOZLE_WOO}}"}),", or\njust ",(0,t.jsx)(n.code,{children:"${WOOZLE_WOO}"})," in any shell scripts (it is passed through in the environment). We also define a default value for\nthis environment variable in this example, but it is not required to do so."]})}),"\n",(0,t.jsxs)(n.p,{children:["The next section is ",(0,t.jsx)(n.code,{children:"Permissions"}),", which is a dropdown with two options: ",(0,t.jsx)(n.code,{children:"Users Can View"})," and ",(0,t.jsx)(n.code,{children:"Users Can Edit"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Users Can View"})," \u2014 allows a user to view the field on the front-end, as well as the assigned value of that variable.\nThey will be able to see it replaced in their startup command."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Users Can Edit"})," \u2014 allows a user to edit the value of the variable, for example the name of their ",(0,t.jsx)(n.code,{children:"server.jar"})," file\nif running Minecraft."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You should use caution here, even if you assign neither of the permissions it does not mean that the value will be\nhidden. Crafty users will still be able to get the environment on their server. In most cases this is simply hiding\nit from the user, and then used within the Dockerfile to perform actions, thus it is not important for the user to see."}),"\n",(0,t.jsxs)(n.p,{children:["Finally, you will need to define some input rules to validate the value against. In this example, we use\n",(0,t.jsx)(n.code,{children:"required|string|between:1,10"}),", which means the field is ",(0,t.jsx)(n.code,{children:"required"}),", must be a ",(0,t.jsx)(n.code,{children:"string"}),", and must be between ",(0,t.jsx)(n.code,{children:"1"})," and\n",(0,t.jsx)(n.code,{children:"10"})," characters in length. You can find ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/5.6/validation#available-validation-rules",children:"all of the available validation rules"}),"\non the Laravel website. You can also use ReGEX based validation by using the ",(0,t.jsx)(n.code,{children:"regex:"})," rule flag. For example,\n",(0,t.jsx)(n.a,{href:"https://regex101.com/r/k4oEOn/1",children:(0,t.jsx)(n.code,{children:"required|regex:/^([\\w\\d._-]+)(\\.jar)$/"})})," will require the field, and will match the\nregex as any letters or numbers (",(0,t.jsx)(n.code,{children:"\\w\\d"}),") including underscore (",(0,t.jsx)(n.code,{children:"_"}),"), periods (",(0,t.jsx)(n.code,{children:"."}),"), and dashes (",(0,t.jsx)(n.code,{children:"-"}),") ending in ",(0,t.jsx)(n.code,{children:".jar"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"They will then be visible when managing the startup for a server in both the Admin CP and on the Front-End."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(9531).Z+"",width:"1906",height:"988"})}),"\n",(0,t.jsx)(n.h2,{id:"list-of-default-variables",children:"List of default variables"}),"\n",(0,t.jsx)(n.p,{children:"The default variables are always accessible to all eggs and don't have to be created separately. They can be used in the egg startup, install script, or the configuration file parser."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TZ"}),(0,t.jsx)(n.td,{children:"Time Zone"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Etc/UTC"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"STARTUP"}),(0,t.jsx)(n.td,{children:"Startup command of the egg"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SERVER_MEMORY"}),(0,t.jsx)(n.td,{children:"Memory available for the server in MB"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"512"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SERVER_IP"}),(0,t.jsx)(n.td,{children:"Default ip of the server"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"127.0.0.1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SERVER_PORT"}),(0,t.jsx)(n.td,{children:"Primary Server Port"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"27015"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P_SERVER_LOCATION"}),(0,t.jsx)(n.td,{children:"Location of the server"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Example City"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P_SERVER_UUID"}),(0,t.jsx)(n.td,{children:"UUID of the server"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"539fdca8-4a08-4551-a8d2-8ee5475b50d9"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"P_SERVER_ALLOCATION_LIMIT"}),(0,t.jsx)(n.td,{children:"Limit of allocations allowed for the server"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2272:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Pterodactyl_Create_New_Egg_Copy_Settings_From-9b31dd4f1a081206ee909bf07524f8f8.png"},9463:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Pterodactyl_Create_New_Egg_Process_Management-a5ac20f1939515ce95691a821c35fc8c.png"},9455:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Pterodactyl_Create_New_Egg_Select-8e79c64a10ff2aa11cab8111e57b2a57.png"},9531:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Pterodactyl_Create_New_Egg_Startup-6deb812b25652925db88ede9db29d193.png"},2604:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Pterodactyl_Create_New_Egg_Variables-9cdba1e3dc42cdbb2b066442a5afdbd1.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(7294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);