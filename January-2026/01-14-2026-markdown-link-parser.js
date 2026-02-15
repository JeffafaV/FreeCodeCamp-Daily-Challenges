/*
Markdown Link Parser
Given the string of a link in Markdown, return the equivalent HTML string.

A Markdown image has the following format: "[link_text](link_url)". Return the string of the HTML a tag with the href set to the link_url and the link_text as the tag content.

For example, given "[freeCodeCamp](https://freecodecamp.org/)" return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';
*/

function parseLink(markdown) {
  let textStart = markdown.indexOf("[");
  let textEnd = markdown.indexOf("]");
  let urlStart = markdown.indexOf("(");
  let urlEnd = markdown.indexOf(")");

  let linkText = markdown.slice(textStart + 1, textEnd);
  let linkUrl = markdown.slice(urlStart + 1, urlEnd);

  let markdownStr = `<a href="${linkUrl}">${linkText}</a>`;

  return markdownStr;
}

function testCases() {
  console.log(parseLink("[freeCodeCamp](https://freecodecamp.org/)"));
  console.log(
    parseLink("[Donate to our charity.](https://www.freecodecamp.org/donate/)")
  );
  console.log(
    parseLink(
      "[Contribute to our repository at https://github.com/freeCodeCamp/freeCodeCamp.](https://github.com/freeCodeCamp/freeCodeCamp/)"
    )
  );
}

testCases();
