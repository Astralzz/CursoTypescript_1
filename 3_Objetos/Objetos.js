//Objeto en ts
var gato = {
    nombre: "Pelusa",
    edad: 4,
    raza: "Persa",
    acción: function () {
        return "Miau";
    }
};
//Mostramos
console.log("Gato:\nnombre: ".concat(gato.nombre, "\nedad: ").concat(gato.edad, "\nraza: ").concat(gato.raza, "\nacci\u00F3n: ").concat(gato.acción()));
//Creamos 3 perros
var lobo = {
    Nombre: "Lobo",
    Raza: "Gran danes",
    Sexo: true,
    Edad: 7,
    acción: function (n) {
        return "".concat(this.Nombre, " comi\u00F3 ").concat(n, " galletas");
    }
};
var America = {
    Nombre: "America",
    Sexo: false,
    Edad: 1,
    acción: function (n) {
        return "".concat(this.Nombre, " atrapo ").concat(n, " pelotas");
    }
};
var Chato = {
    Nombre: "Chato",
    Raza: "Doberman",
    Sexo: true,
    Edad: 10,
    acción: function (n) {
        return "".concat(this.Nombre, " camino ").concat(n, " km");
    }
};
//Mostramos
var mostrarPerros = function () {
    var Array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Array[_i] = arguments[_i];
    }
    return Array;
};
//Mostramos
mostrarPerros(America, Chato, lobo).forEach(function (p, i) {
    console.log("perro ".concat(i + 1, "\n  Nombre: ").concat(p.Nombre, "\n  Edad: ").concat(p.Edad, "\n  Raza: ").concat(p.Raza, "\n  Sexo: ").concat(p.Sexo ? "Macho" : "Hembra", "\n  Acci\u00F3n: ").concat(p.acción(i + 1)));
});
