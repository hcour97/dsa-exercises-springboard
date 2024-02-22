/** insertionSort(arr)
 *  
 *  pseudocode:
 *  pick the second element in the array. (assume the first element is already sorted) Compare it with the element before it. swap if necessary.
 *  move to the next element, if it is in the correct order, iterate through the sorted portion to put it in correct space.
 *  repeat until array is sorted.
 *  return sorted array.
 */
function insertionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

module.exports = insertionSort;