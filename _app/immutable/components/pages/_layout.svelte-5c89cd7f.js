import{S as q,i as C,s as N,k as p,l as g,m as d,h as f,n as c,b as m,B as b,C as L,D as v,o as M,q as S,r as $,E as w,F as z,G as H,H as I,w as R,a as T,x as D,c as F,y as G,I as J,J as K,K as P,f as y,t as Y,z as V}from"../../chunks/index-307a31c0.js";import{s as j}from"../../chunks/singletons-d3c152c2.js";import{p as h}from"../../chunks/navPaths-f350f2ce.js";import{m as O}from"../../chunks/stores-35f8706f.js";/* empty css                          */const Q=()=>{const n=j;return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},updated:n.updated}},U={subscribe(n){return Q().page.subscribe(n)}};function k(n,t,l){const i=n.slice();return i[8]=t[l][0],i[9]=t[l][1],i[10]=t[l][2],i}function E(n){let t,l=n[8]+"",i,o;return{c(){t=p("a"),i=S(l),this.h()},l(a){t=g(a,"A",{href:!0,class:!0,"data-color":!0});var e=d(t);i=$(e,l),e.forEach(f),this.h()},h(){c(t,"href",o=n[9]!==n[0].url.pathname?n[9]:"/"),c(t,"class","chip svelte-1k8vqwh"),c(t,"data-color",n[10]),w(t,"active",n[9]===n[0].url.pathname)},m(a,e){m(a,t,e),z(t,i)},p(a,e){e&1&&o!==(o=a[9]!==a[0].url.pathname?a[9]:"/")&&c(t,"href",o),e&1&&w(t,"active",a[9]===a[0].url.pathname)},d(a){a&&f(t)}}}function W(n){let t,l,i,o=h,a=[];for(let e=0;e<o.length;e+=1)a[e]=E(k(n,o,e));return{c(){t=p("nav");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){t=g(e,"NAV",{"data-color":!0,style:!0,class:!0});var s=d(t);for(let r=0;r<a.length;r+=1)a[r].l(s);s.forEach(f),this.h()},h(){c(t,"data-color",l=n[3]?n[3][2]:""),c(t,"style",i=`transform: translateY(${n[2]}px)`),c(t,"class","svelte-1k8vqwh")},m(e,s){m(e,t,s);for(let r=0;r<a.length;r+=1)a[r].m(t,null);n[5](t)},p(e,[s]){if(s&1){o=h;let r;for(r=0;r<o.length;r+=1){const _=k(e,o,r);a[r]?a[r].p(_,s):(a[r]=E(_),a[r].c(),a[r].m(t,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=o.length}s&8&&l!==(l=e[3]?e[3][2]:"")&&c(t,"data-color",l),s&4&&i!==(i=`transform: translateY(${e[2]}px)`)&&c(t,"style",i)},i:b,o:b,d(e){e&&f(t),L(a,e),n[5](null)}}}function X(n,t,l){let i,o,a;v(n,O,u=>l(4,o=u)),v(n,U,u=>l(0,a=u));let e,s=0,r=0,_=0;_=window.scrollY,window.addEventListener("scroll",()=>{if(o){l(2,s=0);return}const u=window.scrollY-_;_=window.scrollY,u>0?s>-r&&(l(2,s-=u),s<-r&&l(2,s=-r)):s<0&&(l(2,s-=u),s>0&&l(2,s=0))}),M(()=>{r=e.getBoundingClientRect().height;let u=null;window.addEventListener("resize",()=>{u&&clearTimeout(u),u=setTimeout(()=>{r=e.getBoundingClientRect().height},50)})});function A(u){H[u?"unshift":"push"](()=>{e=u,l(1,e)})}return n.$$.update=()=>{n.$$.dirty&1&&l(3,i=h.find(([u,B])=>B===a.url.pathname)),n.$$.dirty&16&&o&&l(2,s=0)},[a,e,s,i,o,A]}class Z extends q{constructor(t){super(),C(this,t,X,W,N,{})}}function x(n){let t,l,i,o;t=new Z({});const a=n[1].default,e=I(a,n,n[0],null);return{c(){R(t.$$.fragment),l=T(),i=p("main"),e&&e.c()},l(s){D(t.$$.fragment,s),l=F(s),i=g(s,"MAIN",{});var r=d(i);e&&e.l(r),r.forEach(f)},m(s,r){G(t,s,r),m(s,l,r),m(s,i,r),e&&e.m(i,null),o=!0},p(s,[r]){e&&e.p&&(!o||r&1)&&J(e,a,s,s[0],o?P(a,s[0],r,null):K(s[0]),null)},i(s){o||(y(t.$$.fragment,s),y(e,s),o=!0)},o(s){Y(t.$$.fragment,s),Y(e,s),o=!1},d(s){V(t,s),s&&f(l),s&&f(i),e&&e.d(s)}}}function ee(n,t,l){let{$$slots:i={},$$scope:o}=t;return n.$$set=a=>{"$$scope"in a&&l(0,o=a.$$scope)},[o,i]}class le extends q{constructor(t){super(),C(this,t,ee,x,N,{})}}export{le as default};