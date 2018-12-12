import { MIN_VALUE_LENGTH, PHONE_COUNTRY_CODES } from '../index'
import deleteBracketHandler from './deleteBracketHandler'
import getStringsDiff from './getStringsDiff'
import isAllowableNumber from './isAllowableNumber'

const BRACKETS = ['(', ')']

const handleRawPhone = (value: string, prevValue: string) => {
  let currentValue = value.substr(1, value.length)

  const currentDiff = getStringsDiff(currentValue, prevValue)

  if (BRACKETS.includes(currentDiff)) {
    currentValue = deleteBracketHandler(currentValue)
  } else {
    if (isNaN(currentDiff) || isAllowableNumber({
      currentDiff,
      currentValue,
      minValueLength: MIN_VALUE_LENGTH,
      phoneCountryCodes: PHONE_COUNTRY_CODES,
    })) {
      return
    }
  }

  if (currentValue.length === 0) {
    return
  }

  return currentValue
}

export default handleRawPhone
