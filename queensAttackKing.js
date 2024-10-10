/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */

const isValid = (x, y) => {
    if (x < 0 || y < 0) {
        return false;
    }
    if (x >= 8 || y >= 8) {
        return false;
    }
    return true;
}

const checkForQueen = (queenSet, x, y) => {
    let coord = `${x}_${y}`;
    return queenSet.has(coord);
}

var queensAttacktheKing = function (queens, king) {
    let queenSet = new Set();

    for (let queen of queens) {
        let coord = `${queen[0]}_${queen[1]}`;
        queenSet.add(coord);
    }

    const result = [];

    let kingX = king[0];
    let kingY = king[1];

    // north
    let x = kingX;
    let y = kingY - 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        y--;
    }

    // south
    x = kingX;
    y = kingY + 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        y++;
    }

    // east
    x = kingX + 1;
    y = kingY;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x++;
    }

    // west
    x = kingX - 1;
    y = kingY;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x--;
    }

    // northeast
    x = kingX + 1;
    y = kingY - 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x++;
        y--;
    }

    // northwest
    x = kingX - 1;
    y = kingY - 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x--;
        y--;
    }

    // southeast
    x = kingX + 1;
    y = kingY + 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x++;
        y++;
    }

    // southwest
    x = kingX - 1;
    y = kingY + 1;

    while (isValid(x, y)) {
        if (checkForQueen(queenSet, x, y)) {
            result.push([x, y]);
            break;
        }
        x--;
        y++;
    }

    return result;
};