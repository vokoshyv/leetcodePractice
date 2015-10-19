 /********************************************************************** 
  *                          Homework III                              *
  *                                                                    *
  *  Problem: Insertion Sort                                           *
  *                                                                    *
  *  Prompt: Given an unsorted array of numbers,                       *
  *          return a sorted array using insertion sort.               *
  *                                                                    *
  *  Input:  An unsorted array                                         *
  *  Output: A sorted array                                            *
  *                                                                    *
  *  Example: input = [3,9,1,4,7] , output = [1,3,4,7,9]               *
  *                                                                    *
  *  What are the time and auxilliary space complexity?                *
  *                                                                    *
  **********************************************************************/







  /**********************************************************
   *             Highly Recommended Extra Credit            *
   *                                                        *
   *  Problem: Selection Sort                               *
   *                                                        *
   *  Prompt: Given an unsorted array of numbers,           *
   *          return a sorted array using insertion sort.   *
   *                                                        *
   *  Input: An unsorted array                              *
   *  Output: A sorted array                                *
   *                                                        *
   *  Example: input = [8,3,2,10] output = [2,3,8,10]       *
   *                                                        *
   *  What are the time and auxilliary space complexity?    *
   *  What is the best case time complexity?                *
   *                                                        *
   **********************************************************/



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

// insertionSort([5, 4, 3, 2, 1, 1, 1]);

// Time Complexity: 
// Best Case: linear Ω(n); 
// Worst Case (Big O): Intuitively, quadratic, 
// but we didn't get to the full length of the array until the last comparison. It looks like 
// 1 + 2 + 3 + ... operations, which is a summation. This comes out to (n(n-1))/2, which is 
// n^2/2 - n/2. The n^2 dominates, so we can consider it O(n^2). 

// Space Complexity: Constant Space Complexity; all modification occurs on the input























var selectionSort = function(work){

  var findMinimumAndSwitch = function(indexToReplace){
    var minimum = work[indexToReplace];
    var minimumIndex = indexToReplace;
    for (var i = indexToReplace+1; i < work.length; i++){
      if (work[i] < minimum){
        minimum = work[i];
        minimumIndex = i;
      }
    }
    work[minimumIndex] = work[indexToReplace];
    work[indexToReplace] = minimum;
  }

  for (var i = 0; i < work.length; i++){
    findMinimumAndSwitch(i);
  }

  return work;
}

selectionSort([2, 3, 4, 1, 1, 1, 1]);

// Time Complexity: 

// Worst Case: Same as insertion sort: 1 + 2 + 3 + ... operations. So it will come out to 
// n^2/2 - n/2. The n^2 dominates, so it is O(n^2). 
// Best Case: Same thing because we still need to check for the minimum of each unsorted portion
// with every run, so Ω(n^2). 

// Space Complexity: Constant Space Complexity; all modifications occur on the input

