<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="overlay-brutal" @mousedown="handleOverlayClick">
        <div class="modal-brutal" @mousedown.stop>
          <button class="close-btn-brutal" @click="$emit('close')" type="button">
            ✕
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['close']);

onMounted(() => {
  document.body.classList.add('modal-open');
});

onUnmounted(() => {
  document.body.classList.remove('modal-open');
});

function handleOverlayClick() {
  // No cerrar al hacer clic fuera
}
</script>

<style scoped>
.overlay-brutal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-brutal {
  background: white;
  padding: 32px;
  border: 4px solid var(--black);
  width: 100%;
  max-width: 500px;
  box-shadow: 12px 12px 0 var(--black);
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.close-btn-brutal {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--black);
  border: 3px solid var(--black);
  color: white;
  cursor: pointer;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  font-weight: 900;
  font-size: 18px;
  box-shadow: 3px 3px 0 var(--black);
}

.close-btn-brutal:hover {
  background: var(--danger);
  transform: translate(-2px, -2px);
  box-shadow: 5px 5px 0 var(--black);
}

.close-btn-brutal:active {
  transform: translate(3px, 3px);
  box-shadow: none;
}

/* Animación del modal */
.modal-enter-active,
.modal-leave-active {
  transition: var(--transition);
}

.modal-enter-active .modal-brutal,
.modal-leave-active .modal-brutal {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-brutal,
.modal-leave-to .modal-brutal {
  transform: scale(0.9);
}

.modal-enter-to .modal-brutal,
.modal-leave-from .modal-brutal {
  transform: scale(1);
}

/* Scroll personalizado */
.modal-brutal::-webkit-scrollbar {
  width: 12px;
}

.modal-brutal::-webkit-scrollbar-track {
  background: #f1f1f1;
  border: 2px solid var(--black);
}

.modal-brutal::-webkit-scrollbar-thumb {
  background: var(--black);
  border: 2px solid var(--black);
}

.modal-brutal::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>