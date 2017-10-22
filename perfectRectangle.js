/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
  let minX = rectangles[0][0];
  let minY = rectangles[0][1];
  let maxX = rectangles[0][2];
  let maxY = rectangles[0][3];

  rectangles.forEach(rectangle=>{
    minX = Math.min(minX, rectangle[0]);
    minY = Math.min(minY, rectangle[1]);
    maxX = Math.max(maxX, rectangle[2]);
    maxY = Math.max(maxY, rectangle[3]);
  });

  let work = new Set();

  for (let x = minX; x < maxX; x++){
    for (let y = minY; y < maxY; y++){
      work.add(x + '_' + y);
    }
  }


  for (let i = 0; i < rectangles.length; i++){
    let rectangle = rectangles[i];

    for (let x = rectangle[0]; x < rectangle[2]; x++){
      for (let y = rectangle[1]; y < rectangle[3]; y++){
        if (work.has(x + '_' + y)){
          work.delete(x + '_' + y);
        } else {
          return false;
        }
      }
    }
  }

  return work.size === 0;

};
