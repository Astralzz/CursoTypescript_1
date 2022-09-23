//Clases

//Public -> En cualquier lado
//Private -> Solo en la clase
//Protected -> En las clases padre y en las heredadas

//Clase padre
class Protagonista {
  //Variables
  public posX: number;
  public posY: number;
  protected alto: number;
  protected ancho: number;
  private nombre: string;

  //Constructor
  constructor(
    posX: number,
    posY: number,
    alto: number,
    ancho: number,
    nombre: string
  ) {
    //Asignamos valores
    this.posX = posX;
    this.posY = posY;
    this.alto = alto;
    this.ancho = ancho;
    this.nombre = nombre;
  }

  //funciones
  public getPos(): string {
    //retornamos
    return `${this.nombre}:
        x: [${this.posX}]
        y:  [${this.posY}]`;
  }

  public saltar(m: number): void {
    //salto
    const salto: number[] = this.acción(this.posY, m);

    //retornamos
    console.log(`${this.nombre} saltando:
        x: [${this.posX}]
        y: [${salto.join("] [")}] `);

    //subimos
    this.posY += m;
  }

  private acción(y: number, n: number): number[] {
    return [y, y + n];
  }

  public avanzar(m: number): void {
    this.posX += m;

    console.log(`${this.nombre} avanzando...:
    x: [${this.posX}]
    y:  [${this.posY}]`);
  }

  //get y set
  public getAlto(): number {
    return this.alto;
  }
  public setAlto(alto: number): void {
    this.alto = alto;
  }
  public getAncho(): number {
    return this.ancho;
  }
  public setAncho(ancho: number): void {
    this.ancho = ancho;
  }
  protected getNombre(): string {
    return this.nombre;
  }
}

//Clase hija/heredada
class Secundario extends Protagonista {
  //Variables
  private color: string;

  //Constructor
  constructor(
    posX: number,
    posY: number,
    alto: number,
    ancho: number,
    nombre: string,
    color: string
  ) {
    //Palabra super
    super(posX, posY, alto, ancho, nombre);
    this.color = color;
  }

  //Funciones
  información(): void {
    this.avanzar(3); //SI public
    // this.acción(2,3)//NO private
    this.getNombre(); //Si protected
  }

  //get y set
  setColor(c: string): void {
    this.color = c;
  }

  getColor(): string {
    return this.color;
  }
}

//creamos la clase
const hollow: Secundario = new Secundario(10, 0, 20, 10, "Hollow", "red");
let x = 10;
const mX: number = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
const mY: number = Math.floor(Math.random() * (25 - 10 + 1)) + 10;

console.log(`
POSICIÓN INICIAL
${hollow.getPos()}`);

while (x < 100) {
  hollow.avanzar(mX);
  const s: number = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  //Cuando sea par
  if (s % 2 === 0) {
    hollow.saltar(mY);
  }

  x += 10;
}

console.log(`
POSICIÓN FINAL
${hollow.getPos()}`);
