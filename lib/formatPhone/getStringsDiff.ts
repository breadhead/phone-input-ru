import diff from 'fast-diff'

const getStringsDiff = (currentValue: string, prevValue: string) => {
  let currentDiff = null
  try {
    currentDiff = diff(currentValue, prevValue)[1][1]
  } catch {
    // pass
  }
  return currentDiff
}

export default getStringsDiff
