/*
Scaled Image
Given a string representing the width and height of an image, and a number to scale the image, return the scaled width and height.

The input string is in the format "WxH". For example, "800x600".
The scale is a number to multiply the width and height by.
Return the scaled dimensions in the same "WxH" format.
*/

function scaleImage(size, scale) {
  const xIndex = size.indexOf("x");
  const widthStr = size.slice(0, xIndex);
  const heightStr = size.slice(xIndex + 1);

  const width = Number(widthStr);
  const height = Number(heightStr);

  return `${width * scale}x${height * scale}`;
}

function testCases() {
  console.log(scaleImage("800x600", 2));
  console.log(scaleImage("100x100", 10));
  console.log(scaleImage("1024x768", 0.5));
  console.log(scaleImage("300x200", 1.5));
}

testCases();
