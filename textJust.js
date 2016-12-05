/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  var test = new WordClass(maxWidth);
  test.addManyWords(words);
  test.convert();
  return test.storage;
};

var WordClass = function(characterLimit){
  this.storage = [''];
  this.limit = characterLimit;
};

WordClass.prototype.addWord = function(word){
  if (this.storage[this.storage.length - 1].length === 0){
    this.storage[this.storage.length - 1] += word;
  } else if (this.storage[this.storage.length - 1].length + 1 + word.length > this.limit){
    this.storage.push(word);
  } else {
    this.storage[this.storage.length - 1] += ' ' + word;
  }
};

WordClass.prototype.addManyWords = function(arr){
  var that = this;
  arr.forEach(function(word){
    that.addWord(word);
  });
};

WordClass.prototype.expandLine = function(line){
  var work = line.split(' ');
  if (work.length === 1){
    return line + Array(this.limit - line.length + 1).join(' ');
  } else {
    var numberOfSpaces = work.length - 1;
    var spacesToUse = this.limit - line.length + numberOfSpaces;

    if (spacesToUse % numberOfSpaces === 0){
      var singleSpace = Array(spacesToUse / numberOfSpaces + 1).join(' ');
      return work.join(singleSpace);
    } else {
      var singleSpace = Array(Math.floor(spacesToUse / numberOfSpaces) + 1).join(' ');
      var largerTimes = spacesToUse % numberOfSpaces;
      var current = '';
      current += work[0];
      for (var i = 1; i < work.length; i++){
        if (largerTimes > 0){
          current += ' ' + singleSpace + work[i];
          largerTimes--;
        } else {
          current += singleSpace + work[i];
        }
      }
      return current;
    }

  }
};

WordClass.prototype.convert = function(){
  for (var i = 0; i < this.storage.length - 1; i++){
    this.storage[i] = this.expandLine(this.storage[i]);
  }

  var lastLineWork = this.storage[this.storage.length - 1];
  this.storage[this.storage.length - 1] = lastLineWork + Array(this.limit - lastLineWork.length + 1).join(' ');
};

// var test = new WordClass(16);
// test.addManyWords(["This", "is", "an", "example", "of", "text", 'jsut', 'toy', 'bot']);

// console.log(test.storage);
// test.convert();
// console.log(test.storage);

// console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));

