<template>
  <form class="form" @submit.prevent="submit">
    <BaseInput 
      label="Nombre completo" 
      v-model="form.name"
      placeholder="Ej: Juan Pérez"
      :error="errors.name"
      @blur="validateName"
      required
    />
    
    <BaseInput 
      label="Nombre de usuario" 
      v-model="form.username"
      placeholder="Ej: juanperez"
      :error="errors.username"
      @blur="validateUsername"
      required 
    />
    
    <BaseInput 
      label="Correo electrónico" 
      type="email" 
      v-model="form.email"
      placeholder="Ej: juan@example.com"
      :error="errors.email"
      @blur="validateEmail"
      required 
    />
    
    <BaseInput 
      label="Teléfono" 
      type="tel"
      v-model="form.phone"
      placeholder="Ej: +51 999 999 999"
      :error="errors.phone"
      @blur="validatePhone"
      required 
    />

    <div class="actions">
      <BaseButton variant="secondary" type="button" @click="$emit('cancel')">
        Cancelar
      </BaseButton>
      <BaseButton type="submit"> 
        Guardar usuario
      </BaseButton>
    </div>
  </form>
</template>

<script setup>
import { watch } from 'vue'
import BaseInput from "../ui/BaseInput.vue"
import BaseButton from "../ui/BaseButton.vue"
import { useFormValidation } from '../../composables/useFormValidation'

const props = defineProps({
  user: { type: Object, default: null }
})

const emit = defineEmits(["save", "cancel"])

const {
  form,
  errors,
  validateName,
  validateUsername,
  validateEmail,
  validatePhone,
  validateAll,
  resetForm
} = useFormValidation({
  name: '',
  username: '',
  email: '',
  phone: ''
})

// Cargar datos si estamos editando
if (props.user) {
  resetForm(props.user)
}

// Actualizar formulario si cambia el prop user
watch(() => props.user, (newUser) => {
  if (newUser) {
    resetForm(newUser)
  }
}, { deep: true })

function submit() {
  if (!validateAll()) return
  emit("save", { ...form })
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
}

.actions {
  display: flex;
  gap: 12px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.actions button {
  flex: 1;
}
</style>