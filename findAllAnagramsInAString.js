/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let truth = {};
  let missingCharacters = p.length;

  for (let i = 0; i < p.length; i++) {
    if (p[i] in truth) {
      truth[p[i]]++;
    } else {
      truth[p[i]] = 1;
    }
  }

  let left = 0;
  let right = 0;

  let counts = 0;

  let result = []

  while (right < s.length) {
    if (s[right] in truth) {
      if (s[right] in counts) {
        counts[s[right]]++;
      } else {
        counts[s[right]] = 1;
      }
    }

    if (missingCharacters === 0) {
      result.push(left);
      
    }




    s++;
  }

  reurn result;

};


console.log(findAnagrams("cbaebabacd", "abc"))
