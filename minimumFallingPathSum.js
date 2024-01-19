/**
 * @param {number[][]} matrix
 * @return {number}
 */

const chooseSmallest = (matrix, x, y) => {
    let option1 = Infinity;
    let option2 = Infinity;
    let option3 = Infinity;

    if (x > 0) {
        option1 = matrix[y - 1][x - 1];
    }
    option2 = matrix[y - 1][x];
    if (x < matrix[0].length - 1) {
        option3 = matrix[y - 1][x + 1];
    }

    return Math.min(option1, option2, option3);
}


var minFallingPathSum = function(matrix) {
    let matrixHeight = matrix.length;
    let matrixWidth = matrix[0].length;

    for (let y = 1; y < matrixHeight; y++) {
        for (let x = 0; x < matrixWidth; x++) {
            matrix[y][x] = matrix[y][x] + chooseSmallest(matrix, x, y);
        }
    }

    let result = Infinity;

    for (let x = 0; x < matrixWidth; x++) {
        result = Math.min(result, matrix[matrixHeight - 1][x]);
    }

    return result;
};