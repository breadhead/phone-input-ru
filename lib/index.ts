import diff from 'fast-diff'
import * as React from 'react'

import formatNumber from './utils/addSpacesToNumber'

const PHONE_COUNTRY_CODES = ['7', '8']

interface Props {
  className?: string
  onChange?: (value) => void
  onBlur?: () => void
  onFocus?: () => void
}

interface State {
  value: string
}

class PhoneInput extends React.Component<Props, State> {

  public state = {
    value: `${PHONE_COUNTRY_CODES[0]}`,
  } as State

  public onPhoneInputChange = (evt: any) => {

    const { value } = evt.target
    const prevValue = this.state.value

    let d = null
    try {
      d = diff(value, prevValue)[1][1]
    } catch {
      // pass
    }

    let v = value
    if (['(', ')'].includes(d)) {
      v = value.substr(value, value.length - 1)
    } else {
      if (isNaN(d)) {
        return
      }
    }

    if (v.length === 0) {
      return
    }

    this.setState(
      { value: formatNumber(v) },
      () => this.props.onChange(this.state.value),
    )
  }

  public render() {
    const { className, onBlur, onFocus } = this.props

    return React.createElement(
      'input',
      {
        className,
        onChange: (this.onPhoneInputChange),
        // onBlur: (onBlur),
        // onFocus: (onFocus),
        value: (this.state.value),
        // name: 'phone',
        type: 'text',
        // required: true,
        // autoFocus: true,
        maxLength: 17,
      },
    )
  }
}

export default PhoneInput
