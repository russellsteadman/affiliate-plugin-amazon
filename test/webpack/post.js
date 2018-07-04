(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pre.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../dist/plugin.node.js":
/*!***********************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/dist/plugin.node.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,\"a\",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p=\"\",o(o.s=0)}([function(t,e,o){\"use strict\";var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},n=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},a=function(t){if(\"object\"===(\"undefined\"==typeof console?\"undefined\":n(console))){var e=Array.prototype.slice.call(arguments,1),o=t?console.error:console.log;(o=Function.prototype.bind.call(o,console)).apply(console,[\"[AMZNPlugin] \"].concat(e))}};t.exports=function(t,e){var o={tags:{us:\"\",gb:\"\",de:\"\",fr:\"\",jp:\"\",ca:\"\",cn:\"\",it:\"\",es:\"\",in:\"\",br:\"\",mx:\"\"},debug:!1,locale:null,modifyDomain:!0};if(e&&e.tags&&(e.tags=r({},o.tags,e.tags)),(e=r({},o,e)).debug&&a(!1,\"Read the docs at https://affiliate.js.org/plugins/amazon\"),!e.tags.us)return a(!0,\"Config must contain a US tag.\");var n={us:{tld:\"com\",la:[\"en\"]},gb:{tld:\"co.uk\",la:[\"gd\",\"cy-ie\",\"en-ie\"]},de:{tld:\"de\",la:[\"de\"]},fr:{tld:\"fr\",la:[\"fr\"]},jp:{tld:\"co.jp\",la:[\"jp\"]},ca:{tld:\"ca\",la:[]},cn:{tld:\"cn\",la:[\"zh\",\"zh-hk\",\"zh-tw\"]},it:{tld:\"it\",la:[\"it\"]},es:{tld:\"es\",la:[\"es\"]},in:{tld:\"in\",la:[\"hi\"]},br:{tld:\"com.br\",la:[]},mx:{tld:\"com.mx\",la:[]}};for(var l in n){var i=\"amazon.\"+n[l].tld;n[l].hosts=[i,\"www.\"+i]}if(e.locale)e.locale=e.locale.toLowerCase();else{var s=window.navigator.languages.reduce(function(t,e){return t.push(e.toLowerCase()),t},[]);for(var c in s){var u=s[c].split(\"-\")[1];for(var f in n)if(f===u||-1!==n[f].la.indexOf(s[c])){e.locale=f;break}if(e.locale)break}}e.tags[e.locale]||(e.locale=\"us\"),e.debug&&a(!1,'Locale set to \"'+e.locale+'\".');var d=[];for(var p in n)d=d.concat(n[p].hosts);var g={tags:[{hosts:d,query:{tag:e.tags[e.locale]},modify:function(t){var o=0;return\"www\"===t.hostname.substr(0,3)&&(o=1),t.set(\"hostname\",n[e.locale].hosts[o]),t}}],log:e.debug};if(!1===e.modifyDomain){g.tags=[];for(var y in e.tags)n[y]&&e.tags[y]&&g.tags.push({hosts:n[y].hosts,query:{tag:e.tags[y]}})}return t(g)}}]);\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/dist/plugin.node.js?");

/***/ }),

/***/ "../../index.js":
/*!************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/plugin.node */ \"../../dist/plugin.node.js\");\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/index.js?");

/***/ }),

