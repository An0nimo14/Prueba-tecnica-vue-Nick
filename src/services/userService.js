const STORAGE_KEY = 'brutal_users_data'
const STORAGE_NEXT_ID = 'brutal_next_id'

let users = []
let nextId = 1

// Cargar datos de localStorage al iniciar
function loadFromLocalStorage() {
  try {
    const savedUsers = localStorage.getItem(STORAGE_KEY)
    const savedNextId = localStorage.getItem(STORAGE_NEXT_ID)
    
    if (savedUsers) {
      users = JSON.parse(savedUsers)
    }
    
    if (savedNextId) {
      nextId = parseInt(savedNextId, 10)
    }
  } catch (error) {
    console.error('Error cargando desde localStorage:', error)
  }
}

// Guardar datos en localStorage
function saveToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
    localStorage.setItem(STORAGE_NEXT_ID, nextId.toString())
  } catch (error) {
    console.error('Error guardando en localStorage:', error)
  }
}

// Simulación de delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export async function getUsers() {
  try {
    // Cargar desde localStorage primero
    loadFromLocalStorage()
    
    // Si no hay usuarios locales, obtener de la API
    if (users.length === 0) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      
      if (!response.ok) {
        throw new Error('Error al obtener usuarios')
      }
      
      const apiUsers = await response.json()
      users = apiUsers
      nextId = Math.max(...users.map(u => u.id)) + 1
      
      // Guardar en localStorage
      saveToLocalStorage()
    }

        if (window.__FORCE_LOADING__) {
      await new Promise(() => {})
    }
    
    await delay(500)
    return [...users]
  } catch (error) {
    console.error('Error en getUsers:', error)
    // Si falla la API, intentar cargar desde localStorage
    loadFromLocalStorage()
    return [...users]
  }
}

export async function createUser(user) {
  try {
    await delay(500)
    const newUser = { ...user, id: nextId++ }
    users.push(newUser)
    saveToLocalStorage()
    return newUser
  } catch (error) {
    console.error('Error en createUser:', error)
    throw error
  }
}

export async function updateUser(id, userData) {
  try {
    await delay(500)
    const index = users.findIndex(u => u.id === id)
    
    if (index === -1) {
      throw new Error('Usuario no encontrado')
    }
    
    users[index] = { ...users[index], ...userData }
    saveToLocalStorage()
    return users[index]
  } catch (error) {
    console.error('Error en updateUser:', error)
    throw error
  }
}

export async function deleteUser(id) {
  try {
    await delay(300)
    users = users.filter(u => u.id !== id)
    saveToLocalStorage()
  } catch (error) {
    console.error('Error en deleteUser:', error)
    throw error
  }
}

// Función para limpiar localStorage (útil para desarrollo)
export function clearLocalStorage() {
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(STORAGE_NEXT_ID)
  users = []
  nextId = 1
}


// Eliminar SOLO los datos nuevos (mantener los de la API)
// localStorage.removeItem('brutal_users_data')
// localStorage.removeItem('brutal_next_id')
// location.reload()


//window.__FORCE_LOADING__ = true      --> activar

//window.__FORCE_LOADING__ = false     --> desactivar
