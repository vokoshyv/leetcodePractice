/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var lib = '1234567890abcdefghijklmnopqrstuvwxyz'
  var libObject = {};
  for (var i = 0; i < lib.length; i++){
    libObject[lib[i]] = true;
  }

  var work = '';
  for (var i = 0; i < s.length; i++){
    if (libObject[s[i].toLowerCase()]){
      work += s[i].toLowerCase();
    }
  }

  var index = work.length;
  var workCompare = '';
  while (index--){
    workCompare += work[index];
  }
  return work === workCompare;
};