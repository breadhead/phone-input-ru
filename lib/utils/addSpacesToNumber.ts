import flow from 'lodash.flow'

const unformatPhone = (chars) => chars
  .filter((char) => !['(', ')', ' '].includes(char))

const addBracketsInArray = (arr) => {
  const result = [...arr]

  if (result.length >= 3) {
    result.splice(2, 0, '(')
  }

  if (result.length >= 6) {
    result.splice(6, 0, ')')
  }

  return result
}

const addSpaceInArray = (arr, i) => {
  const result = [...arr]

  result.splice(i, 0, ' ')

  return result
}

export default (phone: string) =>
  flow([
    (str) => str.split(''),
    unformatPhone,
    ...[1, 5, 9, 12, 15].map(
      (i) => (a) => addSpaceInArray(a, i),
    ),
    (chars) => chars.join(''),
    (str) => str.trim(),
    (str) => str.split(''),
    (chars) => addBracketsInArray(chars),
    (chars) => chars.join(''),
  ])(phone)
