/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  console.log(s.length);
  console.log(t.length);
  var check = false;
  var tArray = t.split('');

  var checkVariances = function(current, pullFrom){
    if (current.length === s.length){
      if (s === current.join('')){
        check = true;
      }
      return;
    }

    for (var i = 0; i < pullFrom.length; i++){
      var temp = pullFrom.splice(i, 0)[0];
      current.push(temp);
      checkVariances(current, pullFrom);
      current.pop();
      pullFrom.splice(i, 0, temp);
    }
  }

  // checkVariances([], tArray)

  return check;
};

isAnagram('cat', 'tac');