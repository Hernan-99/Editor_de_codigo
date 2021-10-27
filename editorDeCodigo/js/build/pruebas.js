"use strict";
// const modNoct = document.getElementById("btn1");
// const modNormal = document.getElementById("btn2");
// const texto = document.getElementById("texto");
// const vista = document.getElementById("vista");
// const titulo = document.getElementById("titulo");
// const body = document.getElementById("body");

const actualizacion = () => {
  texto.addEventListener("keyup", () => {
    // console.log(texto.value);
    vista.srcdoc = texto.value;
  });
};
actualizacion();

/*------------------------MODO NOCTURNO------------------------------*/
modNoct.addEventListener("click", () => {
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
});

modNormal.addEventListener("click", () => {
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
});
