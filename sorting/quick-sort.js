function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let leftArray = [];
  let rightArray = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else if (arr[i] > pivot) {
      rightArray.push(arr[i]);
    }
  }

  return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}
