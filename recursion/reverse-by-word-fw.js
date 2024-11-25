const reverseString = require("./string-reverse");

function reverseStringFW(text, start = 0, word = "") {
  if (start === text.length) return reverseString(word);
  if (text[start] === " ") {
    let reversedWord = word === "" ? "" : reverseString(word);
    return reversedWord + " " + reverseStringFW(text, start + 1);
  }
  return reverseStringFW(text, start + 1, word + text[start]);
}

console.log(reverseStringFW("arjun babu"));
 console.log(reverseStringFW("arjun   babu   kj dj"));
