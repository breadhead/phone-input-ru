import diff from 'fast-diff'
import * as React from 'react'

import getStringsDiff from 'formatPhone/getStringsDiff'
import formatNumber from './formatPhone'

const PHONE_COUNTRY_CODES = 7

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
    value: `${PHONE_COUNTRY_CODES}`,
  } as State

  public onPhoneInputChange = (evt: any) => {

    if (evt.target.selectionStart <= 2 || evt.target.selectionEnd <= 2) {
      return
    }

    const { value } = evt.target
    let currentValue = value.substr(1, value.length)
    const prevValue = this.state.value

    const currentDiff = getStringsDiff(currentValue, prevValue)

    if (['(', ')'].includes(currentDiff)) {
      // обработаьь удаление скобочки
      currentValue = currentValue.substr(currentValue, currentValue.length - 1)
    } else {
      // это число?
      // это допустимное число? hkfjdh(forbiddenNumbers)(diff) jhfd(['7', '8'])(diff)
      if (isNaN(currentDiff) || (['7', '8'].includes(currentDiff) && currentValue.length === 2)) {
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
