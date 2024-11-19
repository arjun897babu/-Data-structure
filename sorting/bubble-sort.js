const array = [34,32, 7, 23, 32, 5, 62];
for (let i = 0; i < array.length-1; i++) {
    swapped = false;
     for (let j = 1; j < array.length - i; j++) {
         if (array[j] <array[j-1]) {
            [array[j],array[j-1]]=[array[j-1],array[j]]
            swapped = true;
        }
    }
     if (!swapped) {  
        break;
    }
}

console.log(array)