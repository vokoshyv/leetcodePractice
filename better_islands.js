(function(){
'use strict';

var test = [[1,1,0,0,0],
            [0,1,0,0,1],
            [1,1,0,0,1],
            [0,0,1,0,0],
            [0,1,0,0,0]];






function islands(matrix){
  let count = 0;

  for (let yCoor = 0; yCoor < matrix.length; yCoor++){
    for (let xCoor = 0; xCoor < matrix[yCoor].length; xCoor++){
      if (matrix[yCoor][xCoor] === 1){
        count++;
        traverse(xCoor, yCoor);
      }
    }
  }
  
  function traverse(x, y){
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length){
      return;
    } else if (matrix[y][x] === 0){
      return;
    }

    // By turning each land (1) into water (0), as I 
    // encounter it, I don't have to worry about double-
    // counting land masses as I iterate to new coordinates
    matrix[y][x] = 0;

    traverse(x+1, y);
    traverse(x-1, y);
    traverse(x, y+1);
    traverse(x, y-1);
  }

  return count;
}

console.log(islands(test));
console.log('hello!');




})()