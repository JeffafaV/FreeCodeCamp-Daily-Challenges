/*
Hex Validator
Given a string, determine whether it is a valid CSS hex color. A valid CSS hex color must:

Start with a #, and
be followed by either 3 or 6 hexadecimal characters.
Hexadecimal characters are numbers 0 through 9 and letters a through f (case-insensitive).
*/

function isValidHex(str) {
  const regex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

  return regex.test(str);
}

function testCases() {
  console.log(isValidHex("#123"));
  console.log(isValidHex("#123abc"));
  console.log(isValidHex("#ABCDEF"));
  console.log(isValidHex("#0a1B2c"));
  console.log(isValidHex("#12G"));
  console.log(isValidHex("#1234567"));
  console.log(isValidHex("#12 3"));
  console.log(isValidHex("fff"));
}

testCases();
