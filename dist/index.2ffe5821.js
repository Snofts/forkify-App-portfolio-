var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v,g,m,y=globalThis;function _(e){return e&&e.__esModule?e.default:e}var b={},w={},k=function(e){return e&&e.Math===Math&&e};w=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||k("object"==typeof self&&self)||k("object"==typeof y&&y)||k("object"==typeof w&&w)||function(){return this}()||Function("return this")();var E={},S={};E=!(S=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},O={};O=!S(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var j=Function.prototype.call;$=O?j.bind(j):function(){return j.apply(j,arguments)};var F={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;o=L&&!F.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:F;var M={};M=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var x={},P={},T={},A=Function.prototype,q=A.call,N=O&&A.bind.bind(q,q),H={},I=(T=O?N:function(e){return function(){return q.apply(e,arguments)}})({}.toString),C=T("".slice);H=function(e){return C(I(e),8,-1)};var D=Object,R=T("".split);P=S(function(){return!D("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?R(e,""):D(e)}:D;var W={},z={};z=function(e){return null==e};var U=TypeError;W=function(e){if(z(e))throw new U("Can't call method on "+e);return e},x=function(e){return P(W(e))};var B={},G={},J={},V={},Y="object"==typeof document&&document.all;V=void 0===Y&&void 0!==Y?function(e){return"function"==typeof e||e===Y}:function(e){return"function"==typeof e},J=function(e){return"object"==typeof e?null!==e:V(e)};var Q={},K={};K=function(e,t){var r;return arguments.length<2?(r=w[e],V(r)?r:void 0):w[e]&&w[e][t]};var X={};X=T({}.isPrototypeOf);var Z={},ee={},et={},er={},en=w.navigator,ei=en&&en.userAgent;er=ei?String(ei):"";var eo=w.process,ea=w.Deno,es=eo&&eo.versions||ea&&ea.version,ec=es&&es.v8;ec&&(s=(a=ec.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&er&&(!(a=er.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=er.match(/Chrome\/(\d+)/))&&(s=+a[1]),et=s;var eu=w.String;Z=(ee=!!Object.getOwnPropertySymbols&&!S(function(){var e=Symbol("symbol detection");return!eu(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&et&&et<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var el=Object;Q=Z?function(e){return"symbol"==typeof e}:function(e){var t=K("Symbol");return V(t)&&X(t.prototype,el(e))};var ed={},ef={},ep={},eh=String;ep=function(e){try{return eh(e)}catch(e){return"Object"}};var ev=TypeError;ef=function(e){if(V(e))return e;throw new ev(ep(e)+" is not a function")},ed=function(e,t){var r=e[t];return z(r)?void 0:ef(r)};var eg={},em=TypeError;eg=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!J(n=$(r,e))||V(r=e.valueOf)&&!J(n=$(r,e))||"string"!==t&&V(r=e.toString)&&!J(n=$(r,e)))return n;throw new em("Can't convert object to primitive value")};var ey={},e_={},eb={};eb=!1;var ew={},ek=Object.defineProperty;ew=function(e,t){try{ek(w,e,{value:t,configurable:!0,writable:!0})}catch(r){w[e]=t}return t};var eE="__core-js_shared__",eS=e_=w[eE]||ew(eE,{});(eS.versions||(eS.versions=[])).push({version:"3.38.1",mode:eb?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),ey=function(e,t){return e_[e]||(e_[e]=t||{})};var e$={},eO={},ej=Object;eO=function(e){return ej(W(e))};var eF=T({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eF(eO(e),t)};var eL={},eM=0,ex=Math.random(),eP=T(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eP(++eM+ex,36)};var eT=w.Symbol,eA=ey("wks"),eq=Z?eT.for||eT:eT&&eT.withoutSetter||eL,eN=TypeError,eH=(e$(eA,e="toPrimitive")||(eA[e]=ee&&e$(eT,e)?eT[e]:eq("Symbol."+e)),eA[e]);G=function(e,t){if(!J(e)||Q(e))return e;var r,n=ed(e,eH);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!J(r)||Q(r))return r;throw new eN("Can't convert object to primitive value")}return void 0===t&&(t="number"),eg(e,t)},B=function(e){var t=G(e,"string");return Q(t)?t:t+""};var eI={},eC={},eD=w.document,eR=J(eD)&&J(eD.createElement);eC=function(e){return eR?eD.createElement(e):{}},eI=!E&&!S(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eW=Object.getOwnPropertyDescriptor;i=E?eW:function(e,t){if(e=x(e),t=B(t),eI)try{return eW(e,t)}catch(e){}if(e$(e,t))return M(!$(o,e,t),e[t])};var ez={},eU={};eU=E&&S(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eB={},eG=String,eJ=TypeError;eB=function(e){if(J(e))return e;throw new eJ(eG(e)+" is not an object")};var eV=TypeError,eY=Object.defineProperty,eQ=Object.getOwnPropertyDescriptor,eK="enumerable",eX="configurable",eZ="writable";c=E?eU?function(e,t,r){if(eB(e),t=B(t),eB(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eZ in r&&!r[eZ]){var n=eQ(e,t);n&&n[eZ]&&(e[t]=r.value,r={configurable:eX in r?r[eX]:n[eX],enumerable:eK in r?r[eK]:n[eK],writable:!1})}return eY(e,t,r)}:eY:function(e,t,r){if(eB(e),t=B(t),eB(r),eI)try{return eY(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=E?function(e,t,r){return c(e,t,M(1,r))}:function(e,t,r){return e[t]=r,e};var e0={},e1={},e2=Function.prototype,e4=E&&Object.getOwnPropertyDescriptor,e3=e$(e2,"name")&&(!E||E&&e4(e2,"name").configurable),e8={},e9=T(Function.toString);V(e_.inspectSource)||(e_.inspectSource=function(e){return e9(e)}),e8=e_.inspectSource;var e5={},e6={},e7=w.WeakMap;e6=V(e7)&&/native code/.test(String(e7));var te={},tt=ey("keys");te=function(e){return tt[e]||(tt[e]=eL(e))};var tr={};tr={};var tn="Object already initialized",ti=w.TypeError,to=w.WeakMap;if(e6||e_.state){var ta=e_.state||(e_.state=new to);ta.get=ta.get,ta.has=ta.has,ta.set=ta.set,u=function(e,t){if(ta.has(e))throw new ti(tn);return t.facade=e,ta.set(e,t),t},l=function(e){return ta.get(e)||{}},d=function(e){return ta.has(e)}}else{var ts=te("state");tr[ts]=!0,u=function(e,t){if(e$(e,ts))throw new ti(tn);return t.facade=e,ez(e,ts,t),t},l=function(e){return e$(e,ts)?e[ts]:{}},d=function(e){return e$(e,ts)}}var tc=(e5={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=l(t)).type!==e)throw new ti("Incompatible receiver, "+e+" required");return r}}}).enforce,tu=e5.get,tl=String,tf=Object.defineProperty,tp=T("".slice),th=T("".replace),tv=T([].join),tg=E&&!S(function(){return 8!==tf(function(){},"length",{value:8}).length}),tm=String(String).split("String"),ty=e1=function(e,t,r){"Symbol("===tp(tl(t),0,7)&&(t="["+th(tl(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e3&&e.name!==t)&&(E?tf(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&e$(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?E&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tc(e);return e$(n,"source")||(n.source=tv(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=ty(function(){return V(this)&&tu(this).source||e8(this)},"toString"),e0=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(V(r)&&e1(r,o,n),n.global)i?e[t]=r:ew(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tb={},tw={},tk={},tE={},tS={},t$=Math.ceil,tO=Math.floor;tS=Math.trunc||function(e){var t=+e;return(t>0?tO:t$)(t)},tE=function(e){var t=+e;return t!=t||0===t?0:tS(t)};var tj=Math.max,tF=Math.min;tk=function(e,t){var r=tE(e);return r<0?tj(r+t,0):tF(r,t)};var tL={},tM={},tx=Math.min;tM=function(e){var t=tE(e);return t>0?tx(t,0x1fffffffffffff):0},tL=function(e){return tM(e.length)};var tP=function(e){return function(t,r,n){var i,o=x(t),a=tL(o);if(0===a)return!e&&-1;var s=tk(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tT={includes:tP(!0),indexOf:tP(!1)}.indexOf,tA=T([].push);tw=function(e,t){var r,n=x(e),i=0,o=[];for(r in n)!e$(tr,r)&&e$(n,r)&&tA(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tT(o,r)||tA(o,r));return o};var tq=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tw(e,tq)},p=Object.getOwnPropertySymbols;var tN=T([].concat);tb=K("Reflect","ownKeys")||function(e){var t=f(eB(e));return p?tN(t,p(e)):t},t_=function(e,t,r){for(var n=tb(t),o=0;o<n.length;o++){var a=n[o];e$(e,a)||r&&e$(r,a)||c(e,a,i(t,a))}};var tH={},tI=/#|\.prototype\./,tC=function(e,t){var r=tR[tD(e)];return r===tz||r!==tW&&(V(t)?S(t):!!t)},tD=tC.normalize=function(e){return String(e).replace(tI,".").toLowerCase()},tR=tC.data={},tW=tC.NATIVE="N",tz=tC.POLYFILL="P";tH=tC,b=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?w:l?w[c]||ew(c,{}):w[c]&&w[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tH(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),e0(r,n,a,e)}};var tU={},tB={},tG=Function.prototype,tJ=tG.apply,tV=tG.call;tB="object"==typeof Reflect&&Reflect.apply||(O?tV.bind(tJ):function(){return tV.apply(tJ,arguments)});var tY={},tQ={},tK=(tQ=function(e){if("Function"===H(e))return T(e)})(tQ.bind);tY=function(e,t){return ef(e),void 0===t?e:O?tK(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=K("document","documentElement");var tZ={};tZ=T([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw new t1("Not enough arguments");return e};var t2={};t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(er);var t4={},t3={},t8=function(e){return er.slice(0,e.length)===e};t4="NODE"==(t3=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":w.Bun&&"string"==typeof Bun.version?"BUN":w.Deno&&"object"==typeof Deno.version?"DENO":"process"===H(w.process)?"NODE":w.window&&w.document?"BROWSER":"REST");var t9=w.setImmediate,t5=w.clearImmediate,t6=w.process,t7=w.Dispatch,re=w.Function,rt=w.MessageChannel,rr=w.String,rn=0,ri={},ro="onreadystatechange";S(function(){h=w.location});var ra=function(e){if(e$(ri,e)){var t=ri[e];delete ri[e],t()}},rs=function(e){return function(){ra(e)}},rc=function(e){ra(e.data)},ru=function(e){w.postMessage(rr(e),h.protocol+"//"+h.host)};t9&&t5||(t9=function(e){t0(arguments.length,1);var t=V(e)?e:re(e),r=tZ(arguments,1);return ri[++rn]=function(){tB(t,void 0,r)},v(rn),rn},t5=function(e){delete ri[e]},t4?v=function(e){t6.nextTick(rs(e))}:t7&&t7.now?v=function(e){t7.now(rs(e))}:rt&&!t2?(m=(g=new rt).port2,g.port1.onmessage=rc,v=tY(m.postMessage,m)):w.addEventListener&&V(w.postMessage)&&!w.importScripts&&h&&"file:"!==h.protocol&&!S(ru)?(v=ru,w.addEventListener("message",rc,!1)):v=ro in eC("script")?function(e){tX.appendChild(eC("script"))[ro]=function(){tX.removeChild(this),ra(e)}}:function(e){setTimeout(rs(e),0)});var rl=(tU={set:t9,clear:t5}).clear;b({global:!0,bind:!0,enumerable:!0,forced:w.clearImmediate!==rl},{clearImmediate:rl});var rd=tU.set,rf={},rp=w.Function,rh=/MSIE .\./.test(er)||"BUN"===t3&&((t=w.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rf=function(e,t){var r=t?2:1;return rh?function(n,i){var o=t0(arguments.length,1)>r,a=V(n)?n:rp(n),s=o?tZ(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rv=w.setImmediate?rf(rd,!1):rd;b({global:!0,bind:!0,enumerable:!0,forced:w.setImmediate!==rv},{setImmediate:rv});var rg=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new j(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(F([])));w&&w!==r&&n.call(w,a)&&(_=w);var k=y.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function F(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=F,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rg}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rg:Function("r","regeneratorRuntime = r")(rg)}const rm="https://forkify-api.herokuapp.com/api/v2/recipes/",ry="d86219bb-6695-46ef-99ff-4282ca401afe",r_=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rb={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},rw=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rk=async function(e){try{let t=await r_(`${rm}${e}?key=${ry}`);rb.recipe=rw(t),rb.bookmarks.some(t=>t.id===e)?rb.recipe.bookmarked=!0:rb.recipe.bookmarked=!1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rE=async function(e){try{rb.search.query=e;let t=await r_(`${rm}?search=${e}&key=${ry}`);rb.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rb.search.page=1}catch(e){throw console.error(`${e}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},rS=function(e=rb.search.page){rb.search.page=e;let t=(e-1)*rb.search.resultsPerPage,r=e*rb.search.resultsPerPage;return rb.search.results.slice(t,r)},r$=function(e){rb.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rb.recipe.servings}),rb.recipe.servings=e},rO=function(){localStorage.setItem("bookmarks",JSON.stringify(rb.bookmarks))},rj=function(e){rb.bookmarks.push(e),e.id===rb.recipe.id&&(rb.recipe.bookmarked=!0),rO()},rF=function(e){let t=rb.bookmarks.findIndex(t=>t.id===e);rb.bookmarks.splice(t,1),e===rb.recipe.id&&(rb.recipe.bookmarked=!1),rO()};!function(){let e=localStorage.getItem("bookmarks");e&&(rb.bookmarks=JSON.parse(e))}();const rL=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format. Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await r_(`${rm}?key=${ry}`,r);rb.recipe=rw(n),rj(rb.recipe)}catch(e){throw e}};var rM={};rM=new URL("icons.c14567a0.svg",import.meta.url).toString();class rx{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderspinner(){let e=`
              <div class="spinner">
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-loader"></use>
                </svg>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/_(rM)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            <div>
              <svg>
                <use href="${/*@__PURE__*/_(rM)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,i=num.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Fraction;class rP extends rx{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find the recipe. Please try another one!";_message="";addHandlerrender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;+n>0&&e(+n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">   ${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/_(rM)}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/_(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIng).join("")}
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
  `}_generateMarkupIng(e){return`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/_(rM)}#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li>
            `}}var rT=new rP,rA=new class extends rx{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                    <use href="${/*@__PURE__*/_(rM)}#icon-user"></use>
                    </svg>
                </div>
            </div>
        </a>
        </li>`}};class rq extends rx{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again.";_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rN=new rq;class rH{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rI=new rH;class rC extends rx{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`
            <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-right"></use>
            </svg>
          </button>
        `:e===t&&t>1?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
        `:e<t?`
            <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>
          <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/_(rM)}#icon-arrow-right"></use>
            </svg>
          </button>
        `:""}}var rD=new rC;class rR{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderspinner(){let e=`
              <div class="spinner">
                <svg>
                  <use href="${/*@__PURE__*/_(rM)}#icon-loader"></use>
                </svg>
              </div>
        `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`
          <div class="error">
            <div>
              <svg>
                <use href="${/*@__PURE__*/_(rM)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            <div>
              <svg>
                <use href="${/*@__PURE__*/_(rM)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rW=new class extends rR{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`
        <li class="preview">
        <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
            <figure class="preview__fig">
            <img src="${this._data.image}" alt="${this._data.title}" />
            </figure>
            <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                    <svg>
                    <use href="${/*@__PURE__*/_(rM)}#icon-user"></use>
                    </svg>
                </div>
            </div>
        </a>
        </li>`}};class rz extends rR{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmark yet. Find a nice recipe and bookmark it ;)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rW.render(e,!1)).join("")}}var rU=new rz;class rB extends rx{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rG=new rB;const rJ=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rT.renderspinner(),rN.update(rS()),rU.update(rb.bookmarks),await rk(e),rT.render(rb.recipe)}catch(e){rT.renderError()}},rV=async function(){try{if(rN.renderspinner(),query=rI.getQuery(),console.log(query),!query)return;await rE(query),rN.render(rS()),rD.render(rb.search)}catch(e){console.log(e)}},rY=async function(e){try{rG.renderspinner(),await rL(e),console.log(rb.recipe),rT.render(rb.recipe),rG.renderMessage(),rU.render(rb.bookmarks),window.history.pushState(null,"",`#${rb.recipe.id}`),setTimeout(function(){rG.toggleWindow()},2500)}catch(e){console.error("\uD83C\uDF86",e),rG.renderError(e.message)}};rU.addHandlerRender(function(){rU.render(rb.bookmarks)}),rT.addHandlerrender(rJ),rT.addHandlerUpdateServings(function(e){r$(e),rT.update(rb.recipe)}),rT.addHandlerBookmark(function(){rb.recipe.bookmarked?rF(rb.recipe.id):rj(rb.recipe),rT.update(rb.recipe),rU.render(rb.bookmarks)}),rI.addHandlerSearch(rV),rD.addHandlerClick(function(e){console.log(e),rN.render(rS(e)),rD.render(rb.search)}),rG.addHandlerUpload(rY);
//# sourceMappingURL=index.2ffe5821.js.map
