/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    const fastest = [];

    for (let i = 0; i < moveTime.length; i++) {
        fastest.push(new Array(moveTime[0].length));
    }

    fastest[0][0] = 0;

    // handle top row

    for (let x = 1; x < fastest[0].length; x++) {
        fastest[0][x] = Math.max(fastest[0][x - 1] + 1, moveTime[0][x] + 1);
    }

    // handle leftmost column

    for (let y = 1; y < fastest.length; y++) {
        fastest[y][0] = Math.max(fastest[y - 1][0] + 1, moveTime[y][0] + 1);
    }

    // handle the rest of the matrix

    for (let y = 1; y < fastest.length; y++) {
        for (let x = 1; x < fastest[0].length; x++) {
            fastest[y][x] = Math.max(Math.min(fastest[y - 1][x] + 1, fastest[y][x - 1] + 1), moveTime[y][x] + 1);
        }
    }

    // console.log("FASTEST: ", fastest);

    return fastest[fastest.length - 1][fastest[0].length - 1];
};

console.log(minTimeToReach([[0,4],[4,4]]));
console.log(minTimeToReach([[0,0,0],[0,0,0]]));
console.log(minTimeToReach([[0,1],[1,2]]));

/*

[[94,79,62,27,69,84],
 [6, 32,11,82,42,30]]

*/