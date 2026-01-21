/*
Resolution Streak
Given an array of arrays, where each sub-array represents a day of your resolution activities and contains three integers: the number of steps walked that day, the minutes of screen time that day, and the number of pages read that day; determine if you are keeping your resolutions.

The first sub-array is day 1, and second day 2, and so on.
A day is considered successful if all three of the following goals are met:

You walked at least 10,000 steps.
You had no more than 120 minutes of screen time.
You read at least five pages.
If all of the given days are successful, return "Resolution on track: N day streak." Where N is the number of successful days.

If one or more days is not a success, return "Resolution failed on day X: N day streak.". Where X is the day number of the first unsuccessful day, and N is the number of successful days before the first unsuccessful day.
*/

function resolutionStreak(days) {
  let streak = 0;
  for (; streak < days.length; streak++) {
    if (
      days[streak][0] < 10000 ||
      days[streak][1] > 120 ||
      days[streak][2] < 5
    ) {
      return `Resolution failed on day ${streak + 1}: ${streak} day streak.`;
    }
  }

  return `Resolution on track: ${streak} day streak.`;
}

function testCases() {
  console.log(
    resolutionStreak([
      [10500, 75, 15],
      [11000, 90, 10],
      [10650, 100, 9],
    ])
  );
  console.log(
    resolutionStreak([
      [10000, 120, 5],
      [10950, 121, 11],
    ])
  );
  console.log(
    resolutionStreak([
      [15000, 110, 8],
      [12300, 60, 13],
      [10100, 120, 4],
      [9000, 125, 4],
    ])
  );
  console.log(
    resolutionStreak([
      [11600, 76, 13],
      [12556, 64, 26],
      [10404, 32, 59],
      [9999, 44, 124],
      [7508, 23, 167],
      [10900, 80, 0],
    ])
  );
  console.log(
    resolutionStreak([
      [10500, 75, 15],
      [11000, 90, 10],
      [10650, 100, 9],
      [10200, 60, 10],
      [10678, 87, 9],
      [12431, 67, 13],
      [10444, 107, 19],
      [10111, 95, 5],
      [10000, 120, 7],
      [11980, 101, 8],
    ])
  );
}

testCases();
