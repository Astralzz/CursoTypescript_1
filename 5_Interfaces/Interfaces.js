// ----- INTERFACES -----
// ----- EN OBJETOS -----
//Objeto de la interfaz 1
var Manuel = {
    nombre: "Manuel",
    edad: 20,
    sexo: "H",
    seguro: false,
    peso: 86,
    altura: 1.78,
    calcularIMC: function () {
        return this.peso / Math.pow(this.altura / 100, 2);
    },
    aumentarEdad: function () {
        this.edad++;
    },
    getPersona1: function () {
        return "Soy una persona 1...\n   nombre: ".concat(this.nombre, "\n   edad: ").concat(this.edad, "\n   sexo: ").concat(this.sexo, "\n   seguro: ").concat(this.seguro ? "SI" : "NO", "\n   peso: ").concat(this.peso, "\n   altura: ").concat(this.altura);
    }
};
//Objeto de la interfaz 2
var Maria = {
    nacionalidad: "Mexicana",
    dirección: "Col obrera, No 23, Guerrero, Mexico",
    correo: "mariLu@gmail.com",
    getPersona2: function () {
        return "Soy una persona 2...\n   nacionalidad: ".concat(this.nacionalidad, "\n   direcci\u00F3n: ").concat(this.dirección, "\n   correo: ").concat(this.correo);
    }
};
// ----- EN CLASES -----
//Clase de la interfaz
var Persona = /** @class */ (function () {
    //Constructor
    function Persona(nombre, edad, sexo, seguro, peso, altura, nacionalidad, dirección, correo, salario, colorCabello) {
        //Interfaz 1
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.seguro = seguro;
        this.peso = peso;
        this.altura = altura;
        //Interfaz 2
        this.nacionalidad = nacionalidad;
        this.dirección = dirección;
        this.correo = correo;
        //Nuevas
        this.salario = salario;
        this.colorCabello = colorCabello;
    }
    //Funciones interfaz 1
    Persona.prototype.getPersona1 = function () {
        return "Soy una persona 1 en la clase...\n    nombre: ".concat(this.nombre, "\n    edad: ").concat(this.edad, "\n    sexo: ").concat(this.sexo, "\n    seguro: ").concat(this.seguro ? "SI" : "NO", "\n    peso: ").concat(this.peso, "\n    altura: ").concat(this.altura);
    };
    Persona.prototype.calcularIMC = function () {
        return this.peso / Math.pow(this.altura / 100, 2);
    };
    Persona.prototype.aumentarEdad = function () {
        this.edad++;
    };
    //Funciones interfaz 2
    Persona.prototype.getPersona2 = function () {
        return "Soy una persona 2 en la clase...\n    nacionalidad: ".concat(this.nacionalidad, "\n    direcci\u00F3n: ").concat(this.dirección, "\n    correo: ").concat(this.correo);
    };
    //Funciones nuevas
    Persona.prototype.estadoDePeso = function () {
        return "".concat(this.nombre, " tiene un ").concat(this.calcularEstado(this.calcularIMC()));
    };
    Persona.prototype.calcularEstado = function (indice) {
        var resultado = "";
        //Sexo, si es "m" mujer y si es "h" hombre
        switch (this.sexo) {
            case "M":
                if (indice < 20) {
                    resultado = "Peso inferior al normal.";
                }
                else if (indice >= 20 && indice < 24) {
                    resultado = "Peso Normal.";
                }
                else if (indice >= 24 && indice < 29) {
                    resultado = "Peso superior al normal.";
                }
                else {
                    resultado = "Obesidad.";
                }
                break;
            case "H":
                if (indice < 21) {
                    resultado = "Peso inferior al normal.";
                }
                else if (indice >= 21 && indice < 25) {
                    resultado = "Peso Normal.";
                }
                else if (indice >= 25 && indice < 30) {
                    resultado = "Peso superior al normal.";
                }
                else {
                    resultado = "Obesidad";
                }
                break;
            default:
                resultado =
                    "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
        }
        return resultado;
    };
    Persona.prototype.getPersonaClase = function () {
        return "Soy una persona en la clase completa...\n    nombre: ".concat(this.nombre, "\n    edad: ").concat(this.edad, "\n    sexo: ").concat(this.sexo, "\n    seguro: ").concat(this.seguro ? "SI" : "NO", "\n    peso: ").concat(this.peso, "\n    altura: ").concat(this.altura, "\n    nacionalidad: ").concat(this.nacionalidad, "\n    direcci\u00F3n: ").concat(this.dirección, "\n    correo: ").concat(this.correo);
    };
    return Persona;
}());
var Edain = new Persona("Edain", 24, "H", true, 91, 1.74, "Mexicana", "Colo Amelitos ii, No 23", "daiinxd13@gmail.com", 15000, "Rubio");
//Función en objeto/variable
var pájaro = function (valor) {
    return valor ? "Este pájaro SI vuela" : "Este pájaro NO vuela";
};
//MOSTRAMOS
console.log("\nObjetos....\n\n1.\nDatos:\n".concat(Manuel.getPersona1(), "\nIMC:\n").concat(Manuel.calcularIMC(), "\n\n2.\nDatos:\n").concat(Maria.getPersona2(), "\n\n\n\nEn clase....\n\nDatos clase 1\n").concat(Edain.getPersona1(), "\nIMC:\n").concat(Edain.calcularIMC(), "\n\nDatos clase 2\n").concat(Edain.getPersona2(), "\n\nDatos de clase nuevos\n").concat(Edain.getPersonaClase(), "\nEdrado de peso\n").concat(Edain.estadoDePeso(), "\n\n\n\nEn funciones.... \n\n").concat(pájaro(true), "\n"));
