import{w as u}from"./index-dbab65af.js";let f="",g="";function k(e){f=e.base,g=e.assets||f}let h="";function R(e){h=e}const x="sveltekit:scroll",I="sveltekit:index",d={tap:1,hover:2,viewport:3,eager:4,off:-1};function y(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function A(){return{x:pageXOffset,y:pageYOffset}}function l(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const p={...d,"":d.hover};function b(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function S(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A")return e;e=b(e)}}function T(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a={rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)},o=!n||w(n,t)||a.rel_external||a.target||a.download;return{url:n,has:a,external:o}}function U(e){let t=null,n=null,a=null,o=null,s=e;for(;s&&s!==document.documentElement;)n===null&&(n=l(s,"preload-code")),a===null&&(a=l(s,"preload-data")),t===null&&(t=l(s,"noscroll")),o===null&&(o=l(s,"reload")),s=b(s);return{preload_code:p[n??"off"],preload_data:p[a??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function _(e){const t=u(e);let n=!0;function a(){n=!0,t.update(r=>r)}function o(r){n=!1,t.set(r)}function s(r){let i;return t.subscribe(c=>{(i===void 0||n&&c!==i)&&r(i=c)})}return{notify:a,set:o,subscribe:s}}function v(){const{set:e,subscribe:t}=u(!1);let n;async function a(){clearTimeout(n);const o=await fetch(`${g}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const r=(await o.json()).version!==h;return r&&(e(!0),clearTimeout(n)),r}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:t,check:a}}function w(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let m;function L(e){m=e.client}const O={url:_({}),page:_({}),navigating:u(null),updated:v()};export{I,d as P,x as S,T as a,U as b,A as c,k as d,L as e,S as f,y as g,R as h,w as i,f as j,m as k,O as s};
