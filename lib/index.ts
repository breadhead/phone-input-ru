import diff from 'fast-diff'
import * as React from 'react'

import formatNumber from './utils/addSpacesToNumber'

const PHONE_COUNTRY_CODES = 7

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
    value: `${PHONE_COUNTRY_CODES}`,
  } as State

  public onPhoneInputChange = (evt: any) => {

    const { value } = evt.target
    let v = value.substr(1, value.length)
    const prevValue = this.state.value

    let d = null
    try {
      d = diff(v, prevValue)[1][1]
    } catch {
      // pass
    }

    if (['(', ')'].includes(d)) {
      v = v.substr(v, v.length - 1)
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
        value: `+${(this.state.value)}`,
        // name: 'phone',
        type: 'text',
        // required: true,
        // autoFocus: true,
        maxLength: 18,
      },
    )
  }
}

export default PhoneInput
