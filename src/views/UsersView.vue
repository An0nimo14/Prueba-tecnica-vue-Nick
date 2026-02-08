<template>
  <section class="card">
    <!-- Error Alert -->
    <Transition name="fade-slide">
      <div v-if="error" class="error-alert">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>{{ error }}</span>
        <button @click="error = null" class="close-error">✕</button>
      </div>
    </Transition>

    <!-- Header -->
    <div class="header-brutal">
      <h1 class="title-brutal">GESTIÓN DE USUARIOS</h1>
      <BaseButton 
        @click="openCreateModal"
        icon='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>'
      >
        Nuevo Usuario
      </BaseButton>
    </div>

    <!-- KPIs -->
    <UserKPICards 
      :total-users="users.length"
      :last-user="lastUser"
      :search-query="searchQuery"
      :filtered-count="filteredUsers.length"
    />

    <!-- Buscador -->
    <UserSearchBar 
      v-model="searchQuery"
      @clear="clearSearch"
    />

    <!-- Contenido principal -->
    <Transition name="fade" mode="out-in">
      <!-- Loading -->
      <div v-if="loading" class="loader-container" key="loading">
        <Loader />
        <p class="loading-text-brutal">CARGANDO USUARIOS...</p>
      </div>

      <!-- Empty State -->
      <UserEmptyState
        v-else-if="filteredUsers.length === 0"
        key="empty"
        :message="searchQuery ? 'INTENTA CON OTROS TÉRMINOS' : 'NO HAY USUARIOS REGISTRADOS'"
        :show-clear-button="!!searchQuery"
        @clear="clearSearch"
      />

      <!-- Tabla -->
      <div v-else key="table">
        <TransitionGroup name="list" tag="div">
          <UserTable 
            :key="filteredUsers.map(u => u.id).join(',')"
            :users="filteredUsers" 
            @edit="openEditModal" 
            @delete="openDeleteModal" 
          />
        </TransitionGroup>
      </div>
    </Transition>

    <!-- Modales -->
    <Transition name="modal-fade">
      <UserModal
        v-if="showCreateModal"
        @close="showCreateModal = false"
        @save="handleCreateUser"
      />
    </Transition>

    <Transition name="modal-fade">
      <UserModal
        v-if="showEditModal"
        :user="selectedUser"
        @close="showEditModal = false"
        @save="handleEditUser"
      />
    </Transition>

    <Transition name="modal-fade">
      <ConfirmDelete
        v-if="showDeleteModal"
        :user="selectedUser"
        @cancel="showDeleteModal = false"
        @confirm="handleDeleteUser"
      />
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useUsers } from "../composables/useUsers"
import BaseButton from "../components/ui/BaseButton.vue"
import Loader from "../components/ui/Loader.vue"
import UserTable from "../components/users/UserTable.vue"
import UserModal from "../components/users/UserModal.vue"
import ConfirmDelete from "../components/users/ConfirmDelete.vue"
import UserKPICards from "../components/users/UserKPICards.vue"
import UserSearchBar from "../components/users/UserSearchBar.vue"
import UserEmptyState from "../components/users/UserEmptyState.vue"

const { users, loading, error, fetchUsers, addUser, editUser, deleteUser } = useUsers()

const showCreateModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const selectedUser = ref(null)
const searchQuery = ref("")

const lastUser = computed(() => {
  if (users.value.length === 0) return null
  return users.value.reduce((prev, current) => 
    (current.id > prev.id) ? current : prev
  )
})

const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value

  const query = searchQuery.value.toLowerCase().trim()
  return users.value.filter(user => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.username.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.phone.toLowerCase().includes(query) ||
      user.id.toString().includes(query)
    )
  })
})

onMounted(() => {
  fetchUsers()
})

function clearSearch() {
  searchQuery.value = ""
}

function openCreateModal() {
  showCreateModal.value = true
}

function openEditModal(user) {
  selectedUser.value = { ...user }
  showEditModal.value = true
}

function openDeleteModal(user) {
  selectedUser.value = user
  showDeleteModal.value = true
}

async function handleCreateUser(user) {
  await addUser(user)
  showCreateModal.value = false
}

async function handleEditUser(user) {
  await editUser(selectedUser.value.id, user)
  showEditModal.value = false
  selectedUser.value = null
}

async function handleDeleteUser() {
  await deleteUser(selectedUser.value.id)
  showDeleteModal.value = false
  selectedUser.value = null
}
</script>

<style scoped>
.error-alert {
  background: #fee2e2;
  border: 3px solid #dc2626;
  padding: 16px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 4px 4px 0 #dc2626;
}

.error-alert svg {
  width: 24px;
  height: 24px;
  stroke: #dc2626;
  flex-shrink: 0;
}

.error-alert span {
  flex: 1;
  color: #991b1b;
  font-weight: 700;
  font-size: 14px;
}

.close-error {
  background: #dc2626;
  border: 2px solid #000;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
  font-weight: 900;
  font-size: 16px;
}

.close-error:hover {
  background: #b91c1c;
}

.header-brutal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 4px solid var(--black);
}

.title-brutal {
  margin: 0;
  font-size: 32px;
  font-weight: 900;
  color: var(--black);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 16px;
}

.loading-text-brutal {
  color: var(--black);
  font-size: 14px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Responsive */
@media (max-width: 768px) {
  .header-brutal {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  
  .title-brutal {
    font-size: 24px;
    text-align: center;
  }
}
</style>