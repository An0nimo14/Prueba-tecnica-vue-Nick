<template>
  <div class="field-brutal">
    <label v-if="label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <div class="input-wrapper">
      <input
        :type="type"
        :value="modelValue"
        :required="required"
        :placeholder="placeholder"
        :class="{ error: error }"
        @input="handleInput"
        @blur="$emit('blur')"
      />
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: String,
  type: { type: String, default: "text" },
  required: { type: Boolean, default: false },
  placeholder: { type: String, default: "" },
  error: { type: String, default: "" }
});

const emit = defineEmits(['update:modelValue', 'blur']);

function handleInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>

<style scoped>
.field-brutal {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-weight: 900;
  color: var(--black);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.required {
  color: var(--danger);
}

.input-wrapper {
  position: relative;
}

input {
  width: 100%;
  padding: 12px 14px;
  border: 3px solid var(--black);
  font-size: 14px;
  transition: var(--transition);
  font-family: inherit;
  background: var(--white);
  font-weight: 600;
  box-shadow: 4px 4px 0 var(--black);
}

input:hover {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 var(--black);
}

input:focus {
  outline: none;
  background: #fffbea;
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--black);
}

input.error {
  border-color: var(--danger);
  box-shadow: 4px 4px 0 var(--danger);
}

input.error:focus {
  box-shadow: 6px 6px 0 var(--danger);
}

.error-message {
  font-size: 12px;
  color: var(--danger);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

input::placeholder {
  color: #999;
  font-weight: 500;
}
</style>