TP3 - Sistema de Turnos Medicos  

App en Node.js + Express para manejar turnos medicos. Tiene:  
- API REST (online)  
- Interfaz web (clinica)  

Instalar y correr  

1. Clonar repo o bajar ZIP  
2. Instalar paquetes:  
`npm install`  

3. Crear archivo `.env` con:  
PORT=3001  
JWT_SECRET=secreto  

4. Iniciar:  
`npm run dev`  

Endpoints API  

**Login**  
POST /login  
Body:  
```json  
{"email":"admin@clinica.com","password":"admin12345"}  
```  

**Turnos**  
- GET /api/v1/turnos/:idPaciente  
- DELETE /api/v1/turnos/:idTurno  
- POST /api/v1/turnos (necesita token)  

Header para POST:  
`Authorization: Bearer <token>`  

Rutas Web  

- / Inicio  
- /turnos Listado  
- /turnos/new Nuevo turno  
- /turnos/update/:id Editar turno  
- /pacientes Ver pacientes  
- /pacientes/update/:id Editar paciente  

Integrantes

- Ian Franco Manfredi  
- Nicolas Superi  
- Jeremias Geminiani  
- Aejo Petricio
