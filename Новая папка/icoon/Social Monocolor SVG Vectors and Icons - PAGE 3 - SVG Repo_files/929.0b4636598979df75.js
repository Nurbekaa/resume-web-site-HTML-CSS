(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{6929:function(e,t,n){"use strict";let r;n.r(t);var i=n(5893),o=n(7294),s=n(940),a=n.n(s),l=n(3255);if(!0==n(4243).Z.get("flexbar")){function c(){let e=new Date,t=new Date(e);t.setDate(t.getDate()+1),window.localStorage.setItem("flexbar_hide",t.getTime())}r=e=>{let{id:t,type:n,isHome:r}=e;if(r)return null;let[s,u]=(0,o.useState)(0),[f,d]=(0,o.useState)(0);return(0,o.useEffect)(()=>{(function e(t,r,i){if(!t.includes("unset")){i&&u(0);{let i=0;try{i=window.localStorage.getItem("flexbar_hide")}catch(e){console.log("SVGRepo: Enable cookies for full set of features")}(i<new Date().getTime()||"footer"==n)&&l.Z.getNative("flexbarEndpoint").then(n=>{let i=document.getElementById(t);if(i&&!i.innerHTML.includes("svgrepo-com")){u(n.ad),d(n.count),r<3&&0===Object.keys(n.ad).length&&setTimeout(()=>{e(t,r+1)},2e3);let i=0|Math.round(Date.now()/1e4);if(void 0!==n.pixel){let e=n.pixel.split("||");for(var o=0;o<e.length;o++){var s=document.createElement("img");s.src=e[o].replace("[timestamp]",i),s.border="0",s.height="1",s.width="1",s.style.display="none";let n=document.getElementById(t);n&&n.appendChild(s)}}}})}}})(t,0,!0)},[t]),(0,i.jsx)("div",{className:"footer"==n?a().flexbarFooter:a().flexbarHolder,children:(0,i.jsx)("div",{className:a().flexbar,id:t,children:0!=s&&s.company&&(0,i.jsxs)("div",{className:a().nativeInline,children:[(0,i.jsx)("span",{className:a().flexbarClose,style:{color:s.textColor},onClick:()=>{c(),u(0)},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:(0,i.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:(0,i.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[(0,i.jsx)("line",{x1:"13",y1:"1",x2:"1",y2:"13",fill:"none",stroke:"#404040",strokeLinecap:"round",strokeLinecap:"round",strokeWidth:"2"}),(0,i.jsx)("line",{x1:"1",y1:"1",x2:"13",y2:"13",fill:"none",stroke:"#404040",strokeLinecap:"round",strokeLinecap:"round",strokeWidth:"2"})]})})})}),(0,i.jsxs)("a",{href:s.statlink,className:a().nativeContent,target:"_blank",children:[(0,i.jsxs)("div",{className:a().nativeText,children:[(0,i.jsxs)("div",{className:a().nativeCName,children:[s.companyTagline," \uD83C\uDF89"]}),(0,i.jsx)("div",{className:a().nativeDescription,children:s.description}),(0,i.jsxs)("div",{className:a().ctaHolder,children:[(0,i.jsx)("a",{href:s.statlink,className:a().nativeCTA,style:{color:s.ctaTextColor?s.ctaTextColor:"#04573c",backgroundColor:s.ctaBackgroundColor?s.ctaBackgroundColor:"#2bedae"},children:s.callToAction}),(0,i.jsx)("a",{href:s.ad_via_link,className:a().nativeSP,children:"AD"}),1===f&&(0,i.jsx)("span",{className:a().flexbarCloseMobile,style:{color:s.textColor},onClick:()=>{c(),u(0)},children:(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",children:(0,i.jsx)("g",{id:"Layer_2","data-name":"Layer 2",children:(0,i.jsxs)("g",{id:"Layer_1-2","data-name":"Layer 1",children:[(0,i.jsx)("line",{x1:"13",y1:"1",x2:"1",y2:"13",fill:"none",stroke:"#404040",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"}),(0,i.jsx)("line",{x1:"1",y1:"1",x2:"13",y2:"13",fill:"none",stroke:"#404040",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]})})})})]})]}),(0,i.jsx)("div",{className:a().nativeContentImage,style:{backgroundColor:s.backgroundColor,width:165},children:(0,i.jsx)("img",{src:s.logo,style:{width:125,height:50},className:a().nativeImage})})]})]})})})}}else r=()=>null;t.default=r},4243:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5293).EventEmitter;r.defaultMaxListeners=40,new r;var i=n(1351),o=n.n(i);let s=new class{isAdmin(){return null!=this.getData("admin")}isTwitterRequestDismissed(){return"1"==this.getData("dismissTwitterRequest")}getAdminKey(){return this.getData("admin")}getSavedVectors(){let e=this.getData("saved");return e?JSON.parse(e):[]}getIconLink(e,t,n){return(n||(n=""),n.includes("#"))?"/show/".concat(e,"/").concat(t,".svg?fill=").concat(n.replace("#","")):"fetch"==n?"/show/".concat(e,"/").concat(t,".svg?fetch=true"):"/show/".concat(e,"/").concat(t,".svg")}checkSavedStatus(e){let t=this.getData("saved");return!!(t&&t.includes('"'.concat(e,'"')))}saveVector(e,t){let n=this.getData("saved");if(n){if(n.includes('"'.concat(e,'"'))){n=(n=JSON.parse(n)).filter(t=>t.id!=e),this.setData("saved",JSON.stringify(n));return}n=JSON.parse(n)}else n=[];n.push({id:e,slug:t}),this.setData("saved",JSON.stringify(n))}get(e,t){let n=o()[e];return void 0!==n?t&&t.forEach((e,t)=>{n=n.replace(RegExp("\\$"+Number(t+1),"g"),e)}):console.warn("Can't find the text identifier: ",e),n}setData(e,t){try{return localStorage.setItem(e,t)}catch(e){console.log("SVGRepo: Enable cookies for full set of features")}}getData(e){try{return localStorage.getItem(e)}catch(e){console.log("SVGRepo: Enable cookies for full set of features")}}constructor(){console.log("API: SVG Repo Init, welcome!")}};var a=s},1351:function(e){"use strict";e.exports={vectorCount:500,native:!0,nativeEndpointTop:"https://api.svgrepo.com/native.json",nativeEndpoint:"https://api.svgrepo.com/native_bottom.php",flexbar:!0,flexbarEndpoint:"https://api.svgrepo.com/flex.json",carbon:!0,carbonEndpoint:"https://api.svgrepo.com/carb.php"}},3255:function(e,t,n){"use strict";var r=n(4243);let i=new class{getNative(e){{let s=r.Z.get(e),a="";try{a=decodeURIComponent(document.cookie)}catch(e){}let l=a.indexOf("_bsap_daycap="),c=a.indexOf("_bsap_lifecap=");if(l=l>=0?a.substring(l+12+1).split(";")[0].split(","):[],c=c>=0?a.substring(c+13+1).split(";")[0].split(","):[],l.length||c.length){let e=[];for(let r=0;r<l.length;r++){let i=l[r];for(var t=-1,n=0;n<e.length&&-1==t;n++)e[n][0]==i&&(t=n);-1==t?e.push([i,1,0]):e[t][1]++}for(var i=0;i<c.length;i++){for(var o=l[i],t=-1,n=0;n<e.length&&-1==t;n++)e[n][0]==o&&(t=n);-1==t?e.push([o,0,1]):e[t][2]++}for(var i=0;i<e.length;i++)e[i]=e[i][0]+":"+e[i][1]+","+e[i][2];e.length&&(s+="?freqcap="+encodeURIComponent(e.join(";")))}return fetch(s,{cache:"no-cache"}).then(e=>e.json()).then(e=>e.ads&&(e.ads[0].statlink||"carbon"==e.ads[0].rendering)?(this.servedCallback(e.ads[0].bannerid,e.ads[0].zoneid,!0),{ad:e.ads[0],count:e.count}):{ad:{},count:0})}}servedCallback(e,t,n){var r=function(e,t,n){var r=document.cookie,i=r.indexOf(e+"="),o=i>=0?r.substring(i+e.length+1).split(";")[0]+"%2C":"",s=new Date;s.setTime(36e5*n+s),t=(t=o+t).substring(0,2048),document.cookie=e+"="+t+"; expires="+s.toGMTString()+"; path=/"};n&&(r("_bsap_daycap",e,1),r("_bsap_lifecap",e,365))}constructor(){}};t.Z=i},5293:function(e){!function(){"use strict";var t={864:function(e){var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise(function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}p(e,t,o,{once:!0}),"error"!==t&&"function"==typeof e.on&&p(e,"error",i,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=l(e))>0&&s.length>i&&!s.warned){s.warned=!0;var i,o,s,c=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=s.length,console&&console.warn&&console.warn(c)}return e}function u(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=u.bind(r);return i.listener=n,r.wrapFn=i,i}function d(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):h(i,i.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function p(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function i(o){r.once&&e.removeEventListener(t,i),n(o)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||i(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return l(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var s,a=Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var l=o[e];if(void 0===l)return!1;if("function"==typeof l)r(l,this,t);else for(var c=l.length,u=h(l,c),n=0;n<c;++n)r(u[n],this,t);return!0},o.prototype.addListener=function(e,t){return c(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return c(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(a(t),void 0===(r=this._events)||void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return d(this,e,!0)},o.prototype.rawListeners=function(e){return d(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},o.prototype.listenerCount=v,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(864);e.exports=i}()},940:function(e){e.exports={flexbarHolder:"style_flexbarHolder__DgQcl",flexbar:"style_flexbar__DvWpX",nativeInline:"style_nativeInline__YPp5_",nativeContent:"style_nativeContent__tS_ng",nativeText:"style_nativeText__p0KQv",nativeContentImage:"style_nativeContentImage__35rBv",nativeImage:"style_nativeImage__R2BQL",nativeImagePlaceholder:"style_nativeImagePlaceholder__3yj_m",loading:"style_loading__hYlBS",textPlaceholder:"style_textPlaceholder__RUnPr",nativeCName:"style_nativeCName__g4gMu",nativeDescription:"style_nativeDescription__qlkbD",ctaHolder:"style_ctaHolder__2djr7",nativeCTA:"style_nativeCTA__58yUj",nativeSP:"style_nativeSP__LtCcE",flexbarClose:"style_flexbarClose__CrOf8",flexbarCloseMobile:"style_flexbarCloseMobile__V4RIK",flexbarFooter:"style_flexbarFooter__t85Br"}}}]);