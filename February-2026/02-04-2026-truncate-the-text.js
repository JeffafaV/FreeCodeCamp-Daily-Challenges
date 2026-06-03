/*
Truncate the Text
Given a string, return it as-is if it's 20 characters or shorter. If it's longer than 20 characters, truncate it to the first 17 characters and append "..." to the end of it (so it's 20 characters total) and return the result.
*/

function truncateText(text) {
  if (text.length <= 20) {
    return text;
  }

  const slicedText = text.slice(0, 17);
  const newText = slicedText + "...";
  return newText;
}

function testCases() {
  console.log(truncateText("Hello, world!"));
  console.log(truncateText("This string should get truncated."));
  console.log(truncateText("Exactly twenty chars"));
  console.log(truncateText("....................."));
}

testCases();
