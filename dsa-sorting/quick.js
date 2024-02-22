/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
    const pivotValue = arr[startIdx];
    let pivotIdx = startIdx
    
    for (let i = startIdx + 1; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            pivotIdx++;

        // swap positions (next to each other)
        [arr[i], arr[pivotIdx]] = [arr[pivotIdx], arr[i]];
        }

    }
    // the pivot is still at arr[startIdx]
    // so swap the value at the start index with the value at the pivot index:
    [arr[startIdx], arr[pivotIdx]] = [arr[pivotIdx], arr[startIdx]];

    return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx < rightIdx) {
        // partition array left and right
        const pivotIdx = pivot(arr, leftIdx, rightIdx)

        // call quicksort on the left and right pieces
        // this will keep sorting them until there is nothing left to sort
        quickSort(arr, leftIdx, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, rightIdx);
    }
    return arr;
}

module.exports = {pivot, quickSort};