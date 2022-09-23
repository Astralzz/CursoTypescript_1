// ----- INTERFACES -----

//Interfaz 1
interface persona {
  nombre: string;
  edad: number;
  sexo: string;
  seguro: boolean;
  peso: number;
  altura: number;
  calcularIMC(): number;
  aumentarEdad(): void;
  getPersona1(): string;
}

//Interfaz 2
interface persona2 {
  nacionalidad: string;
  dirección: string;
  correo: string;
  getPersona2(): string;
}

// ----- EN OBJETOS -----

//Objeto de la interfaz 1
const Manuel: persona = {
  nombre: "Manuel",
  edad: 20,
  sexo: "H",
  seguro: false,
  peso: 86,
  altura: 1.78,
  calcularIMC: function (): number {
    return this.peso / Math.pow(this.altura / 100, 2);
  },
  aumentarEdad: function (): void {
    this.edad++;
  },
  getPersona1: function (): string {
    return `Soy una persona 1...
   nombre: ${this.nombre}
   edad: ${this.edad}
   sexo: ${this.sexo}
   seguro: ${this.seguro ? "SI" : "NO"}
   peso: ${this.peso}
   altura: ${this.altura}`;
  },
};

//Objeto de la interfaz 2
const Maria: persona2 = {
  nacionalidad: "Mexicana",
  dirección: "Col obrera, No 23, Guerrero, Mexico",
  correo: "mariLu@gmail.com",
  getPersona2: function (): string {
    return `Soy una persona 2...
   nacionalidad: ${this.nacionalidad}
   dirección: ${this.dirección}
   correo: ${this.correo}`;
  },
};

// ----- EN CLASES -----

//Clase de la interfaz
class Persona implements persona, persona2 {
  //variables de la interfaz 1
  nombre: string;
  edad: number;
  sexo: string;
  seguro: boolean;
  peso: number;
  altura: number;

  //variables de la interfaz 2
  nacionalidad: string;
  dirección: string;
  correo: string;

  //variables nuevas
  salario: number;
  colorCabello: string;

  //Constructor
  constructor(
    nombre: string,
    edad: number,
    sexo: string,
    seguro: boolean,
    peso: number,
    altura: number,
    nacionalidad: string,
    dirección: string,
    correo: string,
    salario: number,
    colorCabello: string
  ) {
    //Interfaz 1
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.seguro = seguro;
    this.peso = peso;
    this.altura = altura;
    //Interfaz 2
    this.nacionalidad = nacionalidad;
    this.dirección = dirección;
    this.correo = correo;
    //Nuevas
    this.salario = salario;
    this.colorCabello = colorCabello;
  }

  //Funciones interfaz 1
  getPersona1(): string {
    return `Soy una persona 1 en la clase...
    nombre: ${this.nombre}
    edad: ${this.edad}
    sexo: ${this.sexo}
    seguro: ${this.seguro ? "SI" : "NO"}
    peso: ${this.peso}
    altura: ${this.altura}`;
  }
  public calcularIMC(): number {
    return this.peso / Math.pow(this.altura / 100, 2);
  }
  public aumentarEdad(): void {
    this.edad++;
  }
  //Funciones interfaz 2
  getPersona2(): string {
    return `Soy una persona 2 en la clase...
    nacionalidad: ${this.nacionalidad}
    dirección: ${this.dirección}
    correo: ${this.correo}`;
  }
  //Funciones nuevas
  public estadoDePeso(): string {
    return `${this.nombre} tiene un ${this.calcularEstado(this.calcularIMC())}`;
  }
  private calcularEstado(indice: number): string {
    let resultado = "";
    //Sexo, si es "m" mujer y si es "h" hombre
    switch (this.sexo) {
      case "M":
        if (indice < 20) {
          resultado = "Peso inferior al normal.";
        } else if (indice >= 20 && indice < 24) {
          resultado = "Peso Normal.";
        } else if (indice >= 24 && indice < 29) {
          resultado = "Peso superior al normal.";
        } else {
          resultado = "Obesidad.";
        }
        break;
      case "H":
        if (indice < 21) {
          resultado = "Peso inferior al normal.";
        } else if (indice >= 21 && indice < 25) {
          resultado = "Peso Normal.";
        } else if (indice >= 25 && indice < 30) {
          resultado = "Peso superior al normal.";
        } else {
          resultado = "Obesidad";
        }
        break;
      default:
        resultado =
          "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
    }

    return resultado;
  }
  public getPersonaClase(): string {
    return `Soy una persona en la clase completa...
    nombre: ${this.nombre}
    edad: ${this.edad}
    sexo: ${this.sexo}
    seguro: ${this.seguro ? "SI" : "NO"}
    peso: ${this.peso}
    altura: ${this.altura}
    nacionalidad: ${this.nacionalidad}
    dirección: ${this.dirección}
    correo: ${this.correo}`;
  }
}

const Edain: Persona = new Persona(
  "Edain",
  24,
  "H",
  true,
  91,
  1.74,
  "Mexicana",
  "Colo Amelitos ii, No 23",
  "daiinxd13@gmail.com",
  15000,
  "Rubio"
);

// ----- EN FUNCIONES -----

//Interfaz en funciones
interface movimiento {
  //función donde le pasaremos y devolveremos un booleano
  (valor: boolean /* Parámetro */): string /* Devolución */;
}

//Función en objeto/variable
let pájaro: movimiento = function (valor: boolean) {
  return valor ? "Este pájaro SI vuela" : "Este pájaro NO vuela";
};

//MOSTRAMOS
console.log(`
Objetos....

1.
Datos:
${Manuel.getPersona1()}
IMC:
${Manuel.calcularIMC()}

2.
Datos:
${Maria.getPersona2()}



En clase....

Datos clase 1
${Edain.getPersona1()}
IMC:
${Edain.calcularIMC()}

Datos clase 2
${Edain.getPersona2()}

Datos de clase nuevos
${Edain.getPersonaClase()}
Edrado de peso
${Edain.estadoDePeso()}



En funciones.... 

${pájaro(true)}
`);
