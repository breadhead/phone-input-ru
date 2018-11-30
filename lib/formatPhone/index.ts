import flow from 'lodash.flow'

import addBracketsToPhone from './addBracketsToPhone'
import addSpacesToPhone from './addSpacesToPhone'
import unformatPhone from './unformatPhone'

export default (phone: string) =>
  flow([
    unformatPhone,
    addSpacesToPhone([1, 5, 9, 12, 15]),
    addBracketsToPhone,
  ])(phone)
