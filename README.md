# CRUD de Usuarios – Vue 3 + Vite

Aplicación web desarrollada como **ejercicio técnico** para el puesto de **Desarrollador Front End**, que implementa un **CRUD completo de usuarios** utilizando **Vue 3 (Composition API)** y **Vite**, consumiendo una API pública únicamente para la carga inicial de datos.

El enfoque del proyecto está en el **manejo de estado local**, **arquitectura limpia**, **componentización** y **buenas prácticas en Vue.js**.

---

## 🚀 Link de la aplicación web en Producción:
🔗 https://nick-atuncar-vue.netlify.app/

---

## 🎯 Objetivo del Ejercicio

Desarrollar una aplicación en **Vue.js 3** que permita gestionar usuarios mediante un CRUD completo, cumpliendo los siguientes puntos:

- Consumir una API pública para obtener los usuarios
- Listar usuarios en una tabla
- Crear, editar y eliminar usuarios
- Manejar el estado local de los datos
- Mostrar indicadores de carga
- Validar formularios
- Organizar el código de forma clara y reutilizable

### API utilizada
https://jsonplaceholder.typicode.com/users

> ⚠️ **Nota:**  
> La API se utiliza solo para obtener los datos iniciales (GET).  
> Las operaciones de crear, editar y eliminar se manejan **exclusivamente en el estado local**, tal como lo indica el enunciado de la prueba.

---

## 🧩 Funcionalidades Implementadas

### 1️⃣ Listado de Usuarios
- Obtención de usuarios desde la API pública.
- Visualización en una tabla con los campos:
  - **name**
  - **username**
  - **email**
  - **phone**
- Los datos se almacenan en un **array reactivo local**.
- Se muestra un **loader** mientras se cargan los datos desde la API.

---

### 2️⃣ Crear Usuario
- Formulario presentado en un **modal**.
- Validaciones:
  - Campos obligatorios
  - Formato correcto de correo electrónico
- El nuevo usuario:
  - No se envía a la API
  - Se agrega al array local
  - Se genera un `id` incremental automáticamente, basado en los usuarios existentes

---

### 3️⃣ Editar Usuario
- Modal con los datos actuales del usuario.
- Permite actualizar la información.
- Al guardar:
  - Se actualiza el usuario correspondiente en el array local según su `id`.

---

### 4️⃣ Eliminar Usuario
- Botón “Eliminar” en cada fila de la tabla.
- Modal de confirmación antes de eliminar.
- El usuario se elimina del array local una vez confirmada la acción.

---

## 🏗️ Arquitectura y Decisiones Técnicas

- **Vue 3 – Composition API**
- Uso de `script setup` para una sintaxis más clara y concisa.
- Separación de responsabilidades:
  - `views` → vistas principales
  - `components` → componentes reutilizables de UI y negocio
  - `composables` → lógica reutilizable (estado, CRUD, loading)
  - `services` → acceso a datos (API)
- Manejo explícito del estado de carga (`loading`)
- Componentes desacoplados que se comunican mediante `props` y `emit`
- Enfoque en legibilidad, mantenibilidad y escalabilidad

---

## 🛠️ Tecnologías Utilizadas

- Vue 3
- Vite
- JavaScript (ES6+)
- Composition API
- Fetch API
- CSS personalizado (sin librerías externas)

---

## ▶️ Instalación y Ejecución local

Clonar el repositorio:
```bash
git clone <url-del-repositorio>

npm install
npm run dev

La aplicación estará disponible en:

http://localhost:5173
