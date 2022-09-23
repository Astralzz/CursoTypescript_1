//TIPOS DE DATOS
//1 Bolean -> Booleano
console.log("-----> Dato booleano <-----");
var datoBool = true;
console.log(datoBool + " es: " + typeof datoBool);
//2 Number -> Entero o decimal
console.log("-----> Dato numérico <-----");
var datoEntero = 123;
console.log(datoEntero + " es: " + typeof datoEntero);
var datoDecimal = 1.23;
console.log(datoDecimal + " es: " + typeof datoDecimal);
//3 String -> Cadena
console.log("-----> Dato de texto <-----");
var datoCadena = "Hola mundo";
console.log(datoCadena + " es: " + typeof datoCadena);
//4 any -> Cualquier cosa
console.log("-----> Dato cualquiera <-----");
var datoCualquiera = true;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = 123;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = "Hola";
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = 12.3;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
//5 tuples y arrays -> tuplas y arreglos
console.log("-----> Arreglos y tuplas <-----");
var lista = ["Manzana", "Pera", "Mango"];
console.log(lista.join(" - ") + " es: " + typeof lista);
var tupla = ["Hola", 42, true]; //Lista con tipos de datos distintos
console.log(tupla + " es: " + typeof tupla);
//6 Enum -> enumerarles
console.log("-----> Enumerarles <-----");
var Países;
(function (Países) {
    Países[Países["Mexico"] = 0] = "Mexico";
    Países[Países["Canada"] = 1] = "Canada";
    Países[Países["Brazil"] = 2] = "Brazil";
    Países[Países["EU"] = 10] = "EU";
    Países[Países["Rusia"] = 11] = "Rusia";
    Países[Países["Egipto"] = 12] = "Egipto";
    Países["Francia"] = "Francia";
})(Países || (Países = {}));
//Posición numérica
var noPaís = Países.Brazil;
console.log("Brazil esta en el no " + noPaís + " -> " + typeof noPaís);
var nombrePaís = Países.Francia;
console.log(nombrePaís +
    " esta en el no " +
    (Países.Egipto + 1) +
    " -> " +
    typeof nombrePaís);
//7 Void -> datos que no retornan nada(Vació)
console.log("-----> Función vacía <-----");
//Fusion vacía
var raízCuadrada = function (n) {
    var raízN = Math.sqrt(n);
    console.log("La raíz cuadrada de " + n + " es " + raízN);
};
//Llamamos
raízCuadrada(9);
//8 Never/ERROR -> datos que retornan un error
console.log("-----> Función de error <-----");
// //Función de error
// function funciónDeError(frase:string):never{
// //Error
// throw new Error(frase);
// }
// funciónDeError("Esto es un error");
//9 Null y undefined -> datos nulos o indefinidos
console.log("-----> indefinidos <-----");
var datoIndefinido = undefined; //No tiene valor
console.log(datoIndefinido + " es: " + typeof datoIndefinido);
var datoNulo = null; //Si tiene valor (null)
console.log(datoNulo + " es: " + typeof datoNulo);
