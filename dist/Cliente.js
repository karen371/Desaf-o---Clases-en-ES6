"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//clase clientes
var Clientes = exports["default"] = /*#__PURE__*/function () {
  //constructor
  function Clientes(nombre) {
    _classCallCheck(this, Clientes);
    this.nombre = nombre;
    this._impuesto = null; //se declara nulo para no generar confictos 
  }
  //getters y setters de nombre
  return _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(in_nombre) {
      this._nombre = in_nombre;
    }
    //getters y setters de impuesto		
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    },
    set: function set(in_impuesto) {
      this._impuesto = in_impuesto;
    }
    //metodo para generar impuestos
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var impuestoNeto = this._impuesto.montoBrutoAnual - this._impuesto.deducciones; //operacion 
      return impuestoNeto * 10 / 100; //devuelve el valor del impuesto
    }
  }]);
}();