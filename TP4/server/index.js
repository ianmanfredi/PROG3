import { PersonaController } from "./controller/personaController.js";
import { Persona } from "./models/personaModel.js";
import { PersonaRoutes } from "./routes/personaRoutes.js";

// Instancia única de rutas con su controlador
const ruta = new PersonaRoutes(new PersonaController());

// Lista de personas con datos realistas y fotos de perfil
const personas = [
  new Persona(
    0,
    "Valentina",
    "Mendoza",
    29,
    "valentina.mendoza@mail.com",
    "https://randomuser.me/api/portraits/women/68.jpg"
  ),
  new Persona(
    1,
    "Julián",
    "Ríos",
    35,
    "julian.rios@mail.com",
    "https://randomuser.me/api/portraits/men/45.jpg"
  ),
  new Persona(
    2,
    "Camila",
    "Torres",
    24,
    "camila.torres@mail.com",
    "https://randomuser.me/api/portraits/women/22.jpg"
  ),
  new Persona(
    3,
    "Martín",
    "Silva",
    41,
    "martin.silva@mail.com",
    "https://randomuser.me/api/portraits/men/12.jpg"
  ),
  new Persona(
    4,
    "Lucía",
    "Alvarez",
    31,
    "lucia.alvarez@mail.com",
    "https://randomuser.me/api/portraits/women/34.jpg"
  )
];

// Agregar las personas al controlador
personas.forEach((persona) => ruta.controller.agregarPersona(persona));

// Configurar rutas y levantar el servidor
ruta.configurarRutas();
ruta.iniciarServidor();
