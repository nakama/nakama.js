(function(s){"function"===typeof bootstrap?bootstrap("promise",s):"object"===typeof exports?s(void 0,exports):"function"===typeof define?define(s):"undefined"!==typeof ses?ses.ok()&&(ses.makeQ=function(){return s(void 0,{})}):s(void 0,Q={})})(function(s,c){function K(a){var b=Error.prepareStackTrace;Error.prepareStackTrace=function(a,b){return b.filter(function(a){var b=a.getFileName(),d;if(d="module.js"!==b)if(d="node.js"!==b)b!==L?a=!1:(a=a.getLineNumber(),a=a>=Y&&a<=Z),d=!a;return d})};a=a.stack;
Error.prepareStackTrace=b;return a}function M(){if(Error.captureStackTrace){var a,b,d=Error.prepareStackTrace;Error.prepareStackTrace=function(d,c){a=c[1].getFileName();b=c[1].getLineNumber()};Error().stack;Error.prepareStackTrace=d;L=a;return b}}function m(a,b,d){return function(){"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(b+" is deprecated, use "+d+" instead.",Error("").stack);return a.apply(a,arguments)}}function f(){function a(a){if(b)return d=n(a),y(b,function(a,
b){l(function(){d.promiseSend.apply(d,b)})},void 0),b=void 0,d}var b=[],d,t=B(f.prototype),c=B(h.prototype);c.promiseSend=function(){var a=e(arguments);b?b.push(a):l(function(){d.promiseSend.apply(d,a)})};c.valueOf=function(){return b?c:d.valueOf()};Error.captureStackTrace&&Error.captureStackTrace(c,f);u(c);t.promise=c;t.resolve=a;t.reject=function(b){return a(o(b))};return t}function h(a,b,d,c){void 0===b&&(b=function(a){return o(Error("Promise does not support operation: "+a))});var g=B(h.prototype);
g.promiseSend=function(d,c){var t=e(arguments,2),i;try{i=a[d]?a[d].apply(g,t):b.apply(g,[d].concat(t))}catch(f){i=o(f)}c(i)};d&&(g.valueOf=d);c&&(g.exception=c);u(g);return g}function q(a){return Object(a)!==a?a:a.valueOf()}function z(a){return a&&"function"===typeof a.promiseSend}function C(a){return!z(q(a))}function N(a){a=q(a);return z(a)&&"exception"in a}function o(a){var a=a||Error(),b=h({when:function(b){if(b){var c=$(D,this);-1!==c&&(E.splice(c,1),D.splice(c,1))}return b?b(a):o(a)}},function(){return o(a)},
function(){return this},a);D.push(b);E.push(a);return b}function n(a){if(z(a))return a;if(a&&"function"===typeof a.then){var b=f();a.then(b.resolve,b.reject);return b.promise}return h({when:function(){return a},get:function(b){return a[b]},put:function(b,c){return a[b]=c},del:function(b){return delete a[b]},post:function(b,c){return a[b].apply(a,c)},apply:function(b,c){return a.apply(b,c)},fapply:function(b){return a.apply(void 0,b)},viewInfo:function(){function b(a){g[a]||(g[a]=typeof c[a])}for(var c=
a,g={};c;)Object.getOwnPropertyNames(c).forEach(b),c=Object.getPrototypeOf(c);return{type:typeof a,properties:g}},keys:function(){return O(a)}},void 0,function(){return a})}function P(a,b){a=n(a);return b?h({viewInfo:function(){return b}},function(){var b=e(arguments);return v.apply(void 0,[a].concat(b))},function(){return q(a)}):v(a,"viewInfo")}function j(a,b,d){function c(a){try{return b?b(a):a}catch(d){return o(d)}}function g(a){try{return d?d(a):o(a)}catch(b){return o(b)}}var e=f(),j=!1;l(function(){n(a).promiseSend("when",
function(a){j||(j=!0,e.resolve(c(a)))},function(a){j||(j=!0,e.resolve(g(a)))})});return e.promise}function R(a){return function(b){var d=e(arguments,1);return v.apply(void 0,[b,a].concat(d))}}function v(a,b){var d=f(),c=e(arguments,2),a=n(a);l(function(){a.promiseSend.apply(a,[b,d.resolve].concat(c))});return d.promise}function S(a,b,d){var c=f(),a=n(a);l(function(){a.promiseSend.apply(a,[b,c.resolve].concat(d))});return c.promise}function r(a){return function(b){var d=e(arguments,1);return S(b,a,
d)}}function F(a){var b=e(arguments,1);return G(a,b)}function w(a){return j(a,function(a){var d=a.length;if(0===d)return n(a);var c=f();y(a,function(g,e,f){C(e)?(a[f]=q(e),0===--d&&c.resolve(a)):j(e,function(g){a[f]=g;0===--d&&c.resolve(a)}).fail(c.reject)},void 0);return c.promise})}function A(a,b,d){return T(a,b).apply(void 0,d)}function T(a){if(1<arguments.length)var b=arguments[1],d=e(arguments,2),c=a,a=function(){var a=d.concat(e(arguments));return c.apply(b,a)};return function(){var b=f(),d=
e(arguments);d.push(b.makeNodeResolver());G(a,d).fail(b.reject);return b.promise}}var Y=M(),L,H=function(){},u=Object.freeze||H;"undefined"!==typeof cajaVM&&(u=cajaVM.def);var l;if("undefined"!==typeof process)l=process.nextTick;else if("function"===typeof msSetImmediate)l=msSetImmediate.bind(window);else if("function"===typeof setImmediate)l=setImmediate;else if("undefined"!==typeof MessageChannel){var U=new MessageChannel,x={},V=x;U.port1.onmessage=function(){x=x.next;var a=x.task;delete x.task;
a()};l=function(a){V=V.next={task:a};U.port2.postMessage(0)}}else l=function(a){setTimeout(a,0)};var p;Function.prototype.bind?(p=Function.prototype.bind,p=p.bind(p.call)):p=function(a){return function(){return a.call.apply(a,arguments)}};var e=p(Array.prototype.slice),y=p(Array.prototype.reduce||function(a,b){var d=0,c=this.length;if(arguments.length===1){do{if(d in this){b=this[d++];break}if(++d>=c)throw new TypeError;}while(1)}for(;d<c;d++)d in this&&(b=a(b,this[d],d));return b}),$=p(Array.prototype.indexOf||
function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),W=p(Array.prototype.map||function(a,b){var d=this,c=[];y(d,function(g,e,f){c.push(a.call(b,e,f,d))},void 0);return c}),B=Object.create||function(a){function b(){}b.prototype=a;return new b},O=Object.keys||function(a){var b=[],d;for(d in a)b.push(d);return b},aa=Object.prototype.toString,I;I="undefined"!==typeof ReturnValue?ReturnValue:function(a){this.value=a};c.nextTick=l;c.defer=f;f.prototype.makeNodeResolver=function(){var a=
this;return function(b,d){b?a.reject(b):arguments.length>2?a.resolve(e(arguments,1)):a.resolve(d)}};f.prototype.node=m(f.prototype.makeNodeResolver,"node","makeNodeResolver");c.promise=function(a){var b=f();F(a,b.resolve,b.reject).fail(b.reject);return b.promise};c.makePromise=h;h.prototype.then=function(a,b){return j(this,a,b)};y("isResolved,isFulfilled,isRejected,when,spread,send,get,put,del,post,invoke,keys,apply,call,bind,fapply,fcall,fbind,all,allResolved,view,viewInfo,timeout,delay,catch,finally,fail,fin,end".split(","),
function(a,b){h.prototype[b]=function(){return c[b].apply(c,[this].concat(e(arguments)))}},void 0);h.prototype.toSource=function(){return this.toString()};h.prototype.toString=function(){return"[object Promise]"};u(h.prototype);c.nearer=q;c.isPromise=z;c.isResolved=function(a){return C(a)||N(a)};c.isFulfilled=C;c.isRejected=N;var D=[],E=[];"undefined"!==typeof window&&window.console&&console.log("Should be empty:",E);c.reject=o;c.begin=n;c.resolve=n;c.ref=m(n,"ref","resolve");c.master=function(a){return h({isDef:function(){}},
function(){var b=e(arguments);return v.apply(void 0,[a].concat(b))},function(){return q(a)})};c.viewInfo=P;c.view=function(a){return P(a).when(function(b){var d;d=b.type==="function"?function(){return J(a,void 0,arguments)}:{};var c=b.properties||{};O(c).forEach(function(b){c[b]==="function"&&(d[b]=function(){return X(a,b,arguments)})});return n(d)})};c.when=j;c.spread=function(a,b,c){return j(a,function(a){return w(a).then(function(a){return b.apply(void 0,a)})},c)};c.async=function(a){return function(){function b(a,
b){var f;try{f=c[a](b)}catch(i){return aa(i)==="[object StopIteration]"||i instanceof I?i.value:o(i)}return j(f,e,g)}var c=a.apply(this,arguments),e=b.bind(b,"send"),g=b.bind(b,"throw");return e()}};c["return"]=function(a){throw new I(a);};c.promised=function(a){return function(){return w([this,w(arguments)]).spread(function(b,c){return a.apply(b,c)})}};c.sender=m(R,"sender","dispatcher");c.Method=m(R,"Method","dispatcher");c.send=m(v,"send","dispatch");c.dispatch=S;c.dispatcher=r;c.get=r("get");
c.put=r("put");c["delete"]=c.del=r("del");var X=c.post=r("post");c.invoke=function(a,b){var c=e(arguments,2);return X(a,b,c)};var J=c.apply=m(r("apply"),"apply","fapply"),G=c.fapply=r("fapply");c.call=m(function(a,b){var c=e(arguments,2);return J(a,b,c)},"call","fcall");c["try"]=F;c.fcall=F;c.bind=m(function(a,b){var c=e(arguments,2);return function(){var f=c.concat(e(arguments));return J(a,b,f)}},"bind","fbind");c.fbind=function(a){var b=e(arguments,1);return function(){var c=b.concat(e(arguments));
return G(a,c)}};c.keys=r("keys");c.all=w;c.allResolved=function(a){return j(a,function(a){return j(w(W(a,function(a){return j(a,H,H)})),function(){return W(a,n)})})};c["catch"]=c.fail=function(a,b){return j(a,void 0,b)};c["finally"]=c.fin=function(a,b){return j(a,function(a){return j(b(),function(){return a})},function(a){return j(b(),function(){return o(a)})})};c.end=function(a){j(a,void 0,function(b){l(function(){var c;if(Error.captureStackTrace&&typeof b==="object"&&(c=K(b))){var e=K(a);c=c.concat("From previous event:",
e);var g,e=[];try{e.push(b.toString())}catch(f){try{e.push("<error: "+f+">")}catch(j){e.push("<error>")}}for(var l=0;l<c.length;l++){var i=c[l];if(typeof i==="string")e.push(i);else{try{var h="";if(i.isNative())h="native";else if(i.isEval())h="eval at "+i.getEvalOrigin();else{var n=i.getFileName();if(n){var h=h+n,o=i.getLineNumber();if(o!==null){var h=h+(":"+o),p=i.getColumnNumber();p&&(h=h+(":"+p))}}}h||(h="unknown source");var k="",m=i.getFunction().name,r=true,s=i.isConstructor();if(!i.isToplevel()&&
!s){var q=i.getMethodName(),k=k+(i.getTypeName()+".");if(m){k=k+m;q&&q!==m&&(k=k+(" [as "+q+"]"))}else k=k+(q||"<anonymous>")}else if(s)k=k+("new "+(m||"<anonymous>"));else if(m)k=k+m;else{k=k+h;r=false}r&&(k=k+(" ("+h+")"));g=k}catch(u){try{g="<error: "+u+">"}catch(v){g="<error>"}}e.push("    at "+g)}}g=e.join("\n");b.stack=g}throw b;})})};c.timeout=function(a,b){var c=f(),e=setTimeout(function(){c.reject(Error("Timed out after "+b+" ms"))},b);j(a,function(a){clearTimeout(e);c.resolve(a)},c.reject);
return c.promise};c.delay=function(a,b){if(b===void 0){b=a;a=void 0}var c=f();setTimeout(function(){c.resolve(a)},b);return c.promise};c.napply=A;c.ncall=function(a,b){var c=e(arguments,2);return A(a,b,c)};c.nbind=T;c.npost=function(a,b,c){return A(a[b],a,c)};c.ninvoke=function(a,b){var c=e(arguments,2);return A(a[b],a,c)};u(c);var Z=M()});
var Nakama = {};

