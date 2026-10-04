"use strict";var f=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(t){throw (a=0, t)}};};var i=f(function(E,c){
var s=require('@stdlib/array-base-arraylike2object/dist');function u(r,a){return typeof r[a]=="function"}function l(r,a,t){var e;for(e=0;e<r.length;e++)a.call(t,r[e],e,r)}function v(r,a,t){var e,n,o;for(e=r.data,n=r.accessors[0],o=0;o<e.length;o++)a.call(t,n(e,o),o,e)}function h(r,a,t){var e;return u(r,"forEach")?r.forEach(a,t):(e=s(r),e.accessorProtocol?v(e,a,t):l(r,a,t))}c.exports=h
});var d=i();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
