import TransformPhone from './TransformPhone'

const addBracketsToPhone: TransformPhone = (phone) => {
  const arr = phone.split('')

  const result = [...arr]

  if (result.length >= 3) {
    result.splice(2, 0, '(')
  }

  if (result.length >= 6) {
    result.splice(6, 0, ')')
  }

  return result.join('')
}

export default addBracketsToPhone
