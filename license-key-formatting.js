function formatLicenseKey(S, K) {
  if (typeof S !== 'string' || K <= 0) {
    throw new Error('Invalid input')
  }

  const cleanString = S.replace(/-/g, '').toUpperCase()

  const firstGroupSize = cleanString.length % K || K

  const groups = []
  let index = 0

  if (firstGroupSize !== K) {
    groups.push(cleanString.slice(0, firstGroupSize))
    index = firstGroupSize
  }

  for (let i = index; i < cleanString.length; i += K) {
    groups.push(cleanString.slice(i, i + K))
  }

  return groups.join('-')
}

console.log(formatLicenseKey('5F3Z-2e-9-w', 4))
console.log(formatLicenseKey('2-5g-3-J', 2))
