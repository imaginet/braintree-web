"use strict";

var PromisePolyfill = require("promise-polyfill");
var ExtendedPromise = require("@braintree/extended-promise");

var PromiseGlobal = typeof Promise !== "undefined" ? Promise : PromisePolyfill;

ExtendedPromise.suppressUnhandledPromiseMessage = true;
ExtendedPromise.setPromise(PromiseGlobal);

module.exports = PromiseGlobal;
