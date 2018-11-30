import addSpacesToNumber from '../addSpacesToNumber'

describe('', () => {
  test('', () => {
    const onlyCode = '7'

    expect(
      addSpacesToNumber(onlyCode),
    ).toBe('7')
  })

  test('', () => {
    const partNumber = '79'

    expect(
      addSpacesToNumber(partNumber),
    ).toBe('7 (9')
  })

  test('', () => {
    const partNumber = '799'

    expect(
      addSpacesToNumber(partNumber),
    ).toBe('7 (99')
  })

  test('', () => {
    const partNumber = '7999'

    expect(
      addSpacesToNumber(partNumber),
    ).toBe('7 (999)')
  })

  test('', () => {
    const phone = '79994955033'

    expect(
      addSpacesToNumber(phone),
    ).toBe('7 (999) 495 50 33')
  })

  test('', () => {
    const formattedNumber = '7 (999) 495 50'

    expect(
      addSpacesToNumber(formattedNumber),
    ).toBe('7 (999) 495 50')
  })
})
