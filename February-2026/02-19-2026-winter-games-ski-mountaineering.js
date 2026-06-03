/*
2026 Winter Games Day 14: Ski Mountaineering
Given the snow depth and slope of a mountain, determine if there's an avalanche risk.

The snow depth values are "Shallow", "Moderate", or "Deep".
Slope values are "Gentle", "Steep", or "Very Steep".
Return "Safe" or "Risky" based on this table:

"Shallow"	"Moderate"	"Deep"
"Gentle"	"Safe"	"Safe"	"Safe"
"Steep"	"Safe"	"Risky"	"Risky"
"Very Steep"	"Safe"	"Risky"	"Risky"
*/

function avalancheRisk(snowDepth, slope) {
  let risk = "";

  if (snowDepth === "Shallow" || slope === "Gentle") {
    risk = "Safe";
  } else {
    risk = "Risky";
  }

  return risk;
}

function testCases() {
  console.log(avalancheRisk("Shallow", "Gentle"));
  console.log(avalancheRisk("Shallow", "Steep"));
  console.log(avalancheRisk("Shallow", "Very Steep"));
  console.log(avalancheRisk("Moderate", "Gentle"));
  console.log(avalancheRisk("Moderate", "Steep"));
  console.log(avalancheRisk("Moderate", "Very Steep"));
  console.log(avalancheRisk("Deep", "Gentle"));
  console.log(avalancheRisk("Deep", "Steep"));
  console.log(avalancheRisk("Deep", "Very Steep"));
}

testCases();
