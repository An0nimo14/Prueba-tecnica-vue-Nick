<template>
  <div class="search-container-brutal">
    <div class="search-box-brutal">
      <svg class="search-icon-brutal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
      <input 
        type="text" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="BUSCAR USUARIO..."
        class="search-input-brutal"
      />
      <Transition name="fade-scale">
        <button 
          v-if="modelValue" 
          @click="$emit('clear')"
          class="clear-btn-brutal"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </Transition>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue', 'clear']);
</script>

<style scoped>
.search-container-brutal {
  margin-bottom: 24px;
}

.search-box-brutal {
  position: relative;
  width: 100%;
}

.search-icon-brutal {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  stroke: var(--black);
  stroke-width: 2.5;
  pointer-events: none;
}

.search-input-brutal {
  width: 100%;
  padding: 16px 50px 16px 50px;
  border: 4px solid var(--black);
  font-size: 14px;
  font-weight: 900;
  font-family: inherit;
  background: var(--white);
  box-shadow: var(--shadow-brutal);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition);
}

.search-input-brutal::placeholder {
  color: #999;
  font-weight: 700;
}

.search-input-brutal:focus {
  outline: none;
  background: #fffbea;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-hover);
}

.clear-btn-brutal {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: var(--black);
  border: 3px solid var(--black);
  color: white;
  cursor: pointer;
  padding: 8px;
  font-weight: 900;
  transition: var(--transition);
  box-shadow: 2px 2px 0 var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-btn-brutal svg {
  width: 16px;
  height: 16px;
  stroke: white;
}

.clear-btn-brutal:hover {
  background: var(--danger);
  transform: translate(-1px, calc(-50% - 1px));
  box-shadow: 3px 3px 0 var(--black);
}

.clear-btn-brutal:active {
  transform: translate(2px, calc(-50% + 2px));
  box-shadow: none;
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>