import assert from 'node:assert/strict'
import test from 'node:test'
import { buildIntakeDraft, validateField } from '../src/lib/intake.ts'
import { academyForm, engineeringForm, serviceOptions } from '../src/data/intake-forms.ts'

const text = { name: 'name', label: 'Name' }
const link = { name: 'link', label: 'Link', type: 'url', optional: true }

test('required text rejects whitespace; optional fields can remain empty', () => {
  assert.ok(validateField(text, [' \n\t ']))
  assert.equal(validateField({ ...text, optional: true }, ['  ']), '')
  assert.equal(validateField(text, ['  Asha  ']), '')
})
test('native email and numeric validation errors are preserved', () => {
  assert.equal(validateField({ ...text, type: 'email' }, ['bad'], 'Invalid email'), 'Invalid email')
  assert.equal(validateField({ ...text, type: 'number' }, ['2026.5'], 'Use a whole year'), 'Use a whole year')
})
test('portfolio links accept web URLs and reject non-web schemes', () => {
  assert.equal(validateField(link, []), '')
  assert.equal(validateField(link, ['https://example.com/design?a=1&b=2']), '')
  assert.ok(validateField(link, ['javascript:alert(1)']))
  assert.ok(validateField(link, ['file:///private/design.step']))
})
test('checkbox groups require an actual offered option', () => {
  const field = { name: 'services', label: 'Services', type: 'checkboxes', options: ['CNC', 'CAD'] }
  assert.ok(validateField(field, []))
  assert.ok(validateField(field, ['Unknown']))
  assert.equal(validateField(field, ['CNC', 'CAD']), '')
})
test('draft preserves selections and multiline Unicode content, omits blank optional fields', () => {
  const data = new FormData()
  data.set('full_name', '  Asha  ')
  data.append('services_required', serviceOptions['precision-manufacturing'][0])
  data.append('services_required', serviceOptions['electronics-engineering'][0])
  data.set('target_material', '   ')
  data.set('project_brief', 'Tolerance ±0.02 mm\nBudget ₹5 lakh & testing')
  const body = buildIntakeDraft(engineeringForm, data)
  assert.match(body, /Primary contact name: Asha\r\n/)
  assert.ok(body.includes('- 5-Axis Precision CNC Machining\r\n- Custom Avionics'))
  assert.ok(body.includes('Tolerance ±0.02 mm\nBudget ₹5 lakh & testing'))
  assert.ok(!body.includes('Target material:'))
  assert.equal(decodeURIComponent(encodeURIComponent(body)), body)
})
test('schemas have unique field names and service preselection matches offered options', () => {
  for (const sections of [engineeringForm, academyForm]) {
    const names = sections.flatMap(({ fields }) => fields.map(({ name }) => name))
    assert.equal(new Set(names).size, names.length)
  }
  const options = engineeringForm.flatMap(({ fields }) => fields).find(({ name }) => name === 'services_required').options
  for (const option of Object.values(serviceOptions).flat()) assert.ok(options.includes(option))
})
