/*
Odd or Even?
Given a positive integer, return "Odd" if it's an odd number, and "Even" if it's even.
*/

function oddOrEven(n) {
  if (n % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

function testCases() {
  console.log(oddOrEven(1));
  console.log(oddOrEven(2));
  console.log(oddOrEven(13));
  console.log(oddOrEven(196));
  console.log(oddOrEven(123456789));
}

testCases();
