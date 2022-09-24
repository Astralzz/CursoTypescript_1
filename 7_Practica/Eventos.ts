//Importar desde clases por el namespace
///<reference path="Clases.ts"/>

//Recorremos bloques
CLASES.listaBloques.map((bloque) => {
  //Si se toca una tecla
  document.addEventListener("keydown", (e) => {
    //Si es d o D
    if (e.key == "d" || e.key == "D") {
      //Nos movemos a la derecha
      bloque.setPosX(bloque.getPosX() + 5);
    }
    //Si es d o D
    if (e.key == "a" || e.key == "A") {
      //Nos movemos a la izquierda
      bloque.setPosX(bloque.getPosX() - 5);
    }
    //Si es w o W
    if (e.key == "w" || e.key == "W") {
      //Nos movemos arriba
      bloque.setPosY(bloque.getPosY() - 5);
    }
    //Si es s o S
    if (e.key == "s" || e.key == "S") {
      //Nos movemos abajo
      bloque.setPosY(bloque.getPosY() + 5);
    }
  });
});
