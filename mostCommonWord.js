/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  paragraph = paragraph.toLowerCase();
  paragraph = paragraph.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()']/g,"");

  console.log(paragraph);

  let ban = new Set();
  banned.forEach(word => {
    ban.add(word);
  });

  let results = {};

  paragraph = paragraph.split(' ');
  paragraph.forEach(word => {
    if (results[word] === undefined) {
      results[word] = 1;
    } else {
      results[word]++;
    }
  });

  let most = '';
  let count = 0;

  for (let key in results) {
    if (results[key] > count) {
      if (!ban.has(key)) {
        most = key;
        count = results[key];
      }
    }
  }

  return most;
};
