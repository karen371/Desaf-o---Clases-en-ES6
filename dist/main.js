"use strict";

var _Clientes = _interopRequireDefault(require("./Clientes.js"));
var _Impuestos = _interopRequireDefault(require("./Impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//main 

// Importar las clases

//funcion para ver si tiene o no algo el objeto impuesto;
var calculoImpuesto = function calculoImpuesto(impuesto) {
  return impuesto !== null;
};
//funcion para calcular o dar un mensaje de que el no se puede calcular impuestos
var verificarImpuesto = function verificarImpuesto(cliente) {
  return calculoImpuesto(cliente.impuesto) ? console.log(cliente_x.calcularImpuesto()) : console.log('El cliente no posee datos para calcular el impuesto');
};
//instanciar objetos cliente e impuestos si corresponde 
//cliente 1
var cliente_x = new _Clientes["default"]('x');
var impuesto_x = new _Impuestos["default"](20000, 15000);
//cliente 2
var cliente_y = new _Clientes["default"]('y');

//se da valor a la propiedad impuestos del cliente_x
cliente_x.impuesto = impuesto_x;
//llama a la funcion para mostrar resultados
verificarImpuesto(cliente_x);
verificarImpuesto(cliente_y);