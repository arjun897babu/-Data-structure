const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }
  const mid = Math.floor((start + end) / 2);
  if (array[mid] === target) return mid;
  else if (array[mid] < target)
    return binarySearch(array, target, mid + 1, end);
  else return binarySearch(array, target, start, end - 1);
}

console.log(binarySearch(nums,3))
