// given an array of 2 or more numbers
// find the 2 largest numbers in that array
// sum them together

const sumLargestNumbers = function (data) {
  let largestNum = data[0];
  let secondLargestNum = data[0];

  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNum) {
      largestNum = data[i];
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] >= secondLargestNum) {
      if (data[j] < largestNum) {
        secondLargestNum = data[j];
      }
    }
  }

  return largestNum + secondLargestNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
