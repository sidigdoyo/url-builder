/**
 * UrlBuilder - generic module service
 * @version v1.0.0
 * @link https://github.com/sidigdoyo/url-builder
 * @license MIT
 * @author Sidigdoyo Pribadi <sidigdoyo.pribadi@gmail.com>
 */

(function( root, factory ) {
	"use strict";
	if(!root.msp) {
		root.msp = {};
	}

	if(typeof define === "function" && define.amd) {
		// Define as an AMD module if possible
		define('msp.UrlBuilder', [], ( root.msp.UrlBuilder = factory() ) );
	}
	else if(typeof module === "object" && module.exports) {
		// Node/CommonJS
		module.exports = (root.msp.UrlBuilder = factory());
	}
	else {
		root.msp.UrlBuilder = factory();
	}
}
(this, function() {
	"use strict";

	var UrlBuilder = function() {};
	var __path = [], __param;

	UrlBuilder.prototype = {
		constructor: UrlBuilder,
		setParam: function(param) {
			__param = param;
			return this;
		},
		getParam: function() {
			var param = __param;
			__param = undefined;
			return param;
		},
		path: function() {
			var args = arguments;
			Object.keys(args).forEach(function(key) {
				__path.push(args[key].replace(/(^\/|\/$)/g, ''));
			});

			return this;
		},
		toString: function() {
			if(__path.length === 0) {
				throw new Error('undefined url');
			}
			var path = __path;
			__path = [];

			return path.join('/').replace(/\/{2,}/g, '/');
		},
		getRequest: function(param) {
			throw new Error('unimplemented');
		},
		postRequest: function(param) {
			throw new Error('unimplemented');
		},
		putRequest: function(param) {
			throw new Error('unimplemented');
		},
		deleteRequest: function(param) {
			throw new Error('unimplemented');
		}
	};

	return UrlBuilder;
}));
