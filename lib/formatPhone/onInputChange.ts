import deleteBracketHandler from './deleteBracketHandler'
import getStringsDiff from './getStringsDiff'
import isAllowableNumber from './isAllowableNumber'

const BRACKETS = ['(', ')']

const onInputChange = (value: string, prevValue: string) => {
  let currentValue = value.substr(1, value.length)

  const currentDiff = getStringsDiff(currentValue, prevValue)

  if (BRACKETS.includes(currentDiff)) {
    currentValue = deleteBracketHandler(currentValue)
  } else {
    if (isNaN(currentDiff) || isAllowableNumber(currentDiff, currentValue)) {
      return
    }
  }

  if (currentValue.length === 0) {
    return
  }

  return currentValue
}

export default onInputChange
