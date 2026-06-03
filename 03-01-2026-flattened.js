/*
Flattened
Given an array, determine if it is flat.

An array is flat if none of its elements are arrays.
*/

function isFlat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return false;
    }
  }
  return true;
}

function testCases() {
  console.log(isFlat([1, 2, 3, 4]));
  console.log(isFlat([1, [2, 3], 4]));
  console.log(isFlat([1, 0, false, true, "a", "b"]));
  console.log(isFlat(["a", [0], "b", true]));
  console.log(isFlat([1, [2, [3, [4, [5]]]], 6]));
}

testCases();
