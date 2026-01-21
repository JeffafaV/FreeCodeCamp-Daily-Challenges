/*
vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.
*/

function vowelCase(str) {
  const lowercase = str.toLowerCase();
  const lcArray = lowercase.split("");

  for (let i = 0; i < lcArray.length; i++) {
    if (
      lcArray[i] === "a" ||
      lcArray[i] === "e" ||
      lcArray[i] === "i" ||
      lcArray[i] === "o" ||
      lcArray[i] === "u"
    ) {
      lcArray[i] = lcArray[i].toUpperCase();
    }
  }

  const vowelCaseStr = lcArray.join("");
  return vowelCaseStr;
}

function testCases() {
  console.log(vowelCase("vowelcase"));
  console.log(vowelCase("coding is fun"));
  console.log(vowelCase("HELLO, world!"));
  console.log(vowelCase("git cherry-pick"));
  console.log(vowelCase("HEAD~1"));
}

testCases();
