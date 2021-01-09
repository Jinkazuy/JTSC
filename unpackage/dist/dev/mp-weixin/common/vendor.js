(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


// import navigateTo from 'uni-helpers/navigate-to'

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"JTSC","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"JTSC","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"JTSC","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"JTSC","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"JTSC","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*********************************!*\
  !*** D:/JStest/JTSC/pages.json ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 11 */
/*!*************************************!*\
  !*** D:/JStest/JTSC/store/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));


var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 12));



var actions = _interopRequireWildcard(__webpack_require__(/*! ./actions */ 13));


var getters = _interopRequireWildcard(__webpack_require__(/*! ./getters */ 14));


var _state = _interopRequireDefault(__webpack_require__(/*! ./state */ 15));


var _mutations = _interopRequireDefault(__webpack_require__(/*! ./mutations */ 16));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 其他文件，最终都是引入到这个文件当中，然后这个文件在main.js中引入，相当于store.js；
// 载入Vuex，记得安装；
// 这个文件的作用是，如果需要对mutations.js中进行多次、复杂等操作时，
// 就将函数封装到actions.js文件中，而不是在mutation.js封装方法；
// 对外提供数据
// 定义数据
// 修改state中的数据，只能通过mutations中的函数修改
// 修改日志，记录了每次修改state中数据的记录
// import createLogger from 'vuex/dist/logger'
// 挂载
_vue.default.use(_vuex.default); // 用于报错的设置；会占用内容，在生产环境时候将其注释掉
// 开发模式下可以打开，用于检查bug
var debug = "development" !== 'production';var _default = new _vuex.default.Store({
  // 将引入的文件都挂载
  actions: actions,
  getters: getters,
  state: _state.default,
  mutations: _mutations.default,
  strict: debug
  // plugins: debug ? [createLogger()] : []
});exports.default = _default;

