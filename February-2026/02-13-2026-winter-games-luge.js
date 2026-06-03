/*
2026 Winter Games Day 8: Luge
Given an array of five numbers, each representing the time (in seconds) it took a luger to complete a segment of a track, determine which segment had the fastest speed and what that speed was.

The track is divided into the following segments:

Segment 1: 320 meters
Segment 2: 280 meters
Segment 3: 350 meters
Segment 4: 300 meters
Segment 5: 250 meters
The first value in the given array corresponds to the time for segment 1, the second value to segment 2, and so on.

To calculate the speed (in meters per second) for a segment, divide the distance by the time.

Return "The luger's fastest speed was X m/s on segment Y.". Where X is the fastest speed, rounded to two decimal places, and Y is the segment number where the fastest speed occurred.
*/

function getFastestSpeed(times) {
  const distances = [320, 280, 350, 300, 250];

  let fastestSpeed = (distances[0] / times[0]).toFixed(2);

  let segment = 1;
  for (let i = 1; i < times.length; i++) {
    const speed = (distances[i] / times[i]).toFixed(2);
    if (speed > fastestSpeed) {
      fastestSpeed = speed;
      segment = i + 1;
    }
  }

  return `The luger's fastest speed was ${fastestSpeed} m/s on segment ${segment}.`;
}

function testCases() {
  console.log(getFastestSpeed([9.523, 8.234, 10.012, 9.001, 7.128]));
  console.log(getFastestSpeed([9.381, 7.417, 9.912, 8.815, 7.284]));
  console.log(getFastestSpeed([8.89, 7.601, 9.093, 8.392, 6.912]));
  console.log(getFastestSpeed([8.49, 7.732, 10.103, 8.489, 6.84]));
  console.log(getFastestSpeed([8.204, 7.23, 9.673, 7.645, 6.508]));
}

testCases();
