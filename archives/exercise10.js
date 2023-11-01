/* https://projecteuler.net/problem=10 */

let t0 = performance.now();

const target = 2000000;
let primesArr = [];
// Test if the number is a prime number
function isPrime(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    number % i === 0 ? count++ : count;
    if (count > 2) {
      break;
    }
  }
  return count > 2 ? false : true;
}

function primesArray(target) {
  // Test each number from two to the last number less than 2,000,000
  for (let i = 2; i < target; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
  }
}

primesArray(target);
console.log(primesArr.reduce((acc, curr) => acc + curr, 0));
let t1 = performance.now();

console.log(`Time: ${t1 - t0}`);
