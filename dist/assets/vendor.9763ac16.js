var ED=Object.defineProperty,DD=Object.defineProperties;var MD=Object.getOwnPropertyDescriptors;var gb=Object.getOwnPropertySymbols;var TD=Object.prototype.hasOwnProperty,SD=Object.prototype.propertyIsEnumerable;var pb=(a,l,h)=>l in a?ED(a,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):a[l]=h,xt=(a,l)=>{for(var h in l||(l={}))TD.call(l,h)&&pb(a,h,l[h]);if(gb)for(var h of gb(l))SD.call(l,h)&&pb(a,h,l[h]);return a},Fo=(a,l)=>DD(a,MD(l));function ka(a,l){const h=Object.create(null),p=a.split(",");for(let m=0;m<p.length;m++)h[p[m]]=!0;return l?m=>!!h[m.toLowerCase()]:m=>!!h[m]}const ID="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",ND=ka(ID),BD="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PD=ka(BD);function hw(a){return!!a||a===""}function Gr(a){if(bt(a)){const l={};for(let h=0;h<a.length;h++){const p=a[h],m=ue(p)?LD(p):Gr(p);if(m)for(const C in m)l[C]=m[C]}return l}else{if(ue(a))return a;if(pe(a))return a}}const zD=/;(?![^(]*\))/g,RD=/:(.+)/;function LD(a){const l={};return a.split(zD).forEach(h=>{if(h){const p=h.split(RD);p.length>1&&(l[p[0].trim()]=p[1].trim())}}),l}function $r(a){let l="";if(ue(a))l=a;else if(bt(a))for(let h=0;h<a.length;h++){const p=$r(a[h]);p&&(l+=p+" ")}else if(pe(a))for(const h in a)a[h]&&(l+=h+" ");return l.trim()}function OD(a){if(!a)return null;let{class:l,style:h}=a;return l&&!ue(l)&&(a.class=$r(l)),h&&(a.style=Gr(h)),a}function jD(a,l){if(a.length!==l.length)return!1;let h=!0;for(let p=0;h&&p<a.length;p++)h=mo(a[p],l[p]);return h}function mo(a,l){if(a===l)return!0;let h=fb(a),p=fb(l);if(h||p)return h&&p?a.getTime()===l.getTime():!1;if(h=bt(a),p=bt(l),h||p)return h&&p?jD(a,l):!1;if(h=pe(a),p=pe(l),h||p){if(!h||!p)return!1;const m=Object.keys(a).length,C=Object.keys(l).length;if(m!==C)return!1;for(const w in a){const _=a.hasOwnProperty(w),k=l.hasOwnProperty(w);if(_&&!k||!_&&k||!mo(a[w],l[w]))return!1}}return String(a)===String(l)}function ba(a,l){return a.findIndex(h=>mo(h,l))}const FD=a=>ue(a)?a:a==null?"":bt(a)||pe(a)&&(a.toString===pw||!Dt(a.toString))?JSON.stringify(a,gw,2):String(a),gw=(a,l)=>l&&l.__v_isRef?gw(a,l.value):Ri(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((h,[p,m])=>(h[`${p} =>`]=m,h),{})}:Zo(l)?{[`Set(${l.size})`]:[...l.values()]}:pe(l)&&!bt(l)&&!fw(l)?String(l):l,Wt={},zi=[],Cn=()=>{},VD=()=>!1,HD=/^on[^a-z]/,Kr=a=>HD.test(a),kd=a=>a.startsWith("onUpdate:"),ge=Object.assign,bd=(a,l)=>{const h=a.indexOf(l);h>-1&&a.splice(h,1)},UD=Object.prototype.hasOwnProperty,jt=(a,l)=>UD.call(a,l),bt=Array.isArray,Ri=a=>wa(a)==="[object Map]",Zo=a=>wa(a)==="[object Set]",fb=a=>a instanceof Date,Dt=a=>typeof a=="function",ue=a=>typeof a=="string",wd=a=>typeof a=="symbol",pe=a=>a!==null&&typeof a=="object",Cd=a=>pe(a)&&Dt(a.then)&&Dt(a.catch),pw=Object.prototype.toString,wa=a=>pw.call(a),WD=a=>wa(a).slice(8,-1),fw=a=>wa(a)==="[object Object]",Ad=a=>ue(a)&&a!=="NaN"&&a[0]!=="-"&&""+parseInt(a,10)===a,Dr=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ca=a=>{const l=Object.create(null);return h=>l[h]||(l[h]=a(h))},qD=/-(\w)/g,tn=Ca(a=>a.replace(qD,(l,h)=>h?h.toUpperCase():"")),GD=/\B([A-Z])/g,Nn=Ca(a=>a.replace(GD,"-$1").toLowerCase()),Yr=Ca(a=>a.charAt(0).toUpperCase()+a.slice(1)),Mr=Ca(a=>a?`on${Yr(a)}`:""),jr=(a,l)=>!Object.is(a,l),Li=(a,l)=>{for(let h=0;h<a.length;h++)a[h](l)},sa=(a,l,h)=>{Object.defineProperty(a,l,{configurable:!0,enumerable:!1,value:h})},ko=a=>{const l=parseFloat(a);return isNaN(l)?a:l};let mb;const $D=()=>mb||(mb=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let pn;class _d{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&pn&&(this.parent=pn,this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}run(l){if(this.active)try{return pn=this,l()}finally{pn=this.parent}}on(){pn=this}off(){pn=this.parent}stop(l){if(this.active){let h,p;for(h=0,p=this.effects.length;h<p;h++)this.effects[h].stop();for(h=0,p=this.cleanups.length;h<p;h++)this.cleanups[h]();if(this.scopes)for(h=0,p=this.scopes.length;h<p;h++)this.scopes[h].stop(!0);if(this.parent&&!l){const m=this.parent.scopes.pop();m&&m!==this&&(this.parent.scopes[this.index]=m,m.index=this.index)}this.active=!1}}}function KD(a){return new _d(a)}function mw(a,l=pn){l&&l.active&&l.effects.push(a)}function YD(){return pn}function QD(a){pn&&pn.cleanups.push(a)}const vd=a=>{const l=new Set(a);return l.w=0,l.n=0,l},kw=a=>(a.w&bo)>0,bw=a=>(a.n&bo)>0,ZD=({deps:a})=>{if(a.length)for(let l=0;l<a.length;l++)a[l].w|=bo},JD=a=>{const{deps:l}=a;if(l.length){let h=0;for(let p=0;p<l.length;p++){const m=l[p];kw(m)&&!bw(m)?m.delete(a):l[h++]=m,m.w&=~bo,m.n&=~bo}l.length=h}},Kl=new WeakMap;let yr=0,bo=1;const Yl=30;let In;const $o=Symbol(""),Ql=Symbol("");class Qr{constructor(l,h=null,p){this.fn=l,this.scheduler=h,this.active=!0,this.deps=[],this.parent=void 0,mw(this,p)}run(){if(!this.active)return this.fn();let l=In,h=po;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=In,In=this,po=!0,bo=1<<++yr,yr<=Yl?ZD(this):kb(this),this.fn()}finally{yr<=Yl&&JD(this),bo=1<<--yr,In=this.parent,po=h,this.parent=void 0}}stop(){this.active&&(kb(this),this.onStop&&this.onStop(),this.active=!1)}}function kb(a){const{deps:l}=a;if(l.length){for(let h=0;h<l.length;h++)l[h].delete(a);l.length=0}}function XD(a,l){a.effect&&(a=a.effect.fn);const h=new Qr(a);l&&(ge(h,l),l.scope&&mw(h,l.scope)),(!l||!l.lazy)&&h.run();const p=h.run.bind(h);return p.effect=h,p}function tM(a){a.effect.stop()}let po=!0;const ww=[];function Jo(){ww.push(po),po=!1}function Xo(){const a=ww.pop();po=a===void 0?!0:a}function en(a,l,h){if(po&&In){let p=Kl.get(a);p||Kl.set(a,p=new Map);let m=p.get(h);m||p.set(h,m=vd()),Cw(m)}}function Cw(a,l){let h=!1;yr<=Yl?bw(a)||(a.n|=bo,h=!kw(a)):h=!a.has(In),h&&(a.add(In),In.deps.push(a))}function Qn(a,l,h,p,m,C){const w=Kl.get(a);if(!w)return;let _=[];if(l==="clear")_=[...w.values()];else if(h==="length"&&bt(a))w.forEach((k,y)=>{(y==="length"||y>=p)&&_.push(k)});else switch(h!==void 0&&_.push(w.get(h)),l){case"add":bt(a)?Ad(h)&&_.push(w.get("length")):(_.push(w.get($o)),Ri(a)&&_.push(w.get(Ql)));break;case"delete":bt(a)||(_.push(w.get($o)),Ri(a)&&_.push(w.get(Ql)));break;case"set":Ri(a)&&_.push(w.get($o));break}if(_.length===1)_[0]&&Zl(_[0]);else{const k=[];for(const y of _)y&&k.push(...y);Zl(vd(k))}}function Zl(a,l){for(const h of bt(a)?a:[...a])(h!==In||h.allowRecurse)&&(h.scheduler?h.scheduler():h.run())}const eM=ka("__proto__,__v_isRef,__isVue"),Aw=new Set(Object.getOwnPropertyNames(Symbol).map(a=>Symbol[a]).filter(wd)),nM=Aa(),oM=Aa(!1,!0),iM=Aa(!0),rM=Aa(!0,!0),bb=sM();function sM(){const a={};return["includes","indexOf","lastIndexOf"].forEach(l=>{a[l]=function(...h){const p=Rt(this);for(let C=0,w=this.length;C<w;C++)en(p,"get",C+"");const m=p[l](...h);return m===-1||m===!1?p[l](...h.map(Rt)):m}}),["push","pop","shift","unshift","splice"].forEach(l=>{a[l]=function(...h){Jo();const p=Rt(this)[l].apply(this,h);return Xo(),p}}),a}function Aa(a=!1,l=!1){return function(p,m,C){if(m==="__v_isReactive")return!a;if(m==="__v_isReadonly")return a;if(m==="__v_isShallow")return l;if(m==="__v_raw"&&C===(a?l?Mw:Dw:l?Ew:xw).get(p))return p;const w=bt(p);if(!a&&w&&jt(bb,m))return Reflect.get(bb,m,C);const _=Reflect.get(p,m,C);return(wd(m)?Aw.has(m):eM(m))||(a||en(p,"get",m),l)?_:ke(_)?!w||!Ad(m)?_.value:_:pe(_)?a?xd(_):Yi(_):_}}const aM=_w(),cM=_w(!0);function _w(a=!1){return function(h,p,m,C){let w=h[p];if(Vi(w)&&ke(w)&&!ke(m))return!1;if(!a&&!Vi(m)&&(Ed(m)||(m=Rt(m),w=Rt(w)),!bt(h)&&ke(w)&&!ke(m)))return w.value=m,!0;const _=bt(h)&&Ad(p)?Number(p)<h.length:jt(h,p),k=Reflect.set(h,p,m,C);return h===Rt(C)&&(_?jr(m,w)&&Qn(h,"set",p,m):Qn(h,"add",p,m)),k}}function lM(a,l){const h=jt(a,l);a[l];const p=Reflect.deleteProperty(a,l);return p&&h&&Qn(a,"delete",l,void 0),p}function dM(a,l){const h=Reflect.has(a,l);return(!wd(l)||!Aw.has(l))&&en(a,"has",l),h}function uM(a){return en(a,"iterate",bt(a)?"length":$o),Reflect.ownKeys(a)}const vw={get:nM,set:aM,deleteProperty:lM,has:dM,ownKeys:uM},yw={get:iM,set(a,l){return!0},deleteProperty(a,l){return!0}},hM=ge({},vw,{get:oM,set:cM}),gM=ge({},yw,{get:rM}),yd=a=>a,_a=a=>Reflect.getPrototypeOf(a);function Ks(a,l,h=!1,p=!1){a=a.__v_raw;const m=Rt(a),C=Rt(l);l!==C&&!h&&en(m,"get",l),!h&&en(m,"get",C);const{has:w}=_a(m),_=p?yd:h?Td:Fr;if(w.call(m,l))return _(a.get(l));if(w.call(m,C))return _(a.get(C));a!==m&&a.get(l)}function Ys(a,l=!1){const h=this.__v_raw,p=Rt(h),m=Rt(a);return a!==m&&!l&&en(p,"has",a),!l&&en(p,"has",m),a===m?h.has(a):h.has(a)||h.has(m)}function Qs(a,l=!1){return a=a.__v_raw,!l&&en(Rt(a),"iterate",$o),Reflect.get(a,"size",a)}function wb(a){a=Rt(a);const l=Rt(this);return _a(l).has.call(l,a)||(l.add(a),Qn(l,"add",a,a)),this}function Cb(a,l){l=Rt(l);const h=Rt(this),{has:p,get:m}=_a(h);let C=p.call(h,a);C||(a=Rt(a),C=p.call(h,a));const w=m.call(h,a);return h.set(a,l),C?jr(l,w)&&Qn(h,"set",a,l):Qn(h,"add",a,l),this}function Ab(a){const l=Rt(this),{has:h,get:p}=_a(l);let m=h.call(l,a);m||(a=Rt(a),m=h.call(l,a)),p&&p.call(l,a);const C=l.delete(a);return m&&Qn(l,"delete",a,void 0),C}function _b(){const a=Rt(this),l=a.size!==0,h=a.clear();return l&&Qn(a,"clear",void 0,void 0),h}function Zs(a,l){return function(p,m){const C=this,w=C.__v_raw,_=Rt(w),k=l?yd:a?Td:Fr;return!a&&en(_,"iterate",$o),w.forEach((y,E)=>p.call(m,k(y),k(E),C))}}function Js(a,l,h){return function(...p){const m=this.__v_raw,C=Rt(m),w=Ri(C),_=a==="entries"||a===Symbol.iterator&&w,k=a==="keys"&&w,y=m[a](...p),E=h?yd:l?Td:Fr;return!l&&en(C,"iterate",k?Ql:$o),{next(){const{value:A,done:x}=y.next();return x?{value:A,done:x}:{value:_?[E(A[0]),E(A[1])]:E(A),done:x}},[Symbol.iterator](){return this}}}}function ro(a){return function(...l){return a==="delete"?!1:this}}function pM(){const a={get(C){return Ks(this,C)},get size(){return Qs(this)},has:Ys,add:wb,set:Cb,delete:Ab,clear:_b,forEach:Zs(!1,!1)},l={get(C){return Ks(this,C,!1,!0)},get size(){return Qs(this)},has:Ys,add:wb,set:Cb,delete:Ab,clear:_b,forEach:Zs(!1,!0)},h={get(C){return Ks(this,C,!0)},get size(){return Qs(this,!0)},has(C){return Ys.call(this,C,!0)},add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear"),forEach:Zs(!0,!1)},p={get(C){return Ks(this,C,!0,!0)},get size(){return Qs(this,!0)},has(C){return Ys.call(this,C,!0)},add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear"),forEach:Zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(C=>{a[C]=Js(C,!1,!1),h[C]=Js(C,!0,!1),l[C]=Js(C,!1,!0),p[C]=Js(C,!0,!0)}),[a,h,l,p]}const[fM,mM,kM,bM]=pM();function va(a,l){const h=l?a?bM:kM:a?mM:fM;return(p,m,C)=>m==="__v_isReactive"?!a:m==="__v_isReadonly"?a:m==="__v_raw"?p:Reflect.get(jt(h,m)&&m in p?h:p,m,C)}const wM={get:va(!1,!1)},CM={get:va(!1,!0)},AM={get:va(!0,!1)},_M={get:va(!0,!0)},xw=new WeakMap,Ew=new WeakMap,Dw=new WeakMap,Mw=new WeakMap;function vM(a){switch(a){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yM(a){return a.__v_skip||!Object.isExtensible(a)?0:vM(WD(a))}function Yi(a){return Vi(a)?a:ya(a,!1,vw,wM,xw)}function Tw(a){return ya(a,!1,hM,CM,Ew)}function xd(a){return ya(a,!0,yw,AM,Dw)}function xM(a){return ya(a,!0,gM,_M,Mw)}function ya(a,l,h,p,m){if(!pe(a)||a.__v_raw&&!(l&&a.__v_isReactive))return a;const C=m.get(a);if(C)return C;const w=yM(a);if(w===0)return a;const _=new Proxy(a,w===2?p:h);return m.set(a,_),_}function Ko(a){return Vi(a)?Ko(a.__v_raw):!!(a&&a.__v_isReactive)}function Vi(a){return!!(a&&a.__v_isReadonly)}function Ed(a){return!!(a&&a.__v_isShallow)}function Dd(a){return Ko(a)||Vi(a)}function Rt(a){const l=a&&a.__v_raw;return l?Rt(l):a}function Md(a){return sa(a,"__v_skip",!0),a}const Fr=a=>pe(a)?Yi(a):a,Td=a=>pe(a)?xd(a):a;function Sd(a){po&&In&&(a=Rt(a),Cw(a.dep||(a.dep=vd())))}function xa(a,l){a=Rt(a),a.dep&&Zl(a.dep)}function ke(a){return!!(a&&a.__v_isRef===!0)}function Tr(a){return Iw(a,!1)}function Sw(a){return Iw(a,!0)}function Iw(a,l){return ke(a)?a:new EM(a,l)}class EM{constructor(l,h){this.__v_isShallow=h,this.dep=void 0,this.__v_isRef=!0,this._rawValue=h?l:Rt(l),this._value=h?l:Fr(l)}get value(){return Sd(this),this._value}set value(l){l=this.__v_isShallow?l:Rt(l),jr(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:Fr(l),xa(this))}}function DM(a){xa(a)}function Oi(a){return ke(a)?a.value:a}const MM={get:(a,l,h)=>Oi(Reflect.get(a,l,h)),set:(a,l,h,p)=>{const m=a[l];return ke(m)&&!ke(h)?(m.value=h,!0):Reflect.set(a,l,h,p)}};function Id(a){return Ko(a)?a:new Proxy(a,MM)}class TM{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:h,set:p}=l(()=>Sd(this),()=>xa(this));this._get=h,this._set=p}get value(){return this._get()}set value(l){this._set(l)}}function SM(a){return new TM(a)}function IM(a){const l=bt(a)?new Array(a.length):{};for(const h in a)l[h]=Nw(a,h);return l}class NM{constructor(l,h,p){this._object=l,this._key=h,this._defaultValue=p,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Nw(a,l,h){const p=a[l];return ke(p)?p:new NM(a,l,h)}class BM{constructor(l,h,p,m){this._setter=h,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Qr(l,()=>{this._dirty||(this._dirty=!0,xa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!m,this.__v_isReadonly=p}get value(){const l=Rt(this);return Sd(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function PM(a,l,h=!1){let p,m;const C=Dt(a);return C?(p=a,m=Cn):(p=a.get,m=a.set),new BM(p,m,C||!m,h)}Promise.resolve();const Sr=[];function Bw(a,...l){Jo();const h=Sr.length?Sr[Sr.length-1].component:null,p=h&&h.appContext.config.warnHandler,m=zM();if(p)Bn(p,h,11,[a+l.join(""),h&&h.proxy,m.map(({vnode:C})=>`at <${vC(h,C.type)}>`).join(`
`),m]);else{const C=[`[Vue warn]: ${a}`,...l];m.length&&C.push(`
`,...RM(m)),console.warn(...C)}Xo()}function zM(){let a=Sr[Sr.length-1];if(!a)return[];const l=[];for(;a;){const h=l[0];h&&h.vnode===a?h.recurseCount++:l.push({vnode:a,recurseCount:0});const p=a.component&&a.component.parent;a=p&&p.vnode}return l}function RM(a){const l=[];return a.forEach((h,p)=>{l.push(...p===0?[]:[`
`],...LM(h))}),l}function LM({vnode:a,recurseCount:l}){const h=l>0?`... (${l} recursive calls)`:"",p=a.component?a.component.parent==null:!1,m=` at <${vC(a.component,a.type,p)}`,C=">"+h;return a.props?[m,...OM(a.props),C]:[m+C]}function OM(a){const l=[],h=Object.keys(a);return h.slice(0,3).forEach(p=>{l.push(...Pw(p,a[p]))}),h.length>3&&l.push(" ..."),l}function Pw(a,l,h){return ue(l)?(l=JSON.stringify(l),h?l:[`${a}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?h?l:[`${a}=${l}`]:ke(l)?(l=Pw(a,Rt(l.value),!0),h?l:[`${a}=Ref<`,l,">"]):Dt(l)?[`${a}=fn${l.name?`<${l.name}>`:""}`]:(l=Rt(l),h?l:[`${a}=`,l])}function Bn(a,l,h,p){let m;try{m=p?a(...p):a()}catch(C){ti(C,l,h)}return m}function Xe(a,l,h,p){if(Dt(a)){const C=Bn(a,l,h,p);return C&&Cd(C)&&C.catch(w=>{ti(w,l,h)}),C}const m=[];for(let C=0;C<a.length;C++)m.push(Xe(a[C],l,h,p));return m}function ti(a,l,h,p=!0){const m=l?l.vnode:null;if(l){let C=l.parent;const w=l.proxy,_=h;for(;C;){const y=C.ec;if(y){for(let E=0;E<y.length;E++)if(y[E](a,w,_)===!1)return}C=C.parent}const k=l.appContext.config.errorHandler;if(k){Bn(k,null,10,[a,w,_]);return}}jM(a,h,m,p)}function jM(a,l,h,p=!0){console.error(a)}let aa=!1,Jl=!1;const Ze=[];let Kn=0;const Ir=[];let xr=null,Ii=0;const Nr=[];let uo=null,Ni=0;const zw=Promise.resolve();let Nd=null,Xl=null;function Ea(a){const l=Nd||zw;return a?l.then(this?a.bind(this):a):l}function FM(a){let l=Kn+1,h=Ze.length;for(;l<h;){const p=l+h>>>1;Vr(Ze[p])<a?l=p+1:h=p}return l}function Bd(a){(!Ze.length||!Ze.includes(a,aa&&a.allowRecurse?Kn+1:Kn))&&a!==Xl&&(a.id==null?Ze.push(a):Ze.splice(FM(a.id),0,a),Rw())}function Rw(){!aa&&!Jl&&(Jl=!0,Nd=zw.then(Ow))}function VM(a){const l=Ze.indexOf(a);l>Kn&&Ze.splice(l,1)}function Lw(a,l,h,p){bt(a)?h.push(...a):(!l||!l.includes(a,a.allowRecurse?p+1:p))&&h.push(a),Rw()}function HM(a){Lw(a,xr,Ir,Ii)}function Pd(a){Lw(a,uo,Nr,Ni)}function zd(a,l=null){if(Ir.length){for(Xl=l,xr=[...new Set(Ir)],Ir.length=0,Ii=0;Ii<xr.length;Ii++)xr[Ii]();xr=null,Ii=0,Xl=null,zd(a,l)}}function ca(a){if(Nr.length){const l=[...new Set(Nr)];if(Nr.length=0,uo){uo.push(...l);return}for(uo=l,uo.sort((h,p)=>Vr(h)-Vr(p)),Ni=0;Ni<uo.length;Ni++)uo[Ni]();uo=null,Ni=0}}const Vr=a=>a.id==null?1/0:a.id;function Ow(a){Jl=!1,aa=!0,zd(a),Ze.sort((h,p)=>Vr(h)-Vr(p));const l=Cn;try{for(Kn=0;Kn<Ze.length;Kn++){const h=Ze[Kn];h&&h.active!==!1&&Bn(h,null,14)}}finally{Kn=0,Ze.length=0,ca(),aa=!1,Nd=null,(Ze.length||Ir.length||Nr.length)&&Ow(a)}}let Bi,Xs=[];function jw(a,l){var h,p;Bi=a,Bi?(Bi.enabled=!0,Xs.forEach(({event:m,args:C})=>Bi.emit(m,...C)),Xs=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((p=(h=window.navigator)===null||h===void 0?void 0:h.userAgent)===null||p===void 0)&&p.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(C=>{jw(C,l)}),setTimeout(()=>{Bi||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Xs=[])},3e3)):Xs=[]}function UM(a,l,...h){const p=a.vnode.props||Wt;let m=h;const C=l.startsWith("update:"),w=C&&l.slice(7);if(w&&w in p){const E=`${w==="modelValue"?"model":w}Modifiers`,{number:A,trim:x}=p[E]||Wt;x?m=h.map(S=>S.trim()):A&&(m=h.map(ko))}let _,k=p[_=Mr(l)]||p[_=Mr(tn(l))];!k&&C&&(k=p[_=Mr(Nn(l))]),k&&Xe(k,a,6,m);const y=p[_+"Once"];if(y){if(!a.emitted)a.emitted={};else if(a.emitted[_])return;a.emitted[_]=!0,Xe(y,a,6,m)}}function Fw(a,l,h=!1){const p=l.emitsCache,m=p.get(a);if(m!==void 0)return m;const C=a.emits;let w={},_=!1;if(!Dt(a)){const k=y=>{const E=Fw(y,l,!0);E&&(_=!0,ge(w,E))};!h&&l.mixins.length&&l.mixins.forEach(k),a.extends&&k(a.extends),a.mixins&&a.mixins.forEach(k)}return!C&&!_?(p.set(a,null),null):(bt(C)?C.forEach(k=>w[k]=null):ge(w,C),p.set(a,w),w)}function Rd(a,l){return!a||!Kr(l)?!1:(l=l.slice(2).replace(/Once$/,""),jt(a,l[0].toLowerCase()+l.slice(1))||jt(a,Nn(l))||jt(a,l))}let Je=null,Da=null;function Hr(a){const l=Je;return Je=a,Da=a&&a.type.__scopeId||null,l}function WM(a){Da=a}function qM(){Da=null}const GM=a=>Ld;function Ld(a,l=Je,h){if(!l||a._n)return a;const p=(...m)=>{p._d&&id(-1);const C=Hr(l),w=a(...m);return Hr(C),p._d&&id(1),w};return p._n=!0,p._c=!0,p._d=!0,p}function ia(a){const{type:l,vnode:h,proxy:p,withProxy:m,props:C,propsOptions:[w],slots:_,attrs:k,emit:y,render:E,renderCache:A,data:x,setupState:S,ctx:H,inheritAttrs:nt}=a;let L,O;const z=Hr(a);try{if(h.shapeFlag&4){const V=m||p;L=Qe(E.call(V,V,A,C,S,x,H)),O=k}else{const V=l;L=Qe(V.length>1?V(C,{attrs:k,slots:_,emit:y}):V(C,null)),O=l.props?k:KM(k)}}catch(V){zr.length=0,ti(V,a,1),L=se(Re)}let G=L;if(O&&nt!==!1){const V=Object.keys(O),{shapeFlag:st}=G;V.length&&st&7&&(w&&V.some(kd)&&(O=YM(O,w)),G=Co(G,O))}return h.dirs&&(G.dirs=G.dirs?G.dirs.concat(h.dirs):h.dirs),h.transition&&(G.transition=h.transition),L=G,Hr(z),L}function $M(a){let l;for(let h=0;h<a.length;h++){const p=a[h];if(wo(p)){if(p.type!==Re||p.children==="v-if"){if(l)return;l=p}}else return}return l}const KM=a=>{let l;for(const h in a)(h==="class"||h==="style"||Kr(h))&&((l||(l={}))[h]=a[h]);return l},YM=(a,l)=>{const h={};for(const p in a)(!kd(p)||!(p.slice(9)in l))&&(h[p]=a[p]);return h};function QM(a,l,h){const{props:p,children:m,component:C}=a,{props:w,children:_,patchFlag:k}=l,y=C.emitsOptions;if(l.dirs||l.transition)return!0;if(h&&k>=0){if(k&1024)return!0;if(k&16)return p?vb(p,w,y):!!w;if(k&8){const E=l.dynamicProps;for(let A=0;A<E.length;A++){const x=E[A];if(w[x]!==p[x]&&!Rd(y,x))return!0}}}else return(m||_)&&(!_||!_.$stable)?!0:p===w?!1:p?w?vb(p,w,y):!0:!!w;return!1}function vb(a,l,h){const p=Object.keys(l);if(p.length!==Object.keys(a).length)return!0;for(let m=0;m<p.length;m++){const C=p[m];if(l[C]!==a[C]&&!Rd(h,C))return!0}return!1}function Od({vnode:a,parent:l},h){for(;l&&l.subTree===a;)(a=l.vnode).el=h,l=l.parent}const ZM=a=>a.__isSuspense,JM={name:"Suspense",__isSuspense:!0,process(a,l,h,p,m,C,w,_,k,y){a==null?tT(l,h,p,m,C,w,_,k,y):eT(a,l,h,p,m,w,_,k,y)},hydrate:nT,create:jd,normalize:oT},XM=JM;function Ur(a,l){const h=a.props&&a.props[l];Dt(h)&&h()}function tT(a,l,h,p,m,C,w,_,k){const{p:y,o:{createElement:E}}=k,A=E("div"),x=a.suspense=jd(a,m,p,l,A,h,C,w,_,k);y(null,x.pendingBranch=a.ssContent,A,null,p,x,C,w),x.deps>0?(Ur(a,"onPending"),Ur(a,"onFallback"),y(null,a.ssFallback,l,h,p,null,C,w),ji(x,a.ssFallback)):x.resolve()}function eT(a,l,h,p,m,C,w,_,{p:k,um:y,o:{createElement:E}}){const A=l.suspense=a.suspense;A.vnode=l,l.el=a.el;const x=l.ssContent,S=l.ssFallback,{activeBranch:H,pendingBranch:nt,isInFallback:L,isHydrating:O}=A;if(nt)A.pendingBranch=x,Sn(x,nt)?(k(nt,x,A.hiddenContainer,null,m,A,C,w,_),A.deps<=0?A.resolve():L&&(k(H,S,h,p,m,null,C,w,_),ji(A,S))):(A.pendingId++,O?(A.isHydrating=!1,A.activeBranch=nt):y(nt,m,A),A.deps=0,A.effects.length=0,A.hiddenContainer=E("div"),L?(k(null,x,A.hiddenContainer,null,m,A,C,w,_),A.deps<=0?A.resolve():(k(H,S,h,p,m,null,C,w,_),ji(A,S))):H&&Sn(x,H)?(k(H,x,h,p,m,A,C,w,_),A.resolve(!0)):(k(null,x,A.hiddenContainer,null,m,A,C,w,_),A.deps<=0&&A.resolve()));else if(H&&Sn(x,H))k(H,x,h,p,m,A,C,w,_),ji(A,x);else if(Ur(l,"onPending"),A.pendingBranch=x,A.pendingId++,k(null,x,A.hiddenContainer,null,m,A,C,w,_),A.deps<=0)A.resolve();else{const{timeout:z,pendingId:G}=A;z>0?setTimeout(()=>{A.pendingId===G&&A.fallback(S)},z):z===0&&A.fallback(S)}}function jd(a,l,h,p,m,C,w,_,k,y,E=!1){const{p:A,m:x,um:S,n:H,o:{parentNode:nt,remove:L}}=y,O=ko(a.props&&a.props.timeout),z={vnode:a,parent:l,parentComponent:h,isSVG:w,container:p,hiddenContainer:m,anchor:C,deps:0,pendingId:0,timeout:typeof O=="number"?O:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:E,isUnmounted:!1,effects:[],resolve(G=!1){const{vnode:V,activeBranch:st,pendingBranch:ct,pendingId:F,effects:Q,parentComponent:Z,container:lt}=z;if(z.isHydrating)z.isHydrating=!1;else if(!G){const ft=st&&ct.transition&&ct.transition.mode==="out-in";ft&&(st.transition.afterLeave=()=>{F===z.pendingId&&x(ct,lt,Mt,0)});let{anchor:Mt}=z;st&&(Mt=H(st),S(st,Z,z,!0)),ft||x(ct,lt,Mt,0)}ji(z,ct),z.pendingBranch=null,z.isInFallback=!1;let ut=z.parent,U=!1;for(;ut;){if(ut.pendingBranch){ut.effects.push(...Q),U=!0;break}ut=ut.parent}U||Pd(Q),z.effects=[],Ur(V,"onResolve")},fallback(G){if(!z.pendingBranch)return;const{vnode:V,activeBranch:st,parentComponent:ct,container:F,isSVG:Q}=z;Ur(V,"onFallback");const Z=H(st),lt=()=>{!z.isInFallback||(A(null,G,F,Z,ct,null,Q,_,k),ji(z,G))},ut=G.transition&&G.transition.mode==="out-in";ut&&(st.transition.afterLeave=lt),z.isInFallback=!0,S(st,ct,null,!0),ut||lt()},move(G,V,st){z.activeBranch&&x(z.activeBranch,G,V,st),z.container=G},next(){return z.activeBranch&&H(z.activeBranch)},registerDep(G,V){const st=!!z.pendingBranch;st&&z.deps++;const ct=G.vnode.el;G.asyncDep.catch(F=>{ti(F,G,0)}).then(F=>{if(G.isUnmounted||z.isUnmounted||z.pendingId!==G.suspenseId)return;G.asyncResolved=!0;const{vnode:Q}=G;ad(G,F,!1),ct&&(Q.el=ct);const Z=!ct&&G.subTree.el;V(G,Q,nt(ct||G.subTree.el),ct?null:H(G.subTree),z,w,k),Z&&L(Z),Od(G,Q.el),st&&--z.deps===0&&z.resolve()})},unmount(G,V){z.isUnmounted=!0,z.activeBranch&&S(z.activeBranch,h,G,V),z.pendingBranch&&S(z.pendingBranch,h,G,V)}};return z}function nT(a,l,h,p,m,C,w,_,k){const y=l.suspense=jd(l,p,h,a.parentNode,document.createElement("div"),null,m,C,w,_,!0),E=k(a,y.pendingBranch=l.ssContent,h,y,C,w);return y.deps===0&&y.resolve(),E}function oT(a){const{shapeFlag:l,children:h}=a,p=l&32;a.ssContent=yb(p?h.default:h),a.ssFallback=p?yb(h.fallback):se(Re)}function yb(a){let l;if(Dt(a)){const h=Wi&&a._c;h&&(a._d=!1,Ba()),a=a(),h&&(a._d=!0,l=zn,hC())}return bt(a)&&(a=$M(a)),a=Qe(a),l&&!a.dynamicChildren&&(a.dynamicChildren=l.filter(h=>h!==a)),a}function Vw(a,l){l&&l.pendingBranch?bt(a)?l.effects.push(...a):l.effects.push(a):Pd(a)}function ji(a,l){a.activeBranch=l;const{vnode:h,parentComponent:p}=a,m=h.el=l.el;p&&p.subTree===h&&(p.vnode.el=m,Od(p,m))}function Br(a,l){if(we){let h=we.provides;const p=we.parent&&we.parent.provides;p===h&&(h=we.provides=Object.create(p)),h[a]=l}}function Pn(a,l,h=!1){const p=we||Je;if(p){const m=p.parent==null?p.vnode.appContext&&p.vnode.appContext.provides:p.parent.provides;if(m&&a in m)return m[a];if(arguments.length>1)return h&&Dt(l)?l.call(p.proxy):l}}function iT(a,l){return Zr(a,null,l)}function Hw(a,l){return Zr(a,null,{flush:"post"})}function rT(a,l){return Zr(a,null,{flush:"sync"})}const xb={};function Fi(a,l,h){return Zr(a,l,h)}function Zr(a,l,{immediate:h,deep:p,flush:m,onTrack:C,onTrigger:w}=Wt){const _=we;let k,y=!1,E=!1;if(ke(a)?(k=()=>a.value,y=Ed(a)):Ko(a)?(k=()=>a,p=!0):bt(a)?(E=!0,y=a.some(Ko),k=()=>a.map(O=>{if(ke(O))return O.value;if(Ko(O))return Go(O);if(Dt(O))return Bn(O,_,2)})):Dt(a)?l?k=()=>Bn(a,_,2):k=()=>{if(!(_&&_.isUnmounted))return A&&A(),Xe(a,_,3,[x])}:k=Cn,l&&p){const O=k;k=()=>Go(O())}let A,x=O=>{A=L.onStop=()=>{Bn(O,_,4)}};if(qi)return x=Cn,l?h&&Xe(l,_,3,[k(),E?[]:void 0,x]):k(),Cn;let S=E?[]:xb;const H=()=>{if(!!L.active)if(l){const O=L.run();(p||y||(E?O.some((z,G)=>jr(z,S[G])):jr(O,S)))&&(A&&A(),Xe(l,_,3,[O,S===xb?void 0:S,x]),S=O)}else L.run()};H.allowRecurse=!!l;let nt;m==="sync"?nt=H:m==="post"?nt=()=>De(H,_&&_.suspense):nt=()=>{!_||_.isMounted?HM(H):H()};const L=new Qr(k,nt);return l?h?H():S=L.run():m==="post"?De(L.run.bind(L),_&&_.suspense):L.run(),()=>{L.stop(),_&&_.scope&&bd(_.scope.effects,L)}}function sT(a,l,h){const p=this.proxy,m=ue(a)?a.includes(".")?Uw(p,a):()=>p[a]:a.bind(p,p);let C;Dt(l)?C=l:(C=l.handler,h=l);const w=we;Ao(this);const _=Zr(m,C.bind(p),h);return w?Ao(w):fo(),_}function Uw(a,l){const h=l.split(".");return()=>{let p=a;for(let m=0;m<h.length&&p;m++)p=p[h[m]];return p}}function Go(a,l){if(!pe(a)||a.__v_skip||(l=l||new Set,l.has(a)))return a;if(l.add(a),ke(a))Go(a.value,l);else if(bt(a))for(let h=0;h<a.length;h++)Go(a[h],l);else if(Zo(a)||Ri(a))a.forEach(h=>{Go(h,l)});else if(fw(a))for(const h in a)Go(a[h],l);return a}function Fd(){const a={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ts(()=>{a.isMounted=!0}),Ia(()=>{a.isUnmounting=!0}),a}const gn=[Function,Array],aT={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:gn,onEnter:gn,onAfterEnter:gn,onEnterCancelled:gn,onBeforeLeave:gn,onLeave:gn,onAfterLeave:gn,onLeaveCancelled:gn,onBeforeAppear:gn,onAppear:gn,onAfterAppear:gn,onAppearCancelled:gn},setup(a,{slots:l}){const h=vo(),p=Fd();let m;return()=>{const C=l.default&&Ma(l.default(),!0);if(!C||!C.length)return;const w=Rt(a),{mode:_}=w,k=C[0];if(p.isLeaving)return Ol(k);const y=Eb(k);if(!y)return Ol(k);const E=Hi(y,w,p,h);Qo(y,E);const A=h.subTree,x=A&&Eb(A);let S=!1;const{getTransitionKey:H}=y.type;if(H){const nt=H();m===void 0?m=nt:nt!==m&&(m=nt,S=!0)}if(x&&x.type!==Re&&(!Sn(y,x)||S)){const nt=Hi(x,w,p,h);if(Qo(x,nt),_==="out-in")return p.isLeaving=!0,nt.afterLeave=()=>{p.isLeaving=!1,h.update()},Ol(k);_==="in-out"&&y.type!==Re&&(nt.delayLeave=(L,O,z)=>{const G=Ww(p,x);G[String(x.key)]=x,L._leaveCb=()=>{O(),L._leaveCb=void 0,delete E.delayedLeave},E.delayedLeave=z})}return k}}},Vd=aT;function Ww(a,l){const{leavingVNodes:h}=a;let p=h.get(l.type);return p||(p=Object.create(null),h.set(l.type,p)),p}function Hi(a,l,h,p){const{appear:m,mode:C,persisted:w=!1,onBeforeEnter:_,onEnter:k,onAfterEnter:y,onEnterCancelled:E,onBeforeLeave:A,onLeave:x,onAfterLeave:S,onLeaveCancelled:H,onBeforeAppear:nt,onAppear:L,onAfterAppear:O,onAppearCancelled:z}=l,G=String(a.key),V=Ww(h,a),st=(F,Q)=>{F&&Xe(F,p,9,Q)},ct={mode:C,persisted:w,beforeEnter(F){let Q=_;if(!h.isMounted)if(m)Q=nt||_;else return;F._leaveCb&&F._leaveCb(!0);const Z=V[G];Z&&Sn(a,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),st(Q,[F])},enter(F){let Q=k,Z=y,lt=E;if(!h.isMounted)if(m)Q=L||k,Z=O||y,lt=z||E;else return;let ut=!1;const U=F._enterCb=ft=>{ut||(ut=!0,ft?st(lt,[F]):st(Z,[F]),ct.delayedLeave&&ct.delayedLeave(),F._enterCb=void 0)};Q?(Q(F,U),Q.length<=1&&U()):U()},leave(F,Q){const Z=String(a.key);if(F._enterCb&&F._enterCb(!0),h.isUnmounting)return Q();st(A,[F]);let lt=!1;const ut=F._leaveCb=U=>{lt||(lt=!0,Q(),U?st(H,[F]):st(S,[F]),F._leaveCb=void 0,V[Z]===a&&delete V[Z])};V[Z]=a,x?(x(F,ut),x.length<=1&&ut()):ut()},clone(F){return Hi(F,l,h,p)}};return ct}function Ol(a){if(Xr(a))return a=Co(a),a.children=null,a}function Eb(a){return Xr(a)?a.children?a.children[0]:void 0:a}function Qo(a,l){a.shapeFlag&6&&a.component?Qo(a.component.subTree,l):a.shapeFlag&128?(a.ssContent.transition=l.clone(a.ssContent),a.ssFallback.transition=l.clone(a.ssFallback)):a.transition=l}function Ma(a,l=!1){let h=[],p=0;for(let m=0;m<a.length;m++){const C=a[m];C.type===Me?(C.patchFlag&128&&p++,h=h.concat(Ma(C.children,l))):(l||C.type!==Re)&&h.push(C)}if(p>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}function Jr(a){return Dt(a)?{setup:a,name:a.name}:a}const Wr=a=>!!a.type.__asyncLoader;function cT(a){Dt(a)&&(a={loader:a});const{loader:l,loadingComponent:h,errorComponent:p,delay:m=200,timeout:C,suspensible:w=!0,onError:_}=a;let k=null,y,E=0;const A=()=>(E++,k=null,x()),x=()=>{let S;return k||(S=k=l().catch(H=>{if(H=H instanceof Error?H:new Error(String(H)),_)return new Promise((nt,L)=>{_(H,()=>nt(A()),()=>L(H),E+1)});throw H}).then(H=>S!==k&&k?k:(H&&(H.__esModule||H[Symbol.toStringTag]==="Module")&&(H=H.default),y=H,H)))};return Jr({name:"AsyncComponentWrapper",__asyncLoader:x,get __asyncResolved(){return y},setup(){const S=we;if(y)return()=>jl(y,S);const H=z=>{k=null,ti(z,S,13,!p)};if(w&&S.suspense||qi)return x().then(z=>()=>jl(z,S)).catch(z=>(H(z),()=>p?se(p,{error:z}):null));const nt=Tr(!1),L=Tr(),O=Tr(!!m);return m&&setTimeout(()=>{O.value=!1},m),C!=null&&setTimeout(()=>{if(!nt.value&&!L.value){const z=new Error(`Async component timed out after ${C}ms.`);H(z),L.value=z}},C),x().then(()=>{nt.value=!0,S.parent&&Xr(S.parent.vnode)&&Bd(S.parent.update)}).catch(z=>{H(z),L.value=z}),()=>{if(nt.value&&y)return jl(y,S);if(L.value&&p)return se(p,{error:L.value});if(h&&!O.value)return se(h)}}})}function jl(a,{vnode:{ref:l,props:h,children:p}}){const m=se(a,h,p);return m.ref=l,m}const Xr=a=>a.type.__isKeepAlive,lT={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(a,{slots:l}){const h=vo(),p=h.ctx;if(!p.renderer)return l.default;const m=new Map,C=new Set;let w=null;const _=h.suspense,{renderer:{p:k,m:y,um:E,o:{createElement:A}}}=p,x=A("div");p.activate=(z,G,V,st,ct)=>{const F=z.component;y(z,G,V,0,_),k(F.vnode,z,G,V,F,_,st,z.slotScopeIds,ct),De(()=>{F.isDeactivated=!1,F.a&&Li(F.a);const Q=z.props&&z.props.onVnodeMounted;Q&&Ue(Q,F.parent,z)},_)},p.deactivate=z=>{const G=z.component;y(z,x,null,1,_),De(()=>{G.da&&Li(G.da);const V=z.props&&z.props.onVnodeUnmounted;V&&Ue(V,G.parent,z),G.isDeactivated=!0},_)};function S(z){Fl(z),E(z,h,_,!0)}function H(z){m.forEach((G,V)=>{const st=ga(G.type);st&&(!z||!z(st))&&nt(V)})}function nt(z){const G=m.get(z);!w||G.type!==w.type?S(G):w&&Fl(w),m.delete(z),C.delete(z)}Fi(()=>[a.include,a.exclude],([z,G])=>{z&&H(V=>Er(z,V)),G&&H(V=>!Er(G,V))},{flush:"post",deep:!0});let L=null;const O=()=>{L!=null&&m.set(L,Vl(h.subTree))};return ts(O),Sa(O),Ia(()=>{m.forEach(z=>{const{subTree:G,suspense:V}=h,st=Vl(G);if(z.type===st.type){Fl(st);const ct=st.component.da;ct&&De(ct,V);return}S(z)})}),()=>{if(L=null,!l.default)return null;const z=l.default(),G=z[0];if(z.length>1)return w=null,z;if(!wo(G)||!(G.shapeFlag&4)&&!(G.shapeFlag&128))return w=null,G;let V=Vl(G);const st=V.type,ct=ga(Wr(V)?V.type.__asyncResolved||{}:st),{include:F,exclude:Q,max:Z}=a;if(F&&(!ct||!Er(F,ct))||Q&&ct&&Er(Q,ct))return w=V,G;const lt=V.key==null?st:V.key,ut=m.get(lt);return V.el&&(V=Co(V),G.shapeFlag&128&&(G.ssContent=V)),L=lt,ut?(V.el=ut.el,V.component=ut.component,V.transition&&Qo(V,V.transition),V.shapeFlag|=512,C.delete(lt),C.add(lt)):(C.add(lt),Z&&C.size>parseInt(Z,10)&&nt(C.values().next().value)),V.shapeFlag|=256,w=V,G}}},dT=lT;function Er(a,l){return bt(a)?a.some(h=>Er(h,l)):ue(a)?a.split(",").includes(l):a.test?a.test(l):!1}function qw(a,l){$w(a,"a",l)}function Gw(a,l){$w(a,"da",l)}function $w(a,l,h=we){const p=a.__wdc||(a.__wdc=()=>{let m=h;for(;m;){if(m.isDeactivated)return;m=m.parent}return a()});if(Ta(l,p,h),h){let m=h.parent;for(;m&&m.parent;)Xr(m.parent.vnode)&&uT(p,l,h,m),m=m.parent}}function uT(a,l,h,p){const m=Ta(l,a,p,!0);Na(()=>{bd(p[l],m)},h)}function Fl(a){let l=a.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),a.shapeFlag=l}function Vl(a){return a.shapeFlag&128?a.ssContent:a}function Ta(a,l,h=we,p=!1){if(h){const m=h[a]||(h[a]=[]),C=l.__weh||(l.__weh=(...w)=>{if(h.isUnmounted)return;Jo(),Ao(h);const _=Xe(l,h,a,w);return fo(),Xo(),_});return p?m.unshift(C):m.push(C),C}}const Zn=a=>(l,h=we)=>(!qi||a==="sp")&&Ta(a,l,h),Kw=Zn("bm"),ts=Zn("m"),Yw=Zn("bu"),Sa=Zn("u"),Ia=Zn("bum"),Na=Zn("um"),Qw=Zn("sp"),Zw=Zn("rtg"),Jw=Zn("rtc");function Xw(a,l=we){Ta("ec",a,l)}let td=!0;function hT(a){const l=eC(a),h=a.proxy,p=a.ctx;td=!1,l.beforeCreate&&Db(l.beforeCreate,a,"bc");const{data:m,computed:C,methods:w,watch:_,provide:k,inject:y,created:E,beforeMount:A,mounted:x,beforeUpdate:S,updated:H,activated:nt,deactivated:L,beforeDestroy:O,beforeUnmount:z,destroyed:G,unmounted:V,render:st,renderTracked:ct,renderTriggered:F,errorCaptured:Q,serverPrefetch:Z,expose:lt,inheritAttrs:ut,components:U,directives:ft,filters:Mt}=l;if(y&&gT(y,p,null,a.appContext.config.unwrapInjectedRef),w)for(const zt in w){const Vt=w[zt];Dt(Vt)&&(p[zt]=Vt.bind(h))}if(m){const zt=m.call(h,h);pe(zt)&&(a.data=Yi(zt))}if(td=!0,C)for(const zt in C){const Vt=C[zt],ve=Dt(Vt)?Vt.bind(h,h):Dt(Vt.get)?Vt.get.bind(h,h):Cn,Le=!Dt(Vt)&&Dt(Vt.set)?Vt.set.bind(h):Cn,Oe=wn({get:ve,set:Le});Object.defineProperty(p,zt,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:je=>Oe.value=je})}if(_)for(const zt in _)tC(_[zt],p,h,zt);if(k){const zt=Dt(k)?k.call(h):k;Reflect.ownKeys(zt).forEach(Vt=>{Br(Vt,zt[Vt])})}E&&Db(E,a,"c");function It(zt,Vt){bt(Vt)?Vt.forEach(ve=>zt(ve.bind(h))):Vt&&zt(Vt.bind(h))}if(It(Kw,A),It(ts,x),It(Yw,S),It(Sa,H),It(qw,nt),It(Gw,L),It(Xw,Q),It(Jw,ct),It(Zw,F),It(Ia,z),It(Na,V),It(Qw,Z),bt(lt))if(lt.length){const zt=a.exposed||(a.exposed={});lt.forEach(Vt=>{Object.defineProperty(zt,Vt,{get:()=>h[Vt],set:ve=>h[Vt]=ve})})}else a.exposed||(a.exposed={});st&&a.render===Cn&&(a.render=st),ut!=null&&(a.inheritAttrs=ut),U&&(a.components=U),ft&&(a.directives=ft)}function gT(a,l,h=Cn,p=!1){bt(a)&&(a=ed(a));for(const m in a){const C=a[m];let w;pe(C)?"default"in C?w=Pn(C.from||m,C.default,!0):w=Pn(C.from||m):w=Pn(C),ke(w)&&p?Object.defineProperty(l,m,{enumerable:!0,configurable:!0,get:()=>w.value,set:_=>w.value=_}):l[m]=w}}function Db(a,l,h){Xe(bt(a)?a.map(p=>p.bind(l.proxy)):a.bind(l.proxy),l,h)}function tC(a,l,h,p){const m=p.includes(".")?Uw(h,p):()=>h[p];if(ue(a)){const C=l[a];Dt(C)&&Fi(m,C)}else if(Dt(a))Fi(m,a.bind(h));else if(pe(a))if(bt(a))a.forEach(C=>tC(C,l,h,p));else{const C=Dt(a.handler)?a.handler.bind(h):l[a.handler];Dt(C)&&Fi(m,C,a)}}function eC(a){const l=a.type,{mixins:h,extends:p}=l,{mixins:m,optionsCache:C,config:{optionMergeStrategies:w}}=a.appContext,_=C.get(l);let k;return _?k=_:!m.length&&!h&&!p?k=l:(k={},m.length&&m.forEach(y=>la(k,y,w,!0)),la(k,l,w)),C.set(l,k),k}function la(a,l,h,p=!1){const{mixins:m,extends:C}=l;C&&la(a,C,h,!0),m&&m.forEach(w=>la(a,w,h,!0));for(const w in l)if(!(p&&w==="expose")){const _=pT[w]||h&&h[w];a[w]=_?_(a[w],l[w]):l[w]}return a}const pT={data:Mb,props:Uo,emits:Uo,methods:Uo,computed:Uo,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Uo,directives:Uo,watch:mT,provide:Mb,inject:fT};function Mb(a,l){return l?a?function(){return ge(Dt(a)?a.call(this,this):a,Dt(l)?l.call(this,this):l)}:l:a}function fT(a,l){return Uo(ed(a),ed(l))}function ed(a){if(bt(a)){const l={};for(let h=0;h<a.length;h++)l[a[h]]=a[h];return l}return a}function ze(a,l){return a?[...new Set([].concat(a,l))]:l}function Uo(a,l){return a?ge(ge(Object.create(null),a),l):l}function mT(a,l){if(!a)return l;if(!l)return a;const h=ge(Object.create(null),a);for(const p in l)h[p]=ze(a[p],l[p]);return h}function kT(a,l,h,p=!1){const m={},C={};sa(C,Pa,1),a.propsDefaults=Object.create(null),nC(a,l,m,C);for(const w in a.propsOptions[0])w in m||(m[w]=void 0);h?a.props=p?m:Tw(m):a.type.props?a.props=m:a.props=C,a.attrs=C}function bT(a,l,h,p){const{props:m,attrs:C,vnode:{patchFlag:w}}=a,_=Rt(m),[k]=a.propsOptions;let y=!1;if((p||w>0)&&!(w&16)){if(w&8){const E=a.vnode.dynamicProps;for(let A=0;A<E.length;A++){let x=E[A];const S=l[x];if(k)if(jt(C,x))S!==C[x]&&(C[x]=S,y=!0);else{const H=tn(x);m[H]=nd(k,_,H,S,a,!1)}else S!==C[x]&&(C[x]=S,y=!0)}}}else{nC(a,l,m,C)&&(y=!0);let E;for(const A in _)(!l||!jt(l,A)&&((E=Nn(A))===A||!jt(l,E)))&&(k?h&&(h[A]!==void 0||h[E]!==void 0)&&(m[A]=nd(k,_,A,void 0,a,!0)):delete m[A]);if(C!==_)for(const A in C)(!l||!jt(l,A)&&!0)&&(delete C[A],y=!0)}y&&Qn(a,"set","$attrs")}function nC(a,l,h,p){const[m,C]=a.propsOptions;let w=!1,_;if(l)for(let k in l){if(Dr(k))continue;const y=l[k];let E;m&&jt(m,E=tn(k))?!C||!C.includes(E)?h[E]=y:(_||(_={}))[E]=y:Rd(a.emitsOptions,k)||(!(k in p)||y!==p[k])&&(p[k]=y,w=!0)}if(C){const k=Rt(h),y=_||Wt;for(let E=0;E<C.length;E++){const A=C[E];h[A]=nd(m,k,A,y[A],a,!jt(y,A))}}return w}function nd(a,l,h,p,m,C){const w=a[h];if(w!=null){const _=jt(w,"default");if(_&&p===void 0){const k=w.default;if(w.type!==Function&&Dt(k)){const{propsDefaults:y}=m;h in y?p=y[h]:(Ao(m),p=y[h]=k.call(null,l),fo())}else p=k}w[0]&&(C&&!_?p=!1:w[1]&&(p===""||p===Nn(h))&&(p=!0))}return p}function oC(a,l,h=!1){const p=l.propsCache,m=p.get(a);if(m)return m;const C=a.props,w={},_=[];let k=!1;if(!Dt(a)){const E=A=>{k=!0;const[x,S]=oC(A,l,!0);ge(w,x),S&&_.push(...S)};!h&&l.mixins.length&&l.mixins.forEach(E),a.extends&&E(a.extends),a.mixins&&a.mixins.forEach(E)}if(!C&&!k)return p.set(a,zi),zi;if(bt(C))for(let E=0;E<C.length;E++){const A=tn(C[E]);Tb(A)&&(w[A]=Wt)}else if(C)for(const E in C){const A=tn(E);if(Tb(A)){const x=C[E],S=w[A]=bt(x)||Dt(x)?{type:x}:x;if(S){const H=Nb(Boolean,S.type),nt=Nb(String,S.type);S[0]=H>-1,S[1]=nt<0||H<nt,(H>-1||jt(S,"default"))&&_.push(A)}}}const y=[w,_];return p.set(a,y),y}function Tb(a){return a[0]!=="$"}function Sb(a){const l=a&&a.toString().match(/^\s*function (\w+)/);return l?l[1]:a===null?"null":""}function Ib(a,l){return Sb(a)===Sb(l)}function Nb(a,l){return bt(l)?l.findIndex(h=>Ib(h,a)):Dt(l)&&Ib(l,a)?0:-1}const iC=a=>a[0]==="_"||a==="$stable",Hd=a=>bt(a)?a.map(Qe):[Qe(a)],wT=(a,l,h)=>{const p=Ld((...m)=>Hd(l(...m)),h);return p._c=!1,p},rC=(a,l,h)=>{const p=a._ctx;for(const m in a){if(iC(m))continue;const C=a[m];if(Dt(C))l[m]=wT(m,C,p);else if(C!=null){const w=Hd(C);l[m]=()=>w}}},sC=(a,l)=>{const h=Hd(l);a.slots.default=()=>h},CT=(a,l)=>{if(a.vnode.shapeFlag&32){const h=l._;h?(a.slots=Rt(l),sa(l,"_",h)):rC(l,a.slots={})}else a.slots={},l&&sC(a,l);sa(a.slots,Pa,1)},AT=(a,l,h)=>{const{vnode:p,slots:m}=a;let C=!0,w=Wt;if(p.shapeFlag&32){const _=l._;_?h&&_===1?C=!1:(ge(m,l),!h&&_===1&&delete m._):(C=!l.$stable,rC(l,m)),w=l}else l&&(sC(a,l),w={default:1});if(C)for(const _ in m)!iC(_)&&!(_ in w)&&delete m[_]};function _T(a,l){const h=Je;if(h===null)return a;const p=h.proxy,m=a.dirs||(a.dirs=[]);for(let C=0;C<l.length;C++){let[w,_,k,y=Wt]=l[C];Dt(w)&&(w={mounted:w,updated:w}),w.deep&&Go(_),m.push({dir:w,instance:p,value:_,oldValue:void 0,arg:k,modifiers:y})}return a}function Tn(a,l,h,p){const m=a.dirs,C=l&&l.dirs;for(let w=0;w<m.length;w++){const _=m[w];C&&(_.oldValue=C[w].value);let k=_.dir[p];k&&(Jo(),Xe(k,h,8,[a.el,_,a,l]),Xo())}}function aC(){return{app:null,config:{isNativeTag:VD,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vT=0;function yT(a,l){return function(p,m=null){m!=null&&!pe(m)&&(m=null);const C=aC(),w=new Set;let _=!1;const k=C.app={_uid:vT++,_component:p,_props:m,_container:null,_context:C,_instance:null,version:DC,get config(){return C.config},set config(y){},use(y,...E){return w.has(y)||(y&&Dt(y.install)?(w.add(y),y.install(k,...E)):Dt(y)&&(w.add(y),y(k,...E))),k},mixin(y){return C.mixins.includes(y)||C.mixins.push(y),k},component(y,E){return E?(C.components[y]=E,k):C.components[y]},directive(y,E){return E?(C.directives[y]=E,k):C.directives[y]},mount(y,E,A){if(!_){const x=se(p,m);return x.appContext=C,E&&l?l(x,y):a(x,y,A),_=!0,k._container=y,y.__vue_app__=k,Qd(x.component)||x.component.proxy}},unmount(){_&&(a(null,k._container),delete k._container.__vue_app__)},provide(y,E){return C.provides[y]=E,k}};return k}}function da(a,l,h,p,m=!1){if(bt(a)){a.forEach((x,S)=>da(x,l&&(bt(l)?l[S]:l),h,p,m));return}if(Wr(p)&&!m)return;const C=p.shapeFlag&4?Qd(p.component)||p.component.proxy:p.el,w=m?null:C,{i:_,r:k}=a,y=l&&l.r,E=_.refs===Wt?_.refs={}:_.refs,A=_.setupState;if(y!=null&&y!==k&&(ue(y)?(E[y]=null,jt(A,y)&&(A[y]=null)):ke(y)&&(y.value=null)),Dt(k))Bn(k,_,12,[w,E]);else{const x=ue(k),S=ke(k);if(x||S){const H=()=>{if(a.f){const nt=x?E[k]:k.value;m?bt(nt)&&bd(nt,C):bt(nt)?nt.includes(C)||nt.push(C):x?E[k]=[C]:(k.value=[C],a.k&&(E[a.k]=k.value))}else x?(E[k]=w,jt(A,k)&&(A[k]=w)):ke(k)&&(k.value=w,a.k&&(E[a.k]=w))};w?(H.id=-1,De(H,h)):H()}}}let so=!1;const ta=a=>/svg/.test(a.namespaceURI)&&a.tagName!=="foreignObject",Hl=a=>a.nodeType===8;function xT(a){const{mt:l,p:h,o:{patchProp:p,nextSibling:m,parentNode:C,remove:w,insert:_,createComment:k}}=a,y=(L,O)=>{if(!O.hasChildNodes()){h(null,L,O),ca();return}so=!1,E(O.firstChild,L,null,null,null),ca(),so&&console.error("Hydration completed but contains mismatches.")},E=(L,O,z,G,V,st=!1)=>{const ct=Hl(L)&&L.data==="[",F=()=>H(L,O,z,G,V,ct),{type:Q,ref:Z,shapeFlag:lt}=O,ut=L.nodeType;O.el=L;let U=null;switch(Q){case Ui:ut!==3?U=F():(L.data!==O.children&&(so=!0,L.data=O.children),U=m(L));break;case Re:ut!==8||ct?U=F():U=m(L);break;case Yo:if(ut!==1)U=F();else{U=L;const ft=!O.children.length;for(let Mt=0;Mt<O.staticCount;Mt++)ft&&(O.children+=U.outerHTML),Mt===O.staticCount-1&&(O.anchor=U),U=m(U);return U}break;case Me:ct?U=S(L,O,z,G,V,st):U=F();break;default:if(lt&1)ut!==1||O.type.toLowerCase()!==L.tagName.toLowerCase()?U=F():U=A(L,O,z,G,V,st);else if(lt&6){O.slotScopeIds=V;const ft=C(L);if(l(O,ft,null,z,G,ta(ft),st),U=ct?nt(L):m(L),Wr(O)){let Mt;ct?(Mt=se(Me),Mt.anchor=U?U.previousSibling:ft.lastChild):Mt=L.nodeType===3?Kd(""):se("div"),Mt.el=L,O.component.subTree=Mt}}else lt&64?ut!==8?U=F():U=O.type.hydrate(L,O,z,G,V,st,a,x):lt&128&&(U=O.type.hydrate(L,O,z,G,ta(C(L)),V,st,a,E))}return Z!=null&&da(Z,null,G,O),U},A=(L,O,z,G,V,st)=>{st=st||!!O.dynamicChildren;const{type:ct,props:F,patchFlag:Q,shapeFlag:Z,dirs:lt}=O,ut=ct==="input"&&lt||ct==="option";if(ut||Q!==-1){if(lt&&Tn(O,null,z,"created"),F)if(ut||!st||Q&48)for(const ft in F)(ut&&ft.endsWith("value")||Kr(ft)&&!Dr(ft))&&p(L,ft,null,F[ft],!1,void 0,z);else F.onClick&&p(L,"onClick",null,F.onClick,!1,void 0,z);let U;if((U=F&&F.onVnodeBeforeMount)&&Ue(U,z,O),lt&&Tn(O,null,z,"beforeMount"),((U=F&&F.onVnodeMounted)||lt)&&Vw(()=>{U&&Ue(U,z,O),lt&&Tn(O,null,z,"mounted")},G),Z&16&&!(F&&(F.innerHTML||F.textContent))){let ft=x(L.firstChild,O,L,z,G,V,st);for(;ft;){so=!0;const Mt=ft;ft=ft.nextSibling,w(Mt)}}else Z&8&&L.textContent!==O.children&&(so=!0,L.textContent=O.children)}return L.nextSibling},x=(L,O,z,G,V,st,ct)=>{ct=ct||!!O.dynamicChildren;const F=O.children,Q=F.length;for(let Z=0;Z<Q;Z++){const lt=ct?F[Z]:F[Z]=Qe(F[Z]);if(L)L=E(L,lt,G,V,st,ct);else{if(lt.type===Ui&&!lt.children)continue;so=!0,h(null,lt,z,null,G,V,ta(z),st)}}return L},S=(L,O,z,G,V,st)=>{const{slotScopeIds:ct}=O;ct&&(V=V?V.concat(ct):ct);const F=C(L),Q=x(m(L),O,F,z,G,V,st);return Q&&Hl(Q)&&Q.data==="]"?m(O.anchor=Q):(so=!0,_(O.anchor=k("]"),F,Q),Q)},H=(L,O,z,G,V,st)=>{if(so=!0,O.el=null,st){const Q=nt(L);for(;;){const Z=m(L);if(Z&&Z!==Q)w(Z);else break}}const ct=m(L),F=C(L);return w(L),h(null,O,F,ct,z,G,ta(F),V),ct},nt=L=>{let O=0;for(;L;)if(L=m(L),L&&Hl(L)&&(L.data==="["&&O++,L.data==="]")){if(O===0)return m(L);O--}return L};return[y,E]}const De=Vw;function cC(a){return dC(a)}function lC(a){return dC(a,xT)}function dC(a,l){const h=$D();h.__VUE__=!0;const{insert:p,remove:m,patchProp:C,createElement:w,createText:_,createComment:k,setText:y,setElementText:E,parentNode:A,nextSibling:x,setScopeId:S=Cn,cloneNode:H,insertStaticContent:nt}=a,L=(I,B,j,$=null,K=null,rt=null,ht=!1,et=null,it=!!B.dynamicChildren)=>{if(I===B)return;I&&!Sn(I,B)&&($=pt(I),Te(I,K,rt,!0),I=null),B.patchFlag===-2&&(it=!1,B.dynamicChildren=null);const{type:X,ref:kt,shapeFlag:dt}=B;switch(X){case Ui:O(I,B,j,$);break;case Re:z(I,B,j,$);break;case Yo:I==null&&G(B,j,$,ht);break;case Me:ft(I,B,j,$,K,rt,ht,et,it);break;default:dt&1?ct(I,B,j,$,K,rt,ht,et,it):dt&6?Mt(I,B,j,$,K,rt,ht,et,it):(dt&64||dt&128)&&X.process(I,B,j,$,K,rt,ht,et,it,Lt)}kt!=null&&K&&da(kt,I&&I.ref,rt,B||I,!B)},O=(I,B,j,$)=>{if(I==null)p(B.el=_(B.children),j,$);else{const K=B.el=I.el;B.children!==I.children&&y(K,B.children)}},z=(I,B,j,$)=>{I==null?p(B.el=k(B.children||""),j,$):B.el=I.el},G=(I,B,j,$)=>{[I.el,I.anchor]=nt(I.children,B,j,$,I.el,I.anchor)},V=({el:I,anchor:B},j,$)=>{let K;for(;I&&I!==B;)K=x(I),p(I,j,$),I=K;p(B,j,$)},st=({el:I,anchor:B})=>{let j;for(;I&&I!==B;)j=x(I),m(I),I=j;m(B)},ct=(I,B,j,$,K,rt,ht,et,it)=>{ht=ht||B.type==="svg",I==null?F(B,j,$,K,rt,ht,et,it):lt(I,B,K,rt,ht,et,it)},F=(I,B,j,$,K,rt,ht,et)=>{let it,X;const{type:kt,props:dt,shapeFlag:mt,transition:wt,patchFlag:Tt,dirs:ee}=I;if(I.el&&H!==void 0&&Tt===-1)it=I.el=H(I.el);else{if(it=I.el=w(I.type,rt,dt&&dt.is,dt),mt&8?E(it,I.children):mt&16&&Z(I.children,it,null,$,K,rt&&kt!=="foreignObject",ht,et),ee&&Tn(I,null,$,"created"),dt){for(const Zt in dt)Zt!=="value"&&!Dr(Zt)&&C(it,Zt,null,dt[Zt],rt,I.children,$,K,J);"value"in dt&&C(it,"value",null,dt.value),(X=dt.onVnodeBeforeMount)&&Ue(X,$,I)}Q(it,I,I.scopeId,ht,$)}ee&&Tn(I,null,$,"beforeMount");const Ht=(!K||K&&!K.pendingBranch)&&wt&&!wt.persisted;Ht&&wt.beforeEnter(it),p(it,B,j),((X=dt&&dt.onVnodeMounted)||Ht||ee)&&De(()=>{X&&Ue(X,$,I),Ht&&wt.enter(it),ee&&Tn(I,null,$,"mounted")},K)},Q=(I,B,j,$,K)=>{if(j&&S(I,j),$)for(let rt=0;rt<$.length;rt++)S(I,$[rt]);if(K){let rt=K.subTree;if(B===rt){const ht=K.vnode;Q(I,ht,ht.scopeId,ht.slotScopeIds,K.parent)}}},Z=(I,B,j,$,K,rt,ht,et,it=0)=>{for(let X=it;X<I.length;X++){const kt=I[X]=et?ho(I[X]):Qe(I[X]);L(null,kt,B,j,$,K,rt,ht,et)}},lt=(I,B,j,$,K,rt,ht)=>{const et=B.el=I.el;let{patchFlag:it,dynamicChildren:X,dirs:kt}=B;it|=I.patchFlag&16;const dt=I.props||Wt,mt=B.props||Wt;let wt;j&&Vo(j,!1),(wt=mt.onVnodeBeforeUpdate)&&Ue(wt,j,B,I),kt&&Tn(B,I,j,"beforeUpdate"),j&&Vo(j,!0);const Tt=K&&B.type!=="foreignObject";if(X?ut(I.dynamicChildren,X,et,j,$,Tt,rt):ht||ve(I,B,et,null,j,$,Tt,rt,!1),it>0){if(it&16)U(et,B,dt,mt,j,$,K);else if(it&2&&dt.class!==mt.class&&C(et,"class",null,mt.class,K),it&4&&C(et,"style",dt.style,mt.style,K),it&8){const ee=B.dynamicProps;for(let Ht=0;Ht<ee.length;Ht++){const Zt=ee[Ht],We=dt[Zt],Xn=mt[Zt];(Xn!==We||Zt==="value")&&C(et,Zt,We,Xn,K,I.children,j,$,J)}}it&1&&I.children!==B.children&&E(et,B.children)}else!ht&&X==null&&U(et,B,dt,mt,j,$,K);((wt=mt.onVnodeUpdated)||kt)&&De(()=>{wt&&Ue(wt,j,B,I),kt&&Tn(B,I,j,"updated")},$)},ut=(I,B,j,$,K,rt,ht)=>{for(let et=0;et<B.length;et++){const it=I[et],X=B[et],kt=it.el&&(it.type===Me||!Sn(it,X)||it.shapeFlag&70)?A(it.el):j;L(it,X,kt,null,$,K,rt,ht,!0)}},U=(I,B,j,$,K,rt,ht)=>{if(j!==$){for(const et in $){if(Dr(et))continue;const it=$[et],X=j[et];it!==X&&et!=="value"&&C(I,et,X,it,ht,B.children,K,rt,J)}if(j!==Wt)for(const et in j)!Dr(et)&&!(et in $)&&C(I,et,j[et],null,ht,B.children,K,rt,J);"value"in $&&C(I,"value",j.value,$.value)}},ft=(I,B,j,$,K,rt,ht,et,it)=>{const X=B.el=I?I.el:_(""),kt=B.anchor=I?I.anchor:_("");let{patchFlag:dt,dynamicChildren:mt,slotScopeIds:wt}=B;wt&&(et=et?et.concat(wt):wt),I==null?(p(X,j,$),p(kt,j,$),Z(B.children,j,kt,K,rt,ht,et,it)):dt>0&&dt&64&&mt&&I.dynamicChildren?(ut(I.dynamicChildren,mt,j,K,rt,ht,et),(B.key!=null||K&&B===K.subTree)&&Ud(I,B,!0)):ve(I,B,j,kt,K,rt,ht,et,it)},Mt=(I,B,j,$,K,rt,ht,et,it)=>{B.slotScopeIds=et,I==null?B.shapeFlag&512?K.ctx.activate(B,j,$,ht,it):Ft(B,j,$,K,rt,ht,it):It(I,B,it)},Ft=(I,B,j,$,K,rt,ht)=>{const et=I.component=bC(I,$,K);if(Xr(I)&&(et.ctx.renderer=Lt),CC(et),et.asyncDep){if(K&&K.registerDep(et,zt),!I.el){const it=et.subTree=se(Re);z(null,it,B,j)}return}zt(et,I,B,j,K,rt,ht)},It=(I,B,j)=>{const $=B.component=I.component;if(QM(I,B,j))if($.asyncDep&&!$.asyncResolved){Vt($,B,j);return}else $.next=B,VM($.update),$.update();else B.component=I.component,B.el=I.el,$.vnode=B},zt=(I,B,j,$,K,rt,ht)=>{const et=()=>{if(I.isMounted){let{next:kt,bu:dt,u:mt,parent:wt,vnode:Tt}=I,ee=kt,Ht;Vo(I,!1),kt?(kt.el=Tt.el,Vt(I,kt,ht)):kt=Tt,dt&&Li(dt),(Ht=kt.props&&kt.props.onVnodeBeforeUpdate)&&Ue(Ht,wt,kt,Tt),Vo(I,!0);const Zt=ia(I),We=I.subTree;I.subTree=Zt,L(We,Zt,A(We.el),pt(We),I,K,rt),kt.el=Zt.el,ee===null&&Od(I,Zt.el),mt&&De(mt,K),(Ht=kt.props&&kt.props.onVnodeUpdated)&&De(()=>Ue(Ht,wt,kt,Tt),K)}else{let kt;const{el:dt,props:mt}=B,{bm:wt,m:Tt,parent:ee}=I,Ht=Wr(B);if(Vo(I,!1),wt&&Li(wt),!Ht&&(kt=mt&&mt.onVnodeBeforeMount)&&Ue(kt,ee,B),Vo(I,!0),dt&&Ct){const Zt=()=>{I.subTree=ia(I),Ct(dt,I.subTree,I,K,null)};Ht?B.type.__asyncLoader().then(()=>!I.isUnmounted&&Zt()):Zt()}else{const Zt=I.subTree=ia(I);L(null,Zt,j,$,I,K,rt),B.el=Zt.el}if(Tt&&De(Tt,K),!Ht&&(kt=mt&&mt.onVnodeMounted)){const Zt=B;De(()=>Ue(kt,ee,Zt),K)}B.shapeFlag&256&&I.a&&De(I.a,K),I.isMounted=!0,B=j=$=null}},it=I.effect=new Qr(et,()=>Bd(I.update),I.scope),X=I.update=it.run.bind(it);X.id=I.uid,Vo(I,!0),X()},Vt=(I,B,j)=>{B.component=I;const $=I.vnode.props;I.vnode=B,I.next=null,bT(I,B.props,$,j),AT(I,B.children,j),Jo(),zd(void 0,I.update),Xo()},ve=(I,B,j,$,K,rt,ht,et,it=!1)=>{const X=I&&I.children,kt=I?I.shapeFlag:0,dt=B.children,{patchFlag:mt,shapeFlag:wt}=B;if(mt>0){if(mt&128){Oe(X,dt,j,$,K,rt,ht,et,it);return}else if(mt&256){Le(X,dt,j,$,K,rt,ht,et,it);return}}wt&8?(kt&16&&J(X,K,rt),dt!==X&&E(j,dt)):kt&16?wt&16?Oe(X,dt,j,$,K,rt,ht,et,it):J(X,K,rt,!0):(kt&8&&E(j,""),wt&16&&Z(dt,j,$,K,rt,ht,et,it))},Le=(I,B,j,$,K,rt,ht,et,it)=>{I=I||zi,B=B||zi;const X=I.length,kt=B.length,dt=Math.min(X,kt);let mt;for(mt=0;mt<dt;mt++){const wt=B[mt]=it?ho(B[mt]):Qe(B[mt]);L(I[mt],wt,j,null,K,rt,ht,et,it)}X>kt?J(I,K,rt,!0,!1,dt):Z(B,j,$,K,rt,ht,et,it,dt)},Oe=(I,B,j,$,K,rt,ht,et,it)=>{let X=0;const kt=B.length;let dt=I.length-1,mt=kt-1;for(;X<=dt&&X<=mt;){const wt=I[X],Tt=B[X]=it?ho(B[X]):Qe(B[X]);if(Sn(wt,Tt))L(wt,Tt,j,null,K,rt,ht,et,it);else break;X++}for(;X<=dt&&X<=mt;){const wt=I[dt],Tt=B[mt]=it?ho(B[mt]):Qe(B[mt]);if(Sn(wt,Tt))L(wt,Tt,j,null,K,rt,ht,et,it);else break;dt--,mt--}if(X>dt){if(X<=mt){const wt=mt+1,Tt=wt<kt?B[wt].el:$;for(;X<=mt;)L(null,B[X]=it?ho(B[X]):Qe(B[X]),j,Tt,K,rt,ht,et,it),X++}}else if(X>mt)for(;X<=dt;)Te(I[X],K,rt,!0),X++;else{const wt=X,Tt=X,ee=new Map;for(X=Tt;X<=mt;X++){const Ne=B[X]=it?ho(B[X]):Qe(B[X]);Ne.key!=null&&ee.set(Ne.key,X)}let Ht,Zt=0;const We=mt-Tt+1;let Xn=!1,es=0;const ei=new Array(We);for(X=0;X<We;X++)ei[X]=0;for(X=wt;X<=dt;X++){const Ne=I[X];if(Zt>=We){Te(Ne,K,rt,!0);continue}let qe;if(Ne.key!=null)qe=ee.get(Ne.key);else for(Ht=Tt;Ht<=mt;Ht++)if(ei[Ht-Tt]===0&&Sn(Ne,B[Ht])){qe=Ht;break}qe===void 0?Te(Ne,K,rt,!0):(ei[qe-Tt]=X+1,qe>=es?es=qe:Xn=!0,L(Ne,B[qe],j,null,K,rt,ht,et,it),Zt++)}const ns=Xn?ET(ei):zi;for(Ht=ns.length-1,X=We-1;X>=0;X--){const Ne=Tt+X,qe=B[Ne],yo=Ne+1<kt?B[Ne+1].el:$;ei[X]===0?L(null,qe,j,yo,K,rt,ht,et,it):Xn&&(Ht<0||X!==ns[Ht]?je(qe,j,yo,2):Ht--)}}},je=(I,B,j,$,K=null)=>{const{el:rt,type:ht,transition:et,children:it,shapeFlag:X}=I;if(X&6){je(I.component.subTree,B,j,$);return}if(X&128){I.suspense.move(B,j,$);return}if(X&64){ht.move(I,B,j,Lt);return}if(ht===Me){p(rt,B,j);for(let dt=0;dt<it.length;dt++)je(it[dt],B,j,$);p(I.anchor,B,j);return}if(ht===Yo){V(I,B,j);return}if($!==2&&X&1&&et)if($===0)et.beforeEnter(rt),p(rt,B,j),De(()=>et.enter(rt),K);else{const{leave:dt,delayLeave:mt,afterLeave:wt}=et,Tt=()=>p(rt,B,j),ee=()=>{dt(rt,()=>{Tt(),wt&&wt()})};mt?mt(rt,Tt,ee):ee()}else p(rt,B,j)},Te=(I,B,j,$=!1,K=!1)=>{const{type:rt,props:ht,ref:et,children:it,dynamicChildren:X,shapeFlag:kt,patchFlag:dt,dirs:mt}=I;if(et!=null&&da(et,null,j,I,!0),kt&256){B.ctx.deactivate(I);return}const wt=kt&1&&mt,Tt=!Wr(I);let ee;if(Tt&&(ee=ht&&ht.onVnodeBeforeUnmount)&&Ue(ee,B,I),kt&6)tt(I.component,j,$);else{if(kt&128){I.suspense.unmount(j,$);return}wt&&Tn(I,null,B,"beforeUnmount"),kt&64?I.type.remove(I,B,j,K,Lt,$):X&&(rt!==Me||dt>0&&dt&64)?J(X,B,j,!1,!0):(rt===Me&&dt&384||!K&&kt&16)&&J(it,B,j),$&&Jn(I)}(Tt&&(ee=ht&&ht.onVnodeUnmounted)||wt)&&De(()=>{ee&&Ue(ee,B,I),wt&&Tn(I,null,B,"unmounted")},j)},Jn=I=>{const{type:B,el:j,anchor:$,transition:K}=I;if(B===Me){P(j,$);return}if(B===Yo){st(I);return}const rt=()=>{m(j),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(I.shapeFlag&1&&K&&!K.persisted){const{leave:ht,delayLeave:et}=K,it=()=>ht(j,rt);et?et(I.el,rt,it):it()}else rt()},P=(I,B)=>{let j;for(;I!==B;)j=x(I),m(I),I=j;m(B)},tt=(I,B,j)=>{const{bum:$,scope:K,update:rt,subTree:ht,um:et}=I;$&&Li($),K.stop(),rt&&(rt.active=!1,Te(ht,I,B,j)),et&&De(et,B),De(()=>{I.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},J=(I,B,j,$=!1,K=!1,rt=0)=>{for(let ht=rt;ht<I.length;ht++)Te(I[ht],B,j,$,K)},pt=I=>I.shapeFlag&6?pt(I.component.subTree):I.shapeFlag&128?I.suspense.next():x(I.anchor||I.el),Bt=(I,B,j)=>{I==null?B._vnode&&Te(B._vnode,null,null,!0):L(B._vnode||null,I,B,null,null,null,j),ca(),B._vnode=I},Lt={p:L,um:Te,m:je,r:Jn,mt:Ft,mc:Z,pc:ve,pbc:ut,n:pt,o:a};let At,Ct;return l&&([At,Ct]=l(Lt)),{render:Bt,hydrate:At,createApp:yT(Bt,At)}}function Vo({effect:a,update:l},h){a.allowRecurse=l.allowRecurse=h}function Ud(a,l,h=!1){const p=a.children,m=l.children;if(bt(p)&&bt(m))for(let C=0;C<p.length;C++){const w=p[C];let _=m[C];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=m[C]=ho(m[C]),_.el=w.el),h||Ud(w,_))}}function ET(a){const l=a.slice(),h=[0];let p,m,C,w,_;const k=a.length;for(p=0;p<k;p++){const y=a[p];if(y!==0){if(m=h[h.length-1],a[m]<y){l[p]=m,h.push(p);continue}for(C=0,w=h.length-1;C<w;)_=C+w>>1,a[h[_]]<y?C=_+1:w=_;y<a[h[C]]&&(C>0&&(l[p]=h[C-1]),h[C]=p)}}for(C=h.length,w=h[C-1];C-- >0;)h[C]=w,w=l[w];return h}const DT=a=>a.__isTeleport,Pr=a=>a&&(a.disabled||a.disabled===""),Bb=a=>typeof SVGElement!="undefined"&&a instanceof SVGElement,od=(a,l)=>{const h=a&&a.to;return ue(h)?l?l(h):null:h},MT={__isTeleport:!0,process(a,l,h,p,m,C,w,_,k,y){const{mc:E,pc:A,pbc:x,o:{insert:S,querySelector:H,createText:nt,createComment:L}}=y,O=Pr(l.props);let{shapeFlag:z,children:G,dynamicChildren:V}=l;if(a==null){const st=l.el=nt(""),ct=l.anchor=nt("");S(st,h,p),S(ct,h,p);const F=l.target=od(l.props,H),Q=l.targetAnchor=nt("");F&&(S(Q,F),w=w||Bb(F));const Z=(lt,ut)=>{z&16&&E(G,lt,ut,m,C,w,_,k)};O?Z(h,ct):F&&Z(F,Q)}else{l.el=a.el;const st=l.anchor=a.anchor,ct=l.target=a.target,F=l.targetAnchor=a.targetAnchor,Q=Pr(a.props),Z=Q?h:ct,lt=Q?st:F;if(w=w||Bb(ct),V?(x(a.dynamicChildren,V,Z,m,C,w,_),Ud(a,l,!0)):k||A(a,l,Z,lt,m,C,w,_,!1),O)Q||ea(l,h,st,y,1);else if((l.props&&l.props.to)!==(a.props&&a.props.to)){const ut=l.target=od(l.props,H);ut&&ea(l,ut,null,y,0)}else Q&&ea(l,ct,F,y,1)}},remove(a,l,h,p,{um:m,o:{remove:C}},w){const{shapeFlag:_,children:k,anchor:y,targetAnchor:E,target:A,props:x}=a;if(A&&C(E),(w||!Pr(x))&&(C(y),_&16))for(let S=0;S<k.length;S++){const H=k[S];m(H,l,h,!0,!!H.dynamicChildren)}},move:ea,hydrate:TT};function ea(a,l,h,{o:{insert:p},m},C=2){C===0&&p(a.targetAnchor,l,h);const{el:w,anchor:_,shapeFlag:k,children:y,props:E}=a,A=C===2;if(A&&p(w,l,h),(!A||Pr(E))&&k&16)for(let x=0;x<y.length;x++)m(y[x],l,h,2);A&&p(_,l,h)}function TT(a,l,h,p,m,C,{o:{nextSibling:w,parentNode:_,querySelector:k}},y){const E=l.target=od(l.props,k);if(E){const A=E._lpa||E.firstChild;l.shapeFlag&16&&(Pr(l.props)?(l.anchor=y(w(a),l,_(a),h,p,m,C),l.targetAnchor=A):(l.anchor=w(a),l.targetAnchor=y(A,l,E,h,p,m,C)),E._lpa=l.targetAnchor&&w(l.targetAnchor))}return l.anchor&&w(l.anchor)}const ST=MT,Wd="components",IT="directives";function NT(a,l){return qd(Wd,a,!0,l)||a}const uC=Symbol();function BT(a){return ue(a)?qd(Wd,a,!1)||a:a||uC}function PT(a){return qd(IT,a)}function qd(a,l,h=!0,p=!1){const m=Je||we;if(m){const C=m.type;if(a===Wd){const _=ga(C);if(_&&(_===l||_===tn(l)||_===Yr(tn(l))))return C}const w=Pb(m[a]||C[a],l)||Pb(m.appContext[a],l);return!w&&p?C:w}}function Pb(a,l){return a&&(a[l]||a[tn(l)]||a[Yr(tn(l))])}const Me=Symbol(void 0),Ui=Symbol(void 0),Re=Symbol(void 0),Yo=Symbol(void 0),zr=[];let zn=null;function Ba(a=!1){zr.push(zn=a?null:[])}function hC(){zr.pop(),zn=zr[zr.length-1]||null}let Wi=1;function id(a){Wi+=a}function gC(a){return a.dynamicChildren=Wi>0?zn||zi:null,hC(),Wi>0&&zn&&zn.push(a),a}function zT(a,l,h,p,m,C){return gC($d(a,l,h,p,m,C,!0))}function Gd(a,l,h,p,m){return gC(se(a,l,h,p,m,!0))}function wo(a){return a?a.__v_isVNode===!0:!1}function Sn(a,l){return a.type===l.type&&a.key===l.key}function RT(a){}const Pa="__vInternal",pC=({key:a})=>a!=null?a:null,ra=({ref:a,ref_key:l,ref_for:h})=>a!=null?ue(a)||ke(a)||Dt(a)?{i:Je,r:a,k:l,f:!!h}:a:null;function $d(a,l=null,h=null,p=0,m=null,C=a===Me?0:1,w=!1,_=!1){const k={__v_isVNode:!0,__v_skip:!0,type:a,props:l,key:l&&pC(l),ref:l&&ra(l),scopeId:Da,slotScopeIds:null,children:h,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:C,patchFlag:p,dynamicProps:m,dynamicChildren:null,appContext:null};return _?(Yd(k,h),C&128&&a.normalize(k)):h&&(k.shapeFlag|=ue(h)?8:16),Wi>0&&!w&&zn&&(k.patchFlag>0||C&6)&&k.patchFlag!==32&&zn.push(k),k}const se=LT;function LT(a,l=null,h=null,p=0,m=null,C=!1){if((!a||a===uC)&&(a=Re),wo(a)){const _=Co(a,l,!0);return h&&Yd(_,h),_}if(XT(a)&&(a=a.__vccOpts),l){l=fC(l);let{class:_,style:k}=l;_&&!ue(_)&&(l.class=$r(_)),pe(k)&&(Dd(k)&&!bt(k)&&(k=ge({},k)),l.style=Gr(k))}const w=ue(a)?1:ZM(a)?128:DT(a)?64:pe(a)?4:Dt(a)?2:0;return $d(a,l,h,p,m,w,C,!0)}function fC(a){return a?Dd(a)||Pa in a?ge({},a):a:null}function Co(a,l,h=!1){const{props:p,ref:m,patchFlag:C,children:w}=a,_=l?mC(p||{},l):p;return{__v_isVNode:!0,__v_skip:!0,type:a.type,props:_,key:_&&pC(_),ref:l&&l.ref?h&&m?bt(m)?m.concat(ra(l)):[m,ra(l)]:ra(l):m,scopeId:a.scopeId,slotScopeIds:a.slotScopeIds,children:w,target:a.target,targetAnchor:a.targetAnchor,staticCount:a.staticCount,shapeFlag:a.shapeFlag,patchFlag:l&&a.type!==Me?C===-1?16:C|16:C,dynamicProps:a.dynamicProps,dynamicChildren:a.dynamicChildren,appContext:a.appContext,dirs:a.dirs,transition:a.transition,component:a.component,suspense:a.suspense,ssContent:a.ssContent&&Co(a.ssContent),ssFallback:a.ssFallback&&Co(a.ssFallback),el:a.el,anchor:a.anchor}}function Kd(a=" ",l=0){return se(Ui,null,a,l)}function OT(a,l){const h=se(Yo,null,a);return h.staticCount=l,h}function jT(a="",l=!1){return l?(Ba(),Gd(Re,null,a)):se(Re,null,a)}function Qe(a){return a==null||typeof a=="boolean"?se(Re):bt(a)?se(Me,null,a.slice()):typeof a=="object"?ho(a):se(Ui,null,String(a))}function ho(a){return a.el===null||a.memo?a:Co(a)}function Yd(a,l){let h=0;const{shapeFlag:p}=a;if(l==null)l=null;else if(bt(l))h=16;else if(typeof l=="object")if(p&65){const m=l.default;m&&(m._c&&(m._d=!1),Yd(a,m()),m._c&&(m._d=!0));return}else{h=32;const m=l._;!m&&!(Pa in l)?l._ctx=Je:m===3&&Je&&(Je.slots._===1?l._=1:(l._=2,a.patchFlag|=1024))}else Dt(l)?(l={default:l,_ctx:Je},h=32):(l=String(l),p&64?(h=16,l=[Kd(l)]):h=8);a.children=l,a.shapeFlag|=h}function mC(...a){const l={};for(let h=0;h<a.length;h++){const p=a[h];for(const m in p)if(m==="class")l.class!==p.class&&(l.class=$r([l.class,p.class]));else if(m==="style")l.style=Gr([l.style,p.style]);else if(Kr(m)){const C=l[m],w=p[m];w&&C!==w&&!(bt(C)&&C.includes(w))&&(l[m]=C?[].concat(C,w):w)}else m!==""&&(l[m]=p[m])}return l}function Ue(a,l,h,p=null){Xe(a,l,7,[h,p])}function FT(a,l,h,p){let m;const C=h&&h[p];if(bt(a)||ue(a)){m=new Array(a.length);for(let w=0,_=a.length;w<_;w++)m[w]=l(a[w],w,void 0,C&&C[w])}else if(typeof a=="number"){m=new Array(a);for(let w=0;w<a;w++)m[w]=l(w+1,w,void 0,C&&C[w])}else if(pe(a))if(a[Symbol.iterator])m=Array.from(a,(w,_)=>l(w,_,void 0,C&&C[_]));else{const w=Object.keys(a);m=new Array(w.length);for(let _=0,k=w.length;_<k;_++){const y=w[_];m[_]=l(a[y],y,_,C&&C[_])}}else m=[];return h&&(h[p]=m),m}function VT(a,l){for(let h=0;h<l.length;h++){const p=l[h];if(bt(p))for(let m=0;m<p.length;m++)a[p[m].name]=p[m].fn;else p&&(a[p.name]=p.fn)}return a}function HT(a,l,h={},p,m){if(Je.isCE)return se("slot",l==="default"?null:{name:l},p&&p());let C=a[l];C&&C._c&&(C._d=!1),Ba();const w=C&&kC(C(h)),_=Gd(Me,{key:h.key||`_${l}`},w||(p?p():[]),w&&a._===1?64:-2);return!m&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),C&&C._c&&(C._d=!0),_}function kC(a){return a.some(l=>wo(l)?!(l.type===Re||l.type===Me&&!kC(l.children)):!0)?a:null}function UT(a){const l={};for(const h in a)l[Mr(h)]=a[h];return l}const rd=a=>a?wC(a)?Qd(a)||a.proxy:rd(a.parent):null,ua=ge(Object.create(null),{$:a=>a,$el:a=>a.vnode.el,$data:a=>a.data,$props:a=>a.props,$attrs:a=>a.attrs,$slots:a=>a.slots,$refs:a=>a.refs,$parent:a=>rd(a.parent),$root:a=>rd(a.root),$emit:a=>a.emit,$options:a=>eC(a),$forceUpdate:a=>()=>Bd(a.update),$nextTick:a=>Ea.bind(a.proxy),$watch:a=>sT.bind(a)}),sd={get({_:a},l){const{ctx:h,setupState:p,data:m,props:C,accessCache:w,type:_,appContext:k}=a;let y;if(l[0]!=="$"){const S=w[l];if(S!==void 0)switch(S){case 1:return p[l];case 2:return m[l];case 4:return h[l];case 3:return C[l]}else{if(p!==Wt&&jt(p,l))return w[l]=1,p[l];if(m!==Wt&&jt(m,l))return w[l]=2,m[l];if((y=a.propsOptions[0])&&jt(y,l))return w[l]=3,C[l];if(h!==Wt&&jt(h,l))return w[l]=4,h[l];td&&(w[l]=0)}}const E=ua[l];let A,x;if(E)return l==="$attrs"&&en(a,"get",l),E(a);if((A=_.__cssModules)&&(A=A[l]))return A;if(h!==Wt&&jt(h,l))return w[l]=4,h[l];if(x=k.config.globalProperties,jt(x,l))return x[l]},set({_:a},l,h){const{data:p,setupState:m,ctx:C}=a;return m!==Wt&&jt(m,l)?(m[l]=h,!0):p!==Wt&&jt(p,l)?(p[l]=h,!0):jt(a.props,l)||l[0]==="$"&&l.slice(1)in a?!1:(C[l]=h,!0)},has({_:{data:a,setupState:l,accessCache:h,ctx:p,appContext:m,propsOptions:C}},w){let _;return!!h[w]||a!==Wt&&jt(a,w)||l!==Wt&&jt(l,w)||(_=C[0])&&jt(_,w)||jt(p,w)||jt(ua,w)||jt(m.config.globalProperties,w)},defineProperty(a,l,h){return h.get!=null?this.set(a,l,h.get(),null):h.value!=null&&this.set(a,l,h.value,null),Reflect.defineProperty(a,l,h)}},WT=ge({},sd,{get(a,l){if(l!==Symbol.unscopables)return sd.get(a,l,a)},has(a,l){return l[0]!=="_"&&!ND(l)}}),qT=aC();let GT=0;function bC(a,l,h){const p=a.type,m=(l?l.appContext:a.appContext)||qT,C={uid:GT++,vnode:a,type:p,parent:l,appContext:m,root:null,next:null,subTree:null,effect:null,update:null,scope:new _d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(m.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oC(p,m),emitsOptions:Fw(p,m),emit:null,emitted:null,propsDefaults:Wt,inheritAttrs:p.inheritAttrs,ctx:Wt,data:Wt,props:Wt,attrs:Wt,slots:Wt,refs:Wt,setupState:Wt,setupContext:null,suspense:h,suspenseId:h?h.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return C.ctx={_:C},C.root=l?l.root:C,C.emit=UM.bind(null,C),a.ce&&a.ce(C),C}let we=null;const vo=()=>we||Je,Ao=a=>{we=a,a.scope.on()},fo=()=>{we&&we.scope.off(),we=null};function wC(a){return a.vnode.shapeFlag&4}let qi=!1;function CC(a,l=!1){qi=l;const{props:h,children:p}=a.vnode,m=wC(a);kT(a,h,m,l),CT(a,p);const C=m?$T(a,l):void 0;return qi=!1,C}function $T(a,l){const h=a.type;a.accessCache=Object.create(null),a.proxy=Md(new Proxy(a.ctx,sd));const{setup:p}=h;if(p){const m=a.setupContext=p.length>1?_C(a):null;Ao(a),Jo();const C=Bn(p,a,0,[a.props,m]);if(Xo(),fo(),Cd(C)){if(C.then(fo,fo),l)return C.then(w=>{ad(a,w,l)}).catch(w=>{ti(w,a,0)});a.asyncDep=C}else ad(a,C,l)}else AC(a,l)}function ad(a,l,h){Dt(l)?a.type.__ssrInlineRender?a.ssrRender=l:a.render=l:pe(l)&&(a.setupState=Id(l)),AC(a,h)}let ha,cd;function KT(a){ha=a,cd=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,WT))}}const YT=()=>!ha;function AC(a,l,h){const p=a.type;if(!a.render){if(!l&&ha&&!p.render){const m=p.template;if(m){const{isCustomElement:C,compilerOptions:w}=a.appContext.config,{delimiters:_,compilerOptions:k}=p,y=ge(ge({isCustomElement:C,delimiters:_},w),k);p.render=ha(m,y)}}a.render=p.render||Cn,cd&&cd(a)}Ao(a),Jo(),hT(a),Xo(),fo()}function QT(a){return new Proxy(a.attrs,{get(l,h){return en(a,"get","$attrs"),l[h]}})}function _C(a){const l=p=>{a.exposed=p||{}};let h;return{get attrs(){return h||(h=QT(a))},slots:a.slots,emit:a.emit,expose:l}}function Qd(a){if(a.exposed)return a.exposeProxy||(a.exposeProxy=new Proxy(Id(Md(a.exposed)),{get(l,h){if(h in l)return l[h];if(h in ua)return ua[h](a)}}))}const ZT=/(?:^|[-_])(\w)/g,JT=a=>a.replace(ZT,l=>l.toUpperCase()).replace(/[-_]/g,"");function ga(a){return Dt(a)&&a.displayName||a.name}function vC(a,l,h=!1){let p=ga(l);if(!p&&l.__file){const m=l.__file.match(/([^/\\]+)\.\w+$/);m&&(p=m[1])}if(!p&&a&&a.parent){const m=C=>{for(const w in C)if(C[w]===l)return w};p=m(a.components||a.parent.type.components)||m(a.appContext.components)}return p?JT(p):h?"App":"Anonymous"}function XT(a){return Dt(a)&&"__vccOpts"in a}const wn=(a,l)=>PM(a,l,qi);function tS(){return null}function eS(){return null}function nS(a){}function oS(a,l){return null}function iS(){return yC().slots}function rS(){return yC().attrs}function yC(){const a=vo();return a.setupContext||(a.setupContext=_C(a))}function sS(a,l){const h=bt(a)?a.reduce((p,m)=>(p[m]={},p),{}):a;for(const p in l){const m=h[p];m?bt(m)||Dt(m)?h[p]={type:m,default:l[p]}:m.default=l[p]:m===null&&(h[p]={default:l[p]})}return h}function aS(a,l){const h={};for(const p in a)l.includes(p)||Object.defineProperty(h,p,{enumerable:!0,get:()=>a[p]});return h}function cS(a){const l=vo();let h=a();return fo(),Cd(h)&&(h=h.catch(p=>{throw Ao(l),p})),[h,()=>Ao(l)]}function za(a,l,h){const p=arguments.length;return p===2?pe(l)&&!bt(l)?wo(l)?se(a,null,[l]):se(a,l):se(a,null,l):(p>3?h=Array.prototype.slice.call(arguments,2):p===3&&wo(h)&&(h=[h]),se(a,l,h))}const xC=Symbol(""),lS=()=>{{const a=Pn(xC);return a||Bw("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),a}};function dS(){}function uS(a,l,h,p){const m=h[p];if(m&&EC(m,a))return m;const C=l();return C.memo=a.slice(),h[p]=C}function EC(a,l){const h=a.memo;if(h.length!=l.length)return!1;for(let p=0;p<h.length;p++)if(h[p]!==l[p])return!1;return Wi>0&&zn&&zn.push(a),!0}const DC="3.2.31",hS={createComponentInstance:bC,setupComponent:CC,renderComponentRoot:ia,setCurrentRenderingInstance:Hr,isVNode:wo,normalizeVNode:Qe},gS=hS,pS=null,fS=null,mS="http://www.w3.org/2000/svg",qo=typeof document!="undefined"?document:null,zb=qo&&qo.createElement("template"),kS={insert:(a,l,h)=>{l.insertBefore(a,h||null)},remove:a=>{const l=a.parentNode;l&&l.removeChild(a)},createElement:(a,l,h,p)=>{const m=l?qo.createElementNS(mS,a):qo.createElement(a,h?{is:h}:void 0);return a==="select"&&p&&p.multiple!=null&&m.setAttribute("multiple",p.multiple),m},createText:a=>qo.createTextNode(a),createComment:a=>qo.createComment(a),setText:(a,l)=>{a.nodeValue=l},setElementText:(a,l)=>{a.textContent=l},parentNode:a=>a.parentNode,nextSibling:a=>a.nextSibling,querySelector:a=>qo.querySelector(a),setScopeId(a,l){a.setAttribute(l,"")},cloneNode(a){const l=a.cloneNode(!0);return"_value"in a&&(l._value=a._value),l},insertStaticContent(a,l,h,p,m,C){const w=h?h.previousSibling:l.lastChild;if(m&&(m===C||m.nextSibling))for(;l.insertBefore(m.cloneNode(!0),h),!(m===C||!(m=m.nextSibling)););else{zb.innerHTML=p?`<svg>${a}</svg>`:a;const _=zb.content;if(p){const k=_.firstChild;for(;k.firstChild;)_.appendChild(k.firstChild);_.removeChild(k)}l.insertBefore(_,h)}return[w?w.nextSibling:l.firstChild,h?h.previousSibling:l.lastChild]}};function bS(a,l,h){const p=a._vtc;p&&(l=(l?[l,...p]:[...p]).join(" ")),l==null?a.removeAttribute("class"):h?a.setAttribute("class",l):a.className=l}function wS(a,l,h){const p=a.style,m=ue(h);if(h&&!m){for(const C in h)ld(p,C,h[C]);if(l&&!ue(l))for(const C in l)h[C]==null&&ld(p,C,"")}else{const C=p.display;m?l!==h&&(p.cssText=h):l&&a.removeAttribute("style"),"_vod"in a&&(p.display=C)}}const Rb=/\s*!important$/;function ld(a,l,h){if(bt(h))h.forEach(p=>ld(a,l,p));else if(l.startsWith("--"))a.setProperty(l,h);else{const p=CS(a,l);Rb.test(h)?a.setProperty(Nn(p),h.replace(Rb,""),"important"):a[p]=h}}const Lb=["Webkit","Moz","ms"],Ul={};function CS(a,l){const h=Ul[l];if(h)return h;let p=tn(l);if(p!=="filter"&&p in a)return Ul[l]=p;p=Yr(p);for(let m=0;m<Lb.length;m++){const C=Lb[m]+p;if(C in a)return Ul[l]=C}return l}const Ob="http://www.w3.org/1999/xlink";function AS(a,l,h,p,m){if(p&&l.startsWith("xlink:"))h==null?a.removeAttributeNS(Ob,l.slice(6,l.length)):a.setAttributeNS(Ob,l,h);else{const C=PD(l);h==null||C&&!hw(h)?a.removeAttribute(l):a.setAttribute(l,C?"":h)}}function _S(a,l,h,p,m,C,w){if(l==="innerHTML"||l==="textContent"){p&&w(p,m,C),a[l]=h==null?"":h;return}if(l==="value"&&a.tagName!=="PROGRESS"&&!a.tagName.includes("-")){a._value=h;const _=h==null?"":h;(a.value!==_||a.tagName==="OPTION")&&(a.value=_),h==null&&a.removeAttribute(l);return}if(h===""||h==null){const _=typeof a[l];if(_==="boolean"){a[l]=hw(h);return}else if(h==null&&_==="string"){a[l]="",a.removeAttribute(l);return}else if(_==="number"){try{a[l]=0}catch{}a.removeAttribute(l);return}}try{a[l]=h}catch{}}let pa=Date.now,MC=!1;if(typeof window!="undefined"){pa()>document.createEvent("Event").timeStamp&&(pa=()=>performance.now());const a=navigator.userAgent.match(/firefox\/(\d+)/i);MC=!!(a&&Number(a[1])<=53)}let dd=0;const vS=Promise.resolve(),yS=()=>{dd=0},xS=()=>dd||(vS.then(yS),dd=pa());function Yn(a,l,h,p){a.addEventListener(l,h,p)}function ES(a,l,h,p){a.removeEventListener(l,h,p)}function DS(a,l,h,p,m=null){const C=a._vei||(a._vei={}),w=C[l];if(p&&w)w.value=p;else{const[_,k]=MS(l);if(p){const y=C[l]=TS(p,m);Yn(a,_,y,k)}else w&&(ES(a,_,w,k),C[l]=void 0)}}const jb=/(?:Once|Passive|Capture)$/;function MS(a){let l;if(jb.test(a)){l={};let h;for(;h=a.match(jb);)a=a.slice(0,a.length-h[0].length),l[h[0].toLowerCase()]=!0}return[Nn(a.slice(2)),l]}function TS(a,l){const h=p=>{const m=p.timeStamp||pa();(MC||m>=h.attached-1)&&Xe(SS(p,h.value),l,5,[p])};return h.value=a,h.attached=xS(),h}function SS(a,l){if(bt(l)){const h=a.stopImmediatePropagation;return a.stopImmediatePropagation=()=>{h.call(a),a._stopped=!0},l.map(p=>m=>!m._stopped&&p&&p(m))}else return l}const Fb=/^on[a-z]/,IS=(a,l,h,p,m=!1,C,w,_,k)=>{l==="class"?bS(a,p,m):l==="style"?wS(a,h,p):Kr(l)?kd(l)||DS(a,l,h,p,w):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):NS(a,l,p,m))?_S(a,l,p,C,w,_,k):(l==="true-value"?a._trueValue=p:l==="false-value"&&(a._falseValue=p),AS(a,l,p,m))};function NS(a,l,h,p){return p?!!(l==="innerHTML"||l==="textContent"||l in a&&Fb.test(l)&&Dt(h)):l==="spellcheck"||l==="draggable"||l==="form"||l==="list"&&a.tagName==="INPUT"||l==="type"&&a.tagName==="TEXTAREA"||Fb.test(l)&&ue(h)?!1:l in a}function TC(a,l){const h=Jr(a);class p extends Ra{constructor(C){super(h,C,l)}}return p.def=h,p}const BS=a=>TC(a,HC),PS=typeof HTMLElement!="undefined"?HTMLElement:class{};class Ra extends PS{constructor(l,h={},p){super();this._def=l,this._props=h,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&p?p(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Ea(()=>{this._connected||(hd(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let p=0;p<this.attributes.length;p++)this._setAttr(this.attributes[p].name);new MutationObserver(p=>{for(const m of p)this._setAttr(m.attributeName)}).observe(this,{attributes:!0});const l=p=>{const{props:m,styles:C}=p,w=!bt(m),_=m?w?Object.keys(m):m:[];let k;if(w)for(const y in this._props){const E=m[y];(E===Number||E&&E.type===Number)&&(this._props[y]=ko(this._props[y]),(k||(k=Object.create(null)))[y]=!0)}this._numberProps=k;for(const y of Object.keys(this))y[0]!=="_"&&this._setProp(y,this[y],!0,!1);for(const y of _.map(tn))Object.defineProperty(this,y,{get(){return this._getProp(y)},set(E){this._setProp(y,E)}});this._applyStyles(C),this._update()},h=this._def.__asyncLoader;h?h().then(l):l(this._def)}_setAttr(l){let h=this.getAttribute(l);this._numberProps&&this._numberProps[l]&&(h=ko(h)),this._setProp(tn(l),h,!1)}_getProp(l){return this._props[l]}_setProp(l,h,p=!0,m=!0){h!==this._props[l]&&(this._props[l]=h,m&&this._instance&&this._update(),p&&(h===!0?this.setAttribute(Nn(l),""):typeof h=="string"||typeof h=="number"?this.setAttribute(Nn(l),h+""):h||this.removeAttribute(Nn(l))))}_update(){hd(this._createVNode(),this.shadowRoot)}_createVNode(){const l=se(this._def,ge({},this._props));return this._instance||(l.ce=h=>{this._instance=h,h.isCE=!0,h.emit=(m,...C)=>{this.dispatchEvent(new CustomEvent(m,{detail:C}))};let p=this;for(;p=p&&(p.parentNode||p.host);)if(p instanceof Ra){h.parent=p._instance;break}}),l}_applyStyles(l){l&&l.forEach(h=>{const p=document.createElement("style");p.textContent=h,this.shadowRoot.appendChild(p)})}}function zS(a="$style"){{const l=vo();if(!l)return Wt;const h=l.type.__cssModules;if(!h)return Wt;const p=h[a];return p||Wt}}function RS(a){const l=vo();if(!l)return;const h=()=>ud(l.subTree,a(l.proxy));Hw(h),ts(()=>{const p=new MutationObserver(h);p.observe(l.subTree.el.parentNode,{childList:!0}),Na(()=>p.disconnect())})}function ud(a,l){if(a.shapeFlag&128){const h=a.suspense;a=h.activeBranch,h.pendingBranch&&!h.isHydrating&&h.effects.push(()=>{ud(h.activeBranch,l)})}for(;a.component;)a=a.component.subTree;if(a.shapeFlag&1&&a.el)Vb(a.el,l);else if(a.type===Me)a.children.forEach(h=>ud(h,l));else if(a.type===Yo){let{el:h,anchor:p}=a;for(;h&&(Vb(h,l),h!==p);)h=h.nextSibling}}function Vb(a,l){if(a.nodeType===1){const h=a.style;for(const p in l)h.setProperty(`--${p}`,l[p])}}const ao="transition",Ar="animation",Zd=(a,{slots:l})=>za(Vd,IC(a),l);Zd.displayName="Transition";const SC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},LS=Zd.props=ge({},Vd.props,SC),Ho=(a,l=[])=>{bt(a)?a.forEach(h=>h(...l)):a&&a(...l)},Hb=a=>a?bt(a)?a.some(l=>l.length>1):a.length>1:!1;function IC(a){const l={};for(const U in a)U in SC||(l[U]=a[U]);if(a.css===!1)return l;const{name:h="v",type:p,duration:m,enterFromClass:C=`${h}-enter-from`,enterActiveClass:w=`${h}-enter-active`,enterToClass:_=`${h}-enter-to`,appearFromClass:k=C,appearActiveClass:y=w,appearToClass:E=_,leaveFromClass:A=`${h}-leave-from`,leaveActiveClass:x=`${h}-leave-active`,leaveToClass:S=`${h}-leave-to`}=a,H=OS(m),nt=H&&H[0],L=H&&H[1],{onBeforeEnter:O,onEnter:z,onEnterCancelled:G,onLeave:V,onLeaveCancelled:st,onBeforeAppear:ct=O,onAppear:F=z,onAppearCancelled:Q=G}=l,Z=(U,ft,Mt)=>{Wo(U,ft?E:_),Wo(U,ft?y:w),Mt&&Mt()},lt=(U,ft)=>{Wo(U,S),Wo(U,x),ft&&ft()},ut=U=>(ft,Mt)=>{const Ft=U?F:z,It=()=>Z(ft,U,Mt);Ho(Ft,[ft,It]),Ub(()=>{Wo(ft,U?k:C),$n(ft,U?E:_),Hb(Ft)||Wb(ft,p,nt,It)})};return ge(l,{onBeforeEnter(U){Ho(O,[U]),$n(U,C),$n(U,w)},onBeforeAppear(U){Ho(ct,[U]),$n(U,k),$n(U,y)},onEnter:ut(!1),onAppear:ut(!0),onLeave(U,ft){const Mt=()=>lt(U,ft);$n(U,A),BC(),$n(U,x),Ub(()=>{Wo(U,A),$n(U,S),Hb(V)||Wb(U,p,L,Mt)}),Ho(V,[U,Mt])},onEnterCancelled(U){Z(U,!1),Ho(G,[U])},onAppearCancelled(U){Z(U,!0),Ho(Q,[U])},onLeaveCancelled(U){lt(U),Ho(st,[U])}})}function OS(a){if(a==null)return null;if(pe(a))return[Wl(a.enter),Wl(a.leave)];{const l=Wl(a);return[l,l]}}function Wl(a){return ko(a)}function $n(a,l){l.split(/\s+/).forEach(h=>h&&a.classList.add(h)),(a._vtc||(a._vtc=new Set)).add(l)}function Wo(a,l){l.split(/\s+/).forEach(p=>p&&a.classList.remove(p));const{_vtc:h}=a;h&&(h.delete(l),h.size||(a._vtc=void 0))}function Ub(a){requestAnimationFrame(()=>{requestAnimationFrame(a)})}let jS=0;function Wb(a,l,h,p){const m=a._endId=++jS,C=()=>{m===a._endId&&p()};if(h)return setTimeout(C,h);const{type:w,timeout:_,propCount:k}=NC(a,l);if(!w)return p();const y=w+"end";let E=0;const A=()=>{a.removeEventListener(y,x),C()},x=S=>{S.target===a&&++E>=k&&A()};setTimeout(()=>{E<k&&A()},_+1),a.addEventListener(y,x)}function NC(a,l){const h=window.getComputedStyle(a),p=H=>(h[H]||"").split(", "),m=p(ao+"Delay"),C=p(ao+"Duration"),w=qb(m,C),_=p(Ar+"Delay"),k=p(Ar+"Duration"),y=qb(_,k);let E=null,A=0,x=0;l===ao?w>0&&(E=ao,A=w,x=C.length):l===Ar?y>0&&(E=Ar,A=y,x=k.length):(A=Math.max(w,y),E=A>0?w>y?ao:Ar:null,x=E?E===ao?C.length:k.length:0);const S=E===ao&&/\b(transform|all)(,|$)/.test(h[ao+"Property"]);return{type:E,timeout:A,propCount:x,hasTransform:S}}function qb(a,l){for(;a.length<l.length;)a=a.concat(a);return Math.max(...l.map((h,p)=>Gb(h)+Gb(a[p])))}function Gb(a){return Number(a.slice(0,-1).replace(",","."))*1e3}function BC(){return document.body.offsetHeight}const PC=new WeakMap,zC=new WeakMap,FS={name:"TransitionGroup",props:ge({},LS,{tag:String,moveClass:String}),setup(a,{slots:l}){const h=vo(),p=Fd();let m,C;return Sa(()=>{if(!m.length)return;const w=a.moveClass||`${a.name||"v"}-move`;if(!qS(m[0].el,h.vnode.el,w))return;m.forEach(HS),m.forEach(US);const _=m.filter(WS);BC(),_.forEach(k=>{const y=k.el,E=y.style;$n(y,w),E.transform=E.webkitTransform=E.transitionDuration="";const A=y._moveCb=x=>{x&&x.target!==y||(!x||/transform$/.test(x.propertyName))&&(y.removeEventListener("transitionend",A),y._moveCb=null,Wo(y,w))};y.addEventListener("transitionend",A)})}),()=>{const w=Rt(a),_=IC(w);let k=w.tag||Me;m=C,C=l.default?Ma(l.default()):[];for(let y=0;y<C.length;y++){const E=C[y];E.key!=null&&Qo(E,Hi(E,_,p,h))}if(m)for(let y=0;y<m.length;y++){const E=m[y];Qo(E,Hi(E,_,p,h)),PC.set(E,E.el.getBoundingClientRect())}return se(k,null,C)}}},VS=FS;function HS(a){const l=a.el;l._moveCb&&l._moveCb(),l._enterCb&&l._enterCb()}function US(a){zC.set(a,a.el.getBoundingClientRect())}function WS(a){const l=PC.get(a),h=zC.get(a),p=l.left-h.left,m=l.top-h.top;if(p||m){const C=a.el.style;return C.transform=C.webkitTransform=`translate(${p}px,${m}px)`,C.transitionDuration="0s",a}}function qS(a,l,h){const p=a.cloneNode();a._vtc&&a._vtc.forEach(w=>{w.split(/\s+/).forEach(_=>_&&p.classList.remove(_))}),h.split(/\s+/).forEach(w=>w&&p.classList.add(w)),p.style.display="none";const m=l.nodeType===1?l:l.parentNode;m.appendChild(p);const{hasTransform:C}=NC(p);return m.removeChild(p),C}const _o=a=>{const l=a.props["onUpdate:modelValue"];return bt(l)?h=>Li(l,h):l};function GS(a){a.target.composing=!0}function $b(a){const l=a.target;l.composing&&(l.composing=!1,$S(l,"input"))}function $S(a,l){const h=document.createEvent("HTMLEvents");h.initEvent(l,!0,!0),a.dispatchEvent(h)}const fa={created(a,{modifiers:{lazy:l,trim:h,number:p}},m){a._assign=_o(m);const C=p||m.props&&m.props.type==="number";Yn(a,l?"change":"input",w=>{if(w.target.composing)return;let _=a.value;h?_=_.trim():C&&(_=ko(_)),a._assign(_)}),h&&Yn(a,"change",()=>{a.value=a.value.trim()}),l||(Yn(a,"compositionstart",GS),Yn(a,"compositionend",$b),Yn(a,"change",$b))},mounted(a,{value:l}){a.value=l==null?"":l},beforeUpdate(a,{value:l,modifiers:{lazy:h,trim:p,number:m}},C){if(a._assign=_o(C),a.composing||document.activeElement===a&&(h||p&&a.value.trim()===l||(m||a.type==="number")&&ko(a.value)===l))return;const w=l==null?"":l;a.value!==w&&(a.value=w)}},Jd={deep:!0,created(a,l,h){a._assign=_o(h),Yn(a,"change",()=>{const p=a._modelValue,m=Gi(a),C=a.checked,w=a._assign;if(bt(p)){const _=ba(p,m),k=_!==-1;if(C&&!k)w(p.concat(m));else if(!C&&k){const y=[...p];y.splice(_,1),w(y)}}else if(Zo(p)){const _=new Set(p);C?_.add(m):_.delete(m),w(_)}else w(LC(a,C))})},mounted:Kb,beforeUpdate(a,l,h){a._assign=_o(h),Kb(a,l,h)}};function Kb(a,{value:l,oldValue:h},p){a._modelValue=l,bt(l)?a.checked=ba(l,p.props.value)>-1:Zo(l)?a.checked=l.has(p.props.value):l!==h&&(a.checked=mo(l,LC(a,!0)))}const Xd={created(a,{value:l},h){a.checked=mo(l,h.props.value),a._assign=_o(h),Yn(a,"change",()=>{a._assign(Gi(a))})},beforeUpdate(a,{value:l,oldValue:h},p){a._assign=_o(p),l!==h&&(a.checked=mo(l,p.props.value))}},RC={deep:!0,created(a,{value:l,modifiers:{number:h}},p){const m=Zo(l);Yn(a,"change",()=>{const C=Array.prototype.filter.call(a.options,w=>w.selected).map(w=>h?ko(Gi(w)):Gi(w));a._assign(a.multiple?m?new Set(C):C:C[0])}),a._assign=_o(p)},mounted(a,{value:l}){Yb(a,l)},beforeUpdate(a,l,h){a._assign=_o(h)},updated(a,{value:l}){Yb(a,l)}};function Yb(a,l){const h=a.multiple;if(!(h&&!bt(l)&&!Zo(l))){for(let p=0,m=a.options.length;p<m;p++){const C=a.options[p],w=Gi(C);if(h)bt(l)?C.selected=ba(l,w)>-1:C.selected=l.has(w);else if(mo(Gi(C),l)){a.selectedIndex!==p&&(a.selectedIndex=p);return}}!h&&a.selectedIndex!==-1&&(a.selectedIndex=-1)}}function Gi(a){return"_value"in a?a._value:a.value}function LC(a,l){const h=l?"_trueValue":"_falseValue";return h in a?a[h]:l}const KS={created(a,l,h){na(a,l,h,null,"created")},mounted(a,l,h){na(a,l,h,null,"mounted")},beforeUpdate(a,l,h,p){na(a,l,h,p,"beforeUpdate")},updated(a,l,h,p){na(a,l,h,p,"updated")}};function na(a,l,h,p,m){let C;switch(a.tagName){case"SELECT":C=RC;break;case"TEXTAREA":C=fa;break;default:switch(h.props&&h.props.type){case"checkbox":C=Jd;break;case"radio":C=Xd;break;default:C=fa}}const w=C[m];w&&w(a,l,h,p)}function YS(){fa.getSSRProps=({value:a})=>({value:a}),Xd.getSSRProps=({value:a},l)=>{if(l.props&&mo(l.props.value,a))return{checked:!0}},Jd.getSSRProps=({value:a},l)=>{if(bt(a)){if(l.props&&ba(a,l.props.value)>-1)return{checked:!0}}else if(Zo(a)){if(l.props&&a.has(l.props.value))return{checked:!0}}else if(a)return{checked:!0}}}const QS=["ctrl","shift","alt","meta"],ZS={stop:a=>a.stopPropagation(),prevent:a=>a.preventDefault(),self:a=>a.target!==a.currentTarget,ctrl:a=>!a.ctrlKey,shift:a=>!a.shiftKey,alt:a=>!a.altKey,meta:a=>!a.metaKey,left:a=>"button"in a&&a.button!==0,middle:a=>"button"in a&&a.button!==1,right:a=>"button"in a&&a.button!==2,exact:(a,l)=>QS.some(h=>a[`${h}Key`]&&!l.includes(h))},JS=(a,l)=>(h,...p)=>{for(let m=0;m<l.length;m++){const C=ZS[l[m]];if(C&&C(h,l))return}return a(h,...p)},XS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tI=(a,l)=>h=>{if(!("key"in h))return;const p=Nn(h.key);if(l.some(m=>m===p||XS[m]===p))return a(h)},OC={beforeMount(a,{value:l},{transition:h}){a._vod=a.style.display==="none"?"":a.style.display,h&&l?h.beforeEnter(a):_r(a,l)},mounted(a,{value:l},{transition:h}){h&&l&&h.enter(a)},updated(a,{value:l,oldValue:h},{transition:p}){!l!=!h&&(p?l?(p.beforeEnter(a),_r(a,!0),p.enter(a)):p.leave(a,()=>{_r(a,!1)}):_r(a,l))},beforeUnmount(a,{value:l}){_r(a,l)}};function _r(a,l){a.style.display=l?a._vod:"none"}function eI(){OC.getSSRProps=({value:a})=>{if(!a)return{style:{display:"none"}}}}const jC=ge({patchProp:IS},kS);let Rr,Qb=!1;function FC(){return Rr||(Rr=cC(jC))}function VC(){return Rr=Qb?Rr:lC(jC),Qb=!0,Rr}const hd=(...a)=>{FC().render(...a)},HC=(...a)=>{VC().hydrate(...a)},nI=(...a)=>{const l=FC().createApp(...a),{mount:h}=l;return l.mount=p=>{const m=UC(p);if(!m)return;const C=l._component;!Dt(C)&&!C.render&&!C.template&&(C.template=m.innerHTML),m.innerHTML="";const w=h(m,!1,m instanceof SVGElement);return m instanceof Element&&(m.removeAttribute("v-cloak"),m.setAttribute("data-v-app","")),w},l},oI=(...a)=>{const l=VC().createApp(...a),{mount:h}=l;return l.mount=p=>{const m=UC(p);if(m)return h(m,!0,m instanceof SVGElement)},l};function UC(a){return ue(a)?document.querySelector(a):a}let Zb=!1;const iI=()=>{Zb||(Zb=!0,YS(),eI())},rI=()=>{};var sI=Object.freeze(Object.defineProperty({__proto__:null,compile:rI,EffectScope:_d,ReactiveEffect:Qr,customRef:SM,effect:XD,effectScope:KD,getCurrentScope:YD,isProxy:Dd,isReactive:Ko,isReadonly:Vi,isRef:ke,isShallow:Ed,markRaw:Md,onScopeDispose:QD,proxyRefs:Id,reactive:Yi,readonly:xd,ref:Tr,shallowReactive:Tw,shallowReadonly:xM,shallowRef:Sw,stop:tM,toRaw:Rt,toRef:Nw,toRefs:IM,triggerRef:DM,unref:Oi,camelize:tn,capitalize:Yr,normalizeClass:$r,normalizeProps:OD,normalizeStyle:Gr,toDisplayString:FD,toHandlerKey:Mr,BaseTransition:Vd,Comment:Re,Fragment:Me,KeepAlive:dT,Static:Yo,Suspense:XM,Teleport:ST,Text:Ui,callWithAsyncErrorHandling:Xe,callWithErrorHandling:Bn,cloneVNode:Co,compatUtils:fS,computed:wn,createBlock:Gd,createCommentVNode:jT,createElementBlock:zT,createElementVNode:$d,createHydrationRenderer:lC,createPropsRestProxy:aS,createRenderer:cC,createSlots:VT,createStaticVNode:OT,createTextVNode:Kd,createVNode:se,defineAsyncComponent:cT,defineComponent:Jr,defineEmits:eS,defineExpose:nS,defineProps:tS,get devtools(){return Bi},getCurrentInstance:vo,getTransitionRawChildren:Ma,guardReactiveProps:fC,h:za,handleError:ti,initCustomFormatter:dS,inject:Pn,isMemoSame:EC,isRuntimeOnly:YT,isVNode:wo,mergeDefaults:sS,mergeProps:mC,nextTick:Ea,onActivated:qw,onBeforeMount:Kw,onBeforeUnmount:Ia,onBeforeUpdate:Yw,onDeactivated:Gw,onErrorCaptured:Xw,onMounted:ts,onRenderTracked:Jw,onRenderTriggered:Zw,onServerPrefetch:Qw,onUnmounted:Na,onUpdated:Sa,openBlock:Ba,popScopeId:qM,provide:Br,pushScopeId:WM,queuePostFlushCb:Pd,registerRuntimeCompiler:KT,renderList:FT,renderSlot:HT,resolveComponent:NT,resolveDirective:PT,resolveDynamicComponent:BT,resolveFilter:pS,resolveTransitionHooks:Hi,setBlockTracking:id,setDevtoolsHook:jw,setTransitionHooks:Qo,ssrContextKey:xC,ssrUtils:gS,toHandlers:UT,transformVNodeArgs:RT,useAttrs:rS,useSSRContext:lS,useSlots:iS,useTransitionState:Fd,version:DC,warn:Bw,watch:Fi,watchEffect:iT,watchPostEffect:Hw,watchSyncEffect:rT,withAsyncContext:cS,withCtx:Ld,withDefaults:oS,withDirectives:_T,withMemo:uS,withScopeId:GM,Transition:Zd,TransitionGroup:VS,VueElement:Ra,createApp:nI,createSSRApp:oI,defineCustomElement:TC,defineSSRCustomElement:BS,hydrate:HC,initDirectivesForSSR:iI,render:hd,useCssModule:zS,useCssVars:RS,vModelCheckbox:Jd,vModelDynamic:KS,vModelRadio:Xd,vModelSelect:RC,vModelText:fa,vShow:OC,withKeys:tI,withModifiers:JS},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const WC=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Qi=a=>WC?Symbol(a):"_vr_"+a,aI=Qi("rvlm"),Jb=Qi("rvd"),tu=Qi("r"),qC=Qi("rl"),gd=Qi("rvl"),Pi=typeof window!="undefined";function cI(a){return a.__esModule||WC&&a[Symbol.toStringTag]==="Module"}const te=Object.assign;function ql(a,l){const h={};for(const p in l){const m=l[p];h[p]=Array.isArray(m)?m.map(a):a(m)}return h}const Lr=()=>{},lI=/\/$/,dI=a=>a.replace(lI,"");function Gl(a,l,h="/"){let p,m={},C="",w="";const _=l.indexOf("?"),k=l.indexOf("#",_>-1?_:0);return _>-1&&(p=l.slice(0,_),C=l.slice(_+1,k>-1?k:l.length),m=a(C)),k>-1&&(p=p||l.slice(0,k),w=l.slice(k,l.length)),p=pI(p!=null?p:l,h),{fullPath:p+(C&&"?")+C+w,path:p,query:m,hash:w}}function uI(a,l){const h=l.query?a(l.query):"";return l.path+(h&&"?")+h+(l.hash||"")}function Xb(a,l){return!l||!a.toLowerCase().startsWith(l.toLowerCase())?a:a.slice(l.length)||"/"}function hI(a,l,h){const p=l.matched.length-1,m=h.matched.length-1;return p>-1&&p===m&&$i(l.matched[p],h.matched[m])&&GC(l.params,h.params)&&a(l.query)===a(h.query)&&l.hash===h.hash}function $i(a,l){return(a.aliasOf||a)===(l.aliasOf||l)}function GC(a,l){if(Object.keys(a).length!==Object.keys(l).length)return!1;for(const h in a)if(!gI(a[h],l[h]))return!1;return!0}function gI(a,l){return Array.isArray(a)?tw(a,l):Array.isArray(l)?tw(l,a):a===l}function tw(a,l){return Array.isArray(l)?a.length===l.length&&a.every((h,p)=>h===l[p]):a.length===1&&a[0]===l}function pI(a,l){if(a.startsWith("/"))return a;if(!a)return l;const h=l.split("/"),p=a.split("/");let m=h.length-1,C,w;for(C=0;C<p.length;C++)if(w=p[C],!(m===1||w==="."))if(w==="..")m--;else break;return h.slice(0,m).join("/")+"/"+p.slice(C-(C===p.length?1:0)).join("/")}var qr;(function(a){a.pop="pop",a.push="push"})(qr||(qr={}));var Or;(function(a){a.back="back",a.forward="forward",a.unknown=""})(Or||(Or={}));function fI(a){if(!a)if(Pi){const l=document.querySelector("base");a=l&&l.getAttribute("href")||"/",a=a.replace(/^\w+:\/\/[^\/]+/,"")}else a="/";return a[0]!=="/"&&a[0]!=="#"&&(a="/"+a),dI(a)}const mI=/^[^#]+#/;function kI(a,l){return a.replace(mI,"#")+l}function bI(a,l){const h=document.documentElement.getBoundingClientRect(),p=a.getBoundingClientRect();return{behavior:l.behavior,left:p.left-h.left-(l.left||0),top:p.top-h.top-(l.top||0)}}const La=()=>({left:window.pageXOffset,top:window.pageYOffset});function wI(a){let l;if("el"in a){const h=a.el,p=typeof h=="string"&&h.startsWith("#"),m=typeof h=="string"?p?document.getElementById(h.slice(1)):document.querySelector(h):h;if(!m)return;l=bI(m,a)}else l=a;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function ew(a,l){return(history.state?history.state.position-l:-1)+a}const pd=new Map;function CI(a,l){pd.set(a,l)}function AI(a){const l=pd.get(a);return pd.delete(a),l}let _I=()=>location.protocol+"//"+location.host;function $C(a,l){const{pathname:h,search:p,hash:m}=l,C=a.indexOf("#");if(C>-1){let _=m.includes(a.slice(C))?a.slice(C).length:1,k=m.slice(_);return k[0]!=="/"&&(k="/"+k),Xb(k,"")}return Xb(h,a)+p+m}function vI(a,l,h,p){let m=[],C=[],w=null;const _=({state:x})=>{const S=$C(a,location),H=h.value,nt=l.value;let L=0;if(x){if(h.value=S,l.value=x,w&&w===H){w=null;return}L=nt?x.position-nt.position:0}else p(S);m.forEach(O=>{O(h.value,H,{delta:L,type:qr.pop,direction:L?L>0?Or.forward:Or.back:Or.unknown})})};function k(){w=h.value}function y(x){m.push(x);const S=()=>{const H=m.indexOf(x);H>-1&&m.splice(H,1)};return C.push(S),S}function E(){const{history:x}=window;!x.state||x.replaceState(te({},x.state,{scroll:La()}),"")}function A(){for(const x of C)x();C=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",E)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",E),{pauseListeners:k,listen:y,destroy:A}}function nw(a,l,h,p=!1,m=!1){return{back:a,current:l,forward:h,replaced:p,position:window.history.length,scroll:m?La():null}}function yI(a){const{history:l,location:h}=window,p={value:$C(a,h)},m={value:l.state};m.value||C(p.value,{back:null,current:p.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function C(k,y,E){const A=a.indexOf("#"),x=A>-1?(h.host&&document.querySelector("base")?a:a.slice(A))+k:_I()+a+k;try{l[E?"replaceState":"pushState"](y,"",x),m.value=y}catch(S){console.error(S),h[E?"replace":"assign"](x)}}function w(k,y){const E=te({},l.state,nw(m.value.back,k,m.value.forward,!0),y,{position:m.value.position});C(k,E,!0),p.value=k}function _(k,y){const E=te({},m.value,l.state,{forward:k,scroll:La()});C(E.current,E,!0);const A=te({},nw(p.value,k,null),{position:E.position+1},y);C(k,A,!1),p.value=k}return{location:p,state:m,push:_,replace:w}}function xI(a){a=fI(a);const l=yI(a),h=vI(a,l.state,l.location,l.replace);function p(C,w=!0){w||h.pauseListeners(),history.go(C)}const m=te({location:"",base:a,go:p,createHref:kI.bind(null,a)},l,h);return Object.defineProperty(m,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(m,"state",{enumerable:!0,get:()=>l.state.value}),m}function g2(a){return a=location.host?a||location.pathname+location.search:"",a.includes("#")||(a+="#"),xI(a)}function EI(a){return typeof a=="string"||a&&typeof a=="object"}function KC(a){return typeof a=="string"||typeof a=="symbol"}const co={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},YC=Qi("nf");var ow;(function(a){a[a.aborted=4]="aborted",a[a.cancelled=8]="cancelled",a[a.duplicated=16]="duplicated"})(ow||(ow={}));function Ki(a,l){return te(new Error,{type:a,[YC]:!0},l)}function lo(a,l){return a instanceof Error&&YC in a&&(l==null||!!(a.type&l))}const iw="[^/]+?",DI={sensitive:!1,strict:!1,start:!0,end:!0},MI=/[.+*?^${}()[\]/\\]/g;function TI(a,l){const h=te({},DI,l),p=[];let m=h.start?"^":"";const C=[];for(const y of a){const E=y.length?[]:[90];h.strict&&!y.length&&(m+="/");for(let A=0;A<y.length;A++){const x=y[A];let S=40+(h.sensitive?.25:0);if(x.type===0)A||(m+="/"),m+=x.value.replace(MI,"\\$&"),S+=40;else if(x.type===1){const{value:H,repeatable:nt,optional:L,regexp:O}=x;C.push({name:H,repeatable:nt,optional:L});const z=O||iw;if(z!==iw){S+=10;try{new RegExp(`(${z})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${H}" (${z}): `+V.message)}}let G=nt?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;A||(G=L&&y.length<2?`(?:/${G})`:"/"+G),L&&(G+="?"),m+=G,S+=20,L&&(S+=-8),nt&&(S+=-20),z===".*"&&(S+=-50)}E.push(S)}p.push(E)}if(h.strict&&h.end){const y=p.length-1;p[y][p[y].length-1]+=.7000000000000001}h.strict||(m+="/?"),h.end?m+="$":h.strict&&(m+="(?:/|$)");const w=new RegExp(m,h.sensitive?"":"i");function _(y){const E=y.match(w),A={};if(!E)return null;for(let x=1;x<E.length;x++){const S=E[x]||"",H=C[x-1];A[H.name]=S&&H.repeatable?S.split("/"):S}return A}function k(y){let E="",A=!1;for(const x of a){(!A||!E.endsWith("/"))&&(E+="/"),A=!1;for(const S of x)if(S.type===0)E+=S.value;else if(S.type===1){const{value:H,repeatable:nt,optional:L}=S,O=H in y?y[H]:"";if(Array.isArray(O)&&!nt)throw new Error(`Provided param "${H}" is an array but it is not repeatable (* or + modifiers)`);const z=Array.isArray(O)?O.join("/"):O;if(!z)if(L)x.length<2&&(E.endsWith("/")?E=E.slice(0,-1):A=!0);else throw new Error(`Missing required param "${H}"`);E+=z}}return E}return{re:w,score:p,keys:C,parse:_,stringify:k}}function SI(a,l){let h=0;for(;h<a.length&&h<l.length;){const p=l[h]-a[h];if(p)return p;h++}return a.length<l.length?a.length===1&&a[0]===40+40?-1:1:a.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function II(a,l){let h=0;const p=a.score,m=l.score;for(;h<p.length&&h<m.length;){const C=SI(p[h],m[h]);if(C)return C;h++}return m.length-p.length}const NI={type:0,value:""},BI=/[a-zA-Z0-9_]/;function PI(a){if(!a)return[[]];if(a==="/")return[[NI]];if(!a.startsWith("/"))throw new Error(`Invalid path "${a}"`);function l(S){throw new Error(`ERR (${h})/"${y}": ${S}`)}let h=0,p=h;const m=[];let C;function w(){C&&m.push(C),C=[]}let _=0,k,y="",E="";function A(){!y||(h===0?C.push({type:0,value:y}):h===1||h===2||h===3?(C.length>1&&(k==="*"||k==="+")&&l(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),C.push({type:1,value:y,regexp:E,repeatable:k==="*"||k==="+",optional:k==="*"||k==="?"})):l("Invalid state to consume buffer"),y="")}function x(){y+=k}for(;_<a.length;){if(k=a[_++],k==="\\"&&h!==2){p=h,h=4;continue}switch(h){case 0:k==="/"?(y&&A(),w()):k===":"?(A(),h=1):x();break;case 4:x(),h=p;break;case 1:k==="("?h=2:BI.test(k)?x():(A(),h=0,k!=="*"&&k!=="?"&&k!=="+"&&_--);break;case 2:k===")"?E[E.length-1]=="\\"?E=E.slice(0,-1)+k:h=3:E+=k;break;case 3:A(),h=0,k!=="*"&&k!=="?"&&k!=="+"&&_--,E="";break;default:l("Unknown state");break}}return h===2&&l(`Unfinished custom RegExp for param "${y}"`),A(),w(),m}function zI(a,l,h){const p=TI(PI(a.path),h),m=te(p,{record:a,parent:l,children:[],alias:[]});return l&&!m.record.aliasOf==!l.record.aliasOf&&l.children.push(m),m}function RI(a,l){const h=[],p=new Map;l=sw({strict:!1,end:!0,sensitive:!1},l);function m(E){return p.get(E)}function C(E,A,x){const S=!x,H=OI(E);H.aliasOf=x&&x.record;const nt=sw(l,E),L=[H];if("alias"in E){const G=typeof E.alias=="string"?[E.alias]:E.alias;for(const V of G)L.push(te({},H,{components:x?x.record.components:H.components,path:V,aliasOf:x?x.record:H}))}let O,z;for(const G of L){const{path:V}=G;if(A&&V[0]!=="/"){const st=A.record.path,ct=st[st.length-1]==="/"?"":"/";G.path=A.record.path+(V&&ct+V)}if(O=zI(G,A,nt),x?x.alias.push(O):(z=z||O,z!==O&&z.alias.push(O),S&&E.name&&!rw(O)&&w(E.name)),"children"in H){const st=H.children;for(let ct=0;ct<st.length;ct++)C(st[ct],O,x&&x.children[ct])}x=x||O,k(O)}return z?()=>{w(z)}:Lr}function w(E){if(KC(E)){const A=p.get(E);A&&(p.delete(E),h.splice(h.indexOf(A),1),A.children.forEach(w),A.alias.forEach(w))}else{const A=h.indexOf(E);A>-1&&(h.splice(A,1),E.record.name&&p.delete(E.record.name),E.children.forEach(w),E.alias.forEach(w))}}function _(){return h}function k(E){let A=0;for(;A<h.length&&II(E,h[A])>=0&&(E.record.path!==h[A].record.path||!QC(E,h[A]));)A++;h.splice(A,0,E),E.record.name&&!rw(E)&&p.set(E.record.name,E)}function y(E,A){let x,S={},H,nt;if("name"in E&&E.name){if(x=p.get(E.name),!x)throw Ki(1,{location:E});nt=x.record.name,S=te(LI(A.params,x.keys.filter(z=>!z.optional).map(z=>z.name)),E.params),H=x.stringify(S)}else if("path"in E)H=E.path,x=h.find(z=>z.re.test(H)),x&&(S=x.parse(H),nt=x.record.name);else{if(x=A.name?p.get(A.name):h.find(z=>z.re.test(A.path)),!x)throw Ki(1,{location:E,currentLocation:A});nt=x.record.name,S=te({},A.params,E.params),H=x.stringify(S)}const L=[];let O=x;for(;O;)L.unshift(O.record),O=O.parent;return{name:nt,path:H,params:S,matched:L,meta:FI(L)}}return a.forEach(E=>C(E)),{addRoute:C,resolve:y,removeRoute:w,getRoutes:_,getRecordMatcher:m}}function LI(a,l){const h={};for(const p of l)p in a&&(h[p]=a[p]);return h}function OI(a){return{path:a.path,redirect:a.redirect,name:a.name,meta:a.meta||{},aliasOf:void 0,beforeEnter:a.beforeEnter,props:jI(a),children:a.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in a?a.components||{}:{default:a.component}}}function jI(a){const l={},h=a.props||!1;if("component"in a)l.default=h;else for(const p in a.components)l[p]=typeof h=="boolean"?h:h[p];return l}function rw(a){for(;a;){if(a.record.aliasOf)return!0;a=a.parent}return!1}function FI(a){return a.reduce((l,h)=>te(l,h.meta),{})}function sw(a,l){const h={};for(const p in a)h[p]=p in l?l[p]:a[p];return h}function QC(a,l){return l.children.some(h=>h===a||QC(a,h))}const ZC=/#/g,VI=/&/g,HI=/\//g,UI=/=/g,WI=/\?/g,JC=/\+/g,qI=/%5B/g,GI=/%5D/g,XC=/%5E/g,$I=/%60/g,tA=/%7B/g,KI=/%7C/g,eA=/%7D/g,YI=/%20/g;function eu(a){return encodeURI(""+a).replace(KI,"|").replace(qI,"[").replace(GI,"]")}function QI(a){return eu(a).replace(tA,"{").replace(eA,"}").replace(XC,"^")}function fd(a){return eu(a).replace(JC,"%2B").replace(YI,"+").replace(ZC,"%23").replace(VI,"%26").replace($I,"`").replace(tA,"{").replace(eA,"}").replace(XC,"^")}function ZI(a){return fd(a).replace(UI,"%3D")}function JI(a){return eu(a).replace(ZC,"%23").replace(WI,"%3F")}function XI(a){return a==null?"":JI(a).replace(HI,"%2F")}function ma(a){try{return decodeURIComponent(""+a)}catch{}return""+a}function t2(a){const l={};if(a===""||a==="?")return l;const p=(a[0]==="?"?a.slice(1):a).split("&");for(let m=0;m<p.length;++m){const C=p[m].replace(JC," "),w=C.indexOf("="),_=ma(w<0?C:C.slice(0,w)),k=w<0?null:ma(C.slice(w+1));if(_ in l){let y=l[_];Array.isArray(y)||(y=l[_]=[y]),y.push(k)}else l[_]=k}return l}function aw(a){let l="";for(let h in a){const p=a[h];if(h=ZI(h),p==null){p!==void 0&&(l+=(l.length?"&":"")+h);continue}(Array.isArray(p)?p.map(C=>C&&fd(C)):[p&&fd(p)]).forEach(C=>{C!==void 0&&(l+=(l.length?"&":"")+h,C!=null&&(l+="="+C))})}return l}function e2(a){const l={};for(const h in a){const p=a[h];p!==void 0&&(l[h]=Array.isArray(p)?p.map(m=>m==null?null:""+m):p==null?p:""+p)}return l}function vr(){let a=[];function l(p){return a.push(p),()=>{const m=a.indexOf(p);m>-1&&a.splice(m,1)}}function h(){a=[]}return{add:l,list:()=>a,reset:h}}function go(a,l,h,p,m){const C=p&&(p.enterCallbacks[m]=p.enterCallbacks[m]||[]);return()=>new Promise((w,_)=>{const k=A=>{A===!1?_(Ki(4,{from:h,to:l})):A instanceof Error?_(A):EI(A)?_(Ki(2,{from:l,to:A})):(C&&p.enterCallbacks[m]===C&&typeof A=="function"&&C.push(A),w())},y=a.call(p&&p.instances[m],l,h,k);let E=Promise.resolve(y);a.length<3&&(E=E.then(k)),E.catch(A=>_(A))})}function $l(a,l,h,p){const m=[];for(const C of a)for(const w in C.components){let _=C.components[w];if(!(l!=="beforeRouteEnter"&&!C.instances[w]))if(n2(_)){const y=(_.__vccOpts||_)[l];y&&m.push(go(y,h,p,C,w))}else{let k=_();m.push(()=>k.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${w}" at "${C.path}"`));const E=cI(y)?y.default:y;C.components[w]=E;const x=(E.__vccOpts||E)[l];return x&&go(x,h,p,C,w)()}))}}return m}function n2(a){return typeof a=="object"||"displayName"in a||"props"in a||"__vccOpts"in a}function cw(a){const l=Pn(tu),h=Pn(qC),p=wn(()=>l.resolve(Oi(a.to))),m=wn(()=>{const{matched:k}=p.value,{length:y}=k,E=k[y-1],A=h.matched;if(!E||!A.length)return-1;const x=A.findIndex($i.bind(null,E));if(x>-1)return x;const S=lw(k[y-2]);return y>1&&lw(E)===S&&A[A.length-1].path!==S?A.findIndex($i.bind(null,k[y-2])):x}),C=wn(()=>m.value>-1&&s2(h.params,p.value.params)),w=wn(()=>m.value>-1&&m.value===h.matched.length-1&&GC(h.params,p.value.params));function _(k={}){return r2(k)?l[Oi(a.replace)?"replace":"push"](Oi(a.to)).catch(Lr):Promise.resolve()}return{route:p,href:wn(()=>p.value.href),isActive:C,isExactActive:w,navigate:_}}const o2=Jr({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:cw,setup(a,{slots:l}){const h=Yi(cw(a)),{options:p}=Pn(tu),m=wn(()=>({[dw(a.activeClass,p.linkActiveClass,"router-link-active")]:h.isActive,[dw(a.exactActiveClass,p.linkExactActiveClass,"router-link-exact-active")]:h.isExactActive}));return()=>{const C=l.default&&l.default(h);return a.custom?C:za("a",{"aria-current":h.isExactActive?a.ariaCurrentValue:null,href:h.href,onClick:h.navigate,class:m.value},C)}}}),i2=o2;function r2(a){if(!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&!a.defaultPrevented&&!(a.button!==void 0&&a.button!==0)){if(a.currentTarget&&a.currentTarget.getAttribute){const l=a.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return a.preventDefault&&a.preventDefault(),!0}}function s2(a,l){for(const h in l){const p=l[h],m=a[h];if(typeof p=="string"){if(p!==m)return!1}else if(!Array.isArray(m)||m.length!==p.length||p.some((C,w)=>C!==m[w]))return!1}return!0}function lw(a){return a?a.aliasOf?a.aliasOf.path:a.path:""}const dw=(a,l,h)=>a!=null?a:l!=null?l:h,a2=Jr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(a,{attrs:l,slots:h}){const p=Pn(gd),m=wn(()=>a.route||p.value),C=Pn(Jb,0),w=wn(()=>m.value.matched[C]);Br(Jb,C+1),Br(aI,w),Br(gd,m);const _=Tr();return Fi(()=>[_.value,w.value,a.name],([k,y,E],[A,x,S])=>{y&&(y.instances[E]=k,x&&x!==y&&k&&k===A&&(y.leaveGuards.size||(y.leaveGuards=x.leaveGuards),y.updateGuards.size||(y.updateGuards=x.updateGuards))),k&&y&&(!x||!$i(y,x)||!A)&&(y.enterCallbacks[E]||[]).forEach(H=>H(k))},{flush:"post"}),()=>{const k=m.value,y=w.value,E=y&&y.components[a.name],A=a.name;if(!E)return uw(h.default,{Component:E,route:k});const x=y.props[a.name],S=x?x===!0?k.params:typeof x=="function"?x(k):x:null,nt=za(E,te({},S,l,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(y.instances[A]=null)},ref:_}));return uw(h.default,{Component:nt,route:k})||nt}}});function uw(a,l){if(!a)return null;const h=a(l);return h.length===1?h[0]:h}const c2=a2;function p2(a){const l=RI(a.routes,a),h=a.parseQuery||t2,p=a.stringifyQuery||aw,m=a.history,C=vr(),w=vr(),_=vr(),k=Sw(co);let y=co;Pi&&a.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=ql.bind(null,P=>""+P),A=ql.bind(null,XI),x=ql.bind(null,ma);function S(P,tt){let J,pt;return KC(P)?(J=l.getRecordMatcher(P),pt=tt):pt=P,l.addRoute(pt,J)}function H(P){const tt=l.getRecordMatcher(P);tt&&l.removeRoute(tt)}function nt(){return l.getRoutes().map(P=>P.record)}function L(P){return!!l.getRecordMatcher(P)}function O(P,tt){if(tt=te({},tt||k.value),typeof P=="string"){const Ct=Gl(h,P,tt.path),I=l.resolve({path:Ct.path},tt),B=m.createHref(Ct.fullPath);return te(Ct,I,{params:x(I.params),hash:ma(Ct.hash),redirectedFrom:void 0,href:B})}let J;if("path"in P)J=te({},P,{path:Gl(h,P.path,tt.path).path});else{const Ct=te({},P.params);for(const I in Ct)Ct[I]==null&&delete Ct[I];J=te({},P,{params:A(P.params)}),tt.params=A(tt.params)}const pt=l.resolve(J,tt),Bt=P.hash||"";pt.params=E(x(pt.params));const Lt=uI(p,te({},P,{hash:QI(Bt),path:pt.path})),At=m.createHref(Lt);return te({fullPath:Lt,hash:Bt,query:p===aw?e2(P.query):P.query||{}},pt,{redirectedFrom:void 0,href:At})}function z(P){return typeof P=="string"?Gl(h,P,k.value.path):te({},P)}function G(P,tt){if(y!==P)return Ki(8,{from:tt,to:P})}function V(P){return F(P)}function st(P){return V(te(z(P),{replace:!0}))}function ct(P){const tt=P.matched[P.matched.length-1];if(tt&&tt.redirect){const{redirect:J}=tt;let pt=typeof J=="function"?J(P):J;return typeof pt=="string"&&(pt=pt.includes("?")||pt.includes("#")?pt=z(pt):{path:pt},pt.params={}),te({query:P.query,hash:P.hash,params:P.params},pt)}}function F(P,tt){const J=y=O(P),pt=k.value,Bt=P.state,Lt=P.force,At=P.replace===!0,Ct=ct(J);if(Ct)return F(te(z(Ct),{state:Bt,force:Lt,replace:At}),tt||J);const I=J;I.redirectedFrom=tt;let B;return!Lt&&hI(p,pt,J)&&(B=Ki(16,{to:I,from:pt}),Le(pt,pt,!0,!1)),(B?Promise.resolve(B):Z(I,pt)).catch(j=>lo(j)?lo(j,2)?j:ve(j):zt(j,I,pt)).then(j=>{if(j){if(lo(j,2))return F(te(z(j.to),{state:Bt,force:Lt,replace:At}),tt||I)}else j=ut(I,pt,!0,At,Bt);return lt(I,pt,j),j})}function Q(P,tt){const J=G(P,tt);return J?Promise.reject(J):Promise.resolve()}function Z(P,tt){let J;const[pt,Bt,Lt]=l2(P,tt);J=$l(pt.reverse(),"beforeRouteLeave",P,tt);for(const Ct of pt)Ct.leaveGuards.forEach(I=>{J.push(go(I,P,tt))});const At=Q.bind(null,P,tt);return J.push(At),Si(J).then(()=>{J=[];for(const Ct of C.list())J.push(go(Ct,P,tt));return J.push(At),Si(J)}).then(()=>{J=$l(Bt,"beforeRouteUpdate",P,tt);for(const Ct of Bt)Ct.updateGuards.forEach(I=>{J.push(go(I,P,tt))});return J.push(At),Si(J)}).then(()=>{J=[];for(const Ct of P.matched)if(Ct.beforeEnter&&!tt.matched.includes(Ct))if(Array.isArray(Ct.beforeEnter))for(const I of Ct.beforeEnter)J.push(go(I,P,tt));else J.push(go(Ct.beforeEnter,P,tt));return J.push(At),Si(J)}).then(()=>(P.matched.forEach(Ct=>Ct.enterCallbacks={}),J=$l(Lt,"beforeRouteEnter",P,tt),J.push(At),Si(J))).then(()=>{J=[];for(const Ct of w.list())J.push(go(Ct,P,tt));return J.push(At),Si(J)}).catch(Ct=>lo(Ct,8)?Ct:Promise.reject(Ct))}function lt(P,tt,J){for(const pt of _.list())pt(P,tt,J)}function ut(P,tt,J,pt,Bt){const Lt=G(P,tt);if(Lt)return Lt;const At=tt===co,Ct=Pi?history.state:{};J&&(pt||At?m.replace(P.fullPath,te({scroll:At&&Ct&&Ct.scroll},Bt)):m.push(P.fullPath,Bt)),k.value=P,Le(P,tt,J,At),ve()}let U;function ft(){U=m.listen((P,tt,J)=>{const pt=O(P),Bt=ct(pt);if(Bt){F(te(Bt,{replace:!0}),pt).catch(Lr);return}y=pt;const Lt=k.value;Pi&&CI(ew(Lt.fullPath,J.delta),La()),Z(pt,Lt).catch(At=>lo(At,12)?At:lo(At,2)?(F(At.to,pt).then(Ct=>{lo(Ct,20)&&!J.delta&&J.type===qr.pop&&m.go(-1,!1)}).catch(Lr),Promise.reject()):(J.delta&&m.go(-J.delta,!1),zt(At,pt,Lt))).then(At=>{At=At||ut(pt,Lt,!1),At&&(J.delta?m.go(-J.delta,!1):J.type===qr.pop&&lo(At,20)&&m.go(-1,!1)),lt(pt,Lt,At)}).catch(Lr)})}let Mt=vr(),Ft=vr(),It;function zt(P,tt,J){ve(P);const pt=Ft.list();return pt.length?pt.forEach(Bt=>Bt(P,tt,J)):console.error(P),Promise.reject(P)}function Vt(){return It&&k.value!==co?Promise.resolve():new Promise((P,tt)=>{Mt.add([P,tt])})}function ve(P){return It||(It=!P,ft(),Mt.list().forEach(([tt,J])=>P?J(P):tt()),Mt.reset()),P}function Le(P,tt,J,pt){const{scrollBehavior:Bt}=a;if(!Pi||!Bt)return Promise.resolve();const Lt=!J&&AI(ew(P.fullPath,0))||(pt||!J)&&history.state&&history.state.scroll||null;return Ea().then(()=>Bt(P,tt,Lt)).then(At=>At&&wI(At)).catch(At=>zt(At,P,tt))}const Oe=P=>m.go(P);let je;const Te=new Set;return{currentRoute:k,addRoute:S,removeRoute:H,hasRoute:L,getRoutes:nt,resolve:O,options:a,push:V,replace:st,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:C.add,beforeResolve:w.add,afterEach:_.add,onError:Ft.add,isReady:Vt,install(P){const tt=this;P.component("RouterLink",i2),P.component("RouterView",c2),P.config.globalProperties.$router=tt,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>Oi(k)}),Pi&&!je&&k.value===co&&(je=!0,V(m.location).catch(Bt=>{}));const J={};for(const Bt in co)J[Bt]=wn(()=>k.value[Bt]);P.provide(tu,tt),P.provide(qC,Yi(J)),P.provide(gd,k);const pt=P.unmount;Te.add(P),P.unmount=function(){Te.delete(P),Te.size<1&&(y=co,U&&U(),k.value=co,je=!1,It=!1),pt()}}}}function Si(a){return a.reduce((l,h)=>l.then(()=>h()),Promise.resolve())}function l2(a,l){const h=[],p=[],m=[],C=Math.max(l.matched.length,a.matched.length);for(let w=0;w<C;w++){const _=l.matched[w];_&&(a.matched.find(y=>$i(y,_))?p.push(_):h.push(_));const k=a.matched[w];k&&(l.matched.find(y=>$i(y,k))||m.push(k))}return[h,p,m]}var oa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function nA(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function d2(a){if(a.__esModule)return a;var l=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(a).forEach(function(h){var p=Object.getOwnPropertyDescriptor(a,h);Object.defineProperty(l,h,p.get?p:{enumerable:!0,get:function(){return a[h]}})}),l}var oA={exports:{}},u2=d2(sI);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(a,l){(function(h,p){a.exports=p(u2)})(window,function(h){return function(p){var m={};function C(w){if(m[w])return m[w].exports;var _=m[w]={i:w,l:!1,exports:{}};return p[w].call(_.exports,_,_.exports,C),_.l=!0,_.exports}return C.m=p,C.c=m,C.d=function(w,_,k){C.o(w,_)||Object.defineProperty(w,_,{enumerable:!0,get:k})},C.r=function(w){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(w,"__esModule",{value:!0})},C.t=function(w,_){if(1&_&&(w=C(w)),8&_||4&_&&typeof w=="object"&&w&&w.__esModule)return w;var k=Object.create(null);if(C.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:w}),2&_&&typeof w!="string")for(var y in w)C.d(k,y,function(E){return w[E]}.bind(null,y));return k},C.n=function(w){var _=w&&w.__esModule?function(){return w.default}:function(){return w};return C.d(_,"a",_),_},C.o=function(w,_){return Object.prototype.hasOwnProperty.call(w,_)},C.p="",C(C.s=3)}([function(p,m){p.exports=h},function(p,m,C){(function(w){var _=typeof w=="object"&&w&&w.Object===Object&&w;m.a=_}).call(this,C(2))},function(p,m){var C;C=function(){return this}();try{C=C||new Function("return this")()}catch{typeof window=="object"&&(C=window)}p.exports=C},function(p,m,C){C.r(m);var w=C(0),_=C.n(w),k=function(P){var tt=typeof P;return P!=null&&(tt=="object"||tt=="function")},y=C(1),E=typeof self=="object"&&self&&self.Object===Object&&self,A=y.a||E||Function("return this")(),x=function(){return A.Date.now()},S=/\s/,H=function(P){for(var tt=P.length;tt--&&S.test(P.charAt(tt)););return tt},nt=/^\s+/,L=function(P){return P&&P.slice(0,H(P)+1).replace(nt,"")},O=A.Symbol,z=Object.prototype,G=z.hasOwnProperty,V=z.toString,st=O?O.toStringTag:void 0,ct=function(P){var tt=G.call(P,st),J=P[st];try{P[st]=void 0;var pt=!0}catch{}var Bt=V.call(P);return pt&&(tt?P[st]=J:delete P[st]),Bt},F=Object.prototype.toString,Q=function(P){return F.call(P)},Z=O?O.toStringTag:void 0,lt=function(P){return P==null?P===void 0?"[object Undefined]":"[object Null]":Z&&Z in Object(P)?ct(P):Q(P)},ut=function(P){return P!=null&&typeof P=="object"},U=function(P){return typeof P=="symbol"||ut(P)&&lt(P)=="[object Symbol]"},ft=/^[-+]0x[0-9a-f]+$/i,Mt=/^0b[01]+$/i,Ft=/^0o[0-7]+$/i,It=parseInt,zt=function(P){if(typeof P=="number")return P;if(U(P))return NaN;if(k(P)){var tt=typeof P.valueOf=="function"?P.valueOf():P;P=k(tt)?tt+"":tt}if(typeof P!="string")return P===0?P:+P;P=L(P);var J=Mt.test(P);return J||Ft.test(P)?It(P.slice(2),J?2:8):ft.test(P)?NaN:+P},Vt=Math.max,ve=Math.min,Le=function(P,tt,J){var pt,Bt,Lt,At,Ct,I,B=0,j=!1,$=!1,K=!0;if(typeof P!="function")throw new TypeError("Expected a function");function rt(dt){var mt=pt,wt=Bt;return pt=Bt=void 0,B=dt,At=P.apply(wt,mt)}function ht(dt){return B=dt,Ct=setTimeout(it,tt),j?rt(dt):At}function et(dt){var mt=dt-I;return I===void 0||mt>=tt||mt<0||$&&dt-B>=Lt}function it(){var dt=x();if(et(dt))return X(dt);Ct=setTimeout(it,function(mt){var wt=tt-(mt-I);return $?ve(wt,Lt-(mt-B)):wt}(dt))}function X(dt){return Ct=void 0,K&&pt?rt(dt):(pt=Bt=void 0,At)}function kt(){var dt=x(),mt=et(dt);if(pt=arguments,Bt=this,I=dt,mt){if(Ct===void 0)return ht(I);if($)return clearTimeout(Ct),Ct=setTimeout(it,tt),rt(I)}return Ct===void 0&&(Ct=setTimeout(it,tt)),At}return tt=zt(tt)||0,k(J)&&(j=!!J.leading,Lt=($="maxWait"in J)?Vt(zt(J.maxWait)||0,tt):Lt,K="trailing"in J?!!J.trailing:K),kt.cancel=function(){Ct!==void 0&&clearTimeout(Ct),B=0,pt=I=Bt=Ct=void 0},kt.flush=function(){return Ct===void 0?At:X(x())},kt},Oe={name:"ckeditor",render(){return Object(w.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const P=Object.assign({},this.config);this.modelValue&&(P.initialData=this.modelValue),this.editor.create(this.$el,P).then(tt=>{this.instance=Object(w.markRaw)(tt),tt.isReadOnly=this.disabled,this.setUpEditorEvents(),this.$emit("ready",tt)}).catch(tt=>{console.error(tt)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(P,tt){P!==tt&&P!==this.lastEditorData&&this.instance.setData(P)},disabled(P){this.instance.isReadOnly=P}},methods:{setUpEditorEvents(){const P=this.instance,tt=Le(J=>{const pt=this.lastEditorData=P.getData();this.$emit("update:modelValue",pt,J,P),this.$emit("input",pt,J,P)},300,{leading:!0});P.model.document.on("change:data",tt),P.editing.view.document.on("focus",J=>{this.$emit("focus",J,P)}),P.editing.view.document.on("blur",J=>{this.$emit("blur",J,P)})}}};const je=_.a?_.a.version:w.version,[Te]=je.split(".").map(P=>parseInt(P,10));if(Te<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Jn={install(P){P.component("ckeditor",Oe)},component:Oe};m.default=Jn}]).default})})(oA);var f2=nA(oA.exports),md={exports:{}};(function(a,l){(function(h){const p=h.en=h.en||{};p.dictionary=Object.assign(p.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(h,p){a.exports=p()}(self,function(){return(()=>{var h={3062:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAEC,eAAgB,CAGhB,mBAAoB,CACpB,kBAAmB,CAEnB,aAAc,CACd,cAAe,CACf,iBAAkB,CAClB,0BACD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=x},903:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;position:relative;pointer-events:none}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);border:1px solid var(--ck-clipboard-drop-target-color);background:var(--ck-clipboard-drop-target-color);margin-left:-1px}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{content:"";width:0;height:0;display:block;position:absolute;left:50%;top:calc(var(--ck-clipboard-drop-target-dot-height)*-0.5);transform:translateX(-50%);border-left:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-bottom:0 solid transparent;border-right:calc(var(--ck-clipboard-drop-target-dot-width)*0.5) solid transparent;border-top:calc(var(--ck-clipboard-drop-target-dot-height)) solid var(--ck-clipboard-drop-target-color)}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CACf,iBAAkB,CAClB,mBAMD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEACC,4DAA8D,CAC9D,yDAA2D,CAC3D,sDAAuD,CACvD,gDAAiD,CACjD,gBAkBD,CAfC,yEACC,UAAW,CACX,OAAQ,CACR,QAAS,CAET,aAAc,CACd,iBAAkB,CAClB,QAAS,CACT,yDAA2D,CAE3D,0BAA2B,CAG3B,iFAAmB,CAAnB,iCAAmB,CAAnB,kFAAmB,CAAnB,uGACD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const S=x},3143:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},4717:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-placeholder,.ck .ck-placeholder{position:relative}.ck.ck-placeholder:before,.ck .ck-placeholder:before{position:absolute;left:0;right:0;content:attr(data-placeholder);pointer-events:none}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck.ck-placeholder:before,.ck .ck-placeholder:before{cursor:text;color:var(--ck-color-engine-placeholder-text)}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDACC,iBAAkB,CAClB,MAAO,CACP,OAAQ,CACR,8BAA+B,CAG/B,mBACD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDACC,WAAY,CACZ,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=x},9315:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=x},8733:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=x},3508:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck-content .image{display:table;clear:both;text-align:center;margin:.9em auto;min-width:50px}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{display:inline-flex;max-width:100%;align-items:flex-start}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{padding-left:inherit;padding-right:inherit;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBACC,aAAc,CACd,UAAW,CACX,iBAAkB,CAKlB,gBAAkB,CAGlB,cAeD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAMC,mBAAoB,CAGpB,cAAe,CAGf,sBAiBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEACC,oBAAqB,CACrB,qBAAsB,CAMtB,kBAAmB,CACnB,eAAgB,CAChB,sBACD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=x},2640:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{display:table-caption;caption-side:bottom;word-break:break-word;color:var(--ck-color-image-caption-text);background-color:var(--ck-color-image-caption-background);padding:.6em;font-size:.75em;outline-offset:-1px}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BACC,qBAAsB,CACtB,mBAAoB,CACpB,qBAAsB,CACtB,wCAAyC,CACzC,yDAA0D,CAC1D,YAAa,CACb,eAAgB,CAChB,mBACD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=x},5083:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-right:0;margin-left:auto}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-top:var(--ck-inline-image-style-spacing);margin-bottom:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CACC,cAAe,CACf,gBACD,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAEC,+CAAgD,CAChD,kDACD,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},4036:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck-image-upload-complete-icon{display:block;position:absolute;top:min(var(--ck-spacing-medium),6%);right:min(var(--ck-spacing-medium),6%);border-radius:50%;z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:calc(1px*var(--ck-image-upload-icon-size));animation-delay:0ms,3s;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BACC,aAAc,CACd,iBAAkB,CAMlB,oCAAsC,CACtC,sCAAwC,CACxC,iBAAkB,CAClB,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BACC,SAAU,CACV,uDAAwD,CACxD,wEAA0E,CAC1E,qCAAuC,CACvC,0BAAgC,CAGhC,oDAAuD,CAGvD,sBAA4B,CAM5B,eAAgB,CAChB,mFAAsF,CACtF,oFAyBD,CAtBC,qCAEC,QAAS,CAET,OAAQ,CACR,SAAU,CACV,QAAS,CACT,OAAQ,CAER,mCAAoC,CACpC,yBAA0B,CAC1B,oFAAqF,CACrF,sFAAuF,CAEvF,4CAA6C,CAC7C,sBAAyB,CACzB,mBAAsB,CACtB,4BAA6B,CAG7B,qBACD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GACC,SAAU,CACV,OAAQ,CACR,QACD,CACA,IACC,UAAY,CACZ,QACD,CACA,GACC,SAAU,CACV,UAAY,CACZ,YACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=x},3773:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCACC,iBAAkB,CAClB,YAAa,CACb,kBAAmB,CACnB,sBAAuB,CACvB,KAAM,CACN,MAMD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAEC,UAAW,CACX,QAeD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCACC,UAAW,CACX,WAUD,CARC,yCACC,8CAA+C,CAC/C,+CAAgD,CAChD,iBAAkB,CAClB,8DAA+D,CAC/D,kCAAmC,CACnC,yDACD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=x},3689:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image-inline .ck-progress-bar,.ck.ck-editor__editable .image .ck-progress-bar{position:absolute;top:0;left:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image-inline .ck-progress-bar,.ck.ck-editor__editable .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAEC,iBAAkB,CAClB,KAAM,CACN,MACD,CCRC,yFACC,oBACD,CAID,uGAEC,UAAW,CACX,OAAQ,CACR,gDAAiD,CACjD,oBACD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=x},1905:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},9773:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCACC,WAAY,CACZ,gDAAiD,CACjD,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=x},2347:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{min-width:0;max-width:100%}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EACC,kCAAmC,CACnC,kCAAmC,CACnC,sBAAuB,CACvB,cAAe,CAIf,+BAAgC,CAChC,aAAc,CACd,iBAKD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EACC,WAAY,CACZ,cACD,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},7754:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{padding:0;min-width:var(--ck-input-width)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{padding:var(--ck-spacing-standard);margin:0;border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCACC,SAAU,CACV,+BA8CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CACC,kCAAmC,CACnC,QAAS,CACT,eAAgB,CAChB,QAAS,CACT,gDAAiD,CACjD,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},4652:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck-content .media{clear:both;margin:.9em 0;display:block;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CAKX,aAAe,CAIf,aAAc,CAId,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=x},7442:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck-media__wrapper .ck-media__placeholder{display:flex;flex-direction:column;align-items:center}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{visibility:visible;opacity:1}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{overflow:hidden;display:block}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{padding:calc(var(--ck-spacing-standard)*3);background:var(--ck-color-base-foreground)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{min-width:var(--ck-media-embed-placeholder-icon-size);height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);background-position:50%;background-size:cover}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{width:100%;height:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);white-space:nowrap;text-align:center;font-style:italic;text-overflow:ellipsis}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-width:300px;max-height:380px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMDAzLjc4IDEuNjFoNDkuNjIxYzEuNjk0IDAgMy4xOS0uNzk4IDQuMTQ2LTIuMDM3eiIgZmlsbD0iIzVjODhjNSIvPjxwYXRoIGQ9Ik0yMjYuNzQyIDIyMi45ODhjLTkuMjY2IDAtMTYuNzc3IDcuMTctMTYuNzc3IDE2LjAxNC4wMDcgMi43NjIuNjYzIDUuNDc0IDIuMDkzIDcuODc1LjQzLjcwMy44MyAxLjQwOCAxLjE5IDIuMTA3LjMzMy41MDIuNjUgMS4wMDUuOTUgMS41MDguMzQzLjQ3Ny42NzMuOTU3Ljk4OCAxLjQ0IDEuMzEgMS43NjkgMi41IDMuNTAyIDMuNjM3IDUuMTY4Ljc5MyAxLjI3NSAxLjY4MyAyLjY0IDIuNDY2IDMuOTkgMi4zNjMgNC4wOTQgNC4wMDcgOC4wOTIgNC42IDEzLjkxNHYuMDEyYy4xODIuNDEyLjUxNi42NjYuODc5LjY2Ny40MDMtLjAwMS43NjgtLjMxNC45My0uNzk5LjYwMy01Ljc1NiAyLjIzOC05LjcyOSA0LjU4NS0xMy43OTQuNzgyLTEuMzUgMS42NzMtMi43MTUgMi40NjUtMy45OSAxLjEzNy0xLjY2NiAyLjMyOC0zLjQgMy42MzgtNS4xNjkuMzE1LS40ODIuNjQ1LS45NjIuOTg4LTEuNDM5LjMtLjUwMy42MTctMS4wMDYuOTUtMS41MDguMzU5LS43Ljc2LTEuNDA0IDEuMTktMi4xMDcgMS40MjYtMi40MDIgMi01LjExNCAyLjAwNC03Ljg3NSAwLTguODQ0LTcuNTExLTE2LjAxNC0xNi43NzYtMTYuMDE0eiIgZmlsbD0iI2RkNGIzZSIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48ZWxsaXBzZSByeT0iNS41NjQiIHJ4PSI1LjgyOCIgY3k9IjIzOS4wMDIiIGN4PSIyMjYuNzQyIiBmaWxsPSIjODAyZDI3IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0xOTAuMzAxIDIzNy4yODNjLTQuNjcgMC04LjQ1NyAzLjg1My04LjQ1NyA4LjYwNnMzLjc4NiA4LjYwNyA4LjQ1NyA4LjYwN2MzLjA0MyAwIDQuODA2LS45NTggNi4zMzctMi41MTYgMS41My0xLjU1NyAyLjA4Ny0zLjkxMyAyLjA4Ny02LjI5IDAtLjM2Mi0uMDIzLS43MjItLjA2NC0xLjA3OWgtOC4yNTd2My4wNDNoNC44NWMtLjE5Ny43NTktLjUzMSAxLjQ1LTEuMDU4IDEuOTg2LS45NDIuOTU4LTIuMDI4IDEuNTQ4LTMuOTAxIDEuNTQ4LTIuODc2IDAtNS4yMDgtMi4zNzItNS4yMDgtNS4yOTkgMC0yLjkyNiAyLjMzMi01LjI5OSA1LjIwOC01LjI5OSAxLjM5OSAwIDIuNjE4LjQwNyAzLjU4NCAxLjI5M2wyLjM4MS0yLjM4YzAtLjAwMi0uMDAzLS4wMDQtLjAwNC0uMDA1LTEuNTg4LTEuNTI0LTMuNjItMi4yMTUtNS45NTUtMi4yMTV6bTQuNDMgNS42NmwuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxNS4xODQgMjUxLjkyOWwtNy45OCA3Ljk3OSAyOC40NzcgMjguNDc1YTUuMjMzIDUuMjMzIDAgMDAuNDQ5LTIuMTIzdi0zMS4xNjVjLS40NjkuNjc1LS45MzQgMS4zNDktMS4zODIgMi4wMDUtLjc5MiAxLjI3NS0xLjY4MiAyLjY0LTIuNDY1IDMuOTktMi4zNDcgNC4wNjUtMy45ODIgOC4wMzgtNC41ODUgMTMuNzk0LS4xNjIuNDg1LS41MjcuNzk4LS45My43OTktLjM2My0uMDAxLS42OTctLjI1NS0uODc5LS42Njd2LS4wMTJjLS41OTMtNS44MjItMi4yMzctOS44Mi00LjYtMTMuOTE0LS43ODMtMS4zNS0xLjY3My0yLjcxNS0yLjQ2Ni0zLjk5LTEuMTM3LTEuNjY2LTIuMzI3LTMuNC0zLjYzNy01LjE2OWwtLjAwMi0uMDAzeiIgZmlsbD0iI2MzYzNjMyIvPjxwYXRoIGQ9Ik0yMTIuOTgzIDI0OC40OTVsLTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAwNS4yMzggNS4yMzhoMS4wMTVsMzUuNjY2LTM1LjY2NmExMzYuMjc1IDEzNi4yNzUgMCAwMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAwLS45ODktMS40NCAzNS4xMjcgMzUuMTI3IDAgMDAtLjk1LTEuNTA4Yy0uMDgzLS4xNjItLjE3Ni0uMzI2LS4yNjQtLjQ4OXoiIGZpbGw9IiNmZGRjNGYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTIxMS45OTggMjYxLjA4M2wtNi4xNTIgNi4xNTEgMjQuMjY0IDI0LjI2NGguNzgxYTUuMjI3IDUuMjI3IDAgMDA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OXptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OXoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzN6bTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1ek00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIGZpbGw9IiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CACC,YAAa,CACb,qBAAsB,CACtB,kBAmBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFACC,kBAAmB,CACnB,SACD,CD3BE,wGACC,eAAgB,CAChB,aACD,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CACC,0CAA+C,CAC/C,0CA4BD,CA1BC,uEACC,qDAAsD,CACtD,kDAAmD,CACnD,qCAAsC,CACtC,uBAA2B,CAC3B,qBAMD,CAJC,gFACC,UAAW,CACX,WACD,CAGD,4EACC,sDAAuD,CACvD,kBAAmB,CACnB,iBAAkB,CAClB,iBAAkB,CAClB,sBAOD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDACC,eAAgB,CAChB,gBACD,CAEA,4UAIC,gvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,48BACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},9292:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-media-form{display:flex;align-items:flex-start;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBACC,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},1613:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2);padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{width:var(--ck-insert-table-dropdown-box-width);height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);border:1px solid var(--ck-color-base-border);border-radius:1px}.ck .ck-insert-table-dropdown-grid-box.ck-on{border-color:var(--ck-color-focus-border);background:var(--ck-color-focus-outer-shadow)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAEC,oJAA2J,CAC3J,yFACD,CAEA,qCACC,iBACD,CAEA,uCACC,+CAAgD,CAChD,iDAAkD,CAClD,iDAAkD,CAClD,4CAA6C,CAC7C,iBAMD,CAJC,6CACC,yCAA0C,CAC1C,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=x},6306:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck-content .table{margin:.9em auto;display:table}.ck-content .table table{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td,.ck-content .table table th{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAIC,gBAAkB,CAClB,aAgCD,CA9BC,yBAEC,wBAAyB,CACzB,gBAAiB,CAIjB,UAAW,CACX,WAAY,CAIZ,yBAiBD,CAfC,wDAEC,aAAc,CACd,YAAa,CAKb,wBACD,CAEA,4BACC,eAAiB,CACjB,2BACD,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=x},3881:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,0.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,8DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=x},6945:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,0.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{position:relative;caret-color:transparent;outline:unset;box-shadow:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{content:"";pointer-events:none;background-color:var(--ck-table-selected-cell-background);position:absolute;top:0;left:0;right:0;bottom:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,yDACD,CAGC,0IAEC,iBAAkB,CAClB,uBAAwB,CACxB,aAAc,CACd,gBA8BD,CA3BC,sJACC,UAAW,CACX,mBAAoB,CACpB,yDAA0D,CAC1D,iBAAkB,CAClB,KAAM,CACN,MAAO,CACP,OAAQ,CACR,QACD,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},4906:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;-webkit-appearance:none}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-right:calc(var(--ck-spacing-small)*-1);margin-left:var(--ck-spacing-small)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAKC,iBAAkB,CAClB,mBAAoB,CACpB,kBAAmB,CACnB,oBAyBD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEACC,kBAAmB,CACnB,SACD,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BAKC,kBAAmB,CACnB,cAAe,CACf,qBAAsB,CACtB,8BAA+B,CAC/B,iBAAkB,CAGlB,2CAA4C,CAC5C,4CAA6C,CAI7C,aAAc,CAGd,iBAAkB,CAGlB,4BAA6B,CAG7B,4DAA8D,CAG9D,uBA6GD,CA3GC,oFGjCA,YAAa,CACb,2BAA2B,CCF3B,2CJsCA,CAIC,kJAEC,aACD,CAGD,iEAEC,iBAAkB,CAClB,mBAAoB,CACpB,aAAc,CACd,cAAe,CAIf,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAEA,uFK3FD,kCL6FC,CAGA,yFKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAOE,6CAAgD,CAChD,mCAEF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover {
		@mixin ck-tooltip_visible;
	}

	/* Get rid of the native focus outline around the tooltip when focused (but not :hover). */
	&:focus:not(:hover) {
		@mixin ck-tooltip_disabled;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=x},5332:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*0.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:all .3s ease}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var(--ck-switch-button-translation))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var(--ck-switch-button-translation)*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAcC,8BAAiC,CAEjC,0CAA2C,CAC3C,uDAwBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,+CAWF,CAbA,2EAMC,6CAA8C,CAC9C,+CAAgD,CAChD,gDAAiD,CACjD,yDAA0D,CAG1D,uBACD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,yDAMF,CAXA,2FASE,kEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=x},6781:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{width:var(--ck-color-grid-tile-size);height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;border:0}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{display:none;color:var(--ck-color-color-grid-check-icon)}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBACC,oCAAqC,CACrC,qCAAsC,CACtC,wCAAyC,CACzC,yCAA0C,CAC1C,SAAU,CACV,8BAA+B,CAC/B,QAmCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCACC,YAAa,CACb,2CACD,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=x},5485:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);max-width:var(--ck-dropdown-max-width);position:absolute}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{top:100%;bottom:auto}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{box-shadow:var(--ck-drop-shadow),0 0;background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CACb,yBAA0B,CAC1B,sCAAuC,CAEvC,iBAyDD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSASC,QAAS,CACT,WACD,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CACC,gCAAiC,CAGjC,sCACD,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEACC,SAAU,CACV,eAAgB,CAChB,sBACD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBEpFC,oCAA8B,CFwF9B,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CAGT,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},3949:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDIpC,wBAAyB,CACzB,2BAA4B,CAC5B,4BAEF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},7686:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-top-right-radius:unset;border-bottom-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-top-left-radius:unset;border-bottom-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-left-radius:unset;border-bottom-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-top-right-radius:unset;border-bottom-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{content:"";position:absolute;width:1px;height:100%;background-color:var(--ck-color-split-button-hover-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAIE,6BAA8B,CAC9B,gCAQF,CAbA,oIAUE,4BAA6B,CAC7B,+BAEF,CAEA,0CAGC,eAiBD,CApBA,oDAOE,4BAA6B,CAC7B,+BAYF,CApBA,oDAaE,6BAA8B,CAC9B,gCAMF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JACC,UAAW,CACX,iBAAkB,CAClB,SAAU,CACV,WAAY,CACZ,0DACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},7339:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{width:max-content;max-width:var(--ck-toolbar-dropdown-max-width)}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAEC,iBAAkB,CAClB,8CAOD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=x},9688:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEERA,YAAa,CACb,2BAA2B,CCF3B,qCHYA,CAGD,+BACC,aAAc,CACd,oCAAqC,CACrC,4BA4BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},8847:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-form__header{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{padding:var(--ck-spacing-small) var(--ck-spacing-large);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,kBAAmB,CACnB,6BACD,CCNA,MACC,4BACD,CAEA,oBACC,uDAAwD,CACxD,mCAAoC,CACpC,wCAAyC,CACzC,mDAKD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=x},6574:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YACC,yBAA0B,CAC1B,0BAA2B,CAG3B,uBAAwB,CAQxB,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const S=x},4879:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-width);min-height:var(--ck-ui-component-min-height);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-input[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{border-color:var(--ck-color-input-error-border);animation:ck-input-shake .3s ease both}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAC9C,6DAA8D,CAC9D,+BAAgC,CAGhC,4CAA6C,CAG7C,4DA0BD,CAxBC,mBEpBA,YAAa,CACb,2BAA2B,CCF3B,2CHwBA,CAEA,uBACC,sDAAuD,CACvD,oDAAqD,CACrD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBACC,+CAAgD,CAChD,sCAKD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},3662:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=x},2577:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{pointer-events:none;transform-origin:0 0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);background:var(--ck-color-labeled-field-label-background);padding:0 calc(var(--ck-font-size-tiny)*0.5);line-height:normal;font-weight:400;text-overflow:ellipsis;overflow:hidden;max-width:100%;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*0.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*0.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));background:transparent;padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAWC,mBAAoB,CACpB,oBAAqB,CAGrB,6DAA+D,CAE/D,yDAA0D,CAC1D,4CAA8C,CAC9C,kBAAoB,CACpB,eAAmB,CAGnB,sBAAuB,CACvB,eAAgB,CAEhB,cAAe,CAEf,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,yFAYF,CAfA,oUAOE,kGAQF,CAfA,gTAWC,iEAAkE,CAElE,sBAAuB,CACvB,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},1046:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;padding:calc(var(--ck-line-height-base)*0.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,YAAa,CACb,qBAcD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAGC,oBAAqB,CACrB,0CACD,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BACC,gBAAiB,CACjB,UAAW,CACX,eAAgB,CAChB,eAAgB,CAKhB,mIAiCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBACC,UAAW,CACX,UAAW,CACX,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},8793:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:var(--ck-balloon-arrow-height);border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:0}.ck.ck-balloon-panel[class*=arrow_n]:before{border-bottom-color:var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-width:var(--ck-balloon-arrow-half-width);border-bottom-width:0;border-right-width:var(--ck-balloon-arrow-half-width);border-top-width:var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-top-color:var(--ck-color-panel-border);filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background);margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);bottom:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{right:25%;margin-right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBENC,oCAA8B,CFU9B,eAAgB,CAEhB,2CAA4C,CAC5C,6CAiID,CA9HE,+GAEC,OAAQ,CACR,QAAS,CACT,kBACD,CAIA,uFAEC,oDAAoH,CAApH,kDAAoH,CAApH,qDAAoH,CAApH,kBACD,CAEA,4CACC,gDACD,CAEA,uFAHC,6BAA8E,CAA9E,8BAA8E,CAA9E,4BAMD,CAHA,2CACC,oDAAkF,CAClF,yCACD,CAIA,uFAEC,oDAAoH,CAApH,qBAAoH,CAApH,qDAAoH,CAApH,+CACD,CAEA,4CACC,6CAAkE,CAClE,uDACD,CAEA,uFAJC,6BAAkE,CAAlE,+BAAkE,CAAlE,8BAOD,CAHA,2CACC,iDAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,8CACD,CAIA,2GAEC,+CAAkD,CAClD,8CACD,CAIA,2GAEC,gDAAmD,CACnD,8CACD,CAIA,6GAEC,SAAU,CACV,uDAA0D,CAC1D,8CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,8CACD,CAIA,6GAEC,SAAU,CACV,uDAA0D,CAC1D,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},4650:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck .ck-balloon-rotator__navigation{display:flex;align-items:center;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-right:var(--ck-spacing-standard);margin-left:var(--ck-spacing-small)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCACC,oCAAqC,CACrC,kCAAmC,CACnC,qCACD,CAGA,iEACC,uCAAwC,CAGxC,mCACD,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=x},7676:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);width:100%;height:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBCJC,oCAA8B,CDO9B,eAAgB,CAEhB,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CAEtC,UAAW,CACX,WACD,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},5868:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDACC,yBAA0B,CAC1B,cAAe,CACf,KACD,CAEA,kEACC,QAAS,CACT,iBACD,CCPA,qDCCA,oCAA8B,CDE7B,sBAAuB,CACvB,wBAAyB,CACzB,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},6764:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck-vertical-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{content:"";width:0;position:absolute;right:-1px;top:var(--ck-spacing-small);bottom:var(--ck-spacing-small);z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*0.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){padding:var(--ck-spacing-standard);margin-top:var(--ck-spacing-large);border-radius:0;border:0;border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCACC,UAAW,CACX,OAAQ,CACR,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAC5B,8BAA+B,CAC/B,SACD,CCTC,oCDaC,wCACC,UAAW,CACX,OAAQ,CACR,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAC5B,8BAA+B,CAC/B,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,qCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAEC,kCAAmC,CACnC,kCAAmC,CAEnC,eAAgB,CAChB,QAAS,CACT,gDAaD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const S=x},9695:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=x},5542:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row nowrap;align-items:center}.ck.ck-toolbar>.ck-toolbar__items{display:flex;flex-flow:row wrap;align-items:center;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;width:1px;min-width:1px;background:var(--ck-color-toolbar-border);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=rtl].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.ck.ck-toolbar[dir=ltr].ck-toolbar_compact>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr].ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child){margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eCEC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBAAgB,CDFhB,YAAa,CACb,oBAAqB,CACrB,kBA6CD,CA3CC,kCACC,YAAa,CACb,kBAAmB,CACnB,kBAAmB,CACnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAC9C,iCAAkC,CAClC,+CAwFD,CAtFC,yCACC,kBAAmB,CACnB,SAAU,CACV,aAAc,CACd,yCAA0C,CAM1C,kCAAmC,CACnC,qCACD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAGC,kCAAmC,CACnC,qCACD,CAEA,mCAEC,SAgBD,CAbC,0DAEC,UAAW,CAGX,QAAS,CAGT,eAAgB,CAGhB,QACD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JACC,wBAAyB,CACzB,2BACD,CAGA,2JACC,yBAA0B,CAC1B,4BACD,CAID,qGACC,mCACD,CAGA,yLACC,mCACD,CAWA,qHACC,cACD,CAIC,6JACC,yBAA0B,CAC1B,4BACD,CAGA,2JACC,wBAAyB,CACzB,2BACD,CAID,qGACC,oCACD,CAGA,yLACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},3332:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s;border-style:solid;left:50%}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:var(--ck-color-tooltip-background);border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:0}.ck.ck-tooltip.ck-tooltip_sw{right:50%;left:auto}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{right:auto;left:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{right:auto;left:0;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%);border-left-color:transparent;border-bottom-color:transparent;border-right-color:transparent;border-top-color:var(--ck-color-tooltip-background);border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:0;border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:transparent;border-bottom-color:transparent;border-right-color:var(--ck-color-tooltip-background);border-top-color:transparent;border-left-width:0;border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:var(--ck-tooltip-arrow-size);border-top-width:var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_w{right:calc(100% + var(--ck-tooltip-arrow-size));left:auto;top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1);border-left-color:var(--ck-color-tooltip-background);border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-left-width:var(--ck-tooltip-arrow-size);border-bottom-width:var(--ck-tooltip-arrow-size);border-right-width:0;border-top-width:var(--ck-tooltip-arrow-size)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDAEC,iBAAkB,CAGlB,mBAAoB,CAIpB,kCACD,CAEA,eAEC,iBAAkB,CAClB,SAAU,CACV,YAAa,CACb,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CACX,OAAQ,CACR,QACD,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAGC,cAAe,CACf,eAAgB,CAChB,kCAAmC,CACnC,wDAAyD,CACzD,6CAA8C,CAC9C,iBAAkB,CAClB,SAYD,CAVC,uCAMC,sCAAuC,CACvC,kBAAmB,CACnB,QACD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAEC,+CAAkD,CAClD,0BAA6B,CAC7B,6BAAoF,CAApF,sDAAoF,CAApF,8BAAoF,CAApF,4BAAoF,CACpF,8CAAsG,CAAtG,gDAAsG,CAAtG,+CAAsG,CAAtG,kBACD,CAaD,6BACC,SAAU,CACV,SAWD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CACC,UAAW,CACX,0CACD,CAEA,qDACC,UAAW,CACX,MAAO,CACP,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDACC,4CAA+C,CAC/C,0BAA6B,CAC7B,6BAAoF,CAApF,+BAAoF,CAApF,8BAAoF,CAApF,mDAAoF,CACpF,8CAAsG,CAAtG,qBAAsG,CAAtG,+CAAsG,CAAtG,6CACD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDACC,0CAA6C,CAC7C,8CAAiD,CACjD,6BAAoF,CAApF,+BAAoF,CAApF,qDAAoF,CAApF,4BAAoF,CACpF,mBAAsG,CAAtG,gDAAsG,CAAtG,+CAAsG,CAAtG,6CACD,CAWF,4BACC,+CAAgD,CAChD,SAAU,CACV,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDACC,SAAU,CACV,8CAAiD,CACjD,oDAAoF,CAApF,+BAAoF,CAApF,8BAAoF,CAApF,4BAAoF,CACpF,8CAAsG,CAAtG,gDAAsG,CAAtG,oBAAsG,CAAtG,6CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=x},4793:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,0.3);--ck-color-focus-error-shadow:rgba(255,64,31,0.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,0.15);--ck-color-shadow-drop-active:rgba(0,0,0,0.2);--ck-color-shadow-inner:rgba(0,0,0,0.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,0.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,177,255,0.1);--ck-color-link-fake-selection:rgba(31,177,255,0.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,iDAGC,qBAAsB,CACtB,UAAW,CACX,WAAY,CACZ,eACD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,sDAA8D,CAC9D,iDAAyD,CACzD,yCAAqD,CACrD,uCAAsD,CACtD,6CAA0D,CAC1D,uCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,qDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,wDAAmE,CACnE,mDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,iDAIC,QAAS,CACT,SAAU,CACV,QAAS,CACT,sBAAuB,CACvB,oBAAqB,CACrB,qBAAsB,CACtB,eAAgB,CAGhB,oBACD,CAKA,oCAGC,wBAAyB,CACzB,iGAAkG,CAClG,0BAA2B,CAC3B,eAAgB,CAChB,kBAAmB,CACnB,WAAY,CACZ,UACD,CAGC,2BACC,gBACD,CAEA,wBAEC,sBACD,CAEA,0BACC,oBACD,CAEA,kGAGC,WACD,CAEA,gIAGC,cACD,CAEA,0BACC,YAAa,CACb,yBACD,CAEA,0CAEC,SAAU,CACV,QACD,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck.ck-reset_all * {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck.ck-reset_all * {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck.ck-reset_all * {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck.ck-reset_all {
	& .ck-rtl * {
		text-align: right;
	}

	& iframe {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea {
		white-space: pre-wrap;
	}

	& textarea,
	& input[type="text"],
	& input[type="password"] {
		cursor: text;
	}

	& textarea[disabled],
	& input[type="text"][disabled],
	& input[type="password"][disabled] {
		cursor: default;
	}

	& fieldset {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=x},3488:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);color:var(--ck-color-resizer-tooltip-text);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);font-size:var(--ck-font-size-tiny);display:block;padding:0 var(--ck-spacing-small);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{top:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{top:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{top:calc(var(--ck-resizer-tooltip-height)*-1);left:50%;transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness));top:0}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CACtD,0CAA2C,CAC3C,qDAAsD,CACtD,6CAA8C,CAC9C,kCAAmC,CACnC,aAAc,CACd,iCAAkC,CAClC,uCAAwC,CACxC,4CAoCD,CAlCC,8NAKC,iBACD,CAEA,0CACC,oCAAqC,CACrC,qCACD,CAEA,2CACC,oCAAqC,CACrC,sCACD,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CACC,6CAAgD,CAChD,QAAS,CACT,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eACC,gDAAiD,CACjD,mBAAoB,CACpB,yBAA0B,CAC1B,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGC/BA,YAAa,CACb,2BAA2B,CCF3B,qCAA8B,CFqC7B,iEACD,CAIA,4EACC,WAAY,CACZ,qBAAsB,CAGtB,4BAA6B,CAC7B,SAAU,CAMV,6SAG6F,CAG7F,iEAAkE,CAGlE,2BAA4B,CAC5B,mDAAoD,CACpD,KAqBD,CAnBC,qFAEC,wCAAyC,CACzC,yCAA0C,CAC1C,oDASD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFACC,SAAU,CACV,oDACD,CAKC,oMACC,SAAU,CACV,6CAMD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=x},8506:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;position:absolute;pointer-events:none;left:0;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{position:absolute;pointer-events:all}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{width:var(--ck-resizer-size);height:var(--ck-resizer-size);background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{top:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{top:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CACb,iBAAkB,CAGlB,mBAAoB,CAEpB,MAAO,CACP,KACD,CAGC,2EACC,aACD,CAGD,gCACC,iBAAkB,CAGlB,kBAWD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCACC,4BAA6B,CAC7B,6BAA8B,CAC9B,uCAAwC,CACxC,gDAA6D,CAC7D,6CAqBD,CAnBC,oEACC,4BAA6B,CAC7B,6BACD,CAEA,qEACC,4BAA6B,CAC7B,8BACD,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=x},4921:(w,_,k)=>{k.d(_,{Z:()=>S});var y=k(1799),E=k.n(y),A=k(2609),x=k.n(A)()(E());x.push([w.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;position:absolute;overflow:hidden;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{position:absolute;top:50%;left:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{top:calc(var(--ck-widget-outline-thickness)*-0.5);left:min(10%,30px);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-0.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;position:absolute;top:1px;left:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;position:absolute;left:0;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{top:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{width:var(--ck-widget-type-around-button-size);height:var(--ck-widget-type-around-button-size);background:var(--ck-color-widget-type-around-button);border-radius:100px;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);opacity:0;pointer-events:none}.ck .ck-widget .ck-widget__type-around__button svg{width:10px;height:8px;transform:translate(-50%,-50%);transition:transform .5s ease;margin-top:1px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{width:calc(var(--ck-widget-type-around-button-size) - 2px);height:calc(var(--ck-widget-type-around-button-size) - 2px);border-radius:100px;background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3))}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{pointer-events:none;height:1px;animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;outline:1px solid hsla(0,0%,100%,.5);background:var(--ck-color-base-text)}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CACd,iBAAkB,CAClB,eAAgB,CAChB,2BAwBD,CAtBC,mDACC,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,qCACD,CAEA,qFAEC,iDAAoD,CACpD,kBAAoB,CAEpB,0BACD,CAEA,oFAEC,oDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CACd,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,qCACD,CAMD,2EACC,YAAa,CACb,iBAAkB,CAClB,MAAO,CACP,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHACC,qDAA0D,CAC1D,aACD,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CACC,8CAA+C,CAC/C,+CAAgD,CAChD,oDAAqD,CACrD,mBAAoB,CACpB,uMAAyM,CAb1M,SAAU,CACV,mBA0DA,CA1CC,mDACC,UAAW,CACX,UAAW,CACX,8BAA+B,CAC/B,6BAA8B,CAC9B,cAgBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLACC,0DAA2D,CAC3D,2DAA4D,CAC5D,mBAAoB,CACpB,uEACD,CAOD,8GACC,gBACD,CAKA,mDACC,mBAAoB,CACpB,UAAW,CACX,mFAAoF,CAMpF,oCAAwC,CACxC,oCACD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CASE,0jBACC,SACD,CASF,mPACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=x},2609:w=>{w.exports=function(_){var k=[];return k.toString=function(){return this.map(function(y){var E=_(y);return y[2]?"@media ".concat(y[2]," {").concat(E,"}"):E}).join("")},k.i=function(y,E,A){typeof y=="string"&&(y=[[null,y,""]]);var x={};if(A)for(var S=0;S<this.length;S++){var H=this[S][0];H!=null&&(x[H]=!0)}for(var nt=0;nt<y.length;nt++){var L=[].concat(y[nt]);A&&x[L[0]]||(E&&(L[2]?L[2]="".concat(E," and ").concat(L[2]):L[2]=E),k.push(L))}},k}},1799:w=>{function _(y,E){return function(A){if(Array.isArray(A))return A}(y)||function(A,x){var S=A&&(typeof Symbol!="undefined"&&A[Symbol.iterator]||A["@@iterator"]);if(S!=null){var H,nt,L=[],O=!0,z=!1;try{for(S=S.call(A);!(O=(H=S.next()).done)&&(L.push(H.value),!x||L.length!==x);O=!0);}catch(G){z=!0,nt=G}finally{try{O||S.return==null||S.return()}finally{if(z)throw nt}}return L}}(y,E)||function(A,x){if(!!A){if(typeof A=="string")return k(A,x);var S=Object.prototype.toString.call(A).slice(8,-1);if(S==="Object"&&A.constructor&&(S=A.constructor.name),S==="Map"||S==="Set")return Array.from(A);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return k(A,x)}}(y,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(y,E){(E==null||E>y.length)&&(E=y.length);for(var A=0,x=new Array(E);A<E;A++)x[A]=y[A];return x}w.exports=function(y){var E=_(y,4),A=E[1],x=E[3];if(!x)return A;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(x)))),H="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),nt="/*# ".concat(H," */"),L=x.sources.map(function(O){return"/*# sourceURL=".concat(x.sourceRoot||"").concat(O," */")});return[A].concat(L).concat([nt]).join(`
`)}return[A].join(`
`)}},6062:(w,_,k)=>{var y,E=function(){return y===void 0&&(y=Boolean(window&&document&&document.all&&!window.atob)),y},A=function(){var F={};return function(Q){if(F[Q]===void 0){var Z=document.querySelector(Q);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}F[Q]=Z}return F[Q]}}(),x=[];function S(F){for(var Q=-1,Z=0;Z<x.length;Z++)if(x[Z].identifier===F){Q=Z;break}return Q}function H(F,Q){for(var Z={},lt=[],ut=0;ut<F.length;ut++){var U=F[ut],ft=Q.base?U[0]+Q.base:U[0],Mt=Z[ft]||0,Ft="".concat(ft," ").concat(Mt);Z[ft]=Mt+1;var It=S(Ft),zt={css:U[1],media:U[2],sourceMap:U[3]};It!==-1?(x[It].references++,x[It].updater(zt)):x.push({identifier:Ft,updater:ct(zt,Q),references:1}),lt.push(Ft)}return lt}function nt(F){var Q=document.createElement("style"),Z=F.attributes||{};if(Z.nonce===void 0){var lt=k.nc;lt&&(Z.nonce=lt)}if(Object.keys(Z).forEach(function(U){Q.setAttribute(U,Z[U])}),typeof F.insert=="function")F.insert(Q);else{var ut=A(F.insert||"head");if(!ut)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ut.appendChild(Q)}return Q}var L,O=(L=[],function(F,Q){return L[F]=Q,L.filter(Boolean).join(`
`)});function z(F,Q,Z,lt){var ut=Z?"":lt.media?"@media ".concat(lt.media," {").concat(lt.css,"}"):lt.css;if(F.styleSheet)F.styleSheet.cssText=O(Q,ut);else{var U=document.createTextNode(ut),ft=F.childNodes;ft[Q]&&F.removeChild(ft[Q]),ft.length?F.insertBefore(U,ft[Q]):F.appendChild(U)}}function G(F,Q,Z){var lt=Z.css,ut=Z.media,U=Z.sourceMap;if(ut?F.setAttribute("media",ut):F.removeAttribute("media"),U&&typeof btoa!="undefined"&&(lt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),F.styleSheet)F.styleSheet.cssText=lt;else{for(;F.firstChild;)F.removeChild(F.firstChild);F.appendChild(document.createTextNode(lt))}}var V=null,st=0;function ct(F,Q){var Z,lt,ut;if(Q.singleton){var U=st++;Z=V||(V=nt(Q)),lt=z.bind(null,Z,U,!1),ut=z.bind(null,Z,U,!0)}else Z=nt(Q),lt=G.bind(null,Z,Q),ut=function(){(function(ft){if(ft.parentNode===null)return!1;ft.parentNode.removeChild(ft)})(Z)};return lt(F),function(ft){if(ft){if(ft.css===F.css&&ft.media===F.media&&ft.sourceMap===F.sourceMap)return;lt(F=ft)}else ut()}}w.exports=function(F,Q){(Q=Q||{}).singleton||typeof Q.singleton=="boolean"||(Q.singleton=E());var Z=H(F=F||[],Q);return function(lt){if(lt=lt||[],Object.prototype.toString.call(lt)==="[object Array]"){for(var ut=0;ut<Z.length;ut++){var U=S(Z[ut]);x[U].references--}for(var ft=H(lt,Q),Mt=0;Mt<Z.length;Mt++){var Ft=S(Z[Mt]);x[Ft].references===0&&(x[Ft].updater(),x.splice(Ft,1))}Z=ft}}}}},p={};function m(w){var _=p[w];if(_!==void 0)return _.exports;var k=p[w]={id:w,exports:{}};return h[w](k,k.exports,m),k.exports}m.n=w=>{var _=w&&w.__esModule?()=>w.default:()=>w;return m.d(_,{a:_}),_},m.d=(w,_)=>{for(var k in _)m.o(_,k)&&!m.o(w,k)&&Object.defineProperty(w,k,{enumerable:!0,get:_[k]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(w,_)=>Object.prototype.hasOwnProperty.call(w,_);var C={};return(()=>{m.d(C,{default:()=>Ll});const w=function(){return function i(){i.called=!0}};class _{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=w(),this.off=w()}}const k=new Array(256).fill().map((i,t)=>("0"+t.toString(16)).slice(-2));function y(){const i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+k[i>>0&255]+k[i>>8&255]+k[i>>16&255]+k[i>>24&255]+k[t>>0&255]+k[t>>8&255]+k[t>>16&255]+k[t>>24&255]+k[e>>0&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+k[n>>0&255]+k[n>>8&255]+k[n>>16&255]+k[n>>24&255]}const E={get(i){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};class A extends Error{constructor(t,e,n){super(function(o,r){const s=new WeakSet,c=(g,f)=>{if(typeof f=="object"&&f!==null){if(s.has(f))return`[object ${f.constructor.name}]`;s.add(f)}return f},d=r?` ${JSON.stringify(r,c)}`:"",u=S(o);return o+d+u}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new A(t.message,e);throw n.stack=t.stack,n}}function x(i,t){console.warn(...H(i,t))}function S(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html#error-${i}`}function H(i,t){const e=S(i);return t?[i,t,e]:[i,e]}const nt="33.0.0",L=typeof window=="object"?window:m.g;if(L.CKEDITOR_VERSION)throw new A("ckeditor-duplicated-modules",null);L.CKEDITOR_VERSION=nt;const O=Symbol("listeningTo"),z=Symbol("emitterId"),G={on(i,t,e={}){this.listenTo(this,i,t,e)},once(i,t,e){let n=!1;this.listenTo(this,i,function(o,...r){n||(n=!0,o.off(),t.call(this,o,...r))},e)},off(i,t){this.stopListening(this,i,t)},listenTo(i,t,e,n={}){let o,r;this[O]||(this[O]={});const s=this[O];ct(i)||st(i);const c=ct(i);(o=s[c])||(o=s[c]={emitter:i,callbacks:{}}),(r=o.callbacks[t])||(r=o.callbacks[t]=[]),r.push(e),function(d,u,g,f,b){u._addEventListener?u._addEventListener(g,f,b):d._addEventListener.call(u,g,f,b)}(this,i,t,e,n)},stopListening(i,t,e){const n=this[O];let o=i&&ct(i);const r=n&&o&&n[o],s=r&&t&&r.callbacks[t];if(!(!n||i&&!r||t&&!s))if(e)ut(this,i,t,e),s.indexOf(e)!==-1&&(s.length===1?delete r.callbacks[t]:ut(this,i,t,e));else if(s){for(;e=s.pop();)ut(this,i,t,e);delete r.callbacks[t]}else if(r){for(t in r.callbacks)this.stopListening(i,t);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[O]}},fire(i,...t){try{const e=i instanceof _?i:new _(this,i),n=e.name;let o=Z(this,n);if(e.path.push(this),o){const r=[e,...t];o=Array.from(o);for(let s=0;s<o.length&&(o[s].callback.apply(this,r),e.off.called&&(delete e.off.called,this._removeEventListener(n,o[s].callback)),!e.stop.called);s++);}if(this._delegations){const r=this._delegations.get(n),s=this._delegations.get("*");r&&lt(r,e,t),s&&lt(s,e,t)}return e.return}catch(e){A.rethrowUnexpectedError(e,this)}},delegate(...i){return{to:(t,e)=>{this._delegations||(this._delegations=new Map),i.forEach(n=>{const o=this._delegations.get(n);o?o.set(t,e):this._delegations.set(n,new Map([[t,e]]))})}}},stopDelegating(i,t){if(this._delegations)if(i)if(t){const e=this._delegations.get(i);e&&e.delete(t)}else this._delegations.delete(i);else this._delegations.clear()},_addEventListener(i,t,e){(function(s,c){const d=F(s);if(d[c])return;let u=c,g=null;const f=[];for(;u!==""&&!d[u];)d[u]={callbacks:[],childEvents:[]},f.push(d[u]),g&&d[u].childEvents.push(g),g=u,u=u.substr(0,u.lastIndexOf(":"));if(u!==""){for(const b of f)b.callbacks=d[u].callbacks.slice();d[u].childEvents.push(g)}})(this,i);const n=Q(this,i),o=E.get(e.priority),r={callback:t,priority:o};for(const s of n){let c=!1;for(let d=0;d<s.length;d++)if(s[d].priority<o){s.splice(d,0,r),c=!0;break}c||s.push(r)}},_removeEventListener(i,t){const e=Q(this,i);for(const n of e)for(let o=0;o<n.length;o++)n[o].callback==t&&(n.splice(o,1),o--)}},V=G;function st(i,t){i[z]||(i[z]=t||y())}function ct(i){return i[z]}function F(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Q(i,t){const e=F(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){const r=Q(i,e.childEvents[o]);n=n.concat(r)}return n}function Z(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?Z(i,t.substr(0,t.lastIndexOf(":"))):null}function lt(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;const r=new _(t.source,o);r.path=[...t.path],n.fire(r,...e)}}function ut(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}const U=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},ft=typeof oa=="object"&&oa&&oa.Object===Object&&oa;var Mt=typeof self=="object"&&self&&self.Object===Object&&self;const Ft=ft||Mt||Function("return this")(),It=Ft.Symbol;var zt=Object.prototype,Vt=zt.hasOwnProperty,ve=zt.toString,Le=It?It.toStringTag:void 0;const Oe=function(i){var t=Vt.call(i,Le),e=i[Le];try{i[Le]=void 0;var n=!0}catch{}var o=ve.call(i);return n&&(t?i[Le]=e:delete i[Le]),o};var je=Object.prototype.toString;const Te=function(i){return je.call(i)};var Jn=It?It.toStringTag:void 0;const P=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Jn&&Jn in Object(i)?Oe(i):Te(i)},tt=function(i){if(!U(i))return!1;var t=P(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},J=Ft["__core-js_shared__"];var pt=function(){var i=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Bt=function(i){return!!pt&&pt in i};var Lt=Function.prototype.toString;const At=function(i){if(i!=null){try{return Lt.call(i)}catch{}try{return i+""}catch{}}return""};var Ct=/^\[object .+?Constructor\]$/,I=Function.prototype,B=Object.prototype,j=I.toString,$=B.hasOwnProperty,K=RegExp("^"+j.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const rt=function(i){return!(!U(i)||Bt(i))&&(tt(i)?K:Ct).test(At(i))},ht=function(i,t){return i==null?void 0:i[t]},et=function(i,t){var e=ht(i,t);return rt(e)?e:void 0},it=function(){try{var i=et(Object,"defineProperty");return i({},"",{}),i}catch{}}(),X=function(i,t,e){t=="__proto__"&&it?it(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e},kt=function(i,t){return i===t||i!=i&&t!=t};var dt=Object.prototype.hasOwnProperty;const mt=function(i,t,e){var n=i[t];dt.call(i,t)&&kt(n,e)&&(e!==void 0||t in i)||X(i,t,e)},wt=function(i,t,e,n){var o=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var c=t[r],d=n?n(e[c],i[c],c,e,i):void 0;d===void 0&&(d=i[c]),o?X(e,c,d):mt(e,c,d)}return e},Tt=function(i){return i},ee=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var Ht=Math.max;const Zt=function(i,t,e){return t=Ht(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,r=Ht(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var c=Array(t+1);++o<t;)c[o]=n[o];return c[t]=e(s),ee(i,this,c)}},We=function(i){return function(){return i}},Xn=it?function(i,t){return it(i,"toString",{configurable:!0,enumerable:!1,value:We(t),writable:!0})}:Tt;var es=Date.now;const ns=function(i){var t=0,e=0;return function(){var n=es(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(Xn),Ne=function(i,t){return ns(Zt(i,t,Tt),i+"")},qe=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991},yo=function(i){return i!=null&&qe(i.length)&&!tt(i)};var iA=/^(?:0|[1-9]\d*)$/;const Oa=function(i,t){var e=typeof i;return!!(t=t==null?9007199254740991:t)&&(e=="number"||e!="symbol"&&iA.test(i))&&i>-1&&i%1==0&&i<t},rA=function(i,t,e){if(!U(e))return!1;var n=typeof t;return!!(n=="number"?yo(e)&&Oa(t,e.length):n=="string"&&t in e)&&kt(e[t],i)},nu=function(i){return Ne(function(t,e){var n=-1,o=e.length,r=o>1?e[o-1]:void 0,s=o>2?e[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&rA(e[0],e[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var c=e[n];c&&i(t,c,n,r)}return t})},sA=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},nn=function(i){return i!=null&&typeof i=="object"},ou=function(i){return nn(i)&&P(i)=="[object Arguments]"};var iu=Object.prototype,aA=iu.hasOwnProperty,cA=iu.propertyIsEnumerable,lA=ou(function(){return arguments}())?ou:function(i){return nn(i)&&aA.call(i,"callee")&&!cA.call(i,"callee")};const ja=lA,Be=Array.isArray,dA=function(){return!1};var ru=l&&!l.nodeType&&l,su=ru&&!0&&a&&!a.nodeType&&a,au=su&&su.exports===ru?Ft.Buffer:void 0;const Zi=(au?au.isBuffer:void 0)||dA;var re={};re["[object Float32Array]"]=re["[object Float64Array]"]=re["[object Int8Array]"]=re["[object Int16Array]"]=re["[object Int32Array]"]=re["[object Uint8Array]"]=re["[object Uint8ClampedArray]"]=re["[object Uint16Array]"]=re["[object Uint32Array]"]=!0,re["[object Arguments]"]=re["[object Array]"]=re["[object ArrayBuffer]"]=re["[object Boolean]"]=re["[object DataView]"]=re["[object Date]"]=re["[object Error]"]=re["[object Function]"]=re["[object Map]"]=re["[object Number]"]=re["[object Object]"]=re["[object RegExp]"]=re["[object Set]"]=re["[object String]"]=re["[object WeakMap]"]=!1;const uA=function(i){return nn(i)&&qe(i.length)&&!!re[P(i)]},Fa=function(i){return function(t){return i(t)}};var cu=l&&!l.nodeType&&l,Ji=cu&&!0&&a&&!a.nodeType&&a,Va=Ji&&Ji.exports===cu&&ft.process;const ni=function(){try{var i=Ji&&Ji.require&&Ji.require("util").types;return i||Va&&Va.binding&&Va.binding("util")}catch{}}();var lu=ni&&ni.isTypedArray;const Ha=lu?Fa(lu):uA;var hA=Object.prototype.hasOwnProperty;const du=function(i,t){var e=Be(i),n=!e&&ja(i),o=!e&&!n&&Zi(i),r=!e&&!n&&!o&&Ha(i),s=e||n||o||r,c=s?sA(i.length,String):[],d=c.length;for(var u in i)!t&&!hA.call(i,u)||s&&(u=="length"||o&&(u=="offset"||u=="parent")||r&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Oa(u,d))||c.push(u);return c};var gA=Object.prototype;const Ua=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||gA)},pA=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var fA=Object.prototype.hasOwnProperty;const mA=function(i){if(!U(i))return pA(i);var t=Ua(i),e=[];for(var n in i)(n!="constructor"||!t&&fA.call(i,n))&&e.push(n);return e},oi=function(i){return yo(i)?du(i,!0):mA(i)},Xi=nu(function(i,t){wt(t,oi(t),i)}),os=Symbol("observableProperties"),is=Symbol("boundObservables"),rs=Symbol("boundProperties"),ii=Symbol("decoratedMethods"),uu=Symbol("decoratedOriginal"),Wa={set(i,t){if(U(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);hu(this);const e=this[os];if(i in this&&!e.has(i))throw new A("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>e.get(i),set(n){const o=e.get(i);let r=this.fire("set:"+i,i,n,o);r===void 0&&(r=n),o===r&&e.has(i)||(e.set(i,r),this.fire("change:"+i,i,r,o))}}),this[i]=t},bind(...i){if(!i.length||!gu(i))throw new A("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new A("observable-bind-duplicate-properties",this);hu(this);const t=this[rs];i.forEach(n=>{if(t.has(n))throw new A("observable-bind-rebind",this)});const e=new Map;return i.forEach(n=>{const o={property:n,to:[]};t.set(n,o),e.set(n,o)}),{to:kA,toMany:bA,_observable:this,_bindProperties:i,_to:[],_bindings:e}},unbind(...i){if(!this[os])return;const t=this[rs],e=this[is];if(i.length){if(!gu(i))throw new A("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=t.get(n);if(!o)return;let r,s,c,d;o.to.forEach(u=>{r=u[0],s=u[1],c=e.get(r),d=c[s],d.delete(o),d.size||delete c[s],Object.keys(c).length||(e.delete(r),this.stopListening(r,"change"))}),t.delete(n)})}else e.forEach((n,o)=>{this.stopListening(o,"change")}),e.clear(),t.clear()},decorate(i){const t=this[i];if(!t)throw new A("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(e,n)=>{e.return=t.apply(this,n)}),this[i]=function(...e){return this.fire(i,e)},this[i][uu]=t,this[ii]||(this[ii]=[]),this[ii].push(i)}};Xi(Wa,V),Wa.stopListening=function(i,t,e){if(!i&&this[ii]){for(const n of this[ii])this[n]=this[n][uu];delete this[ii]}V.stopListening.call(this,i,t,e)};const ne=Wa;function hu(i){i[os]||(Object.defineProperty(i,os,{value:new Map}),Object.defineProperty(i,is,{value:new Map}),Object.defineProperty(i,rs,{value:new Map}))}function kA(...i){const t=function(...r){if(!r.length)throw new A("observable-bind-to-parse-error",null);const s={to:[]};let c;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(d=>{if(typeof d=="string")c.properties.push(d);else{if(typeof d!="object")throw new A("observable-bind-to-parse-error",null);c={observable:d,properties:[]},s.to.push(c)}}),s}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new A("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new A("observable-bind-to-extra-callback",this);var o;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new A("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(r=>{const s=o[is];let c;s.get(r.observable)||o.listenTo(r.observable,"change",(d,u)=>{c=s.get(r.observable)[u],c&&c.forEach(g=>{pu(o,g.property)})})}),function(r){let s;r._bindings.forEach((c,d)=>{r._to.forEach(u=>{s=u.properties[c.callback?0:r._bindProperties.indexOf(d)],c.to.push([u.observable,s]),function(g,f,b,v){const D=g[is],M=D.get(b),T=M||{};T[v]||(T[v]=new Set),T[v].add(f),M||D.set(b,T)}(r._observable,c,u.observable,s)})})}(this),this._bindProperties.forEach(r=>{pu(this._observable,r)})}function bA(i,t,e){if(this._bindings.size>1)throw new A("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,t),e)}function gu(i){return i.every(t=>typeof t=="string")}function pu(i,t){const e=i[rs].get(t);let n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}function _t(i,...t){t.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in i.prototype)return;const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable=!1,Object.defineProperty(i.prototype,n,o)})})}class ot{constructor(t){this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",fu,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",fu),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function fu(i){i.return=!1,i.stop()}_t(ot,ne);class Pt{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",mu,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",mu),this.refresh())}execute(){}destroy(){this.stopListening()}}function mu(i){i.return=!1,i.stop()}_t(Pt,ne);class ku extends Pt{constructor(t){super(t),this._childCommands=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return e!=null&&e.execute(t)}registerChildCommand(t){this._childCommands.push(t),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){return this._childCommands.find(t=>t.isEnabled)}}const bu=function(i,t){return function(e){return i(t(e))}},qa=bu(Object.getPrototypeOf,Object);var wA=Function.prototype,CA=Object.prototype,wu=wA.toString,AA=CA.hasOwnProperty,_A=wu.call(Object);const Ge=function(i){if(!nn(i)||P(i)!="[object Object]")return!1;var t=qa(i);if(t===null)return!0;var e=AA.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&wu.call(e)==_A},vA=function(){this.__data__=[],this.size=0},ss=function(i,t){for(var e=i.length;e--;)if(kt(i[e][0],t))return e;return-1};var yA=Array.prototype.splice;const xA=function(i){var t=this.__data__,e=ss(t,i);return!(e<0)&&(e==t.length-1?t.pop():yA.call(t,e,1),--this.size,!0)},EA=function(i){var t=this.__data__,e=ss(t,i);return e<0?void 0:t[e][1]},DA=function(i){return ss(this.__data__,i)>-1},MA=function(i,t){var e=this.__data__,n=ss(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function ri(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}ri.prototype.clear=vA,ri.prototype.delete=xA,ri.prototype.get=EA,ri.prototype.has=DA,ri.prototype.set=MA;const as=ri,TA=function(){this.__data__=new as,this.size=0},SA=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},IA=function(i){return this.__data__.get(i)},NA=function(i){return this.__data__.has(i)},tr=et(Ft,"Map"),er=et(Object,"create"),BA=function(){this.__data__=er?er(null):{},this.size=0},PA=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var zA=Object.prototype.hasOwnProperty;const RA=function(i){var t=this.__data__;if(er){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return zA.call(t,i)?t[i]:void 0};var LA=Object.prototype.hasOwnProperty;const OA=function(i){var t=this.__data__;return er?t[i]!==void 0:LA.call(t,i)},jA=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=er&&t===void 0?"__lodash_hash_undefined__":t,this};function si(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}si.prototype.clear=BA,si.prototype.delete=PA,si.prototype.get=RA,si.prototype.has=OA,si.prototype.set=jA;const Cu=si,FA=function(){this.size=0,this.__data__={hash:new Cu,map:new(tr||as),string:new Cu}},VA=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},cs=function(i,t){var e=i.__data__;return VA(t)?e[typeof t=="string"?"string":"hash"]:e.map},HA=function(i){var t=cs(this,i).delete(i);return this.size-=t?1:0,t},UA=function(i){return cs(this,i).get(i)},WA=function(i){return cs(this,i).has(i)},qA=function(i,t){var e=cs(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function ai(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}ai.prototype.clear=FA,ai.prototype.delete=HA,ai.prototype.get=UA,ai.prototype.has=WA,ai.prototype.set=qA;const ls=ai,GA=function(i,t){var e=this.__data__;if(e instanceof as){var n=e.__data__;if(!tr||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new ls(n)}return e.set(i,t),this.size=e.size,this};function ci(i){var t=this.__data__=new as(i);this.size=t.size}ci.prototype.clear=TA,ci.prototype.delete=SA,ci.prototype.get=IA,ci.prototype.has=NA,ci.prototype.set=GA;const nr=ci,$A=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},KA=bu(Object.keys,Object);var YA=Object.prototype.hasOwnProperty;const QA=function(i){if(!Ua(i))return KA(i);var t=[];for(var e in Object(i))YA.call(i,e)&&e!="constructor"&&t.push(e);return t},Ga=function(i){return yo(i)?du(i):QA(i)},ZA=function(i,t){return i&&wt(t,Ga(t),i)},JA=function(i,t){return i&&wt(t,oi(t),i)};var Au=l&&!l.nodeType&&l,_u=Au&&!0&&a&&!a.nodeType&&a,vu=_u&&_u.exports===Au?Ft.Buffer:void 0,yu=vu?vu.allocUnsafe:void 0;const xu=function(i,t){if(t)return i.slice();var e=i.length,n=yu?yu(e):new i.constructor(e);return i.copy(n),n},Eu=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},XA=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,r=[];++e<n;){var s=i[e];t(s,e,i)&&(r[o++]=s)}return r},Du=function(){return[]};var t_=Object.prototype.propertyIsEnumerable,Mu=Object.getOwnPropertySymbols;const $a=Mu?function(i){return i==null?[]:(i=Object(i),XA(Mu(i),function(t){return t_.call(i,t)}))}:Du,e_=function(i,t){return wt(i,$a(i),t)},Tu=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},Su=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)Tu(t,$a(i)),i=qa(i);return t}:Du,n_=function(i,t){return wt(i,Su(i),t)},Iu=function(i,t,e){var n=t(i);return Be(i)?n:Tu(n,e(i))},Ka=function(i){return Iu(i,Ga,$a)},o_=function(i){return Iu(i,oi,Su)},Ya=et(Ft,"DataView"),Qa=et(Ft,"Promise"),Za=et(Ft,"Set"),Ja=et(Ft,"WeakMap");var Nu="[object Map]",Bu="[object Promise]",Pu="[object Set]",zu="[object WeakMap]",Ru="[object DataView]",i_=At(Ya),r_=At(tr),s_=At(Qa),a_=At(Za),c_=At(Ja),xo=P;(Ya&&xo(new Ya(new ArrayBuffer(1)))!=Ru||tr&&xo(new tr)!=Nu||Qa&&xo(Qa.resolve())!=Bu||Za&&xo(new Za)!=Pu||Ja&&xo(new Ja)!=zu)&&(xo=function(i){var t=P(i),e=t=="[object Object]"?i.constructor:void 0,n=e?At(e):"";if(n)switch(n){case i_:return Ru;case r_:return Nu;case s_:return Bu;case a_:return Pu;case c_:return zu}return t});const or=xo;var l_=Object.prototype.hasOwnProperty;const d_=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&l_.call(i,"index")&&(e.index=i.index,e.input=i.input),e},ds=Ft.Uint8Array,Xa=function(i){var t=new i.constructor(i.byteLength);return new ds(t).set(new ds(i)),t},u_=function(i,t){var e=t?Xa(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var h_=/\w*$/;const g_=function(i){var t=new i.constructor(i.source,h_.exec(i));return t.lastIndex=i.lastIndex,t};var Lu=It?It.prototype:void 0,Ou=Lu?Lu.valueOf:void 0;const p_=function(i){return Ou?Object(Ou.call(i)):{}},ju=function(i,t){var e=t?Xa(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},f_=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return Xa(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return u_(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ju(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return g_(i);case"[object Symbol]":return p_(i)}};var Fu=Object.create;const m_=function(){function i(){}return function(t){if(!U(t))return{};if(Fu)return Fu(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),Vu=function(i){return typeof i.constructor!="function"||Ua(i)?{}:m_(qa(i))},k_=function(i){return nn(i)&&or(i)=="[object Map]"};var Hu=ni&&ni.isMap;const b_=Hu?Fa(Hu):k_,w_=function(i){return nn(i)&&or(i)=="[object Set]"};var Uu=ni&&ni.isSet;const C_=Uu?Fa(Uu):w_;var Wu="[object Arguments]",qu="[object Function]",A_="[object Object]",oe={};oe[Wu]=oe["[object Array]"]=oe["[object ArrayBuffer]"]=oe["[object DataView]"]=oe["[object Boolean]"]=oe["[object Date]"]=oe["[object Float32Array]"]=oe["[object Float64Array]"]=oe["[object Int8Array]"]=oe["[object Int16Array]"]=oe["[object Int32Array]"]=oe["[object Map]"]=oe["[object Number]"]=oe["[object Object]"]=oe["[object RegExp]"]=oe["[object Set]"]=oe["[object String]"]=oe["[object Symbol]"]=oe["[object Uint8Array]"]=oe["[object Uint8ClampedArray]"]=oe["[object Uint16Array]"]=oe["[object Uint32Array]"]=!0,oe["[object Error]"]=oe[qu]=oe["[object WeakMap]"]=!1;const tc=function i(t,e,n,o,r,s){var c,d=1&e,u=2&e,g=4&e;if(n&&(c=r?n(t,o,r,s):n(t)),c!==void 0)return c;if(!U(t))return t;var f=Be(t);if(f){if(c=d_(t),!d)return Eu(t,c)}else{var b=or(t),v=b==qu||b=="[object GeneratorFunction]";if(Zi(t))return xu(t,d);if(b==A_||b==Wu||v&&!r){if(c=u||v?{}:Vu(t),!d)return u?n_(t,JA(c,t)):e_(t,ZA(c,t))}else{if(!oe[b])return r?t:{};c=f_(t,b,d)}}s||(s=new nr);var D=s.get(t);if(D)return D;s.set(t,c),C_(t)?t.forEach(function(T){c.add(i(T,e,n,T,t,s))}):b_(t)&&t.forEach(function(T,N){c.set(N,i(T,e,n,N,t,s))});var M=f?void 0:(g?u?o_:Ka:u?oi:Ga)(t);return $A(M||t,function(T,N){M&&(T=t[N=T]),mt(c,N,i(T,e,n,N,t,s))}),c},Gu=function(i,t){return tc(i,5,t=typeof t=="function"?t:void 0)},to=function(i){return nn(i)&&i.nodeType===1&&!Ge(i)};class $u{constructor(t,e){this._config={},e&&this.define(Ku(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(Ge(e))return void this._setObjectToTarget(t,e,o);const r=e.split(".");e=r.pop();for(const s of r)Ge(t[s])||(t[s]={}),t=t[s];if(Ge(n))return Ge(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const o of n){if(!Ge(t[o])){t=null;break}t=t[o]}return t?Ku(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function Ku(i){return Gu(i,__)}function __(i){return to(i)?i:void 0}function on(i){return!(!i||!i[Symbol.iterator])}class rn{constructor(t={},e={}){const n=on(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new A("collection-add-item-invalid-index",this);for(let n=0;n<t.length;n++){const o=t[n],r=this._getItemIdBeforeAdding(o),s=e+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s)}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new A("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new A("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(n=>e(n)):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(o,r,s)=>{const c=e._bindToCollection==this,d=e._bindToInternalToExternalMap.get(r);if(c&&d)this._bindToExternalToInternalMap.set(r,d),this._bindToInternalToExternalMap.set(d,r);else{const u=t(r);if(!u)return void this._skippedIndexesFromExternal.push(s);let g=s;for(const f of this._skippedIndexesFromExternal)s>f&&g--;for(const f of e._skippedIndexesFromExternal)g>=f&&g++;this._bindToExternalToInternalMap.set(r,u),this._bindToInternalToExternalMap.set(u,r),this.add(u,g);for(let f=0;f<e._skippedIndexesFromExternal.length;f++)g<=e._skippedIndexesFromExternal[f]&&e._skippedIndexesFromExternal[f]++}};for(const o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,r,s)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((d,u)=>(s<u&&d.push(u-1),s>u&&d.push(u),d),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new A("collection-add-invalid-id",this);if(this.get(n))throw new A("collection-add-item-already-exists",this)}else t[e]=n=y();return n}_remove(t){let e,n,o,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],r=!o,o&&(n=o[s])):(o=t,n=o[s],e=this._items.indexOf(o),r=e==-1||!this._itemMap.get(n)),r)throw new A("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(c),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}_t(rn,V);class ec{constructor(t,e=[],n=[]){this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(const o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new A("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const o=this,r=this._context;(function D(M,T=new Set){M.forEach(N=>{d(N)&&(T.has(N)||(T.add(N),N.pluginName&&!o._availablePlugins.has(N.pluginName)&&o._availablePlugins.set(N.pluginName,N),N.requires&&D(N.requires,T)))})})(t),b(t);const s=[...function D(M,T=new Set){return M.map(N=>d(N)?N:o._availablePlugins.get(N)).reduce((N,R)=>T.has(R)?N:(T.add(R),R.requires&&(b(R.requires,R),D(R.requires,T).forEach(q=>N.add(q))),N.add(R)),new Set)}(t.filter(D=>!g(D,e)))];(function(D,M){for(const T of M){if(typeof T!="function")throw new A("plugincollection-replace-plugin-invalid-type",null,{pluginItem:T});const N=T.pluginName;if(!N)throw new A("plugincollection-replace-plugin-missing-name",null,{pluginItem:T});if(T.requires&&T.requires.length)throw new A("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:N});const R=o._availablePlugins.get(N);if(!R)throw new A("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:N});const q=D.indexOf(R);if(q===-1){if(o._contextPlugins.has(R))return;throw new A("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:N})}if(R.requires&&R.requires.length)throw new A("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:N});D.splice(q,1,T),o._availablePlugins.set(N,T)}})(s,n);const c=function(D){return D.map(M=>{const T=o._contextPlugins.get(M)||new M(r);return o._add(M,T),T})}(s);return v(c,"init").then(()=>v(c,"afterInit")).then(()=>c);function d(D){return typeof D=="function"}function u(D){return d(D)&&D.isContextPlugin}function g(D,M){return M.some(T=>T===D||f(D)===T||f(T)===D)}function f(D){return d(D)?D.pluginName||D.name:D}function b(D,M=null){D.map(T=>d(T)?T:o._availablePlugins.get(T)||T).forEach(T=>{(function(N,R){if(!d(N))throw R?new A("plugincollection-soft-required",r,{missingPlugin:N,requiredBy:f(R)}):new A("plugincollection-plugin-not-found",r,{plugin:N})})(T,M),function(N,R){if(!!u(R)&&!u(N))throw new A("plugincollection-context-required",r,{plugin:f(N),requiredBy:f(R)})}(T,M),function(N,R){if(!!R&&!!g(N,e))throw new A("plugincollection-required",r,{plugin:f(N),requiredBy:f(R)})}(T,M)})}function v(D,M){return D.reduce((T,N)=>N[M]?o._contextPlugins.has(N)?T:T.then(N[M].bind(N)):T,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new A("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}function Ce(i){return Array.isArray(i)?i:[i]}function v_(i,t,e=1){if(typeof e!="number")throw new A("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=t.id||t.string;if(n===0||!function(d,u){return!!window.CKEDITOR_TRANSLATIONS[d]&&!!window.CKEDITOR_TRANSLATIONS[d].dictionary[u]}(i,o))return e!==1?t.plural:t.string;const r=window.CKEDITOR_TRANSLATIONS[i].dictionary,s=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(d=>d===1?0:1);if(typeof r[o]=="string")return r[o];const c=Number(s(e));return r[o][c]}_t(ec,V),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const y_=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Yu(i){return y_.includes(i)?"rtl":"ltr"}class x_{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Yu(this.uiLanguage),this.contentLanguageDirection=Yu(this.contentLanguage),this.t=(e,n)=>this._t(e,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Ce(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,c)=>c<r.length?r[c]:s)}(v_(this.uiLanguage,t,n),e)}}class E_{constructor(t){this.config=new $u(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new ec(this,e);const n=this.config.get("language")||{};this.locale=new x_({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new rn,this._contextOwner=null}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new A("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new A("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new A("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class ir{constructor(t){this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function Se(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}_t(ir,ne);const Qu=function(i){return tc(i,4)};class Eo{constructor(t){this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new A("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Se(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Qu(this);return delete t.parent,t}is(t){return t==="node"||t==="view:node"}}_t(Eo,V);class Jt extends Eo{constructor(t,e){super(t),this._textData=e}is(t){return t==="$text"||t==="view:$text"||t==="text"||t==="view:text"||t==="node"||t==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Jt&&(this===t||this.data===t.data)}_clone(){return new Jt(this.document,this.data)}}class Rn{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new A("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new A("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return t==="$textProxy"||t==="view:$textProxy"||t==="textProxy"||t==="view:textProxy"}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function Ln(i){return on(i)?new Map(i):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(i)}class An{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const o=Zu(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){const e=[];for(const n of t)for(const o of this._patterns){const r=Zu(n,o);r&&e.push({element:n,pattern:o,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Zu(i,t){if(typeof t=="function")return t(i);const e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Ge(n)?(n.style!==void 0&&x("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&x("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),nc(n,r,s=>o.getAttribute(s))}(t.attributes,i),!e.attributes)?null:!(t.classes&&(e.classes=function(n,o){return nc(n,o.getClassNames())}(t.classes,i),!e.classes))&&!(t.styles&&(e.styles=function(n,o){return nc(n,o.getStyleNames(!0),r=>o.getStyle(r))}(t.styles,i),!e.styles))&&e}function nc(i,t,e){const n=function(s){return Array.isArray(s)?s.map(c=>Ge(c)?(c.key!==void 0&&c.value!==void 0||x("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Ge(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(t),r=[];return n.forEach(([s,c])=>{o.forEach(d=>{(function(u,g){return u===!0||u===g||u instanceof RegExp&&g.match(u)})(s,d)&&function(u,g,f){if(u===!0)return!0;const b=f(g);return u===b||u instanceof RegExp&&!!String(b).match(u)}(c,d,e)&&r.push(d)})}),!n.length||r.length<n.length?null:r}const us=function(i){return typeof i=="symbol"||nn(i)&&P(i)=="[object Symbol]"};var D_=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M_=/^\w*$/;const T_=function(i,t){if(Be(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!us(i))||M_.test(i)||!D_.test(i)||t!=null&&i in Object(t)};function oc(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=e.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return e.cache=r.set(o,s)||r,s};return e.cache=new(oc.Cache||ls),e}oc.Cache=ls;const S_=oc;var I_=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,N_=/\\(\\)?/g,B_=function(i){var t=S_(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(I_,function(e,n,o,r){t.push(o?r.replace(N_,"$1"):n||e)}),t});const P_=B_,z_=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var Ju=It?It.prototype:void 0,Xu=Ju?Ju.toString:void 0;const R_=function i(t){if(typeof t=="string")return t;if(Be(t))return z_(t,i)+"";if(us(t))return Xu?Xu.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},ic=function(i){return i==null?"":R_(i)},rc=function(i,t){return Be(i)?i:T_(i,t)?[i]:P_(ic(i))},L_=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},sc=function(i){if(typeof i=="string"||us(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},th=function(i,t){for(var e=0,n=(t=rc(t,i)).length;i!=null&&e<n;)i=i[sc(t[e++])];return e&&e==n?i:void 0},eh=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+t];return r},O_=function(i,t){return t.length<2?i:th(i,eh(t,0,-1))},j_=function(i,t){return t=rc(t,i),(i=O_(i,t))==null||delete i[sc(L_(t))]},F_=function(i,t){return i==null||j_(i,t)},hs=function(i,t,e){var n=i==null?void 0:th(i,t);return n===void 0?e:n},ac=function(i,t,e){(e!==void 0&&!kt(i[t],e)||e===void 0&&!(t in i))&&X(i,t,e)},V_=function(i){return function(t,e,n){for(var o=-1,r=Object(t),s=n(t),c=s.length;c--;){var d=s[i?c:++o];if(e(r[d],d,r)===!1)break}return t}}(),H_=function(i){return nn(i)&&yo(i)},cc=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},U_=function(i){return wt(i,oi(i))},W_=function(i,t,e,n,o,r,s){var c=cc(i,e),d=cc(t,e),u=s.get(d);if(u)ac(i,e,u);else{var g=r?r(c,d,e+"",i,t,s):void 0,f=g===void 0;if(f){var b=Be(d),v=!b&&Zi(d),D=!b&&!v&&Ha(d);g=d,b||v||D?Be(c)?g=c:H_(c)?g=Eu(c):v?(f=!1,g=xu(d,!0)):D?(f=!1,g=ju(d,!0)):g=[]:Ge(d)||ja(d)?(g=c,ja(c)?g=U_(c):U(c)&&!tt(c)||(g=Vu(d))):f=!1}f&&(s.set(d,g),o(g,d,n,r,s),s.delete(d)),ac(i,e,g)}},q_=function i(t,e,n,o,r){t!==e&&V_(e,function(s,c){if(r||(r=new nr),U(s))W_(t,e,c,n,i,o,r);else{var d=o?o(cc(t,c),s,c+"",t,e,r):void 0;d===void 0&&(d=s),ac(t,c,d)}},oi)},nh=nu(function(i,t,e){q_(i,t,e)}),G_=function(i,t,e,n){if(!U(i))return i;for(var o=-1,r=(t=rc(t,i)).length,s=r-1,c=i;c!=null&&++o<r;){var d=sc(t[o]),u=e;if(d==="__proto__"||d==="constructor"||d==="prototype")return i;if(o!=s){var g=c[d];(u=n?n(g,d,c):void 0)===void 0&&(u=U(g)?g:Oa(t[o+1])?[]:{})}mt(c,d,u),c=c[d]}return i},$_=function(i,t,e){return i==null?i:G_(i,t,e)};class K_{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let o=null,r=0,s=0,c=null;const d=new Map;if(n==="")return d;n.charAt(n.length-1)!=";"&&(n+=";");for(let u=0;u<n.length;u++){const g=n.charAt(u);if(o===null)switch(g){case":":c||(c=n.substr(r,u-r),s=u+1);break;case'"':case"'":o=g;break;case";":{const f=n.substr(s,u-s);c&&d.set(c.trim(),f.trim()),c=null,r=u+1;break}}else g===o&&(o=null)}return d}(t).entries());for(const[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(U(t))for(const[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=lc(t);F_(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!U(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),o=hs(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class Y_{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(U(e))dc(n,lc(t),e);else if(this._normalizers.has(t)){const o=this._normalizers.get(t),{path:r,value:s}=o(e);dc(n,r,s)}else dc(n,t,e)}getNormalized(t,e){if(!t)return nh({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return hs(e,n);const o=n(t,e);if(o)return o}return hs(e,lc(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function lc(i){return i.replace("-",".")}function dc(i,t,e){let n=e;U(e)&&(n=nh({},hs(i,t),e)),$_(i,t,n)}class sn extends Eo{constructor(t,e,n,o){if(super(t),this.name=e,this._attrs=function(r){r=Ln(r);for(const[s,c]of r)c===null?r.delete(s):typeof c!="string"&&r.set(s,String(c));return r}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");oh(this._classes,r),this._attrs.delete("class")}this._styles=new K_(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._isAllowedInsideAttributeElement=!1,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}get isAllowedInsideAttributeElement(){return this._isAllowedInsideAttributeElement}is(t,e=null){return e?e===this.name&&(t==="element"||t==="view:element"):t==="element"||t==="view:element"||t==="node"||t==="view:node"}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof sn))return!1;if(this===t)return!0;if(this.name!=t.name||this.isAllowedInsideAttributeElement!=t.isAllowedInsideAttributeElement||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t=!1){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new An(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const o of this.getChildren())e.push(o._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._isAllowedInsideAttributeElement=this.isAllowedInsideAttributeElement,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Jt(r,s)]:(on(s)||(s=[s]),Array.from(s).map(c=>typeof c=="string"?new Jt(r,c):c instanceof Rn?new Jt(r,c.data):c))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),t=="class"?oh(this._classes,e):t=="style"?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Ce(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Ce(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Ce(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function oh(i,t){const e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}class gs extends sn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=ih}is(t,e=null){return e?e===this.name&&(t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}}function ih(){const i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of i)if(!e.is("uiElement"))return null;return this.childCount}class ps extends gs{constructor(t,e,n,o){super(t,e,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}is(t,e=null){return e?e===this.name&&(t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}destroy(){this.stopListening()}}_t(ps,ne);const rh=Symbol("rootName");class Q_ extends ps{constructor(t,e){super(t,e),this.rootName="main"}is(t,e=null){return e?e===this.name&&(t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}get rootName(){return this.getCustomProperty(rh)}set rootName(t){this._setCustomProperty(rh,t)}set _name(t){this.name=t}}class Do{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new A("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new A("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=at._createAt(t.startPosition):this.position=at._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do o=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof Jt){if(t.isAtEnd)return this.position=at._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof sn)return this.shallow?t.offset++:t=new at(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof Jt){if(this.singleCharacters)return t=new at(o,0),this.position=t,this._next();{let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Rn(o,0,s),t=at._createAfter(r)):(r=new Rn(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Rn(n,t.offset,r);return t.offset+=r,this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=at._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof Jt){if(t.isAtStart)return this.position=at._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof sn)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new at(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof Jt){if(this.singleCharacters)return t=new at(o,o.data.length),this.position=t,this._previous();{let r,s=o.data.length;if(o==this._boundaryStartParent){const c=this.boundaries.start.offset;r=new Rn(o,c,o.data.length-c),s=r.data.length,t=at._createBefore(r)}else r=new Rn(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",r,e,t,s)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-c}t.offset-=r;const s=new Rn(n,t.offset,r);return this.position=t,this._formatReturnValue("text",s,e,t,r)}return t=at._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,r){return e instanceof Rn&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=at._createAfter(e.textNode):(o=at._createAfter(e.textNode),this.position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=at._createBefore(e.textNode):(o=at._createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:r}}}}class at{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof ps);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=at._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Do(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}is(t){return t==="position"||t==="view:position"}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=Se(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Do(t)}clone(){return new at(this.parent,this.offset)}static _createAt(t,e){if(t instanceof at)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new A("view-createpositionat-offset-required",n)}return new at(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new at(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new A("view-position-after-root",t,{root:t});return new at(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new at(t.textNode,t.offsetInText);if(!t.parent)throw new A("view-position-before-root",t,{root:t});return new at(t.parent,t.index)}}class Et{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Do({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(fs,{direction:"backward"}),e=this.end.getLastMatchingPosition(fs);return t.parent.is("$text")&&t.isAtStart&&(t=at._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=at._createAfter(e.parent)),new Et(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(fs);if(t.isAfter(this.end)||t.isEqual(this.end))return new Et(t,t);let e=this.end.getLastMatchingPosition(fs,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new at(n,0)),o&&o.is("$text")&&(e=new at(o,o.data.length)),new Et(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Et(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Et(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Et(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Do(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Et(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Do(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Do(t);yield e.position;for(const n of e)yield n.nextPosition}is(t){return t==="range"||t==="view:range"}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new at(t,e),new at(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(at._createBefore(t),e)}}function fs(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function uc(i){let t=0;for(const e of i)t++;return t}class fn{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=uc(this.getRanges());if(e!=uc(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(t,e,n){if(t===null)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof fn||t instanceof hc)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Et)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof at)this._setRanges([new Et(t)]),this._setFakeOptions(e);else if(t instanceof Eo){const o=!!n&&!!n.backward;let r;if(e===void 0)throw new A("view-selection-setto-required-second-parameter",this);r=e=="in"?Et._createIn(t):e=="on"?Et._createOn(t):new Et(at._createAt(t,e)),this._setRanges([r],o),this._setFakeOptions(n)}else{if(!on(t))throw new A("view-selection-setto-not-selectable",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new A("view-selection-setfocus-no-ranges",this);const n=at._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Et(n,o),!0):this._addRange(new Et(o,n)),this.fire("change")}is(t){return t==="selection"||t==="view:selection"}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Et))throw new A("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new A("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Et(t.start,t.end))}}_t(fn,V);class hc{constructor(t=null,e,n){this._selection=new fn,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return t==="selection"||t=="documentSelection"||t=="view:selection"||t=="view:documentSelection"}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}_t(hc,V);class ms extends _{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const gc=Symbol("bubbling contexts"),Z_={fire(i,...t){try{const e=i instanceof _?i:new _(this,i),n=pc(this);if(!n.size)return;if(rr(e,"capturing",this),li(n,"$capture",e,...t))return e.return;const o=e.startRange||this.selection.getFirstRange(),r=o?o.getContainedElement():null,s=!!r&&Boolean(sh(n,r));let c=r||function(d){if(!d)return null;const u=d.start.parent,g=d.end.parent,f=u.getPath(),b=g.getPath();return f.length>b.length?u:g}(o);if(rr(e,"atTarget",c),!s){if(li(n,"$text",e,...t))return e.return;rr(e,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(li(n,"$root",e,...t))return e.return}else if(c.is("element")&&li(n,c.name,e,...t))return e.return;if(li(n,c,e,...t))return e.return;c=c.parent,rr(e,"bubbling",c)}return rr(e,"bubbling",this),li(n,"$document",e,...t),e.return}catch(e){A.rethrowUnexpectedError(e,this)}},_addEventListener(i,t,e){const n=Ce(e.context||"$document"),o=pc(this);for(const r of n){let s=o.get(r);s||(s=Object.create(V),o.set(r,s)),this.listenTo(s,i,t,e)}},_removeEventListener(i,t){const e=pc(this);for(const n of e.values())this.stopListening(n,i,t)}},J_=Z_;function rr(i,t,e){i instanceof ms&&(i._eventPhase=t,i._currentTarget=e)}function li(i,t,e,...n){const o=typeof t=="string"?i.get(t):sh(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function sh(i,t){for(const[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function pc(i){return i[gc]||(i[gc]=new Map),i[gc]}class sr{constructor(t){this.selection=new hc,this.roots=new rn({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}_t(sr,J_),_t(sr,ne);class di extends sn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=X_,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new A("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(t,e=null){return e?e===this.name&&(t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"):t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function X_(){if(fc(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(fc(i)>1)return null;i=i.parent}return!i||fc(i)>1?null:this.childCount}function fc(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}di.DEFAULT_PRIORITY=10;class ah extends sn{constructor(t,e,n,o){super(t,e,n,o),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=t0}is(t,e=null){return e?e===this.name&&(t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"):t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Eo||Array.from(e).length>0))throw new A("view-emptyelement-cannot-add",[this,e])}}function t0(){return null}const Mo=navigator.userAgent.toLowerCase(),e0={isMac:ch(Mo),isWindows:function(i){return i.indexOf("windows")>-1}(Mo),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(Mo),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(Mo),isiOS:function(i){return!!i.match(/iphone|ipad/i)||ch(i)&&navigator.maxTouchPoints>0}(Mo),isAndroid:function(i){return i.indexOf("android")>-1}(Mo),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(Mo),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},Yt=e0;function ch(i){return i.indexOf("macintosh")>-1}const n0={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},o0={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Nt=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){const e=String.fromCharCode(t);i[e.toLowerCase()]=t}for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;for(const t of"`-=[];',./\\")i[t]=t.charCodeAt(0);return i}(),i0=Object.fromEntries(Object.entries(Nt).map(([i,t])=>[t,i.charAt(0).toUpperCase()+i.slice(1)]));function _n(i){let t;if(typeof i=="string"){if(t=Nt[i.toLowerCase()],!t)throw new A("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?Nt.alt:0)+(i.ctrlKey?Nt.ctrl:0)+(i.shiftKey?Nt.shift:0)+(i.metaKey?Nt.cmd:0);return t}function mc(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return _n(e.slice(0,-1));const n=_n(e);return Yt.isMac&&n==Nt.ctrl?Nt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function lh(i){let t=mc(i);return Object.entries(Yt.isMac?n0:o0).reduce((e,[n,o])=>((t&Nt[n])!=0&&(t&=~Nt[n],e+=o),e),"")+(t?i0[t]:"")}function kc(i,t){const e=t==="ltr";switch(i){case Nt.arrowleft:return e?"left":"right";case Nt.arrowright:return e?"right":"left";case Nt.arrowup:return"up";case Nt.arrowdown:return"down"}}class bc extends sn{constructor(t,e,n,o){super(t,e,n,o),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=s0}is(t,e=null){return e?e===this.name&&(t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"):t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Eo||Array.from(e).length>0))throw new A("view-uielement-cannot-add",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function r0(i){i.document.on("arrowKey",(t,e)=>function(n,o,r){if(o.keyCode==Nt.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),c=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(c||o.shiftKey){const d=s.focusNode,u=s.focusOffset,g=r.domPositionToView(d,u);if(g===null)return;let f=!1;const b=g.getLastMatchingPosition(v=>(v.item.is("uiElement")&&(f=!0),!(!v.item.is("uiElement")&&!v.item.is("attributeElement"))));if(f){const v=r.viewPositionToDom(b);c?s.collapse(v.parent,v.offset):s.extend(v.parent,v.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function s0(){return null}class dh extends sn{constructor(t,e,n,o){super(t,e,n,o),this._isAllowedInsideAttributeElement=!0,this.getFillerOffset=a0}is(t,e=null){return e?e===this.name&&(t==="rawElement"||t==="view:rawElement"||t==="element"||t==="view:element"):t==="rawElement"||t==="view:rawElement"||t===this.name||t==="view:"+this.name||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Eo||Array.from(e).length>0))throw new A("view-rawelement-cannot-add",[this,e])}}function a0(){return null}class To{constructor(t,e){this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="view:documentFragment"}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Jt(r,s)]:(on(s)||(s=[s]),Array.from(s).map(c=>typeof c=="string"?new Jt(r,c):c instanceof Rn?new Jt(r,c.data):c))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}_t(To,V);class uh{constructor(t){this.document=t,this._cloneGroups=new Map,this._slotFactory=null}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new To(this.document,t)}createText(t){return new Jt(this.document,t)}createAttributeElement(t,e,n={}){const o=new di(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let r=null;Ge(n)?o=n:r=n;const s=new gs(this.document,t,e,r);return o.isAllowedInsideAttributeElement!==void 0&&(s._isAllowedInsideAttributeElement=o.isAllowedInsideAttributeElement),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const o=new ps(this.document,t,e);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){const o=new ah(this.document,t,e);return n.isAllowedInsideAttributeElement!==void 0&&(o._isAllowedInsideAttributeElement=n.isAllowedInsideAttributeElement),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n,o={}){const r=new bc(this.document,t,e);return n&&(r.render=n),o.isAllowedInsideAttributeElement!==void 0&&(r._isAllowedInsideAttributeElement=o.isAllowedInsideAttributeElement),r}createRawElement(t,e,n,o={}){const r=new dh(this.document,t,e);return r.render=n||(()=>{}),o.isAllowedInsideAttributeElement!==void 0&&(r._isAllowedInsideAttributeElement=o.isAllowedInsideAttributeElement),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof at?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new A("view-writer-break-non-container-element",this.document);if(!e.parent)throw new A("view-writer-break-root",this.document);if(t.isAtStart)return at._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(at._createAfter(e),n);const o=new Et(t,at._createAt(e,"end")),r=new at(n,0);this.move(o,r)}return at._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new at(s,c))}const o=n.getChild(e-1),r=n.getChild(e);if(!o||!r)return t;if(o.is("$text")&&r.is("$text"))return gh(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new at(o,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new A("view-writer-merge-containers-invalid-position",this.document);const o=e.getChild(e.childCount-1),r=o instanceof Jt?at._createAt(o,"end"):at._createAt(e,"end");return this.move(Et._createIn(n),at._createAt(e,"end")),this.remove(Et._createOn(n)),r}insert(t,e){ph(e=on(e)?[...e]:[e],this.document);const n=e.reduce((s,c)=>{const d=s[s.length-1],u=!(c.is("uiElement")&&c.isAllowedInsideAttributeElement);return d&&d.breakAttributes==u?d.nodes.push(c):s.push({breakAttributes:u,nodes:[c]}),s},[]);let o=null,r=t;for(const{nodes:s,breakAttributes:c}of n){const d=this._insertNodes(r,s,c);o||(o=d.start),r=d.end}return o?new Et(o,r):new Et(t)}remove(t){const e=t instanceof Et?t:Et._createOn(t);if(ar(e,this.document),e.isCollapsed)return new To(this.document);const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=o.offset-n.offset,c=r._removeChildren(n.offset,s);for(const u of c)this._removeFromClonedElementsGroup(u);const d=this.mergeAttributes(n);return e.start=d,e.end=d.clone(),new To(this.document,c)}clear(t,e){ar(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&e.isSimilar(r))s=Et._createOn(r);else if(!o.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const c=r.getAncestors().find(d=>d.is("element")&&e.isSimilar(d));c&&(s=Et._createIn(c))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,r=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof di))throw new A("view-writer-wrap-invalid-attribute",this.document);if(ar(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new Et(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof di))throw new A("view-writer-unwrap-invalid-attribute",this.document);if(ar(t,this.document),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,e),c=this.mergeAttributes(s.start);c.isEqual(s.start)||s.end.offset--;const d=this.mergeAttributes(s.end);return new Et(c,d)}rename(t,e){const n=new gs(this.document,t,e.getAttributes());return this.insert(at._createAfter(e),n),this.move(Et._createIn(e),at._createAt(n,0)),this.remove(Et._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return at._createAt(t,e)}createPositionAfter(t){return at._createAfter(t)}createPositionBefore(t){return at._createBefore(t)}createRange(t,e){return new Et(t,e)}createRangeOn(t){return Et._createOn(t)}createRangeIn(t){return Et._createIn(t)}createSelection(t,e,n){return new fn(t,e,n)}createSlot(t){if(!this._slotFactory)throw new A("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,r;if(o=n?wc(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new A("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?Cc(t):t;const s=o._insertChild(r.offset,e);for(const g of e)this._addToClonedElementsGroup(g);const c=r.getShiftedBy(s),d=this.mergeAttributes(r);d.isEqual(r)||c.offset--;const u=this.mergeAttributes(c);return new Et(d,u)}_wrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const d=t.getChild(r),u=d.is("$text"),g=d.is("attributeElement"),f=d.isAllowedInsideAttributeElement;if(g&&this._wrapAttributeElement(o,d))s.push(new at(t,r));else if(u||f||g&&c0(o,d)){const b=o._clone();d._remove(),b._appendChild(d),t._insertChild(r,b),this._addToClonedElementsGroup(b),s.push(new at(t,r))}else g&&this._wrapChildren(d,0,d.childCount,o);r++}let c=0;for(const d of s)d.offset-=c,d.offset!=e&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return Et._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const d=t.getChild(r);if(d.is("attributeElement"))if(d.isSimilar(o)){const u=d.getChildren(),g=d.childCount;d._remove(),t._insertChild(r,u),this._removeFromClonedElementsGroup(d),s.push(new at(t,r),new at(t,r+g)),r+=g,n+=g-1}else this._unwrapAttributeElement(o,d)?(s.push(new at(t,r),new at(t,r+1)),r++):(this._unwrapChildren(d,0,d.childCount,o),r++);else r++}let c=0;for(const d of s)d.offset-=c,!(d.offset==e||d.offset==n)&&(this.mergeAttributes(d).isEqual(d)||(c++,n--));return Et._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,e),c=this.mergeAttributes(s.start);c.isEqual(s.start)||s.end.offset--;const d=this.mergeAttributes(s.end);return new Et(c,d)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return hh(t.clone());t.parent.is("$text")&&(t=Cc(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const o=new Et(t,t.getShiftedBy(1));this.wrap(o,e);const r=new at(n.parent,n.index);n._remove();const s=r.nodeBefore,c=r.nodeAfter;return s instanceof Jt&&c instanceof Jt?gh(s,c):hh(r)}_wrapAttributeElement(t,e){if(!fh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!fh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(ar(t,this.document),t.isCollapsed){const d=this._breakAttributes(t.start,e);return new Et(d,d)}const r=this._breakAttributes(o,e),s=r.parent.childCount,c=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new Et(c,r)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new A("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new A("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new A("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&Ac(o.parent)||Ac(o))return t.clone();if(o.is("$text"))return this._breakAttributes(Cc(t),e);if(n==o.childCount){const r=new at(o.parent,o.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new at(o.parent,o.index);return this._breakAttributes(r,e)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const c=o.childCount-n,d=o._removeChildren(n,c);s._appendChild(d);const u=new at(o.parent,r);return this._breakAttributes(u,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const o of t.getChildren())this._addToClonedElementsGroup(o);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const o of t.getChildren())this._removeFromClonedElementsGroup(o);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function wc(i){let t=i.parent;for(;!Ac(t);){if(!t)return;t=t.parent}return t}function c0(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function hh(i){const t=i.nodeBefore;if(t&&t.is("$text"))return new at(t,t.data.length);const e=i.nodeAfter;return e&&e.is("$text")?new at(e,0):i}function Cc(i){if(i.offset==i.parent.data.length)return new at(i.parent.parent,i.parent.index+1);if(i.offset===0)return new at(i.parent.parent,i.parent.index);const t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Jt(i.root.document,t)),new at(i.parent.parent,i.parent.index+1)}function gh(i,t){const e=i.data.length;return i._data+=t.data,t._remove(),new at(i,e)}function ph(i,t){for(const e of i){if(!l0.some(n=>e instanceof n))throw new A("view-writer-insert-invalid-node-type",t);e.is("$text")||ph(e.getChildren(),t)}}const l0=[Jt,di,gs,ah,dh,bc];function Ac(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function ar(i,t){const e=wc(i.start),n=wc(i.end);if(!e||!n||e!==n)throw new A("view-writer-invalid-range-container",t)}function fh(i,t){return i.id===null&&t.id===null}function ye(i){return Object.prototype.toString.call(i)=="[object Text]"}const mh=i=>i.createTextNode("\xA0"),kh=i=>{const t=i.createElement("span");return t.dataset.ckeFiller=!0,t.innerHTML="\xA0",t},bh=i=>{const t=i.createElement("br");return t.dataset.ckeFiller=!0,t},ks="\u2060".repeat(7);function $e(i){return ye(i)&&i.data.substr(0,7)===ks}function bs(i){return i.data.length==7&&$e(i)}function _c(i){return $e(i)?i.data.slice(7):i.data}function d0(i,t){if(t.keyCode==Nt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;$e(n)&&o<=7&&e.collapse(n,0)}}}function wh(i,t,e,n=!1){e=e||function(r,s){return r===s},Array.isArray(i)||(i=Array.prototype.slice.call(i)),Array.isArray(t)||(t=Array.prototype.slice.call(t));const o=function(r,s,c){const d=Ch(r,s,c);if(d===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const u=Ah(r,d),g=Ah(s,d),f=Ch(u,g,c),b=r.length-f,v=s.length-f;return{firstIndex:d,lastIndexOld:b,lastIndexNew:v}}(i,t,e);return n?function(r,s){const{firstIndex:c,lastIndexOld:d,lastIndexNew:u}=r;if(c===-1)return Array(s).fill("equal");let g=[];return c>0&&(g=g.concat(Array(c).fill("equal"))),u-c>0&&(g=g.concat(Array(u-c).fill("insert"))),d-c>0&&(g=g.concat(Array(d-c).fill("delete"))),u<s&&(g=g.concat(Array(s-u).fill("equal"))),g}(o,t.length):function(r,s){const c=[],{firstIndex:d,lastIndexOld:u,lastIndexNew:g}=s;return g-d>0&&c.push({index:d,type:"insert",values:r.slice(d,g)}),u-d>0&&c.push({index:d+(g-d),type:"delete",howMany:u-d}),c}(t,o)}function Ch(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function Ah(i,t){return i.slice(t).reverse()}function eo(i,t,e){e=e||function(M,T){return M===T};const n=i.length,o=t.length;if(n>200||o>200||n+o>300)return eo.fastDiff(i,t,e,!0);let r,s;if(o<n){const M=i;i=t,t=M,r="delete",s="insert"}else r="insert",s="delete";const c=i.length,d=t.length,u=d-c,g={},f={};function b(M){const T=(f[M-1]!==void 0?f[M-1]:-1)+1,N=f[M+1]!==void 0?f[M+1]:-1,R=T>N?-1:1;g[M+R]&&(g[M]=g[M+R].slice(0)),g[M]||(g[M]=[]),g[M].push(T>N?r:s);let q=Math.max(T,N),gt=q-M;for(;gt<c&&q<d&&e(i[gt],t[q]);)gt++,q++,g[M].push("equal");return q}let v,D=0;do{for(v=-D;v<u;v++)f[v]=b(v);for(v=u+D;v>u;v--)f[v]=b(v);f[u]=b(u),D++}while(f[u]!==d);return g[u].slice(1)}function _h(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function vh(i){const t=i.parentNode;t&&t.removeChild(i)}function ui(i){return i&&i.nodeType===Node.COMMENT_NODE}function hi(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}eo.fastDiff=wh;var u0=m(6062),vt=m.n(u0),yh=m(9315),h0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(yh.Z,h0),yh.Z.locals;class xh{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),Yt.isBlink&&!Yt.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new A("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){let t;const e=!(Yt.isBlink&&!Yt.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;$e(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Eh(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(this.domConverter.mapViewToDom(t).childNodes),o=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),r=this._diffNodeLists(n,o),s=this._findReplaceActions(r,n,o);if(s.indexOf("replace")!==-1){const c={equal:0,insert:0,delete:0};for(const d of s)if(d==="replace"){const u=c.equal+c.insert,g=c.equal+c.delete,f=t.getChild(u);!f||f.is("uiElement")||f.is("rawElement")||this._updateElementMappings(f,n[g]),vh(o[u]),c.equal++}else c[d]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?at._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&ye(e.parent)&&$e(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!$e(t))throw new A("view-renderer-filler-was-lost",this);bs(t)?t.remove():t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const c=s.findAncestor(d=>d.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const o=t.nodeBefore,r=t.nodeAfter;return!(o instanceof Jt||r instanceof Jt)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t,n.ownerDocument),r=n.data;let s=o.data;const c=e.inlineFillerPosition;if(c&&c.parent==t.parent&&c.offset==t.index&&(s=ks+s),r!=s){const d=wh(r,s);for(const u of d)u.type==="insert"?n.insertData(u.index,u.values.join("")):n.deleteData(u.index,u.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),o=t.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const o=e.inlineFillerPosition,r=this.domConverter.mapViewToDom(t).childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0}));o&&o.parent===t&&Eh(n.ownerDocument,s,o.offset);const c=this._diffNodeLists(r,s);let d=0;const u=new Set;for(const g of c)g==="delete"?(u.add(r[d]),vh(r[d])):g==="equal"&&d++;d=0;for(const g of c)g==="insert"?(_h(n,d,s[d]),d++):g==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[d])),d++);for(const g of u)g.parentNode||this.domConverter.unbindDomElement(g)}_diffNodeLists(t,e){return eo(t=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(t,this._fakeSelectionContainer),e,g0.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let o=[],r=[],s=[];const c={equal:0,insert:0,delete:0};for(const d of t)d==="insert"?s.push(n[c.equal+c.insert]):d==="delete"?r.push(e[c.equal+c.delete]):(o=o.concat(eo(r,s,Dh).map(u=>u==="equal"?"replace":u)),o.push("equal"),r=[],s=[]),c[d]++;return o.concat(eo(r,s,Dh).map(d=>d==="equal"?"replace":d))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(Yt.isBlink&&!Yt.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const c=s.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent="\xA0",c}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=e.getSelection(),r=e.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset),Yt.isGecko&&function(r,s){const c=r.parent;if(c.nodeType!=Node.ELEMENT_NODE||r.offset!=c.childNodes.length-1)return;const d=c.childNodes[r.offset];d&&d.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments)if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Eh(i,t,e){const n=t instanceof Array?t:t.childNodes,o=n[e];if(ye(o))return o.data=ks+o.data,o;{const r=i.createTextNode(ks);return Array.isArray(t)?n.splice(e,0,r):_h(t,e,r),r}}function Dh(i,t){return hi(i)&&hi(t)&&!ye(i)&&!ye(t)&&!ui(i)&&!ui(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function g0(i,t,e){return t===e||(ye(t)&&ye(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}_t(xh,ne);const le={window,document};function vc(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function Mh(i){const t=[];for(;i&&i.nodeType!=Node.DOCUMENT_NODE;)t.unshift(i),i=i.parentNode;return t}const p0=bh(document),f0=mh(document),m0=kh(document),ws="data-ck-unsafe-attribute-",Th="data-ck-unsafe-element",k0=["script","style"];class Cs{constructor(t,e={}){this.document=t,this.renderingMode=e.renderingMode||"editing",this.blockFillerMode=e.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new An,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new fn(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of t.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),c=[];let d;for(;d=s.nextNode();)c.push(d);for(const u of c){for(const f of u.getAttributeNames())this.setDomElementAttribute(u,f,u.getAttribute(f));const g=u.tagName.toLowerCase();this._shouldRenameElement(g)&&(Nh(g),u.replaceWith(this._createReplacementDomElement(g,u)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e,n={}){if(t.is("$text")){const o=this._processDataFromViewText(t);return e.createTextNode(o)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let o;if(t.is("documentFragment"))o=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(o,t);else{if(t.is("uiElement"))return o=t.name==="$comment"?e.createComment(t.getCustomProperty("$rawContent")):t.render(e,this),n.bind&&this.bindElements(o,t),o;this._shouldRenameElement(t.name)?(Nh(t.name),o=this._createReplacementDomElement(t.name)):o=t.hasAttribute("xmlns")?e.createElementNS(t.getAttribute("xmlns"),t.name):e.createElement(t.name),t.is("rawElement")&&t.render(o,this),n.bind&&this.bindElements(o,t);for(const r of t.getAttributeKeys())this.setDomElementAttribute(o,r,t.getAttribute(r),t)}if(n.withChildren!==!1)for(const r of this.viewChildrenToDom(t,e,n))o.appendChild(r);return o}}setDomElementAttribute(t,e,n,o=null){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);r||x("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(ws+e)&&r&&t.removeAttribute(ws+e),t.setAttribute(r?e:ws+e,n)}removeDomElementAttribute(t,e){e!=Th&&(t.removeAttribute(e),t.removeAttribute(ws+e))}*viewChildrenToDom(t,e,n={}){const o=t.getFillerOffset&&t.getFillerOffset();let r=0;for(const s of t.getChildren())o===r&&(yield this._getBlockFiller(e)),yield this.viewToDom(s,e,n),r++;o===r&&(yield this._getBlockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=document.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return $e(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(t.nodeBefore),!o)return null;n=o.parentNode,r=o.nextSibling}return ye(r)&&$e(r)?{parent:r,offset:7}:{parent:n,offset:o?vc(o)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;const n=this.getHostViewElement(t);if(n)return n;if(ui(t)&&e.skipComments)return null;if(ye(t)){if(bs(t))return null;{const o=this._processDataFromDomText(t);return o===""?null:new Jt(this.document,o)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let o;if(this.isDocumentFragment(t))o=new To(this.document),e.bind&&this.bindDocumentFragments(t,o);else{o=this._createViewElement(t,e),e.bind&&this.bindElements(t,o);const r=t.attributes;if(r)for(let s=r.length-1;s>=0;s--)o._setAttribute(r[s].name,r[s].value);if(this._isViewElementWithRawContent(o,e)||ui(t)){const s=ui(t)?t.data:t.innerHTML;return o._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(t),o}}if(e.withChildren!==!1)for(const r of this.domChildrenToView(t,e))o._appendChild(r);return o}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const o=t.childNodes[n],r=this.domToView(o,e);r!==null&&(yield r)}}domSelectionToView(t){if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;ye(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){const r=t.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new fn(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Et(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,vc(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return at._createBefore(n);if(ye(t)){if(bs(t))return this.domPositionToView(t.parentNode,vc(t));const o=this.findCorrespondingViewText(t);let r=e;return o?($e(t)&&(r-=7,r=r<0?0:r),new at(o,r)):null}if(e===0){const o=this.mapDomToView(t);if(o)return new at(o,0)}else{const o=t.childNodes[e-1],r=ye(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new at(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(bs(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof Jt?o.nextSibling:null}else{const o=this.mapDomToView(t.parentNode);if(o){const r=o.getChild(0);return r instanceof Jt?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:o}=le.window,r=[];Sh(e,s=>{const{scrollLeft:c,scrollTop:d}=s;r.push([c,d])}),e.focus(),Sh(e,s=>{const[c,d]=r.shift();s.scrollLeft=c,s.scrollTop=d}),le.window.scrollTo(n,o)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(p0):!(t.tagName!=="BR"||!Ih(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(m0)||function(e,n){return e.isEqualNode(f0)&&Ih(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=Mh(t);for(e.pop();e.length;){const n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(t){switch(this.blockFillerMode){case"nbsp":return mh(t);case"markedNbsp":return kh(t);case"br":return bh(t)}}_isDomSelectionPositionCorrect(t,e){if(ye(t)&&$e(t)&&e<7||this.isElement(t)&&$e(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(u,g){return Mh(u).some(f=>f.tagName&&g.includes(f.tagName.toLowerCase()))}(t,this.preElements))return _c(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),r=this._checkShouldLeftTrimDomText(t,n),s=this._checkShouldRightTrimDomText(t,o);r&&(e=e.replace(/^ /,"")),s&&(e=e.replace(/ $/,"")),e=_c(new Text(e)),e=e.replace(/ \u00A0/g,"  ");const c=o&&this.isElement(o)&&o.tagName!="BR",d=o&&ye(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!o||c||d)&&(e=e.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!$e(t)}_getTouchingInlineViewNode(t,e){const n=new Do({startPosition:e?at._createAfter(t):at._createBefore(t),direction:e?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"firstChild":"lastChild",o=e?"nextSibling":"previousSibling";let r=!0;do if(!r&&t[n]?t=t[n]:t[o]?(t=t[o],r=!1):(t=t.parentNode,r=!0),!t||this._isBlockElement(t))return null;while(!ye(t)&&t.tagName!="BR"&&!this._isInlineObjectElement(t));return t}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(ui(t))return new bc(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new sn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&k0.includes(e)}_createReplacementDomElement(t,e=null){const n=document.createElement("span");if(n.setAttribute(Th,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function Sh(i,t){for(;i&&i!=le.document;)t(i),i=i.parentNode}function Ih(i,t){const e=i.parentNode;return e&&e.tagName&&t.includes(e.tagName.toLowerCase())}function Nh(i){i==="script"&&x("domconverter-unsafe-script-element-detected"),i==="style"&&x("domconverter-unsafe-style-element-detected")}function As(i){const t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}const b0=Xi({},V,{listenTo(i,t,e,n={}){if(hi(i)||As(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},r=this._getProxyEmitter(i,o)||new Bh(i,o);this.listenTo(r,t,e,n)}else V.listenTo.call(this,i,t,e,n)},stopListening(i,t,e){if(hi(i)||As(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,t,e)}else V.stopListening.call(this,i,t,e)},_getProxyEmitter(i,t){return e=this,n=Ph(i,t),e[O]&&e[O][n]?e[O][n].emitter:null;var e,n},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(i,t)).filter(t=>!!t)}}),gi=b0;class Bh{constructor(t,e){st(this,Ph(t,e)),this._domNode=t,this._options=e}}function Ph(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=y())}(i);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}Xi(Bh.prototype,V,{attach(i){if(this._domListeners&&this._domListeners[i])return;const t=this._createDomListener(i);this._domNode.addEventListener(i,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[i]=t},detach(i){let t;!this._domListeners[i]||(t=this._events[i])&&t.callbacks.length||this._domListeners[i].removeListener()},_addEventListener(i,t,e){this.attach(i),V._addEventListener.call(this,i,t,e)},_removeEventListener(i,t){V._removeEventListener.call(this,i,t),this.detach(i)},_createDomListener(i){const t=e=>{this.fire(i,e)};return t.removeListener=()=>{this._domNode.removeEventListener(i,t,this._options),delete this._domListeners[i]},t}});class On{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}_t(On,gi);const w0=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},C0=function(i){return this.__data__.has(i)};function _s(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new ls;++t<e;)this.add(i[t])}_s.prototype.add=_s.prototype.push=w0,_s.prototype.has=C0;const A0=_s,_0=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},v0=function(i,t){return i.has(t)},zh=function(i,t,e,n,o,r){var s=1&e,c=i.length,d=t.length;if(c!=d&&!(s&&d>c))return!1;var u=r.get(i),g=r.get(t);if(u&&g)return u==t&&g==i;var f=-1,b=!0,v=2&e?new A0:void 0;for(r.set(i,t),r.set(t,i);++f<c;){var D=i[f],M=t[f];if(n)var T=s?n(M,D,f,t,i,r):n(D,M,f,i,t,r);if(T!==void 0){if(T)continue;b=!1;break}if(v){if(!_0(t,function(N,R){if(!v0(v,R)&&(D===N||o(D,N,e,n,r)))return v.push(R)})){b=!1;break}}else if(D!==M&&!o(D,M,e,n,r)){b=!1;break}}return r.delete(i),r.delete(t),b},y0=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},x0=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var Rh=It?It.prototype:void 0,yc=Rh?Rh.valueOf:void 0;const E0=function(i,t,e,n,o,r,s){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!r(new ds(i),new ds(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return kt(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var c=y0;case"[object Set]":var d=1&n;if(c||(c=x0),i.size!=t.size&&!d)return!1;var u=s.get(i);if(u)return u==t;n|=2,s.set(i,t);var g=zh(c(i),c(t),n,o,r,s);return s.delete(i),g;case"[object Symbol]":if(yc)return yc.call(i)==yc.call(t)}return!1};var D0=Object.prototype.hasOwnProperty;const M0=function(i,t,e,n,o,r){var s=1&e,c=Ka(i),d=c.length;if(d!=Ka(t).length&&!s)return!1;for(var u=d;u--;){var g=c[u];if(!(s?g in t:D0.call(t,g)))return!1}var f=r.get(i),b=r.get(t);if(f&&b)return f==t&&b==i;var v=!0;r.set(i,t),r.set(t,i);for(var D=s;++u<d;){var M=i[g=c[u]],T=t[g];if(n)var N=s?n(T,M,g,t,i,r):n(M,T,g,i,t,r);if(!(N===void 0?M===T||o(M,T,e,n,r):N)){v=!1;break}D||(D=g=="constructor")}if(v&&!D){var R=i.constructor,q=t.constructor;R==q||!("constructor"in i)||!("constructor"in t)||typeof R=="function"&&R instanceof R&&typeof q=="function"&&q instanceof q||(v=!1)}return r.delete(i),r.delete(t),v};var Lh="[object Arguments]",Oh="[object Array]",vs="[object Object]",jh=Object.prototype.hasOwnProperty;const T0=function(i,t,e,n,o,r){var s=Be(i),c=Be(t),d=s?Oh:or(i),u=c?Oh:or(t),g=(d=d==Lh?vs:d)==vs,f=(u=u==Lh?vs:u)==vs,b=d==u;if(b&&Zi(i)){if(!Zi(t))return!1;s=!0,g=!1}if(b&&!g)return r||(r=new nr),s||Ha(i)?zh(i,t,e,n,o,r):E0(i,t,d,e,n,o,r);if(!(1&e)){var v=g&&jh.call(i,"__wrapped__"),D=f&&jh.call(t,"__wrapped__");if(v||D){var M=v?i.value():i,T=D?t.value():t;return r||(r=new nr),o(M,T,e,n,r)}}return!!b&&(r||(r=new nr),M0(i,t,e,n,o,r))},Fh=function i(t,e,n,o,r){return t===e||(t==null||e==null||!nn(t)&&!nn(e)?t!=t&&e!=e:T0(t,e,n,o,i,r))},S0=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?Fh(i,t,void 0,e):!!n};class Vh extends On{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Map,o=new Set;for(const u of t)if(u.type==="childList"){const g=e.mapDomToView(u.target);if(g&&(g.is("uiElement")||g.is("rawElement")))continue;g&&!this._isBogusBrMutation(u)&&o.add(g)}for(const u of t){const g=e.mapDomToView(u.target);if((!g||!g.is("uiElement")&&!g.is("rawElement"))&&u.type==="characterData"){const f=e.findCorrespondingViewText(u.target);f&&!o.has(f.parent)?n.set(f,{type:"text",oldText:f.data,newText:_c(u.target),node:f}):!f&&$e(u.target)&&o.add(e.mapDomToView(u.target.parentNode))}}const r=[];for(const u of n.values())this.renderer.markToSync("text",u.node),r.push(u);for(const u of o){const g=e.mapViewToDom(u),f=Array.from(u.getChildren()),b=Array.from(e.domChildrenToView(g,{withChildren:!1}));S0(f,b,d)||(this.renderer.markToSync("children",u),r.push({type:"children",oldChildren:f,newChildren:b,node:u}))}const s=t[0].target.ownerDocument.getSelection();let c=null;if(s&&s.anchorNode){const u=e.domPositionToView(s.anchorNode,s.anchorOffset),g=e.domPositionToView(s.focusNode,s.focusOffset);u&&g&&(c=new fn(u),c.setFocus(g))}function d(u,g){if(!Array.isArray(u))return u===g||!(!u.is("$text")||!g.is("$text"))&&u.data===g.data}r.length&&(this.document.fire("mutations",r,c),this.view.forceRender())}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class xc{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Xi(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class no extends On{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new xc(this.view,e,n))}}class I0 extends no{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return _n(this)}})}}const Ec=function(){return Ft.Date.now()};var N0=/\s/;const B0=function(i){for(var t=i.length;t--&&N0.test(i.charAt(t)););return t};var P0=/^\s+/;const z0=function(i){return i&&i.slice(0,B0(i)+1).replace(P0,"")};var R0=/^[-+]0x[0-9a-f]+$/i,L0=/^0b[01]+$/i,O0=/^0o[0-7]+$/i,j0=parseInt;const Hh=function(i){if(typeof i=="number")return i;if(us(i))return NaN;if(U(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=U(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=z0(i);var e=L0.test(i);return e||O0.test(i)?j0(i.slice(2),e?2:8):R0.test(i)?NaN:+i};var F0=Math.max,V0=Math.min;const ys=function(i,t,e){var n,o,r,s,c,d,u=0,g=!1,f=!1,b=!0;if(typeof i!="function")throw new TypeError("Expected a function");function v(q){var gt=n,yt=o;return n=o=void 0,u=q,s=i.apply(yt,gt)}function D(q){return u=q,c=setTimeout(T,t),g?v(q):s}function M(q){var gt=q-d;return d===void 0||gt>=t||gt<0||f&&q-u>=r}function T(){var q=Ec();if(M(q))return N(q);c=setTimeout(T,function(gt){var yt=t-(gt-d);return f?V0(yt,r-(gt-u)):yt}(q))}function N(q){return c=void 0,b&&n?v(q):(n=o=void 0,s)}function R(){var q=Ec(),gt=M(q);if(n=arguments,o=this,d=q,gt){if(c===void 0)return D(d);if(f)return clearTimeout(c),c=setTimeout(T,t),v(d)}return c===void 0&&(c=setTimeout(T,t)),s}return t=Hh(t)||0,U(e)&&(g=!!e.leading,r=(f="maxWait"in e)?F0(Hh(e.maxWait)||0,t):r,b="trailing"in e?!!e.trailing:b),R.cancel=function(){c!==void 0&&clearTimeout(c),u=0,n=d=o=c=void 0},R.flush=function(){return c===void 0?s:N(Ec())},R};class H0 extends On{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=ys(e=>this.document.fire("selectionChangeDone",e),200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new fn(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Nt.arrowleft&&t!=Nt.arrowup||n.setTo(n.getFirstPosition()),t!=Nt.arrowright&&t!=Nt.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class U0 extends On{constructor(t){super(t),this.mutationObserver=t.getObserver(Vh),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ys(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ys(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest"}),this.listenTo(t,"keyup",n,{priority:"highest"}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest"}),this.listenTo(e,"selectionchange",(o,r)=>{this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class W0 extends no{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.change(()=>{}),50)}),e.on("blur",(n,o)=>{const r=e.selection.editableElement;r!==null&&r!==o.target||(e.isFocused=!1,t.change(()=>{}))})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class q0 extends no{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class G0 extends no{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}class $0{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function xs(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Uh(i){const t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const Wh=["top","right","bottom","left","width","height"];class qt{constructor(t){const e=xs(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),to(t)||e)if(e){const n=qt.getDomRangeRects(t);Es(this,qt.getBoundingRect(n))}else Es(this,t.getBoundingClientRect());else if(As(t)){const{innerWidth:n,innerHeight:o}=t;Es(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Es(this,t)}clone(){return new qt(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new qt(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!qh(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!qh(n);){const o=new qt(n),r=e.getIntersection(o);if(!r)return null;r.getArea()<e.getArea()&&(e=r),n=n.parentNode}}return e}isEqual(t){for(const e of Wh)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(As(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const r=Uh(this._source);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const o of n)e.push(new qt(o));else{let o=t.startContainer;ye(o)&&(o=o.parentNode);const r=new qt(o.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new qt(e))}}function Es(i,t){for(const e of Wh)i[e]=t[e]}function qh(i){return!!to(i)&&i===i.ownerDocument.body}class ae{constructor(t,e){ae._observerInstance||ae._createObserver(),this._element=t,this._callback=e,ae._addElementCallback(t,e),ae._observerInstance.observe(t)}destroy(){ae._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){ae._elementCallbacks||(ae._elementCallbacks=new Map);let n=ae._elementCallbacks.get(t);n||(n=new Set,ae._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=ae._getElementCallbacks(t);n&&(n.delete(e),n.size||(ae._elementCallbacks.delete(t),ae._observerInstance.unobserve(t))),ae._elementCallbacks&&!ae._elementCallbacks.size&&(ae._observerInstance=null,ae._elementCallbacks=null)}static _getElementCallbacks(t){return ae._elementCallbacks?ae._elementCallbacks.get(t):null}static _createObserver(){let t;t=typeof le.window.ResizeObserver=="function"?le.window.ResizeObserver:Gh,ae._observerInstance=new t(e=>{for(const n of e){const o=ae._getElementCallbacks(n.target);if(o)for(const r of o)r(n)}})}}ae._observerInstance=null,ae._elementCallbacks=null;class Gh{constructor(t){this._callback=t,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(t){this._elements.add(t),this._checkElementRectsAndExecuteCallback(),this._elements.size===1&&this._startPeriodicCheck()}unobserve(t){this._elements.delete(t),this._previousRects.delete(t),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const t=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(t,100)};this.listenTo(le.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(t,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const t=[];for(const e of this._elements)this._hasRectChanged(e)&&t.push({target:e,contentRect:this._previousRects.get(e)});t.length&&this._callback(t)}_hasRectChanged(t){if(!t.ownerDocument.body.contains(t))return!1;const e=new qt(t),n=this._previousRects.get(t),o=!n||!n.isEqual(e);return this._previousRects.set(t,e),o}}function Pe(i){const t=i.next();return t.done?null:t.value}_t(Gh,gi);class an{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new A("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}_t(an,gi),_t(an,ne);class jn{constructor(){this._listener=Object.create(gi)}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+_n(n),n)})}set(t,e,n={}){const o=mc(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,c)=>{e(c,()=>{c.preventDefault(),c.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+_n(t),t)}destroy(){this._listener.stopListening()}}class K0 extends On{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((o=n.keyCode)==Nt.arrowright||o==Nt.arrowleft||o==Nt.arrowup||o==Nt.arrowdown)){const r=new ms(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&e.stop()}var o})}observe(){}}function $h({target:i,viewportOffset:t=0}){const e=Dc(i);let n=e,o=null;for(;n;){let r;r=Xh(n==e?i:o),Kh(r,()=>tg(i,n));const s=tg(i,n);if(Y0(n,s,t),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function Y0(i,t,e){const n=t.clone().moveBy(0,e),o=t.clone().moveBy(0,-e),r=new qt(i).excludeScrollbarsAndBorders();if(![o,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:c}=i;Qh(o,r)?c-=r.top-t.top+e:Yh(n,r)&&(c+=t.bottom-r.bottom+e),Zh(t,r)?s-=r.left-t.left+e:Jh(t,r)&&(s+=t.right-r.right+e),i.scrollTo(s,c)}}function Kh(i,t){const e=Dc(i);let n,o;for(;i!=e.document.body;)o=t(),n=new qt(i).excludeScrollbarsAndBorders(),n.contains(o)||(Qh(o,n)?i.scrollTop-=n.top-o.top:Yh(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Zh(o,n)?i.scrollLeft-=n.left-o.left:Jh(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Yh(i,t){return i.bottom>t.bottom}function Qh(i,t){return i.top<t.top}function Zh(i,t){return i.left<t.left}function Jh(i,t){return i.right>t.right}function Dc(i){return xs(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function Xh(i){if(xs(i)){let t=i.commonAncestorContainer;return ye(t)&&(t=t.parentNode),t}return i.parentNode}function tg(i,t){const e=Dc(i),n=new qt(i);if(e===t)return n;{let o=e;for(;o!=t;){const r=o.frameElement,s=new qt(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}Object.assign({},{scrollViewportToShowTarget:$h,scrollAncestorsToShowTarget:function(i){Kh(Xh(i),()=>new qt(i))}});class eg{constructor(t){this.document=new sr(t),this.domConverter=new Cs(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new xh(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new uh(this.document),this.addObserver(Vh),this.addObserver(U0),this.addObserver(W0),this.addObserver(I0),this.addObserver(H0),this.addObserver(q0),this.addObserver(K0),Yt.isAndroid&&this.addObserver(G0),this.document.on("arrowKey",d0,{priority:"low"}),r0(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const o={};for(const{name:s,value:c}of Array.from(t.attributes))o[s]=c,s==="class"?this._writer.addClass(c.split(" "),n):this._writer.setAttribute(s,c,n);this._initialDomRootAttributes.set(t,o);const r=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(s,c)=>this._renderer.markToSync("children",c)),n.on("change:attributes",(s,c)=>this._renderer.markToSync("attributes",c)),n.on("change:text",(s,c)=>this._renderer.markToSync("text",c)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:o})=>e.removeAttribute(o));const n=this._initialDomRootAttributes.get(e);for(const o in n)e.setAttribute(o,n[o]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,o]of this.domRoots)e.observe(o,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&$h({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new A("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){A.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return at._createAt(t,e)}createPositionAfter(t){return at._createAfter(t)}createPositionBefore(t){return at._createBefore(t)}createRange(t,e){return new Et(t,e)}createRangeOn(t){return Et._createOn(t)}createRangeIn(t){return Et._createIn(t)}createSelection(t,e,n){return new fn(t,e,n)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}_t(eg,ne);class So{constructor(t){this.parent=null,this._attrs=Ln(t)}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new A("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new A("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Se(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}is(t){return t==="node"||t==="model:node"}_clone(){return new So(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Ln(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class Xt extends So{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return t==="$text"||t==="model:$text"||t==="text"||t==="model:text"||t==="node"||t==="model:node"}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new Xt(this.data,this.getAttributes())}static fromJSON(t){return new Xt(t.data,t.attributes)}}class vn{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new A("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new A("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(t){return t==="$textProxy"||t==="model:$textProxy"||t==="textProxy"||t==="model:textProxy"}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class pi{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new A("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new A("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof So))throw new A("model-nodelist-insertnodes-not-node",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class Gt extends So{constructor(t,e,n){super(e),this.name=t,this._children=new pi,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="model:element"):t==="element"||t==="model:element"||t==="node"||t==="model:node"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={includeSelf:!1}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):null;return new Gt(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new Xt(o)]:(on(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new Xt(r):r instanceof vn?new Xt(r.data,r.getAttributes()):r))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(Gt.fromJSON(n)):e.push(Xt.fromJSON(n))}return new Gt(t.name,t.attributes,e)}}class Fn{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new A("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new A("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=Y._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,r;do o=this.position,r=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const o=e.parent,r=cr(e,o),s=r||ng(e,o,r);if(s instanceof Gt)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=s),this.position=e,Io("elementStart",s,t,e,1);if(s instanceof Xt){let c;if(this.singleCharacters)c=1;else{let g=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<g&&(g=this.boundaries.end.offset),c=g-e.offset}const d=e.offset-s.startOffset,u=new vn(s,d,c);return e.offset+=c,this.position=e,Io("text",u,t,e,c)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Io("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const o=e.parent,r=cr(e,o),s=r||og(e,o,r);if(s instanceof Gt)return e.offset--,this.shallow?(this.position=e,Io("elementStart",s,t,e,1)):(e.path.push(s.maxOffset),this.position=e,this._visitedParent=s,this.ignoreElementEnd?this._previous():Io("elementEnd",s,t,e));if(s instanceof Xt){let c;if(this.singleCharacters)c=1;else{let g=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>g&&(g=this.boundaries.start.offset),c=e.offset-g}const d=e.offset-s.startOffset,u=new vn(s,d-c,c);return e.offset-=c,this.position=e,Io("text",u,t,e,c)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,Io("elementStart",n,t,e,1)}}function Io(i,t,e,n,o){return{done:!1,value:{type:i,item:t,previousPosition:e,nextPosition:n,length:o}}}class Y{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new A("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new A("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new A("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new A("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return cr(this,this.parent)}get nodeAfter(){const t=this.parent;return ng(this,t,cr(this,t))}get nodeBefore(){const t=this.parent;return og(this,t,cr(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=Se(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Fn(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=Se(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=Y._createAt(this),n=Y._createAt(t);break;case"after":e=Y._createAt(t),n=Y._createAt(this);break;default:return!1}let o=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==o.maxOffset)return!1;e.path=e.path.slice(0,-1),o=o.parent,e.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(t){return t==="position"||t==="model:position"}hasSameParentAs(t){return this.root!==t.root?!1:Se(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=Y._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?Y._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=Y._createAt(this);if(this.root!=t.root)return n;if(Se(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(Se(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e){const n=Y._createAt(this);if(this.root!=t.root)return n;if(Se(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(Se(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;t.offset<=this.path[o]&&(n.path[o]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return Y._createAt(this);const o=this._getTransformedByDeletion(t,n);return o===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):o._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,o=Y._createAt(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-t.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof Y)return new Y(t.root,t.path,t.stickiness);{const o=t;if(e=="end")e=o.maxOffset;else{if(e=="before")return this._createBefore(o,n);if(e=="after")return this._createAfter(o,n);if(e!==0&&!e)throw new A("model-createpositionat-offset-required",[this,t])}if(!o.is("element")&&!o.is("documentFragment"))throw new A("model-position-parent-incorrect",[this,t]);const r=o.getPath();return r.push(e),new this(o.root,r,n)}}static _createAfter(t,e){if(!t.parent)throw new A("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new A("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new Y(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new A("model-position-fromjson-no-root",e,{rootName:t.root});return new Y(e.getRoot(t.root),t.path,t.stickiness)}}function cr(i,t){const e=t.getChild(t.offsetToIndex(i.offset));return e&&e.is("$text")&&e.startOffset<i.offset?e:null}function ng(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset))}function og(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset)-1)}class W{constructor(t,e=null){this.start=Y._createAt(t),this.end=e?Y._createAt(e):Y._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Fn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Se(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){const e=Y._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return t==="range"||t==="model:range"}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new W(this.start,t.start)),this.containsPosition(t.end)&&e.push(new W(t.end,this.end))):e.push(new W(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new W(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return t.start.isBefore(o)&&(o=t.start),t.end.isAfter(r)&&(r=t.end),new W(o,r)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=Y._createAt(this.start);let o=n.parent;for(;n.path.length>e+1;){const r=o.maxOffset-n.offset;r!==0&&t.push(new W(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&t.push(new W(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new Fn(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Fn(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Fn(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new W(this.start,this.end)]}getTransformedByOperations(t){const e=[new W(this.start,this.end)];for(const n of t)for(let o=0;o<e.length;o++){const r=e[o].getTransformedByOperation(n);e.splice(o,1,...r),o+=r.length-1}for(let n=0;n<e.length;n++){const o=e[n];for(let r=n+1;r<e.length;r++){const s=e[r];(o.containsRange(s)||s.containsRange(o)||o.isEqual(s))&&e.splice(r,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,o=t.howMany,r=t.targetPosition;return this._getTransformedByMove(n,r,o,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new W(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new W(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=Y._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new W(e,n)):new W(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new W(this.start,t),new W(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const o=new W(this.start,this.end);return o.start=o.start._getTransformedByInsertion(t,e),o.end=o.end._getTransformedByInsertion(t,e),[o]}}_getTransformedByMove(t,e,n,o=!1){if(this.isCollapsed){const f=this.start._getTransformedByMove(t,e,n);return[new W(f)]}const r=W._createFromPositionAndShift(t,n),s=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const f=this.start._getTransformedByMove(t,e,n),b=this.end._getTransformedByMove(t,e,n);return[new W(f,b)]}let c;const d=this.getDifference(r);let u=null;const g=this.getIntersection(r);if(d.length==1?u=new W(d[0].start._getTransformedByDeletion(t,n),d[0].end._getTransformedByDeletion(t,n)):d.length==2&&(u=new W(this.start,this.end._getTransformedByDeletion(t,n))),c=u?u._getTransformedByInsertion(s,n,g!==null||o):[],g){const f=new W(g.start._getCombined(r.start,s),g.end._getCombined(r.start,s));c.length==2?c.splice(1,0,f):c.push(f)}return c}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return n==null&&o==null?null:(n==null&&(n=t),o==null&&(o=t),new W(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return new this(Y._createAt(t,0),Y._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(Y._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new A("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=t.indexOf(e),o=new this(e.start,e.end);if(n>0)for(let r=n-1;t[r].end.isEqual(o.start);r++)o.start=Y._createAt(t[r].start);for(let r=n+1;r<t.length&&t[r].start.isEqual(o.end);r++)o.end=Y._createAt(t[r].end);return o}static fromJSON(t,e){return new this(Y.fromJSON(t.start,e),Y.fromJSON(t.end,e))}}class Mc{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new A("mapping-view-position-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=Y._createAt(o,r)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const o of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(o);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const o=this._elementToMarkerNames.get(t)||new Set;o.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,o)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const o=this._elementToMarkerNames.get(t);o&&(o.delete(e),o.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new W(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Et(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const o of e)if(o.is("attributeElement"))for(const r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let o=0;for(let r=0;r<e;r++)o+=this.getModelLength(t.getChild(r));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,o=0,r=0,s=0;if(t.is("$text"))return new at(t,e);for(;r<e;)n=t.getChild(s),o=this.getModelLength(n),r+=o,s++;return r==e?this._moveViewPositionToTextNode(new at(t,s)):this.findPositionIn(n,e-(r-o))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof Jt?new at(e,e.data.length):n instanceof Jt?new at(n,0):t}}_t(Mc,V);class Q0{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=Ds(e),t instanceof vn&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=Ds(e),t instanceof vn&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=Ds(e),t instanceof vn&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const o=n.get(e);return o===void 0?null:o}revert(t,e){e=Ds(e),t instanceof vn&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,o]of this._consumable)for(const[r,s]of o){const c=r.split(":")[0];s&&t==c&&e.push({event:r,item:n.name||n.description})}if(e.length)throw new A("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,o=t.parent,r=Symbol("$textProxy:"+t.data);let s,c;return s=this._textProxyRegistry.get(e),s||(s=new Map,this._textProxyRegistry.set(e,s)),c=s.get(n),c||(c=new Map,s.set(n,c)),c.set(o,r),r}}function Ds(i){const t=i.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?i:t.length>1?t[0]+":"+t[1]:t[0]}class Tc{constructor(t){this._conversionApi=xt({dispatcher:this},t),this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const o=this._createConversionApi(n,t.getRefreshedItems());for(const s of t.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,o);const r=this._reduceChanges(t.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(W._createFromPositionAndShift(s.position,s.length),o):s.type==="reinsert"?this._convertReinsert(W._createFromPositionAndShift(s.position,s.length),o):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,o):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,o);for(const s of o.mapper.flushUnboundMarkerNames()){const c=e.get(s).getRange();this._convertMarkerRemove(s,c,o),this._convertMarkerAdd(s,c,o)}for(const s of t.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(t,e,n,o={}){const r=this._createConversionApi(n,void 0,o);this._convertInsert(t,r);for(const[s,c]of e)this._convertMarkerAdd(s,c,r);r.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const o=Array.from(e.getMarkersAtPosition(t.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,t,o),this.fire("selection",{selection:t},r),t.isCollapsed){for(const s of o){const c=s.getRange();if(!Z0(t.getFirstPosition(),s,r.mapper))continue;const d={item:t,markerName:s.name,markerRange:c};r.consumable.test(t,"addMarker:"+s.name)&&this.fire("addMarker:"+s.name,d,r)}for(const s of t.getAttributeKeys()){const c={item:t,range:t.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:t.getAttribute(s)};r.consumable.test(t,"attribute:"+c.attributeKey)&&this.fire("attribute:"+c.attributeKey+":$text",c,r)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(const o of Array.from(t.getWalker({shallow:!0})).map(ig))this._testAndFire("insert",o,e)}_convertRemove(t,e,n,o){this.fire("remove:"+n,{position:t,length:e},o)}_convertAttribute(t,e,n,o,r){this._addConsumablesForRange(r.consumable,t,`attribute:${e}`);for(const s of t){const c={item:s.item,range:W._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,c,r)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const o of n.map(ig))this._testAndFire("insert",Fo(xt({},o),{reconversion:!0}),e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const o="addMarker:"+t;if(n.consumable.add(e,o),this.fire(o,{markerName:t,markerRange:e},n),n.consumable.consume(e,o)){this._addConsumablesForRange(n.consumable,e,o);for(const r of e.getItems()){if(!n.consumable.test(r,o))continue;const s={item:r,range:W._createOn(r),markerName:t,markerRange:e};this.fire(o,s,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire("removeMarker:"+t,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const o=n.item;if(t.test(o,"insert")===null){t.add(o,"insert");for(const r of o.getAttributeKeys())t.add(o,"attribute:"+r)}}return t}_addConsumablesForRange(t,e,n){for(const o of e.getItems())t.add(o,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const o of n)t.add(e,"addMarker:"+o.name);for(const o of e.getAttributeKeys())t.add(e,"attribute:"+o);return t}_testAndFire(t,e,n){const o=function(d,u){const g=u.item.name||"$text";return`${d}:${g}`}(t,e),r=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,s=this._firedEventsMap.get(n),c=s.get(r);if(c){if(c.has(o))return;c.add(o)}else s.set(r,new Set([o]));this.fire(o,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:W._createOn(t)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,e)}_createConversionApi(t,e=new Set,n={}){const o=Fo(xt({},this._conversionApi),{consumable:new Q0,writer:t,options:n,convertItem:r=>this._convertInsert(W._createOn(r),o),convertChildren:r=>this._convertInsert(W._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!e.has(o.mapper.toModelElement(r))});return this._firedEventsMap.set(o,new Map),o}}function Z0(i,t,e){const n=t.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!e.toViewElement(r).getCustomProperty("addHighlight")})}function ig(i){return{item:i.item,range:W._createFromPositionAndShift(i.previousPosition,i.length)}}_t(Tc,V);class Vn{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new W(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new W(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new W(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(t===null)this._setRanges([]);else if(t instanceof Vn)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof W)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof Y)this._setRanges([new W(t)]);else if(t instanceof So){const o=!!n&&!!n.backward;let r;if(e=="in")r=W._createIn(t);else if(e=="on")r=W._createOn(t);else{if(e===void 0)throw new A("model-selection-setto-required-second-parameter",[this,t]);r=new W(Y._createAt(t,e))}this._setRanges([r],o)}else{if(!on(t))throw new A("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(o=>{if(!(o instanceof W))throw new A("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(r=>!r.isEqual(o))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const o of t)this._pushRange(o);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(this.anchor===null)throw new A("model-selection-setfocus-no-ranges",[this,t]);const n=Y._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new W(n,o)),this._lastRangeBackward=!0):(this._pushRange(new W(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(t){return t==="selection"||t==="model:selection"}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=sg(e.start,t);n&&Sc(n,e)&&(yield n);for(const r of e.getWalker()){const s=r.item;r.type=="elementEnd"&&J0(s,t,e)&&(yield s)}const o=sg(e.end,t);o&&!e.end.isTouching(Y._createAt(o,0))&&Sc(o,e)&&(yield o)}}containsEntireContent(t=this.anchor.root){const e=Y._createAt(t,0),n=Y._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new W(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new A("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function rg(i,t){return!t.has(i)&&(t.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function J0(i,t,e){return rg(i,t)&&Sc(i,e)}function sg(i,t){const e=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(s=>!o&&(o=e.isLimit(s),!o&&rg(s,t)));return n.forEach(s=>t.add(s)),r}function Sc(i,t){const e=function(n){const o=n.root.document.model.schema;let r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return e?!t.containsRange(W._createOn(e),!0):!0}_t(Vn,V);class yn extends W{constructor(t,e){super(t,e),X0.call(this)}detach(){this.stopListening()}is(t){return t==="liveRange"||t==="model:liveRange"||t=="range"||t==="model:range"}toRange(){return new W(this.start,this.end)}static fromRange(t){return new yn(t.start,t.end)}}function X0(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&tv.call(this,e)},{priority:"low"})}function tv(i){const t=this.getTransformedByOperation(i),e=W._createFromRanges(t),n=!e.isEqual(this),o=function(s,c){switch(c.type){case"insert":return s.containsPosition(c.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(c.sourcePosition)||s.start.isEqual(c.sourcePosition)||s.containsPosition(c.targetPosition);case"split":return s.containsPosition(c.splitPosition)||s.containsPosition(c.insertionPosition)}return!1}(this,i);let r=null;if(n){e.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);const s=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",s,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}_t(yn,V);const lr="selection:";class mn{constructor(t){this._selection=new ev(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}is(t){return t==="selection"||t=="model:selection"||t=="documentSelection"||t=="model:documentSelection"}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return lr+t}static _isStoreAttributeKey(t){return t.startsWith(lr)}}_t(mn,V);class ev extends Vn{constructor(t){super(),this.markers=new rn({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new A("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(e,n)=>{(function(o,r){const s=o.document.differ;for(const c of s.getChanges()){if(c.type!="insert")continue;const d=c.position.parent;c.length===d.maxOffset&&o.enqueueChange(r,u=>{const g=Array.from(d.getAttributeKeys()).filter(f=>f.startsWith(lr));for(const f of g)u.removeAttribute(f,d)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this._updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=y();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new A("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=yn.fromRange(t);return e.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(e);this._ranges.splice(s,1),e.detach()}}),e}_updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const o of this._model.markers){const r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=o.getRange();for(const c of this.getRanges())s.containsRange(c,!c.isCollapsed)&&t.push(o)}const n=Array.from(this.markers);for(const o of t)this.markers.has(o)||(this.markers.add(o),e=!0);for(const o of Array.from(this.markers))t.includes(o)||(this.markers.remove(o),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const r=Array.from(this.markers),s=this.markers.has(t);if(e){let c=!1;for(const d of this.getRanges())if(e.containsRange(d,!d.isCollapsed)){c=!0;break}c&&!s?(this.markers.add(t),o=!0):!c&&s&&(this.markers.remove(t),o=!0)}else s&&(this.markers.remove(t),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(t){const e=Ln(this._getSurroundingAttributes()),n=Ln(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(e);const o=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||o.push(r);for(const[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,o]of this.getAttributes())t.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of t)this._setAttribute(n,o,!1)&&e.add(n);return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(lr)&&(yield[e.substr(lr.length),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const o=t.textNode?t.textNode:t.nodeBefore,r=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Ms(o)),n||(n=Ms(r)),!this.isGravityOverridden&&!n){let s=o;for(;s&&!e.isInline(s)&&!n;)s=s.previousSibling,n=Ms(s)}if(!n){let s=r;for(;s&&!e.isInline(s)&&!n;)s=s.nextSibling,n=Ms(s)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const r of o){if(r.item.is("element")&&e.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function Ms(i){return i instanceof vn||i instanceof Xt?i.getAttributes():null}class ag{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}const kn=function(i){return tc(i,5)};class nv extends ag{elementToElement(t){return this.add(function(e){return(e=kn(e)).model=dg(e.model),e.view=dr(e.view,"container"),e.model.attributes.length&&(e.model.children=!0),n=>{n.on("insert:"+e.model.name,function(o,r=iv){return(s,c,d)=>{if(!r(c.item,d.consumable,{preflight:!0}))return;const u=o(c.item,d);if(!u)return;r(c.item,d.consumable);const g=d.mapper.toViewPosition(c.range.start);d.mapper.bindElements(c.item,u),d.writer.insert(g,u),d.convertAttributes(c.item),fg(u,c.item.getChildren(),d,{reconversion:c.reconversion})}}(e.view,pg(e.model)),{priority:e.converterPriority||"normal"}),(e.model.children||e.model.attributes.length)&&n.on("reduceChanges",gg(e.model),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){return(e=kn(e)).model=dg(e.model),e.view=dr(e.view,"container"),e.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(e.model.name,"$text"))throw new A("conversion-element-to-structure-disallowed-text",n,{elementName:e.model.name});var o,r;n.on("insert:"+e.model.name,(o=e.view,r=pg(e.model),(s,c,d)=>{if(!r(c.item,d.consumable,{preflight:!0}))return;const u=new Map;d.writer._registerSlotFactory(function(b,v,D){return(M,T="children")=>{const N=M.createContainerElement("$slot");let R=null;if(T==="children")R=Array.from(b.getChildren());else{if(typeof T!="function")throw new A("conversion-slot-mode-unknown",D.dispatcher,{modeOrFilter:T});R=Array.from(b.getChildren()).filter(q=>T(q))}return v.set(N,R),N}}(c.item,u,d));const g=o(c.item,d);if(d.writer._clearSlotFactory(),!g)return;(function(b,v,D){const M=Array.from(v.values()).flat(),T=new Set(M);if(T.size!=M.length)throw new A("conversion-slot-filter-overlap",D.dispatcher,{element:b});if(T.size!=b.childCount)throw new A("conversion-slot-filter-incomplete",D.dispatcher,{element:b})})(c.item,u,d),r(c.item,d.consumable);const f=d.mapper.toViewPosition(c.range.start);d.mapper.bindElements(c.item,g),d.writer.insert(f,g),d.convertAttributes(c.item),function(b,v,D,M){D.mapper.on("modelToViewPosition",R,{priority:"highest"});let T=null,N=null;for([T,N]of v)fg(b,N,D,M),D.writer.move(D.writer.createRangeIn(T),D.writer.createPositionBefore(T)),D.writer.remove(T);function R(q,gt){const yt=gt.modelPosition.nodeAfter,Qt=N.indexOf(yt);Qt<0||(gt.viewPosition=gt.mapper.findPositionIn(T,Qt))}D.mapper.off("modelToViewPosition",R)}(g,u,d,{reconversion:c.reconversion})}),{priority:e.converterPriority||"normal"}),n.on("reduceChanges",gg(e.model),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=kn(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const r of e.model.values)e.view[r]=dr(e.view[r],"attribute");else e.view=dr(e.view,"attribute");const o=ug(e);return r=>{r.on(n,function(s){return(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const g=s(d.attributeOldValue,u),f=s(d.attributeNewValue,u);if(!g&&!f)return;u.consumable.consume(d.item,c.name);const b=u.writer,v=b.document.selection;if(d.item instanceof Vn||d.item instanceof mn)b.wrap(v.getFirstRange(),f);else{let D=u.mapper.toViewRange(d.range);d.attributeOldValue!==null&&g&&(D=b.unwrap(D,g)),d.attributeNewValue!==null&&f&&b.wrap(D,f)}}}(o),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=kn(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const r of e.model.values)e.view[r]=hg(e.view[r]);else e.view=hg(e.view);const o=ug(e);return r=>{var s;r.on(n,(s=o,(c,d,u)=>{if(!u.consumable.test(d.item,c.name))return;const g=s(d.attributeOldValue,u),f=s(d.attributeNewValue,u);if(!g&&!f)return;u.consumable.consume(d.item,c.name);const b=u.mapper.toViewElement(d.item),v=u.writer;if(!b)throw new A("conversion-attribute-to-attribute-on-text",u.dispatcher,d);if(d.attributeOldValue!==null&&g)if(g.key=="class"){const D=Ce(g.value);for(const M of D)v.removeClass(M,b)}else if(g.key=="style"){const D=Object.keys(g.value);for(const M of D)v.removeStyle(M,b)}else v.removeAttribute(g.key,b);if(d.attributeNewValue!==null&&f)if(f.key=="class"){const D=Ce(f.value);for(const M of D)v.addClass(M,b)}else if(f.key=="style"){const D=Object.keys(f.value);for(const M of D)v.setStyle(M,f.value[M],b)}else v.setAttribute(f.key,f.value,b)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){return(e=kn(e)).view=dr(e.view,"ui"),n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(r,s,c)=>{s.isOpening=!0;const d=o(s,c);s.isOpening=!1;const u=o(s,c);if(!d||!u)return;const g=s.markerRange;if(g.isCollapsed&&!c.consumable.consume(g,r.name))return;for(const v of g)if(!c.consumable.consume(v.item,r.name))return;const f=c.mapper,b=c.writer;b.insert(f.toViewPosition(g.start),d),c.mapper.bindElementToMarker(d,s.markerName),g.isCollapsed||(b.insert(f.toViewPosition(g.end),u),c.mapper.bindElementToMarker(u,s.markerName)),r.stop()}),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,(e.view,(r,s,c)=>{const d=c.mapper.markerNameToElements(s.markerName);if(d){for(const u of d)c.mapper.unbindElementFromMarkerName(u,s.markerName),c.writer.clear(c.writer.createRangeOn(u),u);c.writer.clearClonedElementsGroup(s.markerName),r.stop()}}),{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(r,s,c)=>{if(!s.item||!(s.item instanceof Vn||s.item instanceof mn||s.item.is("$textProxy")))return;const d=Ic(o,s,c);if(!d||!c.consumable.consume(s.item,r.name))return;const u=c.writer,g=cg(u,d),f=u.document.selection;if(s.item instanceof Vn||s.item instanceof mn)u.wrap(f.getFirstRange(),g,f);else{const b=c.mapper.toViewRange(s.range),v=u.wrap(b,g);for(const D of v.getItems())if(D.is("attributeElement")&&D.isSimilar(g)){c.mapper.bindElementToMarker(D,s.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on("addMarker:"+e.model,function(r){return(s,c,d)=>{if(!c.item||!(c.item instanceof Gt))return;const u=Ic(r,c,d);if(!u||!d.consumable.test(c.item,s.name))return;const g=d.mapper.toViewElement(c.item);if(g&&g.getCustomProperty("addHighlight")){d.consumable.consume(c.item,s.name);for(const f of W._createIn(c.item))d.consumable.consume(f.item,s.name);g.getCustomProperty("addHighlight")(g,u,d.writer),d.mapper.bindElementToMarker(g,c.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,function(r){return(s,c,d)=>{if(c.markerRange.isCollapsed)return;const u=Ic(r,c,d);if(!u)return;const g=cg(d.writer,u),f=d.mapper.markerNameToElements(c.markerName);if(f){for(const b of f)d.mapper.unbindElementFromMarkerName(b,c.markerName),b.is("attributeElement")?d.writer.unwrap(d.writer.createRangeOn(b),g):b.getCustomProperty("removeHighlight")(b,u.id,d.writer);d.writer.clearClonedElementsGroup(c.markerName),s.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){const n=(e=kn(e)).model;return e.view||(e.view=o=>({group:n,name:o.substr(e.model.length+1)})),o=>{var r;o.on("addMarker:"+n,(r=e.view,(s,c,d)=>{const u=r(c.markerName,d);if(!u)return;const g=c.markerRange;d.consumable.consume(g,s.name)&&(lg(g,!1,d,c,u),lg(g,!0,d,c,u),s.stop())}),{priority:e.converterPriority||"normal"}),o.on("removeMarker:"+n,function(s){return(c,d,u)=>{const g=s(d.markerName,u);if(!g)return;const f=u.mapper.markerNameToElements(d.markerName);if(f){for(const v of f)u.mapper.unbindElementFromMarkerName(v,d.markerName),v.is("containerElement")?(b(`data-${g.group}-start-before`,v),b(`data-${g.group}-start-after`,v),b(`data-${g.group}-end-before`,v),b(`data-${g.group}-end-after`,v)):u.writer.clear(u.writer.createRangeOn(v),v);u.writer.clearClonedElementsGroup(d.markerName),c.stop()}function b(v,D){if(D.hasAttribute(v)){const M=new Set(D.getAttribute(v).split(","));M.delete(g.name),M.size==0?u.writer.removeAttribute(v,D):u.writer.setAttribute(v,Array.from(M).join(","),D)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}}function cg(i,t){const e=i.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function lg(i,t,e,n,o){const r=t?i.start:i.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,c=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||c){let d,u;t&&s||!t&&!c?(d=s,u=!0):(d=c,u=!1);const g=e.mapper.toViewElement(d);if(g)return void function(f,b,v,D,M,T){const N=`data-${T.group}-${b?"start":"end"}-${v?"before":"after"}`,R=f.hasAttribute(N)?f.getAttribute(N).split(","):[];R.unshift(T.name),D.writer.setAttribute(N,R.join(","),f),D.mapper.bindElementToMarker(f,M.markerName)}(g,t,u,e,n,o)}(function(d,u,g,f,b){const v=`${b.group}-${u?"start":"end"}`,D=b.name?{name:b.name}:null,M=g.writer.createUIElement(v,D);g.writer.insert(d,M),g.mapper.bindElementToMarker(M,f.markerName)})(e.mapper.toViewPosition(r),t,e,n,o)}function dg(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function dr(i,t){return typeof i=="function"?i:(e,n)=>function(o,r,s){typeof o=="string"&&(o={name:o});let c;const d=r.writer,u=Object.assign({},o.attributes);if(s=="container")c=d.createContainerElement(o.name,u);else if(s=="attribute"){const g={priority:o.priority||di.DEFAULT_PRIORITY};c=d.createAttributeElement(o.name,u,g)}else c=d.createUIElement(o.name,u);if(o.styles){const g=Object.keys(o.styles);for(const f of g)d.setStyle(f,o.styles[f],c)}if(o.classes){const g=o.classes;if(typeof g=="string")d.addClass(g,c);else for(const f of g)d.addClass(f,c)}return c}(i,n,t)}function ug(i){return i.model.values?(t,e)=>{const n=i.view[t];return n?n(t,e):null}:i.view}function hg(i){return typeof i=="string"?t=>({key:i,value:t}):typeof i=="object"?i.value?()=>i:t=>({key:i.key,value:t}):i}function Ic(i,t,e){const n=typeof i=="function"?i(t,e):i;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function gg(i){const t=function(e){return(n,o)=>{if(!n.is("element",e.name))return!1;if(o.type=="attribute"){if(e.attributes.includes(o.attributeKey))return!0}else if(e.children)return!0;return!1}}(i);return(e,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.position?r.position.parent:r.range.start.nodeAfter;if(s&&t(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const c=Y._createBefore(s);o.push({type:"remove",name:s.name,position:c,length:1},{type:"reinsert",name:s.name,position:c,length:1})}}else o.push(r)}n.changes=o}}function pg(i){return(t,e,n={})=>{const o=["insert"];for(const r of i.attributes)t.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>e.test(t,r))&&(n.preflight||o.forEach(r=>e.consume(t,r)),!0)}}function fg(i,t,e,n){for(const o of t)ov(i.root,o,e,n)||e.convertItem(o)}function ov(i,t,e,n){const{writer:o,mapper:r}=e;if(!n.reconversion)return!1;const s=r.toViewElement(t);return!(!s||s.root==i)&&!!e.canReuseView(s)&&(o.move(o.createRangeOn(s),r.toViewPosition(Y._createBefore(t))),!0)}function iv(i,t,{preflight:e}={}){return e?t.test(i,"insert"):t.consume(i,"insert")}function mg(i){const{schema:t,document:e}=i.model;for(const n of e.getRootNames()){const o=e.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function kg(i,t,e){const n=e.createContext(i);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function bg(i,t){const e=t.createElement("paragraph");return t.insert(e,i),t.createPositionAt(e,0)}class rv extends ag{elementToElement(t){return this.add(wg(t))}elementToAttribute(t){return this.add(function(e){Cg(e=kn(e));const n=Ag(e,!1),o=Nc(e.view),r=o?"element:"+o:"element";return s=>{s.on(r,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=kn(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let c;return s=="class"||s=="style"?c={[s=="class"?"classes":"styles"]:r.view.value}:c={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(c.name=r.view.name),r.view=c,s}(e)),Cg(e,n);const o=Ag(e,!0);return r=>{r.on("element",o,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){return function(n){const o=n.model;n.model=(r,s)=>{const c=typeof o=="string"?o:o(r,s);return s.writer.createElement("$marker",{"data-name":c})}}(e=kn(e)),wg(e)}(t))}dataToMarker(t){return this.add(function(e){(e=kn(e)).model||(e.model=r=>r?e.view+":"+r:e.view);const n=Bc(_g(e,"start")),o=Bc(_g(e,"end"));return r=>{r.on("element:"+e.view+"-start",n,{priority:e.converterPriority||"normal"}),r.on("element:"+e.view+"-end",o,{priority:e.converterPriority||"normal"});const s=E.get("low"),c=E.get("highest"),d=E.get(e.converterPriority)/c;r.on("element",function(u){return(g,f,b)=>{const v=`data-${u.view}`;function D(M,T){for(const N of T){const R=u.model(N,b),q=b.writer.createElement("$marker",{"data-name":R});b.writer.insert(q,M),f.modelCursor.isEqual(M)?f.modelCursor=f.modelCursor.getShiftedBy(1):f.modelCursor=f.modelCursor._getTransformedByInsertion(M,1),f.modelRange=f.modelRange._getTransformedByInsertion(M,1)[0]}}(b.consumable.test(f.viewItem,{attributes:v+"-end-after"})||b.consumable.test(f.viewItem,{attributes:v+"-start-after"})||b.consumable.test(f.viewItem,{attributes:v+"-end-before"})||b.consumable.test(f.viewItem,{attributes:v+"-start-before"}))&&(f.modelRange||Object.assign(f,b.convertChildren(f.viewItem,f.modelCursor)),b.consumable.consume(f.viewItem,{attributes:v+"-end-after"})&&D(f.modelRange.end,f.viewItem.getAttribute(v+"-end-after").split(",")),b.consumable.consume(f.viewItem,{attributes:v+"-start-after"})&&D(f.modelRange.end,f.viewItem.getAttribute(v+"-start-after").split(",")),b.consumable.consume(f.viewItem,{attributes:v+"-end-before"})&&D(f.modelRange.start,f.viewItem.getAttribute(v+"-end-before").split(",")),b.consumable.consume(f.viewItem,{attributes:v+"-start-before"})&&D(f.modelRange.start,f.viewItem.getAttribute(v+"-start-before").split(",")))}}(e),{priority:s+d})}}(t))}}function wg(i){const t=Bc(i=kn(i)),e=Nc(i.view),n=e?"element:"+e:"element";return o=>{o.on(n,t,{priority:i.converterPriority||"normal"})}}function Nc(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function Bc(i){const t=new An(i.view);return(e,n,o)=>{const r=t.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const c=function(d,u,g){return d instanceof Function?d(u,g):g.writer.createElement(d)}(i.model,n.viewItem,o);c&&o.safeInsert(c,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,c),o.updateConversionResult(c,n))}}function Cg(i,t=null){const e=t===null||(r=>r.getAttribute(t)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?e:i.model.value;i.model={key:n,value:o}}function Ag(i,t){const e=new An(i.view);return(n,o,r)=>{const s=e.match(o.viewItem);if(!s||(function(g,f){const b=typeof g=="function"?g(f):g;return typeof b=="object"&&!Nc(b)?!1:!b.classes&&!b.attributes&&!b.styles}(i.view,o.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(o.viewItem,s.match)))return;const c=i.model.key,d=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(d===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(g,f,b,v){let D=!1;for(const M of Array.from(g.getItems({shallow:b})))v.schema.checkAttribute(M,f.key)&&(D=!0,M.hasAttribute(f.key)||v.writer.setAttribute(f.key,f.value,M));return D}(o.modelRange,{key:c,value:d},t,r)&&r.consumable.consume(o.viewItem,s.match)}}function _g(i,t){const e={};return e.view=i.view+"-"+t,e.model=(n,o)=>{const r=n.getAttribute("name"),s=i.model(r,o);return o.writer.createElement("$marker",{"data-name":s})},e}class vg{constructor(t,e){this.model=t,this.view=new eg(e),this.mapper=new Mc,this.downcastDispatcher=new Tc({mapper:this.mapper,schema:t.schema});const n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(o,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,c){return(d,u)=>{const g=u.newSelection,f=[];for(const v of g.getRanges())f.push(c.toModelRange(v));const b=s.createSelection(f,{backward:g.isBackward});b.isEqual(s.document.selection)||s.change(v=>{v.setSelection(b)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,c,d)=>{if(!d.consumable.consume(c.item,s.name))return;const u=d.writer,g=d.mapper.toViewPosition(c.range.start),f=u.createText(c.item.data);u.insert(g,f)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,c,d)=>{d.convertAttributes(c.item),c.reconversion||!c.item.is("element")||c.item.isEmpty||d.convertChildren(c.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,c,d)=>{const u=d.mapper.toViewPosition(c.position),g=c.position.getShiftedBy(c.length),f=d.mapper.toViewPosition(g,{isPhantom:!0}),b=d.writer.createRange(u,f),v=d.writer.remove(b.getTrimmed());for(const D of d.writer.createRangeIn(v).getItems())d.mapper.unbindViewElement(D,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,c,d)=>{const u=d.writer,g=u.document.selection;for(const f of g.getRanges())f.isCollapsed&&f.end.parent.isAttached()&&d.writer.mergeAttributes(f.start);u.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,c,d)=>{const u=c.selection;if(u.isCollapsed||!d.consumable.consume(u,"selection"))return;const g=[];for(const f of u.getRanges()){const b=d.mapper.toViewRange(f);g.push(b)}d.writer.setSelection(g,{backward:u.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,c,d)=>{const u=c.selection;if(!u.isCollapsed||!d.consumable.consume(u,"selection"))return;const g=d.writer,f=u.getFirstPosition(),b=d.mapper.toViewPosition(f),v=g.breakAttributes(b);g.setSelection(v)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const c=new Q_(this.view.document,s.name);return c.rootName=s.rootName,this.mapper.bindElements(s,c),c})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new A("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}_t(vg,ne);class sv{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new A("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class ur{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new av(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&e.attributes.push(s);const o=t.getClassNames();for(const s of o)e.classes.push(s);const r=t.getStyleNames();for(const s of r)e.styles.push(s);return e}static createFrom(t,e){if(e||(e=new ur(t)),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,ur.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=ur.createFrom(n,e);return e}}class av{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Be(e)?e:[e],o=this._consumables[t];for(const r of n){if(t==="attributes"&&(r==="class"||r==="style"))throw new A("viewconsumable-invalid-attribute",this);if(o.set(r,!0),t==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!0)}}_test(t,e){const n=Be(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){const s=o.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",c=this._test(s,[...this._consumables[s].keys()]);if(c!==!0)return c}return!0}_consume(t,e){const n=Be(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),t=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(t,e){const n=Be(e)?e:[e],o=this._consumables[t];for(const r of n)if(t!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class yg{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new No(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new No(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new A("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new A("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:t.is&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof Y){const n=t.nodeBefore,o=t.nodeAfter;if(!(n instanceof Gt))throw new A("schema-check-merge-no-element-before",this);if(!(o instanceof Gt))throw new A("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;const r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{const r=t(n,o);typeof r=="boolean"&&(e.stop(),e.return=r)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof Y?e=t.parent:e=(t instanceof W?[t]:Array.from(t.getRanges())).reduce((n,o)=>{const r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new Xt("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const o of n)for(const r of o)if(this.checkAttribute(r.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new W(t);let n,o;const r=t.getAncestors().reverse().find(s=>this.isLimit(s))||t.root;e!="both"&&e!="backward"||(n=new Fn({boundaries:W._createIn(r),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(o=new Fn({boundaries:W._createIn(r),startPosition:t}));for(const s of function*(c,d){let u=!1;for(;!u;){if(u=!0,c){const g=c.next();g.done||(u=!1,yield{walker:c,value:g.value})}if(d){const g=d.next();g.done||(u=!1,yield{walker:d,value:g.value})}}}(n,o)){const c=s.walker==n?"elementEnd":"elementStart",d=s.value;if(d.type==c&&this.isObject(d.item))return W._createOn(d.item);if(this.checkChild(d.nextPosition,"$text"))return new W(d.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))xg(this,n,e);else{const o=W._createIn(n).getPositions();for(const r of o)xg(this,r.nodeBefore||r.parent,e)}}createContext(t){return new No(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const o of n)t[o]=cv(e[o],o);for(const o of n)lv(t,o);for(const o of n)dv(t,o);for(const o of n)uv(t,o);for(const o of n)hv(t,o),gv(t,o);for(const o of n)pv(t,o),fv(t,o),mv(t,o);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const o=e.getItem(n);if(t.allowIn.includes(o.name)){if(n==0)return!0;{const r=this.getDefinition(o);return this._checkContextMatch(r,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,o=t.start;for(const r of t.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(W._createIn(r),e)),this.checkAttribute(r,e)||(n.isEqual(o)||(yield new W(n,o)),n=Y._createAfter(r)),o=Y._createAfter(r);n.isEqual(o)||(yield new W(n,o))}}_t(yg,ne);class No{constructor(t){if(t instanceof No)return t;typeof t=="string"?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),this._items=t.map(bv)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new No([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function cv(i,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const r of n){const s=Object.keys(r).filter(c=>c.startsWith("is"));for(const c of s)o[c]=r[c]}}(i,e),Bo(i,e,"allowIn"),Bo(i,e,"allowContentOf"),Bo(i,e,"allowWhere"),Bo(i,e,"allowAttributes"),Bo(i,e,"allowAttributesOf"),Bo(i,e,"allowChildren"),Bo(i,e,"inheritTypesFrom"),function(n,o){for(const r of n){const s=r.inheritAllFrom;s&&(o.allowContentOf.push(s),o.allowWhere.push(s),o.allowAttributesOf.push(s),o.inheritTypesFrom.push(s))}}(i,e),e}function lv(i,t){const e=i[t];for(const n of e.allowChildren){const o=i[n];o&&o.allowIn.push(t)}e.allowChildren.length=0}function dv(i,t){for(const e of i[t].allowContentOf)i[e]&&kv(i,e).forEach(n=>{n.allowIn.push(t)});delete i[t].allowContentOf}function uv(i,t){for(const e of i[t].allowWhere){const n=i[e];if(n){const o=n.allowIn;i[t].allowIn.push(...o)}}delete i[t].allowWhere}function hv(i,t){for(const e of i[t].allowAttributesOf){const n=i[e];if(n){const o=n.allowAttributes;i[t].allowAttributes.push(...o)}}delete i[t].allowAttributesOf}function gv(i,t){const e=i[t];for(const n of e.inheritTypesFrom){const o=i[n];if(o){const r=Object.keys(o).filter(s=>s.startsWith("is"));for(const s of r)s in e||(e[s]=o[s])}}delete e.inheritTypesFrom}function pv(i,t){const e=i[t],n=e.allowIn.filter(o=>i[o]);e.allowIn=Array.from(new Set(n))}function fv(i,t){const e=i[t];for(const n of e.allowIn)i[n].allowChildren.push(t)}function mv(i,t){const e=i[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function Bo(i,t,e){for(const n of i)typeof n[e]=="string"?t[e].push(n[e]):Array.isArray(n[e])&&t[e].push(...n[e])}function kv(i,t){const e=i[t];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(e.name));var n}function bv(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:t=>i.getAttribute(t)}}function xg(i,t,e){for(const n of t.getAttributeKeys())i.checkAttribute(t,n)||e.removeAttribute(n,t)}class Eg{constructor(t={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(s,c){let d;for(const u of new No(s)){const g={};for(const b of u.getAttributeKeys())g[b]=u.getAttribute(b);const f=c.createElement(u.name,g);d&&c.append(f,d),d=Y._createAt(f,0)}return d}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=ur.createFrom(t),this.conversionApi.store={};const{modelRange:o}=this._convertItem(t,this._modelCursor),r=e.createDocumentFragment();if(o){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))e.append(s,r);r.markers=function(s,c){const d=new Set,u=new Map,g=W._createIn(s).getItems();for(const f of g)f.name=="$marker"&&d.add(f);for(const f of d){const b=f.getAttribute("data-name"),v=c.createPositionBefore(f);u.has(b)?u.get(b).end=v.clone():u.set(b,new W(v.clone())),c.remove(f)}return u}(r,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof W))throw new A("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:Y._createAt(e,0);const o=new W(n);for(const r of Array.from(t.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof W&&(o.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),o=this.conversionApi.writer;e.modelRange||(e.modelRange=o.createRange(o.createPositionBefore(t),o.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(t);e.modelCursor=r?o.createPositionAt(r,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:o}=this.conversionApi;let r=n.findAllowedParent(e,t);if(r){if(r===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return kg(e,t,n)?{position:bg(e,o)}:null;const s=this.conversionApi.writer.split(e,r),c=[];for(const u of s.range.getWalker())if(u.type=="elementEnd")c.push(u.item);else{const g=c.pop(),f=u.item;this._registerSplitPair(g,f)}const d=s.range.end.parent;return this._cursorParents.set(t,d),{position:s.position,cursorParent:d}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}_t(Eg,V);class wv{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class Cv{constructor(t){this.domParser=new DOMParser,this.domConverter=new Cs(t,{renderingMode:"data"}),this.htmlWriter=new wv}toData(t){const e=this.domConverter.viewToDom(t,document);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e)}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class Dg{constructor(t,e){this.model=t,this.mapper=new Mc,this.downcastDispatcher=new Tc({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;const s=r.writer,c=r.mapper.toViewPosition(o.range.start),d=s.createText(o.item.data);s.insert(c,d)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Eg({schema:t.schema}),this.viewDocument=new sr(e),this.stylesProcessor=e,this.htmlProcessor=new Cv(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new uh(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:s,writer:c})=>{let d=o.modelCursor;if(!s.test(o.viewItem))return;if(!r.checkChild(d,"$text")){if(!kg(d,"$text",r))return;d=bg(d,c)}s.consume(o.viewItem);const u=c.createText(o.viewItem.data);c.insert(u,d),o.modelRange=c.createRange(d,d.getShiftedBy(u.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:c}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=c}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:c}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=c}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},mg)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new A("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const r=W._createIn(t),s=new To(n);this.mapper.bindElements(t,s);const c=t.is("documentFragment")?t.markers:function(d){const u=[],g=d.root.document;if(!g)return new Map;const f=W._createIn(d);for(const b of g.model.markers){const v=b.getRange(),D=v.isCollapsed,M=v.start.isEqual(f.start)||v.end.isEqual(f.end);if(D&&M)u.push([b.name,v]);else{const T=f.getIntersection(v);T&&u.push([b.name,T])}}return u.sort(([b,v],[D,M])=>{if(v.end.compareWith(M.start)!=="after")return 1;if(v.start.compareWith(M.end)!=="before")return-1;switch(v.start.compareWith(M.start)){case"before":return 1;case"after":return-1;default:switch(v.end.compareWith(M.end)){case"before":return 1;case"after":return-1;default:return D.localeCompare(b)}}}),new Map(u)}(t);return this.downcastDispatcher.convert(r,c,o,e),s}init(t){if(this.model.document.version)throw new A("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new A("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(e)){const r=this.model.document.getRoot(o);n.insert(this.parse(e[o],r),r,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new A("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);o.remove(o.createRangeIn(s)),o.insert(this.parse(n[r],s),s,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}_t(Dg,ne);class Av{constructor(t,e){this._helpers=new Map,this._downcast=Ce(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Ce(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new A("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new A("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Pc(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Pc(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Pc(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new A("conversion-group-exists",this);const o=n?new nv(e):new rv(e);this._helpers.set(t,o)}}function*Pc(i){if(i.model.values)for(const t of i.model.values){const e={key:i.model.key,value:t},n=i.view[t],o=i.upcastAlso?i.upcastAlso[t]:void 0;yield*Mg(e,n,o)}else yield*Mg(i.model,i.view,i.upcastAlso)}function*Mg(i,t,e){if(yield{model:i,view:t},e)for(const n of Ce(e))yield{model:i,view:n}}class fi{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},x("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return x("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class cn{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Hn{constructor(t){this.markers=new Map,this._children=new pi,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="model:documentFragment"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(Gt.fromJSON(n)):e.push(Xt.fromJSON(n));return new Hn(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new Xt(o)]:(on(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new Xt(r):r instanceof vn?new Xt(r.data,r.getAttributes()):r))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}}function zc(i,t){const e=(t=Sg(t)).reduce((r,s)=>r+s.offsetSize,0),n=i.parent;pr(i);const o=i.index;return n._insertChild(o,t),gr(n,o+t.length),gr(n,o),new W(i,i.getShiftedBy(e))}function Tg(i){if(!i.isFlat)throw new A("operation-utils-remove-range-not-flat",this);const t=i.start.parent;pr(i.start),pr(i.end);const e=t._removeChildren(i.start.index,i.end.index-i.start.index);return gr(t,i.start.index),e}function hr(i,t){if(!i.isFlat)throw new A("operation-utils-move-range-not-flat",this);const e=Tg(i);return zc(t=t._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),e)}function Sg(i){const t=[];i instanceof Array||(i=[i]);for(let e=0;e<i.length;e++)if(typeof i[e]=="string")t.push(new Xt(i[e]));else if(i[e]instanceof vn)t.push(new Xt(i[e].data,i[e].getAttributes()));else if(i[e]instanceof Hn||i[e]instanceof pi)for(const n of i[e])t.push(n);else i[e]instanceof So&&t.push(i[e]);for(let e=1;e<t.length;e++){const n=t[e],o=t[e-1];n instanceof Xt&&o instanceof Xt&&Ig(n,o)&&(t.splice(e-1,2,new Xt(o.data+n.data,o.getAttributes())),e--)}return t}function gr(i,t){const e=i.getChild(t-1),n=i.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&Ig(e,n)){const o=new Xt(e.data+n.data,e.getAttributes());i._removeChildren(t-1,2),i._insertChild(t-1,o)}}function pr(i){const t=i.textNode,e=i.parent;if(t){const n=i.offset-t.startOffset,o=t.index;e._removeChildren(o,1);const r=new Xt(t.data.substr(0,n),t.getAttributes()),s=new Xt(t.data.substr(n),t.getAttributes());e._insertChild(o,[r,s])}}function Ig(i,t){const e=i.getAttributes(),n=t.getAttributes();for(const o of e){if(o[1]!==t.getAttribute(o[0]))return!1;n.next()}return n.next().done}const Ng=function(i,t){return Fh(i,t)};class fe extends cn{constructor(t,e,n,o,r){super(r),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new fe(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new fe(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new A("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Ng(t.getAttribute(this.key),this.oldValue))throw new A("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new A("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){Ng(this.oldValue,this.newValue)||function(t,e,n){pr(t.start),pr(t.end);for(const o of t.getItems({shallow:!0})){const r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(e,n):r._removeAttribute(e),gr(r.parent,r.index)}gr(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new fe(W.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class _v extends cn{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new A("detach-operation-on-document-node",this)}_execute(){Tg(W._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class $t extends cn{constructor(t,e,n,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new A("move-operation-nodes-do-not-exist",this);if(t===e&&n<o&&o<n+this.howMany)throw new A("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Se(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new A("move-operation-node-into-itself",this)}}_execute(){hr(W._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=Y.fromJSON(t.sourcePosition,e),o=Y.fromJSON(t.targetPosition,e);return new this(n,t.howMany,o,t.baseVersion)}}class Ae extends cn{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new pi(Sg(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new pi([...this.nodes].map(n=>n._clone(!0))),e=new Ae(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new Y(t,[0]);return new $t(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new A("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new pi([...t].map(e=>e._clone(!0))),zc(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const r of t.nodes)r.name?n.push(Gt.fromJSON(r)):n.push(Xt.fromJSON(r));const o=new Ae(Y.fromJSON(t.position,e),n,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class Fe extends cn{constructor(t,e,n,o,r,s){super(s),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Fe(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Fe(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new Fe(t.name,t.oldRange?W.fromJSON(t.oldRange,e):null,t.newRange?W.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class Ve extends cn{constructor(t,e,n,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Ve(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ve(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof Gt))throw new A("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new A("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new Ve(Y.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Un extends cn{constructor(t,e,n,o,r){super(r),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Un(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Un(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new A("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new A("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new A("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new A("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new Un(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class me extends cn{constructor(t,e,n,o,r){super(r),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new Y(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new W(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new Y(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new ie(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new A("merge-operation-source-position-invalid",this);if(!e.parent)throw new A("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new A("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;hr(W._createIn(t),this.targetPosition),hr(W._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=Y.fromJSON(t.sourcePosition,e),o=Y.fromJSON(t.targetPosition,e),r=Y.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,o,r,t.baseVersion)}}class ie extends cn{constructor(t,e,n,o,r){super(r),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new Y(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new W(this.splitPosition,t)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new Y(t,[0]);return new me(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new A("split-operation-position-invalid",this);if(!t.parent)throw new A("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new A("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new A("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)hr(W._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();zc(this.insertionPosition,e)}hr(new W(Y._createAt(t,this.splitPosition.offset),Y._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new Y(t.root,e,"toPrevious")}static fromJSON(t,e){const n=Y.fromJSON(t.splitPosition,e),o=Y.fromJSON(t.insertionPosition,e),r=t.graveyardPosition?Y.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,o,r,t.baseVersion)}}class Rc extends Gt{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}is(t,e){return e?e===this.name&&(t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"):t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"||t==="node"||t==="model:node"}toJSON(){return this.rootName}}class vv{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new Xt(t,e)}createElement(t,e){return new Gt(t,e)}createDocumentFragment(){return new Hn}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof Xt&&t.data=="")return;const o=Y._createAt(e,n);if(t.parent){if(zg(t.root,o.root))return void this.move(W._createOn(t),o);if(t.root.document)throw new A("model-writer-insert-forbidden-move",this);this.remove(t)}const r=o.root.document?o.root.document.version:null,s=new Ae(o,t,r);if(t instanceof Xt&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),t instanceof Hn)for(const[c,d]of t.markers){const u=Y._createAt(d.root,0),g={range:new W(d.start._getCombined(u,o),d.end._getCombined(u,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(c)?this.updateMarker(c,g):this.addMarker(c,g)}}insertText(t,e,n,o){e instanceof Hn||e instanceof Gt||e instanceof Y?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof Hn||e instanceof Gt||e instanceof Y?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Hn||e instanceof Gt?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Hn||e instanceof Gt?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof W){const o=n.getMinimalFlatRanges();for(const r of o)Bg(this,t,e,r)}else Pg(this,t,e,n)}setAttributes(t,e){for(const[n,o]of Ln(t))this.setAttribute(n,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof W){const n=e.getMinimalFlatRanges();for(const o of n)Bg(this,t,null,o)}else Pg(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(t instanceof W)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof W))throw new A("writer-move-invalid-range",this);if(!t.isFlat)throw new A("writer-move-range-not-flat",this);const o=Y._createAt(e,n);if(o.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!zg(t.root,o.root))throw new A("writer-move-different-document",this);const r=t.root.document?t.root.document.version:null,s=new $t(t.start,t.end.offset-t.start.offset,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof W?t:W._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),yv(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof Gt))throw new A("writer-merge-no-element-before",this);if(!(n instanceof Gt))throw new A("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(W._createIn(n),Y._createAt(e,"end")),this.remove(n)}_merge(t){const e=Y._createAt(t.nodeBefore,"end"),n=Y._createAt(t.nodeAfter,0),o=t.root.document.graveyard,r=new Y(o,[0]),s=t.root.document.version,c=new me(n,t.nodeAfter.maxOffset,e,r,s);this.batch.addOperation(c),this.model.applyOperation(c)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof Gt))throw new A("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,o=new Ve(Y._createBefore(t),t.name,e,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let n,o,r=t.parent;if(!r.parent)throw new A("writer-split-element-no-parent",this);if(e||(e=r.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new A("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,c=r.maxOffset-t.offset,d=ie.getInsertionPosition(t),u=new ie(t,c,d,null,s);this.batch.addOperation(u),this.model.applyOperation(u),n||o||(n=r,o=t.parent.nextSibling),r=(t=this.createPositionAfter(t.parent)).parent}while(r!==e);return{position:t,range:new W(Y._createAt(n,"end"),Y._createAt(o,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new A("writer-wrap-range-not-flat",this);const n=e instanceof Gt?e:new Gt(e);if(n.childCount>0)throw new A("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new A("writer-wrap-element-attached",this);this.insert(n,t.start);const o=new W(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(o,Y._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new A("writer-unwrap-element-no-parent",this);this.move(W._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new A("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,o=e.range,r=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new A("writer-addmarker-marker-exists",this);if(!o)throw new A("writer-addmarker-no-range",this);return n?(fr(this,t,null,o,r),this.model.markers.get(t)):this.model.markers._set(t,o,n,r)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,o=this.model.markers.get(n);if(!o)throw new A("writer-updatemarker-marker-not-exists",this);if(!e)return x("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const r=typeof e.usingOperation=="boolean",s=typeof e.affectsData=="boolean",c=s?e.affectsData:o.affectsData;if(!r&&!e.range&&!s)throw new A("writer-updatemarker-wrong-options",this);const d=o.getRange(),u=e.range?e.range:d;r&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?fr(this,n,null,u,c):(fr(this,n,d,null,c),this.model.markers._set(n,u,void 0,c)):o.managedUsingOperations?fr(this,n,d,u,c):this.model.markers._set(n,u,void 0,c)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new A("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);fr(this,e,n.getRange(),null,n.affectsData)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,o]of Ln(t))this._setSelectionAttribute(n,o)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=mn._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=mn._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new A("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let r=!1;if(t==="move")r=e.containsPosition(o.start)||e.start.isEqual(o.start)||e.containsPosition(o.end)||e.end.isEqual(o.end);else{const s=e.nodeBefore,c=e.nodeAfter,d=o.start.parent==s&&o.start.isAtEnd,u=o.end.parent==c&&o.end.offset==0,g=o.end.nodeAfter==c,f=o.start.nodeAfter==c;r=d||u||g||f}r&&this.updateMarker(n.name,{range:o})}}}function Bg(i,t,e,n){const o=i.model,r=o.document;let s,c,d,u=n.start;for(const f of n.getWalker({shallow:!0}))d=f.item.getAttribute(t),s&&c!=d&&(c!=e&&g(),u=s),s=f.nextPosition,c=d;function g(){const f=new W(u,s),b=f.root.document?r.version:null,v=new fe(f,t,c,e,b);i.batch.addOperation(v),o.applyOperation(v)}s instanceof Y&&s!=u&&c!=e&&g()}function Pg(i,t,e,n){const o=i.model,r=o.document,s=n.getAttribute(t);let c,d;if(s!=e){if(n.root===n){const u=n.document?r.version:null;d=new Un(n,t,s,e,u)}else{c=new W(Y._createBefore(n),i.createPositionAfter(n));const u=c.root.document?r.version:null;d=new fe(c,t,s,e,u)}i.batch.addOperation(d),o.applyOperation(d)}}function fr(i,t,e,n,o){const r=i.model,s=r.document,c=new Fe(t,e,n,r.markers,o,s.version);i.batch.addOperation(c),r.applyOperation(c)}function yv(i,t,e,n){let o;if(i.root.document){const r=n.document,s=new Y(r.graveyard,[0]);o=new $t(i,t,s,r.version)}else o=new _v(i,t);e.addOperation(o),n.applyOperation(o)}function zg(i,t){return i===t||i instanceof Rc&&t instanceof Rc}class xv{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=W._createFromPositionAndShift(t.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const o=t.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){const o=this._changedMarkers.get(t);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{newMarkerData:n,oldMarkerData:e})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData)return!(t.range&&e.range&&t.range.isEqual(e.range))}return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((g,f)=>g.offset===f.offset?g.type!=f.type?g.type=="remove"?-1:1:0:g.offset<f.offset?-1:1),r=this._elementSnapshots.get(n),s=Rg(n.getChildren()),c=Ev(r.length,o);let d=0,u=0;for(const g of c)if(g==="i")e.push(this._getInsertDiff(n,d,s[d].name)),d++;else if(g==="r")e.push(this._getRemoveDiff(n,d,r[u].name)),u++;else if(g==="a"){const f=s[d].attributes,b=r[u].attributes;let v;if(s[d].name=="$text")v=new W(Y._createAt(n,d),Y._createAt(n,d+1));else{const D=n.offsetToIndex(d);v=new W(Y._createAt(n,d),Y._createAt(n.getChild(D),0))}e.push(...this._getAttributesDiff(v,b,f)),d++,u++}else d++,u++}e.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<e.length;n++){const r=e[o],s=e[n],c=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),d=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,u=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;c||d||u?(r.length++,u&&(r.range.end=r.range.end.getShiftedBy(1)),e[n]=null):o=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(Dv),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=W._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(t,e,n){const o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){const o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,Rg(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const o=t.offset+t.howMany,r=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<r&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<r){const s=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:s-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=t.howMany;else if(o<=r)if(t.offset<n.offset){const s=o-n.offset;n.offset=t.offset,n.howMany-=s,t.nodesToHandle-=s}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<r){const s=r-t.offset;n.howMany-=s,t.nodesToHandle-=s}}if(n.type=="remove"&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const s=o-n.offset;n.offset=t.offset,n.howMany-=s}else if(t.offset<r)if(o<=r){const s=n.howMany;n.howMany=t.offset-n.offset;const c=s-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:c,count:this._changeCount++})}else n.howMany-=r-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&o>n.offset){if(o>r){const s={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(s,e),e.push(s)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<r&&(o>r?(t.nodesToHandle=o-r,t.offset=r):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&o>n.offset){const s={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(s,e),e.push(s),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&o<=r?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=r&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:Y._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:Y._createAt(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const o=[];n=new Map(n);for(const[r,s]of e){const c=n.has(r)?n.get(r):null;c!==s&&o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:c,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return o}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),o=t.startOffset;if(n){for(const r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const o=new W(Y._createAt(t,e),Y._createAt(t,e+n));for(const r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function Rg(i){const t=[];for(const e of i)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function Ev(i,t){const e=[];let n=0,o=0;for(const r of t){if(r.offset>n){for(let s=0;s<r.offset-n;s++)e.push("e");o+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)e.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)e.push("r");n=r.offset,o+=r.howMany}else e.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)e.push("e");return e}function Dv(i){const t=i.position&&i.position.root.rootName=="$graveyard",e=i.range&&i.range.root.rootName=="$graveyard";return!t&&!e}class Mv{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set}addOperation(t){this._operations.includes(t)||this._operations.push(t)}getOperations(t=Number.NEGATIVE_INFINITY,e=Number.POSITIVE_INFINITY){const n=[];for(const o of this._operations)o.baseVersion>=t&&o.baseVersion<e&&n.push(o);return n}getOperation(t){for(const e of this._operations)if(e.baseVersion==t)return e}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}}function Lg(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function Og(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const Tv=function(){const i=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return new RegExp(`${i}|${t}(?:\u200D${t})*`,"ug")}();function Sv(i,t){const e=String(i).matchAll(Tv);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}const Lc="$graveyard";class jg{constructor(t){this.model=t,this.version=0,this.history=new Mv(this),this.selection=new mn(this),this.roots=new rn({idProperty:"rootName"}),this.differ=new xv(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Lc),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];if(o.isDocumentOperation&&o.baseVersion!==this.version)throw new A("model-document-applyoperation-wrong-version",this,{operation:o})},{priority:"highest"}),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&(this.version++,this.history.addOperation(o))},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,o,r,s)=>{const c=Fo(xt({},n.getData()),{range:r});this.differ.bufferMarkerChange(n.name,s,c),o===null&&n.on("change",(d,u)=>{const g=n.getData();this.differ.bufferMarkerChange(n.name,Fo(xt({},g),{range:u}),g)})})}get graveyard(){return this.getRoot(Lc)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new A("model-document-createroot-name-exists",this,{name:e});const n=new Rc(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Lc)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=Qu(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,o=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(o)||e.createRange(o)}_validateSelectionRange(t){return Fg(t.start)&&Fg(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function Fg(i){const t=i.textNode;if(t){const e=t.data,n=i.offset-t.startOffset;return!Lg(e,n)&&!Og(e,n)}return!0}_t(jg,V);class Vg{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof mi?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){const r=t instanceof mi?t.name:t;if(r.includes(","))throw new A("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const u=s.getData(),g=s.getRange();let f=!1;return g.isEqual(e)||(s._attachLiveRange(yn.fromRange(e)),f=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,f=!0),typeof o=="boolean"&&o!=s.affectsData&&(s._affectsData=o,f=!0),f&&this.fire("update:"+r,s,g,e,u),s}const c=yn.fromRange(e),d=new mi(r,c,n,o);return this._markers.set(r,d),this.fire("update:"+r,d,null,e,Fo(xt({},d.getData()),{range:null})),d}_remove(t){const e=t instanceof mi?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof mi?t.name:t,n=this._markers.get(e);if(!n)throw new A("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+e,n,o,o,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}_t(Vg,V);class mi{constructor(t,e,n,o){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.toRange()}is(t){return t==="marker"||t==="model:marker"}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}_t(mi,V);class _e extends cn{get type(){return"noop"}clone(){return new _e(this.baseVersion)}getReversed(){return new _e(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const bn={};bn[fe.className]=fe,bn[Ae.className]=Ae,bn[Fe.className]=Fe,bn[$t.className]=$t,bn[_e.className]=_e,bn[cn.className]=cn,bn[Ve.className]=Ve,bn[Un.className]=Un,bn[ie.className]=ie,bn[me.className]=me;class xe extends Y{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new A("model-liveposition-root-not-rootelement",t);Iv.call(this)}detach(){this.stopListening()}is(t){return t==="livePosition"||t==="model:livePosition"||t=="position"||t==="model:position"}toPosition(){return new Y(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function Iv(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&Nv.call(this,e)},{priority:"low"})}function Nv(i){const t=this.getTransformedByOperation(i);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}_t(xe,V);class Bv{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new A("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?W._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new W(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=xe.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new A("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=xe.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=xe.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof Gt)||!this._canMergeLeft(t))return;const e=xe._createBefore(t);e.stickiness="toNext";const n=xe.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=xe._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=xe._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof Gt)||!this._canMergeRight(t))return;const e=xe._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new A("insertcontent-invalid-insertion-position",this);this.position=Y._createAt(e.nodeBefore,"end");const n=xe.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=xe._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=xe._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof Gt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof Gt&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function Pv(i,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(r=>{if(!e.doNotResetEntireContent&&function(d,u){const g=d.getLimitElement(u);if(!u.containsEntireContent(g))return!1;const f=u.getFirstRange();return f.start.parent==f.end.parent?!1:d.checkChild(g,"paragraph")}(o,t))return void function(d,u){const g=d.model.schema.getLimitElement(u);d.remove(d.createRangeIn(g)),Wg(d,d.createPositionAt(g,0),u)}(r,t);const[s,c]=function(d){const u=d.root.document.model,g=d.start;let f=d.end;if(u.hasContent(d,{ignoreMarkers:!0})){const b=function(v){const D=v.parent,M=D.root.document.model.schema,T=D.getAncestors({parentFirst:!0,includeSelf:!0});for(const N of T){if(M.isLimit(N))return null;if(M.isBlock(N))return N}}(f);if(b&&f.isTouching(u.createPositionAt(b,0))){const v=u.createSelection(d);u.modifySelection(v,{direction:"backward"});const D=v.getLastPosition(),M=u.createRange(D,f);u.hasContent(M,{ignoreMarkers:!0})||(f=D)}}return[xe.fromPosition(g,"toPrevious"),xe.fromPosition(f,"toNext")]}(n);s.isTouching(c)||r.remove(r.createRange(s,c)),e.leaveUnmerged||(function(d,u,g){const f=d.model;if(!Oc(d.model.schema,u,g))return;const[b,v]=function(D,M){const T=D.getAncestors(),N=M.getAncestors();let R=0;for(;T[R]&&T[R]==N[R];)R++;return[T[R],N[R]]}(u,g);!b||!v||(!f.hasContent(b,{ignoreMarkers:!0})&&f.hasContent(v,{ignoreMarkers:!0})?Ug(d,u,g,b.parent):Hg(d,u,g,b.parent))}(r,s,c),o.removeDisallowedAttributes(s.parent.getChildren(),r)),qg(r,t,s),!e.doNotAutoparagraph&&function(d,u){const g=d.checkChild(u,"$text"),f=d.checkChild(u,"paragraph");return!g&&f}(o,s)&&Wg(r,s,t),s.detach(),c.detach()})}function Hg(i,t,e,n){const o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(r,t),i.merge(t);e.parent.isEmpty;){const s=e.parent;e=i.createPositionBefore(s),i.remove(s)}Oc(i.model.schema,t,e)&&Hg(i,t,e,n)}}function Ug(i,t,e,n){const o=t.parent,r=e.parent;if(o!=n&&r!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(r)).isEqual(t)||i.insert(o,e);t.parent.isEmpty;){const s=t.parent;t=i.createPositionBefore(s),i.remove(s)}e=i.createPositionBefore(r),function(s,c){const d=c.nodeBefore,u=c.nodeAfter;d.name!=u.name&&s.rename(d,u.name),s.clearAttributes(d),s.setAttributes(Object.fromEntries(u.getAttributes()),d),s.merge(c)}(i,e),Oc(i.model.schema,t,e)&&Ug(i,t,e,n)}}function Oc(i,t,e){const n=t.parent,o=e.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,s,c){const d=new W(r,s);for(const u of d.getWalker())if(c.isLimit(u.item))return!1;return!0}(t,e,i)}function Wg(i,t,e){const n=i.createElement("paragraph");i.insert(n,t),qg(i,e,i.createPositionAt(n,0))}function qg(i,t,e){t instanceof mn?i.setSelection(e):t.setTo(e)}const Gg=' ,.?!:;"-()';function zv(i,t){const{isForward:e,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:s}=i,{type:c,item:d,nextPosition:u}=t;if(c=="text")return i.unit==="word"?function(g,f){let b=g.position.textNode;if(b){let v=g.position.offset-b.startOffset;for(;!Lv(b.data,v,f)&&!Ov(b,v,f);){g.next();const D=f?g.position.nodeAfter:g.position.nodeBefore;if(D&&D.is("$text")){const M=D.data.charAt(f?0:D.data.length-1);Gg.includes(M)||(g.next(),b=g.position.textNode)}v=g.position.offset-b.startOffset}}return g.position}(n,e):function(g,f,b){const v=g.position.textNode;if(v){const D=v.data;let M=g.position.offset-v.startOffset;for(;Lg(D,M)||f=="character"&&Og(D,M)||b&&Sv(D,M);)g.next(),M=g.position.offset-v.startOffset}return g.position}(n,o,s);if(c==(e?"elementStart":"elementEnd")){if(r.isSelectable(d))return Y._createAt(d,e?"after":"before");if(r.checkChild(u,"$text"))return u}else{if(r.isLimit(d))return void n.skip(()=>!0);if(r.checkChild(u,"$text"))return u}}function Rv(i,t){const e=i.root,n=Y._createAt(e,t?"end":0);return t?new W(i,n):new W(n,i)}function Lv(i,t,e){const n=t+(e?0:-1);return Gg.includes(i.charAt(n))}function Ov(i,t,e){return t===(e?i.endOffset:0)}function $g(i,t){const e=[];Array.from(i.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const r=t.createRangeOn(o);o=o.parent,t.remove(r)}})}function jv(i){i.document.registerPostFixer(t=>function(e,n){const o=n.document.selection,r=n.schema,s=[];let c=!1;for(const d of o.getRanges()){const u=Fv(d,r);u&&!u.isEqual(d)?(s.push(u),c=!0):s.push(d)}c&&e.setSelection(function(d){const u=[...d],g=new Set;let f=1;for(;f<u.length;){const b=u[f],v=u.slice(0,f);for(const[D,M]of v.entries())if(!g.has(D)){if(b.isEqual(M))g.add(D);else if(b.isIntersecting(M)){g.add(D),g.add(f);const T=b.getJoined(M);u.push(T)}}f++}return u.filter((b,v)=>!g.has(v))}(s),{backward:o.isBackward})}(t,i))}function Fv(i,t){return i.isCollapsed?function(e,n){const o=e.start,r=n.getNearestSelectionRange(o);if(!r){const c=o.getAncestors().reverse().find(d=>n.isObject(d));return c?W._createOn(c):null}if(!r.isCollapsed)return r;const s=r.start;return o.isEqual(s)?null:new W(s)}(i,t):function(e,n){const{start:o,end:r}=e,s=n.checkChild(o,"$text"),c=n.checkChild(r,"$text"),d=n.getLimitElement(o),u=n.getLimitElement(r);if(d===u){if(s&&c)return null;if(function(b,v,D){const M=b.nodeAfter&&!D.isLimit(b.nodeAfter)||D.checkChild(b,"$text"),T=v.nodeBefore&&!D.isLimit(v.nodeBefore)||D.checkChild(v,"$text");return M||T}(o,r,n)){const b=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),v=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),D=b?b.start:o,M=v?v.end:r;return new W(D,M)}}const g=d&&!d.is("rootElement"),f=u&&!u.is("rootElement");if(g||f){const b=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,v=g&&(!b||!Yg(o.nodeAfter,n)),D=f&&(!b||!Yg(r.nodeBefore,n));let M=o,T=r;return v&&(M=Y._createBefore(Kg(d,n))),D&&(T=Y._createAfter(Kg(u,n))),new W(M,T)}return null}(i,t)}function Kg(i,t){let e=i,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function Yg(i,t){return i&&t.isSelectable(i)}class Qg{constructor(){this.markers=new Vg,this.document=new jg(this),this.schema=new yg,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),jv(this),this.document.registerPostFixer(mg)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new fi,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){A.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new fi):t instanceof fi||(t=new fi(t)):t=new fi,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){A.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(o,r,s,c){return o.change(d=>{let u;u=s?s instanceof Vn||s instanceof mn?s:d.createSelection(s,c):o.document.selection,u.isCollapsed||o.deleteContent(u,{doNotAutoparagraph:!0});const g=new Bv(o,d,u.anchor);let f;f=r.is("documentFragment")?r.getChildren():[r],g.handleNodes(f);const b=g.getSelectionRange();b&&(u instanceof mn?d.setSelection(b):u.setTo(b));const v=g.getAffectedRange()||o.createRange(u.anchor);return g.destroy(),v})}(this,t,e,n)}deleteContent(t,e){Pv(this,t,e)}modifySelection(t,e){(function(n,o,r={}){const s=n.schema,c=r.direction!="backward",d=r.unit?r.unit:"character",u=!!r.treatEmojiAsSingleUnit,g=o.focus,f=new Fn({boundaries:Rv(g,c),singleCharacters:!0,direction:c?"forward":"backward"}),b={walker:f,schema:s,isForward:c,unit:d,treatEmojiAsSingleUnit:u};let v;for(;v=f.next();){if(v.done)return;const D=zv(b,v.value);if(D)return void(o instanceof mn?n.change(M=>{M.setSelectionFocus(D)}):o.setFocus(D))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(o=>{const r=o.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const c=s.start.root,d=s.start.getCommonPath(s.end),u=c.getNodeByPath(d);let g;g=s.start.parent==s.end.parent?s:o.createRange(o.createPositionAt(u,s.start.path[d.length]),o.createPositionAt(u,s.end.path[d.length]+1));const f=g.end.offset-g.start.offset;for(const b of g.getItems({shallow:!0}))b.is("$textProxy")?o.appendText(b.data,b.getAttributes(),r):o.append(o.cloneElement(b,!0),r);if(g!=s){const b=s._getTransformedByMove(g.start,o.createPositionAt(r,0),f)[0],v=o.createRange(o.createPositionAt(r,0),b.start);$g(o.createRange(b.end,o.createPositionAt(r,"end")),o),$g(v,o)}return r})}(this,t)}hasContent(t,e={}){const n=t instanceof Gt?W._createIn(t):t;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=e;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!o||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new Y(t,e,n)}createPositionAt(t,e){return Y._createAt(t,e)}createPositionAfter(t){return Y._createAfter(t)}createPositionBefore(t){return Y._createBefore(t)}createRange(t,e){return new W(t,e)}createRangeIn(t){return W._createIn(t)}createRangeOn(t){return W._createOn(t)}createSelection(t,e,n){return new Vn(t,e,n)}createBatch(t){return new fi(t)}createOperationFromJSON(t){return class{static fromJSON(e,n){return bn[e.__className].fromJSON(e,n)}}.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new vv(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}_t(Qg,ne);class Vv extends jn{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const o=e;e=(r,s)=>{this.editor.execute(o),s()}}super.set(t,e,n)}}class Zg{constructor(t={}){const e=t.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=t.context||new E_({language:e}),this._context._addEditor(this,!t.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new $u(t,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new ec(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this.commands=new sv,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Qg;const o=new Y_;this.data=new Dg(this.model,o),this.editing=new vg(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Av([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new Vv(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],o=t.get("extraPlugins")||[],r=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(o),n,r)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...t){try{return this.commands.execute(...t)}catch(e){A.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}_t(Zg,ne);class Hv{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(jc(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new A("componentfactory-item-missing",this,{name:t});return this._components.get(jc(t)).callback(this.editor.locale)}has(t){return this._components.has(jc(t))}}function jc(i){return String(i).toLowerCase()}class Jg{constructor(t){this.editor=t,this.componentFactory=new Hv(t),this.focusTracker=new an,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}_t(Jg,ne);const Uv={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},Wv=Uv,qv={updateSourceElement(){if(!this.sourceElement)throw new A("editor-missing-sourceelement",this);var i,t;i=this.sourceElement,t=this.data.get(),i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}};class Xg extends ir{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new rn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new A("pendingactions-add-invalid-message",this);const e=Object.create(ne);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const tp='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',ln={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:tp};function Fc({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[];for(const c of n)if(c.contains(r.target)||s.includes(c))return;e()})}function Vc(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Hc({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}class Po extends rn{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new A("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const r of t)o.delegate(r).to(e)}),this.on("remove",(n,o)=>{for(const r of t)o.stopDelegating(r,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}var ep=m(4793),Gv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(ep.Z,Gv),ep.Z.locals;class St{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new rn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Ke.bind(this,this)}createCollection(t){const e=new Po(t);return this._viewCollections.add(e),e}registerChild(t){on(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){on(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Ke(t)}extendTemplate(t){Ke.extend(this.template,t)}render(){if(this.isRendered)throw new A("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}_t(St,gi),_t(St,ne);class Ke{constructor(t){Object.assign(this,rp(ip(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new A("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Ss(n)?yield n:Uc(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new $v({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,r)=>new np({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:r})}}static extend(t,e){if(t._isRendered)throw new A("template-extend-render",[this,t]);lp(t,rp(ip(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new A("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),Ts(this.text)?this._bindToObservable({schema:this.text,updater:Kv(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,o,r;if(!this.attributes)return;const s=t.node,c=t.revertData;for(e in this.attributes)if(o=s.getAttribute(e),n=this.attributes[e],c&&(c.attributes[e]=o),r=U(n[0])&&n[0].ns?n[0].ns:null,Ts(n)){const d=r?n[0].value:n;c&&dp(e)&&d.unshift(o),this._bindToObservable({schema:d,updater:Yv(s,e,r),data:t})}else e=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],t):(c&&o&&dp(e)&&n.unshift(o),n=n.map(d=>d&&d.value||d).reduce((d,u)=>d.concat(u),[]).reduce(ap,""),ki(n)||s.setAttributeNS(r,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const r=t[o];Ts(r)?this._bindToObservable({schema:[r],updater:Qv(n,o),data:e}):n.style[o]=r}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let r=0;for(const s of this.children)if(Wc(s)){if(!o){s.setParent(e);for(const c of s)n.appendChild(c.element)}}else if(Ss(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(hi(s))n.appendChild(s);else if(o){const c={children:[],bindings:[],attributes:{}};t.revertData.children.push(c),s._renderNode({node:n.childNodes[r++],isApplying:!0,revertData:c})}else n.appendChild(s.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(o=>{const[r,s]=e.split("@");return o.activateDomEventListener(r,s,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;op(t,e,n);const r=t.filter(s=>!ki(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(t,e,n));o&&o.bindings.push(r)}_revertTemplateFromNode(t,e){for(const n of e.bindings)for(const o of n)o();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const o=e.attributes[n];o===null?t.removeAttribute(n):t.setAttribute(n,o)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}_t(Ke,V);class mr{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>op(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class $v extends mr{activateDomEventListener(t,e,n){const o=(r,s)=>{e&&!s.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class np extends mr{getValue(t){return!ki(super.getValue(t))&&(this.valueIfTrue||!0)}}function Ts(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Ts):i instanceof mr)}function op(i,t,{node:e}){let n=function(o,r){return o.map(s=>s instanceof mr?s.getValue(r):s)}(i,e);n=i.length==1&&i[0]instanceof np?n[0]:n.reduce(ap,""),ki(n)?t.remove():t.set(n)}function Kv(i){return{set(t){i.textContent=t},remove(){i.textContent=""}}}function Yv(i,t,e){return{set(n){i.setAttributeNS(e,t,n)},remove(){i.removeAttributeNS(e,t)}}}function Qv(i,t){return{set(e){i.style[t]=e},remove(){i.style[t]=null}}}function ip(i){return Gu(i,t=>{if(t&&(t instanceof mr||Uc(t)||Ss(t)||Wc(t)))return t})}function rp(i){if(typeof i=="string"?i=function(t){return{text:[t]}}(i):i.text&&function(t){t.text=Ce(t.text)}(i),i.on&&(i.eventListeners=function(t){for(const e in t)sp(t,e);return t}(i.on),delete i.on),!i.text){i.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Ce(e[n].value)),sp(e,n)}(i.attributes);const t=[];if(i.children)if(Wc(i.children))t.push(i.children);else for(const e of i.children)Uc(e)||Ss(e)||hi(e)?t.push(e):t.push(new Ke(e));i.children=t}return i}function sp(i,t){i[t]=Ce(i[t])}function ap(i,t){return ki(t)?i:ki(i)?t:`${i} ${t}`}function cp(i,t){for(const e in t)i[e]?i[e].push(...t[e]):i[e]=t[e]}function lp(i,t){if(t.attributes&&(i.attributes||(i.attributes={}),cp(i.attributes,t.attributes)),t.eventListeners&&(i.eventListeners||(i.eventListeners={}),cp(i.eventListeners,t.eventListeners)),t.text&&i.text.push(...t.text),t.children&&t.children.length){if(i.children.length!=t.children.length)throw new A("ui-template-extend-children-mismatch",i);let e=0;for(const n of t.children)lp(i.children[e++],n)}}function ki(i){return!i&&i!==0}function Ss(i){return i instanceof St}function Uc(i){return i instanceof Ke}function Wc(i){return i instanceof Po}function dp(i){return i=="class"||i=="style"}const up=function(i){return typeof i=="string"||!Be(i)&&nn(i)&&P(i)=="[object String]"};class Zv extends Po{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Ke({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=function(e,n,o={},r=[]){const s=o&&o.xmlns,c=s?e.createElementNS(s,n):e.createElement(n);for(const d in o)c.setAttribute(d,o[d]);!up(r)&&on(r)||(r=[r]);for(let d of r)up(d)&&(d=e.createTextNode(d)),c.appendChild(d);return c}(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var hp=m(6574),Jv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(hp.Z,Jv),hp.Z.locals;class Is extends St{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}var gp=m(3332),Xv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(gp.Z,Xv),gp.Z.locals;class pp extends St{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",n=>"ck-tooltip_"+n),e.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}var fp=m(4906),ty={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(fp.Z,ty),fp.Z.locals;class ce extends St{constructor(t){super(t);const e=this.bindTemplate,n=y();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Is,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",o=>!o),e.if("isVisible","ck-hidden",o=>!o),e.to("isOn",o=>o?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",o=>o||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,o=>!o),"aria-pressed":e.to("isOn",o=>!!this.isToggleable&&String(o))},children:this.children,on:{mousedown:e.to(o=>{o.preventDefault()}),click:e.to(o=>{this.isEnabled?this.fire("execute"):o.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const t=new pp;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new St,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){const t=new St;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>lh(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=lh(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var mp=m(5332),ey={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(mp.Z,ey),mp.Z.locals;class qc extends ce{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new St;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var kp=m(6781),ny={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(kp.Z,ny),kp.Z.locals;const bp='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class wp extends ce{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Is;return t.content=bp,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var Cp=m(7686),oy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Cp.Z,oy),Cp.Z.locals;class Ap extends St{constructor(t){super(t);const e=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new jn,this.focusTracker=new an,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new ce;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new ce,e=t.bindTemplate;return t.icon=bp,t.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.delegate("execute").to(this,"open"),t}}class iy extends St{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var _p=m(5485),ry={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(_p.Z,ry),_p.Z.locals;function vp({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){tt(t)&&(t=t()),tt(n)&&(n=n());const s=function(g){return g&&g.parentNode?g.offsetParent===le.document.body?null:g.offsetParent:null}(i),c=new qt(i);let d;const u={targetRect:new qt(t),elementRect:c,positionedElementAncestor:s};if(n||o){const g=n&&new qt(n).getVisible(),f=o&&function(b){b=Object.assign({top:0,bottom:0,left:0,right:0},b);const v=new qt(le.window);return v.top+=b.top,v.height-=b.top,v.bottom-=b.bottom,v.height-=b.bottom,v}(r);Object.assign(u,{limiterRect:g,viewportRect:f}),d=function(b,v){const{elementRect:D}=v,M=D.getArea(),T=b.map(q=>new Gc(q,v)).filter(q=>!!q.name);let N=0,R=null;for(const q of T){const{_limiterIntersectionArea:gt,_viewportIntersectionArea:yt}=q;if(gt===M)return q;const Qt=yt**2+gt**2;Qt>N&&(N=Qt,R=q)}return R}(e,u)||new Gc(e[0],u)}else d=new Gc(e[0],u);return d}function yp(i){const{scrollX:t,scrollY:e}=le.window;return i.clone().moveBy(t,e)}class Gc{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;const{left:o,top:r,name:s,config:c}=n;Object.assign(this,{name:s,config:c}),this._positioningFunctionCorrdinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get _limiterIntersectionArea(){const t=this._options.limiterRect;if(t){const e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{const n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get _viewportIntersectionArea(){const t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=yp(this._rect),this._options.positionedElementAncestor&&function(t,e){const n=yp(new qt(e)),o=Uh(e);let r=0,s=0;r-=n.left,s-=n.top,r+=e.scrollLeft,s+=e.scrollTop,r-=o.left,s-=o.top,t.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class bi extends St{constructor(t,e,n){super(t);const o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new jn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&(this.panelPosition==="auto"?this.panelView.position=bi._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const t=(e,n)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:t,north:e,southEast:n,southWest:o,northEast:r,northWest:s,southMiddleEast:c,southMiddleWest:d,northMiddleEast:u,northMiddleWest:g}=bi.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,c,d,t,r,s,u,g,e]:[o,n,d,c,t,s,r,g,u,e]}}function xp(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}bi.defaultPanelPositions={south:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),southMiddleEast:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/4,name:"sme"}),southMiddleWest:(i,t)=>({top:i.bottom,left:i.left-3*(t.width-i.width)/4,name:"smw"}),north:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/2,name:"n"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),northMiddleEast:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/4,name:"nme"}),northMiddleWest:(i,t)=>({top:i.top-t.height,left:i.left-3*(t.width-i.width)/4,name:"nmw"})},bi._getOptimalPosition=vp;class wi{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const o of n)t.keystrokeHandler.set(o,(r,s)=>{this[e](),s()})}}get first(){return this.focusables.find($c)||null}get last(){return this.focusables.filter($c).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let o=(e+n+t)%n;do{const r=this.focusables.get(o);if($c(r))return r;o=(o+n+t)%n}while(o!==e);return null}}function $c(i){return!(!i.focus||!xp(i.element))}class Ep extends St{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class sy extends St{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Dp(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var Mp=m(5542),ay={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Mp.Z,ay),Mp.Z.locals;class Kc extends St{constructor(t,e){super(t);const n=this.bindTemplate,o=this.t;this.options=e||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new an,this.keystrokes=new jn,this.set("class"),this.set("isCompact",!1),this.itemsView=new cy(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=t.uiLanguageDirection==="rtl";this._focusCycler=new wi({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var c;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(c=this,c.bindTemplate.to(d=>{d.target===c.element&&d.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new dy(this):new ly(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){const n=Dp(t),o=n.items.filter((s,c,d)=>s==="|"||n.removeItems.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(x("toolbarview-line-break-ignored-when-grouping-items",d),!1):!!e.has(s)||(x("toolbarview-item-unavailable",{name:s}),!1))),r=this._cleanSeparators(o).map(s=>s==="|"?new Ep:s==="-"?new sy:e.create(s));this.items.addMany(r)}_cleanSeparators(t){const e=s=>s!=="-"&&s!=="|",n=t.length,o=t.findIndex(e),r=n-t.slice().reverse().findIndex(e);return t.slice(o,r).filter((s,c,d)=>e(s)?!0:!(c>0&&d[c-1]===s))}}class cy extends St{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class ly{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class dy{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{const o=n.index;for(const r of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(r):this.ungroupedItems.remove(r);for(let r=o;r<o+n.added.length;r++){const s=n.added[r-o];r>this.ungroupedItems.length?this.groupedItems.add(s,r-this.ungroupedItems.length):this.ungroupedItems.add(s,r)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!xp(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new qt(t.lastChild),o=new qt(t);if(!this.cachedPadding){const r=le.window.getComputedStyle(t),s=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return e==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new ae(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Ep),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=zo(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",Np(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:tp}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Tp=m(1046),uy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Tp.Z,uy),Tp.Z.locals;class hy extends St{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new an,this.keystrokes=new jn,this._focusCycler=new wi({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class gy extends St{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class py extends St{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Sp=m(7339),fy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Sp.Z,fy),Sp.Z.locals;var Ip=m(3949),my={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Ip.Z,my),Ip.Z.locals;function zo(i,t=wp){const e=new t(i),n=new iy(i),o=new bi(i,e,n);return e.bind("isEnabled").to(o),e instanceof wp?e.bind("isOn").to(o,"isOpen"):e.arrowView.bind("isOn").to(o,"isOpen"),function(r){(function(s){s.on("render",()=>{Fc({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",c=>{c.source instanceof qc||(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(c,d)=>{s.isOpen&&(s.panelView.focus(),d())}),s.keystrokes.set("arrowup",(c,d)=>{s.isOpen&&(s.panelView.focusLast(),d())})}(r)}(o),o}function Np(i,t){const e=i.locale,n=e.t,o=i.toolbarView=new Kc(e);o.set("ariaLabel",n("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(r=>o.items.add(r)),i.panelView.children.add(o),o.items.delegate("execute").to(i)}function Bp(i,t){const e=i.locale,n=i.listView=new hy(e);n.items.bindTo(t).using(({type:o,model:r})=>{if(o==="separator")return new py(e);if(o==="button"||o==="switchbutton"){const s=new gy(e);let c;return c=o==="button"?new ce(e):new qc(e),c.bind(...Object.keys(r)).to(r),c.delegate("execute").to(s),s.children.add(c),s}}),i.panelView.children.add(n),n.items.delegate("execute").to(i)}var Pp=m(9688),ky={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Pp.Z,ky),Pp.Z.locals;class by extends St{constructor(t){super(t),this.body=new Zv(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var zp=m(3662),wy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(zp.Z,wy),zp.Z.locals;class Rp extends St{constructor(t){super(t),this.set("text"),this.set("for"),this.id=`ck-editor__label_${y()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class Cy extends by{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new Rp;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class Ay extends St{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(o=>{const r=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(r,s,c)=>{c?n(o):e(o)})}(this):e(this)}}class _y extends Ay{constructor(t,e,n){super(t,e,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const t=this._editingView,e=this.t;t.change(n=>{const o=t.document.getRoot(this.name);n.setAttribute("aria-label",e("Rich Text Editor, %0",this.name),o)})}}var Lp=m(8847),vy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Lp.Z,vy),Lp.Z.locals;var Op=m(4879),yy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Op.Z,yy),Op.Z.locals;class xy extends St{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new an,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),inputmode:e.to("inputMode"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}class Ey extends xy{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var jp=m(2577),Dy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(jp.Z,Dy),jp.Z.locals;class Yc extends St{constructor(t,e){super(t);const n=`ck-labeled-field-view-${y()}`,o=`ck-labeled-field-view-status-${y()}`;this.fieldView=e(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,c)=>s||c);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(t){const e=new Rp(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new St(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function Qc(i,t,e){const n=new Ey(i.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class Zc extends ir{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Jc{constructor(t,e){e&&Xi(this,e),t&&this.set(t)}}function Xc(i){return t=>t+i}_t(Jc,ne);var Fp=m(8793),My={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Fp.Z,My),Fp.Z.locals;const Vp=Xc("px"),Hp=le.document.body;class He extends St{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",Vp),left:e.to("left",Vp)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=He.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast,e.viewportStickyNorth],limiter:Hp,fitInViewport:!0},t),o=He._getOptimalPosition(n),r=parseInt(o.left),s=parseInt(o.top),{name:c,config:d={}}=o,{withArrow:u=!0}=d;Object.assign(this,{top:s,left:r,position:c,withArrow:u})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=tl(t.target),n=t.limiter?tl(t.limiter):Hp;this.listenTo(le.document,"scroll",(o,r)=>{const s=r.target,c=e&&s.contains(e),d=n&&s.contains(n);!c&&!d&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(le.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(le.document,"scroll"),this.stopListening(le.window,"resize")}}function tl(i){return to(i)?i:xs(i)?i.commonAncestorContainer:typeof i=="function"?tl(i()):null}He.arrowHorizontalOffset=25,He.arrowVerticalOffset=10,He.stickyVerticalOffset=20,He._getOptimalPosition=vp,He.defaultPositions=function({horizontalOffset:i=He.arrowHorizontalOffset,verticalOffset:t=He.arrowVerticalOffset,stickyVerticalOffset:e=He.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(s,c)=>xt({top:o(s,c),left:s.left-i,name:"arrow_sw"},n&&{config:n}),northWestArrowSouthMiddleWest:(s,c)=>xt({top:o(s,c),left:s.left-.25*c.width-i,name:"arrow_smw"},n&&{config:n}),northWestArrowSouth:(s,c)=>xt({top:o(s,c),left:s.left-c.width/2,name:"arrow_s"},n&&{config:n}),northWestArrowSouthMiddleEast:(s,c)=>xt({top:o(s,c),left:s.left-.75*c.width+i,name:"arrow_sme"},n&&{config:n}),northWestArrowSouthEast:(s,c)=>xt({top:o(s,c),left:s.left-c.width+i,name:"arrow_se"},n&&{config:n}),northArrowSouthWest:(s,c)=>xt({top:o(s,c),left:s.left+s.width/2-i,name:"arrow_sw"},n&&{config:n}),northArrowSouthMiddleWest:(s,c)=>xt({top:o(s,c),left:s.left+s.width/2-.25*c.width-i,name:"arrow_smw"},n&&{config:n}),northArrowSouth:(s,c)=>xt({top:o(s,c),left:s.left+s.width/2-c.width/2,name:"arrow_s"},n&&{config:n}),northArrowSouthMiddleEast:(s,c)=>xt({top:o(s,c),left:s.left+s.width/2-.75*c.width+i,name:"arrow_sme"},n&&{config:n}),northArrowSouthEast:(s,c)=>xt({top:o(s,c),left:s.left+s.width/2-c.width+i,name:"arrow_se"},n&&{config:n}),northEastArrowSouthWest:(s,c)=>xt({top:o(s,c),left:s.right-i,name:"arrow_sw"},n&&{config:n}),northEastArrowSouthMiddleWest:(s,c)=>xt({top:o(s,c),left:s.right-.25*c.width-i,name:"arrow_smw"},n&&{config:n}),northEastArrowSouth:(s,c)=>xt({top:o(s,c),left:s.right-c.width/2,name:"arrow_s"},n&&{config:n}),northEastArrowSouthMiddleEast:(s,c)=>xt({top:o(s,c),left:s.right-.75*c.width+i,name:"arrow_sme"},n&&{config:n}),northEastArrowSouthEast:(s,c)=>xt({top:o(s,c),left:s.right-c.width+i,name:"arrow_se"},n&&{config:n}),southWestArrowNorthWest:(s,c)=>xt({top:r(s),left:s.left-i,name:"arrow_nw"},n&&{config:n}),southWestArrowNorthMiddleWest:(s,c)=>xt({top:r(s),left:s.left-.25*c.width-i,name:"arrow_nmw"},n&&{config:n}),southWestArrowNorth:(s,c)=>xt({top:r(s),left:s.left-c.width/2,name:"arrow_n"},n&&{config:n}),southWestArrowNorthMiddleEast:(s,c)=>xt({top:r(s),left:s.left-.75*c.width+i,name:"arrow_nme"},n&&{config:n}),southWestArrowNorthEast:(s,c)=>xt({top:r(s),left:s.left-c.width+i,name:"arrow_ne"},n&&{config:n}),southArrowNorthWest:(s,c)=>xt({top:r(s),left:s.left+s.width/2-i,name:"arrow_nw"},n&&{config:n}),southArrowNorthMiddleWest:(s,c)=>xt({top:r(s),left:s.left+s.width/2-.25*c.width-i,name:"arrow_nmw"},n&&{config:n}),southArrowNorth:(s,c)=>xt({top:r(s),left:s.left+s.width/2-c.width/2,name:"arrow_n"},n&&{config:n}),southArrowNorthMiddleEast:(s,c)=>xt({top:r(s),left:s.left+s.width/2-.75*c.width+i,name:"arrow_nme"},n&&{config:n}),southArrowNorthEast:(s,c)=>xt({top:r(s),left:s.left+s.width/2-c.width+i,name:"arrow_ne"},n&&{config:n}),southEastArrowNorthWest:(s,c)=>xt({top:r(s),left:s.right-i,name:"arrow_nw"},n&&{config:n}),southEastArrowNorthMiddleWest:(s,c)=>xt({top:r(s),left:s.right-.25*c.width-i,name:"arrow_nmw"},n&&{config:n}),southEastArrowNorth:(s,c)=>xt({top:r(s),left:s.right-c.width/2,name:"arrow_n"},n&&{config:n}),southEastArrowNorthMiddleEast:(s,c)=>xt({top:r(s),left:s.right-.75*c.width+i,name:"arrow_nme"},n&&{config:n}),southEastArrowNorthEast:(s,c)=>xt({top:r(s),left:s.right-c.width+i,name:"arrow_ne"},n&&{config:n}),viewportStickyNorth:(s,c,d)=>s.getIntersection(d)?{top:d.top+e,left:s.left+s.width/2-c.width/2,name:"arrowless",config:xt({withArrow:!1},n)}:null};function o(s,c){return s.top-c.height-t}function r(s){return s.bottom+t}}();var Up=m(4650),Ty={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Up.Z,Ty),Up.Z.locals;var Wp=m(7676),Sy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Wp.Z,Sy),Wp.Z.locals;const Ns=Xc("px");class Bs extends ot{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new He(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new A("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new A("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new A("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Iy(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Ny(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Iy extends St{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new an,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new ce(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Ny extends St{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Ns),left:n.to("left",Ns),width:n.to("width",Ns),height:n.to("height",Ns)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,c)=>{s>c?this._addPanels(s-c):this._removePanels(c-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new St;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new qt(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var qp=m(5868),By={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(qp.Z,By),qp.Z.locals;const kr=Xc("px");class Py extends St{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Ke({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?kr(this._panelRect.height):null)}}}).render(),this._contentPanel=new Ke({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?kr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?kr(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?kr(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(le.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:kr(-le.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Gp=m(9695),zy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(Gp.Z,zy),Gp.Z.locals;var $p=m(4717),Ry={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()($p.Z,Ry),$p.Z.locals;const Ps=new WeakMap;function Kp(i){const{view:t,element:e,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,s=t.document;Ps.has(s)||(Ps.set(s,new Map),s.registerPostFixer(c=>Yp(s,c))),Ps.get(s).set(e,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?e:null}),t.change(c=>Yp(s,c))}function Ly(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function Yp(i,t){const e=Ps.get(i),n=[];let o=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Qp(t,r,s)&&(o=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const c=Oy(r);c&&(n.includes(c)||(s.hostElement=c,Qp(t,r,s)&&(o=!0)))}return o}function Qp(i,t,e){const{text:n,isDirectHost:o,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||t.childCount==1)&&function(c,d){if(!c.isAttached()||Array.from(c.getChildren()).some(b=>!b.is("uiElement")))return!1;if(d)return!0;const g=c.document;if(!g.isFocused)return!0;const f=g.selection.anchor;return f&&f.parent!==c}(r,e.keepOnFocus)?function(c,d){return!d.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",d),!0)}(i,r)&&(s=!0):Ly(i,r)&&(s=!0),s}function Oy(i){if(i.childCount){const t=i.getChild(0);if(t.is("element")&&!t.is("uiElement"))return t}return null}const el=new Map;function Ot(i,t,e){let n=el.get(i);n||(n=new Map,el.set(i,n)),n.set(t,e)}function jy(i){return[i]}function Zp(i,t,e={}){const n=function(o,r){const s=el.get(o);return s&&s.has(r)?s.get(r):jy}(i.constructor,t.constructor);try{return n(i=i.clone(),t,e)}catch(o){throw o}}function Fy(i,t,e){i=i.slice(),t=t.slice();const n=new Vy(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(t);const o=n.originalOperations;if(i.length==0||t.length==0)return{operationsA:i,operationsB:t,originalOperations:o};const r=new WeakMap;for(const d of i)r.set(d,0);const s={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:t.length};let c=0;for(;c<i.length;){const d=i[c],u=r.get(d);if(u==t.length){c++;continue}const g=t[u],f=Zp(d,g,n.getContext(d,g,!0)),b=Zp(g,d,n.getContext(g,d,!1));n.updateRelation(d,g),n.setOriginalOperations(f,d),n.setOriginalOperations(b,g);for(const v of f)r.set(v,u+b.length);i.splice(c,1,...f),t.splice(u,1,...b)}if(e.padWithNoOps){const d=i.length-s.originalOperationsACount,u=t.length-s.originalOperationsBCount;Xp(i,u-d),Xp(t,d-u)}return Jp(i,s.nextBaseVersionB),Jp(t,s.nextBaseVersionA),{operationsA:i,operationsB:t,originalOperations:o}}class Vy{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const o of t)this.originalOperations.set(o,n||o)}updateRelation(t,e){switch(t.constructor){case $t:switch(e.constructor){case me:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case $t:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case ie:switch(e.constructor){case me:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case $t:if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=W._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const o=n.end.offset-t.splitPosition.offset,r=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:o,offset:r})}}}break;case me:switch(e.constructor){case me:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case ie:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case Fe:{const n=t.newRange;if(!n)return;switch(e.constructor){case $t:{const o=W._createFromPositionAndShift(e.sourcePosition,e.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),s=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!s||o.containsRange(n)||this._setRelation(t,e,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()});break}case me:{const o=n.start.isEqual(e.targetPosition),r=n.start.isEqual(e.deletionPosition),s=n.end.isEqual(e.deletionPosition),c=n.end.isEqual(e.sourcePosition);(o||r||s||c)&&this._setRelation(t,e,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:c});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),o=this._history.getUndoneOperation(n);if(!o)return null;const r=this.originalOperations.get(t),s=this._relations.get(r);return s&&s.get(o)||null}_setRelation(t,e,n){const o=this.originalOperations.get(t),r=this.originalOperations.get(e);let s=this._relations.get(o);s||(s=new Map,this._relations.set(o,s)),s.set(r,n)}}function Jp(i,t){for(const e of i)e.baseVersion=t++}function Xp(i,t){for(let e=0;e<t;e++)i.push(new _e(0))}function tf(i,t,e){const n=i.nodes.getNode(0).getAttribute(t);if(n==e)return null;const o=new W(i.position,i.position.getShiftedBy(i.howMany));return new fe(o,t,n,e,0)}function ef(i,t){return i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function Ci(i,t){const e=[];for(let n=0;n<i.length;n++){const o=i[n],r=new $t(o.start,o.end.offset-o.start.offset,t,0);e.push(r);for(let s=n+1;s<i.length;s++)i[s]=i[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];t=t._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return e}Ot(fe,fe,(i,t,e)=>{if(i.key===t.key&&i.range.start.hasSameParentAs(t.range.start)){const n=i.range.getDifference(t.range).map(r=>new fe(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(t.range);return o&&e.aIsStrong&&n.push(new fe(o,t.key,t.newValue,i.newValue,0)),n.length==0?[new _e(0)]:n}return[i]}),Ot(fe,Ae,(i,t)=>{if(i.range.start.hasSameParentAs(t.position)&&i.range.containsPosition(t.position)){const e=i.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new fe(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(t.shouldReceiveAttributes){const n=tf(t,i.key,i.oldValue);n&&e.unshift(n)}return e}return i.range=i.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[i]}),Ot(fe,me,(i,t)=>{const e=[];i.range.start.hasSameParentAs(t.deletionPosition)&&(i.range.containsPosition(t.deletionPosition)||i.range.start.isEqual(t.deletionPosition))&&e.push(W._createFromPositionAndShift(t.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(o=>new fe(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),Ot(fe,$t,(i,t)=>function(n,o){const r=W._createFromPositionAndShift(o.sourcePosition,o.howMany);let s=null,c=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(c=n.getDifference(r),s=n.getIntersection(r)):c=[n];const d=[];for(let u of c){u=u._getTransformedByDeletion(o.sourcePosition,o.howMany);const g=o.getMovedRangeStart(),f=u.start.hasSameParentAs(g);u=u._getTransformedByInsertion(g,o.howMany,f),d.push(...u)}return s&&d.push(s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),d}(i.range,t).map(n=>new fe(n,i.key,i.oldValue,i.newValue,i.baseVersion))),Ot(fe,ie,(i,t)=>{if(i.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(t.splitPosition)&&i.range.containsPosition(t.splitPosition)){const e=i.clone();return e.range=new W(t.moveTargetPosition.clone(),i.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),i.range.end=t.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,e]}return i.range=i.range._getTransformedBySplitOperation(t),[i]}),Ot(Ae,fe,(i,t)=>{const e=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(i.position)){const n=tf(i,t.key,t.newValue);n&&e.push(n)}return e}),Ot(Ae,Ae,(i,t,e)=>(i.position.isEqual(t.position)&&e.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(t)),[i])),Ot(Ae,$t,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),Ot(Ae,ie,(i,t)=>(i.position=i.position._getTransformedBySplitOperation(t),[i])),Ot(Ae,me,(i,t)=>(i.position=i.position._getTransformedByMergeOperation(t),[i])),Ot(Fe,Ae,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(t)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(t)[0]),[i])),Ot(Fe,Fe,(i,t,e)=>{if(i.name==t.name){if(!e.aIsStrong)return[new _e(0)];i.oldRange=t.newRange?t.newRange.clone():null}return[i]}),Ot(Fe,me,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(t)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(t)),[i])),Ot(Fe,$t,(i,t,e)=>{if(i.oldRange&&(i.oldRange=W._createFromRanges(i.oldRange._getTransformedByMoveOperation(t))),i.newRange){if(e.abRelation){const n=W._createFromRanges(i.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=e.abRelation.path,i.newRange.end=n.end,[i];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=e.abRelation.path,[i]}i.newRange=W._createFromRanges(i.newRange._getTransformedByMoveOperation(t))}return[i]}),Ot(Fe,ie,(i,t,e)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(t)),i.newRange){if(e.abRelation){const n=i.newRange._getTransformedBySplitOperation(t);return i.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?i.newRange.start=Y._createAt(t.insertionPosition):i.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(i.newRange.start=Y._createAt(t.moveTargetPosition)),i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?i.newRange.end=Y._createAt(t.moveTargetPosition):i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?i.newRange.end=Y._createAt(t.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(t)}return[i]}),Ot(me,Ae,(i,t)=>(i.sourcePosition.hasSameParentAs(t.position)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(t),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t),[i])),Ot(me,me,(i,t,e)=>{if(i.sourcePosition.isEqual(t.sourcePosition)&&i.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new Y(t.graveyardPosition.root,n),i.howMany=0,[i]}return[new _e(0)]}if(i.sourcePosition.isEqual(t.sourcePosition)&&!i.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=t.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const s=t.targetPosition._getTransformedByMergeOperation(t),c=i.targetPosition._getTransformedByMergeOperation(t);return[new $t(s,i.howMany,c,0)]}return[new _e(0)]}return i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(t),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),i.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),Ot(me,$t,(i,t,e)=>{const n=W._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&i.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new _e(0)]:(i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition.hasSameParentAs(t.sourcePosition)&&(i.howMany-=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(t),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(t),i.graveyardPosition.isEqual(t.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)),[i])}),Ot(me,ie,(i,t,e)=>{if(t.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),i.deletionPosition.isEqual(t.graveyardPosition)&&(i.howMany=t.howMany)),i.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,o=t.graveyardPosition&&i.deletionPosition.isEqual(t.graveyardPosition);if(n||o||e.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),[i]}if(i.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i];if(e.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=t.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}return i.sourcePosition.hasSameParentAs(t.splitPosition)&&(i.howMany=t.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}),Ot($t,Ae,(i,t)=>{const e=W._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(t,!1)[0];return i.sourcePosition=e.start,i.howMany=e.end.offset-e.start.offset,i.targetPosition.isEqual(t.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t)),[i]}),Ot($t,$t,(i,t,e)=>{const n=W._createFromPositionAndShift(i.sourcePosition,i.howMany),o=W._createFromPositionAndShift(t.sourcePosition,t.howMany);let r,s=e.aIsStrong,c=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?c=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(c=!1),r=i.targetPosition.isEqual(t.targetPosition)&&c?i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):i.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),ef(i,t)&&ef(t,i))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Ci([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),Ci([n],r);const d=Se(i.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(d=="prefix"||d=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Ci([n],r);i.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?i.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(s=!1):s=!0;const u=[],g=n.getDifference(o);for(const b of g){b.start=b.start._getTransformedByDeletion(t.sourcePosition,t.howMany),b.end=b.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const v=Se(b.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",D=b._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,v);u.push(...D)}const f=n.getIntersection(o);return f!==null&&s&&(f.start=f.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),f.end=f.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),u.length===0?u.push(f):u.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?u.unshift(f):u.push(f):u.splice(1,0,f)),u.length===0?[new _e(i.baseVersion)]:Ci(u,r)}),Ot($t,ie,(i,t,e)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(t));const o=W._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let s=new W(t.splitPosition,o.end);return s=s._getTransformedBySplitOperation(t),Ci([new W(o.start,t.splitPosition),s],n)}i.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),i.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=i.targetPosition);const r=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const s=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);i.howMany>1&&s&&!e.aWasUndone&&r.push(W._createFromPositionAndShift(t.insertionPosition,1))}return Ci(r,n)}),Ot($t,me,(i,t,e)=>{const n=W._createFromPositionAndShift(i.sourcePosition,i.howMany);if(t.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(i.type!="remove"||e.forceWeakRemove){if(i.howMany==1)return e.bWasUndone?(i.sourcePosition=t.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]):[new _e(0)]}else if(!e.aWasUndone){const r=[];let s=t.graveyardPosition.clone(),c=t.targetPosition._getTransformedByMergeOperation(t);i.howMany>1&&(r.push(new $t(i.sourcePosition,i.howMany-1,i.targetPosition,0)),s=s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),c=c._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const d=t.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),u=new $t(s,1,d,0),g=u.getMovedRangeStart().path.slice();g.push(0);const f=new Y(u.targetPosition.root,g);c=c._getTransformedByMove(s,d,1);const b=new $t(c,t.howMany,f,0);return r.push(u),r.push(b),r}}const o=W._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(t);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]}),Ot(Ve,Ae,(i,t)=>(i.position=i.position._getTransformedByInsertOperation(t),[i])),Ot(Ve,me,(i,t)=>i.position.isEqual(t.deletionPosition)?(i.position=t.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(t),[i])),Ot(Ve,$t,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),Ot(Ve,Ve,(i,t,e)=>{if(i.position.isEqual(t.position)){if(!e.aIsStrong)return[new _e(0)];i.oldName=t.newName}return[i]}),Ot(Ve,ie,(i,t)=>{if(Se(i.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new Ve(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,e]}return i.position=i.position._getTransformedBySplitOperation(t),[i]}),Ot(Un,Un,(i,t,e)=>{if(i.root===t.root&&i.key===t.key){if(!e.aIsStrong||i.newValue===t.newValue)return[new _e(0)];i.oldValue=t.newValue}return[i]}),Ot(ie,Ae,(i,t)=>(i.splitPosition.hasSameParentAs(t.position)&&i.splitPosition.offset<t.position.offset&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(t),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(t),[i])),Ot(ie,me,(i,t,e)=>{if(!i.graveyardPosition&&!e.bWasUndone&&i.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const o=new Y(t.graveyardPosition.root,n),r=ie.getInsertionPosition(new Y(t.graveyardPosition.root,n)),s=new ie(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ie.getInsertionPosition(i.splitPosition),i.graveyardPosition=s.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[s,i]}return i.splitPosition.hasSameParentAs(t.deletionPosition)&&!i.splitPosition.isAfter(t.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ie.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),Ot(ie,$t,(i,t,e)=>{const n=W._createFromPositionAndShift(t.sourcePosition,t.howMany);if(i.graveyardPosition){const r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!e.bWasUndone&&r){const s=i.splitPosition._getTransformedByMoveOperation(t),c=i.graveyardPosition._getTransformedByMoveOperation(t),d=c.path.slice();d.push(0);const u=new Y(c.root,d);return[new $t(s,i.howMany,u,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)}const o=i.splitPosition.isEqual(t.targetPosition);if(o&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return i.howMany+=t.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),i.insertionPosition=ie.getInsertionPosition(i.splitPosition),[i];if(o&&e.abRelation&&e.abRelation.howMany){const{howMany:r,offset:s}=e.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(s),[i]}if(i.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.splitPosition)){const r=t.howMany-(i.splitPosition.offset-t.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany),i.splitPosition=t.sourcePosition.clone(),i.insertionPosition=ie.getInsertionPosition(i.splitPosition),[i]}return t.sourcePosition.isEqual(t.targetPosition)||(i.splitPosition.hasSameParentAs(t.sourcePosition)&&i.splitPosition.offset<=t.sourcePosition.offset&&(i.howMany-=t.howMany),i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(t),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(t):i.insertionPosition=ie.getInsertionPosition(i.splitPosition),[i]}),Ot(ie,ie,(i,t,e)=>{if(i.splitPosition.isEqual(t.splitPosition)){if(!i.graveyardPosition&&!t.graveyardPosition)return[new _e(0)];if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition))return[new _e(0)];if(e.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t),[i]}if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=t.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const s=[];return t.howMany&&s.push(new $t(t.moveTargetPosition,t.howMany,t.splitPosition,0)),i.howMany&&s.push(new $t(i.splitPosition,i.howMany,i.moveTargetPosition,0)),s}return[new _e(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t)),i.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return i.howMany++,[i];if(t.splitPosition.isEqual(i.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const o=new Y(t.insertionPosition.root,n);return[i,new $t(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(t.splitPosition)&&i.splitPosition.offset<t.splitPosition.offset&&(i.howMany-=t.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(t),i.insertionPosition=ie.getInsertionPosition(i.splitPosition),[i]});class Hy extends no{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class zs extends no{constructor(t){super(t),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class Ai{constructor(t){this.document=t}createDocumentFragment(t){return new To(this.document,t)}createElement(t,e,n){return new sn(this.document,t,e,n)}createText(t){return new Jt(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const o=n.getChildIndex(t);return this.removeChildren(o,1,n),this.insertChild(o,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new sn(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return at._createAt(t,e)}createPositionAfter(t){return at._createAfter(t)}createPositionBefore(t){return at._createBefore(t)}createRange(t,e){return new Et(t,e)}createRangeOn(t){return Et._createOn(t)}createRangeIn(t){return Et._createIn(t)}createSelection(t,e,n){return new fn(t,e,n)}}class Uy extends Jg{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Dp(t.config.get("toolbar")),this._elementReplacer=new $0}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,o=e.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const c=r.element;this.setEditableElement(r.name,c),this.focusTracker.add(c),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:r,originFocusTracker:s,toolbar:c,beforeFocus:d,afterBlur:u}){s.add(c.element),r.set("Alt+F10",(g,f)=>{s.isFocused&&!c.focusTracker.isFocused&&(d&&d(),c.focus(),f())}),c.keystrokes.set("Esc",(g,f)=>{c.focusTracker.isFocused&&(o.focus(),u&&u(),f())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement,r=t.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&Kp({view:e,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var nf=m(3143),Wy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};vt()(nf.Z,Wy),nf.Z.locals;class qy extends Cy{constructor(t,e,n={}){super(t),this.stickyPanel=new Py(t),this.toolbar=new Kc(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new _y(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class nl extends Zg{constructor(t,e={}){if(!to(t)&&e.initialData!==void 0)throw new A("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return to(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(t)),to(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new qy(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new Uy(this,o),function(r){if(!tt(r.updateSourceElement))throw new A("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(s&&s.tagName.toLowerCase()==="textarea"&&s.form){let c;const d=s.form,u=()=>r.updateSourceElement();tt(d.submit)&&(c=d.submit,d.submit=()=>{u(),c.apply(d)}),d.addEventListener("submit",u),r.on("destroy",()=>{d.removeEventListener("submit",u),c&&(d.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(to(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}_t(nl,Wv),_t(nl,qv);class Gy{constructor(t){this.files=function(e){const n=Array.from(e.files||[]),o=Array.from(e.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class ol extends no{constructor(t){super(t);const e=this.document;function n(o){return(r,s)=>{s.preventDefault();const c=s.dropRange?[s.dropRange]:null,d=new _(e,o);e.fire(d,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:c,target:s.target}),d.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e={dataTransfer:new Gy(t.clipboardData?t.clipboardData:t.dataTransfer)};t.type!="drop"&&t.type!="dragover"||(e.dropRange=function(n,o){const r=o.target.ownerDocument,s=o.clientX,c=o.clientY;let d;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,c)?d=r.caretRangeFromPoint(s,c):o.rangeParent&&(d=r.createRange(),d.setStart(o.rangeParent,o.rangeOffset),d.collapse(!0)),d?n.domConverter.domRangeToView(d):null}(this.view,t)),this.fire(t.type,t,e)}}const of=["figcaption","li"];function rf(i){let t="";if(i.is("$text")||i.is("$textProxy"))t=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))t=i.getAttribute("alt");else if(i.is("element","br"))t=`
`;else{let e=null;for(const n of i.getChildren()){const o=rf(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(of.includes(e.name)||of.includes(n.name)?t+=`
`:t+=`
