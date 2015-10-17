var allAnagrams = function(input){
  var results = [];
  work = input.split('');

  var buildCombinations = function(buildUp, pullFrom){
    if (buildUp.length === input.length){
      results.push(buildUp);
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 1);
      buildCombinations(buildUp + temp, pullFrom);
      pullFrom.splice(i, 0, temp);
    }
  }

  buildCombinations('', work);
  console.log(results);
  return results;
}

allAnagrams('abc');