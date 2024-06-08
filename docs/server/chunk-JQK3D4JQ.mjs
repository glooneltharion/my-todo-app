import './polyfills.server.mjs';
import{A as g3,Aa as q3,B as k1,Ba as j3,C as q,D as Y2,E as v,F as H,G as K2,H as L3,I as x3,J as F,K as A1,L as b3,M as y3,N as C,O as h2,P as u2,Q as v2,R as d2,S as k2,T as b,U as N3,W as S3,_ as w3,a as d3,aa as k3,b as H3,c as p3,ca as A3,d as z3,da as D3,e as $2,ea as D1,f as N2,fa as T3,g as r2,h as S2,ha as P3,i as o2,ia as F3,j as V3,ja as H2,k as X2,ka as _3,l as L,la as E3,m as w2,ma as B3,n as P,na as R3,o as l2,oa as I3,p as N1,pa as O3,q as S1,r as w1,s as M3,sa as U3,t as f2,u as O,v as C3,w as x,wa as G3,x as p,y as m2,z as W,za as W3}from"./chunk-4NVRR6JB.mjs";import{a as T,b as I}from"./chunk-NDYDZJSS.mjs";var $3=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-nav"]],standalone:!0,features:[b],decls:7,vars:2,consts:[[1,"color"],[1,"btn",3,"routerLink"],["href","/about-page"]],template:function(i,s){i&1&&(v(0,"nav",0)(1,"a",1),C(2," Home "),H(),v(3,"a",1),C(4," About "),H(),v(5,"a",2),C(6,"Click"),H()()),i&2&&(x(),q("routerLink","/"),x(2),q("routerLink","/about-page"))},dependencies:[j3,W3]});let a=c;return a})();var X3=(()=>{let c=class c{constructor(){this.title="My Todo App"}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-header"]],standalone:!0,features:[b],decls:4,vars:1,template:function(i,s){i&1&&(v(0,"header")(1,"h1"),C(2),H(),K2(3,"app-nav"),H()),i&2&&(x(2),h2(" ",s.title," "))},dependencies:[$3],styles:["header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px}"]});let a=c;return a})();function Y3(a,c){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),r.push.apply(r,e)}return r}function f(a){for(var c=1;c<arguments.length;c++){var r=arguments[c]!=null?arguments[c]:{};c%2?Y3(Object(r),!0).forEach(function(e){y(a,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Y3(Object(r)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))})}return a}function o1(a){"@babel/helpers - typeof";return o1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},o1(a)}function B6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function K3(a,c){for(var r=0;r<c.length;r++){var e=c[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function R6(a,c,r){return c&&K3(a.prototype,c),r&&K3(a,r),Object.defineProperty(a,"prototype",{writable:!1}),a}function y(a,c,r){return c in a?Object.defineProperty(a,c,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[c]=r,a}function X1(a,c){return O6(a)||G6(a,c)||C4(a,c)||q6()}function R2(a){return I6(a)||U6(a)||C4(a)||W6()}function I6(a){if(Array.isArray(a))return E1(a)}function O6(a){if(Array.isArray(a))return a}function U6(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function G6(a,c){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var e=[],i=!0,s=!1,n,t;try{for(r=r.call(a);!(i=(n=r.next()).done)&&(e.push(n.value),!(c&&e.length===c));i=!0);}catch(o){s=!0,t=o}finally{try{!i&&r.return!=null&&r.return()}finally{if(s)throw t}}return e}}function C4(a,c){if(a){if(typeof a=="string")return E1(a,c);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E1(a,c)}}function E1(a,c){(c==null||c>a.length)&&(c=a.length);for(var r=0,e=new Array(c);r<c;r++)e[r]=a[r];return e}function W6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Q3=function(){},Y1={},g4={},L4=null,x4={mark:Q3,measure:Q3};try{typeof window<"u"&&(Y1=window),typeof document<"u"&&(g4=document),typeof MutationObserver<"u"&&(L4=MutationObserver),typeof performance<"u"&&(x4=performance)}catch{}var j6=Y1.navigator||{},J3=j6.userAgent,Z3=J3===void 0?"":J3,J=Y1,M=g4,c4=L4,Q2=x4,V5=!!J.document,Y=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",b4=~Z3.indexOf("MSIE")||~Z3.indexOf("Trident/"),J2,Z2,c1,a1,e1,j="___FONT_AWESOME___",B1=16,y4="fa",N4="svg-inline--fa",n2="data-fa-i2svg",R1="data-fa-pseudo-element",$6="data-fa-pseudo-element-pending",K1="data-prefix",Q1="data-icon",a4="fontawesome-i2svg",X6="async",Y6=["HTML","HEAD","STYLE","SCRIPT"],S4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),V="classic",g="sharp",J1=[V,g];function I2(a){return new Proxy(a,{get:function(r,e){return e in r?r[e]:r[V]}})}var P2=I2((J2={},y(J2,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),y(J2,g,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),J2)),F2=I2((Z2={},y(Z2,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),y(Z2,g,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Z2)),_2=I2((c1={},y(c1,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),y(c1,g,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),c1)),K6=I2((a1={},y(a1,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),y(a1,g,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),a1)),Q6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,w4="fa-layers-text",J6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Z6=I2((e1={},y(e1,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),y(e1,g,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),e1)),k4=[1,2,3,4,5,6,7,8,9,10],c0=k4.concat([11,12,13,14,15,16,17,18,19,20]),a0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],i2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E2=new Set;Object.keys(F2[V]).map(E2.add.bind(E2));Object.keys(F2[g]).map(E2.add.bind(E2));var e0=[].concat(J1,R2(E2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",i2.GROUP,i2.SWAP_OPACITY,i2.PRIMARY,i2.SECONDARY]).concat(k4.map(function(a){return"".concat(a,"x")})).concat(c0.map(function(a){return"w-".concat(a)})),D2=J.FontAwesomeConfig||{};function r0(a){var c=M.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function i0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}M&&typeof M.querySelector=="function"&&(e4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],e4.forEach(function(a){var c=X1(a,2),r=c[0],e=c[1],i=i0(r0(r));i!=null&&(D2[e]=i)}));var e4,A4={styleDefault:"solid",familyDefault:"classic",cssPrefix:y4,replacementClass:N4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};D2.familyPrefix&&(D2.cssPrefix=D2.familyPrefix);var M2=f(f({},A4),D2);M2.autoReplaceSvg||(M2.observeMutations=!1);var h={};Object.keys(A4).forEach(function(a){Object.defineProperty(h,a,{enumerable:!0,set:function(r){M2[a]=r,T2.forEach(function(e){return e(h)})},get:function(){return M2[a]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(c){M2.cssPrefix=c,T2.forEach(function(r){return r(h)})},get:function(){return M2.cssPrefix}});J.FontAwesomeConfig=h;var T2=[];function s0(a){return T2.push(a),function(){T2.splice(T2.indexOf(a),1)}}var Q=B1,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n0(a){if(!(!a||!Y)){var c=M.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var r=M.head.childNodes,e=null,i=r.length-1;i>-1;i--){var s=r[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return M.head.insertBefore(c,e),a}}var t0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B2(){for(var a=12,c="";a-- >0;)c+=t0[Math.random()*62|0];return c}function C2(a){for(var c=[],r=(a||[]).length>>>0;r--;)c[r]=a[r];return c}function Z1(a){return a.classList?C2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function D4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o0(a){return Object.keys(a||{}).reduce(function(c,r){return c+"".concat(r,'="').concat(D4(a[r]),'" ')},"").trim()}function m1(a){return Object.keys(a||{}).reduce(function(c,r){return c+"".concat(r,": ").concat(a[r].trim(),";")},"")}function c3(a){return a.size!==G.size||a.x!==G.x||a.y!==G.y||a.rotate!==G.rotate||a.flipX||a.flipY}function l0(a){var c=a.transform,r=a.containerWidth,e=a.iconWidth,i={transform:"translate(".concat(r/2," 256)")},s="translate(".concat(c.x*32,", ").concat(c.y*32,") "),n="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},m={transform:"translate(".concat(e/2*-1," -256)")};return{outer:i,inner:o,path:m}}function f0(a){var c=a.transform,r=a.width,e=r===void 0?B1:r,i=a.height,s=i===void 0?B1:i,n=a.startCentered,t=n===void 0?!1:n,o="";return t&&b4?o+="translate(".concat(c.x/Q-e/2,"em, ").concat(c.y/Q-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/Q,"em), calc(-50% + ").concat(c.y/Q,"em)) "):o+="translate(".concat(c.x/Q,"em, ").concat(c.y/Q,"em) "),o+="scale(".concat(c.size/Q*(c.flipX?-1:1),", ").concat(c.size/Q*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var m0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function T4(){var a=y4,c=N4,r=h.cssPrefix,e=h.replacementClass,i=m0;if(r!==a||e!==c){var s=new RegExp("\\.".concat(a,"\\-"),"g"),n=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");i=i.replace(s,".".concat(r,"-")).replace(n,"--".concat(r,"-")).replace(t,".".concat(e))}return i}var r4=!1;function T1(){h.autoAddCss&&!r4&&(n0(T4()),r4=!0)}var h0={mixout:function(){return{dom:{css:T4,insertCss:T1}}},hooks:function(){return{beforeDOMElementCreation:function(){T1()},beforeI2svg:function(){T1()}}}},$=J||{};$[j]||($[j]={});$[j].styles||($[j].styles={});$[j].hooks||($[j].hooks={});$[j].shims||($[j].shims=[]);var E=$[j],P4=[],u0=function a(){M.removeEventListener("DOMContentLoaded",a),l1=1,P4.map(function(c){return c()})},l1=!1;Y&&(l1=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),l1||M.addEventListener("DOMContentLoaded",u0));function v0(a){Y&&(l1?setTimeout(a,0):P4.push(a))}function O2(a){var c=a.tag,r=a.attributes,e=r===void 0?{}:r,i=a.children,s=i===void 0?[]:i;return typeof a=="string"?D4(a):"<".concat(c," ").concat(o0(e),">").concat(s.map(O2).join(""),"</").concat(c,">")}function i4(a,c,r){if(a&&a[c]&&a[c][r])return{prefix:c,iconName:r,icon:a[c][r]}}var d0=function(c,r){return function(e,i,s,n){return c.call(r,e,i,s,n)}},P1=function(c,r,e,i){var s=Object.keys(c),n=s.length,t=i!==void 0?d0(r,i):r,o,m,l;for(e===void 0?(o=1,l=c[s[0]]):(o=0,l=e);o<n;o++)m=s[o],l=t(l,c[m],m,c);return l};function H0(a){for(var c=[],r=0,e=a.length;r<e;){var i=a.charCodeAt(r++);if(i>=55296&&i<=56319&&r<e){var s=a.charCodeAt(r++);(s&64512)==56320?c.push(((i&1023)<<10)+(s&1023)+65536):(c.push(i),r--)}else c.push(i)}return c}function I1(a){var c=H0(a);return c.length===1?c[0].toString(16):null}function p0(a,c){var r=a.length,e=a.charCodeAt(c),i;return e>=55296&&e<=56319&&r>c+1&&(i=a.charCodeAt(c+1),i>=56320&&i<=57343)?(e-55296)*1024+i-56320+65536:e}function s4(a){return Object.keys(a).reduce(function(c,r){var e=a[r],i=!!e.icon;return i?c[e.iconName]=e.icon:c[r]=e,c},{})}function O1(a,c){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=r.skipHooks,i=e===void 0?!1:e,s=s4(c);typeof E.hooks.addPack=="function"&&!i?E.hooks.addPack(a,s4(c)):E.styles[a]=f(f({},E.styles[a]||{}),s),a==="fas"&&O1("fa",c)}var r1,i1,s1,p2=E.styles,z0=E.shims,V0=(r1={},y(r1,V,Object.values(_2[V])),y(r1,g,Object.values(_2[g])),r1),a3=null,F4={},_4={},E4={},B4={},R4={},M0=(i1={},y(i1,V,Object.keys(P2[V])),y(i1,g,Object.keys(P2[g])),i1);function C0(a){return~e0.indexOf(a)}function g0(a,c){var r=c.split("-"),e=r[0],i=r.slice(1).join("-");return e===a&&i!==""&&!C0(i)?i:null}var I4=function(){var c=function(s){return P1(p2,function(n,t,o){return n[o]=P1(t,s,{}),n},{})};F4=c(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){i[o.toString(16)]=n})}return i}),_4=c(function(i,s,n){if(i[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){i[o]=n})}return i}),R4=c(function(i,s,n){var t=s[2];return i[n]=n,t.forEach(function(o){i[o]=n}),i});var r="far"in p2||h.autoFetchSvg,e=P1(z0,function(i,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!r&&(t="fas"),typeof n=="string"&&(i.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:t,iconName:o}),i},{names:{},unicodes:{}});E4=e.names,B4=e.unicodes,a3=h1(h.styleDefault,{family:h.familyDefault})};s0(function(a){a3=h1(a.styleDefault,{family:h.familyDefault})});I4();function e3(a,c){return(F4[a]||{})[c]}function L0(a,c){return(_4[a]||{})[c]}function s2(a,c){return(R4[a]||{})[c]}function O4(a){return E4[a]||{prefix:null,iconName:null}}function x0(a){var c=B4[a],r=e3("fas",a);return c||(r?{prefix:"fas",iconName:r}:null)||{prefix:null,iconName:null}}function Z(){return a3}var r3=function(){return{prefix:null,iconName:null,rest:[]}};function h1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.family,e=r===void 0?V:r,i=P2[e][a],s=F2[e][a]||F2[e][i],n=a in E.styles?a:null;return s||n||null}var n4=(s1={},y(s1,V,Object.keys(_2[V])),y(s1,g,Object.keys(_2[g])),s1);function u1(a){var c,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.skipLookups,i=e===void 0?!1:e,s=(c={},y(c,V,"".concat(h.cssPrefix,"-").concat(V)),y(c,g,"".concat(h.cssPrefix,"-").concat(g)),c),n=null,t=V;(a.includes(s[V])||a.some(function(m){return n4[V].includes(m)}))&&(t=V),(a.includes(s[g])||a.some(function(m){return n4[g].includes(m)}))&&(t=g);var o=a.reduce(function(m,l){var u=g0(h.cssPrefix,l);if(p2[l]?(l=V0[t].includes(l)?K6[t][l]:l,n=l,m.prefix=l):M0[t].indexOf(l)>-1?(n=l,m.prefix=h1(l,{family:t})):u?m.iconName=u:l!==h.replacementClass&&l!==s[V]&&l!==s[g]&&m.rest.push(l),!i&&m.prefix&&m.iconName){var d=n==="fa"?O4(m.iconName):{},z=s2(m.prefix,m.iconName);d.prefix&&(n=null),m.iconName=d.iconName||z||m.iconName,m.prefix=d.prefix||m.prefix,m.prefix==="far"&&!p2.far&&p2.fas&&!h.autoFetchSvg&&(m.prefix="fas")}return m},r3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===g&&(p2.fass||h.autoFetchSvg)&&(o.prefix="fass",o.iconName=s2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=Z()||"fas"),o}var b0=function(){function a(){B6(this,a),this.definitions={}}return R6(a,[{key:"add",value:function(){for(var r=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){r.definitions[t]=f(f({},r.definitions[t]||{}),n[t]),O1(t,n[t]);var o=_2[V][t];o&&O1(o,n[t]),I4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,e){var i=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(i).map(function(s){var n=i[s],t=n.prefix,o=n.iconName,m=n.icon,l=m[2];r[t]||(r[t]={}),l.length>0&&l.forEach(function(u){typeof u=="string"&&(r[t][u]=m)}),r[t][o]=m}),r}}]),a}(),t4=[],z2={},V2={},y0=Object.keys(V2);function N0(a,c){var r=c.mixoutsTo;return t4=a,z2={},Object.keys(V2).forEach(function(e){y0.indexOf(e)===-1&&delete V2[e]}),t4.forEach(function(e){var i=e.mixout?e.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(r[n]=i[n]),o1(i[n])==="object"&&Object.keys(i[n]).forEach(function(t){r[n]||(r[n]={}),r[n][t]=i[n][t]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){z2[n]||(z2[n]=[]),z2[n].push(s[n])})}e.provides&&e.provides(V2)}),r}function U1(a,c){for(var r=arguments.length,e=new Array(r>2?r-2:0),i=2;i<r;i++)e[i-2]=arguments[i];var s=z2[a]||[];return s.forEach(function(n){c=n.apply(null,[c].concat(e))}),c}function t2(a){for(var c=arguments.length,r=new Array(c>1?c-1:0),e=1;e<c;e++)r[e-1]=arguments[e];var i=z2[a]||[];i.forEach(function(s){s.apply(null,r)})}function X(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return V2[a]?V2[a].apply(null,c):void 0}function G1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,r=a.prefix||Z();if(c)return c=s2(r,c)||c,i4(U4.definitions,r,c)||i4(E.styles,r,c)}var U4=new b0,S0=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,t2("noAuto")},w0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Y?(t2("beforeI2svg",c),X("pseudoElements2svg",c),X("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=c.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,v0(function(){A0({autoReplaceSvgRoot:r}),t2("watch",c)})}},k0={icon:function(c){if(c===null)return null;if(o1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:s2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var r=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=h1(c[0]);return{prefix:e,iconName:s2(e,r)||r}}if(typeof c=="string"&&(c.indexOf("".concat(h.cssPrefix,"-"))>-1||c.match(Q6))){var i=u1(c.split(" "),{skipLookups:!0});return{prefix:i.prefix||Z(),iconName:s2(i.prefix,i.iconName)||i.iconName}}if(typeof c=="string"){var s=Z();return{prefix:s,iconName:s2(s,c)||c}}}},A={noAuto:S0,config:h,dom:w0,parse:k0,library:U4,findIconDefinition:G1,toHtml:O2},A0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=c.autoReplaceSvgRoot,e=r===void 0?M:r;(Object.keys(E.styles).length>0||h.autoFetchSvg)&&Y&&h.autoReplaceSvg&&A.dom.i2svg({node:e})};function v1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return O2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(Y){var e=M.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function D0(a){var c=a.children,r=a.main,e=a.mask,i=a.attributes,s=a.styles,n=a.transform;if(c3(n)&&r.found&&!e.found){var t=r.width,o=r.height,m={x:t/o/2,y:.5};i.style=m1(f(f({},s),{},{"transform-origin":"".concat(m.x+n.x/16,"em ").concat(m.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:c}]}function T0(a){var c=a.prefix,r=a.iconName,e=a.children,i=a.attributes,s=a.symbol,n=s===!0?"".concat(c,"-").concat(h.cssPrefix,"-").concat(r):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},i),{},{id:n}),children:e}]}]}function i3(a){var c=a.icons,r=c.main,e=c.mask,i=a.prefix,s=a.iconName,n=a.transform,t=a.symbol,o=a.title,m=a.maskId,l=a.titleId,u=a.extra,d=a.watchable,z=d===void 0?!1:d,S=e.found?e:r,D=S.width,_=S.height,B=i==="fak",N=[h.replacementClass,s?"".concat(h.cssPrefix,"-").concat(s):""].filter(function(K){return u.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":i,"data-icon":s,class:N,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(D," ").concat(_)})},R=B&&!~u.classes.indexOf("fa-fw")?{width:"".concat(D/_*16*.0625,"em")}:{};z&&(w.attributes[n2]=""),o&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(l||B2())},children:[o]}),delete w.attributes.title);var k=f(f({},w),{},{prefix:i,iconName:s,main:r,mask:e,maskId:m,transform:n,symbol:t,styles:f(f({},R),u.styles)}),a2=e.found&&r.found?X("generateAbstractMask",k)||{children:[],attributes:{}}:X("generateAbstractIcon",k)||{children:[],attributes:{}},e2=a2.children,y1=a2.attributes;return k.children=e2,k.attributes=y1,t?T0(k):D0(k)}function o4(a){var c=a.content,r=a.width,e=a.height,i=a.transform,s=a.title,n=a.extra,t=a.watchable,o=t===void 0?!1:t,m=f(f(f({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(m[n2]="");var l=f({},n.styles);c3(i)&&(l.transform=f0({transform:i,startCentered:!0,width:r,height:e}),l["-webkit-transform"]=l.transform);var u=m1(l);u.length>0&&(m.style=u);var d=[];return d.push({tag:"span",attributes:m,children:[c]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function P0(a){var c=a.content,r=a.title,e=a.extra,i=f(f(f({},e.attributes),r?{title:r}:{}),{},{class:e.classes.join(" ")}),s=m1(e.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[c]}),r&&n.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),n}var F1=E.styles;function W1(a){var c=a[0],r=a[1],e=a.slice(4),i=X1(e,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(i2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(i2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(i2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:c,height:r,icon:n}}var F0={found:!1,width:512,height:512};function _0(a,c){!S4&&!h.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function q1(a,c){var r=c;return c==="fa"&&h.styleDefault!==null&&(c=Z()),new Promise(function(e,i){var s={found:!1,width:512,height:512,icon:X("missingIconAbstract")||{}};if(r==="fa"){var n=O4(a)||{};a=n.iconName||a,c=n.prefix||c}if(a&&c&&F1[c]&&F1[c][a]){var t=F1[c][a];return e(W1(t))}_0(a,c),e(f(f({},F0),{},{icon:h.showMissingIcons&&a?X("missingIconAbstract")||{}:{}}))})}var l4=function(){},j1=h.measurePerformance&&Q2&&Q2.mark&&Q2.measure?Q2:{mark:l4,measure:l4},A2='FA "6.5.2"',E0=function(c){return j1.mark("".concat(A2," ").concat(c," begins")),function(){return G4(c)}},G4=function(c){j1.mark("".concat(A2," ").concat(c," ends")),j1.measure("".concat(A2," ").concat(c),"".concat(A2," ").concat(c," begins"),"".concat(A2," ").concat(c," ends"))},s3={begin:E0,end:G4},n1=function(){};function f4(a){var c=a.getAttribute?a.getAttribute(n2):null;return typeof c=="string"}function B0(a){var c=a.getAttribute?a.getAttribute(K1):null,r=a.getAttribute?a.getAttribute(Q1):null;return c&&r}function R0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(h.replacementClass)}function I0(){if(h.autoReplaceSvg===!0)return t1.replace;var a=t1[h.autoReplaceSvg];return a||t1.replace}function O0(a){return M.createElementNS("http://www.w3.org/2000/svg",a)}function U0(a){return M.createElement(a)}function W4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.ceFn,e=r===void 0?a.tag==="svg"?O0:U0:r;if(typeof a=="string")return M.createTextNode(a);var i=e(a.tag);Object.keys(a.attributes||[]).forEach(function(n){i.setAttribute(n,a.attributes[n])});var s=a.children||[];return s.forEach(function(n){i.appendChild(W4(n,{ceFn:e}))}),i}function G0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var t1={replace:function(c){var r=c[0];if(r.parentNode)if(c[1].forEach(function(i){r.parentNode.insertBefore(W4(i),r)}),r.getAttribute(n2)===null&&h.keepOriginalSource){var e=M.createComment(G0(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(c){var r=c[0],e=c[1];if(~Z1(r).indexOf(h.replacementClass))return t1.replace(c);var i=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(t,o){return o===h.replacementClass||o.match(i)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(t){return O2(t)}).join(`
`);r.setAttribute(n2,""),r.innerHTML=n}};function m4(a){a()}function q4(a,c){var r=typeof c=="function"?c:n1;if(a.length===0)r();else{var e=m4;h.mutateApproach===X6&&(e=J.requestAnimationFrame||m4),e(function(){var i=I0(),s=s3.begin("mutate");a.map(i),s(),r()})}}var n3=!1;function j4(){n3=!0}function $1(){n3=!1}var f1=null;function h4(a){if(c4&&h.observeMutations){var c=a.treeCallback,r=c===void 0?n1:c,e=a.nodeCallback,i=e===void 0?n1:e,s=a.pseudoElementsCallback,n=s===void 0?n1:s,t=a.observeMutationsRoot,o=t===void 0?M:t;f1=new c4(function(m){if(!n3){var l=Z();C2(m).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!f4(u.addedNodes[0])&&(h.searchPseudoElements&&n(u.target),r(u.target)),u.type==="attributes"&&u.target.parentNode&&h.searchPseudoElements&&n(u.target.parentNode),u.type==="attributes"&&f4(u.target)&&~a0.indexOf(u.attributeName))if(u.attributeName==="class"&&B0(u.target)){var d=u1(Z1(u.target)),z=d.prefix,S=d.iconName;u.target.setAttribute(K1,z||l),S&&u.target.setAttribute(Q1,S)}else R0(u.target)&&i(u.target)})}}),Y&&f1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W0(){f1&&f1.disconnect()}function q0(a){var c=a.getAttribute("style"),r=[];return c&&(r=c.split(";").reduce(function(e,i){var s=i.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(e[n]=t.join(":").trim()),e},{})),r}function j0(a){var c=a.getAttribute("data-prefix"),r=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",i=u1(Z1(a));return i.prefix||(i.prefix=Z()),c&&r&&(i.prefix=c,i.iconName=r),i.iconName&&i.prefix||(i.prefix&&e.length>0&&(i.iconName=L0(i.prefix,a.innerText)||e3(i.prefix,I1(a.innerText))),!i.iconName&&h.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=a.firstChild.data)),i}function $0(a){var c=C2(a.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),r=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return h.autoA11y&&(r?c["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||B2()):(c["aria-hidden"]="true",c.focusable="false")),c}function X0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function u4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},r=j0(a),e=r.iconName,i=r.prefix,s=r.rest,n=$0(a),t=U1("parseNodeAttributes",{},a),o=c.styleParser?q0(a):[];return f({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var Y0=E.styles;function $4(a){var c=h.autoReplaceSvg==="nest"?u4(a,{styleParser:!1}):u4(a);return~c.extra.classes.indexOf(w4)?X("generateLayersText",a,c):X("generateSvgReplacementMutation",a,c)}var c2=new Set;J1.map(function(a){c2.add("fa-".concat(a))});Object.keys(P2[V]).map(c2.add.bind(c2));Object.keys(P2[g]).map(c2.add.bind(c2));c2=R2(c2);function v4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Y)return Promise.resolve();var r=M.documentElement.classList,e=function(u){return r.add("".concat(a4,"-").concat(u))},i=function(u){return r.remove("".concat(a4,"-").concat(u))},s=h.autoFetchSvg?c2:J1.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Y0));s.includes("fa")||s.push("fa");var n=[".".concat(w4,":not([").concat(n2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(n2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=C2(a.querySelectorAll(n))}catch{}if(t.length>0)e("pending"),i("complete");else return Promise.resolve();var o=s3.begin("onTree"),m=t.reduce(function(l,u){try{var d=$4(u);d&&l.push(d)}catch(z){S4||z.name==="MissingIcon"&&console.error(z)}return l},[]);return new Promise(function(l,u){Promise.all(m).then(function(d){q4(d,function(){e("active"),e("complete"),i("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(d){o(),u(d)})})}function K0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$4(a).then(function(r){r&&q4([r],c)})}function Q0(a){return function(c){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:G1(c||{}),i=r.mask;return i&&(i=(i||{}).icon?i:G1(i||{})),a(e,f(f({},r),{},{mask:i}))}}var J0=function(c){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=r.transform,i=e===void 0?G:e,s=r.symbol,n=s===void 0?!1:s,t=r.mask,o=t===void 0?null:t,m=r.maskId,l=m===void 0?null:m,u=r.title,d=u===void 0?null:u,z=r.titleId,S=z===void 0?null:z,D=r.classes,_=D===void 0?[]:D,B=r.attributes,N=B===void 0?{}:B,w=r.styles,R=w===void 0?{}:w;if(c){var k=c.prefix,a2=c.iconName,e2=c.icon;return v1(f({type:"icon"},c),function(){return t2("beforeDOMElementCreation",{iconDefinition:c,params:r}),h.autoA11y&&(d?N["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(S||B2()):(N["aria-hidden"]="true",N.focusable="false")),i3({icons:{main:W1(e2),mask:o?W1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:a2,transform:f(f({},G),i),symbol:n,title:d,maskId:l,titleId:S,extra:{attributes:N,styles:R,classes:_}})})}},Z0={mixout:function(){return{icon:Q0(J0)}},hooks:function(){return{mutationObserverCallbacks:function(r){return r.treeCallback=v4,r.nodeCallback=K0,r}}},provides:function(c){c.i2svg=function(r){var e=r.node,i=e===void 0?M:e,s=r.callback,n=s===void 0?function(){}:s;return v4(i,n)},c.generateSvgReplacementMutation=function(r,e){var i=e.iconName,s=e.title,n=e.titleId,t=e.prefix,o=e.transform,m=e.symbol,l=e.mask,u=e.maskId,d=e.extra;return new Promise(function(z,S){Promise.all([q1(i,t),l.iconName?q1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(D){var _=X1(D,2),B=_[0],N=_[1];z([r,i3({icons:{main:B,mask:N},prefix:t,iconName:i,transform:o,symbol:m,maskId:u,title:s,titleId:n,extra:d,watchable:!0})])}).catch(S)})},c.generateAbstractIcon=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.transform,t=r.styles,o=m1(t);o.length>0&&(i.style=o);var m;return c3(n)&&(m=X("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(m||s.icon),{children:e,attributes:i}}}},c8={mixout:function(){return{layer:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.classes,s=i===void 0?[]:i;return v1({type:"layer"},function(){t2("beforeDOMElementCreation",{assembler:r,params:e});var n=[];return r(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(R2(s)).join(" ")},children:n}]})}}}},a8={mixout:function(){return{counter:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.title,s=i===void 0?null:i,n=e.classes,t=n===void 0?[]:n,o=e.attributes,m=o===void 0?{}:o,l=e.styles,u=l===void 0?{}:l;return v1({type:"counter",content:r},function(){return t2("beforeDOMElementCreation",{content:r,params:e}),P0({content:r.toString(),title:s,extra:{attributes:m,styles:u,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(R2(t))}})})}}}},e8={mixout:function(){return{text:function(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.transform,s=i===void 0?G:i,n=e.title,t=n===void 0?null:n,o=e.classes,m=o===void 0?[]:o,l=e.attributes,u=l===void 0?{}:l,d=e.styles,z=d===void 0?{}:d;return v1({type:"text",content:r},function(){return t2("beforeDOMElementCreation",{content:r,params:e}),o4({content:r,transform:f(f({},G),s),title:t,extra:{attributes:u,styles:z,classes:["".concat(h.cssPrefix,"-layers-text")].concat(R2(m))}})})}}},provides:function(c){c.generateLayersText=function(r,e){var i=e.title,s=e.transform,n=e.extra,t=null,o=null;if(b4){var m=parseInt(getComputedStyle(r).fontSize,10),l=r.getBoundingClientRect();t=l.width/m,o=l.height/m}return h.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([r,o4({content:r.innerHTML,width:t,height:o,transform:s,title:i,extra:n,watchable:!0})])}}},r8=new RegExp('"',"ug"),d4=[1105920,1112319];function i8(a){var c=a.replace(r8,""),r=p0(c,0),e=r>=d4[0]&&r<=d4[1],i=c.length===2?c[0]===c[1]:!1;return{value:I1(i?c[0]:c),isSecondary:e||i}}function H4(a,c){var r="".concat($6).concat(c.replace(":","-"));return new Promise(function(e,i){if(a.getAttribute(r)!==null)return e();var s=C2(a.children),n=s.filter(function(e2){return e2.getAttribute(R1)===c})[0],t=J.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(J6),m=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return a.removeChild(n),e();if(o&&l!=="none"&&l!==""){var u=t.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?g:V,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?F2[d][o[2].toLowerCase()]:Z6[d][m],S=i8(u),D=S.value,_=S.isSecondary,B=o[0].startsWith("FontAwesome"),N=e3(z,D),w=N;if(B){var R=x0(D);R.iconName&&R.prefix&&(N=R.iconName,z=R.prefix)}if(N&&!_&&(!n||n.getAttribute(K1)!==z||n.getAttribute(Q1)!==w)){a.setAttribute(r,w),n&&a.removeChild(n);var k=X0(),a2=k.extra;a2.attributes[R1]=c,q1(N,z).then(function(e2){var y1=i3(f(f({},k),{},{icons:{main:e2,mask:r3()},prefix:z,iconName:w,extra:a2,watchable:!0})),K=M.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(K,a.firstChild):a.appendChild(K),K.outerHTML=y1.map(function(E6){return O2(E6)}).join(`
`),a.removeAttribute(r),e()}).catch(i)}else e()}else e()})}function s8(a){return Promise.all([H4(a,"::before"),H4(a,"::after")])}function n8(a){return a.parentNode!==document.head&&!~Y6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(R1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function p4(a){if(Y)return new Promise(function(c,r){var e=C2(a.querySelectorAll("*")).filter(n8).map(s8),i=s3.begin("searchPseudoElements");j4(),Promise.all(e).then(function(){i(),$1(),c()}).catch(function(){i(),$1(),r()})})}var t8={hooks:function(){return{mutationObserverCallbacks:function(r){return r.pseudoElementsCallback=p4,r}}},provides:function(c){c.pseudoElements2svg=function(r){var e=r.node,i=e===void 0?M:e;h.searchPseudoElements&&p4(i)}}},z4=!1,o8={mixout:function(){return{dom:{unwatch:function(){j4(),z4=!0}}}},hooks:function(){return{bootstrap:function(){h4(U1("mutationObserverCallbacks",{}))},noAuto:function(){W0()},watch:function(r){var e=r.observeMutationsRoot;z4?$1():h4(U1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},V4=function(c){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,i){var s=i.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return e.flipX=!0,e;if(n&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(n){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},r)},l8={mixout:function(){return{parse:{transform:function(r){return V4(r)}}}},hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-transform");return i&&(r.transform=V4(i)),r}}},provides:function(c){c.generateAbstractTransformGrouping=function(r){var e=r.main,i=r.transform,s=r.containerWidth,n=r.iconWidth,t={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),l="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(m," ").concat(l)},d={transform:"translate(".concat(n/2*-1," -256)")},z={outer:t,inner:u,path:d};return{tag:"g",attributes:f({},z.outer),children:[{tag:"g",attributes:f({},z.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),z.path)}]}]}}}},_1={x:0,y:0,width:"100%",height:"100%"};function M4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function f8(a){return a.tag==="g"?a.children:[a]}var m8={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-mask"),s=i?u1(i.split(" ").map(function(n){return n.trim()})):r3();return s.prefix||(s.prefix=Z()),r.mask=s,r.maskId=e.getAttribute("data-fa-mask-id"),r}}},provides:function(c){c.generateAbstractMask=function(r){var e=r.children,i=r.attributes,s=r.main,n=r.mask,t=r.maskId,o=r.transform,m=s.width,l=s.icon,u=n.width,d=n.icon,z=l0({transform:o,containerWidth:u,iconWidth:m}),S={tag:"rect",attributes:f(f({},_1),{},{fill:"white"})},D=l.children?{children:l.children.map(M4)}:{},_={tag:"g",attributes:f({},z.inner),children:[M4(f({tag:l.tag,attributes:f(f({},l.attributes),z.path)},D))]},B={tag:"g",attributes:f({},z.outer),children:[_]},N="mask-".concat(t||B2()),w="clip-".concat(t||B2()),R={tag:"mask",attributes:f(f({},_1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,B]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:f8(d)},R]};return e.push(k,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(N,")")},_1)}),{children:e,attributes:i}}}},h8={provides:function(c){var r=!1;J.matchMedia&&(r=J.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=f(f({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:f(f({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||t.children.push({tag:"animate",attributes:f(f({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:f(f({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:f(f({},n),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:f(f({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},u8={hooks:function(){return{parseNodeAttributes:function(r,e){var i=e.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return r.symbol=s,r}}}},v8=[h0,Z0,c8,a8,e8,t8,o8,l8,m8,h8,u8];N0(v8,{mixoutsTo:A});var M5=A.noAuto,X4=A.config,C5=A.library,Y4=A.dom,K4=A.parse,g5=A.findIconDefinition,L5=A.toHtml,Q4=A.icon,x5=A.layer,d8=A.text,H8=A.counter;var p8=["*"],z8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},V8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},M8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(r=>c[r]?r:null).filter(r=>r)},t3=new WeakSet,J4="fa-auto-css";function C8(a,c){if(!c.autoAddCss||t3.has(a))return;if(a.getElementById(J4)!=null){c.autoAddCss=!1,t3.add(a);return}let r=a.createElement("style");r.setAttribute("type","text/css"),r.setAttribute("id",J4),r.innerHTML=Y4.css();let e=a.head.childNodes,i=null;for(let s=e.length-1;s>-1;s--){let n=e[s],t=n.nodeName.toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(i=n)}a.head.insertBefore(r,i),c.autoAddCss=!1,t3.add(a)}var g8=a=>a.prefix!==void 0&&a.iconName!==void 0,L8=(a,c)=>g8(a)?a:Array.isArray(a)&&a.length===2?{prefix:a[0],iconName:a[1]}:{prefix:c,iconName:a},x8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){X4.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),b8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let i of e){i.prefix in this.definitions||(this.definitions[i.prefix]={}),this.definitions[i.prefix][i.iconName]=i;for(let s of i.icon[2])typeof s=="string"&&(this.definitions[i.prefix][s]=i)}}addIconPacks(...e){for(let i of e){let s=Object.keys(i).map(n=>i[n]);this.addIcons(...s)}}getIconDefinition(e,i){return e in this.definitions&&i in this.definitions[e]?this.definitions[e][i]:null}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),y8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=P({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[l2]});let a=c;return a})(),N8=(()=>{let c=class c{constructor(e,i){this.renderer=e,this.elementRef=i}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(i){return new(i||c)(p(m2),p(f2))},c.\u0275cmp=L({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[l2,b],ngContentSelectors:p8,decls:1,vars:0,template:function(i,s){i&1&&(b3(),y3(0))},encapsulation:2});let a=c;return a})(),Z4=(()=>{let c=class c{constructor(e,i,s,n,t){this.sanitizer=e,this.config=i,this.iconLibrary=s,this.stackItem=n,this.document=X2(T3),t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){V8();return}if(e){let i=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(i!=null){let s=this.buildParams();C8(this.document,this.config);let n=Q4(i,s);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let i=L8(e,this.config.defaultPrefix);if("icon"in i)return i;let s=this.iconLibrary.getIconDefinition(i.prefix,i.iconName);return s??(z8(i),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},i=typeof this.transform=="string"?K4.transform(this.transform):this.transform;return{title:this.title,transform:i,classes:M8(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole}}}};c.\u0275fac=function(i){return new(i||c)(p(I3),p(x8),p(b8),p(y8,8),p(N8,8))},c.\u0275cmp=L({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(i,s){i&2&&(x3("innerHTML",s.renderedIconHTML,C3),k1("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[l2,b],decls:0,vars:0,template:function(i,s){},encapsulation:2});let a=c;return a})();var c6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=w2({type:c}),c.\u0275inj=S2({});let a=c;return a})();var w8={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var a6=w8;var A8=(a,c,r,e)=>({open:a,"in-progress":c,done:r,testing:e}),e6=(()=>{let c=class c{constructor(){this.onDeleteTodo=new O,this.onToggleStatus=new O,this.faTimes=a6}onDelete(e){this.onDeleteTodo.emit(e)}onToggle(e){this.onToggleStatus.emit(e)}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-todo"]],inputs:{todo:"todo"},outputs:{onDeleteTodo:"onDeleteTodo",onToggleStatus:"onToggleStatus"},standalone:!0,features:[b],decls:8,vars:10,consts:[[1,"todo",3,"dblclick"],[1,"status",3,"ngClass"],[3,"click","icon"]],template:function(i,s){i&1&&(v(0,"div",0),F("dblclick",function(){return s.onToggle(s.todo)}),v(1,"span",1),C(2),H(),v(3,"h3"),C(4),v(5,"fa-icon",2),F("click",function(){return s.onDelete(s.todo)}),H()(),v(6,"p"),C(7),H()()),i&2&&(x(),q("ngClass",N3(5,A8,s.todo.status==="OPEN",s.todo.status==="PROGRESS",s.todo.status==="DONE",s.todo.status==="TESTING")),x(),h2(" ",s.todo.status," "),x(2),h2(" ",s.todo.text," "),x(),q("icon",s.faTimes),x(2),h2(" ",s.todo.deadline," "))},dependencies:[H2,P3,c6,Z4],styles:[".todo[_ngcontent-%COMP%]{background:#f4f4f4;margin:5px;padding:10px 20px;cursor:pointer}.status[_ngcontent-%COMP%]{display:inline-block;margin:5px 0;background:#000;color:#fff;border:none;padding:8px 16px;border-radius:5px;font-weight:800}.open[_ngcontent-%COMP%]{background-color:#fdf496}.in-progress[_ngcontent-%COMP%]{background-color:#b3d9f9}.done[_ngcontent-%COMP%]{background-color:#98ffcc}.testing[_ngcontent-%COMP%]{background-color:#b36bf9}.todo[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:red}.todo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}"]});let a=c;return a})();var f6=(()=>{let c=class c{constructor(e,i){this._renderer=e,this._elementRef=i,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(i){return new(i||c)(p(m2),p(f2))},c.\u0275dir=P({type:c});let a=c;return a})(),m6=(()=>{let c=class c extends f6{};c.\u0275fac=(()=>{let e;return function(s){return(e||(e=w1(c)))(s||c)}})(),c.\u0275dir=P({type:c,features:[W]});let a=c;return a})(),l3=new o2("");var D8={provide:l3,useExisting:N2(()=>g1),multi:!0};function T8(){let a=D1()?D1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var P8=new o2(""),g1=(()=>{let c=class c extends f6{constructor(e,i,s){super(e,i),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!T8())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(i){return new(i||c)(p(m2),p(f2),p(P8,8))},c.\u0275dir=P({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,s){i&1&&F("input",function(t){return s._handleInput(t.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(t){return s._compositionEnd(t.target.value)})},features:[k2([D8]),W]});let a=c;return a})();var h6=new o2(""),u6=new o2("");function v6(a){return a!=null}function d6(a){return S3(a)?H3(a):a}function H6(a){let c={};return a.forEach(r=>{c=r!=null?T(T({},c),r):c}),Object.keys(c).length===0?null:c}function p6(a,c){return c.map(r=>r(a))}function F8(a){return!a.validate}function z6(a){return a.map(c=>F8(c)?c:r=>c.validate(r))}function _8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(r){return H6(p6(r,c))}}function f3(a){return a!=null?_8(z6(a)):null}function E8(a){if(!a)return null;let c=a.filter(v6);return c.length==0?null:function(r){let e=p6(r,c).map(d6);return z3(e).pipe(p3(H6))}}function m3(a){return a!=null?E8(z6(a)):null}function r6(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function B8(a){return a._rawValidators}function R8(a){return a._rawAsyncValidators}function o3(a){return a?Array.isArray(a)?a:[a]:[]}function H1(a,c){return Array.isArray(a)?a.includes(c):a===c}function i6(a,c){let r=o3(c);return o3(a).forEach(i=>{H1(r,i)||r.push(i)}),r}function s6(a,c){return o3(c).filter(r=>!H1(a,r))}var p1=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=f3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=m3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,r){return this.control?this.control.hasError(c,r):!1}getError(c,r){return this.control?this.control.getError(c,r):null}},x2=class extends p1{get formDirective(){return null}get path(){return null}},b2=class extends p1{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},z1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},I8={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},o7=I(T({},I8),{"[class.ng-submitted]":"isSubmitted"}),V6=(()=>{let c=class c extends z1{constructor(e){super(e)}};c.\u0275fac=function(i){return new(i||c)(p(b2,2))},c.\u0275dir=P({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,s){i&2&&Y2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[W]});let a=c;return a})(),M6=(()=>{let c=class c extends z1{constructor(e){super(e)}};c.\u0275fac=function(i){return new(i||c)(p(x2,10))},c.\u0275dir=P({type:c,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,s){i&2&&Y2("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[W]});let a=c;return a})();var U2="VALID",d1="INVALID",g2="PENDING",G2="DISABLED",y2=class{},V1=class extends y2{constructor(c,r){super(),this.value=c,this.source=r}},q2=class extends y2{constructor(c,r){super(),this.pristine=c,this.source=r}},j2=class extends y2{constructor(c,r){super(),this.touched=c,this.source=r}},L2=class extends y2{constructor(c,r){super(),this.status=c,this.source=r}};function C6(a){return(L1(a)?a.validators:a)||null}function O8(a){return Array.isArray(a)?f3(a):a||null}function g6(a,c){return(L1(c)?c.asyncValidators:a)||null}function U8(a){return Array.isArray(a)?m3(a):a||null}function L1(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}function G8(a,c,r){let e=a.controls;if(!(c?Object.keys(e):e).length)throw new $2(1e3,"");if(!e[r])throw new $2(1001,"")}function W8(a,c,r){a._forEachChild((e,i)=>{if(r[i]===void 0)throw new $2(1002,"")})}var M1=class{constructor(c,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new d3,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===U2}get invalid(){return this.status===d1}get pending(){return this.status==g2}get disabled(){return this.status===G2}get enabled(){return this.status!==G2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(i6(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(i6(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(s6(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(s6(c,this._rawAsyncValidators))}hasValidator(c){return H1(this._rawValidators,c)}hasAsyncValidator(c){return H1(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){let r=this.touched===!1;this.touched=!0;let e=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsTouched(I(T({},c),{sourceControl:e})),r&&c.emitEvent!==!1&&this._events.next(new j2(!0,e))}markAllAsTouched(c={}){this.markAsTouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:this}),this._forEachChild(r=>r.markAllAsTouched(c))}markAsUntouched(c={}){let r=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=c.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:c.emitEvent,sourceControl:e})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,e),r&&c.emitEvent!==!1&&this._events.next(new j2(!1,e))}markAsDirty(c={}){let r=this.pristine===!0;this.pristine=!1;let e=c.sourceControl??this;this._parent&&!c.onlySelf&&this._parent.markAsDirty(I(T({},c),{sourceControl:e})),r&&c.emitEvent!==!1&&this._events.next(new q2(!1,e))}markAsPristine(c={}){let r=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=c.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:c.emitEvent})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c,e),r&&c.emitEvent!==!1&&this._events.next(new q2(!0,e))}markAsPending(c={}){this.status=g2;let r=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new L2(this.status,r)),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.markAsPending(I(T({},c),{sourceControl:r}))}disable(c={}){let r=this._parentMarkedDirty(c.onlySelf);this.status=G2,this.errors=null,this._forEachChild(i=>{i.disable(I(T({},c),{onlySelf:!0}))}),this._updateValue();let e=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new V1(this.value,e)),this._events.next(new L2(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(I(T({},c),{skipPristineCheck:r}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(c={}){let r=this._parentMarkedDirty(c.onlySelf);this.status=U2,this._forEachChild(e=>{e.enable(I(T({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(I(T({},c),{skipPristineCheck:r}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c,r){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine({},r),this._parent._updateTouched({},r))}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===U2||this.status===g2)&&this._runAsyncValidator(e,c.emitEvent)}let r=c.sourceControl??this;c.emitEvent!==!1&&(this._events.next(new V1(this.value,r)),this._events.next(new L2(this.status,r)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(I(T({},c),{sourceControl:r}))}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?G2:U2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c,r){if(this.asyncValidator){this.status=g2,this._hasOwnPendingAsyncValidator={emitEvent:r!==!1};let e=d6(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:r,shouldHaveEmitted:c})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let c=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,c}return!1}setErrors(c,r={}){this.errors=c,this._updateControlsErrors(r.emitEvent!==!1,this,r.shouldHaveEmitted)}get(c){let r=c;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((e,i)=>e&&e._find(i),this)}getError(c,r){let e=r?this.get(r):this;return e&&e.errors?e.errors[c]:null}hasError(c,r){return!!this.getError(c,r)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c,r,e){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),(c||e)&&this._events.next(new L2(this.status,r)),this._parent&&this._parent._updateControlsErrors(c,r,e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?G2:this.errors?d1:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(g2)?g2:this._anyControlsHaveStatus(d1)?d1:U2}_anyControlsHaveStatus(c){return this._anyControls(r=>r.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c,r){let e=!this._anyControlsDirty(),i=this.pristine!==e;this.pristine=e,this._parent&&!c.onlySelf&&this._parent._updatePristine(c,r),i&&this._events.next(new q2(this.pristine,r))}_updateTouched(c={},r){this.touched=this._anyControlsTouched(),this._events.next(new j2(this.touched,r)),this._parent&&!c.onlySelf&&this._parent._updateTouched(c,r)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){L1(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let r=this._parent&&this._parent.dirty;return!c&&!!r&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=O8(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=U8(this._rawAsyncValidators)}},C1=class extends M1{constructor(c,r,e){super(C6(r),g6(e,r)),this.controls=c,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(c,r){return this.controls[c]?this.controls[c]:(this.controls[c]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(c,r,e={}){this.registerControl(c,r),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(c,r={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(c,r,e={}){this.controls[c]&&this.controls[c]._registerOnCollectionChange(()=>{}),delete this.controls[c],r&&this.registerControl(c,r),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(c){return this.controls.hasOwnProperty(c)&&this.controls[c].enabled}setValue(c,r={}){W8(this,!0,c),Object.keys(c).forEach(e=>{G8(this,!0,e),this.controls[e].setValue(c[e],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(c,r={}){c!=null&&(Object.keys(c).forEach(e=>{let i=this.controls[e];i&&i.patchValue(c[e],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(c={},r={}){this._forEachChild((e,i)=>{e.reset(c?c[i]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r,this),this._updateTouched(r,this),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(c,r,e)=>(c[e]=r.getRawValue(),c))}_syncPendingControls(){let c=this._reduceChildren(!1,(r,e)=>e._syncPendingControls()?!0:r);return c&&this.updateValueAndValidity({onlySelf:!0}),c}_forEachChild(c){Object.keys(this.controls).forEach(r=>{let e=this.controls[r];e&&c(e,r)})}_setUpControls(){this._forEachChild(c=>{c.setParent(this),c._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(c){for(let[r,e]of Object.entries(this.controls))if(this.contains(r)&&c(e))return!0;return!1}_reduceValue(){let c={};return this._reduceChildren(c,(r,e,i)=>((e.enabled||this.disabled)&&(r[i]=e.value),r))}_reduceChildren(c,r){let e=c;return this._forEachChild((i,s)=>{e=r(e,i,s)}),e}_allControlsDisabled(){for(let c of Object.keys(this.controls))if(this.controls[c].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(c){return this.controls.hasOwnProperty(c)?this.controls[c]:null}};var x1=new o2("CallSetDisabledState",{providedIn:"root",factory:()=>b1}),b1="always";function q8(a,c){return[...c.path,a]}function L6(a,c,r=b1){x6(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||r==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),$8(a,c),Y8(a,c),X8(a,c),j8(a,c)}function n6(a,c){a.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(c)})}function j8(a,c){if(c.valueAccessor.setDisabledState){let r=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(r),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(r)})}}function x6(a,c){let r=B8(a);c.validator!==null?a.setValidators(r6(r,c.validator)):typeof r=="function"&&a.setValidators([r]);let e=R8(a);c.asyncValidator!==null?a.setAsyncValidators(r6(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let i=()=>a.updateValueAndValidity();n6(c._rawValidators,i),n6(c._rawAsyncValidators,i)}function $8(a,c){c.valueAccessor.registerOnChange(r=>{a._pendingValue=r,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&b6(a,c)})}function X8(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&b6(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function b6(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function Y8(a,c){let r=(e,i)=>{c.valueAccessor.writeValue(e),i&&c.viewToModelUpdate(e)};a.registerOnChange(r),c._registerOnDestroy(()=>{a._unregisterOnChange(r)})}function K8(a,c){a==null,x6(a,c)}function Q8(a,c){if(!a.hasOwnProperty("model"))return!1;let r=a.model;return r.isFirstChange()?!0:!Object.is(c,r.currentValue)}function J8(a){return Object.getPrototypeOf(a.constructor)===m6}function Z8(a,c){a._syncPendingControls(),c.forEach(r=>{let e=r.control;e.updateOn==="submit"&&e._pendingChange&&(r.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function c5(a,c){if(!c)return null;Array.isArray(c);let r,e,i;return c.forEach(s=>{s.constructor===g1?r=s:J8(s)?e=s:i=s}),i||e||r||null}var a5={provide:x2,useExisting:N2(()=>h3)},W2=Promise.resolve(),h3=(()=>{let c=class c extends x2{constructor(e,i,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new O,this.form=new C1({},f3(e),m3(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){W2.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),L6(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){W2.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){W2.then(()=>{let i=this._findContainer(e.path),s=new C1({});K8(s,e),i.registerControl(e.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){W2.then(()=>{let i=this._findContainer(e.path);i&&i.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){W2.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,Z8(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}};c.\u0275fac=function(i){return new(i||c)(p(h6,10),p(u6,10),p(x1,8))},c.\u0275dir=P({type:c,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,s){i&1&&F("submit",function(t){return s.onSubmit(t)})("reset",function(){return s.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[k2([a5]),W]});let a=c;return a})();function t6(a,c){let r=a.indexOf(c);r>-1&&a.splice(r,1)}function o6(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var e5=class extends M1{constructor(c=null,r,e){super(C6(r),g6(e,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L1(r)&&(r.nonNullable||r.initialValueIsDefault)&&(o6(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,r={}){this.value=this._pendingValue=c,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(c,r={}){this.setValue(c,r)}reset(c=this.defaultValue,r={}){this._applyFormState(c),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){t6(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){t6(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){o6(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var r5={provide:b2,useExisting:N2(()=>u3)},l6=Promise.resolve(),u3=(()=>{let c=class c extends b2{constructor(e,i,s,n,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new e5,this._registered=!1,this.name="",this.update=new O,this._parent=e,this._setValidators(i),this._setAsyncValidators(s),this.valueAccessor=c5(this,n)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Q8(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){L6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){l6.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,s=i!==0&&A3(i);l6.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?q8(e,this._parent):[e]}};c.\u0275fac=function(i){return new(i||c)(p(x2,9),p(h6,10),p(u6,10),p(l3,10),p(k3,8),p(x1,8))},c.\u0275dir=P({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[k2([r5]),W,l2]});let a=c;return a})(),y6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275dir=P({type:c,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let a=c;return a})();var i5={provide:l3,useExisting:N2(()=>v3),multi:!0};var s5=(()=>{let c=class c{constructor(){this._accessors=[]}add(e,i){this._accessors.push([e,i])}remove(e){for(let i=this._accessors.length-1;i>=0;--i)if(this._accessors[i][1]===e){this._accessors.splice(i,1);return}}select(e){this._accessors.forEach(i=>{this._isSameGroup(i,e)&&i[1]!==e&&i[1].fireUncheck(e.value)})}_isSameGroup(e,i){return e[0].control?e[0]._parent===i._control._parent&&e[1].name===i.name:!1}};c.\u0275fac=function(i){return new(i||c)},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),v3=(()=>{let c=class c extends m6{constructor(e,i,s,n){super(e,i),this._registry=s,this._injector=n,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=X2(x1,{optional:!0})??b1}ngOnInit(){this._control=this._injector.get(b2),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}};c.\u0275fac=function(i){return new(i||c)(p(m2),p(f2),p(s5),p(M3))},c.\u0275dir=P({type:c,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(i,s){i&1&&F("change",function(){return s.onChange()})("blur",function(){return s.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[k2([i5]),W]});let a=c;return a})();var n5=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=w2({type:c}),c.\u0275inj=S2({});let a=c;return a})();var N6=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:x1,useValue:e.callSetDisabledState??b1}]}}};c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=w2({type:c}),c.\u0275inj=S2({imports:[n5]});let a=c;return a})();var S6=(()=>{let c=class c{constructor(){this.onAddTodo=new O,this.status="OPEN"}onSubmit(){if(!this.text||!this.deadline){alert("Please set values for text and deadline!");return}let e={text:this.text,deadline:this.deadline,status:this.status};this.onAddTodo.emit(e),this.text="",this.deadline="",this.status="OPEN"}};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-add-todo"]],outputs:{onAddTodo:"onAddTodo"},standalone:!0,features:[b],decls:26,vars:5,consts:[[1,"add-form",3,"ngSubmit"],[1,"form-control"],["for","text"],["type","text","id","text","name","text","placeholder","Add Todo",3,"ngModelChange","ngModel"],["for","deadline"],["type","text","id","deadline","name","deadline","placeholder","Add Todo Deadline",3,"ngModelChange","ngModel"],[1,"form-control","form-control-check"],["for","status"],["for","statusProgress"],["type","radio","id","statusProgress","name","status","value","PROGRESS",3,"ngModelChange","ngModel"],["for","statusTesting"],["type","radio","id","statusTesting","name","status","value","TESTING",3,"ngModelChange","ngModel"],["for","statusDone"],["type","radio","id","statusDone","name","status","value","DONE",3,"ngModelChange","ngModel"],["type","submit",1,"btn","btn-block"]],template:function(i,s){i&1&&(v(0,"form",0),F("ngSubmit",function(){return s.onSubmit()}),v(1,"div",1)(2,"label",2),C(3,"Todo"),H(),v(4,"input",3),d2("ngModelChange",function(t){return v2(s.text,t)||(s.text=t),t}),H()(),v(5,"div",1)(6,"label",4),C(7,"Todo"),H(),v(8,"input",5),d2("ngModelChange",function(t){return v2(s.deadline,t)||(s.deadline=t),t}),H()(),v(9,"div",6)(10,"label",7),C(11,"Status Options:"),H(),v(12,"div")(13,"label",8),C(14,"In Progress"),H(),v(15,"input",9),d2("ngModelChange",function(t){return v2(s.status,t)||(s.status=t),t}),H()(),v(16,"div")(17,"label",10),C(18,"Testing"),H(),v(19,"input",11),d2("ngModelChange",function(t){return v2(s.status,t)||(s.status=t),t}),H()(),v(20,"div")(21,"label",12),C(22,"Done"),H(),v(23,"input",13),d2("ngModelChange",function(t){return v2(s.status,t)||(s.status=t),t}),H()()(),v(24,"button",14),C(25,"Save Todo"),H()()),i&2&&(x(4),u2("ngModel",s.text),x(4),u2("ngModel",s.deadline),x(7),u2("ngModel",s.status),x(4),u2("ngModel",s.status),x(4),u2("ngModel",s.status))},dependencies:[H2,N6,y6,g1,v3,V6,M6,u3,h3]});let a=c;return a})();var o5={headers:new _3({"Content-Type":"aplication/json"})},w6=(()=>{let c=class c{constructor(e){this.http=e,this.apiUrl="http://localhost:5000/todos"}getTodos(){return this.http.get(this.apiUrl)}deleteTodo(e){let i=`${this.apiUrl}/${e.id}`;return this.http.delete(i)}updateTodoStatus(e){let i=`${this.apiUrl}/${e.id}`;return this.http.put(i,e)}addTodo(e){return this.http.post(this.apiUrl,e,o5)}};c.\u0275fac=function(i){return new(i||c)(V3(E3))},c.\u0275prov=r2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function f5(a,c){if(a&1){let r=L3();v(0,"app-todo",2),F("onDeleteTodo",function(){let i=N1(r).$implicit,s=A1();return S1(s.deleteTodo(i))})("onToggleStatus",function(){let i=N1(r).$implicit,s=A1();return S1(s.toggleStatus(i))}),H()}if(a&2){let r=c.$implicit;q("todo",r)}}var k6=(()=>{let c=class c{constructor(e){this.todoSerrvice=e,this.todos=[]}ngOnInit(){this.todoSerrvice.getTodos().subscribe(e=>{this.todos=e})}deleteTodo(e){this.todoSerrvice.deleteTodo(e).subscribe(()=>this.todos=this.todos.filter(i=>i.id!==e.id)),console.log(e)}toggleStatus(e){switch(e.status){case"OPEN":e.status="PROGRESS";break;case"PROGRESS":e.status="TESTING";break;case"TESTING":e.status="DONE";break;case"DONE":break;default:break}console.log(e.status),this.todoSerrvice.updateTodoStatus(e).subscribe()}addTodo(e){this.todoSerrvice.addTodo(e).subscribe(i=>this.todos.push(i))}};c.\u0275fac=function(i){return new(i||c)(p(w6))},c.\u0275cmp=L({type:c,selectors:[["app-todos"]],standalone:!0,features:[b],decls:2,vars:1,consts:[[3,"onAddTodo"],[3,"todo","onDeleteTodo","onToggleStatus",4,"ngFor","ngForOf"],[3,"onDeleteTodo","onToggleStatus","todo"]],template:function(i,s){i&1&&(v(0,"app-add-todo",0),F("onAddTodo",function(t){return s.addTodo(t)}),H(),g3(1,f5,1,1,"app-todo",1)),i&2&&(x(),q("ngForOf",s.todos))},dependencies:[H2,F3,e6,S6]});let a=c;return a})();var A6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-about"]],standalone:!0,features:[b],decls:5,vars:0,template:function(i,s){i&1&&(v(0,"div")(1,"h2"),C(2,"Todo App"),H(),v(3,"h4"),C(4,"Author: Lucia"),H()())}});let a=c;return a})();var D6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-root"]],standalone:!0,features:[b],decls:3,vars:0,consts:[[1,"container"]],template:function(i,s){i&1&&(v(0,"div",0),K2(1,"app-header")(2,"router-outlet"),H())},dependencies:[G3,X3]});let a=c;return a})();var T6=(()=>{let c=class c{};c.\u0275fac=function(i){return new(i||c)},c.\u0275cmp=L({type:c,selectors:[["app-not-found"]],standalone:!0,features:[b],decls:2,vars:0,template:function(i,s){i&1&&(v(0,"p"),C(1,"not-found works!"),H())}});let a=c;return a})();var P6=[{path:"",component:k6},{path:"about-page",component:A6},{path:"**",component:T6}];var F6={providers:[w3({eventCoalescing:!0}),q3(P6),O3(),B3()]};var m5={providers:[U3()]},_6=D3(F6,m5);var h5=()=>R3(D6,_6),Y7=h5;export{Y7 as a};
