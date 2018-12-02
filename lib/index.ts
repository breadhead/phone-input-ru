import * as React from 'react'

import formatNumber from './formatPhone'
import deleteBracketHandler from './formatPhone/deleteBracketHandler'
import getStringsDiff from './formatPhone/getStringsDiff'
import isAllowableNumber from './formatPhone/isAllowableNumber'

export const MIN_VALUE_LENGTH = 2
export const PHONE_COUNTRY_CODES = ['7', '8']
const BRACKETS = ['(', ')']

interface Props {
  className?: string
  onChange?: (value) => void
  onBlur?: () => void
  onFocus?: () => void
  required?: boolean
  autoFocus?: boolean
}

interface State {
  value: string
}

class PhoneInput extends React.Component<Props, State> {

  public state = {
    value: `${PHONE_COUNTRY_CODES[0]}`,
  } as State

  public onPhoneInputChange = (evt: any) => {
    // const currentValue = onInputChange(value, prevValue)

    if (evt.target.selectionStart <= 2 || evt.target.selectionEnd <= 2) {
      return
    }
    const { value } = evt.target

    let currentValue = value.substr(1, value.length)
    const prevValue = this.state.value

    const currentDiff = getStringsDiff(currentValue, prevValue)

    if (BRACKETS.includes(currentDiff)) {
      currentValue = deleteBracketHandler(currentValue)
    } else {
      if (isNaN(currentDiff) || (isAllowableNumber(currentDiff, currentValue))) {
        return
      }
    }

    if (currentValue.length === 0) {
      return
    }

    this.setState(
      { value: formatNumber(currentValue) },
      () => this.props.onChange(this.state.value),
    )
  }

  public render() {
    const { className, onBlur, onFocus, required, autoFocus } = this.props

    return React.createElement(
      'input',
      {
        className,
        onChange: this.onPhoneInputChange,
        onBlur,
        onFocus,
        value: `+${(this.state.value)}`,
        name,
        type: 'text',
        required,
        autoFocus,
        maxLength: 18,
      },
    )
  }
}

export default PhoneInput
