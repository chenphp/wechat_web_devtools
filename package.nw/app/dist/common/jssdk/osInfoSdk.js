'use strict';var _exports;function init(){function a(c,d){return c?{errMsg:'getNetworkType:ok',subtype:localStorage['webview-network-type']||'wifi'}:{errMsg:`getNetworkType:${b.failWroding}`}}const b=require('./sdkConfig.js');_exports={exec:(c,d,e,f)=>{let g=d.sdkName,h;'getNetworkType'===g&&(h=a(c,d.args)),f(h)}}}init(),module.exports=_exports;