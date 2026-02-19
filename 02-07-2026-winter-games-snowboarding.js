/*
2026 Winter Games Day 2: Snowboarding
Given a snowboarder's starting stance and a rotation in degrees, determine their landing stance.

A snowboarder's stance is either "Regular" or "Goofy".
Trick rotations are multiples of 90 degrees. Positive indicates clockwise rotation, and negative indicate counter-clockwise rotation.
The landing stance flips every 180 degrees of rotation.
For example, given "Regular" and 90, return "Regular". Given "Regular" and 180 degrees, return "Goofy".
*/

function getLandingStance(startStance, rotation) {
  const halfRotations = Math.trunc(rotation / 180);
  let newStance = "";

  if (halfRotations % 2 !== 0) {
    newStance = startStance === "Regular" ? "Goofy" : "Regular";
  } else {
    newStance = startStance;
  }

  return newStance;
}

function testCases() {
  console.log(getLandingStance("Regular", 90));
  console.log(getLandingStance("Regular", 180));
  console.log(getLandingStance("Goofy", -270));
  console.log(getLandingStance("Regular", 2340));
  console.log(getLandingStance("Goofy", 2160));
  console.log(getLandingStance("Goofy", -540));
}

testCases();
