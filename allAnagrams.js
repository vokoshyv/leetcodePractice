

var allAnagrams = function(input){
  var results = [];
  // turn input into array
  work = input.split('');

  // create recursive function
  var buildCombinations = function(buildUp, pullFrom){
    if (pullFrom.length === 0){
      results.push(buildUp);
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1);
      buildCombinations(buildUp + temp, pullFrom);
      pullFrom.splice(i, 0, temp);
    }
  }

  // call recursive function
  buildCombinations('', work);

  // return results
  console.log(results);
  return results;
}

allAnagrams('abcc');