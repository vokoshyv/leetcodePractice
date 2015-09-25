// Definition for a point.

function Point(x, y) {
    this.x = x;
    this.y = y;
}
 
/**
 * @param {Point[]} points
 * @return {number}
 */

var getSlope = function(point1, point2){
  return (point2.y - point1.y) / (point2.x - point1.x);
}

var maxPoints = function(points) {
  var maxPoints = 0;
  var slopes;

  for (var i = 0; i < points.length; i++){
    var toCompare = points[i];
    slopes = [];

    for (var j = 0; j < points.length; j++){
      if (j === i){
        continue;
      }
      slopes.push(getSlope(points[i], points[j]));
    }
  }


};

var test1 = new Point(-1, 0);
var test2 = new Point(3, 4);


getSlope(test2, test1);