/***/ }),
/* 12 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 13 */
/*!***************************************!*\
  !*** D:/JStest/JTSC/store/actions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.clearUserGoodsCar = exports.setUserGoodsCar = exports.setUserInfo = void 0; // 这个actions.js文件作用，是在多次操作mutation中的函数时用到；
// 涉及到复杂操作的时候，都用这个文件中写逻辑，操作mutations.js中的函数，从而修改state.js中的内容；

// 参数1对象中的 第1个变量，接收的是mutations中的函数
// 参数1对象中的 第2个变量，接收的是state中的数据，因为最终都有store/index.js引入所有文件
// 所以这个action.js中的变量也能够直接拿到state.js、mutations.js等文件中的函数、数据等；

// 参数2对象中的 第1个变量，接收的是调用这个方法时传进来的参数
// 参数2对象中的 第2个变量，接收的是嗲用这个方法时传进来的参数
// 示例↓
var setUserInfo = function setUserInfo(_ref, _ref2) {var commit = _ref.commit,state = _ref.state;var list = _ref2.list,index = _ref2.index;
  // 因为最终都汇总到了store/index.js中，所以actions.js和mutations.js是可以相互访问的，
  // 所以这个commit就是调用mutations.js中的方法，第一个参数是方法名，
  // 就类似于在其他.vue文件中使用this.$store.commit.xxx(fnName, xx)
  // 方法名还是用mutation-types中的字符串来命名，得到统一性，
  // 第二个参数就是mutations.js中某个方法的形参，具体还得看mutations.js中该方法需要传入的是什么；

  // 调用mutations.js中的SET_SEQUENCE_LIST方法，将歌曲列表传入；
  // 第一个参数是mutations下的函数名，第二个则是传给第一个参数的一些数值；
  commit(types.SET_SEQUENCE_LIST, list);
  // 判断播放模式，如果当前播放模式等于随机播放，也就是2 的时候；
  if (state.mode === playMode.random) {
    // 那么调用洗牌函数，得到随机播放列表；
    var randomList = shuffle(list);
    // 并且将随机播放列表设置为当前播放列表
    commit(types.SET_PLAYLIST, randomList);
    // 然后调用 找到在随机播放列中，当前歌曲的索引 的函数；
    index = findIndex(randomList, list[index]);
  } else {
    // 顺序播放
    commit(types.SET_PLAYLIST, list);
  }
  // 设置当前歌曲索引
  commit(types.SET_CURRENT_INDEX, index);
  // 打开播放器：打开
  commit(types.SET_FULL_SCREEN, true);
  // 播放器状态：播放
  commit(types.SET_PLAYING_STATE, true);
};

// 添加/减少  某个食堂下/某个档口的购物车中商品
exports.setUserInfo = setUserInfo;var setUserGoodsCar = function setUserGoodsCar(_ref3, _ref4) {var commit = _ref3.commit,state = _ref3.state;var canteenId = _ref4.canteenId,stallId = _ref4.stallId,goodsId = _ref4.goodsId,count = _ref4.count,goodsInfo = _ref4.goodsInfo;

  // 点击加减号传过来的内容
  console.log('食堂ID => ' + canteenId);
  console.log('档口ID => ' + stallId);
  console.log('商品ID => ' + goodsId);
  console.log('操作数量 => ' + count);
  console.log('商品信息 => ' + goodsInfo);

  // 这里循环state下用户购物车的数据
  // 先判断购物车是否是空的,如果是空的那么就直接追加
  if (state.store_userGoodsCarDatas.length > 0) {
    // 如果购物车有数据,则循环查找
    console.log('购物车有数据');

    // 找到该食堂的标记符,如果循环完了,这个标记符还是false,说明购物车中没有该食堂的数据
    var canteenFlag = false;var _loop = function _loop(
    i) {

      // ========= find() ==========
      // 其实这里可以用 find()来查找，来代替for循环
      // find()用例↓ 
      // 返回值是被找到的那条元素
      // let canteen = state.store_userGoodsCarDatas.find((item)=>{

      // 	// return 的是一个条件，当条件满足的时候，终止遍历并返回被遍历的那一条；
      // 	//     传过来的餐厅ID = 遍历的内容的id
      // 	return canteenId = item.canteenId
      // })

      // 然后根据 canteen 的返回值，如果不是undefined的话，说明找到了餐厅，
      // 而且canteen此时就是被找到的那个餐厅的数据
      // 然后就可以继续find()找到购物车中这个食堂下，是否有该档口的数据
      // let find = canteen.stalls.find( item => return item.stallsId = stallId )
      // ========= find() ==========


      if (state.store_userGoodsCarDatas[i].canteenId == canteenId) {
        console.log('购物车有该食堂数据');
        // 将标记符改为true
        var _canteenFlag = true;
        var stallsFlag = false;
        // 找到该食堂了,那么再往下查找, 是否有该档口
        var _loop2 = function _loop2(k) {

          if (state.store_userGoodsCarDatas[i].stalls[k].stallsId == stallId) {
            console.log('购物车有该档口数据');
            var _stallsFlag = true;
            var goodsFlag = false;
            // 继续往下查找,是否有该商品数据
            var _loop3 = function _loop3(j) {

              if (state.store_userGoodsCarDatas[i].stalls[k].goodsList[j].goodsId == goodsId) {
                var _goodsFlag = true;
                console.log('购物车有商品的数据直接 + 或 -');
                state.store_userGoodsCarDatas[i].stalls[k].goodsList[j].count += count;
                // 这里还要确保该商品信息已经同步了
                state.store_userGoodsCarDatas[i].stalls[k].goodsList[j].goodsInfo = goodsInfo;
                console.log('购物车中,该商品信息↓');
                console.log(state.store_userGoodsCarDatas[i].stalls[k].goodsList[j]);
                // 减价完之后再判断当前商品数是否小于0,如果小于0话,那么就=0
                // 而且这里还要判断,商品的余量是多少,不能大于商品的剩余量
                if (state.store_userGoodsCarDatas[i].stalls[k].goodsList[j].count <= 0) {
                  state.store_userGoodsCarDatas[i].stalls[k].goodsList[j].count = 0;
                  // 既然等于0了,就应该清楚这个商品的信息
                  console.log('有个商品等于0了');
                  if (stm) {
                    clearTimeout(stm);
                  }
                  var stm = setTimeout(function () {
                    state.store_userGoodsCarDatas[i].stalls[k].goodsList.splice(j, 1);
                  }, 100);
                  console.log(state.store_userGoodsCarDatas[i]);
                }
                return { v: { v: { v: void 0 } } };
              }};for (var j = 0; j < state.store_userGoodsCarDatas[i].stalls[k].goodsList.length; j++) {var _ret3 = _loop3(j);if (typeof _ret3 === "object") return _ret3.v;
            } // 查找商品循环结束, 此时商品标记符为false的话,那么说明: 购物车中,有该食堂,也有该档口,但是没有该商品数据,
            // 那么此时就将商品的数据直接插入
            if (!goodsFlag) {
              var goodsDatas = {
                goodsId: goodsId,
                count: 1,
                goodsInfo: goodsInfo };


              console.log('购物车中,有该食堂数据,有该档口数据, 但没有该商品数据, 直接将该商品追加进去');
              state.store_userGoodsCarDatas[i].stalls[k].goodsList.push(goodsDatas);
              console.log('此时用户购物车数据↓');
              console.log(state.store_userGoodsCarDatas);
            }
            return { v: { v: void 0 } };
          }};for (var k = 0; k < state.store_userGoodsCarDatas[i].stalls.length; k++) {var _ret2 = _loop2(k);if (typeof _ret2 === "object") return _ret2.v;
        } // 查找档口循环结束, 如果标记符为false,说明购物车中,有该食堂,但是没有该档口,那么直接将档口信息插入到这个食堂数据中
        if (!stallsFlag) {
          var stallsDatas = {
            stallsId: stallId,
            goodsList: [
            {
              goodsId: goodsId,
              count: 1,
              goodsInfo: goodsInfo }] };




          console.log('购物车中,有该食堂数据,但没有该档口数据,直接将该档口/该商品追加进去');
          state.store_userGoodsCarDatas[i].stalls.push(stallsDatas);
          console.log('此时用户购物车数据↓');
          console.log(state.store_userGoodsCarDatas);
        }

        return { v: void 0 };
      }};for (var i = 0; i < state.store_userGoodsCarDatas.length; i++) {var _ret = _loop(i);if (typeof _ret === "object") return _ret.v;
    } // 查找食堂循环结束,如果canteenFlag是false,说明该购物车下没有该食堂数据,那么直接将该食堂/档口/商品数据插入
    if (!canteenFlag) {
      // 如果没有该食堂数据,那么直接追加食堂数据、档口数据、食品数据
      // 直接追加数据
      var canteenDatas = {
        canteenId: canteenId,
        stalls: [
        {
          stallsId: stallId,
          goodsList: [
          {
            goodsId: goodsId,
            count: 1,
            goodsInfo: goodsInfo }] }] };





      console.log('购物车没有该食堂数据,直接将该食堂/该档口/该商品追加进去');
      state.store_userGoodsCarDatas.push(canteenDatas);
      console.log('此时用户购物车数据↓');
      console.log(state.store_userGoodsCarDatas);
    }



  } else {
    // 如果整个购物车都没有内容,那么直接追加食堂数据、档口数据、食品数据
    // 如果没有该食堂数据,那么直接追加食堂数据、档口数据、食品数据
    // 直接追加数据
    var datas = {
      canteenId: canteenId,
      stalls: [
      {
        stallsId: stallId,
        goodsList: [
        {
          goodsId: goodsId,
          count: 1,
          goodsInfo: goodsInfo }] }] };






    console.log('购物车没有该食堂数据,直接将该食堂/该档口/该商品追加进去');
    state.store_userGoodsCarDatas.push(datas);
    console.log('此时用户购物车数据↓');
    console.log(state.store_userGoodsCarDatas);

  }


  // console.log(state)
};

// 清空某个食堂下/某个档口的购物车
exports.setUserGoodsCar = setUserGoodsCar;var clearUserGoodsCar = function clearUserGoodsCar(_ref5, _ref6) {var commit = _ref5.commit,state = _ref5.state;var canteenId = _ref6.canteenId,stallId = _ref6.stallId;

  // 点击加减号传过来的内容
  console.log('食堂ID => ' + canteenId);
  console.log('档口ID => ' + stallId);
  // 找到该食堂,清空
  for (var i = 0; i < state.store_userGoodsCarDatas.length; i++) {
    if (state.store_userGoodsCarDatas[i].canteenId == canteenId) {
      for (var j = 0; j < state.store_userGoodsCarDatas[i].stalls.length; i++) {
        if (state.store_userGoodsCarDatas[i].stalls[j].stallsId == stallId) {

          // 需要先将所有商品的数量清零,然后再清空这个档口下的商品数据
          for (var k = 0; k < state.store_userGoodsCarDatas[i].stalls[j].goodsList.length; k++) {
            state.store_userGoodsCarDatas[i].stalls[j].goodsList[k].count = 0;
          }

          // 这里就不用在清空了,因为在别处已经做了: 如果当购物车中,这个商品数为0那么就清除购物车中这个商品的数据
          state.store_userGoodsCarDatas[i].stalls[j].goodsList = [];
          // state.store_userGoodsCarDatas[i].stalls[j]={}
          return;
        }
      }
      return;
    }
  }

};exports.clearUserGoodsCar = clearUserGoodsCar;

/***/ }),
/* 14 */
/*!***************************************!*\
  !*** D:/JStest/JTSC/store/getters.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.store_UserInfo = void 0; // 这里的 getters， 只负责 将state中的数据，对外提供展示数据，
// 向外导出数据，只能展示不能修改；

// 用户信息(不含敏感信息)
var store_UserInfo = function store_UserInfo(state) {return state.store_UserInfo;};exports.store_UserInfo = store_UserInfo;

/***/ }),
/* 15 */
/*!*************************************!*\
  !*** D:/JStest/JTSC/store/state.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var state = {


  // state只是缓存不是本地存储，所以需要持久化的数据，存到state时，也有要存到 localStorage 本地存储中


  // 用户基本数据,不包含敏感信息;
  store_UserInfo: {
    avatarUrl: null,
    city: null,
    country: null,
    gender: null,
    language: null,
    nickName: null,
    province: null } };var _default =




state;exports.default = _default;

/***/ }),
/* 16 */
/*!*****************************************!*\
  !*** D:/JStest/JTSC/store/mutations.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // matutaions负责修改state中的数据
// 如果是复杂的操作，那么就需要用actions.js来操作 matutaions 中的函数，
// 但是，不能在 actions.js 直接操作 state ，只能由actions操作matutaions，从而操作state中的数据
var matutaions = {
  // 设置用户信息(不包含敏感数据)
  setUserInfo: function setUserInfo(state, userInfo) {
    state.store_UserInfo = userInfo;
  } };


// 将 matutaions 导出，在store/index.js引入
var _default = matutaions;exports.default = _default;

/***/ }),
/* 17 */
/*!*******************************************************************************************************!*\
  !*** D:/JStest/JTSC/node_modules/_promise.prototype.finally@3.1.2@promise.prototype.finally/index.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 18);
var define = __webpack_require__(/*! define-properties */ 20);

