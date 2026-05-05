/*
Matrix Shift
Given a matrix (array of arrays) of numbers and an integer, shift all values in the matrix by the given amount.

A positive shift moves values to the right.
A negative shift moves values to the left.
Values should wrap:

Treat the matrix as one continuous sequence of values.
When a value moves past the end of a row, it continues at the beginning of the next row.
When a value moves past the last position in the matrix, it wraps to the first position.
The same applies in reverse when shifting left.
For example, given:

[
  [1, 2, 3],
  [4, 5, 6]
]
with a shift of 1, move all the numbers to the right one:

[
  [6, 1, 2],
  [3, 4, 5]
]
*/

function shiftMatrix(matrix, shift) {
  let oneDimArr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      oneDimArr.push(matrix[i][j]);
    }
    //matrixStr += matrix[i].join("");
  }

  let remainder = shift % oneDimArr.length;
  let splitIndex = remainder;

  if (splitIndex < 0) {
    splitIndex = Math.abs(splitIndex);
  } else if (splitIndex > 0) {
    splitIndex = oneDimArr.length - splitIndex;
  }

  const firstHalf = oneDimArr.slice(splitIndex);
  const secondHalf = oneDimArr.slice(0, splitIndex);

  const shiftedArr = [...firstHalf, ...secondHalf];

  let shiftedMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    shiftedMatrix[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const strIndex = i * matrix[i].length + j;
      shiftedMatrix[i].push(Number(shiftedArr[strIndex]));
    }
  }

  return shiftedMatrix;
}

function testCases() {
  console.log(
    shiftMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      1,
    ),
  );
  console.log(
    shiftMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      -1,
    ),
  );
  console.log(
    shiftMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      5,
    ),
  );
  console.log(
    shiftMatrix(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      -6,
    ),
  );
  console.log(
    shiftMatrix(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      7,
    ),
  );
  console.log(
    shiftMatrix(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      -54,
    ),
  );
}

testCases();
