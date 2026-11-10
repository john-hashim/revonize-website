import type { FormField } from '../data/intake-forms'

export function fieldLimit(field: FormField) {
  return field.maxLength ?? (field.type === 'textarea' ? 3000 : field.type === 'url' ? 2048 : field.type === 'email' ? 254 : 200)
}

export function validateField(field: FormField, values: string[], nativeError = '') {
  const value = values[0]?.trim() ?? ''
  if (field.type === 'checkboxes') {
    return !field.optional && !values.some((item) => field.options.includes(item))
      ? 'Select at least one option.' : ''
  }
  if (!field.optional && !value) return 'Complete this field.'
  if (nativeError) return nativeError
  if (!value) return ''
  if (field.type === 'url' && !/^https?:\/\//i.test(value)) return 'Enter a link starting with https:// or http://.'
  if (value.length > fieldLimit(field)) return `Use ${fieldLimit(field)} characters or fewer.`
  return ''
}
