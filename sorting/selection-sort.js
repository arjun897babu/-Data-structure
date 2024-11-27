const arr = [34, 32, 7, 23, 32, 5, 62];

for (let i = 0; i < arr.length; i++) {
  let last = arr.length - i - 1;
  let maxIndex = getMax(arr, i, last); 
  [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]; 
}

function getMax(arr, i, last) {
  let max = i; 
  for (let j = i+1; j <= last; j++) {
    if (arr[max] > arr[j]) max = j; 
  }
  return max;
}

console.log(arr);