var implementation = __webpack_require__(/*! ./implementation */ 24);
var getPolyfill = __webpack_require__(/*! ./polyfill */ 50);
var shim = __webpack_require__(/*! ./shim */ 51);

var bound = bind.call(Function.call, getPolyfill());

define(bound, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim });


module.exports = bound;

/***/ }),
/* 18 */
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ 19);

module.exports = Function.prototype.bind || implementation;


/***/ }),
/* 19 */
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),
/* 20 */
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ 21);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),
/* 21 */
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ 22);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ 23);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 22 */
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 23 */
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ 22); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 24 */
/*!****************************************************************************************************************!*\
  !*** D:/JStest/JTSC/node_modules/_promise.prototype.finally@3.1.2@promise.prototype.finally/implementation.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(/*! ./requirePromise */ 25);

requirePromise();

var IsCallable = __webpack_require__(/*! es-abstract/2018/IsCallable */ 26);
var SpeciesConstructor = __webpack_require__(/*! es-abstract/2018/SpeciesConstructor */ 28);
var Type = __webpack_require__(/*! es-abstract/2018/Type */ 41);

var promiseResolve = function PromiseResolve(C, value) {
  return new C(function (resolve) {
    resolve(value);
  });
};

var OriginalPromise = Promise;

var createThenFinally = function CreateThenFinally(C, onFinally) {
  return function (value) {
    var result = onFinally();
    var promise = promiseResolve(C, result);
    var valueThunk = function valueThunk() {
      return value;
    };
    return promise.then(valueThunk);
  };
};

