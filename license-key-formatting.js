function formatLicenseKey(S, K) {
  if (typeof S !== 'string' || K <= 0) {
    throw new Error('Invalid input')
  }

  const cleanString = S.replace(/-/g, '').toUpperCase()

  const groups = []
  for (let i = 0; i < cleanString.length; i += K) {
    groups.push(cleanString.slice(i, i + K))
  }

  return groups.join('-')
}

console.log(formatLicenseKey('5F3Z-2e-9-w', 4))
console.log(formatLicenseKey('2-5g-3-J', 2))
