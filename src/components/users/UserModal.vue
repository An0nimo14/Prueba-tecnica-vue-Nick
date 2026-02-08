<template>
  <BaseModal @close="$emit('close')">
    <h3 class="text-center">{{ user ? 'Editar usuario' : 'Nuevo usuario' }}</h3>
    <UserForm 
      :user="user"
      @save="save" 
      @cancel="$emit('close')" 
    />
  </BaseModal>
</template>

<script setup>
import BaseModal from "../ui/BaseModal.vue";
import UserForm from "./UserForm.vue";

defineProps({
  user: { type: Object, default: null }
});

const emit = defineEmits(["save", "close"]);

function save(userData) {
  emit("save", userData);
}
</script>