/*
Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.
Here's a list of crops that will be given as input and how much space a single plant takes:

Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters
Return the number of plants that fit in the field, rounded down to the nearest whole plant.
*/

function getNumberOfPlants(fieldSize, unit, crop) {
  let numberOfCrops = 0;

  let crops = {
    corn: {
      name: "corn",
      sqm: 1.0,
    },
    wheat: {
      name: "wheat",
      sqm: 0.1,
    },
    soybeans: {
      name: "soybeans",
      sqm: 0.5,
    },
    tomatoes: {
      name: "tomatoes",
      sqm: 0.25,
    },
    lettuce: {
      name: "lettuce",
      sqm: 0.2,
    },
  };

  let units = {
    acres: {
      name: "acres",
      sqmPerAc: 4046.86,
    },
    hectares: {
      name: "hectares",
      sqmPerHa: 10000,
    },
  };

  if (crop === crops.corn.name) {
    if (unit === units.acres.name) {
      numberOfCrops = (fieldSize * units.acres.sqmPerAc) / crops.corn.sqm;
    } else if (unit === units.hectares.name) {
      numberOfCrops = (fieldSize * units.hectares.sqmPerHa) / crops.corn.sqm;
    }
  } else if (crop === crops.wheat.name) {
    if (unit === units.acres.name) {
      numberOfCrops = (fieldSize * units.acres.sqmPerAc) / crops.wheat.sqm;
    } else if (unit === units.hectares.name) {
      numberOfCrops = (fieldSize * units.hectares.sqmPerHa) / crops.wheat.sqm;
    }
  } else if (crop === crops.soybeans.name) {
    if (unit === units.acres.name) {
      numberOfCrops = (fieldSize * units.acres.sqmPerAc) / crops.soybeans.sqm;
    } else if (unit === units.hectares.name) {
      numberOfCrops =
        (fieldSize * units.hectares.sqmPerHa) / crops.soybeans.sqm;
    }
  } else if (crop === crops.tomatoes.name) {
    if (unit === units.acres.name) {
      numberOfCrops = (fieldSize * units.acres.sqmPerAc) / crops.tomatoes.sqm;
    } else if (unit === units.hectares.name) {
      numberOfCrops =
        (fieldSize * units.hectares.sqmPerHa) / crops.tomatoes.sqm;
    }
  } else if (crop === crops.lettuce.name) {
    if (unit === units.acres.name) {
      numberOfCrops = (fieldSize * units.acres.sqmPerAc) / crops.lettuce.sqm;
    } else if (unit === units.hectares.name) {
      numberOfCrops = (fieldSize * units.hectares.sqmPerHa) / crops.lettuce.sqm;
    }
  }

  return Math.floor(numberOfCrops);
}

function testCases() {
  console.log(getNumberOfPlants(1, "acres", "corn"));
  console.log(getNumberOfPlants(2, "hectares", "lettuce"));
  console.log(getNumberOfPlants(20, "acres", "soybeans"));
  console.log(getNumberOfPlants(3.75, "hectares", "tomatoes"));
  console.log(getNumberOfPlants(16.75, "acres", "tomatoes"));
}

testCases();
