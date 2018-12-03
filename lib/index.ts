import * as React from 'react'

import formatNumber from './formatPhone'
import onInputChange from './formatPhone/onInputChange'

export const MIN_VALUE_LENGTH = 2
export const PHONE_COUNTRY_CODES = ['7', '8']
const MAX_VALUE_LENGTH = 18

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

  public static defaultProps = {
    onChange: () => null,
  }

  public state = {
    value: PHONE_COUNTRY_CODES[0],
  } as State

  public onPhoneInputChange = (evt: React.SyntheticEvent) => {
    const { value } = evt.target as HTMLInputElement
    const currentValue = onInputChange(value, this.state.value)

    if (!!currentValue) {
      this.setState(
        { value: formatNumber(currentValue) },
        () => this.props.onChange(this.state.value),
      )
    }
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
        value: `+${this.state.value}`,
        name,
        type: 'text',
        required,
        autoFocus,
        maxLength: MAX_VALUE_LENGTH,
      },
    )
  }
}

export default PhoneInput
