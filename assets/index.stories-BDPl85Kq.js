import{j as e}from"./jsx-runtime-DEdD30eg.js";import{g as _}from"./index-RYns6xqu.js";var x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var i={}.hasOwnProperty;function c(){for(var o="",n=0;n<arguments.length;n++){var l=arguments[n];l&&(o=m(o,f(l)))}return o}function f(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return c.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var n="";for(var l in o)i.call(o,l)&&o[l]&&(n=m(n,l));return n}function m(o,n){return n?o?o+" "+n:o+n:o}t.exports?(c.default=c,t.exports=c):window.classNames=c})()})(x);var k=x.exports;const p=_(k),h="_wrapper_ht87t_1",u="_header_ht87t_10",$="_breakpoint_ht87t_14",w="_breakpoint-value_ht87t_21",v="_breakpoint-xs_ht87t_25",y="_breakpoint-s_ht87t_35",N="_breakpoint-m_ht87t_41",C="_breakpoint-l_ht87t_47",g="_breakpoint-xl_ht87t_53",s={wrapper:h,header:u,breakpoint:$,"breakpoint-value":"_breakpoint-value_ht87t_21",breakpointValue:w,"breakpoint-xs":"_breakpoint-xs_ht87t_25",breakpointXs:v,"breakpoint-s":"_breakpoint-s_ht87t_35",breakpointS:y,"breakpoint-m":"_breakpoint-m_ht87t_41",breakpointM:N,"breakpoint-l":"_breakpoint-l_ht87t_47",breakpointL:C,"breakpoint-xl":"_breakpoint-xl_ht87t_53",breakpointXl:g},d=t=>navigator.clipboard.writeText(`@include mediaQuery(${t}) {}`),j=()=>e.jsxs("div",{className:s.wrapper,children:[e.jsx("div",{className:s.header,children:"Breakpoints (click to copy a media query)"}),e.jsx("button",{className:p(s.breakpoint,s.breakpointXs),onClick:()=>d("xs"),children:e.jsx("div",{className:s.breakpointValue,children:"xs (< 768px)"})}),e.jsx("button",{className:p(s.breakpoint,s.breakpointS),onClick:()=>d("s"),children:e.jsx("div",{className:s.breakpointValue,children:"s (>= 768px)"})}),e.jsx("button",{className:p(s.breakpoint,s.breakpointM),onClick:()=>d("m"),children:e.jsx("div",{className:s.breakpointValue,children:"m (>= 1024px)"})}),e.jsx("button",{className:p(s.breakpoint,s.breakpointL),onClick:()=>d("l"),children:e.jsx("div",{className:s.breakpointValue,children:"l (>= 1200px)"})}),e.jsx("button",{className:p(s.breakpoint,s.breakpointXl),onClick:()=>d("xl"),children:e.jsx("div",{className:s.breakpointValue,children:"xl (>= 1400px)"})})]});j.__docgenInfo={description:"",methods:[],displayName:"BreakpointsStory"};const S="_wrapper_gmq4i_1",E={wrapper:S},r=({color:t,name:i,...c})=>e.jsxs("button",{className:E.wrapper,onClick:()=>i&&navigator.clipboard.writeText(i),style:{backgroundColor:t},...c,children:[i,e.jsx("br",{}),"(",t==null?void 0:t.toUpperCase(),")"]});r.__docgenInfo={description:"",methods:[],displayName:"ColorTile",props:{color:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};const D="_wrapper_1q1np_1",V="_header_1q1np_10",q="_row_1q1np_14",a={wrapper:D,header:V,row:q},b=()=>e.jsxs("div",{className:a.wrapper,children:[e.jsx("div",{className:a.header,children:"Colors (click to copy)"}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#333333",name:"$grey-1"}),e.jsx(r,{color:"#8f8f8f",name:"$grey-2"}),e.jsx(r,{color:"#cccccc",name:"$grey-3"}),e.jsx(r,{color:"#f4f4f4",name:"$grey-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#ffde00",name:"$yellow-1"}),e.jsx(r,{color:"#ffde00",name:"$yellow-2"}),e.jsx(r,{color:"#ffde00",name:"$yellow-3"}),e.jsx(r,{color:"#fffad9",name:"$yellow-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#ff4444",name:"$red-1"}),e.jsx(r,{color:"#ff9898",name:"$red-2"}),e.jsx(r,{color:"#ffc7c7",name:"$red-3"}),e.jsx(r,{color:"#ffe3e3",name:"$red-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#0099CC",name:"$sky-1"}),e.jsx(r,{color:"#73C7E3",name:"$sky-2"}),e.jsx(r,{color:"#B3E0F0",name:"$sky-3"}),e.jsx(r,{color:"#D9F0F7",name:"$sky-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#2D69AA",name:"$blue-1"}),e.jsx(r,{color:"#8CADD0",name:"$blue-2"}),e.jsx(r,{color:"#C0D2E6",name:"$blue-3"}),e.jsx(r,{color:"#E0E9F1",name:"$blue-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#2fa9b4",name:"$petrol-1"}),e.jsx(r,{color:"#8dd0d6",name:"$petrol-2"}),e.jsx(r,{color:"#c1e5e9",name:"$petrol-3"}),e.jsx(r,{color:"#e0f2f4",name:"$petrol-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#21cdab",name:"$mint-1"}),e.jsx(r,{color:"#8ee4d1",name:"$mint-2"}),e.jsx(r,{color:"#c2f0e6",name:"$mint-3"}),e.jsx(r,{color:"#e0f8f2",name:"$mint-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#24a779",name:"$green-1"}),e.jsx(r,{color:"#87cfb5",name:"$green-2"}),e.jsx(r,{color:"#bde5d7",name:"$green-3"}),e.jsx(r,{color:"#def2eb",name:"$green-4"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#84a2a5",name:"$cyprus-2"}),e.jsx(r,{color:"#bcccce",name:"$cyprus-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#b4c3b8",name:"$olive-2"}),e.jsx(r,{color:"#D6DED8",name:"$olive-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#eee6e3",name:"$almond-2"}),e.jsx(r,{color:"#f6f1f0",name:"$almond-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#aeaed2",name:"$purple-2"}),e.jsx(r,{color:"#d1d1e6",name:"$purple-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#d59cd3",name:"$redpurple-2"}),e.jsx(r,{color:"#e8c9e7",name:"$redpurple-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#d06f82",name:"$rustyred-2"}),e.jsx(r,{color:"#e8b7c0",name:"$rustyred-3"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(r,{color:"#ee7766",name:"$coral-2"}),e.jsx(r,{color:"#f9ccc6",name:"$coral-3"})]})]});b.__docgenInfo={description:"",methods:[],displayName:"ColorsStory"};const F={render:j},X={render:b},A={title:"Foundations"},M=["Breakpoints","Colors"];export{F as Breakpoints,X as Colors,M as __namedExportsOrder,A as default};