"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[303],{6704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),r=t(8453);const s={slug:"/eggs/image"},o="Creating a Custom Docker Image",a={id:"community/creating_eggs/creating_a_custom_image",title:"Creating a Custom Docker Image",description:"This tutorial uses examples from our yolks:java_17 docker image,",source:"@site/docs/community/creating_eggs/creating_a_custom_image.md",sourceDirName:"community/creating_eggs",slug:"/eggs/image",permalink:"/pterodactyl-documentation/docs/eggs/image",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/creating_eggs/creating_a_custom_image.md",tags:[],version:"current",frontMatter:{slug:"/eggs/image"},sidebar:"CommunitySidebar",previous:{title:"Creating a Custom Egg",permalink:"/pterodactyl-documentation/docs/eggs/egg"},next:{title:"Game Configuration",permalink:"/pterodactyl-documentation/docs/games"}},c={},d=[{value:"Creating the Dockerfile",id:"creating-the-dockerfile",level:2},{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Files In The Docker Image",id:"files-in-the-docker-image",level:2},{value:"Creating a Container User",id:"creating-a-container-user",level:2},{value:"Work Directory &amp; Entrypoint",id:"work-directory--entrypoint",level:2},{value:"Entrypoint Script",id:"entrypoint-script",level:2},{value:"Modifying the Startup Command",id:"modifying-the-startup-command",level:2},{value:"Run the Command",id:"run-the-command",level:2},{value:"Note",id:"note",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-a-custom-docker-image",children:"Creating a Custom Docker Image"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["This tutorial uses examples from our ",(0,i.jsx)(n.a,{href:"https://github.com/pterodactyl/yolks/tree/master/java/17",children:(0,i.jsx)(n.code,{children:"yolks:java_17"})})," docker image,\nwhich can be found on GitHub. This tutorial also assumes some knowledge of ",(0,i.jsx)(n.a,{href:"https://docker.io/",children:"Docker"}),", we suggest\nreading up if this all looks foreign to you."]})}),"\n",(0,i.jsx)(n.h2,{id:"creating-the-dockerfile",children:"Creating the Dockerfile"}),"\n",(0,i.jsxs)(n.p,{children:["The most important part of this process is to create the ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:(0,i.jsx)(n.code,{children:"Dockerfile"})}),"\nthat will be used by the Daemon. Due to heavy restrictions on server containers, you must setup this file in a specific manner."]}),"\n",(0,i.jsxs)(n.p,{children:["We try to use a ",(0,i.jsx)(n.a,{href:"https://www.debian.org",children:"Debian based OS"})," as much as possible for our images"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'FROM        --platform=$TARGETOS/$TARGETARCH eclipse-temurin:17-jdk-jammy\n\nLABEL       author="Matthew Penner" maintainer="matthew@pterodactyl.io"\n\nLABEL       org.opencontainers.image.source="https://github.com/pterodactyl/yolks"\nLABEL       org.opencontainers.image.licenses=MIT\n\nRUN \t\tapt-get update -y \\\n \t\t\t&& apt-get install -y lsof curl ca-certificates openssl git tar sqlite3 fontconfig libfreetype6 tzdata iproute2 libstdc++6 \\\n \t\t\t&& useradd -d /home/container -m container\n\nUSER        container\nENV         USER=container HOME=/home/container\nWORKDIR     /home/container\n\nCOPY        ./../entrypoint.sh /entrypoint.sh\nCMD         [ "/bin/bash", "/entrypoint.sh" ]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Lets walk through the ",(0,i.jsx)(n.code,{children:"Dockerfile"})," above. The first thing you'll notice is the ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#from",children:(0,i.jsx)(n.code,{children:"FROM"})})," declaration."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"FROM --platform=$TARGETOS/$TARGETARCH eclipse-temurin:17-jdk-jammy\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"--platform=$TARGETOS/$TARGETARCH"})," allows us to specify in the github workflow that we want to build for linux/amd64 and linux/arm64. See ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#from",children:"Docker docs"})]}),"\n",(0,i.jsxs)(n.p,{children:["In this case, we are using ",(0,i.jsx)(n.a,{href:"https://github.com/adoptium/containers/tree/main",children:(0,i.jsx)(n.code,{children:"eclipse-temurin:17-jdk-jammy"})})," which provides us with Java 17."]}),"\n",(0,i.jsx)(n.h2,{id:"installing-dependencies",children:"Installing Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:["The next thing we do is install the dependencies we will need using Debian/Ubuntu's package manager: ",(0,i.jsx)(n.code,{children:"apt"}),". You'll notice some\nspecific flags ",(0,i.jsx)(n.code,{children:"-y"})," as the docker build is non interactive, as well as everything being contained in a\nsingle ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#run",children:(0,i.jsx)(n.code,{children:"RUN"})})," block."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["The dependency ",(0,i.jsx)(n.code,{children:"iproute2"})," is required in every docker container to make the ip command work"]})}),"\n",(0,i.jsx)(n.h2,{id:"files-in-the-docker-image",children:"Files In The Docker Image"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Because the way that Pterodactyl works, it is not possible to store any files within the Docker image at ",(0,i.jsx)(n.code,{children:"/home/container"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"All files must be downloaded with the egg install script, this means for example that you can not put your bot files or minecraft server jars in the Docker image as you can with regular docker images."}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-container-user",children:"Creating a Container User"}),"\n",(0,i.jsxs)(n.p,{children:["Within this ",(0,i.jsx)(n.code,{children:"RUN"})," block, you'll notice the ",(0,i.jsx)(n.code,{children:"useradd"})," command."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" useradd -d /home/container -m container\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["All Pterodactyl containers must have a user named ",(0,i.jsx)(n.code,{children:"container"}),", and the user home ",(0,i.jsx)(n.strong,{children:"must"})," be ",(0,i.jsx)(n.code,{children:"/home/container"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["After we create that user, we then define the default container ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#user",children:(0,i.jsx)(n.code,{children:"USER"})}),"\nas well as a few ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#env",children:(0,i.jsx)(n.code,{children:"ENV"})})," settings to be applied to things running\nwithin the container."]}),"\n",(0,i.jsx)(n.h2,{id:"work-directory--entrypoint",children:"Work Directory & Entrypoint"}),"\n",(0,i.jsxs)(n.p,{children:["One of the last things we do is define a ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#workdir",children:(0,i.jsx)(n.code,{children:"WORKDIR"})})," which\nis where everything else will be executed. The ",(0,i.jsx)(n.code,{children:"WORKDIR"})," must be set the ",(0,i.jsx)(n.code,{children:"/home/container"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, we need to copy our ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#entrypoint",children:(0,i.jsx)(n.code,{children:"ENTRYPOINT"})})," script into\nthe docker image root. This is done using ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#copy",children:(0,i.jsx)(n.code,{children:"COPY"})}),", after which\nwe define the command to be used when the container is started using ",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/#cmd",children:(0,i.jsx)(n.code,{children:"CMD"})}),".\nThe ",(0,i.jsx)(n.code,{children:"CMD"})," line should always point to the ",(0,i.jsx)(n.code,{children:"entrypoint.sh"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'COPY        ./../entrypoint.sh /entrypoint.sh\nCMD         [ "/bin/bash", "/entrypoint.sh" ]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"entrypoint-script",children:"Entrypoint Script"}),"\n",(0,i.jsxs)(n.p,{children:["In order to complete this ",(0,i.jsx)(n.code,{children:"Dockerfile"}),", we will need an ",(0,i.jsx)(n.code,{children:"entrypoint.sh"})," file which tells Docker how to run this\nspecific server type."]}),"\n",(0,i.jsx)(n.p,{children:"These entrypoint files are actually fairly abstracted, and the Daemon will pass in the start command as an environment\nvariable before processing it and then executing the command."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Default the TZ environment variable to UTC.\nTZ=${TZ:-UTC}\nexport TZ\n\n# Set environment variable that holds the Internal Docker IP\nINTERNAL_IP=$(ip route get 1 | awk \'{print $(NF-2);exit}\')\nexport INTERNAL_IP\n\n# Switch to the container\'s working directory\ncd /home/container || exit 1\n\n# Print Java version\nprintf "\\033[1m\\033[33mcontainer@pterodactyl~ \\033[0mjava -version\\n"\njava -version\n\n# Convert all of the "{{VARIABLE}}" parts of the command into the expected shell\n# variable format of "${VARIABLE}" before evaluating the string and automatically\n# replacing the values.\nPARSED=$(echo "${STARTUP}" | sed -e \'s/{{/${/g\' -e \'s/}}/}/g\' | eval echo "$(cat -)")\n\n# Display the command we\'re running in the output, and then execute it with the env\n# from the container itself.\nprintf "\\033[1m\\033[33mcontainer@pterodactyl~ \\033[0m%s\\n" "$PARSED"\n# shellcheck disable=SC2086\nexec env ${PARSED}\n'})}),"\n",(0,i.jsx)(n.p,{children:"First we set the timezone."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"TZ=${TZ:-UTC}\nexport TZ\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then we make the internal ip avaible in the docker container."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"INTERNAL_IP=$(ip route get 1 | awk '{print $(NF-2);exit}')\nexport INTERNAL_IP\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The third command, ",(0,i.jsx)(n.code,{children:"cd /home/container"}),", simply ensures we are in the correct directory when running the rest of the\ncommands. We then follow that up with ",(0,i.jsx)(n.code,{children:"java -version"})," to output this information to end-users, but that is not necessary."]}),"\n",(0,i.jsx)(n.h2,{id:"modifying-the-startup-command",children:"Modifying the Startup Command"}),"\n",(0,i.jsxs)(n.p,{children:["The most significant part of this file is the ",(0,i.jsx)(n.code,{children:"MODIFIED_STARTUP"})," environment variable. What we are doing in this case\nis parsing the environment ",(0,i.jsx)(n.code,{children:"STARTUP"})," that is passed into the container by the Daemon. In most cases, this variable\nlooks something like the example below:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'STARTUP="java -Xms128M -XX:MaxRAMPercentage=95.0 -jar {{SERVER_JARFILE}}"\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"v-pre",type:"note",children:(0,i.jsxs)(n.p,{children:["You'll notice some placeholders there, specifically ",(0,i.jsx)(n.code,{children:"{{SERVER_JARFILE}}"}),". These refer to\nother environment variables being passed in, and they look something like the example below."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"SERVER_JARFILE=server.jar\n"})}),"\n",(0,i.jsx)(n.p,{children:"There are a host of different environment variables, and they change depending on the specific service option\nconfiguration. However, that is not necessarily anything to worry about here."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"PARSED=$(echo \"${STARTUP}\" | sed -e 's/{{/${/g' -e 's/}}/}/g' | eval echo \"$(cat -)\")\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"v-pre",type:"note",children:(0,i.jsxs)(n.p,{children:["The command above simply evaluates the ",(0,i.jsx)(n.code,{children:"STARTUP"})," environment variable, and then replaces anything surrounded in\ncurly braces ",(0,i.jsx)(n.code,{children:"{{EXAMPLE}}"})," with a matching environment variable (such as ",(0,i.jsx)(n.code,{children:"EXAMPLE"}),"). Thus, our ",(0,i.jsx)(n.code,{children:"STARTUP"})," command:"]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -Xms128M -XX:MaxRAMPercentage=95.0 -jar {{SERVER_JARFILE}}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Becomes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"java -Xms128M -XX:MaxRAMPercentage=95.0 -jar server.jar\n"})}),"\n",(0,i.jsx)(n.h2,{id:"run-the-command",children:"Run the Command"}),"\n",(0,i.jsxs)(n.p,{children:["The last step is to run this modified startup command, which is done with the line ",(0,i.jsx)(n.code,{children:"exec env ${PARSED}"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you may need to change the permissions of the ",(0,i.jsx)(n.code,{children:"entrypoint.sh"})," file, on linux you can do this by executing ",(0,i.jsx)(n.code,{children:"chmod +x entrypoint.sh"})," in the directory where the file is."]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);