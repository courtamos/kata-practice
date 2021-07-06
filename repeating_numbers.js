// given a two dimentional array output the correct results
// the first value is the value to repeat
// the second value is the amount of time to repeat the first value

const repeatNumbers = function (data) {
  let stringRepeat = "";
  const stringRepeatArray = [];

  for (const array in data) {
    const string = data[array][0].toString();
    stringRepeat = string.repeat(data[array][1]);
    stringRepeatArray.push(stringRepeat);
  }

  const finalString = stringRepeatArray.join(", ");
  return finalString.toString();
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
