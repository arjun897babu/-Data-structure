function quickSort(arr, low = 0, high = arr.length - 1) {
  console.log(high);
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivotIndex = median(arr, low, high);
  const pivotElem = arr[pivotIndex];

  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

  let pointer = low;
  for (let i = low; i < high; i++) {
    // Iterate through the subarray
    if (arr[i] < pivotElem) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]]; // Swap smaller elements to the left
      pointer++;
    }
  }

  [arr[pointer], arr[high]] = [arr[high], arr[pointer]];
  return pointer;
}

function median(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  const first = arr[low];
  const middle = arr[mid];
  const end = arr[high];

  if (first > middle !== first > end) {
    return low;
  } else if (middle > first !== middle > end) {
    return mid;
  } else {
    return high;
  }
}

// Example Usage
const arr = [34, 32, 7, 23, 32, 5, 62];
quickSort(arr);
console.log(arr); // Output: [5, 7, 23, 32, 34, 62]
