function power(base, exp) {
  // [2, 4] => 2*2 = 4 => 4 * 2 => 8

  let result = 1;

  if (exp === 0) return 1;
  if (exp === 1) return base;

  while (exp > 0) {
    result = multiply(result, base);
    exp--;
  }

  function multiply(current, number) {
    return current * number;
  }

  return result;
}

// console.log(power(2, 0));
// console.log(power(2, 1));
// console.log(power(2, 2));
// console.log(power(2, 3));
// console.log(power(2, 4));
// console.log(power(2, 5));
// console.log(power(2, 6));
// console.log(power(2, 7));

function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
