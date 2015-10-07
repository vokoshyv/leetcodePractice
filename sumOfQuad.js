// Given a matrix of random numbers, find the sum of any 
// selected quadrant in constant time. 

// Time Complexity: Constant-time
// Space Complexity: Linear
// Pre-processing: Allowed


// example input
var testInput = [ 
  [ 94, 52, 95, 35, 92, 89, 43, 77 ],
  [ 11, 95, 93, 39, 48, 59, 96, 61 ],
  [ 96, 98, 86, 16, 36, 37, 44, 27 ],
  [ 86, 34, 38, 53, 25, 43, 60, 45 ],
  [ 94, 85, 72, 93, 61, 16, 18, 28 ],
  [ 65, 70, 99, 42, 22, 32, 56, 36 ] 
];

var smallTestInput = [ 
  [ 1, 5, 9 ], 
  [ 2, 8, 5 ], 
  [ 8, 0, 2 ] 
];


// YOUR WORK BELOW: 

// class that holds the matrix
var paintFile = function(matrix){

}

// function that returns sum of a region
paintFile.prototype.getSumOfRegion = function(topLeft, bottomRight){

}





































// ANSWER: 

// paintFile class for constant-time region sums
var paintFile = function(matrix){
  this.storage = [];
  this.storage.push([]);

  // top left corner of matrix
  this.storage[0][0] = matrix[0][0];

  // top row of matrix
  for (var i = 1; i < matrix[0].length; i++){
    this.storage[0][i] = this.storage[0][i-1] + matrix[0][i];
  }

  // left column of matrix
  for (var j = 1; j < matrix.length; j++){
    this.storage.push([]);
    this.storage[j][0] = this.storage[j-1][0] + matrix[j][0];
  }

  // every other cell of matrix
  for (var i = 1; i < matrix.length; i++){
    for (var j = 1; j < matrix[0].length; j++){
      this.storage[i][j] = this.storage[i][j-1] + this.storage[i-1][j] - this.storage[i-1][j-1] + matrix[i][j];
    }
  }
}

// format of topLeft: [y-coor, x-coor]
// format of bottomRight: [y-coor, y-coor]
paintFile.prototype.getSumOfRegion = function(topLeft, bottomRight){

  if (topLeft[0] === 0 && topLeft[1] === 0){
    // topLeft corner is at the most top and left point of matrix
    return this.storage[bottomRight[0]][bottomRight[1]];
  } else if (topLeft[0] === 0 && topLeft[1] !== 0){
    // topLeft corner is in highest row
    return this.storage[bottomRight[0]][bottomRight[1]] - this.storage[bottomRight[0]][topLeft[1] - 1];
  } else if (topLeft[0] !== 0 && topLeft[1] === 0){
    // topLeft corner is in left most column
    return this.storage[bottomRight[0]][bottomRight[1]] - this.storage[topLeft[0] - 1][bottomRight[1]];
  } else {
    // topLeft corner is at other location
    var large = this.storage[bottomRight[0]][bottomRight[1]];
    var slice1 = this.storage[bottomRight[0]][topLeft[1] - 1];
    var slice2 = this.storage[topLeft[0] - 1][bottomRight[1]];
    var dupSlice = this.storage[topLeft[0] - 1][topLeft[1] - 1];
    return large - slice1 - slice2 + dupSlice;
  }
}

var blah = new paintFile(testInput);

blah.getSumOfRegion([0, 0], [5, 7]);