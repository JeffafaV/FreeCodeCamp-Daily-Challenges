/*
Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
*/

function nthFibonacci(n) {
  let prev = 0;
  let next = 1;

  if (n < 2) {
    return n;
  }

  for (let i = 2; i < n; i++) {
    let sum = prev + next;
    prev = next;
    next = sum;
  }
  return next;
}

function testCases() {
  console.log(nthFibonacci(4));
  console.log(nthFibonacci(10));
  console.log(nthFibonacci(15));
  console.log(nthFibonacci(40));
  console.log(nthFibonacci(75));
}

testCases();
