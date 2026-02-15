/*
Odd or Even Day
Given a timestamp (number of milliseconds since the Unix epoch), return:

"odd" if the day of the month for that timestamp is odd.
"even" if the day of the month for that timestamp is even.
For example, given 1769472000000, a timestamp for January 27th, 2026, return "odd" because the day number (27) is an odd number.
*/

function oddOrEvenDay(timestamp) {
  const date = new Date(timestamp);
  const day = date.getUTCDate();

  return day % 2 === 0 ? "even" : "odd";
}

function testCases() {
  console.log(oddOrEvenDay(1769472000000));
  console.log(oddOrEvenDay(1769444440000));
  console.log(oddOrEvenDay(6739456780000));
  console.log(oddOrEvenDay(1));
  console.log(oddOrEvenDay(86400000));
}

testCases();
