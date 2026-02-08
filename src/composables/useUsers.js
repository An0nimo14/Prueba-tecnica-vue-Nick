import { ref } from 'vue'
import * as userService from '../services/userService'

export function useUsers() {
  const users = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchUsers() {
    try {
      loading.value = true
      error.value = null
      users.value = await userService.getUsers()
    } catch (err) {
      error.value = err.message
      console.error('Error fetching users:', err)
    } finally {
      loading.value = false
    }
  }

  async function addUser(user) {
    try {
      error.value = null
      const newUser = await userService.createUser(user)
      users.value.push(newUser)
      return newUser
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  async function editUser(id, userData) {
    try {
      error.value = null
      const updated = await userService.updateUser(id, userData)
      const index = users.value.findIndex(u => u.id === id)
      if (index !== -1) {
        users.value[index] = updated
      }
      return updated
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  async function deleteUser(id) {
    try {
      error.value = null
      await userService.deleteUser(id)
      users.value = users.value.filter(u => u.id !== id)
    } catch (err) {
      error.value = err.message
      throw err
    }
  }

  return {
    users,
    loading,
    error,
    fetchUsers,
    addUser,
    editUser,
    deleteUser
  }
}