var createCatchFinally = function CreateCatchFinally(C, onFinally) {
  return function (reason) {
    var result = onFinally();
    var promise = promiseResolve(C, result);
    var thrower = function thrower() {
      throw reason;
    };
    return promise.then(thrower);
  };
};

var promiseFinally = function finally_(onFinally) {
  /* eslint no-invalid-this: 0 */

  var promise = this;

  if (Type(promise) !== 'Object') {
    throw new TypeError('receiver is not an Object');
  }

  var C = SpeciesConstructor(promise, OriginalPromise); // may throw

  var thenFinally = onFinally;
  var catchFinally = onFinally;
  if (IsCallable(onFinally)) {
    thenFinally = createThenFinally(C, onFinally);
    catchFinally = createCatchFinally(C, onFinally);
  }

  return promise.then(thenFinally, catchFinally);
};

if (Object.getOwnPropertyDescriptor) {
  var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
  if (descriptor && descriptor.configurable) {
    Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
  }
}

module.exports = promiseFinally;

/***/ }),
/* 25 */
/*!****************************************************************************************************************!*\
  !*** D:/JStest/JTSC/node_modules/_promise.prototype.finally@3.1.2@promise.prototype.finally/requirePromise.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function requirePromise() {
  if (typeof Promise !== 'function') {
    throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
  }
};

/***/ }),
/* 26 */
/*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2018/IsCallable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.11

module.exports = __webpack_require__(/*! is-callable */ 27);


