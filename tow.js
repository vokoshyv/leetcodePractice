/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */

var testInput = [[2, 9, 10], [5, 12, 12], [3, 7, 15], [15, 20, 10], [19, 24, 8]];

// var twoInput = [[2, 9, 10], [3, 7, 15]];

var anotherInput = [[1,11,5], [2,6,7], [3,13,9], [12,7,16], [14,3,25], [19,18,22], [23,13,29], [24,4,28]]


var convertBuildingToSkyline = function(dim){
  return [[dim[0], dim[2]], [dim[1], 0]];
}

var sortSkylines = function(skylines){
  return skylines.sort(function(a, b){
    return a[0] - b[0];
  })
}

var combineSkylines = function(s1, s2){
  s1 = sortSkylines(s1);
  s2 = sortSkylines(s2);
  var currentHeight = 0;
  var s1Pointer = 0;
  var s2Pointer = 0;
  var s1Height = 0;
  var s2Height = 0;
  var result = [];

  while (s1[s1Pointer] !== undefined && s2[s2Pointer] !== undefined){
    if (s1[s1Pointer][0] < s2[s2Pointer][0]){
      s1Height = s1[s1Pointer][1];
      currentHeight = Math.max(s1Height, s2Height);
      result.push([s1[s1Pointer][0], currentHeight]);
      s1Pointer++;
      continue;
    } else {
      s2Height = s2[s2Pointer][1];
      currentHeight = Math.max(s1Height, s2Height);
      result.push([s2[s2Pointer][0], currentHeight]);
      s2Pointer++;
      continue;
    }
  }
  if (s1[s1Pointer] !== undefined){
    while (s1[s1Pointer] !== undefined){
      s1Height = s1[s1Pointer][1];
      currentHeight = Math.max(s1Height, s2Height);
      result.push([s1[s1Pointer][0], currentHeight]);
      s1Pointer++;
    }
  } else if (s2[s2Pointer] !== undefined){
    while (s2[s2Pointer] !== undefined){
      s2Height = s2[s2Pointer][1];
      currentHeight = Math.max(s1Height, s2Height);
      result.push([s2[s2Pointer][0], currentHeight]);
      s2Pointer++;
    }
  }

  return result;
}

var getSkyline = function(buildings) {
  if (buildings.length === 0){
    return [];
  }
  var work = [];

  for (var i = 0; i < buildings.length; i++){
    work.push(convertBuildingToSkyline(buildings[i]));
  }

  var temp;

  while (work.length !== 1){
    temp = [];
    var current;
    for (i = 0; i < work.length; i = i + 2){
      if (work[i+1] === undefined){
        continue;
      }
      current = combineSkylines(work[i], work[i+1]);
      temp.push(current.slice());
    }
    if (work.length % 2 !== 0){
      temp.push(work[work.length-1]);
    }
    work = temp;
  }

  work = work[0];

  var result = [];

  // removes skyline points that have same height next to each other
  result.push(work[0]);
  for (var i = 1; i < work.length; i++){
    if (work[i-1][1] !== work[i][1]){
      result.push(work[i]);
    }
  }
  console.log(result);
  return result;
};

getSkyline(testInput);