// given a list of instructors, determine which instructor has the longest name

const instructorWithLongestName = function (instructors) {
  let longestName = instructors[0].name.length;
  let instructorObject = instructors[0];

  for (const instructor in instructors) {
    if (instructors[instructor].name.length > longestName) {
      longestName = instructors[instructor].name.length;
      instructorObject = instructors[instructor];
    }
  }

  return instructorObject;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
