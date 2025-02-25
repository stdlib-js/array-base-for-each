// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function t(t,o,a){var n;return function(r,t){return"function"==typeof r[t]}(t,"forEach")?t.forEach(o,a):(n=r(t)).accessorProtocol?function(r,t,o){var a,n,c;for(a=r.data,n=r.accessors[0],c=0;c<a.length;c++)t.call(o,n(a,c),c,a)}(n,o,a):function(r,t,o){var a;for(a=0;a<r.length;a++)t.call(o,r[a],a,r)}(t,o,a)}export{t as default};
//# sourceMappingURL=index.mjs.map
