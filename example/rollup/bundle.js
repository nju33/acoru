(function () {
'use strict';

var _Mathmax=Math.max;
var _Mathmin=Math.min;
var commonjsGlobal='undefined'==typeof window?'undefined'==typeof global?'undefined'==typeof self?{}:self:global:window;function unwrapExports(d){return d&&d.__esModule?d['default']:d}function createCommonjsModule(d,g){return g={exports:{}},d(g,g.exports),g.exports}var _addToUnscopables=function(){/* empty */}; var _iterStep=function(d,g){return{value:g,done:!!d}}; var _iterators={}; var toString={}.toString; var _cof=function(d){return toString.call(d).slice(8,-1)}; var _iobject=Object('z').propertyIsEnumerable(0)?Object:function(d){return'String'==_cof(d)?d.split(''):Object(d)}; var _defined=function(d){if(d==void 0)throw TypeError('Can\'t call method on  '+d);return d}; var _toIobject=function(d){return _iobject(_defined(d))}; var _library=!0; var _global=createCommonjsModule(function(d){// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var g=d.exports='undefined'!=typeof window&&window.Math==Math?window:'undefined'!=typeof self&&self.Math==Math?self:Function('return this')();'number'==typeof __g&&(__g=g);}); var _core=createCommonjsModule(function(d){var g=d.exports={version:'2.4.0'};'number'==typeof __e&&(__e=g);}); var _aFunction=function(d){if('function'!=typeof d)throw TypeError(d+' is not a function!');return d}; var _ctx=function(d,g,h){return(_aFunction(d),void 0===g)?d:1===h?function(m){return d.call(g,m)}:2===h?function(m,n){return d.call(g,m,n)}:3===h?function(m,n,o){return d.call(g,m,n,o)}:function()/* ...args */{return d.apply(g,arguments)}}; var _isObject=function(d){return'object'==typeof d?null!==d:'function'==typeof d}; var _anObject=function(d){if(!_isObject(d))throw TypeError(d+' is not an object!');return d}; var _fails=function(d){try{return!!d()}catch(g){return!0}}; var _descriptors=!_fails(function(){return 7!=Object.defineProperty({},'a',{get:function(){return 7}}).a}); var document$1=_global.document; var is=_isObject(document$1)&&_isObject(document$1.createElement); var _domCreate=function(d){return is?document$1.createElement(d):{}}; var _ie8DomDefine=!_descriptors&&!_fails(function(){return 7!=Object.defineProperty(_domCreate('div'),'a',{get:function(){return 7}}).a}); var _toPrimitive=function(d,g){if(!_isObject(d))return d;var h,m;if(g&&'function'==typeof(h=d.toString)&&!_isObject(m=h.call(d)))return m;if('function'==typeof(h=d.valueOf)&&!_isObject(m=h.call(d)))return m;if(!g&&'function'==typeof(h=d.toString)&&!_isObject(m=h.call(d)))return m;throw TypeError('Can\'t convert object to primitive value')}; var dP=Object.defineProperty; var f=_descriptors?Object.defineProperty:function(g,h,m){if(_anObject(g),h=_toPrimitive(h,!0),_anObject(m),_ie8DomDefine)try{return dP(g,h,m)}catch(n){/* empty */}if('get'in m||'set'in m)throw TypeError('Accessors not supported!');return'value'in m&&(g[h]=m.value),g}; var _objectDp={f:f}; var _propertyDesc=function(d,g){return{enumerable:!(1&d),configurable:!(2&d),writable:!(4&d),value:g}}; var _hide=_descriptors?function(d,g,h){return _objectDp.f(d,g,_propertyDesc(1,h))}:function(d,g,h){return d[g]=h,d}; var PROTOTYPE='prototype'; var $export=function(d,g,h){var w,y,z,m=d&$export.F,n=d&$export.G,o=d&$export.S,p=d&$export.P,q=d&$export.B,r=d&$export.W,t=n?_core:_core[g]||(_core[g]={}),u=t[PROTOTYPE],v=n?_global:o?_global[g]:(_global[g]||{})[PROTOTYPE];for(w in n&&(h=g),h)y=!m&&v&&void 0!==v[w],y&&w in t||(z=y?v[w]:h[w],t[w]=n&&'function'!=typeof v[w]?h[w]// bind timers to global for call from export context
:q&&y?_ctx(z,_global)// wrap global constructors for prevent change them in library
:r&&v[w]==z?function(D){var E=function(G,H,I){if(this instanceof D){switch(arguments.length){case 0:return new D;case 1:return new D(G);case 2:return new D(G,H);}return new D(G,H,I)}return D.apply(this,arguments)};return E[PROTOTYPE]=D[PROTOTYPE],E;// make static versions for prototype methods
}(z):p&&'function'==typeof z?_ctx(Function.call,z):z,p&&((t.virtual||(t.virtual={}))[w]=z,d&$export.R&&u&&!u[w]&&_hide(u,w,z)));};// fallback for non-array-like ES3 and non-enumerable old V8 strings
// 7.2.1 RequireObjectCoercible(argument)
// to indexed object, toObject with fallback for non-array-like ES3 strings
// optional / simple context binding
// Thank's IE8 for his funny defineProperty
// 7.1.1 ToPrimitive(input [, PreferredType])
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
// type bitmap
$export.F=1,$export.G=2,$export.S=4,$export.P=8,$export.B=16,$export.W=32,$export.U=64,$export.R=128;// real proto method for `library` 
var _export=$export;
var _redefine=_hide;
var hasOwnProperty={}.hasOwnProperty;
var _has=function(d,g){return hasOwnProperty.call(d,g)};
var ceil=Math.ceil;
var floor=Math.floor;
var _toInteger=function(d){return isNaN(d=+d)?0:(0<d?floor:ceil)(d)};
var min=_Mathmin;
var _toLength=function(d){return 0<d?min(_toInteger(d),9007199254740991):0;// pow(2, 53) - 1 == 9007199254740991
};
var max=_Mathmax;
var min$1=_Mathmin;
var _toIndex=function(d,g){return d=_toInteger(d),0>d?max(d+g,0):min$1(d,g)};
var _arrayIncludes=function(d){return function(g,h,m){var q,n=_toIobject(g),o=_toLength(n.length),p=_toIndex(m,o);// Array#includes uses SameValueZero equality algorithm
if(d&&h!=h){for(;o>p;)if(q=n[p++],q!=q)return!0;// Array#toIndex ignores holes, Array#includes - not
}else for(;o>p;p++)if((d||p in n)&&n[p]===h)return d||p||0;return!d&&-1}};
var SHARED='__core-js_shared__';
var store=_global[SHARED]||(_global[SHARED]={});
var _shared=function(d){return store[d]||(store[d]={})};
var id=0;
var px=Math.random();
var _uid=function(d){return'Symbol('.concat(d===void 0?'':d,')_',(++id+px).toString(36))};
var shared=_shared('keys');
var _sharedKey=function(d){return shared[d]||(shared[d]=_uid(d))};
var arrayIndexOf=_arrayIncludes(!1);
var IE_PROTO$1=_sharedKey('IE_PROTO');
var _objectKeysInternal=function(d,g){var o,h=_toIobject(d),m=0,n=[];for(o in h)o!=IE_PROTO$1&&_has(h,o)&&n.push(o);// Don't enum bug & hidden keys
for(;g.length>m;)_has(h,o=g[m++])&&(~arrayIndexOf(n,o)||n.push(o));return n};
var _enumBugKeys='constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
var _objectKeys=Object.keys||function(g){return _objectKeysInternal(g,_enumBugKeys)};
var _objectDps=_descriptors?Object.defineProperties:function(g,h){_anObject(g);for(var p,m=_objectKeys(h),n=m.length,o=0;n>o;)_objectDp.f(g,p=m[o++],h[p]);return g};
var _html=_global.document&&document.documentElement;
var IE_PROTO=_sharedKey('IE_PROTO');
var Empty=function(){/* empty */};
var PROTOTYPE$1='prototype';
var createDict=function(){// Thrash, waste and sodomy: IE GC bug
var n,d=_domCreate('iframe'),g=_enumBugKeys.length,h='<',m='>';for(d.style.display='none',_html.appendChild(d),d.src='javascript:',n=d.contentWindow.document,n.open(),n.write(h+'script'+m+'document.F=Object'+h+'/script'+m),n.close(),createDict=n.F;g--;)delete createDict[PROTOTYPE$1][_enumBugKeys[g]];return createDict()};
var _objectCreate=Object.create||function(g,h){var m;return null===g?m=createDict():(Empty[PROTOTYPE$1]=_anObject(g),m=new Empty,Empty[PROTOTYPE$1]=null,m[IE_PROTO]=g),void 0===h?m:_objectDps(m,h)};
var _wks=createCommonjsModule(function(d){var g=_shared('wks'),h=_global.Symbol,m='function'==typeof h,n=d.exports=function(o){return g[o]||(g[o]=m&&h[o]||(m?h:_uid)('Symbol.'+o))};n.store=g;});
var def=_objectDp.f;
var TAG=_wks('toStringTag');
var _setToStringTag=function(d,g,h){d&&!_has(d=h?d:d.prototype,TAG)&&def(d,TAG,{configurable:!0,value:g});};
var IteratorPrototype={};// 7.1.4 ToInteger
// 7.1.15 ToLength
// false -> Array#indexOf
// true  -> Array#includes
// IE 8- don't enum bug keys
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
// Create object with fake `null` prototype: use iframe Object with cleared prototype
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype,_wks('iterator'),function(){return this});var _iterCreate=function(d,g,h){d.prototype=_objectCreate(IteratorPrototype,{next:_propertyDesc(1,h)}),_setToStringTag(d,g+' Iterator');}; var _toObject=function(d){return Object(_defined(d))}; var IE_PROTO$2=_sharedKey('IE_PROTO'); var ObjectProto=Object.prototype; var _objectGpo=Object.getPrototypeOf||function(d){return d=_toObject(d),_has(d,IE_PROTO$2)?d[IE_PROTO$2]:'function'==typeof d.constructor&&d instanceof d.constructor?d.constructor.prototype:d instanceof Object?ObjectProto:null}; var ITERATOR=_wks('iterator'); var BUGGY=!([].keys&&'next'in[].keys()); var FF_ITERATOR='@@iterator'; var KEYS='keys'; var VALUES='values'; var returnThis=function(){return this}; var _iterDefine=function(d,g,h,m,n,o,p){_iterCreate(h,g,m);var E,G,H,q=function(I){return!BUGGY&&I in v?v[I]:I===KEYS?function(){return new h(this,I)}:I===VALUES?function(){return new h(this,I)}:function(){return new h(this,I)}},r=g+' Iterator',t=n==VALUES,u=!1,v=d.prototype,w=v[ITERATOR]||v[FF_ITERATOR]||n&&v[n],y=w||q(n),z=n?t?q('entries'):y:void 0,D='Array'==g?v.entries||w:w;// Fix native
if(D&&(H=_objectGpo(D.call(new d)),H!==Object.prototype&&(_setToStringTag(H,r,!0),!_library)),t&&w&&w.name!==VALUES&&(u=!0,y=function(){return w.call(this)}),p&&(BUGGY||u||!v[ITERATOR])&&_hide(v,ITERATOR,y),_iterators[g]=y,_iterators[r]=returnThis,n)if(E={values:t?y:q(VALUES),keys:o?y:q(KEYS),entries:z},p)for(G in E)G in v||_redefine(v,G,E[G]);else _export(_export.P+_export.F*(BUGGY||u),g,E);return E}; var es6_array_iterator=_iterDefine(Array,'Array',function(d,g){this._t=_toIobject(d),this._i=0,this._k=g;},function(){var d=this._t,g=this._k,h=this._i++;return!d||h>=d.length?(this._t=void 0,_iterStep(1)):'keys'==g?_iterStep(0,h):'values'==g?_iterStep(0,d[h]):_iterStep(0,[h,d[h]])},'values');// 7.1.13 ToObject(argument)
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments=_iterators.Array,_addToUnscopables('keys'),_addToUnscopables('values'),_addToUnscopables('entries');for(var TO_STRING_TAG=_wks('toStringTag'),collections=['NodeList','DOMTokenList','MediaList','StyleSheetList','CSSRuleList'],i=0;5>i;i++){var NAME=collections[i],Collection=_global[NAME],proto=Collection&&Collection.prototype;proto&&!proto[TO_STRING_TAG]&&_hide(proto,TO_STRING_TAG,NAME),_iterators[NAME]=_iterators.Array;}// true  -> String#at
// false -> String#codePointAt
var _stringAt=function(d){return function(g,h){var p,q,m=_defined(g)+'',n=_toInteger(h),o=m.length;return 0>n||n>=o?d?'':void 0:(p=m.charCodeAt(n),55296>p||56319<p||n+1===o||56320>(q=m.charCodeAt(n+1))||57343<q?d?m.charAt(n):p:d?m.slice(n,n+2):(p-55296<<10)+(q-56320)+65536)}};
var $at=_stringAt(!0);// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String,'String',function(d){this._t=d+'',this._i=0;},function(){var h,d=this._t,g=this._i;return g>=d.length?{value:void 0,done:!0}:(h=$at(d,g),this._i+=h.length,{value:h,done:!1})});// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG$1=_wks('toStringTag');
var ARG='Arguments'==_cof(function(){return arguments}());
var tryGet=function(d,g){try{return d[g]}catch(h){/* empty */}};
var _classof=function(d){var g,h,m;return d===void 0?'Undefined':null===d?'Null'// @@toStringTag case
:'string'==typeof(h=tryGet(g=Object(d),TAG$1))?h// builtinTag case
:ARG?_cof(g)// ES3 arguments fallback
:'Object'==(m=_cof(g))&&'function'==typeof g.callee?'Arguments':m};
var ITERATOR$1=_wks('iterator');
var core_getIteratorMethod=_core.getIteratorMethod=function(d){if(d!=void 0)return d[ITERATOR$1]||d['@@iterator']||_iterators[_classof(d)]};
var core_getIterator=_core.getIterator=function(d){var g=core_getIteratorMethod(d);if('function'!=typeof g)throw TypeError(d+' is not iterable!');return _anObject(g.call(d))};
var getIterator$1=core_getIterator;
var getIterator=createCommonjsModule(function(d){d.exports={'default':getIterator$1,__esModule:!0};});
var _getIterator=unwrapExports(getIterator);
var classCallCheck=createCommonjsModule(function(d,g){'use strict';g.__esModule=!0,g.default=function(h,m){if(!(h instanceof m))throw new TypeError('Cannot call a class as a function')};});
var _classCallCheck=unwrapExports(classCallCheck);// fallback for IE11 Script Access Denied error
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S+_export.F*!_descriptors,'Object',{defineProperty:_objectDp.f});var $Object=_core.Object; var defineProperty$2=function(g,h,m){return $Object.defineProperty(g,h,m)}; var defineProperty=createCommonjsModule(function(d){d.exports={'default':defineProperty$2,__esModule:!0};}); var createClass=createCommonjsModule(function(d,g){'use strict';g.__esModule=!0;var m=function(n){return n&&n.__esModule?n:{default:n}}(defineProperty);g.default=function(){function n(o,p){for(var r,q=0;q<p.length;q++)r=p[q],r.enumerable=r.enumerable||!1,r.configurable=!0,'value'in r&&(r.writable=!0),(0,m.default)(o,r.key,r);}return function(o,p,q){return p&&n(o.prototype,p),q&&n(o,q),o}}();}); var _createClass=unwrapExports(createClass); var defineProperty$4=createCommonjsModule(function(d,g){'use strict';g.__esModule=!0;var m=function(n){return n&&n.__esModule?n:{default:n}}(defineProperty);g.default=function(n,o,p){return o in n?(0,m.default)(n,o,{value:p,enumerable:!0,configurable:!0,writable:!0}):n[o]=p,n};}); var _defineProperty$1=unwrapExports(defineProperty$4); var f$1=Object.getOwnPropertySymbols; var _objectGops={f:f$1}; var f$2={}.propertyIsEnumerable; var _objectPie={f:f$2}; var $assign=Object.assign; var _objectAssign=!$assign||_fails(function(){var d={},g={},h=Symbol(),m='abcdefghijklmnopqrst';return d[h]=7,m.split('').forEach(function(n){g[n]=n;}),7!=$assign({},d)[h]||Object.keys($assign({},g)).join('')!=m})?function(g){for(// eslint-disable-line no-unused-vars
var m=_toObject(g),n=arguments.length,o=1,p=_objectGops.f,q=_objectPie.f;n>o;)for(var w,r=_iobject(arguments[o++]),t=p?_objectKeys(r).concat(p(r)):_objectKeys(r),u=t.length,v=0;u>v;)q.call(r,w=t[v++])&&(m[w]=r[w]);return m}:$assign;// 19.1.2.1 Object.assign(target, source, ...)
// should work with symbols and should have deterministic property order (V8 bug)
// 19.1.3.1 Object.assign(target, source)
_export(_export.S+_export.F,'Object',{assign:_objectAssign});var assign$1=_core.Object.assign; var assign=createCommonjsModule(function(d){d.exports={'default':assign$1,__esModule:!0};}); var _Object$assign=unwrapExports(assign); var _isArray=Array.isArray||function(g){return'Array'==_cof(g)}; var SPECIES=_wks('species'); var _arraySpeciesConstructor=function(d){var g;return _isArray(d)&&(g=d.constructor,'function'==typeof g&&(g===Array||_isArray(g.prototype))&&(g=void 0),_isObject(g)&&(g=g[SPECIES],null===g&&(g=void 0))),void 0===g?Array:g}; var _arraySpeciesCreate=function(d,g){return new(_arraySpeciesConstructor(d))(g)}; var _arrayMethods=function(d,g){var h=1==d,o=4==d,p=6==d,r=g||_arraySpeciesCreate;return function(t,u,v){for(var H,I,w=_toObject(t),y=_iobject(w),z=_ctx(u,v,3),D=_toLength(y.length),E=0,G=h?r(t,D):2==d?r(t,0):void 0;D>E;E++)if((5==d||p||E in y)&&(H=y[E],I=z(H,E,w),d))if(h)G[E]=I;// map
else if(I)switch(d){case 3:return!0;// some
case 5:return H;// find
case 6:return E;// findIndex
case 2:G.push(H);// filter
}else if(o)return!1;// every
return p?-1:3==d||o?o:G}}; var _meta=createCommonjsModule(function(d){var g=_uid('meta'),h=_objectDp.f,m=0,n=Object.isExtensible||function(){return!0},o=!_fails(function(){return n(Object.preventExtensions({}))}),p=function(v){h(v,g,{value:{i:'O'+ ++m,// object ID
w:{}// weak collections IDs
}});},u=d.exports={KEY:g,NEED:!1,fastKey:function(v,w){// return primitive with prefix
if(!_isObject(v))return'symbol'==typeof v?v:('string'==typeof v?'S':'P')+v;if(!_has(v,g)){// can't set metadata to uncaught frozen object
if(!n(v))return'F';// not necessary to add metadata
if(!w)return'E';// add missing metadata
p(v);}return v[g].i},getWeak:function(v,w){if(!_has(v,g)){// can't set metadata to uncaught frozen object
if(!n(v))return!0;// not necessary to add metadata
if(!w)return!1;// add missing metadata
p(v);}return v[g].w},onFreeze:function(v){return o&&u.NEED&&n(v)&&!_has(v,g)&&p(v),v}};// add metadata on freeze-family methods calling
}); var _redefineAll=function(d,g,h){for(var m in g)h&&d[m]?d[m]=g[m]:_hide(d,m,g[m]);return d}; var _anInstance=function(d,g,h,m){if(!(d instanceof g)||m!==void 0&&m in d)throw TypeError(h+': incorrect invocation!');return d}; var _iterCall=function(d,g,h,m){try{return m?g(_anObject(h)[0],h[1]):g(h);// 7.4.6 IteratorClose(iterator, completion)
}catch(o){var n=d['return'];throw void 0!==n&&_anObject(n.call(d)),o}}; var ITERATOR$2=_wks('iterator'); var ArrayProto=Array.prototype; var _isArrayIter=function(d){return d!==void 0&&(_iterators.Array===d||ArrayProto[ITERATOR$2]===d)}; var _forOf=createCommonjsModule(function(d){var g={},h={},m=d.exports=function(n,o,p,q,r){var w,y,z,D,t=r?function(){return n}:core_getIteratorMethod(n),u=_ctx(p,q,o?2:1),v=0;if('function'!=typeof t)throw TypeError(n+' is not iterable!');// fast case for arrays with default iterator
if(_isArrayIter(t)){for(w=_toLength(n.length);w>v;v++)if(D=o?u(_anObject(y=n[v])[0],y[1]):u(n[v]),D===g||D===h)return D;}else for(z=t.call(n);!(y=z.next()).done;)if(D=_iterCall(z,u,y.value,o),D===g||D===h)return D};m.BREAK=g,m.RETURN=h;}); var getWeak=_meta.getWeak; var arrayFind=_arrayMethods(5); var arrayFindIndex=_arrayMethods(6); var id$1=0; var uncaughtFrozenStore=function(d){return d._l||(d._l=new UncaughtFrozenStore)}; var UncaughtFrozenStore=function(){this.a=[];}; var findUncaughtFrozen=function(d,g){return arrayFind(d.a,function(h){return h[0]===g})};// 7.2.2 IsArray(argument)
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
// call something on iterator step with safe closing on error
// check on default Array iterator
// fallback for uncaught frozen keys
UncaughtFrozenStore.prototype={get:function(d){var g=findUncaughtFrozen(this,d);if(g)return g[1]},has:function(d){return!!findUncaughtFrozen(this,d)},set:function(d,g){var h=findUncaughtFrozen(this,d);h?h[1]=g:this.a.push([d,g]);},'delete':function(d){var g=arrayFindIndex(this.a,function(h){return h[0]===d});return~g&&this.a.splice(g,1),!!~g}};var _collectionWeak={getConstructor:function(d,g,h,m){var n=d(function(o,p){_anInstance(o,n,g,'_i'),o._i=id$1++,o._l=void 0,void 0!=p&&_forOf(p,h,o[m],o);});return _redefineAll(n.prototype,{// 23.3.3.2 WeakMap.prototype.delete(key)
// 23.4.3.3 WeakSet.prototype.delete(value)
'delete':function(o){if(!_isObject(o))return!1;var p=getWeak(o);return!0===p?uncaughtFrozenStore(this)['delete'](o):p&&_has(p,this._i)&&delete p[this._i]},// 23.3.3.4 WeakMap.prototype.has(key)
// 23.4.3.4 WeakSet.prototype.has(value)
has:function(p){if(!_isObject(p))return!1;var q=getWeak(p);return!0===q?uncaughtFrozenStore(this).has(p):q&&_has(q,this._i)}}),n},def:function(d,g,h){var m=getWeak(_anObject(g),!0);return!0===m?uncaughtFrozenStore(d).set(g,h):m[d._i]=h,d},ufstore:uncaughtFrozenStore}; var dP$1=_objectDp.f; var each=_arrayMethods(0); var _collection=function(d,g,h,m,n,o){var p=_global[d],q=p,r=n?'set':'add',t=q&&q.prototype,u={};return _descriptors&&'function'==typeof q&&(o||t.forEach&&!_fails(function(){new q().entries().next();}))?(q=g(function(v,w){_anInstance(v,q,d,'_c'),v._c=new p,void 0!=w&&_forOf(w,n,v[r],v);}),each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(v){var w='add'==v||'set'==v;v in t&&!(o&&'clear'==v)&&_hide(q.prototype,v,function(y,z){if(_anInstance(this,q,v),w||!o||_isObject(y)){var D=this._c[v](0===y?0:y,z);return w?this:D}});}),'size'in t&&dP$1(q.prototype,'size',{get:function(){return this._c.size}})):(q=m.getConstructor(g,d,n,r),_redefineAll(q.prototype,h),_meta.NEED=!0),_setToStringTag(q,d),u[d]=q,_export(_export.G+_export.W+_export.F,u),o||m.setStrong(q,d,n),q}; var es6_weakMap=createCommonjsModule(function(d){'use strict';var p,g=_arrayMethods(0),h=_meta.getWeak,m=Object.isExtensible,n=_collectionWeak.ufstore,o={},q=function(u){return function(){return u(this,0<arguments.length?arguments[0]:void 0)}},r={// 23.3.3.3 WeakMap.prototype.get(key)
get:function(v){if(_isObject(v)){var w=h(v);return!0===w?n(this).get(v):w?w[this._i]:void 0}},// 23.3.3.5 WeakMap.prototype.set(key, value)
set:function(v,w){return _collectionWeak.def(this,v,w)}},t=d.exports=_collection('WeakMap',q,r,_collectionWeak,!0,!0);// 23.3 WeakMap Objects
// IE11 WeakMap frozen keys fix
7!=new t().set((Object.freeze||Object)(o),7).get(o)&&(p=_collectionWeak.getConstructor(q),_objectAssign(p.prototype,r),_meta.NEED=!0,g(['delete','has','get','set'],function(u){var v=t.prototype,w=v[u];_redefine(v,u,function(y,z){// store frozen objects on internal weakmap shim
if(_isObject(y)&&!m(y)){this._f||(this._f=new p);var D=this._f[u](y,z);return'set'==u?this:D;// store all the rest on native weakmap
}return w.call(this,y,z)});}));}); var weakMap$1=_core.WeakMap; var weakMap=createCommonjsModule(function(d){d.exports={'default':weakMap$1,__esModule:!0};}); var _WeakMap=unwrapExports(weakMap); var proto$1=Element.prototype; var vendor=proto$1.matchesSelector||proto$1.webkitMatchesSelector||proto$1.mozMatchesSelector||proto$1.msMatchesSelector||proto$1.oMatchesSelector; var index$1=match;/**
 * Element prototype.
 *//**
 * Vendor function.
 *//**
 * Expose `match()`.
 *//**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */function match(d,g){if(vendor)return vendor.call(d,g);for(var h=d.parentNode.querySelectorAll(g),m=0;m<h.length;++m)if(h[m]==d)return!0;return!1}var index=function(d,g,h){for(var m=h?d:d.parentNode;m&&m!==document;){if(index$1(m,g))return m;m=m.parentNode;}};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject$1(d){var g=typeof d;return null!=d&&('object'==g||'function'==g)}var isObject_1=isObject$1; var freeGlobal='object'==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal; var _freeGlobal=freeGlobal; var freeSelf='object'==typeof self&&self&&self.Object===Object&&self; var root=_freeGlobal||freeSelf||Function('return this')(); var _root=root; var now=function(){return _root.Date.now()}; var now_1=now; var Symbol$1=_root.Symbol; var _Symbol=Symbol$1; var objectProto=Object.prototype; var hasOwnProperty$1=objectProto.hasOwnProperty; var nativeObjectToString=objectProto.toString; var symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;/** Detect free variable `global` from Node.js. *//** Detect free variable `self`. *//** Used as a reference to the global object. *//**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 *//** Built-in value references. *//** Used for built-in method references. *//** Used to check objects for own properties. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//** Built-in value references. *//**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(d){var g=hasOwnProperty$1.call(d,symToStringTag$1),h=d[symToStringTag$1];try{d[symToStringTag$1]=void 0;}catch(o){}var n=nativeObjectToString.call(d);return g?d[symToStringTag$1]=h:delete d[symToStringTag$1],n}var _getRawTag=getRawTag; var objectProto$1=Object.prototype; var nativeObjectToString$1=objectProto$1.toString;/** Used for built-in method references. *//**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 *//**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(d){return nativeObjectToString$1.call(d)}var _objectToString=objectToString; var nullTag='[object Null]'; var undefinedTag='[object Undefined]'; var symToStringTag=_Symbol?_Symbol.toStringTag:void 0;/** `Object#toString` result references. *//** Built-in value references. *//**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(d){return null==d?void 0===d?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(d)?_getRawTag(d):_objectToString(d)}var _baseGetTag=baseGetTag;/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(d){return null!=d&&'object'==typeof d}var isObjectLike_1=isObjectLike; var symbolTag='[object Symbol]';/** `Object#toString` result references. *//**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(d){return'symbol'==typeof d||isObjectLike_1(d)&&_baseGetTag(d)==symbolTag}var isSymbol_1=isSymbol; var NAN=0/0; var reTrim=/^\s+|\s+$/g; var reIsBadHex=/^[-+]0x[0-9a-f]+$/i; var reIsBinary=/^0b[01]+$/i; var reIsOctal=/^0o[0-7]+$/i; var freeParseInt=parseInt;/** Used as references for various `Number` constants. *//** Used to match leading and trailing whitespace. *//** Used to detect bad signed hexadecimal string values. *//** Used to detect binary string values. *//** Used to detect octal string values. *//** Built-in method references without a dependency on `root`. *//**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(d){if('number'==typeof d)return d;if(isSymbol_1(d))return NAN;if(isObject_1(d)){var g='function'==typeof d.valueOf?d.valueOf():d;d=isObject_1(g)?g+'':g;}if('string'!=typeof d)return 0===d?d:+d;d=d.replace(reTrim,'');var h=reIsBinary.test(d);return h||reIsOctal.test(d)?freeParseInt(d.slice(2),h?2:8):reIsBadHex.test(d)?NAN:+d}var toNumber_1=toNumber; var FUNC_ERROR_TEXT$1='Expected a function'; var nativeMax=_Mathmax; var nativeMin=_Mathmin;/** Error message constants. *//* Built-in method references for those with the same name as other `lodash` methods. *//**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(d,g,h){function m(M){var N=w,Q=y;return w=y=void 0,H=M,D=d.apply(Q,N),D}function n(M){// Invoke the leading edge.
return H=M,E=setTimeout(q,g),I?m(M):D}function o(M){var N=M-G,Q=M-H,R=g-N;return J?nativeMin(R,z-Q):R}function p(M){var N=M-G,Q=M-H;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0==G||N>=g||0>N||J&&Q>=z}function q(){var M=now_1();return p(M)?r(M):void(E=setTimeout(q,o(M)));// Restart the timer.
}function r(M){// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return(E=void 0,L&&w)?m(M):(w=y=void 0,D)}function v(){var M=now_1(),N=p(M);if(w=arguments,y=this,G=M,N){if(void 0===E)return n(G);if(J)return E=setTimeout(q,g),m(G)}return void 0===E&&(E=setTimeout(q,g)),D}var w,y,z,D,E,G,H=0,I=!1,J=!1,L=!0;if('function'!=typeof d)throw new TypeError(FUNC_ERROR_TEXT$1);return g=toNumber_1(g)||0,isObject_1(h)&&(I=!!h.leading,J='maxWait'in h,z=J?nativeMax(toNumber_1(h.maxWait)||0,g):z,L='trailing'in h?!!h.trailing:L),v.cancel=function(){void 0!==E&&clearTimeout(E),H=0,w=G=y=E=void 0;},v.flush=function(){return void 0===E?D:r(now_1())},v}var debounce_1=debounce; var FUNC_ERROR_TEXT='Expected a function';/** Error message constants. *//**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function throttle(d,g,h){var m=!0,n=!0;if('function'!=typeof d)throw new TypeError(FUNC_ERROR_TEXT);return isObject_1(h)&&(m='leading'in h?!!h.leading:m,n='trailing'in h?!!h.trailing:n),debounce_1(d,g,{leading:m,maxWait:g,trailing:n})}var throttle_1=throttle;function getDataAttr(d,g){return d.getAttribute('data-acoru-'+g)}var getUID=function(){var d=[];return function g(){var h=0<arguments.length&&void 0!==arguments[0]?arguments[0]:8,m=Math.random().toString(35).substr(2,h+2);return-1===d.indexOf(m)?(d.push(m),m):void g(h)}}();function isChild(d,g){var h=Array.prototype.slice.call(d.children).find(function(m){return m===g})||null;return null!==h}var wm=new _WeakMap; var AcoruCollection=function(){function d(g,h,m,n){_classCallCheck(this,d),this.name=g,this.trigger=h,this.target=m,this.acoru=n,this.handleClick=this.createClickHandler.bind(this),this.root=null,this.rootSize=0,this.size=0,this.handleTransitionend=this.createTransitionendHandler.bind(this);var o=this.createResizeHandler();this.handleThrottleResize=o.throttle.bind(this),this.handleDebounceResize=o.debounce.bind(this);}return _createClass(d,[{key:'init',value:function(){var h,m=this.target.cloneNode(!0);_Object$assign(m.style,{display:'',zIndex:-9999}),document.body.appendChild(m),this.size='vertical'===this.parentAxis?m.clientHeight:m.clientWidth,document.body.removeChild(m),m=null;var n='vertical'===this.parentAxis?'height':'width';if(_Object$assign(this.target.style,(h={display:''},_defineProperty$1(h,n,0),_defineProperty$1(h,'overflow','hidden'),_defineProperty$1(h,'webkitTransition','.2s linear'),_defineProperty$1(h,'transition','.2s linear'),_defineProperty$1(h,'webkitTransitionProperty',''+n),_defineProperty$1(h,'transitionProperty',''+n),h)),'static'===this.parentPosition&&(this.parent.style.position='relative'),this.target.setAttribute('data-acoru-uid',this.parentUID),this.root=this.target,!isChild(this.parent,this.target)){var o=this.getRoot();this.root=o,this.rootSize='vertical'===this.parentAxis?o.clientHeight:o.clientWidth,this.target.style[n]=this.rootSize+'px';}this.trigger.addEventListener('click',this.handleClick),this.root.addEventListener('transitionend',this.handleTransitionend),window.addEventListener('resize',this.handleThrottleResize),window.addEventListener('resize',this.handleDebounceResize);}},{key:'createTransitionendHandler',value:function(){var h=this;this.root.classList.contains('acoru-open')?(this.root.classList.remove('acoru-open'),this.acoru.getEvent('opened').forEach(function(m){m(h);})):this.root.classList.contains('acoru-close')&&(this.root.classList.remove('acoru-close'),this.acoru.getEvent('closed').forEach(function(m){m(h);}));}},{key:'createResizeHandler',value:function(){var h=this;return{throttle:throttle_1(function(){h.isOpen()&&h.close();},150),debounce:debounce_1(function(){h.isOpen()&&h.close();},150)}}},{key:'getRoot',value:function(){for(var h=this.target.parentElement;;){if(h.parentElement===this.parent)break;h=h.parentElement;}return h}},{key:'getTargetSize',value:function(){return'vertical'===this.parentAxis?this.target.clientHeight:this.target.clientWidth}},{key:'getActiveSiblingCollection',value:function(){return this.acoru.getActiveCollection(this.parentUID)}},{key:'createClickHandler',value:function(){this.isOpen()?this.close():this.open();}},{key:'getParentHeight',value:function(){return this.target.clientHeight}},{key:'isOpen',value:function(){var h='vertical'===this.parentAxis?'height':'width';return this.target.style[h]!==this.rootSize+'px'}},{key:'calcOverflowSize',value:function(){var h=this.height+this.parentHeight;return 0<h?0:h}},{key:'calcSize',value:function(){var h=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null,m=0;if('hidden'===this.parentOverflow){m=this.parentInnerSize,'single'===this.parentMode&&null!==h?m-=h.getTargetSize():null===h&&(m-=this.rootSize);var n=m+this.size-this.parentSize;return this.size-n}return this.size}},{key:'open',value:function(){var h=this;this.root.classList.add('acoru-open'),this.acoru.getEvent('open').forEach(function(m){m(h);}),setTimeout(function(){var m='vertical'===h.parentAxis?'height':'width',n=h.getActiveSiblingCollection();'hidden'===h.parentOverflow?('single'===h.parentMode&&null!==n&&n.close(),setTimeout(function(){_Object$assign(h.target.style,_defineProperty$1({overflow:'auto'},m,h.calcSize(n)+'px'));},0)):_Object$assign(h.target.style,_defineProperty$1({},m,h.calcSize(n)+'px')),h.root.classList.add('acoru-opened'),h.active=!0;},0);}},{key:'close',value:function(){var h=this;this.root.classList.add('acoru-close'),this.acoru.getEvent('close').forEach(function(m){m(h);}),setTimeout(function(){var m='vertical'===h.parentAxis?'height':'width';_Object$assign(h.target.style,_defineProperty$1({overflow:'hidden'},m,h.rootSize+'px')),h.root.classList.remove('acoru-opened'),h.active=!1;},0);}},{key:'teardown',value:function(){this.root.removeEventListener('transitionend',this.handleTransitionend),window.removeEventListener('resize',this.handleThrottleResize),window.removeEventListener('resize',this.handleDebounceResize);}},{key:'prop',get:function(){return'vertical'===this.parentAxis?'height':'width'}},{key:'parent',get:function(){return index(this.target,'[data-acoru-parent]')||this.trigger.parentElement}},{key:'parentUID',get:function(){var h=wm.get(this.parent)||null;if(null===h){var m=getUID();return wm.set(this.parent,m),m}return h}},{key:'parentAxis',get:function(){var h=getDataAttr(this.parent,'axis')||'vertical';if(!/vertical|horizontal/.test(h))throw new Error('Specify \'vertical\' or \'horizontal\' for [data-acoru-axis]');return h}},{key:'parentMode',get:function(){var h=getDataAttr(this.parent,'mode')||'single';if(!/single|multi/.test(h))throw new Error('Specify \'single\' or \'multi\' for [data-acoru-mode]');return h}},{key:'parentOverflow',get:function(){return getComputedStyle(this.parent).overflow}},{key:'parentPosition',get:function(){return getComputedStyle(this.parent).position}},{key:'parentSize',get:function(){return'vertical'===this.parentAxis?this.parent.clientHeight:this.parent.clientWidth}},{key:'parentInnerSize',get:function(){if('vertical'===this.parentAxis){var h=this.parent.children.length,m=this.parent.children[h-1];return m.offsetTop+m.clientHeight}var n=this.parent.children.length,o=this.parent.children[n-1];return o.offsetLeft+o.clientWidth}}]),d}(); var Acoru$1$1=function(){function d(){var g=this,h=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;_classCallCheck(this,d),this.parent=h;var m=Array.prototype.slice.call((h||document).querySelectorAll('[data-acoru-for]'));this.collections=m.map(function(n){var o=getDataAttr(n,'for'),p=document.querySelector('[data-acoru-id='+o+']');return o&&p?new AcoruCollection(o,n,p,g):null}).filter(function(n){return null!==n}),this.height=0,this.__event={};}return _createClass(d,[{key:'init',value:function(){this.collections.forEach(function(h){h.init();});}},{key:'open',value:function(h){if(h){var o,m=!0,n=!1;try{for(var q,r,p=_getIterator(this.collections);!(m=(q=p.next()).done);m=!0)if(r=q.value,r.name===h){r.open();break}}catch(t){n=!0,o=t;}finally{try{!m&&p.return&&p.return();}finally{if(n)throw o}}}}},{key:'close',value:function(h){if(h){var o,m=!0,n=!1;try{for(var q,r,p=_getIterator(this.collections);!(m=(q=p.next()).done);m=!0)if(r=q.value,r.name===h){r.close();break}}catch(t){n=!0,o=t;}finally{try{!m&&p.return&&p.return();}finally{if(n)throw o}}}}},{key:'teardown',value:function(){this.collections.forEach(function(h){h.teardown();});}},{key:'on',value:function(h,m){if('function'!=typeof m)throw new Error('Required function');return this.__event[h]||(this.__event[h]=[]),this.__event[h].push(m),this}},{key:'getEvent',value:function(h){return this.__event[h]||[]}},{key:'getActiveCollection',value:function(h){return this.collections.find(function(m){return m.parentUID===h&&m.active})||null}}]),d}();

(() => {
  const acoru1 = new Acoru$1$1(document.getElementById('vertical'));
  acoru1.init();
  acoru1
    .on('open', collection => {
      console.log(`%c${collection.name} %copen`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('opened', collection => {
      console.log(`%c${collection.name} %copened`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('close', collection => {
      console.log(`%c${collection.name} %cclose`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('closed', collection => {
      console.log(`%c${collection.name} %cclosed`, 'color: #CB1B45', 'color: #1E88A8');
    });

  const acoru2 = new Acoru$1$1(document.getElementById('horizontal'));
  acoru2.init();
  acoru2.open('h-sec3');
  acoru2
    .on('open', collection => {
      console.log(`%c${collection.name} %copen`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('opened', collection => {
      console.log(`%c${collection.name} %copened`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('close', collection => {
      console.log(`%c${collection.name} %cclose`, 'color: #CB1B45', 'color: #1E88A8');
    })
    .on('closed', collection => {
      console.log(`%c${collection.name} %cclosed`, 'color: #CB1B45', 'color: #1E88A8');
    });
})();

}());
