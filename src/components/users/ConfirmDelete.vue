<template>
  <BaseModal @close="$emit('cancel')">
    <div class="content">
      <div class="icon-wrapper">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      
      <h3>¿Eliminar usuario?</h3>
      <p class="user-info">
        Estás a punto de eliminar a <strong>{{ user.name }}</strong> 
        <span class="username">({{ user.username }})</span>
      </p>
      <p class="warning">Esta acción no se puede deshacer. El usuario será eliminado permanentemente.</p>

      <div class="actions">
        <BaseButton variant="secondary" type="button" @click="$emit('cancel')">
          Cancelar
        </BaseButton>
        <BaseButton variant="danger" type="button" @click="$emit('confirm')">
          Sí, eliminar
        </BaseButton>
      </div>
    </div>
  </BaseModal>
</template>

<script setup>
import BaseModal from '../ui/BaseModal.vue'
import BaseButton from '../ui/BaseButton.vue'

defineProps({
  user: {
    type: Object,
    required: true
  }
})

defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.icon-wrapper svg {
  color: var(--danger);
}

h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: var(--text);
}

p {
  margin: 0;
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.6;
}

.user-info {
  background: #fef2f2;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #fecaca;
  color: var(--text);
}

.user-info strong {
  color: var(--danger);
  font-weight: 700;
}

.username {
  color: var(--text-light);
  font-family: monospace;
  font-size: 13px;
}

.warning {
  font-size: 13px;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.actions button {
  flex: 1;
}
</style>