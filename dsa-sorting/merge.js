/** merge(arr1, arr2)
 *  assuming the two arrays are respectively sorted. 
 * 
 * pseudocode:
 *      - create an empty out array
 *      - Start pointers at beginning of each array (a=0, b=0)
 *          - compare a value to b value, if a <= b, add a value to out, increase a pointer. 
 *            otherwise, push b value and increase b pointer.
 *      - when one array is exhausted, push the remaining array to the out array. Return out array.
 * 
 */

function merge(arr1, arr2) {
    out = [];
    a=0;
    b=0;
    while (a < arr1.length && b < arr2.length) {
        if (arr1[a] <= arr2[b]) {
            out.push(arr1[a]);
            a++;
        } else {
            out.push(arr2[b]) 
            b++
        }
    }
    while (a < arr1.length) {
        out.push(arr1[a]);
        a++
    }

    while (b < arr2.length) {
        out.push(arr2[b]);
        b++
    }
    return out;
}

/** mergeSort() 
 *  pseudocode:
 *      - split array into 'bitesize' arrays of 0 or 1 elements.
 *      - merge the splitted arrays until you're left with one array.
 *      - return the final array.
*/



function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left,right);

}

module.exports = { merge, mergeSort};