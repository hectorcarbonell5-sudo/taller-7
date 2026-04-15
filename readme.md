# 🔐 Sistema de Autenticación de Usuarios (MEAN Stack)

## 📄 Descripción

Aplicación web full-stack que permite el registro e inicio de sesión de usuarios mediante autenticación segura con JSON Web Tokens (JWT).  
El backend expone una API RESTful construida con Express y MongoDB, mientras que el frontend en Angular ofrece una interfaz moderna y responsiva con Bootstrap.

Este proyecto está orientado como prueba técnica o pieza de portafolio para demostrar habilidades en desarrollo full-stack.

---

## 🚀 Tecnologías utilizadas

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- bcrypt (hash de contraseñas)

### Frontend
- Angular
- Bootstrap

---

## ✅ Funcionalidades principales

- ✔️ Registro de usuarios
- ✔️ Inicio de sesión autenticado
- ✔️ Validación de correo y contraseña
- ✔️ Hash seguro de contraseñas
- ✔️ Generación y verificación de JWT
- ✔️ API RESTful para gestión de usuarios
- ✔️ Interfaz responsiva con Bootstrap

---

## 🧠 Arquitectura y características clave

- API REST estructurada por controladores
- Autenticación basada en JWT
- Middleware para protección de rutas
- Encriptación de contraseñas con bcrypt
- Separación clara entre frontend y backend
- Comunicación cliente-servidor mediante HTTP

---

## 📁 Estructura del proyecto
project-root/
│
├── backend/
│ ├── controllers/
│ │ └── user.controller.js
│ ├── models/
│ │ └── user.model.js
│ ├── routes/
│ │ └── user.routes.js
│ ├── middleware/
│ │ └── auth.middleware.js
│ ├── config/
│ │ └── db.js
│ ├── app.js
│ └── server.js
│
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/
│ │ │ │ ├── login/
│ │ │ │ └── register/
│ │ │ ├── services/
│ │ │ │ └── auth.service.ts
│ │ │ └── app.module.ts
│ │ └── index.html
│ └── angular.json
│
└── README.md

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/hectorcarbonell5-sudo/taller-7
cd sistema-autenticacion

cd backend
npm install
npm run dev
cd frontend
npm install
ng serve
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/auth_db
JWT_SECRET=supersecreto
JWT_EXPIRES_IN=1h

| Método | Endpoint         | Descripción            | Auth |
| ------ | ---------------- | ---------------------- | ---- |
| POST   | /users       | Registrar usuario      | ❌    |
| POST   | /users/login | Iniciar sesión         | ❌    |
| GET    | /users       | Obtener usuarios       | ✅    |
| GET    | /users/:id   | Obtener usuario por ID | ✅    |
| PUT    | /users/:id   | Actualizar usuario     | ✅    |
| DELETE | /users/:id   | Eliminar usuario       | ✅    |

👨‍💻 Autor

Héctor Carbonell
Desarrollador Full Stack