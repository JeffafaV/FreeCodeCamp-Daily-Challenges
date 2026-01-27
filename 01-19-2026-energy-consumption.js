/*
Energy Consumption
Given the number of Calories burned during a workout, and the number of watt-hours used by your electronic devices during that workout, determine which one used more energy.

To compare them, convert both values to joules using the following conversions:

1 Calorie equals 4184 joules.
1 watt-hour equals 3600 joules.
Return:

"Workout" if the workout used more energy.
"Devices" if the device used more energy.
"Equal" if both used the same amount of energy.
*/

function compareEnergy(caloriesBurned, wattHoursUsed) {
  const joulesPerCalorie = 4184;
  const joulesPerWattHour = 3600;

  if (caloriesBurned * joulesPerCalorie > wattHoursUsed * joulesPerWattHour) {
    return "Workout";
  } else if (
    caloriesBurned * joulesPerCalorie <
    wattHoursUsed * joulesPerWattHour
  ) {
    return "Devices";
  }

  return "Equal";
}

function testCases() {
  console.log(compareEnergy(250, 50));
  console.log(compareEnergy(100, 200));
  console.log(compareEnergy(450, 523));
  console.log(compareEnergy(300, 75));
  console.log(compareEnergy(200, 250));
  console.log(compareEnergy(900, 1046));
}

testCases();
