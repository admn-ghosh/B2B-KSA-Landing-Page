const kl=()=>{};var ks={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},xl=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,I=o>>2,A=(o&3)<<4|c>>4;let R=(c&15)<<2|p>>6,b=p&63;f||(b=64,u||(R=64)),r.push(e[I],e[A],e[R],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(xo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):xl(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const p=s<n.length?e[n.charAt(s)]:64;++s;const A=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||p==null||A==null)throw new Ml;const R=o<<2|c>>4;if(r.push(R),p!==64){const b=c<<4&240|p>>2;if(r.push(b),A!==64){const V=p<<6&192|A;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ml extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fl=function(n){const t=xo(n);return Mo.encodeByteArray(t,!0)},qn=function(n){return Fl(n).replace(/\./g,"")},Ll=function(n){try{return Mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=()=>Ul().__FIREBASE_DEFAULTS__,jl=()=>{if(typeof process>"u"||typeof ks>"u")return;const n=ks.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$l=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Ll(n[1]);return t&&JSON.parse(t)},oi=()=>{try{return kl()||Bl()||jl()||$l()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ql=n=>{var t,e;return(e=(t=oi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},zl=n=>{const t=ql(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fo=()=>{var n;return(n=oi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qn(JSON.stringify(e)),qn(JSON.stringify(u)),""].join(".")}const Ge={};function Wl(){const n={prod:[],emulator:[]};for(const t of Object.keys(Ge))Ge[t]?n.emulator.push(t):n.prod.push(t);return n}function Ql(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let xs=!1;function Xl(n,t){if(typeof window>"u"||typeof document>"u"||!ai(window.location.host)||Ge[n]===t||Ge[n]||xs)return;Ge[n]=t;function e(R){return`__firebase__banner__${R}`}const r="__firebase__banner",o=Wl().prod.length>0;function u(){const R=document.getElementById(r);R&&R.remove()}function c(R){R.style.display="flex",R.style.background="#7faaf0",R.style.position="fixed",R.style.bottom="5px",R.style.left="5px",R.style.padding=".5em",R.style.borderRadius="5px",R.style.alignItems="center"}function f(R,b){R.setAttribute("width","24"),R.setAttribute("id",b),R.setAttribute("height","24"),R.setAttribute("viewBox","0 0 24 24"),R.setAttribute("fill","none"),R.style.marginLeft="-6px"}function p(){const R=document.createElement("span");return R.style.cursor="pointer",R.style.marginLeft="16px",R.style.fontSize="24px",R.innerHTML=" &times;",R.onclick=()=>{xs=!0,u()},R}function I(R,b){R.setAttribute("id",b),R.innerText="Learn more",R.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",R.setAttribute("target","__blank"),R.style.paddingLeft="5px",R.style.textDecoration="underline"}function A(){const R=Ql(r),b=e("text"),V=document.getElementById(b)||document.createElement("span"),k=e("learnmore"),O=document.getElementById(k)||document.createElement("a"),G=e("preprendIcon"),j=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(R.created){const q=R.element;c(q),I(O,k);const tt=p();f(j,G),q.append(j,V,O,tt),document.body.appendChild(q)}o?(V.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yl(){var n;const t=(n=oi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zl(){return!Yl()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tu(){try{return typeof indexedDB=="object"}catch{return!1}}function eu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="FirebaseError";class we extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=nu,Object.setPrototypeOf(this,we.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?ru(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new we(s,c,r)}}function ru(n,t){return n.replace(iu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const iu=/\{\$([^}]+)}/g;function zn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(Ms(o)&&Ms(u)){if(!zn(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ms(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Hl;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(au(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ou(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ou(n){return n===Zt?void 0:n}function au(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new su(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const uu={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},cu=L.INFO,hu={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},fu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=hu[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Uo{constructor(t){this.name=t,this._logLevel=cu,this._logHandler=fu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?uu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const du=(n,t)=>t.some(e=>n instanceof e);let Fs,Ls;function pu(){return Fs||(Fs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mu(){return Ls||(Ls=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bo=new WeakMap,qr=new WeakMap,jo=new WeakMap,Mr=new WeakMap,li=new WeakMap;function gu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(jt(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Bo.set(e,n)}).catch(()=>{}),li.set(t,n),t}function _u(n){if(qr.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});qr.set(n,t)}let zr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function yu(n){zr=n(zr)}function Eu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Fr(this),t,...e);return jo.set(r,t.sort?t.sort():[t]),jt(r)}:mu().includes(n)?function(...t){return n.apply(Fr(this),t),jt(Bo.get(this))}:function(...t){return jt(n.apply(Fr(this),t))}}function vu(n){return typeof n=="function"?Eu(n):(n instanceof IDBTransaction&&_u(n),du(n,pu())?new Proxy(n,zr):n)}function jt(n){if(n instanceof IDBRequest)return gu(n);if(Mr.has(n))return Mr.get(n);const t=vu(n);return t!==n&&(Mr.set(n,t),li.set(t,n)),t}const Fr=n=>li.get(n);function Tu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=jt(u);return r&&u.addEventListener("upgradeneeded",f=>{r(jt(u.result),f.oldVersion,f.newVersion,jt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const Iu=["get","getKey","getAll","getAllKeys","count"],Au=["put","add","delete","clear"],Lr=new Map;function Us(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Lr.get(t))return Lr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Au.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Iu.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[e](...c),s&&f.done]))[0]};return Lr.set(t,o),o}yu(n=>({...n,get:(t,e,r)=>Us(t,e)||n.get(t,e,r),has:(t,e)=>!!Us(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Ru(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Ru(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Hr="@firebase/app",Bs="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new Uo("@firebase/app"),Su="@firebase/app-compat",Pu="@firebase/analytics-compat",Cu="@firebase/analytics",bu="@firebase/app-check-compat",Vu="@firebase/app-check",Du="@firebase/auth",Nu="@firebase/auth-compat",Ou="@firebase/database",ku="@firebase/data-connect",xu="@firebase/database-compat",Mu="@firebase/functions",Fu="@firebase/functions-compat",Lu="@firebase/installations",Uu="@firebase/installations-compat",Bu="@firebase/messaging",ju="@firebase/messaging-compat",$u="@firebase/performance",qu="@firebase/performance-compat",zu="@firebase/remote-config",Hu="@firebase/remote-config-compat",Gu="@firebase/storage",Ku="@firebase/storage-compat",Wu="@firebase/firestore",Qu="@firebase/ai",Xu="@firebase/firestore-compat",Ju="firebase",Yu="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]",Zu={[Hr]:"fire-core",[Su]:"fire-core-compat",[Cu]:"fire-analytics",[Pu]:"fire-analytics-compat",[Vu]:"fire-app-check",[bu]:"fire-app-check-compat",[Du]:"fire-auth",[Nu]:"fire-auth-compat",[Ou]:"fire-rtdb",[ku]:"fire-data-connect",[xu]:"fire-rtdb-compat",[Mu]:"fire-fn",[Fu]:"fire-fn-compat",[Lu]:"fire-iid",[Uu]:"fire-iid-compat",[Bu]:"fire-fcm",[ju]:"fire-fcm-compat",[$u]:"fire-perf",[qu]:"fire-perf-compat",[zu]:"fire-rc",[Hu]:"fire-rc-compat",[Gu]:"fire-gcs",[Ku]:"fire-gcs-compat",[Wu]:"fire-fst",[Xu]:"fire-fst-compat",[Qu]:"fire-vertex","fire-js":"fire-js",[Ju]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,tc=new Map,Kr=new Map;function js(n,t){try{n.container.addComponent(t)}catch(e){Mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gn(n){const t=n.name;if(Kr.has(t))return Mt.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,n);for(const e of Hn.values())js(e,n);for(const e of tc.values())js(e,n);return!0}function ec(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function nc(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Lo("app","Firebase",rc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=Yu;function $o(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gr,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(e||(e=Fo()),!e)throw $t.create("no-options");const o=Hn.get(s);if(o){if(zn(e,o.options)&&zn(r,o.config))return o;throw $t.create("duplicate-app",{appName:s})}const u=new lu(s);for(const f of Kr.values())u.addComponent(f);const c=new ic(e,r,u);return Hn.set(s,c),c}function oc(n=Gr){const t=Hn.get(n);if(!t&&n===Gr&&Fo())return $o();if(!t)throw $t.create("no-app",{appName:n});return t}function me(n,t,e){var r;let s=(r=Zu[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Mt.warn(c.join(" "));return}Gn(new Ze(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="firebase-heartbeat-database",lc=1,tn="firebase-heartbeat-store";let Ur=null;function qo(){return Ur||(Ur=Tu(ac,lc,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),Ur}async function uc(n){try{const e=(await qo()).transaction(tn),r=await e.objectStore(tn).get(zo(n));return await e.done,r}catch(t){if(t instanceof we)Mt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(e.message)}}}async function $s(n,t){try{const r=(await qo()).transaction(tn,"readwrite");await r.objectStore(tn).put(t,zo(n)),await r.done}catch(e){if(e instanceof we)Mt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(r.message)}}}function zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=1024,hc=30;class fc{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new pc(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qs();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>hc){const u=mc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qs(),{heartbeatsToSend:r,unsentEntries:s}=dc(this._heartbeatsCache.heartbeats),o=qn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Mt.warn(e),""}}}function qs(){return new Date().toISOString().substring(0,10)}function dc(n,t=cc){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),zs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),zs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class pc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tu()?eu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await uc(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function zs(n){return qn(JSON.stringify({version:2,heartbeats:n})).length}function mc(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n){Gn(new Ze("platform-logger",t=>new wu(t),"PRIVATE")),Gn(new Ze("heartbeat",t=>new fc(t),"PRIVATE")),me(Hr,Bs,n),me(Hr,Bs,"esm2017"),me("fire-js","")}gc("");var Hs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function g(){}g.prototype=d.prototype,E.D=d.prototype,E.prototype=new g,E.prototype.constructor=E,E.C=function(_,y,T){for(var m=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)m[Vt-2]=arguments[Vt];return d.prototype[y].apply(_,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,g){g||(g=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(y=0;16>y;++y)_[y]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=E.g[0],g=E.g[1],y=E.g[2];var T=E.g[3],m=d+(T^g&(y^T))+_[0]+3614090360&4294967295;d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[1]+3905402710&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[2]+606105819&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[3]+3250441966&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[5]+1200080426&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[6]+2821735955&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[7]+4249261313&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[9]+2336552879&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[10]+4294925233&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[11]+2304563134&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(T^g&(y^T))+_[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=T+(y^d&(g^y))+_[13]+4254626195&4294967295,T=d+(m<<12&4294967295|m>>>20),m=y+(g^T&(d^g))+_[14]+2792965006&4294967295,y=T+(m<<17&4294967295|m>>>15),m=g+(d^y&(T^d))+_[15]+1236535329&4294967295,g=y+(m<<22&4294967295|m>>>10),m=d+(y^T&(g^y))+_[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[6]+3225465664&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[11]+643717713&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[0]+3921069994&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[10]+38016083&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[15]+3634488961&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[4]+3889429448&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[14]+3275163606&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[3]+4107603335&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[8]+1163531501&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(y^T&(g^y))+_[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=T+(g^y&(d^g))+_[2]+4243563512&4294967295,T=d+(m<<9&4294967295|m>>>23),m=y+(d^g&(T^d))+_[7]+1735328473&4294967295,y=T+(m<<14&4294967295|m>>>18),m=g+(T^d&(y^T))+_[12]+2368359562&4294967295,g=y+(m<<20&4294967295|m>>>12),m=d+(g^y^T)+_[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[8]+2272392833&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[11]+1839030562&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[14]+4259657740&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[4]+1272893353&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[7]+4139469664&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[10]+3200236656&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[0]+3936430074&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[3]+3572445317&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[6]+76029189&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(g^y^T)+_[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=T+(d^g^y)+_[12]+3873151461&4294967295,T=d+(m<<11&4294967295|m>>>21),m=y+(T^d^g)+_[15]+530742520&4294967295,y=T+(m<<16&4294967295|m>>>16),m=g+(y^T^d)+_[2]+3299628645&4294967295,g=y+(m<<23&4294967295|m>>>9),m=d+(y^(g|~T))+_[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[7]+1126891415&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[14]+2878612391&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[5]+4237533241&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[3]+2399980690&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[10]+4293915773&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[1]+2240044497&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[15]+4264355552&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[6]+2734768916&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[13]+1309151649&4294967295,g=y+(m<<21&4294967295|m>>>11),m=d+(y^(g|~T))+_[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=T+(g^(d|~y))+_[11]+3174756917&4294967295,T=d+(m<<10&4294967295|m>>>22),m=y+(d^(T|~g))+_[2]+718787259&4294967295,y=T+(m<<15&4294967295|m>>>17),m=g+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}r.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var g=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=g;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var g=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=g&255,g/=256;for(this.u(E),E=Array(16),d=g=0;4>d;++d)for(var _=0;32>_;_+=8)E[g++]=this.g[d]>>>_&255;return E};function o(E,d){var g=c;return Object.prototype.hasOwnProperty.call(g,E)?g[E]:g[E]=d(E)}function u(E,d){this.h=d;for(var g=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(g[y]=T,_=!1)}this.g=g}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function p(E){if(isNaN(E)||!isFinite(E))return A;if(0>E)return O(p(-E));for(var d=[],g=1,_=0;E>=g;_++)d[_]=E/g|0,g*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return O(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=p(Math.pow(d,8)),_=A,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),m=parseInt(E.substring(y,y+T),d);8>T?(T=p(Math.pow(d,T)),_=_.j(T).add(p(m))):(_=_.j(g),_=_.add(p(m)))}return _}var A=f(0),R=f(1),b=f(16777216);n=u.prototype,n.m=function(){if(k(this))return-O(this).m();for(var E=0,d=1,g=0;g<this.g.length;g++){var _=this.i(g);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(k(this))return"-"+O(this).toString(E);for(var d=p(Math.pow(E,6)),g=this,_="";;){var y=tt(g,d).g;g=G(g,y.j(d));var T=((0<g.g.length?g.g[0]:g.h)>>>0).toString(E);if(g=y,V(g))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=G(this,E),k(E)?-1:V(E)?0:1};function O(E){for(var d=E.g.length,g=[],_=0;_<d;_++)g[_]=~E.g[_];return new u(g,~E.h).add(R)}n.abs=function(){return k(this)?O(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),m=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=m>>>16,T&=65535,m&=65535,g[y]=m<<16|T}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(O(d))}n.j=function(E){if(V(this)||V(E))return A;if(k(this))return k(E)?O(this).j(O(E)):O(O(this).j(E));if(k(E))return O(this.j(O(E)));if(0>this.l(b)&&0>E.l(b))return p(this.m()*E.m());for(var d=this.g.length+E.g.length,g=[],_=0;_<2*d;_++)g[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,m=this.i(_)&65535,Vt=E.i(y)>>>16,Pe=E.i(y)&65535;g[2*_+2*y]+=m*Pe,j(g,2*_+2*y),g[2*_+2*y+1]+=T*Pe,j(g,2*_+2*y+1),g[2*_+2*y+1]+=m*Vt,j(g,2*_+2*y+1),g[2*_+2*y+2]+=T*Vt,j(g,2*_+2*y+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new u(g,0)};function j(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function q(E,d){this.g=E,this.h=d}function tt(E,d){if(V(d))throw Error("division by zero");if(V(E))return new q(A,A);if(k(E))return d=tt(O(E),d),new q(O(d.g),O(d.h));if(k(d))return d=tt(E,O(d)),new q(O(d.g),d.h);if(30<E.g.length){if(k(E)||k(d))throw Error("slowDivide_ only works with positive integers.");for(var g=R,_=d;0>=_.l(E);)g=Wt(g),_=Wt(_);var y=yt(g,1),T=yt(_,1);for(_=yt(_,2),g=yt(g,2);!V(_);){var m=T.add(_);0>=m.l(E)&&(y=y.add(g),T=m),_=yt(_,1),g=yt(g,1)}return d=G(E,y.j(d)),new q(y,d)}for(y=A;0<=E.l(d);){for(g=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(g)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=p(g),m=T.j(d);k(m)||0<m.l(E);)g-=_,T=p(g),m=T.j(d);V(T)&&(T=R),y=y.add(T),E=G(E,m)}return new q(y,E)}n.A=function(E){return tt(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)&E.i(_);return new u(g,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)|E.i(_);return new u(g,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),g=[],_=0;_<d;_++)g[_]=this.i(_)^E.i(_);return new u(g,this.h^E.h)};function Wt(E){for(var d=E.g.length+1,g=[],_=0;_<d;_++)g[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(g,E.h)}function yt(E,d){var g=d>>5;d%=32;for(var _=E.g.length-g,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+g)>>>d|E.i(T+g+1)<<32-d:E.i(T+g);return new u(y,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=I,ui=u}).apply(typeof Hs<"u"?Hs:typeof self<"u"?self:typeof window<"u"?window:{});var Nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho,He,Go,Ln,Wr,Ko,Wo,Qo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nn=="object"&&Nn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var h=0;h<i.length-1;h++){var v=i[h];if(!(v in l))break t;l=l[v]}i=i[i.length-1],h=l[i],a=a(h),a!=h&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,h=!1,v={next:function(){if(!h&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function p(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function I(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),i.apply(a,v)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:A,R.apply(null,arguments)}function b(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function V(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(h,v,w){for(var C=Array(arguments.length-2),$=2;$<arguments.length;$++)C[$-2]=arguments[$];return a.prototype[v].apply(h,C)}}function k(i){const a=i.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=i[h];return l}return[]}function O(i,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=i.length||0,w=h.length||0;i.length=v+w;for(let C=0;C<w;C++)i[v+C]=h[C]}else i.push(h)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function j(i){return/^[\s\xa0]*$/.test(i)}function q(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function tt(i){return tt[" "](i),i}tt[" "]=function(){};var Wt=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function yt(i,a,l){for(const h in i)a.call(l,i[h],h,i)}function E(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function d(i){const a={};for(const l in i)a[l]=i[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)i[l]=h[l];for(let w=0;w<g.length;w++)l=g[w],Object.prototype.hasOwnProperty.call(h,l)&&(i[l]=h[l])}}function y(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function T(i){c.setTimeout(()=>{throw i},0)}function m(){var i=fr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Vt{constructor(){this.h=this.g=null}add(a,l){const h=Pe.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Pe=new G(()=>new Za,i=>i.reset());class Za{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,be=!1,fr=new Vt,ki=()=>{const i=c.Promise.resolve(void 0);Ce=()=>{i.then(tl)}};var tl=()=>{for(var i;i=m();){try{i.h.call(i.g)}catch(l){T(l)}var a=Pe;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}be=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function lt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var el=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i})();function Ve(i,a){if(lt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Wt){t:{try{tt(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:nl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ve.aa.h.call(this)}}V(Ve,lt);var nl={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),rl=0;function il(i,a,l,h,v){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++rl,this.da=this.fa=!1}function pn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function mn(i){this.src=i,this.g={},this.h=0}mn.prototype.add=function(i,a,l,h,v){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var C=pr(i,a,h,v);return-1<C?(a=i[C],l||(a.fa=!1)):(a=new il(a,this.src,w,!!h,v),a.fa=l,i.push(a)),a};function dr(i,a){var l=a.type;if(l in i.g){var h=i.g[l],v=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(h,v,1),w&&(pn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function pr(i,a,l,h){for(var v=0;v<i.length;++v){var w=i[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return v}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),gr={};function xi(i,a,l,h,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)xi(i,a[w],l,h,v);return null}return l=Li(l),i&&i[dn]?i.K(a,l,p(h)?!!h.capture:!1,v):sl(i,a,l,!1,h,v)}function sl(i,a,l,h,v,w){if(!a)throw Error("Invalid event type");var C=p(v)?!!v.capture:!!v,$=yr(i);if($||(i[mr]=$=new mn(i)),l=$.add(a,l,h,C,w),l.proxy)return l;if(h=ol(),l.proxy=h,h.src=i,h.listener=l,i.addEventListener)el||(v=C),v===void 0&&(v=!1),i.addEventListener(a.toString(),h,v);else if(i.attachEvent)i.attachEvent(Fi(a.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ol(){function i(l){return a.call(i.src,i.listener,l)}const a=al;return i}function Mi(i,a,l,h,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Mi(i,a[w],l,h,v);else h=p(h)?!!h.capture:!!h,l=Li(l),i&&i[dn]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=pr(w,l,h,v),-1<l&&(pn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=yr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=pr(a,l,h,v)),(l=-1<i?a[i]:null)&&_r(l))}function _r(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[dn])dr(a.i,i);else{var l=i.type,h=i.proxy;a.removeEventListener?a.removeEventListener(l,h,i.capture):a.detachEvent?a.detachEvent(Fi(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=yr(a))?(dr(l,i),l.h==0&&(l.src=null,a[mr]=null)):pn(i)}}}function Fi(i){return i in gr?gr[i]:gr[i]="on"+i}function al(i,a){if(i.da)i=!0;else{a=new Ve(a,this);var l=i.listener,h=i.ha||i.src;i.fa&&_r(i),i=l.call(h,a)}return i}function yr(i){return i=i[mr],i instanceof mn?i:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function Li(i){return typeof i=="function"?i:(i[Er]||(i[Er]=function(a){return i.handleEvent(a)}),i[Er])}function ut(){Ft.call(this),this.i=new mn(this),this.M=this,this.F=null}V(ut,Ft),ut.prototype[dn]=!0,ut.prototype.removeEventListener=function(i,a,l,h){Mi(this,i,a,l,h)};function gt(i,a){var l,h=i.F;if(h)for(l=[];h;h=h.F)l.push(h);if(i=i.M,h=a.type||a,typeof a=="string")a=new lt(a,i);else if(a instanceof lt)a.target=a.target||i;else{var v=a;a=new lt(h,i),_(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=gn(C,h,!0,a)&&v}if(C=a.g=i,v=gn(C,h,!0,a)&&v,v=gn(C,h,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=gn(C,h,!1,a)&&v}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],h=0;h<l.length;h++)pn(l[h]);delete i.g[a],i.h--}}this.F=null},ut.prototype.K=function(i,a,l,h){return this.i.add(String(i),a,!1,l,h)},ut.prototype.L=function(i,a,l,h){return this.i.add(String(i),a,!0,l,h)};function gn(i,a,l,h){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var $=C.listener,rt=C.ha||C.src;C.fa&&dr(i.i,C),v=$.call(rt,h)!==!1&&v}}return v&&!h.defaultPrevented}function Ui(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Bi(i){i.g=Ui(()=>{i.g=null,i.i&&(i.i=!1,Bi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class ll extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(i){Ft.call(this),this.h=i,this.g={}}V(De,Ft);var ji=[];function $i(i){yt(i.g,function(a,l){this.g.hasOwnProperty(l)&&_r(a)},i),i.g={}}De.prototype.N=function(){De.aa.N.call(this),$i(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vr=c.JSON.stringify,ul=c.JSON.parse,cl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Tr(){}Tr.prototype.h=null;function qi(i){return i.h||(i.h=i.i())}function zi(){}var Ne={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){lt.call(this,"d")}V(Ir,lt);function Ar(){lt.call(this,"c")}V(Ar,lt);var Qt={},Hi=null;function _n(){return Hi=Hi||new ut}Qt.La="serverreachability";function Gi(i){lt.call(this,Qt.La,i)}V(Gi,lt);function Oe(i){const a=_n();gt(a,new Gi(a))}Qt.STAT_EVENT="statevent";function Ki(i,a){lt.call(this,Qt.STAT_EVENT,i),this.stat=a}V(Ki,lt);function _t(i){const a=_n();gt(a,new Ki(a,i))}Qt.Ma="timingevent";function Wi(i,a){lt.call(this,Qt.Ma,i),this.size=a}V(Wi,lt);function ke(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function xe(){this.g=!0}xe.prototype.xa=function(){this.g=!1};function hl(i,a,l,h,v,w){i.info(function(){if(i.g)if(w)for(var C="",$=w.split("&"),rt=0;rt<$.length;rt++){var B=$[rt].split("=");if(1<B.length){var ct=B[0];B=B[1];var ht=ct.split("_");C=2<=ht.length&&ht[1]=="type"?C+(ct+"="+B+"&"):C+(ct+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function fl(i,a,l,h,v,w,C){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function ue(i,a,l,h){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+pl(i,l)+(h?" "+h:"")})}function dl(i,a){i.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function pl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var h=l[i];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return vr(l)}catch{return a}}var yn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},wr;function En(){}V(En,Tr),En.prototype.g=function(){return new XMLHttpRequest},En.prototype.i=function(){return{}},wr=new En;function Lt(i,a,l,h){this.j=i,this.i=a,this.l=l,this.R=h||1,this.U=new De(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xi}function Xi(){this.i=null,this.g="",this.h=!1}var Ji={},Rr={};function Sr(i,a,l){i.L=1,i.v=An(Dt(a)),i.m=l,i.P=!0,Yi(i,null)}function Yi(i,a){i.F=Date.now(),vn(i),i.A=Dt(i.v);var l=i.A,h=i.R;Array.isArray(h)||(h=[String(h)]),fs(l.i,"t",h),i.C=0,l=i.j.J,i.h=new Xi,i.g=Vs(i.j,l?a:null,!i.m),0<i.O&&(i.M=new ll(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,h=i.ca;var v="readystatechange";Array.isArray(v)||(v&&(ji[0]=v.toString()),v=ji);for(var w=0;w<v.length;w++){var C=xi(l,v[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=i.H?d(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Oe(),hl(i.i,i.u,i.A,i.l,i.R,i.m)}Lt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Nt(i)==3?a.j():this.Y(i)},Lt.prototype.Y=function(i){try{if(i==this.g)t:{const ht=Nt(this.g);var a=this.g.Ba();const fe=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Es(this.g)))){this.J||ht!=4||a==7||(a==8||0>=fe?Oe(3):Oe(2)),Pr(this);var l=this.g.Z();this.X=l;e:if(Zi(this)){var h=Es(this.g);i="";var v=h.length,w=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),Me(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,i+=this.h.i.decode(h[a],{stream:!(w&&a==v-1)});h.length=0,this.h.g+=i,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,fl(this.i,this.u,this.A,this.l,this.R,ht,l),this.o){if(this.T&&!this.K){e:{if(this.g){var $,rt=this.g;if(($=rt.g?rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j($)){var B=$;break e}}B=null}if(l=B)ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cr(this,l);else{this.o=!1,this.s=3,_t(12),Xt(this),Me(this);break t}}if(this.P){l=!0;let It;for(;!this.J&&this.C<C.length;)if(It=ml(this,C),It==Rr){ht==4&&(this.s=4,_t(14),l=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(It==Ji){this.s=4,_t(15),ue(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else ue(this.i,this.l,It,null),Cr(this,It);if(Zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||C.length!=0||this.h.h||(this.s=1,_t(16),l=!1),this.o=this.o&&l,!l)ue(this.i,this.l,C,"[Invalid Chunked Response]"),Xt(this),Me(this);else if(0<C.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),kr(ct),ct.M=!0,_t(11))}}else ue(this.i,this.l,C,null),Cr(this,C);ht==4&&Xt(this),this.o&&!this.J&&(ht==4?Ss(this.j,this):(this.o=!1,vn(this)))}else Nl(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Xt(this),Me(this)}}}catch{}finally{}};function Zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ml(i,a){var l=i.C,h=a.indexOf(`
`,l);return h==-1?Rr:(l=Number(a.substring(l,h)),isNaN(l)?Ji:(h+=1,h+l>a.length?Rr:(a=a.slice(h,h+l),i.C=h+l,a)))}Lt.prototype.cancel=function(){this.J=!0,Xt(this)};function vn(i){i.S=Date.now()+i.I,ts(i,i.I)}function ts(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ke(R(i.ba,i),a)}function Pr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Lt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(dl(this.i,this.A),this.L!=2&&(Oe(),_t(17)),Xt(this),this.s=2,Me(this)):ts(this,this.S-i)};function Me(i){i.j.G==0||i.J||Ss(i.j,i)}function Xt(i){Pr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,$i(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Cr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||br(l.h,i))){if(!i.K&&br(l.h,i)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)bn(l),Pn(l);else break t;Or(l),_t(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=ke(R(l.Za,l),6e3));if(1>=rs(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Yt(l,11)}else if((i.K||l.g==i)&&bn(l),!j(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ct=B[3];ct!=null&&(l.la=ct,l.j.info("VER="+l.la));const ht=B[4];ht!=null&&(l.Aa=ht,l.j.info("SVER="+l.Aa));const fe=B[5];fe!=null&&typeof fe=="number"&&0<fe&&(h=1.5*fe,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const It=i.g;if(It){const Dn=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var w=h.h;w.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Vr(w,w.h),w.h=null))}if(h.D){const xr=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;xr&&(h.ya=xr,H(h.I,h.D,xr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=i;if(h.qa=bs(h,h.J?h.ia:null,h.W),C.K){is(h.h,C);var $=C,rt=h.L;rt&&($.I=rt),$.B&&(Pr($),vn($)),h.g=C}else ws(h);0<l.i.length&&Cn(l)}else B[0]!="stop"&&B[0]!="close"||Yt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?Yt(l,7):Nr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Oe(4)}catch{}}var gl=class{constructor(i,a){this.g=i,this.map=a}};function es(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ns(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function rs(i){return i.h?1:i.g?i.g.size:0}function br(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Vr(i,a){i.g?i.g.add(a):i.h=a}function is(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}es.prototype.cancel=function(){if(this.i=ss(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ss(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return k(i.i)}function _l(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(f(i)){for(var a=[],l=i.length,h=0;h<l;h++)a.push(i[h]);return a}a=[],l=0;for(h in i)a[l++]=i[h];return a}function yl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(f(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const h in i)a[l++]=h;return a}}}function os(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(f(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=yl(i),h=_l(i),v=h.length,w=0;w<v;w++)a.call(void 0,h[w],l&&l[w],i)}var as=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function El(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var h=i[l].indexOf("="),v=null;if(0<=h){var w=i[l].substring(0,h);v=i[l].substring(h+1)}else w=i[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Jt(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Jt){this.h=i.h,Tn(this,i.j),this.o=i.o,this.g=i.g,In(this,i.s),this.l=i.l;var a=i.i,l=new Ue;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),ls(this,l),this.m=i.m}else i&&(a=String(i).match(as))?(this.h=!1,Tn(this,a[1]||"",!0),this.o=Fe(a[2]||""),this.g=Fe(a[3]||"",!0),In(this,a[4]),this.l=Fe(a[5]||"",!0),ls(this,a[6]||"",!0),this.m=Fe(a[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}Jt.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Le(a,us,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Le(a,us,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Le(l,l.charAt(0)=="/"?Il:Tl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Le(l,wl)),i.join("")};function Dt(i){return new Jt(i)}function Tn(i,a,l){i.j=l?Fe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function In(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function ls(i,a,l){a instanceof Ue?(i.i=a,Rl(i.i,i.h)):(l||(a=Le(a,Al)),i.i=new Ue(a,i.h))}function H(i,a,l){i.i.set(a,l)}function An(i){return H(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Fe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Le(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,vl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function vl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var us=/[#\/\?@]/g,Tl=/[#\?:]/g,Il=/[#\?]/g,Al=/[#\?@]/g,wl=/#/g;function Ue(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Ut(i){i.g||(i.g=new Map,i.h=0,i.i&&El(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ue.prototype,n.add=function(i,a){Ut(this),this.i=null,i=ce(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function cs(i,a){Ut(i),a=ce(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function hs(i,a){return Ut(i),a=ce(i,a),i.g.has(a)}n.forEach=function(i,a){Ut(this),this.g.forEach(function(l,h){l.forEach(function(v){i.call(a,v,h,this)},this)},this)},n.na=function(){Ut(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=i[h];for(let w=0;w<v.length;w++)l.push(a[h])}return l},n.V=function(i){Ut(this);let a=[];if(typeof i=="string")hs(this,i)&&(a=a.concat(this.g.get(ce(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Ut(this),this.i=null,i=ce(this,i),hs(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function fs(i,a,l){cs(i,a),0<l.length&&(i.i=null,i.g.set(ce(i,a),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var v=w;C[h]!==""&&(v+="="+encodeURIComponent(String(C[h]))),i.push(v)}}return this.i=i.join("&")};function ce(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Rl(i,a){a&&!i.j&&(Ut(i),i.i=null,i.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(cs(this,h),fs(this,v,l))},i)),i.j=a}function Sl(i,a){const l=new xe;if(c.Image){const h=new Image;h.onload=b(Bt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=b(Bt,l,"TestLoadImage: error",!1,a,h),h.onabort=b(Bt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=b(Bt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else a(!1)}function Pl(i,a){const l=new xe,h=new AbortController,v=setTimeout(()=>{h.abort(),Bt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:h.signal}).then(w=>{clearTimeout(v),w.ok?Bt(l,"TestPingServer: ok",!0,a):Bt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),Bt(l,"TestPingServer: error",!1,a)})}function Bt(i,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Cl(){this.g=new cl}function bl(i,a,l){const h=l||"";try{os(i,function(v,w){let C=v;p(v)&&(C=vr(v)),a.push(h+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function wn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(wn,Tr),wn.prototype.g=function(){return new Rn(this.l,this.j)},wn.prototype.i=(function(i){return function(){return i}})({});function Rn(i,a){ut.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Rn,ut),n=Rn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,je(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Be(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,je(this)),this.g&&(this.readyState=3,je(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ds(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function ds(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Be(this):je(this),this.readyState==3&&ds(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Be(this))},n.Qa=function(i){this.g&&(this.response=i,Be(this))},n.ga=function(){this.g&&Be(this)};function Be(i){i.readyState=4,i.l=null,i.j=null,i.v=null,je(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function je(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ps(i){let a="";return yt(i,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Dr(i,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=ps(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):H(i,a,l))}function X(i){ut.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(X,ut);var Vl=/^https?$/i,Dl=["POST","PUT"];n=X.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():wr.g(),this.v=this.o?qi(this.o):qi(wr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){ms(this,w);return}if(i=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Dl,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ys(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){ms(this,w)}};function ms(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,gs(i),Sn(i)}function gs(i){i.A||(i.A=!0,gt(i,"complete"),gt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,gt(this,"complete"),gt(this,"abort"),Sn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_s(this):this.bb())},n.bb=function(){_s(this)};function _s(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Nt(i)!=4||i.Z()!=2)){if(i.u&&Nt(i)==4)Ui(i.Ea,0,i);else if(gt(i,"readystatechange"),Nt(i)==4){i.h=!1;try{const C=i.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var v=String(i.D).match(as)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!Vl.test(v?v.toLowerCase():"")}l=h}if(l)gt(i,"complete"),gt(i,"success");else{i.m=6;try{var w=2<Nt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",gs(i)}}finally{Sn(i)}}}}function Sn(i,a){if(i.g){ys(i);const l=i.g,h=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||gt(i,"ready");try{l.onreadystatechange=h}catch{}}}function ys(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Nt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),ul(a)}};function Es(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Nl(i){const a={};i=(i.g&&2<=Nt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(j(i[h]))continue;var l=y(i[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $e(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function vs(i){this.Aa=0,this.i=[],this.j=new xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$e("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$e("baseRetryDelayMs",5e3,i),this.cb=$e("retryDelaySeedMs",1e4,i),this.Wa=$e("forwardChannelMaxRetries",2,i),this.wa=$e("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new es(i&&i.concurrentRequestLimit),this.Da=new Cl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vs.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,h){_t(0),this.W=i,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=bs(this,null,this.W),Cn(this)};function Nr(i){if(Ts(i),i.G==3){var a=i.U++,l=Dt(i.I);if(H(l,"SID",i.K),H(l,"RID",a),H(l,"TYPE","terminate"),qe(i,l),a=new Lt(i,i.j,a),a.L=2,a.v=An(Dt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Vs(a.j,null),a.g.ea(a.v)),a.F=Date.now(),vn(a)}Cs(i)}function Pn(i){i.g&&(kr(i),i.g.cancel(),i.g=null)}function Ts(i){Pn(i),i.u&&(c.clearTimeout(i.u),i.u=null),bn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Cn(i){if(!ns(i.h)&&!i.s){i.s=!0;var a=i.Ga;Ce||ki(),be||(Ce(),be=!0),fr.add(a,i),i.B=0}}function Ol(i,a){return rs(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ke(R(i.Ga,i,a),Ps(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const v=new Lt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=d(w),_(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=As(this,v,a),l=Dt(this.I),H(l,"RID",i),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),qe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(ps(w)))+"&"+a:this.m&&Dr(l,this.m,w)),Vr(this.h,v),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),v.T=!0,Sr(v,l,null)):Sr(v,l,a),this.G=2}}else this.G==3&&(i?Is(this,i):this.i.length==0||ns(this.h)||Is(this))};function Is(i,a){var l;a?l=a.l:l=i.U++;const h=Dt(i.I);H(h,"SID",i.K),H(h,"RID",l),H(h,"AID",i.T),qe(i,h),i.m&&i.o&&Dr(h,i.m,i.o),l=new Lt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=As(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Vr(i.h,l),Sr(l,h,a)}function qe(i,a){i.H&&yt(i.H,function(l,h){H(a,h,l)}),i.l&&os({},function(l,h){H(a,h,l)})}function As(i,a,l){l=Math.min(i.i.length,l);var h=i.l?R(i.l.Na,i.l,i):null;t:{var v=i.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let $=!0;for(let rt=0;rt<l;rt++){let B=v[rt].g;const ct=v[rt].map;if(B-=w,0>B)w=Math.max(0,v[rt].g-100),$=!1;else try{bl(ct,C,"req"+B+"_")}catch{h&&h(ct)}}if($){h=C.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,h}function ws(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;Ce||ki(),be||(Ce(),be=!0),fr.add(a,i),i.v=0}}function Or(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ke(R(i.Fa,i),Ps(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Rs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ke(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Pn(this),Rs(this))};function kr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Rs(i){i.g=new Lt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Dt(i.qa);H(a,"RID","rpc"),H(a,"SID",i.K),H(a,"AID",i.T),H(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&H(a,"TO",i.ja),H(a,"TYPE","xmlhttp"),qe(i,a),i.m&&i.o&&Dr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=An(Dt(a)),l.m=null,l.P=!0,Yi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,Pn(this),Or(this),_t(19))};function bn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Ss(i,a){var l=null;if(i.g==a){bn(i),kr(i),i.g=null;var h=2}else if(br(i.h,a))l=a.D,is(i.h,a),h=1;else return;if(i.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=i.B;h=_n(),gt(h,new Wi(h,l)),Cn(i)}else ws(i);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Ol(i,a)||h==2&&Or(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),v){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function Ps(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),h=i.Xa;const v=!h;h=new Jt(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Tn(h,"https"),An(h),v?Sl(h.toString(),l):Pl(h.toString(),l)}else _t(2);i.G=0,i.l&&i.l.sa(a),Cs(i),Ts(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))};function Cs(i){if(i.G=0,i.ka=[],i.l){const a=ss(i.h);(a.length!=0||i.i.length!=0)&&(O(i.ka,a),O(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function bs(i,a,l){var h=l instanceof Jt?Dt(l):new Jt(l);if(h.g!="")a&&(h.g=a+"."+h.g),In(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new Jt(null);h&&Tn(w,h),a&&(w.g=a),v&&In(w,v),l&&(w.l=l),h=w}return l=i.D,a=i.ya,l&&a&&H(h,l,a),H(h,"VER",i.la),qe(i,h),h}function Vs(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new X(new wn({eb:l})):new X(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ds(){}n=Ds.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vn(){}Vn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ut.call(this),this.g=new vs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!j(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!j(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new he(this)}V(Tt,ut),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Nr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=vr(i),i=l);a.i.push(new gl(a.Ya++,i)),a.G==3&&Cn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Nr(this.g),delete this.g,Tt.aa.N.call(this)};function Ns(i){Ir.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}V(Ns,Ir);function Os(){Ar.call(this),this.status=1}V(Os,Ar);function he(i){this.g=i}V(he,Ds),he.prototype.ua=function(){gt(this.g,"a")},he.prototype.ta=function(i){gt(this.g,new Ns(i))},he.prototype.sa=function(i){gt(this.g,new Os)},he.prototype.ra=function(){gt(this.g,"b")},Vn.prototype.createWebChannel=Vn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,Qo=function(){return new Vn},Wo=function(){return _n()},Ko=Qt,Wr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,Ln=yn,Qi.COMPLETE="complete",Go=Qi,zi.EventType=Ne,Ne.OPEN="a",Ne.CLOSE="b",Ne.ERROR="c",Ne.MESSAGE="d",ut.prototype.listen=ut.prototype.K,He=zi,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,Ho=X}).apply(typeof Nn<"u"?Nn:typeof self<"u"?self:typeof window<"u"?window:{});const Gs="@firebase/firestore",Ks="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=new Uo("@firebase/firestore");function de(){return re.logLevel}function D(n,...t){if(re.logLevel<=L.DEBUG){const e=t.map(ci);re.debug(`Firestore (${Re}): ${n}`,...e)}}function ie(n,...t){if(re.logLevel<=L.ERROR){const e=t.map(ci);re.error(`Firestore (${Re}): ${n}`,...e)}}function ye(n,...t){if(re.logLevel<=L.WARN){const e=t.map(ci);re.warn(`Firestore (${Re}): ${n}`,...e)}}function ci(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Xo(n,r,e)}function Xo(n,t,e){let r=`FIRESTORE (${Re}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw ie(r),new Error(r)}function J(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Xo(t,s,r)}function z(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends we{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _c{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(dt.UNAUTHENTICATED)))}shutdown(){}}class yc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Ec{constructor(t){this.t=t,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){J(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ee;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ee,t.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await s(this.currentUser)}))},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>c(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ee)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Jo(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return J(t===null||typeof t=="string",2055,{h:t}),new dt(t)}}class vc{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Tc{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new vc(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ws{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ic{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,nc(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){J(this.o===void 0,3512);const r=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ws(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(J(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ws(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ac(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function Qr(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=wc(),u=Rc(o.encode(Qs(n,e)),o.encode(Qs(t,e)));return u!==0?u:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Qs(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Rc(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ee(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs="__name__";class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Pt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),s=Pt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):Qr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return ui.fromString(t.substring(4,t.length-2))}}class Q extends Pt{construct(t,e,r){return new Q(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Q(e)}static emptyPath(){return new Q([])}}const Sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Pt{construct(t,e,r){return new ot(t,e,r)}static isValidIdentifier(t){return Sc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xs}static keyField(){return new ot([Xs])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Q.fromString(t))}static fromName(t){return new x(Q.fromString(t).popFirst(5))}static empty(){return new x(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Q(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Pc(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Js(n){if(!x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ys(n){if(x.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function ta(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!Zo(n))throw new N(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(P.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=-62135596800,to=1e6;class W{static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*to);return new W(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Zs)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/to}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:W._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,W._jsonSchema))return new W(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Zs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}W._jsonSchemaVersion="firestore/timestamp/1.0",W._jsonSchema={type:Z("string",W._jsonSchemaVersion),seconds:Z("number"),nanoseconds:Z("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new W(0,0))}static max(){return new K(new W(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Cc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new W(e+1,0):new W(e,r));return new zt(s,x.empty(),t)}function bc(n){return new zt(n.readTime,n.key,en)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(K.min(),x.empty(),en)}static max(){return new zt(K.max(),x.empty(),en)}}function Vc(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Nc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Dc)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):S.reject(e)}static resolve(t){return new S(((e,r)=>{e(t)}))}static reject(t){return new S(((e,r)=>{r(t)}))}static waitFor(t){return new S(((e,r)=>{let s=0,o=0,u=!1;t.forEach((c=>{++s,c.next((()=>{++o,u&&o===s&&e()}),(f=>r(f)))})),u=!0,o===s&&e()}))}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next((s=>s?S.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new S(((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next((I=>{u[p]=I,++c,c===o&&r(u)}),(I=>s(I)))}}))}static doWhile(t,e){return new S(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function Oc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}pi.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=-1;function gi(n){return n==null}function Kn(n){return n===0&&1/n==-1/0}function kc(n){return typeof n=="number"&&Number.isInteger(n)&&!Kn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="";function xc(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=eo(t)),t=Mc(n.get(e),t);return eo(t)}function Mc(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ea:e+="";break;default:e+=o}}return e}function eo(n){return n+ea+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Se(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function na(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}insert(t,e){return new vt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new On(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new On(this.root,t,this.comparator,!1)}getReverseIterator(){return new On(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new On(this.root,t,this.comparator,!0)}}class On{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=o??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new it(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ro(this.data.getIterator())}getIteratorFrom(t){return new ro(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof at)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new at(this.comparator);return e.data=t,e}}class ro{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new St([])}unionWith(t){let e=new at(ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ee(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Fc("Invalid base64 string: "+o):o}})(t);return new Ct(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o})(t);return new Ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const Lc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function se(n){if(J(!!n,39018),typeof n=="string"){let t=0;const e=Lc.exec(n);if(J(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ve(n){return typeof n=="string"?Ct.fromBase64String(n):Ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="server_timestamp",ia="__type__",sa="__previous_value__",oa="__local_write_time__";function _i(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[ia])===null||e===void 0?void 0:e.stringValue)===ra}function yi(n){const t=n.mapValue.fields[sa];return _i(t)?yi(t):t}function Wn(n){const t=se(n.mapValue.fields[oa].timestampValue);return new W(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,e,r,s,o,u,c,f,p,I){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=p,this.isUsingEmulator=I}}const Qn="(default)";class Xn{constructor(t,e){this.projectId=t,this.database=e||Qn}static empty(){return new Xn("","")}get isDefaultDatabase(){return this.database===Qn}isEqual(t){return t instanceof Xn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="__type__",Bc="__max__",kn={mapValue:{}},la="__vector__",Xr="value";function oe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_i(n)?4:$c(n)?9007199254740991:jc(n)?10:11:M(28295,{value:n})}function bt(n,t){if(n===t)return!0;const e=oe(n);if(e!==oe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Wn(n).isEqual(Wn(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=se(s.timestampValue),c=se(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ve(s.bytesValue).isEqual(ve(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=st(s.doubleValue),c=st(o.doubleValue);return u===c?Kn(u)===Kn(c):isNaN(u)&&isNaN(c)}return!1})(n,t);case 9:return Ee(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return(function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(no(u)!==no(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!bt(u[f],c[f])))return!1;return!0})(n,t);default:return M(52216,{left:n})}}function nn(n,t){return(n.values||[]).find((e=>bt(e,t)))!==void 0}function Te(n,t){if(n===t)return 0;const e=oe(n),r=oe(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=st(o.integerValue||o.doubleValue),f=st(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1})(n,t);case 3:return io(n.timestampValue,t.timestampValue);case 4:return io(Wn(n),Wn(t));case 5:return Qr(n.stringValue,t.stringValue);case 6:return(function(o,u){const c=ve(o),f=ve(u);return c.compareTo(f)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),f=u.split("/");for(let p=0;p<c.length&&p<f.length;p++){const I=U(c[p],f[p]);if(I!==0)return I}return U(c.length,f.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=U(st(o.latitude),st(u.latitude));return c!==0?c:U(st(o.longitude),st(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return so(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,f,p,I;const A=o.fields||{},R=u.fields||{},b=(c=A[Xr])===null||c===void 0?void 0:c.arrayValue,V=(f=R[Xr])===null||f===void 0?void 0:f.arrayValue,k=U(((p=b==null?void 0:b.values)===null||p===void 0?void 0:p.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return k!==0?k:so(b,V)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===kn.mapValue&&u===kn.mapValue)return 0;if(o===kn.mapValue)return 1;if(u===kn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),p=u.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let A=0;A<f.length&&A<I.length;++A){const R=Qr(f[A],I[A]);if(R!==0)return R;const b=Te(c[f[A]],p[I[A]]);if(b!==0)return b}return U(f.length,I.length)})(n.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function io(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=se(n),r=se(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function so(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Te(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function Ie(n){return Jr(n)}function Jr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=se(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ve(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return x.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Jr(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${Jr(e.fields[u])}`;return s+"}"})(n.mapValue):M(61005,{value:n})}function Un(n){switch(oe(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yi(n);return t?16+Un(t):16;case 5:return 2*n.stringValue.length;case 6:return ve(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+Un(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Se(r.fields,((o,u)=>{s+=o.length+Un(u)})),s})(n.mapValue);default:throw M(13486,{value:n})}}function Yr(n){return!!n&&"integerValue"in n}function Ei(n){return!!n&&"arrayValue"in n}function Bn(n){return!!n&&"mapValue"in n}function jc(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[aa])===null||e===void 0?void 0:e.stringValue)===la}function Ke(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Se(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=Ke(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ke(n.arrayValue.values[e]);return t}return Object.assign({},n)}function $c(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Bc}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(e)}setAll(t){let e=ot.emptyPath(),r={},s=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=Ke(u):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Se(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new wt(Ke(this.value))}}function ua(n){const t=[];return Se(n.fields,((e,r)=>{const s=new ot([e]);if(Bn(r)){const o=ua(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)})),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new At(t,0,K.min(),K.min(),K.min(),wt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,K.min(),K.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,K.min(),K.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e){this.position=t,this.inclusive=e}}function oo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(u.referenceValue),e.key):r=Te(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ao(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e="asc"){this.field=t,this.dir=e}}function qc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{}class nt extends ca{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Hc(t,e,r):e==="array-contains"?new Wc(t,r):e==="in"?new Qc(t,r):e==="not-in"?new Xc(t,r):e==="array-contains-any"?new Jc(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Gc(t,r):new Kc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Te(e,this.value)):e!==null&&oe(this.value)===oe(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends ca{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ht(t,e)}matches(t){return ha(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function ha(n){return n.op==="and"}function fa(n){return zc(n)&&ha(n)}function zc(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Zr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+Ie(n.value);if(fa(n))return n.filters.map((t=>Zr(t))).join(",");{const t=n.filters.map((e=>Zr(e))).join(",");return`${n.op}(${t})`}}function da(n,t){return n instanceof nt?(function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&bt(r.value,s.value)})(n,t):n instanceof Ht?(function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,u,c)=>o&&da(u,s.filters[c])),!0):!1})(n,t):void M(19439)}function pa(n){return n instanceof nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ie(e.value)}`})(n):n instanceof Ht?(function(e){return e.op.toString()+" {"+e.getFilters().map(pa).join(" ,")+"}"})(n):"Filter"}class Hc extends nt{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Gc extends nt{constructor(t,e){super(t,"in",e),this.keys=ma("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Kc extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ma("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ma(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>x.fromName(r.referenceValue)))}class Wc extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ei(e)&&nn(e.arrayValue,this.value)}}class Qc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class Xc extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class Jc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ei(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>nn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.Pe=null}}function lo(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Yc(n,t,e,r,s,o,u)}function vi(n){const t=z(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>Zr(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),gi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ie(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ie(r))).join(",")),t.Pe=e}return t.Pe}function Ti(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!qc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!da(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ao(n.startAt,t.startAt)&&ao(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Zc(n,t,e,r,s,o,u,c){return new ir(n,t,e,r,s,o,u,c)}function th(n){return new ir(n)}function uo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eh(n){return n.collectionGroup!==null}function We(n){const t=z(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new at(ot.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((p=>{p.isInequality()&&(c=c.add(p.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new Yn(o,r))})),e.has(ot.keyField().canonicalString())||t.Te.push(new Yn(ot.keyField(),r))}return t.Te}function ne(n){const t=z(n);return t.Ie||(t.Ie=nh(t,We(n))),t.Ie}function nh(n,t){if(n.limitType==="F")return lo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Yn(s.field,o)}));const e=n.endAt?new Jn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Jn(n.startAt.position,n.startAt.inclusive):null;return lo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ti(n,t,e){return new ir(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ga(n,t){return Ti(ne(n),ne(t))&&n.limitType===t.limitType}function _a(n){return`${vi(ne(n))}|lt:${n.limitType}`}function ze(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>pa(s))).join(", ")}]`),gi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Ie(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Ie(s))).join(",")),`Target(${r})`})(ne(n))}; limitType=${n.limitType})`}function Ii(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of We(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(u,c,f){const p=oo(u,c,f);return u.inclusive?p<=0:p<0})(r.startAt,We(r),s)||r.endAt&&!(function(u,c,f){const p=oo(u,c,f);return u.inclusive?p>=0:p>0})(r.endAt,We(r),s))})(n,t)}function rh(n){return(t,e)=>{let r=!1;for(const s of We(n)){const o=ih(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function ih(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):(function(o,u,c){const f=u.data.field(o),p=c.data.field(o);return f!==null&&p!==null?Te(f,p):M(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Se(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return na(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new vt(x.comparator);function Zn(){return sh}const ya=new vt(x.comparator);function xn(...n){let t=ya;for(const e of n)t=t.insert(e.key,e);return t}function Ea(n){let t=ya;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function te(){return Qe()}function va(){return Qe()}function Qe(){return new ae((n=>n.toString()),((n,t)=>n.isEqual(t)))}const oh=new vt(x.comparator),ah=new at(x.comparator);function pt(...n){let t=ah;for(const e of n)t=t.add(e);return t}const lh=new at(U);function uh(){return lh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kn(t)?"-0":t}}function Ta(n){return{integerValue:""+n}}function ch(n,t){return kc(t)?Ta(t):Ai(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this._=void 0}}function hh(n,t,e){return n instanceof rn?(function(s,o){const u={fields:{[ia]:{stringValue:ra},[oa]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&_i(o)&&(o=yi(o)),o&&(u.fields[sa]=o),{mapValue:u}})(e,t):n instanceof sn?Aa(n,t):n instanceof on?wa(n,t):(function(s,o){const u=Ia(s,o),c=co(u)+co(s.Ee);return Yr(u)&&Yr(s.Ee)?Ta(c):Ai(s.serializer,c)})(n,t)}function fh(n,t,e){return n instanceof sn?Aa(n,t):n instanceof on?wa(n,t):e}function Ia(n,t){return n instanceof tr?(function(r){return Yr(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class rn extends sr{}class sn extends sr{constructor(t){super(),this.elements=t}}function Aa(n,t){const e=Ra(t);for(const r of n.elements)e.some((s=>bt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class on extends sr{constructor(t){super(),this.elements=t}}function wa(n,t){let e=Ra(t);for(const r of n.elements)e=e.filter((s=>!bt(s,r)));return{arrayValue:{values:e}}}class tr extends sr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function co(n){return st(n.integerValue||n.doubleValue)}function Ra(n){return Ei(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){this.field=t,this.transform=e}}function ph(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof sn&&s instanceof sn||r instanceof on&&s instanceof on?Ee(r.elements,s.elements,bt):r instanceof tr&&s instanceof tr?bt(r.Ee,s.Ee):r instanceof rn&&s instanceof rn})(n.transform,t.transform)}class mh{constructor(t,e){this.version=t,this.transformResults=e}}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class or{}function Sa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ca(n.key,Ot.none()):new un(n.key,n.data,Ot.none());{const e=n.data,r=wt.empty();let s=new at(ot.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new le(n.key,r,new St(s.toArray()),Ot.none())}}function gh(n,t,e){n instanceof un?(function(s,o,u){const c=s.value.clone(),f=fo(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(n,t,e):n instanceof le?(function(s,o,u){if(!jn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=fo(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Pa(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(n,t,e):(function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function Xe(n,t,e,r){return n instanceof un?(function(o,u,c,f){if(!jn(o.precondition,u))return c;const p=o.value.clone(),I=po(o.fieldTransforms,f,u);return p.setAll(I),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null})(n,t,e,r):n instanceof le?(function(o,u,c,f){if(!jn(o.precondition,u))return c;const p=po(o.fieldTransforms,f,u),I=u.data;return I.setAll(Pa(o)),I.setAll(p),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((A=>A.field)))})(n,t,e,r):(function(o,u,c){return jn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(n,t,e)}function _h(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Ia(r.transform,s||null);o!=null&&(e===null&&(e=wt.empty()),e.set(r.field,o))}return e||null}function ho(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ee(r,s,((o,u)=>ph(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class un extends or{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class le extends or{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Pa(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function fo(n,t,e){const r=new Map;J(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,fh(u,c,e[s]))}return r}function po(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,hh(o,u,t))}return r}class Ca extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yh extends or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&gh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Xe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=va();return this.mutations.forEach((s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=Sa(u,c);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(K.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pt())}isEqual(t){return this.batchId===t.batchId&&Ee(this.mutations,t.mutations,((e,r)=>ho(e,r)))&&Ee(this.baseMutations,t.baseMutations,((e,r)=>ho(e,r)))}}class wi{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){J(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return oh})();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new wi(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,F;function Th(n){switch(n){case P.OK:return M(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function Ih(n){if(n===void 0)return ie("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:n})}}(F=Y||(Y={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ui([4294967295,4294967295],0);class Ah{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ei(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Rh(n,t){return ei(n,t.toTimestamp())}function ge(n){return J(!!n,49232),K.fromTimestamp((function(e){const r=se(e);return new W(r.seconds,r.nanos)})(n))}function ba(n,t){return ni(n,t).canonicalString()}function ni(n,t){const e=(function(s){return new Q(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Sh(n){const t=Q.fromString(n);return J(kh(t),10190,{key:t.toString()}),t}function ri(n,t){return ba(n.databaseId,t.path)}function Ph(n){const t=Sh(n);return t.length===4?Q.emptyPath():bh(t)}function Ch(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bh(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function mo(n,t,e){return{name:ri(n,t),fields:e.value.mapValue.fields}}function Vh(n,t){let e;if(t instanceof un)e={update:mo(n,t.key,t.value)};else if(t instanceof Ca)e={delete:ri(n,t.key)};else if(t instanceof le)e={update:mo(n,t.key,t.data),updateMask:Oh(t.fieldMask)};else{if(!(t instanceof yh))return M(16599,{Rt:t.type});e={verify:ri(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,u){const c=u.transform;if(c instanceof rn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof sn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof on)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof tr)return{fieldPath:u.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:u.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Rh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(n,t.precondition)),e}function Dh(n,t){return n&&n.length>0?(J(t!==void 0,14353),n.map((e=>(function(s,o){let u=s.updateTime?ge(s.updateTime):ge(o);return u.isEqual(K.min())&&(u=ge(o)),new mh(u,s.transformResults||[])})(e,t)))):[]}function Nh(n){let t=Ph(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){J(r===1,65062);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=(function(A){const R=Va(A);return R instanceof Ht&&fa(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(A){return A.map((R=>(function(V){return new Yn(pe(V.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(R)))})(e.orderBy));let c=null;e.limit&&(c=(function(A){let R;return R=typeof A=="object"?A.value:A,gi(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(A){const R=!!A.before,b=A.values||[];return new Jn(b,R)})(e.startAt));let p=null;return e.endAt&&(p=(function(A){const R=!A.before,b=A.values||[];return new Jn(b,R)})(e.endAt)),Zc(t,s,u,o,c,"F",f,p)}function Va(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pe(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pe(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=pe(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(e){return nt.create(pe(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ht.create(e.compositeFilter.filters.map((r=>Va(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(n):M(30097,{filter:n})}function pe(n){return ot.fromServerFormat(n.fieldPath)}function Oh(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t){this.gt=t}}function Mh(n){const t=Nh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ti(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.Dn=new Lh}addToCollectionParentIndex(t,e){return this.Dn.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(zt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Lh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new at(Q.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new at(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Da=41943040;class Et{static withCacheSize(t){return new Et(t,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(Da,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ae(0)}static ur(){return new Ae(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="LruGarbageCollector",Uh=1048576;function yo([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class Bh{constructor(t){this.Tr=t,this.buffer=new at(yo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();yo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class jh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){D(_o,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ln(e)?D(_o,"Ignoring IndexedDB error during garbage collection: ",e):await di(e)}await this.Rr(3e5)}))}}class $h{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return S.resolve(pi.ue);const r=new Bh(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(go)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),go):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,u,c,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((A=>(A>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),s=this.params.maximumSequenceNumbersToCollect):s=A,u=Date.now(),this.nthSequenceNumber(t,s)))).next((A=>(r=A,c=Date.now(),this.removeTargets(t,r,e)))).next((A=>(o=A,f=Date.now(),this.removeOrphanedDocuments(t,r)))).next((A=>(p=Date.now(),de()<=L.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-I}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${A} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:A}))))}}function qh(n,t){return new $h(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.changes=new ae((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&Xe(r.mutation,s,St.empty(),W.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,pt()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=pt()){const s=te();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let u=xn();return o.forEach(((c,f)=>{u=u.insert(c,f.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=te();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,pt())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,r,s){let o=Zn();const u=Qe(),c=(function(){return Qe()})();return e.forEach(((f,p)=>{const I=r.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof le)?o=o.insert(p.key,p):I!==void 0?(u.set(p.key,I.mutation.getFieldMask()),Xe(I.mutation,p,I.mutation.getFieldMask(),W.now())):u.set(p.key,St.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((p,I)=>u.set(p,I))),e.forEach(((p,I)=>{var A;return c.set(p,new Hh(I,(A=u.get(p))!==null&&A!==void 0?A:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=Qe();let s=new vt(((u,c)=>u-c)),o=pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((f=>{const p=e.get(f);if(p===null)return;let I=r.get(f)||St.empty();I=c.applyToLocalView(p,I),r.set(f,I);const A=(s.get(c.batchId)||pt()).add(f);s=s.insert(c.batchId,A)}))})).next((()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),p=f.key,I=f.value,A=va();I.forEach((R=>{if(!o.has(R)){const b=Sa(e.get(R),r.get(R));b!==null&&A.set(R,b),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,p,A))}return S.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):eh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):S.resolve(te());let c=en,f=o;return u.next((p=>S.forEach(p,((I,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(I)?S.resolve():this.remoteDocumentCache.getEntry(t,I).next((R=>{f=f.insert(I,R)}))))).next((()=>this.populateOverlays(t,p,o))).next((()=>this.computeViews(t,f,p,pt()))).next((I=>({batchId:c,changes:Ea(I)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((r=>{let s=xn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=xn();return this.indexManager.getCollectionParents(t,o).next((c=>S.forEach(c,(f=>{const p=(function(A,R){return new ir(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,s).next((I=>{I.forEach(((A,R)=>{u=u.insert(A,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((u=>{o.forEach(((f,p)=>{const I=p.getKey();u.get(I)===null&&(u=u.insert(I,At.newInvalidDocument(I)))}));let c=xn();return u.forEach(((f,p)=>{const I=o.get(f);I!==void 0&&Xe(I.mutation,p,St.empty(),W.now()),Ii(e,p)&&(c=c.insert(f,p))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return S.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:ge(s.createTime)}})(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:Mh(s.bundledQuery),readTime:ge(s.readTime)}})(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.overlays=new vt(x.comparator),this.kr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=te();return S.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),S.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const s=te(),o=e.length+1,u=new x(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&s.set(f.getKey(),f)}return S.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new vt(((p,I)=>p-I));const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let I=o.get(p.largestBatchId);I===null&&(I=te(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const c=te(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((p,I)=>c.set(p,I))),!(c.size()>=s)););return S.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new vh(e,r));let o=this.kr.get(e);o===void 0&&(o=pt(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.qr=new at(et.Qr),this.$r=new at(et.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new et(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new et(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new x(new Q([])),r=new et(e,t),s=new et(e,t+1),o=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new x(new Q([])),r=new et(e,t),s=new et(e,t+1);let o=pt();return this.$r.forEachInRange([r,s],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new et(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return x.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new at(et.Qr)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Eh(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.Yr=this.Yr.add(new et(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?mi:this.er-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new et(e,0),s=new et(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(u=>{const c=this.Zr(u.Hr);o.push(c)})),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new at(U);return e.forEach((s=>{const o=new et(s,0),u=new et(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(c=>{r=r.add(c.Hr)}))})),S.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const u=new et(new x(o),0);let c=new at(U);return this.Yr.forEachWhile((f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(c=c.add(f.Hr)),!0)}),u),S.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){J(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return S.forEach(e.mutations,(s=>{const o=new et(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new et(e,0),s=this.Yr.firstAfterOrEqual(r);return S.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(t){this.ni=t,this.docs=(function(){return new vt(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=Zn();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))})),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Zn();const u=e.path,c=new x(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||Vc(bc(I),r)<=0||(s.has(I.key)||Ii(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ri(t,e){return S.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Yh(this)}getSize(t){return S.resolve(this.size)}}class Yh extends zh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),S.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t){this.persistence=t,this.ii=new ae((e=>vi(e)),Ti),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.si=0,this.oi=new Ri,this.targetCount=0,this._i=Ae.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),S.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ae(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.hr(e),S.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),S.waitFor(o).next((()=>s))}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((u=>{o.push(s.markPotentiallyOrphaned(t,u))})),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e){this.ai={},this.overlays={},this.ui=new pi(0),this.ci=!1,this.ci=!0,this.li=new Qh,this.referenceDelegate=t(this),this.hi=new Zh(this),this.indexManager=new Fh,this.remoteDocumentCache=(function(s){return new Jh(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new xh(e),this.Ti=new Kh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Wh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Xh(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){D("MemoryPersistence","Starting transaction:",t);const s=new tf(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return S.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class tf extends Nc{constructor(t){super(),this.currentSequenceNumber=t}}class Si{constructor(t){this.persistence=t,this.Ai=new Ri,this.Ri=null}static Vi(t){return new Si(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),S.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.mi,(r=>{const s=x.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,K.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return S.or([()=>S.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class er{constructor(t,e){this.persistence=t,this.gi=new ae((r=>xc(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=qh(this,e)}static Vi(t,e){return new er(t,e)}Ii(){}di(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return S.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?S.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(u=>this.Sr(t,u,e).next((c=>{c||(r++,o.removeEntry(u,K.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),S.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Un(t.data.value)),e}Sr(t,e,r){return S.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return S.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=pt(),s=pt();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Pi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Zl()?8:Oc(Jl())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new ef;return this.ws(t,e,u).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,u,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(de()<=L.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ze(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),S.resolve()):(de()<=L.DEBUG&&D("QueryEngine","Query:",ze(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(de()<=L.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ze(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ne(e))):S.resolve())}ps(t,e){if(uo(e))return S.resolve(null);let r=ne(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=ti(e,null,"F"),r=ne(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=pt(...o);return this.gs.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,r).next((f=>{const p=this.bs(e,c);return this.Ds(e,p,u,f.readTime)?this.ps(t,ti(e,null,"F")):this.vs(t,p,e,f)}))))})))))}ys(t,e,r,s){return uo(e)||s.isEqual(K.min())?S.resolve(null):this.gs.getDocuments(t,r).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,r,s)?S.resolve(null):(de()<=L.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ze(e)),this.vs(t,u,e,Cc(s,en)).next((c=>c)))}))}bs(t,e){let r=new at(rh(t));return e.forEach(((s,o)=>{Ii(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return de()<=L.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ze(e)),this.gs.getDocumentsMatchingQuery(t,e,zt.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="LocalStore";class sf{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new vt(U),this.Ms=new ae((o=>vi(o)),Ti),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gh(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function of(n,t,e,r){return new sf(n,t,e,r)}async function Oa(n,t){const e=z(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],c=[];let f=pt();for(const p of s){u.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next((p=>({Bs:p,removedBatchIds:u,addedBatchIds:c})))}))}))}function af(n,t){const e=z(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,f,p,I){const A=p.batch,R=A.keys();let b=S.resolve();return R.forEach((V=>{b=b.next((()=>I.getEntry(f,V))).next((k=>{const O=p.docVersions.get(V);J(O!==null,48541),k.version.compareTo(O)<0&&(A.applyToRemoteDocument(k,p),k.isValidDocument()&&(k.setReadTime(p.commitVersion),I.addEntry(k)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(f,A)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let f=pt();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(f=f.add(c.batch.mutations[p].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function lf(n){const t=z(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function uf(n,t){const e=z(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=mi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}class Eo{constructor(){this.activeTargetIds=uh()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class cf{constructor(){this.Fo=new Eo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Eo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="ConnectivityMonitor";class To{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(vo,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){D(vo,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn=null;function ii(){return Mn===null?Mn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mn++,"0x"+Mn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="RestConnection",ff={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class df{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Qn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const u=ii(),c=this.Go(t,e.toUriEncodedString());D(Br,`Sending RPC '${t}' ${u}:`,c,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,s,o);const{host:p}=new URL(c),I=ai(p);return this.jo(t,c,f,r,I).then((A=>(D(Br,`Received RPC '${t}' ${u}: `,A),A)),(A=>{throw ye(Br,`RPC '${t}' ${u} failed with error: `,A,"url: ",c,"request:",r),A}))}Jo(t,e,r,s,o,u){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Re})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=ff[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class mf extends df{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const u=ii();return new Promise(((c,f)=>{const p=new Ho;p.setWithCredentials(!0),p.listenOnce(Go.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Ln.NO_ERROR:const A=p.getResponseJson();D(ft,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(A)),c(A);break;case Ln.TIMEOUT:D(ft,`RPC '${t}' ${u} timed out`),f(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const R=p.getStatus();if(D(ft,`RPC '${t}' ${u} failed with status:`,R,"response text:",p.getResponseText()),R>0){let b=p.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const k=(function(G){const j=G.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(j)>=0?j:P.UNKNOWN})(V.status);f(new N(k,V.message))}else f(new N(P.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new N(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:p.getLastErrorCode(),h_:p.getLastError()})}}finally{D(ft,`RPC '${t}' ${u} completed.`)}}));const I=JSON.stringify(s);D(ft,`RPC '${t}' ${u} sending request:`,s),p.send(e,"POST",I,r,15)}))}P_(t,e,r){const s=ii(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Qo(),c=Wo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(f.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,e,r),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ft,`Creating RPC '${t}' stream ${s}: ${I}`,f);const A=u.createWebChannel(I,f);this.T_(A);let R=!1,b=!1;const V=new pf({Ho:O=>{b?D(ft,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(R||(D(ft,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),D(ft,`RPC '${t}' stream ${s} sending:`,O),A.send(O))},Yo:()=>A.close()}),k=(O,G,j)=>{O.listen(G,(q=>{try{j(q)}catch(tt){setTimeout((()=>{throw tt}),0)}}))};return k(A,He.EventType.OPEN,(()=>{b||(D(ft,`RPC '${t}' stream ${s} transport opened.`),V.s_())})),k(A,He.EventType.CLOSE,(()=>{b||(b=!0,D(ft,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(A))})),k(A,He.EventType.ERROR,(O=>{b||(b=!0,ye(ft,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),V.__(new N(P.UNAVAILABLE,"The operation could not be completed")))})),k(A,He.EventType.MESSAGE,(O=>{var G;if(!b){const j=O.data[0];J(!!j,16349);const q=j,tt=(q==null?void 0:q.error)||((G=q[0])===null||G===void 0?void 0:G.error);if(tt){D(ft,`RPC '${t}' stream ${s} received error:`,tt);const Wt=tt.status;let yt=(function(g){const _=Y[g];if(_!==void 0)return Ih(_)})(Wt),E=tt.message;yt===void 0&&(yt=P.INTERNAL,E="Unknown error status: "+Wt+" with message "+tt.message),b=!0,V.__(new N(yt,E)),A.close()}else D(ft,`RPC '${t}' stream ${s} received:`,j),V.a_(j)}})),k(c,Ko.STAT_EVENT,(O=>{O.stat===Wr.PROXY?D(ft,`RPC '${t}' stream ${s} detected buffering proxy`):O.stat===Wr.NOPROXY&&D(ft,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(n){return new Ah(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="PersistentStream";class gf{constructor(t,e,r,s,o,u,c,f){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new ka(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(ie(e.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return D(Io,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(D(Io,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class _f extends gf{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return J(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,J(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){J(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Dh(t.writeResults,t.commitTime),r=ge(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Ch(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>Vh(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{}class Ef extends yf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,ni(e,r),s,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Jo(t,ni(e,r),s,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(P.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class vf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ie(e),this._a=!1):D("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="RemoteStore";class Tf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{fn(this)&&(D(cn,"Restarting streams for network reachability change."),await(async function(f){const p=z(f);p.Ia.add(4),await hn(p),p.Aa.set("Unknown"),p.Ia.delete(4),await lr(p)})(this))}))})),this.Aa=new vf(r,s)}}async function lr(n){if(fn(n))for(const t of n.da)await t(!0)}async function hn(n){for(const t of n.da)await t(!1)}function fn(n){return z(n).Ia.size===0}async function xa(n,t,e){if(!ln(t))throw t;n.Ia.add(1),await hn(n),n.Aa.set("Offline"),e||(e=()=>lf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{D(cn,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await lr(n)}))}function Ma(n,t){return t().catch((e=>xa(n,e,t)))}async function ur(n){const t=z(n),e=Gt(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:mi;for(;If(t);)try{const s=await uf(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Af(t,s)}catch(s){await xa(t,s)}Fa(t)&&La(t)}function If(n){return fn(n)&&n.Pa.length<10}function Af(n,t){n.Pa.push(t);const e=Gt(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function Fa(n){return fn(n)&&!Gt(n).M_()&&n.Pa.length>0}function La(n){Gt(n).start()}async function wf(n){Gt(n).na()}async function Rf(n){const t=Gt(n);for(const e of n.Pa)t.X_(e.mutations)}async function Sf(n,t,e){const r=n.Pa.shift(),s=wi.from(r,t,e);await Ma(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await ur(n)}async function Pf(n,t){t&&Gt(n).Z_&&await(async function(r,s){if((function(u){return Th(u)&&u!==P.ABORTED})(s.code)){const o=r.Pa.shift();Gt(r).N_(),await Ma(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await ur(r)}})(n,t),Fa(n)&&La(n)}async function Ao(n,t){const e=z(n);e.asyncQueue.verifyOperationInProgress(),D(cn,"RemoteStore received new credentials");const r=fn(e);e.Ia.add(3),await hn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await lr(e)}async function Cf(n,t){const e=z(n);t?(e.Ia.delete(2),await lr(e)):t||(e.Ia.add(2),await hn(e),e.Aa.set("Unknown"))}function Gt(n){return n.ma||(n.ma=(function(e,r,s){const o=z(e);return o.ia(),new _f(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:wf.bind(null,n),n_:Pf.bind(null,n),ea:Rf.bind(null,n),ta:Sf.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await ur(n)):(await n.ma.stop(),n.Pa.length>0&&(D(cn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new Ci(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ua(n,t){if(ie("AsyncQueue",`${t}: ${n}`),ln(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}class bf{constructor(){this.queries=wo(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=z(e),o=s.queries;s.queries=wo(),o.forEach(((u,c)=>{for(const f of c.wa)f.onError(r)}))})(this,new N(P.ABORTED,"Firestore shutting down"))}}function wo(){return new ae((n=>_a(n)),ga)}function Vf(n){n.Da.forEach((t=>{t.next()}))}var Ro,So;(So=Ro||(Ro={})).Fa="default",So.Cache="cache";const Df="SyncEngine";class Nf{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ae((c=>_a(c)),ga),this.Tu=new Map,this.Iu=new Set,this.du=new vt(x.comparator),this.Eu=new Map,this.Au=new Ri,this.Ru={},this.Vu=new Map,this.mu=Ae.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Of(n,t,e){const r=Ff(n);try{const s=await(function(u,c){const f=z(u),p=W.now(),I=c.reduce(((b,V)=>b.add(V.key)),pt());let A,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=Zn(),k=pt();return f.Os.getEntries(b,I).next((O=>{V=O,V.forEach(((G,j)=>{j.isValidDocument()||(k=k.add(G))}))})).next((()=>f.localDocuments.getOverlayedDocuments(b,V))).next((O=>{A=O;const G=[];for(const j of c){const q=_h(j,A.get(j.key).overlayedDocument);q!=null&&G.push(new le(j.key,q,ua(q.value.mapValue),Ot.exists(!0)))}return f.mutationQueue.addMutationBatch(b,p,G,c)})).next((O=>{R=O;const G=O.applyToLocalDocumentSet(A,k);return f.documentOverlayCache.saveOverlays(b,O.batchId,G)}))})).then((()=>({batchId:R.batchId,changes:Ea(A)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(u,c,f){let p=u.Ru[u.currentUser.toKey()];p||(p=new vt(U)),p=p.insert(c,f),u.Ru[u.currentUser.toKey()]=p})(r,s.batchId,e),await cr(r,s.changes),await ur(r.remoteStore)}catch(s){const o=Ua(s,"Failed to persist write");e.reject(o)}}function Po(n,t,e){const r=z(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,u)=>{const c=u.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(u,c){const f=z(u);f.onlineState=c;let p=!1;f.queries.forEach(((I,A)=>{for(const R of A.wa)R.va(c)&&(p=!0)})),p&&Vf(f)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kf(n,t){const e=z(n),r=t.batch.batchId;try{const s=await af(e.localStore,t);ja(e,r,null),Ba(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await cr(e,s)}catch(s){await di(s)}}async function xf(n,t,e){const r=z(n);try{const s=await(function(u,c){const f=z(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let I;return f.mutationQueue.lookupMutationBatch(p,c).next((A=>(J(A!==null,37113),I=A.keys(),f.mutationQueue.removeMutationBatch(p,A)))).next((()=>f.mutationQueue.performConsistencyCheck(p))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,c))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I))).next((()=>f.localDocuments.getDocuments(p,I)))}))})(r.localStore,t);ja(r,t,e),Ba(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await cr(r,s)}catch(s){await di(s)}}function Ba(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function ja(n,t,e){const r=z(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}async function cr(n,t,e){const r=z(n),s=[],o=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,f)=>{u.push(r.gu(f,t,e).then((p=>{var I;if((p||e)&&r.isPrimaryClient){const A=p?!p.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,A?"current":"not-current")}if(p){s.push(p);const A=Pi.Es(f.targetId,p);o.push(A)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(f,p){const I=z(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(A=>S.forEach(p,(R=>S.forEach(R.Is,(b=>I.persistence.referenceDelegate.addReference(A,R.targetId,b))).next((()=>S.forEach(R.ds,(b=>I.persistence.referenceDelegate.removeReference(A,R.targetId,b)))))))))}catch(A){if(!ln(A))throw A;D(rf,"Failed to update sequence numbers: "+A)}for(const A of p){const R=A.targetId;if(!A.fromCache){const b=I.Fs.get(R),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);I.Fs=I.Fs.insert(R,k)}}})(r.localStore,o))}async function Mf(n,t){const e=z(n);if(!e.currentUser.isEqual(t)){D(Df,"User change. New user:",t.toKey());const r=await Oa(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((c=>{c.forEach((f=>{f.reject(new N(P.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await cr(e,r.Bs)}}function Ff(n){const t=z(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=kf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xf.bind(null,t),t}class nr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ar(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return of(this.persistence,new nf,t.initialUser,this.serializer)}Du(t){return new Na(Si.Vi,this.serializer)}bu(t){return new cf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nr.provider={build:()=>new nr};class Lf extends nr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){J(this.persistence.referenceDelegate instanceof er,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new jh(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Na((r=>er.Vi(r,e)),this.serializer)}}class si{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Po(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Mf.bind(null,this.syncEngine),await Cf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new bf})()}createDatastore(t){const e=ar(t.databaseInfo.databaseId),r=(function(o){return new mf(o)})(t.databaseInfo);return(function(o,u,c,f){return new Ef(o,u,c,f)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,u,c){return new Tf(r,s,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>Po(this.syncEngine,e,0)),(function(){return To.C()?new To:new hf})())}createSyncEngine(t,e){return(function(s,o,u,c,f,p,I){const A=new Nf(s,o,u,c,f,p);return I&&(A.fu=!0),A})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=z(s);D(cn,"RemoteStore shutting down."),o.Ia.add(5),await hn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}si.provider={build:()=>new si};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="FirestoreClient";class Uf{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=hi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{D(Kt,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(D(Kt,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ua(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function $r(n,t){n.asyncQueue.verifyOperationInProgress(),D(Kt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Oa(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{ye("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ye("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function Co(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bf(n);D(Kt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>Ao(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ao(t.remoteStore,s))),n._onlineComponents=t}async function Bf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D(Kt,"Using user provided OfflineComponentProvider");try{await $r(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ye("Error using user provided cache. Falling back to memory cache: "+e),await $r(n,new nr)}}else D(Kt,"Using default OfflineComponentProvider"),await $r(n,new Lf(void 0));return n._offlineComponents}async function jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D(Kt,"Using user provided OnlineComponentProvider"),await Co(n,n._uninitializedComponentsProvider._online)):(D(Kt,"Using default OnlineComponentProvider"),await Co(n,new si))),n._onlineComponents}function $f(n){return jf(n).then((t=>t.syncEngine))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bo=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="firestore.googleapis.com",Vo=!0;class Do{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qa,this.ssl=Vo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Vo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Da;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Uh)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$a((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Do({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Do(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new _c;switch(r.type){case"firstParty":return new Tc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=bo.get(e);r&&(D("ComponentProvider","Removing Datastore"),bo.delete(e),r.terminate())})(this),Promise.resolve()}}function qf(n,t,e,r={}){var s;n=ta(n,hr);const o=ai(t),u=n._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),f=`${t}:${e}`;o&&(Gl(`https://${f}`),Xl("Firestore",!0)),u.host!==qa&&u.host!==f&&ye("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:f,ssl:o,emulatorOptions:r});if(!zn(p,c)&&(n._setSettings(p),r.mockUserToken)){let I,A;if(typeof r.mockUserToken=="string")I=r.mockUserToken,A=dt.MOCK_USER;else{I=Kl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const R=r.mockUserToken.sub||r.mockUserToken.user_id;if(!R)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new dt(R)}n._authCredentials=new yc(new Jo(I,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new bi(this.firestore,t,this._query)}}class mt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,mt._jsonSchema))return new mt(t,r||null,new x(Q.fromString(e.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:Z("string",mt._jsonSchemaVersion),referencePath:Z("string")};class qt extends bi{constructor(t,e,r){super(t,e,th(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new x(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function hd(n,t,...e){if(n=Ye(n),Yo("collection","path",t),n instanceof hr){const r=Q.fromString(t,...e);return Ys(r),new qt(n,null,r)}{if(!(n instanceof mt||n instanceof qt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Ys(r),new qt(n.firestore,null,r)}}function zf(n,t,...e){if(n=Ye(n),arguments.length===1&&(t=hi.newId()),Yo("doc","path",t),n instanceof hr){const r=Q.fromString(t,...e);return Js(r),new mt(n,null,new x(r))}{if(!(n instanceof mt||n instanceof qt))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Q.fromString(t,...e));return Js(r),new mt(n.firestore,n instanceof qt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="AsyncQueue";class Oo{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new ka(this,"async_queue_retry"),this.oc=()=>{const r=jr();r&&D(No,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=jr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=jr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new ee;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!ln(t))throw t;D(No,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,ie("INTERNAL UNHANDLED ERROR: ",ko(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&M(47125,{hc:ko(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function ko(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class za extends hr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Oo,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Oo(t),this._firestoreClient=void 0,await t}}}function Hf(n,t){const e=typeof n=="object"?n:oc(),r=typeof n=="string"?n:Qn,s=ec(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=zl("firestore");o&&qf(s,...o)}return s}function Gf(n){if(n._terminated)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Kf(n),n._firestoreClient}function Kf(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,f,p,I){return new Uc(c,f,p,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,$a(I.experimentalLongPollingOptions),I.useFetchStreams,I.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Uf(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rt(Ct.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Rt(Ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,Rt._jsonSchema))return Rt.fromBase64String(t.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Z("string",Rt._jsonSchemaVersion),bytes:Z("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(an(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:Z("string",kt._jsonSchemaVersion),latitude:Z("number"),longitude:Z("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,xt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new xt(t.vectorValues);throw new N(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:Z("string",xt._jsonSchemaVersion),vectorValues:Z("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=/^__.*__$/;class Qf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new un(t,this.data,e,this.fieldTransforms)}}function Ha(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:n})}}class Ni{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ni(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return rr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Ha(this.Ec)&&Wf.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Xf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ar(t)}Dc(t,e,r,s=!1){return new Ni({Ec:t,methodName:e,bc:r,path:ot.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jf(n){const t=n._freezeSettings(),e=ar(n._databaseId);return new Xf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Yf(n,t,e,r,s,o={}){const u=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Qa("Data must be an object, but it was:",u,r);const c=Ka(r,u);let f,p;if(o.merge)f=new St(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const A of o.mergeFields){const R=Zf(t,A,e);if(!u.contains(R))throw new N(P.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ed(I,R)||I.push(R)}f=new St(I),p=u.fieldTransforms.filter((A=>f.covers(A.field)))}else f=null,p=u.fieldTransforms;return new Qf(new wt(c),f,p)}class Oi extends Di{_toFieldTransform(t){return new dh(t.path,new rn)}isEqual(t){return t instanceof Oi}}function Ga(n,t){if(Wa(n=Ye(n)))return Qa("Unsupported field value:",t,n),Ka(n,t);if(n instanceof Di)return(function(r,s){if(!Ha(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let u=0;for(const c of r){let f=Ga(c,s.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ch(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=W.fromDate(r);return{timestampValue:ei(s.serializer,o)}}if(r instanceof W){const o=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ei(s.serializer,o)}}if(r instanceof kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:wh(s.serializer,r._byteString)};if(r instanceof mt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:ba(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xt)return(function(u,c){return{mapValue:{fields:{[aa]:{stringValue:la},[Xr]:{arrayValue:{values:u.toArray().map((p=>{if(typeof p!="number")throw c.wc("VectorValues must only contain numeric values.");return Ai(c.serializer,p)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fi(r)}`)})(n,t)}function Ka(n,t){const e={};return na(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Se(n,((r,s)=>{const o=Ga(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function Wa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof kt||n instanceof Rt||n instanceof mt||n instanceof Di||n instanceof xt)}function Qa(n,t,e){if(!Wa(e)||!Zo(e)){const r=fi(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Zf(n,t,e){if((t=Ye(t))instanceof Vi)return t._internalPath;if(typeof t=="string")return Xa(n,t);throw rr("Field path arguments must be of type string or ",n,!1,void 0,e)}const td=new RegExp("[~\\*/\\[\\]]");function Xa(n,t,e){if(t.search(td)>=0)throw rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Vi(...t.split("."))._internalPath}catch{throw rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function rr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new N(P.INVALID_ARGUMENT,c+n+f)}function ed(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ya("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nd extends Ja{data(){return super.data()}}function Ya(n,t){return typeof t=="string"?Xa(n,t):t instanceof Vi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _e extends Ja{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ya("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_e._jsonSchemaVersion="firestore/documentSnapshot/1.0",_e._jsonSchema={type:Z("string",_e._jsonSchemaVersion),bundleSource:Z("string","DocumentSnapshot"),bundleName:Z("string"),bundle:Z("string")};class $n extends _e{data(t={}){return super.data(t)}}class Je{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new $n(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((c=>{const f=new $n(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const f=new $n(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,I=-1;return c.type!==0&&(p=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),I=u.indexOf(c.doc.key)),{type:id(c.type),doc:f,oldIndex:p,newIndex:I}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Je._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=hi.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function id(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}Je._jsonSchemaVersion="firestore/querySnapshot/1.0",Je._jsonSchema={type:Z("string",Je._jsonSchemaVersion),bundleSource:Z("string","QuerySnapshot"),bundleName:Z("string"),bundle:Z("string")};function fd(n,t){const e=ta(n.firestore,za),r=zf(n),s=rd(n.converter,t);return sd(e,[Yf(Jf(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then((()=>r))}function sd(n,t){return(function(r,s){const o=new ee;return r.asyncQueue.enqueueAndForget((async()=>Of(await $f(r),s,o))),o.promise})(Gf(n),t)}function dd(){return new Oi("serverTimestamp")}(function(t,e=!0){(function(s){Re=s})(sc),Gn(new Ze("firestore",((r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new za(new Ec(r.getProvider("auth-internal")),new Ic(u,r.getProvider("app-check-internal")),(function(p,I){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xn(p.options.projectId,I)})(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),me(Gs,Ks,t),me(Gs,Ks,"esm2017")})();var od="firebase",ad="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */me(od,ad,"app");const ld={apiKey:"AIzaSyDldazqAxxj_4uyYQk3UdEUtdt60s0y0xs",authDomain:"helpful-topic-482712-p8.firebaseapp.com",projectId:"helpful-topic-482712-p8",storageBucket:"helpful-topic-482712-p8.firebasestorage.app",messagingSenderId:"427548918732",appId:"1:427548918732:web:94fe39ac8c21a65f841369"},ud=$o(ld),pd=Hf(ud);export{fd as a,hd as c,pd as d,dd as s};
