const arr = [34, 32, 7, 23, 32, 5, 62];

for (let i = 0; i < arr.length; i++) {
  let last = arr.length - i - 1;
  let minIndex = getMin(arr, i, last); // Find the minimum instead of maximum
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap minimum with current
}

function getMin(arr, i, last) {
  let min = i; // Assume the first element of the unsorted part is the smallest
  for (let j = i; j <= last; j++) {
    if (arr[min] > arr[j]) min = j; // Update min index if a smaller element is found
  }
  return min;
}

console.log(arr);
