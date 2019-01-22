import * as React from 'react'

import formatNumber from './formatPhone'
import handleRawPhone from './formatPhone/handleRawPhone'

export const MIN_VALUE_LENGTH = 2
export const PHONE_COUNTRY_CODES = ['7', '8']
const MAX_VALUE_LENGTH = 18

interface Props {
  name: string
  id?: string
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
    const currentValue = handleRawPhone(value, this.state.value)

    if (!!currentValue) {
      this.setState(
        { value: formatNumber(currentValue) },
        () => this.props.onChange(this.state.value),
      )
    }
  }

  public render() {

    return (
      <input
        {...this.props}
        type='text'
        maxLength={MAX_VALUE_LENGTH}
        onChange={this.onPhoneInputChange}
        value={`+${this.state.value}`}
      />
    )
  }
}

export default PhoneInput
