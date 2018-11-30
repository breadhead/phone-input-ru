import addBracketsToPhone from '../addBracketsToPhone'

describe('addBracketsToPhone', () => {
  test('should add ( after 2', () => {
    const rawPhone = '123'

    expect(
      addBracketsToPhone(rawPhone),
    ).toEqual('12(3')
  })

  test('should add ( after 2 and ) after 5', () => {
    const rawPhone = '12345'

    expect(
      addBracketsToPhone(rawPhone),
    ).toEqual('12(345)')
  })

  test('should add ( after 2 and ) after 5', () => {
    const rawPhone = '123456'

    expect(
      addBracketsToPhone(rawPhone),
    ).toEqual('12(345)6')
  })
})
