namespace CLASES {
  //Clase bloque
  class Bloque {
    //Variables
    private posX: number;
    private posY: number;
    private ancho: number;
    private alto: number;
    private color: string;

    //Constructor
    constructor(
      posX: number,
      posY: number,
      ancho: number,
      alto: number,
      color: string
    ) {
      this.posX = posX;
      this.posY = posY;
      this.ancho = ancho;
      this.alto = alto;
      this.color = color;
    }

    //Funciones
    public dibujar() {
      //color
      ctx.fillStyle = this.color;
      //dibujo
      ctx.fillRect(this.posX, this.posY, this.ancho, this.alto);
    }

    public caer() {
      this.posY++;
    }

    //getter y setters
    public getPosX(): number {
      return this.posX;
    }

    public setPosX(posX: number): void {
      this.posX = posX;
    }

    public getPosY(): number {
      return this.posY;
    }

    public setPosY(posY: number): void {
      this.posY = posY;
    }

    public getAncho(): number {
      return this.ancho;
    }

    public setAncho(ancho: number): void {
      this.ancho = ancho;
    }

    public getAlto(): number {
      return this.alto;
    }

    public setAlto(alto: number): void {
      this.alto = alto;
    }

    public getColor(): string {
      return this.color;
    }

    public setColor(color: string): void {
      this.color = color;
    }
  }

  //Instancia
  export let listaBloques: any[] = [];
  //Bloques
  listaBloques.push(new Bloque(32, 0, 32, 32, "red"));
  listaBloques.push(new Bloque(152, 40, 32, 32, "red"));
  listaBloques.push(new Bloque(385, 110, 32, 32, "red"));
  listaBloques.push(new Bloque(500, 0, 32, 32, "red"));

}

/*
namespace:
Los espacios de nombres son una forma específica de 
TypeScript para organizar el código. Los espacios de 
nombres se denominan simplemente objetos JavaScript en el 
espacio de nombres global. Esto hace que los espacios de nombres 
sean una construcción muy simple de usar.
*/