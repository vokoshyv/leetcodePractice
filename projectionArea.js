/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let total = 0;

    let maxesXZ = new Array(50).fill(0);
    let maxesYZ = new Array(50).fill(0);

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            let val = grid[y][x];
            if (val > 0) {
                total++;
            }
            if (val > maxesXZ[x]) {
                maxesXZ[x] = val;
            }
            if (val > maxesYZ[y]) {
                maxesYZ[y] = val;
            }
        }
    }

    total += maxesXZ.reduce((i, j) => {
        return i + j;
    }, 0)
    total += maxesYZ.reduce((i, j) => {
        return i + j;
    }, 0)

    return total;
};