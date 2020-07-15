function selectionSort(array) {
  /*
    i: array
    o: array
    c: none
    e: [3,-2, 10, 2, 18] => [ -2, 2, 3, 12, 18]
  */

  let temp;
  // iterate through array
  for (let i = 0, length = array.length; i < length; i++) {
    // create min value index holder
    let minValue = i;
    // iterate through the values higher than iterator
    for (let k = i + 1; k < length; k++) {
      // check if current value is less than iterator
      if (array[k] < array[minValue]) {
        // update lowest value
        minValue = k;
      }
    }
    // swap lowest value with iterator
    if (minValue !== i) {
      temp = array[i];
      array[i] = array[minValue];
      array[minValue] = temp;
    }
  }

  return array;
}

console.log(selectionSort([33, 103, 3, 726, 200, 984, 198, 764, 9, -3]));
