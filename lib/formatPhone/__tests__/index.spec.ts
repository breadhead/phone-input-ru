import formatPhone from '../index'

describe('', () => {
  test('', () => {
    const onlyCode = '7'

    expect(
      formatPhone(onlyCode),
    ).toBe('7')
  })

  test('', () => {
    const partNumber = '79'

    expect(
      formatPhone(partNumber),
    ).toBe('7 (9')
  })

  test('', () => {
    const partNumber = '799'

    expect(
      formatPhone(partNumber),
    ).toBe('7 (99')
  })

  test('', () => {
    const partNumber = '7999'

    expect(
      formatPhone(partNumber),
    ).toBe('7 (999)')
  })

  test('', () => {
    const phone = '79994955033'

    expect(
      formatPhone(phone),
    ).toBe('7 (999) 495 50 33')
  })

  test('', () => {
    const formattedNumber = '7 (999) 495 50'

    expect(
      formatPhone(formattedNumber),
    ).toBe('7 (999) 495 50')
  })
})
