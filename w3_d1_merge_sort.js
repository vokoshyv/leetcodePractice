var sorted1 = [1, 3, 5, 7];
var sorted2 = [2, 4, 6, 8, 10, 12, 14];

var test = [5, 7, 2, 6, 8, 3];


// function for joining two sorted arrays together

var joinArrays = function(arr1, arr2){
  var p1 = 0;
  var p2 = 0;

  var result = [];

  while (arr1[p1] !== undefined && arr2[p2] !== undefined){
    if (arr1[p1] < arr2[p2]){
      result.push(arr1[p1]);
      p1++;
    } else {
      result.push(arr2[p2]);
      p2++;
    }
  }

  if (p1 === arr1.length){
    result = result.concat(arr2.slice(p2));
  } else if (p2 === arr2.length){
    result = result.concat(arr1.slice(p1));
  }

  return result;
}



var mergeSort = function(input){
  var work = [];
  input.forEach(function(value){
    work.push([value]);
  })


}

