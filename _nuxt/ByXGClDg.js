import{d as Te,g as ce,F as Qe,G as le,H as Ge,r as Ke,c as C,I as Je,v as M,x as ae,J as z,K as ue,L as fe,M as We,N as Xe,O as Ye,m as Ze,C as et,z as tt,_ as nt}from"./DPvdnfSn.js";import{r as ot}from"./CvPl5tTm.js";const Ae=Object.freeze({left:0,top:0,width:16,height:16}),Pe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Z=Object.freeze({...Ae,...Pe});Object.freeze({...Z,body:"",hidden:!1});({...Ae});const Fe=Object.freeze({width:null,height:null}),Ee=Object.freeze({...Fe,...Pe});function rt(e,t){const n={...e};for(const r in t){const o=t[r],s=typeof o;r in Fe?(o===null||o&&(s==="string"||s==="number"))&&(n[r]=o):s===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const st=/[\s,]+/;function it(e,t){t.split(st).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function ct(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:r(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/o,s%1===0?r(s):0)}}return t}const lt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,at=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function de(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const r=e.split(lt);if(r===null||!r.length)return e;const o=[];let s=r.shift(),i=at.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?o.push(s):o.push(Math.ceil(c*t*n)/n)}else o.push(s);if(s=r.shift(),s===void 0)return o.join("");i=!i}}function ut(e,t="defs"){let n="";const r=e.indexOf("<"+t);for(;r>=0;){const o=e.indexOf(">",r),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(o+1,s).trim(),e=e.slice(0,r).trim()+e.slice(i+1)}return{defs:n,content:e}}function ft(e,t){return e?"<defs>"+e+"</defs>"+t:t}function dt(e,t,n){const r=ut(e);return ft(r.defs,t+r.content+n)}const pt=e=>e==="unset"||e==="undefined"||e==="none";function ht(e,t){const n={...Z,...e},r={...Ee,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,r].forEach(m=>{const l=[],v=m.hFlip,x=m.vFlip;let y=m.rotate;v?x?y+=2:(l.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),l.push("scale(-1 1)"),o.top=o.left=0):x&&(l.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),l.push("scale(1 -1)"),o.top=o.left=0);let b;switch(y<0&&(y-=Math.floor(y/4)*4),y=y%4,y){case 1:b=o.height/2+o.top,l.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:l.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,l.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}y%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),l.length&&(s=dt(s,'<g transform="'+l.join(" ")+'">',"</g>"))});const i=r.width,c=r.height,a=o.width,u=o.height;let f,d;i===null?(d=c===null?"1em":c==="auto"?u:c,f=de(d,a/u)):(f=i==="auto"?a:i,d=c===null?de(f,u/a):c==="auto"?u:c);const p={},g=(m,l)=>{pt(l)||(p[m]=l.toString())};g("width",f),g("height",d);const w=[o.left,o.top,a,u];return p.viewBox=w.join(" "),{attributes:p,viewBox:w,body:s}}const gt=/\sid="(\S+)"/g,mt="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let yt=0;function vt(e,t=mt){const n=[];let r;for(;r=gt.exec(e);)n.push(r[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(yt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}function bt(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in t)n+=" "+r+'="'+t[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function wt(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function xt(e){return"data:image/svg+xml,"+wt(e)}function It(e){return'url("'+xt(e)+'")'}const pe={...Ee,inline:!1},St={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Ct={display:"inline-block"},q={backgroundColor:"currentColor"},Me={backgroundColor:"transparent"},he={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ge={webkitMask:q,mask:q,background:Me};for(const e in ge){const t=ge[e];for(const n in he)t[e+n]=he[n]}const N={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";N[e+"-flip"]=t,N[e.slice(0,1)+"-flip"]=t,N[e+"Flip"]=t});function me(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const kt=(e,t)=>{const n=rt(pe,t),r={...St},o=t.mode||"svg",s={},i=t.style,c=typeof i=="object"&&!(i instanceof Array)?i:{};for(let m in t){const l=t[m];if(l!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[m]=l===!0||l==="true"||l===1;break;case"flip":typeof l=="string"&&it(n,l);break;case"color":s.color=l;break;case"rotate":typeof l=="string"?n[m]=ct(l):typeof l=="number"&&(n[m]=l);break;case"ariaHidden":case"aria-hidden":l!==!0&&l!=="true"&&delete r["aria-hidden"];break;default:{const v=N[m];v?(l===!0||l==="true"||l===1)&&(n[v]=!0):pe[m]===void 0&&(r[m]=l)}}}const a=ht(e,n),u=a.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),o==="svg"){r.style={...s,...c},Object.assign(r,u);let m=0,l=t.id;return typeof l=="string"&&(l=l.replace(/-/g,"_")),r.innerHTML=vt(a.body,l?()=>l+"ID"+m++:"iconifyVue"),ce("svg",r)}const{body:f,width:d,height:p}=e,g=o==="mask"||(o==="bg"?!1:f.indexOf("currentColor")!==-1),w=bt(f,{...u,width:d+"",height:p+""});return r.style={...s,"--svg":It(w),width:me(u.width),height:me(u.height),...Ct,...g?q:Me,...c},ce("span",r)},Ot=Object.create(null),jt=Te({inheritAttrs:!1,render(){const e=this.$attrs,t=e.icon,n=typeof t=="string"?Ot[t]:typeof t=="object"?t:null;return n===null||typeof n!="object"||typeof n.body!="string"?this.$slots.default?this.$slots.default():null:kt({...Z,...n},e)}}),A=/^[a-z0-9]+(-[a-z0-9]+)*$/,R=(e,t,n,r="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),a=o.pop(),u={provider:o.length>0?o[0]:r,prefix:a,name:c};return t&&!$(u)?null:u}const s=o[0],i=s.split("-");if(i.length>1){const c={provider:r,prefix:i.shift(),name:i.join("-")};return t&&!$(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:s};return t&&!$(c,n)?null:c}return null},$=(e,t)=>e?!!((e.provider===""||e.provider.match(A))&&(t&&e.prefix===""||e.prefix.match(A))&&e.name.match(A)):!1,ze=Object.freeze({left:0,top:0,width:16,height:16}),_=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ee=Object.freeze({...ze,..._}),Q=Object.freeze({...ee,body:"",hidden:!1});function Tt(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const r=((e.rotate||0)+(t.rotate||0))%4;return r&&(n.rotate=r),n}function ye(e,t){const n=Tt(e,t);for(const r in Q)r in _?r in e&&!(r in n)&&(n[r]=_[r]):r in t?n[r]=t[r]:r in e&&(n[r]=e[r]);return n}function At(e,t){const n=e.icons,r=e.aliases||Object.create(null),o=Object.create(null);function s(i){if(n[i])return o[i]=[];if(!(i in o)){o[i]=null;const c=r[i]&&r[i].parent,a=c&&s(c);a&&(o[i]=[c].concat(a))}return o[i]}return(t||Object.keys(n).concat(Object.keys(r))).forEach(s),o}function Pt(e,t,n){const r=e.icons,o=e.aliases||Object.create(null);let s={};function i(c){s=ye(r[c]||o[c],s)}return i(t),n.forEach(i),ye(e,s)}function Le(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const r=At(e);for(const o in r){const s=r[o];s&&(t(o,Pt(e,o,s)),n.push(o))}return n}const Ft={provider:"",aliases:{},not_found:{},...ze};function V(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Ne(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!V(e,Ft))return null;const n=t.icons;for(const o in n){const s=n[o];if(!o.match(A)||typeof s.body!="string"||!V(s,Q))return null}const r=t.aliases||Object.create(null);for(const o in r){const s=r[o],i=s.parent;if(!o.match(A)||typeof i!="string"||!n[i]&&!r[i]||!V(s,Q))return null}return t}const ve=Object.create(null);function Et(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function k(e,t){const n=ve[e]||(ve[e]=Object.create(null));return n[t]||(n[t]=Et(e,t))}function te(e,t){return Ne(t)?Le(t,(n,r)=>{r?e.icons[n]=r:e.missing.add(n)}):[]}function Mt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let P=!1;function $e(e){return typeof e=="boolean"&&(P=e),P}function zt(e){const t=typeof e=="string"?R(e,!0,P):e;if(t){const n=k(t.provider,t.prefix),r=t.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Lt(e,t){const n=R(e,!0,P);if(!n)return!1;const r=k(n.provider,n.prefix);return Mt(r,n.name,t)}function Nt(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),P&&!t&&!e.prefix){let o=!1;return Ne(e)&&(e.prefix="",Le(e,(s,i)=>{i&&Lt(s,i)&&(o=!0)})),o}const n=e.prefix;if(!$({provider:t,prefix:n,name:"a"}))return!1;const r=k(t,n);return!!te(r,e)}const $t=Object.freeze({width:null,height:null}),Dt=Object.freeze({...$t,..._});""+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);const G=Object.create(null);function _t(e,t){G[e]=t}function K(e){return G[e]||G[""]}function ne(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const oe=Object.create(null),T=["https://api.simplesvg.com","https://api.unisvg.com"],D=[];for(;T.length>0;)T.length===1||Math.random()>.5?D.push(T.shift()):D.push(T.pop());oe[""]=ne({resources:["https://api.iconify.design"].concat(D)});function J(e,t){const n=ne(t);return n===null?!1:(oe[e]=n,!0)}function re(e){return oe[e]}const Rt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let be=Rt();function Bt(e,t){const n=re(e);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(i=>{o=Math.max(o,i.length)});const s=t+".json?icons=";r=n.maxURL-o-n.path.length-s.length}return r}function Vt(e){return e===404}const Ht=(e,t,n)=>{const r=[],o=Bt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((a,u)=>{c+=a.length+1,c>=o&&u>0&&(r.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=a.length),i.icons.push(a)}),r.push(i),r};function Ut(e){if(typeof e=="string"){const t=re(e);if(t)return t.path}return"/"}const qt=(e,t,n)=>{if(!be){n("abort",424);return}let r=Ut(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),a=new URLSearchParams({icons:c});r+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;r+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let o=503;be(e+r).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Vt(i)?"abort":"next",i)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",o)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",o)})},Qt={prepare:Ht,send:qt};function Gt(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let r={provider:"",prefix:"",name:""};return e.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const s=o.provider,i=o.prefix,c=o.name,a=n[s]||(n[s]=Object.create(null)),u=a[i]||(a[i]=k(s,i));let f;c in u.icons?f=t.loaded:i===""||u.missing.has(c)?f=t.missing:f=t.pending;const d={provider:s,prefix:i,name:c};f.push(d)}),t}function De(e,t){e.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==t))})}function Kt(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const r=e.provider,o=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(a=>{if(a.prefix!==o)return!0;const u=a.name;if(e.icons[u])i.loaded.push({provider:r,prefix:o,name:u});else if(e.missing.has(u))i.missing.push({provider:r,prefix:o,name:u});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||De([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let Jt=0;function Wt(e,t,n){const r=Jt++,o=De.bind(null,n,r);if(!t.pending.length)return o;const s={id:r,icons:t,callback:e,abort:o};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),o}function Xt(e,t=!0,n=!1){const r=[];return e.forEach(o=>{const s=typeof o=="string"?R(o,t,n):o;s&&r.push(s)}),r}var Yt={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zt(e,t,n,r){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let i;if(e.random){let h=e.resources.slice(0);for(i=[];h.length>1;){const I=Math.floor(Math.random()*h.length);i.push(h[I]),h=h.slice(0,I).concat(h.slice(I+1))}i=i.concat(h)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let a="pending",u=0,f,d=null,p=[],g=[];typeof r=="function"&&g.push(r);function w(){d&&(clearTimeout(d),d=null)}function m(){a==="pending"&&(a="aborted"),w(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function l(h,I){I&&(g=[]),typeof h=="function"&&g.push(h)}function v(){return{startTime:c,payload:t,status:a,queriesSent:u,queriesPending:p.length,subscribe:l,abort:m}}function x(){a="failed",g.forEach(h=>{h(void 0,f)})}function y(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function b(h,I,j){const E=I!=="success";switch(p=p.filter(S=>S!==h),a){case"pending":break;case"failed":if(E||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){f=j,x();return}if(E){f=j,p.length||(i.length?O():x());return}if(w(),y(),!e.random){const S=e.resources.indexOf(h.resource);S!==-1&&S!==e.index&&(e.index=S)}a="completed",g.forEach(S=>{S(j)})}function O(){if(a!=="pending")return;w();const h=i.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{w(),a==="pending"&&(y(),x())},e.timeout);return}x();return}const I={status:"pending",resource:h,callback:(j,E)=>{b(I,j,E)}};p.push(I),u++,d=setTimeout(O,e.rotate),n(h,t,I.callback)}return setTimeout(O),v}function _e(e){const t={...Yt,...e};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,a,u){const f=Zt(t,c,a,(d,p)=>{r(),u&&u(d,p)});return n.push(f),f}function s(c){return n.find(a=>c(a))||null}return{query:o,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:r}}function we(){}const H=Object.create(null);function en(e){if(!H[e]){const t=re(e);if(!t)return;const n=_e(t),r={config:t,redundancy:n};H[e]=r}return H[e]}function tn(e,t,n){let r,o;if(typeof e=="string"){const s=K(e);if(!s)return n(void 0,424),we;o=s.send;const i=en(e);i&&(r=i.redundancy)}else{const s=ne(e);if(s){r=_e(s);const i=e.resources?e.resources[0]:"",c=K(i);c&&(o=c.send)}}return!r||!o?(n(void 0,424),we):r.query(t,o,n)().abort}const xe="iconify2",F="iconify",Re=F+"-count",Ie=F+"-version",Be=36e5,nn=168,on=50;function W(e,t){try{return e.getItem(t)}catch{}}function se(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Se(e,t){try{e.removeItem(t)}catch{}}function X(e,t){return se(e,Re,t.toString())}function Y(e){return parseInt(W(e,Re))||0}const B={local:!0,session:!0},Ve={local:new Set,session:new Set};let ie=!1;function rn(e){ie=e}let L=typeof window>"u"?{}:window;function He(e){const t=e+"Storage";try{if(L&&L[t]&&typeof L[t].length=="number")return L[t]}catch{}B[e]=!1}function Ue(e,t){const n=He(e);if(!n)return;const r=W(n,Ie);if(r!==xe){if(r){const c=Y(n);for(let a=0;a<c;a++)Se(n,F+a.toString())}se(n,Ie,xe),X(n,0);return}const o=Math.floor(Date.now()/Be)-nn,s=c=>{const a=F+c.toString(),u=W(n,a);if(typeof u=="string"){try{const f=JSON.parse(u);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>o&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,c))return!0}catch{}Se(n,a)}};let i=Y(n);for(let c=i-1;c>=0;c--)s(c)||(c===i-1?(i--,X(n,i)):Ve[e].add(c))}function qe(){if(!ie){rn(!0);for(const e in B)Ue(e,t=>{const n=t.data,r=t.provider,o=n.prefix,s=k(r,o);if(!te(s,n).length)return!1;const i=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,i):i,!0})}}function sn(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const r in B)Ue(r,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function cn(e,t){ie||qe();function n(r){let o;if(!B[r]||!(o=He(r)))return;const s=Ve[r];let i;if(s.size)s.delete(i=Array.from(s).shift());else if(i=Y(o),i>=on||!X(o,i+1))return;const c={cached:Math.floor(Date.now()/Be),provider:e.provider,data:t};return se(o,F+i.toString(),JSON.stringify(c))}t.lastModified&&!sn(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Ce(){}function ln(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Kt(e)}))}function an(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:r}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;if(!o||!(s=K(n)))return;s.prepare(n,r,o).forEach(c=>{tn(n,c,a=>{if(typeof a!="object")c.icons.forEach(u=>{e.missing.add(u)});else try{const u=te(e,a);if(!u.length)return;const f=e.pendingIcons;f&&u.forEach(d=>{f.delete(d)}),cn(e,a)}catch(u){console.error(u)}ln(e)})})}))}const un=(e,t)=>{const n=Xt(e,!0,$e()),r=Gt(n);if(!r.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(r.loaded,r.missing,r.pending,Ce)}),()=>{a=!1}}const o=Object.create(null),s=[];let i,c;return r.pending.forEach(a=>{const{provider:u,prefix:f}=a;if(f===c&&u===i)return;i=u,c=f,s.push(k(u,f));const d=o[u]||(o[u]=Object.create(null));d[f]||(d[f]=[])}),r.pending.forEach(a=>{const{provider:u,prefix:f,name:d}=a,p=k(u,f),g=p.pendingIcons||(p.pendingIcons=new Set);g.has(d)||(g.add(d),o[u][f].push(d))}),s.forEach(a=>{const{provider:u,prefix:f}=a;o[u][f].length&&an(a,o[u][f])}),t?Wt(t,r,s):Ce},fn=e=>new Promise((t,n)=>{const r=typeof e=="string"?R(e,!0):e;if(!r){n(e);return}un([r||e],o=>{if(o.length&&r){const s=zt(r);if(s){t({...ee,...s});return}}n(e)})});({...Dt});const ke={backgroundColor:"currentColor"},dn={backgroundColor:"transparent"},Oe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},je={webkitMask:ke,mask:ke,background:dn};for(const e in je){const t=je[e];for(const n in Oe)t[e+n]=Oe[n]}const U={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";U[e+"-flip"]=t,U[e.slice(0,1)+"-flip"]=t,U[e+"Flip"]=t});$e(!0);_t("",Qt);if(typeof document<"u"&&typeof window<"u"){qe();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Nt(r))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const r="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;J(n,o)||console.error(r)}catch{console.error(r)}}}}({...ee});const pn=Te({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(e){let t,n;const r=Ze(),o=Qe(),s=e;le(()=>{var l;return(l=o.nuxtIcon)==null?void 0:l.iconifyApiOptions},()=>{var l,v,x,y,b,O;if((v=(l=o.nuxtIcon)==null?void 0:l.iconifyApiOptions)!=null&&v.url){try{new URL(o.nuxtIcon.iconifyApiOptions.url)}catch{console.warn("Nuxt Icon: Invalid custom Iconify API URL");return}if((y=(x=o.nuxtIcon)==null?void 0:x.iconifyApiOptions)!=null&&y.publicApiFallback){J("custom",{resources:[(b=o.nuxtIcon)==null?void 0:b.iconifyApiOptions.url],index:0});return}J("",{resources:[(O=o.nuxtIcon)==null?void 0:O.iconifyApiOptions.url]})}},{immediate:!0});const i=Ge("icons",()=>({})),c=Ke(!1),a=C(()=>{var l,v;return(v=(l=o.nuxtIcon)==null?void 0:l.aliases)!=null&&v[s.name]?o.nuxtIcon.aliases[s.name]:s.name}),u=C(()=>ot(a.value)),f=C(()=>[u.value.provider,u.value.prefix,u.value.name].filter(Boolean).join(":")),d=C(()=>{var l;return(l=i.value)==null?void 0:l[f.value]}),p=C(()=>{var l;return(l=r.vueApp)==null?void 0:l.component(a.value)}),g=C(()=>{var v,x,y;if(!s.size&&typeof((v=o.nuxtIcon)==null?void 0:v.size)=="boolean"&&!((x=o.nuxtIcon)!=null&&x.size))return;const l=s.size||((y=o.nuxtIcon)==null?void 0:y.size)||"1em";return String(Number(l))===l?`${l}px`:l}),w=C(()=>{var l;return((l=o==null?void 0:o.nuxtIcon)==null?void 0:l.class)??"icon"});async function m(){var l;p.value||(l=i.value)!=null&&l[f.value]||(c.value=!0,i.value[f.value]=await fn(u.value).catch(()=>{}),c.value=!1)}return le(a,m),!p.value&&([t,n]=Je(()=>m()),t=await t,n()),(l,v)=>c.value?(M(),ae("span",{key:0,class:z(w.value),style:ue({width:g.value,height:g.value})},null,6)):d.value?(M(),fe(We(jt),{key:1,icon:d.value,class:z(w.value),width:g.value,height:g.value},null,8,["icon","class","width","height"])):p.value?(M(),fe(Xe(p.value),{key:2,class:z(w.value),width:g.value,height:g.value},null,8,["class","width","height"])):(M(),ae("span",{key:3,class:z(w.value),style:ue({fontSize:g.value,lineHeight:g.value,width:g.value,height:g.value})},[Ye(l.$slots,"default",{},()=>[et(tt(e.name),1)],!0)],6))}}),mn=nt(pn,[["__scopeId","data-v-e8d572f6"]]);export{mn as default};
