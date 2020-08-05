/*
August 4
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
*/

var isPowerOfFour = function (num) {
  /*
  I: int
  O: int
  E: 16 => true , 15 => false
  C: solve without loops/ recursion
  */

  // edge cases
  if (num === 1) return true;
  if (num % 2 !== 0) return false;
  if (num <= 0) return false;

  // create an exponent var/ result of raising to power
  let exponent = 0,
    result = 0;
  // while result is less than num, keep raising the power
  while (result < num) {
    result = Math.pow(4, exponent);
    exponent += 1;
  }
  // return if result is equal to num
  return result === num;
};

console.log("0 > ", isPowerOfFour(0));
console.log("1 > ", isPowerOfFour(1));
console.log("2 > ", isPowerOfFour(2));
console.log("4 > ", isPowerOfFour(4));
console.log("5 > ", isPowerOfFour(5));
console.log("16 > ", isPowerOfFour(16));
console.log("256 > ", isPowerOfFour(256));
console.log("2048 > ", isPowerOfFour(2048));
