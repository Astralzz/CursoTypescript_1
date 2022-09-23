//GENÉRICOS
//Los genéricos sustituyen al any

//Funciones con any
const funciónConAny = (): any => {
  return "Devuelvo cualquier cosa";
};

function funciónConAny2(): any {
  return "Devuelvo cualquier cosa";
}

//Error por usar eny (estoy usando floor una cadena,
// cuando es exclusivo de un numero)
const n1: number = funciónConAny(); //.floor();
console.log(n1);

//Funciones con genéricos
const funciónGenérico = <T>() => {
  return "Devuelvo cualquier cosa, y detecto que tipo es";
};

function funciónGenérico2<T>() {
  return "Devuelvo cualquier cosa y detecto que tipo es";
}

//Detecta que esta devolviendo una cadena y no nos permite usar .floor
const n2: string = funciónGenérico(); //.floor();
console.log(n2);
