/**
 * @param {number[][]} dungeon
 * @return {number}
 */

/*
[[-2, -3, 3],
 [-5,-10, 1],
 [10, 30,-5]]


 As we're traveling through the dungeon, we may have to keep track of both
 the max health that would be required for that route along with the continued
 total as we iterate through
[[ -2,-5, -1],
 [ -7,-15, 0],
 [  3, 33,28]

*/

var calculateMinimumHP = function(dungeon) {
  const yBound = dungeon.length;
  const xBound = dungeon[0].length;
  //
  // let health = 1;
  //
  // for (let y = 0; y < yBound; y++) {
  //   for (let x = 0; x < xBound; x++) {
  //     if (x > 0 && y > 0) {
  //       dungeon[y][x] = dungeon[y][x] + Math.max(dungeon[y][x-1], dungeon[y-1][x]);
  //     } else if (x > 0) {
  //       dungeon[y][x] = 0 - dungeon[y][x] + dungeon[y][x-1];
  //     } else if (y > 0) {
  //       dungeon[y][x] = 0 - dungeon[y][x] + dungeon[y-1][x];
  //     }
  //     // health = Math.max(health, 0 - dungeon[y][x] + 1);
  //   }
  // }

  console.log(dungeon);

  // bottom right corner
  dungeon[yBound-1][xBound-1] = Math.max(1 - dungeon[yBound-1][xBound-1], 1);

  // bottom row
  for (let x = xBound - 2; x > -1; x--) {
    dungeon[yBound-1][x] = Math.max(dungeon[yBound-1][x+1] - dungeon[yBound-1][x], 1)
  }

  // right column
  for (let y = yBound - 2; y > -1; y--) {
    dungeon[y][xBound-1] = Math.max(dungeon[y+1][xBound-1] - dungeon[y][xBound-1], 1);
  }

  // remainder of dungeon
  for (let y = yBound - 2; y > -1; y--) {
    for (let x = xBound - 2; x > -1; x--) {
      let fromRight = Math.max(dungeon[y][x+1] - dungeon[y][x], 1);
      let fromBelow = Math.max(dungeon[y+1][x] - dungeon[y][x], 1);
      dungeon[y][x] = Math.min(fromRight, fromBelow);
    }
  }

  console.log(dungeon);
  return dungeon[0][0];


};


/*
-5 -7


5 -7
I need 8, and then I need (8 - 5), which is three.


-5 7
I need 1 and then I need 6

*/
