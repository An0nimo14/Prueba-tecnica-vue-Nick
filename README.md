# CRUD de Usuarios – Vue 3 + Vite

Aplicación web desarrollada como **ejercicio técnico** que implementa un **CRUD completo de usuarios** utilizando **Vue 3 (Composition API)** y **Vite**, consumiendo la API pública de JSONPlaceholder.

El proyecto prioriza **buena arquitectura**, **código mantenible**, **experiencia de usuario** y **buenas prácticas** en Vue.js.

---

## 🎯 Objetivo del Ejercicio

Desarrollar una aplicación en Vue.js que permita:

- Listar usuarios obtenidos desde una API pública
- Crear, editar y eliminar usuarios
- Manejar el estado local de los datos
- Mostrar indicadores de carga
- Validar formularios
- Organizar el código de forma clara y reutilizable

API utilizada:

https://jsonplaceholder.typicode.com/users


---

## 🧩 Funcionalidades Implementadas

### 1️⃣ Listado de Usuarios
- Obtiene los usuarios desde la API pública.
- Muestra los datos en una tabla:
  - **name**
  - **username**
  - **email**
  - **phone**
- Los usuarios se almacenan localmente en un **array reactivo**.
- Se muestra un **loader** mientras se cargan los datos.
- Persistencia usando **localStorage** para simular backend.

---

### 2️⃣ Crear Usuario
- Formulario en **modal** para agregar usuarios.
- Validación de:
  - Campos obligatorios
  - Formato válido de correo electrónico
- El usuario:
  - **NO** se envía a la API
  - Se agrega al array local
  - Se le genera un `id` incremental automáticamente

---

### 3️⃣ Editar Usuario
- Modal con los datos actuales del usuario.
- Permite modificar la información.
- Al guardar:
  - Se actualiza el usuario en el array local según su `id`.

---

### 4️⃣ Eliminar Usuario
- Botón “Eliminar” por fila.
- Modal de confirmación antes de eliminar.
- El usuario se elimina del array local al confirmar.

---

## 🏗️ Arquitectura y Buenas Prácticas

- **Vue 3 – Composition API**
- Separación clara de responsabilidades:
  - `views` → vistas principales
  - `components` → componentes reutilizables
  - `composables` → lógica reutilizable (estado, filtros, formularios)
  - `services` → acceso a datos (API / localStorage)
- Código modular y fácil de mantener
- Uso de `script setup`
- Manejo explícito de estado de carga (`loading`)
- Transiciones y feedback visual para mejor UX

---

## 🛠️ Tecnologías Usadas

- Vue 3
- Vite
- JavaScript (ES6+)
- Composition API
- Fetch API
- LocalStorage
- CSS personalizado (sin librerías externas)

---

## ▶️ Instalación y Ejecución

```bash
npm install
npm run dev

La aplicación estará disponible en:

http://localhost:5173
