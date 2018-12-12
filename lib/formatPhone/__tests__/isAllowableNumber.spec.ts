import isAllowableNumber from '../isAllowableNumber'
import { MIN_VALUE_LENGTH, PHONE_COUNTRY_CODES } from './../../index'

describe('isAllowableNumber', () => {
  test('should return false', () => {
    const currentDiff = '7'
    const currentValue = '+7999'

    expect(
      isAllowableNumber({
        currentDiff,
        currentValue,
        minValueLength: MIN_VALUE_LENGTH,
        phoneCountryCodes: PHONE_COUNTRY_CODES,
      }),
    ).toEqual(false)
  })
  test('should return true', () => {
    const currentDiff = '8'
    const currentValue = '+7'

    expect(
      isAllowableNumber({
        currentDiff,
        currentValue,
        minValueLength: MIN_VALUE_LENGTH,
        phoneCountryCodes: PHONE_COUNTRY_CODES,
      }),
    ).toEqual(true)
  })
})
