/*
2026 Winter Games Day 17: Closing Day
Given a 2D array of medal winners, return a medal count for each country as a CSV string.

In the given array, each sub-array represents a single event: [gold_winner, silver_winner, bronze_winner]

The returned CSV string should have the following format, with the first line being headers:

Country,Gold,Silver,Bronze,Total
country_name,gold_count,silver_count,bronze_count,total_medals
Separate new lines with the new line character ("\n").
Do not include spaces around commas or at the end of lines.
Sort the returned CSV by gold medal count, highest first. If two countries have the same gold medal count, sort the tied ones alphabetically.
For example, given:

[
  ["USA", "CAN", "NOR"],
  ["NOR", "USA", "CAN"],
  ["USA", "NOR", "SWE"]
]
Return:

"Country,Gold,Silver,Bronze,Total\nUSA,2,1,0,3\nNOR,1,1,1,3\nCAN,0,1,1,2\nSWE,0,0,1,1"
Which looks like this when printed:

Country,Gold,Silver,Bronze,Total
USA,2,1,0,3
NOR,1,1,1,3
CAN,0,1,1,2
SWE,0,0,1,1
*/

function countMedals(winners) {
  const countryMedals = {};

  for (const [gold, silver, bronze] of winners) {
    if (!countryMedals[gold]) {
      countryMedals[gold] = { gold: 0, silver: 0, bronze: 0 };
    }
    if (!countryMedals[silver]) {
      countryMedals[silver] = { gold: 0, silver: 0, bronze: 0 };
    }
    if (!countryMedals[bronze]) {
      countryMedals[bronze] = { gold: 0, silver: 0, bronze: 0 };
    }

    countryMedals[gold].gold += 1;
    countryMedals[silver].silver += 1;
    countryMedals[bronze].bronze += 1;
  }

  const countryStats = Object.entries(countryMedals).map(
    ([country, medals]) => {
      const total = medals.gold + medals.silver + medals.bronze;

      return { country, ...medals, total };
    },
  );

  countryStats.sort((a, b) => {
    if (a.gold !== b.gold) {
      return b.gold - a.gold;
    }
    return a.country.localeCompare(b.country);
  });

  const header = "Country,Gold,Silver,Bronze,Total";
  const rows = countryStats.map((row) => {
    return `${row.country},${row.gold},${row.silver},${row.bronze},${row.total}`;
  });

  const csvStr = [header, ...rows].join("\n");
  return csvStr;
}

function testCases() {
  console.log(
    countMedals([
      ["USA", "CAN", "NOR"],
      ["NOR", "USA", "CAN"],
      ["USA", "NOR", "SWE"],
    ]),
  );
  console.log(countMedals([["NOR", "SWE", "FIN"]]));
  console.log(
    countMedals([
      ["ITA", "CHN", "CHN"],
      ["JPN", "ITA", "JPN"],
    ]),
  );
  console.log(
    countMedals([
      ["USA", "CAN", "NOR"],
      ["GER", "FRA", "ITA"],
      ["JPN", "KOR", "CHN"],
      ["SWE", "FIN", "NOR"],
      ["CAN", "USA", "SWE"],
      ["FRA", "GER", "ITA"],
    ]),
  );
  console.log(
    countMedals([
      ["ESP", "ITA", "FRA"],
      ["ITA", "ESP", "GER"],
      ["NOR", "SWE", "FIN"],
      ["FIN", "NOR", "SWE"],
      ["USA", "CAN", "MEX"],
      ["CAN", "USA", "MEX"],
      ["JPN", "KOR", "CHN"],
      ["CHN", "JPN", "KOR"],
    ]),
  );
  console.log(
    countMedals([
      ["USA", "CAN", "GER"],
      ["NOR", "SWE", "FIN"],
      ["USA", "NOR", "SWE"],
      ["GER", "FRA", "ITA"],
      ["JPN", "KOR", "CHN"],
      ["USA", "GER", "CAN"],
      ["SWE", "NOR", "FIN"],
      ["CAN", "USA", "NOR"],
      ["FRA", "GER", "ITA"],
      ["JPN", "CHN", "KOR"],
      ["SWE", "FIN", "NOR"],
      ["GER", "ITA", "FRA"],
    ]),
  );
}

testCases();