Nakama.version = "0.0.1";

exports = module.exports = Nakama;

if(!Q) {var Q = require('q');}
Nakama.Ajax = function(options, callback) {

	var async  = (options.async || true),
		data   = (options.data || {}),
		params = null,
		type   = (options.type || "GET"),
		url    = (options.url);

	if(typeof window === "undefined") {
		var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	}

	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			if(typeof callback === "function") callback(xmlhttp);
		}
	}

	xmlhttp.open(type, url, async);
	if(type === "POST") {
		xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
		data = JSON.stringify(data);
	}
	xmlhttp.send(data);
};

Nakama.Config = function(config) {
	config = (config || {});

	this.debug = (config.debug || false);
	this.url   = (config.url   || 'http://107.20.202.100:8080/nakama');
};

//Had to drop this in here - not sure why it doesn't work up there
Nakama.Config.url = 'http://107.20.202.100:8080/nakama';
/**
 * Debug Class - shows debug messages if config sets them to true
 */
Nakama.Debug = function(msg) {
	if(this.Config.debug === true) console.log("Nakama.js Error: " + msg);
};

/**
 * @param config {Object} Configuration for the app
 * @param config.apiKey {String} The API Key for the app
 * @param config.apiSecret {String} The API Secret for the app
 * @param config.debug {boolean}
 */

