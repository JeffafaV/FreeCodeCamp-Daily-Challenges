/*
Perfect Cube Count
Given two integers, determine how many perfect cubes exist in the range between and including the two numbers.

The lower number is not guaranteed to be the first argument.
A number is a perfect cube if there exists an integer (n) where n * n * n = number. For example, 27 is a perfect cube because 3 * 3 * 3 = 27.
*/

function countPerfectCubes(a, b) {
  let totalCubes = 0;
  const min = a <= b ? a : b;
  const max = b > a ? b : a;

  for (let i = min; i <= max; i++) {
    const cubeRoot = Math.cbrt(i);

    if (Number.isInteger(cubeRoot)) {
      totalCubes += 1;
    }
  }

  return totalCubes;
}

function testCases() {
  console.log(countPerfectCubes(3, 30));
  console.log(countPerfectCubes(1, 30));
  console.log(countPerfectCubes(30, 0));
  console.log(countPerfectCubes(-64, 64));
  console.log(countPerfectCubes(9214, -8127));
}

testCases();
