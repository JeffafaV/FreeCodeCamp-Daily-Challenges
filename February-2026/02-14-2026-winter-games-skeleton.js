/*
2026 Winter Games Day 9: Skeleton
Given a string representing the curves on a skeleton track, determine the difficulty of the track.

The given string will only consist of the letters:

"L" for a left turn
"R" for a right turn
"S" for a straight segment
Each direction change adds 15 points (an "L" followed by an "R" or vice versa).

All other curves add 5 points each (all other "L" or "R" characters).

Straight segments add 0 points.

The difficulty of the track is based on the total score. Return:

"Easy" if the total is 0 - 100
"Medium" if the total is 101-200
"Hard" if the total is over 200
*/

function getDifficulty(track) {
  let lastCurve = track[0];
  let score = 0;

  for (let i = 1; i < track.length; i++) {
    const curve = track[i];
    if (
      (lastCurve === "L" && curve === "R") ||
      (lastCurve === "R" && curve === "L")
    ) {
      score += 15;
    } else if (curve !== "S") {
      score += 5;
    }

    lastCurve = curve;
  }

  if (score > 200) {
    return "Hard";
  } else if (score > 100) {
    return "Medium";
  }

  return "Easy";
}

function testCases() {
  console.log(getDifficulty("SLSLLSRRLSRLRL"));
  console.log(getDifficulty("LLRSLRLRSLLRLRSLRRLRSRLLS"));
  console.log(getDifficulty("SRRRRLSLLRLRSSRLSRL"));
  console.log(getDifficulty("LSRLRLSRLRLSLRSLRLLRLSRLRLRSL"));
  console.log(getDifficulty("SLLSSLRLSLSLRSLSSLRL"));
  console.log(getDifficulty("SRSLSRSLSRRSLSRSRSLSRLSRSR"));
}

testCases();
