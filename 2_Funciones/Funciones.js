// ----- FUNCIONES -----
//Función declarada
function raízDeclarada(n) {
    return Math.sqrt(n);
}
console.log("Función declarada");
console.log("la ra\u00EDz de 13 es igual a ".concat(raízDeclarada(13)));
//Función expresada
var raízExpresada = function (n) {
    return Math.sqrt(n);
};
console.log("Función expresada");
console.log("la ra\u00EDz de 78 es igual a ".concat(raízExpresada(78)));
//Función flecha
var raízFlecha = function (n) {
    return Math.sqrt(n);
};
console.log("Función flecha");
console.log("la ra\u00EDz de 44 es igual a ".concat(raízFlecha(44)));
//Función flecha number/string
var raízString = function (n) {
    return "la ra\u00EDz de ".concat(n, " es ").concat(Math.sqrt(n)); //Comillas invertida = alt + 96
};
console.log("Función flecha/string");
console.log(raízString(56));
// ----- PARÁMETROS -----
//Parámetros opcionales -> ?
var sumaOpcional = function (n1 /*Obligatorio*/, n2 /*Opcional */) {
    //Si n2 tiene valor
    if (n2 !== void 0) {
        return n1 + n2;
    }
    return n1;
};
console.log("Parámetros opcionales");
console.log("la suma de 12 + ? es igual a ".concat(sumaOpcional(12)));
//Parámetros opcionales con un valor por defecto -> ?
var sumaOpcionalConValorPorDefecto = function (n1 /*Obligatorio*/, n2 /*Opcional (por defecto -> 100)*/) {
    if (n2 === void 0) { n2 = 100; }
    return n1 + n2;
};
console.log("Parámetros opcionales con valor por defecto");
console.log("la suma de 12 + ? es igual a ".concat(sumaOpcionalConValorPorDefecto(12)));
// ----- PASANDO ARREGLOS CON EL OPERADOR REST (...)
//... es el operador rest
var animales = function () {
    var arrayAnimales = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrayAnimales[_i] = arguments[_i];
    }
    return arrayAnimales;
};
console.log("Arreglos con el operador rest (...)");
console.log("los animales son [".concat(animales("Pato", "Gallina", "Leon").join("] ["), "]"));
