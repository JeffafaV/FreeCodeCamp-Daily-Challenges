/*
Flatten the Array
Given an array that contains nested arrays, return a new array with all values flattened into a single, one-dimensional array. Retain the original order of the items in the arrays.
*/

function flatten(arr) {
  const flattenArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArr.push(...flatten(arr[i]));
    } else {
      flattenArr.push(arr[i]);
    }
  }

  return flattenArr;
}

function testCases() {
  console.log(flatten([1, [2, 3], 4]));
  console.log(flatten([5, [4, [3, 2]], 1]));
  console.log(flatten(["A", [[[["B"]]]], "C"]));
  console.log(
    flatten([
      ["L", "M", "N"],
      ["O", ["P", "Q", ["R", ["S", ["T", "U"]]]]],
      "V",
      ["W", ["X", ["Y", ["Z"]]]],
    ]),
  );
  console.log(
    flatten([
      ["red", ["blue", ["green", ["yellow", ["purple"]]]]],
      "orange",
      ["pink", ["brown"]],
    ]),
  );
}

testCases();
