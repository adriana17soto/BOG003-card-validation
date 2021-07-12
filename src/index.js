import validator from "./validator.js";

//Interacción de la primera pantalla
document.getElementById("product-container").style.display = "block";
document.getElementById("content").style.display = "none";
document.getElementById("compra").style.display = "none";
document.getElementById("realizarcompra").style.display = "none";
document.getElementById("pantalla3").style.display = "none";

//Interacción de la segunda pantalla, cuando hace click en el botón carrito de compras lo redirige a la pantalla
let iconCart = document.getElementById("iconCart");
iconCart.addEventListener("click", mostrarpantalla);

function mostrarpantalla() {
  document.getElementById("product-container").style.display = "none";
  document.getElementById("content").style.display = "block";
  document.getElementById("compra").style.display = "block";
  document.getElementById("realizarcompra").style.display = "none";
  document.getElementById("pantalla3").style.display = "none";
}

let btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click", mostrarpantalla3);

//Interacción de la tercera pantalla, cuando hace click en el botón compra lo redirige a la pantalla 3.
function mostrarpantalla3() {
  document.getElementById("product-container").style.display = "none";
  document.getElementById("content").style.display = "none";
  document.getElementById("compra").style.display = "none";
  document.getElementById("realizarcompra").style.display = "block";
  document.getElementById("pantalla3").style.display = "block";
}

//Interacción de la tercera pantalla, cuando hace click en el botón regresar lo redirige a la pantalla 1.
let btnRegresar = document.getElementById("btnRegresar");
btnRegresar.addEventListener("click", mostrarpantalla1);

function mostrarpantalla1() {
  document.getElementById("product-container").style.display = "block";
  document.getElementById("content").style.display = "none";
  document.getElementById("compra").style.display = "none";
  document.getElementById("realizarcompra").style.display = "none";
  document.getElementById("pantalla3").style.display = "none";
}

//Funciones del botón Validar y el llamado de la Función Maskify
document.getElementById("btnValidar").addEventListener("click", () => {
  let creditCardNumber = document.getElementById("tarjetaDeCredito").value;
  let resultado = validator.isValid(
    document.getElementById("tarjetaDeCredito").value
  );

  //Campo Obligatorio
  campoValido(creditCardNumber);

  function campoValido() {
    if (creditCardNumber === "") {
      alert("Debes ingresar tu Número de Tarjeta");
    } else if (resultado === true) {
      alert(
        "TARJETA VALIDA " +
          validator.maskify(document.getElementById("tarjetaDeCredito").value)
      );
    } else if (resultado === false) {
      alert(
        "TARJETA INVALIDA " +
          validator.maskify(document.getElementById("tarjetaDeCredito").value)
      );
    }
  }
});

