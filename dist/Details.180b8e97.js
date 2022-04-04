// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Carousel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Carousel extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      active: 0
    });

    _defineProperty(this, "handleEventClick", event => {
      this.setState({
        active: +event.target.dataset.index
      });
    });
  }

  render() {
    const {
      active
    } = this.state;
    const {
      images
    } = this.props;
    console.log(images);
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "carousel",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("img", {
          src: images[active],
          alt: "animal"
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("div", {
          className: "carousel-smaller",
          children: images.map((photo, index) =>
          /*#__PURE__*/
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          (0, _jsxRuntime.jsx)("img", {
            src: photo,
            "data-index": index,
            onClick: this.handleEventClick,
            className: index === active ? "active" : "",
            alt: "animal thumbnail"
          }, photo))
        })]
      })
    );
  }

}

exports.default = Carousel;

_defineProperty(Carousel, "defaultProps", {
  images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
});
},{"react":"../node_modules/react/index.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"ErrorBoundary.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ErrorBoundary extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      hasError: false,
      redirect: false
    });
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  componentDidCatch(error, info) {
    if (this.state.hasError) {
      setTimeout(() => this.setState({
        redirect: true
      }), 5000);
    }

    console.log("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.redirect) {
      return (
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_reactRouterDom.Redirect, {
          to: "/"
        })
      );
    } else if (this.state.hasError) {
      return (
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("h2", {
          children: ["This listing has an error. ",
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
            to: "/",
            children: "Click here"
          }), " to go back to the home pages or wait for 5 seconds."]
        })
      );
    }

    return this.props.children;
  }

}

var _default = ErrorBoundary;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"Details.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DetailsWithErrorBoundary;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _Carousel = _interopRequireDefault(require("./Carousel"));

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Modal =
/*#__PURE__*/
(0, _react.lazy)(() => require("_bundle_loader")(require.resolve("./Modal")));

class Details extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true,
      showModal: false
    });

    _defineProperty(this, "toggleModal", () => this.setState({
      showModal: !this.state.showModal
    }));

    _defineProperty(this, "adopt", () => window.location = 'http://bit.ly/pet-adopt');
  }

  async componentDidMount() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);
    const json = await res.json();
    this.setState(Object.assign({
      loading: false,
      showModal: false
    }, json.pets[0]));
  }

  render() {
    // throw new Error('Now')
    if (this.state.loading) {
      return (
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h2", {
          children: "loading..."
        })
      );
    }

    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
      showModal
    } = this.state;
    return (
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "details",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)(_Carousel.default, {
          images: images
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("div", {
          children: [
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("h1", {
            children: name
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("h2", {
            children: [animal, " - ", breed, " - ", city, ", ", state]
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)(_ThemeContext.default.Consumer, {
            children: ([theme]) =>
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("button", {
              onClick: this.toggleModal,
              style: {
                backgroundColor: theme
              },
              children: [" Adopt ", name]
            })
          }),
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("p", {
            children: description
          })]
        }), showModal ?
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)(Modal, {
          children:
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("div", {
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("h2", {
              children: ["Would you like to adopt ", name, "?"]
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("div", {
              className: "buttons",
              children: [
              /*#__PURE__*/
              (0, _jsxRuntime.jsx)("button", {
                onClick: this.adopt,
                children: "Yes"
              }),
              /*#__PURE__*/
              (0, _jsxRuntime.jsx)("button", {
                onClick: this.toggleModal,
                children: "No"
              })]
            })]
          })
        }) : null]
      })
    );
  }

}

const DetailsWithRouter = (0, _reactRouterDom.withRouter)(Details);

function DetailsWithErrorBoundary() {
  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsx)(_ErrorBoundary.default, {
      children:
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(DetailsWithRouter, {})
    })
  );
}
},{"react":"../node_modules/react/index.js","react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","./Carousel":"Carousel.js","./ErrorBoundary":"ErrorBoundary.js","./ThemeContext":"ThemeContext.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js","_bundle_loader":"../node_modules/parcel/src/builtins/bundle-loader.js","./Modal":[["Modal.4ee0a682.js","Modal.js"],"Modal.4ee0a682.js.map","Modal.js"]}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52386" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel/src/builtins/bundle-url.js"}],"../node_modules/parcel/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel/src/builtins/bundle-loader.js");b.register("js",require("../node_modules/parcel/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("Details.js");});
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/Details.180b8e97.js.map