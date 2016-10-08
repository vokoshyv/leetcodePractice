/**
 * @param {number[][]} matrix
 * @return {number}
 */
// var longestIncreasingPath = function(matrix) {
//   var lib = {};
//   var count = 0;
//   var traverse = function(xCoor, yCoor, build){
//     if (lib[xCoor + '_' + yCoor]){
//       return;
//     } else if (xCoor < 0 || yCoor < 0 || xCoor >= matrix[0].length || yCoor >= matrix.length){
//       count = Math.max(count, build.length);
//       return;
//     } else if (build.length > 0 && build[build.length-1] >= matrix[yCoor][xCoor]){
//       count = Math.max(count, build.length);
//       return;
//     }

//     lib[xCoor + '_' + yCoor] = true;
//     build.push(matrix[yCoor][xCoor]);
//     traverse(xCoor, yCoor-1, build);
//     traverse(xCoor+1, yCoor, build);
//     traverse(xCoor, yCoor+1, build);
//     traverse(xCoor-1, yCoor, build);
//     delete lib[xCoor + '_' + yCoor];
//     build.pop();
//   };

//   for (var y = 0; y < matrix.length; y++){
//     for (var x = 0; x < matrix[0].length; x++){
//       traverse(x, y, []);
//     }
//   }

//   return count;
// };

var longestIncreasingPath = function(matrix) {
  var count = 0;

  var traverse = function(xCoor, yCoor){
    var queue = [];
    var lib = {};

    queue.push(matrix[yCoor][xCoor]);
    lib[xCoor + '_' + yCoor] = true;
    
    while (queue.length > 0){
      count = Math.max(count, queue.length);

    }
  };

    for (var y = 0; y < matrix.length; y++){
      for (var x = 0; x < matrix[0].length; x++){
        traverse(xCoor, yCoor);
      }
    }
  };



};

var nums = [
  [3,4,5],
  [3,2,6],
  [2,2,1]
];

console.log(longestIncreasingPath(nums));



