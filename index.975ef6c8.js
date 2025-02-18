// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
"use strict";
var _rectangle = require("2f7f59c70c9c7767");
var canvas = document.getElementById("cnvs");
var gameState = {};
function queueUpdates(numTicks) {
    for(var i = 0; i < numTicks; i++){
        gameState.lastTick = gameState.lastTick + gameState.tickLength;
        update(gameState.lastTick);
    }
}
function draw(tFrame) {
    var context = canvas.getContext('2d');
    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // draw
    gameState.figs = gameState.figs.filter(function(figure) {
        return figure.life > 0;
    });
    function getColor(life) {
        switch(life){
            case 3:
                return "rgb(0, 200, 0)";
            case 2:
                return "rgb(0, 120, 200)";
            case 1:
                return "rgb(220, 12, 220)";
        }
    }
    gameState.figs.forEach(function(figure) {
        context.fillStyle = getColor(figure.life);
        if (figure instanceof _rectangle.Rectangle) context.fillRect(figure.x, figure.y, figure.w, figure.h);
        else if (figure instanceof _rectangle.Circle) {
            context.beginPath();
            context.arc(figure.x, figure.y, figure.r, 0, 2 * Math.PI);
            context.closePath();
            context.fill();
        } else if (figure instanceof _rectangle.Polygon) {
            context.beginPath();
            context.moveTo(figure.vertices[0].x + figure.x, figure.vertices[0].y + figure.y);
            figure.vertices.slice(1).forEach(function(vrt) {
                context.lineTo(vrt.x + figure.x, vrt.y + figure.y);
            });
            context.closePath();
            context.fill();
        }
    });
}
function update(tick) {
    gameState.figs.forEach(function(figure, index) {
        figure.insideCanvas(canvas);
        gameState.figs.slice(index + 1).forEach(function(other) {
            if (figure.intersects(other)) {
                var _ref = [
                    other.speed,
                    figure.speed
                ];
                figure.speed = _ref[0];
                other.speed = _ref[1];
                figure.takeDamage();
                other.takeDamage();
            }
        });
        figure.x += figure.speed.x;
        figure.y += figure.speed.y;
    });
}
function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run);
    var nextTick = gameState.lastTick + gameState.tickLength;
    var numTicks = 0;
    if (tFrame > nextTick) {
        var timeSinceTick = tFrame - gameState.lastTick;
        numTicks = Math.floor(timeSinceTick / gameState.tickLength);
    }
    queueUpdates(numTicks);
    draw(tFrame);
    gameState.lastRender = tFrame;
}
function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}
function setup() {
    document.body.style.overflow = "hidden";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gameState.lastTick = performance.now();
    gameState.lastRender = gameState.lastTick;
    gameState.tickLength = 15; //ms
    gameState.figs = [];
    for(var i = 0; i < 10; i++){
        var width = 20 + Math.random() * 20;
        var height = width;
        var x = Math.random() * (canvas.width - width);
        var y = Math.random() * (canvas.height - height);
        var rectangle = new _rectangle.Rectangle(x, y, width, height);
        rectangle.setSpeed(Math.random() * 6 - 3, Math.random() * 6 - 3);
        gameState.figs.push(rectangle);
    }
    for(var _i = 0; _i < 10; _i++){
        var r = 10 + Math.random() * 10;
        var _x = r + Math.random() * (canvas.width - 2 * r);
        var _y = r + Math.random() * (canvas.height - 2 * r);
        var circle = new _rectangle.Circle(_x, _y, r);
        circle.setSpeed(Math.random() * 6 - 3, Math.random() * 6 - 3);
        gameState.figs.push(circle);
    }
    for(var _i2 = 0; _i2 < 10; _i2++){
        var edge = 20 + Math.random() * 20;
        var _x2 = Math.random() * (canvas.width - edge);
        var _y2 = Math.sqrt(3) / 2 * edge + Math.random() * (canvas.height - Math.sqrt(3) / 2 * edge);
        var v1 = {
            x: _x2,
            y: _y2
        };
        var vertices = [
            v1
        ];
        vertices.push({
            x: _x2 + 0.5 * edge,
            y: _y2 - Math.sqrt(3) / 2 * edge
        });
        vertices.push({
            x: _x2 + edge,
            y: _y2
        });
        var polygon = new _rectangle.Polygon(vertices, _x2, _x2 + edge, _y2 - Math.sqrt(3) / 2 * edge, _y2);
        polygon.setSpeed(Math.random() * 6 - 3, Math.random() * 6 - 3);
        gameState.figs.push(polygon);
    }
    for(var _i3 = 0; _i3 < 10; _i3++){
        var _edge = 15 + Math.random() * 15;
        var sqr3 = Math.sqrt(3) * _edge / 2;
        var _x3 = 0.5 * _edge + Math.random() * (canvas.width - 2 * _edge);
        var _y3 = sqr3 * 2 + Math.random() * (canvas.height - sqr3 * 2);
        var _v = {
            x: _x3,
            y: _y3
        };
        var _vertices = [
            _v
        ];
        _vertices.push({
            x: _x3 - 0.5 * _edge,
            y: _y3 - sqr3
        });
        _vertices.push({
            x: _x3,
            y: _y3 - 2 * sqr3
        });
        _vertices.push({
            x: _x3 + _edge,
            y: _y3 - 2 * sqr3
        });
        _vertices.push({
            x: _x3 + 1.5 * _edge,
            y: _y3 - sqr3
        });
        _vertices.push({
            x: _x3 + _edge,
            y: _y3
        });
        var _polygon = new _rectangle.Polygon(_vertices, _x3 - 0.5 * _edge, _x3 + 1.5 * _edge, _y3 - 2 * sqr3, _y3);
        _polygon.setSpeed(Math.random() * 6 - 3, Math.random() * 6 - 3);
        gameState.figs.push(_polygon);
    }
    for(var _i4 = 0; _i4 < 10; _i4++){
        var _edge2 = 15 + Math.random() * 15;
        var sin18 = Math.sin(Math.PI / 10) * _edge2;
        var cos18 = Math.cos(Math.PI / 10) * _edge2;
        var sin36 = Math.sin(Math.PI / 5) * _edge2;
        var cos36 = Math.cos(Math.PI / 5) * _edge2;
        var _x4 = sin18 + Math.random() * (canvas.width - _edge2 - 2 * sin18);
        var _y4 = cos18 + sin36 + Math.random() * (canvas.height - cos18 - sin36);
        var _v2 = {
            x: _x4,
            y: _y4
        };
        var _vertices2 = [
            _v2
        ];
        _vertices2.push({
            x: _x4 - sin18,
            y: _y4 - cos18
        });
        _vertices2.push({
            x: _x4 - sin18 + cos36,
            y: _y4 - cos18 - sin36
        });
        _vertices2.push({
            x: _x4 + _edge2 + sin18,
            y: _y4 - cos18
        });
        _vertices2.push({
            x: _x4 + _edge2,
            y: _y4
        });
        var _polygon2 = new _rectangle.Polygon(_vertices2, _x4 - sin18, _x4 + _edge2 + sin18, _y4 - cos18 - sin36, _y4);
        _polygon2.setSpeed(Math.random() * 6 - 3, Math.random() * 6 - 3);
        gameState.figs.push(_polygon2);
    }
}
setup();
run();

},{"2f7f59c70c9c7767":"8admK"}],"8admK":[function(require,module,exports,__globalThis) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rectangle = exports.Polygon = exports.Circle = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var Rectangle = exports.Rectangle = /*#__PURE__*/ function() {
    function Rectangle(x, y, w, h) {
        _classCallCheck(this, Rectangle);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.life = 3;
        this.speed = {
            x: 0,
            y: 0
        };
    }
    return _createClass(Rectangle, [
        {
            key: "setSpeed",
            value: function setSpeed(x, y) {
                this.speed.x = x;
                this.speed.y = y;
            }
        },
        {
            key: "left",
            get: function get() {
                return this.x;
            }
        },
        {
            key: "right",
            get: function get() {
                return this.x + this.w;
            }
        },
        {
            key: "top",
            get: function get() {
                return this.y;
            }
        },
        {
            key: "bottom",
            get: function get() {
                return this.y + this.h;
            }
        },
        {
            key: "contains",
            value: function contains(point) {
                return point.x >= this.x && point.x < this.x + this.w && point.y >= this.y && point.y < this.y + this.h;
            }
        },
        {
            key: "intersects",
            value: function intersects(rect) {
                if (rect instanceof Rectangle) return this.x < rect.x + rect.w && rect.x < this.x + this.w && this.y < rect.y + rect.h && rect.y < this.y + this.w;
                else return rect.intersects(this);
            }
        },
        {
            key: "takeDamage",
            value: function takeDamage() {
                this.life -= 1;
            }
        },
        {
            key: "insideCanvas",
            value: function insideCanvas(canvas) {
                if (this.x < 0 || this.x + this.w > canvas.width) this.speed.x = -this.speed.x;
                if (this.y < 0 || this.y + this.h > canvas.height) this.speed.y = -this.speed.y;
            }
        }
    ]);
}();
var Circle = exports.Circle = /*#__PURE__*/ function() {
    function Circle(x, y, r) {
        _classCallCheck(this, Circle);
        this.x = x;
        this.y = y;
        this.r = r;
        this.life = 3;
        this.speed = {
            x: 0,
            y: 0
        };
    }
    return _createClass(Circle, [
        {
            key: "setSpeed",
            value: function setSpeed(x, y) {
                this.speed.x = x;
                this.speed.y = y;
            }
        },
        {
            key: "takeDamage",
            value: function takeDamage() {
                this.life -= 1;
            }
        },
        {
            key: "insideCanvas",
            value: function insideCanvas(canvas) {
                if (this.x - this.r < 0 || this.x + this.r > canvas.width) this.speed.x = -this.speed.x;
                if (this.y - this.r < 0 || this.y + this.r > canvas.height) this.speed.y = -this.speed.y;
            }
        },
        {
            key: "pointCircle",
            value: function pointCircle(px, py) {
                var distX = px - this.x;
                var distY = py - this.y;
                var dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
                return dist <= this.r;
            }
        },
        {
            key: "linePoint",
            value: function linePoint(x1, y1, x2, y2, px, py) {
                var d1 = Math.sqrt(Math.pow(px - x1, 2) + Math.pow(py - y1, 2));
                var d2 = Math.sqrt(Math.pow(px - x2, 2) + Math.pow(py - y2, 2));
                var lineLen = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                var buffer = 0.1;
                if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) return true;
                return false;
            }
        },
        {
            key: "lineCircle",
            value: function lineCircle(x1, y1, x2, y2) {
                var inside1 = this.pointCircle(x1, y1);
                var inside2 = this.pointCircle(x2, y2);
                if (inside1 || inside2) return true;
                var distX = x1 - x2;
                var distY = y1 - y2;
                var len = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
                var dot = ((this.x - x1) * (x2 - x1) + (this.y - y1) * (y2 - y1)) / Math.pow(len, 2);
                var cX = x1 + dot * (x2 - x1);
                var cY = y1 + dot * (y2 - y1);
                var onSegment = this.linePoint(x1, y1, x2, y2, cX, cY);
                if (!onSegment) return false;
                distX = cX - this.x;
                distY = cY - this.y;
                var distance = Math.sqrt(distX * distX + distY * distY);
                if (distance <= this.r) return true;
                return false;
            }
        },
        {
            key: "intersects",
            value: function intersects(rect) {
                var _this = this;
                if (rect instanceof Rectangle) {
                    var testX = this.x;
                    var testY = this.y;
                    if (this.x < rect.x) testX = rect.x;
                    else if (this.x > rect.x + rect.w) testX = rect.x + rect.w;
                    if (this.y < rect.y) testY = rect.y;
                    else if (this.y > rect.y + rect.h) testY = rect.y + rect.h;
                    var distX = this.x - testX;
                    var distY = this.y - testY;
                    if (Math.pow(distX, 2) + Math.pow(distY, 2) <= Math.pow(this.r, 2)) return true;
                    return false;
                } else if (rect instanceof Circle) {
                    var _distX = this.x - rect.x;
                    var _distY = this.y - rect.y;
                    var dist = Math.sqrt(Math.pow(_distX, 2) + Math.pow(_distY, 2));
                    if (dist <= this.r + rect.r) return true;
                    return false;
                } else if (rect instanceof Polygon) {
                    var flag = false;
                    rect.vertices.forEach(function(vc, index) {
                        var vn;
                        if (index == rect.vertices.length - 1) vn = rect.vertices[0];
                        else vn = rect.vertices[index + 1];
                        if (_this.lineCircle(vc.x + rect.x, vc.y + rect.y, vn.x + rect.x, vn.y + rect.y)) flag = true;
                    });
                    if (flag) return true;
                    else return rect.polygonPoint(this.x, this.y);
                }
            }
        }
    ]);
}();
var Polygon = exports.Polygon = /*#__PURE__*/ function() {
    function Polygon(vertices, left, right, top, bottom) {
        _classCallCheck(this, Polygon);
        this.vertices = vertices;
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.life = 3;
        this.x = 0;
        this.y = 0;
        this.speed = {
            x: 0,
            y: 0
        };
    }
    return _createClass(Polygon, [
        {
            key: "setSpeed",
            value: function setSpeed(x, y) {
                this.speed.x = x;
                this.speed.y = y;
            }
        },
        {
            key: "takeDamage",
            value: function takeDamage() {
                this.life -= 1;
            }
        },
        {
            key: "insideCanvas",
            value: function insideCanvas(canvas) {
                if (this.left + this.x < 0 || this.right + this.x > canvas.width) this.speed.x = -this.speed.x;
                if (this.top + this.y < 0 || this.bottom + this.y > canvas.height) this.speed.y = -this.speed.y;
            }
        },
        {
            key: "lineLine",
            value: function lineLine(x1, y1, x2, y2, x3, y3, x4, y4) {
                var uA = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
                var uB = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));
                if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) return true;
                return false;
            }
        },
        {
            key: "lineRect",
            value: function lineRect(x1, y1, x2, y2, rect) {
                var left = this.lineLine(x1, y1, x2, y2, rect.x, rect.y, rect.x, rect.y + rect.h);
                var right = this.lineLine(x1, y1, x2, y2, rect.x + rect.w, rect.y, rect.x + rect.w, rect.y + rect.h);
                var top = this.lineLine(x1, y1, x2, y2, rect.x, rect.y, rect.x + rect.w, rect.y);
                var bottom = this.lineLine(x1, y1, x2, y2, rect.x, rect.y + rect.h, rect.x + rect.w, rect.y + rect.h);
                if (left || right || top || bottom) return true;
                return false;
            }
        },
        {
            key: "polygonPoint",
            value: function polygonPoint(px, py) {
                var _this2 = this;
                var collision = false;
                this.vertices.forEach(function(vc, index) {
                    var vn;
                    if (index == _this2.vertices.length - 1) vn = _this2.vertices[0];
                    else vn = _this2.vertices[index + 1];
                    if ((vc.y + _this2.y >= py && vn.y + _this2.y < py || vc.y + _this2.y < py && vn.y + _this2.y >= py) && px < (vn.x - vc.x) * (py - vc.y - _this2.y) / (vn.y - vc.y) + vc.x + _this2.x) collision = !collision;
                });
                return collision;
            }
        },
        {
            key: "intersects",
            value: function intersects(fig) {
                var _this3 = this;
                if (fig instanceof Rectangle) {
                    var flag = false;
                    this.vertices.forEach(function(vc, index) {
                        var vn;
                        if (index == _this3.vertices.length - 1) vn = _this3.vertices[0];
                        else vn = _this3.vertices[index + 1];
                        if (_this3.lineRect(vc.x + _this3.x, vc.y + _this3.y, vn.x + _this3.x, vn.y + _this3.y, fig)) flag = true;
                    });
                    if (flag) return true;
                    else return this.polygonPoint(fig.x, fig.y);
                } else if (fig instanceof Circle) return fig.intersects(this);
                else if (fig instanceof Polygon) {
                    var _flag = false;
                    this.vertices.forEach(function(vc, index) {
                        var vn;
                        if (index == _this3.vertices.length - 1) vn = _this3.vertices[0];
                        else vn = _this3.vertices[index + 1];
                        fig.vertices.forEach(function(vc2, index2) {
                            var vn2;
                            if (index2 == fig.vertices.length - 1) vn2 = fig.vertices[0];
                            else vn2 = fig.vertices[index2 + 1];
                            if (_this3.lineLine(vc.x + _this3.x, vc.y + _this3.y, vn.x + _this3.x, vn.y + _this3.y, vc2.x + fig.x, vc2.y + fig.y, vn2.x + fig.x, vn2.y + fig.y)) _flag = true;
                        });
                    });
                    if (_flag) return true;
                    else return this.polygonPoint(fig.vertices[0].x + fig.x, fig.vertices[0].y + fig.y);
                }
            }
        }
    ]);
}();

},{}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
