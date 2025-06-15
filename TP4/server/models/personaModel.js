export class Persona {
  constructor(id, nombre, apellido, edad, email, foto) {
    this._validarId(id);
    this._validarTexto(nombre, "nombre");
    this._validarTexto(apellido, "apellido");
    this._validarEdad(edad);
    this._validarTexto(email, "email");
    this._validarTexto(foto, "foto");

    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.foto = foto;
  }

  // Métodos de validación privada
  _validarId(id) {
    if (!Number.isInteger(id)) {
      throw new Error("El ID debe ser un número entero.");
    }
  }

  _validarEdad(edad) {
    if (!Number.isInteger(edad) || edad <= 0) {
      throw new Error("La edad debe ser un número entero positivo.");
    }
  }

  _validarTexto(campo, nombreCampo) {
    if (typeof campo !== "string" || campo.trim() === "") {
      throw new Error(`El campo "${nombreCampo}" debe ser un texto no vacío.`);
    }
  }

  // Getters
  getId() {
    return this.id;
  }

  getNombre() {
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

  getEdad() {
    return this.edad;
  }

  getEmail() {
    return this.email;
  }

  getFoto() {
    return this.foto;
  }

  // Método para devolver los datos como objeto plano (útil para APIs)
  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      email: this.email,
      foto: this.foto,
    };
  }
}
