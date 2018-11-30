import flow from 'lodash.flow'

import addBracketsToPhone from './addBracketsToPhone'
import addSpaceToPhone from './addSpaceToPhone'
import unformatPhone from './unformatPhone'

export default (phone: string) =>
  flow([
    unformatPhone,
    ...[1, 5, 9, 12, 15].map(addSpaceToPhone),
    addBracketsToPhone,
  ])(phone)
