export const VALIDATION_RULES = {
  name: {
    minLength: 3,
    message: 'El nombre debe tener al menos 3 caracteres'
  },
  username: {
    minLength: 3,
    message: 'El usuario debe tener al menos 3 caracteres'
  },
  email: {
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Ingresa un correo electrónico válido'
  },
  phone: {
    pattern: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3,9}$/,
    minDigits: 9,
    message: 'Ingresa un número de teléfono válido (mínimo 9 dígitos)'
  }
}