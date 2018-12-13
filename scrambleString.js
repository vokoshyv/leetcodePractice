/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  let i = 0;

  while (i < s1.length) {
    let j = findIndexOfCharacter(s1.slice(i), s2.slice(i));
    if (j < 0) {
        return false;
    }

    let endIndex = i + j;

    if (!checkEquivalency(i, endIndex, s1, s2)) {
      return false;
    }

    i = endIndex + 1;
  }
  return true;
};

function findIndexOfCharacter(s1, s2) {
  return Math.max(s1.indexOf(s2[0]), s2.indexOf(s1[0]));
  // return substring.indexOf(char);
}

function checkEquivalency(startIndex, endIndex, s1, s2) {
  let counts = {};

  let i = startIndex;

  while (i < endIndex + 1) {
    if (counts[s1[i]] === undefined) {
      counts[s1[i]] = 1;
    } else {
      counts[s1[i]] += 1;
    }

    i++;
  }

  i = startIndex;

  while (i < endIndex + 1) {
    if (counts[s2[i]] === undefined) {
      return false;
    } else {
      counts[s2[i]] -= 1;
      if (counts[s2[i]] === 0) {
        delete counts[s2[i]];
      }
    }
    i++;
  }
  return Object.keys(counts).length === 0;
}



console.log(isScramble("aa", "aa"));
