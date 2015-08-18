/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
  if (s1.length === 0 && s2.length === 0 && s3.length === 0){
    return true;
  }

  var s1Split = s1.split('');
  var s2Split = s2.split('');
  var s3Split = s3.split('');

  for (var i = 0; i < s3.length; i++){
    if (s1Split[0] === s3[i]){
      s1Split.shift();
      s3Split.pop();
    }else if (s2Split[0] === s3[i]){
      s2Split.shift();
      s3Split.pop();
    }
  }
  return s1Split.length === 0 && s2Split.length === 0 && s3Split.length === 0;
};