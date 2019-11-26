/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  A = A.split(' ');
  B = B.split(' ');
  let unique = new Set();
  let repeat = new Set();

  for (let word of A) {
    if (unique.has(word)) {
      unique.delete(word);
      repeat.add(word);
    } else if (!repeat.has(word)) {
      unique.add(word);
    }
  }

  for (let word of B) {
    if (unique.has(word)) {
      unique.delete(word);
      repeat.add(word);
    } else if (!repeat.has(word)) {
      unique.add(word);
    }
  }

  return Array.from(unique);
};
