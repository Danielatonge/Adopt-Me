parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Vq8S":[function(require,module,exports) {
"use strict";function e(e="Seattle, WA",t){switch(t.type){case"CHANGE_LOCATION":return t.payload;default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"5ozi":[function(require,module,exports) {
"use strict";function e(e="",t){switch(t.type){case"CHANGE_BREED":return t.payload;default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"xcIY":[function(require,module,exports) {
"use strict";function e(e="dog",t){switch(t.type){case"CHANGE_ANIMAL":return t.payload;default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"ClMH":[function(require,module,exports) {
"use strict";function e(e="darkblue",t){switch(t.type){case"CHANGE_THEME":return t.payload;default:return e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"5FKY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("redux"),r=d(require("./location")),t=d(require("./breed")),u=d(require("./animal")),a=d(require("./theme"));function d(e){return e&&e.__esModule?e:{default:e}}var i=(0,e.combineReducers)({location:r.default,breed:t.default,animal:u.default,theme:a.default});exports.default=i;
},{"./location":"Vq8S","./breed":"5ozi","./animal":"xcIY","./theme":"ClMH"}],"olYk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("redux"),r=t(require("./reducer"));function t(e){return e&&e.__esModule?e:{default:e}}const o=(0,e.createStore)(r.default,"object"==typeof window&&void 0!==window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():e=>e);var _=o;exports.default=_;
},{"./reducer":"5FKY"}],"CSru":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"Cm3W":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"CSru"}],"R3v4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("react"),r=require("react-router-dom"),t=require("react-redux"),s=a(require("./store")),l=require("react/jsx-runtime");function a(e){return e&&e.__esModule?e:{default:e}}const i=(0,e.lazy)(()=>require("_bundle_loader")(require.resolve("./Details"))),d=(0,e.lazy)(()=>require("_bundle_loader")(require.resolve("./SearchParams"))),u=()=>(0,l.jsx)(e.StrictMode,{children:(0,l.jsx)(t.Provider,{store:s.default,children:(0,l.jsx)("div",{className:"p-0 m-0",style:{background:"url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"},children:(0,l.jsxs)(e.Suspense,{fallback:(0,l.jsx)("h2",{children:"loading route.. "}),children:[(0,l.jsx)("header",{className:"w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500",children:(0,l.jsx)(r.Link,{to:"/",className:"text-6xl text-white hover:text-gray-200",children:(0,l.jsx)("h1",{children:"Adopt Me!"})})}),(0,l.jsxs)(r.Switch,{children:[(0,l.jsx)(r.Route,{path:"/details/:id",children:(0,l.jsx)(i,{})}),(0,l.jsx)(r.Route,{path:"/",children:(0,l.jsx)(d,{})})]})]})})})});var o=u;exports.default=o;
},{"./store":"olYk","_bundle_loader":"Cm3W","./Details":[["Details.99a11961.js","enph"],"Details.99a11961.js.map","enph"],"./SearchParams":[["SearchParams.950a6af4.js","LbKV"],"SearchParams.950a6af4.js.map","LbKV"]}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("express")),t=require("react-dom/server"),r=require("react-router-dom"),s=n(require("fs")),i=n(require("../src/App")),u=require("react/jsx-runtime");function n(e){return e&&e.__esModule?e:{default:e}}const d=process.env.PORT||3e3,o=s.default.readFileSync("dist/index.html").toString(),l=o.split("not rendered"),a=(0,e.default)();a.use("/dist",e.default.static("dist")),a.use((e,s)=>{s.write(l[0]);const n={},d=(0,u.jsx)(r.StaticRouter,{url:e.url,context:n,children:(0,u.jsx)(i.default,{})}),o=(0,t.renderToNodeStream)(d);o.pipe(s,{end:!1}),o.on("end",()=>{s.status(n.statusCode||200),s.write(l[1]),s.end()})}),console.log(`listening to http://localhost:${d}`),a.listen(d);
},{"../src/App":"R3v4"}],"6FAI":[function(require,module,exports) {
var n=require("fs");module.exports=function(e){return new Promise(function(t,i){n.readFile(__dirname+e,"utf8",function(n,e){n?i(n):setImmediate(function(){t(e)})})}).then(function(n){new Function("",n)()})};
},{}],0:[function(require,module,exports) {
var b=require("Cm3W");b.register("js",require("6FAI"));
},{}]},{},[0,"Focm"], null)
//# sourceMappingURL=/index.js.map