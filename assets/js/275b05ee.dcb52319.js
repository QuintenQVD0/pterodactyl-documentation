"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[672],{5726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"documentation/guides/php_upgrade","title":"Upgrading PHP","description":"This documentation includes instructions for upgrading your system to the latest version of PHP. Please reference the","source":"@site/docs/documentation/guides/php_upgrade.md","sourceDirName":"documentation/guides","slug":"/guides/php_upgrade","permalink":"/pterodactyl-documentation/docs/guides/php_upgrade","draft":false,"unlisted":false,"editUrl":"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/guides/php_upgrade.md","tags":[],"version":"current","frontMatter":{"slug":"/guides/php_upgrade"},"sidebar":"DocsSidebar","previous":{"title":"Using Mounts","permalink":"/pterodactyl-documentation/docs/guides/mounts"}}');var a=n(4848),o=n(8453),s=n(1457),l=n(2967);const i={slug:"/guides/php_upgrade"},u="Upgrading PHP",d={},c=[{value:"Install PHP",id:"install-php",level:2},{value:"Update Composer",id:"update-composer",level:2},{value:"Webserver Configuration",id:"webserver-configuration",level:2},{value:"Return to the 1.X.X Upgrade Guide",id:"return-to-the-1xx-upgrade-guide",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"upgrading-php",children:"Upgrading PHP"})}),"\n",(0,a.jsx)(t.p,{children:"This documentation includes instructions for upgrading your system to the latest version of PHP. Please reference the\ntable below to check what version you need for your version of Pterodactyl."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Panel Version"}),(0,a.jsx)(t.th,{children:"PHP Version"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1.0.0 - 1.2.0"}),(0,a.jsx)(t.td,{children:"7.3, 7.4"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1.3.0+"}),(0,a.jsx)(t.td,{children:"7.4, 8.0"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1.8.0+"}),(0,a.jsx)(t.td,{children:"7.4, 8.0, 8.1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1.11.0+"}),(0,a.jsx)(t.td,{children:"8.1"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"install-php",children:"Install PHP"}),"\n",(0,a.jsx)(t.p,{children:"In order to install PHP 8.1, you will need to run the following command. Please keep in mind different operating systems\nmay have slightly different requirements for how this command is formatted."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Add additional repository for PHP\nadd-apt-repository -y ppa:ondrej/php\napt -y update\napt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"update-composer",children:"Update Composer"}),"\n",(0,a.jsxs)(t.p,{children:["As of ",(0,a.jsx)(t.code,{children:"Panel@1.3.0"})," we require ",(0,a.jsx)(t.code,{children:"composer"})," v2. To update composer you will need to run the following command which will\nperform the composer self-update process and move you over to version 2."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"composer self-update --2\n"})}),"\n",(0,a.jsx)(t.h2,{id:"webserver-configuration",children:"Webserver Configuration"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(l.A,{value:"NGINX",label:"NGINX",default:!0,children:[(0,a.jsxs)(t.p,{children:["After upgrading to PHP 8.1, you will most likely need to update your NGINX configuration. Your configuration file\nis most likely called ",(0,a.jsx)(t.code,{children:"pterodactyl.conf"})," and located in the ",(0,a.jsx)(t.code,{children:"/etc/nginx/sites-available/"})," directory, or if on CentOS,\n",(0,a.jsx)(t.code,{children:"/etc/nginx/conf.d/"}),"."]}),(0,a.jsx)(t.p,{children:"Make sure to update the path in the command below to reflect the actual location of your configuration file."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"sed -i -e 's/php[7|8].[0-9]-fpm.sock/php8.1-fpm.sock/' /etc/nginx/sites-available/pterodactyl.conf\n"})}),(0,a.jsx)(t.p,{children:"Once you have edited the file run the command below to reload nginx and apply your changes."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"systemctl reload nginx\n"})})]}),(0,a.jsxs)(l.A,{value:"Apache",label:"Apache",children:[(0,a.jsx)(t.p,{children:"Run the commands below to disable all previous PHP versions and enable PHP 8.1 when serving requests."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Hint: a2dismod = a2_disable_module \ud83e\udd2f\na2dismod php*\n\n# Hint: a2enmod = a2_enable_module \ud83e\udd2f\na2enmod php8.1\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"return-to-the-1xx-upgrade-guide",children:(0,a.jsx)(t.a,{href:"/pterodactyl-documentation/docs/panel/updating",children:"Return to the 1.X.X Upgrade Guide"})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},2967:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},1457:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(8215),o=n(6641),s=n(6347),l=n(205),i=n(8874),u=n(4035),d=n(8776);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,c]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,o]),tabValues:o}}var g=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:c,onClick:d,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.A)();return(0,x.jsx)(j,{...e,children:c(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);