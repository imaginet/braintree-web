"use strict";

function isHTTPS(protocol) {
  protocol = protocol || window.location.protocol;

  return protocol === "https:" || protocol ===  protocol === 'capacitor:';
}

module.exports = {
  isHTTPS: isHTTPS,
};
