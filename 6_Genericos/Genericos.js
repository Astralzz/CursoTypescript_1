//GENÉRICOS
//Los genéricos sustituyen al any
//Funciones con any
var funciónConAny = function () {
    return "Devuelvo cualquier cosa";
};
function funciónConAny2() {
    return "Devuelvo cualquier cosa";
}
//Error por usar eny (estoy usando floor una cadena,
// cuando es exclusivo de un numero)
var n1 = funciónConAny(); //.floor();
console.log(n1);
//Funciones con genéricos
var funciónGenérico = function () {
    return "Devuelvo cualquier cosa, y detecto que tipo es";
};
function funciónGenérico2() {
    return "Devuelvo cualquier cosa y detecto que tipo es";
}
//Detecta que esta devolviendo una cadena y no nos permite usar .floor
var n2 = funciónGenérico(); //.floor();
console.log(n2);