/***/ "../../node_modules/affiliate/dist/affiliate.node.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/affiliate/dist/affiliate.node.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,\"a\",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=\"\",r(r.s=6)}([function(t,e,r){\"use strict\";var o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t};t.exports=function(t){if(\"object\"===(\"undefined\"==typeof console?\"undefined\":o(console))){var e=Array.prototype.slice.call(arguments,1),r=t?console.error:console.info;(r=Function.prototype.bind.call(r,console)).apply(console,[\"[Affiliate] \"].concat(e))}}},function(t,e){t.exports=__webpack_require__(/*! docile */ \"../../node_modules/docile/index.js\")},function(t,e){t.exports=__webpack_require__(/*! url-parse */ \"../../node_modules/url-parse/index.js\")},function(t,e,r){\"use strict\";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},n=function(){function t(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,\"value\"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}();var i=r(2),a=r(1),s=r(0),c=!(void 0===window.MutationObserver),f=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}(this,t),e=o({tags:[]},e);var n=[];for(var i in e.tags)e.tags[i]=o({hosts:[],query:{},replace:[]},e.tags[i]),n=n.concat(e.tags[i].hosts);this.log=e.log?s:function(){},this.log(!1,\"New Instance\",e),c&&(this.observer=new window.MutationObserver(function(t){for(var e in r.log(!1,\"DOM Mutation\"),t){if(\"attributes\"===t[e].type){if(\"href\"!==t[e].attributeName)continue;var o=t[e].target.getAttribute(\"href\"),n=a.get(t[e].target)||{};if(n.is&&n.is===o)continue}r.traverseNodes(t[e].target)}})),this.state={attached:!1,config:e,hosts:n}}return n(t,[{key:\"traverseNodes\",value:function(t){t||(t=document.body),this.log(!1,\"Traversing DOM...\");var e=t.getElementsByTagName(\"a\"),r=[];for(var o in e)e.hasOwnProperty(o)&&(r[o]=e[o]);for(var n in\"a\"===t.nodeName.toLowerCase()&&(r=[t]),r){if(!r[n]||!r[n].getAttribute(\"href\"))return;var a=i(r[n].getAttribute(\"href\")||\"\",!0);if(-1!==this.state.hosts.indexOf(a.host))for(var s in this.state.config.tags)this.state.config.tags[s].hosts.indexOf(a.host)>=0&&this.modifyURL(a,r[n],this.state.config.tags[s])}}},{key:\"modifyURL\",value:function(t,e,r){var n=a.get(e)||{};if(!n.is||n.is!==t.href){var c=t.href;if(this.log(!1,\"Discovered URL: \"+t.href),t.set(\"query\",o({},t.query,r.query)),\"function\"==typeof r.modify)try{var f=r.modify(t);t=i(f.href||f,!0)}catch(t){s(!0,t)}for(var u in t=t.href,r.replace)t=t.replace(r.replace[u].from,r.replace[u].to);e.setAttribute(\"href\",t),a.set(e,{was:c,is:t})}}},{key:\"attach\",value:function(){if(!this.state.attached){var t=document.readyState;if(\"complete\"!==t&&\"interactive\"!==t)return window.addEventListener(\"DOMContentLoaded\",this.attach.bind(this));this.state.attached=!0,this.traverseNodes(),c?this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[\"href\"]}):this.log(!1,\"Browser does not support MutationObserver.\")}}},{key:\"detach\",value:function(){c&&(this.state.attached=!1,this.observer.disconnect(),this.log(!1,\"Observer disconnected.\"))}}]),t}();t.exports=f},function(t,e,r){\"use strict\";var o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},n=function t(e,r){if(\"object\"===(void 0===e?\"undefined\":o(e)))for(var n in e)e[n]=t(e[n],r);else if(\"string\"==typeof e)for(var i in e=e.split(r))e[i]=e[i].trim();return e};t.exports=function(){var t=document.getElementById(\"aff-js\");if(\"object\"===(void 0===t?\"undefined\":o(t))&&null!==t){var e=t.getAttribute(\"data-aff\");if(\"string\"==typeof e){var r=n(n(n(n(e,\"!\"),\":\"),\",\"),\"=\"),i=[];for(var a in r){var s={hosts:[],query:{}};for(var c in r[a][0])s.hosts.push(r[a][0][c][0]);for(var f in r[a][1])s.query[r[a][1][f][0]]=r[a][1][f][1];i.push(s)}return{tags:i}}}}},function(t,e){var r;r=function(){return this}();try{r=r||Function(\"return this\")()||(0,eval)(\"this\")}catch(t){\"object\"==typeof window&&(r=window)}t.exports=r},function(t,e,r){\"use strict\";(function(e){var o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},n=r(1),i=r(4),a=r(3),s=r(0);e.instanceList=e.instanceList||[];var c=function(t){var r=new a(t);return e.instanceList.push(r),r};c.instances=function(){return[].concat(e.instanceList)},c.detachAll=function(){for(var t in e.instanceList)e.instanceList[t].detach()},c.revert=function(){c.detachAll();var t=[].slice.call(document.body.getElementsByTagName(\"a\"));for(var e in t){var r=n.get(t[e]);r&&r.was&&(t[e].setAttribute(\"href\",r.was),n.set(t[e],{}))}};try{var f=i();if(\"object\"===(void 0===f?\"undefined\":o(f))){var u=c(f);s(!1,u),c.automatic=u,u.attach()}}catch(t){s(!0,t)}t.exports=c}).call(this,r(5))}]);\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/affiliate/dist/affiliate.node.js?");

