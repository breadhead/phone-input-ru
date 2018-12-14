import unformatPhone from '../unformatPhone'

describe('unformatPhone', () => {
  test('should remove "("', () => {
    const rawPhone = '12('

    expect(
      unformatPhone(rawPhone),
    ).toEqual('12')
  })

  test('should remove ")"', () => {
    const rawPhone = '(342'

    expect(
      unformatPhone(rawPhone),
    ).toEqual('342')
  })

  test('should remove " "', () => {
    const rawPhone = '12 56 77'

    expect(
      unformatPhone(rawPhone),
    ).toEqual('125677')
  })

  test('should remove any forbidden chars', () => {
    const rawPhone = '12 (45) 34'

    expect(
      unformatPhone(rawPhone),
    ).toEqual('124534')
  })

})
