/*
 *  Target Practice 01 - Recursion
 */

 'use strict';

/*
 *  Problem:  Powerset
 *
 *  Prompt:   Given a set S, return the powerset P(S), which is
 *            a set of all subsets of S.
 *
 *  Input:    A String
 *  Output:   An Array of Strings representing the power set of the input
 *
 *  Example:  S = "abc", P(S) = ['', 'a', 'b','c','ab','ac','bc','abc']
 *
 *  Note:     The input string will not contain duplicate characters
 *            The letters in the subset string must be in the same order
 *            as the original input.

 1) Instantiate variables
 2) Return state variables
 3) Instantiate and invoke our helper method
 4) Create base case
 5) Create recursive case
 */



function powerset(str) {
  let result = [];

  function traverse(build, depth) {
    if (depth === str.length) {
      result.push(build);
      return;
    }

    traverse(build, depth + 1);
    traverse(build + str[depth], depth + 1);
  }
  traverse("", 0);

  return result;
}

/*
 *  Problem: Lattice Paths
 *
 *  Prompt:  Count the number of unique paths to travel from the top left
 *           corder to the bottom right corner of a lattice of M x N squares.
 *
 *           When moving through the lattice, one can only travel to the adjacent
 *           corner on the right or down.
 *
 *  Input:   m {Integer} - rows of squares
 *  Input:   n {Integer} - column of squares
 *  Output:  {Integer}
 *
 *  Example: input: (2, 3)
 *
 *           (2 x 3 lattice of squares)
 *            __ __ __
 *           |__|__|__|
 *           |__|__|__|
 *
 *           output: 10 (number of unique paths from top left corner to bottom right)
 *
 *  Resource: https://projecteuler.net/problem=15
 *
 */

 // Time Complexity:
 // Auxiliary Space Complexity:
 function latticePaths(m, n) {
   // YOUR WORK HERE
 }



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////

console.log('Powerset Tests');
var testCount = [0, 0];

assert(testCount, 'should work on example input', function(){
  var example = powerset('abc');
  return arraysMatching(example, ['','a','b','c','ab','bc','ac','abc']);
});

assert(testCount, 'should work on empty input', function(){
  var example = powerset('');
  return arraysMatching(example, ['']);
});

assert(testCount, 'should work on two-letter input', function(){
  var example = powerset('ab');
  return arraysMatching(example, ['','a','b','ab']);
});

assert(testCount, 'should work on longer input', function(){
  var example = powerset('abcdefg');
  return arraysMatching(example, [ '','g','f','fg','e','eg','ef','efg','d',
    'dg','df','dfg','de','deg','def','defg','c','cg','cf','cfg','ce','ceg',
    'cef','cefg','cd','cdg','cdf','cdfg','cde','cdeg','cdef','cdefg','b','bg',
    'bf','bfg','be','beg','bef','befg','bd','bdg','bdf','bdfg','bde','bdeg',
    'bdef','bdefg','bc','bcg','bcf','bcfg','bce','bceg','bcef','bcefg','bcd',
    'bcdg','bcdf','bcdfg','bcde','bcdeg','bcdef','bcdefg','a','ag','af','afg',
    'ae','aeg','aef','aefg','ad','adg','adf','adfg','ade','adeg','adef',
    'adefg','ac','acg','acf','acfg','ace','aceg','acef','acefg','acd','acdg',
    'acdf','acdfg','acde','acdeg','acdef','acdefg','ab','abg','abf','abfg',
    'abe','abeg','abef','abefg','abd','abdg','abdf','abdfg','abde','abdeg',
    'abdef','abdefg','abc','abcg','abcf','abcfg','abce','abceg','abcef',
    'abcefg','abcd','abcdg','abcdf','abcdfg','abcde','abcdeg','abcdef','abcdefg'
  ]);
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Lattice Paths Tests');
testCount = [0, 0];

assert(testCount, 'should work on example case', function(){
  let example = latticePaths(2, 3);
  return example === 10;
});

assert(testCount, 'should return 1 for 0 x 0 lattice', function(){
  let example = latticePaths(0, 0);
  return example === 1;
});

assert(testCount, 'should return 2496144 for 13 x 11 lattice', function(){
  let example = latticePaths(11, 13);
  return example === 2496144;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

// function for checking if arrays contain same elements
// (do not need to be in the same order)
function arraysMatching(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }

  let cache = {};
  for (let i = 0; i < arr1.length; i++) {
    if (cache[arr1[i]] === undefined) {
      cache[arr1[i]] = 1;
    } else {
      cache[arr1[i]]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (cache[arr2[j]] === undefined || cache[arr2[j]] === 0) { return false; }
    cache[arr2[j]]--;
  }
  return true;
}


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if (!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
