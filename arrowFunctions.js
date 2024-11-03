/**
 * Rewrite the following `greet` function as an arrow function
 */
let greet = (name) => {
  return `Hello ${name}`;
}

/**
 * sum(a, b):
 * - revieces two numbers
 * - returns their sum
 * - write it as an arrow sfunction
 */

  let sum = (a, b) => {
    return a+b;
  }


/**
 * square(n):
 * - receives a number n
 * - returns the square of the number
 * - write it as an arrow function
 *
 * e.g.
 * square(4) -> 16
 * sqaure(10) -> 100
 */
let square = (n) => {
  return n*n;
}

/**
 * 🌶️🌶️
 * sqaures(numbers):
 * - receives an array numbers
 * - returns an array of the squares of the numbers
 * - write it as an arrow function
 *
 * e.g.
 * squares([1, 2, 3]) -> [1, 4, 9]
 */
let squares = (numbers) => {
  sqrs = [];
  for (x=0; x<numbers.length; x++){
    sqrs.push(numbers[x]*numbers[x]);
  } 
  console.log(sqrs);
  return sqrs
}

module.exports = {
  greet,
  sum,
  square,
  squares,
};
