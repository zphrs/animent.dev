import"./index-307a31c0.js";function y(t){const o=t-1;return o*o*o+1}function x(t){return t===1?t:1-Math.pow(2,-10*t)}function $(t,{delay:o=0,duration:c=400,easing:a=y,x:e=0,y:f=0,opacity:p=0}={}){const n=getComputedStyle(t),r=+n.opacity,u=n.transform==="none"?"":n.transform,i=r*(1-p);return{delay:o,duration:c,easing:a,css:(s,m)=>`
			transform: ${u} translate(${(1-s)*e}px, ${(1-s)*f}px);
			opacity: ${r-i*m}`}}export{x as e,$ as f};
