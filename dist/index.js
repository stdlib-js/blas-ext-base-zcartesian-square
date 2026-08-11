"use strict";var j=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(c){throw r=0,c}}};var p=j(function(Z,z){"use strict";var F=require("@stdlib/ndarray-base-assert-is-row-major"),R=require("@stdlib/strided-base-reinterpret-complex128");function T(a,r,c,s,m,i,l,x){var u,n,g,w,f,h,d,q,o,e,t,v;if(a<=0)return m;if(u=R(r,0),n=R(m,0),d=c*2,g=i*2,w=l*2,q=s*2,e=x*2,F([i,l])){for(s*=2,t=0;t<a;t++){for(f=u[q],h=u[q+1],o=s,v=0;v<a;v++)n[e]=f,n[e+1]=h,n[e+w]=u[o],n[e+w+1]=u[o+1],o+=d,e+=g;q+=d}return m}for(t=0;t<a;t++){for(f=u[q],h=u[q+1],v=0;v<a;v++)n[e]=f,n[e+1]=h,e+=g;q+=d}for(e=x*2+w,s*=2,t=0;t<a;t++)for(o=s,v=0;v<a;v++)n[e]=u[o],n[e+1]=u[o+1],o+=d,e+=g;return m}z.exports=T});var b=j(function($,E){"use strict";var k=require("@stdlib/blas-base-assert-is-layout"),A=require("@stdlib/ndarray-base-assert-is-column-major-string"),B=require("@stdlib/strided-base-stride2offset"),G=require("@stdlib/math-base-special-fast-max"),y=require("@stdlib/string-format"),H=p();function I(a,r,c,s,m,i){var l,x;if(!k(a))throw new TypeError(y("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(A(a)){if(i<G(1,r*r))throw new RangeError(y("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,i));l=1,x=i}else{if(i<2)throw new RangeError(y("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,i));l=i,x=1}return H(r,c,s,B(r,s),m,l,x,0)}E.exports=I});var _=j(function(L,M){"use strict";var J=require("@stdlib/utils-define-nonenumerable-read-only-property"),V=b(),K=p();J(V,"ndarray",K);M.exports=V});var P=require("path").join,Q=require("@stdlib/utils-try-require"),U=require("@stdlib/assert-is-error"),W=_(),S,C=Q(P(__dirname,"./native.js"));U(C)?S=W:S=C;module.exports=S;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
