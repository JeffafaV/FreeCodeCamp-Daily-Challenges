/*
2026 Winter Games Day 12: Bobsled
Given an array representing the weights of the athletes on a bobsled team and a number representing the weight of the bobsled, determine whether the team is eligible to race.

The length of the array determines the team size: 1, 2 or 4 person teams.
All given weight values are in kilograms (kg).
The bobsled (sled by itself) must have a minimum weight of:

162 kg for a 1-person team
170 kg for a 2-person team
210 kg for a 4-person team
The total weight of the bobsled (athletes plus sled) must not exceed:

247 kg for a 1-person team
390 kg for a 2-person team
630 kg for a 4-person team
Return "Eligible" if the team meets all the requirements, or "Not Eligible" if the team fails to meet one or more of the requirements.
*/

function checkEligibility(athleteWeights, sledWeight) {
  let teamWeight = 0;
  const teamSize = athleteWeights.length;
  let eligible = true;

  for (let i = 0; i < athleteWeights.length; i++) {
    teamWeight += athleteWeights[i];
  }

  const totalWeight = teamWeight + sledWeight;

  if (teamSize === 1) {
    if (sledWeight < 162 || totalWeight > 247) {
      eligible = false;
    }
  } else if (teamSize === 2) {
    if (sledWeight < 170 || totalWeight > 390) {
      eligible = false;
    }
  } else if (teamSize === 4) {
    if (sledWeight < 210 || totalWeight > 630) {
      eligible = false;
    }
  }

  return eligible ? "Eligible" : "Not Eligible";
}

function testCases() {
  console.log(checkEligibility([78], 165));
  console.log(checkEligibility([80], 160));
  console.log(checkEligibility([80], 170));
  console.log(checkEligibility([85, 90], 170));
  console.log(checkEligibility([85, 95], 168));
  console.log(checkEligibility([112, 97], 185));
  console.log(checkEligibility([110, 102, 90, 106], 222));
  console.log(checkEligibility([106, 99, 90, 88], 205));
  console.log(checkEligibility([106, 99, 103, 96], 227));
}

testCases();
