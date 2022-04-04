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
})({"useBreedList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useBreedList;

var _react = require("react");

const localCache = {};

function useBreedList(animal) {
  const [breedList, setBreedList] = (0, _react.useState)([]);
  const [status, setStatus] = (0, _react.useState)("unloaded");
  (0, _react.useEffect)(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
},{"react":"../node_modules/react/index.js"}],"Pet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

const Pet = ({
  name,
  animal,
  breed,
  images,
  location,
  id
}) => {
  let hero = "http://pets-images.dev-apis.com/pets.none.jpg";

  if (images && images.length) {
    hero = images[0];
  }

  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsxs)(_reactRouterDom.Link, {
      to: `/details/${id}`,
      className: "relative block rounded",
      children: [
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)("div", {
        className: "rounded",
        children:
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("img", {
          src: hero,
          alt: name,
          className: "rounded w-full h-full bg-contain bg-no-repeat"
        })
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("div", {
        className: "absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent p-2",
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h1", {
          children: name
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("h2", {
          children: `${animal} - ${breed} - ${location}`
        })]
      })]
    })
  );
};

var _default = Pet;
exports.default = _default;
},{"react-router-dom":"../node_modules/react-router-dom/esm/react-router-dom.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"Results.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Results;

var _Pet = _interopRequireDefault(require("./Pet"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Results({
  pets
}) {
  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsx)("div", {
      className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      children: !pets.length ?
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)("h2", {
        children: "No pets found"
      }) : pets.map(pet =>
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_Pet.default, {
        name: pet.name,
        animal: pet.animal,
        breed: pet.breed,
        images: pet.images,
        location: `${pet.city}, ${pet.state}`,
        id: pet.id
      }, pet.id))
    })
  );
}
},{"./Pet":"Pet.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"SearchParams.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _useBreedList = _interopRequireDefault(require("./useBreedList"));

var _Results = _interopRequireDefault(require("./Results"));

var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ANIMALS = ["bird", "cat", "dog", "new"];

const SearchParams = () => {
  const [location, setLocation] = (0, _react.useState)("Innopolis");
  const [animal, setAnimal] = (0, _react.useState)("dog");
  const [breed, setBreed] = (0, _react.useState)("");
  const [pets, setPets] = (0, _react.useState)([]);
  const [breeds] = (0, _useBreedList.default)(animal);
  const [theme, setTheme] = (0, _react.useContext)(_ThemeContext.default);
  (0, _react.useEffect)(() => {
    requestPets(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestPets = async () => {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    console.log(json);
    setPets(json.pets);
  };

  return (
    /*#__PURE__*/
    (0, _jsxRuntime.jsxs)("div", {
      className: "my-0 mx-auto w-11/12 ",
      children: [
      /*#__PURE__*/
      (0, _jsxRuntime.jsxs)("form", {
        className: "p-10 mb-10 rounded-lg bg-gray-200 shadow-lg  flex flex-col justify-center items-center divide-y divide-gray-900",
        onSubmit: e => {
          e.preventDefault();
          requestPets();
        },
        children: [
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("label", {
          htmlFor: "location",
          className: "search-label",
          children: ["Location",
          /*#__PURE__*/
          (0, _jsxRuntime.jsx)("input", {
            className: "search-control",
            id: "location",
            value: location,
            placeholder: "Location",
            onChange: e => setLocation(e.target.value)
          })]
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("label", {
          htmlFor: "animal",
          value: animal,
          className: "search-label",
          children: ["Animal",
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("select", {
            className: "search-control",
            id: "animal",
            value: animal,
            onChange: e => setAnimal(e.target.value),
            onBlur: e => setAnimal(e.target.value),
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("option", {}), ANIMALS.map(animal =>
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("option", {
              value: animal,
              children: [" ", animal, " "]
            }, animal))]
          })]
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("label", {
          htmlFor: "breed",
          value: breed,
          className: "search-label",
          children: ["Breed",
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("select", {
            className: "search-control disabled:opacity-50",
            id: "breed",
            value: breed,
            onChange: e => setBreed(e.target.value),
            onBlur: e => setBreed(e.target.value),
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("option", {}), breeds.map(breed =>
            /*#__PURE__*/
            (0, _jsxRuntime.jsxs)("option", {
              value: breed,
              children: [" ", breed, " "]
            }, breed))]
          })]
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsxs)("label", {
          htmlFor: "theme",
          className: "search-label",
          children: ["Theme",
          /*#__PURE__*/
          (0, _jsxRuntime.jsxs)("select", {
            className: "search-control",
            value: theme,
            onChange: e => setTheme(e.target.value),
            onBlur: e => setTheme(e.target.value),
            children: [
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("option", {
              value: "darkblue",
              children: " Dark Blue"
            }),
            /*#__PURE__*/
            (0, _jsxRuntime.jsx)("option", {
              value: "pink",
              children: " Pink "
            })]
          })]
        }),
        /*#__PURE__*/
        (0, _jsxRuntime.jsx)("button", {
          className: "rounded px-6 py-2 text-white hover:opacity-50 border-none",
          style: {
            backgroundColor: theme
          },
          children: "Submit"
        })]
      }),
      /*#__PURE__*/
      (0, _jsxRuntime.jsx)(_Results.default, {
        pets: pets
      })]
    })
  );
};

var _default = SearchParams;
exports.default = _default;
},{"react":"../node_modules/react/index.js","./useBreedList":"useBreedList.js","./Results":"Results.js","./ThemeContext":"ThemeContext.js","react/jsx-runtime":"../node_modules/react/jsx-runtime.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/SearchParams.95c957bf.js.map