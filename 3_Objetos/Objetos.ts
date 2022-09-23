//Objeto en ts
let gato: { nombre: string; edad: number; raza?: string; acción(): string } = {
  nombre: "Pelusa",
  edad: 4,
  raza: "Persa",
  acción: function (): string {
    return "Miau";
  },
};
//Mostramos
console.log(`Gato:
nombre: ${gato.nombre}
edad: ${gato.edad}
raza: ${gato.raza}
acción: ${gato.acción()}`);

//Objetos con molde/Tipos
type perro = {
  Nombre: string;
  Raza?: string;
  Sexo: boolean; //t:macho/f:hembra
  Edad: number;
  acción(n: number): string;
};

//Creamos 3 perros
const lobo: perro = {
  Nombre: "Lobo",
  Raza: "Gran danes",
  Sexo: true,
  Edad: 7,
  acción: function (n: number): string {
    return `${this.Nombre} comió ${n} galletas`;
  },
};
const America: perro = {
  Nombre: "America",
  Sexo: false,
  Edad: 1,
  acción: function (n: number): string {
    return `${this.Nombre} atrapo ${n} pelotas`;
  },
};
const Chato: perro = {
  Nombre: "Chato",
  Raza: "Doberman",
  Sexo: true,
  Edad: 10,
  acción: function (n: number): string {
    return `${this.Nombre} camino ${n} km`;
  },
};

//Mostramos
const mostrarPerros = (...Array: perro[]): perro[] => {
  return Array;
};

//Mostramos
mostrarPerros(America, Chato, lobo).forEach((p, i) => {
  console.log(`perro ${i+1}
  Nombre: ${p.Nombre}
  Edad: ${p.Edad}
  Raza: ${p.Raza}
  Sexo: ${p.Sexo ? "Macho" : "Hembra"}
  Acción: ${p.acción(i + 1)}`);
});
