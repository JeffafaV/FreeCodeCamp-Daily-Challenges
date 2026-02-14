/*
Digital Detox
Given an array of your login logs, determine whether you have met your digital detox goal.

Each log is a string in the format "YYYY-MM-DD HH:mm:ss".

You have met your digital detox goal if both of the following statements are true:

You logged in no more than once within any four-hour period.
You logged in no more than 2 times on any single day.
*/

function digitalDetox(logs) {
  logs.sort();
  let date = new Date(logs[0]);
  let dayCounter = 1;

  for (let i = 1; i < logs.length; i++) {
    let currentDate = new Date(logs[i]);

    if (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    ) {
      dayCounter += 1;

      if (dayCounter > 2) {
        return false;
      }
    } else {
      dayCounter = 0;
    }

    let tempDate = new Date(date);
    tempDate.setHours(tempDate.getHours() + 4);
    if (tempDate > currentDate) {
      return false;
    }

    date = currentDate;
  }

  return true;
}

function testCases() {
  console.log(digitalDetox(["2026-02-01 08:00:00", "2026-02-01 12:30:00"]));
  console.log(digitalDetox(["2026-02-01 04:00:00", "2026-02-01 07:30:00"]));
  console.log(
    digitalDetox([
      "2026-01-31 08:21:30",
      "2026-01-31 14:30:00",
      "2026-02-01 08:00:00",
      "2026-02-01 12:30:00",
    ]),
  );
  console.log(
    digitalDetox([
      "2026-01-31 10:40:21",
      "2026-01-31 15:19:41",
      "2026-01-31 21:49:50",
      "2026-02-01 09:30:00",
    ]),
  );
  console.log(
    digitalDetox([
      "2026-02-05 10:00:00",
      "2026-02-01 09:00:00",
      "2026-02-03 22:15:00",
      "2026-02-02 12:10:00",
      "2026-02-02 07:15:00",
      "2026-02-04 09:45:00",
      "2026-02-01 16:50:00",
      "2026-02-03 09:30:00",
    ]),
  );
  console.log(
    digitalDetox([
      "2026-02-05 10:00:00",
      "2026-02-01 09:00:00",
      "2026-02-03 22:15:00",
      "2026-02-02 12:10:00",
      "2026-02-02 07:15:00",
      "2026-02-04 01:45:00",
      "2026-02-01 16:50:00",
      "2026-02-03 09:30:00",
    ]),
  );
}

testCases();
