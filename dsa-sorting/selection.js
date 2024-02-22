/** selectionSort()
 * 
 * pseudocode:
 * - Assign the first element to be the smallest value (it's ok if it's actually not) 
 * - compare this to the next item, until you find a smaller number.
 * - if a smaller number is found, reassign it as the new minimum and continue until end of the array.
 * - if the "minimum" is not the value you started with, swap the value and now the beginning of the array is in the correct order. 
 * - repeat until array is sorted.
 * 
 * not ideal, because quadratic runtime
 * */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        } 
        // swap
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    } 
    return arr;
}

module.exports = selectionSort;