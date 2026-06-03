/*
2026 Winter Games Day 3: Biathlon
Given an array of integers, where each value represents the number of targets hit in a single round of a biathlon, return the total penalty distance the athlete must ski.

Each round consists of 5 targets.
Each missed target results in a 150 meter penalty loop.
*/

function calculatePenaltyDistance(rounds) {
  const penalty = 150;
  let totalPenalty = 0;

  for (let i = 0; i < rounds.length; i++) {
    const roundPenalty = 5 - rounds[i];
    totalPenalty += penalty * roundPenalty;
  }
  return totalPenalty;
}

function testCases() {
  console.log(calculatePenaltyDistance([4, 4]));
  console.log(calculatePenaltyDistance([5, 5]));
  console.log(calculatePenaltyDistance([4, 5, 3, 5]));
  console.log(calculatePenaltyDistance([5, 4, 5, 5]));
  console.log(calculatePenaltyDistance([4, 3, 0, 3]));
}

testCases();
