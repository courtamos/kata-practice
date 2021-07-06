// given a number
// create a multiplation table where the larest value in the table is the number given

const multiplicationTable = function (maxValue) {
  let maxValueTable = "\n";

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      maxValueTable += i * j + " ";
    }
    maxValueTable += "\n";
  }

  return maxValueTable;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
