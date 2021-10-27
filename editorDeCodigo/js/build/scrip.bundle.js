"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

var actualizacion = function actualizacion() {
  var _this2 = this;

  _newArrowCheck(this, _this);

  texto.addEventListener(
    "keyup",
    function () {
      _newArrowCheck(this, _this2);

      // console.log(texto.value);
      vista.srcdoc = texto.value;
    }.bind(this)
  );
}.bind(void 0);

actualizacion();
