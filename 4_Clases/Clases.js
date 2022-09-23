//Clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Public -> En cualquier lado
//Private -> Solo en la clase
//Protected -> En las clases padre y en las heredadas
//Clase padre
var Protagonista = /** @class */ (function () {
    //Constructor
    function Protagonista(posX, posY, alto, ancho, nombre) {
        //Asignamos valores
        this.posX = posX;
        this.posY = posY;
        this.alto = alto;
        this.ancho = ancho;
        this.nombre = nombre;
    }
    //funciones
    Protagonista.prototype.getPos = function () {
        //retornamos
        return "".concat(this.nombre, ":\n        x: [").concat(this.posX, "]\n        y:  [").concat(this.posY, "]");
    };
    Protagonista.prototype.saltar = function (m) {
        //salto
        var salto = this.acción(this.posY, m);
        //retornamos
        console.log("".concat(this.nombre, " saltando:\n        x: [").concat(this.posX, "]\n        y: [").concat(salto.join("] ["), "] "));
        //subimos
        this.posY += m;
    };
    Protagonista.prototype.acción = function (y, n) {
        return [y, y + n];
    };
    Protagonista.prototype.avanzar = function (m) {
        this.posX += m;
        console.log("".concat(this.nombre, " avanzando...:\n    x: [").concat(this.posX, "]\n    y:  [").concat(this.posY, "]"));
    };
    //get y set
    Protagonista.prototype.getAlto = function () {
        return this.alto;
    };
    Protagonista.prototype.setAlto = function (alto) {
        this.alto = alto;
    };
    Protagonista.prototype.getAncho = function () {
        return this.ancho;
    };
    Protagonista.prototype.setAncho = function (ancho) {
        this.ancho = ancho;
    };
    Protagonista.prototype.getNombre = function () {
        return this.nombre;
    };
    return Protagonista;
}());
//Clase hija/heredada
var Secundario = /** @class */ (function (_super) {
    __extends(Secundario, _super);
    //Constructor
    function Secundario(posX, posY, alto, ancho, nombre, color) {
        var _this = 
        //Palabra super
        _super.call(this, posX, posY, alto, ancho, nombre) || this;
        _this.color = color;
        return _this;
    }
    //Funciones
    Secundario.prototype.información = function () {
        this.avanzar(3); //SI public
        // this.acción(2,3)//NO private
        this.getNombre(); //Si protected
    };
    //get y set
    Secundario.prototype.setColor = function (c) {
        this.color = c;
    };
    Secundario.prototype.getColor = function () {
        return this.color;
    };
    return Secundario;
}(Protagonista));
//creamos la clase
var hollow = new Secundario(10, 0, 20, 10, "Hollow", "red");
var x = 10;
var mX = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
var mY = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
console.log("\nPOSICI\u00D3N INICIAL\n".concat(hollow.getPos()));
while (x < 100) {
    hollow.avanzar(mX);
    var s = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    //Cuando sea par
    if (s % 2 === 0) {
        hollow.saltar(mY);
    }
    x += 10;
}
console.log("\nPOSICI\u00D3N FINAL\n".concat(hollow.getPos()));
