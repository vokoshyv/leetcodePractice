// input: target {int[]}, ghosts {int[][]}
// output: boolean
//
// pacmanEscape
//
// objective: get to target location before the ghosts
//
// notes:
// - if pacman and ghost gets to target at same time, pacman is killed
// - starting coordinate for pacman is [0, 0], where x = 0 and y = 0
//
//


class Queue {
  constructor() {
    this.storage = [];
  }

  size() {
    return this.storage.length;
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }
}

/*

input: [2, 3], [[8, 9], [5, 6]]

- pacman needs five moves to get to target location
- ghost1 needs 12 moves to get to target location
- ghost2 needs six moves to get to target location

output: true

input: [2, 3], [[8, 9], [3, 4]]

- pacman needs five moves to get to target location
- ghost1 needs 12 moves to get to target location
- ghost2 needs 2 moves to get to target location

output: false







input: [2, 3], [[9, 6]]

[[0,0,0,1,0,0,0,0,0,0], 
 [0,1,0,0,0,1,1,1,1,0], 
 [0,0,0,1,0,0,0,1,1,0],
 [1,0,0,0,0,1,0,1,1,0],
 [0,0,0,0,0,0,0,0,0,0],
 [1,1,0,0,0,1,1,1,1,1],
 [0,0,0,1,0,0,0,0,0,0]]

output: true



input: [2, 3], [[9, 6], [0, 6]]

[[0,0,0,1,0,0,0,0,0,0], 
 [1,1,0,0,0,1,1,1,1,0], 
 [0,1,1,1,1,0,0,1,1,0],
 [1,0,0,0,0,1,0,1,1,0],
 [0,0,0,1,0,0,0,0,0,0],
 [1,1,0,0,0,1,1,1,1,1],
 [0,0,0,1,0,0,0,0,0,0]]

output: false

*/

function pacmanEscape(target, ghosts, matrix) {
  // calculate moves for pacman
  let pacmanMoves = calculateMoves(0, 0, target[0], target[1], matrix);
  console.log("PACMAN MOVES: ", pacmanMoves);

  for (let i = 0; i < ghosts.length; i++) {
    // calculate moves for ghost
    let ghost = ghosts[i];
    let ghostMoves = calculateMoves(ghost[0], ghost[1], target[0], target[1], matrix);

    console.log("GHOST MOVES: ", ghostMoves);
    if (ghostMoves <= pacmanMoves) {
      return false;
    }
  }
  return true;
}

console.log(pacmanEscape([2, 3], [[9, 6]], [[0,0,0,1,0,0,0,0,0,0], 
                                            [0,1,0,0,0,1,1,1,1,0], 
                                            [0,0,0,1,0,0,0,1,1,0],
                                            [1,0,0,0,0,1,0,1,1,0],
                                            [0,0,0,0,0,0,0,0,0,0],
                                            [1,1,0,0,0,1,1,1,1,1],
                                            [0,0,0,1,0,0,0,0,0,0]]));

console.log(pacmanEscape([2, 3], [[9, 6], [0, 6]], [[0,0,0,1,0,0,0,0,0,0], 
                                                    [1,1,0,0,0,1,1,1,1,0], 
                                                    [0,1,1,1,1,0,0,1,1,0],
                                                    [1,0,0,0,0,1,0,1,1,0],
                                                    [0,0,0,1,0,0,0,0,0,0],
                                                    [1,1,0,0,0,1,1,1,1,1],
                                                    [0,0,0,1,0,0,0,0,0,0]]));



function calculateMoves(startX, startY, targetX, targetY, matrix) {
  const queue = new Queue();
  let visited = new Set();
  queue.enqueue([startX, startY, 0]);
  visited.add(startX + '_' + startY);
  let currentX, currentY, currentMoves;

  while (queue.size() > 0) {
    [currentX, currentY, currentMoves] = queue.dequeue();
    if (currentX === targetX && currentY === targetY) {
      return currentMoves;
    }

    // travel north
    let travelNorthX = currentX;
    let travelNorthY = currentY - 1;
    addIfPossible(travelNorthX, travelNorthY, currentMoves + 1, queue, matrix, visited);
    
    // travel south
    let travelSouthX = currentX;
    let travelSouthY = currentY + 1;
    addIfPossible(travelSouthX, travelSouthY, currentMoves + 1, queue, matrix, visited);
    
    // travel east
    let travelEastX = currentX + 1;
    let travelEastY = currentY;
    addIfPossible(travelEastX, travelEastY, currentMoves + 1, queue, matrix, visited);
    
    // travel west
    let travelWeestX = currentX - 1;
    let travelWeestY = currentY;
    addIfPossible(travelWeestX, travelWeestY, currentMoves + 1, queue, matrix, visited);
  }
}

function addIfPossible(travelX, travelY, moves, queue, matrix, visited) {
  if (travelX < 0 || travelY < 0 || travelX >= matrix[0].length || travelY >= matrix.length) {
    return;
  }
  if (visited.has(travelX + '_' + travelY)) {
    return;
  }
  if (matrix[travelY][travelX] === 1) {
    return;
  } 

  queue.enqueue([travelX, travelY, moves]);
  visited.add(travelX + '_' + travelY);
}
















