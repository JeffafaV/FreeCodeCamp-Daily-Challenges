/*
Integer Hypotenuse
Given two positive integers representing the lengths for the two legs (the two short sides) of a right triangle, determine whether the hypotenuse is an integer.

The length of the hypotenuse is calculated by adding the squares of the two leg lengths together and then taking the square root of that total (a2 + b2 = c2).
*/

function isIntegerHypotenuse(a, b) {
  let firstSq = a ** 2;
  let secSq = b ** 2;

  let sqRoot = Math.sqrt(firstSq + secSq);

  if (Number.isInteger(sqRoot)) {
    return true;
  }

  return false;
}

function testCases() {
  console.log(isIntegerHypotenuse(3, 4));
  console.log(isIntegerHypotenuse(2, 3));
  console.log(isIntegerHypotenuse(5, 12));
  console.log(isIntegerHypotenuse(10, 10));
  console.log(isIntegerHypotenuse(780, 1040));
  console.log(isIntegerHypotenuse(250, 333));
}

testCases();
