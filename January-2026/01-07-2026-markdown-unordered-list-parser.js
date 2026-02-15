/*
Markdown Unordered List Parser
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

Starts with a dash ("-"), followed by
At least one space, and then
The list item text.
The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.
*/

function parseUnorderedList(markdown) {
  const htmlArr = [];
  htmlArr.push("<ul>");

  const markdownArr = markdown.split("\n");
  for (let i = 0; i < markdownArr.length; i++) {
    if (markdownArr[i][2] === " ") {
      markdownArr[i] = markdownArr[i].slice(3);
    } else {
      markdownArr[i] = markdownArr[i].slice(2);
    }
  }

  for (let i = 0; i < markdownArr.length; i++) {
    htmlArr.push("<li>");
    htmlArr.push(markdownArr[i]);
    htmlArr.push("</li>");
  }

  htmlArr.push("</ul>");
  const html = htmlArr.join("");

  return html;
}

function testCases() {
  console.log(parseUnorderedList("- Item A\n- Item B"));
  console.log(parseUnorderedList("-  JavaScript\n-  Python"));
  console.log(
    parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla")
  );
  console.log(parseUnorderedList("- A-1\n- A-2\n- B-1"));
}

testCases();
