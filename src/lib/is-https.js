"use strict";

function isHTTPS(protocol) {
  protocol = protocol || window.location.protocol;

  return protocol === "https:" || protocol === "capacitor:";
}

module.exports = {
  isHTTPS: isHTTPS,
};
