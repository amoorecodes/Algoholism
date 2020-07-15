/*
Bubble sort is considered the most basic sorting algorithm in Computer Science. 
It works by starting at the first element of an array and comparing it to the second element:
If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

Notes: it is preeeeeety slow. 
*/

function bubbleSort(array) {
  // your code here
  /*
  i: array
  o: array
  c: none 
  e: [1, 4, 2, 45] => [1, 2, 4, 45]
  */
  // BRUTEFORCE
  let swap = "";
  let length = array.length;
  // iterate through array
  for (let i = 0; i < length - 1; i++) {
    // iterate all but the sorted values
    for (let k = 0; k < length - (i + 1); k++)
      // compare value with the next
      if (array[k] > array[k + 1]) {
        // swap if needed
        swap = array[k];
        array[k] = array[k + 1];
        array[k + 1] = swap;
      }
  }
  return array;
}

console.log(bubbleSort([33, 103, 3, 726, 200, 984, 198, 764, 9, -3]));
