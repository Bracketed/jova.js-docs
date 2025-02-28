(()=>{"use strict";var e={913:function(){try{self["workbox:core:7.2.0"]&&_()}catch(e){}},977:function(){try{self["workbox:precaching:7.2.0"]&&_()}catch(e){}},80:function(){try{self["workbox:routing:7.2.0"]&&_()}catch(e){}},873:function(){try{self["workbox:strategies:7.2.0"]&&_()}catch(e){}}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.rv=function(){return"1.2.0-alpha.0"},s.ruid="bundler=rspack@1.2.0-alpha.0",(()=>{let e;s("913");let t=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class a extends Error{constructor(e,s){super(t(e,s)),this.name=e,this.details=s}}let i={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[i.prefix,e,i.suffix].filter(e=>e&&e.length>0).join("-"),n=e=>e||r(i.precache),l=e=>e||r(i.runtime);function c(e,t){let s=t();return e.waitUntil(s),s}s("977");class o{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){let e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class h{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{let s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}async function u(t,s){let i=null;if(t.url&&(i=new URL(t.url).origin),i!==self.location.origin)throw new a("cross-origin-copy-response",{origin:i});let r=t.clone(),n={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},l=s?s(n):n,c=!function(){if(void 0===e){let t=new Response("");if("body"in t)try{new Response(t.body),e=!0}catch(t){e=!1}e=!1}return e}()?await r.blob():r.body;return new Response(c,l)}let f=e=>new URL(String(e),location.href).href.replace(RegExp(`^${location.origin}`),"");function d(e,t){let s=new URL(e);for(let e of t)s.searchParams.delete(e);return s.href}async function g(e,t,s,a){let i=d(t.url,s);if(t.url===i)return e.match(t,a);let r=Object.assign(Object.assign({},a),{ignoreSearch:!0});for(let n of(await e.keys(t,r)))if(i===d(n.url,s))return e.match(n,a)}class p{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}let y=new Set;async function w(){for(let e of y)await e()}function b(e){return"string"==typeof e?new Request(e):e}s("873");class C{constructor(e,t){for(let s of(this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map,this._plugins))this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,s=b(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){let e=await t.preloadResponse;if(e)return e}let i=this.hasCallback("fetchDidFail")?s.clone():null;try{for(let e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new a("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}let r=s.clone();try{let e;for(let a of(e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions),this.iterateCallbacks("fetchDidSucceed")))e=await a({event:t,request:r,response:e});return e}catch(e){throw i&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:i.clone(),request:r.clone()}),e}}async fetchAndCachePut(e){let t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){let t;let s=b(e),{cacheName:a,matchOptions:i}=this._strategy,r=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},i),{cacheName:a});for(let e of(t=await caches.match(r,n),this.iterateCallbacks("cachedResponseWillBeUsed")))t=await e({cacheName:a,matchOptions:i,cachedResponse:t,request:r,event:this.event})||void 0;return t}async cachePut(e,t){let s=b(e);await new Promise(e=>setTimeout(e,0));let i=await this.getCacheKey(s,"write");if(!t)throw new a("cache-put-with-no-response",{url:f(i.url)});let r=await this._ensureResponseSafeToCache(t);if(!r)return!1;let{cacheName:n,matchOptions:l}=this._strategy,c=await self.caches.open(n),o=this.hasCallback("cacheDidUpdate"),h=o?await g(c,i.clone(),["__WB_REVISION__"],l):null;try{await c.put(i,o?r.clone():r)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await w(),e}for(let e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:n,oldResponse:h,newResponse:r.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){let s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(let e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=b(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if("function"==typeof t[e]){let s=this._pluginStateMap.get(t),a=a=>{let i=Object.assign(Object.assign({},a),{state:s});return t[e](i)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(let e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return!s&&t&&200!==t.status&&(t=void 0),t}}class m{constructor(e={}){this.cacheName=l(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a=new C(this,{event:t,request:s,params:"params"in e?e.params:void 0}),i=this._getResponse(a,s,t),r=this._awaitComplete(i,a,s,t);return[i,r]}async _getResponse(e,t,s){let i;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(!(i=await this._handle(t,e))||"error"===i.type)throw new a("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(let r of e.iterateCallbacks("handlerDidError"))if(i=await r({error:a,event:s,request:t}))break}if(i);else throw a}for(let a of e.iterateCallbacks("handlerWillRespond"))i=await a({event:s,request:t,response:i});return i}async _awaitComplete(e,t,s,a){let i,r;try{i=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:i}),await t.doneWaiting()}catch(e){e instanceof Error&&(r=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:i,error:r}),t.destroy(),r)throw r}}class v extends m{constructor(e={}){e.cacheName=n(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){let s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;let i=t.params||{};if(this._fallbackToNetwork){let a=i.integrity,r=e.integrity,n=!r||r===a;s=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?r||a:void 0})),a&&n&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone()))}else throw new a("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();let s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new a("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(let[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await u(e):e};class R{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:n(e),plugins:[...t,new h({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){let t=[];for(let s of e){"string"==typeof s?t.push(s):s&&void 0===s.revision&&t.push(s.url);let{cacheKey:e,url:i}=function(e){if(!e)throw new a("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){let t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}let{revision:t,url:s}=e;if(!s)throw new a("add-to-cache-list-unexpected-type",{entry:e});if(!t){let e=new URL(s,location.href);return{cacheKey:e.href,url:e.href}}let i=new URL(s,location.href),r=new URL(s,location.href);return i.searchParams.set("__WB_REVISION__",t),{cacheKey:i.href,url:r.href}}(s),r="string"!=typeof s&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==e)throw new a("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:e});if("string"!=typeof s&&s.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==s.integrity)throw new a("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(e,s.integrity)}this._urlsToCacheKeys.set(i,e),this._urlsToCacheModes.set(i,r),t.length>0&&console.warn(`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`)}}install(e){return c(e,async()=>{let t=new o;for(let[s,a]of(this.strategy.plugins.push(t),this._urlsToCacheKeys)){let t=this._cacheKeysToIntegrities.get(a),i=this._urlsToCacheModes.get(s),r=new Request(s,{integrity:t,cache:i,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:r,event:e}))}let{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return c(e,async()=>{let e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(let i of t)s.has(i.url)||(await e.delete(i),a.push(i.url));return{deletedURLs:a}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){let t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){let t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){let t=this.getCacheKeyForURL(e);if(!t)throw new a("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}async function k(e){}s("80"),(async()=>{let e=function(){let e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"531f1465f661144a77bd7b0ff97315c7","url":"404.html"},{"revision":"927ca87257646d0d56c74a8cb109b806","url":"assets/css/styles.7809c27a.css"},{"revision":"85813e348b9cf636d451356ae18e19da","url":"assets/js/0058b4c6.74ebf8b6.js"},{"revision":"fadf754a15af851baee22f9e8e81567e","url":"assets/js/01b40511.bf3aafca.js"},{"revision":"04b96fdf0c9014f58bf2b77910db5f32","url":"assets/js/0a254c3c.40410379.js"},{"revision":"4252370d64f49ed2998f3825f074374e","url":"assets/js/0a56fc66.c6cab685.js"},{"revision":"30bfb0ba75986e79099e451ecf2692e7","url":"assets/js/0b925517.763f347c.js"},{"revision":"a597f39a2859807230497308017c5ffe","url":"assets/js/138e0e15.0b26511b.js"},{"revision":"5dc2982ada50e78c46b247d37590689e","url":"assets/js/1470.fd86b082.js"},{"revision":"fe9ff6427b8f1d2ef275c93cfeacfe4d","url":"assets/js/1570.6de13d7a.js"},{"revision":"caafa103642eaebb394cda4473de6cf9","url":"assets/js/17896441.00c25025.js"},{"revision":"fdbd6ca17fb993405b0dfb15abea8023","url":"assets/js/1a4e3797.d0fa28aa.js"},{"revision":"9550feb6c97d379d4acdc29d9d328e3c","url":"assets/js/1b2f92fe.b2b1b090.js"},{"revision":"b726c678d9ac5c29a725601170cb0180","url":"assets/js/1df93b7f.72c605a9.js"},{"revision":"2f4f376bc1abbe17ec13c0f074d4b5ee","url":"assets/js/22f96720.35229f48.js"},{"revision":"85e9eb3ac3726fdeb9b05c1fe69d37d6","url":"assets/js/232.b3e64dd7.js"},{"revision":"c0186e3fcec553438d5255a428c64a90","url":"assets/js/23e97db5.952d4900.js"},{"revision":"16f58ab0d60c30e7f8bf977e151d2efd","url":"assets/js/2a952abe.046f29b1.js"},{"revision":"1029adb63fbfbe08202b9cdb23bbc50d","url":"assets/js/2e6aecb5.34699522.js"},{"revision":"bec7e32c00c013e06b62f8a863342c05","url":"assets/js/32f7f5fb.27f78a46.js"},{"revision":"98ee51e07144323ba0ffd16ab7a0eda2","url":"assets/js/3853.28d74dd9.js"},{"revision":"729ec89113869504364ffb1134f660e8","url":"assets/js/3b5e5809.1bfa925e.js"},{"revision":"ef069b4953522ed705c7250059cd3f72","url":"assets/js/41d4908e.09cde115.js"},{"revision":"acc7338efcaf45507ee4e7f203a099b9","url":"assets/js/4298.78f16e0d.js"},{"revision":"4c203678029ac7fe9b4f4fff27473b88","url":"assets/js/460a5c42.479e6fdb.js"},{"revision":"e0754b817b0307751ca8c76c01d76e57","url":"assets/js/4819b5c0.15dc6a9d.js"},{"revision":"ccc23d90713b5146b87647b19424637f","url":"assets/js/491a3c5a.0e125bcf.js"},{"revision":"56b84bb90526ec8685ec276da296c710","url":"assets/js/4d345d15.19ac2999.js"},{"revision":"2f1cc93510b3d72e966221593ef86433","url":"assets/js/4d87a084.ca2ebfea.js"},{"revision":"9c2442278466e949e861cc4f3aeff07b","url":"assets/js/50fb016b.0d915707.js"},{"revision":"ed206bb85ba2fbb83f4f2e144978672d","url":"assets/js/5372a119.6787ae34.js"},{"revision":"c26f98ed9fbeabd880eee6fc9bab1300","url":"assets/js/53eb1a1f.7dfea1a2.js"},{"revision":"44788116d58cb754408b02c294e13a4e","url":"assets/js/5d3e46ae.0c102d8e.js"},{"revision":"c14708f8044b440e0aa2a4d80403b4f8","url":"assets/js/5e95c892.b09b8b13.js"},{"revision":"37238cad0505fd2bc6f4d1c7513b8c59","url":"assets/js/6021.77eb8a46.js"},{"revision":"9997d6e958ed9625682ad4e6bb045846","url":"assets/js/63b463da.33f8bb5f.js"},{"revision":"2b027eb6ff197d16465f81dd59563b5d","url":"assets/js/65862e46.ae26ac55.js"},{"revision":"a98a8afae4242d266ce624534c1a6b2e","url":"assets/js/6c3d938a.0b56a5d4.js"},{"revision":"b2d7ef4b9948e86332a694df0f119f79","url":"assets/js/71e6e207.58651795.js"},{"revision":"0239239a319d4231c2c5ae3e59845253","url":"assets/js/73155045.ca308f3f.js"},{"revision":"89c8d19470f9f1fb073341c5fc27710f","url":"assets/js/73227c53.3f784dc0.js"},{"revision":"243fb622dd680a3996610679b2df5460","url":"assets/js/7364.a80767e1.js"},{"revision":"d0bfa23ab2d30c18e29997337e29e6d7","url":"assets/js/75e891f0.6d2d5ffe.js"},{"revision":"f1f53aa9c94ef7bcb159caf5a01bdb0d","url":"assets/js/7790cdd0.2fa18f2d.js"},{"revision":"a8c710ab73fee8e1181f9c8a2dadc466","url":"assets/js/79bbaebb.1388b97b.js"},{"revision":"9419f468fa5eff15291fc1259797c3f5","url":"assets/js/7bfb57c5.b60584bf.js"},{"revision":"7d7cf722a27c98a0cc6e7567cae4a3e2","url":"assets/js/7d05e61c.a5bac95e.js"},{"revision":"73b1a3aa2380f116457460fb03191ca7","url":"assets/js/82874c7f.0069055e.js"},{"revision":"ea55f80d5ecb5138494de983fd8c394f","url":"assets/js/83b18ac7.9396aa25.js"},{"revision":"30f77949b5baf8738dac27ef81ffddf9","url":"assets/js/8513.b00f18c6.js"},{"revision":"c5d4e6ac23267fd3af5d3f40d6c21967","url":"assets/js/8592.34bcc5c0.js"},{"revision":"e8342913a6a18cef7f49bde51510375f","url":"assets/js/859b4626.ef44fca6.js"},{"revision":"adaf4f0e5e01ed91b576792fb9f541e5","url":"assets/js/85ca3e7c.cfbc2334.js"},{"revision":"ac9ada1a5d413063bf94dbb2b446e6ba","url":"assets/js/8679.1c8a3e48.js"},{"revision":"0da6609ab4d2c643632abfd0c4016b22","url":"assets/js/8d52ff63.28853cdf.js"},{"revision":"875f2a9624cc6b4252a6bc7ed7963100","url":"assets/js/8e75560d.7b5c8df1.js"},{"revision":"fec25e15b56a0dc88975534b50528c4f","url":"assets/js/93b76bb7.a26864c2.js"},{"revision":"2e409fc26a990add479961a1ec866c16","url":"assets/js/95b00cd7.822c1f5e.js"},{"revision":"1bc641590ce697d4146e8451fce96944","url":"assets/js/9ce40137.569cae4d.js"},{"revision":"dddf83bd3466a3b6965ff5bfaeb7867f","url":"assets/js/a155953f.ed8602a1.js"},{"revision":"0303ec87d4b429f858f1ab0e2937a2b9","url":"assets/js/a7456010.3946a6bd.js"},{"revision":"0b367af15629d33eee6e4e2f1759329a","url":"assets/js/a7bd4aaa.f112184e.js"},{"revision":"47337c0df9ba5fc6201185254541ba7c","url":"assets/js/a94703ab.50fc69de.js"},{"revision":"51c8709f3b4d4add1987eea4a97527b6","url":"assets/js/a9902515.b712b545.js"},{"revision":"8bb03d5b3f64f8604211591d98d60ddc","url":"assets/js/aa828512.b6b8b858.js"},{"revision":"f8fba613700d75cdbff1053d00a7465e","url":"assets/js/aba21aa0.fcac3fdc.js"},{"revision":"fb3985ce760e762ca1d1f0fe9b3c7c8d","url":"assets/js/af0d2f92.edffe2fb.js"},{"revision":"5ecec2fee940b7305c796d67eee44037","url":"assets/js/b260a133.b7ef1315.js"},{"revision":"82fc6e18d72122decdba6b743c70ffb1","url":"assets/js/b3e011bf.902b3a96.js"},{"revision":"147ae9ebc3677ed2fcd4075866977d3a","url":"assets/js/c2bc1534.e086fab3.js"},{"revision":"45a33ccc13c10f73920ac1bb7c7216b2","url":"assets/js/cd8d7b92.2b0b4e53.js"},{"revision":"cd0bdc1b2388222d12f26533da37bb22","url":"assets/js/d3bb509d.1c999dcc.js"},{"revision":"ad446e780316b302cec84d6d0dd62b11","url":"assets/js/dbd1587f.3dbc953c.js"},{"revision":"a45db9e56c543f81c3fd95afc8eec609","url":"assets/js/e2ca18a0.489e9a82.js"},{"revision":"d8343f0c447bdbf14d1c49e71253eab2","url":"assets/js/e381d9a4.daa8cebb.js"},{"revision":"9e9a1baef3f07120e917fbc9c3254cd8","url":"assets/js/ec35d201.f5c8d3c4.js"},{"revision":"e0fac6e2e83a967263a6c7c211892008","url":"assets/js/ed53f80d.b2fab529.js"},{"revision":"8e7423c12d3d3951d87a01bee67ba5da","url":"assets/js/f0045a85.0c35f216.js"},{"revision":"18391d863d3d35cfd56d5693f978d939","url":"assets/js/f3bd88b5.12962ec1.js"},{"revision":"7c67d46922ec0fae770f7ed2f82c9933","url":"assets/js/f6562648.e212ca51.js"},{"revision":"bfe5203a15e42da4b82b32920364a2b2","url":"assets/js/f7ddae2a.80e9d44f.js"},{"revision":"50fddeaf7641137714dfa8ed7fde47f2","url":"assets/js/f7f0479e.d579002a.js"},{"revision":"5f12d48be74716e7b55d767cba8647e6","url":"assets/js/main.78aef3fe.js"},{"revision":"3ea16acf0cd86efe1caca82a6c2631ca","url":"assets/js/runtime~main.9515556b.js"},{"revision":"a34473bee052b3140e5f8db0d950f47d","url":"docs/Contributing.html"},{"revision":"846df6f2f04185e3cba329431a2b9832","url":"docs/Documentation.html"},{"revision":"54cca49f76581f67c01c75d45160c731","url":"docs/Documentation/decorators.html"},{"revision":"7e777dfb79bb603cb5e1108bde558d2c","url":"docs/Documentation/decorators/functions/ApplyHandlerOptions.html"},{"revision":"7fc9c112b9b19776726a847751e88eeb","url":"docs/Documentation/decorators/functions/getHandlerOptions.html"},{"revision":"3a077eec8e4075fee2d0c775700b8f3a","url":"docs/Documentation/index.html"},{"revision":"fe6427493390eece7bea7784bd1bd04b","url":"docs/Documentation/index/classes/JovaServer.html"},{"revision":"2880692c2ed6d249ffbbfd32ba05a236","url":"docs/Documentation/index/namespaces/Handlers.html"},{"revision":"c88e2154641b16ac2f4052de173c1c99","url":"docs/Documentation/index/namespaces/Handlers/classes/Handler.html"},{"revision":"fd97f881219da105447c22ae6a487839","url":"docs/Documentation/index/namespaces/Handlers/enumerations/Type.html"},{"revision":"04f62245e80179089f5b57a3e3965f9a","url":"docs/Documentation/index/namespaces/Handlers/interfaces/Options.html"},{"revision":"26fbc6dad52085d0568bf8a896c5789a","url":"docs/Documentation/modules.html"},{"revision":"151dfc6d4407ce5fc29e00d2858f9f0e","url":"docs/Documentation/types.html"},{"revision":"00daf6182e6b7bcbc50f86677b00017c","url":"docs/Documentation/types/classes/ApplicationListener.html"},{"revision":"677668e9a23349b1673f8901f0d7a1d4","url":"docs/Documentation/types/classes/ApplicationMiddleware.html"},{"revision":"79e5341a2661caf8bcea4756332349ac","url":"docs/Documentation/types/classes/ApplicationRegistry.html"},{"revision":"0c04929f75c252c48e01cacfd53fb541","url":"docs/Documentation/types/classes/ApplicationRoute.html"},{"revision":"38424b2dd25dbed48dd40df777c43d51","url":"docs/Documentation/types/classes/EventController.html"},{"revision":"af9077a25e1c705fb84ac45d1c2fed87","url":"docs/Documentation/types/classes/MiddlewareController.html"},{"revision":"f1807ec2ec72e3d083ef387c3e686058","url":"docs/Documentation/types/classes/RouteController.html"},{"revision":"f6ec980ff168a6bafaa648f79f2097d8","url":"docs/Documentation/types/enumerations/ApplicationEvent.html"},{"revision":"1951eddfc6d996bf9a5705b1d811f81d","url":"docs/Documentation/types/enumerations/Charset.html"},{"revision":"c373258ed88f1095aa50e24da997a930","url":"docs/Documentation/types/enumerations/ContentType.html"},{"revision":"d9a57fc338228f15d131eaa93bb4359c","url":"docs/Documentation/types/enumerations/Encoder.html"},{"revision":"16c6bdea0199f1b77e2b04f74d8faf97","url":"docs/Documentation/types/enumerations/HttpStatus.html"},{"revision":"34b3ee49ffe5afa4afd4465158d6a27c","url":"docs/Documentation/types/enumerations/JovaSettingsTable.html"},{"revision":"c40c78e6952de90e49c0d3e56dfe0616","url":"docs/Documentation/types/enumerations/Language.html"},{"revision":"6ac7b09364a30afbe163bb55acb88e6a","url":"docs/Documentation/types/enumerations/Methods.html"},{"revision":"12910f8c4f1a130fd12b7f1f9e33ca2f","url":"docs/Documentation/types/functions/RangeParser.html"},{"revision":"8286d95959042810e11f47bb3d4aa966","url":"docs/Documentation/types/interfaces/ApplicationStats.html"},{"revision":"330ccfa2d968ee68c76d07f09de9b3f0","url":"docs/Documentation/types/interfaces/CorsOptions.html"},{"revision":"a18380f68c067be2bc7e452ec6257da3","url":"docs/Documentation/types/interfaces/CorsRequest.html"},{"revision":"09eea9bcf266b83d9a558109ce0bb573","url":"docs/Documentation/types/interfaces/DownloadOptions.html"},{"revision":"34cd27a52615fdf8df288eacc7d4f429","url":"docs/Documentation/types/interfaces/EventListenerOptions.html"},{"revision":"0afe14ac64da8779e17ac53b200fb643","url":"docs/Documentation/types/interfaces/JovaCustomOption.html"},{"revision":"7a27fb25dcc0e5922753c0711394212b","url":"docs/Documentation/types/interfaces/JovaHeaderSetting.html"},{"revision":"9cfaf304888a6ec951c5e986971d8b2a","url":"docs/Documentation/types/interfaces/JovaPathSettings.html"},{"revision":"38d51f4cb5221a3f9f82a75c3a6ea271","url":"docs/Documentation/types/interfaces/JovaPathSettings$1.html"},{"revision":"c2a07615763eea5d022946fdd86b04ef","url":"docs/Documentation/types/interfaces/JovaServerOptions.html"},{"revision":"00928da859b8f38d711522c3197dc277","url":"docs/Documentation/types/interfaces/JovaSettings.html"},{"revision":"3a3c5cb3491ada84b916e1d712993528","url":"docs/Documentation/types/interfaces/MiddlewareOptions.html"},{"revision":"a8d286d84fb0989682ee6164c7e13c01","url":"docs/Documentation/types/interfaces/RatelimitConfig.html"},{"revision":"cf50455d7552bee9bd1d044ea14eedff","url":"docs/Documentation/types/interfaces/RatelimitDatabaseConfig.html"},{"revision":"76ac1ba8750920a083b5b095d252cd08","url":"docs/Documentation/types/interfaces/RequestHandler.html"},{"revision":"62db4856c13aa4efe445bd55a9341483","url":"docs/Documentation/types/interfaces/SendFileOptions.html"},{"revision":"02f8d913110b3da9723db913b4e8a720","url":"docs/Documentation/types/interfaces/SendOptions.html"},{"revision":"b05b2105e337d03e514789e2880b32d9","url":"docs/Documentation/types/type-aliases/CorsOptionsDelegate.html"},{"revision":"f29e01e9c18feb0012eedba97c7e70a4","url":"docs/Documentation/types/type-aliases/CustomOrigin.html"},{"revision":"4b30f88806b46e5c19422ba46b597819","url":"docs/Documentation/types/type-aliases/EventHandler.html"},{"revision":"2b412637d8bd09b0516c1b62c091e89f","url":"docs/Documentation/types/type-aliases/MiddlewareHandler.html"},{"revision":"1332ee1e223f17864de47cf8ec945c14","url":"docs/Documentation/types/type-aliases/RateLimitExceededEventHandler.html"},{"revision":"c1c07d08040b57194cb58e1f10b2c3e0","url":"docs/Documentation/types/type-aliases/RouteHandler.html"},{"revision":"6d49fdc308f39cd2babb0e40b844b2eb","url":"docs/Documentation/types/type-aliases/StaticOrigin.html"},{"revision":"f9303579f080d05c252a4d09cc69caea","url":"docs/Documentation/types/type-aliases/ValueDeterminingMiddleware.html"},{"revision":"6ecc150fa70ff23db3f303ba03a00b2a","url":"docs/Guide.html"},{"revision":"aa425492e5c793879b33d40b9a2d5ea0","url":"docs/Guide/Events.html"},{"revision":"21a4bf17c15372bda30ffe3034208853","url":"docs/Guide/Middlewares.html"},{"revision":"6afc5db0d51fa8142a11b40bd335ac7b","url":"docs/Guide/Routes.html"},{"revision":"eef5196ba6d747cecc351fa1db0ddee2","url":"docs/Guide/Server.html"},{"revision":"b29fcd51d0630b5dc6316c59b08714a9","url":"docs/Guide/Structure.html"},{"revision":"3338145d9d9745ed227a5f1f2003a2d8","url":"index.html"},{"revision":"1537b8b1082c7d76fcd4d2c2248d62b8","url":"search-index.json"},{"revision":"2578acde7abcdd733c514e087d143a90","url":"search.html"},{"revision":"6105a204b3b35d9e91093774436d34de","url":"img/JovaIcon.ico"},{"revision":"2078654c7701b593614583c77aef6b2d","url":"img/JovaLogo.svg"},{"revision":"3fc6ca6bcc30699d05c99893b22e8863","url":"img/JovaLogoFill.svg"},{"revision":"6012299b28a3037a813d31b8d0452a00","url":"img/TeamBracketedLogoLong.svg"},{"revision":"4ec326bc7211dc2c1f95576839b12e13","url":"assets/fonts/Bold-c5e064aba43cc4f537e5d4fd5cbf6c84.otf"},{"revision":"4d490a1265411c9b1535ce9b5c089306","url":"assets/fonts/Gotham-Black-520408fe3462b1d14d05e994d63e9c01.otf"},{"revision":"76a29b472fb6083bd6ac1694320bb781","url":"assets/fonts/Gotham-BlackItalic-3a3952ba0ca9bf8385270801fb3c1bf3.otf"},{"revision":"92ab8603f1cd43d0de15482236890449","url":"assets/fonts/Gotham-Bold-eaee1032db0d2ff750d27aaf23387216.otf"},{"revision":"a139d6e7feae8aaa21daf4b024906918","url":"assets/fonts/Gotham-BoldItalic-448da9a2715be1d76e9a0d79a8a2cbd4.otf"},{"revision":"6f8eacd611b2414da7d46d7fba0b02e8","url":"assets/fonts/Gotham-Book-7f34eb053257cab413dc78955bbc20eb.otf"},{"revision":"18266c0727cdd14c9f683a46f3edca63","url":"assets/fonts/Gotham-BookItalic-91b742af708dd2b448d82e74fe9921c0.otf"},{"revision":"abecb72d9dfe0232c072f0e0f95c4dec","url":"assets/fonts/Gotham-Light-a21d1577f411612a2753f918ebb902fb.otf"},{"revision":"0588290a8cd15aac437fb740f3d44f68","url":"assets/fonts/Gotham-LightItalic-a6dd58d835542ba5ee20c40aaab7a14a.otf"},{"revision":"39b5ff14a54114e9ae92136578a0e2d3","url":"assets/fonts/Gotham-Medium-a52599fa8cce74bab773aaca059545b1.otf"},{"revision":"29eec4569fbf2e4e5e9d1f74d0952915","url":"assets/fonts/Gotham-MediumItalic-327a61b3b0b8b4b799a3447400fdb696.otf"},{"revision":"f80a2cc49a38d332803dd6175cdb2473","url":"assets/fonts/Gotham-Thin-67d9a1ce07a626fdbf00c8b825c5c8aa.otf"},{"revision":"4b157841b2010b7239e924d7b954403d","url":"assets/fonts/Gotham-ThinItalic-dcca8038da0419cd80912cdb4b2204d9.otf"},{"revision":"af7a65be1163aacb83cfb07e8bc8f074","url":"assets/fonts/Gotham-XLight-18425da637e906b979dddddd117994f7.otf"},{"revision":"59d209fad788d205007b284b33d8fc9c","url":"assets/fonts/Gotham-XLightItalic-478b962aeaa87bc088375fe0a3554106.otf"},{"revision":"f2d5377176975d2c156977193f32dc7f","url":"assets/fonts/Neuwelt-Black-44d3611a8d057fe3ab687799207aa0be.ttf"},{"revision":"f4fba23698d6628ca33eb48ecb7538d4","url":"assets/fonts/Neuwelt-Black-7df15b51420018feeb14235521643326.woff2"},{"revision":"8613350a78082271c60f5c3c8a46863d","url":"assets/fonts/Neuwelt-Black-89ba63804372bd42b48b0cdb9d2e8b3b.woff"},{"revision":"6cae453ed55221e07f4d13d164e2ece8","url":"assets/fonts/Neuwelt-Black-959f3d4d043b9582ccba6add9ef232d6.eot"},{"revision":"f44859ebc752e7667996a62a9b708d7e","url":"assets/fonts/Neuwelt-BlackItalic-0c2d002e81c10f4ac2797dd2f71bf302.woff2"},{"revision":"4f9ebdb754e7aa82cb818f411f536dd6","url":"assets/fonts/Neuwelt-BlackItalic-352f94d7d796264ee3c61e5cc28d9f63.woff"},{"revision":"263c3873c3d73c44511d28049492fac9","url":"assets/fonts/Neuwelt-BlackItalic-7ec8cdda17f260031fa6f83bab49ec72.eot"},{"revision":"00c8b73aa7a9905003f6c648a2b9fdb0","url":"assets/fonts/Neuwelt-BlackItalic-f29a5697012d9ad2d11b771b3695bbcf.ttf"},{"revision":"811b2f8c221c103096e8ab80ff0241f3","url":"assets/fonts/Neuwelt-Bold-273232e073c7c3ee4843315a231e2ab0.ttf"},{"revision":"ab121a0a9604accd148744ab568d0be0","url":"assets/fonts/Neuwelt-Bold-6b1b9a6c43dff074d299b8658a9ef86c.eot"},{"revision":"2473b3ff947d3faccc9fb77f945d2302","url":"assets/fonts/Neuwelt-Bold-ae0b4f76fa1181da781e65434804322d.woff"},{"revision":"ed4546df8e0b3e6d14636dc5467ddc4e","url":"assets/fonts/Neuwelt-Bold-b594b0be83be80e11601eeb5e9a40ce6.woff2"},{"revision":"92a529206fa5124a615c1c98ae1f715c","url":"assets/fonts/Neuwelt-BoldItalic-4d64be7cb9565e6fc86b6af1477930a4.woff"},{"revision":"757c98d8e90e776194af1746dce89a66","url":"assets/fonts/Neuwelt-BoldItalic-7fcd8907dda929abd79d67594aa19523.woff2"},{"revision":"0aa79384df08aecf04cb3d38ea9df897","url":"assets/fonts/Neuwelt-BoldItalic-cc75595da3e170cc2ee19364c6828232.ttf"},{"revision":"9d8a792daab5778c0e26b42c0063080f","url":"assets/fonts/Neuwelt-BoldItalic-eefa34a9c72489d50f5765fd52fcaf5c.eot"},{"revision":"f76501fa3e5a2800d1a88a3622bda0eb","url":"assets/fonts/Neuwelt-ExtraBold-12462067834b8dc8808a4cacc089a190.woff"},{"revision":"642c1a8f0253bceaba7495604945217a","url":"assets/fonts/Neuwelt-ExtraBold-1eb690afd3e02f46c63fdda504d3f2c7.woff2"},{"revision":"0cf54f04d2f8de10b9f3d5fdbd3c077f","url":"assets/fonts/Neuwelt-ExtraBold-4db53f74ea7595c745246d35931834fb.ttf"},{"revision":"314376d272d7e0c203e2f33e9bb7eef6","url":"assets/fonts/Neuwelt-ExtraBold-a919cc5a88604160004cd9eeff569ecd.eot"},{"revision":"1df62e311eb4efefd4288821993f2422","url":"assets/fonts/Neuwelt-ExtraBoldItalic-07d51e16bd552174a603aab653dc41be.woff2"},{"revision":"5911bcddc07946feb1e164ed787e2f9d","url":"assets/fonts/Neuwelt-ExtraBoldItalic-0b6dbc6e2ba864058d619610e88ce032.woff"},{"revision":"98e7adbd2c12590eca01ffff9c04e06d","url":"assets/fonts/Neuwelt-ExtraBoldItalic-29a331e349019f95270bc36bc4106b53.ttf"},{"revision":"38495e6d253e44c7b10163826c39435d","url":"assets/fonts/Neuwelt-ExtraBoldItalic-e3ccc5702bfea0917cd996790cf78d9c.eot"},{"revision":"10e70ff912560fcf67df1701ecbc4a1f","url":"assets/fonts/Neuwelt-ExtraLight-23e43f44d5ff9281373d0b4d78279ae9.woff2"},{"revision":"99c8291db095cd719f539343677693a5","url":"assets/fonts/Neuwelt-ExtraLight-968ce00c0f34811ff1bcd28d65a4531e.ttf"},{"revision":"c936adad97601421c8e50e68e3a97943","url":"assets/fonts/Neuwelt-ExtraLight-b6bf665a549491d93146428e67a8417f.woff"},{"revision":"fefdedc1090a8f14ea1282b11f14f660","url":"assets/fonts/Neuwelt-ExtraLight-fde56b3b2e38e4f0b0877bee3f9749f4.eot"},{"revision":"b4e67918de98d511eeadec37ebc28bce","url":"assets/fonts/Neuwelt-ExtraLightItalic-1fcb382c605b12b0fc4856c194ddaf7e.eot"},{"revision":"874843001c06d275d508568ab4cadb2f","url":"assets/fonts/Neuwelt-ExtraLightItalic-2a6cb0962f2826f2549c8cbffed940b0.woff"},{"revision":"dc65074b1a8f12fd760cb4555fa87ef4","url":"assets/fonts/Neuwelt-ExtraLightItalic-491dafbfcaa7098841d38b8fdebcaafd.woff2"},{"revision":"b31eedbc58526c17a70a11801ee34e19","url":"assets/fonts/Neuwelt-ExtraLightItalic-6da12c14933bd81414062d9d20e5f2c8.ttf"},{"revision":"3a8b0f205dc14f1d6002b6c4644839f7","url":"assets/fonts/Neuwelt-Italic-45332dc05a978d463fe4e4d3cde392b6.woff2"},{"revision":"0a3cfcc5d0b59d0f75905f6f468fd7aa","url":"assets/fonts/Neuwelt-Italic-587017ec4631c7278432b0604667d616.woff"},{"revision":"750540cb0ea82a46e3deafad77e0ae1a","url":"assets/fonts/Neuwelt-Italic-a57b367f081a6434aecd985292132a1e.eot"},{"revision":"94c61e5e1f5cae70c3365f5135e35c1c","url":"assets/fonts/Neuwelt-Italic-f18485c9623247c58f759cc10c3b4f09.ttf"},{"revision":"63f336d7639cf7fe3eb9e57e4458b1bc","url":"assets/fonts/Neuwelt-Light-56622d1edecba96301c72577057afc66.ttf"},{"revision":"a184eb8d1ff79984d273dc6437656868","url":"assets/fonts/Neuwelt-Light-82053f6d37ae37bab516c4f531ccb3b1.eot"},{"revision":"5da2bd1b573bbafa5d42746fc4092406","url":"assets/fonts/Neuwelt-Light-b6edf258ded3bbd640e042c88c5dbf6f.woff"},{"revision":"3a128b32a2a873a1b2e0a8bcb2e60193","url":"assets/fonts/Neuwelt-Light-f367bfb8a2852908e3c82ddcde6dd779.woff2"},{"revision":"71c89a3360ca6f8def72b5eaddc74740","url":"assets/fonts/Neuwelt-LightItalic-1ac8daf82e89d86dfd2250fbb4196c39.ttf"},{"revision":"64378b22cb951f7dc051534e2219080f","url":"assets/fonts/Neuwelt-LightItalic-3fde9d3345e5bf3ea1d78a0fe2c8582e.eot"},{"revision":"d18497fda162d995c305165c25ed9133","url":"assets/fonts/Neuwelt-LightItalic-ab88d9373a337f00a7bb8bf97f3f5cf8.woff2"},{"revision":"ffa48bf626e0b4bd77589fb3da74b942","url":"assets/fonts/Neuwelt-LightItalic-bee1edd246e5c04378ac005bd2045036.woff"},{"revision":"f3aec74a378c68ce97ab94c8cf6bfa76","url":"assets/fonts/Neuwelt-Medium-75501270f9f2cab080afa6e42f493e42.woff2"},{"revision":"a9e7b2b3763b7b54ba9cae2fa0d3049a","url":"assets/fonts/Neuwelt-Medium-9c38d92cd2bdfa9889a13e435d247bce.ttf"},{"revision":"6a2667860142e48e2534bb3d60dccf27","url":"assets/fonts/Neuwelt-Medium-db4876ababc4ac3703af47daaf92bbaf.eot"},{"revision":"a2a01f6cfb673cf3406d08bcb73d48c2","url":"assets/fonts/Neuwelt-Medium-f0b8afbad461957b39246ca92a423b68.woff"},{"revision":"554519ee7928947d726c710d394c6809","url":"assets/fonts/Neuwelt-MediumItalic-016a6ae9f13aae5ebe0b365f2ef7220c.woff2"},{"revision":"2f2063f4dfd50145a2e27d71cb5515d8","url":"assets/fonts/Neuwelt-MediumItalic-7e856451825a94c2dc9357eeb324048f.woff"},{"revision":"18ac1eaa8099baff8c67e78585755c99","url":"assets/fonts/Neuwelt-MediumItalic-c9ea1eec701e1946bd108846b143f114.ttf"},{"revision":"4b78dc798dac7b41fdef8e05dc25ff1c","url":"assets/fonts/Neuwelt-MediumItalic-d014cd9eb2971afe97063d9d1cc1a3d6.eot"},{"revision":"08be74ce35f488d8d228b69ae314c492","url":"assets/fonts/Neuwelt-Regular-888c515c0e3cd1f277b2724bce9271d9.woff"},{"revision":"b1adc840a7e4e03575df822b2d011916","url":"assets/fonts/Neuwelt-Regular-a54ed686994ea0564fffc4a07d7382ba.ttf"},{"revision":"39e60e4ce1ffa596e090a51a7f63c202","url":"assets/fonts/Neuwelt-Regular-bef48c6c6b3cc05f7b8c7475dbc154ca.woff2"},{"revision":"9b521e129e760ecb82f07580db7ac0bb","url":"assets/fonts/Neuwelt-Regular-f9f26cf1d8c52215765c6fc14af25920.eot"},{"revision":"5cb1522991c922e22aa1fd831cbda50f","url":"assets/fonts/Neuwelt-Thin-2a625b8f2be65e28d3df30983390ce93.ttf"},{"revision":"d6f6d1854f0d2cb648598788bc2f510f","url":"assets/fonts/Neuwelt-Thin-c0d6b6ac48c04bd8b281f5216ed127f0.eot"},{"revision":"eaa970cf8e4c8b05db001f673dfcd1c5","url":"assets/fonts/Neuwelt-Thin-d9cc6e02ea66ab0a8334812131b2c71f.woff2"},{"revision":"2a6ef8d7e5d3c979321ed2c961bb06bc","url":"assets/fonts/Neuwelt-Thin-dbfb9a2a73a8c7af96b15587b2cb2941.woff"},{"revision":"07972fdc673e4f197b97dfee84c2aa12","url":"assets/fonts/Neuwelt-ThinItalic-2806aac7354bdc59ce5bfb9f279a7ec9.eot"},{"revision":"2d41752b04e80470f999a8bca66050c3","url":"assets/fonts/Neuwelt-ThinItalic-4ecc9296cc83f9ccb34e82827c4e3041.ttf"},{"revision":"c1ad09cb71247fcaa06ffc0542544b09","url":"assets/fonts/Neuwelt-ThinItalic-acca87e36fd4cea80941d4287607d807.woff"},{"revision":"61888d55c95fffa2748f2f6c76376141","url":"assets/fonts/Neuwelt-ThinItalic-ca9bd6394bb8225ddc880f971e7fa938.woff2"},{"revision":"6e312493b143f4932e6e1c5085810e2e","url":"assets/fonts/NeuweltInline-Regular-2df3c96e8192bce8353da4b8b416474a.woff"},{"revision":"b08e9fee2822cb55683878160a37fe7c","url":"assets/fonts/NeuweltInline-Regular-6fd6071ea11ac656b7e9cd62cacc0c7e.woff2"},{"revision":"98344fabceddd671de0f8143cb7245d8","url":"assets/fonts/NeuweltInline-Regular-8678b4f44f32afc7a5352f6417e5da8a.ttf"},{"revision":"f5d9aea4352dbd3166479cbad8e7f100","url":"assets/fonts/NeuweltInline-Regular-c7ab68c00f43aa7aad637f8f2f42fc65.eot"},{"revision":"2e28c110f34fd143428db0fbeea7306d","url":"assets/fonts/segoeui-eefb53216bbd47968c9d2235ccac92ba.ttf"},{"revision":"4f7a3c6aa9dc43a59dca1f8731db8b22","url":"assets/fonts/segoeuib-95fbdd577c1e506974681548b590d60c.ttf"},{"revision":"20774a23988c3001b57da6c53fcb2aea","url":"assets/fonts/segoeuii-05a4709a1d376bdf6d5f83da58a02054.ttf"},{"revision":"d3942738ad4b954b474d8fbfe27a33c1","url":"assets/fonts/segoeuil-935fc33f41eccca5adc79ce88574c995.ttf"},{"revision":"81cfc8da42604d7db44a089aa2c76b8c","url":"assets/fonts/segoeuisl-5491497757d4577fb86b6a4d78d84fa1.ttf"},{"revision":"ba4e0a570e647df5e61a3947c2052e5a","url":"assets/fonts/segoeuiz-8329a4a3f30bbc04ca3964a052d6bfc1.ttf"},{"revision":"868d9468768f1660600f840e3b864815","url":"assets/fonts/seguibl-443f6e7a62672038d5acfcf37f91b914.ttf"},{"revision":"38b35433147fc7e2b286919b5cb8854e","url":"assets/fonts/seguibli-7dbfe0632c57e808875bf2a0e99ec84e.ttf"},{"revision":"aeb983a8a6fb35392825d448ccf3c17c","url":"assets/fonts/seguili-4261493934dc5d9d17de66ec6eb3d25e.ttf"},{"revision":"9b3873c26b05402f23940e613a294549","url":"assets/fonts/seguisb-6c80f8f7288a82c499fd9d96fd7143f6.ttf"},{"revision":"7020a5c06453ab2574f9c46a2e43badd","url":"assets/fonts/seguisbi-275f4d07f6226ec430ce5dce94bb775e.ttf"},{"revision":"a4562939ac75dbdfb083a10c5d4871a7","url":"assets/fonts/seguisli-02d0c64843f48619e61a91f800df085e.ttf"}],s=new R({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await k(e),self.addEventListener("install",t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))}),self.addEventListener("activate",t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))}),self.addEventListener("fetch",async t=>{if(e.offlineMode){let a=t.request.url,i=function(e){let t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(let r of i){let n=s.getCacheKeyForURL(r);if(n){let s=caches.match(n);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:i,cacheKey:n,cachedResponse:s}),t.respondWith(s);break}}}}),self.addEventListener("message",async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t}),"SKIP_WAITING"===t.data?.type&&self.skipWaiting()})})()})()})();