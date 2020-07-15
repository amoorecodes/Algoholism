function makeAnagram(a, b) {
  // I: string x2
  // O: integer
  // C: as little deletes as possible
  // E: hello, lol => hello - e, hllo - h => 2

  // make copies of strings, establish letterCount
  let small,
    large,
    letterCount = 0
  // go through smaller string
  a.length < b.length
    ? ((small = a.slice()), (large = b.slice()))
    : ((small = b.slice()), (large = a.slice()))

  while (small.length) {
    // if letter is present in larger
    let testLetter = small.slice(-1)
    let testIndex = large.indexOf(testLetter)

    if (testIndex !== -1) {
      // increment count
      letterCount += 1
      // remove letter from larger
      large = large.slice(0, testIndex) + large.slice(testIndex + 1)
    }
    // remove letter from smaller
    small = small.slice(0, -1)
  }
  // calculate deleteCount (sm-count) + (lg-count)
  let deleteCount = a.length - letterCount + (b.length - letterCount)
  // return deleteCount
  return deleteCount
}
