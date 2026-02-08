<template>
  <div class="table-brutal-container">
    <div class="table-brutal">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>USUARIO</th>
            <th>EMAIL</th>
            <th>TELÉFONO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td class="td-id">{{ user.id }}</td>
            <td class="td-name">
              <div class="cell-content">{{ user.name }}</div>
            </td>
            <td class="td-username">
              <div class="cell-content">{{ user.username }}</div>
            </td>
            <td class="td-email">
              <div class="cell-content">{{ user.email }}</div>
            </td>
            <td class="td-phone">
              <div class="cell-content">{{ user.phone }}</div>
            </td>
            <td class="actions-cell">
              <div class="actions-wrapper">
                <button @click="$emit('edit', user)" class="action-btn edit-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                </button>
                <button @click="$emit('delete', user)" class="action-btn delete-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  users: {
    type: Array,
    required: true
  }
});

defineEmits(['edit', 'delete']);
</script>

<style scoped>
.table-brutal-container {
  border: 4px solid var(--black);
  background: var(--white);
  box-shadow: var(--shadow-brutal);
  overflow: auto;
  max-height: 600px;
}

.table-brutal {
  min-width: 100%;
  width: max-content;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
}

th {
  background: var(--black);
  color: var(--white);
  padding: 16px 12px;
  text-align: left;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  border-right: 2px solid #444;
  position: sticky;
  top: 0;
  z-index: 10;
  white-space: nowrap;
}

th:last-child {
  border-right: none;
}

td {
  padding: 14px 12px;
  border-bottom: 2px solid #e0e0e0;
  font-weight: 600;
  color: var(--black);
  vertical-align: middle;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background: #fffbea;
}

/* Contenedor para el contenido de las celdas */
.cell-content {
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.4;
}

/* Estilos específicos para columnas */
.td-id {
  font-weight: 900;
  font-family: 'Courier New', monospace;
  color: var(--primary);
  font-size: 14px;
  text-align: center;
  width: 80px;
  min-width: 80px;
  white-space: nowrap;
}

.td-name {
  min-width: 180px;
  max-width: 250px;
}

.td-username {
  min-width: 150px;
  max-width: 200px;
  font-family: monospace;
  font-size: 13px;
}

.td-email {
  min-width: 280px;
  max-width: 400px;
}

.td-phone {
  min-width: 180px;
  max-width: 220px;
  font-family: monospace;
  font-size: 13px;
}

.actions-cell {
  width: 120px;
  min-width: 120px;
  padding: 14px 12px;
  white-space: nowrap;
}

/* Wrapper para los botones */
.actions-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
}

.action-btn {
  width: 36px;
  height: 36px;
  border: 3px solid var(--black);
  background: var(--white);
  cursor: pointer;
  padding: 6px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 0 var(--black);
  flex-shrink: 0;
}

.action-btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 var(--black);
}

.action-btn:active {
  transform: translate(1px, 1px);
  box-shadow: 1px 1px 0 var(--black);
}

.action-btn svg {
  width: 100%;
  height: 100%;
  stroke: var(--black);
}

.edit-btn:hover {
  background: var(--primary);
}

.edit-btn:hover svg {
  stroke: white;
}

.delete-btn:hover {
  background: var(--danger);
}

.delete-btn:hover svg {
  stroke: white;
}

/* Scrollbar personalizado */
.table-brutal-container::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

.table-brutal-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border: 2px solid var(--black);
}

.table-brutal-container::-webkit-scrollbar-thumb {
  background: var(--black);
  border: 2px solid var(--black);
}

.table-brutal-container::-webkit-scrollbar-thumb:hover {
  background: #333;
}

/* Asegurar que el scroll funcione correctamente */
.table-brutal-container {
  overflow-x: auto;
  overflow-y: auto;
}
</style>