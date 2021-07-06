// given a string, count the number of vowels that appear
// vowels === a, e, i, o, u

const numberOfVowels = function (data) {
  let numOfVowels = 0;

  for (const letter in data) {
    if (
      data[letter] === "a" ||
      data[letter] === "e" ||
      data[letter] === "i" ||
      data[letter] === "o" ||
      data[letter] === "u"
    ) {
      numOfVowels++;
    }
  }

  return numOfVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