/***/ }),
/* 27 */
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
	} catch (_) {
		reflectApply = null;
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = reflectApply
	? function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value);
	}
	: function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (typeof value === 'function' && !value.prototype) { return true; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ }),
/* 28 */
/*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2018/SpeciesConstructor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');

var IsConstructor = __webpack_require__(/*! ./IsConstructor */ 32);
var Type = __webpack_require__(/*! ./Type */ 41);

// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor

module.exports = function SpeciesConstructor(O, defaultConstructor) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	var C = O.constructor;
	if (typeof C === 'undefined') {
		return defaultConstructor;
	}
	if (Type(C) !== 'Object') {
		throw new $TypeError('O.constructor is not an Object');
	}
	var S = $species ? C[$species] : void 0;
	if (S == null) {
		return defaultConstructor;
	}
	if (IsConstructor(S)) {
		return S;
	}
	throw new $TypeError('no constructor found');
};


/***/ }),
/* 29 */
/*!**************************************************!*\
  !*** ./node_modules/es-abstract/GetIntrinsic.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ 30)();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__(/*! function-bind */ 18);
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),
/* 30 */
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ 31);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 3)))

/***/ }),
/* 31 */
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 32 */
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2018/IsConstructor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic.js */ 29);

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = __webpack_require__(/*! ./DefinePropertyOrThrow */ 33);
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://www.ecma-international.org/ecma-262/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}


/***/ }),
/* 33 */
/*!****************************************************************!*\
  !*** ./node_modules/es-abstract/2018/DefinePropertyOrThrow.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $TypeError = GetIntrinsic('%TypeError%');

var isPropertyDescriptor = __webpack_require__(/*! ../helpers/isPropertyDescriptor */ 34);
var DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ 36);

var FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ 39);
var IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ 43);
var IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ 44);
var IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ 45);
var SameValue = __webpack_require__(/*! ./SameValue */ 46);
var ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ 48);
var Type = __webpack_require__(/*! ./Type */ 41);

// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (Type(O) !== 'Object') {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!IsPropertyKey(P)) {
		throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
	}

	var Desc = isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor({
		Type: Type,
		IsDataDescriptor: IsDataDescriptor,
		IsAccessorDescriptor: IsAccessorDescriptor
	}, Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};


/***/ }),
/* 34 */
/*!******************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPropertyDescriptor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var has = __webpack_require__(/*! has */ 35);
var $TypeError = GetIntrinsic('%TypeError%');

