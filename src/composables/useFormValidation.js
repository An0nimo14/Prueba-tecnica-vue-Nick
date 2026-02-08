import { reactive } from 'vue'
import { VALIDATION_RULES } from '../constants/validation'

export function useFormValidation(initialForm) {
  const form = reactive({ ...initialForm })
  const errors = reactive({
    name: '',
    username: '',
    email: '',
    phone: ''
  })

  function validateField(field, value) {
    const rule = VALIDATION_RULES[field]
    
    if (!rule) return true

    // Validación de longitud mínima
    if (rule.minLength && (!value || value.trim().length < rule.minLength)) {
      errors[field] = rule.message
      return false
    }

    // Validación de patrón (email, phone)
    if (rule.pattern) {
      if (field === 'phone') {
        const digitsOnly = value.replace(/\D/g, '')
        if (!rule.pattern.test(value) || digitsOnly.length < rule.minDigits) {
          errors[field] = rule.message
          return false
        }
      } else {
        if (!rule.pattern.test(value)) {
          errors[field] = rule.message
          return false
        }
      }
    }

    errors[field] = ''
    return true
  }

  function validateName() {
    return validateField('name', form.name)
  }

  function validateUsername() {
    return validateField('username', form.username)
  }

  function validateEmail() {
    return validateField('email', form.email)
  }

  function validatePhone() {
    return validateField('phone', form.phone)
  }

  function validateAll() {
    const isNameValid = validateName()
    const isUsernameValid = validateUsername()
    const isEmailValid = validateEmail()
    const isPhoneValid = validatePhone()

    return isNameValid && isUsernameValid && isEmailValid && isPhoneValid
  }

  function resetForm(data = {}) {
    Object.assign(form, initialForm, data)
    Object.keys(errors).forEach(key => errors[key] = '')
  }

  return {
    form,
    errors,
    validateName,
    validateUsername,
    validateEmail,
    validatePhone,
    validateAll,
    resetForm
  }
}