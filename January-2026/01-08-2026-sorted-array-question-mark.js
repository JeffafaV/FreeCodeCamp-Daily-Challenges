/*
Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".
*/

function isSorted(arr) {
  let descending = true;
  let ascending = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      descending = false;
    }

    if (arr[i] > arr[i + 1]) {
      ascending = false;
    }
  }

  if (descending) {
    return "Descending";
  } else if (ascending) {
    return "Ascending";
  }

  return "Not sorted";
}

function testCases() {
  console.log(isSorted([1, 2, 3, 4, 5]));
  console.log(isSorted([10, 8, 6, 4, 2]));
  console.log(isSorted([1, 3, 2, 4, 5]));
  console.log(isSorted([3.14, 2.71, 1.61, 0.57]));
  console.log(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]));
  console.log(isSorted([0.4, 0.5, 0.3]));
}

testCases();
