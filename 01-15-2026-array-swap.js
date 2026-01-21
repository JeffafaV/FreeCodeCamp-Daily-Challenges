/*
Array Swap
Given an array with two values, return an array with the values swapped.

For example, given ["A", "B"] return ["B", "A"].
*/

function arraySwap(arr) {
  let temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;

  return arr;
}

function testCases() {
  console.log(arraySwap(["A", "B"]));
  console.log(arraySwap([25, 20]));
  console.log(arraySwap([true, false]));
  console.log(arraySwap(["1", 1]));
}

testCases();
