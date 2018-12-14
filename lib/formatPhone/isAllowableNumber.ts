interface Props {
  currentDiff: string
  currentValue: string
  minValueLength: number
  phoneCountryCodes: string[]
}

const isAllowableNumber = ({ currentDiff, currentValue, minValueLength, phoneCountryCodes }: Props) =>
  phoneCountryCodes.includes(currentDiff) && currentValue.length === minValueLength

export default isAllowableNumber
