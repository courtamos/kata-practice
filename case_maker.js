// given a string convert it to camel case

const camelCase = function (input) {
  let camelCaseInput = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      camelCaseInput.push(input[i + 1].toUpperCase());
      i++;
    } else {
      camelCaseInput.push(input[i]);
    }
  }
  return camelCaseInput.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