Nakama.App = function(config) {
	Nakama.Config(config); //Pass the app configuration to the configuration class
};

/**
 * Photo Instance
 */

Nakama.Photo = function(options, callback) {
	var _this   = this,
		length  = arguments.length,
		options = (options || {});

	//Check to see if photo ID was supplied
	if(!options.uid) {
		Nakama.Debug("Please supply a photo ID.");
		return;
	}

	var deferred = Q.defer();

	Nakama.Ajax({url: Nakama.Config.url + '/photo/list/' + options.uid}, function(res) {
		if(length === 2) {
			if(typeof callback === "function") callback(res.responseText);
		}

		else {
			deferred.resolve(res.responseText);
		}
	});

	return deferred.promise;
};

/**
 * Create new photo
 */

Nakama.Photo.create = function(options, callback) {
	var _this   = this,
		length  = arguments.length,
		options = (options      || {}),
		data    = (options.data || {});

	var deferred = Q.defer();

	Nakama.Ajax({
		data: data,
		type: "POST",
		url: Nakama.Config.url + '/photo/add/' + options.uid
	}, function(res) {
		if(length === 2) {
			if(typeof callback === "function") callback(res.responseText);
		}

		else {
			deferred.resolve(res.responseText);
		}
	});

	return deferred.promise;
};
