import TransformPhone from './TransformPhone'

type CreateTransformPhone = (i: number) => TransformPhone

const addSpaceInArray: CreateTransformPhone = (i) =>
  (phone) => {
    const result = phone.split('')

    result.splice(i, 0, ' ')

    return result.join('').trim()
  }

export default addSpaceInArray
