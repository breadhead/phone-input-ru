import addSpacesToPhone from '../addSpacesToPhone'

describe('addSpacesToPhone', () => {
  test('should add space after 2', () => {
    const position = [2]
    const rawPhone = '123'

    expect(
      addSpacesToPhone(position)(rawPhone),
    ).toEqual('12 3')
  })

  test('should add space after 2 and after 3', () => {
    const position = [2, 4]
    const rawPhone = '12345'

    expect(
      addSpacesToPhone(position)(rawPhone),
    ).toEqual('12 3 45')
  })

  test('should add space after 1', () => {
    const position = [1, 6]
    const rawPhone = '12345'

    expect(
      addSpacesToPhone(position)(rawPhone),
    ).toEqual('1 2345')
  })

  test('shouldnt add spaces', () => {
    const position = [0]
    const rawPhone = '12345'

    expect(
      addSpacesToPhone(position)(rawPhone),
    ).toEqual('12345')
  })
})
