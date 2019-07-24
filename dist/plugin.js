window.AffiliatePluginAmazon=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){function o(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){n(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if("object"===("undefined"==typeof console?"undefined":a(console))){var t=Array.prototype.slice.call(arguments,1),o=e?console.error:console.log;(o=Function.prototype.bind.call(o,console)).apply(console,["[AMZNPlugin] "].concat(t))}};e.exports=function(e,t){var o={tags:{us:"",gb:"",de:"",fr:"",jp:"",ca:"",cn:"",it:"",es:"",in:"",br:"",mx:""},debug:!1,locale:null,modifyDomain:!0};if(t&&t.tags&&(t.tags=r({},o.tags,{},t.tags)),(t=r({},o,{},t)).debug&&l(!1,"Read the docs at https://affiliate.js.org/plugins/amazon"),!t.tags.us)return l(!0,"Config must contain a US tag.");var n={us:{tld:"com",la:["en"]},gb:{tld:"co.uk",la:["gd","cy-ie","en-ie"]},de:{tld:"de",la:["de"]},fr:{tld:"fr",la:["fr"]},jp:{tld:"co.jp",la:["jp"]},ca:{tld:"ca",la:[]},cn:{tld:"cn",la:["zh","zh-hk","zh-tw"]},it:{tld:"it",la:["it"]},es:{tld:"es",la:["es"]},in:{tld:"in",la:["hi"]},br:{tld:"com.br",la:[]},mx:{tld:"com.mx",la:[]}};for(var a in n){var i="amazon."+n[a].tld;n[a].hosts=[i,"www."+i,"smile."+i]}if(t.locale)t.locale=t.locale.toLowerCase();else{var c=window.navigator.languages.map(function(e){return e.toLowerCase()});for(var u in c){var s=c[u].split("-")[1];for(var f in n)if(f===s||-1!==n[f].la.indexOf(c[u])){t.locale=f;break}if(t.locale)break}}t.tags[t.locale]||(t.locale="us"),t.debug&&l(!1,'Locale set to "'+t.locale+'".');var p=[];for(var d in n)p=p.concat(n[d].hosts);var b={tags:[{hosts:p,query:{tag:t.tags[t.locale]},modify:function(e){var o=0;return"www"===e.hostname.substr(0,3)&&(o=1),e.set("hostname",n[t.locale].hosts[o]),e}}],log:t.debug};if(!1===t.modifyDomain)for(var g in b.tags=[],t.tags)n[g]&&t.tags[g]&&b.tags.push({hosts:n[g].hosts,query:{tag:t.tags[g]}});return e.create(b)}}]);