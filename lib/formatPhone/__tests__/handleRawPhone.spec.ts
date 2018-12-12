import handleRawPhone from '../handleRawPhone'

describe('handleRawPhone', () => {
  test('should return value', () => {
    const value = '+79991112233'
    const prevValue = '+7999111223'

    expect(
      handleRawPhone(value, prevValue),
    ).toEqual('79991112233')
  })

  test('should return value', () => {
    const value = '+799'
    const prevValue = '+7999)'

    expect(
      handleRawPhone(value, prevValue),
    ).toEqual('799')
  })

  test('should return 7', () => {
    const value = '+7'
    const prevValue = '+7(9'

    expect(
      handleRawPhone(value, prevValue),
    ).toEqual('7')
  })

  test('should return 7', () => {
    const value = '+7'
    const prevValue = '+7'

    expect(
      handleRawPhone(value, prevValue),
    ).toEqual('7')
  })

  test('should return undefined', () => {
    const value = 'mememe'
    const prevValue = 'nenene'

    expect(
      handleRawPhone(value, prevValue),
    ).toEqual(undefined)
  })

})
