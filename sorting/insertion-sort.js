const array = [34, 32, 7, 23, 32, 5, 62];

for (let i = 1; i < array.length; i++) {
  for (let j = i; j > 0; j--) {
    if (array[j] < array[j - 1]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
    } else {
      break;
    }
  }
}

console.log(array); // Output: [5, 7, 23, 32, 32, 34, 62]