/***/ }),

/***/ "../../node_modules/affiliate/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/affiliate/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/affiliate.node */ \"../../node_modules/affiliate/dist/affiliate.node.js\");\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/affiliate/index.js?");

/***/ }),

/***/ "../../node_modules/docile/index.js":
/*!********************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/docile/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/** @module docile */\r\nmodule.exports = __webpack_require__(/*! ./src/index */ \"../../node_modules/docile/src/index.js\");\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/docile/index.js?");

/***/ }),

/***/ "../../node_modules/docile/src/index.js":
/*!************************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/docile/src/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var domReady = ['loaded', 'interactive', 'complete'].indexOf(document.readyState) >= 0;\r\n\r\nvar attrId = 'data-docile-id';\r\nvar attrStore = 'data-docile-store';\r\n\r\nvar nativeBind = Function.prototype.bind;\r\nvar slice = Array.prototype.slice;\r\n\r\nvar bindTo = function (func, context) {\r\n    if (nativeBind && func.bind === nativeBind) {\r\n        return nativeBind.apply(func, slice.call(arguments, 1));\r\n    }\r\n    var args = slice.call(arguments, 2);\r\n    return function () {\r\n        return func.apply(context, args.concat(slice.call(arguments)));\r\n    };\r\n};\r\n\r\nvar error = function () {\r\n    if (typeof console === 'object') {\r\n        var args = Array.prototype.slice.call(arguments);\r\n        var logFunc = Function.prototype.bind.call(console.error, console);\r\n        logFunc.apply(console, ['[Docile] '].concat(args));\r\n    }\r\n};\r\n\r\nvar createId = function (node) {\r\n    var id = node.getAttribute(attrId);\r\n    if (!id) {\r\n        id = Math.random().toString(36).substr(2);\r\n        node.setAttribute(attrId, id);\r\n        return id;\r\n    }\r\n    return id;\r\n};\r\n\r\nvar findNode = function (node) {\r\n    if (!domReady) {\r\n        error('DOM not loaded. Learn more: https://goo.gl/EsYspK');\r\n        return null;\r\n    }\r\n    if (typeof node === 'object') {\r\n        return node;\r\n    } else if (typeof node === 'string') {\r\n        node = document.getElementById(node);\r\n        if (node) return node;\r\n    }\r\n    error('Unable to resolve node.');\r\n};\r\n\r\nvar findById = function (id) {\r\n    return document.querySelector('[' + attrId + '=\"' + id + '\"]');\r\n};\r\n\r\nvar revive = function () {\r\n    var data = {store:{},linkStore:{}};\r\n    if (!document.head.getAttribute(attrStore)) document.head.setAttribute(attrStore, '{\"store\":{},\"linkStore\":{}}');\r\n    try {\r\n        data = JSON.parse(document.head.getAttribute(attrStore));\r\n    } catch (e) {\r\n        error('Data could not be resumed.');\r\n    }\r\n    return data;\r\n};\r\n\r\nvar persist = function (storeData, linkStoreData) {\r\n    try {\r\n        document.head.setAttribute(attrStore, JSON.stringify({store: storeData, linkStore: linkStoreData}));\r\n    } catch (e) {\r\n        error('Data could not be saved.');\r\n    }\r\n};\r\n\r\nvar set = function (node, data) {\r\n    node = findNode(node);\r\n    if (!node) return;\r\n    var id = createId(node);\r\n    this.store[id] = data;\r\n    persist(this.store, this.linkStore);\r\n    return this;\r\n};\r\n\r\nvar get = function (node) {\r\n    node = findNode(node);\r\n    if (!node) return;\r\n    var id = createId(node);\r\n    return this.store[id];\r\n};\r\n\r\nvar setLink = function (main, alias, node) {\r\n    main.linkStore[this.id] = main.linkStore[this.id] || {};\r\n    if (typeof alias === 'string') {\r\n        node = findNode(node);\r\n        if (!node) return;\r\n        main.linkStore[this.id][alias] = createId(node);\r\n    } else if (typeof alias === 'object') {\r\n        for (var i in alias) {\r\n            this.set(i, alias[i]);\r\n        }\r\n    }\r\n    persist(main.store, main.linkStore);\r\n    return this;\r\n};\r\n\r\nvar getLink = function (main, alias) {\r\n    main.linkStore[this.id] = main.linkStore[this.id] || {};\r\n    if (alias) {\r\n        if (typeof alias !== 'string') return error('Link name must be a string.');\r\n        return findById(main.linkStore[this.id][alias]);\r\n    } else {\r\n        var links = {};\r\n        for (var i in main.linkStore[this.id]) {\r\n            links[i] = findById(main.linkStore[this.id][i]);\r\n        }\r\n        return links;\r\n    }\r\n};\r\n\r\nvar getLinkData = function (main, alias) {\r\n    if (alias) {\r\n        return main.get(this.get(alias));\r\n    } else {\r\n        var listLinks = this.get();\r\n        for (var i in listLinks) {\r\n            listLinks[i] = main.get(listLinks[i]);\r\n        }\r\n        return listLinks;\r\n    }\r\n};\r\n\r\nvar link = function (node) {\r\n    node = findNode(node);\r\n    if (!node) return;\r\n    var id = createId(node);\r\n    var DocileLink = new Object();\r\n    DocileLink.id = id;\r\n    DocileLink.set = bindTo(setLink, DocileLink, this);\r\n    DocileLink.get = bindTo(getLink, DocileLink, this);\r\n    DocileLink.getData = bindTo(getLinkData, DocileLink, this);\r\n    return DocileLink;\r\n};\r\n\r\n/**\r\n * Stores data about DOM nodes.\r\n * @property {function} set - Set data\r\n * @property {function} get - Get data\r\n * @property {function} link - Links nodes\r\n */\r\nvar Docile = new Object();\r\n/**\r\n * @param {(string|Object)} node - The DOM node or node id\r\n */\r\nDocile.get = bindTo(get, Docile);\r\n/**\r\n * @param {(string|Object)} node - The DOM node or node id\r\n * @param {*} data - The data to be stored\r\n */\r\nDocile.set = bindTo(set, Docile);\r\n/**\r\n * @param {(string|Object)} node - The DOM node for accessing a link\r\n */\r\nDocile.link = bindTo(link, Docile);\r\n\r\nvar initialData = revive();\r\nDocile.store = initialData.store || {};\r\nDocile.linkStore = initialData.linkStore || {};\r\n\r\nwindow.addEventListener('DOMContentLoaded', function () {\r\n    domReady = true;\r\n});\r\n\r\nmodule.exports = Docile;\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/docile/src/index.js?");

