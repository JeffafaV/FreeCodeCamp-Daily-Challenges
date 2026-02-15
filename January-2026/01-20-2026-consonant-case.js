/*
Consonant Case
Given a string representing a variable name, convert it to consonant case using the following rules:

All consonants should be converted to uppercase.
All vowels (a, e, i, o, u in any case) should be converted to lowercase.
All hyphens (-) should be converted to underscores (_).
*/

function toConsonantCase(str) {
  const upperCaseStr = str.toUpperCase();
  const strArr = upperCaseStr.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (
      strArr[i] === "A" ||
      strArr[i] === "E" ||
      strArr[i] === "I" ||
      strArr[i] === "O" ||
      strArr[i] === "U"
    ) {
      strArr[i] = strArr[i].toLowerCase();
    }
    if (strArr[i] === "-") {
      strArr[i] = "_";
    }
  }

  const consonantCase = strArr.join("");
  return consonantCase;
}

function testCases() {
  console.log(toConsonantCase("helloworld"));
  console.log(toConsonantCase("HELLOWORLD"));
  console.log(toConsonantCase("_hElLO-WOrlD-"));
  console.log(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_"));
}

testCases();
