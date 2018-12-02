import isAllowableNumber from '../isAllowableNumber'

describe('isAllowableNumber', () => {
  test('should return false', () => {
    const currentDiff = '7'
    const currentValue = '+7999'

    expect(
      isAllowableNumber(currentDiff, currentValue),
    ).toEqual(false)
  })
  test('should return true', () => {
    const currentDiff = '8'
    const currentValue = '+7'

    expect(
      isAllowableNumber(currentDiff, currentValue),
    ).toEqual(true)
  })
})
