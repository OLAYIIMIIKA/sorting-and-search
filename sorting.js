

  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // pick element arr[i]
        let current = arr[i];

        // find the correct position for arr[i] in the sorted sequence
        let k = i - 1;
        while (k >= 0 && arr[k] > current) {
            arr[k + 1] = arr[k];
            k--;
        }

        // insert arr[i] into the correct position
        arr[k + 1] = current;
    }
    return arr;
}

console.log(insertionSort([5, 2, 9, 1, 5, 6]));

// This implementation sorts the array in ascending order,
//  if you want to sort descending order you can change the comparison operator '>' with '<'