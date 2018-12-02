import onInputChange from '../onInputChange'

describe('onInputChange', () => {
  test('should return value', () => {
    const value = '+79991112233'
    const prevValue = '+7999111223'

    expect(
      onInputChange(value, prevValue),
    ).toEqual('79991112233')
  })

  test('should return value', () => {
    const value = '+799'
    const prevValue = '+7999)'

    expect(
      onInputChange(value, prevValue),
    ).toEqual('799')
  })

  test('should return 7', () => {
    const value = '+7'
    const prevValue = '+7(9'

    expect(
      onInputChange(value, prevValue),
    ).toEqual('7')
  })

  test('should return 7', () => {
    const value = '+7'
    const prevValue = '+7'

    expect(
      onInputChange(value, prevValue),
    ).toEqual('7')
  })

  test('should return undefined', () => {
    const value = 'mememe'
    const prevValue = 'nenene'

    expect(
      onInputChange(value, prevValue),
    ).toEqual(undefined)
  })

})
