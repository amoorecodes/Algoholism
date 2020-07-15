const bubbleSort = array => {
  /*
  I: array
  O: array, sorted
  C: none
  E: [3, 7, 4] => [3, 4, 7]
  */

  // declare sorted, set to false
  let sortedArray = array.slice(),
    sorted = false
  // while array is not sorted
  while (!sorted) {
    // declare didSwap set to false
    let didSwap = false
    // iterate through array
    for (let i = 0; i < sortedArray.length - 1; i++) {
      // check if current element is greater than next
      if (sortedArray[i] > sortedArray[i + 1]) {
        // if it is, swap the two
        let temp = sortedArray[i]
        sortedArray[i] = sortedArray[i + 1]
        sortedArray[i + 1] = temp
        // set didSwap to true
        didSwap = true
      }
    }
    // after iteration if we haven't swapped anything
    !didSwap && (sorted = true)
    // we can assume array is sorted
  }
  // return the array
  return sortedArray
}
