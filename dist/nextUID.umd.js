(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global['@riim/next-uid'] = {}));
}(this, (function (exports) { 'use strict';

	const hasOwn = Object.prototype.hasOwnProperty;
	let uidCounter = 0;
	function nextUID() {
	    return String(++uidCounter);
	}
	const KEY_UID = Symbol('uid');
	function getUID(obj) {
	    return hasOwn.call(obj, KEY_UID) ? obj[KEY_UID] : (obj[KEY_UID] = nextUID());
	}

	exports.getUID = getUID;
	exports.nextUID = nextUID;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
