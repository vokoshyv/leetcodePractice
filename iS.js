// rectangles format; [{
//   xOffset: 1,
//   width: 5, 
//   height: 6
// }, and so on...]

// output format: [
// {
//   x: 3, 
//   y: 6
// }, and so on]

///////////////////////////////////////////
////        HELPER FUNCTIONS           ////
///////////////////////////////////////////

// function for converting a single building to a skyline
function convertBuildtoSky(building){
  return [
  {x: building['xOffset'], y: 0}, 
  {x: building['xOffset'], y: building['height']}, 
  {x: building['xOffset'] + building['width'], y: building['height']}, 
  {x: building['xOffset'] + building['width'], y: 0}]
}

// correct order of skylines to reflect proper drawing
function fixOrder(skylines){
  for (var i = 3; i < skylines.length; i = i + 2){
    if (skylines[i]['y'] === skylines[i-2]['y']){
      var temp = skylines[i];
      skylines[i] = skylines[i-1];
      skylines[i-1] = temp;
    }
  }
  return skylines;
}

// combine skylines together
function combineSky(sky1, sky2){


  sky1 = sky1.sort(function(a, b){
    return a['x'] - b['x'];
  })
  sky2 = sky2.sort(function(a, b){
    return a['x'] - b['x'];
  })

  var currentHeight = 0;
  var sky1Height = 0;
  var sky2Height = 0;
  var sky1Pointer = 0;
  var sky2Pointer = 0;

  var work = [];

  // while loop for combining skylines together in a mergeSort fashion 
  while (sky1[sky1Pointer] !== undefined && sky2[sky2Pointer] !== undefined){
    if (sky1Height === 0 && sky2Height === 0){
      if (sky1[sky1Pointer]['x'] < sky2[sky2Pointer]['x']){
        sky1Height = Math.max(sky1[sky1Pointer]['y'], sky1[sky1Pointer + 1]['y']);
        work.push({x: sky1[sky1Pointer]['x'], y: 0});
        work.push({x: sky1[sky1Pointer]['x'], y: Math.max(sky1[sky1Pointer]['y'], sky1[sky1Pointer + 1]['y'])});
        sky1Pointer += 2;
      } else {
        sky2Height = Math.max(sky2[sky2Pointer]['y'], sky2[sky2Pointer + 1]['y']);
        work.push({x: sky2[sky2Pointer]['x'], y: 0});
        work.push({x: sky2[sky2Pointer]['x'], y: Math.max(sky2[sky2Pointer]['y'], sky2[sky2Pointer + 1]['y'])});
        sky2Pointer += 2;
      }
    }

    if (sky1[sky1Pointer]['x'] < sky2[sky2Pointer]['x']){
      sky1Height = Math.max(sky1[sky1Pointer]['y'], sky1[sky1Pointer + 1]['y']);
      currentHeight = Math.max(sky1Height, sky2Height);
      work.push({x: sky1[sky1Pointer]['x'], y: sky2Height});
      work.push({x: sky1[sky1Pointer]['x'], y: currentHeight});
      sky1Pointer += 2;
    } else {
      sky2Height = Math.max(sky2[sky2Pointer]['y'], sky2[sky2Pointer + 1]['y']);
      currentHeight = Math.max(sky1Height, sky2Height);
      work.push({x: sky2[sky2Pointer]['x'], y: sky1Height});
      work.push({x: sky2[sky2Pointer]['x'], y: currentHeight});
      sky2Pointer += 2;
    }


  }

  // additional skylines to be added from either sky1 or sky2
  if (sky1[sky1Pointer] !== undefined) {
    if (sky1[sky1Pointer]['x'] > work[work.length-1]['x']){
      sky2Height = 0;
    }
    while (sky1[sky1Pointer] !== undefined){
      sky1Height = Math.max(sky1[sky1Pointer]['y'], sky1[sky1Pointer + 1]['y']);
      currentHeight = Math.max(sky1Height, sky2Height);
      work.push({x: sky1[sky1Pointer]['x'], y: sky2Height});
      work.push({x: sky1[sky1Pointer]['x'], y: currentHeight});
      sky1Pointer += 2;
    }
  } else {
    if (sky2[sky2Pointer]['x'] > work[work.length-1]['x']){
      sky1Height = 0;
    }
    while (sky2[sky2Pointer] !== undefined){
      sky2Height = Math.max(sky2[sky2Pointer]['y'], sky2[sky2Pointer + 1]['y']);
      currentHeight = Math.max(sky1Height, sky2Height);
      work.push({x: sky2[sky2Pointer]['x'], y: sky1Height});
      work.push({x: sky2[sky2Pointer]['x'], y: currentHeight});
      sky2Pointer += 2;
    }
  }


  work = fixOrder(work);


  var withoutDup = [];

  work.map(function(corner, index, array){
    if (index === 0){
      withoutDup.push(corner)
    } else if (index === array.length-1){
      withoutDup.push(corner);
    } else {
      if (corner['y'] === array[index+1]['y'] && corner['x'] === array[index+1]['x']){

      } else if (corner['y'] !== array[index-1]['y'] || corner['y'] !== array[index+1]['y']){
        withoutDup.push(corner);
      } 
    }
  })

  return withoutDup;

}

