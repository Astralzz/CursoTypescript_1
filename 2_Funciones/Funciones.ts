// ----- FUNCIONES -----

//Función declarada
function raízDeclarada(n: number): number {
  return Math.sqrt(n);
}

console.log("Función declarada");
console.log(`la raíz de 13 es igual a ${raízDeclarada(13)}`);

//Función expresada
const raízExpresada = function (n: number): number {
  return Math.sqrt(n);
};

console.log("Función expresada");
console.log(`la raíz de 78 es igual a ${raízExpresada(78)}`);

//Función flecha
const raízFlecha = (n: number): number => {
  return Math.sqrt(n);
};

console.log("Función flecha");
console.log(`la raíz de 44 es igual a ${raízFlecha(44)}`);

//Función flecha number/string
const raízString = (n: number): string => {
  return `la raíz de ${n} es ${Math.sqrt(n)}`; //Comillas invertida = alt + 96
};

console.log("Función flecha/string");
console.log(raízString(56));

// ----- PARÁMETROS -----

//Parámetros opcionales -> ?
const sumaOpcional = (
  n1: number /*Obligatorio*/,
  n2?: number /*Opcional */
): number => {
  //Si n2 tiene valor
  if (n2 !== void 0) {
    return n1 + n2;
  }
  return n1;
};

console.log("Parámetros opcionales");
console.log(`la suma de 12 + ? es igual a ${sumaOpcional(12)}`);

//Parámetros opcionales con un valor por defecto -> ?
const sumaOpcionalConValorPorDefecto = (
  n1: number /*Obligatorio*/,
  n2: number = 100 /*Opcional (por defecto -> 100)*/
): number => {
  return n1 + n2;
};

console.log("Parámetros opcionales con valor por defecto");
console.log(
  `la suma de 12 + ? es igual a ${sumaOpcionalConValorPorDefecto(12)}`
);

// ----- PASANDO ARREGLOS CON EL OPERADOR REST (...)
//... es el operador rest
const animales = (...arrayAnimales: string[]): string[] => {
  return arrayAnimales;
};

console.log("Arreglos con el operador rest (...)");
console.log(
  `los animales son [${animales("Pato", "Gallina", "Leon").join("] [")}]`
);
