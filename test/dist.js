window.AffiliatePluginAmazon=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t){if("object"===("undefined"==typeof console?"undefined":r(console))){var e=Array.prototype.slice.call(arguments,1),o=t?console.error:console.log;(o=Function.prototype.bind.call(o,console)).apply(console,["[AMZNPlugin] "].concat(e))}};t.exports=function(t,e){var o={tags:{us:"",gb:"",de:"",fr:"",jp:"",ca:"",cn:"",it:"",es:"",in:"",br:"",mx:""},debug:!1,locale:null,modifyDomain:!0};if(e&&e.tags&&(e.tags=n({},o.tags,e.tags)),(e=n({},o,e)).debug&&a(!1,"Read the docs at https://affiliate.js.org/plugins/amazon"),!e.tags.us)return a(!0,"Config must contain a US tag.");var r={us:{tld:"com",la:["en"]},gb:{tld:"co.uk",la:["gd","cy-ie","en-ie"]},de:{tld:"de",la:["de"]},fr:{tld:"fr",la:["fr"]},jp:{tld:"co.jp",la:["jp"]},ca:{tld:"ca",la:[]},cn:{tld:"cn",la:["zh","zh-hk","zh-tw"]},it:{tld:"it",la:["it"]},es:{tld:"es",la:["es"]},in:{tld:"in",la:["hi"]},br:{tld:"com.br",la:[]},mx:{tld:"com.mx",la:[]}};for(var l in r){var i="amazon."+r[l].tld;r[l].hosts=[i,"www."+i]}if(e.locale)e.locale=e.locale.toLowerCase();else{var c=window.navigator.languages.reduce(function(t,e){return t.push(e.toLowerCase()),t},[]);for(var s in c){var u=c[s].split("-")[1];for(var f in r)if(f===u||-1!==r[f].la.indexOf(c[s])){e.locale=f;break}if(e.locale)break}}e.tags[e.locale]||(e.locale="us"),e.debug&&a(!1,'Locale set to "'+e.locale+'".');var d=[];for(var p in r)d=d.concat(r[p].hosts);var g={tags:[{hosts:d,query:{tag:e.tags[e.locale]},modify:function(t){var o=0;return"www"===t.hostname.substr(0,3)&&(o=1),t.set("hostname",r[e.locale].hosts[o]),t}}],log:e.debug};if(!1===e.modifyDomain){g.tags=[];for(var y in e.tags)r[y]&&e.tags[y]&&g.tags.push({hosts:r[y].hosts,query:{tag:e.tags[y]}})}return t(g)}}]);