///////////////////////////////////////////
////        skyline function           ////
///////////////////////////////////////////

function skyline(rectangles) {
  var work = [];

  for (var i = 0; i < rectangles.length; i++){
    work.push(convertBuildtoSky(rectangles[i]));
  }

  while (work.length !== 1){
    var temp = [];

    for (var i = 0; i < work.length; i=i+2){
      if (work[i+1] !== undefined){
        temp.push(combineSky(work[i], work[i+1]));
      } else {
        temp.push(work[i]);
      }
    }

    work = temp;
  }

  work = work[0];

  var withoutDup = [];

  work.map(function(corner, index, array){
    if (index === 0){
      withoutDup.push(corner)
    } else if (index === array.length-1){
      withoutDup.push(corner);
    } else {
      if (corner['y'] !== array[index-1]['y'] || corner['y'] !== array[index+1]['y']){
        withoutDup.push(corner);
      }
    }
  })

  var finalResult = [{x: 0, y: 0}];

  if (withoutDup[0]['x'] === 0 && withoutDup[0]['y'] === 0){
    finalResult = withoutDup;
  } else {
    finalResult = finalResult.concat(withoutDup);
  }

  console.log(finalResult);
  return finalResult;
}

///////////////////////////////////////////
////        TEST CASES BELOW           ////
///////////////////////////////////////////

var test1 = [{
  xOffset: 1,
  width: 5, 
  height: 5
}, {
  xOffset: 4,
  width: 4, 
  height: 3
}]

var test2 = [{
  xOffset: 0,
  width: 5, 
  height: 5
}, {
  xOffset: 5,
  width: 5, 
  height: 5
}, {
  xOffset: 11,
  width: 5, 
  height: 5  
}]

var test3 = [{
  xOffset: 5,
  width: 1, 
  height: 1
}, {
  xOffset: 4,
  width: 3, 
  height: 3
}, {
  xOffset: 3,
  width: 5, 
  height: 5  
}, {
  xOffset: 2,
  width: 7, 
  height: 7  
}, {
  xOffset: 1,
  width: 9, 
  height: 9  
}]

var test4 = [{
  xOffset: 2,
  width: 4, 
  height: 4
}, {
  xOffset: 2,
  width: 4, 
  height: 5
}, {
  xOffset: 4,
  width: 4, 
  height: 2  
}]

var test5 = [ { xOffset: 10, width: 1, height: 1 },
  { xOffset: 9, width: 9, height: 6 },
  { xOffset: 1, width: 8, height: 5 },
  { xOffset: 8, width: 5, height: 4 },
  { xOffset: 8, width: 10, height: 4 },
  { xOffset: 3, width: 1, height: 3 },
  { xOffset: 7, width: 8, height: 6 },
  { xOffset: 7, width: 5, height: 10 },
  { xOffset: 10, width: 10, height: 1 },
  { xOffset: 9, width: 7, height: 10 },
  { xOffset: 6, width: 9, height: 5 },
  { xOffset: 1, width: 8, height: 2 },
  { xOffset: 2, width: 1, height: 1 },
  { xOffset: 4, width: 7, height: 6 },
  { xOffset: 4, width: 4, height: 1 },
  { xOffset: 5, width: 7, height: 10 },
  { xOffset: 3, width: 2, height: 1 },
  { xOffset: 5, width: 3, height: 6 },
  { xOffset: 9, width: 1, height: 1 },
  { xOffset: 6, width: 2, height: 10 },
  { xOffset: 5, width: 7, height: 7 },
  { xOffset: 7, width: 5, height: 10 },
  { xOffset: 5, width: 3, height: 1 },
  { xOffset: 10, width: 3, height: 8 },
  { xOffset: 7, width: 8, height: 1 },
  { xOffset: 10, width: 1, height: 7 },
  { xOffset: 9, width: 7, height: 2 },
  { xOffset: 10, width: 6, height: 3 },
  { xOffset: 8, width: 5, height: 1 },
  { xOffset: 10, width: 4, height: 2 } ]

skyline(test4);

