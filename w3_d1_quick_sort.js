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
var quickSort = function(work){
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
  return quickSort(before).concat(pivot).concat(quickSort(after));
}


var insertionSort = function(work){

  var compareAndShift = function(indexToCompare){
    while (indexToCompare > 0 && work[indexToCompare] < work[indexToCompare-1]){
      var temp = work[indexToCompare];
      work[indexToCompare] = work[indexToCompare-1];
      work[indexToCompare-1] = temp;
      indexToCompare--;
    }
  }

  for (var i = 0; i < work.length; i++){
    compareAndShift(i);
  }

  return work;
}

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

  while (work.length !== 1){
    var pointer = 0;
    var sorted = [];

    while (pointer < work.length){
      if (work[pointer+1] !== undefined){
        sorted.push(joinArrays(work[pointer], work[pointer+1]));
      } else {
        sorted.push(work[pointer]);
      }
      pointer += 2;
    }

    work = sorted;
  }

  return work[0];
}

function andy(array){
  // base case is to return back an array or length 1 or 0
  if(array.length < 2){
    return array;
  }

  // divide the array into two recursively
  var mid = Math.floor(array.length/2);
  var leftArr = andy(array.slice(0,mid));
  var rightArr = andy(array.slice(mid, array.length));
  
  // merge the two sub arrays as you go back up the stack
  var i = 0;
  var j = 0;
  var result = [];

  // keep placing the lowest value into a new results array until one of them is empty
  while(i < leftArr.length && j < rightArr.length){
    if(leftArr[i] <= rightArr[j]){
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  // add the remaining items from the other sub array into the results array
  if(i >= leftArr.length){
    result = result.concat(rightArr.slice(j));
  } else if (j >= rightArr.length){
    result = result.concat(leftArr.slice(i));
  }

  // return the results array
  return result;
}

var andyQuicksort = function(arr){

  function subsort(start, finish){
    if(finish - start < 1){ return; }
    var mid = start;
    var temp;
    
    for(var i = start; i < finish; i++){
      if(arr[i] <= arr[finish]){
        temp = arr[i];
        arr[i] = arr[mid];
        arr[mid] = temp;
        mid++;
      }
    }
    
    temp = arr[finish];
    arr[finish] = arr[mid];
    arr[mid] = temp;

    subsort(start, mid-1);
    subsort(mid+1, finish);
  }
  subsort(0, arr.length-1)
  return arr
}

console.time('quickSort');
quickSort(test);
console.timeEnd('quickSort');

// console.time('insertionSort');
// insertionSort(test);
// console.timeEnd('insertionSort');

// console.time('mergeSort');
// mergeSort(test);
// console.timeEnd('mergeSort');

// console.time('andy');
// andy(test);
// console.timeEnd('andy');

console.time('andyQuicksort');
andyQuicksort(test);
console.timeEnd('andyQuicksort');