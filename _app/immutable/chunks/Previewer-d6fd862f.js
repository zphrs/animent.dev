import{_ as Re}from"./preload-helper-41c905a7.js";import{S as re,i as oe,s as ne,k as P,l as y,m as C,h as p,n as R,b as E,B as m,C as Ie,V as Oe,q as L,r as M,E as $,F as v,R as Pe,u as ce,Z as ue,_ as se,$ as de,a0 as qe,Y as ie,a1 as he,a2 as Ue,a3 as ye,e as I,a4 as Te,f as T,t as D,D as Fe,G as W,w as x,a as _e,x as ae,c as me,y as ee,g as Y,d as G,z as te,v as pe,a5 as X,a6 as ge}from"./index-4fd82eda.js";import{m as Ne}from"./stores-ca04adfa.js";import{b as be}from"./paths-b4419565.js";const He=!0,Be=He;function ke(i,e,l){const n=i.slice();return n[3]=e[l],n}function ve(i){let e,l=i[3].title+"",n,t,s;function o(){return i[2](i[3])}return{c(){e=P("button"),n=L(l),this.h()},l(f){e=y(f,"BUTTON",{class:!0});var c=C(e);n=M(c,l),c.forEach(p),this.h()},h(){R(e,"class","filename svelte-1g9dqv4"),$(e,"selected",i[3].selected)},m(f,c){E(f,e,c),v(e,n),t||(s=Pe(e,"click",o),t=!0)},p(f,c){i=f,c&1&&l!==(l=i[3].title+"")&&ce(n,l),c&1&&$(e,"selected",i[3].selected)},d(f){f&&p(e),t=!1,s()}}}function Ve(i){let e,l=i[0],n=[];for(let t=0;t<l.length;t+=1)n[t]=ve(ke(i,l,t));return{c(){e=P("div");for(let t=0;t<n.length;t+=1)n[t].c();this.h()},l(t){e=y(t,"DIV",{class:!0});var s=C(e);for(let o=0;o<n.length;o+=1)n[o].l(s);s.forEach(p),this.h()},h(){R(e,"class","tab-bar svelte-1g9dqv4")},m(t,s){E(t,e,s);for(let o=0;o<n.length;o+=1)n[o].m(e,null)},p(t,[s]){if(s&3){l=t[0];let o;for(o=0;o<l.length;o+=1){const f=ke(t,l,o);n[o]?n[o].p(f,s):(n[o]=ve(f),n[o].c(),n[o].m(e,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=l.length}},i:m,o:m,d(t){t&&p(e),Ie(n,t)}}}function je(i,e,l){const n=Oe();let{tabs:t=[]}=e;const s=o=>n("select",o);return i.$$set=o=>{"tabs"in o&&l(0,t=o.tabs)},[t,n,s]}class Ke extends re{constructor(e){super(),oe(this,e,je,Ve,ne,{tabs:0})}}function We(i){let e,l,n,t,s=[{title:i[0]},{src:l=i[1]},i[2]],o={};for(let f=0;f<s.length;f+=1)o=se(o,s[f]);return{c(){e=P("iframe"),this.h()},l(f){e=y(f,"IFRAME",{title:!0,src:!0}),C(e).forEach(p),this.h()},h(){de(e,o)},m(f,c){E(f,e,c),n||(t=Pe(window,"message",i[3]),n=!0)},p(f,[c]){de(e,o=qe(s,[c&1&&{title:f[0]},c&2&&!ie(e.src,l=f[1])&&{src:l},c&4&&f[2]]))},i:m,o:m,d(f){f&&p(e),n=!1,t()}}}function Ye(i,e,l){let{title:n}=e,{src:t}=e;function s(o){Ue.call(this,i,o)}return i.$$set=o=>{l(2,e=se(se({},e),he(o))),"title"in o&&l(0,n=o.title),"src"in o&&l(1,t=o.src)},i.$$.update=()=>{i.$$.dirty&2&&console.log(t)},e=he(e),[n,t,e,s]}class Ge extends re{constructor(e){super(),oe(this,e,Ye,We,ne,{title:0,src:1})}get title(){return this.$$.ctx[0]}set title(e){this.$$set({title:e}),ue()}get src(){return this.$$.ctx[1]}set src(e){this.$$set({src:e}),ue()}}function ze(i){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function Ze(i){var O;let e,l,n,t,s,o,f=(O=i[2])==null?void 0:O.index,c;l=new Ke({props:{tabs:i[3]}}),l.$on("select",i[15]);function h(_,b){if(b&4&&(s=null),_[1]&&!_[5])return $e;if(!_[2])return Xe;if(s==null&&(s=!!j(_[2])),s)return Qe;if(_[2].id==="preview"&&_[0]!==void 0)return Je}let r=h(i,-1),a=r&&r(i),d=Ee(i);return{c(){e=P("div"),x(l.$$.fragment),n=_e(),t=P("div"),a&&a.c(),o=_e(),d.c(),this.h()},l(_){e=y(_,"DIV",{class:!0});var b=C(e);ae(l.$$.fragment,b),n=me(b),t=y(b,"DIV",{class:!0});var k=C(t);a&&a.l(k),k.forEach(p),o=me(b),d.l(b),b.forEach(p),this.h()},h(){R(t,"class","message svelte-9b9bcc"),R(e,"class","parent svelte-9b9bcc"),$(e,"deselected",i[2]===void 0)},m(_,b){E(_,e,b),ee(l,e,null),v(e,n),v(e,t),a&&a.m(t,null),v(e,o),d.m(e,null),c=!0},p(_,b){var U;const k={};b&8&&(k.tabs=_[3]),l.$set(k),r===(r=h(_,b))&&a?a.p(_,b):(a&&a.d(1),a=r&&r(_),a&&(a.c(),a.m(t,null))),b&4&&ne(f,f=(U=_[2])==null?void 0:U.index)?(Y(),D(d,1,1,m),G(),d=Ee(_),d.c(),T(d,1),d.m(e,null)):d.p(_,b),(!c||b&4)&&$(e,"deselected",_[2]===void 0)},i(_){c||(T(l.$$.fragment,_),T(d),c=!0)},o(_){D(l.$$.fragment,_),D(d),c=!1},d(_){_&&p(e),te(l),a&&a.d(),d.d(_)}}}function Je(i){let e,l=(i[10](i[0])||i[0].path)+"",n;return{c(){e=P("span"),n=L(l),this.h()},l(t){e=y(t,"SPAN",{class:!0});var s=C(e);n=M(s,l),s.forEach(p),this.h()},h(){R(e,"class","title")},m(t,s){E(t,e,s),v(e,n)},p(t,s){s&1&&l!==(l=(t[10](t[0])||t[0].path)+"")&&ce(n,l)},d(t){t&&p(e)}}}function Qe(i){let e,l=i[2].path.slice(1)+"/",n;return{c(){e=P("span"),n=L(l),this.h()},l(t){e=y(t,"SPAN",{class:!0});var s=C(e);n=M(s,l),s.forEach(p),this.h()},h(){R(e,"class","filename svelte-9b9bcc")},m(t,s){E(t,e,s),v(e,n)},p(t,s){s&4&&l!==(l=t[2].path.slice(1)+"/")&&ce(n,l)},d(t){t&&p(e)}}}function Xe(i){let e;return{c(){e=L("Select a file above to view it")},l(l){e=M(l,"Select a file above to view it")},m(l,n){E(l,e,n)},p:m,d(l){l&&p(e)}}}function $e(i){let e,l,n,t,s,o,f,c,h,r,a,d,O,_;return{c(){e=P("span"),l=L("Press "),n=P("kbd"),t=L("esc"),s=L(` and then either
          `),o=P("kbd"),f=L("tab"),c=L(`
          or `),h=P("kbd"),r=L("shift"),a=L(` +
          `),d=P("kbd"),O=L("tab"),_=L(" to tab out of the editor")},l(b){e=y(b,"SPAN",{});var k=C(e);l=M(k,"Press "),n=y(k,"KBD",{});var U=C(n);t=M(U,"esc"),U.forEach(p),s=M(k,` and then either
          `),o=y(k,"KBD",{});var z=C(o);f=M(z,"tab"),z.forEach(p),c=M(k,`
          or `),h=y(k,"KBD",{});var Z=C(h);r=M(Z,"shift"),Z.forEach(p),a=M(k,` +
          `),d=y(k,"KBD",{});var J=C(d);O=M(J,"tab"),J.forEach(p),_=M(k," to tab out of the editor"),k.forEach(p)},m(b,k){E(b,e,k),v(e,l),v(e,n),v(n,t),v(e,s),v(e,o),v(o,f),v(e,c),v(e,h),v(h,r),v(e,a),v(e,d),v(d,O),v(e,_)},p:m,d(b){b&&p(e)}}}function we(i){let e,l,n,t,s,o;const f=[et,xe],c=[];function h(r,a){return a&4&&(e=null),a&12&&(l=null),e==null&&(e=!!j(r[2])),e?0:(l==null&&(l=!!(r[2].id==="preview"&&j(r[3][0]))),l?1:-1)}return~(n=h(i,-1))&&(t=c[n]=f[n](i)),{c(){t&&t.c(),s=I()},l(r){t&&t.l(r),s=I()},m(r,a){~n&&c[n].m(r,a),E(r,s,a),o=!0},p(r,a){let d=n;n=h(r,a),n===d?~n&&c[n].p(r,a):(t&&(Y(),D(c[d],1,1,()=>{c[d]=null}),G()),~n?(t=c[n],t?t.p(r,a):(t=c[n]=f[n](r),t.c()),T(t,1),t.m(s.parentNode,s)):t=null)},i(r){o||(T(t),o=!0)},o(r){D(t),o=!1},d(r){~n&&c[n].d(r),r&&p(s)}}}function xe(i){let e,l,n={style:"width: 100%; border-radius: 0; height: calc(100vh - 8.75rem)",title:i[2].title,src:i[9](i[8](i[3][0]))};return e=new Ge({props:n}),i[18](e),e.$on("message",i[6]),{c(){x(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,s){ee(e,t,s),l=!0},p(t,s){const o={};s&4&&(o.title=t[2].title),s&8&&(o.src=t[9](t[8](t[3][0]))),e.$set(o)},i(t){l||(T(e.$$.fragment,t),l=!0)},o(t){D(e.$$.fragment,t),l=!1},d(t){i[18](null),te(e,t)}}}function et(i){let e,l,n,t,s;const o=[nt,tt],f=[];function c(h,r){return r&4&&(e=null),e==null&&(e=!!at(h[2])),e?0:1}return l=c(i,-1),n=f[l]=o[l](i),{c(){n.c(),t=I()},l(h){n.l(h),t=I()},m(h,r){f[l].m(h,r),E(h,t,r),s=!0},p(h,r){let a=l;l=c(h,r),l===a?f[l].p(h,r):(Y(),D(f[a],1,1,()=>{f[a]=null}),G(),n=f[l],n?n.p(h,r):(n=f[l]=o[l](h),n.c()),T(n,1),n.m(t.parentNode,t))},i(h){s||(T(n),s=!0)},o(h){D(n),s=!1},d(h){f[l].d(h),h&&p(t)}}}function tt(i){let e,l,n={ctx:i,current:null,token:null,hasCatch:!1,pending:it,then:st,catch:lt,value:12,blocks:[,,,]};return ye(i[12],n),{c(){e=I(),n.block.c()},l(t){e=I(),n.block.l(t)},m(t,s){E(t,e,s),n.block.m(t,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(t,s){i=t,Te(n,i,s)},i(t){l||(T(n.block),l=!0)},o(t){for(let s=0;s<3;s+=1){const o=n.blocks[s];D(o)}l=!1},d(t){t&&p(e),n.block.d(t),n.token=null,n=null}}}function nt(i){let e,l,n;return{c(){e=P("img"),this.h()},l(t){e=y(t,"IMG",{src:!0,alt:!0}),this.h()},h(){ie(e.src,l=i[2].path)||R(e,"src",l),R(e,"alt",n=i[2].title)},m(t,s){E(t,e,s)},p(t,s){s&4&&!ie(e.src,l=t[2].path)&&R(e,"src",l),s&4&&n!==(n=t[2].title)&&R(e,"alt",n)},i:m,o:m,d(t){t&&p(e)}}}function lt(i){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function st(i){let e,l,n,t,s;function o(r){i[16](r)}function f(r){i[17](r)}var c=i[12].default;function h(r){let a={lang:r[2].lang};return r[1]!==void 0&&(a.focused=r[1]),r[2].content!==void 0&&(a.doc=r[2].content),{props:a}}return c&&(e=pe(c,h(i)),W.push(()=>X(e,"focused",o,i[1])),W.push(()=>X(e,"doc",f,i[2].content))),{c(){e&&x(e.$$.fragment),t=I()},l(r){e&&ae(e.$$.fragment,r),t=I()},m(r,a){e&&ee(e,r,a),E(r,t,a),s=!0},p(r,a){const d={};if(a&4&&(d.lang=r[2].lang),!l&&a&2&&(l=!0,d.focused=r[1],ge(()=>l=!1)),!n&&a&4&&(n=!0,d.doc=r[2].content,ge(()=>n=!1)),c!==(c=r[12].default)){if(e){Y();const O=e;D(O.$$.fragment,1,0,()=>{te(O,1)}),G()}c?(e=pe(c,h(r)),W.push(()=>X(e,"focused",o,r[1])),W.push(()=>X(e,"doc",f,r[2].content)),x(e.$$.fragment),T(e.$$.fragment,1),ee(e,t.parentNode,t)):e=null}else c&&e.$set(d)},i(r){s||(e&&T(e.$$.fragment,r),s=!0)},o(r){e&&D(e.$$.fragment,r),s=!1},d(r){r&&p(t),e&&te(e,r)}}}function it(i){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function Ee(i){let e,l,n=i[2]&&we(i);return{c(){n&&n.c(),e=I()},l(t){n&&n.l(t),e=I()},m(t,s){n&&n.m(t,s),E(t,e,s),l=!0},p(t,s){t[2]?n?(n.p(t,s),s&4&&T(n,1)):(n=we(t),n.c(),T(n,1),n.m(e.parentNode,e)):n&&(Y(),D(n,1,1,()=>{n=null}),G())},i(t){l||(T(n),l=!0)},o(t){D(n),l=!1},d(t){n&&n.d(t),t&&p(e)}}}function rt(i){let e,l,n;return{c(){e=P("div"),l=P("div"),n=L("Loading..."),this.h()},l(t){e=y(t,"DIV",{class:!0});var s=C(e);l=y(s,"DIV",{class:!0});var o=C(l);n=M(o,"Loading..."),o.forEach(p),s.forEach(p),this.h()},h(){R(l,"class","message svelte-9b9bcc"),R(e,"class","parent svelte-9b9bcc")},m(t,s){E(t,e,s),v(e,l),v(l,n)},p:m,i:m,o:m,d(t){t&&p(e)}}}function ot(i){let e,l,n={ctx:i,current:null,token:null,hasCatch:!1,pending:rt,then:Ze,catch:ze,value:21,blocks:[,,,]};return ye(Promise.all([i[11],i[12]]),n),{c(){e=I(),n.block.c()},l(t){e=I(),n.block.l(t)},m(t,s){E(t,e,s),n.block.m(t,n.anchor=s),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(t,[s]){i=t,Te(n,i,s)},i(t){l||(T(n.block),l=!0)},o(t){for(let s=0;s<3;s+=1){const o=n.blocks[s];D(o)}l=!1},d(t){t&&p(e),n.block.d(t),n.token=null,n=null}}}function ct(i){const e=i.map(n=>n.split("/").slice(0,-1)),l=[];for(let n=0;n<e[0].length;n++){const t=e[0][n];if(e.every(s=>s[n]===t))l.push(t);else break}return l.join("/")}function j(i){return i.content!==void 0&&i.lang!==void 0}function at(i){return i.lang==="png"||i.lang==="jpg"||i.lang==="jpeg"||i.lang==="gif"}function ft(i,e,l){let n,t;Fe(i,Ne,u=>l(5,t=u));let{paths:s=[]}=e,{root:o}=e,f=!1,c,h=Re(()=>import("./CodeMirror-dac692ff.js"),["./CodeMirror-dac692ff.js","./index-4fd82eda.js","../assets/CodeMirror-2f294dd5.css"],import.meta.url),r=[{title:"Loading...",id:"loading",selected:!1,index:0}],a,d;const O=u=>{if(u.data.type==="goto"&&d){l(0,a=r.filter(j).filter(N=>N.path==u.data.url)[0]);const w=k(a);console.log(w),l(4,d.src=U(w),d),console.log(d)}};s.indexOf(o)!=0&&s.indexOf(o)!=-1&&s.splice(s.indexOf(o),1),s.includes(o)||s.unshift(o);function _(u){if(c===u){l(3,r[u.index].selected=!1,r),l(2,c=void 0);return}c&&l(2,c.selected=!1,c),u.id==="preview"&&l(0,a=r.filter(j)[0]),l(2,c=u),l(3,r[u.index].selected=!0,r)}async function b(){const u=s.map(async(w,N)=>{const V=ct(s).length,H=w.slice(V),fe=w.slice(w.lastIndexOf(".")+1);w=be+w;const q=await fetch(`${w}`).then(le=>le.text());return{path:w,relativePath:H,content:q,selected:!1,lang:fe,index:N,title:H,id:w}});return l(3,r=await Promise.all(u)),l(3,r[0].selected=!0,r),l(2,c=r[0]),(r[0].lang==="html"||r[0].lang==="svg")&&r.push({title:"Preview",id:"preview",selected:!1,index:r.length}),r}function k(u){if(u.lang==="svg"){const g=new DOMParser().parseFromString(u.content,"image/svg+xml"),A=document.createElement("html"),S=document.createElement("head"),F=document.createElement("body");A.appendChild(S),A.appendChild(F);const B=`
        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        svg {
          width: 100%;
          max-width: 400px;
          height: 100%;
        }
      `,K=document.createElement("style");return K.innerHTML=B,S.appendChild(K),F.appendChild(g.documentElement),"<!DOCTYPE html>"+A.outerHTML}const w={},N={},Q={};let V=u.content,H=r.filter(j);for(const g of H)g.lang==="css"?w[g.path]=g.content:g.lang==="js"?N[g.path]=g.content:(g.lang==="html"||g.lang==="svg")&&(Q[g.path]=g);const q=new DOMParser().parseFromString(V,"text/html"),le=q.documentElement.querySelectorAll("link");for(const g of le)if(g.getAttribute("rel")==="stylesheet"){const S=g.getAttribute("href");if(!S)continue;const F=new URL(S,n),B=w[F.pathname];if(B){const K=q.createElement("style");K.innerHTML=B,g.replaceWith(K)}}const Ce=q.querySelectorAll("script");for(const g of Ce){const A=g.getAttribute("src");if(A){const S=new URL(A,n),F=N[S.pathname];if(F){const B=q.createElement("script");B.innerHTML=F,g.replaceWith(B)}else g.src=S.href}}const De=q.querySelectorAll("img");for(const g of De){const A=g.getAttribute("src");if(!A)continue;const S=new URL(A,new URL(u.path,n));g.setAttribute("src",S.href)}const Ae=q.querySelectorAll("a");for(const g of Ae){const A=g.getAttribute("href");if(!A)continue;const S=new URL(A,new URL(r[0].path,n));Q[S.pathname]?g.setAttribute("onclick",`parent.postMessage({type: "goto", url: "${S.pathname}"}, "*"); return false`):g.setAttribute("href",S.href)}return(q.compatMode==="CSS1Compat"?"<!DOCTYPE html>":"")+q.documentElement.outerHTML}const U=u=>"data:text/html;charset=utf-8,"+encodeURIComponent(u),z=u=>{const w=k(u),V=new DOMParser().parseFromString(w,"text/html").querySelector("title");if(V){const H=V.textContent;if(H)return H}return""},Z=b(),J=u=>_(u.detail);function Se(u){f=u,l(1,f)}function Le(u){i.$$.not_equal(c.content,u)&&(c.content=u,l(2,c))}function Me(u){W[u?"unshift":"push"](()=>{d=u,l(4,d)})}return i.$$set=u=>{"paths"in u&&l(13,s=u.paths),"root"in u&&l(14,o=u.root)},i.$$.update=()=>{i.$$.dirty&1&&(n=a&&Be?new URL(a.path,window.location.origin+be):void 0)},[a,f,c,r,d,t,O,_,k,U,z,Z,h,s,o,J,Se,Le,Me]}class pt extends re{constructor(e){super(),oe(this,e,ft,ot,ne,{paths:13,root:14})}}export{pt as P};
