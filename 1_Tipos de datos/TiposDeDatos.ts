//TIPOS DE DATOS

//1 Bolean -> Booleano
console.log("-----> Dato booleano <-----");
const datoBool: boolean = true;
console.log(datoBool + " es: " + typeof datoBool);

//2 Number -> Entero o decimal
console.log("-----> Dato numérico <-----");
let datoEntero: number = 123;
console.log(datoEntero + " es: " + typeof datoEntero);
let datoDecimal: number = 1.23;
console.log(datoDecimal + " es: " + typeof datoDecimal);

//3 String -> Cadena
console.log("-----> Dato de texto <-----");
let datoCadena: string = "Hola mundo";
console.log(datoCadena + " es: " + typeof datoCadena);

//4 any -> Cualquier cosa
console.log("-----> Dato cualquiera <-----");
let datoCualquiera: any = true;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = 123;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = "Hola";
console.log(datoCualquiera + " es: " + typeof datoCualquiera);
datoCualquiera = 12.3;
console.log(datoCualquiera + " es: " + typeof datoCualquiera);

//5 tuples y arrays -> tuplas y arreglos
console.log("-----> Arreglos y tuplas <-----");
let lista: string[] = ["Manzana", "Pera", "Mango"];
console.log(lista.join(" - ") + " es: " + typeof lista);
let tupla: [string, number, boolean] = ["Hola", 42, true]; //Lista con tipos de datos distintos
console.log(tupla + " es: " + typeof tupla);

//6 Enum -> enumerarles
console.log("-----> Enumerarles <-----");
enum Países {
  Mexico, //0
  Canada, //1
  Brazil, //2
  EU = 10, //10
  Rusia, //11
  Egipto, //12
  Francia = "Francia", //13
}
//Posición numérica
const noPaís: number = Países.Brazil;
console.log("Brazil esta en el no " + noPaís + " -> " + typeof noPaís);
const nombrePaís: string = Países.Francia;
console.log(
  nombrePaís +
    " esta en el no " +
    (Países.Egipto + 1) +
    " -> " +
    typeof nombrePaís
);

//7 Void -> datos que no retornan nada(Vació)
console.log("-----> Función vacía <-----");
//Fusion vacía
const raízCuadrada = (n: number): void => {
  const raízN = Math.sqrt(n);
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
let datoIndefinido:undefined = undefined;//No tiene valor
console.log(datoIndefinido + " es: " + typeof datoIndefinido);
let datoNulo:null = null;//Si tiene valor (null)
console.log(datoNulo + " es: " + typeof datoNulo);
