const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const rutaPersonas = require("./routes/personas.route.js");
const morgan = require("morgan");
dotenv.config();

class Server {
  constructor(template = process.env.TEMPLATE || "ejs") {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();
    //this.cors()
    this.engine(template);
    this.rutas();
  }

  /*   cors () {
    this.app.use(cors())
  } */

  engine(template) {
    try {
      require.resolve(template);

      this.app.set("view engine", template);
      this.app.set("views", "./src/views/" + template);
    } catch (error) {
      console.log("Error al configurar el motor de plantillas:", template);
    }
  }
  middleware() {
    // this.app.use('/', express.static('public'))
    this.app.use(express.json());
    this.app.use(morgan("dev"));
    this.app.use(
      cors({
        origin: "http://localhost:5173",
        credentials: true,
      })
    );
  }

  rutas() {
    this.app.use("/personas", rutaPersonas);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      );
    });
  }
}

if (require.main === module) {
  const server = new Server();
  server.listen();
}

module.exports = Server;
