
const reverseString = require('./string-reverse')

function reverseStringBW(text, end = text.length - 1, word = "") {
  if (end < 0) return reverseString(word);
  if (text[end] === "") {
    let reversedWord =word === "" ? "" : reverseString(word);
    return reversedWord + " " + reverseStringBW(text, end - 1);
  }
  return reverseStringBW(text, end - 1, text[end] + word);
}

 console.log(reverseStringBW('iam developer'))