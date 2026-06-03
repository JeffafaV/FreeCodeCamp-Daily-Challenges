/*
Letter and Number Count
Given a string, return a message with the count of how many letters and numbers it contains.

Letters are A-Z and a-z.
Numbers are 0-9.
Ignore all other characters.
Return "The string has X letters and Y numbers.", where "X" is the count of letters and "Y" is the count of numbers. If either count is 1, use the singular form for that item. E.g: "1 letter" instead of "1 letters" and "1 number" instead of "1 numbers".
*/

function countLettersAndNumbers(str) {
  const isLetter = "abcdefghijklmnopqrstuvwxyz";
  const isNumber = "1234567890";

  let letterCount = 0;
  let numberCount = 0;

  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (isLetter.includes(lowerStr[i])) {
      letterCount++;
    } else if (isNumber.includes(lowerStr[i])) {
      numberCount++;
    }
  }

  let letterPlurality = letterCount !== 1 ? "letters" : "letter";
  let numberPlurality = numberCount !== 1 ? "numbers" : "number";

  return `The string has ${letterCount} ${letterPlurality} and ${numberCount} ${numberPlurality}.`;
}

function testCases() {
  console.log(countLettersAndNumbers("helloworld123"));
  console.log(countLettersAndNumbers("Catch 22"));
  console.log(countLettersAndNumbers("A1!"));
  console.log(countLettersAndNumbers("12345"));
  console.log(countLettersAndNumbers("password"));
}

testCases();
