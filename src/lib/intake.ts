import type { FormField, FormSection } from '../data/intake-forms'

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

export function buildIntakeDraft(sections: FormSection[], data: FormData) {
  return sections.map(({ title, fields }) => [
    title,
    ...fields.flatMap(({ name, label, type }) => {
      const values = data.getAll(name).map((value) => String(value).trim()).filter(Boolean)
      if (!values.length) return []
      return type === 'checkboxes'
        ? [`${label}:\r\n${values.map((value) => `- ${value}`).join('\r\n')}`]
        : [`${label}: ${values[0]}`]
    }),
  ].join('\r\n')).join('\r\n\r\n')
}
