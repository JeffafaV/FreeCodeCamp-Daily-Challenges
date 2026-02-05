/*
Bingo! Letter
Given a number, return the bingo letter associated with it (capitalized). Bingo numbers are grouped as follows:

Letter	Number Range
"B"	1-15
"I"	16-30
"N"	31-45
"G"	46-60
"O"	61-75
*/

function getBingoLetter(n) {
  const bingoRanges = [
    { letter: "B", range: [1, 15] },
    { letter: "I", range: [16, 30] },
    { letter: "N", range: [31, 45] },
    { letter: "G", range: [46, 60] },
    { letter: "O", range: [61, 75] },
  ];

  let letter = "";
  for (let i = 0; i < bingoRanges.length; i++) {
    if (n >= bingoRanges[i].range[0] && n <= bingoRanges[i].range[1]) {
      letter = bingoRanges[i].letter;
    }
  }

  return letter;
}

function testCases() {
  console.log(getBingoLetter(75));
  console.log(getBingoLetter(54));
  console.log(getBingoLetter(25));
  console.log(getBingoLetter(38));
  console.log(getBingoLetter(11));
}

testCases();
