/*
String Mirror
Given a string, return a new string that consists of the given string with a reversed copy of itself appended to the end of it.
*/

function mirror(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  str += reversedStr;

  return str;
}

function testCases() {
  console.log(mirror("freeCodeCamp"));
  console.log(mirror("RaceCar"));
  console.log(mirror("helloworld"));
  console.log(mirror("The quick brown fox..."));
}

testCases();
