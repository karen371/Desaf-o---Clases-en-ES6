//clase clientes
export default class Clientes {
	//constructor
    constructor(nombre){
        this.nombre = nombre;
        this._impuesto = null; //se declara nulo para no generar confictos 
    }
	//getters y setters de nombre
	get nombre() {
		return this._nombre;
	}
	set nombre(in_nombre) {
		this._nombre = in_nombre;
	}
	//getters y setters de impuesto		
	get impuesto() {
		return this._impuesto;
	}
	set impuesto(in_impuesto) {
		this._impuesto = in_impuesto;
	}
	//metodo para generar impuestos
	calcularImpuesto(){
        let impuestoNeto = this._impuesto.montoBrutoAnual - this._impuesto.deducciones; //operacion 
		return (impuestoNeto * 10) / 100; //devuelve el valor del impuesto
    }		
}