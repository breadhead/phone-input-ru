import deleteBracketHandler from '../deleteBracketHandler'

describe('deleteBracketHandler', () => {
  test('should delete 3', () => {
    const rawPhone = '123'

    expect(
      deleteBracketHandler(rawPhone),
    ).toEqual('12')
  })

  test('should delete 2', () => {
    const rawPhone = '12'

    expect(
      deleteBracketHandler(rawPhone),
    ).toEqual('1')
  })

  test('should return empty string', () => {
    const rawPhone = '1'

    expect(
      deleteBracketHandler(rawPhone),
    ).toEqual('')
  })

  test('should return empty string', () => {
    const rawPhone = ''

    expect(
      deleteBracketHandler(rawPhone),
    ).toEqual('')
  })
})
