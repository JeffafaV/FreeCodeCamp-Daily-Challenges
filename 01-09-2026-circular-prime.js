/*
Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.
*/

function isCircularPrime(n) {
  const nStr = String(n);
  const arrNums = [];
  arrNums.push(nStr);

  for (let i = nStr.length - 1; i > 0; i--) {
    const right = nStr.slice(i);
    const left = nStr.slice(0, i);
    const shiftedStr = right + left;
    arrNums.push(shiftedStr);
  }

  for (let i = 0; i < arrNums.length; i++) {
    const num = parseInt(arrNums[i], 10);

    if (num % 2 === 0) {
      return false;
    }

    for (let k = 3; k <= Math.sqrt(num); k += 2) {
      if (num % k === 0) {
        return false;
      }
    }
  }
  return true;
}

function testCases() {
  console.log(isCircularPrime(197));
  console.log(isCircularPrime(23));
  console.log(isCircularPrime(13));
  console.log(isCircularPrime(89));
  console.log(isCircularPrime(1193));
}

testCases();
