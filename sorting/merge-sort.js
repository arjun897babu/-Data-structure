const nums = [1, 3, 3, 2, 4, 5, 22, 41];

function mergeSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(array, start, mid);
  mergeSort(array, mid + 1, end);

  return merge(array, start, end, mid);
}

function merge(array, start, end, mid) {
  const temp = [];
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      temp[k++] = array[i++];
    } else {
      temp[k++] = array[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = array[i++];
  }
  while (j <= end) {
    temp[k++] = array[j++];
  }

  for (let l = 0; l < temp.length; l++) {
    array[start + l] = temp[l];
  }

  return array;
}

console.log(mergeSort(nums));
