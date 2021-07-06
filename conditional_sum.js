// given an array
// add only the numbers in the array that match a given condition

const conditionalSum = function (values, condition) {
  let sum = 0;

  for (const number in values) {
    if (condition === "even") {
      if (values[number] % 2 === 0) {
        sum += values[number];
      }
    }

    if (condition === "odd") {
      if (values[number] % 2 !== 0) {
        sum += values[number];
      }
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
