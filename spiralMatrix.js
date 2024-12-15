/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];

    let x = 0;
    let y = 0;

    let xMin = 0;
    let yMin = 0;
    let xMax = matrix[0].length - 1;
    let yMax = matrix.length - 1;

    let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    let step = 0;

    const canProceed = () => {
        let newX = x + directions[step][0];
        let newY = y + directions[step][1];

        return newX >= xMin && newX <= xMax && newY >= yMin && newY <= yMax;
    }

    const limitBoundaries = () => {
        if (step === 0) {
            yMin++;;
        } else if (step === 1) {
            xMax--;
        } else if (step === 2) {
            yMax--;
        } else {
            xMin++;
        }
    }

    while (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        result.push(matrix[y][x]);

        if (canProceed()) {
            x = x + directions[step][0];
            y = y + directions[step][1];
        } else {
            limitBoundaries();
            step = (step + 1) % 4;
            x = x + directions[step][0];
            y = y + directions[step][1];
        }

    }

    return result;
};