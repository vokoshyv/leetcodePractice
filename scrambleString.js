/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  let words = new Set();

  function createScrambles(build, bank) {
    if (build.length === s1.length) {
      words.add(build);
      return;
    }

    
  }
  createScrambles("", s1);

  return words.has(s2);
};
