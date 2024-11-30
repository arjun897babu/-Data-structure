const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (array[mid] === target) return mid;
    else if (array[start] < start) start = mid + 1;
    else start = mid - 1;
  }

  return -1
}

console.log(binarySearch(nums, 5));
