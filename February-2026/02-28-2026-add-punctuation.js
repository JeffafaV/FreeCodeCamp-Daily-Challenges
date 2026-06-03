/*
Add Punctuation
Given a string of sentences with missing periods, add a period (".") in the following places:

Before each space that comes immediately before an uppercase letter
And at the end of the string
Return the resulting string.
*/

function addPunctuation(sentences) {
  const sentenceArr = sentences.split(" ");

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i][0].toUpperCase() === sentenceArr[i][0]) {
      sentenceArr[i - 1] += ".";
    }
  }

  let sentenceJoin = sentenceArr.join(" ");
  sentenceJoin += ".";
  return sentenceJoin;
}

function testCases() {
  console.log(addPunctuation("Hello world"));
  console.log(addPunctuation("Hello world It's nice today"));
  console.log(addPunctuation("JavaScript is great Sometimes"));
  console.log(
    addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z"),
  );
  console.log(addPunctuation("Wait.. For it"));
}

testCases();
