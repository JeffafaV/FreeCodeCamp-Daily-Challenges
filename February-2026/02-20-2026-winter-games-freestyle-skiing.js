/*
2026 Winter Games Day 15: Freestyle Skiing
Given a trick name consisting of two words, determine if it is a valid freestyle skiing trick name.

A trick is valid if the first word is in the list of valid first words, and the second word is in the list of valid second words.

The two words will be separated by a single space.
Valid first words:

"Misty"
"Ghost"
"Thunder"
"Solar"
"Sky"
"Phantom"
"Frozen"
"Polar"
Valid second words:

"Twister"
"Icequake"
"Avalanche"
"Vortex"
"Snowstorm"
"Frostbite"
"Blizzard"
"Shadow"
*/

function isValidTrick(trickName) {
  const validFirstWord = [
    "Misty",
    "Ghost",
    "Thunder",
    "Solar",
    "Sky",
    "Phantom",
    "Frozen",
    "Polar",
  ];

  const validSecondWord = [
    "Twister",
    "Icequake",
    "Avalanche",
    "Vortex",
    "Snowstorm",
    "Frostbite",
    "Blizzard",
    "Shadow",
  ];

  const [firstWord, secondWord] = trickName.split(" ");

  if (
    validFirstWord.includes(firstWord) &&
    validSecondWord.includes(secondWord)
  ) {
    return true;
  }

  return false;
}

function testCases() {
  console.log(isValidTrick("Polar Vortex"));
  console.log(isValidTrick("Solar Icequake"));
  console.log(isValidTrick("Thunder Blizzard"));
  console.log(isValidTrick("Phantom Frostbite"));
  console.log(isValidTrick("Ghost Avalanche"));
  console.log(isValidTrick("Snowstorm Shadow"));
  console.log(isValidTrick("Solar Sky"));
}

testCases();
