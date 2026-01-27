/*
Class Average
Given an array of exam scores (numbers), return the average score in form of a letter grade according to the following chart:

Average Score	Letter Grade
97-100	"A+"
93-96	"A"
90-92	"A-"
87-89	"B+"
83-86	"B"
80-82	"B-"
77-79	"C+"
73–76	"C"
70-72	"C-"
67-69	"D+"
63-66	"D"
60–62	"D-"
below 60	"F"
Calculate the average by adding all scores in the array and dividing by the total number of scores.
*/

function getAverageGrade(scores) {
  const gradeScale = [
    { min: 97, grade: "A+" },
    { min: 93, grade: "A" },
    { min: 90, grade: "A-" },
    { min: 87, grade: "B+" },
    { min: 83, grade: "B" },
    { min: 80, grade: "B-" },
    { min: 77, grade: "C+" },
    { min: 73, grade: "C" },
    { min: 70, grade: "C-" },
    { min: 67, grade: "D+" },
    { min: 63, grade: "D" },
    { min: 60, grade: "D-" },
    { min: 0, grade: "F" },
  ];

  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  const average = total / scores.length;

  for (let i = 0; i < gradeScale.length; i++) {
    if (average >= gradeScale[i].min) {
      return gradeScale[i].grade;
    }
  }
}

function testCases() {
  console.log(getAverageGrade([92, 91, 90, 94, 89, 93]));
  console.log(getAverageGrade([84, 89, 85, 100, 91, 88, 79]));
  console.log(getAverageGrade([63, 69, 65, 66, 71, 64, 65]));
  console.log(getAverageGrade([97, 98, 99, 100, 96, 97, 98, 99, 100]));
  console.log(getAverageGrade([75, 100, 88, 79, 80, 78, 64, 60]));
  console.log(getAverageGrade([45, 48, 50, 52, 100, 54, 56, 58, 59]));
}

testCases();
