//main 
// Importar las clases
import Clientes from './Clientes.mjs'; 
import Impuestos from './Impuestos.mjs';
//funcion para ver si tiene o no algo el objeto impuesto;
const calculoImpuesto = (impuesto) => impuesto !== null;
//funcion para calcular o dar un mensaje de que el no se puede calcular impuestos
const verificarImpuesto = (cliente) => 
    calculoImpuesto(cliente.impuesto)
        ? console.log(cliente_x.calcularImpuesto())
        : console.log('El cliente no posee datos para calcular el impuesto');
//instanciar objetos cliente e impuestos si corresponde 
//cliente 1
let cliente_x = new Clientes('x');
let impuesto_x = new Impuestos(20000,15000);
//cliente 2
let cliente_y = new Clientes('y');

//se da valor a la propiedad impuestos del cliente_x
cliente_x.impuesto = impuesto_x;
//llama a la funcion para mostrar resultados
verificarImpuesto(cliente_x);
verificarImpuesto(cliente_y);