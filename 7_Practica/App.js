var CLASES;
(function (CLASES) {
    //Clase bloque
    var Bloque = /** @class */ (function () {
        //Constructor
        function Bloque(posX, posY, ancho, alto, color) {
            this.posX = posX;
            this.posY = posY;
            this.ancho = ancho;
            this.alto = alto;
            this.color = color;
        }
        //Funciones
        Bloque.prototype.dibujar = function () {
            //color
            ctx.fillStyle = this.color;
            //dibujo
            ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
        };
        Bloque.prototype.caer = function () {
            this.posY++;
        };
        //getter y setters
        Bloque.prototype.getPosX = function () {
            return this.posX;
        };
        Bloque.prototype.setPosX = function (posX) {
            this.posX = posX;
        };
        Bloque.prototype.getPosY = function () {
            return this.posY;
        };
        Bloque.prototype.setPosY = function (posY) {
            this.posY = posY;
        };
        Bloque.prototype.getAncho = function () {
            return this.ancho;
        };
        Bloque.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Bloque.prototype.getAlto = function () {
            return this.alto;
        };
        Bloque.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Bloque.prototype.getColor = function () {
            return this.color;
        };
        Bloque.prototype.setColor = function (color) {
            this.color = color;
        };
        return Bloque;
    }());
    //Instancia
    CLASES.listaBloques = [];
    //Bloques
    CLASES.listaBloques.push(new Bloque(32, 0, 32, 32, "red"));
    CLASES.listaBloques.push(new Bloque(152, 40, 32, 32, "red"));
    CLASES.listaBloques.push(new Bloque(385, 110, 32, 32, "red"));
    CLASES.listaBloques.push(new Bloque(500, 0, 32, 32, "red"));
})(CLASES || (CLASES = {}));
/*
namespace:
Los espacios de nombres son una forma específica de
TypeScript para organizar el código. Los espacios de
nombres se denominan simplemente objetos JavaScript en el
espacio de nombres global. Esto hace que los espacios de nombres
sean una construcción muy simple de usar.
*/ 
//Importar desde clases por el namespace
///<reference path="Clases.ts"/>
//Pizarra
var canvas = document.querySelector("canvas");
//Contexto
var ctx = canvas.getContext("2d");
//Llenar arreglo
var llenarArreglo = function (f, c) {
    var array = [];
    //Filas/Ancho
    for (var i = 0; i < f; i++) {
        array.push([]);
        //Columnas/Alto
        for (var j = 0; j < c; j++) {
            array[i].push(0);
        }
    }
    return array;
};
//Dibujar pizarra
var dibujarPizarra = function (es) {
    //Tamaño
    canvas.width = 800; //25 x 32 = 800
    canvas.height = 608; //19 x 32 = 608
    //Crear escenario
    for (var x = 0; x < es.length; x++) {
        for (var y = 0; y < es[x].length; y++) {
            //Dibujamos
            var co = "#".concat(y < 13 ? "99FFFF" /*Cielo */ : "66FF66" /*Pasto */);
            ctx.fillStyle = co; //Color
            ctx.fillRect(32 * x /*Pos x */, 32 * y /*Pos y */, 32 /*Ancho */, 32 /*Alto */); //Cuadro de 32x32
        }
    }
};
//Escenario de 25X19 (cada cuadro de 32x32)
var Escenario = llenarArreglo(25, 19);
//Dibujamos
dibujarPizarra(Escenario);
//Animar
function principal() {
    //Función para animar
    requestAnimationFrame(principal);
    //Re dibujamos pizarra
    dibujarPizarra(Escenario);
    //Dibujamos
    CLASES.listaBloques.map(function (bloque) {
        var corY = bloque.getPosY() / 32;
        bloque.dibujar();
        if (corY < 13) {
            bloque.caer();
        }
    });
}
principal();
//Importar desde clases por el namespace
///<reference path="Clases.ts"/>
//Recorremos bloques
CLASES.listaBloques.map(function (bloque) {
    //Si se toca una tecla
    document.addEventListener("keydown", function (e) {
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
