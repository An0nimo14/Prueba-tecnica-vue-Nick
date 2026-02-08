<template>
  <button :class="['btn-brutal', variant, size]" :type="type" @click="$emit('click')">
    <span v-if="icon" class="icon" v-html="icon"></span>
    <span class="text"><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: "primary" },
  type: { type: String, default: "button" },
  size: { type: String, default: "medium" },
  icon: { type: String, default: "" }
});
</script>

<style scoped>
.btn-brutal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 3px solid var(--black);
  cursor: pointer;
  font-weight: 900;
  font-size: 14px;
  transition: var(--transition);
  font-family: inherit;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;
}

.btn-brutal::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: all 0.6s;
}

.btn-brutal:hover::before {
  left: 100%;
}

.btn-brutal:hover {
  transform: translate(-2px, -2px);
}

.btn-brutal:active {
  transform: translate(3px, 3px);
  box-shadow: none !important;
}

.btn-brutal:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Tamaños */
.small {
  padding: 8px 14px;
  font-size: 12px;
}

.medium {
  padding: 12px 24px;
  box-shadow: 5px 5px 0 var(--black);
}

.medium:hover {
  box-shadow: 7px 7px 0 var(--black);
}

.large {
  padding: 14px 28px;
  font-size: 15px;
  box-shadow: 6px 6px 0 var(--black);
}

.large:hover {
  box-shadow: 8px 8px 0 var(--black);
}

/* Variantes */
.primary {
  background: var(--primary);
  color: white;
  border-color: var(--black);
}

.primary:hover {
  background: var(--primary-dark);
}

.secondary {
  background: var(--white);
  color: var(--black);
  border-color: var(--black);
}

.secondary:hover {
  background: var(--secondary);
  color: white;
}

.danger {
  background: var(--danger);
  color: white;
  border-color: var(--black);
}

.danger:hover {
  background: var(--danger-hover);
}

.outline {
  background: transparent;
  border: 3px solid var(--black);
  color: var(--black);
  box-shadow: 4px 4px 0 var(--black);
}

.outline:hover {
  background: var(--black);
  color: white;
  box-shadow: 6px 6px 0 var(--black);
}

.icon {
  display: flex;
  align-items: center;
}

.text {
  font-weight: 900;
}
</style>