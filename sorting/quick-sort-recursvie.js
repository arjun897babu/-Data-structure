function quickSort(arr, low = 0, high = arr.length - 1) {
    console.log(high)
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1); // Sort left partition
    quickSort(arr, pivotIndex + 1, high); // Sort right partition
  }
  return arr;
}

function partition(arr, low, high) {
  const pivotIndex = median(arr, low, high); // Get median pivot
  const pivot = arr[pivotIndex];

  // Move the pivot to the end
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

  let pointer = low;
  for (let i = low; i < high; i++) {
    // Iterate through the subarray
    if (arr[i] < pivot) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]]; // Swap smaller elements to the left
      pointer++;    
    }
  }

  // Place pivot in its correct position
  [arr[pointer], arr[high]] = [arr[high], arr[pointer]];
  return pointer; // Return pivot index
}

function median(arr, low, high) {
  const mid = Math.floor((low + high) / 2);
  const first = arr[low];
  const middle = arr[mid];
  const end = arr[high];

  // Compare and find the median of the three
  if (first > middle !== first > end) {
    return low; // First is the median
  } else if (middle > first !== middle > end) {
    return mid; // Middle is the median
  } else {
    return high; // End is the median
  }
}

// Example Usage
const arr = [34,32, 7, 23, 32, 5, 62];
console.log(quickSort(arr)); // Output: [5, 7, 23, 32, 34, 62]


