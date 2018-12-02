import getStringsDiff from '../getStringsDiff'

describe('getStringsDiff', () => {
  test('should return 4', () => {
    const firstString = '1234'
    const secondString = '123'

    expect(
      getStringsDiff(firstString, secondString),
    ).toEqual('4')
  })

  test('should return 234', () => {
    const firstString = '1234'
    const secondString = '234'

    expect(
      getStringsDiff(firstString, secondString),
    ).toEqual('234')
  })

  test('should return 23', () => {
    const firstString = '1234'
    const secondString = '14'

    expect(
      getStringsDiff(firstString, secondString),
    ).toEqual('23')
  })
})
