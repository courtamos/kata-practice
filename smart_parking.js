// given a parking map return the coordinates of the first available parking spot for a specific car
// regular cars can only park in R
// small cars can park in R or S
// motorcycles can park in R, S, or M
// UPPERCASE === available
// return [x, y] cooridnates

const whereCanIPark = function (spots, vehicle) {
  for (let y = 0; y < spots.length; y++) {
    // console.log("rows...", spots[y]);
    for (let x = 0; x < spots[y].length; x++) {
      // console.log("cols...", spots[y][x]);
      const spot = spots[y][x];

      if (vehicle === "regular") {
        if (spot === "R") {
          return [x, y];
        }
      } else if (vehicle === "small") {
        if (spot === "R" || spot === "S") {
          return [x, y];
        }
      } else if (vehicle === "motorcycle") {
        if (spot === "R" || spot === "S" || spot === "M") {
          return [x, y];
        }
      }
    }
  }

  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
