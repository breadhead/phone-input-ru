import TransformPhone from './TransformPhone'

const unformatPhone: TransformPhone = (phone) =>
  phone.replace(/\s|\(|\)/g, '')

export default unformatPhone