/***/ }),

/***/ "../../node_modules/querystringify/index.js":
/*!****************************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/querystringify/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar has = Object.prototype.hasOwnProperty;\n\n/**\n * Decode a URI encoded string.\n *\n * @param {String} input The URI encoded string.\n * @returns {String} The decoded string.\n * @api private\n */\nfunction decode(input) {\n  return decodeURIComponent(input.replace(/\\+/g, ' '));\n}\n\n/**\n * Simple query string parser.\n *\n * @param {String} query The query string that needs to be parsed.\n * @returns {Object}\n * @api public\n */\nfunction querystring(query) {\n  var parser = /([^=?&]+)=?([^&]*)/g\n    , result = {}\n    , part;\n\n  while (part = parser.exec(query)) {\n    var key = decode(part[1])\n      , value = decode(part[2]);\n\n    //\n    // Prevent overriding of existing properties. This ensures that build-in\n    // methods like `toString` or __proto__ are not overriden by malicious\n    // querystrings.\n    //\n    if (key in result) continue;\n    result[key] = value;\n  }\n\n  return result;\n}\n\n/**\n * Transform a query string to an object.\n *\n * @param {Object} obj Object that should be transformed.\n * @param {String} prefix Optional prefix.\n * @returns {String}\n * @api public\n */\nfunction querystringify(obj, prefix) {\n  prefix = prefix || '';\n\n  var pairs = [];\n\n  //\n  // Optionally prefix with a '?' if needed\n  //\n  if ('string' !== typeof prefix) prefix = '?';\n\n  for (var key in obj) {\n    if (has.call(obj, key)) {\n      pairs.push(encodeURIComponent(key) +'='+ encodeURIComponent(obj[key]));\n    }\n  }\n\n  return pairs.length ? prefix + pairs.join('&') : '';\n}\n\n//\n// Expose the module.\n//\nexports.stringify = querystringify;\nexports.parse = querystring;\n\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/querystringify/index.js?");

/***/ }),

