(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Un(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vn={exports:{}};Vn.exports="/node_modules/react/cjs/react-jsx-runtime.production.min.js";var c=Vn.exports,Wn={exports:{}};Wn.exports="/node_modules/react/cjs/react.production.min.js";var E=Wn.exports;const N=Un(E);var At={},rn="/node_modules/react-dom/react-dom";At.createRoot=rn.createRoot,At.hydrateRoot=rn.hydrateRoot;function Gn(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Gn(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function ee(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=Gn(e))&&(a&&(a+=" "),a+=t);return a}const We=e=>typeof e=="number"&&!isNaN(e),qe=e=>typeof e=="string",H=e=>typeof e=="function",Ge=e=>qe(e)||H(e)?e:null,dt=e=>E.isValidElement(e)||qe(e)||H(e)||We(e);function Ta(e,t,n){n===void 0&&(n=300);const{scrollHeight:a,style:r}=e;requestAnimationFrame(()=>{r.minHeight="initial",r.height=a+"px",r.transition=`all ${n}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)})})}function rt(e){let{enter:t,exit:n,appendPosition:a=!1,collapse:r=!0,collapseDuration:i=300}=e;return function(o){let{children:s,position:l,preventExitTransition:f,done:u,nodeRef:m,isIn:g}=o;const p=a?`${t}--${l}`:t,x=a?`${n}--${l}`:n,d=E.useRef(0);return E.useLayoutEffect(()=>{const v=m.current,y=p.split(" "),w=I=>{I.target===m.current&&(v.dispatchEvent(new Event("d")),v.removeEventListener("animationend",w),v.removeEventListener("animationcancel",w),d.current===0&&I.type!=="animationcancel"&&v.classList.remove(...y))};v.classList.add(...y),v.addEventListener("animationend",w),v.addEventListener("animationcancel",w)},[]),E.useEffect(()=>{const v=m.current,y=()=>{v.removeEventListener("animationend",y),r?Ta(v,u,i):u()};g||(f?y():(d.current=1,v.className+=` ${x}`,v.addEventListener("animationend",y)))},[g]),N.createElement(N.Fragment,null,s)}}function on(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ce={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(a=>a!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},_e=e=>{let{theme:t,type:n,...a}=e;return N.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...a})},mt={info:function(e){return N.createElement(_e,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return N.createElement(_e,{...e},N.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return N.createElement(_e,{...e},N.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return N.createElement(_e,{...e},N.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return N.createElement("div",{className:"Toastify__spinner"})}};function Pa(e){const[,t]=E.useReducer(p=>p+1,0),[n,a]=E.useState([]),r=E.useRef(null),i=E.useRef(new Map).current,o=p=>n.indexOf(p)!==-1,s=E.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:o,getToast:p=>i.get(p)}).current;function l(p){let{containerId:x}=p;const{limit:d}=s.props;!d||x&&s.containerId!==x||(s.count-=s.queue.length,s.queue=[])}function f(p){a(x=>p==null?[]:x.filter(d=>d!==p))}function u(){const{toastContent:p,toastProps:x,staleId:d}=s.queue.shift();g(p,x,d)}function m(p,x){let{delay:d,staleId:v,...y}=x;if(!dt(p)||function(F){return!r.current||s.props.enableMultiContainer&&F.containerId!==s.props.containerId||i.has(F.toastId)&&F.updateId==null}(y))return;const{toastId:w,updateId:I,data:k}=y,{props:A}=s,M=()=>f(w),_=I==null;_&&s.count++;const T={...A,style:A.toastStyle,key:s.toastKey++,...Object.fromEntries(Object.entries(y).filter(F=>{let[V,R]=F;return R!=null})),toastId:w,updateId:I,data:k,closeToast:M,isIn:!1,className:Ge(y.className||A.toastClassName),bodyClassName:Ge(y.bodyClassName||A.bodyClassName),progressClassName:Ge(y.progressClassName||A.progressClassName),autoClose:!y.isLoading&&(L=y.autoClose,J=A.autoClose,L===!1||We(L)&&L>0?L:J),deleteToast(){const F=on(i.get(w),"removed");i.delete(w),ce.emit(4,F);const V=s.queue.length;if(s.count=w==null?s.count-s.displayedToast:s.count-1,s.count<0&&(s.count=0),V>0){const R=w==null?s.props.limit:1;if(V===1||R===1)s.displayedToast++,u();else{const se=R>V?V:R;s.displayedToast=se;for(let D=0;D<se;D++)u()}}else t()}};var L,J;T.iconOut=function(F){let{theme:V,type:R,isLoading:se,icon:D}=F,W=null;const le={theme:V,type:R};return D===!1||(H(D)?W=D(le):E.isValidElement(D)?W=E.cloneElement(D,le):qe(D)||We(D)?W=D:se?W=mt.spinner():(Me=>Me in mt)(R)&&(W=mt[R](le))),W}(T),H(y.onOpen)&&(T.onOpen=y.onOpen),H(y.onClose)&&(T.onClose=y.onClose),T.closeButton=A.closeButton,y.closeButton===!1||dt(y.closeButton)?T.closeButton=y.closeButton:y.closeButton===!0&&(T.closeButton=!dt(A.closeButton)||A.closeButton);let oe=p;E.isValidElement(p)&&!qe(p.type)?oe=E.cloneElement(p,{closeToast:M,toastProps:T,data:k}):H(p)&&(oe=p({closeToast:M,toastProps:T,data:k})),A.limit&&A.limit>0&&s.count>A.limit&&_?s.queue.push({toastContent:oe,toastProps:T,staleId:v}):We(d)?setTimeout(()=>{g(oe,T,v)},d):g(oe,T,v)}function g(p,x,d){const{toastId:v}=x;d&&i.delete(d);const y={content:p,props:x};i.set(v,y),a(w=>[...w,v].filter(I=>I!==d)),ce.emit(4,on(y,y.props.updateId==null?"added":"updated"))}return E.useEffect(()=>(s.containerId=e.containerId,ce.cancelEmit(3).on(0,m).on(1,p=>r.current&&f(p)).on(5,l).emit(2,s),()=>{i.clear(),ce.emit(3,s)}),[]),E.useEffect(()=>{s.props=e,s.isToastActive=o,s.displayedToast=n.length}),{getToastToRender:function(p){const x=new Map,d=Array.from(i.values());return e.newestOnTop&&d.reverse(),d.forEach(v=>{const{position:y}=v.props;x.has(y)||x.set(y,[]),x.get(y).push(v)}),Array.from(x,v=>p(v[0],v[1]))},containerRef:r,isToastActive:o}}function sn(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function ln(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function Ma(e){const[t,n]=E.useState(!1),[a,r]=E.useState(!1),i=E.useRef(null),o=E.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,s=E.useRef(e),{autoClose:l,pauseOnHover:f,closeToast:u,onClick:m,closeOnClick:g}=e;function p(k){if(e.draggable){k.nativeEvent.type==="touchstart"&&k.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",y),document.addEventListener("mouseup",w),document.addEventListener("touchmove",y),document.addEventListener("touchend",w);const A=i.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=A.getBoundingClientRect(),A.style.transition="",o.x=sn(k.nativeEvent),o.y=ln(k.nativeEvent),e.draggableDirection==="x"?(o.start=o.x,o.removalDistance=A.offsetWidth*(e.draggablePercent/100)):(o.start=o.y,o.removalDistance=A.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(k){if(o.boundingRect){const{top:A,bottom:M,left:_,right:T}=o.boundingRect;k.nativeEvent.type!=="touchend"&&e.pauseOnHover&&o.x>=_&&o.x<=T&&o.y>=A&&o.y<=M?v():d()}}function d(){n(!0)}function v(){n(!1)}function y(k){const A=i.current;o.canDrag&&A&&(o.didMove=!0,t&&v(),o.x=sn(k),o.y=ln(k),o.delta=e.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),A.style.transform=`translate${e.draggableDirection}(${o.delta}px)`,A.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function w(){document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",y),document.removeEventListener("touchend",w);const k=i.current;if(o.canDrag&&o.didMove&&k){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return r(!0),void e.closeToast();k.style.transition="transform 0.2s, opacity 0.2s",k.style.transform=`translate${e.draggableDirection}(0)`,k.style.opacity="1"}}E.useEffect(()=>{s.current=e}),E.useEffect(()=>(i.current&&i.current.addEventListener("d",d,{once:!0}),H(e.onOpen)&&e.onOpen(E.isValidElement(e.children)&&e.children.props),()=>{const k=s.current;H(k.onClose)&&k.onClose(E.isValidElement(k.children)&&k.children.props)}),[]),E.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",d),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",d),window.removeEventListener("blur",v))}),[e.pauseOnFocusLoss]);const I={onMouseDown:p,onTouchStart:p,onMouseUp:x,onTouchEnd:x};return l&&f&&(I.onMouseEnter=v,I.onMouseLeave=d),g&&(I.onClick=k=>{m&&m(k),o.canCloseOnClick&&u()}),{playToast:d,pauseToast:v,isRunning:t,preventExitTransition:a,toastRef:i,eventHandlers:I}}function Kn(e){let{closeToast:t,theme:n,ariaLabel:a="close"}=e;return N.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:r=>{r.stopPropagation(),t(r)},"aria-label":a},N.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},N.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function _a(e){let{delay:t,isRunning:n,closeToast:a,type:r="default",hide:i,className:o,style:s,controlledProgress:l,progress:f,rtl:u,isIn:m,theme:g}=e;const p=i||l&&f===0,x={...s,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(x.transform=`scaleX(${f})`);const d=ee("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${r}`,{"Toastify__progress-bar--rtl":u}),v=H(o)?o({rtl:u,type:r,defaultClassName:d}):ee(d,o);return N.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:v,style:x,[l&&f>=1?"onTransitionEnd":"onAnimationEnd"]:l&&f<1?null:()=>{m&&a()}})}const La=e=>{const{isRunning:t,preventExitTransition:n,toastRef:a,eventHandlers:r}=Ma(e),{closeButton:i,children:o,autoClose:s,onClick:l,type:f,hideProgressBar:u,closeToast:m,transition:g,position:p,className:x,style:d,bodyClassName:v,bodyStyle:y,progressClassName:w,progressStyle:I,updateId:k,role:A,progress:M,rtl:_,toastId:T,deleteToast:L,isIn:J,isLoading:oe,iconOut:F,closeOnClick:V,theme:R}=e,se=ee("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${f}`,{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":V}),D=H(x)?x({rtl:_,position:p,type:f,defaultClassName:se}):ee(se,x),W=!!M||!s,le={closeToast:m,type:f,theme:R};let Me=null;return i===!1||(Me=H(i)?i(le):E.isValidElement(i)?E.cloneElement(i,le):Kn(le)),N.createElement(g,{isIn:J,done:L,position:p,preventExitTransition:n,nodeRef:a},N.createElement("div",{id:T,onClick:l,className:D,...r,style:d,ref:a},N.createElement("div",{...J&&{role:A},className:H(v)?v({type:f}):ee("Toastify__toast-body",v),style:y},F!=null&&N.createElement("div",{className:ee("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!oe})},F),N.createElement("div",null,o)),Me,N.createElement(_a,{...k&&!W?{key:`pb-${k}`}:{},rtl:_,theme:R,delay:s,isRunning:t,isIn:J,closeToast:m,hide:u,type:f,style:I,className:w,controlledProgress:W,progress:M||0})))},it=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Ra=rt(it("bounce",!0));rt(it("slide",!0));rt(it("zoom"));rt(it("flip"));const kt=E.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:a,isToastActive:r}=Pa(e),{className:i,style:o,rtl:s,containerId:l}=e;function f(u){const m=ee("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":s});return H(i)?i({position:u,rtl:s,defaultClassName:m}):ee(m,Ge(i))}return E.useEffect(()=>{t&&(t.current=a.current)},[]),N.createElement("div",{ref:a,className:"Toastify",id:l},n((u,m)=>{const g=m.length?{...o}:{...o,pointerEvents:"none"};return N.createElement("div",{className:f(u),style:g,key:`container-${u}`},m.map((p,x)=>{let{content:d,props:v}=p;return N.createElement(La,{...v,isIn:r(v.toastId),style:{...v.style,"--nth":x+1,"--len":m.length},key:`toast-${v.key}`},d)}))}))});kt.displayName="ToastContainer",kt.defaultProps={position:"top-right",transition:Ra,autoClose:5e3,closeButton:Kn,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let cn,pt=new Map,fn=[];ce.on(2,e=>{cn=e.containerId||e,pt.set(cn,e),fn.forEach(t=>{ce.emit(0,t.content,t.options)}),fn=[]}).on(3,e=>{pt.delete(e.containerId||e),pt.size===0&&ce.off(0).off(1).off(5)});const at=class at{constructor(){this.fadeInScreen=t=>{let n=document.getElementById(t);!t||!n||(n.style.opacity="5",n.style.transform="translateY(1px)")}}};at.animations=new at;let ke=at;function Vt(e){return c.jsxs("div",{className:"heading-container",children:[c.jsx("div",{className:"screen-heading",children:c.jsx("span",{children:e.title})}),e.subHeading?c.jsx("div",{className:"screen-sub-heading",children:c.jsx("span",{children:e.subHeading})}):c.jsx("div",{}),c.jsxs("div",{className:"heading-seperator",children:[c.jsx("div",{className:"seperator-line"}),c.jsx("div",{className:"seperator-blob",children:c.jsx("div",{})})]})]})}var Et=function(e,t){return Et=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])},Et(e,t)};function ot(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Et(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function St(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Je(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var a=n.call(e),r,i=[],o;try{for(;(t===void 0||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(s){o={error:s}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function Qe(e,t,n){if(n||arguments.length===2)for(var a=0,r=t.length,i;a<r;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))}function G(e){return typeof e=="function"}function $n(e){var t=function(a){Error.call(a),a.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var vt=$n(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(a,r){return r+1+") "+a.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function It(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var st=function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,a,r,i;if(!this.closed){this.closed=!0;var o=this._parentage;if(o)if(this._parentage=null,Array.isArray(o))try{for(var s=St(o),l=s.next();!l.done;l=s.next()){var f=l.value;f.remove(this)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}else o.remove(this);var u=this.initialTeardown;if(G(u))try{u()}catch(d){i=d instanceof vt?d.errors:[d]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var g=St(m),p=g.next();!p.done;p=g.next()){var x=p.value;try{un(x)}catch(d){i=i??[],d instanceof vt?i=Qe(Qe([],Je(i)),Je(d.errors)):i.push(d)}}}catch(d){a={error:d}}finally{try{p&&!p.done&&(r=g.return)&&r.call(g)}finally{if(a)throw a.error}}}if(i)throw new vt(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)un(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&It(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&It(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=function(){var t=new e;return t.closed=!0,t}(),e}(),Xn=st.EMPTY;function qn(e){return e instanceof st||e&&"closed"in e&&G(e.remove)&&G(e.add)&&G(e.unsubscribe)}function un(e){G(e)?e():e.unsubscribe()}var Jn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Nt={setTimeout:function(e,t){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];var r=Nt.delegate;return r!=null&&r.setTimeout?r.setTimeout.apply(r,Qe([e,t],Je(n))):setTimeout.apply(void 0,Qe([e,t],Je(n)))},clearTimeout:function(e){var t=Nt.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(e)},delegate:void 0};function Da(e){Nt.setTimeout(function(){throw e})}function dn(){}function Ke(e){e()}var Qn=function(e){ot(t,e);function t(n){var a=e.call(this)||this;return a.isStopped=!1,n?(a.destination=n,qn(n)&&n.add(a)):a.destination=Ba,a}return t.create=function(n,a,r){return new Ot(n,a,r)},t.prototype.next=function(n){this.isStopped||this._next(n)},t.prototype.error=function(n){this.isStopped||(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(st),Ha=Function.prototype.bind;function ht(e,t){return Ha.call(e,t)}var za=function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(a){Le(a)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(a){Le(a)}else Le(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){Le(n)}},e}(),Ot=function(e){ot(t,e);function t(n,a,r){var i=e.call(this)||this,o;if(G(n)||!n)o={next:n??void 0,error:a??void 0,complete:r??void 0};else{var s;i&&Jn.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},o={next:n.next&&ht(n.next,s),error:n.error&&ht(n.error,s),complete:n.complete&&ht(n.complete,s)}):o=n}return i.destination=new za(o),i}return t}(Qn);function Le(e){Da(e)}function Fa(e){throw e}var Ba={closed:!0,next:dn,error:Fa,complete:dn},Ya=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Ua(e){return e}function Va(e){return e.length===0?Ua:e.length===1?e[0]:function(n){return e.reduce(function(a,r){return r(a)},n)}}var mn=function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,a){var r=this,i=Ga(t)?t:new Ot(t,n,a);return Ke(function(){var o=r,s=o.operator,l=o.source;i.add(s?s.call(i,l):l?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var a=this;return n=pn(n),new n(function(r,i){var o=new Ot({next:function(s){try{t(s)}catch(l){i(l),o.unsubscribe()}},error:i,complete:r});a.subscribe(o)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[Ya]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Va(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=pn(t),new t(function(a,r){var i;n.subscribe(function(o){return i=o},function(o){return r(o)},function(){return a(i)})})},e.create=function(t){return new e(t)},e}();function pn(e){var t;return(t=e??Jn.Promise)!==null&&t!==void 0?t:Promise}function Wa(e){return e&&G(e.next)&&G(e.error)&&G(e.complete)}function Ga(e){return e&&e instanceof Qn||Wa(e)&&qn(e)}var Ka=$n(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),jt=function(e){ot(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var a=new vn(this,this);return a.operator=n,a},t.prototype._throwIfClosed=function(){if(this.closed)throw new Ka},t.prototype.next=function(n){var a=this;Ke(function(){var r,i;if(a._throwIfClosed(),!a.isStopped){a.currentObservers||(a.currentObservers=Array.from(a.observers));try{for(var o=St(a.currentObservers),s=o.next();!s.done;s=o.next()){var l=s.value;l.next(n)}}catch(f){r={error:f}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}}})},t.prototype.error=function(n){var a=this;Ke(function(){if(a._throwIfClosed(),!a.isStopped){a.hasError=a.isStopped=!0,a.thrownError=n;for(var r=a.observers;r.length;)r.shift().error(n)}})},t.prototype.complete=function(){var n=this;Ke(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var a=n.observers;a.length;)a.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var a=this,r=this,i=r.hasError,o=r.isStopped,s=r.observers;return i||o?Xn:(this.currentObservers=null,s.push(n),new st(function(){a.currentObservers=null,It(s,n)}))},t.prototype._checkFinalizedStatuses=function(n){var a=this,r=a.hasError,i=a.thrownError,o=a.isStopped;r?n.error(i):o&&n.complete()},t.prototype.asObservable=function(){var n=new mn;return n.source=this,n},t.create=function(n,a){return new vn(n,a)},t}(mn),vn=function(e){ot(t,e);function t(n,a){var r=e.call(this)||this;return r.destination=n,r.source=a,r}return t.prototype.next=function(n){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.next)===null||r===void 0||r.call(a,n)},t.prototype.error=function(n){var a,r;(r=(a=this.destination)===null||a===void 0?void 0:a.error)===null||r===void 0||r.call(a,n)},t.prototype.complete=function(){var n,a;(a=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||a===void 0||a.call(n)},t.prototype._subscribe=function(n){var a,r;return(r=(a=this.source)===null||a===void 0?void 0:a.subscribe(n))!==null&&r!==void 0?r:Xn},t}(jt);const Z=class Z{constructor(){this.scrollToHireMe=()=>{let t=document.getElementById("ContactMe");t&&t.scrollIntoView({behavior:"smooth"})},this.scrollToHome=()=>{let t=document.getElementById("Home");t&&t.scrollIntoView({behavior:"smooth"})},this.isElementInView=(t,n)=>{let a=t.getBoundingClientRect(),r=a.top,i=a.bottom,o=r<window.innerHeight&&i>=0,s=r>=0&&i<=window.innerHeight;switch(n){case"partial":return o;case"complete":return s;default:return!1}},this.checkCurrentScreenUnderViewport=t=>{if(!(!t||Object.keys(t).length<1))for(let n of ne){let a=document.getElementById(n.screen_name);if(!a)continue;let r=this.isElementInView(a,"complete"),i=this.isElementInView(a,"partial");if(r||i){if(i&&!(n!=null&&n.alreadyRendered)){Z.currentScreenFadeIn.next({fadeInScreen:n.screen_name}),n.alreadyRendered=!0;break}if(r){Z.currentScreenBroadcaster.next({screenInView:n.screen_name});break}}}},window.addEventListener("scroll",this.checkCurrentScreenUnderViewport)}};Z.scrollHandler=new Z,Z.currentScreenBroadcaster=new jt,Z.currentScreenFadeIn=new jt;let Y=Z;function $a(e){let t=r=>{r.fadeInScreen===e.id&&ke.animations.fadeInScreen(e.id)};Y.currentScreenFadeIn.subscribe(t);const n={description:"",highlights:{bullets:["Marketing Manager","Business Development Manager","Business Specialist roles","Managing database SQL"],heading:"Here are a Few Highlights:"}},a=()=>n.highlights.bullets.map((r,i)=>c.jsxs("div",{className:"highlight",children:[c.jsx("div",{className:"highlight-blob"}),c.jsx("span",{children:r})]},i));return c.jsx("div",{className:"about-me-container screen-container fade-in",id:e.id||"",children:c.jsxs("div",{className:"about-me-parent",children:[c.jsx(Vt,{title:"About Me",subHeading:"Why Me?"}),c.jsxs("div",{className:"about-me-card",children:[c.jsx("div",{className:"about-me-profile"}),c.jsxs("div",{className:"about-me-details",children:[c.jsx("span",{className:"about-me-description",children:n.description}),c.jsxs("div",{className:"about-me-highlights",children:[c.jsx("div",{className:"highlight-heading",children:c.jsx("span",{children:n.highlights.heading})}),a()]}),c.jsxs("div",{className:"about-me-options",children:[c.jsxs("button",{className:"btn primary-btn",onClick:()=>Y.scrollHandler.scrollToHireMe(),children:[" ","Hire Me"," "]}),c.jsx("a",{href:"Arailym_Pernebay__CV.pdf",download:"Arailym_Pernebay__CV.pdf",children:c.jsx("button",{className:"btn highlighted-btn",children:"Get Resume"})})]})]})]})]})})}function Xa(){return c.jsx("div",{id:"ContactMe",className:"scroll-container",children:c.jsxs("button",{className:"btn-scroll",onClick:()=>{var e;return(e=Y==null?void 0:Y.scrollHandler)==null?void 0:e.scrollToHome()},children:[" ",c.jsx("i",{className:"fa fa-arrow-up"})]})})}function Zn({texts:e,delay:t}){const[n,a]=E.useState(""),[r,i]=E.useState(0);return E.useEffect(()=>{let o;return r<e.length&&(o=setTimeout(()=>{const s=e[r].slice(0,n.length+1);a(s)},t)),()=>clearTimeout(o)},[n,r,t,e]),E.useEffect(()=>{n.length===e[r].length&&setTimeout(()=>{r===e.length-1?i(0):i(r+1),a("")},t)},[n,r,t,e]),c.jsx("span",{children:n},`${n}-${r}`)}function qa(e){let t=n=>{n.fadeInScreen===e.id&&ke.animations.fadeInScreen(e.id)};return Y.currentScreenFadeIn.subscribe(t),c.jsxs("div",{className:"main-container fade-in",id:e.id||"",children:[c.jsx(Vt,{subHeading:"Lets Keep In Touch",title:"Contact Me"}),c.jsx("div",{className:"central-form",children:c.jsxs("div",{className:"col",children:[c.jsx("h2",{className:"title",children:c.jsx(Zn,{texts:["Get In Touch 📧"],delay:200})})," ",c.jsx("a",{href:"https://www.linkedin.com/in/arailympernebay/",children:c.jsx("i",{className:"fa fa-linkedin-square"})}),c.jsx("a",{href:"https://www.instagram.com/arailymbkz/",children:c.jsx("i",{className:"fa fa-instagram"})})]})}),c.jsx(Xa,{})]})}const Ja="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAB+CAMAAADyQ/wTAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMA9CPeCPsE2McMwa7SF6GF6PIzE/jjdlzMuj0uKB9B72w4l4wQtBpoTkbsp2JKepJXnH9xUgP+CQ8AAAxTSURBVHja7N3bTpNBFIDR3QqC+BMxBq1GRJRQSBuO2e//akAIGQ6lBMLscLHWA8ztl5nMzI7DAADK5edxAADFMrcuPgUAUCqvrO8FAFApr41mOwEA1MkbH6YBAJTJWxvOoQGgTDYnBwEAlMg7tqfuQwNAibxn/SgAgP7yvtHMvxwA0F8+tHu+HwBAX/nYcLoSAEBPucjGnwAAOsqFVs9+BwDQTT7h6xevggGgm3zS2l+vggGgk1xiOP0YAEAHudRPH3MAQA+53OrMjAYAeHv5nNE/F6IBoCzAze5/31MCQFmAm63zbwEAFAW42f4uwQBQFuBmMCwYAOoC3EzmEgwAZQFuJlNzkgCgLMDNYBcMAHUBbiY/JBgAygLcTOYOogGgLMDN2nwzAOhrpdkZL7L365HxIpttIRuo9yNfZzjeDwBe7JK9+8xWFAiiAKyAgOQgAiIoIiIKCGLvf2vTOjNncjz6HuF+Oyj/XIvuruLvuAfrIXcfWv2jRP5MEr8Q2J8xFz9gf0YRv0jlT/SPKvdhZd3Z3B1PYRnejzoSwISwSwyoBAD4VcaGVGBRR6peUlftThIpxXyYfUS6YPYwNSlDvNOo3ZKqaQE5LSSgFalI5i4EMCGsjggGgLGjiaSu1+vV7XZrq6pKaGzJPiVQmylFBoEWsqEVKbQymZZIK81oxbTwORL5HQKYMnfWBABgDGjQ2qrKBIEVRVGx3S53u10qSdLpdLrn7IKMES2c1i9Ikrzb6dttHUVxEISqilB+eQBTiyaaAAAM0p5h4rJ027a6h22aeorimOY4o/avmaagKGlKE7lq27KMGXwqfVEAUwu/xMNgAOg7zrbvt4rjqCi2SaL5vuc4xmYz7cgJbU/RQ+XNxnEkX06SojjGFsPYNrrjz8gTSNjTAAD9E4brKHKzLEkusux7nnM6EXit08nzUrlJqsyN4nDsW/bIUwhVOAEA6DB+btPEDeK6ru4vfURBMIzTUK5I9dHUNBxBuL+Gqo/BOjzMx/dCmTyJoccTAIBO4dUwjm/u9nrVtFTyDINARxms5GuXa+FGsTqaMRPkaUw5H9//FwDoEp7bqweGyY9FpWuaogisY5o4xO2Vqcmyiq/p1TFnQnXYbTF5Jr8Y+xd9AHhznM1Y8e3Wtsku9T0HXe5wmI7o7/TWvVnMIMOFPJeA4RwA8Gq00bUP6zxv26bxRUVwThsCQ3ZyBM9vqjYPDntuOLeoybMttHICAPBs/JwJorLIqkRLRcEhME6CmCZVVsbBAF7fkOebidlojtAB4JU4zrZXqyy7XHzfUxxjgfNceJiZhiL6l8pdhfv+HhOTb+BONAC8M54L13FUu5Uuy4qCORjwpyhW5F3l5ta6f0FMXsRM3f79GADwTnhurlql2+qNLImCg3GP8K9OjpieddoRz/tzRkxeh62wqgEAfo2zwyAub1WlaZ4wxedleILZYurJSXuLg0P3m0DySptz3Z+/IgDwJnieCcr6qp9lyRMMTKKCl5gainTWs5LpcgiRFxOqYAIAI8dzByaI8rZqNOm+JBfNLryN2XQjaXqWB2EX+2HycqZcdLFwAHg9bh0fs2Wj+ZLimATgvZisdL5kx45d1CJvgb1YXf4KAABPNLeZ9SrPqovsG4aJZhe6Y2Ya4rlyV+uOzNUibyTNsC8JYNBCKy+yZCdLnoG5VNBpG0/etbWlTv5RXwOYkFOTYz4HwLDsbSaw3ExvUoU94e0Q9IppKGfdtRibn/yl/gYwJeqrCQD0HnewVkWrN2dRweoD6DlDkZMsD7jJn/U6gAkxJXyKBugnbn9grFt2bVJFcDa4UgVDMj0J0iVbhfvfdsM9D2BqqtUdOf8GgL9gB1adLS+NpGABAgzcVJGT9hj8KoX7H8AU25TIYIAO43lbDVe3ZdKIHos7VTAqM0NJE9dS55PvDSKAKfaK42CAzuHUYHXcLi9yyiJ1Ydw2nnZ1Y3XylaEEMCGmeO3Ym2iAkeLmNhMV2935PhvSxMNdgM82gqQto8/N8HAC+E5aYm0hwHuZH9arsrjqsiRgIjPAr82E87WODwMLYEI20rLTs7IBhobn5oe43iZa6gkOghfg75vh3Taa8wMKYGrmZxa+RQO8FmczVlQvr2ffW2DxH8B/WkjNMg/mgwlgypSuWJoE8IG9+8BSEwoDKGxAKYKAjDQBG8WCjH3/W4uYepI5SSaZJD653ybuee1/f4PyFK/2x0XVN2We7gJvwgmN4ypRHiTAVyPtOGZUJfBmx7tuHfiHSnMYEAn8De/k4ljHg4cIcEPL1uxFA38iGa9mR6voc7wL/AMb0zgG6UME+HLpeYta6gB4jby5zrw8LvqmM+R8F/jHpnLl10kufIAbsjWjwcAvyKV1MNsdCk1lagbwfzma5a9L4QN8tQl9lwNh4CVKniYfnhF5zobzXeB+jJxwMXNLRewAN8LFuewA+KSMJ1vftorQ4zozcL/UYhfEgge4mYhdzBK9A7RYNy+T+d5vplU5U+5VAWKYypY/SbsCB/imn50HHaBtlMF8vX+2rSjkD0BATNMo28aKyAG+XHpyNItZCKMNuvlAmuz9zApVecr5LiC8jWrM5gNF2ADfhItt0gEeVC65q/0pO0SqcwHwYBzD3icCB/jK0ew1//jjgSj6QFpvZwujr3qbC4AH5oTWNs6FDXBjU/kTIgzB6cn82t2sivgFEGgVr/JXpbABvnpnGieXI2EIp6vn7nprZ1E/9KaMqwJaSu3bq1IRNMCNnmxt51yOhgi6qTSu9/ai0uQe2QVw1Yuys9sVNMCNoWmdxvzdgDuldFM3WNpWoaky15kBfGujCRzgRk82ZpO0A9wJ5Smdj1ezZlwVvyIA+CHBA3yjGnbNdjT+K0WP6+A5s/qh+o7uAmhLgK960zDbu1yPxj+l6GXsfnhGtJnSXQCtDPDNKKyeJ/yhhL8vl+rzKVsUmjnkeBcAAb4ZOX07iNmQxtvLB0k8354yI/KcKfeZARDgF/TMyt4zuBJvI00mwTI7GJq5oboACPBP9TZqdVpLDOzAb57uSvE6sHeGpvLpPYAbAvwqU+3g11IH+DW5NK4DP7MKTZ5eAOBrBPjVep7ZrIW5nYWXKd1BKc1XJ7uKTNkbss0M4GUE+Df1QuMYjHmohM+eJLc++8dFEfETEYBfQID/xFDVDstxycFwayl6Xpbr82l30ELV41IVgFcgwH9uZBr2diIxRro99DSe1Mtl83JX5UYVgPvQxgDfjLywsAP3iQw/LF1/Ssfnpb2L+qbsMJgZwJ1pbYA/GoaWHUwSNqUfhZ4n8WQVPNuWYfL7H4B71vYAf1oNRzu/jnWlAxEpXV2a19ujXRSh6TlsMgMQAQH+orcJredgHZdsSwug203T+fx8W+uG3jt2mAGIhgB/xzH7VbZcSSyH37N3b9tpAmEYhisjCoiITGYUGAK4QbYdQL3/WyvYlYOa1ZW0TY3B77kCzt71AzP/HZpMFD+tedsUhkHIaHQGAPiqEODfUEehNpPHLBYJSvyZJpMkcZwsOx5l42osxKwLAAOBAL9BZVPXWvDUCb7BDVHhXSZdy3Wn0+XyDAAwNAjwuwdiWyvk4eSJANdp/Q+UKsLxssNBStcldr7EpAsAw4YA/6mQmDNL8jITWPLwr3RFZFkUtXIzm5mmjfUHAPBIEOC/9RTmRNvL7erkCIVi1cM76DuqKL7jrVbtVu73hLA8fMKZIQB4UAjwB1BtUyusxfcy9XCG6Vc0UTwvLcvFYlsUhmba9hkAABDgj6Yuc0ZMo5AtP1VCJIn+SHd76LqeJIkQ4nRatW0fXNMkzF5iwR8AAAJ8W4xpxqxpOF/VaRwrdGB/b1FKlTj26rrmnDdNYxgGY+wMAAAI8P1Qw5ARsl4blrXlvKwqJwgSSul4fO+vrMcdSuk8CAJRVVXJObcsa79erwkhLAxxQggAAAH+YlRCiOu6hZSSR1FUp2ka+74vdp2bZ3nXC/xOnHZWUWcrpSy6JzQIIfh2CwCAAA+VqqqhbdvM7Bk9a9Pj0UX5/EKZX6H6FTq/5j+/qKKf+ObCMi7MHrE7oapiixAAwCsIMLyWT6/kZwAAuG8IMAAAwNsQYAAAgCFAgAEAfrRXxzQAwwAQxFr+pAPht0Q62SQMm4ABoEDAALAJGAAKBAwAm4ABoEDAALAJGAAKBAwAm4ABoEDAALAJGAAKBAwAm4ABoEDAAPDA9wMA1x2ol0oZx5MgUQAAAABJRU5ErkJggg==",Qa=()=>c.jsx("div",{className:"footer-container",children:c.jsx("div",{className:"footer-parent",children:c.jsx("img",{src:Ja,alt:"not internet connection"})})});var Za={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]};function hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hn(Object(n),!0).forEach(function(a){P(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ze(e){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ze(e)}function er(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function tr(e,t,n){return t&&gn(e.prototype,t),n&&gn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wt(e,t){return ar(e)||ir(e,t)||ea(e,t)||sr()}function je(e){return nr(e)||rr(e)||ea(e)||or()}function nr(e){if(Array.isArray(e))return Ct(e)}function ar(e){if(Array.isArray(e))return e}function rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ir(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function ea(e,t){if(e){if(typeof e=="string")return Ct(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ct(e,t)}}function Ct(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function or(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bn=function(){},Gt={},ta={},na=null,aa={mark:bn,measure:bn};try{typeof window<"u"&&(Gt=window),typeof document<"u"&&(ta=document),typeof MutationObserver<"u"&&(na=MutationObserver),typeof performance<"u"&&(aa=performance)}catch{}var lr=Gt.navigator||{},yn=lr.userAgent,xn=yn===void 0?"":yn,ae=Gt,j=ta,wn=na,Re=aa;ae.document;var q=!!j.documentElement&&!!j.head&&typeof j.addEventListener=="function"&&typeof j.createElement=="function",ra=~xn.indexOf("MSIE")||~xn.indexOf("Trident/"),De,He,ze,Fe,Be,K="___FONT_AWESOME___",Tt=16,ia="fa",oa="svg-inline--fa",de="data-fa-i2svg",Pt="data-fa-pseudo-element",cr="data-fa-pseudo-element-pending",Kt="data-prefix",$t="data-icon",An="fontawesome-i2svg",fr="async",ur=["HTML","HEAD","STYLE","SCRIPT"],sa=function(){try{return!0}catch{return!1}}(),O="classic",C="sharp",Xt=[O,C];function Ce(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[O]}})}var Ee=Ce((De={},P(De,O,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(De,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),De)),Se=Ce((He={},P(He,O,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(He,C,{solid:"fass",regular:"fasr",light:"fasl"}),He)),Ie=Ce((ze={},P(ze,O,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(ze,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ze)),dr=Ce((Fe={},P(Fe,O,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Fe,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Fe)),mr=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,la="fa-layers-text",pr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,vr=Ce((Be={},P(Be,O,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Be,C,{900:"fass",400:"fasr",300:"fasl"}),Be)),ca=[1,2,3,4,5,6,7,8,9,10],hr=ca.concat([11,12,13,14,15,16,17,18,19,20]),gr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ne=new Set;Object.keys(Se[O]).map(Ne.add.bind(Ne));Object.keys(Se[C]).map(Ne.add.bind(Ne));var br=[].concat(Xt,je(Ne),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY]).concat(ca.map(function(e){return"".concat(e,"x")})).concat(hr.map(function(e){return"w-".concat(e)})),we=ae.FontAwesomeConfig||{};function yr(e){var t=j.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function xr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(j&&typeof j.querySelector=="function"){var wr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wr.forEach(function(e){var t=Wt(e,2),n=t[0],a=t[1],r=xr(yr(n));r!=null&&(we[a]=r)})}var fa={styleDefault:"solid",familyDefault:"classic",cssPrefix:ia,replacementClass:oa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};we.familyPrefix&&(we.cssPrefix=we.familyPrefix);var be=h(h({},fa),we);be.autoReplaceSvg||(be.observeMutations=!1);var b={};Object.keys(fa).forEach(function(e){Object.defineProperty(b,e,{enumerable:!0,set:function(n){be[e]=n,Ae.forEach(function(a){return a(b)})},get:function(){return be[e]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){be.cssPrefix=t,Ae.forEach(function(n){return n(b)})},get:function(){return be.cssPrefix}});ae.FontAwesomeConfig=b;var Ae=[];function Ar(e){return Ae.push(e),function(){Ae.splice(Ae.indexOf(e),1)}}var Q=Tt,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function kr(e){if(!(!e||!q)){var t=j.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=j.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return j.head.insertBefore(t,a),e}}var Er="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Oe(){for(var e=12,t="";e-- >0;)t+=Er[Math.random()*62|0];return t}function ye(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function qt(e){return e.classList?ye(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ua(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ua(e[n]),'" ')},"").trim()}function lt(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Jt(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function Ir(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Nr(e){var t=e.transform,n=e.width,a=n===void 0?Tt:n,r=e.height,i=r===void 0?Tt:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ra?l+="translate(".concat(t.x/Q-a/2,"em, ").concat(t.y/Q-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Q,"em), calc(-50% + ").concat(t.y/Q,"em)) "):l+="translate(".concat(t.x/Q,"em, ").concat(t.y/Q,"em) "),l+="scale(".concat(t.size/Q*(t.flipX?-1:1),", ").concat(t.size/Q*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Or=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
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
}`;function da(){var e=ia,t=oa,n=b.cssPrefix,a=b.replacementClass,r=Or;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var kn=!1;function gt(){b.autoAddCss&&!kn&&(kr(da()),kn=!0)}var jr={mixout:function(){return{dom:{css:da,insertCss:gt}}},hooks:function(){return{beforeDOMElementCreation:function(){gt()},beforeI2svg:function(){gt()}}}},$=ae||{};$[K]||($[K]={});$[K].styles||($[K].styles={});$[K].hooks||($[K].hooks={});$[K].shims||($[K].shims=[]);var B=$[K],ma=[],Cr=function e(){j.removeEventListener("DOMContentLoaded",e),et=1,ma.map(function(t){return t()})},et=!1;q&&(et=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),et||j.addEventListener("DOMContentLoaded",Cr));function Tr(e){q&&(et?setTimeout(e,0):ma.push(e))}function Te(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?ua(e):"<".concat(t," ").concat(Sr(a),">").concat(i.map(Te).join(""),"</").concat(t,">")}function En(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Pr=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},bt=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Pr(n,r):n,l,f,u;for(a===void 0?(l=1,u=t[i[0]]):(l=0,u=a);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function Mr(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Mt(e){var t=Mr(e);return t.length===1?t[0].toString(16):null}function _r(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Sn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function _t(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Sn(t);typeof B.hooks.addPack=="function"&&!r?B.hooks.addPack(e,Sn(t)):B.styles[e]=h(h({},B.styles[e]||{}),i),e==="fas"&&_t("fa",t)}var Ye,Ue,Ve,pe=B.styles,Lr=B.shims,Rr=(Ye={},P(Ye,O,Object.values(Ie[O])),P(Ye,C,Object.values(Ie[C])),Ye),Qt=null,pa={},va={},ha={},ga={},ba={},Dr=(Ue={},P(Ue,O,Object.keys(Ee[O])),P(Ue,C,Object.keys(Ee[C])),Ue);function Hr(e){return~br.indexOf(e)}function zr(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Hr(r)?r:null}var ya=function(){var t=function(i){return bt(pe,function(o,s,l){return o[l]=bt(s,i,{}),o},{})};pa=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),va=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),ba=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in pe||b.autoFetchSvg,a=bt(Lr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});ha=a.names,ga=a.unicodes,Qt=ct(b.styleDefault,{family:b.familyDefault})};Ar(function(e){Qt=ct(e.styleDefault,{family:b.familyDefault})});ya();function Zt(e,t){return(pa[e]||{})[t]}function Fr(e,t){return(va[e]||{})[t]}function ue(e,t){return(ba[e]||{})[t]}function xa(e){return ha[e]||{prefix:null,iconName:null}}function Br(e){var t=ga[e],n=Zt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function re(){return Qt}var en=function(){return{prefix:null,iconName:null,rest:[]}};function ct(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?O:n,r=Ee[a][e],i=Se[a][e]||Se[a][r],o=e in B.styles?e:null;return i||o||null}var In=(Ve={},P(Ve,O,Object.keys(Ie[O])),P(Ve,C,Object.keys(Ie[C])),Ve);function ft(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},P(t,O,"".concat(b.cssPrefix,"-").concat(O)),P(t,C,"".concat(b.cssPrefix,"-").concat(C)),t),o=null,s=O;(e.includes(i[O])||e.some(function(f){return In[O].includes(f)}))&&(s=O),(e.includes(i[C])||e.some(function(f){return In[C].includes(f)}))&&(s=C);var l=e.reduce(function(f,u){var m=zr(b.cssPrefix,u);if(pe[u]?(u=Rr[s].includes(u)?dr[s][u]:u,o=u,f.prefix=u):Dr[s].indexOf(u)>-1?(o=u,f.prefix=ct(u,{family:s})):m?f.iconName=m:u!==b.replacementClass&&u!==i[O]&&u!==i[C]&&f.rest.push(u),!r&&f.prefix&&f.iconName){var g=o==="fa"?xa(f.iconName):{},p=ue(f.prefix,f.iconName);g.prefix&&(o=null),f.iconName=g.iconName||p||f.iconName,f.prefix=g.prefix||f.prefix,f.prefix==="far"&&!pe.far&&pe.fas&&!b.autoFetchSvg&&(f.prefix="fas")}return f},en());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===C&&(pe.fass||b.autoFetchSvg)&&(l.prefix="fass",l.iconName=ue(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=re()||"fas"),l}var Yr=function(){function e(){er(this,e),this.definitions={}}return tr(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=h(h({},n.definitions[s]||{}),o[s]),_t(s,o[s]);var l=Ie[O][s];l&&_t(l,o[s]),ya()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),Nn=[],ve={},ge={},Ur=Object.keys(ge);function Vr(e,t){var n=t.mixoutsTo;return Nn=e,ve={},Object.keys(ge).forEach(function(a){Ur.indexOf(a)===-1&&delete ge[a]}),Nn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Ze(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){ve[o]||(ve[o]=[]),ve[o].push(i[o])})}a.provides&&a.provides(ge)}),n}function Lt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=ve[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=ve[e]||[];r.forEach(function(i){i.apply(null,n)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ge[e]?ge[e].apply(null,t):void 0}function Rt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||re();if(t)return t=ue(n,t)||t,En(wa.definitions,n,t)||En(B.styles,n,t)}var wa=new Yr,Wr=function(){b.autoReplaceSvg=!1,b.observeMutations=!1,me("noAuto")},Gr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(me("beforeI2svg",t),X("pseudoElements2svg",t),X("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,Tr(function(){$r({autoReplaceSvgRoot:n}),me("watch",t)})}},Kr={icon:function(t){if(t===null)return null;if(Ze(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ue(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=ct(t[0]);return{prefix:a,iconName:ue(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(mr))){var r=ft(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||re(),iconName:ue(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=re();return{prefix:i,iconName:ue(i,t)||t}}}},z={noAuto:Wr,config:b,dom:Gr,parse:Kr,library:wa,findIconDefinition:Rt,toHtml:Te},$r=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?j:n;(Object.keys(B.styles).length>0||b.autoFetchSvg)&&q&&b.autoReplaceSvg&&z.dom.i2svg({node:a})};function ut(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Te(a)})}}),Object.defineProperty(e,"node",{get:function(){if(q){var a=j.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Xr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Jt(o)&&n.found&&!a.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};r.style=lt(h(h({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function qr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(b.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:o}),children:a}]}]}function tn(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,g=e.watchable,p=g===void 0?!1:g,x=a.found?a:n,d=x.width,v=x.height,y=r==="fak",w=[b.replacementClass,i?"".concat(b.cssPrefix,"-").concat(i):""].filter(function(L){return m.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(m.classes).join(" "),I={children:[],attributes:h(h({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(v)})},k=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/v*16*.0625,"em")}:{};p&&(I.attributes[de]=""),l&&(I.children.push({tag:"title",attributes:{id:I.attributes["aria-labelledby"]||"title-".concat(u||Oe())},children:[l]}),delete I.attributes.title);var A=h(h({},I),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:o,symbol:s,styles:h(h({},k),m.styles)}),M=a.found&&n.found?X("generateAbstractMask",A)||{children:[],attributes:{}}:X("generateAbstractIcon",A)||{children:[],attributes:{}},_=M.children,T=M.attributes;return A.children=_,A.attributes=T,s?qr(A):Xr(A)}function On(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=h(h(h({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[de]="");var u=h({},o.styles);Jt(r)&&(u.transform=Nr({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var m=lt(u);m.length>0&&(f.style=m);var g=[];return g.push({tag:"span",attributes:f,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Jr(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=lt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var yt=B.styles;function Dt(e){var t=e[0],n=e[1],a=e.slice(4),r=Wt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(fe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(fe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(fe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Qr={found:!1,width:512,height:512};function Zr(e,t){!sa&&!b.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ht(e,t){var n=t;return t==="fa"&&b.styleDefault!==null&&(t=re()),new Promise(function(a,r){if(X("missingIconAbstract"),n==="fa"){var i=xa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&yt[t]&&yt[t][e]){var o=yt[t][e];return a(Dt(o))}Zr(e,t),a(h(h({},Qr),{},{icon:b.showMissingIcons&&e?X("missingIconAbstract")||{}:{}}))})}var jn=function(){},zt=b.measurePerformance&&Re&&Re.mark&&Re.measure?Re:{mark:jn,measure:jn},xe='FA "6.4.2"',ei=function(t){return zt.mark("".concat(xe," ").concat(t," begins")),function(){return Aa(t)}},Aa=function(t){zt.mark("".concat(xe," ").concat(t," ends")),zt.measure("".concat(xe," ").concat(t),"".concat(xe," ").concat(t," begins"),"".concat(xe," ").concat(t," ends"))},nn={begin:ei,end:Aa},$e=function(){};function Cn(e){var t=e.getAttribute?e.getAttribute(de):null;return typeof t=="string"}function ti(e){var t=e.getAttribute?e.getAttribute(Kt):null,n=e.getAttribute?e.getAttribute($t):null;return t&&n}function ni(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(b.replacementClass)}function ai(){if(b.autoReplaceSvg===!0)return Xe.replace;var e=Xe[b.autoReplaceSvg];return e||Xe.replace}function ri(e){return j.createElementNS("http://www.w3.org/2000/svg",e)}function ii(e){return j.createElement(e)}function ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?ri:ii:n;if(typeof e=="string")return j.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ka(o,{ceFn:a}))}),r}function oi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xe={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(ka(r),n)}),n.getAttribute(de)===null&&b.keepOriginalSource){var a=j.createComment(oi(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~qt(n).indexOf(b.replacementClass))return Xe.replace(t);var r=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===b.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Te(s)}).join(`
`);n.setAttribute(de,""),n.innerHTML=o}};function Tn(e){e()}function Ea(e,t){var n=typeof t=="function"?t:$e;if(e.length===0)n();else{var a=Tn;b.mutateApproach===fr&&(a=ae.requestAnimationFrame||Tn),a(function(){var r=ai(),i=nn.begin("mutate");e.map(r),i(),n()})}}var an=!1;function Sa(){an=!0}function Ft(){an=!1}var tt=null;function Pn(e){if(wn&&b.observeMutations){var t=e.treeCallback,n=t===void 0?$e:t,a=e.nodeCallback,r=a===void 0?$e:a,i=e.pseudoElementsCallback,o=i===void 0?$e:i,s=e.observeMutationsRoot,l=s===void 0?j:s;tt=new wn(function(f){if(!an){var u=re();ye(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Cn(m.addedNodes[0])&&(b.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&b.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Cn(m.target)&&~gr.indexOf(m.attributeName))if(m.attributeName==="class"&&ti(m.target)){var g=ft(qt(m.target)),p=g.prefix,x=g.iconName;m.target.setAttribute(Kt,p||u),x&&m.target.setAttribute($t,x)}else ni(m.target)&&r(m.target)})}}),q&&tt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function si(){tt&&tt.disconnect()}function li(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function ci(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=ft(qt(e));return r.prefix||(r.prefix=re()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Fr(r.prefix,e.innerText)||Zt(r.prefix,Mt(e.innerText))),!r.iconName&&b.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function fi(e){var t=ye(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return b.autoA11y&&(n?t["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||Oe()):(t["aria-hidden"]="true",t.focusable="false")),t}function ui(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ci(e),a=n.iconName,r=n.prefix,i=n.rest,o=fi(e),s=Lt("parseNodeAttributes",{},e),l=t.styleParser?li(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var di=B.styles;function Ia(e){var t=b.autoReplaceSvg==="nest"?Mn(e,{styleParser:!1}):Mn(e);return~t.extra.classes.indexOf(la)?X("generateLayersText",e,t):X("generateSvgReplacementMutation",e,t)}var ie=new Set;Xt.map(function(e){ie.add("fa-".concat(e))});Object.keys(Ee[O]).map(ie.add.bind(ie));Object.keys(Ee[C]).map(ie.add.bind(ie));ie=je(ie);function _n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var n=j.documentElement.classList,a=function(m){return n.add("".concat(An,"-").concat(m))},r=function(m){return n.remove("".concat(An,"-").concat(m))},i=b.autoFetchSvg?ie:Xt.map(function(u){return"fa-".concat(u)}).concat(Object.keys(di));i.includes("fa")||i.push("fa");var o=[".".concat(la,":not([").concat(de,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(de,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ye(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=nn.begin("onTree"),f=s.reduce(function(u,m){try{var g=Ia(m);g&&u.push(g)}catch(p){sa||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(g){Ea(g,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(g){l(),m(g)})})}function mi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ia(e).then(function(n){n&&Ea([n],t)})}function pi(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Rt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Rt(r||{})),e(a,h(h({},n),{},{mask:r}))}}var vi=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?U:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,g=m===void 0?null:m,p=n.titleId,x=p===void 0?null:p,d=n.classes,v=d===void 0?[]:d,y=n.attributes,w=y===void 0?{}:y,I=n.styles,k=I===void 0?{}:I;if(t){var A=t.prefix,M=t.iconName,_=t.icon;return ut(h({type:"icon"},t),function(){return me("beforeDOMElementCreation",{iconDefinition:t,params:n}),b.autoA11y&&(g?w["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(x||Oe()):(w["aria-hidden"]="true",w.focusable="false")),tn({icons:{main:Dt(_),mask:l?Dt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:M,transform:h(h({},U),r),symbol:o,title:g,maskId:u,titleId:x,extra:{attributes:w,styles:k,classes:v}})})}},hi={mixout:function(){return{icon:pi(vi)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_n,n.nodeCallback=mi,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?j:a,i=n.callback,o=i===void 0?function(){}:i;return _n(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,f=a.symbol,u=a.mask,m=a.maskId,g=a.extra;return new Promise(function(p,x){Promise.all([Ht(r,s),u.iconName?Ht(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(d){var v=Wt(d,2),y=v[0],w=v[1];p([n,tn({icons:{main:y,mask:w},prefix:s,iconName:r,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=lt(s);l.length>0&&(r.style=l);var f;return Jt(o)&&(f=X("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},gi={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ut({type:"layer"},function(){me("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers")].concat(je(i)).join(" ")},children:o}]})}}}},bi={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,f=l===void 0?{}:l,u=a.styles,m=u===void 0?{}:u;return ut({type:"counter",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:a}),Jr({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(b.cssPrefix,"-layers-counter")].concat(je(s))}})})}}}},yi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?U:r,o=a.title,s=o===void 0?null:o,l=a.classes,f=l===void 0?[]:l,u=a.attributes,m=u===void 0?{}:u,g=a.styles,p=g===void 0?{}:g;return ut({type:"text",content:n},function(){return me("beforeDOMElementCreation",{content:n,params:a}),On({content:n,transform:h(h({},U),i),title:s,extra:{attributes:m,styles:p,classes:["".concat(b.cssPrefix,"-layers-text")].concat(je(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(ra){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return b.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,On({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},xi=new RegExp('"',"ug"),Ln=[1105920,1112319];function wi(e){var t=e.replace(xi,""),n=_r(t,0),a=n>=Ln[0]&&n<=Ln[1],r=t.length===2?t[0]===t[1]:!1;return{value:Mt(r?t[0]:t),isSecondary:a||r}}function Rn(e,t){var n="".concat(cr).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=ye(e.children),o=i.filter(function(_){return _.getAttribute(Pt)===t})[0],s=ae.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(pr),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?C:O,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Se[g][l[2].toLowerCase()]:vr[g][f],x=wi(m),d=x.value,v=x.isSecondary,y=l[0].startsWith("FontAwesome"),w=Zt(p,d),I=w;if(y){var k=Br(d);k.iconName&&k.prefix&&(w=k.iconName,p=k.prefix)}if(w&&!v&&(!o||o.getAttribute(Kt)!==p||o.getAttribute($t)!==I)){e.setAttribute(n,I),o&&e.removeChild(o);var A=ui(),M=A.extra;M.attributes[Pt]=t,Ht(w,p).then(function(_){var T=tn(h(h({},A),{},{icons:{main:_,mask:en()},prefix:p,iconName:I,extra:M,watchable:!0})),L=j.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=T.map(function(J){return Te(J)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ai(e){return Promise.all([Rn(e,"::before"),Rn(e,"::after")])}function ki(e){return e.parentNode!==document.head&&!~ur.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Pt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dn(e){if(q)return new Promise(function(t,n){var a=ye(e.querySelectorAll("*")).filter(ki).map(Ai),r=nn.begin("searchPseudoElements");Sa(),Promise.all(a).then(function(){r(),Ft(),t()}).catch(function(){r(),Ft(),n()})})}var Ei={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?j:a;b.searchPseudoElements&&Dn(r)}}},Hn=!1,Si={mixout:function(){return{dom:{unwatch:function(){Sa(),Hn=!0}}}},hooks:function(){return{bootstrap:function(){Pn(Lt("mutationObserverCallbacks",{}))},noAuto:function(){si()},watch:function(n){var a=n.observeMutationsRoot;Hn?Ft():Pn(Lt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},zn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Ii={mixout:function(){return{parse:{transform:function(n){return zn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=zn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},g={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:m,path:g};return{tag:"g",attributes:h({},p.outer),children:[{tag:"g",attributes:h({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),p.path)}]}]}}}},xt={x:0,y:0,width:"100%",height:"100%"};function Fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ni(e){return e.tag==="g"?e.children:[e]}var Oi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ft(r.split(" ").map(function(o){return o.trim()})):en();return i.prefix||(i.prefix=re()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,g=o.icon,p=Ir({transform:l,containerWidth:m,iconWidth:f}),x={tag:"rect",attributes:h(h({},xt),{},{fill:"white"})},d=u.children?{children:u.children.map(Fn)}:{},v={tag:"g",attributes:h({},p.inner),children:[Fn(h({tag:u.tag,attributes:h(h({},u.attributes),p.path)},d))]},y={tag:"g",attributes:h({},p.outer),children:[v]},w="mask-".concat(s||Oe()),I="clip-".concat(s||Oe()),k={tag:"mask",attributes:h(h({},xt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:I},children:Ni(g)},k]};return a.push(A,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(I,")"),mask:"url(#".concat(w,")")},xt)}),{children:a,attributes:r}}}},ji={provides:function(t){var n=!1;ae.matchMedia&&(n=ae.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=h(h({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ci={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ti=[jr,hi,gi,bi,yi,Ei,Si,Ii,Oi,ji,Ci];Vr(Ti,{mixoutsTo:z});z.noAuto;z.config;z.library;z.dom;var Bt=z.parse;z.findIconDefinition;z.toHtml;var Pi=z.icon;z.layer;z.text;z.counter;var Na={exports:{}};Na.exports="/node_modules/prop-types/factoryWithThrowingShims"();var Mi=Na.exports;const S=Un(Mi);function Bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bn(Object(n),!0).forEach(function(a){he(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function nt(e){"@babel/helpers - typeof";return nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},nt(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _i(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Li(e,t){if(e==null)return{};var n=_i(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Yt(e){return Ri(e)||Di(e)||Hi(e)||zi()}function Ri(e){if(Array.isArray(e))return Ut(e)}function Di(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Hi(e,t){if(e){if(typeof e=="string")return Ut(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ut(e,t)}}function Ut(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function zi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fi(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,s=e.flash,l=e.spin,f=e.spinPulse,u=e.spinReverse,m=e.pulse,g=e.fixedWidth,p=e.inverse,x=e.border,d=e.listItem,v=e.flip,y=e.size,w=e.rotation,I=e.pull,k=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":g,"fa-inverse":p,"fa-border":x,"fa-li":d,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},he(t,"fa-".concat(y),typeof y<"u"&&y!==null),he(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),he(t,"fa-pull-".concat(I),typeof I<"u"&&I!==null),he(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(k).map(function(A){return k[A]?A:null}).filter(function(A){return A})}function Bi(e){return e=e-0,e===e}function Oa(e){return Bi(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Yi=["style"];function Ui(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Vi(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Oa(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Ui(r)]=i:t[r]=i,t},{})}function ja(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return ja(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=Vi(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[Oa(f)]=u}return l},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=Li(n,Yi);return r.attrs.style=te(te({},r.attrs.style),o),e.apply(void 0,[t.tag,te(te({},r.attrs),s)].concat(Yt(a)))}var Ca=!1;try{Ca=!0}catch{}function Wi(){if(!Ca&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Yn(e){if(e&&nt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Bt.icon)return Bt.icon(e);if(e===null)return null;if(e&&nt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function wt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}var Pe=N.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,s=e.titleId,l=e.maskId,f=Yn(n),u=wt("classes",[].concat(Yt(Fi(e)),Yt(i.split(" ")))),m=wt("transform",typeof e.transform=="string"?Bt.transform(e.transform):e.transform),g=wt("mask",Yn(a)),p=Pi(f,te(te(te(te({},u),m),g),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return Wi("Could not find icon",f),null;var x=p.abstract,d={ref:t};return Object.keys(e).forEach(function(v){Pe.defaultProps.hasOwnProperty(v)||(d[v]=e[v])}),Gi(x[0],d)});Pe.displayName="FontAwesomeIcon";Pe.propTypes={beat:S.bool,border:S.bool,beatFade:S.bool,bounce:S.bool,className:S.string,fade:S.bool,flash:S.bool,mask:S.oneOfType([S.object,S.array,S.string]),maskId:S.string,fixedWidth:S.bool,inverse:S.bool,flip:S.oneOf([!0,!1,"horizontal","vertical","both"]),icon:S.oneOfType([S.object,S.array,S.string]),listItem:S.bool,pull:S.oneOf(["right","left"]),pulse:S.bool,rotation:S.oneOf([0,90,180,270]),shake:S.bool,size:S.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:S.bool,spinPulse:S.bool,spinReverse:S.bool,symbol:S.oneOfType([S.bool,S.string]),title:S.string,titleId:S.string,transform:S.oneOfType([S.string,S.object]),swapOpacity:S.bool};Pe.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Gi=ja.bind(null,N.createElement);function Ki(){const[e,t]=E.useState(0),[n,a]=E.useState(!1),r=f=>{!f||!f.screenInView||Ji(f.screenInView)<0};let i=Y.currentScreenBroadcaster.subscribe(r);const o=()=>ne.map((f,u)=>c.jsx("div",{className:s(u),onClick:()=>l(u,f),children:c.jsx("span",{children:f.screen_name})},f.screen_name)),s=f=>{let u="header-option ";return f<ne.length-1&&(u+="header-option-seperator "),e===f&&(u+="selected-header-option "),u},l=(f,u)=>{let m=document.getElementById(u.screen_name);m&&(m.scrollIntoView({behavior:"smooth"}),t(f),a(!1))};return E.useEffect(()=>()=>{i.unsubscribe()},[i]),c.jsx("div",{className:"header-container",onClick:()=>a(!n),children:c.jsxs("div",{className:"header-parent",children:[c.jsx("div",{className:"header-hamburger",onClick:()=>a(!n),children:c.jsx(Pe,{className:"header-hamburger-bars",icon:Za})}),c.jsx("div",{className:"header-logo",children:c.jsx("span",{children:"Arailym"})}),c.jsx("div",{className:n?"header-options show-hamburger-options":"header-options",children:o()})]})})}const $i=()=>{const e=["Economist 📊","Marketing 📈","Business 💻","Developer 👩‍💻"];return c.jsx("div",{className:"profile-container",children:c.jsxs("div",{className:"profile-parent",children:[c.jsxs("div",{className:"profile-details",children:[c.jsx("div",{className:"colz",children:c.jsxs("div",{className:"colz-icon",children:[c.jsx("a",{href:"https://www.linkedin.com/in/arailympernebay/",children:c.jsx("i",{className:"fa fa-linkedin-square"})}),c.jsx("a",{href:"https://www.instagram.com/arailymbkz/",children:c.jsx("i",{className:"fa fa-instagram"})})]})}),c.jsx("div",{className:"profile-details-name",children:c.jsxs("span",{className:"primary-text",children:["Hello, I'm ",c.jsx("span",{className:"highlighted-text",children:"Arailym"})]})}),c.jsx("div",{className:"profile-details-role",children:c.jsxs("span",{className:"highlighted-text",children:[c.jsx("h1",{children:c.jsx(Zn,{texts:e,delay:100})}),c.jsx("span",{className:"profile-role-tagline",children:"Optimizing marketing, social media of your applications"})]})}),c.jsxs("div",{className:"profile-options",children:[c.jsx("button",{className:"btn primary-btn",onClick:()=>Y.scrollHandler.scrollToHireMe(),children:"Hire Me"}),c.jsx("a",{href:"Arailym_Pernebay__CV.pdf",download:"Arailym_Pernebay__CV",children:c.jsx("button",{className:"btn highlighted-btn",children:"Download CV"})})]})]}),c.jsx("div",{className:"profile-picture",children:c.jsx("div",{className:"profile-picture-background"})})]})})},Xi=()=>c.jsxs("div",{id:"Home",className:"home-container",children:[c.jsx(Ki,{}),c.jsx($i,{}),c.jsx(Qa,{})]}),qi=e=>{const[t,n]=E.useState(0),[a,r]=E.useState({style:{}});let i=d=>{d.fadeInScreen===e.id&&ke.animations.fadeInScreen(e.id)};const o=Y.currentScreenFadeIn.subscribe(i),s=d=>c.jsxs("div",{className:"resume-heading",children:[c.jsxs("div",{className:"resume-main-heading",children:[c.jsx("div",{className:"heading-bullet"}),c.jsx("span",{children:d.heading?d.heading:""}),(d.fromDate||d.toDate)&&c.jsx("div",{className:"heading-date",children:d.fromDate+"-"+d.toDate})]}),c.jsx("div",{className:"resume-sub-heading",children:c.jsx("span",{children:d.subHeading?d.subHeading:""})}),c.jsx("div",{className:"resume-heading-description",children:c.jsx("span",{children:d.description?d.description:""})})]}),l=[{label:"Education",logoSrc:"education.svg",key:"education"},{label:"Work History",logoSrc:"work-history.svg",key:"work-experience"},{label:"Volunteering",logoSrc:"projects.svg",key:"volunteering"},{label:"Interests",logoSrc:"interests.svg",key:"interests"},{label:"Licences & Certifications",logoSrc:"programming-skills.svg",key:"licences&certification"}],f=[{heading:"HESPERIUM MARKETING, UK, London",subHeading:"Account executive",duration:{fromDate:"November 2021 ",toDate:"January 2022"},responsibilities:["- Provide marketing service;","- Daily connection with 15 clients;","- Call and conclude an agreement with foreign companies;"]},{heading:"IFORTIS WORLWIDE, American Ruler Private Limited, India",subHeading:"Marketer Sales Intern",duration:{fromDate:"September 2021",toDate:"October 2021"},responsibilities:["- Created presentations for busines subjects","- Assisted with business plan development"]},{heading:"AiPlus educational center, Nur-Sultan, Kazakhstan",subHeading:"English language trener",duration:{fromDate:"November 2020",toDate:"August 2021"},responsibilities:["- Preparing 4-5-6 grade pupils for national exam for NIS and RPMS","- Work with psychological mindset of children","- Increased the results of monthly tests by 25%"]},{heading:"Alyssa a Hogan Enterprise, Florida, USA",subHeading:"Marketer/Content writer intern",duration:{fromDate:"July 2020",toDate:"August 2020"},responsibilities:["- Conducted market research and analyzed current tends","- Created content for social media platforms, including LinkedIn and Facebook","- Assisted with business plan development"]}],u=[{heading:"Szechenyi Istvan University, Gyor, Hungary",subHeading:"Master's degree of International Economy and Business",duration:{fromDate:"2021 ",toDate:"2023"},description:"Holder of Stipendium Hungaricum merit-based Scholarship"},{heading:"Kazakh national university named Al-Farabi, Almaty, Kazakhstan",subHeading:"Bachelor of Marketing at Department of Business Technology",duration:{fromDate:"2017 ",toDate:"2021"},description:"Holder of Kazakhstan State Scholarship"}],m=[c.jsx("div",{className:"resume-screen-container",children:u.map((d,v)=>c.jsx(s,{heading:d.heading,subHeading:d.subHeading,description:d.description,fromDate:d.duration.fromDate,toDate:d.duration.toDate},v))},"education"),c.jsx("div",{className:"resume-screen-container",children:f.map((d,v)=>c.jsxs("div",{className:"experience-container",children:[c.jsx(s,{heading:d.heading,subHeading:d.subHeading,fromDate:d.duration.fromDate,toDate:d.duration.toDate}),c.jsx("div",{className:"experience-description",children:c.jsx("span",{className:"resume-description-text",children:"Responsibilities :"})}),c.jsxs("div",{className:"experience-description",children:[d.responsibilities.map((y,w)=>c.jsxs("div",{children:[c.jsx("span",{className:"resume-description-text",children:y}),c.jsx("br",{})]},w)),c.jsx("br",{})]})]},v))},"work-experience"),c.jsxs("div",{className:"resume-screen-container",children:[c.jsx(s,{heading:"Community Volunteer",subHeading:"UNICEF",description:"Children",fromDate:"Sep 2020",toDate:""}),c.jsx(s,{heading:"Content Specialist, Marketer",subHeading:"Solidarity Tracks",description:"Arts and Culture",fromDate:"May 2022",toDate:"Jul 2022"}),c.jsx(s,{heading:"Volunteer",subHeading:"Synergy Global Forum",fromDate:"Oct 2018",toDate:""})]},"volunteering"),c.jsxs("div",{className:"resume-screen-container",children:[c.jsx(s,{heading:"Teaching",description:"Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."}),c.jsx(s,{heading:"Music",description:"Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."}),c.jsx(s,{heading:"Competitive Gaming",description:"I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."})]},"interests"),c.jsxs("div",{className:"resume-screen-container",children:[c.jsx(s,{heading:"Write Professional Emails in English",subHeading:"Georgia Institure of Technology",description:"Issued Jan 2021 Credential ID X8DPTL8RSSU6"}),c.jsx(s,{heading:"Teach English now ! Foundational principles",subHeading:"Arizona State University",description:"Issued Dec 2020 Credential ID BX669LRCLMYP"}),c.jsx(s,{heading:"English for career development",subHeading:"University of Pennsylvania",description:"Issued May 2020"})]},"licences&certifications")],g=d=>{let y={style:{transform:"translateY("+d*400*-1+"px)"}};r(y),n(d)},p=()=>l.map((d,v)=>c.jsxs("div",{onClick:()=>g(v),className:v===t?"bullet selected-bullet":"bullet",children:[c.jsx("img",{className:"bullet-logo",src:`../../assets/Resume/${d.logoSrc}`,alt:"B"}),c.jsx("span",{className:"bullet-label",children:d.label})]},v)),x=()=>c.jsx("div",{style:a.style,className:"resume-details-carousal",children:m.map(d=>d)});return E.useEffect(()=>()=>{o.unsubscribe()},[o]),c.jsx("div",{className:"resume-container screen-container fade-in",id:e.id||"",children:c.jsxs("div",{className:"resume-content",children:[c.jsx(Vt,{title:"Resume",subHeading:"My formal Bio Details"}),c.jsxs("div",{className:"resume-card",children:[c.jsx("div",{className:"resume-bullets",children:c.jsxs("div",{className:"bullet-container",children:[c.jsx("div",{className:"bullet-icons"}),c.jsx("div",{className:"bullets",children:p()})]})}),c.jsx("div",{className:"resume-bullet-details",children:x()})]})]})})},ne=[{screen_name:"Home",component:Xi,alreadyRendered:!1},{screen_name:"AboutMe",component:$a},{screen_name:"Resume",component:qi},{screen_name:"ContactMe",component:qa}],Ji=e=>{if(!e)return-1;for(let t=0;t<ne.length;t++)if(ne[t].screen_name===e)return t;return-1},Qi=()=>{const e=()=>ne==null?void 0:ne.map(t=>t.component?c.jsx(t.component,{screenName:t.screen_name,id:t.screen_name},t.screen_name):c.jsx("div",{},t.screen_name));return c.jsx("div",{className:"portfolio-container",children:e()})};function Zi(){return c.jsxs("div",{className:"App",children:[c.jsx(kt,{}),c.jsx(Qi,{})]})}At.createRoot(document.getElementById("root")).render(c.jsx(N.StrictMode,{children:c.jsx(Zi,{})}));
