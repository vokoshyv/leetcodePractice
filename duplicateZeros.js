/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let arrIndex = 0;
    let copyIndex = 0;

    let copy = arr.slice();

    while (arrIndex < arr.length) {
        if (copy[copyIndex] === 0) {
            arr[arrIndex] = 0;
            arrIndex++;
            if (arrIndex < arr.length) {
                arr[arrIndex] = 0;
                arrIndex++;
            }
        } else {
            arr[arrIndex] = copy[copyIndex];
            arrIndex++;
        }
        copyIndex++;
    }
};