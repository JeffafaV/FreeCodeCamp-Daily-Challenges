/*
2026 Winter Games Day 7: Speed Skating
Given two arrays representing the lap times (in seconds) for two speed skaters, return the lap number where the difference in lap times is the largest.

The first element of each array corresponds to lap 1, the second to lap 2, and so on.
*/

function largestDifference(skater1, skater2) {
  let lap = 0;
  let biggestDiff = 0;

  for (let i = 0; i < skater1.length; i++) {
    let gap = Math.abs(skater1[i] - skater2[i]);

    if (gap > biggestDiff) {
      biggestDiff = gap;
      lap = i + 1;
    }
  }
  return lap;
}

function testCases() {
  console.log(
    largestDifference(
      [26.11, 25.8, 25.92, 26.23, 26.07],
      [25.93, 25.74, 26.53, 26.11, 26.3],
    ),
  );
  console.log(
    largestDifference(
      [27.04, 25.94, 26.22, 26.07, 26.18],
      [25.59, 25.8, 26.11, 26.01, 26.23],
    ),
  );
  console.log(
    largestDifference(
      [25.82, 25.9, 26.05, 26.0, 26.48],
      [25.85, 25.92, 26.07, 25.98, 25.95],
    ),
  );
  console.log(
    largestDifference(
      [25.88, 26.1, 25.95, 26.05, 26.0],
      [25.9, 26.55, 25.92, 26.03, 26.01],
    ),
  );
  console.log(
    largestDifference(
      [25.92, 26.01, 26.05, 25.88, 26.12],
      [25.95, 26.0, 26.03, 26.45, 26.1],
    ),
  );
}

testCases();
