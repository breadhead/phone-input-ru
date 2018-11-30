import TransformPhone from './TransformPhone'

type CreateTransformPhone = (positions: number[]) => TransformPhone

const addSpacesToPhone: CreateTransformPhone = (positions) =>
  (phone) => {
    const result = phone.split('')

    for (const i of positions) {
      result.splice(i, 0, ' ')
    }

    return result.join('').trim()
  }

export default addSpacesToPhone
