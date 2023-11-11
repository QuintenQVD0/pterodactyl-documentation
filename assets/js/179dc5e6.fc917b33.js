"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[577],{6212:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(5893),i=n(1151),c=n(2991);const o={slug:"/panel"},a="Panel",s={id:"documentation/panel/index",title:"Panel",description:"",source:"@site/docs/documentation/panel/index.md",sourceDirName:"documentation/panel",slug:"/panel",permalink:"/pterodactyl-documentation/docs/panel",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/documentation/panel/index.md",tags:[],version:"current",frontMatter:{slug:"/panel"},sidebar:"DocsSidebar",previous:{title:"Community Standards",permalink:"/pterodactyl-documentation/docs/project/community"},next:{title:"Getting Started",permalink:"/pterodactyl-documentation/docs/panel/install"}},l={},d=[];function u(t){const e={h1:"h1",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"panel",children:"Panel"}),"\n","\n","\n",(0,r.jsx)(c.Z,{})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},2991:(t,e,n)=>{n.d(e,{Z:()=>j});n(7294);var r=n(4334),i=n(3438),c=n(9960),o=n(3919),a=n(5999),s=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function u(t){let{href:e,children:n}=t;return(0,d.jsx)(c.Z,{href:e,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function m(t){let{href:e,icon:n,title:i,description:c}=t;return(0,d.jsxs)(u,{href:e,children:[(0,d.jsxs)(s.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(t){let{item:e}=t;const n=(0,i.LM)(e);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(e.docId??void 0);return(0,d.jsx)(m,{href:e.href,icon:n,title:e.label,description:e.description??r?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function x(t){let{className:e}=t;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:e})}function j(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(x,{...t});const c=(0,i.MN)(e);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>o});var r=n(7294);const i={},c=r.createContext(i);function o(t){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(c.Provider,{value:e},t.children)}}}]);