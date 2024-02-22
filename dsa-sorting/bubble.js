/** bubbleSort(arr) sorts items in an array from least to greatest. 
 * 
 *  pseudocode:
 *  Loop with i from end of the array, to the beginning
 *      - Loop with j from the beginning until j - 1.
 *      - If arr[j] > arr[j + 1] swap them.
 *  Return the sorted array.
*/

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j=0; j < arr.length - 1; j++) { // arr.length - 1 because you are removing one for each value that has already been sorted.
            if (arr[j] > arr[j + 1]) { // compare values next to each other
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } 
        } 
    }
    return arr;
}

module.exports = bubbleSort;