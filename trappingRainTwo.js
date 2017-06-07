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
  
  var count = 0;
  for (var y = 0; y < heightMap.length; y++){
    for (var x = 0; x < heightMap[0].length; x++){
      count += Math.max((Math.min(north[y][x],south[y][x],east[y][x],west[y][x])) - heightMap[y][x], 0);
    }
  }

  console.log(north);
  console.log(south);
  console.log(east);
  console.log(west);

  return count;
};