module.exports = function IsPropertyDescriptor(ES, Desc) {
	if (ES.Type(Desc) !== 'Object') {
		return false;
	}
	var allowed = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Get]]': true,
		'[[Set]]': true,
		'[[Value]]': true,
		'[[Writable]]': true
	};

	for (var key in Desc) { // eslint-disable-line no-restricted-syntax
		if (has(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};


/***/ }),
/* 35 */
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 18);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),
/* 36 */
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/DefineOwnProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

var callBound = __webpack_require__(/*! ../helpers/callBound */ 37);

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};


/***/ }),
/* 37 */
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBound.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var callBind = __webpack_require__(/*! ./callBind */ 38);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),
/* 38 */
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ 18);

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),
/* 39 */
/*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2018/FromPropertyDescriptor.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ 40);

var Type = __webpack_require__(/*! ./Type */ 41);

// https://www.ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = Desc['[[Configurable]]'];
	}
	return obj;
};


/***/ }),
/* 40 */
/*!**********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/assertRecord.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');

var has = __webpack_require__(/*! has */ 35);

var predicates = {
	// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
	'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
		if (Type(Desc) !== 'Object') {
			return false;
		}
		var allowed = {
			'[[Configurable]]': true,
			'[[Enumerable]]': true,
			'[[Get]]': true,
			'[[Set]]': true,
			'[[Value]]': true,
			'[[Writable]]': true
		};

		for (var key in Desc) { // eslint-disable-line
			if (has(Desc, key) && !allowed[key]) {
				return false;
			}
		}

		var isData = has(Desc, '[[Value]]');
		var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
		if (isData && IsAccessor) {
			throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	}
};

module.exports = function assertRecord(Type, recordType, argumentName, value) {
	var predicate = predicates[recordType];
	if (typeof predicate !== 'function') {
		throw new $SyntaxError('unknown record type: ' + recordType);
	}
	if (!predicate(Type, value)) {
		throw new $TypeError(argumentName + ' must be a ' + recordType);
	}
};


/***/ }),
/* 41 */
/*!***********************************************!*\
  !*** ./node_modules/es-abstract/2018/Type.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ES5Type = __webpack_require__(/*! ../5/Type */ 42);

// https://ecma-international.org/ecma-262/6.0/#sec-ecmascript-data-types-and-values

module.exports = function Type(x) {
	if (typeof x === 'symbol') {
		return 'Symbol';
	}
	return ES5Type(x);
};


/***/ }),
/* 42 */
/*!********************************************!*\
  !*** ./node_modules/es-abstract/5/Type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/5.1/#sec-8

module.exports = function Type(x) {
	if (x === null) {
		return 'Null';
	}
	if (typeof x === 'undefined') {
		return 'Undefined';
	}
	if (typeof x === 'function' || typeof x === 'object') {
		return 'Object';
	}
	if (typeof x === 'number') {
		return 'Number';
	}
	if (typeof x === 'boolean') {
		return 'Boolean';
	}
	if (typeof x === 'string') {
		return 'String';
	}
};


/***/ }),
/* 43 */
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2018/IsAccessorDescriptor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! has */ 35);

var assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ 40);

var Type = __webpack_require__(/*! ./Type */ 41);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};


/***/ }),
/* 44 */
/*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2018/IsDataDescriptor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! has */ 35);

var assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ 40);

var Type = __webpack_require__(/*! ./Type */ 41);

// https://www.ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	assertRecord(Type, 'Property Descriptor', 'Desc', Desc);

	if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};


/***/ }),
/* 45 */
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2018/IsPropertyKey.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.ecma-international.org/ecma-262/6.0/#sec-ispropertykey

module.exports = function IsPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};


/***/ }),
/* 46 */
/*!****************************************************!*\
  !*** ./node_modules/es-abstract/2018/SameValue.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(/*! ../helpers/isNaN */ 47);

// http://www.ecma-international.org/ecma-262/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};


/***/ }),
/* 47 */
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isNaN.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),
/* 48 */
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2018/ToPropertyDescriptor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(/*! has */ 35);

var GetIntrinsic = __webpack_require__(/*! ../GetIntrinsic */ 29);

var $TypeError = GetIntrinsic('%TypeError%');

var Type = __webpack_require__(/*! ./Type */ 41);
var ToBoolean = __webpack_require__(/*! ./ToBoolean */ 49);
var IsCallable = __webpack_require__(/*! ./IsCallable */ 26);

// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (Type(Obj) !== 'Object') {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (has(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (has(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (has(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (has(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (has(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (has(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};


/***/ }),
/* 49 */
/*!****************************************************!*\
  !*** ./node_modules/es-abstract/2018/ToBoolean.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// http://www.ecma-international.org/ecma-262/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };


/***/ }),
/* 50 */
/*!**********************************************************************************************************!*\
  !*** D:/JStest/JTSC/node_modules/_promise.prototype.finally@3.1.2@promise.prototype.finally/polyfill.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(/*! ./requirePromise */ 25);

var implementation = __webpack_require__(/*! ./implementation */ 24);

module.exports = function getPolyfill() {
  requirePromise();
  return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;
};

/***/ }),
/* 51 */
/*!******************************************************************************************************!*\
  !*** D:/JStest/JTSC/node_modules/_promise.prototype.finally@3.1.2@promise.prototype.finally/shim.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var requirePromise = __webpack_require__(/*! ./requirePromise */ 25);

var getPolyfill = __webpack_require__(/*! ./polyfill */ 50);
var define = __webpack_require__(/*! define-properties */ 20);

module.exports = function shimPromiseFinally() {
  requirePromise();

  var polyfill = getPolyfill();
  define(Promise.prototype, { 'finally': polyfill }, {
    'finally': function testFinally() {
      return Promise.prototype['finally'] !== polyfill;
    } });

  return polyfill;
};

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */
/*!****************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/banner.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/home/banner.png";

/***/ }),
/* 67 */
/*!*************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/ugc.svg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ugc.15898a73.svg";

/***/ }),
/* 68 */
/*!*********************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/pjkk/PJKK_1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 69 */
/*!*********************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/pjkk/PJKK_2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 70 */
/*!*********************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/pjkk/PJKK_3.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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D7lcrgddui0+Sonzzciq17MlljYefuIMnuifkAqxoLMiTzkvxJWs2It7+mXlxM3WjYnd2+/Cps4axDwpuLV37vqcZa9SQi0BE2AVzAc37/7MV8Rxy0Z48ZmjB926frgkNlRHC+TdZtPxJL71gxcwOJVBMFzDlowi78RK5rIIkH1bejfjzlua0ORKQFffnLh4u21lwdiQLCsc7N657xulY1YhMXLq33sVXT3KFdnxbgasZM8PjOE7PzrFxRdEsCaMrg1t2Nm7AW01aca7Am4mc9Yj6RoHrYK1r+3OX13WXlkTiSunj4cDau4QA+LBdztg7yZzuMWH0mbqK53b9q1qYL4uEuOnH+2gezzEzf3vgVZ9I2B9zDEeiG2775q3iF8XCiXgCNp+vGdvqxWL233ceLBh630nftbxb4g2DsbtEhV+vGdvxYS7e2ipsPSNtVzftexN+7n5s4/fyxxhP94D741YnAn7t5goHbseNq1lb0tgKoFH4Hoh7nR9z8rGORlkTnXsrYC07Hx4m63oNndx895fRABtgMw+Voj62OHoi9z29v7t36pLvyunj4bDntpfZqllF0MswVM68HMCogCHLq6fJYY+iofBhLF04o3Eozf1nXgHrASiUTDCLED0FoEMwwYyjJvLBAAExuoXAEkGwXwpmU8OVhucteymTK6mzvy416XqtQJQIWjYwQpzwjqYCoaLwAoT78ltvieefxbQcR5fnmDBCOezAIJ1nTgXUJx1VO6zBuPZxYV3ApTXs/8E5H+EFpNnGBIAAAAASUVORK5CYII="

/***/ }),
/* 71 */
/*!*********************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/pjkk/PJKK_4.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 72 */
/*!*********************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/pjkk/PJKK_5.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 73 */
/*!*******************************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/porcelain/porcelain_1.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 74 */
/*!*******************************************************************!*\
  !*** D:/JStest/JTSC/static/images/home/porcelain/porcelain_2.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 75 */
/*!***********************************************************!*\
  !*** D:/JStest/JTSC/static/images/mock/mock-goodsimg.png ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/images/mock/mock-goodsimg.png";

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map