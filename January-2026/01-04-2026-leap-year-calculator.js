/*
Leap Year Calculator
Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

The year is evenly divisible by 4, and
The year is not evenly divisible by 100, unless
The year is evenly divisible by 400.
*/

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  }

  return false;
}

function testCases() {
  console.log(isLeapYear(2024));
  console.log(isLeapYear(2023));
  console.log(isLeapYear(2100));
  console.log(isLeapYear(2000));
  console.log(isLeapYear(1999));
  console.log(isLeapYear(2040));
  console.log(isLeapYear(2026));
}

testCases();
