/*
Markdown Inline Code Parser
Given a string of Markdown that includes one or more inline code blocks, return the equivalent HTML string.

Inline code blocks in Markdown use a single backtick (`) at the start and end of the code block text.

Return the given string with all code blocks converted to HTML code tags.

For example, given the string "Use `let` to declare the variable.", return "Use <code>let</code> to declare the variable.".
*/

function parseInlineCode(markdown) {
  return markdown.replace(/`([^`]+)`/g, "<code>$1</code>");
}

function testCases() {
  console.log(parseInlineCode("Use `let` to declare the variable."));
  console.log(parseInlineCode("Use `let` or `const` to declare a variable."));
  console.log(parseInlineCode("Run `npm install` then `npm start`."));
}

testCases();
