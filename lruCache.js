/**
 * @constructor
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = [];
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
  for (var i = 0; i < this.storage.length; i++){
    if (this.storage[i][0] === key){
      var temp = this.storage.splice(i, 1);
      this.storage.push(temp[0]);
      return temp[0][1];
    }
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
  var check = true;
  for (var i = 0; i < this.storage.length; i++){
    if (this.storage[i][0] === key){
      this.storage[i][1] = value;
      var temp = this.storage.splice(i, 1);
      this.storage.push(temp[0]);
      var check = false;
    }
  }

  if (check && this.storage.length === this.capacity){
    this.storage.shift();
    this.storage.push([key, value]);
  }else if (check){
    this.storage.push([key, value]);
  }
};

