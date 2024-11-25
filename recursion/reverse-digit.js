const num = 1234;
//using recursion
function reverseDigit(digit, num = 0) {
    if (digit === 0) {
    return num;
  }
  num *= 10;
  num += digit % 10;

  return reverseDigit(Math.floor(digit / 10), num);
}

//using loop
function reverseDigit2(num) {
  let result = 0;

  while (num > 0) {
    result *= 10;
    result += num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverseDigit(num));
console.log(reverseDigit2(num));
/**
 
  
  
:result *= 10-----------------> shifts all digits in result one place to the left, making room for the new digit.
:result += num % 10-----------> extracts the last digit of num using num % 10 and appends it to the rightmost position of result.
:num = Math.floor(num / 10)---> removes the last digit from number by dividing it by 10 and truncating.


These steps repeat, progressively transferring digits from num to result in reverse order.
 */