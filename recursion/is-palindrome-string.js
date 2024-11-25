function isPalindrome(str, startIndex = 0, endIndex = str.length - 1) {
  if (startIndex >= endIndex) return true;

  if (str[startIndex] !== str[endIndex]) return false;

  return isPalindrome(str, startIndex + 1, endIndex - 1);
}

console.log(isPalindrome("malayalam"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("arjun"));
console.log(isPalindrome("1000"));
