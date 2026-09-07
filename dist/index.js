"use strict";var j=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(d){throw r=0,d}}};var p=j(function(Z,z){"use strict";var F=require("@stdlib/ndarray-base-assert-is-row-major"),R=require("@stdlib/strided-base-reinterpret-complex128");function T(i,r,d,o,m,u,l,x){var e,n,g,w,f,h,c,q,s,a,v,t;if(i<=0)return m;if(e=R(r,0),n=R(m,0),c=d*2,g=u*2,w=l*2,q=o*2,a=x*2,F([u,l])){for(o*=2,v=0;v<i;v++){for(f=e[q],h=e[q+1],s=o,t=0;t<i;t++)n[a]=f,n[a+1]=h,n[a+w]=e[s],n[a+w+1]=e[s+1],s+=c,a+=g;q+=c}return m}for(v=0;v<i;v++){for(f=e[q],h=e[q+1],t=0;t<i;t++)n[a]=f,n[a+1]=h,a+=g;q+=c}for(a=x*2+w,o*=2,v=0;v<i;v++)for(s=o,t=0;t<i;t++)n[a]=e[s],n[a+1]=e[s+1],s+=c,a+=g;return m}z.exports=T});var b=j(function($,E){"use strict";var k=require("@stdlib/blas-base-layout-resolve-str"),A=require("@stdlib/ndarray-base-assert-is-column-major-string"),B=require("@stdlib/strided-base-stride2offset"),G=require("@stdlib/math-base-special-fast-max"),y=require("@stdlib/string-format"),H=p();function I(i,r,d,o,m,u){var l,x,e;if(e=k(i),e===null)throw new TypeError(y("invalid argument. First argument must be a valid order. Value: `%s`.",i));if(A(e)){if(u<G(1,r*r))throw new RangeError(y("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,u));l=1,x=u}else{if(u<2)throw new RangeError(y("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,u));l=u,x=1}return H(r,d,o,B(r,o),m,l,x,0)}E.exports=I});var _=j(function(L,M){"use strict";var J=require("@stdlib/utils-define-nonenumerable-read-only-property"),V=b(),K=p();J(V,"ndarray",K);M.exports=V});var P=require("path").join,Q=require("@stdlib/utils-try-require"),U=require("@stdlib/assert-is-error"),W=_(),S,C=Q(P(__dirname,"./native.js"));U(C)?S=W:S=C;module.exports=S;
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
