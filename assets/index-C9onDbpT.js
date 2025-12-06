(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function W1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lv={exports:{}},jc={},cv={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),j1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),q1=Symbol.for("react.strict_mode"),Y1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),K1=Symbol.for("react.context"),Z1=Symbol.for("react.forward_ref"),Q1=Symbol.for("react.suspense"),J1=Symbol.for("react.memo"),eM=Symbol.for("react.lazy"),Um=Symbol.iterator;function tM(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fv=Object.assign,dv={};function mo(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hv(){}hv.prototype=mo.prototype;function Hh(t,e,n){this.props=t,this.context=e,this.refs=dv,this.updater=n||uv}var Gh=Hh.prototype=new hv;Gh.constructor=Hh;fv(Gh,mo.prototype);Gh.isPureReactComponent=!0;var Fm=Array.isArray,pv=Object.prototype.hasOwnProperty,Wh={current:null},mv={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pv.call(e,i)&&!mv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ua,type:t,key:s,ref:o,props:r,_owner:Wh.current}}function nM(t,e){return{$$typeof:Ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ua}function iM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Om=/\/+/g;function gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iM(""+t.key):e.toString(36)}function Gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ua:case j1:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+gu(o,0):i,Fm(r)?(n="",t!=null&&(n=t.replace(Om,"$&/")+"/"),Gl(r,e,n,"",function(c){return c})):r!=null&&(jh(r)&&(r=nM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Om,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Fm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+gu(s,a);o+=Gl(s,e,n,l,r)}else if(l=tM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+gu(s,a++),o+=Gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function rM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Wl={transition:null},sM={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Wh};function gv(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!jh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=mo;He.Fragment=X1;He.Profiler=Y1;He.PureComponent=Hh;He.StrictMode=q1;He.Suspense=Q1;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sM;He.act=gv;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pv.call(e,l)&&!mv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ua,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:K1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};He.createElement=xv;He.createFactory=function(t){var e=xv.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:Z1,render:t}};He.isValidElement=jh;He.lazy=function(t){return{$$typeof:eM,_payload:{_status:-1,_result:t},_init:rM}};He.memo=function(t,e){return{$$typeof:J1,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};He.unstable_act=gv;He.useCallback=function(t,e){return ln.current.useCallback(t,e)};He.useContext=function(t){return ln.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};He.useEffect=function(t,e){return ln.current.useEffect(t,e)};He.useId=function(){return ln.current.useId()};He.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return ln.current.useMemo(t,e)};He.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};He.useRef=function(t){return ln.current.useRef(t)};He.useState=function(t){return ln.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return ln.current.useTransition()};He.version="18.3.1";cv.exports=He;var oe=cv.exports;const vv=W1(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oM=oe,aM=Symbol.for("react.element"),lM=Symbol.for("react.fragment"),cM=Object.prototype.hasOwnProperty,uM=oM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fM={key:!0,ref:!0,__self:!0,__source:!0};function _v(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cM.call(e,i)&&!fM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aM,type:t,key:s,ref:o,props:r,_owner:uM.current}}jc.Fragment=lM;jc.jsx=_v;jc.jsxs=_v;lv.exports=jc;var y=lv.exports,Ff={},yv={exports:{}},Dn={},Sv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,G){var j=I.length;I.push(G);e:for(;0<j;){var ce=j-1>>>1,Ee=I[ce];if(0<r(Ee,G))I[ce]=G,I[j]=Ee,j=ce;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var G=I[0],j=I.pop();if(j!==G){I[0]=j;e:for(var ce=0,Ee=I.length,$e=Ee>>>1;ce<$e;){var Ye=2*(ce+1)-1,Je=I[Ye],X=Ye+1,J=I[X];if(0>r(Je,j))X<Ee&&0>r(J,Je)?(I[ce]=J,I[X]=j,ce=X):(I[ce]=Je,I[Ye]=j,ce=Ye);else if(X<Ee&&0>r(J,j))I[ce]=J,I[X]=j,ce=X;else break e}}return G}function r(I,G){var j=I.sortIndex-G.sortIndex;return j!==0?j:I.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var G=n(c);G!==null;){if(G.callback===null)i(c);else if(G.startTime<=I)i(c),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(c)}}function E(I){if(_=!1,v(I),!g)if(n(l)!==null)g=!0,Z(A);else{var G=n(c);G!==null&&Y(E,G.startTime-I)}}function A(I,G){g=!1,_&&(_=!1,h(P),P=-1),p=!0;var j=d;try{for(v(G),f=n(l);f!==null&&(!(f.expirationTime>G)||I&&!N());){var ce=f.callback;if(typeof ce=="function"){f.callback=null,d=f.priorityLevel;var Ee=ce(f.expirationTime<=G);G=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&i(l),v(G)}else i(l);f=n(l)}if(f!==null)var $e=!0;else{var Ye=n(c);Ye!==null&&Y(E,Ye.startTime-G),$e=!1}return $e}finally{f=null,d=j,p=!1}}var b=!1,C=null,P=-1,w=5,M=-1;function N(){return!(t.unstable_now()-M<w)}function k(){if(C!==null){var I=t.unstable_now();M=I;var G=!0;try{G=C(!0,I)}finally{G?V():(b=!1,C=null)}}else b=!1}var V;if(typeof x=="function")V=function(){x(k)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,q=K.port2;K.port1.onmessage=k,V=function(){q.postMessage(null)}}else V=function(){m(k,0)};function Z(I){C=I,b||(b=!0,V())}function Y(I,G){P=m(function(){I(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Z(A))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var G=3;break;default:G=d}var j=d;d=G;try{return I()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=d;d=I;try{return G()}finally{d=j}},t.unstable_scheduleCallback=function(I,G,j){var ce=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ce+j:ce):j=ce,I){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=j+Ee,I={id:u++,callback:G,priorityLevel:I,startTime:j,expirationTime:Ee,sortIndex:-1},j>ce?(I.sortIndex=j,e(c,I),n(l)===null&&I===n(c)&&(_?(h(P),P=-1):_=!0,Y(E,j-ce))):(I.sortIndex=Ee,e(l,I),g||p||(g=!0,Z(A))),I},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(I){var G=d;return function(){var j=d;d=G;try{return I.apply(this,arguments)}finally{d=j}}}})(Mv);Sv.exports=Mv;var dM=Sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hM=oe,Pn=dM;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ev=new Set,aa={};function cs(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(aa[t]=e,t=0;t<e.length;t++)Ev.add(e[t])}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,pM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},zm={};function mM(t){return Of.call(zm,t)?!0:Of.call(km,t)?!1:pM.test(t)?zm[t]=!0:(km[t]=!0,!1)}function xM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gM(t,e,n,i){if(e===null||typeof e>"u"||xM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xh=/[\-:]([a-z])/g;function qh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xh,qh);qt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xh,qh);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xh,qh);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gM(e,n,r,i)&&(n=null),i||r===null?mM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=hM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,el=Symbol.for("react.element"),As=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),kf=Symbol.for("react.profiler"),Tv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),Kh=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Bf=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),bv=Symbol.for("react.offscreen"),Bm=Symbol.iterator;function wo(t){return t===null||typeof t!="object"?null:(t=Bm&&t[Bm]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,vu;function Vo(t){if(vu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vu=e&&e[1]||""}return`
`+vu+t}var _u=!1;function yu(t,e){if(!t||_u)return"";_u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vo(t):""}function vM(t){switch(t.tag){case 5:return Vo(t.type);case 16:return Vo("Lazy");case 13:return Vo("Suspense");case 19:return Vo("SuspenseList");case 0:case 2:case 15:return t=yu(t.type,!1),t;case 11:return t=yu(t.type.render,!1),t;case 1:return t=yu(t.type,!0),t;default:return""}}function Vf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case As:return"Portal";case kf:return"Profiler";case $h:return"StrictMode";case zf:return"Suspense";case Bf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wv:return(t.displayName||"Context")+".Consumer";case Tv:return(t._context.displayName||"Context")+".Provider";case Kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:Vf(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Vf(t(e))}catch{}}return null}function _M(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vf(e);case 8:return e===$h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Av(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yM(t){var e=Av(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function tl(t){t._valueTracker||(t._valueTracker=yM(t))}function Cv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Av(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hf(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rv(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function Gf(t,e){Rv(t,e);var n=Mr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wf(t,e.type,Mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wf(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Mr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function jf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ho(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Mr(n)}}function Pv(t,e){var n=Mr(e.value),i=Mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Wm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var nl,Lv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function la(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SM=["Webkit","ms","Moz","O"];Object.keys(qo).forEach(function(t){SM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qo[e]=qo[t]})});function Nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qo.hasOwnProperty(t)&&qo[t]?(""+e).trim():e+"px"}function Iv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var MM=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qf(t,e){if(e){if(MM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $f=null;function Qh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kf=null,Xs=null,qs=null;function jm(t){if(t=ka(t)){if(typeof Kf!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Kc(e),Kf(t.stateNode,t.type,e))}}function Uv(t){Xs?qs?qs.push(t):qs=[t]:Xs=t}function Fv(){if(Xs){var t=Xs,e=qs;if(qs=Xs=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function Ov(t,e){return t(e)}function kv(){}var Su=!1;function zv(t,e,n){if(Su)return t(e,n);Su=!0;try{return Ov(t,e,n)}finally{Su=!1,(Xs!==null||qs!==null)&&(kv(),Fv())}}function ca(t,e){var n=t.stateNode;if(n===null)return null;var i=Kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Zf=!1;if(Vi)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Zf=!1}function EM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Yo=!1,hc=null,pc=!1,Qf=null,TM={onError:function(t){Yo=!0,hc=t}};function wM(t,e,n,i,r,s,o,a,l){Yo=!1,hc=null,EM.apply(TM,arguments)}function bM(t,e,n,i,r,s,o,a,l){if(wM.apply(this,arguments),Yo){if(Yo){var c=hc;Yo=!1,hc=null}else throw Error(ne(198));pc||(pc=!0,Qf=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xm(t){if(us(t)!==t)throw Error(ne(188))}function AM(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Xm(r),t;if(s===i)return Xm(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Vv(t){return t=AM(t),t!==null?Hv(t):null}function Hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hv(t);if(e!==null)return e;t=t.sibling}return null}var Gv=Pn.unstable_scheduleCallback,qm=Pn.unstable_cancelCallback,CM=Pn.unstable_shouldYield,RM=Pn.unstable_requestPaint,At=Pn.unstable_now,PM=Pn.unstable_getCurrentPriorityLevel,Jh=Pn.unstable_ImmediatePriority,Wv=Pn.unstable_UserBlockingPriority,mc=Pn.unstable_NormalPriority,DM=Pn.unstable_LowPriority,jv=Pn.unstable_IdlePriority,Xc=null,xi=null;function LM(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Xc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:UM,NM=Math.log,IM=Math.LN2;function UM(t){return t>>>=0,t===0?32:31-(NM(t)/IM|0)|0}var il=64,rl=4194304;function Go(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Go(a):(s&=o,s!==0&&(i=Go(s)))}else o=n&~r,o!==0?i=Go(o):s!==0&&(i=Go(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function FM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=FM(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xv(){var t=il;return il<<=1,!(il&4194240)&&(il=64),t}function Mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function kM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function qv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yv,tp,$v,Kv,Zv,ed=!1,sl=[],hr=null,pr=null,mr=null,ua=new Map,fa=new Map,ar=[],zM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fa.delete(e.pointerId)}}function Ao(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&tp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BM(t,e,n,i,r){switch(e){case"focusin":return hr=Ao(hr,t,e,n,i,r),!0;case"dragenter":return pr=Ao(pr,t,e,n,i,r),!0;case"mouseover":return mr=Ao(mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ua.set(s,Ao(ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fa.set(s,Ao(fa.get(s)||null,t,e,n,i,r)),!0}return!1}function Qv(t){var e=jr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=Bv(n),e!==null){t.blockedOn=e,Zv(t.priority,function(){$v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);$f=i,n.target.dispatchEvent(i),$f=null}else return e=ka(n),e!==null&&tp(e),t.blockedOn=n,!1;e.shift()}return!0}function $m(t,e,n){jl(t)&&n.delete(e)}function VM(){ed=!1,hr!==null&&jl(hr)&&(hr=null),pr!==null&&jl(pr)&&(pr=null),mr!==null&&jl(mr)&&(mr=null),ua.forEach($m),fa.forEach($m)}function Co(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,Pn.unstable_scheduleCallback(Pn.unstable_NormalPriority,VM)))}function da(t){function e(r){return Co(r,t)}if(0<sl.length){Co(sl[0],t);for(var n=1;n<sl.length;n++){var i=sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(hr!==null&&Co(hr,t),pr!==null&&Co(pr,t),mr!==null&&Co(mr,t),ua.forEach(e),fa.forEach(e),n=0;n<ar.length;n++)i=ar[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ar.length&&(n=ar[0],n.blockedOn===null);)Qv(n),n.blockedOn===null&&ar.shift()}var Ys=$i.ReactCurrentBatchConfig,gc=!0;function HM(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=1,np(t,e,n,i)}finally{it=r,Ys.transition=s}}function GM(t,e,n,i){var r=it,s=Ys.transition;Ys.transition=null;try{it=4,np(t,e,n,i)}finally{it=r,Ys.transition=s}}function np(t,e,n,i){if(gc){var r=td(t,e,n,i);if(r===null)Lu(t,e,i,vc,n),Ym(t,i);else if(BM(r,t,e,n,i))i.stopPropagation();else if(Ym(t,i),e&4&&-1<zM.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&Yv(s),s=td(t,e,n,i),s===null&&Lu(t,e,i,vc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lu(t,e,i,null,n)}}var vc=null;function td(t,e,n,i){if(vc=null,t=Qh(i),t=jr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vc=t,null}function Jv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PM()){case Jh:return 1;case Wv:return 4;case mc:case DM:return 16;case jv:return 536870912;default:return 16}default:return 16}}var ur=null,ip=null,Xl=null;function e_(){if(Xl)return Xl;var t,e=ip,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xl=r.slice(t,1<i?1-i:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ol(){return!0}function Km(){return!1}function Ln(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ol:Km,this.isPropagationStopped=Km,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),e}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Ln(xo),Oa=St({},xo,{view:0,detail:0}),WM=Ln(Oa),Eu,Tu,Ro,qc=St({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(Eu=t.screenX-Ro.screenX,Tu=t.screenY-Ro.screenY):Tu=Eu=0,Ro=t),Eu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Zm=Ln(qc),jM=St({},qc,{dataTransfer:0}),XM=Ln(jM),qM=St({},Oa,{relatedTarget:0}),wu=Ln(qM),YM=St({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=Ln(YM),KM=St({},xo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZM=Ln(KM),QM=St({},xo,{data:0}),Qm=Ln(QM),JM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n3(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=t3[t])?!!e[t]:!1}function sp(){return n3}var i3=St({},Oa,{key:function(t){if(t.key){var e=JM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e3[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sp,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r3=Ln(i3),s3=St({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Ln(s3),o3=St({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sp}),a3=Ln(o3),l3=St({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),c3=Ln(l3),u3=St({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f3=Ln(u3),d3=[9,13,27,32],op=Vi&&"CompositionEvent"in window,$o=null;Vi&&"documentMode"in document&&($o=document.documentMode);var h3=Vi&&"TextEvent"in window&&!$o,t_=Vi&&(!op||$o&&8<$o&&11>=$o),e0=" ",t0=!1;function n_(t,e){switch(t){case"keyup":return d3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function p3(t,e){switch(t){case"compositionend":return i_(e);case"keypress":return e.which!==32?null:(t0=!0,e0);case"textInput":return t=e.data,t===e0&&t0?null:t;default:return null}}function m3(t,e){if(Rs)return t==="compositionend"||!op&&n_(t,e)?(t=e_(),Xl=ip=ur=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t_&&e.locale!=="ko"?null:e.data;default:return null}}var x3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!x3[t.type]:e==="textarea"}function r_(t,e,n,i){Uv(i),e=_c(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ko=null,ha=null;function g3(t){m_(t,0)}function Yc(t){var e=Ls(t);if(Cv(e))return t}function v3(t,e){if(t==="change")return e}var s_=!1;if(Vi){var bu;if(Vi){var Au="oninput"in document;if(!Au){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),Au=typeof i0.oninput=="function"}bu=Au}else bu=!1;s_=bu&&(!document.documentMode||9<document.documentMode)}function r0(){Ko&&(Ko.detachEvent("onpropertychange",o_),ha=Ko=null)}function o_(t){if(t.propertyName==="value"&&Yc(ha)){var e=[];r_(e,ha,t,Qh(t)),zv(g3,e)}}function _3(t,e,n){t==="focusin"?(r0(),Ko=e,ha=n,Ko.attachEvent("onpropertychange",o_)):t==="focusout"&&r0()}function y3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yc(ha)}function S3(t,e){if(t==="click")return Yc(e)}function M3(t,e){if(t==="input"||t==="change")return Yc(e)}function E3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:E3;function pa(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Of.call(e,r)||!li(t[r],e[r]))return!1}return!0}function s0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function o0(t,e){var n=s0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=s0(n)}}function a_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?a_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l_(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function T3(t){var e=l_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&a_(n.ownerDocument.documentElement,n)){if(i!==null&&ap(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=o0(n,s);var o=o0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var w3=Vi&&"documentMode"in document&&11>=document.documentMode,Ps=null,nd=null,Zo=null,id=!1;function a0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||Ps==null||Ps!==dc(i)||(i=Ps,"selectionStart"in i&&ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Zo&&pa(Zo,i)||(Zo=i,i=_c(nd,"onSelect"),0<i.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ps)))}function al(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ds={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Cu={},c_={};Vi&&(c_=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function $c(t){if(Cu[t])return Cu[t];if(!Ds[t])return t;var e=Ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c_)return Cu[t]=e[n];return t}var u_=$c("animationend"),f_=$c("animationiteration"),d_=$c("animationstart"),h_=$c("transitionend"),p_=new Map,l0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){p_.set(t,e),cs(e,[t])}for(var Ru=0;Ru<l0.length;Ru++){var Pu=l0[Ru],b3=Pu.toLowerCase(),A3=Pu[0].toUpperCase()+Pu.slice(1);br(b3,"on"+A3)}br(u_,"onAnimationEnd");br(f_,"onAnimationIteration");br(d_,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(h_,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function c0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,bM(i,e,void 0,t),t.currentTarget=null}function m_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;c0(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;c0(r,a,c),s=l}}}if(pc)throw t=Qf,pc=!1,Qf=null,t}function ft(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(x_(e,t,2,!1),n.add(i))}function Du(t,e,n){var i=0;e&&(i|=4),x_(n,t,i,e)}var ll="_reactListening"+Math.random().toString(36).slice(2);function ma(t){if(!t[ll]){t[ll]=!0,Ev.forEach(function(n){n!=="selectionchange"&&(C3.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ll]||(e[ll]=!0,Du("selectionchange",!1,e))}}function x_(t,e,n,i){switch(Jv(e)){case 1:var r=HM;break;case 4:r=GM;break;default:r=np}n=r.bind(null,e,n,t),r=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}zv(function(){var c=s,u=Qh(n),f=[];e:{var d=p_.get(t);if(d!==void 0){var p=rp,g=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":p=r3;break;case"focusin":g="focus",p=wu;break;case"focusout":g="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=XM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=a3;break;case u_:case f_:case d_:p=$M;break;case h_:p=c3;break;case"scroll":p=WM;break;case"wheel":p=f3;break;case"copy":case"cut":case"paste":p=ZM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jm}var _=(e&4)!==0,m=!_&&t==="scroll",h=_?d!==null?d+"Capture":null:d;_=[];for(var x=c,v;x!==null;){v=x;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,h!==null&&(E=ca(x,h),E!=null&&_.push(xa(x,E,v)))),m)break;x=x.return}0<_.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==$f&&(g=n.relatedTarget||n.fromElement)&&(jr(g)||g[Hi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?jr(g):null,g!==null&&(m=us(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=Zm,E="onMouseLeave",h="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=Jm,E="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:Ls(p),v=g==null?d:Ls(g),d=new _(E,x+"leave",p,n,u),d.target=m,d.relatedTarget=v,E=null,jr(u)===c&&(_=new _(h,x+"enter",g,n,u),_.target=v,_.relatedTarget=m,E=_),m=E,p&&g)t:{for(_=p,h=g,x=0,v=_;v;v=ds(v))x++;for(v=0,E=h;E;E=ds(E))v++;for(;0<x-v;)_=ds(_),x--;for(;0<v-x;)h=ds(h),v--;for(;x--;){if(_===h||h!==null&&_===h.alternate)break t;_=ds(_),h=ds(h)}_=null}else _=null;p!==null&&u0(f,d,p,_,!1),g!==null&&m!==null&&u0(f,m,g,_,!0)}}e:{if(d=c?Ls(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var A=v3;else if(n0(d))if(s_)A=M3;else{A=y3;var b=_3}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=S3);if(A&&(A=A(t,c))){r_(f,A,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Wf(d,"number",d.value)}switch(b=c?Ls(c):window,t){case"focusin":(n0(b)||b.contentEditable==="true")&&(Ps=b,nd=c,Zo=null);break;case"focusout":Zo=nd=Ps=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,a0(f,n,u);break;case"selectionchange":if(w3)break;case"keydown":case"keyup":a0(f,n,u)}var C;if(op)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Rs?n_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(t_&&n.locale!=="ko"&&(Rs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Rs&&(C=e_()):(ur=u,ip="value"in ur?ur.value:ur.textContent,Rs=!0)),b=_c(c,P),0<b.length&&(P=new Qm(P,t,null,n,u),f.push({event:P,listeners:b}),C?P.data=C:(C=i_(n),C!==null&&(P.data=C)))),(C=h3?p3(t,n):m3(t,n))&&(c=_c(c,"onBeforeInput"),0<c.length&&(u=new Qm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=C))}m_(f,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _c(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ca(t,n),s!=null&&i.unshift(xa(t,s,r)),s=ca(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function u0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ca(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=ca(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var R3=/\r\n?/g,P3=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(R3,`
`).replace(P3,"")}function cl(t,e,n){if(e=f0(e),f0(t)!==e&&n)throw Error(ne(425))}function yc(){}var rd=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,D3=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,L3=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(t){return d0.resolve(null).then(t).catch(N3)}:ad;function N3(t){setTimeout(function(){throw t})}function Nu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),da(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);da(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function h0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var go=Math.random().toString(36).slice(2),pi="__reactFiber$"+go,ga="__reactProps$"+go,Hi="__reactContainer$"+go,ld="__reactEvents$"+go,I3="__reactListeners$"+go,U3="__reactHandles$"+go;function jr(t){var e=t[pi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[pi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=h0(t);t!==null;){if(n=t[pi])return n;t=h0(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[pi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Kc(t){return t[ga]||null}var cd=[],Ns=-1;function Ar(t){return{current:t}}function dt(t){0>Ns||(t.current=cd[Ns],cd[Ns]=null,Ns--)}function ct(t,e){Ns++,cd[Ns]=t.current,t.current=e}var Er={},en=Ar(Er),xn=Ar(!1),ns=Er;function to(t,e){var n=t.type.contextTypes;if(!n)return Er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Sc(){dt(xn),dt(en)}function p0(t,e,n){if(en.current!==Er)throw Error(ne(168));ct(en,e),ct(xn,n)}function g_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,_M(t)||"Unknown",r));return St({},n,i)}function Mc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ns=en.current,ct(en,t),ct(xn,xn.current),!0}function m0(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=g_(t,e,ns),i.__reactInternalMemoizedMergedChildContext=t,dt(xn),dt(en),ct(en,t)):dt(xn),ct(xn,n)}var Di=null,Zc=!1,Iu=!1;function v_(t){Di===null?Di=[t]:Di.push(t)}function F3(t){Zc=!0,v_(t)}function Cr(){if(!Iu&&Di!==null){Iu=!0;var t=0,e=it;try{var n=Di;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Di=null,Zc=!1}catch(r){throw Di!==null&&(Di=Di.slice(t+1)),Gv(Jh,Cr),r}finally{it=e,Iu=!1}}return null}var Is=[],Us=0,Ec=null,Tc=0,On=[],kn=0,is=null,Ni=1,Ii="";function zr(t,e){Is[Us++]=Tc,Is[Us++]=Ec,Ec=t,Tc=e}function __(t,e,n){On[kn++]=Ni,On[kn++]=Ii,On[kn++]=is,is=t;var i=Ni;t=Ii;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-oi(e)+r|n<<r|i,Ii=s+t}else Ni=1<<s|n<<r|i,Ii=t}function lp(t){t.return!==null&&(zr(t,1),__(t,1,0))}function cp(t){for(;t===Ec;)Ec=Is[--Us],Is[Us]=null,Tc=Is[--Us],Is[Us]=null;for(;t===is;)is=On[--kn],On[kn]=null,Ii=On[--kn],On[kn]=null,Ni=On[--kn],On[kn]=null}var Cn=null,An=null,pt=!1,ti=null;function y_(t,e){var n=zn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function x0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:Ni,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=zn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fd(t){if(pt){var e=An;if(e){var n=e;if(!x0(t,e)){if(ud(t))throw Error(ne(418));e=xr(n.nextSibling);var i=Cn;e&&x0(t,e)?y_(i,n):(t.flags=t.flags&-4097|2,pt=!1,Cn=t)}}else{if(ud(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,Cn=t}}}function g0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function ul(t){if(t!==Cn)return!1;if(!pt)return g0(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=An)){if(ud(t))throw S_(),Error(ne(418));for(;e;)y_(t,e),e=xr(e.nextSibling)}if(g0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?xr(t.stateNode.nextSibling):null;return!0}function S_(){for(var t=An;t;)t=xr(t.nextSibling)}function no(){An=Cn=null,pt=!1}function up(t){ti===null?ti=[t]:ti.push(t)}var O3=$i.ReactCurrentBatchConfig;function Po(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function fl(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function v0(t){var e=t._init;return e(t._payload)}function M_(t){function e(h,x){if(t){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function n(h,x){if(!t)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=yr(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,t?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,E){return x===null||x.tag!==6?(x=Vu(v,h.mode,E),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,E){var A=v.type;return A===Cs?u(h,x,v.props.children,E,v.key):x!==null&&(x.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sr&&v0(A)===x.type)?(E=r(x,v.props),E.ref=Po(h,x,v),E.return=h,E):(E=ec(v.type,v.key,v.props,null,h.mode,E),E.ref=Po(h,x,v),E.return=h,E)}function c(h,x,v,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Hu(v,h.mode,E),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function u(h,x,v,E,A){return x===null||x.tag!==7?(x=Qr(v,h.mode,E,A),x.return=h,x):(x=r(x,v),x.return=h,x)}function f(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Vu(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case el:return v=ec(x.type,x.key,x.props,null,h.mode,v),v.ref=Po(h,null,x),v.return=h,v;case As:return x=Hu(x,h.mode,v),x.return=h,x;case sr:var E=x._init;return f(h,E(x._payload),v)}if(Ho(x)||wo(x))return x=Qr(x,h.mode,v,null),x.return=h,x;fl(h,x)}return null}function d(h,x,v,E){var A=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(h,x,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case el:return v.key===A?l(h,x,v,E):null;case As:return v.key===A?c(h,x,v,E):null;case sr:return A=v._init,d(h,x,A(v._payload),E)}if(Ho(v)||wo(v))return A!==null?null:u(h,x,v,E,null);fl(h,v)}return null}function p(h,x,v,E,A){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(v)||null,a(x,h,""+E,A);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case el:return h=h.get(E.key===null?v:E.key)||null,l(x,h,E,A);case As:return h=h.get(E.key===null?v:E.key)||null,c(x,h,E,A);case sr:var b=E._init;return p(h,x,v,b(E._payload),A)}if(Ho(E)||wo(E))return h=h.get(v)||null,u(x,h,E,A,null);fl(x,E)}return null}function g(h,x,v,E){for(var A=null,b=null,C=x,P=x=0,w=null;C!==null&&P<v.length;P++){C.index>P?(w=C,C=null):w=C.sibling;var M=d(h,C,v[P],E);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(h,C),x=s(M,x,P),b===null?A=M:b.sibling=M,b=M,C=w}if(P===v.length)return n(h,C),pt&&zr(h,P),A;if(C===null){for(;P<v.length;P++)C=f(h,v[P],E),C!==null&&(x=s(C,x,P),b===null?A=C:b.sibling=C,b=C);return pt&&zr(h,P),A}for(C=i(h,C);P<v.length;P++)w=p(C,h,P,v[P],E),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?P:w.key),x=s(w,x,P),b===null?A=w:b.sibling=w,b=w);return t&&C.forEach(function(N){return e(h,N)}),pt&&zr(h,P),A}function _(h,x,v,E){var A=wo(v);if(typeof A!="function")throw Error(ne(150));if(v=A.call(v),v==null)throw Error(ne(151));for(var b=A=null,C=x,P=x=0,w=null,M=v.next();C!==null&&!M.done;P++,M=v.next()){C.index>P?(w=C,C=null):w=C.sibling;var N=d(h,C,M.value,E);if(N===null){C===null&&(C=w);break}t&&C&&N.alternate===null&&e(h,C),x=s(N,x,P),b===null?A=N:b.sibling=N,b=N,C=w}if(M.done)return n(h,C),pt&&zr(h,P),A;if(C===null){for(;!M.done;P++,M=v.next())M=f(h,M.value,E),M!==null&&(x=s(M,x,P),b===null?A=M:b.sibling=M,b=M);return pt&&zr(h,P),A}for(C=i(h,C);!M.done;P++,M=v.next())M=p(C,h,P,M.value,E),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?P:M.key),x=s(M,x,P),b===null?A=M:b.sibling=M,b=M);return t&&C.forEach(function(k){return e(h,k)}),pt&&zr(h,P),A}function m(h,x,v,E){if(typeof v=="object"&&v!==null&&v.type===Cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case el:e:{for(var A=v.key,b=x;b!==null;){if(b.key===A){if(A=v.type,A===Cs){if(b.tag===7){n(h,b.sibling),x=r(b,v.props.children),x.return=h,h=x;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===sr&&v0(A)===b.type){n(h,b.sibling),x=r(b,v.props),x.ref=Po(h,b,v),x.return=h,h=x;break e}n(h,b);break}else e(h,b);b=b.sibling}v.type===Cs?(x=Qr(v.props.children,h.mode,E,v.key),x.return=h,h=x):(E=ec(v.type,v.key,v.props,null,h.mode,E),E.ref=Po(h,x,v),E.return=h,h=E)}return o(h);case As:e:{for(b=v.key;x!==null;){if(x.key===b)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{n(h,x);break}else e(h,x);x=x.sibling}x=Hu(v,h.mode,E),x.return=h,h=x}return o(h);case sr:return b=v._init,m(h,x,b(v._payload),E)}if(Ho(v))return g(h,x,v,E);if(wo(v))return _(h,x,v,E);fl(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(h,x.sibling),x=r(x,v),x.return=h,h=x):(n(h,x),x=Vu(v,h.mode,E),x.return=h,h=x),o(h)):n(h,x)}return m}var io=M_(!0),E_=M_(!1),wc=Ar(null),bc=null,Fs=null,fp=null;function dp(){fp=Fs=bc=null}function hp(t){var e=wc.current;dt(wc),t._currentValue=e}function dd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function $s(t,e){bc=t,fp=Fs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(fp!==t)if(t={context:t,memoizedValue:e,next:null},Fs===null){if(bc===null)throw Error(ne(308));Fs=t,bc.dependencies={lanes:0,firstContext:t}}else Fs=Fs.next=t;return e}var Xr=null;function pp(t){Xr===null?Xr=[t]:Xr.push(t)}function T_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,pp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Gi(t,i)}function Gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function mp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function w_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gi(t,n)}return r=i.interleaved,r===null?(e.next=e,pp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gi(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}function _0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ac(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(d=e,p=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=St({},f,d);break e;case 2:or=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ss|=o,t.lanes=o,t.memoizedState=f}}function y0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var za={},gi=Ar(za),va=Ar(za),_a=Ar(za);function qr(t){if(t===za)throw Error(ne(174));return t}function xp(t,e){switch(ct(_a,e),ct(va,t),ct(gi,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xf(e,t)}dt(gi),ct(gi,e)}function ro(){dt(gi),dt(va),dt(_a)}function b_(t){qr(_a.current);var e=qr(gi.current),n=Xf(e,t.type);e!==n&&(ct(va,t),ct(gi,n))}function gp(t){va.current===t&&(dt(gi),dt(va))}var vt=Ar(0);function Cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uu=[];function vp(){for(var t=0;t<Uu.length;t++)Uu[t]._workInProgressVersionPrimary=null;Uu.length=0}var $l=$i.ReactCurrentDispatcher,Fu=$i.ReactCurrentBatchConfig,rs=0,yt=null,Ut=null,Ht=null,Rc=!1,Qo=!1,ya=0,k3=0;function Yt(){throw Error(ne(321))}function _p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function yp(t,e,n,i,r,s){if(rs=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?H3:G3,t=n(i,r),Qo){s=0;do{if(Qo=!1,ya=0,25<=s)throw Error(ne(301));s+=1,Ht=Ut=null,e.updateQueue=null,$l.current=W3,t=n(i,r)}while(Qo)}if($l.current=Pc,e=Ut!==null&&Ut.next!==null,rs=0,Ht=Ut=yt=null,Rc=!1,e)throw Error(ne(300));return t}function Sp(){var t=ya!==0;return ya=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function jn(){if(Ut===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?yt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(ne(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?yt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Sa(t,e){return typeof e=="function"?e(t):e}function Ou(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((rs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,yt.lanes|=u,ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,ss|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ku(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function A_(){}function C_(t,e){var n=yt,i=jn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Mp(D_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Ma(9,P_.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(ne(349));rs&30||R_(n,e,r)}return r}function R_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function P_(t,e,n,i){e.value=n,e.getSnapshot=i,L_(e)&&N_(t)}function D_(t,e,n){return n(function(){L_(e)&&N_(t)})}function L_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function N_(t){var e=Gi(t,1);e!==null&&ai(e,t,1,-1)}function S0(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sa,lastRenderedState:t},e.queue=t,t=t.dispatch=V3.bind(null,yt,t),[e.memoizedState,t]}function Ma(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function I_(){return jn().memoizedState}function Kl(t,e,n,i){var r=di();yt.flags|=t,r.memoizedState=Ma(1|e,n,void 0,i===void 0?null:i)}function Qc(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var o=Ut.memoizedState;if(s=o.destroy,i!==null&&_p(i,o.deps)){r.memoizedState=Ma(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Ma(1|e,n,s,i)}function M0(t,e){return Kl(8390656,8,t,e)}function Mp(t,e){return Qc(2048,8,t,e)}function U_(t,e){return Qc(4,2,t,e)}function F_(t,e){return Qc(4,4,t,e)}function O_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,O_.bind(null,e,t),n)}function Ep(){}function z_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_p(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function B_(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&_p(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return rs&21?(li(n,e)||(n=Xv(),yt.lanes|=n,ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function z3(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Fu.transition;Fu.transition={};try{t(!1),e()}finally{it=n,Fu.transition=i}}function H_(){return jn().memoizedState}function B3(t,e,n){var i=_r(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},G_(t))W_(e,n);else if(n=T_(t,e,n,i),n!==null){var r=on();ai(n,t,i,r),j_(n,e,i)}}function V3(t,e,n){var i=_r(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(G_(t))W_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,pp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=T_(t,e,r,i),n!==null&&(r=on(),ai(n,t,i,r),j_(n,e,i))}}function G_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function W_(t,e){Qo=Rc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ep(t,n)}}var Pc={readContext:Wn,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},H3={readContext:Wn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:M0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4194308,4,O_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Kl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Kl(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=B3.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:S0,useDebugValue:Ep,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=S0(!1),e=t[0];return t=z3.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=di();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Gt===null)throw Error(ne(349));rs&30||R_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,M0(D_.bind(null,i,s,t),[t]),i.flags|=2048,Ma(9,P_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=di(),e=Gt.identifierPrefix;if(pt){var n=Ii,i=Ni;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ya++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=k3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},G3={readContext:Wn,useCallback:z_,useContext:Wn,useEffect:Mp,useImperativeHandle:k_,useInsertionEffect:U_,useLayoutEffect:F_,useMemo:B_,useReducer:Ou,useRef:I_,useState:function(){return Ou(Sa)},useDebugValue:Ep,useDeferredValue:function(t){var e=jn();return V_(e,Ut.memoizedState,t)},useTransition:function(){var t=Ou(Sa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:C_,useId:H_,unstable_isNewReconciler:!1},W3={readContext:Wn,useCallback:z_,useContext:Wn,useEffect:Mp,useImperativeHandle:k_,useInsertionEffect:U_,useLayoutEffect:F_,useMemo:B_,useReducer:ku,useRef:I_,useState:function(){return ku(Sa)},useDebugValue:Ep,useDeferredValue:function(t){var e=jn();return Ut===null?e.memoizedState=t:V_(e,Ut.memoizedState,t)},useTransition:function(){var t=ku(Sa)[0],e=jn().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:C_,useId:H_,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jc={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=_r(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ai(e,t,r,i),Yl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=_r(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,r),e!==null&&(ai(e,t,r,i),Yl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=_r(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=gr(t,r,i),e!==null&&(ai(e,t,i,n),Yl(e,t,i))}};function E0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!pa(n,i)||!pa(r,s):!0}function X_(t,e,n){var i=!1,r=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=gn(e)?ns:en.current,i=e.contextTypes,s=(i=i!=null)?to(t,r):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function T0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jc.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=gn(e)?ns:en.current,r.context=to(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jc.enqueueReplaceState(r,r.state,null),Ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function so(t,e){try{var n="",i=e;do n+=vM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var j3=typeof WeakMap=="function"?WeakMap:Map;function q_(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Lc||(Lc=!0,wd=i),md(t,e)},n}function Y_(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function w0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new j3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sE.bind(null,t,e,n),e.then(t,t))}function b0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function A0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t)}var X3=$i.ReactCurrentOwner,pn=!1;function rn(t,e,n,i){e.child=t===null?E_(e,null,n,i):io(e,t.child,n,i)}function C0(t,e,n,i,r){n=n.render;var s=e.ref;return $s(e,r),i=yp(t,e,n,i,s,r),n=Sp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(pt&&n&&lp(e),e.flags|=1,rn(t,e,i,r),e.child)}function R0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$_(t,e,s,i,r)):(t=ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(o,i)&&t.ref===e.ref)return Wi(t,e,r)}return e.flags|=1,t=yr(s,i),t.ref=e.ref,t.return=e,e.child=t}function $_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(pa(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Wi(t,e,r)}return xd(t,e,n,i,r)}function K_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(ks,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(ks,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ct(ks,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ct(ks,bn),bn|=i;return rn(t,e,r,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xd(t,e,n,i,r){var s=gn(n)?ns:en.current;return s=to(e,s),$s(e,r),n=yp(t,e,n,i,s,r),i=Sp(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Wi(t,e,r)):(pt&&i&&lp(e),e.flags|=1,rn(t,e,n,r),e.child)}function P0(t,e,n,i,r){if(gn(n)){var s=!0;Mc(e)}else s=!1;if($s(e,r),e.stateNode===null)Zl(t,e),X_(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=gn(n)?ns:en.current,c=to(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&T0(e,o,i,c),or=!1;var d=e.memoizedState;o.state=d,Ac(e,i,o,r),l=e.memoizedState,a!==i||d!==l||xn.current||or?(typeof u=="function"&&(hd(e,n,u,i),l=e.memoizedState),(a=or||E0(e,n,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,w_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=gn(n)?ns:en.current,l=to(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&T0(e,o,i,l),or=!1,d=e.memoizedState,o.state=d,Ac(e,i,o,r);var g=e.memoizedState;a!==f||d!==g||xn.current||or?(typeof p=="function"&&(hd(e,n,p,i),g=e.memoizedState),(c=or||E0(e,n,c,i,d,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return gd(t,e,n,i,s,r)}function gd(t,e,n,i,r,s){Z_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&m0(e,n,!1),Wi(t,e,s);i=e.stateNode,X3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=io(e,t.child,null,s),e.child=io(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&m0(e,n,!0),e.child}function Q_(t){var e=t.stateNode;e.pendingContext?p0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&p0(t,e.context,!1),xp(t,e.containerInfo)}function D0(t,e,n,i,r){return no(),up(r),e.flags|=256,rn(t,e,n,i),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(vt,r&1),t===null)return fd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nu(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=vd,t):Tp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return q3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=yr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=yr(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vd,i}return s=t.child,t=s.sibling,i=yr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Tp(t,e){return e=nu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,i){return i!==null&&up(i),io(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(ne(422))),dl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nu({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=vd,s);if(!(e.mode&1))return dl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=zu(s,i,void 0),dl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Gt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gi(t,r),ai(i,t,r,-1))}return Pp(),i=zu(Error(ne(421))),dl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=xr(r.nextSibling),Cn=e,pt=!0,ti=null,t!==null&&(On[kn++]=Ni,On[kn++]=Ii,On[kn++]=is,Ni=t.id,Ii=t.overflow,is=e),e=Tp(e,i.children),e.flags|=4096,e)}function L0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),dd(t.return,e,n)}function Bu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ey(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&L0(t,n,e);else if(t.tag===19)L0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y3(t,e,n){switch(e.tag){case 3:Q_(e),no();break;case 5:b_(e);break;case 1:gn(e.type)&&Mc(e);break;case 4:xp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(ct(vt,vt.current&1),t=Wi(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ey(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,K_(t,e,n)}return Wi(t,e,n)}var ty,yd,ny,iy;ty=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};ny=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,qr(gi.current);var s=null;switch(n){case"input":r=Hf(t,r),i=Hf(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=jf(t,r),i=jf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=yc)}qf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(aa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(aa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};iy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Do(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $3(t,e,n){var i=e.pendingProps;switch(cp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return gn(e.type)&&Sc(),$t(e),null;case 3:return i=e.stateNode,ro(),dt(xn),dt(en),vp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(Cd(ti),ti=null))),yd(t,e),$t(e),null;case 5:gp(e);var r=qr(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)ny(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return $t(e),null}if(t=qr(gi.current),ul(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[pi]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<Wo.length;r++)ft(Wo[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Vm(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Gm(i,s),ft("invalid",i)}qf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&cl(i.textContent,a,t),r=["children",""+a]):aa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":tl(i),Hm(i,s,!0);break;case"textarea":tl(i),Wm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=yc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[pi]=e,t[ga]=i,ty(t,e,!1,!1),e.stateNode=t;e:{switch(o=Yf(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Wo.length;r++)ft(Wo[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Vm(t,i),r=Hf(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Gm(t,i),r=jf(t,i),ft("invalid",t);break;default:r=i}qf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Iv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&la(t,l):typeof l=="number"&&la(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(aa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Yh(t,s,l,o))}switch(n){case"input":tl(t),Hm(t,i,!1);break;case"textarea":tl(t),Wm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Mr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=yc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)iy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=qr(_a.current),qr(gi.current),ul(e)){if(i=e.stateNode,n=e.memoizedProps,i[pi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:cl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&cl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[pi]=e,e.stateNode=i}return $t(e),null;case 13:if(dt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&An!==null&&e.mode&1&&!(e.flags&128))S_(),no(),e.flags|=98560,s=!1;else if(s=ul(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[pi]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else ti!==null&&(Cd(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Ot===0&&(Ot=3):Pp())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return ro(),yd(t,e),t===null&&ma(e.stateNode.containerInfo),$t(e),null;case 10:return hp(e.type._context),$t(e),null;case 17:return gn(e.type)&&Sc(),$t(e),null;case 19:if(dt(vt),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Cc(t),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>oo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return $t(e),null}else 2*At()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=vt.current,ct(vt,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Rp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function K3(t,e){switch(cp(e),e.tag){case 1:return gn(e.type)&&Sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ro(),dt(xn),dt(en),vp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gp(e),null;case 13:if(dt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(vt),null;case 4:return ro(),null;case 10:return hp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var hl=!1,Qt=!1,Z3=typeof WeakSet=="function"?WeakSet:Set,me=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var N0=!1;function Q3(t,e){if(rd=gc,t=l_(),ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},gc=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:Jn(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(E){bt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return g=N0,N0=!1,g}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ry(t){var e=t.alternate;e!==null&&(t.alternate=null,ry(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pi],delete e[ga],delete e[ld],delete e[I3],delete e[U3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sy(t){return t.tag===5||t.tag===3||t.tag===4}function I0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=yc));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}var jt=null,ei=!1;function Ki(t,e,n){for(n=n.child;n!==null;)oy(t,e,n),n=n.sibling}function oy(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Xc,n)}catch{}switch(n.tag){case 5:Qt||Os(n,e);case 6:var i=jt,r=ei;jt=null,Ki(t,e,n),jt=i,ei=r,jt!==null&&(ei?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ei?(t=jt,n=n.stateNode,t.nodeType===8?Nu(t.parentNode,n):t.nodeType===1&&Nu(t,n),da(t)):Nu(jt,n.stateNode));break;case 4:i=jt,r=ei,jt=n.stateNode.containerInfo,ei=!0,Ki(t,e,n),jt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),r=r.next}while(r!==i)}Ki(t,e,n);break;case 1:if(!Qt&&(Os(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Ki(t,e,n);break;case 21:Ki(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ki(t,e,n),Qt=i):Ki(t,e,n);break;default:Ki(t,e,n)}}function U0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Z3),e.forEach(function(i){var r=aE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ei=!1;break e;case 3:jt=a.stateNode.containerInfo,ei=!0;break e;case 4:jt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(jt===null)throw Error(ne(160));oy(s,o,r),jt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ay(e,t),e=e.sibling}function ay(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),fi(t),i&4){try{Jo(3,t,t.return),eu(3,t)}catch(_){bt(t,t.return,_)}try{Jo(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:qn(e,t),fi(t),i&512&&n!==null&&Os(n,n.return);break;case 5:if(qn(e,t),fi(t),i&512&&n!==null&&Os(n,n.return),t.flags&32){var r=t.stateNode;try{la(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rv(r,s),Yf(a,o);var c=Yf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Iv(r,f):u==="dangerouslySetInnerHTML"?Lv(r,f):u==="children"?la(r,f):Yh(r,u,f,c)}switch(a){case"input":Gf(r,s);break;case"textarea":Pv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?js(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(qn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(qn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:qn(e,t),fi(t);break;case 13:qn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ap=At())),i&4&&U0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||u,qn(e,t),Qt=c):qn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(me=t,u=t.child;u!==null;){for(f=me=u;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:Jo(4,d,d.return);break;case 1:Os(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Os(d,d.return);break;case 22:if(d.memoizedState!==null){O0(f);continue}}p!==null?(p.return=d,me=p):O0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nv("display",o))}catch(_){bt(t,t.return,_)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){bt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:qn(e,t),fi(t),i&4&&U0(t);break;case 21:break;default:qn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sy(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(la(r,""),i.flags&=-33);var s=I0(t);Td(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=I0(t);Ed(t,a,o);break;default:throw Error(ne(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function J3(t,e,n){me=t,ly(t)}function ly(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||hl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=hl;var c=Qt;if(hl=o,(Qt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?k0(r):l!==null?(l.return=o,me=l):k0(r);for(;s!==null;)me=s,ly(s),s=s.sibling;me=r,hl=a,Qt=c}F0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):F0(t)}}function F0(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&y0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}y0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Qt||e.flags&512&&Md(e)}catch(d){bt(e,e.return,d)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function O0(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function k0(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{eu(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Md(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var eE=Math.ceil,Dc=$i.ReactCurrentDispatcher,wp=$i.ReactCurrentOwner,Hn=$i.ReactCurrentBatchConfig,Ke=0,Gt=null,Lt=null,Xt=0,bn=0,ks=Ar(0),Ot=0,Ea=null,ss=0,tu=0,bp=0,ea=null,hn=null,Ap=0,oo=1/0,Pi=null,Lc=!1,wd=null,vr=null,pl=!1,fr=null,Nc=0,ta=0,bd=null,Ql=-1,Jl=0;function on(){return Ke&6?At():Ql!==-1?Ql:Ql=At()}function _r(t){return t.mode&1?Ke&2&&Xt!==0?Xt&-Xt:O3.transition!==null?(Jl===0&&(Jl=Xv()),Jl):(t=it,t!==0||(t=window.event,t=t===void 0?16:Jv(t.type)),t):1}function ai(t,e,n,i){if(50<ta)throw ta=0,bd=null,Error(ne(185));Fa(t,n,i),(!(Ke&2)||t!==Gt)&&(t===Gt&&(!(Ke&2)&&(tu|=n),Ot===4&&lr(t,Xt)),vn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(oo=At()+500,Zc&&Cr()))}function vn(t,e){var n=t.callbackNode;OM(t,e);var i=xc(t,t===Gt?Xt:0);if(i===0)n!==null&&qm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&qm(n),e===1)t.tag===0?F3(z0.bind(null,t)):v_(z0.bind(null,t)),L3(function(){!(Ke&6)&&Cr()}),n=null;else{switch(qv(i)){case 1:n=Jh;break;case 4:n=Wv;break;case 16:n=mc;break;case 536870912:n=jv;break;default:n=mc}n=xy(n,cy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cy(t,e){if(Ql=-1,Jl=0,Ke&6)throw Error(ne(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var i=xc(t,t===Gt?Xt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ic(t,i);else{e=i;var r=Ke;Ke|=2;var s=fy();(Gt!==t||Xt!==e)&&(Pi=null,oo=At()+500,Zr(t,e));do try{iE();break}catch(a){uy(t,a)}while(!0);dp(),Dc.current=s,Ke=r,Lt!==null?e=0:(Gt=null,Xt=0,e=Ot)}if(e!==0){if(e===2&&(r=Jf(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=Ea,Zr(t,0),lr(t,i),vn(t,At()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!tE(r)&&(e=Ic(t,i),e===2&&(s=Jf(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=Ea,Zr(t,0),lr(t,i),vn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Br(t,hn,Pi);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Ap+500-At(),10<e)){if(xc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Br.bind(null,t,hn,Pi),e);break}Br(t,hn,Pi);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eE(i/1960))-i,10<i){t.timeoutHandle=ad(Br.bind(null,t,hn,Pi),i);break}Br(t,hn,Pi);break;case 5:Br(t,hn,Pi);break;default:throw Error(ne(329))}}}return vn(t,At()),t.callbackNode===n?cy.bind(null,t):null}function Ad(t,e){var n=ea;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=Ic(t,e),t!==2&&(e=hn,hn=n,e!==null&&Cd(e)),t}function Cd(t){hn===null?hn=t:hn.push.apply(hn,t)}function tE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~bp,e&=~tu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function z0(t){if(Ke&6)throw Error(ne(327));Ks();var e=xc(t,0);if(!(e&1))return vn(t,At()),null;var n=Ic(t,e);if(t.tag!==0&&n===2){var i=Jf(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=Ea,Zr(t,0),lr(t,e),vn(t,At()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,hn,Pi),vn(t,At()),null}function Cp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(oo=At()+500,Zc&&Cr())}}function os(t){fr!==null&&fr.tag===0&&!(Ke&6)&&Ks();var e=Ke;Ke|=1;var n=Hn.transition,i=it;try{if(Hn.transition=null,it=1,t)return t()}finally{it=i,Hn.transition=n,Ke=e,!(Ke&6)&&Cr()}}function Rp(){bn=ks.current,dt(ks)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D3(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(cp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sc();break;case 3:ro(),dt(xn),dt(en),vp();break;case 5:gp(i);break;case 4:ro();break;case 13:dt(vt);break;case 19:dt(vt);break;case 10:hp(i.type._context);break;case 22:case 23:Rp()}n=n.return}if(Gt=t,Lt=t=yr(t.current,null),Xt=bn=e,Ot=0,Ea=null,bp=tu=ss=0,hn=ea=null,Xr!==null){for(e=0;e<Xr.length;e++)if(n=Xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Xr=null}return t}function uy(t,e){do{var n=Lt;try{if(dp(),$l.current=Pc,Rc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rc=!1}if(rs=0,Ht=Ut=yt=null,Qo=!1,ya=0,wp.current=null,n===null||n.return===null){Ot=1,Ea=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=b0(o);if(p!==null){p.flags&=-257,A0(p,o,a,s,e),p.mode&1&&w0(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){w0(s,c,e),Pp();break e}l=Error(ne(426))}}else if(pt&&a.mode&1){var m=b0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),A0(m,o,a,s,e),up(so(l,a));break e}}s=l=so(l,a),Ot!==4&&(Ot=2),ea===null?ea=[s]:ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=q_(s,l,e);_0(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vr===null||!vr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Y_(s,a,e);_0(s,E);break e}}s=s.return}while(s!==null)}hy(n)}catch(A){e=A,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function fy(){var t=Dc.current;return Dc.current=Pc,t===null?Pc:t}function Pp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(ss&268435455)&&!(tu&268435455)||lr(Gt,Xt)}function Ic(t,e){var n=Ke;Ke|=2;var i=fy();(Gt!==t||Xt!==e)&&(Pi=null,Zr(t,e));do try{nE();break}catch(r){uy(t,r)}while(!0);if(dp(),Ke=n,Dc.current=i,Lt!==null)throw Error(ne(261));return Gt=null,Xt=0,Ot}function nE(){for(;Lt!==null;)dy(Lt)}function iE(){for(;Lt!==null&&!CM();)dy(Lt)}function dy(t){var e=my(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?hy(t):Lt=e,wp.current=null}function hy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=K3(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Lt=null;return}}else if(n=$3(n,e,bn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ot===0&&(Ot=5)}function Br(t,e,n){var i=it,r=Hn.transition;try{Hn.transition=null,it=1,rE(t,e,n,i)}finally{Hn.transition=r,it=i}return null}function rE(t,e,n,i){do Ks();while(fr!==null);if(Ke&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kM(t,s),t===Gt&&(Lt=Gt=null,Xt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||pl||(pl=!0,xy(mc,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Hn.transition,Hn.transition=null;var o=it;it=1;var a=Ke;Ke|=4,wp.current=null,Q3(t,n),ay(n,t),T3(sd),gc=!!rd,sd=rd=null,t.current=n,J3(n),RM(),Ke=a,it=o,Hn.transition=s}else t.current=n;if(pl&&(pl=!1,fr=t,Nc=r),s=t.pendingLanes,s===0&&(vr=null),LM(n.stateNode),vn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lc)throw Lc=!1,t=wd,wd=null,t;return Nc&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===bd?ta++:(ta=0,bd=t):ta=0,Cr(),null}function Ks(){if(fr!==null){var t=qv(Nc),e=Hn.transition,n=it;try{if(Hn.transition=null,it=16>t?16:t,fr===null)var i=!1;else{if(t=fr,fr=null,Nc=0,Ke&6)throw Error(ne(331));var r=Ke;for(Ke|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:Jo(8,u,s)}var f=u.child;if(f!==null)f.return=u,me=f;else for(;me!==null;){u=me;var d=u.sibling,p=u.return;if(ry(u),u===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var x=t.current;for(me=x;me!==null;){o=me;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,me=v;else e:for(o=x;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:eu(9,a)}}catch(A){bt(a,a.return,A)}if(a===o){me=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,me=E;break e}me=a.return}}if(Ke=r,Cr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Xc,t)}catch{}i=!0}return i}finally{it=n,Hn.transition=e}}return!1}function B0(t,e,n){e=so(n,e),e=q_(t,e,1),t=gr(t,e,1),e=on(),t!==null&&(Fa(t,1,e),vn(t,e))}function bt(t,e,n){if(t.tag===3)B0(t,t,n);else for(;e!==null;){if(e.tag===3){B0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(vr===null||!vr.has(i))){t=so(n,t),t=Y_(e,t,1),e=gr(e,t,1),t=on(),e!==null&&(Fa(e,1,t),vn(e,t));break}}e=e.return}}function sE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Xt&n)===n&&(Ot===4||Ot===3&&(Xt&130023424)===Xt&&500>At()-Ap?Zr(t,0):bp|=n),vn(t,e)}function py(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=on();t=Gi(t,e),t!==null&&(Fa(t,e,n),vn(t,n))}function oE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),py(t,n)}function aE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),py(t,n)}var my;my=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,Y3(t,e,n);pn=!!(t.flags&131072)}else pn=!1,pt&&e.flags&1048576&&__(e,Tc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zl(t,e),t=e.pendingProps;var r=to(e,en.current);$s(e,n),r=yp(null,e,i,t,r,n);var s=Sp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Mc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mp(e),r.updater=Jc,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=gd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&lp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cE(i),t=Jn(i,t),r){case 0:e=xd(null,e,i,t,n);break e;case 1:e=P0(null,e,i,t,n);break e;case 11:e=C0(null,e,i,t,n);break e;case 14:e=R0(null,e,i,Jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),xd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),P0(t,e,i,r,n);case 3:e:{if(Q_(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,w_(t,e),Ac(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(ne(423)),e),e=D0(t,e,i,n,r);break e}else if(i!==r){r=so(Error(ne(424)),e),e=D0(t,e,i,n,r);break e}else for(An=xr(e.stateNode.containerInfo.firstChild),Cn=e,pt=!0,ti=null,n=E_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),i===r){e=Wi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return b_(e),t===null&&fd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),Z_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&fd(e),null;case 13:return J_(t,e,n);case 4:return xp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=io(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),C0(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ct(wc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!xn.current){e=Wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),dd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),dd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$s(e,n),r=Wn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),R0(t,e,i,r,n);case 15:return $_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Zl(t,e),e.tag=1,gn(i)?(t=!0,Mc(e)):t=!1,$s(e,n),X_(e,i,r),pd(e,i,r,n),gd(null,e,i,!0,t,n);case 19:return ey(t,e,n);case 22:return K_(t,e,n)}throw Error(ne(156,e.tag))};function xy(t,e){return Gv(t,e)}function lE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,e,n,i){return new lE(t,e,n,i)}function Dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cE(t){if(typeof t=="function")return Dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kh)return 11;if(t===Zh)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=zn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ec(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return Qr(n.children,r,s,e);case $h:o=8,r|=8;break;case kf:return t=zn(12,n,e,r|2),t.elementType=kf,t.lanes=s,t;case zf:return t=zn(13,n,e,r),t.elementType=zf,t.lanes=s,t;case Bf:return t=zn(19,n,e,r),t.elementType=Bf,t.lanes=s,t;case bv:return nu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tv:o=10;break e;case wv:o=9;break e;case Kh:o=11;break e;case Zh:o=14;break e;case sr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=zn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=zn(7,t,i,e),t.lanes=n,t}function nu(t,e,n,i){return t=zn(22,t,i,e),t.elementType=bv,t.lanes=n,t.stateNode={isHidden:!1},t}function Vu(t,e,n){return t=zn(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=zn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mu(0),this.expirationTimes=Mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lp(t,e,n,i,r,s,o,a,l){return t=new uE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=zn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mp(s),t}function fE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function gy(t){if(!t)return Er;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(gn(n))return g_(t,n,e)}return e}function vy(t,e,n,i,r,s,o,a,l){return t=Lp(n,i,!0,t,r,s,o,a,l),t.context=gy(null),n=t.current,i=on(),r=_r(n),s=Oi(i,r),s.callback=e??null,gr(n,s,r),t.current.lanes=r,Fa(t,r,i),vn(t,i),t}function iu(t,e,n,i){var r=e.current,s=on(),o=_r(r);return n=gy(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=gr(r,e,o),t!==null&&(ai(t,r,o,s),Yl(t,r,o)),o}function Uc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function V0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){V0(t,e),(t=t.alternate)&&V0(t,e)}function dE(){return null}var _y=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ip(t){this._internalRoot=t}ru.prototype.render=Ip.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));iu(t,e,null,null)};ru.prototype.unmount=Ip.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){iu(null,t,null,null)}),e[Hi]=null}};function ru(t){this._internalRoot=t}ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ar.length&&e!==0&&e<ar[n].priority;n++);ar.splice(n,0,t),n===0&&Qv(t)}};function Up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function hE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Uc(o);s.call(c)}}var o=vy(e,i,t,0,null,!1,!1,"",H0);return t._reactRootContainer=o,t[Hi]=o.current,ma(t.nodeType===8?t.parentNode:t),os(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Uc(l);a.call(c)}}var l=Lp(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=l,t[Hi]=l.current,ma(t.nodeType===8?t.parentNode:t),os(function(){iu(e,l,n,i)}),l}function ou(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Uc(o);a.call(l)}}iu(e,o,t,r)}else o=hE(n,e,t,r,i);return Uc(o)}Yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Go(e.pendingLanes);n!==0&&(ep(e,n|1),vn(e,At()),!(Ke&6)&&(oo=At()+500,Cr()))}break;case 13:os(function(){var i=Gi(t,1);if(i!==null){var r=on();ai(i,t,1,r)}}),Np(t,1)}};tp=function(t){if(t.tag===13){var e=Gi(t,134217728);if(e!==null){var n=on();ai(e,t,134217728,n)}Np(t,134217728)}};$v=function(t){if(t.tag===13){var e=_r(t),n=Gi(t,e);if(n!==null){var i=on();ai(n,t,e,i)}Np(t,e)}};Kv=function(){return it};Zv=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Kf=function(t,e,n){switch(e){case"input":if(Gf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kc(i);if(!r)throw Error(ne(90));Cv(i),Gf(i,r)}}}break;case"textarea":Pv(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};Ov=Cp;kv=os;var pE={usingClientEntryPoint:!1,Events:[ka,Ls,Kc,Uv,Fv,Cp]},Lo={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mE={bundleType:Lo.bundleType,version:Lo.version,rendererPackageName:Lo.rendererPackageName,rendererConfig:Lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Lo.findFiberByHostInstance||dE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ml.isDisabled&&ml.supportsFiber)try{Xc=ml.inject(mE),xi=ml}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pE;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(e))throw Error(ne(200));return fE(t,e,null,n)};Dn.createRoot=function(t,e){if(!Up(t))throw Error(ne(299));var n=!1,i="",r=_y;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lp(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,ma(t.nodeType===8?t.parentNode:t),new Ip(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Vv(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return os(t)};Dn.hydrate=function(t,e,n){if(!su(e))throw Error(ne(200));return ou(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Up(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=_y;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vy(e,null,t,1,n??null,r,!1,s,o),t[Hi]=e.current,ma(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ru(e)};Dn.render=function(t,e,n){if(!su(e))throw Error(ne(200));return ou(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!su(t))throw Error(ne(40));return t._reactRootContainer?(os(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Cp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!su(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return ou(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)}catch(t){console.error(t)}}yy(),yv.exports=Dn;var xE=yv.exports,G0=xE;Ff.createRoot=G0.createRoot,Ff.hydrateRoot=G0.hydrateRoot;class gE extends vv.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("Uncaught error:",e,n)}render(){return this.state.hasError?y.jsx("div",{className:"min-h-screen flex items-center justify-center bg-black text-white p-8 text-center font-serif",children:y.jsxs("div",{children:[y.jsx("h1",{className:"text-3xl mb-4",children:"Something went wrong."}),y.jsx("button",{onClick:()=>window.location.reload(),className:"border border-white px-6 py-2 hover:bg-white hover:text-black transition-colors",children:"Reload Page"})]})}):this.props.children}}const vE=()=>{const t=oe.useRef(null);return oe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i,r=[];const s=()=>{e&&(e.width=window.innerWidth,e.height=window.innerHeight)},o=()=>{r=[];const l=window.innerWidth<768?20:40;for(let c=0;c<l;c++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,z:Math.random()*2+.5,size:Math.random()*2+1,speedX:(Math.random()-.5)*.1,speedY:(Math.random()-.5)*.1})},a=()=>{!n||!e||(n.clearRect(0,0,e.width,e.height),r.forEach(l=>{l.x+=l.speedX*l.z,l.y+=l.speedY*l.z,l.x<0&&(l.x=e.width),l.x>e.width&&(l.x=0),l.y<0&&(l.y=e.height),l.y>e.height&&(l.y=0),n.beginPath(),n.arc(l.x,l.y,l.size*l.z,0,Math.PI*2),n.fillStyle=`rgba(150, 150, 150, ${.08*l.z})`,n.fill()}),i=requestAnimationFrame(a))};return window.addEventListener("resize",()=>{s(),o()}),s(),o(),a(),()=>{window.removeEventListener("resize",s),cancelAnimationFrame(i)}},[]),y.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none z-0 mix-blend-screen"})},_E=()=>{const t=oe.useRef(null),e=oe.useRef(null);return oe.useEffect(()=>{const n=i=>{t.current&&e.current&&(t.current.animate({left:`${i.clientX}px`,top:`${i.clientY}px`},{duration:500,fill:"forwards"}),e.current.style.left=`${i.clientX}px`,e.current.style.top=`${i.clientY}px`)};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),y.jsxs(y.Fragment,{children:[y.jsx("div",{ref:t,className:"fixed w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block mix-blend-exclusion"}),y.jsx("div",{ref:e,className:"fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 hidden md:block"})]})};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SE=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),W0=t=>{const e=SE(t);return e.charAt(0).toUpperCase()+e.slice(1)},Sy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),ME=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=oe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>oe.createElement("svg",{ref:l,...EE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Sy("lucide",r),...!s&&!ME(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>oe.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(t,e)=>{const n=oe.forwardRef(({className:i,...r},s)=>oe.createElement(TE,{ref:s,iconNode:e,className:Sy(`lucide-${yE(W0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=W0(t),n};/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]],bE=Mt("aperture",wE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],CE=Mt("arrow-down",AE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],PE=Mt("arrow-left",RE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],LE=Mt("arrow-right",DE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Rd=Mt("brain",NE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],UE=Mt("calendar",IE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ba=Mt("camera",FE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],kE=Mt("check",OE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],BE=Mt("fingerprint-pattern",zE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],HE=Mt("heart",VE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],WE=Mt("image",GE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],XE=Mt("instagram",jE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],YE=Mt("mail",qE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],KE=Mt("map-pin",$E);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],QE=Mt("map",ZE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],eT=Mt("menu",JE);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],nT=Mt("plane",tT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],rT=Mt("plus",iT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]],oT=Mt("scan-line",sT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],lT=Mt("twitter",aT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],uT=Mt("wand-sparkles",cT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fp=Mt("x",fT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],hT=Mt("zap",dT),pT=({currentPage:t,onNavigate:e})=>{const[n,i]=oe.useState(!1),r=["home","works","service","news","contact"],s=({page:o})=>y.jsxs("button",{onClick:()=>{e(o),i(!1)},className:`text-sm uppercase tracking-widest hover:text-white transition-all duration-300 py-2 relative group
        ${t===o?"text-white":"text-zinc-500"}
      `,children:[y.jsx("span",{className:"relative z-10",children:o}),y.jsx("span",{className:`absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ${t===o?"scale-x-100":"scale-x-0 group-hover:scale-x-100"}`})]});return y.jsxs(y.Fragment,{children:[y.jsx("header",{className:"fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900/50 transition-all duration-300",children:y.jsxs("div",{className:"container mx-auto px-6 h-20 flex items-center justify-between",children:[y.jsxs("div",{onClick:()=>e("home"),className:"text-xl font-serif font-bold text-white tracking-widest cursor-pointer flex items-center gap-3 hover:opacity-80 transition-opacity z-50",children:[y.jsx("div",{className:"border border-white p-1",children:y.jsx(Ba,{size:16})}),y.jsx("span",{children:"R.PHOTO"})]}),y.jsx("nav",{className:"hidden md:flex gap-10",children:r.map(o=>y.jsx(s,{page:o},o))}),y.jsx("button",{className:"md:hidden text-white z-50",onClick:()=>i(!n),children:n?y.jsx(Fp,{}):y.jsx(eT,{})})]})}),y.jsx("div",{className:`fixed inset-0 bg-zinc-950 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 transform ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-full pointer-events-none"}`,children:r.map(o=>y.jsx("button",{onClick:()=>{e(o),i(!1)},className:"text-2xl font-serif uppercase tracking-widest text-white hover:text-zinc-400 transition-colors",children:o},o))})]})},mT=({onNavigate:t})=>y.jsx("footer",{className:"py-12 border-t border-zinc-900 mt-20 bg-zinc-950 text-center relative z-10",children:y.jsxs("div",{className:"container mx-auto px-6 flex flex-col items-center",children:[y.jsxs("div",{className:"flex items-center gap-2 mb-8 opacity-50",children:[y.jsx(Ba,{size:16,className:"text-zinc-500"}),y.jsx("span",{className:"text-lg font-serif font-bold text-zinc-500 tracking-widest",children:"K.PHOTO"})]}),y.jsxs("div",{className:"flex gap-8 mb-8 text-xs tracking-widest text-zinc-600",children:[y.jsx("button",{onClick:()=>t("works"),className:"hover:text-zinc-400 transition-colors",children:"WORKS"}),y.jsx("button",{onClick:()=>t("service"),className:"hover:text-zinc-400 transition-colors",children:"SERVICE"}),y.jsx("button",{onClick:()=>t("contact"),className:"hover:text-zinc-400 transition-colors",children:"CONTACT"})]}),y.jsx("p",{className:"text-zinc-700 text-[10px] tracking-wider",children:"© 2025 K.PHOTO PORTFOLIO. All Rights Reserved."})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Op="181",xT=0,j0=1,gT=2,My=1,vT=2,Ri=3,Tr=0,_n=1,Li=2,ki=0,Zs=1,X0=2,q0=3,Y0=4,_T=5,Gr=100,yT=101,ST=102,MT=103,ET=104,TT=200,wT=201,bT=202,AT=203,Pd=204,Dd=205,CT=206,RT=207,PT=208,DT=209,LT=210,NT=211,IT=212,UT=213,FT=214,Ld=0,Nd=1,Id=2,ao=3,Ud=4,Fd=5,Od=6,kd=7,Ey=0,OT=1,kT=2,Sr=0,zT=1,BT=2,VT=3,HT=4,GT=5,WT=6,jT=7,Ty=300,lo=301,co=302,zd=303,Bd=304,au=306,Vd=1e3,Ui=1001,Hd=1002,Rn=1003,XT=1004,xl=1005,Bn=1006,Gu=1007,Yr=1008,ji=1009,wy=1010,by=1011,Ta=1012,kp=1013,as=1014,Fi=1015,vo=1016,zp=1017,Bp=1018,wa=1020,Ay=35902,Cy=35899,Ry=1021,Py=1022,ri=1023,ba=1026,Aa=1027,Dy=1028,Vp=1029,Hp=1030,Gp=1031,Wp=1033,tc=33776,nc=33777,ic=33778,rc=33779,Gd=35840,Wd=35841,jd=35842,Xd=35843,qd=36196,Yd=37492,$d=37496,Kd=37808,Zd=37809,Qd=37810,Jd=37811,eh=37812,th=37813,nh=37814,ih=37815,rh=37816,sh=37817,oh=37818,ah=37819,lh=37820,ch=37821,uh=36492,fh=36494,dh=36495,hh=36283,ph=36284,mh=36285,xh=36286,qT=3200,YT=3201,$T=0,KT=1,cr="",Fn="srgb",uo="srgb-linear",Fc="linear",ot="srgb",hs=7680,$0=519,ZT=512,QT=513,JT=514,Ly=515,ew=516,tw=517,nw=518,iw=519,K0=35044,Z0="300 es",mi=2e3,Oc=2001;function Ny(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rw(){const t=kc("canvas");return t.style.display="block",t}const Q0={};function J0(...t){const e="THREE."+t.shift();console.log(e,...t)}function ke(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Ct(...t){const e="THREE."+t.shift();console.error(e,...t)}function Ca(...t){const e=t.join(" ");e in Q0||(Q0[e]=!0,ke(...t))}function sw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class _o{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,gh=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function ow(t,e){return(t%e+e)%e}function ju(t,e,n){return(1-n)*t+n*e}function No(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,n=0){et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ha{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a>=1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==p||u!==g){let m=l*d+c*p+u*g+f*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let h=1-a;if(m<.9995){const x=Math.acos(m),v=Math.sin(x);h=Math.sin(h*x)/v,a=Math.sin(a*x)/v,l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+_*a}else{l=l*h+d*a,c=c*h+p*a,u=u*h+g*a,f=f*h+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ex.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ex.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new H,ex=new Ha;class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],x=r[1],v=r[4],E=r[7],A=r[2],b=r[5],C=r[8];return s[0]=o*_+a*x+l*A,s[3]=o*m+a*v+l*b,s[6]=o*h+a*E+l*C,s[1]=c*_+u*x+f*A,s[4]=c*m+u*v+f*b,s[7]=c*h+u*E+f*C,s[2]=d*_+p*x+g*A,s[5]=d*m+p*v+g*b,s[8]=d*h+p*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=p*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new ze,tx=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nx=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aw(){const t={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?Fc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[uo]:{primaries:e,whitePoint:i,transfer:Fc,toXYZ:tx,fromXYZ:nx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:tx,fromXYZ:nx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const Qe=aw();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ps;class lw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ps===void 0&&(ps=kc("canvas")),ps.width=e.width,ps.height=e.height;const r=ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ps}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cw=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yu(r[o].image)):s.push(Yu(r[o]))}else s=Yu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let uw=0;const $u=new H;class an extends _o{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Ui,r=Ui,s=Bn,o=Yr,a=ri,l=ji,c=an.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Va(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ty)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ty;an.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(p+1)/2,A=(h+1)/2,b=(u+d)/4,C=(f+_)/4,P=(g+m)/4;return v>E&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=C/i):E>A?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=P/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fw extends _o{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new an(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new jp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ls extends fw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Iy extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dw extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),vl.subVectors(this.max,Io),ms.subVectors(e.a,Io),xs.subVectors(e.b,Io),gs.subVectors(e.c,Io),Zi.subVectors(xs,ms),Qi.subVectors(gs,xs),Lr.subVectors(ms,gs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Lr.z,Lr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Lr.z,0,-Lr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Lr.y,Lr.x,0];return!Ku(n,ms,xs,gs,vl)||(n=[1,0,0,0,1,0,0,0,1],!Ku(n,ms,xs,gs,vl))?!1:(_l.crossVectors(Zi,Qi),n=[_l.x,_l.y,_l.z],Ku(n,ms,xs,gs,vl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ei=[new H,new H,new H,new H,new H,new H,new H,new H],Yn=new H,gl=new Ga,ms=new H,xs=new H,gs=new H,Zi=new H,Qi=new H,Lr=new H,Io=new H,vl=new H,_l=new H,Nr=new H;function Ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Nr.fromArray(t,s);const a=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),c=n.dot(Nr),u=i.dot(Nr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hw=new Ga,Uo=new H,Zu=new H;class lu{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Zu)),this.expandByPoint(Uo.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ti=new H,Qu=new H,yl=new H,Ji=new H,Ju=new H,Sl=new H,ef=new H;class Uy{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qu.copy(e).add(n).multiplyScalar(.5),yl.copy(n).sub(e).normalize(),Ji.copy(this.origin).sub(Qu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(yl),a=Ji.dot(this.direction),l=-Ji.dot(yl),c=Ji.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qu).addScaledVector(yl,d),p}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,i,r,s){Ju.subVectors(n,e),Sl.subVectors(i,e),ef.crossVectors(Ju,Sl);let o=this.direction.dot(ef),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Sl.crossVectors(Ji,Sl));if(l<0)return null;const c=a*this.direction.dot(Ju.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(ef);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),o=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pw,e,mw)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),er.crossVectors(i,Tn),er.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),er.crossVectors(i,Tn)),er.normalize(),Ml.crossVectors(Tn,er),r[0]=er.x,r[4]=Ml.x,r[8]=Tn.x,r[1]=er.y,r[5]=Ml.y,r[9]=Tn.y,r[2]=er.z,r[6]=Ml.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],x=i[3],v=i[7],E=i[11],A=i[15],b=r[0],C=r[4],P=r[8],w=r[12],M=r[1],N=r[5],k=r[9],V=r[13],K=r[2],q=r[6],Z=r[10],Y=r[14],I=r[3],G=r[7],j=r[11],ce=r[15];return s[0]=o*b+a*M+l*K+c*I,s[4]=o*C+a*N+l*q+c*G,s[8]=o*P+a*k+l*Z+c*j,s[12]=o*w+a*V+l*Y+c*ce,s[1]=u*b+f*M+d*K+p*I,s[5]=u*C+f*N+d*q+p*G,s[9]=u*P+f*k+d*Z+p*j,s[13]=u*w+f*V+d*Y+p*ce,s[2]=g*b+_*M+m*K+h*I,s[6]=g*C+_*N+m*q+h*G,s[10]=g*P+_*k+m*Z+h*j,s[14]=g*w+_*V+m*Y+h*ce,s[3]=x*b+v*M+E*K+A*I,s[7]=x*C+v*N+E*q+A*G,s[11]=x*P+v*k+E*Z+A*j,s[15]=x*w+v*V+E*Y+A*ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+_*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],x=f*m*c-_*d*c+_*l*p-a*m*p-f*l*h+a*d*h,v=g*d*c-u*m*c-g*l*p+o*m*p+u*l*h-o*d*h,E=u*_*c-g*f*c+g*a*p-o*_*p-u*a*h+o*f*h,A=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,b=n*x+i*v+r*E+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=x*C,e[1]=(_*d*s-f*m*s-_*r*p+i*m*p+f*r*h-i*d*h)*C,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(u*m*s-g*d*s+g*r*p-n*m*p-u*r*h+n*d*h)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*C,e[8]=E*C,e[9]=(g*f*s-u*_*s-g*i*p+n*_*p+u*i*h-n*f*h)*C,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*h+n*a*h)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*C,e[12]=A*C,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*C,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,g=s*f,_=o*u,m=o*f,h=a*f,x=l*c,v=l*u,E=l*f,A=i.x,b=i.y,C=i.z;return r[0]=(1-(_+h))*A,r[1]=(p+E)*A,r[2]=(g-v)*A,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(d+h))*b,r[6]=(m+x)*b,r[7]=0,r[8]=(g+v)*C,r[9]=(m-x)*C,r[10]=(1-(d+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const o=vs.set(r[4],r[5],r[6]).length(),a=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const c=1/s,u=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,n.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=mi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),p=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===mi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Oc)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=mi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===mi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Oc)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new H,$n=new Nt,pw=new H(0,0,0),mw=new H(1,1,1),er=new H,Ml=new H,Tn=new H,ix=new Nt,rx=new Ha;class Xi{constructor(e=0,n=0,i=0,r=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ix,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rx.setFromEuler(this),this.setFromQuaternion(rx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class Fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xw=0;const sx=new H,_s=new Ha,wi=new Nt,El=new H,Fo=new H,gw=new H,vw=new Ha,ox=new H(1,0,0),ax=new H(0,1,0),lx=new H(0,0,1),cx={type:"added"},_w={type:"removed"},ys={type:"childadded",child:null},tf={type:"childremoved",child:null};class yn extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new H,n=new Xi,i=new Ha,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ze}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ox,e)}rotateY(e){return this.rotateOnAxis(ax,e)}rotateZ(e){return this.rotateOnAxis(lx,e)}translateOnAxis(e,n){return sx.copy(e).applyQuaternion(this.quaternion),this.position.add(sx.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ox,e)}translateY(e){return this.translateOnAxis(ax,e)}translateZ(e){return this.translateOnAxis(lx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?El.copy(e):El.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Fo,El,this.up):wi.lookAt(El,Fo,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(wi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cx),ys.child=e,this.dispatchEvent(ys),ys.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(_w),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cx),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,gw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,vw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new H(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new H,bi=new H,nf=new H,Ai=new H,Ss=new H,Ms=new H,ux=new H,rf=new H,sf=new H,of=new H,af=new Rt,lf=new Rt,cf=new Rt;class ii{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),bi.subVectors(i,n),nf.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(bi),l=Kn.dot(nf),c=bi.dot(bi),u=bi.dot(nf),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,n),lf.fromBufferAttribute(e,i),cf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(af,s.x),o.addScaledVector(lf,s.y),o.addScaledVector(cf,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),bi.subVectors(e,n),Kn.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Kn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Ms.subVectors(s,i),rf.subVectors(e,i);const l=Ss.dot(rf),c=Ms.dot(rf);if(l<=0&&c<=0)return n.copy(i);sf.subVectors(e,r);const u=Ss.dot(sf),f=Ms.dot(sf);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ss,o);of.subVectors(e,s);const p=Ss.dot(of),g=Ms.dot(of);if(g>=0&&p<=g)return n.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ms,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ux.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(ux,a);const h=1/(m+_+d);return o=_*h,a=d*h,n.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Oy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function uf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=ow(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=uf(o,s,e+1/3),this.g=uf(o,s,e),this.b=uf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=Oy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Qe.workingToColorSpace(Zt.copy(this),e),Math.round(qe(Zt.r*255,0,255))*65536+Math.round(qe(Zt.g*255,0,255))*256+Math.round(qe(Zt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Fn){Qe.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+n,tr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(tr),e.getHSL(Tl);const i=ju(tr.h,Tl.h,n),r=ju(tr.s,Tl.s,n),s=ju(tr.l,Tl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new tt;tt.NAMES=Oy;let yw=0;class Wa extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yw++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Zs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Dd,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Dd&&(i.blendDst=this.blendDst),this.blendEquation!==Gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ky extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new H,wl=new et;let Sw=0;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=K0,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wl.fromBufferAttribute(this,n),wl.applyMatrix3(e),this.setXY(n,wl.x,wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=No(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=No(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=No(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=No(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=No(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K0&&(e.usage=this.usage),e}}class zy extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class By extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jr extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Mw=0;const In=new Nt,ff=new yn,Es=new H,wn=new Ga,Oo=new Ga,Bt=new H;class Mi extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ny(e)?By:zy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(wn.min,Oo.min),wn.expandByPoint(Bt),Bt.addVectors(wn.max,Oo.max),wn.expandByPoint(Bt)):(wn.expandByPoint(Oo.min),wn.expandByPoint(Oo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(Es.fromBufferAttribute(e,c),Bt.add(Es)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new H,l[P]=new H;const c=new H,u=new H,f=new H,d=new et,p=new et,g=new et,_=new H,m=new H;function h(P,w,M){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const N=1/(p.x*g.y-g.x*p.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(N),a[P].add(_),a[w].add(_),a[M].add(_),l[P].add(m),l[w].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,w=x.length;P<w;++P){const M=x[P],N=M.start,k=M.count;for(let V=N,K=N+k;V<K;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const v=new H,E=new H,A=new H,b=new H;function C(P){A.fromBufferAttribute(r,P),b.copy(A);const w=a[P];v.copy(w),v.sub(A.multiplyScalar(A.dot(w))).normalize(),E.crossVectors(b,w);const N=E.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,N)}for(let P=0,w=x.length;P<w;++P){const M=x[P],N=M.start,k=M.count;for(let V=N,K=N+k;V<K;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Gn(d,u,f)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fx=new Nt,Ir=new Uy,bl=new lu,dx=new H,Al=new H,Cl=new H,Rl=new H,df=new H,Pl=new H,hx=new H,Dl=new H;class qi extends yn{constructor(e=new Mi,n=new ky){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(df.fromBufferAttribute(f,e),o?Pl.addScaledVector(df,u):Pl.addScaledVector(df.sub(n),u))}n.add(Pl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(bl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(bl,dx)===null||Ir.origin.distanceToSquared(dx)>(e.far-e.near)**2))&&(fx.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(fx),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,A=v;E<A;E+=3){const b=a.getX(E),C=a.getX(E+1),P=a.getX(E+2);r=Ll(this,h,e,i,c,u,f,b,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),E=a.getX(m+2);r=Ll(this,o,e,i,c,u,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=x,A=v;E<A;E+=3){const b=E,C=E+1,P=E+2;r=Ll(this,h,e,i,c,u,f,b,C,P),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const x=m,v=m+1,E=m+2;r=Ll(this,o,e,i,c,u,f,x,v,E),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Ew(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;Dl.copy(a),Dl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Dl);return c<n.near||c>n.far?null:{distance:c,point:Dl.clone(),object:t}}function Ll(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Al),t.getVertexPosition(l,Cl),t.getVertexPosition(c,Rl);const u=Ew(t,e,n,i,Al,Cl,Rl,hx);if(u){const f=new H;ii.getBarycoord(hx,Al,Cl,Rl,f),r&&(u.uv=ii.getInterpolatedAttribute(r,a,l,c,f,new et)),s&&(u.uv1=ii.getInterpolatedAttribute(s,a,l,c,f,new et)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};ii.getNormal(Al,Cl,Rl,d.normal),u.face=d,u.barycoord=f}return u}class ja extends Mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jr(c,3)),this.setAttribute("normal",new Jr(u,3)),this.setAttribute("uv",new Jr(f,2));function g(_,m,h,x,v,E,A,b,C,P,w){const M=E/C,N=A/P,k=E/2,V=A/2,K=b/2,q=C+1,Z=P+1;let Y=0,I=0;const G=new H;for(let j=0;j<Z;j++){const ce=j*N-V;for(let Ee=0;Ee<q;Ee++){const $e=Ee*M-k;G[_]=$e*x,G[m]=ce*v,G[h]=K,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[h]=b>0?1:-1,u.push(G.x,G.y,G.z),f.push(Ee/C),f.push(1-j/P),Y+=1}}for(let j=0;j<P;j++)for(let ce=0;ce<C;ce++){const Ee=d+ce+q*j,$e=d+ce+q*(j+1),Ye=d+(ce+1)+q*(j+1),Je=d+(ce+1)+q*j;l.push(Ee,$e,Je),l.push($e,Ye,Je),I+=6}a.addGroup(p,I,w),p+=I,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function Tw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const ww={clone:fo,merge:nn};var bw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Aw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bw,this.fragmentShader=Aw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=Tw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Hy extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const nr=new H,px=new et,mx=new et;class ni extends Hy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=gh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gh*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-e/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(nr.x,nr.y).multiplyScalar(-e/nr.z)}getViewSize(e,n){return this.getViewBounds(e,px,mx),n.subVectors(mx,px)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,ws=1;class Cw extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ni(Ts,ws,e,n);r.layers=this.layers,this.add(r);const s=new ni(Ts,ws,e,n);s.layers=this.layers,this.add(s);const o=new ni(Ts,ws,e,n);o.layers=this.layers,this.add(o);const a=new ni(Ts,ws,e,n);a.layers=this.layers,this.add(a);const l=new ni(Ts,ws,e,n);l.layers=this.layers,this.add(l);const c=new ni(Ts,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gy extends an{constructor(e=[],n=lo,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rw extends ls{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ja(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:ki});s.uniforms.tEquirect.value=n;const o=new qi(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Bn),new Cw(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Nl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pw={type:"move"};class hf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Dw extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Lw extends an{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Rn,u=Rn,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new H,Nw=new H,Iw=new ze;class Vr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=pf.subVectors(i,n).cross(Nw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(pf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Iw.getNormalMatrix(e),r=this.coplanarPoint(pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new lu,Uw=new et(.5,.5),Il=new H;class Wy{constructor(e=new Vr,n=new Vr,i=new Vr,r=new Vr,s=new Vr,o=new Vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],p=s[7],g=s[8],_=s[9],m=s[10],h=s[11],x=s[12],v=s[13],E=s[14],A=s[15];if(r[0].setComponents(c-o,p-u,h-g,A-x).normalize(),r[1].setComponents(c+o,p+u,h+g,A+x).normalize(),r[2].setComponents(c+a,p+f,h+_,A+v).normalize(),r[3].setComponents(c-a,p-f,h-_,A-v).normalize(),i)r[4].setComponents(l,d,m,E).normalize(),r[5].setComponents(c-l,p-d,h-m,A-E).normalize();else if(r[4].setComponents(c-l,p-d,h-m,A-E).normalize(),n===mi)r[5].setComponents(c+l,p+d,h+m,A+E).normalize();else if(n===Oc)r[5].setComponents(l,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const n=Uw.distanceTo(e.center);return Ur.radius=.7071067811865476+n,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Il.x=r.normal.x>0?e.max.x:e.min.x,Il.y=r.normal.y>0?e.max.y:e.min.y,Il.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jy extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xx=new Nt,vh=new Uy,Ul=new lu,Fl=new H;class Fw extends yn{constructor(e=new Mi,n=new jy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(r),Ul.radius+=s,e.ray.intersectsSphere(Ul)===!1)return;xx.copy(r).invert(),vh.copy(e.ray).applyMatrix4(xx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Fl.fromBufferAttribute(f,m),gx(Fl,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Fl.fromBufferAttribute(f,g),gx(Fl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gx(t,e,n,i,r,s,o){const a=vh.distanceSqToPoint(t);if(a<n){const l=new H;vh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Xy extends an{constructor(e,n,i=as,r,s,o,a=Rn,l=Rn,c,u=ba,f=1){if(u!==ba&&u!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qy extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends Mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const x=h*d-o;for(let v=0;v<c;v++){const E=v*f-s;g.push(E,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+c*h,E=x+c*(h+1),A=x+1+c*(h+1),b=x+1+c*h;p.push(v,E,b),p.push(E,A,b)}this.setIndex(p),this.setAttribute("position",new Jr(g,3)),this.setAttribute("normal",new Jr(_,3)),this.setAttribute("uv",new Jr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ow extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kw extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yy extends Hy{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zw extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function vx(t,e,n,i){const r=Bw(i);switch(n){case Ry:return t*e;case Dy:return t*e/r.components*r.byteLength;case Vp:return t*e/r.components*r.byteLength;case Hp:return t*e*2/r.components*r.byteLength;case Gp:return t*e*2/r.components*r.byteLength;case Py:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Wp:return t*e*4/r.components*r.byteLength;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Xd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case jd:return Math.max(t,8)*Math.max(e,8)/2;case qd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ch:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uh:case fh:case dh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hh:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mh:case xh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Bw(t){switch(t){case ji:case wy:return{byteLength:1,components:1};case Ta:case by:case vo:return{byteLength:2,components:1};case zp:case Bp:return{byteLength:2,components:4};case as:case kp:case Fi:return{byteLength:4,components:1};case Ay:case Cy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Op}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Op);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $y(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Vw(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<f.length;p++){const g=f[d],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Hw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$w=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,t2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,n2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,h2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,p2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v2="gl_FragColor = linearToOutputTexel( gl_FragColor );",_2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,P2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,D2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,L2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,U2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,B2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,V2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ib=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ub=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$b=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Kb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Hw,alphahash_pars_fragment:Gw,alphamap_fragment:Ww,alphamap_pars_fragment:jw,alphatest_fragment:Xw,alphatest_pars_fragment:qw,aomap_fragment:Yw,aomap_pars_fragment:$w,batching_pars_vertex:Kw,batching_vertex:Zw,begin_vertex:Qw,beginnormal_vertex:Jw,bsdfs:e2,iridescence_fragment:t2,bumpmap_pars_fragment:n2,clipping_planes_fragment:i2,clipping_planes_pars_fragment:r2,clipping_planes_pars_vertex:s2,clipping_planes_vertex:o2,color_fragment:a2,color_pars_fragment:l2,color_pars_vertex:c2,color_vertex:u2,common:f2,cube_uv_reflection_fragment:d2,defaultnormal_vertex:h2,displacementmap_pars_vertex:p2,displacementmap_vertex:m2,emissivemap_fragment:x2,emissivemap_pars_fragment:g2,colorspace_fragment:v2,colorspace_pars_fragment:_2,envmap_fragment:y2,envmap_common_pars_fragment:S2,envmap_pars_fragment:M2,envmap_pars_vertex:E2,envmap_physical_pars_fragment:I2,envmap_vertex:T2,fog_vertex:w2,fog_pars_vertex:b2,fog_fragment:A2,fog_pars_fragment:C2,gradientmap_pars_fragment:R2,lightmap_pars_fragment:P2,lights_lambert_fragment:D2,lights_lambert_pars_fragment:L2,lights_pars_begin:N2,lights_toon_fragment:U2,lights_toon_pars_fragment:F2,lights_phong_fragment:O2,lights_phong_pars_fragment:k2,lights_physical_fragment:z2,lights_physical_pars_fragment:B2,lights_fragment_begin:V2,lights_fragment_maps:H2,lights_fragment_end:G2,logdepthbuf_fragment:W2,logdepthbuf_pars_fragment:j2,logdepthbuf_pars_vertex:X2,logdepthbuf_vertex:q2,map_fragment:Y2,map_pars_fragment:$2,map_particle_fragment:K2,map_particle_pars_fragment:Z2,metalnessmap_fragment:Q2,metalnessmap_pars_fragment:J2,morphinstance_vertex:eb,morphcolor_vertex:tb,morphnormal_vertex:nb,morphtarget_pars_vertex:ib,morphtarget_vertex:rb,normal_fragment_begin:sb,normal_fragment_maps:ob,normal_pars_fragment:ab,normal_pars_vertex:lb,normal_vertex:cb,normalmap_pars_fragment:ub,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:db,clearcoat_pars_fragment:hb,iridescence_pars_fragment:pb,opaque_fragment:mb,packing:xb,premultiplied_alpha_fragment:gb,project_vertex:vb,dithering_fragment:_b,dithering_pars_fragment:yb,roughnessmap_fragment:Sb,roughnessmap_pars_fragment:Mb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:wb,shadowmask_pars_fragment:bb,skinbase_vertex:Ab,skinning_pars_vertex:Cb,skinning_vertex:Rb,skinnormal_vertex:Pb,specularmap_fragment:Db,specularmap_pars_fragment:Lb,tonemapping_fragment:Nb,tonemapping_pars_fragment:Ib,transmission_fragment:Ub,transmission_pars_fragment:Fb,uv_pars_fragment:Ob,uv_pars_vertex:kb,uv_vertex:zb,worldpos_vertex:Bb,background_vert:Vb,background_frag:Hb,backgroundCube_vert:Gb,backgroundCube_frag:Wb,cube_vert:jb,cube_frag:Xb,depth_vert:qb,depth_frag:Yb,distanceRGBA_vert:$b,distanceRGBA_frag:Kb,equirect_vert:Zb,equirect_frag:Qb,linedashed_vert:Jb,linedashed_frag:eA,meshbasic_vert:tA,meshbasic_frag:nA,meshlambert_vert:iA,meshlambert_frag:rA,meshmatcap_vert:sA,meshmatcap_frag:oA,meshnormal_vert:aA,meshnormal_frag:lA,meshphong_vert:cA,meshphong_frag:uA,meshphysical_vert:fA,meshphysical_frag:dA,meshtoon_vert:hA,meshtoon_frag:pA,points_vert:mA,points_frag:xA,shadow_vert:gA,shadow_frag:vA,sprite_vert:_A,sprite_frag:yA},ue={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},hi={basic:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:nn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:nn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new tt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:nn([ue.points,ue.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:nn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:nn([ue.common,ue.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:nn([ue.sprite,ue.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:nn([ue.common,ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:nn([ue.lights,ue.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};hi.physical={uniforms:nn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ol={r:0,b:0,g:0},Fr=new Xi,SA=new Nt;function MA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function g(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?n:e).get(E)),E}function _(v){let E=!1;const A=g(v);A===null?h(a,l):A&&A.isColor&&(h(A,1),E=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,E){const A=g(E);A&&(A.isCubeTexture||A.mapping===au)?(u===void 0&&(u=new qi(new ja(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:fo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fr.copy(E.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SA.makeRotationFromEuler(Fr)),u.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ot,(f!==A||d!==A.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new qi(new Xa(2,2),new yi({name:"BackgroundMaterial",uniforms:fo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(A.colorSpace)!==ot,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,E){v.getRGB(Ol,Vy(t)),i.buffers.color.setClear(Ol.r,Ol.g,Ol.b,E,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m,dispose:x}}function EA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,N,k,V,K){let q=!1;const Z=f(V,k,N);s!==Z&&(s=Z,c(s.object)),q=p(M,V,k,K),q&&g(M,V,k,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(M,N,k,V),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,N,k){const V=k.wireframe===!0;let K=i[M.id];K===void 0&&(K={},i[M.id]=K);let q=K[N.id];q===void 0&&(q={},K[N.id]=q);let Z=q[V];return Z===void 0&&(Z=d(l()),q[V]=Z),Z}function d(M){const N=[],k=[],V=[];for(let K=0;K<n;K++)N[K]=0,k[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,N,k,V){const K=s.attributes,q=N.attributes;let Z=0;const Y=k.getAttributes();for(const I in Y)if(Y[I].location>=0){const j=K[I];let ce=q[I];if(ce===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),j===void 0||j.attribute!==ce||ce&&j.data!==ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==V}function g(M,N,k,V){const K={},q=N.attributes;let Z=0;const Y=k.getAttributes();for(const I in Y)if(Y[I].location>=0){let j=q[I];j===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&(j=M.instanceColor));const ce={};ce.attribute=j,j&&j.data&&(ce.data=j.data),K[I]=ce,Z++}s.attributes=K,s.attributesNum=Z,s.index=V}function _(){const M=s.newAttributes;for(let N=0,k=M.length;N<k;N++)M[N]=0}function m(M){h(M,0)}function h(M,N){const k=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;k[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),K[M]!==N&&(t.vertexAttribDivisor(M,N),K[M]=N)}function x(){const M=s.newAttributes,N=s.enabledAttributes;for(let k=0,V=N.length;k<V;k++)N[k]!==M[k]&&(t.disableVertexAttribArray(k),N[k]=0)}function v(M,N,k,V,K,q,Z){Z===!0?t.vertexAttribIPointer(M,N,k,K,q):t.vertexAttribPointer(M,N,k,V,K,q)}function E(M,N,k,V){_();const K=V.attributes,q=k.getAttributes(),Z=N.defaultAttributeValues;for(const Y in q){const I=q[Y];if(I.location>=0){let G=K[Y];if(G===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(G=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(G=M.instanceColor)),G!==void 0){const j=G.normalized,ce=G.itemSize,Ee=e.get(G);if(Ee===void 0)continue;const $e=Ee.buffer,Ye=Ee.type,Je=Ee.bytesPerElement,X=Ye===t.INT||Ye===t.UNSIGNED_INT||G.gpuType===kp;if(G.isInterleavedBufferAttribute){const J=G.data,ge=J.stride,Oe=G.offset;if(J.isInstancedInterleavedBuffer){for(let Te=0;Te<I.locationSize;Te++)h(I.location+Te,J.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Te=0;Te<I.locationSize;Te++)m(I.location+Te);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let Te=0;Te<I.locationSize;Te++)v(I.location+Te,ce/I.locationSize,Ye,j,ge*Je,(Oe+ce/I.locationSize*Te)*Je,X)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<I.locationSize;J++)h(I.location+J,G.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<I.locationSize;J++)m(I.location+J);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let J=0;J<I.locationSize;J++)v(I.location+J,ce/I.locationSize,Ye,j,ce*Je,ce/I.locationSize*J*Je,X)}}else if(Z!==void 0){const j=Z[Y];if(j!==void 0)switch(j.length){case 2:t.vertexAttrib2fv(I.location,j);break;case 3:t.vertexAttrib3fv(I.location,j);break;case 4:t.vertexAttrib4fv(I.location,j);break;default:t.vertexAttrib1fv(I.location,j)}}}}x()}function A(){P();for(const M in i){const N=i[M];for(const k in N){const V=N[k];for(const K in V)u(V[K].object),delete V[K];delete N[k]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const k in N){const V=N[k];for(const K in V)u(V[K].object),delete V[K];delete N[k]}delete i[M.id]}function C(M){for(const N in i){const k=i[N];if(k[M.id]===void 0)continue;const V=k[M.id];for(const K in V)u(V[K].object),delete V[K];delete k[M.id]}}function P(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function TA(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===vo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ji&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fi&&!P)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:A,maxSamples:b}}function bA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Vr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const x=s?0:i,v=x*4;let E=h.clippingState||null;l.value=E,E=u(g,d,v,p);for(let A=0;A!==v;++A)E[A]=n[A];h.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,E=p;v!==_;++v,E+=4)o.copy(f[v]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function AA(t){let e=new WeakMap;function n(o,a){return a===zd?o.mapping=lo:a===Bd&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zd||a===Bd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rw(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const dr=4,_x=[.125,.215,.35,.446,.526,.582],Wr=20,CA=256,ko=new Yy,yx=new tt;let mf=null,xf=0,gf=0,vf=!1;const RA=new H;class Sx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=RA}=s;mf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mf,xf,gf),this._renderer.xr.enabled=vf,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:vo,format:ri,colorSpace:uo,depthBuffer:!1},r=Mx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PA(s)),this._blurMaterial=LA(s,e,n),this._ggxMaterial=DA(s,e,n)}return r}_compileMaterial(e){const n=new qi(new Mi,e);this._renderer.compile(n,ko)}_sceneToCubeUV(e,n,i,r,s){const l=new ni(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(yx),f.toneMapping=Sr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qi(new ja,new ky({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let h=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,h=!0):(m.color.copy(yx),h=!0);for(let v=0;v<6;v++){const E=v%3;E===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):E===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const A=this._cubeSize;bs(r,E*A,v>2?A:0,A,A),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}f.toneMapping=p,f.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ex());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=.05+c*.95,p=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-dr?i-g+dr:0),h=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,bs(s,m,h,3*_,2*_),r.setRenderTarget(s),r.render(a,ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,bs(e,m,h,3*_,2*_),r.setRenderTarget(e),r.render(a,ko)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Wr;m>Wr&&ke(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const h=[];let x=0;for(let C=0;C<Wr;++C){const P=C/_,w=Math.exp(-P*P/2);h.push(w),C===0?x+=w:C<m&&(x+=2*w)}for(let C=0;C<h.length;C++)h[C]=h[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const E=this._sizeLods[r],A=3*E*(r>v-dr?r-v+dr:0),b=4*(this._cubeSize-E);bs(n,A,b,3*E,2*E),l.setRenderTarget(n),l.render(f,ko)}}function PA(t){const e=[],n=[],i=[];let r=t;const s=t-dr+1+_x.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-dr?l=_x[o-t+dr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,h=1,x=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(h*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,P=b>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];x.set(w,_*g*b),v.set(d,m*g*b);const M=[b,b,b,b,b,b];E.set(M,h*g*b)}const A=new Mi;A.setAttribute("position",new Gn(x,_)),A.setAttribute("uv",new Gn(v,m)),A.setAttribute("faceIndex",new Gn(E,h)),i.push(new qi(A,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Mx(t,e,n){const i=new ls(t,e,n);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function DA(t,e,n){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function LA(t,e,n){const i=new Float32Array(Wr),r=new H(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Ex(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Tx(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zd||l===Bd,u=l===lo||l===co;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Sx(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Sx(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function IA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ca("WebGLRenderer: "+i+" extension not supported."),r}}}function UA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)e.update(d[p],t.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let v=0,E=x.length;v<E;v+=3){const A=x[v+0],b=x[v+1],C=x[v+2];d.push(A,b,b,C,C,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,E=x.length/3-1;v<E;v+=3){const A=v+0,b=v+1,C=v+2;d.push(A,b,b,C,C,A)}}else return;const m=new(Ny(d)?By:zy)(d,1);m.version=_;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function FA(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,d*o,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,_,0,g);let h=0;for(let x=0;x<g;x++)h+=p[x]*_[x];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function OA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Ct("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kA(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let A=a.attributes.position.count*E,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*b*4*f),P=new Iy(C,A,b,f);P.type=Fi,P.needsUpdate=!0;const w=E*4;for(let N=0;N<f;N++){const k=h[N],V=x[N],K=v[N],q=A*b*4*N;for(let Z=0;Z<k.count;Z++){const Y=Z*w;g===!0&&(r.fromBufferAttribute(k,Z),C[q+Y+0]=r.x,C[q+Y+1]=r.y,C[q+Y+2]=r.z,C[q+Y+3]=0),_===!0&&(r.fromBufferAttribute(V,Z),C[q+Y+4]=r.x,C[q+Y+5]=r.y,C[q+Y+6]=r.z,C[q+Y+7]=0),m===!0&&(r.fromBufferAttribute(K,Z),C[q+Y+8]=r.x,C[q+Y+9]=r.y,C[q+Y+10]=r.z,C[q+Y+11]=K.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new et(A,b)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function zA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Ky=new an,wx=new Xy(1,1),Zy=new Iy,Qy=new dw,Jy=new Gy,bx=[],Ax=[],Cx=new Float32Array(16),Rx=new Float32Array(9),Px=new Float32Array(4);function yo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bx[r];if(s===void 0&&(s=new Float32Array(r),bx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uu(t,e){let n=Ax[e];n===void 0&&(n=new Int32Array(e),Ax[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function GA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function WA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Px.set(i),t.uniformMatrix2fv(this.addr,!1,Px),zt(n,i)}}function jA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Rx.set(i),t.uniformMatrix3fv(this.addr,!1,Rx),zt(n,i)}}function XA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;Cx.set(i),t.uniformMatrix4fv(this.addr,!1,Cx),zt(n,i)}}function qA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function $A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function KA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function ZA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function QA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function JA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function eC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function tC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wx.compareFunction=Ly,s=wx):s=Ky,n.setTexture2D(e||s,r)}function nC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qy,r)}function iC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jy,r)}function rC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zy,r)}function sC(t){switch(t){case 5126:return BA;case 35664:return VA;case 35665:return HA;case 35666:return GA;case 35674:return WA;case 35675:return jA;case 35676:return XA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return $A;case 35669:case 35673:return KA;case 5125:return ZA;case 36294:return QA;case 36295:return JA;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return rC}}function oC(t,e){t.uniform1fv(this.addr,e)}function aC(t,e){const n=yo(e,this.size,2);t.uniform2fv(this.addr,n)}function lC(t,e){const n=yo(e,this.size,3);t.uniform3fv(this.addr,n)}function cC(t,e){const n=yo(e,this.size,4);t.uniform4fv(this.addr,n)}function uC(t,e){const n=yo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function fC(t,e){const n=yo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dC(t,e){const n=yo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function hC(t,e){t.uniform1iv(this.addr,e)}function pC(t,e){t.uniform2iv(this.addr,e)}function mC(t,e){t.uniform3iv(this.addr,e)}function xC(t,e){t.uniform4iv(this.addr,e)}function gC(t,e){t.uniform1uiv(this.addr,e)}function vC(t,e){t.uniform2uiv(this.addr,e)}function _C(t,e){t.uniform3uiv(this.addr,e)}function yC(t,e){t.uniform4uiv(this.addr,e)}function SC(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Ky,s[o])}function MC(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qy,s[o])}function EC(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Jy,s[o])}function TC(t,e,n){const i=this.cache,r=e.length,s=uu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zy,s[o])}function wC(t){switch(t){case 5126:return oC;case 35664:return aC;case 35665:return lC;case 35666:return cC;case 35674:return uC;case 35675:return fC;case 35676:return dC;case 5124:case 35670:return hC;case 35667:case 35671:return pC;case 35668:case 35672:return mC;case 35669:case 35673:return xC;case 5125:return gC;case 36294:return vC;case 36295:return _C;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return SC;case 35679:case 36299:case 36307:return MC;case 35680:case 36300:case 36308:case 36293:return EC;case 36289:case 36303:case 36311:case 36292:return TC}}class bC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=sC(n.type)}}class AC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wC(n.type)}}class CC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _f=/(\w+)(\])?(\[|\.)?/g;function Dx(t,e){t.seq.push(e),t.map[e.id]=e}function RC(t,e,n){const i=t.name,r=i.length;for(_f.lastIndex=0;;){const s=_f.exec(i),o=_f.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dx(n,c===void 0?new bC(a,t,e):new AC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new CC(a),Dx(n,f)),n=f}}}class sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);RC(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const PC=37297;let DC=0;function LC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Nx=new ze;function NC(t){Qe._getMatrix(Nx,Qe.workingColorSpace,t);const e=`mat3( ${Nx.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Fc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ix(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+LC(t.getShaderSource(e),a)}else return s}function IC(t,e){const n=NC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function UC(t,e){let n;switch(e){case zT:n="Linear";break;case BT:n="Reinhard";break;case VT:n="Cineon";break;case HT:n="ACESFilmic";break;case WT:n="AgX";break;case jT:n="Neutral";break;case GT:n="Custom";break;default:ke("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kl=new H;function FC(){Qe.getLuminanceCoefficients(kl);const t=kl.x.toFixed(4),e=kl.y.toFixed(4),n=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function kC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function jo(t){return t!==""}function Ux(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BC=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(BC,HC)}const VC=new Map;function HC(t,e){let n=Be[e];if(n===void 0){const i=VC.get(e);if(i!==void 0)n=Be[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _h(n)}const GC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(t){return t.replace(GC,WC)}function WC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===My?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function XC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function YC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ey:e="ENVMAP_BLENDING_MULTIPLY";break;case OT:e="ENVMAP_BLENDING_MIX";break;case kT:e="ENVMAP_BLENDING_ADD";break}return e}function $C(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function KC(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=jC(n),c=XC(n),u=qC(n),f=YC(n),d=$C(n),p=OC(n),g=kC(s),_=r.createProgram();let m,h,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(jo).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(jo).join(`
`),h.length>0&&(h+=`
`)):(m=[kx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),h=[kx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Sr?"#define TONE_MAPPING":"",n.toneMapping!==Sr?Be.tonemapping_pars_fragment:"",n.toneMapping!==Sr?UC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,IC("linearToOutputTexel",n.outputColorSpace),FC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(jo).join(`
`)),o=_h(o),o=Ux(o,n),o=Fx(o,n),a=_h(a),a=Ux(a,n),a=Fx(a,n),o=Ox(o),a=Ox(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,E=x+h+a,A=Lx(r,r.VERTEX_SHADER,v),b=Lx(r,r.FRAGMENT_SHADER,E);r.attachShader(_,A),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(N){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(A)||"",K=r.getShaderInfoLog(b)||"",q=k.trim(),Z=V.trim(),Y=K.trim();let I=!0,G=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,b);else{const j=Ix(r,A,"vertex"),ce=Ix(r,b,"fragment");Ct("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+q+`
`+j+`
`+ce)}else q!==""?ke("WebGLProgram: Program Info Log:",q):(Z===""||Y==="")&&(G=!1);G&&(N.diagnostics={runnable:I,programLog:q,vertexShader:{log:Z,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(A),r.deleteShader(b),P=new sc(r,_),w=zC(r,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,PC)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=DC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let ZC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JC(e),n.set(e,i)),i}}class JC{constructor(e){this.id=ZC++,this.code=e,this.usedTimes=0}}function eR(t,e,n,i,r,s,o){const a=new Fy,l=new QC,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,N,k,V){const K=k.fog,q=V.geometry,Z=w.isMeshStandardMaterial?k.environment:null,Y=(w.isMeshStandardMaterial?n:e).get(w.envMap||Z),I=Y&&Y.mapping===au?Y.image.height:null,G=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&ke("WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const j=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=j!==void 0?j.length:0;let Ee=0;q.morphAttributes.position!==void 0&&(Ee=1),q.morphAttributes.normal!==void 0&&(Ee=2),q.morphAttributes.color!==void 0&&(Ee=3);let $e,Ye,Je,X;if(G){const rt=hi[G];$e=rt.vertexShader,Ye=rt.fragmentShader}else $e=w.vertexShader,Ye=w.fragmentShader,l.update(w),Je=l.getVertexShaderID(w),X=l.getFragmentShaderID(w);const J=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Oe=V.isInstancedMesh===!0,Te=V.isBatchedMesh===!0,Ge=!!w.map,Wt=!!w.matcap,Ve=!!Y,ht=!!w.aoMap,D=!!w.lightMap,We=!!w.bumpMap,je=!!w.normalMap,lt=!!w.displacementMap,ye=!!w.emissiveMap,mt=!!w.metalnessMap,be=!!w.roughnessMap,Fe=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,O=w.iridescence>0,$=w.sheen>0,ee=w.transmission>0,W=Fe&&!!w.anisotropyMap,Me=R&&!!w.clearcoatMap,fe=R&&!!w.clearcoatNormalMap,Ae=R&&!!w.clearcoatRoughnessMap,Se=O&&!!w.iridescenceMap,te=O&&!!w.iridescenceThicknessMap,se=$&&!!w.sheenColorMap,De=$&&!!w.sheenRoughnessMap,Re=!!w.specularMap,pe=!!w.specularColorMap,Ie=!!w.specularIntensityMap,L=ee&&!!w.transmissionMap,de=ee&&!!w.thicknessMap,ae=!!w.gradientMap,le=!!w.alphaMap,ie=w.alphaTest>0,Q=!!w.alphaHash,ve=!!w.extensions;let Ue=Sr;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const ut={shaderID:G,shaderType:w.type,shaderName:w.name,vertexShader:$e,fragmentShader:Ye,defines:w.defines,customVertexShaderID:Je,customFragmentShaderID:X,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Te,batchingColor:Te&&V._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&V.instanceColor!==null,instancingMorph:Oe&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:uo,alphaToCoverage:!!w.alphaToCoverage,map:Ge,matcap:Wt,envMap:Ve,envMapMode:Ve&&Y.mapping,envMapCubeUVHeight:I,aoMap:ht,lightMap:D,bumpMap:We,normalMap:je,displacementMap:d&&lt,emissiveMap:ye,normalMapObjectSpace:je&&w.normalMapType===KT,normalMapTangentSpace:je&&w.normalMapType===$T,metalnessMap:mt,roughnessMap:be,anisotropy:Fe,anisotropyMap:W,clearcoat:R,clearcoatMap:Me,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:S,iridescence:O,iridescenceMap:Se,iridescenceThicknessMap:te,sheen:$,sheenColorMap:se,sheenRoughnessMap:De,specularMap:Re,specularColorMap:pe,specularIntensityMap:Ie,transmission:ee,transmissionMap:L,thicknessMap:de,gradientMap:ae,opaque:w.transparent===!1&&w.blending===Zs&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:ie,alphaHash:Q,combine:w.combine,mapUv:Ge&&_(w.map.channel),aoMapUv:ht&&_(w.aoMap.channel),lightMapUv:D&&_(w.lightMap.channel),bumpMapUv:We&&_(w.bumpMap.channel),normalMapUv:je&&_(w.normalMap.channel),displacementMapUv:lt&&_(w.displacementMap.channel),emissiveMapUv:ye&&_(w.emissiveMap.channel),metalnessMapUv:mt&&_(w.metalnessMap.channel),roughnessMapUv:be&&_(w.roughnessMap.channel),anisotropyMapUv:W&&_(w.anisotropyMap.channel),clearcoatMapUv:Me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(w.sheenRoughnessMap.channel),specularMapUv:Re&&_(w.specularMap.channel),specularColorMapUv:pe&&_(w.specularColorMap.channel),specularIntensityMapUv:Ie&&_(w.specularIntensityMap.channel),transmissionMapUv:L&&_(w.transmissionMap.channel),thicknessMapUv:de&&_(w.thicknessMap.channel),alphaMapUv:le&&_(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(je||Fe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Ge||le),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ee,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ge&&w.map.isVideoTexture===!0&&Qe.getTransfer(w.map.colorSpace)===ot,decodeVideoTextureEmissive:ye&&w.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(w.emissiveMap.colorSpace)===ot,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Li,flipSided:w.side===_n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ve&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&w.extensions.multiDraw===!0||Te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)M.push(N),M.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(x(M,w),v(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function x(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),w.push(a.mask)}function E(w){const M=g[w.type];let N;if(M){const k=hi[M];N=ww.clone(k.uniforms)}else N=w.uniforms;return N}function A(w,M){let N;for(let k=0,V=u.length;k<V;k++){const K=u[k];if(K.cacheKey===M){N=K,++N.usedTimes;break}}return N===void 0&&(N=new KC(t,M,w,s),u.push(N)),N}function b(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:A,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:P}}function tR(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function nR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,g,_,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=m),e++,h}function a(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,_,m){const h=o(f,d,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||nR),i.length>1&&i.sort(d||zx),r.length>1&&r.sort(d||zx)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function iR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Bx,t.set(i,[o])):r>=s.length?(o=new Bx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function rR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new tt};break;case"SpotLight":n={position:new H,direction:new H,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function sR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let oR=0;function aR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function lR(t){const e=new rR,n=sR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Nt,o=new Nt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,x=0,v=0,E=0,A=0,b=0,C=0;c.sort(aR);for(let w=0,M=c.length;w<M;w++){const N=c[w],k=N.color,V=N.intensity,K=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=k.r*V,f+=k.g*V,d+=k.b*V;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(N.sh.coefficients[Z],V);C++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Y=N.shadow,I=n.get(N);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=Z,p++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(k).multiplyScalar(V),Z.distance=K,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,i.spot[_]=Z;const Y=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,Y.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[_]=Y.matrix,N.castShadow){const I=n.get(N);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=q,E++}_++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(k).multiplyScalar(V),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Z,m++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const Y=N.shadow,I=n.get(N);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=N.shadow.matrix,v++}i.point[g]=Z,g++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(V),Z.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[h]=Z,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==E||P.numSpotMaps!==A||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=E,P.numSpotMaps=A,P.numLightProbes=C,i.version=oR++)}function l(c,u){let f=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const v=c[h];if(v.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(v.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Vx(t){const e=new lR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Vx(t),e.set(r,[a])):s>=o.length?(a=new Vx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const uR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dR(t,e,n){let i=new Wy;const r=new et,s=new et,o=new Rt,a=new Ow({depthPacking:YT}),l=new kw,c={},u=n.maxTextureSize,f={[Tr]:_n,[_n]:Tr,[Li]:Li},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:uR,fragmentShader:fR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mi;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new qi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=My;let h=this.type;this.render=function(b,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),k=t.state;k.setBlending(ki),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=h!==Ri&&this.type===Ri,K=h===Ri&&this.type!==Ri;for(let q=0,Z=b.length;q<Z;q++){const Y=b[q],I=Y.shadow;if(I===void 0){ke("WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const G=I.getFrameExtents();if(r.multiply(G),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/G.x),r.x=s.x*G.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/G.y),r.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null||V===!0||K===!0){const ce=this.type!==Ri?{minFilter:Rn,magFilter:Rn}:{};I.map!==null&&I.map.dispose(),I.map=new ls(r.x,r.y,ce),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const j=I.getViewportCount();for(let ce=0;ce<j;ce++){const Ee=I.getViewport(ce);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),k.viewport(o),I.updateMatrices(Y,ce),i=I.getFrustum(),E(C,P,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===Ri&&x(I,P),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,N)};function x(b,C){const P=e.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ls(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,P,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,P,p,_,null)}function v(b,C,P,w){let M=null;const N=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)M=N;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const k=M.uuid,V=C.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let q=K[V];q===void 0&&(q=M.clone(),K[V]=q,C.addEventListener("dispose",A)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Ri?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=t.properties.get(M);k.light=P}return M}function E(b,C,P,w,M){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Ri)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const V=e.update(b),K=b.material;if(Array.isArray(K)){const q=V.groups;for(let Z=0,Y=q.length;Z<Y;Z++){const I=q[Z],G=K[I.materialIndex];if(G&&G.visible){const j=v(b,G,w,M);b.onBeforeShadow(t,b,C,P,V,j,I),t.renderBufferDirect(P,null,V,j,b,I),b.onAfterShadow(t,b,C,P,V,j,I)}}}else if(K.visible){const q=v(b,K,w,M);b.onBeforeShadow(t,b,C,P,V,q,null),t.renderBufferDirect(P,null,V,q,b,null),b.onAfterShadow(t,b,C,P,V,q,null)}}const k=b.children;for(let V=0,K=k.length;V<K;V++)E(k[V],C,P,w,M)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const w=c[P],M=b.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const hR={[Ld]:Nd,[Id]:Od,[Ud]:kd,[ao]:Fd,[Nd]:Ld,[Od]:Id,[kd]:Ud,[Fd]:ao};function pR(t,e){function n(){let L=!1;const de=new Rt;let ae=null;const le=new Rt(0,0,0,0);return{setMask:function(ie){ae!==ie&&!L&&(t.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){L=ie},setClear:function(ie,Q,ve,Ue,ut){ut===!0&&(ie*=Ue,Q*=Ue,ve*=Ue),de.set(ie,Q,ve,Ue),le.equals(de)===!1&&(t.clearColor(ie,Q,ve,Ue),le.copy(de))},reset:function(){L=!1,ae=null,le.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,ae=null,le=null,ie=null;return{setReversed:function(Q){if(de!==Q){const ve=e.get("EXT_clip_control");Q?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),de=Q;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return de},setTest:function(Q){Q?J(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(Q){ae!==Q&&!L&&(t.depthMask(Q),ae=Q)},setFunc:function(Q){if(de&&(Q=hR[Q]),le!==Q){switch(Q){case Ld:t.depthFunc(t.NEVER);break;case Nd:t.depthFunc(t.ALWAYS);break;case Id:t.depthFunc(t.LESS);break;case ao:t.depthFunc(t.LEQUAL);break;case Ud:t.depthFunc(t.EQUAL);break;case Fd:t.depthFunc(t.GEQUAL);break;case Od:t.depthFunc(t.GREATER);break;case kd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Q}},setLocked:function(Q){L=Q},setClear:function(Q){ie!==Q&&(de&&(Q=1-Q),t.clearDepth(Q),ie=Q)},reset:function(){L=!1,ae=null,le=null,ie=null,de=!1}}}function r(){let L=!1,de=null,ae=null,le=null,ie=null,Q=null,ve=null,Ue=null,ut=null;return{setTest:function(rt){L||(rt?J(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(rt){de!==rt&&!L&&(t.stencilMask(rt),de=rt)},setFunc:function(rt,ui,Xn){(ae!==rt||le!==ui||ie!==Xn)&&(t.stencilFunc(rt,ui,Xn),ae=rt,le=ui,ie=Xn)},setOp:function(rt,ui,Xn){(Q!==rt||ve!==ui||Ue!==Xn)&&(t.stencilOp(rt,ui,Xn),Q=rt,ve=ui,Ue=Xn)},setLocked:function(rt){L=rt},setClear:function(rt){ut!==rt&&(t.clearStencil(rt),ut=rt)},reset:function(){L=!1,de=null,ae=null,le=null,ie=null,Q=null,ve=null,Ue=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,E=null,A=null,b=null,C=new tt(0,0,0),P=0,w=!1,M=null,N=null,k=null,V=null,K=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,Y=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=Y>=1):I.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=Y>=2);let G=null,j={};const ce=t.getParameter(t.SCISSOR_BOX),Ee=t.getParameter(t.VIEWPORT),$e=new Rt().fromArray(ce),Ye=new Rt().fromArray(Ee);function Je(L,de,ae,le){const ie=new Uint8Array(4),Q=t.createTexture();t.bindTexture(L,Q),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ve=0;ve<ae;ve++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(de+ve,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return Q}const X={};X[t.TEXTURE_2D]=Je(t.TEXTURE_2D,t.TEXTURE_2D,1),X[t.TEXTURE_CUBE_MAP]=Je(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[t.TEXTURE_2D_ARRAY]=Je(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),X[t.TEXTURE_3D]=Je(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(ao),We(!1),je(j0),J(t.CULL_FACE),ht(ki);function J(L){u[L]!==!0&&(t.enable(L),u[L]=!0)}function ge(L){u[L]!==!1&&(t.disable(L),u[L]=!1)}function Oe(L,de){return f[L]!==de?(t.bindFramebuffer(L,de),f[L]=de,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(L,de){let ae=p,le=!1;if(L){ae=d.get(de),ae===void 0&&(ae=[],d.set(de,ae));const ie=L.textures;if(ae.length!==ie.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,ve=ie.length;Q<ve;Q++)ae[Q]=t.COLOR_ATTACHMENT0+Q;ae.length=ie.length,le=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,le=!0);le&&t.drawBuffers(ae)}function Ge(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const Wt={[Gr]:t.FUNC_ADD,[yT]:t.FUNC_SUBTRACT,[ST]:t.FUNC_REVERSE_SUBTRACT};Wt[MT]=t.MIN,Wt[ET]=t.MAX;const Ve={[TT]:t.ZERO,[wT]:t.ONE,[bT]:t.SRC_COLOR,[Pd]:t.SRC_ALPHA,[LT]:t.SRC_ALPHA_SATURATE,[PT]:t.DST_COLOR,[CT]:t.DST_ALPHA,[AT]:t.ONE_MINUS_SRC_COLOR,[Dd]:t.ONE_MINUS_SRC_ALPHA,[DT]:t.ONE_MINUS_DST_COLOR,[RT]:t.ONE_MINUS_DST_ALPHA,[NT]:t.CONSTANT_COLOR,[IT]:t.ONE_MINUS_CONSTANT_COLOR,[UT]:t.CONSTANT_ALPHA,[FT]:t.ONE_MINUS_CONSTANT_ALPHA};function ht(L,de,ae,le,ie,Q,ve,Ue,ut,rt){if(L===ki){_===!0&&(ge(t.BLEND),_=!1);return}if(_===!1&&(J(t.BLEND),_=!0),L!==_T){if(L!==m||rt!==w){if((h!==Gr||E!==Gr)&&(t.blendEquation(t.FUNC_ADD),h=Gr,E=Gr),rt)switch(L){case Zs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case X0:t.blendFunc(t.ONE,t.ONE);break;case q0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Y0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ct("WebGLState: Invalid blending: ",L);break}else switch(L){case Zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case X0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case q0:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Y0:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",L);break}x=null,v=null,A=null,b=null,C.set(0,0,0),P=0,m=L,w=rt}return}ie=ie||de,Q=Q||ae,ve=ve||le,(de!==h||ie!==E)&&(t.blendEquationSeparate(Wt[de],Wt[ie]),h=de,E=ie),(ae!==x||le!==v||Q!==A||ve!==b)&&(t.blendFuncSeparate(Ve[ae],Ve[le],Ve[Q],Ve[ve]),x=ae,v=le,A=Q,b=ve),(Ue.equals(C)===!1||ut!==P)&&(t.blendColor(Ue.r,Ue.g,Ue.b,ut),C.copy(Ue),P=ut),m=L,w=!1}function D(L,de){L.side===Li?ge(t.CULL_FACE):J(t.CULL_FACE);let ae=L.side===_n;de&&(ae=!ae),We(ae),L.blending===Zs&&L.transparent===!1?ht(ki):ht(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);const le=L.stencilWrite;a.setTest(le),le&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){M!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),M=L)}function je(L){L!==xT?(J(t.CULL_FACE),L!==N&&(L===j0?t.cullFace(t.BACK):L===gT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),N=L}function lt(L){L!==k&&(Z&&t.lineWidth(L),k=L)}function ye(L,de,ae){L?(J(t.POLYGON_OFFSET_FILL),(V!==de||K!==ae)&&(t.polygonOffset(de,ae),V=de,K=ae)):ge(t.POLYGON_OFFSET_FILL)}function mt(L){L?J(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function be(L){L===void 0&&(L=t.TEXTURE0+q-1),G!==L&&(t.activeTexture(L),G=L)}function Fe(L,de,ae){ae===void 0&&(G===null?ae=t.TEXTURE0+q-1:ae=G);let le=j[ae];le===void 0&&(le={type:void 0,texture:void 0},j[ae]=le),(le.type!==L||le.texture!==de)&&(G!==ae&&(t.activeTexture(ae),G=ae),t.bindTexture(L,de||X[L]),le.type=L,le.texture=de)}function R(){const L=j[G];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function $(){try{t.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ee(){try{t.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function W(){try{t.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Me(){try{t.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function fe(){try{t.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ae(){try{t.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Se(){try{t.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function te(){try{t.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function se(L){$e.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),$e.copy(L))}function De(L){Ye.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ye.copy(L))}function Re(L,de){let ae=c.get(de);ae===void 0&&(ae=new WeakMap,c.set(de,ae));let le=ae.get(L);le===void 0&&(le=t.getUniformBlockIndex(de,L.name),ae.set(L,le))}function pe(L,de){const le=c.get(de).get(L);l.get(de)!==le&&(t.uniformBlockBinding(de,le,L.__bindingPointIndex),l.set(de,le))}function Ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},G=null,j={},f={},d=new WeakMap,p=[],g=null,_=!1,m=null,h=null,x=null,v=null,E=null,A=null,b=null,C=new tt(0,0,0),P=0,w=!1,M=null,N=null,k=null,V=null,K=null,$e.set(0,0,t.canvas.width,t.canvas.height),Ye.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Oe,drawBuffers:Te,useProgram:Ge,setBlending:ht,setMaterial:D,setFlipSided:We,setCullFace:je,setLineWidth:lt,setPolygonOffset:ye,setScissorTest:mt,activeTexture:be,bindTexture:Fe,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:Se,texImage3D:te,updateUBOMapping:Re,uniformBlockBinding:pe,texStorage2D:fe,texStorage3D:Ae,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:W,compressedTexSubImage3D:Me,scissor:se,viewport:De,reset:Ie}}function mR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):kc("canvas")}function _(R,S,O){let $=1;const ee=Fe(R);if((ee.width>O||ee.height>O)&&($=O/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const W=Math.floor($*ee.width),Me=Math.floor($*ee.height);f===void 0&&(f=g(W,Me));const fe=S?g(W,Me):f;return fe.width=W,fe.height=Me,fe.getContext("2d").drawImage(R,0,0,W,Me),ke("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+W+"x"+Me+")."),fe}else return"data"in R&&ke("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function m(R){return R.generateMipmaps}function h(R){t.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(R,S,O,$,ee=!1){if(R!==null){if(t[R]!==void 0)return t[R];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let W=S;if(S===t.RED&&(O===t.FLOAT&&(W=t.R32F),O===t.HALF_FLOAT&&(W=t.R16F),O===t.UNSIGNED_BYTE&&(W=t.R8)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.R8UI),O===t.UNSIGNED_SHORT&&(W=t.R16UI),O===t.UNSIGNED_INT&&(W=t.R32UI),O===t.BYTE&&(W=t.R8I),O===t.SHORT&&(W=t.R16I),O===t.INT&&(W=t.R32I)),S===t.RG&&(O===t.FLOAT&&(W=t.RG32F),O===t.HALF_FLOAT&&(W=t.RG16F),O===t.UNSIGNED_BYTE&&(W=t.RG8)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RG8UI),O===t.UNSIGNED_SHORT&&(W=t.RG16UI),O===t.UNSIGNED_INT&&(W=t.RG32UI),O===t.BYTE&&(W=t.RG8I),O===t.SHORT&&(W=t.RG16I),O===t.INT&&(W=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGB8UI),O===t.UNSIGNED_SHORT&&(W=t.RGB16UI),O===t.UNSIGNED_INT&&(W=t.RGB32UI),O===t.BYTE&&(W=t.RGB8I),O===t.SHORT&&(W=t.RGB16I),O===t.INT&&(W=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),O===t.UNSIGNED_INT&&(W=t.RGBA32UI),O===t.BYTE&&(W=t.RGBA8I),O===t.SHORT&&(W=t.RGBA16I),O===t.INT&&(W=t.RGBA32I)),S===t.RGB&&(O===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(W=t.R11F_G11F_B10F)),S===t.RGBA){const Me=ee?Fc:Qe.getTransfer($);O===t.FLOAT&&(W=t.RGBA32F),O===t.HALF_FLOAT&&(W=t.RGBA16F),O===t.UNSIGNED_BYTE&&(W=Me===ot?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(R,S){let O;return R?S===null||S===as||S===wa?O=t.DEPTH24_STENCIL8:S===Fi?O=t.DEPTH32F_STENCIL8:S===Ta&&(O=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===wa?O=t.DEPTH_COMPONENT24:S===Fi?O=t.DEPTH_COMPONENT32F:S===Ta&&(O=t.DEPTH_COMPONENT16),O}function A(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Rn&&R.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function b(R){const S=R.target;S.removeEventListener("dispose",b),P(S),S.isVideoTexture&&u.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),M(S)}function P(R){const S=i.get(R);if(S.__webglInit===void 0)return;const O=R.source,$=d.get(O);if($){const ee=$[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(R),Object.keys($).length===0&&d.delete(O)}i.remove(R)}function w(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const O=R.source,$=d.get(O);delete $[S.__cacheKey],o.memory.textures--}function M(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let ee=0;ee<S.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(S.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,ee=O.length;$<ee;$++){const W=i.get(O[$]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(O[$])}i.remove(R)}let N=0;function k(){N=0}function V(){const R=N;return R>=r.maxTextures&&ke("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function K(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const O=i.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,R,S);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function Z(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){X(O,R,S);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function Y(R,S){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){X(O,R,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function I(R,S){const O=i.get(R);if(R.version>0&&O.__version!==R.version){J(O,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const G={[Vd]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},j={[Rn]:t.NEAREST,[XT]:t.NEAREST_MIPMAP_NEAREST,[xl]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Gu]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},ce={[ZT]:t.NEVER,[iw]:t.ALWAYS,[QT]:t.LESS,[Ly]:t.LEQUAL,[JT]:t.EQUAL,[nw]:t.GEQUAL,[ew]:t.GREATER,[tw]:t.NOTEQUAL};function Ee(R,S){if(S.type===Fi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===Gu||S.magFilter===xl||S.magFilter===Yr||S.minFilter===Bn||S.minFilter===Gu||S.minFilter===xl||S.minFilter===Yr)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,G[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,G[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,G[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,j[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Rn||S.minFilter!==xl&&S.minFilter!==Yr||S.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $e(R,S){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const W=K(S);if(W!==R.__cacheKey){ee[W]===void 0&&(ee[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[W].usedTimes++;const Me=ee[R.__cacheKey];Me!==void 0&&(ee[R.__cacheKey].usedTimes--,Me.usedTimes===0&&w(S)),R.__cacheKey=W,R.__webglTexture=ee[W].texture}return O}function Ye(R,S,O){return Math.floor(Math.floor(R/O)/S)}function Je(R,S,O,$){const W=R.updateRanges;if(W.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,O,$,S.data);else{W.sort((te,se)=>te.start-se.start);let Me=0;for(let te=1;te<W.length;te++){const se=W[Me],De=W[te],Re=se.start+se.count,pe=Ye(De.start,S.width,4),Ie=Ye(se.start,S.width,4);De.start<=Re+1&&pe===Ie&&Ye(De.start+De.count-1,S.width,4)===pe?se.count=Math.max(se.count,De.start+De.count-se.start):(++Me,W[Me]=De)}W.length=Me+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ae=t.getParameter(t.UNPACK_SKIP_PIXELS),Se=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let te=0,se=W.length;te<se;te++){const De=W[te],Re=Math.floor(De.start/4),pe=Math.ceil(De.count/4),Ie=Re%S.width,L=Math.floor(Re/S.width),de=pe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Ie,L,de,ae,O,$,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function X(R,S,O){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const ee=$e(R,S),W=S.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+O);const Me=i.get(W);if(W.version!==Me.__version||ee===!0){n.activeTexture(t.TEXTURE0+O);const fe=Qe.getPrimaries(Qe.workingColorSpace),Ae=S.colorSpace===cr?null:Qe.getPrimaries(S.colorSpace),Se=S.colorSpace===cr||fe===Ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let te=_(S.image,!1,r.maxTextureSize);te=be(S,te);const se=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Re=v(S.internalFormat,se,De,S.colorSpace,S.isVideoTexture);Ee($,S);let pe;const Ie=S.mipmaps,L=S.isVideoTexture!==!0,de=Me.__version===void 0||ee===!0,ae=W.dataReady,le=A(S,te);if(S.isDepthTexture)Re=E(S.format===Aa,S.type),de&&(L?n.texStorage2D(t.TEXTURE_2D,1,Re,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,se,De,null));else if(S.isDataTexture)if(Ie.length>0){L&&de&&n.texStorage2D(t.TEXTURE_2D,le,Re,Ie[0].width,Ie[0].height);for(let ie=0,Q=Ie.length;ie<Q;ie++)pe=Ie[ie],L?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):n.texImage2D(t.TEXTURE_2D,ie,Re,pe.width,pe.height,0,se,De,pe.data);S.generateMipmaps=!1}else L?(de&&n.texStorage2D(t.TEXTURE_2D,le,Re,te.width,te.height),ae&&Je(S,te,se,De)):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,se,De,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Re,Ie[0].width,Ie[0].height,te.depth);for(let ie=0,Q=Ie.length;ie<Q;ie++)if(pe=Ie[ie],S.format!==ri)if(se!==null)if(L){if(ae)if(S.layerUpdates.size>0){const ve=vx(pe.width,pe.height,S.format,S.type);for(const Ue of S.layerUpdates){const ut=pe.data.subarray(Ue*ve/pe.data.BYTES_PER_ELEMENT,(Ue+1)*ve/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Ue,pe.width,pe.height,1,se,ut)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Re,pe.width,pe.height,te.depth,0,pe.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,pe.width,pe.height,te.depth,se,De,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Re,pe.width,pe.height,te.depth,0,se,De,pe.data)}else{L&&de&&n.texStorage2D(t.TEXTURE_2D,le,Re,Ie[0].width,Ie[0].height);for(let ie=0,Q=Ie.length;ie<Q;ie++)pe=Ie[ie],S.format!==ri?se!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Re,pe.width,pe.height,0,pe.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,pe.width,pe.height,se,De,pe.data):n.texImage2D(t.TEXTURE_2D,ie,Re,pe.width,pe.height,0,se,De,pe.data)}else if(S.isDataArrayTexture)if(L){if(de&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,Re,te.width,te.height,te.depth),ae)if(S.layerUpdates.size>0){const ie=vx(te.width,te.height,S.format,S.type);for(const Q of S.layerUpdates){const ve=te.data.subarray(Q*ie/te.data.BYTES_PER_ELEMENT,(Q+1)*ie/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,te.width,te.height,1,se,De,ve)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,se,De,te.data);else if(S.isData3DTexture)L?(de&&n.texStorage3D(t.TEXTURE_3D,le,Re,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,De,te.data)):n.texImage3D(t.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,se,De,te.data);else if(S.isFramebufferTexture){if(de)if(L)n.texStorage2D(t.TEXTURE_2D,le,Re,te.width,te.height);else{let ie=te.width,Q=te.height;for(let ve=0;ve<le;ve++)n.texImage2D(t.TEXTURE_2D,ve,Re,ie,Q,0,se,De,null),ie>>=1,Q>>=1}}else if(Ie.length>0){if(L&&de){const ie=Fe(Ie[0]);n.texStorage2D(t.TEXTURE_2D,le,Re,ie.width,ie.height)}for(let ie=0,Q=Ie.length;ie<Q;ie++)pe=Ie[ie],L?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,se,De,pe):n.texImage2D(t.TEXTURE_2D,ie,Re,se,De,pe);S.generateMipmaps=!1}else if(L){if(de){const ie=Fe(te);n.texStorage2D(t.TEXTURE_2D,le,Re,ie.width,ie.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,De,te)}else n.texImage2D(t.TEXTURE_2D,0,Re,se,De,te);m(S)&&h($),Me.__version=W.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,O){if(S.image.length!==6)return;const $=$e(R,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const W=i.get(ee);if(ee.version!==W.__version||$===!0){n.activeTexture(t.TEXTURE0+O);const Me=Qe.getPrimaries(Qe.workingColorSpace),fe=S.colorSpace===cr?null:Qe.getPrimaries(S.colorSpace),Ae=S.colorSpace===cr||Me===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Se=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,se=[];for(let Q=0;Q<6;Q++)!Se&&!te?se[Q]=_(S.image[Q],!0,r.maxCubemapSize):se[Q]=te?S.image[Q].image:S.image[Q],se[Q]=be(S,se[Q]);const De=se[0],Re=s.convert(S.format,S.colorSpace),pe=s.convert(S.type),Ie=v(S.internalFormat,Re,pe,S.colorSpace),L=S.isVideoTexture!==!0,de=W.__version===void 0||$===!0,ae=ee.dataReady;let le=A(S,De);Ee(t.TEXTURE_CUBE_MAP,S);let ie;if(Se){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ie,De.width,De.height);for(let Q=0;Q<6;Q++){ie=se[Q].mipmaps;for(let ve=0;ve<ie.length;ve++){const Ue=ie[ve];S.format!==ri?Re!==null?L?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Ue.width,Ue.height,Re,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ie,Ue.width,Ue.height,0,Ue.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,0,0,Ue.width,Ue.height,Re,pe,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve,Ie,Ue.width,Ue.height,0,Re,pe,Ue.data)}}}else{if(ie=S.mipmaps,L&&de){ie.length>0&&le++;const Q=Fe(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(te){L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,se[Q].width,se[Q].height,Re,pe,se[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,se[Q].width,se[Q].height,0,Re,pe,se[Q].data);for(let ve=0;ve<ie.length;ve++){const ut=ie[ve].image[Q].image;L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,ut.width,ut.height,Re,pe,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ie,ut.width,ut.height,0,Re,pe,ut.data)}}else{L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Re,pe,se[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Ie,Re,pe,se[Q]);for(let ve=0;ve<ie.length;ve++){const Ue=ie[ve];L?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,0,0,Re,pe,Ue.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ve+1,Ie,Re,pe,Ue.image[Q])}}}m(S)&&h(t.TEXTURE_CUBE_MAP),W.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ge(R,S,O,$,ee,W){const Me=s.convert(O.format,O.colorSpace),fe=s.convert(O.type),Ae=v(O.internalFormat,Me,fe,O.colorSpace),Se=i.get(S),te=i.get(O);if(te.__renderTarget=S,!Se.__hasExternalTextures){const se=Math.max(1,S.width>>W),De=Math.max(1,S.height>>W);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,W,Ae,se,De,S.depth,0,Me,fe,null):n.texImage2D(ee,W,Ae,se,De,0,Me,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,te.__webglTexture,0,lt(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,te.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const $=S.depthTexture,ee=$&&$.isDepthTexture?$.type:null,W=E(S.stencilBuffer,ee),Me=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=lt(S);ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,W,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,W,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,W,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const $=S.textures;for(let ee=0;ee<$.length;ee++){const W=$[ee],Me=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),Ae=v(W.internalFormat,Me,fe,W.colorSpace),Se=lt(S);O&&ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,Ae,S.width,S.height):ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,Ae,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ae,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const ee=$.__webglTexture,W=lt(S);if(S.depthTexture.format===ba)ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(S.depthTexture.format===Aa)ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const S=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const $=R.texture.mipmaps;$&&$.length>0?Te(S.__webglFramebuffer[0],R):Te(S.__webglFramebuffer,R)}else if(O){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),Oe(S.__webglDepthbuffer[$],R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,W)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Oe(S.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,W)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Wt(R,S,O){const $=i.get(R);S!==void 0&&ge($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ge(R)}function Ve(R){const S=R.texture,O=i.get(R),$=i.get(S);R.addEventListener("dispose",C);const ee=R.textures,W=R.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,o.memory.textures++),W){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[fe]=[];for(let Ae=0;Ae<S.mipmaps.length;Ae++)O.__webglFramebuffer[fe][Ae]=t.createFramebuffer()}else O.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)O.__webglFramebuffer[fe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Me)for(let fe=0,Ae=ee.length;fe<Ae;fe++){const Se=i.get(ee[fe]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&ye(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const Ae=ee[fe];O.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[fe]);const Se=s.convert(Ae.format,Ae.colorSpace),te=s.convert(Ae.type),se=v(Ae.internalFormat,Se,te,Ae.colorSpace,R.isXRRenderTarget===!0),De=lt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,O.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Ee(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)ge(O.__webglFramebuffer[fe][Ae],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae);else ge(O.__webglFramebuffer[fe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(S)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let fe=0,Ae=ee.length;fe<Ae;fe++){const Se=ee[fe],te=i.get(Se);let se=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),Ee(se,Se),ge(O.__webglFramebuffer,R,Se,t.COLOR_ATTACHMENT0+fe,se,0),m(Se)&&h(se)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,$.__webglTexture),Ee(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ae=0;Ae<S.mipmaps.length;Ae++)ge(O.__webglFramebuffer[Ae],R,S,t.COLOR_ATTACHMENT0,fe,Ae);else ge(O.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,fe,0);m(S)&&h(fe),n.unbindTexture()}R.depthBuffer&&Ge(R)}function ht(R){const S=R.textures;for(let O=0,$=S.length;O<$;O++){const ee=S[O];if(m(ee)){const W=x(R),Me=i.get(ee).__webglTexture;n.bindTexture(W,Me),h(W),n.unbindTexture()}}}const D=[],We=[];function je(R){if(R.samples>0){if(ye(R)===!1){const S=R.textures,O=R.width,$=R.height;let ee=t.COLOR_BUFFER_BIT;const W=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),fe=S.length>1;if(fe)for(let Se=0;Se<S.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ae=R.texture.mipmaps;Ae&&Ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const te=i.get(S[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,O,$,0,0,O,$,ee,t.NEAREST),l===!0&&(D.length=0,We.length=0,D.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(W),We.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,We)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Se=0;Se<S.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Me.__webglColorRenderbuffer[Se]);const te=i.get(S[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function lt(R){return Math.min(r.maxSamples,R.samples)}function ye(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function be(R,S){const O=R.colorSpace,$=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==uo&&O!==cr&&(Qe.getTransfer(O)===ot?($!==ri||ee!==ji)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",O)),S}function Fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=Y,this.setTextureCube=I,this.rebindTextures=Wt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ye}function xR(t,e){function n(i,r=cr){let s;const o=Qe.getTransfer(r);if(i===ji)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ay)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Cy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wy)return t.BYTE;if(i===by)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===kp)return t.INT;if(i===as)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===vo)return t.HALF_FLOAT;if(i===Ry)return t.ALPHA;if(i===Py)return t.RGB;if(i===ri)return t.RGBA;if(i===ba)return t.DEPTH_COMPONENT;if(i===Aa)return t.DEPTH_STENCIL;if(i===Dy)return t.RED;if(i===Vp)return t.RED_INTEGER;if(i===Hp)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Wp)return t.RGBA_INTEGER;if(i===tc||i===nc||i===ic||i===rc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===tc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===jd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qd||i===Yd||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qd||i===Yd)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$d)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Kd||i===Zd||i===Qd||i===Jd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ih)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ah)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ch)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uh||i===fh||i===dh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uh)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hh||i===ph||i===mh||i===xh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===wa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const gR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _R{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new yi({vertexShader:gR,fragmentShader:vR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qi(new Xa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends _o{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new _R,h={},x=n.getContextAttributes();let v=null,E=null;const A=[],b=[],C=new et;let P=null;const w=new ni;w.viewport=new Rt;const M=new ni;M.viewport=new Rt;const N=[w,M],k=new zw;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=A[X];return J===void 0&&(J=new hf,A[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=A[X];return J===void 0&&(J=new hf,A[X]=J),J.getGripSpace()},this.getHand=function(X){let J=A[X];return J===void 0&&(J=new hf,A[X]=J),J.getHandSpace()};function q(X){const J=b.indexOf(X.inputSource);if(J===-1)return;const ge=A[J];ge!==void 0&&(ge.update(X.inputSource,X.frame,c||o),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Y);for(let X=0;X<A.length;X++){const J=b[X];J!==null&&(b[X]=null,A[X].disconnect(J))}V=null,K=null,m.reset();for(const X in h)delete h[X];e.setRenderTarget(v),p=null,d=null,f=null,r=null,E=null,Je.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Oe=null,Te=null;x.depth&&(Te=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=x.stencil?Aa:ba,Oe=x.stencil?wa:as);const Ge={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new ls(d.textureWidth,d.textureHeight,{format:ri,type:ji,depthTexture:new Xy(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new ls(p.framebufferWidth,p.framebufferHeight,{format:ri,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Je.setContext(r),Je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(X){for(let J=0;J<X.removed.length;J++){const ge=X.removed[J],Oe=b.indexOf(ge);Oe>=0&&(b[Oe]=null,A[Oe].disconnect(ge))}for(let J=0;J<X.added.length;J++){const ge=X.added[J];let Oe=b.indexOf(ge);if(Oe===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=b.length){b.push(ge),Oe=Ge;break}else if(b[Ge]===null){b[Ge]=ge,Oe=Ge;break}if(Oe===-1)break}const Te=A[Oe];Te&&Te.connect(ge)}}const I=new H,G=new H;function j(X,J,ge){I.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(ge.matrixWorld);const Oe=I.distanceTo(G),Te=J.projectionMatrix.elements,Ge=ge.projectionMatrix.elements,Wt=Te[14]/(Te[10]-1),Ve=Te[14]/(Te[10]+1),ht=(Te[9]+1)/Te[5],D=(Te[9]-1)/Te[5],We=(Te[8]-1)/Te[0],je=(Ge[8]+1)/Ge[0],lt=Wt*We,ye=Wt*je,mt=Oe/(-We+je),be=mt*-We;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(be),X.translateZ(mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Te[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Fe=Wt+mt,R=Ve+mt,S=lt-be,O=ye+(Oe-be),$=ht*Ve/R*Fe,ee=D*Ve/R*Fe;X.projectionMatrix.makePerspective(S,O,$,ee,Fe,R),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ce(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let J=X.near,ge=X.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),k.near=M.near=w.near=J,k.far=M.far=w.far=ge,(V!==k.near||K!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,K=k.far),k.layers.mask=X.layers.mask|6,w.layers.mask=k.layers.mask&3,M.layers.mask=k.layers.mask&5;const Oe=X.parent,Te=k.cameras;ce(k,Oe);for(let Ge=0;Ge<Te.length;Ge++)ce(Te[Ge],Oe);Te.length===2?j(k,w,M):k.projectionMatrix.copy(w.projectionMatrix),Ee(X,k,Oe)};function Ee(X,J,ge){ge===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=gh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(X){return h[X]};let $e=null;function Ye(X,J){if(u=J.getViewerPose(c||o),g=J,u!==null){const ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Oe=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let Ve=0;Ve<ge.length;Ve++){const ht=ge[Ve];let D=null;if(p!==null)D=p.getViewport(ht);else{const je=f.getViewSubImage(d,ht);D=je.viewport,Ve===0&&(e.setRenderTargetTextures(E,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(E))}let We=N[Ve];We===void 0&&(We=new ni,We.layers.enable(Ve),We.viewport=new Rt,N[Ve]=We),We.matrix.fromArray(ht.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ht.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(D.x,D.y,D.width,D.height),Ve===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(We)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const Ve=f.getDepthInformation(ge[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(Te&&Te.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let Ve=0;Ve<ge.length;Ve++){const ht=ge[Ve].camera;if(ht){let D=h[ht];D||(D=new qy,h[ht]=D);const We=f.getCameraImage(ht);D.sourceTexture=We}}}}for(let ge=0;ge<A.length;ge++){const Oe=b[ge],Te=A[ge];Oe!==null&&Te!==void 0&&Te.update(Oe,J,c||o)}$e&&$e(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Je=new $y;Je.setAnimationLoop(Ye),this.setAnimationLoop=function(X){$e=X},this.dispose=function(){}}}const Or=new Xi,SR=new Nt;function MR(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Vy(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,E=x.envMapRotation;v&&(m.envMap.value=v,Or.copy(E),Or.x*=-1,Or.y*=-1,Or.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(SR.makeRotationFromEuler(Or)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ER(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const E=v.program;i.uniformBlockBinding(x,E)}function c(x,v){let E=r[x.id];E===void 0&&(g(x),E=u(x),r[x.id]=E,x.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(x,A);const b=e.render.frame;s[x.id]!==b&&(d(x),s[x.id]=b)}function u(x){const v=f();x.__bindingPointIndex=v;const E=t.createBuffer(),A=x.__size,b=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=r[x.id],E=x.uniforms,A=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let b=0,C=E.length;b<C;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let w=0,M=P.length;w<M;w++){const N=P[w];if(p(N,b,w,A)===!0){const k=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let K=0;for(let q=0;q<V.length;q++){const Z=V[q],Y=_(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,k+K,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,K),K+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,v,E,A){const b=x.value,C=v+"_"+E;if(A[C]===void 0)return typeof b=="number"||typeof b=="boolean"?A[C]=b:A[C]=b.clone(),!0;{const P=A[C];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[C]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(x){const v=x.uniforms;let E=0;const A=16;for(let C=0,P=v.length;C<P;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let M=0,N=w.length;M<N;M++){const k=w[M],V=Array.isArray(k.value)?k.value:[k.value];for(let K=0,q=V.length;K<q;K++){const Z=V[K],Y=_(Z),I=E%A,G=I%Y.boundary,j=I+G;E+=G,j!==0&&A-j<Y.storage&&(E+=A-j),k.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=Y.storage}}}const b=E%A;return b>0&&(E+=A-b),x.__size=E,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ke("WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const TR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ci=null;function wR(){return Ci===null&&(Ci=new Lw(TR,32,32,Hp,vo),Ci.minFilter=Bn,Ci.magFilter=Bn,Ci.wrapS=Ui,Ci.wrapT=Ui,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class bR{constructor(e={}){const{canvas:n=rw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Set([Wp,Gp,Vp]),_=new Set([ji,as,Ta,wa,zp,Bp]),m=new Uint32Array(4),h=new Int32Array(4);let x=null,v=null;const E=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=Fn;let P=0,w=0,M=null,N=-1,k=null;const V=new Rt,K=new Rt;let q=null;const Z=new tt(0);let Y=0,I=n.width,G=n.height,j=1,ce=null,Ee=null;const $e=new Rt(0,0,I,G),Ye=new Rt(0,0,I,G);let Je=!1;const X=new Wy;let J=!1,ge=!1;const Oe=new Nt,Te=new H,Ge=new Rt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ht(){return M===null?j:1}let D=i;function We(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Op}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",ve,!1),D===null){const U="webgl2";if(D=We(U,T),D===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let je,lt,ye,mt,be,Fe,R,S,O,$,ee,W,Me,fe,Ae,Se,te,se,De,Re,pe,Ie,L,de;function ae(){je=new IA(D),je.init(),Ie=new xR(D,je),lt=new wA(D,je,e,Ie),ye=new pR(D,je),lt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),mt=new OA(D),be=new tR,Fe=new mR(D,je,ye,be,lt,Ie,mt),R=new AA(b),S=new NA(b),O=new Vw(D),L=new EA(D,O),$=new UA(D,O,mt,L),ee=new zA(D,$,O,mt),De=new kA(D,lt,Fe),Se=new bA(be),W=new eR(b,R,S,je,lt,L,Se),Me=new MR(b,be),fe=new iR,Ae=new cR(je),se=new MA(b,R,S,ye,ee,p,l),te=new dR(b,ee,lt),de=new ER(D,mt,lt,ye),Re=new TA(D,je,mt),pe=new FA(D,je,mt),mt.programs=W.programs,b.capabilities=lt,b.extensions=je,b.properties=be,b.renderLists=fe,b.shadowMap=te,b.state=ye,b.info=mt}ae();const le=new yR(b,D);this.xr=le,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(I,G,!1))},this.getSize=function(T){return T.set(I,G)},this.setSize=function(T,U,z=!0){if(le.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,G=U,n.width=Math.floor(T*j),n.height=Math.floor(U*j),z===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(I*j,G*j).floor()},this.setDrawingBufferSize=function(T,U,z){I=T,G=U,j=z,n.width=Math.floor(T*z),n.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(V)},this.getViewport=function(T){return T.copy($e)},this.setViewport=function(T,U,z,B){T.isVector4?$e.set(T.x,T.y,T.z,T.w):$e.set(T,U,z,B),ye.viewport(V.copy($e).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(Ye)},this.setScissor=function(T,U,z,B){T.isVector4?Ye.set(T.x,T.y,T.z,T.w):Ye.set(T,U,z,B),ye.scissor(K.copy(Ye).multiplyScalar(j).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(T){ye.setScissorTest(Je=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){Ee=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,z=!0){let B=0;if(T){let F=!1;if(M!==null){const re=M.texture.format;F=g.has(re)}if(F){const re=M.texture.type,he=_.has(re),_e=se.getClearColor(),xe=se.getClearAlpha(),Pe=_e.r,Ne=_e.g,we=_e.b;he?(m[0]=Pe,m[1]=Ne,m[2]=we,m[3]=xe,D.clearBufferuiv(D.COLOR,0,m)):(h[0]=Pe,h[1]=Ne,h[2]=we,h[3]=xe,D.clearBufferiv(D.COLOR,0,h))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT),z&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),se.dispose(),fe.dispose(),Ae.dispose(),be.dispose(),R.dispose(),S.dispose(),ee.dispose(),L.dispose(),de.dispose(),W.dispose(),le.dispose(),le.removeEventListener("sessionstart",Cm),le.removeEventListener("sessionend",Rm),Pr.stop()};function ie(T){T.preventDefault(),J0("WebGLRenderer: Context Lost."),C=!0}function Q(){J0("WebGLRenderer: Context Restored."),C=!1;const T=mt.autoReset,U=te.enabled,z=te.autoUpdate,B=te.needsUpdate,F=te.type;ae(),mt.autoReset=T,te.enabled=U,te.autoUpdate=z,te.needsUpdate=B,te.type=F}function ve(T){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const U=T.target;U.removeEventListener("dispose",Ue),ut(U)}function ut(T){rt(T),be.remove(T)}function rt(T){const U=be.get(T).programs;U!==void 0&&(U.forEach(function(z){W.releaseProgram(z)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,B,F,re){U===null&&(U=Wt);const he=F.isMesh&&F.matrixWorld.determinant()<0,_e=k1(T,U,z,B,F);ye.setMaterial(B,he);let xe=z.index,Pe=1;if(B.wireframe===!0){if(xe=$.getWireframeAttribute(z),xe===void 0)return;Pe=2}const Ne=z.drawRange,we=z.attributes.position;let Xe=Ne.start*Pe,st=(Ne.start+Ne.count)*Pe;re!==null&&(Xe=Math.max(Xe,re.start*Pe),st=Math.min(st,(re.start+re.count)*Pe)),xe!==null?(Xe=Math.max(Xe,0),st=Math.min(st,xe.count)):we!=null&&(Xe=Math.max(Xe,0),st=Math.min(st,we.count));const Et=st-Xe;if(Et<0||Et===1/0)return;L.setup(F,B,_e,z,xe);let Tt,at=Re;if(xe!==null&&(Tt=O.get(xe),at=pe,at.setIndex(Tt)),F.isMesh)B.wireframe===!0?(ye.setLineWidth(B.wireframeLinewidth*ht()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(F.isLine){let Ce=B.linewidth;Ce===void 0&&(Ce=1),ye.setLineWidth(Ce*ht()),F.isLineSegments?at.setMode(D.LINES):F.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else F.isPoints?at.setMode(D.POINTS):F.isSprite&&at.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))at.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ce=F._multiDrawStarts,xt=F._multiDrawCounts,Ze=F._multiDrawCount,Mn=xe?O.get(xe).bytesPerElement:1,fs=be.get(B).currentProgram.getUniforms();for(let En=0;En<Ze;En++)fs.setValue(D,"_gl_DrawID",En),at.render(Ce[En]/Mn,xt[En])}else if(F.isInstancedMesh)at.renderInstances(Xe,Et,F.count);else if(z.isInstancedBufferGeometry){const Ce=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,xt=Math.min(z.instanceCount,Ce);at.renderInstances(Xe,Et,xt)}else at.render(Xe,Et)};function ui(T,U,z){T.transparent===!0&&T.side===Li&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Qa(T,U,z),T.side=Tr,T.needsUpdate=!0,Qa(T,U,z),T.side=Li):Qa(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),v=Ae.get(z),v.init(U),A.push(v),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),T!==z&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(v.pushLight(F),F.castShadow&&v.pushShadow(F))}),v.setupLights();const B=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const _e=re[he];ui(_e,z,F),B.add(_e)}else ui(re,z,F),B.add(re)}),v=A.pop(),B},this.compileAsync=function(T,U,z=null){const B=this.compile(T,U,z);return new Promise(F=>{function re(){if(B.forEach(function(he){be.get(he).currentProgram.isReady()&&B.delete(he)}),B.size===0){F(T);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Xn=null;function O1(T){Xn&&Xn(T)}function Cm(){Pr.stop()}function Rm(){Pr.start()}const Pr=new $y;Pr.setAnimationLoop(O1),typeof self<"u"&&Pr.setContext(self),this.setAnimationLoop=function(T){Xn=T,le.setAnimationLoop(T),T===null?Pr.stop():Pr.start()},le.addEventListener("sessionstart",Cm),le.addEventListener("sessionend",Rm),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,U,M),v=Ae.get(T,A.length),v.init(U),A.push(v),Oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Oe,mi,U.reversedDepth),ge=this.localClippingEnabled,J=Se.init(this.clippingPlanes,ge),x=fe.get(T,E.length),x.init(),E.push(x),le.enabled===!0&&le.isPresenting===!0){const re=b.xr.getDepthSensingMesh();re!==null&&mu(re,U,-1/0,b.sortObjects)}mu(T,U,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ce,Ee),Ve=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ve&&se.addToRenderList(x,T),this.info.render.frame++,J===!0&&Se.beginShadows();const z=v.state.shadowsArray;te.render(z,T,U),J===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=x.opaque,F=x.transmissive;if(v.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let he=0,_e=re.length;he<_e;he++){const xe=re[he];Dm(B,F,T,xe)}Ve&&se.render(T);for(let he=0,_e=re.length;he<_e;he++){const xe=re[he];Pm(x,T,xe,xe.viewport)}}else F.length>0&&Dm(B,F,T,U),Ve&&se.render(T),Pm(x,T,U);M!==null&&w===0&&(Fe.updateMultisampleRenderTarget(M),Fe.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(b,T,U),L.resetDefaultState(),N=-1,k=null,A.pop(),A.length>0?(v=A[A.length-1],J===!0&&Se.setGlobalState(b.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?x=E[E.length-1]:x=null};function mu(T,U,z,B){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){B&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Oe);const he=ee.update(T),_e=T.material;_e.visible&&x.push(T,he,_e,z,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const he=ee.update(T),_e=T.material;if(B&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ge.copy(he.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(Oe)),Array.isArray(_e)){const xe=he.groups;for(let Pe=0,Ne=xe.length;Pe<Ne;Pe++){const we=xe[Pe],Xe=_e[we.materialIndex];Xe&&Xe.visible&&x.push(T,he,Xe,z,Ge.z,we)}}else _e.visible&&x.push(T,he,_e,z,Ge.z,null)}}const re=T.children;for(let he=0,_e=re.length;he<_e;he++)mu(re[he],U,z,B)}function Pm(T,U,z,B){const{opaque:F,transmissive:re,transparent:he}=T;v.setupLightsView(z),J===!0&&Se.setGlobalState(b.clippingPlanes,z),B&&ye.viewport(V.copy(B)),F.length>0&&Za(F,U,z),re.length>0&&Za(re,U,z),he.length>0&&Za(he,U,z),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Dm(T,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new ls(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?vo:ji,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const re=v.state.transmissionRenderTarget[B.id],he=B.viewport||V;re.setSize(he.z*b.transmissionResolutionScale,he.w*b.transmissionResolutionScale);const _e=b.getRenderTarget(),xe=b.getActiveCubeFace(),Pe=b.getActiveMipmapLevel();b.setRenderTarget(re),b.getClearColor(Z),Y=b.getClearAlpha(),Y<1&&b.setClearColor(16777215,.5),b.clear(),Ve&&se.render(z);const Ne=b.toneMapping;b.toneMapping=Sr;const we=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),J===!0&&Se.setGlobalState(b.clippingPlanes,B),Za(T,z,B),Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let st=0,Et=U.length;st<Et;st++){const Tt=U[st],{object:at,geometry:Ce,material:xt,group:Ze}=Tt;if(xt.side===Li&&at.layers.test(B.layers)){const Mn=xt.side;xt.side=_n,xt.needsUpdate=!0,Lm(at,z,B,Ce,xt,Ze),xt.side=Mn,xt.needsUpdate=!0,Xe=!0}}Xe===!0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re))}b.setRenderTarget(_e,xe,Pe),b.setClearColor(Z,Y),we!==void 0&&(B.viewport=we),b.toneMapping=Ne}function Za(T,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=T.length;F<re;F++){const he=T[F],{object:_e,geometry:xe,group:Pe}=he;let Ne=he.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),_e.layers.test(z.layers)&&Lm(_e,U,z,xe,Ne,Pe)}}function Lm(T,U,z,B,F,re){T.onBeforeRender(b,U,z,B,F,re),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(b,U,z,B,T,re),F.transparent===!0&&F.side===Li&&F.forceSinglePass===!1?(F.side=_n,F.needsUpdate=!0,b.renderBufferDirect(z,U,B,F,T,re),F.side=Tr,F.needsUpdate=!0,b.renderBufferDirect(z,U,B,F,T,re),F.side=Li):b.renderBufferDirect(z,U,B,F,T,re),T.onAfterRender(b,U,z,B,F,re)}function Qa(T,U,z){U.isScene!==!0&&(U=Wt);const B=be.get(T),F=v.state.lights,re=v.state.shadowsArray,he=F.state.version,_e=W.getParameters(T,F.state,re,U,z),xe=W.getProgramCacheKey(_e);let Pe=B.programs;B.environment=T.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(T.isMeshStandardMaterial?S:R).get(T.envMap||B.environment),B.envMapRotation=B.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Ue),Pe=new Map,B.programs=Pe);let Ne=Pe.get(xe);if(Ne!==void 0){if(B.currentProgram===Ne&&B.lightsStateVersion===he)return Im(T,_e),Ne}else _e.uniforms=W.getUniforms(T),T.onBeforeCompile(_e,b),Ne=W.acquireProgram(_e,xe),Pe.set(xe,Ne),B.uniforms=_e.uniforms;const we=B.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=Se.uniform),Im(T,_e),B.needsLights=B1(T),B.lightsStateVersion=he,B.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Ne,B.uniformsList=null,Ne}function Nm(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=sc.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Im(T,U){const z=be.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function k1(T,U,z,B,F){U.isScene!==!0&&(U=Wt),Fe.resetTextureUnits();const re=U.fog,he=B.isMeshStandardMaterial?U.environment:null,_e=M===null?b.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:uo,xe=(B.isMeshStandardMaterial?S:R).get(B.envMap||he),Pe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let Et=Sr;B.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Et=b.toneMapping);const Tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,at=Tt!==void 0?Tt.length:0,Ce=be.get(B),xt=v.state.lights;if(J===!0&&(ge===!0||T!==k)){const tn=T===k&&B.id===N;Se.setState(B,T,tn)}let Ze=!1;B.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xt.state.version||Ce.outputColorSpace!==_e||F.isBatchedMesh&&Ce.batching===!1||!F.isBatchedMesh&&Ce.batching===!0||F.isBatchedMesh&&Ce.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ce.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ce.instancing===!1||!F.isInstancedMesh&&Ce.instancing===!0||F.isSkinnedMesh&&Ce.skinning===!1||!F.isSkinnedMesh&&Ce.skinning===!0||F.isInstancedMesh&&Ce.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ce.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ce.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ce.instancingMorph===!1&&F.morphTexture!==null||Ce.envMap!==xe||B.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Se.numPlanes||Ce.numIntersection!==Se.numIntersection)||Ce.vertexAlphas!==Pe||Ce.vertexTangents!==Ne||Ce.morphTargets!==we||Ce.morphNormals!==Xe||Ce.morphColors!==st||Ce.toneMapping!==Et||Ce.morphTargetsCount!==at)&&(Ze=!0):(Ze=!0,Ce.__version=B.version);let Mn=Ce.currentProgram;Ze===!0&&(Mn=Qa(B,U,F));let fs=!1,En=!1,To=!1;const gt=Mn.getUniforms(),un=Ce.uniforms;if(ye.useProgram(Mn.program)&&(fs=!0,En=!0,To=!0),B.id!==N&&(N=B.id,En=!0),fs||k!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),gt.setValue(D,"projectionMatrix",T.projectionMatrix),gt.setValue(D,"viewMatrix",T.matrixWorldInverse);const fn=gt.map.cameraPosition;fn!==void 0&&fn.setValue(D,Te.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&gt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&gt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,En=!0,To=!0)}if(F.isSkinnedMesh){gt.setOptional(D,F,"bindMatrix"),gt.setOptional(D,F,"bindMatrixInverse");const tn=F.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),gt.setValue(D,"boneTexture",tn.boneTexture,Fe))}F.isBatchedMesh&&(gt.setOptional(D,F,"batchingTexture"),gt.setValue(D,"batchingTexture",F._matricesTexture,Fe),gt.setOptional(D,F,"batchingIdTexture"),gt.setValue(D,"batchingIdTexture",F._indirectTexture,Fe),gt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&gt.setValue(D,"batchingColorTexture",F._colorsTexture,Fe));const Nn=z.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&De.update(F,z,Mn),(En||Ce.receiveShadow!==F.receiveShadow)&&(Ce.receiveShadow=F.receiveShadow,gt.setValue(D,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(un.envMap.value=xe,un.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=wR()),En&&(gt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ce.needsLights&&z1(un,To),re&&B.fog===!0&&Me.refreshFogUniforms(un,re),Me.refreshMaterialUniforms(un,B,j,G,v.state.transmissionRenderTarget[T.id]),sc.upload(D,Nm(Ce),un,Fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(sc.upload(D,Nm(Ce),un,Fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&gt.setValue(D,"center",F.center),gt.setValue(D,"modelViewMatrix",F.modelViewMatrix),gt.setValue(D,"normalMatrix",F.normalMatrix),gt.setValue(D,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const tn=B.uniformsGroups;for(let fn=0,xu=tn.length;fn<xu;fn++){const Dr=tn[fn];de.update(Dr,Mn),de.bind(Dr,Mn)}}return Mn}function z1(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function B1(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,U,z){const B=be.get(T);B.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=U,be.get(T.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const z=be.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const V1=D.createFramebuffer();this.setRenderTarget=function(T,U=0,z=0){M=T,P=U,w=z;let B=!0,F=null,re=!1,he=!1;if(T){const xe=be.get(T);if(xe.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),B=!1;else if(xe.__webglFramebuffer===void 0)Fe.setupRenderTarget(T);else if(xe.__hasExternalTextures)Fe.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const we=T.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&be.has(we)&&(T.width!==we.image.width||T.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Ne=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?F=Ne[U][z]:F=Ne[U],re=!0):T.samples>0&&Fe.useMultisampledRTT(T)===!1?F=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[z]:F=Ne,V.copy(T.viewport),K.copy(T.scissor),q=T.scissorTest}else V.copy($e).multiplyScalar(j).floor(),K.copy(Ye).multiplyScalar(j).floor(),q=Je;if(z!==0&&(F=V1),ye.bindFramebuffer(D.FRAMEBUFFER,F)&&B&&ye.drawBuffers(T,F),ye.viewport(V),ye.scissor(K),ye.setScissorTest(q),re){const xe=be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,z)}else if(he){const xe=U;for(let Pe=0;Pe<T.textures.length;Pe++){const Ne=be.get(T.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,z,xe)}}else if(T!==null&&z!==0){const xe=be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xe.__webglTexture,z)}N=-1},this.readRenderTargetPixels=function(T,U,z,B,F,re,he,_e=0){if(!(T&&T.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){ye.bindFramebuffer(D.FRAMEBUFFER,xe);try{const Pe=T.textures[_e],Ne=Pe.format,we=Pe.type;if(!lt.textureFormatReadable(Ne)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(we)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-B&&z>=0&&z<=T.height-F&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(U,z,B,F,Ie.convert(Ne),Ie.convert(we),re))}finally{const Pe=M!==null?be.get(M).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,B,F,re,he,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe)if(U>=0&&U<=T.width-B&&z>=0&&z<=T.height-F){ye.bindFramebuffer(D.FRAMEBUFFER,xe);const Pe=T.textures[_e],Ne=Pe.format,we=Pe.type;if(!lt.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(U,z,B,F,Ie.convert(Ne),Ie.convert(we),0);const st=M!==null?be.get(M).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,st);const Et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sw(D,Et,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Xe),D.deleteSync(Et),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,z=0){const B=Math.pow(2,-z),F=Math.floor(T.image.width*B),re=Math.floor(T.image.height*B),he=U!==null?U.x:0,_e=U!==null?U.y:0;Fe.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,he,_e,F,re),ye.unbindTexture()};const H1=D.createFramebuffer(),G1=D.createFramebuffer();this.copyTextureToTexture=function(T,U,z=null,B=null,F=0,re=null){re===null&&(F!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let he,_e,xe,Pe,Ne,we,Xe,st,Et;const Tt=T.isCompressedTexture?T.mipmaps[re]:T.image;if(z!==null)he=z.max.x-z.min.x,_e=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ne=z.min.y,we=z.isBox3?z.min.z:0;else{const Nn=Math.pow(2,-F);he=Math.floor(Tt.width*Nn),_e=Math.floor(Tt.height*Nn),T.isDataArrayTexture?xe=Tt.depth:T.isData3DTexture?xe=Math.floor(Tt.depth*Nn):xe=1,Pe=0,Ne=0,we=0}B!==null?(Xe=B.x,st=B.y,Et=B.z):(Xe=0,st=0,Et=0);const at=Ie.convert(U.format),Ce=Ie.convert(U.type);let xt;U.isData3DTexture?(Fe.setTexture3D(U,0),xt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Fe.setTexture2DArray(U,0),xt=D.TEXTURE_2D_ARRAY):(Fe.setTexture2D(U,0),xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fs=D.getParameter(D.UNPACK_SKIP_PIXELS),En=D.getParameter(D.UNPACK_SKIP_ROWS),To=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we);const gt=T.isDataArrayTexture||T.isData3DTexture,un=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Nn=be.get(T),tn=be.get(U),fn=be.get(Nn.__renderTarget),xu=be.get(tn.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,xu.__webglFramebuffer);for(let Dr=0;Dr<xe;Dr++)gt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(T).__webglTexture,F,we+Dr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(U).__webglTexture,re,Et+Dr)),D.blitFramebuffer(Pe,Ne,he,_e,Xe,st,he,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(F!==0||T.isRenderTargetTexture||be.has(T)){const Nn=be.get(T),tn=be.get(U);ye.bindFramebuffer(D.READ_FRAMEBUFFER,H1),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,G1);for(let fn=0;fn<xe;fn++)gt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nn.__webglTexture,F,we+fn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Nn.__webglTexture,F),un?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,tn.__webglTexture,re,Et+fn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,tn.__webglTexture,re),F!==0?D.blitFramebuffer(Pe,Ne,he,_e,Xe,st,he,_e,D.COLOR_BUFFER_BIT,D.NEAREST):un?D.copyTexSubImage3D(xt,re,Xe,st,Et+fn,Pe,Ne,he,_e):D.copyTexSubImage2D(xt,re,Xe,st,Pe,Ne,he,_e);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(xt,re,Xe,st,Et,he,_e,xe,at,Ce,Tt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(xt,re,Xe,st,Et,he,_e,xe,at,Tt.data):D.texSubImage3D(xt,re,Xe,st,Et,he,_e,xe,at,Ce,Tt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,Xe,st,he,_e,at,Ce,Tt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,Xe,st,Tt.width,Tt.height,at,Tt.data):D.texSubImage2D(D.TEXTURE_2D,re,Xe,st,he,_e,at,Ce,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fs),D.pixelStorei(D.UNPACK_SKIP_ROWS,En),D.pixelStorei(D.UNPACK_SKIP_IMAGES,To),re===0&&U.generateMipmaps&&D.generateMipmap(xt),ye.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&Fe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Fe.setTextureCube(T,0):T.isData3DTexture?Fe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Fe.setTexture2DArray(T,0):Fe.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){P=0,w=0,M=null,ye.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const AR=(t,e=0)=>typeof t!="number"||isNaN(t)||!isFinite(t)?e:t,CR=({scrollProgress:t})=>{const e=oe.useRef(null),n=oe.useRef(null),i=oe.useRef(0),r=oe.useRef({x:0,y:0});return oe.useEffect(()=>{n.current&&(n.current.uScroll.value=AR(t))},[t]),oe.useEffect(()=>{if(!e.current)return;const s=window.innerWidth,o=window.innerHeight,a=new Dw,l=new Yy(-1,1,1,-1,0,1),c=new bR({alpha:!0,antialias:!0});c.setSize(s,o),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.current.appendChild(c.domElement);const u=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,f=`
      uniform float uTime;
      uniform float uScroll;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      varying vec2 vUv;

      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      // FBM (Fractal Brownian Motion) for more detail
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 3; i++) {
          value += amplitude * snoise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 uv = vUv;
        uv.x *= uResolution.x / uResolution.y; // Correct aspect ratio

        float t = uTime * 0.15;
        
        // Interactive mouse influence
        vec2 mouseEffect = (uMouse - 0.5) * 0.2;
        
        // Coordinates for aurora layers
        vec2 st = uv;
        st.x += st.y * 0.1; // Slight tilt
        
        // Layer 1: Large, slow moving waves (Green/Base)
        float n1 = fbm(vec2(st.x * 1.5 + t * 0.5 + mouseEffect.x, st.y * 0.5 - t * 0.2));
        
        // Layer 2: Detailed, faster streaks (Purple/Detail)
        float n2 = fbm(vec2(st.x * 3.0 - t * 0.8 - mouseEffect.x, st.y * 2.0 + t * 0.3));
        
        // Combine noises to create "curtain" effect
        float auroraShape = n1 * 0.6 + n2 * 0.4;
        
        // Sharpen the shape to define rays
        float rays = smoothstep(0.2, 0.8, auroraShape);
        
        // Vertical fade for bottom and top
        float fade = smoothstep(0.0, 0.3, uv.y) * smoothstep(1.0, 0.6, uv.y);
        
        // Intensity modulation by scroll
        float scrollMod = 1.0 + uScroll * 0.5;
        
        float finalAlpha = rays * fade * 0.7 * scrollMod;

        // Color Palette (Deep Space -> Emerald -> Magenta/Purple)
        vec3 colorBg = vec3(0.0, 0.02, 0.05); // Deep Space Blue/Black
        vec3 color1 = vec3(0.0, 0.8, 0.6);    // Emerald Green
        vec3 color2 = vec3(0.6, 0.0, 0.8);    // Deep Purple
        vec3 color3 = vec3(1.0, 0.2, 0.6);    // Magenta (High intensity)

        // Mixing colors based on noise value and vertical position
        vec3 auroraColor = mix(color1, color2, uv.y * 1.2 + n1 * 0.5);
        auroraColor = mix(auroraColor, color3, smoothstep(0.6, 1.0, n2));
        
        // Scroll effect shifts hue slightly towards red/warm
        auroraColor = mix(auroraColor, vec3(1.0, 0.3, 0.3), uScroll * 0.3);

        // Add "stars" or noise grain for texture
        float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
        auroraColor += grain * 0.03;

        // Composition
        vec3 finalColor = mix(colorBg, auroraColor, finalAlpha);
        
        // Glow boost
        finalColor += auroraColor * finalAlpha * 0.3;

        gl_FragColor = vec4(finalColor, 1.0); // Background is opaque to cover previous elements
      }
    `,d={uTime:{value:0},uScroll:{value:0},uResolution:{value:new et(s,o)},uMouse:{value:new et(.5,.5)}};n.current=d;const p=new Xa(2,2),g=new yi({vertexShader:u,fragmentShader:f,uniforms:d,transparent:!1,depthWrite:!1}),_=new qi(p,g);a.add(_);const m=new Mi,h=600,x=new Float32Array(h*3),v=new Float32Array(h);for(let w=0;w<h;w++)x[w*3]=(Math.random()-.5)*4,x[w*3+1]=(Math.random()-.5)*4,x[w*3+2]=.1,v[w]=Math.random();m.setAttribute("position",new Gn(x,3)),m.setAttribute("size",new Gn(v,1));const E=new jy({size:.008,color:16777215,transparent:!0,opacity:.8,sizeAttenuation:!0}),A=new Fw(m,E);a.add(A);const b=()=>{i.current=requestAnimationFrame(b),d.uMouse.value.x+=(r.current.x-d.uMouse.value.x)*.05,d.uMouse.value.y+=(r.current.y-d.uMouse.value.y)*.05,d.uTime.value+=.01,A.rotation.z+=2e-4,c.render(a,l)};b();const C=()=>{const w=window.innerWidth,M=window.innerHeight;c.setSize(w,M),d.uResolution.value.set(w,M)},P=w=>{r.current.x=w.clientX/window.innerWidth,r.current.y=1-w.clientY/window.innerHeight};return window.addEventListener("resize",C),window.addEventListener("mousemove",P),()=>{window.removeEventListener("resize",C),window.removeEventListener("mousemove",P),cancelAnimationFrame(i.current),e.current&&c.domElement&&e.current.removeChild(c.domElement),p.dispose(),g.dispose(),m.dispose(),E.dispose(),c.dispose()}},[]),y.jsx("div",{ref:e,className:"fixed inset-0 z-0 bg-black pointer-events-none"})},eS=oe.createContext({});function fu(t){const e=oe.useRef(null);return e.current===null&&(e.current=t()),e.current}const Xp=typeof window<"u",qp=Xp?oe.useLayoutEffect:oe.useEffect,Yp=oe.createContext(null);function $p(t,e){t.indexOf(e)===-1&&t.push(e)}function Kp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Si=(t,e,n)=>n>e?e:n<t?t:n;let Ra=()=>{};const Yi={},tS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function nS(t){return typeof t=="object"&&t!==null}const iS=t=>/^0[^.\s]+$/u.test(t);function Zp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Sn=t=>t,RR=(t,e)=>n=>e(t(n)),qa=(...t)=>t.reduce(RR),ho=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Qp{constructor(){this.subscriptions=[]}add(e){return $p(this.subscriptions,e),()=>Kp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const vi=t=>t*1e3,Vn=t=>t/1e3;function Jp(t,e){return e?t*(1e3/e):0}const rS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,PR=1e-7,DR=12;function LR(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=rS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>PR&&++a<DR);return o}function Ya(t,e,n,i){if(t===e&&n===i)return Sn;const r=s=>LR(s,0,1,t,n);return s=>s===0||s===1?s:rS(r(s),e,i)}const sS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,oS=t=>e=>1-t(1-e),aS=Ya(.33,1.53,.69,.99),em=oS(aS),lS=sS(em),cS=t=>(t*=2)<1?.5*em(t):.5*(2-Math.pow(2,-10*(t-1))),tm=t=>1-Math.sin(Math.acos(t)),uS=oS(tm),fS=sS(tm),NR=Ya(.42,0,1,1),IR=Ya(0,0,.58,1),dS=Ya(.42,0,.58,1),UR=t=>Array.isArray(t)&&typeof t[0]!="number",hS=t=>Array.isArray(t)&&typeof t[0]=="number",FR={linear:Sn,easeIn:NR,easeInOut:dS,easeOut:IR,circIn:tm,circInOut:fS,circOut:uS,backIn:em,backInOut:lS,backOut:aS,anticipate:cS},OR=t=>typeof t=="string",Hx=t=>{if(hS(t)){Ra(t.length===4);const[e,n,i,r]=t;return Ya(e,n,i,r)}else if(OR(t))return FR[t];return t},zl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function kR(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),t()),u(a)}const c={schedule:(u,f=!1,d=!1)=>{const g=d&&r?n:i;return f&&o.add(u),g.has(u)||g.add(u),u},cancel:u=>{i.delete(u),o.delete(u)},process:u=>{if(a=u,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(u))}};return c}const zR=40;function pS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=zl.reduce((v,E)=>(v[E]=kR(s),v),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:d,render:p,postRender:g}=o,_=()=>{const v=Yi.useManualTiming?r.timestamp:performance.now();n=!1,Yi.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(v-r.timestamp,zR),1)),r.timestamp=v,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),f.process(r),d.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(_))},m=()=>{n=!0,i=!0,r.isProcessing||t(_)};return{schedule:zl.reduce((v,E)=>{const A=o[E];return v[E]=(b,C=!1,P=!1)=>(n||m(),A.schedule(b,C,P)),v},{}),cancel:v=>{for(let E=0;E<zl.length;E++)o[zl[E]].cancel(v)},state:r,steps:o}}const{schedule:nt,cancel:ci,state:Vt,steps:yf}=pS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Sn,!0);let oc;function BR(){oc=void 0}const mn={now:()=>(oc===void 0&&mn.set(Vt.isProcessing||Yi.useManualTiming?Vt.timestamp:performance.now()),oc),set:t=>{oc=t,queueMicrotask(BR)}},mS=t=>e=>typeof e=="string"&&e.startsWith(t),nm=mS("--"),VR=mS("var(--"),im=t=>VR(t)?HR.test(t.split("/*")[0].trim()):!1,HR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,So={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Pa={...So,transform:t=>Si(0,1,t)},Bl={...So,default:1},na=t=>Math.round(t*1e5)/1e5,rm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function GR(t){return t==null}const WR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sm=(t,e)=>n=>!!(typeof n=="string"&&WR.test(n)&&n.startsWith(t)||e&&!GR(n)&&Object.prototype.hasOwnProperty.call(n,e)),xS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(rm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},jR=t=>Si(0,255,t),Sf={...So,transform:t=>Math.round(jR(t))},$r={test:sm("rgb","red"),parse:xS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Sf.transform(t)+", "+Sf.transform(e)+", "+Sf.transform(n)+", "+na(Pa.transform(i))+")"};function XR(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const yh={test:sm("#"),parse:XR,transform:$r.transform},$a=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ir=$a("deg"),_i=$a("%"),Le=$a("px"),qR=$a("vh"),YR=$a("vw"),Gx={..._i,parse:t=>_i.parse(t)/100,transform:t=>_i.transform(t*100)},zs={test:sm("hsl","hue"),parse:xS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+_i.transform(na(e))+", "+_i.transform(na(n))+", "+na(Pa.transform(i))+")"},Dt={test:t=>$r.test(t)||yh.test(t)||zs.test(t),parse:t=>$r.test(t)?$r.parse(t):zs.test(t)?zs.parse(t):yh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?$r.transform(t):zs.transform(t),getAnimatableNone:t=>{const e=Dt.parse(t);return e.alpha=0,Dt.transform(e)}},$R=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KR(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(rm))==null?void 0:e.length)||0)+(((n=t.match($R))==null?void 0:n.length)||0)>0}const gS="number",vS="color",ZR="var",QR="var(",Wx="${}",JR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Da(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(JR,l=>(Dt.test(l)?(i.color.push(s),r.push(vS),n.push(Dt.parse(l))):l.startsWith(QR)?(i.var.push(s),r.push(ZR),n.push(l)):(i.number.push(s),r.push(gS),n.push(parseFloat(l))),++s,Wx)).split(Wx);return{values:n,split:a,indexes:i,types:r}}function _S(t){return Da(t).values}function yS(t){const{split:e,types:n}=Da(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===gS?s+=na(r[o]):a===vS?s+=Dt.transform(r[o]):s+=r[o]}return s}}const eP=t=>typeof t=="number"?0:Dt.test(t)?Dt.getAnimatableNone(t):t;function tP(t){const e=_S(t);return yS(t)(e.map(eP))}const wr={test:KR,parse:_S,createTransformer:yS,getAnimatableNone:tP};function Mf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function nP({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Mf(l,a,t+1/3),s=Mf(l,a,t),o=Mf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function zc(t,e){return n=>n>0?e:t}const _t=(t,e,n)=>t+(e-t)*n,Ef=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},iP=[yh,$r,zs],rP=t=>iP.find(e=>e.test(t));function jx(t){const e=rP(t);if(!e)return!1;let n=e.parse(t);return e===zs&&(n=nP(n)),n}const Xx=(t,e)=>{const n=jx(t),i=jx(e);if(!n||!i)return zc(t,e);const r={...n};return s=>(r.red=Ef(n.red,i.red,s),r.green=Ef(n.green,i.green,s),r.blue=Ef(n.blue,i.blue,s),r.alpha=_t(n.alpha,i.alpha,s),$r.transform(r))},Sh=new Set(["none","hidden"]);function sP(t,e){return Sh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function oP(t,e){return n=>_t(t,e,n)}function om(t){return typeof t=="number"?oP:typeof t=="string"?im(t)?zc:Dt.test(t)?Xx:cP:Array.isArray(t)?SS:typeof t=="object"?Dt.test(t)?Xx:aP:zc}function SS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>om(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function aP(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=om(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function lP(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const cP=(t,e)=>{const n=wr.createTransformer(e),i=Da(t),r=Da(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Sh.has(t)&&!r.values.length||Sh.has(e)&&!i.values.length?sP(t,e):qa(SS(lP(i,r),r.values),n):zc(t,e)};function MS(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?_t(t,e,n):om(t)(t,e)}const uP=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>nt.update(e,n),stop:()=>ci(e),now:()=>Vt.isProcessing?Vt.timestamp:mn.now()}},ES=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Bc=2e4;function am(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<Bc;)e+=n,i=t.next(e);return e>=Bc?1/0:e}function fP(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(am(i),Bc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Vn(r)}}const dP=5;function TS(t,e,n){const i=Math.max(e-dP,0);return Jp(n-t(i),e-i)}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Tf=.001;function hP({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:i=wt.mass}){let r,s,o=1-e;o=Si(wt.minDamping,wt.maxDamping,o),t=Si(wt.minDuration,wt.maxDuration,Vn(t)),o<1?(r=c=>{const u=c*o,f=u*t,d=u-n,p=Mh(c,o),g=Math.exp(-f);return Tf-d/p*g},s=c=>{const f=c*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),_=Mh(Math.pow(c,2),o);return(-r(c)+Tf>0?-1:1)*((d-p)*g)/_}):(r=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-Tf+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=mP(r,s,a);if(t=vi(t),isNaN(l))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const pP=12;function mP(t,e,n){let i=n;for(let r=1;r<pP;r++)i=i-t(i)/e(i);return i}function Mh(t,e){return t*Math.sqrt(1-e*e)}const xP=["duration","bounce"],gP=["stiffness","damping","mass"];function qx(t,e){return e.some(n=>t[n]!==void 0)}function vP(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!qx(t,gP)&&qx(t,xP))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Si(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:wt.mass,stiffness:r,damping:s}}else{const n=hP(t);e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function Vc(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:d,isResolvedFromDuration:p}=vP({...n,velocity:-Vn(n.velocity||0)}),g=d||0,_=c/(2*Math.sqrt(l*u)),m=o-s,h=Vn(Math.sqrt(l/u)),x=Math.abs(m)<5;i||(i=x?wt.restSpeed.granular:wt.restSpeed.default),r||(r=x?wt.restDelta.granular:wt.restDelta.default);let v;if(_<1){const A=Mh(h,_);v=b=>{const C=Math.exp(-_*h*b);return o-C*((g+_*h*m)/A*Math.sin(A*b)+m*Math.cos(A*b))}}else if(_===1)v=A=>o-Math.exp(-h*A)*(m+(g+h*m)*A);else{const A=h*Math.sqrt(_*_-1);v=b=>{const C=Math.exp(-_*h*b),P=Math.min(A*b,300);return o-C*((g+_*h*m)*Math.sinh(P)+A*m*Math.cosh(P))/A}}const E={calculatedDuration:p&&f||null,next:A=>{const b=v(A);if(p)a.done=A>=f;else{let C=A===0?g:0;_<1&&(C=A===0?vi(g):TS(v,A,b));const P=Math.abs(C)<=i,w=Math.abs(o-b)<=r;a.done=P&&w}return a.value=a.done?o:b,a},toString:()=>{const A=Math.min(am(E),Bc),b=ES(C=>E.next(A*C).value,A,30);return A+"ms "+b},toTransition:()=>{}};return E}Vc.applyToOptions=t=>{const e=fP(t,100,Vc);return t.ease=e.ease,t.duration=vi(e.duration),t.type="keyframes",t};function Eh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,g=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let _=n*e;const m=f+_,h=o===void 0?m:o(m);h!==m&&(_=h-f);const x=P=>-_*Math.exp(-P/i),v=P=>h+x(P),E=P=>{const w=x(P),M=v(P);d.done=Math.abs(w)<=c,d.value=d.done?h:M};let A,b;const C=P=>{p(d.value)&&(A=P,b=Vc({keyframes:[d.value,g(d.value)],velocity:TS(v,P,d.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return C(0),{calculatedDuration:null,next:P=>{let w=!1;return!b&&A===void 0&&(w=!0,E(P),C(P)),A!==void 0&&P>=A?b.next(P-A):(!w&&E(P),d)}}}function _P(t,e,n){const i=[],r=n||Yi.mix||MS,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Sn:e;a=qa(l,a)}i.push(a)}return i}function lm(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Ra(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=_P(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const d=ho(t[f],t[f+1],u);return a[f](d)};return n?u=>c(Si(t[0],t[s-1],u)):c}function yP(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=ho(0,e,i);t.push(_t(n,1,r))}}function wS(t){const e=[0];return yP(e,t.length-1),e}function SP(t,e){return t.map(n=>n*e)}function MP(t,e){return t.map(()=>e||dS).splice(0,t.length-1)}function ia({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=UR(i)?i.map(Hx):Hx(i),s={done:!1,value:e[0]},o=SP(n&&n.length===e.length?n:wS(e),t),a=lm(o,e,{ease:Array.isArray(r)?r:MP(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const EP=t=>t!==null;function cm(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(EP),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const TP={decay:Eh,inertia:Eh,tween:ia,keyframes:ia,spring:Vc};function bS(t){typeof t.type=="string"&&(t.type=TP[t.type])}class um{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const wP=t=>t/100;class fm extends um{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==mn.now()&&this.tick(mn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;bS(e);const{type:n=ia,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||ia;l!==ia&&typeof a[0]!="number"&&(this.mixKeyframes=qa(wP,MS(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=am(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:d,repeatDelay:p,type:g,onUpdate:_,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const h=this.currentTime-c*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?h<0:h>r;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,E=i;if(f){const P=Math.min(this.currentTime,r)/a;let w=Math.floor(P),M=P%1;!M&&P>=1&&(M=1),M===1&&w--,w=Math.min(w,f+1),!!(w%2)&&(d==="reverse"?(M=1-M,p&&(M-=p/a)):d==="mirror"&&(E=o)),v=Si(0,1,M)*a}const A=x?{done:!1,value:u[0]}:E.next(v);s&&(A.value=s(A.value));let{done:b}=A;!x&&l!==null&&(b=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return C&&g!==Eh&&(A.value=cm(u,this.options,m,this.speed)),_&&_(A.value),C&&this.finish(),A}then(e,n){return this.finished.then(e,n)}get duration(){return Vn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(this.currentTime)}set time(e){var n;e=vi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(mn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Vn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=uP,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(mn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function bP(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Kr=t=>t*180/Math.PI,Th=t=>{const e=Kr(Math.atan2(t[1],t[0]));return wh(e)},AP={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Th,rotateZ:Th,skewX:t=>Kr(Math.atan(t[1])),skewY:t=>Kr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},wh=t=>(t=t%360,t<0&&(t+=360),t),Yx=Th,$x=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Kx=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),CP={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:$x,scaleY:Kx,scale:t=>($x(t)+Kx(t))/2,rotateX:t=>wh(Kr(Math.atan2(t[6],t[5]))),rotateY:t=>wh(Kr(Math.atan2(-t[2],t[0]))),rotateZ:Yx,rotate:Yx,skewX:t=>Kr(Math.atan(t[4])),skewY:t=>Kr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function bh(t){return t.includes("scale")?1:0}function Ah(t,e){if(!t||t==="none")return bh(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=CP,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=AP,r=a}if(!r)return bh(e);const s=i[e],o=r[1].split(",").map(PP);return typeof s=="function"?s(o):o[s]}const RP=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Ah(n,e)};function PP(t){return parseFloat(t.trim())}const Mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=new Set(Mo),Zx=t=>t===So||t===Le,DP=new Set(["x","y","z"]),LP=Mo.filter(t=>!DP.has(t));function NP(t){const e=[];return LP.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const es={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ah(e,"x"),y:(t,{transform:e})=>Ah(e,"y")};es.translateX=es.x;es.translateY=es.y;const ts=new Set;let Ch=!1,Rh=!1,Ph=!1;function AS(){if(Rh){const t=Array.from(ts).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=NP(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Rh=!1,Ch=!1,ts.forEach(t=>t.complete(Ph)),ts.clear()}function CS(){ts.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Rh=!0)})}function IP(){Ph=!0,CS(),AS(),Ph=!1}class dm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(ts.add(this),Ch||(Ch=!0,nt.read(CS),nt.resolveKeyframes(AS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}bP(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ts.delete(this)}cancel(){this.state==="scheduled"&&(ts.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const UP=t=>t.startsWith("--");function FP(t,e,n){UP(e)?t.style.setProperty(e,n):t.style[e]=n}const RS=Zp(()=>window.ScrollTimeline!==void 0),OP={};function kP(t,e){const n=Zp(t);return()=>OP[e]??n()}const PS=kP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Qx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xo([0,.65,.55,1]),circOut:Xo([.55,0,1,.45]),backIn:Xo([.31,.01,.66,-.59]),backOut:Xo([.33,1.53,.69,.99])};function DS(t,e){if(t)return typeof t=="function"?PS()?ES(t,e):"ease-out":hS(t)?Xo(t):Array.isArray(t)?t.map(n=>DS(n,e)||Qx.easeOut):Qx[t]}function zP(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const f=DS(a,r);Array.isArray(f)&&(u.easing=f);const d={delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(d.pseudoElement=c),t.animate(u,d)}function LS(t){return typeof t=="function"&&"applyToOptions"in t}function BP({type:t,...e}){return LS(t)&&PS()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class VP extends um{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Ra(typeof e.type!="string");const c=BP(e);this.animation=zP(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=cm(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):FP(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,n;this.isPseudoElement||(n=(e=this.animation).commitStyles)==null||n.call(e)}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Vn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Vn(e)}get time(){return Vn(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=vi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&RS()?(this.animation.timeline=e,Sn):n(this)}}const NS={anticipate:cS,backInOut:lS,circInOut:fS};function HP(t){return t in NS}function GP(t){typeof t.ease=="string"&&HP(t.ease)&&(t.ease=NS[t.ease])}const Jx=10;class WP extends VP{constructor(e){GP(e),bS(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new fm({...o,autoplay:!1}),l=vi(this.finishedTime??this.time);n.setWithVelocity(a.sample(l-Jx).value,a.sample(l).value,Jx),a.stop()}}const eg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(wr.test(t)||t==="0")&&!t.startsWith("url("));function jP(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function XP(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=eg(r,e),a=eg(s,e);return!o||!a?!1:jP(t)||(n==="spring"||LS(n))&&i}function Dh(t){t.duration=0,t.type="keyframes"}const qP=new Set(["opacity","clipPath","filter","transform"]),YP=Zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $P(t){var u;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((u=e==null?void 0:e.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return YP()&&n&&qP.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const KP=40;class ZP extends um{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:u,...f}){var g;super(),this.stop=()=>{var _,m;this._animation&&(this._animation.stop(),(_=this.stopTimeline)==null||_.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=mn.now();const d={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:u,...f},p=(u==null?void 0:u.KeyframeResolver)||dm;this.keyframeResolver=new p(a,(_,m,h)=>this.onKeyframesResolved(_,m,d,!h),l,c,u),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,n,i,r){this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=mn.now(),XP(e,s,o,a)||((Yi.instantAnimations||!l)&&(u==null||u(cm(e,i,n))),e[0]=e[e.length-1],Dh(i),i.repeat=0);const d={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>KP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&$P(d)?new WP({...d,element:d.motionValue.owner.current}):new fm(d);p.finished.then(()=>this.notifyFinished()).catch(Sn),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),IP()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const QP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function JP(t){const e=QP.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function IS(t,e,n=1){const[i,r]=JP(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return tS(o)?parseFloat(o):o}return im(r)?IS(r,e,n+1):r}function hm(t,e){return(t==null?void 0:t[e])??(t==null?void 0:t.default)??t}const US=new Set(["width","height","top","left","right","bottom",...Mo]),eD={test:t=>t==="auto",parse:t=>t},FS=t=>e=>e.test(t),OS=[So,Le,_i,ir,YR,qR,eD],tg=t=>OS.find(FS(t));function tD(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||iS(t):!0}const nD=new Set(["brightness","contrast","saturate","opacity"]);function iD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(rm)||[];if(!i)return t;const r=n.replace(i,"");let s=nD.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const rD=/\b([a-z-]*)\(.*?\)/gu,Lh={...wr,getAnimatableNone:t=>{const e=t.match(rD);return e?e.map(iD).join(" "):t}},ng={...So,transform:Math.round},sD={rotate:ir,rotateX:ir,rotateY:ir,rotateZ:ir,scale:Bl,scaleX:Bl,scaleY:Bl,scaleZ:Bl,skew:ir,skewX:ir,skewY:ir,distance:Le,translateX:Le,translateY:Le,translateZ:Le,x:Le,y:Le,z:Le,perspective:Le,transformPerspective:Le,opacity:Pa,originX:Gx,originY:Gx,originZ:Le},pm={borderWidth:Le,borderTopWidth:Le,borderRightWidth:Le,borderBottomWidth:Le,borderLeftWidth:Le,borderRadius:Le,radius:Le,borderTopLeftRadius:Le,borderTopRightRadius:Le,borderBottomRightRadius:Le,borderBottomLeftRadius:Le,width:Le,maxWidth:Le,height:Le,maxHeight:Le,top:Le,right:Le,bottom:Le,left:Le,padding:Le,paddingTop:Le,paddingRight:Le,paddingBottom:Le,paddingLeft:Le,margin:Le,marginTop:Le,marginRight:Le,marginBottom:Le,marginLeft:Le,backgroundPositionX:Le,backgroundPositionY:Le,...sD,zIndex:ng,fillOpacity:Pa,strokeOpacity:Pa,numOctaves:ng},oD={...pm,color:Dt,backgroundColor:Dt,outlineColor:Dt,fill:Dt,stroke:Dt,borderColor:Dt,borderTopColor:Dt,borderRightColor:Dt,borderBottomColor:Dt,borderLeftColor:Dt,filter:Lh,WebkitFilter:Lh},kS=t=>oD[t];function zS(t,e){let n=kS(t);return n!==Lh&&(n=wr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const aD=new Set(["auto","none","0"]);function lD(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!aD.has(s)&&Da(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=zS(n,r)}class cD extends dm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),im(c))){const u=IS(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!US.has(i)||e.length!==2)return;const[r,s]=e,o=tg(r),a=tg(s);if(o!==a)if(Zx(o)&&Zx(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else es[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||tD(e[r]))&&i.push(r);i.length&&lD(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=es[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=es[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function BS(t,e,n){if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const VS=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function HS(t){return nS(t)&&"offsetHeight"in t}const ig=30,uD=t=>!isNaN(parseFloat(t)),ra={current:void 0};class fD{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=mn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=mn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=uD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Qp);const i=this.events[e].add(n);return e==="change"?()=>{i(),nt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ra.current&&ra.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=mn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ig)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ig);return Jp(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function si(t,e){return new fD(t,e)}const{schedule:mm}=pS(queueMicrotask,!1),Qn={x:!1,y:!1};function GS(){return Qn.x||Qn.y}function dD(t){return t==="x"||t==="y"?Qn[t]?null:(Qn[t]=!0,()=>{Qn[t]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}function WS(t,e){const n=BS(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function rg(t){return!(t.pointerType==="touch"||GS())}function hD(t,e,n={}){const[i,r,s]=WS(t,n),o=a=>{if(!rg(a))return;const{target:l}=a,c=e(l,a);if(typeof c!="function"||!l)return;const u=f=>{rg(f)&&(c(f),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,r)};return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const jS=(t,e)=>e?t===e?!0:jS(t,e.parentElement):!1,xm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,pD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function mD(t){return pD.has(t.tagName)||t.tabIndex!==-1}const ac=new WeakSet;function sg(t){return e=>{e.key==="Enter"&&t(e)}}function wf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const xD=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=sg(()=>{if(ac.has(n))return;wf(n,"down");const r=sg(()=>{wf(n,"up")}),s=()=>wf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function og(t){return xm(t)&&!GS()}function gD(t,e,n={}){const[i,r,s]=WS(t,n),o=a=>{const l=a.currentTarget;if(!og(a))return;ac.add(l);const c=e(l,a),u=(p,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",d),ac.has(l)&&ac.delete(l),og(p)&&typeof c=="function"&&c(p,{success:g})},f=p=>{u(p,l===window||l===document||n.useGlobalTarget||jS(l,p.target))},d=p=>{u(p,!1)};window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",d,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),HS(a)&&(a.addEventListener("focus",c=>xD(c,r)),!mD(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function gm(t){return nS(t)&&"ownerSVGElement"in t}const lc=new WeakMap;let rr;const XS=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:gm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],vD=XS("inline","width","offsetWidth"),_D=XS("block","height","offsetHeight");function yD({target:t,borderBoxSize:e}){var n;(n=lc.get(t))==null||n.forEach(i=>{i(t,{get width(){return vD(t,e)},get height(){return _D(t,e)}})})}function SD(t){t.forEach(yD)}function MD(){typeof ResizeObserver>"u"||(rr=new ResizeObserver(SD))}function ED(t,e){rr||MD();const n=BS(t);return n.forEach(i=>{let r=lc.get(i);r||(r=new Set,lc.set(i,r)),r.add(e),rr==null||rr.observe(i)}),()=>{n.forEach(i=>{const r=lc.get(i);r==null||r.delete(e),r!=null&&r.size||rr==null||rr.unobserve(i)})}}const cc=new Set;let Bs;function TD(){Bs=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};cc.forEach(e=>e(t))},window.addEventListener("resize",Bs)}function wD(t){return cc.add(t),Bs||TD(),()=>{cc.delete(t),!cc.size&&typeof Bs=="function"&&(window.removeEventListener("resize",Bs),Bs=void 0)}}function bD(t,e){return typeof t=="function"?wD(t):ED(t,e)}function qS(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return nt.preUpdate(i,!0),()=>ci(i)}function AD(t){return gm(t)&&t.tagName==="svg"}function CD(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=lm(r,s,o);return e?a(i):a}const Jt=t=>!!(t&&t.getVelocity),RD=[...OS,Dt,wr],PD=t=>RD.find(FS(t)),vm=oe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function DD(t=!0){const e=oe.useContext(Yp);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=oe.useId();oe.useEffect(()=>{if(t)return r(s)},[t]);const o=oe.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const YS=oe.createContext({strict:!1}),ag={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},po={};for(const t in ag)po[t]={isEnabled:e=>ag[t].some(n=>!!e[n])};function LD(t){for(const e in t)po[e]={...po[e],...t[e]}}const ND=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||ND.has(t)}let $S=t=>!Hc(t);function ID(t){typeof t=="function"&&($S=e=>e.startsWith("on")?!Hc(e):t(e))}try{ID(require("@emotion/is-prop-valid").default)}catch{}function UD(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||($S(r)||n===!0&&Hc(r)||!e&&!Hc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const du=oe.createContext({});function hu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function La(t){return typeof t=="string"||Array.isArray(t)}const _m=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ym=["initial",..._m];function pu(t){return hu(t.animate)||ym.some(e=>La(t[e]))}function KS(t){return!!(pu(t)||t.variants)}function FD(t,e){if(pu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||La(n)?n:void 0,animate:La(i)?i:void 0}}return t.inherit!==!1?e:{}}function OD(t){const{initial:e,animate:n}=FD(t,oe.useContext(du));return oe.useMemo(()=>({initial:e,animate:n}),[lg(e),lg(n)])}function lg(t){return Array.isArray(t)?t.join(" "):t}const Na={};function kD(t){for(const e in t)Na[e]=t[e],nm(e)&&(Na[e].isCSSVariable=!0)}function ZS(t,{layout:e,layoutId:n}){return Eo.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Na[t]||t==="opacity")}const zD={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},BD=Mo.length;function VD(t,e,n){let i="",r=!0;for(let s=0;s<BD;s++){const o=Mo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=VS(a,pm[o]);if(!l){r=!1;const u=zD[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Sm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Eo.has(l)){o=!0;continue}else if(nm(l)){r[l]=c;continue}else{const u=VS(c,pm[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=VD(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const Mm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function QS(t,e,n){for(const i in e)!Jt(e[i])&&!ZS(i,n)&&(t[i]=e[i])}function HD({transformTemplate:t},e){return oe.useMemo(()=>{const n=Mm();return Sm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function GD(t,e){const n=t.style||{},i={};return QS(i,n,t),Object.assign(i,HD(t,e)),i}function WD(t,e){const n={},i=GD(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const jD={offset:"stroke-dashoffset",array:"stroke-dasharray"},XD={offset:"strokeDashoffset",array:"strokeDasharray"};function qD(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?jD:XD;t[s.offset]=Le.transform(-i);const o=Le.transform(e),a=Le.transform(n);t[s.array]=`${o} ${a}`}function JS(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Sm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:d}=t;f.transform&&(d.transform=f.transform,delete f.transform),(d.transform||f.transformOrigin)&&(d.transformOrigin=f.transformOrigin??"50% 50%",delete f.transformOrigin),d.transform&&(d.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete f.transformBox),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),r!==void 0&&qD(f,r,s,o,!1)}const e1=()=>({...Mm(),attrs:{}}),t1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function YD(t,e,n,i){const r=oe.useMemo(()=>{const s=e1();return JS(s,e,t1(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};QS(s,t.style,t),r.style={...s,...r.style}}return r}const $D=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Em(t){return typeof t!="string"||t.includes("-")?!1:!!($D.indexOf(t)>-1||/[A-Z]/u.test(t))}function KD(t,e,n,{latestValues:i},r,s=!1){const a=(Em(t)?YD:WD)(e,i,r,t),l=UD(e,typeof t=="string",s),c=t!==oe.Fragment?{...l,...a,ref:n}:{},{children:u}=e,f=oe.useMemo(()=>Jt(u)?u.get():u,[u]);return oe.createElement(t,{...c,children:f})}function cg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Tm(t,e,n,i){if(typeof e=="function"){const[r,s]=cg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=cg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function uc(t){return Jt(t)?t.get():t}function ZD({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:QD(n,i,r,t),renderState:e()}}function QD(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=uc(s[d]);let{initial:o,animate:a}=t;const l=pu(t),c=KS(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!hu(f)){const d=Array.isArray(f)?f:[f];for(let p=0;p<d.length;p++){const g=Tm(t,d[p]);if(g){const{transitionEnd:_,transition:m,...h}=g;for(const x in h){let v=h[x];if(Array.isArray(v)){const E=u?v.length-1:0;v=v[E]}v!==null&&(r[x]=v)}for(const x in _)r[x]=_[x]}}}return r}const n1=t=>(e,n)=>{const i=oe.useContext(du),r=oe.useContext(Yp),s=()=>ZD(t,e,i,r);return n?s():fu(s)};function wm(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(Jt(i[o])||e.style&&Jt(e.style[o])||ZS(o,t)||((s=n==null?void 0:n.getValue(o))==null?void 0:s.liveStyle)!==void 0)&&(r[o]=i[o]);return r}const JD=n1({scrapeMotionValuesFromProps:wm,createRenderState:Mm});function i1(t,e,n){const i=wm(t,e,n);for(const r in t)if(Jt(t[r])||Jt(e[r])){const s=Mo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}const eL=n1({scrapeMotionValuesFromProps:i1,createRenderState:e1}),tL=Symbol.for("motionComponentSymbol");function Vs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function nL(t,e,n){return oe.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Vs(n)&&(n.current=i))},[e])}const bm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),iL="framerAppearId",r1="data-"+bm(iL),s1=oe.createContext({});function rL(t,e,n,i,r){var _,m;const{visualElement:s}=oe.useContext(du),o=oe.useContext(YS),a=oe.useContext(Yp),l=oe.useContext(vm).reducedMotion,c=oe.useRef(null);i=i||o.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:s,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,f=oe.useContext(s1);u&&!u.projection&&r&&(u.type==="html"||u.type==="svg")&&sL(c.current,n,r,f);const d=oe.useRef(!1);oe.useInsertionEffect(()=>{u&&d.current&&u.update(n,a)});const p=n[r1],g=oe.useRef(!!p&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,p))&&((m=window.MotionHasOptimisedAnimation)==null?void 0:m.call(window,p)));return qp(()=>{u&&(d.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),g.current&&u.animationState&&u.animationState.animateChanges())}),oe.useEffect(()=>{u&&(!g.current&&u.animationState&&u.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)==null||h.call(window,p)}),g.current=!1),u.enteringChildren=void 0)}),u}function sL(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:o1(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Vs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:u,layoutScroll:l,layoutRoot:c})}function o1(t){if(t)return t.options.allowProjection!==!1?t.projection:o1(t.parent)}function bf(t,{forwardMotionProps:e=!1}={},n,i){n&&LD(n);const r=Em(t)?eL:JD;function s(a,l){let c;const u={...oe.useContext(vm),...a,layoutId:oL(a)},{isStatic:f}=u,d=OD(a),p=r(a,f);if(!f&&Xp){aL();const g=lL(u);c=g.MeasureLayout,d.visualElement=rL(t,p,u,i,g.ProjectionNode)}return y.jsxs(du.Provider,{value:d,children:[c&&d.visualElement?y.jsx(c,{visualElement:d.visualElement,...u}):null,KD(t,a,nL(p,d.visualElement,l),p,f,e)]})}s.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const o=oe.forwardRef(s);return o[tL]=t,o}function oL({layoutId:t}){const e=oe.useContext(eS).id;return e&&t!==void 0?e+"-"+t:t}function aL(t,e){oe.useContext(YS).strict}function lL(t){const{drag:e,layout:n}=po;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function cL(t,e){if(typeof Proxy>"u")return bf;const n=new Map,i=(s,o)=>bf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,bf(o,void 0,t,e)),n.get(o))})}function a1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function uL({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function fL(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Af(t){return t===void 0||t===1}function Nh({scale:t,scaleX:e,scaleY:n}){return!Af(t)||!Af(e)||!Af(n)}function Hr(t){return Nh(t)||l1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function l1(t){return ug(t.x)||ug(t.y)}function ug(t){return t&&t!=="0%"}function Gc(t,e,n){const i=t-n,r=e*i;return n+r}function fg(t,e,n,i,r){return r!==void 0&&(t=Gc(t,r,i)),Gc(t,n,i)+e}function Ih(t,e=0,n=1,i,r){t.min=fg(t.min,e,n,i,r),t.max=fg(t.max,e,n,i,r)}function c1(t,{x:e,y:n}){Ih(t.x,e.translate,e.scale,e.originPoint),Ih(t.y,n.translate,n.scale,n.originPoint)}const dg=.999999999999,hg=1.0000000000001;function dL(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Gs(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,c1(t,o)),i&&Hr(s.latestValues)&&Gs(t,s.latestValues))}e.x<hg&&e.x>dg&&(e.x=1),e.y<hg&&e.y>dg&&(e.y=1)}function Hs(t,e){t.min=t.min+e,t.max=t.max+e}function pg(t,e,n,i,r=.5){const s=_t(t.min,t.max,r);Ih(t,e,n,s,i)}function Gs(t,e){pg(t.x,e.x,e.scaleX,e.scale,e.originX),pg(t.y,e.y,e.scaleY,e.scale,e.originY)}function u1(t,e){return a1(fL(t.getBoundingClientRect(),e))}function hL(t,e,n){const i=u1(t,n),{scroll:r}=e;return r&&(Hs(i.x,r.offset.x),Hs(i.y,r.offset.y)),i}const mg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ws=()=>({x:mg(),y:mg()}),xg=()=>({min:0,max:0}),It=()=>({x:xg(),y:xg()}),Uh={current:null},f1={current:!1};function pL(){if(f1.current=!0,!!Xp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Uh.current=t.matches;t.addEventListener("change",e),e()}else Uh.current=!1}const mL=new WeakMap;function xL(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Jt(r))t.addValue(i,r);else if(Jt(s))t.addValue(i,si(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,si(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const gg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class gL{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=dm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=mn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,nt.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=pu(n),this.isVariantNode=KS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in f){const p=f[d];l[d]!==void 0&&Jt(p)&&p.set(l[d])}}mount(e){var n;this.current=e,mL.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),f1.current||pL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Uh.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var e;this.projection&&this.projection.unmount(),ci(this.notifyUpdate),ci(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Eo.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&nt.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in po){const n=po[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):It()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<gg.length;i++){const r=gg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=xL(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=si(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(tS(i)||iS(i))?i=parseFloat(i):!PD(i)&&wr.test(n)&&(i=zS(e,n)),this.setBaseTarget(e,Jt(i)?i.get():i)),Jt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Tm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Jt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Qp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){mm.render(this.render)}}class d1 extends gL{constructor(){super(...arguments),this.KeyframeResolver=cD}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Jt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function h1(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function vL(t){return window.getComputedStyle(t)}class _L extends d1{constructor(){super(...arguments),this.type="html",this.renderInstance=h1}readValueFromInstance(e,n){var i;if(Eo.has(n))return(i=this.projection)!=null&&i.isProjecting?bh(n):RP(e,n);{const r=vL(e),s=(nm(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return u1(e,n)}build(e,n,i){Sm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return wm(e,n,i)}}const p1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function yL(t,e,n,i){h1(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(p1.has(r)?r:bm(r),e.attrs[r])}class SL extends d1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=It}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Eo.has(n)){const i=kS(n);return i&&i.default||0}return n=p1.has(n)?n:bm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return i1(e,n,i)}build(e,n,i){JS(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){yL(e,n,i,r)}mount(e){this.isSVGTag=t1(e.tagName),super.mount(e)}}const ML=(t,e)=>Em(t)?new SL(e):new _L(e,{allowProjection:t!==oe.Fragment});function Js(t,e,n){const i=t.getProps();return Tm(i,e,n!==void 0?n:i.custom,t)}const Fh=t=>Array.isArray(t);function EL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,si(n))}function TL(t){return Fh(t)?t[t.length-1]||0:t}function wL(t,e){const n=Js(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=TL(s[o]);EL(t,o,a)}}function bL(t){return!!(Jt(t)&&t.add)}function Oh(t,e){const n=t.getValue("willChange");if(bL(n))return n.add(e);if(!n&&Yi.WillChange){const i=new Yi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function m1(t){return t.props[r1]}const AL=t=>t!==null;function CL(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(AL),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}const RL={type:"spring",stiffness:500,damping:25,restSpeed:10},PL=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),DL={type:"keyframes",duration:.8},LL={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},NL=(t,{keyframes:e})=>e.length>2?DL:Eo.has(t)?t.startsWith("scale")?PL(e[1]):RL:LL;function IL({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Am=(t,e,n,i={},r,s)=>o=>{const a=hm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-vi(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:d=>{e.set(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};IL(a)||Object.assign(u,NL(t,u)),u.duration&&(u.duration=vi(u.duration)),u.repeatDelay&&(u.repeatDelay=vi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Dh(u),u.delay===0&&(f=!0)),(Yi.instantAnimations||Yi.skipAnimations)&&(f=!0,Dh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,f&&!s&&e.get()!==void 0){const d=CL(u.keyframes,a);if(d!==void 0){nt.update(()=>{u.onUpdate(d),u.onComplete()});return}}return a.isSync?new fm(u):new ZP(u)};function UL({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function x1(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=e;i&&(s=i);const l=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const u in a){const f=t.getValue(u,t.latestValues[u]??null),d=a[u];if(d===void 0||c&&UL(c,u))continue;const p={delay:n,...hm(s||{},u)},g=f.get();if(g!==void 0&&!f.isAnimating&&!Array.isArray(d)&&d===g&&!p.velocity)continue;let _=!1;if(window.MotionHandoffAnimation){const h=m1(t);if(h){const x=window.MotionHandoffAnimation(h,u,nt);x!==null&&(p.startTime=x,_=!0)}}Oh(t,u),f.start(Am(u,f,d,t.shouldReduceMotion&&US.has(u)?{type:!1}:p,t,_));const m=f.animation;m&&l.push(m)}return o&&Promise.all(l).then(()=>{nt.update(()=>{o&&wL(t,o)})}),l}function g1(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}function kh(t,e,n={}){var l;const i=Js(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(x1(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:d}=r;return FL(t,e,c,u,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,u]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function FL(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(kh(l,e,{...o,delay:n+(typeof i=="function"?0:i)+g1(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function OL(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>kh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=kh(t,e,n);else{const r=typeof e=="function"?Js(t,e,n.custom):e;i=Promise.all(x1(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}function v1(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const kL=ym.length;function _1(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?_1(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<kL;n++){const i=ym[n],r=t.props[i];(La(r)||r===!1)&&(e[i]=r)}return e}const zL=[..._m].reverse(),BL=_m.length;function VL(t){return e=>Promise.all(e.map(({animation:n,options:i})=>OL(t,n,i)))}function HL(t){let e=VL(t),n=vg(),i=!0;const r=l=>(c,u)=>{var d;const f=Js(t,u,l==="exit"?(d=t.presenceContext)==null?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:g,..._}=f;c={...c,..._,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=_1(t.parent)||{},f=[],d=new Set;let p={},g=1/0;for(let m=0;m<BL;m++){const h=zL[m],x=n[h],v=c[h]!==void 0?c[h]:u[h],E=La(v),A=h===l?x.isActive:null;A===!1&&(g=m);let b=v===u[h]&&v!==c[h]&&E;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),x.protectedKeys={...p},!x.isActive&&A===null||!v&&!x.prevProp||hu(v)||typeof v=="boolean")continue;const C=GL(x.prevProp,v);let P=C||h===l&&x.isActive&&!b&&E||m>g&&E,w=!1;const M=Array.isArray(v)?v:[v];let N=M.reduce(r(h),{});A===!1&&(N={});const{prevResolvedValues:k={}}=x,V={...k,...N},K=Y=>{P=!0,d.has(Y)&&(w=!0,d.delete(Y)),x.needsAnimating[Y]=!0;const I=t.getValue(Y);I&&(I.liveStyle=!1)};for(const Y in V){const I=N[Y],G=k[Y];if(p.hasOwnProperty(Y))continue;let j=!1;Fh(I)&&Fh(G)?j=!v1(I,G):j=I!==G,j?I!=null?K(Y):d.add(Y):I!==void 0&&d.has(Y)?K(Y):x.protectedKeys[Y]=!0}x.prevProp=v,x.prevResolvedValues=N,x.isActive&&(p={...p,...N}),i&&t.blockInitialAnimation&&(P=!1);const q=b&&C;P&&(!q||w)&&f.push(...M.map(Y=>{const I={type:h};if(typeof Y=="string"&&i&&!q&&t.manuallyAnimateOnMount&&t.parent){const{parent:G}=t,j=Js(G,Y);if(G.enteringChildren&&j){const{delayChildren:ce}=j.transition||{};I.delay=g1(G.enteringChildren,t,ce)}}return{animation:Y,options:I}}))}if(d.size){const m={};if(typeof c.initial!="boolean"){const h=Js(t,Array.isArray(c.initial)?c.initial[0]:c.initial);h&&h.transition&&(m.transition=h.transition)}d.forEach(h=>{const x=t.getBaseTarget(h),v=t.getValue(h);v&&(v.liveStyle=!0),m[h]=x??null}),f.push({animation:m})}let _=!!f.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(_=!1),i=!1,_?e(f):Promise.resolve()}function a(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=t.variantChildren)==null||f.forEach(d=>{var p;return(p=d.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const u=o(l);for(const d in n)n[d].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=vg()}}}function GL(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!v1(e,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vg(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}class Rr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class WL extends Rr{constructor(e){super(e),e.animationState||(e.animationState=HL(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();hu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let jL=0;class XL extends Rr{constructor(){super(...arguments),this.id=jL++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const qL={animation:{Feature:WL},exit:{Feature:XL}};function Ia(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ka(t){return{point:{x:t.pageX,y:t.pageY}}}const YL=t=>e=>xm(e)&&t(e,Ka(e));function sa(t,e,n,i){return Ia(t,e,YL(n),i)}const y1=1e-4,$L=1-y1,KL=1+y1,S1=.01,ZL=0-S1,QL=0+S1;function sn(t){return t.max-t.min}function JL(t,e,n){return Math.abs(t-e)<=n}function _g(t,e,n,i=.5){t.origin=i,t.originPoint=_t(e.min,e.max,t.origin),t.scale=sn(n)/sn(e),t.translate=_t(n.min,n.max,t.origin)-t.originPoint,(t.scale>=$L&&t.scale<=KL||isNaN(t.scale))&&(t.scale=1),(t.translate>=ZL&&t.translate<=QL||isNaN(t.translate))&&(t.translate=0)}function oa(t,e,n,i){_g(t.x,e.x,n.x,i?i.originX:void 0),_g(t.y,e.y,n.y,i?i.originY:void 0)}function yg(t,e,n){t.min=n.min+e.min,t.max=t.min+sn(e)}function eN(t,e,n){yg(t.x,e.x,n.x),yg(t.y,e.y,n.y)}function Sg(t,e,n){t.min=e.min-n.min,t.max=t.min+sn(e)}function Wc(t,e,n){Sg(t.x,e.x,n.x),Sg(t.y,e.y,n.y)}function Un(t){return[t("x"),t("y")]}const M1=({current:t})=>t?t.ownerDocument.defaultView:null,Mg=(t,e)=>Math.abs(t-e);function tN(t,e){const n=Mg(t.x,e.x),i=Mg(t.y,e.y);return Math.sqrt(n**2+i**2)}class E1{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Rf(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,g=tN(d.offset,{x:0,y:0})>=this.distanceThreshold;if(!p&&!g)return;const{point:_}=d,{timestamp:m}=Vt;this.history.push({..._,timestamp:m});const{onStart:h,onMove:x}=this.handlers;p||(h&&h(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,d)},this.handlePointerMove=(d,p)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Cf(p,this.transformPagePoint),nt.update(this.updatePoint,!0)},this.handlePointerUp=(d,p)=>{this.end();const{onEnd:g,onSessionEnd:_,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Rf(d.type==="pointercancel"?this.lastMoveEventInfo:Cf(p,this.transformPagePoint),this.history);this.startEvent&&g&&g(d,h),_&&_(d,h)},!xm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const a=Ka(e),l=Cf(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=Vt;this.history=[{...c,timestamp:u}];const{onSessionStart:f}=n;f&&f(e,Rf(l,this.history)),this.removeListeners=qa(sa(this.contextWindow,"pointermove",this.handlePointerMove),sa(this.contextWindow,"pointerup",this.handlePointerUp),sa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),ci(this.updatePoint)}}function Cf(t,e){return e?{point:e(t.point)}:t}function Eg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Rf({point:t},e){return{point:t,delta:Eg(t,T1(e)),offset:Eg(t,nN(e)),velocity:iN(e,.1)}}function nN(t){return t[0]}function T1(t){return t[t.length-1]}function iN(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=T1(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>vi(e)));)n--;if(!i)return{x:0,y:0};const s=Vn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function rN(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?_t(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?_t(n,t,i.max):Math.min(t,n)),t}function Tg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function sN(t,{top:e,left:n,bottom:i,right:r}){return{x:Tg(t.x,n,r),y:Tg(t.y,e,i)}}function wg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function oN(t,e){return{x:wg(t.x,e.x),y:wg(t.y,e.y)}}function aN(t,e){let n=.5;const i=sn(t),r=sn(e);return r>i?n=ho(e.min,e.max-i,t.min):i>r&&(n=ho(t.min,t.max-r,e.min)),Si(0,1,n)}function lN(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const zh=.35;function cN(t=zh){return t===!1?t=0:t===!0&&(t=zh),{x:bg(t,"left","right"),y:bg(t,"top","bottom")}}function bg(t,e,n){return{min:Ag(t,e),max:Ag(t,n)}}function Ag(t,e){return typeof t=="number"?t:t[e]||0}const uN=new WeakMap;class fN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=It(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ka(f).point)},o=(f,d)=>{const{drag:p,dragPropagation:g,onDragStart:_}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=dD(p),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=d,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Un(h=>{let x=this.getAxisMotionValue(h).get()||0;if(_i.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const E=v.layout.layoutBox[h];E&&(x=sn(E)*(parseFloat(x)/100))}}this.originPoint[h]=x}),_&&nt.postRender(()=>_(f,d)),Oh(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:_,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:h}=d;if(g&&this.currentDirection===null){this.currentDirection=dN(h),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",d.point,h),this.updateAxis("y",d.point,h),this.visualElement.render(),m&&m(f,d)},l=(f,d)=>{this.latestPointerEvent=f,this.latestPanInfo=d,this.stop(f,d),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>Un(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)==null?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new E1(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:M1(this.visualElement)})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&nt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Vl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=rN(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Vs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=sN(i.layoutBox,e):this.constraints=!1,this.elastic=cN(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Un(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=lN(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Vs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=hL(i,r.root,this.visualElement.getTransformPagePoint());let o=oN(r.layout.layoutBox,s);if(n){const a=n(uL(o));this.hasMutatedConstraints=!!a,a&&(o=a1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Un(u=>{if(!Vl(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[u]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Oh(this.visualElement,e),i.start(Am(e,i,0,n,this.visualElement,!1))}stopAnimation(){Un(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Un(e=>{var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)==null?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Un(n=>{const{drag:i}=this.getProps();if(!Vl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-_t(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Vs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Un(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=aN({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Un(o=>{if(!Vl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(_t(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;uN.set(this.visualElement,this);const e=this.visualElement.current,n=sa(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Vs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),nt.read(i);const o=Ia(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Un(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=zh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Vl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function dN(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class hN extends Rr{constructor(e){super(e),this.removeGroupControls=Sn,this.removeListeners=Sn,this.controls=new fN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Sn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Cg=t=>(e,n)=>{t&&nt.postRender(()=>t(e,n))};class pN extends Rr{constructor(){super(...arguments),this.removePointerDownListener=Sn}onPointerDown(e){this.session=new E1(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:M1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Cg(e),onStart:Cg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&nt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=sa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const fc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Rg(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Le.test(t))t=parseFloat(t);else return t;const n=Rg(t,e.target.x),i=Rg(t,e.target.y);return`${n}% ${i}%`}},mN={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=wr.parse(t);if(r.length>5)return i;const s=wr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=_t(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};let Pf=!1;class xN extends oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;kD(gN),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Pf&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),fc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,Pf=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||nt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),mm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Pf=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function w1(t){const[e,n]=DD(),i=oe.useContext(eS);return y.jsx(xN,{...t,layoutGroup:i,switchLayoutGroup:oe.useContext(s1),isPresent:e,safeToRemove:n})}const gN={borderRadius:{...zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zo,borderTopRightRadius:zo,borderBottomLeftRadius:zo,borderBottomRightRadius:zo,boxShadow:mN};function vN(t,e,n){const i=Jt(t)?t:si(t);return i.start(Am("",i,e,n)),i.animation}const _N=(t,e)=>t.depth-e.depth;class yN{constructor(){this.children=[],this.isDirty=!1}add(e){$p(this.children,e),this.isDirty=!0}remove(e){Kp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(_N),this.isDirty=!1,this.children.forEach(e)}}function SN(t,e){const n=mn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ci(i),t(s-e))};return nt.setup(i,!0),()=>ci(i)}const b1=["TopLeft","TopRight","BottomLeft","BottomRight"],MN=b1.length,Pg=t=>typeof t=="string"?parseFloat(t):t,Dg=t=>typeof t=="number"||Le.test(t);function EN(t,e,n,i,r,s){r?(t.opacity=_t(0,n.opacity??1,TN(i)),t.opacityExit=_t(e.opacity??1,0,wN(i))):s&&(t.opacity=_t(e.opacity??1,n.opacity??1,i));for(let o=0;o<MN;o++){const a=`border${b1[o]}Radius`;let l=Lg(e,a),c=Lg(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Dg(l)===Dg(c)?(t[a]=Math.max(_t(Pg(l),Pg(c),i),0),(_i.test(c)||_i.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=_t(e.rotate||0,n.rotate||0,i))}function Lg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const TN=A1(0,.5,uS),wN=A1(.5,.95,Sn);function A1(t,e,n){return i=>i<t?0:i>e?1:n(ho(t,e,i))}function Ng(t,e){t.min=e.min,t.max=e.max}function Zn(t,e){Ng(t.x,e.x),Ng(t.y,e.y)}function Ig(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Ug(t,e,n,i,r){return t-=e,t=Gc(t,1/n,i),r!==void 0&&(t=Gc(t,1/r,i)),t}function bN(t,e=0,n=1,i=.5,r,s=t,o=t){if(_i.test(e)&&(e=parseFloat(e),e=_t(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=_t(s.min,s.max,i);t===s&&(a-=e),t.min=Ug(t.min,e,n,a,r),t.max=Ug(t.max,e,n,a,r)}function Fg(t,e,[n,i,r],s,o){bN(t,e[n],e[i],e[r],e.scale,s,o)}const AN=["x","scaleX","originX"],CN=["y","scaleY","originY"];function Og(t,e,n,i){Fg(t.x,e,AN,n?n.x:void 0,i?i.x:void 0),Fg(t.y,e,CN,n?n.y:void 0,i?i.y:void 0)}function kg(t){return t.translate===0&&t.scale===1}function C1(t){return kg(t.x)&&kg(t.y)}function zg(t,e){return t.min===e.min&&t.max===e.max}function RN(t,e){return zg(t.x,e.x)&&zg(t.y,e.y)}function Bg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function R1(t,e){return Bg(t.x,e.x)&&Bg(t.y,e.y)}function Vg(t){return sn(t.x)/sn(t.y)}function Hg(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class PN{constructor(){this.members=[]}add(e){$p(this.members,e),e.scheduleRender()}remove(e){if(Kp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function DN(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:d,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Df=["","X","Y","Z"],LN=1e3;let NN=0;function Lf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function P1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=m1(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",nt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&P1(i)}function D1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=NN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FN),this.nodes.forEach(BN),this.nodes.forEach(VN),this.nodes.forEach(ON)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new yN)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Qp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=gm(o)&&!AD(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,f=0;const d=()=>this.root.updateBlockedByResize=!1;nt.read(()=>{f=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==f&&(f=p,this.root.updateBlockedByResize=!0,u&&u(),u=SN(d,250),fc.hasAnimatedSinceResize&&(fc.hasAnimatedSinceResize=!1,this.nodes.forEach(jg)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f,hasRelativeLayoutChanged:d,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||XN,{onLayoutAnimationStart:_,onLayoutAnimationComplete:m}=c.getProps(),h=!this.targetLayout||!R1(this.targetLayout,p),x=!f&&d;if(this.options.layoutRoot||this.resumeFrom||x||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...hm(g,"layout"),onPlay:_,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(u,x)}else f||jg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ci(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(HN),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&P1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Gg);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wg);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zN),this.nodes.forEach(IN),this.nodes.forEach(UN)):this.nodes.forEach(Wg),this.clearAllSnapshots();const a=mn.now();Vt.delta=Si(0,1e3/60,a-Vt.timestamp),Vt.timestamp=a,Vt.isProcessing=!0,yf.update.process(Vt),yf.preRender.process(Vt),yf.render.process(Vt),Vt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,mm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(kN),this.sharedNodes.forEach(GN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!sn(this.snapshot.measuredBox.x)&&!sn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=It(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!C1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Hr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),qN(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return It();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(YN))){const{scroll:u}=this.root;u&&(Hs(a.x,u.offset.x),Hs(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=It();if(Zn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:d}=u;u!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Zn(a,o),Hs(a.x,f.offset.x),Hs(a.y,f.offset.y))}return a}applyTransform(o,a=!1){const l=It();Zn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Gs(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Hr(u.latestValues)&&Gs(l,u.latestValues)}return Hr(this.latestValues)&&Gs(l,this.latestValues),l}removeTransform(o){const a=It();Zn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Hr(c.latestValues))continue;Nh(c.latestValues)&&c.updateSnapshot();const u=It(),f=c.measurePageBox();Zn(u,f),Og(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Hr(this.latestValues)&&Og(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!this.layout||!(u||f))return;this.resolvedRelativeTargetAt=Vt.timestamp;const d=this.getClosestProjectingParent();d&&this.linkedParentVersion!==d.layoutVersion&&!d.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(d&&d.layout?this.createRelativeTarget(d,this.layout.layoutBox,d.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=It(),this.targetWithTransforms=It()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),eN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Zn(this.target,this.layout.layoutBox),c1(this.target,this.targetDelta)):Zn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?this.createRelativeTarget(d,this.target,d.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Nh(this.parent.latestValues)||l1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),Wc(this.relativeTargetOrigin,a,l),Zn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Vt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Zn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,d=this.treeScale.y;dL(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=It());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ig(this.prevProjectionDelta.x,this.projectionDelta.x),Ig(this.prevProjectionDelta.y,this.projectionDelta.y)),oa(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==d||!Hg(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ws(),this.projectionDelta=Ws(),this.projectionDeltaWithTransform=Ws()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Ws();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=It(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),h=!m||m.members.length<=1,x=!!(_&&!h&&this.options.crossfade===!0&&!this.path.some(jN));this.animationProgress=0;let v;this.mixTargetDelta=E=>{const A=E/1e3;Xg(f.x,o.x,A),Xg(f.y,o.y,A),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Wc(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),WN(this.relativeTarget,this.relativeTargetOrigin,d,A),v&&RN(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=It()),Zn(v,this.relativeTarget)),_&&(this.animationValues=u,EN(u,c,this.latestValues,A,x,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(ci(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=nt.update(()=>{fc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=si(0)),this.currentAnimation=vN(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(LN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&L1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||It();const f=sn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=sn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Zn(a,l),Gs(a,u),oa(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new PN),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Lf("z",o,c,this.animationValues);for(let u=0;u<Df.length;u++)Lf(`rotate${Df[u]}`,o,c,this.animationValues),Lf(`skew${Df[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=uc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=uc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Hr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let f=DN(this.projectionDeltaWithTransform,this.treeScale,u);l&&(f=l(u,f)),o.transform=f;const{x:d,y:p}=this.projectionDelta;o.transformOrigin=`${d.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const g in Na){if(u[g]===void 0)continue;const{correct:_,applyTo:m,isCSSVariable:h}=Na[g],x=f==="none"?u[g]:_(u[g],c);if(m){const v=m.length;for(let E=0;E<v;E++)o[m[E]]=x}else h?this.options.visualElement.renderState.vars[g]=x:o[g]=x}this.options.layoutId&&(o.pointerEvents=c===this?uc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Gg),this.root.sharedNodes.clear()}}}function IN(t){t.updateLayout()}function UN(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Un(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=sn(d);d.min=i[f].min,d.max=d.min+p}):L1(s,e.layoutBox,i)&&Un(f=>{const d=o?e.measuredBox[f]:e.layoutBox[f],p=sn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Ws();oa(a,i,e.layoutBox);const l=Ws();o?oa(l,t.applyTransform(r,!0),e.measuredBox):oa(l,i,e.layoutBox);const c=!C1(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const g=It();Wc(g,e.layoutBox,d.layoutBox);const _=It();Wc(_,i,p.layoutBox),R1(g,_)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function FN(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ON(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function kN(t){t.clearSnapshot()}function Gg(t){t.clearMeasurements()}function Wg(t){t.isLayoutDirty=!1}function zN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function jg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function BN(t){t.resolveTargetDelta()}function VN(t){t.calcProjection()}function HN(t){t.resetSkewAndRotation()}function GN(t){t.removeLeadSnapshot()}function Xg(t,e,n){t.translate=_t(e.translate,0,n),t.scale=_t(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function qg(t,e,n,i){t.min=_t(e.min,n.min,i),t.max=_t(e.max,n.max,i)}function WN(t,e,n,i){qg(t.x,e.x,n.x,i),qg(t.y,e.y,n.y,i)}function jN(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const XN={duration:.45,ease:[.4,0,.1,1]},Yg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),$g=Yg("applewebkit/")&&!Yg("chrome/")?Math.round:Sn;function Kg(t){t.min=$g(t.min),t.max=$g(t.max)}function qN(t){Kg(t.x),Kg(t.y)}function L1(t,e,n){return t==="position"||t==="preserve-aspect"&&!JL(Vg(e),Vg(n),.2)}function YN(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const $N=D1({attachResizeListener:(t,e)=>Ia(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nf={current:void 0},N1=D1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Nf.current){const t=new $N({});t.mount(window),t.setOptions({layoutScroll:!0}),Nf.current=t}return Nf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),KN={pan:{Feature:pN},drag:{Feature:hN,ProjectionNode:N1,MeasureLayout:w1}};function Zg(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&nt.postRender(()=>s(e,Ka(e)))}class ZN extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=hD(e,(n,i)=>(Zg(this.node,i,"Start"),r=>Zg(this.node,r,"End"))))}unmount(){}}class QN extends Rr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qa(Ia(this.node.current,"focus",()=>this.onFocus()),Ia(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qg(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&nt.postRender(()=>s(e,Ka(e)))}class JN extends Rr{mount(){const{current:e}=this.node;e&&(this.unmount=gD(e,(n,i)=>(Qg(this.node,i,"Start"),(r,{success:s})=>Qg(this.node,r,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Bh=new WeakMap,If=new WeakMap,eI=t=>{const e=Bh.get(t.target);e&&e(t)},tI=t=>{t.forEach(eI)};function nI({root:t,...e}){const n=t||document;If.has(n)||If.set(n,{});const i=If.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(tI,{root:t,...e})),i[r]}function iI(t,e,n){const i=nI(e);return Bh.set(t,n),i.observe(t),()=>{Bh.delete(t),i.unobserve(t)}}const rI={some:0,all:1};class sI extends Rr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:rI[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),d=c?u:f;d&&d(l)};return iI(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(oI(e,n))&&this.startObserver()}unmount(){}}function oI({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const aI={inView:{Feature:sI},tap:{Feature:JN},focus:{Feature:QN},hover:{Feature:ZN}},lI={layout:{ProjectionNode:N1,MeasureLayout:w1}},cI={...qL,...aI,...KN,...lI},Ft=cL(cI,ML),uI=50,Jg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),fI=()=>({time:0,x:Jg(),y:Jg()}),dI={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ev(t,e,n,i){const r=n[e],{length:s,position:o}=dI[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=ho(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>uI?0:Jp(r.current-a,c)}function hI(t,e,n){ev(t,"x",e,n),ev(t,"y",e,n),e.time=n}function pI(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(HS(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const Vh={start:0,center:.5,end:1};function tv(t,e,n=0){let i=0;if(t in Vh&&(t=Vh[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const mI=[0,0];function xI(t,e,n,i){let r=Array.isArray(t)?t:mI,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Vh[t]?t:"0"]),s=tv(r[0],n,i),o=tv(r[1],e),s-o}const gI={All:[[0,0],[1,1]]},vI={x:0,y:0};function _I(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function yI(t,e,n){const{offset:i=gI.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?pI(r,t):vI,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:_I(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const f=i.length;for(let d=0;d<f;d++){const p=xI(i[d],c[o],l[o],a[s]);!u&&p!==e[s].interpolatorOffsets[d]&&(u=!0),e[s].offset[d]=p}u&&(e[s].interpolate=lm(e[s].offset,wS(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=Si(0,1,e[s].interpolate(e[s].current))}function SI(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function MI(t,e,n,i={}){return{measure:r=>{SI(t,i.target,n),hI(t,n,r),(i.offset||i.target)&&yI(t,n,i)},notify:()=>e(n)}}const Bo=new WeakMap,nv=new WeakMap,Uf=new WeakMap,iv=t=>t===document.scrollingElement?window:t;function I1(t,{container:e=document.scrollingElement,...n}={}){if(!e)return Sn;let i=Uf.get(e);i||(i=new Set,Uf.set(e,i));const r=fI(),s=MI(e,t,r,n);if(i.add(s),!Bo.has(e)){const a=()=>{for(const f of i)f.measure(Vt.timestamp);nt.preUpdate(l)},l=()=>{for(const f of i)f.notify()},c=()=>nt.read(a);Bo.set(e,c);const u=iv(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&nv.set(e,bD(e,c)),u.addEventListener("scroll",c,{passive:!0}),c()}const o=Bo.get(e);return nt.read(o,!1,!0),()=>{var c;ci(o);const a=Uf.get(e);if(!a||(a.delete(s),a.size))return;const l=Bo.get(e);Bo.delete(e),l&&(iv(e).removeEventListener("scroll",l),(c=nv.get(e))==null||c(),window.removeEventListener("resize",l))}}const rv=new Map;function EI(t){const e={value:0},n=I1(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function U1({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);const r=rv.get(e)??new Map;rv.set(e,r);const s=n.target??"self",o=r.get(s)??{},a=i+(n.offset??[]).join(",");return o[a]||(o[a]=!n.target&&RS()?new ScrollTimeline({source:e,axis:i}):EI({container:e,...n})),o[a]}function TI(t,e){const n=U1(e);return t.attachTimeline({timeline:e.target?void 0:n,observe:i=>(i.pause(),qS(r=>{i.time=i.iterationDuration*r},n))})}function wI(t){return t.length===2}function bI(t,e){return wI(t)?I1(n=>{t(n[e.axis].progress,n)},e):qS(t,U1(e))}function AI(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return Sn;const r={axis:e,container:n,...i};return typeof t=="function"?bI(t,r):TI(t,r)}const CI=()=>({scrollX:si(0),scrollY:si(0),scrollXProgress:si(0),scrollYProgress:si(0)}),Hl=t=>t?!t.current:!1;function RI({container:t,target:e,...n}={}){const i=fu(CI),r=oe.useRef(null),s=oe.useRef(!1),o=oe.useCallback(()=>(r.current=AI((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return qp(()=>{if(s.current=!1,Hl(t)||Hl(e)){s.current=!0;return}else return o()},[o]),oe.useEffect(()=>{if(s.current)return Ra(!Hl(t)),Ra(!Hl(e)),o()},[o]),i}function PI(t){const e=fu(()=>si(t)),{isStatic:n}=oe.useContext(vm);if(n){const[,i]=oe.useState(t);oe.useEffect(()=>e.on("change",i),[])}return e}function F1(t,e){const n=PI(e()),i=()=>n.set(e());return i(),qp(()=>{const r=()=>nt.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),ci(i)}}),n}function DI(t){ra.current=[],t();const e=F1(ra.current,t);return ra.current=void 0,e}function sv(t,e,n,i){if(typeof t=="function")return DI(t);const r=typeof e=="function"?e:CD(e,n,i);return Array.isArray(t)?ov(t,r):ov([t],([s])=>r(s))}function ov(t,e){const n=fu(()=>[]);return F1(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}const LI=({onNavigate:t})=>y.jsxs("div",{className:"h-screen w-full relative overflow-hidden bg-black flex items-center justify-center",children:[y.jsxs("div",{className:"absolute inset-0 bg-black",children:[y.jsx("div",{className:"absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transform scale-110 animate-pulse-slow"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"})]}),y.jsx("div",{className:"relative z-10 text-center px-6",children:y.jsxs(Ft.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"flex flex-col items-center",children:[y.jsxs("div",{className:"flex items-center gap-4 mb-8 text-white/80",children:[y.jsx(nT,{className:"w-6 h-6 md:w-8 md:h-8 animate-float",strokeWidth:1.5}),y.jsx("span",{className:"text-lg font-light",children:"×"}),y.jsx(Ba,{className:"w-6 h-6 md:w-8 md:h-8",strokeWidth:1.5}),y.jsx("span",{className:"text-lg font-light",children:"×"}),y.jsx(Rd,{className:"w-6 h-6 md:w-8 md:h-8 text-emerald-400",strokeWidth:1.5})]}),y.jsxs("h1",{className:"text-5xl md:text-8xl font-serif text-white tracking-tighter italic mb-4 drop-shadow-2xl",children:["Sky Photographer",y.jsx("span",{className:"block text-2xl md:text-4xl mt-2 text-emerald-400 not-italic font-sans font-light tracking-wide",children:"with AI Technology"})]}),y.jsxs("p",{className:"text-zinc-300 max-w-lg mx-auto leading-relaxed mb-12 font-light text-sm md:text-base mt-8",children:["ドローンによる「空撮」と、一眼レフによる「表現」。",y.jsx("br",{}),"そこにAIの「知能」を掛け合わせ、撮影の限界を突破する。",y.jsx("br",{}),"次世代のクリエイティブ・ワークフローへ。"]}),y.jsxs("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:[y.jsx(Ft.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("works"),className:"px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white tracking-[0.2em] text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-500 rounded-sm",children:"VIEW GALLERY"}),y.jsxs(Ft.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>t("ai-photographer"),className:"px-8 py-3 bg-emerald-600/80 backdrop-blur-sm text-white tracking-[0.2em] text-xs md:text-sm hover:bg-emerald-500 transition-all duration-500 rounded-sm flex items-center justify-center gap-2",children:[y.jsx(hT,{size:14}),"AI PROJECTS"]})]})]})}),y.jsxs(Ft.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:1},className:"absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2",children:[y.jsx("span",{className:"text-[10px] tracking-widest uppercase",children:"Scroll"}),y.jsx(CE,{className:"w-4 h-4 animate-bounce"})]})]}),NI=()=>{const t=["Portrait","Landscape","Commercial","Art Direction","Fine Art","Street","Editorial","Fashion","Documentary","Black & White"];return y.jsx("div",{className:"w-full py-6 bg-black border-y border-white/5 overflow-hidden flex relative z-20",children:y.jsx(Ft.div,{className:"flex whitespace-nowrap",animate:{x:[0,-1e3]},transition:{repeat:1/0,ease:"linear",duration:30},children:[...t,...t,...t,...t].map((e,n)=>y.jsxs("span",{className:"text-2xl md:text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 px-8 opacity-60 hover:opacity-100 hover:text-white transition-colors cursor-default",children:[e," ",y.jsx("span",{className:"text-zinc-800 mx-4 not-italic",children:"/"})]},n))})})},II=({onNavigate:t})=>y.jsxs("section",{className:"py-40 px-6 bg-black relative z-10 overflow-hidden",children:[y.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none",children:y.jsx("span",{className:"text-[20vw] font-serif font-bold leading-none text-white block",children:"STORY"})}),y.jsx("div",{className:"max-w-5xl mx-auto relative",children:y.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[y.jsxs(Ft.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},className:"relative",children:[y.jsx("div",{className:"aspect-[3/4] overflow-hidden bg-zinc-900",children:y.jsx("div",{className:"w-full h-full bg-[url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"})}),y.jsx("div",{className:"absolute -bottom-6 -right-6 w-32 h-32 border border-white/20 z-[-1]"}),y.jsx("div",{className:"absolute -top-6 -left-6 w-32 h-32 border border-white/20 z-[-1]"})]}),y.jsxs("div",{className:"text-left",children:[y.jsx(Ft.span,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},className:"text-purple-400 text-xs tracking-[0.3em] uppercase block mb-6",children:"The Photographer"}),y.jsxs(Ft.h3,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.8},viewport:{once:!0},className:"text-4xl md:text-5xl font-serif text-white mb-10 leading-tight",children:["Silence,",y.jsx("br",{}),y.jsx("span",{className:"italic text-zinc-500",children:"Speaks Louder."})]}),y.jsxs(Ft.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{delay:.2,duration:.8},viewport:{once:!0},className:"text-zinc-400 leading-relaxed font-light text-sm md:text-base space-y-6",children:[y.jsxs("p",{children:["写真とは、単に時間を止めることではありません。",y.jsx("br",{}),"それは、目に見えない「気配」や「感情」を、光というインクで空間に定着させる行為です。"]}),y.jsxs("p",{children:["私は、静寂の中に潜む力強い物語を追い求めています。",y.jsx("br",{}),"都市の喧騒の隙間にある孤独、自然が見せる一瞬の表情、人の瞳の奥にある揺らぎ。"]}),y.jsxs("p",{children:["「言葉にできないもの」こそが、最も雄弁に語りかける。",y.jsx("br",{}),"その瞬間を逃さず、永遠の美しさとして昇華させることが私の使命です。"]})]}),y.jsx(Ft.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.4,duration:.8},viewport:{once:!0},className:"mt-12",children:y.jsxs("button",{onClick:()=>t("photographer"),className:"group flex items-center gap-4 text-white hover:text-purple-400 transition-colors duration-300",children:[y.jsx("span",{className:"text-sm tracking-[0.2em] uppercase border-b border-transparent group-hover:border-purple-400 pb-1",children:"Read Concept"}),y.jsx("span",{className:"transform group-hover:translate-x-2 transition-transform duration-300",children:"→"})]})})]})]})})]}),UI=(t,e=0)=>typeof t!="number"||isNaN(t)||!isFinite(t)?e:t,FI=({onNavigate:t})=>{const e=oe.useRef(null),[n,i]=oe.useState(0);return oe.useEffect(()=>{const r=()=>{if(!e.current)return;const{top:o,height:a}=e.current.getBoundingClientRect(),l=-o,c=window.innerHeight,u=a-c;if(u<=1){i(0);return}let f=l/u;f=UI(f),f<0&&(f=0),f>1&&(f=1),i(f)};window.addEventListener("scroll",r);const s=setTimeout(r,100);return()=>{window.removeEventListener("scroll",r),clearTimeout(s)}},[]),y.jsxs("div",{ref:e,className:"relative w-full bg-black",children:[y.jsx("div",{className:"fixed inset-0 z-0",children:y.jsx(CR,{scrollProgress:n})}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center w-full",children:[y.jsx(LI,{onNavigate:t}),y.jsx(NI,{}),y.jsx(II,{onNavigate:t})]})]})},Bi=({children:t,delay:e=0,className:n=""})=>y.jsx("div",{className:`animate-fade-in-up ${n}`,style:{animationDelay:`${e}ms`,opacity:0,animationFillMode:"forwards"},children:t}),OI=({children:t,className:e=""})=>{const n=oe.useRef(null),i=s=>{if(!n.current)return;const o=n.current.getBoundingClientRect(),a=s.clientX-o.left,l=s.clientY-o.top,c=o.width/2,u=o.height/2,f=(l-u)/u*-5,d=(a-c)/c*5;n.current.style.transform=`perspective(1000px) rotateX(${f}deg) rotateY(${d}deg) scale3d(1.01, 1.01, 1.01)`},r=()=>{n.current&&(n.current.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")};return y.jsx("div",{ref:n,onMouseMove:i,onMouseLeave:r,className:`transition-transform duration-300 ease-out transform-gpu ${e}`,style:{transformStyle:"preserve-3d"},children:t})},kI="/my-portfolio/assets/1-DCnYBdTC.jpg",zI="/my-portfolio/assets/2-_9mEI0yw.jpg",BI="/my-portfolio/assets/3-CBBggFGM.jpg",VI="/my-portfolio/assets/4-DVxg6D1q.jpg",HI="/my-portfolio/assets/5-BftvNwdK.jpg",GI="/my-portfolio/assets/6-Cuam7JBe.jpg",WI="/my-portfolio/assets/7-KvzDFehQ.jpg",jI="/my-portfolio/assets/8-BGUmp9Qe.jpg",XI="/my-portfolio/assets/9-Dj8JXDTd.jpg",qI="/my-portfolio/assets/10-BfwQA9aU.jpg",YI="/my-portfolio/assets/11-G_gjNXqV.jpg",$I="/my-portfolio/assets/12-m0K095JI.jpg",KI="/my-portfolio/assets/13-YzI63Cg5.jpg",ZI="/my-portfolio/assets/14-DqS3gogS.jpg",QI="/my-portfolio/assets/15-_tSl9R94.jpg",JI="/my-portfolio/assets/16-CK2hNvtt.jpg",eU="/my-portfolio/assets/17-RP3tvWF4.jpg",tU="/my-portfolio/assets/18-Bi1-bwRo.jpg",nU="/my-portfolio/assets/19-BTRFSoGT.jpg",iU="/my-portfolio/assets/20-BQbx03_Y.jpg",rU="/my-portfolio/assets/21-DEikGmqg.jpg",sU="/my-portfolio/assets/22-OK5hrCUu.jpg",oU="/my-portfolio/assets/23-uouQIWGj.jpg",aU="/my-portfolio/assets/24-BvhkX4Ck.jpg",lU="/my-portfolio/assets/25-BNcS0C9f.jpg",cU="/my-portfolio/assets/26-BIwJvQ3d.jpg",uU="/my-portfolio/assets/27-CP2icyDm.jpg",fU="/my-portfolio/assets/28-DA7QTJlZ.jpg",dU="/my-portfolio/assets/29-33ArX_y6.jpg",hU="/my-portfolio/assets/30-CqdXK3ZX.jpg",pU="/my-portfolio/assets/31-Bz5fwAE5.jpg",mU="/my-portfolio/assets/32-SftucfOA.jpg",xU="/my-portfolio/assets/33-MwAcfTEh.jpg",gU="/my-portfolio/assets/34-C6BHGx72.jpg",vU="/my-portfolio/assets/35-OQTcUKDA.jpg",_U="/my-portfolio/assets/36-B7GozifN.jpg",yU=[{id:1,date:"2025.11.24",category:"Event",title:"個展「静寂の音」開催のお知らせ",content:`東京・青山のギャラリーにて、3年ぶりとなる個展を開催いたします。今回は「都市の静寂」をテーマに撮り下ろした新作20点を展示します。

期間：2025年12月1日〜12月15日
場所：青山Blue Gallery`},{id:2,date:"2025.10.15",category:"Work",title:"雑誌「Life & Light」11月号 表紙撮影",content:"光の表現について特集された今月号にて、表紙写真と巻頭インタビューを担当させていただきました。全国の書店にて発売中です。"},{id:3,date:"2025.09.01",category:"Info",title:"Webサイトリニューアル",content:"より作品の世界観をお伝えできるよう、ポートフォリオサイトを一新いたしました。"}],av=[{id:1,title:"Ethereal Dawn",category:"Nature",image:kI,height:"h-96",date:"2025.04",equipment:"LUMIX S5",location:"Nagano, Japan",description:"雲海の上、世界が目覚める瞬間。黄金色の光が霧を染め上げ、静寂と躍動が交差する。ドローンによる高度150mからの視点は、地上では決して見ることのできない地球の鼓動を捉えている。光の階調（グラデーション）を最大限に残すため、早朝のマジックアワーに撮影。"},{id:2,title:"秋風とマスク越しの瞳",category:"Portrait",image:zI,height:"h-64",date:"2024.11",equipment:"LUMIX S5",location:"Tokyo",description:"秋色に染まった木々を背景に、ふと振り返った女性を捉えています。白いマスクをしていても、その澄んだ瞳からは穏やかな表情が伝わってきます。柔らかな自然光が髪や肩を包み込み、特定の時代の空気感と、季節の移ろいを感じさせる静かなポートレートです。"},{id:3,title:"Silent Portrait",category:"Portrait",image:BI,height:"h-[500px]",date:"2025.02",equipment:"LUMIX S5",location:"Kyoto",description:"被写体の内面にある静けさを引き出す。余計な演出を排し、自然光のみで撮影。瞳の奥にある物語を想像させるような、普遍的な強さを持つポートレート。背景のボケ味（Bokhe）が、被写体の存在感をより一層際立たせている。"},{id:4,title:"Neon Reflections",category:"Cityscape",image:VI,height:"h-72",date:"2025.01",equipment:"LUMIX S5",location:"Osaka, Dotonbori",description:"雨上がりの路面に反射するネオンサイン。色彩の洪水が、夜の街をサイバーパンクな世界へと変える。長時間露光ではなく、高感度撮影によって通行人のシルエットを意図的にブラし、街の「動き」と「熱量」を一枚に閉じ込めた。"},{id:5,title:"飛沫（しぶき）に架かる虹",category:"Nature",image:HI,height:"h-80",date:"2024.12",equipment:"LUMIX S5",location:"Waterfall",description:"岩肌を流れ落ちる滝の水しぶきに光が当たり、鮮やかな虹が架かった神秘的な瞬間です。暗めの岩肌が背景にあることで、虹の七色がより一層鮮明に浮かび上がっています。自然が作り出す偶然の美しさと、マイナスイオンを感じるような清涼感のある風景写真です。"},{id:6,title:"雪路の邂逅（かいこう）",category:"Cityscape",image:GI,height:"h-64",date:"2025.05",equipment:"LUMIX S5",location:"Street",description:"降りしきる雪の中、路地裏で対峙する2匹の猫を捉えたストリートフォトです。手前の猫の背中と、奥でじっとこちらを見据える黒白の猫。厳しい寒さの中で生きる彼らのたくましさと、静かな緊張感が伝わってきます。雪の粒が写真に臨場感を与えています。"},{id:7,title:"春色の共演",category:"Nature",image:WI,height:"h-[400px]",date:"2024.08",equipment:"LUMIX S5",location:"Shizuoka",description:"鮮やかなピンク色の河津桜（または早咲きの桜）と、手前の黄色い菜の花が織りなす春の風景です。前ボケに使われた黄色の花が写真に奥行きを与え、青空とのコントラストも相まって、視界いっぱいに春の喜びが広がるような、明るく華やかな一枚です。"},{id:8,title:"岩場の特等席",category:"Nature",image:jI,height:"h-80",date:"2024.10",equipment:"LUMIX S5",location:"Seaside",description:"海辺と思われる岩場で、気持ちよさそうに体を伸ばしている猫の写真です。背景のボケた青色が海や空の広がりを連想させ、ザラついた岩の質感と猫の毛並みの柔らかさの対比が面白い一枚。猫のリラックスした様子から、穏やかな午後の時間の流れを感じます。"},{id:9,title:"海辺の指定席",category:"Nature",image:XI,height:"h-64",date:"2024.09",equipment:"LUMIX S5",location:"Seaside",description:"海辺の岩場でくつろぐ猫たちです。手前の猫の凛とした横顔にピントを合わせつつ、背景にボケたもう1匹を配置することで、彼らの関係性やその場の空間の広がりを感じさせます。日向ぼっこの暖かさと潮風の香り、そして猫たちの自由な時間が流れる癒やしの一枚です。"},{id:10,title:"都市の幾何学",category:"Cityscape",image:qI,height:"h-96",date:"2025.01",equipment:"LUMIX S5",location:"Tokyo",description:"窓枠越しに見る高層ビル群の風景です。中央の鋭角的なガラス張りのビルが周囲の直方体のビルと対比をなし、都会ならではの無機質でクールな美しさを放っています。窓枠が視線を中央に集める効果的なガイドラインになっています。"},{id:11,title:"夢幻の泡（あぶく）",category:"Portrait",image:YI,height:"h-72",date:"2025.03",equipment:"LUMIX S5",location:"Night",description:"夜の闇の中でシャボン玉を吹く横顔を捉えています。わずかな光を受けて虹色に輝くシャボン玉の儚さと、それを見つめる表情が相まって、夢の中にいるようなファンタジックな世界観を作り出しています。フィルム写真のような質感が魅力的です。"},{id:12,title:"蒼き瞬間の飛翔",category:"Nature",image:$I,height:"h-64",date:"2024.07",equipment:"LUMIX S5",location:"Mt. Fuji",description:"雄大な富士山と波打つ海、そしてその上を飛ぶ一羽の鳥。全体を包むブルーの色調が、静謐さと神々しさを演出しています。自然の「静（山）」と「動（波・鳥）」が一つの画面に収められた、絵画のように美しい瞬間です。"},{id:13,title:"秋色を駆ける",category:"Cityscape",image:KI,height:"h-[450px]",date:"2024.08",equipment:"LUMIX S5",location:"Rural",description:"手前のススキを前ボケとして大きく配置し、その隙間から走ってくる赤い電車を捉えています。黄金色のススキが秋の深まりを感じさせ、電車の赤色が画面を引き締める良いアクセントになっています。旅への憧れを掻き立てるような情緒的な一枚です。"},{id:14,title:"雨降る交差点のアート",category:"Cityscape",image:ZI,height:"h-80",date:"2024.12",equipment:"LUMIX S5",location:"Shibuya",description:"雨に濡れたアスファルトの黒と横断歩道の白、そこに咲く色とりどりの傘の花。俯瞰で撮影することで、日常の風景がまるでグラフィックアートやジオラマのように見えます。雨の日ならではの湿り気と、色彩のリズムが楽しい作品です。"},{id:15,title:"黄昏の展望台",category:"Cityscape",image:QI,height:"h-64",date:"2025.04",equipment:"LUMIX S5",location:"Observatory",description:"夕暮れ時の空と街の灯りを見つめる二人のシルエット。窓の外には美しいグラデーションの空とビルの明かりが広がり、これから夜が始まる街のときめきと、二人の静かな時間が共有されている様子が伝わります。"},{id:16,title:"夕焼けの巨人たち",category:"Nature",image:JI,height:"h-80",date:"2025.02",equipment:"LUMIX S5",location:"Wind Farm",description:"燃えるようなオレンジ色の夕空と重厚な雲をバックに、風力発電の風車がシルエットとなって並んでいます。自然の力強さと、人工物の無機質な造形が融合し、どこかSF映画のワンシーンや終末世界を思わせるドラマチックな迫力があります。"},{id:17,title:"路地裏の灯り",category:"Cityscape",image:eU,height:"h-96",date:"2024.11",equipment:"LUMIX S5",location:"Alley",description:"飲み屋街の看板が連なる、夜の路地裏の風景です。「スナック」や「おむすび」といった文字が放つ光が、暗闇にぼんやりと浮かび上がり、昭和レトロでノスタルジックな雰囲気を醸し出しています。大人の隠れ家へ誘われるような、独特の空気感があります。"},{id:18,title:"日本の春、ここにあり",category:"Nature",image:tU,height:"h-64",date:"2025.01",equipment:"LUMIX S5",location:"Yamanashi",description:"五重塔、満開の桜、そして雪を冠した富士山。日本を象徴する要素が凝縮された、圧倒的な絶景です。塔の朱色と空の青、桜の淡いピンクの色彩バランスが絶妙で、春の訪れの喜びと日本の伝統美がダイレクトに伝わってきます。"},{id:19,title:"紫のカーテン",category:"Nature",image:nU,height:"h-[500px]",date:"2025.03",equipment:"LUMIX S5",location:"Park",description:"ライトアップされた巨大な藤棚が、まるで紫色の光の雨のように降り注ぐ幻想的な光景です。太くうねる古木の幹の質感と、繊細な藤の花の対比が美しく、夜の闇に浮かび上がるその姿には神秘的な生命力が宿っています。"},{id:20,title:"古都の静寂",category:"Cityscape",image:iU,height:"h-72",date:"2024.10",equipment:"LUMIX S5",location:"Kyoto",description:"京都の八坂の塔（法観寺）を見上げる夜の坂道です。暖色の街灯が石畳や木造の建物を柔らかく照らし、人通りのない静けさが、千年の都の歴史と風情を際立たせています。しっとりとした夜の空気が肌に伝わってくるようです。"},{id:21,title:"巨大な架け橋の下で",category:"Cityscape",image:rU,height:"h-64",date:"2024.11",equipment:"LUMIX S5",location:"Bridge",description:"圧倒的なスケールの吊り橋（明石海峡大橋でしょうか）を見上げるアングルで捉えています。空と海の深い青を背景に、幾何学的な鉄骨の白さが映え、その下を行くカラフルな船がアクセントになっています。構造物の巨大さと、夏の日の爽快感が伝わる一枚です。"},{id:22,title:"都会の残像（アフターイメージ）",category:"Portrait",image:sU,height:"h-80",date:"2025.04",equipment:"LUMIX S5",location:"Tokyo",description:"バケットハットにサングラス姿の男性を捉えたシネマティックなポートレートです。背景を流れる電車の赤い光がブレて写ることで、都会のスピード感と雑踏の喧騒を表現しています。被写体の冷静な表情と、背景の動的な光の対比がクールです。"},{id:23,title:"家路を照らす陽",category:"Cityscape",image:oU,height:"h-[450px]",date:"2024.08",equipment:"LUMIX S5",location:"City",description:"山並みに沈みゆく夕日が、街全体と道路を黄金色に染めています。逆光の中を走る一台の白い軽自動車が、日々の営みや「家路」というストーリーを感じさせます。広大な風景の中に日常の温かさが同居する、叙情的な風景写真です。"},{id:24,title:"海への拱門（アーチ）",category:"Nature",image:aU,height:"h-64",date:"2025.02",equipment:"LUMIX S5",location:"Seaside",description:"建物のアーチを額縁（フレーム）として使い、向こう側に広がる青い海と空を切り取った一枚です。手前のシルエットが生み出す暗がりと、海の鮮やかな青のコントラストが素晴らしく、まるでその先に別世界が広がっているような開放感と夏の日差しを感じさせます。"},{id:25,title:"ガラス越しの祈り",category:"Cityscape",image:lU,height:"h-96",date:"2024.06",equipment:"LUMIX S5",location:"Amakusa",description:"日本の伝統的な木造家屋のガラス戸に、ゴシック様式の教会の尖塔が反射して映り込んでいます（天草の崎津教会などを連想させます）。「和」の格子と「洋」の祈りの場が重なり合う、歴史的背景と不思議な調和を感じさせる知的な構図です。"},{id:26,title:"絶景を分かち合う",category:"Portrait",image:cU,height:"h-72",date:"2024.12",equipment:"LUMIX S5",location:"Shrine",description:"眼下に広がる瀬戸内の島々（あるいは海）を見下ろす高台の神社での一コマです。石造りの鳥居が風景を切り取るフレームとなり、その傍らで談笑したりスマホを覗き込んだりする友人たちの姿から、旅の楽しさと開放感が伝わってきます。"},{id:27,title:"東京ナイト・ゲイズ",category:"Portrait",image:uU,height:"h-80",date:"2025.01",equipment:"LUMIX S5",location:"Tokyo",description:"煌びやかな東京の夜景をバックに、窓辺に佇む人物のポートレートです。背景には東京タワーの赤い光や無数のビルの明かりがボケて広がり、都会的な洗練された雰囲気を作り出しています。被写体のアンニュイな表情が街の光とマッチしています。"},{id:28,title:"湯けむりとピースサイン",category:"Portrait",image:fU,height:"h-64",date:"2024.09",equipment:"LUMIX S5",location:"Kusatsu",description:"夜の草津温泉・湯畑の前で、湯気とイルミネーションをバックに集まった友人たちの集合写真です。みんなの笑顔とポーズから、旅のハイライトとも言える高揚感が伝わってきます。冬の寒さと温泉の温かさのコントラストが楽しい一枚です。"},{id:29,title:"豪快！湯もみショー",category:"Commercial",image:dU,height:"h-[500px]",date:"2025.03",equipment:"LUMIX S5",location:"Kusatsu",description:"草津温泉の名物「湯もみ」の瞬間を捉えた迫力ある一枚です。揃いの衣装をまとった女性たちが板を操り、お湯が高くしぶきを上げて舞っています。立ち込める湯気と暖色の照明が、温泉街特有の熱気と伝統の重みを感じさせます。"},{id:30,title:"夏夜の輝き",category:"Nature",image:hU,height:"h-72",date:"2025.02",equipment:"LUMIX S5",location:"Summer",description:"地面で激しく火花を散らす噴出花火と、それを見守る若者たち。夜の闇に広がるオレンジ色の光と煙が、夏休みの終わりのような少し切なくも楽しい「青春」の空気を醸し出しています。火薬の匂いまで漂ってきそうな臨場感です。"},{id:31,title:"赤レンガを背負って",category:"Portrait",image:pU,height:"h-64",date:"2024.11",equipment:"LUMIX S5",location:"Tokyo Station",description:"東京駅丸の内駅舎の重厚な赤レンガを背景に、自信に満ちた表情で立つ男性のポートレートです。背景の左右対称（シンメトリー）な建築美と、行き交う人々を適度にぼかすことで、主役の存在感を際立たせています。旅の始まり、あるいは記念すべき瞬間を感じさせます。"},{id:32,title:"夕凪（ゆうなぎ）のシルエット",category:"Nature",image:mU,height:"h-80",date:"2025.04",equipment:"LUMIX S5",location:"Harbor",description:"黄金色に染まる夕暮れの港町。逆光によってシルエットとなった漁船と、水面に映る太陽の光の帯（サンロード）が美しいコントラストを描いています。一日の漁を終えた船が休んでいるような、穏やかでノスタルジックな時間が流れています。"},{id:33,title:"ファインダー越しの秋",category:"Portrait",image:xU,height:"h-96",date:"2025.04",equipment:"LUMIX S5",location:"Field",description:"背丈ほどあるススキ（または枯草）の中に立ち、カメラを構える横顔を捉えています。手前の草を大きく前ボケにすることで、被写体への視線誘導と、その場の奥行き感を演出しています。撮影に没頭するクリエイターの静かな熱量を感じるポートレートです。"},{id:34,title:"光の海への眼差し",category:"Portrait",image:gU,height:"h-[450px]",date:"2024.10",equipment:"LUMIX S5",location:"Sea",description:"海面が太陽の光でキラキラと輝く中、その光景を見つめる人物のシルエット。逆光が生み出す明暗のドラマが印象的です。人物が手で作った「ひさし」の仕草が、眩しさと共に、その先にある何かを懸命に見つめようとする意志を感じさせます。"},{id:35,title:"丸窓が切り取る日常",category:"Cityscape",image:vU,height:"h-64",date:"2024.08",equipment:"LUMIX S5",location:"Street",description:"壁の丸い開口部をレンズやフレームに見立て、夜の通りの一瞬を切り取ったユニークな構図です。お店の温かい明かりと、そこを横切るスクーターの疾走感。静止したフレームの中で動く街の鼓動を感じさせる、ストリートスナップの面白さが詰まっています。"},{id:36,title:"海風に吹かれて",category:"Portrait",image:_U,height:"h-72",date:"2025.05",equipment:"LUMIX S5",location:"Rock",description:"荒々しい岩場に立ち、遠くの海を見つめる男性。背景には白波が立つ深い青色の海が広がり、風の強さと自然の雄大さを感じさせます。岩のゴツゴツとした質感と、人物の立ち姿が相まって、冒険映画のワンシーンのような力強さがあります。"}],SU=[{title:"Standard Plan",price:"¥2,000~",description:`プロフィール写真、宣材写真、記念写真など。
高品質なポートレートを手軽に。`,features:["撮影時間: 1時間","納品枚数: 30カット","オンライン納品","レタッチ済み"]},{title:"Wedding / Event",price:"¥10,000~",description:`結婚式、パーティー、イベント撮影。
物語性のあるドキュメンタリースタイルで。`,features:["撮影時間: 4時間〜","納品枚数: 300カット〜","フォトブック作成可","全データ補正"]},{title:"Commercial",price:"Ask",description:`広告、商品、建築、ブランドビジュアル。
ディレクションから納品までトータルサポート。`,features:["事前打ち合わせ","モデル・スタジオ手配","高度なレタッチ","著作権譲渡可"]}],MU=[{q:"納品までの期間はどのくらいですか？",a:"通常、撮影日から2週間程度いただいております。お急ぎの場合はオプションにて対応可能です。"},{q:"撮影場所の指定は可能ですか？",a:"はい、可能です。東京都内であれば出張費は無料ですが、遠方の場合は別途交通費を頂戴しております。"},{q:"衣装やメイクの手配はできますか？",a:"提携しているスタイリスト、ヘアメイクアップアーティストをご紹介可能です（別途費用）。"},{q:"雨天の場合はどうなりますか？",a:"屋内の場合は決行いたします。屋外撮影の場合は、前日の天気予報で判断し、日程変更を無料で承ります。"}],EU=({onSelectWork:t})=>{const[e,n]=oe.useState("All"),i=e==="All"?av:av.filter(r=>r.category===e);return y.jsxs("div",{className:"py-20 px-6 container mx-auto",children:[y.jsx(Bi,{children:y.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-end mb-16 gap-8",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-5xl md:text-6xl font-serif text-white mb-4",children:"Works"}),y.jsx("p",{className:"text-zinc-500 text-sm tracking-[0.2em]",children:"Selected Portfolio 2024-2025"})]}),y.jsx("div",{className:"flex flex-wrap gap-4",children:["All","Portrait","Cityscape","Nature","Commercial"].map(r=>y.jsx("button",{onClick:()=>n(r),className:`text-xs uppercase tracking-wider px-3 py-1 border transition-all duration-300 ${e===r?"border-white text-white":"border-transparent text-zinc-600 hover:text-zinc-400"}`,children:r},r))})]})}),y.jsx("div",{className:"columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8",children:i.map((r,s)=>y.jsx(Bi,{delay:s*100,className:"break-inside-avoid",children:y.jsx("div",{onClick:()=>t(r),children:y.jsx(OI,{className:"group cursor-pointer relative",children:y.jsxs("div",{className:"w-full relative overflow-hidden rounded-sm",children:[y.jsx("img",{src:r.image,alt:r.title,className:"w-full object-cover transition-transform duration-700 group-hover:scale-110",style:{aspectRatio:"auto"},loading:"lazy"}),y.jsx("div",{className:"absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"}),y.jsxs("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",children:[y.jsx("span",{className:"text-xs text-zinc-400 uppercase tracking-widest mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300",children:r.category}),y.jsx("h3",{className:"text-xl font-serif text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75",children:r.title})]})]})})})},r.id))})]})},TU=({title:t,subtitle:e})=>y.jsxs("div",{className:"text-center mb-16",children:[y.jsx("h2",{className:"text-5xl md:text-6xl font-serif text-white mb-4",children:t}),y.jsx("p",{className:"text-zinc-500 text-sm tracking-[0.2em] uppercase",children:e})]}),wU=({q:t,a:e})=>{const[n,i]=oe.useState(!1);return y.jsxs("div",{className:"border-b border-zinc-800",children:[y.jsxs("button",{onClick:()=>i(!n),className:"w-full py-6 flex justify-between items-center text-left hover:text-white transition-colors group",children:[y.jsx("span",{className:`text-lg font-light ${n?"text-white":"text-zinc-400"}`,children:t}),y.jsx(rT,{size:20,className:`text-zinc-600 transition-transform duration-300 ${n?"rotate-45 text-white":""}`})]}),y.jsx("div",{className:`overflow-hidden transition-all duration-300 ${n?"max-h-40 opacity-100 mb-6":"max-h-0 opacity-0"}`,children:y.jsx("p",{className:"text-zinc-500 text-sm leading-relaxed pr-8 pl-4 border-l border-zinc-800 ml-1",children:e})})]})},bU=({onNavigate:t})=>y.jsxs("div",{className:"py-20 px-6 container mx-auto max-w-5xl",children:[y.jsx(Bi,{children:y.jsx(TU,{title:"Service",subtitle:"撮影プラン・料金"})}),y.jsx("div",{className:"grid md:grid-cols-3 gap-6 mb-32",children:SU.map((e,n)=>y.jsx(Bi,{delay:n*150,className:"h-full",children:y.jsxs("div",{className:"relative p-8 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500 flex flex-col h-full group bg-zinc-900/30 backdrop-blur-sm",children:[y.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent -z-10 group-hover:from-white/10 transition-colors"}),y.jsx("h3",{className:"text-xl font-serif text-white mb-4",children:e.title}),y.jsx("div",{className:"text-2xl font-light text-zinc-200 mb-6",children:e.price}),y.jsx("p",{className:"text-zinc-400 text-sm leading-relaxed mb-8 whitespace-pre-line flex-grow",children:e.description}),y.jsx("ul",{className:"space-y-3 pt-6 border-t border-zinc-800",children:e.features.map((i,r)=>y.jsxs("li",{className:"text-zinc-500 text-xs flex items-center gap-2",children:[y.jsx("div",{className:"w-1 h-1 bg-zinc-400 rounded-full"}),i]},r))}),y.jsx("button",{onClick:()=>t("contact"),className:"mt-8 w-full py-3 border border-zinc-700 text-zinc-400 text-xs tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300",children:"BOOK NOW"})]})},n))}),y.jsx(Bi,{delay:400,children:y.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-serif text-white mb-8",children:"FAQ"}),y.jsx("p",{className:"text-zinc-500 text-sm mb-8",children:"よくいただくご質問をまとめました。"})]}),y.jsx("div",{children:MU.map((e,n)=>y.jsx(wU,{q:e.q,a:e.a},n))})]})})]}),AU=({onSelectNews:t})=>y.jsxs("div",{className:"py-20 px-6 container mx-auto max-w-4xl",children:[y.jsx(Bi,{children:y.jsxs("div",{className:"flex items-end gap-6 mb-20 border-b border-zinc-800 pb-8",children:[y.jsx("h2",{className:"text-5xl font-serif text-white",children:"News"}),y.jsx("span",{className:"text-zinc-500 text-sm tracking-widest pb-2",children:"/ ARCHIVE"})]})}),y.jsx("div",{className:"space-y-0",children:yU.map((e,n)=>y.jsx(Bi,{delay:n*100,children:y.jsx("div",{onClick:()=>t(e),className:"group relative border-b border-zinc-800 py-10 cursor-pointer hover:bg-zinc-900/30 transition-colors duration-500",children:y.jsxs("div",{className:"flex flex-col md:flex-row md:items-baseline gap-6 relative z-10 px-4",children:[y.jsx("div",{className:"w-32 flex-shrink-0",children:y.jsx("span",{className:"text-xs font-mono text-zinc-500 group-hover:text-white transition-colors",children:e.date})}),y.jsxs("div",{className:"flex-grow",children:[y.jsx("div",{className:"flex items-center gap-4 mb-2",children:y.jsx("span",{className:"text-[10px] uppercase tracking-wider border border-zinc-800 text-zinc-500 px-2 py-0.5 rounded-full group-hover:border-zinc-600 transition-colors",children:e.category})}),y.jsx("h3",{className:"text-2xl font-serif text-zinc-300 group-hover:text-white transition-colors duration-300",children:e.title}),y.jsx("p",{className:"text-zinc-500 text-sm mt-4 line-clamp-2 md:w-2/3 group-hover:text-zinc-400 transition-colors",children:e.content})]}),y.jsx("div",{className:"hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300",children:y.jsx("div",{className:"w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center",children:y.jsx(LE,{size:16,className:"text-white"})})})]})})},e.id))})]}),CU=()=>{const[t,e]=oe.useState(!1),n=oe.useRef(null),i=()=>{e(!0)};return y.jsx("div",{className:"py-20 px-6 container mx-auto max-w-6xl",children:y.jsxs("div",{className:"grid md:grid-cols-2 gap-20",children:[y.jsx(Bi,{children:y.jsxs("div",{children:[y.jsx("h2",{className:"text-5xl font-serif text-white mb-8",children:"Contact"}),y.jsxs("p",{className:"text-zinc-400 text-sm leading-loose mb-12",children:["撮影のご依頼、お見積もり、その他ご質問など",y.jsx("br",{}),"お気軽にお問い合わせください。",y.jsx("br",{}),"3営業日以内に返信いたします。"]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center gap-4 text-zinc-400",children:[y.jsx(YE,{className:"text-zinc-600"}),y.jsx("span",{children:"onodera00.biz@gmail.com"})]}),y.jsxs("div",{className:"flex items-center gap-4 text-zinc-400",children:[y.jsx(QE,{className:"text-zinc-600"}),y.jsx("span",{children:"Tokyo, Japan"})]}),y.jsxs("div",{className:"pt-8 flex gap-6",children:[y.jsx("a",{href:"#",className:"text-zinc-600 hover:text-white transition-colors",children:y.jsx(XE,{size:24})}),y.jsx("a",{href:"#",className:"text-zinc-600 hover:text-white transition-colors",children:y.jsx(lT,{size:24})})]})]})]})}),y.jsx(Bi,{delay:200,children:y.jsxs("div",{className:"bg-zinc-900/20 p-8 md:p-12 border border-zinc-800 relative overflow-hidden",children:[t?y.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/90 text-center p-8 animate-fade-in",children:[y.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 text-emerald-500",children:y.jsx(kE,{size:32})}),y.jsx("h3",{className:"text-2xl font-serif text-white mb-4",children:"Message Sent"}),y.jsxs("p",{className:"text-zinc-400",children:["お問い合わせありがとうございます。",y.jsx("br",{}),"内容を確認の上、ご連絡させていただきます。"]}),y.jsx("button",{onClick:()=>e(!1),className:"mt-8 text-sm text-zinc-500 hover:text-white underline underline-offset-4",children:"新しいメッセージを送る"})]}):null,y.jsx("iframe",{name:"hidden_iframe",ref:n,style:{display:"none"},onLoad:()=>{}}),y.jsxs("form",{action:"https://docs.google.com/forms/d/e/1FAIpQLSfyXDmsjYkZDrut-Nylux9K1LZ7wYPuUzuz61kRpGnKyCWEgQ/formResponse",method:"POST",target:"hidden_iframe",onSubmit:i,className:`space-y-10 transition-opacity duration-500 ${t?"opacity-0 pointer-events-none":"opacity-100"}`,children:[y.jsxs("div",{className:"relative group",children:[y.jsx("input",{type:"text",name:"entry.92562121",id:"name",required:!0,className:"w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer",placeholder:" "}),y.jsxs("label",{htmlFor:"name",className:"absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text",children:["Name ",y.jsx("span",{className:"text-red-500",children:"*"})]})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("input",{type:"email",name:"entry.22789510",id:"email",required:!0,className:"w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer",placeholder:" "}),y.jsxs("label",{htmlFor:"email",className:"absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text",children:["Email ",y.jsx("span",{className:"text-red-500",children:"*"})]})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("input",{type:"tel",name:"entry.1257514426",id:"phone",required:!0,className:"w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer",placeholder:" "}),y.jsxs("label",{htmlFor:"phone",className:"absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text",children:["Phone ",y.jsx("span",{className:"text-red-500",children:"*"})]})]}),y.jsxs("div",{className:"relative group pt-4",children:[y.jsxs("label",{className:"block text-zinc-500 text-xs uppercase tracking-widest mb-4",children:["Response Method ",y.jsx("span",{className:"text-red-500",children:"*"})]}),y.jsxs("div",{className:"flex gap-8",children:[y.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group/radio",children:[y.jsx("input",{type:"radio",name:"entry.1862121208",value:"メール",required:!0,className:"peer hidden"}),y.jsx("div",{className:"w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-white peer-checked:bg-white transition-all relative"}),y.jsx("span",{className:"text-zinc-400 text-sm group-hover/radio:text-white transition-colors",children:"Email"})]}),y.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group/radio",children:[y.jsx("input",{type:"radio",name:"entry.1862121208",value:"電話",className:"peer hidden"}),y.jsx("div",{className:"w-4 h-4 rounded-full border border-zinc-600 peer-checked:border-white peer-checked:bg-white transition-all relative"}),y.jsx("span",{className:"text-zinc-400 text-sm group-hover/radio:text-white transition-colors",children:"Phone"})]})]})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("input",{type:"text",name:"entry.1607160016",id:"company",className:"w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer",placeholder:" "}),y.jsx("label",{htmlFor:"company",className:"absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text",children:"Company / Organization"})]}),y.jsxs("div",{className:"relative group",children:[y.jsx("textarea",{name:"entry.1236488825",id:"message",rows:4,required:!0,className:"w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors peer resize-none",placeholder:" "}),y.jsxs("label",{htmlFor:"message",className:"absolute left-0 top-3 text-zinc-500 text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text",children:["Message ",y.jsx("span",{className:"text-red-500",children:"*"})]})]}),y.jsx("button",{className:"w-full bg-white text-black py-4 font-medium tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-[1.01] duration-300",children:"SEND MESSAGE"})]})]})})]})})},RU=({onNavigate:t})=>{const e=[{icon:y.jsx(HE,{className:"w-6 h-6 text-purple-400"}),title:"Emotion",description:"被写体の内面にある感情や物語を、一瞬の表情から引き出します。"},{icon:y.jsx(bE,{className:"w-6 h-6 text-pink-400"}),title:"Light",description:"自然光と人工光を巧みに操り、ドラマチックで印象的な空間を演出します。"},{icon:y.jsx(WE,{className:"w-6 h-6 text-purple-400"}),title:"Moment",description:"二度と訪れない「その瞬間」を、永遠の記憶として定着させます。"}];return y.jsx("div",{className:"min-h-screen bg-black text-white pt-24 pb-20 px-6",children:y.jsxs("div",{className:"max-w-6xl mx-auto",children:[y.jsxs(Ft.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"mb-20 text-center",children:[y.jsx(Ba,{className:"w-16 h-16 mx-auto mb-6 text-purple-500 opacity-80"}),y.jsx("h1",{className:"text-4xl md:text-7xl font-serif font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 italic",children:"Photography"}),y.jsxs("p",{className:"text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light",children:["言葉にできない感情を、光と影で紡ぐ。",y.jsx("br",{}),"ポートレートから風景まで、心を揺さぶるビジュアルストーリーテリング。"]})]}),y.jsx("div",{className:"grid md:grid-cols-3 gap-12 mb-32",children:e.map((n,i)=>y.jsxs(Ft.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:i*.1},viewport:{once:!0},className:"text-center",children:[y.jsx("div",{className:"inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 mb-6 border border-purple-500/20",children:n.icon}),y.jsx("h3",{className:"text-2xl font-serif mb-4 text-purple-100",children:n.title}),y.jsx("p",{className:"text-zinc-400 leading-relaxed font-light",children:n.description})]},i))}),y.jsxs("div",{className:"mb-20",children:[y.jsx("h2",{className:"text-3xl font-serif mb-12 border-l-4 border-purple-500 pl-6 italic",children:"Featured Works"}),y.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[1,2,3,4,5,6].map(n=>y.jsxs("div",{className:`relative bg-zinc-800 rounded overflow-hidden group cursor-pointer ${n===2||n===5?"md:col-span-2":""} ${n%2===0?"h-64":"h-80"}`,children:[y.jsxs("div",{className:"absolute inset-0 flex items-center justify-center text-zinc-600",children:["Image ",n]}),y.jsx("div",{className:"absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"})]},n))})]}),y.jsx("div",{className:"text-center",children:y.jsx("button",{onClick:()=>t("contact"),className:"bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-sm font-serif tracking-widest transition-all hover:scale-105",children:"撮影を依頼する"})})]})})},PU=({onNavigate:t})=>{const e=oe.useRef(null),{scrollYProgress:n}=RI({target:e}),i=sv(n,[0,.2],[1,0]),r=sv(n,[0,.2],[1,.95]),s=[{id:"01",title:"Reconstructing Reality",subtitle:"AI Object Removal / Generative Fill",description:"写真は「引き算」の芸術だと言われます。AIによる生成塗りつぶし技術（Generative Fill）は、その引き算を極限まで精密にします。風景に紛れ込んだノイズを取り除き、私が心で見た「理想の景色」を忠実に再現する。それは改変ではなく、記憶の現像です。",icon:y.jsx(uT,{className:"w-6 h-6"}),image:"https://images.unsplash.com/photo-1518066000714-58c45f1a2c0a?q=80&w=2070&auto=format&fit=crop",color:"from-emerald-500/20 to-teal-500/20"},{id:"02",title:"Decoding Aesthetics",subtitle:"Style Analysis / Computer Vision",description:"なぜ、その写真は美しいのか。構図、色彩、光のバランス。AI画像解析アルゴリズムを用いて、名作と呼ばれる写真の構造を数値化・言語化します。感性をデータとして客観視することで、自身のスタイルをより深く理解し、意図的な表現へと昇華させます。",icon:y.jsx(BE,{className:"w-6 h-6"}),image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",color:"from-blue-500/20 to-indigo-500/20"},{id:"03",title:"Extended Perception",subtitle:"AI Gimbal / Autonomous Tracking",description:"機械の目は、人の身体性を拡張します。自律制御AIを搭載したジンバルシステムは、被写体の動きを予測し、人間には不可能な滑らかさと正確さで追従します。撮影者は操作から解放され、被写体との対話、そして「一瞬」を捉えることだけに集中できます。",icon:y.jsx(oT,{className:"w-6 h-6"}),image:"https://images.unsplash.com/photo-1535378437323-9555f3e7f667?q=80&w=1932&auto=format&fit=crop",color:"from-purple-500/20 to-pink-500/20"}];return y.jsxs("div",{ref:e,className:"min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30",children:[y.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[y.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"}),y.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow"}),y.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-400"})]}),y.jsxs("nav",{className:"fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference",children:[y.jsxs("button",{onClick:()=>t("home"),className:"group flex items-center gap-3 text-sm font-medium tracking-widest text-zinc-400 hover:text-white transition-colors",children:[y.jsx("div",{className:"p-2 border border-zinc-700 rounded-full group-hover:border-white transition-colors",children:y.jsx(PE,{size:14})}),y.jsx("span",{children:"HOME"})]}),y.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-zinc-500",children:[y.jsx(Rd,{size:12,className:"text-emerald-500"}),y.jsx("span",{children:"AI_MODULE_ACTIVE"})]})]}),y.jsxs(Ft.section,{style:{opacity:i,scale:r},className:"h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 z-0 opacity-30",children:y.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",preserveAspectRatio:"none",children:[y.jsx(Ft.path,{d:"M0,50 Q25,40 50,50 T100,50",stroke:"rgba(16, 185, 129, 0.2)",strokeWidth:"0.5",fill:"none",animate:{d:["M0,50 Q25,40 50,50 T100,50","M0,50 Q25,60 50,50 T100,50","M0,50 Q25,40 50,50 T100,50"]},transition:{duration:10,repeat:1/0,ease:"linear"}}),y.jsx(Ft.path,{d:"M0,50 Q25,30 50,50 T100,50",stroke:"rgba(59, 130, 246, 0.2)",strokeWidth:"0.5",fill:"none",animate:{d:["M0,50 Q25,30 50,50 T100,50","M0,50 Q25,70 50,50 T100,50","M0,50 Q25,30 50,50 T100,50"]},transition:{duration:15,repeat:1/0,ease:"linear"}})]})}),y.jsx("div",{className:"relative z-10 text-center max-w-4xl mx-auto",children:y.jsxs(Ft.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[y.jsxs("h1",{className:"text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8",children:[y.jsx("span",{className:"block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200",children:"Co-Creation"}),y.jsx("span",{className:"block text-4xl md:text-6xl font-light italic text-zinc-400 mt-2",children:"with Intelligence"})]}),y.jsxs("p",{className:"text-sm md:text-base text-zinc-500 font-mono tracking-wider max-w-lg mx-auto leading-relaxed",children:["> INTEGRATING_NEURAL_NETWORKS",y.jsx("br",{}),"> EXPANDING_CREATIVE_BOUNDARIES"]})]})}),y.jsxs(Ft.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1,duration:1},className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4",children:[y.jsx("div",{className:"w-[1px] h-16 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-pulse"}),y.jsx("span",{className:"text-[10px] tracking-[0.3em] text-emerald-500/60 uppercase",children:"Explore Projects"})]})]}),y.jsx("div",{className:"relative z-10 pb-40",children:s.map((o,a)=>y.jsx("section",{className:"min-h-screen flex items-center py-20 px-6 md:px-12 sticky top-0 bg-zinc-950/90 backdrop-blur-sm border-t border-white/5",children:y.jsxs("div",{className:"max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center",children:[y.jsx(Ft.div,{initial:{opacity:0,x:-50,filter:"blur(10px)"},whileInView:{opacity:1,x:0,filter:"blur(0px)"},transition:{duration:.8,ease:"easeOut"},viewport:{once:!0,margin:"-10%"},className:`order-2 ${a%2===0?"md:order-2":"md:order-1"} relative group`,children:y.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden rounded-sm",children:[y.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${o.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay`}),y.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"}),y.jsx("div",{className:"absolute bottom-4 left-4 z-20 flex items-center gap-2",children:y.jsxs("div",{className:"px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400",children:["IMG_0",a+1,".RAW"]})}),y.jsxs("div",{className:"absolute inset-0 border border-white/10 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[y.jsx("div",{className:"absolute top-0 left-0 w-4 h-4 border-t border-l border-emerald-500"}),y.jsx("div",{className:"absolute top-0 right-0 w-4 h-4 border-t border-r border-emerald-500"}),y.jsx("div",{className:"absolute bottom-0 left-0 w-4 h-4 border-b border-l border-emerald-500"}),y.jsx("div",{className:"absolute bottom-0 right-0 w-4 h-4 border-b border-r border-emerald-500"})]})]})}),y.jsx("div",{className:`order-1 ${a%2===0?"md:order-1":"md:order-2"} space-y-8`,children:y.jsxs(Ft.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[y.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[y.jsx("span",{className:"text-4xl font-serif text-white/10 font-bold",children:o.id}),y.jsx("div",{className:"h-[1px] flex-1 bg-white/10"}),y.jsx("div",{className:"text-zinc-500",children:o.icon})]}),y.jsx("h2",{className:"text-3xl md:text-5xl font-serif font-medium text-white mb-4",children:o.title}),y.jsx("p",{className:"text-emerald-500 text-xs md:text-sm tracking-[0.2em] uppercase mb-8 font-mono",children:o.subtitle}),y.jsx("p",{className:"text-zinc-400 leading-loose font-light text-base md:text-lg",children:o.description}),y.jsx("div",{className:"pt-8",children:y.jsxs("button",{className:"text-xs tracking-widest uppercase text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group",children:[y.jsx("span",{children:"View Details"}),y.jsx("div",{className:"w-8 h-[1px] bg-zinc-700 group-hover:bg-white transition-colors"})]})})]})})]})},o.id))}),y.jsx("section",{className:"py-32 px-6 text-center border-t border-white/5 bg-zinc-950 relative overflow-hidden",children:y.jsxs("div",{className:"max-w-2xl mx-auto relative z-10",children:[y.jsx(Rd,{className:"w-12 h-12 mx-auto mb-8 text-zinc-800",strokeWidth:1}),y.jsxs("p",{className:"text-zinc-500 leading-relaxed font-serif italic text-xl",children:['"AI is not about replacing the artist,',y.jsx("br",{}),`it's about unleashing the imagination."`]})]})})]})},DU=({work:t,onClose:e})=>t?y.jsxs("div",{className:"fixed inset-0 z-[60] bg-zinc-950/95 flex items-center justify-center p-4 md:p-12 animate-fade-in",onClick:e,children:[y.jsx("button",{onClick:e,className:"absolute top-6 right-6 text-white hover:rotate-90 transition-transform duration-300",children:y.jsx(Fp,{size:32})}),y.jsxs("div",{className:"flex flex-col md:flex-row gap-12 max-w-7xl w-full h-full md:h-auto items-center justify-center",onClick:n=>n.stopPropagation(),children:[y.jsx("div",{className:"w-full md:w-auto max-w-[65%] h-auto max-h-[85vh] relative shadow-2xl overflow-hidden rounded-sm group flex items-center justify-center bg-black/50",children:y.jsx("img",{src:t.image,alt:t.title,className:"w-auto h-auto max-w-full max-h-[85vh] object-contain"})}),y.jsxs("div",{className:"w-full md:w-1/3 text-white space-y-8 animate-fade-in-up overflow-y-auto max-h-[80vh]",children:[y.jsxs("div",{children:[y.jsx("p",{className:"text-zinc-500 text-sm tracking-widest uppercase mb-2",children:t.category}),y.jsx("h2",{className:"text-4xl md:text-5xl font-serif mb-6",children:t.title}),y.jsx("p",{className:"text-zinc-400 leading-relaxed font-light",children:t.description})]}),y.jsxs("div",{className:"border-t border-zinc-800 pt-8 space-y-4 text-sm font-mono text-zinc-500",children:[y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsxs("span",{className:"flex items-center gap-2",children:[y.jsx(UE,{size:14})," Date"]})," ",y.jsx("span",{className:"text-zinc-300",children:t.date})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsxs("span",{className:"flex items-center gap-2",children:[y.jsx(Ba,{size:14})," Gear"]})," ",y.jsx("span",{className:"text-zinc-300",children:t.equipment})]}),y.jsxs("div",{className:"flex justify-between items-center",children:[y.jsxs("span",{className:"flex items-center gap-2",children:[y.jsx(KE,{size:14})," Location"]})," ",y.jsx("span",{className:"text-zinc-300",children:t.location})]})]})]})]})]}):null,LU=({news:t,onClose:e})=>t?y.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all animate-fade-in",onClick:e,children:y.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 w-full max-w-lg p-8 rounded-sm relative",onClick:n=>n.stopPropagation(),children:[y.jsx("button",{onClick:e,className:"absolute top-4 right-4 text-zinc-500 hover:text-white",children:y.jsx(Fp,{})}),y.jsx("span",{className:"text-xs text-zinc-500 border border-zinc-800 px-2 py-1 rounded mb-4 inline-block",children:t.category}),y.jsx("div",{className:"text-sm font-mono text-zinc-500 mb-2",children:t.date}),y.jsx("h3",{className:"text-2xl font-serif text-white mb-6",children:t.title}),y.jsx("p",{className:"text-zinc-300 text-sm leading-loose whitespace-pre-wrap",children:t.content})]})}):null;function NU(){const[t,e]=oe.useState("home"),[n,i]=oe.useState(null),[r,s]=oe.useState(null);return oe.useEffect(()=>{window.scrollTo(0,0)},[t]),y.jsx(gE,{children:y.jsxs("div",{className:"min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-white selection:text-black overflow-x-hidden",children:[t!=="home"&&y.jsx(vE,{}),y.jsx(_E,{}),y.jsx(pT,{currentPage:t,onNavigate:e}),y.jsxs("main",{className:"pt-20 min-h-screen relative z-10",children:[t==="home"&&y.jsx(FI,{onNavigate:e}),t==="works"&&y.jsx(EU,{onSelectWork:s}),t==="service"&&y.jsx(bU,{onNavigate:e}),t==="news"&&y.jsx(AU,{onSelectNews:i}),t==="contact"&&y.jsx(CU,{}),t==="photographer"&&y.jsx(RU,{onNavigate:e}),t==="ai-photographer"&&y.jsx(PU,{onNavigate:e})]}),t!=="home"&&y.jsx(mT,{onNavigate:e}),y.jsx(DU,{work:r,onClose:()=>s(null)}),y.jsx(LU,{news:n,onClose:()=>i(null)}),y.jsx("style",{children:`
          @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
          @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
          .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
          .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
          .bg-noise { background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E"); }
          .perspective-1000 { perspective: 1000px; }
          .transform-gpu { transform: translate3d(0,0,0); }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #09090b; }
          ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: #3f3f46; }
        `})]})})}Ff.createRoot(document.getElementById("root")).render(y.jsx(vv.StrictMode,{children:y.jsx(NU,{})}));
