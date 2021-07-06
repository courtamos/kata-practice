// given a string of words, return the string with all whitespace characters converted to '%20'

const urlEncode = function (text) {
  const trimmedText = text.trim();
  const encodedUrl = trimmedText.split(" ").join("%20");

  return encodedUrl;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
