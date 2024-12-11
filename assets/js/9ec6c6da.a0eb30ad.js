"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[6400],{6923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"community/community_guides/index","title":"Community Guides","description":"","source":"@site/docs/community/community_guides/index.md","sourceDirName":"community/community_guides","slug":"/community","permalink":"/pterodactyl-documentation/docs/community","draft":false,"unlisted":false,"editUrl":"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/community_guides/index.md","tags":[],"version":"current","frontMatter":{"slug":"/community"},"sidebar":"CommunitySidebar","next":{"title":"Community Guides and Tutorials","permalink":"/pterodactyl-documentation/docs/community/about"}}');var o=n(4848),i=n(8453),c=n(9990);const s={slug:"/community"},l="Community Guides",a={},u=[];function m(e){const t={h1:"h1",header:"header",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"community-guides",children:"Community Guides"})}),"\n","\n",(0,o.jsx)(c.A,{})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},9990:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),o=n(8215),i=n(8169),c=n(8774),s=n(4586);const l=["zero","one","two","few","many","other"];function a(e){return l.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function d(){const e=m();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}var h=n(6654),f=n(1312),p=n(7649);const y={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var g=n(4848);function x(e){let{href:t,children:n}=e;return(0,g.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",y.cardContainer),children:n})}function j(e){let{href:t,icon:n,title:r,description:i}=e;return(0,g.jsxs)(x,{href:t,children:[(0,g.jsxs)(p.A,{as:"h2",className:(0,o.A)("text--truncate",y.cardTitle),title:r,children:[n," ",r]}),i&&(0,g.jsx)("p",{className:(0,o.A)("text--truncate",y.cardDescription),title:i,children:i})]})}function C(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=d();return t=>e(t,(0,f.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,g.jsx)(j,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function b(e){let{item:t}=e;const n=(0,h.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,g.jsx)(j,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function w(e){let{item:t}=e;switch(t.type){case"link":return(0,g.jsx)(b,{item:t});case"category":return(0,g.jsx)(C,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function N(e){let{className:t}=e;const n=(0,i.$S)();return(0,g.jsx)(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return(0,g.jsx)(N,{...e});const r=(0,i.d1)(t);return(0,g.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,g.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,g.jsx)(w,{item:e})},t)))})}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>s});var r=n(6540);const o={},i=r.createContext(o);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);