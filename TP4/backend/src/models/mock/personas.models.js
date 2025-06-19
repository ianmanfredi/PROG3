let personas = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    email: "juan.perez@example.com",
  },
  {
    id: 2,
    nombre: "María",
    apellido: "Gómez",
    edad: 25,
    email: "maria.gomez@example.com",
  },
  {
    id: 3,
    nombre: "Ricardo",
    apellido: "Iorio",
    edad: 45,
    email: "richard@example.com",
  },
  {
    id: 4,
    nombre: "Genaro",
    apellido: "Gattuso",
    edad: 25,
    email: "gatusso.gomez@example.com",
  },
  {
    id: 5,
    nombre: "Moria",
    apellido: "Casan",
    edad: 67,
    email: "moria.gomez@example.com",
  },
];

const getAllPersonas = () => personas;

module.exports = {
  getAllPersonas,
};
