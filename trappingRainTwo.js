/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  if (heightMap.length < 3){
    return 0;
  } else if (heightMap[0].length < 3){
    return 0;
  }

  var north = new Array(heightMap.length).fill(new Array(heightMap[0].length));
  var south = new Array(heightMap.length).fill(new Array(heightMap[0].length));
  var east = new Array(heightMap.length).fill(new Array(heightMap[0].length));
  var west = new Array(heightMap.length).fill(new Array(heightMap[0].length));

  var maxHeight = 0;

  for (var y = 0; y < heightMap.length; y++){
    maxHeight = 0;
    east[y] = east[y].slice();
    for (var x = 0; x < heightMap[0].length; x++){
      east[y][x] = maxHeight;
      maxHeight = Math.max(maxHeight, heightMap[y][x]);
    }
  }

  for (var y = 0; y < heightMap.length; y++){
    maxHeight = 0;
    west[y] = west[y].slice();
    for (var x = heightMap[0].length - 1; x > -1; x--){
      west[y][x] = maxHeight;
      maxHeight = Math.max(maxHeight, heightMap[y][x]);
    }
  }

  north = north.map((row)=>{
    return row.slice();
  })

  south = south.map((row)=>{
    return row.slice();
  })

  for (var x = 0; x < heightMap[0].length; x++){
    maxHeight = 0;
    for (var y = 0; y < heightMap.length; y++){
      south[y][x] = maxHeight;
      maxHeight = Math.max(maxHeight, heightMap[y][x])
    }
  }

  for (var x = 0; x < heightMap[0].length; x++){
    maxHeight = 0;
    for (var y = heightMap.length - 1; y > -1; y--){
      north[y][x] = maxHeight;
      maxHeight = Math.max(maxHeight, heightMap[y][x])
    }
  }

  var minBarrier = new Array(heightMap.length).fill(new Array(heightMap[0].length));
  minBarrier = minBarrier.map((row)=>{
    return row.slice();
  })

  for (var y = 0; y < heightMap.length; y++){
    for (var x = 0; x < heightMap[0].length; x++){
      minBarrier[y][x] = Math.min(north[y][x],south[y][x],east[y][x],west[y][x])
    }
  }

  console.log(minBarrier);
  
  function findActualBarrier(x, y){
    if (x === 0 || y === 0 || x === heightMap[0].length - 1 || y === heightMap.length - 1){
      return 0;
    }
    if (minBarrier){

    }

  }

  var count = 0;
  for (var y = 0; y < heightMap.length; y++){
    for (var x = 0; x < heightMap[0].length; x++){
      count += Math.max(minBarrier[y][x] - heightMap[y][x], 0);
    }
  }

  return count;
};


console.log(trapRainWater([[12,13,1,12],
                           [13,4,13,12],
                           [13,8,10,12],
                           [12,13,10,12],
                           [13,13,10,13]]))











