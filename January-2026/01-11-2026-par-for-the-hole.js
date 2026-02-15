/*
Par for the Hole
Given two integers, the par for a golf hole and the number of strokes a golfer took on that hole, return the golfer's score using golf terms.

Return:

"Hole in one!" if it took one stroke.
"Eagle" if it took two strokes less than par.
"Birdie" if it took one stroke less than par.
"Par" if it took the same number of strokes as par.
"Bogey" if it took one stroke more than par.
"Double bogey" if took two strokes more than par.
*/

function golfScore(par, strokes) {
  let score = "";

  if (strokes === 1) {
    score = "Hole in one!";
    return score;
  }

  switch (strokes) {
    case par - 2:
      score = "Eagle";
      break;

    case par - 1:
      score = "Birdie";
      break;
    case par:
      score = "Par";
      break;
    case par + 1:
      score = "Bogey";
      break;
    case par + 2:
      score = "Double bogey";
      break;
  }

  return score;
}

function testCases() {
  console.log(golfScore(3, 3));
  console.log(golfScore(4, 3));
  console.log(golfScore(3, 1));
  console.log(golfScore(5, 7));
  console.log(golfScore(4, 5));
  console.log(golfScore(5, 3));
}

testCases();
