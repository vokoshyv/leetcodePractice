 /********************************************************************** 
  *                          Homework VI                               *
  *                                                                    *
  *  Problem: Quicksort                                                *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using Quicksort sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/


var quickSort = function(input){

}





































// make array full of a million random numbers
var i = 1000000;
var test = [];

while (i--){
    test.push(Math.floor(1000000 * Math.random()));
}


// quickSort algorithm
var quickSort = function(input){

  var findPivotAndSortAround = function(work){
    if (work.length <= 1){
      return work;
    }

    var pivotIndex = Math.floor(work.length/2);
    var pivot = work[pivotIndex];

    var before = [];
    var after = [];

    for (var i = 0; i < work.length; i++){
      if (i !== pivotIndex){
        if (work[i] < pivot){
          before.push(work[i]);
        } else {
          after.push(work[i]);
        }
      }
    }

    return findPivotAndSortAround(before).concat(pivot).concat(findPivotAndSortAround(after));

  }

  return JSON.stringify(findPivotAndSortAround(input));
}


console.time('a');
quickSort(test);
console.timeEnd('a');