function reverseString(text, index = text.length - 1) {
  if (index === 0) {
    return text[index];
  }

  return text[index]+reverseString(text,index-1)
}


module.exports = reverseString;
