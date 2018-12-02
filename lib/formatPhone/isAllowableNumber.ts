import { MIN_VALUE_LENGTH, PHONE_COUNTRY_CODES } from '../index'

const isAllowableNumber = (currentDiff: string, currentValue: string) =>
  PHONE_COUNTRY_CODES.includes(currentDiff) && currentValue.length === MIN_VALUE_LENGTH ? true : false

export default isAllowableNumber
