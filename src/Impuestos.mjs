//clase impuestos
export default class Impuestos{
	//constructor
    constructor(montoBrutoAnual, deducciones){
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }
	//metodo get y set correspondiente a montoBrutoAnual
	get montoBrutoAnual() {
		return this._montoBrutoAnual;
	}
	set montoBrutoAnual(in_montoBrutoAnual) {
		this._montoBrutoAnual = in_montoBrutoAnual;
	}
	//metodo get y set correspondiente a deducciones
	get deducciones() {
		return this._deducciones;
	}
	set deducciones(in_deducciones) {
		this._deducciones = in_deducciones;
	}
}