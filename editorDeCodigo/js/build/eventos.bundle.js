"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) {
  if (innerThis !== boundThis) {
    throw new TypeError("Cannot instantiate an arrow function");
  }
}

/*------------------------MODO NOCTURNO------------------------------*/
modNoct.addEventListener(
  "click",
  function () {
    _newArrowCheck(this, _this);

    // document.body.style.backgroundColor = "#252850";
    // texto.style.backgroundColor = "#252850";
    // texto.style.outline = "2px solid #fff";
    // texto.style.borderRadius = "2px";
    // texto.style.color = "#fff";

    /*---------------MEJORADO---------------*/
    body.classList.add("bodyBg");
    texto.classList.add("textoBg");
    texto.classList.add("outline");
    texto.classList.add("borRad");
    texto.classList.add("textoColor");
    titulo.classList.add("colorTitulo");
  }.bind(void 0)
);
modNormal.addEventListener(
  "click",
  function () {
    _newArrowCheck(this, _this);

    // document.body.style.backgroundColor = "";
    // texto.style.backgroundColor = "";
    // texto.style.outline = "";
    // texto.style.borderRadius = "";
    // texto.style.color = "";

    /*---------------MEJORADO---------------*/
    body.classList.remove("bodyBg");
    texto.classList.remove("textoBg");
    texto.classList.remove("outline");
    texto.classList.remove("borRad");
    texto.classList.remove("textoColor");
    titulo.classList.remove("colorTitulo");
  }.bind(void 0)
);
