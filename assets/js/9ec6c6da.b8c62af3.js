"use strict";(self.webpackChunkpterodactyl=self.webpackChunkpterodactyl||[]).push([[1031],{4812:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(5893),c=n(1151),o=n(2991);const r={slug:"/community"},s="Community Guides",a={id:"community/community_guides/index",title:"Community Guides",description:"",source:"@site/docs/community/community_guides/index.md",sourceDirName:"community/community_guides",slug:"/community",permalink:"/pterodactyl-documentation/docs/community",draft:!1,unlisted:!1,editUrl:"https://github.com/QuintenQVD0/pterodactyl-documentation/blob/main/docs/community/community_guides/index.md",tags:[],version:"current",frontMatter:{slug:"/community"},sidebar:"CommunitySidebar",next:{title:"Community Guides and Tutorials",permalink:"/pterodactyl-documentation/docs/community/about"}},u={},d=[];function m(t){const e={h1:"h1",...(0,c.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"community-guides",children:"Community Guides"}),"\n","\n","\n",(0,i.jsx)(o.Z,{})]})}function l(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(m,{...t})}):m(t)}},2991:(t,e,n)=>{n.d(e,{Z:()=>x});n(7294);var i=n(6905),c=n(3438),o=n(9960),r=n(3919),s=n(5999),a=n(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(t){let{href:e,children:n}=t;return(0,d.jsx)(o.Z,{href:e,className:(0,i.Z)("card padding--lg",u.cardContainer),children:n})}function l(t){let{href:e,icon:n,title:c,description:o}=t;return(0,d.jsxs)(m,{href:e,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,i.Z)("text--truncate",u.cardTitle),title:c,children:[n," ",c]}),o&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",u.cardDescription),title:o,children:o})]})}function p(t){let{item:e}=t;const n=(0,c.LM)(e);return n?(0,d.jsx)(l,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f(t){let{item:e}=t;const n=(0,r.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(e.docId??void 0);return(0,d.jsx)(l,{href:e.href,icon:n,title:e.label,description:e.description??i?.description})}function h(t){let{item:e}=t;switch(e.type){case"link":return(0,d.jsx)(f,{item:e});case"category":return(0,d.jsx)(p,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y(t){let{className:e}=t;const n=(0,c.jA)();return(0,d.jsx)(x,{items:n.items,className:e})}function x(t){const{items:e,className:n}=t;if(!e)return(0,d.jsx)(y,{...t});const o=(0,c.MN)(e);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:o.map(((t,e)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:t})},e)))})}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var i=n(7294);const c={},o=i.createContext(c);function r(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);