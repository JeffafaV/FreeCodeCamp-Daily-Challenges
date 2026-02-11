/*
Letters-Numbers
Given a string containing only letters and numbers, return a new string where a hyphen (-) is inserted every time the string switches from a letter to a number, or a number to a letter.
*/

function separateLettersAndNumbers(str) {
  const strArr = str.split("");
  const newArr = [];

  let charType = isNaN(Number(strArr[0])) ? false : true;
  newArr.push(strArr[0]);

  for (let i = 1; i < strArr.length; i++) {
    let currentCharType = isNaN(Number(strArr[i])) ? false : true;

    if (currentCharType !== charType) {
      newArr.push("-");
      charType = currentCharType;
    }

    newArr.push(strArr[i]);
  }

  return newArr.join("");
}

function testCases() {
  console.log(separateLettersAndNumbers("ABC123"));
  console.log(separateLettersAndNumbers("Route66"));
  console.log(separateLettersAndNumbers("H3LL0W0RLD"));
  console.log(separateLettersAndNumbers("a1b2c3d4"));
}

testCases();
