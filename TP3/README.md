# TP3 - Sistema de Turnos Medicos

## Descripcion

Aplicacion desarrollada con Node.js y Express para la gestion de turnos medicos. Cuenta con una API REST y una interfaz web para uso interno de la clinica. Permite login, creacion y eliminacion de turnos, y gestion de pacientes.

## Tecnologias utilizadas

- Node.js  
- Express  
- JWT  
- dotenv  
- EJS  

## Instalacion

1. Clonar el repositorio o descargar el ZIP  
2. Instalar las dependencias:  
npm install
3. Crear un archivo `.env` con el siguiente contenido:  
PORT=3001
JWT_SECRET=secreto
4. Iniciar el servidor:  

## Endpoints de la API

### Login

**POST** `/login`  
Body:
```json
{
"email": "admin@clinica.com",
"password": "admin12345"
}
Turnos
GET /api/v1/turnos/:idPaciente

DELETE /api/v1/turnos/:idTurno

POST /api/v1/turnos (requiere token)

Header requerido para POST:
Authorization: Bearer <token>
Rutas Web
/ Inicio

/turnos Listado de turnos

/turnos/new Nuevo turno

/turnos/update/:id Editar turno

/pacientes Ver pacientes

/pacientes/update/:id Editar paciente

Integrantes
Ian Franco Manfredi

Nicolas Superi

Jeremias Geminiani

Alejo Petricio
