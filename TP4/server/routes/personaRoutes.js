import express from "express";
import cors from "cors";
import { PersonaController } from "../controller/personaController.js";

export class PersonaRoutes {
  static instancia = null;

  constructor(controller) {
    if (PersonaRoutes.instancia) return PersonaRoutes.instancia;

    // Validación del controlador
    if (!(controller instanceof PersonaController)) {
      throw new Error("Debe ser una instancia de PersonaController.");
    }

    // Inicialización
    this.controller = controller;
    this.app = express();
    this.port = 3000;

    // Middleware: CORS y JSON parser
    this._configurarMiddlewares();

    // Singleton
    PersonaRoutes.instancia = this;
  }

  _configurarMiddlewares() {
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      })
    );

    this.app.use(express.json());
  }

  configurarRutas() {
    this.app.get("/personas", (req, res) => {
      const personas = this.controller.getAllPersonas();
      res.json(personas);
    });

  }

  iniciarServidor() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}
