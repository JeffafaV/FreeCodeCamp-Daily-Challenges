/*
Business Day Count
Given a start date and an end date, return the number of business days between the two.

Given dates are in the format "YYYY-MM-DD".
Weekdays are business days (Monday through Friday).
Weekends are not business days (Saturday and Sunday).
Include both the start and end dates when counting.
*/

function countBusinessDays(start, end) {
  let count = 0;
  const [y1, m1, d1] = start.split("-");
  const [y2, m2, d2] = end.split("-");

  let currentDate = new Date(Date.UTC(y1, m1 - 1, d1));
  const endDate = new Date(Date.UTC(y2, m2 - 1, d2));

  while (currentDate <= endDate) {
    if (currentDate.getUTCDay() !== 0 && currentDate.getUTCDay() !== 6) {
      count++;
    }

    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return count;
}

function testCases() {
  console.log(countBusinessDays("2026-02-24", "2026-02-26"));
  console.log(countBusinessDays("2026-02-24", "2026-02-28"));
  console.log(countBusinessDays("2026-02-21", "2026-03-01"));
  console.log(countBusinessDays("2026-03-08", "2026-03-17"));
  console.log(countBusinessDays("2026-02-24", "2027-02-24"));
}

testCases();
