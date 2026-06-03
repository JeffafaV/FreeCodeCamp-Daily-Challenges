/*
Sum the Letters
Given a string, return the sum of its letters.

Letters are A-Z in uppercase or lowercase
Letter values are: "A" = 1, "B" = 2, ..., "Z" = 26
Uppercase and lowercase letters have the same value.
Ignore all non-letter characters.
*/

function sumLetters(str) {
  const upperStr = str.toUpperCase();
  let total = 0;
  const asciiOffset = 64;
  const upperRegex = /^[A-Z]$/;

  for (let i = 0; i < upperStr.length; i++) {
    const char = upperStr[i];
    if (upperRegex.test(char)) {
      const asciiValue = char.charCodeAt(0) - asciiOffset;
      total += asciiValue;
    }
  }
  return total;
}

function testCases() {
  console.log(sumLetters("Hello"));
  console.log(sumLetters("freeCodeCamp"));
  console.log(sumLetters("The quick brown fox jumps over the lazy dog."));
  console.log(
    sumLetters(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex nisl, pretium eu varius blandit, facilisis quis eros. Vestibulum ante ipsum primis in faucibus orci.",
    ),
  );
  console.log(sumLetters("</404>"));
}

testCases();
