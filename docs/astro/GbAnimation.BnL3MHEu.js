import{r as v}from"./index.Cd_vQiNd.js";var x={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m;function R(){if(m)return o;m=1;var l=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(c,e,t){var n=null;if(t!==void 0&&(n=""+t),e.key!==void 0&&(n=""+e.key),"key"in e){t={};for(var a in e)a!=="key"&&(t[a]=e[a])}else t=e;return e=t.ref,{$$typeof:l,type:c,key:n,ref:e!==void 0?e:null,props:t}}return o.Fragment=i,o.jsx=r,o.jsxs=r,o}var d;function f(){return d||(d=1,x.exports=R()),x.exports}var p=f();function h({text:l}){const i=l.split(""),[r,c]=v.useState(0);let e=i.slice(0,r),t=i.slice(r);const n=e.map((s,u)=>p.jsx("span",{className:"gb-char",children:s===" "?" ":s},`${u}`)),a=t.map((s,u)=>p.jsx("span",{className:"gb-char-invisible",children:s===" "?" ":s},`${u}`));return v.useEffect(()=>{if(t.length>0){const s=setTimeout(()=>{c(u=>u+1)},70);return()=>clearTimeout(s)}},[r,i.length]),p.jsxs("div",{className:"gb-animation",children:[n,a]})}export{h as default};
