<template>
  <div class="empty-state-brutal">
    <div class="empty-icon-brutal">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
    <BaseButton 
      v-if="showClearButton" 
      @click="$emit('clear')" 
      variant="outline"
    >
      Limpiar búsqueda
    </BaseButton>
  </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';

defineProps({
  title: {
    type: String,
    default: 'NO SE ENCONTRARON USUARIOS'
  },
  message: {
    type: String,
    required: true
  },
  showClearButton: {
    type: Boolean,
    default: false
  }
});

defineEmits(['clear']);
</script>

<style scoped>
.empty-state-brutal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  gap: 16px;
  text-align: center;
  border: 4px solid var(--black);
  box-shadow: var(--shadow-brutal);
  background: var(--white);
}

.empty-icon-brutal {
  width: 64px;
  height: 64px;
  stroke: var(--danger);
  stroke-width: 1.5;
}

.empty-state-brutal h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 900;
  color: var(--black);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.empty-state-brutal p {
  margin: 0;
  color: var(--text-light);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
}
</style>