/***/ "../../node_modules/requires-port/index.js":
/*!***************************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/requires-port/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Check if we're required to add a port number.\n *\n * @see https://url.spec.whatwg.org/#default-port\n * @param {Number|String} port Port number we need to check\n * @param {String} protocol Protocol we need to check against.\n * @returns {Boolean} Is it a default port for the given protocol\n * @api private\n */\nmodule.exports = function required(port, protocol) {\n  protocol = protocol.split(':')[0];\n  port = +port;\n\n  if (!port) return false;\n\n  switch (protocol) {\n    case 'http':\n    case 'ws':\n    return port !== 80;\n\n    case 'https':\n    case 'wss':\n    return port !== 443;\n\n    case 'ftp':\n    return port !== 21;\n\n    case 'gopher':\n    return port !== 70;\n\n    case 'file':\n    return false;\n  }\n\n  return port !== 0;\n};\n\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/requires-port/index.js?");

/***/ }),

/***/ "../../node_modules/url-parse/index.js":
/*!***********************************************************************************!*\
  !*** C:/Users/russe/code/affiliate-plugin-amazon/node_modules/url-parse/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar required = __webpack_require__(/*! requires-port */ \"../../node_modules/requires-port/index.js\")\n  , qs = __webpack_require__(/*! querystringify */ \"../../node_modules/querystringify/index.js\")\n  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\\/\\/)?([\\S\\s]*)/i\n  , slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\\/\\//;\n\n/**\n * These are the parse rules for the URL parser, it informs the parser\n * about:\n *\n * 0. The char it Needs to parse, if it's a string it should be done using\n *    indexOf, RegExp using exec and NaN means set as current value.\n * 1. The property we should set when parsing this value.\n * 2. Indication if it's backwards or forward parsing, when set as number it's\n *    the value of extra chars that should be split off.\n * 3. Inherit from location if non existing in the parser.\n * 4. `toLowerCase` the resulting value.\n */\nvar rules = [\n  ['#', 'hash'],                        // Extract from the back.\n  ['?', 'query'],                       // Extract from the back.\n  ['/', 'pathname'],                    // Extract from the back.\n  ['@', 'auth', 1],                     // Extract from the front.\n  [NaN, 'host', undefined, 1, 1],       // Set left over value.\n  [/:(\\d+)$/, 'port', undefined, 1],    // RegExp the back.\n  [NaN, 'hostname', undefined, 1, 1]    // Set left over.\n];\n\n/**\n * These properties should not be copied or inherited from. This is only needed\n * for all non blob URL's as a blob URL does not include a hash, only the\n * origin.\n *\n * @type {Object}\n * @private\n */\nvar ignore = { hash: 1, query: 1 };\n\n/**\n * The location object differs when your code is loaded through a normal page,\n * Worker or through a worker using a blob. And with the blobble begins the\n * trouble as the location object will contain the URL of the blob, not the\n * location of the page where our code is loaded in. The actual origin is\n * encoded in the `pathname` so we can thankfully generate a good \"default\"\n * location from it so we can generate proper relative URL's again.\n *\n * @param {Object|String} loc Optional default location object.\n * @returns {Object} lolcation object.\n * @api public\n */\nfunction lolcation(loc) {\n  var location = global && global.location || {};\n  loc = loc || location;\n\n  var finaldestination = {}\n    , type = typeof loc\n    , key;\n\n  if ('blob:' === loc.protocol) {\n    finaldestination = new URL(unescape(loc.pathname), {});\n  } else if ('string' === type) {\n    finaldestination = new URL(loc, {});\n    for (key in ignore) delete finaldestination[key];\n  } else if ('object' === type) {\n    for (key in loc) {\n      if (key in ignore) continue;\n      finaldestination[key] = loc[key];\n    }\n\n    if (finaldestination.slashes === undefined) {\n      finaldestination.slashes = slashes.test(loc.href);\n    }\n  }\n\n  return finaldestination;\n}\n\n/**\n * @typedef ProtocolExtract\n * @type Object\n * @property {String} protocol Protocol matched in the URL, in lowercase.\n * @property {Boolean} slashes `true` if protocol is followed by \"//\", else `false`.\n * @property {String} rest Rest of the URL that is not part of the protocol.\n */\n\n/**\n * Extract protocol information from a URL with/without double slash (\"//\").\n *\n * @param {String} address URL we want to extract from.\n * @return {ProtocolExtract} Extracted information.\n * @api private\n */\nfunction extractProtocol(address) {\n  var match = protocolre.exec(address);\n\n  return {\n    protocol: match[1] ? match[1].toLowerCase() : '',\n    slashes: !!match[2],\n    rest: match[3]\n  };\n}\n\n/**\n * Resolve a relative URL pathname against a base URL pathname.\n *\n * @param {String} relative Pathname of the relative URL.\n * @param {String} base Pathname of the base URL.\n * @return {String} Resolved pathname.\n * @api private\n */\nfunction resolve(relative, base) {\n  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))\n    , i = path.length\n    , last = path[i - 1]\n    , unshift = false\n    , up = 0;\n\n  while (i--) {\n    if (path[i] === '.') {\n      path.splice(i, 1);\n    } else if (path[i] === '..') {\n      path.splice(i, 1);\n      up++;\n    } else if (up) {\n      if (i === 0) unshift = true;\n      path.splice(i, 1);\n      up--;\n    }\n  }\n\n  if (unshift) path.unshift('');\n  if (last === '.' || last === '..') path.push('');\n\n  return path.join('/');\n}\n\n/**\n * The actual URL instance. Instead of returning an object we've opted-in to\n * create an actual constructor as it's much more memory efficient and\n * faster and it pleases my OCD.\n *\n * @constructor\n * @param {String} address URL we want to parse.\n * @param {Object|String} location Location defaults for relative paths.\n * @param {Boolean|Function} parser Parser for the query string.\n * @api public\n */\nfunction URL(address, location, parser) {\n  if (!(this instanceof URL)) {\n    return new URL(address, location, parser);\n  }\n\n  var relative, extracted, parse, instruction, index, key\n    , instructions = rules.slice()\n    , type = typeof location\n    , url = this\n    , i = 0;\n\n  //\n  // The following if statements allows this module two have compatibility with\n  // 2 different API:\n  //\n  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments\n  //    where the boolean indicates that the query string should also be parsed.\n  //\n  // 2. The `URL` interface of the browser which accepts a URL, object as\n  //    arguments. The supplied object will be used as default values / fall-back\n  //    for relative paths.\n  //\n  if ('object' !== type && 'string' !== type) {\n    parser = location;\n    location = null;\n  }\n\n  if (parser && 'function' !== typeof parser) parser = qs.parse;\n\n  location = lolcation(location);\n\n  //\n  // Extract protocol information before running the instructions.\n  //\n  extracted = extractProtocol(address || '');\n  relative = !extracted.protocol && !extracted.slashes;\n  url.slashes = extracted.slashes || relative && location.slashes;\n  url.protocol = extracted.protocol || location.protocol || '';\n  address = extracted.rest;\n\n  //\n  // When the authority component is absent the URL starts with a path\n  // component.\n  //\n  if (!extracted.slashes) instructions[2] = [/(.*)/, 'pathname'];\n\n  for (; i < instructions.length; i++) {\n    instruction = instructions[i];\n    parse = instruction[0];\n    key = instruction[1];\n\n    if (parse !== parse) {\n      url[key] = address;\n    } else if ('string' === typeof parse) {\n      if (~(index = address.indexOf(parse))) {\n        if ('number' === typeof instruction[2]) {\n          url[key] = address.slice(0, index);\n          address = address.slice(index + instruction[2]);\n        } else {\n          url[key] = address.slice(index);\n          address = address.slice(0, index);\n        }\n      }\n    } else if ((index = parse.exec(address))) {\n      url[key] = index[1];\n      address = address.slice(0, index.index);\n    }\n\n    url[key] = url[key] || (\n      relative && instruction[3] ? location[key] || '' : ''\n    );\n\n    //\n    // Hostname, host and protocol should be lowercased so they can be used to\n    // create a proper `origin`.\n    //\n    if (instruction[4]) url[key] = url[key].toLowerCase();\n  }\n\n  //\n  // Also parse the supplied query string in to an object. If we're supplied\n  // with a custom parser as function use that instead of the default build-in\n  // parser.\n  //\n  if (parser) url.query = parser(url.query);\n\n  //\n  // If the URL is relative, resolve the pathname against the base URL.\n  //\n  if (\n      relative\n    && location.slashes\n    && url.pathname.charAt(0) !== '/'\n    && (url.pathname !== '' || location.pathname !== '')\n  ) {\n    url.pathname = resolve(url.pathname, location.pathname);\n  }\n\n  //\n  // We should not add port numbers if they are already the default port number\n  // for a given protocol. As the host also contains the port number we're going\n  // override it with the hostname which contains no port number.\n  //\n  if (!required(url.port, url.protocol)) {\n    url.host = url.hostname;\n    url.port = '';\n  }\n\n  //\n  // Parse down the `auth` for the username and password.\n  //\n  url.username = url.password = '';\n  if (url.auth) {\n    instruction = url.auth.split(':');\n    url.username = instruction[0] || '';\n    url.password = instruction[1] || '';\n  }\n\n  url.origin = url.protocol && url.host && url.protocol !== 'file:'\n    ? url.protocol +'//'+ url.host\n    : 'null';\n\n  //\n  // The href is just the compiled result.\n  //\n  url.href = url.toString();\n}\n\n/**\n * This is convenience method for changing properties in the URL instance to\n * insure that they all propagate correctly.\n *\n * @param {String} part          Property we need to adjust.\n * @param {Mixed} value          The newly assigned value.\n * @param {Boolean|Function} fn  When setting the query, it will be the function\n *                               used to parse the query.\n *                               When setting the protocol, double slash will be\n *                               removed from the final url if it is true.\n * @returns {URL}\n * @api public\n */\nfunction set(part, value, fn) {\n  var url = this;\n\n  switch (part) {\n    case 'query':\n      if ('string' === typeof value && value.length) {\n        value = (fn || qs.parse)(value);\n      }\n\n      url[part] = value;\n      break;\n\n    case 'port':\n      url[part] = value;\n\n      if (!required(value, url.protocol)) {\n        url.host = url.hostname;\n        url[part] = '';\n      } else if (value) {\n        url.host = url.hostname +':'+ value;\n      }\n\n      break;\n\n    case 'hostname':\n      url[part] = value;\n\n      if (url.port) value += ':'+ url.port;\n      url.host = value;\n      break;\n\n    case 'host':\n      url[part] = value;\n\n      if (/:\\d+$/.test(value)) {\n        value = value.split(':');\n        url.port = value.pop();\n        url.hostname = value.join(':');\n      } else {\n        url.hostname = value;\n        url.port = '';\n      }\n\n      break;\n\n    case 'protocol':\n      url.protocol = value.toLowerCase();\n      url.slashes = !fn;\n      break;\n\n    case 'pathname':\n    case 'hash':\n      if (value) {\n        var char = part === 'pathname' ? '/' : '#';\n        url[part] = value.charAt(0) !== char ? char + value : value;\n      } else {\n        url[part] = value;\n      }\n      break;\n\n    default:\n      url[part] = value;\n  }\n\n  for (var i = 0; i < rules.length; i++) {\n    var ins = rules[i];\n\n    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();\n  }\n\n  url.origin = url.protocol && url.host && url.protocol !== 'file:'\n    ? url.protocol +'//'+ url.host\n    : 'null';\n\n  url.href = url.toString();\n\n  return url;\n}\n\n/**\n * Transform the properties back in to a valid and full URL string.\n *\n * @param {Function} stringify Optional query stringify function.\n * @returns {String}\n * @api public\n */\nfunction toString(stringify) {\n  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;\n\n  var query\n    , url = this\n    , protocol = url.protocol;\n\n  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';\n\n  var result = protocol + (url.slashes ? '//' : '');\n\n  if (url.username) {\n    result += url.username;\n    if (url.password) result += ':'+ url.password;\n    result += '@';\n  }\n\n  result += url.host + url.pathname;\n\n  query = 'object' === typeof url.query ? stringify(url.query) : url.query;\n  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;\n\n  if (url.hash) result += url.hash;\n\n  return result;\n}\n\nURL.prototype = { set: set, toString: toString };\n\n//\n// Expose the URL parser and some additional properties that might be useful for\n// others or testing.\n//\nURL.extractProtocol = extractProtocol;\nURL.location = lolcation;\nURL.qs = qs;\n\nmodule.exports = URL;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///C:/Users/russe/code/affiliate-plugin-amazon/node_modules/url-parse/index.js?");

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./pre.js":
/*!****************!*\
  !*** ./pre.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Affiliate = __webpack_require__(/*! affiliate */ \"../../node_modules/affiliate/index.js\");\r\n\r\nwindow.Affiliate = Affiliate;\r\n\r\nvar AffiliatePluginAmazon = __webpack_require__(/*! ./../.. */ \"../../index.js\");\r\n\r\nwindow.AffiliatePluginAmazon = AffiliatePluginAmazon;\n\n//# sourceURL=webpack:///./pre.js?");

/***/ })

/******/ });
});