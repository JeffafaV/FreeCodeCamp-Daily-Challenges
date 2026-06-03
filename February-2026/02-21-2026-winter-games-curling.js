/*
2026 Winter Games Day 16: Curling
Given a 5x5 matrix representing the "house" at the end of a curling round, determine which team scores and how many points they score.

The layout:

The center cell (index [2, 2]) is the "button".
The 8 cells directly surrounding the button represent ring 1.
And the 16 cells on the outer edge of the house represent ring 2.
In the given matrix:

"." represents an empty space.
"R" represents a space with a red stone.
"Y" represents a space with a yellow stone.
Scoring rules:

Only one team can score per round.
The team with the stone closest to the button scores.
The scoring team earns 1 point for each of their stones that is closer to the button than the opponent's closest stone.
The lower the ring number, the closer to the center the stone is.
If both teams' closest stone is the same distance from the center, no team scores.
Return:

A string in the format "team: number_of_points". e.g: "R: 2".
or "No points awarded" if neither team scored any points.
For example, given:

[
  [".", ".", "R", ".", "."],
  [".", "R", ".", ".", "."],
  ["Y", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", ".", ".", "."]
]
Return "R: 2". The two red stones in ring 1 are tied for the closest and are the only two stones closer than yellows closest.
*/

function scoreCurling(house) {
  function getDistanceToButton(team, row, col) {
    const center = [2, 2];
    const distance = Math.max(
      Math.abs(row - center[0]),
      Math.abs(col - center[1]),
    );

    let ring = "";
    if (distance === 2) {
      ring = "outer";
    } else if (distance === 1) {
      ring = "inner";
    } else {
      ring = "center";
    }
    return [team, ring];
  }

  const redTeam = {
    name: "R",
    center: 0,
    inner: 0,
    outer: 0,
  };

  const yellowTeam = {
    name: "Y",
    center: 0,
    inner: 0,
    outer: 0,
  };

  for (let r = 0; r < house.length; r++) {
    for (let c = 0; c < house[r].length; c++) {
      if (house[r][c] !== ".") {
        const [team, ring] = getDistanceToButton(house[r][c], r, c);
        if (team === redTeam.name) {
          redTeam[ring] += 1;
        } else if (team === yellowTeam.name) {
          yellowTeam[ring] += 1;
        }
      }
    }
  }

  function getClosest(team) {
    if (team.center > 0) {
      return 0;
    }
    if (team.inner > 0) {
      return 1;
    }
    if (team.outer > 0) {
      return 2;
    }
    return 3;
  }

  const redClosest = getClosest(redTeam);
  const yellowClosest = getClosest(yellowTeam);

  if (redClosest === yellowClosest) {
    return "No points awarded";
  }

  let scoringTeam, opponentClosest;
  if (redClosest < yellowClosest) {
    scoringTeam = redTeam;
    opponentClosest = yellowClosest;
  } else {
    scoringTeam = yellowTeam;
    opponentClosest = redClosest;
  }

  let points = 0;
  if (opponentClosest > 0) {
    points += scoringTeam.center;
  }
  if (opponentClosest > 1) {
    points += scoringTeam.inner;
  }
  if (opponentClosest > 2) {
    points += scoringTeam.outer;
  }

  return `${scoringTeam.name}: ${points}`;
}

function testCases() {
  console.log(
    scoreCurling([
      [".", ".", "R", ".", "."],
      [".", "R", ".", ".", "."],
      ["Y", ".", ".", ".", "."],
      [".", "R", ".", ".", "."],
      [".", ".", ".", ".", "."],
    ]),
  );
  console.log(
    scoreCurling([
      [".", ".", "R", ".", "."],
      [".", ".", ".", ".", "."],
      [".", ".", "Y", ".", "R"],
      [".", ".", "Y", "Y", "."],
      [".", "Y", "R", "R", "."],
    ]),
  );
  console.log(
    scoreCurling([
      [".", "R", "Y", ".", "."],
      ["Y", ".", ".", ".", "."],
      [".", ".", ".", ".", "."],
      [".", "Y", "R", "Y", "."],
      [".", ".", "R", "R", "."],
    ]),
  );
  console.log(
    scoreCurling([
      [".", "Y", "Y", ".", "."],
      ["Y", ".", ".", "R", "."],
      [".", ".", "R", ".", "."],
      [".", ".", "R", "R", "."],
      [".", "Y", "R", "Y", "."],
    ]),
  );
  console.log(
    scoreCurling([
      ["Y", "Y", "Y", "Y", "Y"],
      ["Y", "R", "R", "R", "Y"],
      ["Y", "R", "Y", "R", "Y"],
      ["Y", "R", "R", "R", "Y"],
      ["Y", "Y", "Y", "Y", "Y"],
    ]),
  );
  console.log(
    scoreCurling([
      ["Y", "R", "Y", "R", "Y"],
      ["R", ".", ".", ".", "R"],
      ["Y", ".", ".", ".", "Y"],
      ["R", ".", ".", ".", "R"],
      ["Y", ".", ".", "R", "Y"],
    ]),
  );
}

testCases();
