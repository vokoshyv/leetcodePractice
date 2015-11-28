/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var work = str.split(' ');

  var lastTwo = function(input){
    return input.slice(input.length-2);
  }

  var lib = {};

  pattern.split('').forEach(function(letter, index){
    if (lib[letter] === undefined){
      lib[letter] = [index];
    } else {
      lib[letter].push(index);
    }
  })

  console.log(lib);
  var check = true;

  Object.keys(lib).forEach(function(letter){
    console.log(letter);
    var temp = lastTwo(work[lib[letter][0]]);
    console.log('haha');

    for (var i = 1; i < lib[letter].length; i++){
      if (lastTwo(work[lib[letter][i]]) !== temp){
        check = false;
      }
    }

  })

  return check;
};