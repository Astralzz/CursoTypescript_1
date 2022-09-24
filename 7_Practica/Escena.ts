//Importar desde clases por el namespace
///<reference path="Clases.ts"/>

//Pizarra
const canvas: any = document.querySelector("canvas");
//Contexto
const ctx = canvas.getContext("2d");

//Llenar arreglo
const llenarArreglo = (f: number, c: number): number[][] => {
  let array: number[][] = [];

  //Filas/Ancho
  for (let i = 0; i < f; i++) {
    array.push([]);
    //Columnas/Alto
    for (let j = 0; j < c; j++) {
      array[i].push(0);
    }
  }

  return array;
};

//Dibujar pizarra
const dibujarPizarra = (es: number[][]): void => {
  //Tamaño
  canvas.width = 800; //25 x 32 = 800
  canvas.height = 608; //19 x 32 = 608

  //Crear escenario
  for (let x = 0; x < es.length; x++) {
    for (let y = 0; y < es[x].length; y++) {
      //Dibujamos
      const co: string = `#${
        y < 13 ? "99FFFF" /*Cielo */ : "66FF66" /*Pasto */
      }`;
      ctx.fillStyle = co; //Color
      ctx.fillRect(
        32 * x /*Pos x */,
        32 * y /*Pos y */,
        32 /*Ancho */,
        32 /*Alto */
      ); //Cuadro de 32x32
    }
  }
};

//Escenario de 25X19 (cada cuadro de 32x32)
let Escenario: number[][] = llenarArreglo(25, 19);

//Dibujamos
dibujarPizarra(Escenario);

//Animar
function principal(): void {
  //Función para animar
  requestAnimationFrame(principal);
  //Re dibujamos pizarra
  dibujarPizarra(Escenario);
  //Dibujamos
  CLASES.listaBloques.map((bloque) => {
    const corY = bloque.getPosY() / 32;
    bloque.dibujar();
    if (corY < 13) {
      bloque.caer();
    }
  });
}

principal();
