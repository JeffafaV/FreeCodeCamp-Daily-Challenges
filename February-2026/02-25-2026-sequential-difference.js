/*
Sequential Difference
Given an array of numbers, return a new array containing the value needed to get from each number to the next number.

For the last number, use 0 since there is no next number.
For example, given [1, 2, 4, 7], return [1, 2, 3, 0].
*/

function findDifferences(arr) {
  let ptr1 = 0;
  let ptr2 = 1;
  const diffArr = [];

  while (ptr2 < arr.length) {
    const diff = arr[ptr2] - arr[ptr1];
    diffArr.push(diff);

    ptr1 = ptr2;
    ptr2++;
  }

  diffArr.push(0);
  return diffArr;
}

function testCases() {
  console.log(findDifferences([1, 2, 4, 7]));
  console.log(findDifferences([10, 15, 19, 22, 24, 25]));
  console.log(findDifferences([25, 20, 16, 13, 11, 10]));
  console.log(findDifferences([0, 1, 2, 2, 3, 3, 4, 5]));
  console.log(
    findDifferences([
      1, 2, 5, 12, 34, -15, -1, 41, 113, -222, -99, -40, 10, -18, -6, -2, -1,
    ]),
  );
}

testCases();
