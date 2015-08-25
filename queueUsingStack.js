/**
 * @constructor
 */
var Queue = function() {
  this.storage1 = [];
  this.storage2 = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
  this.storage1.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
  while (this.storage1.length > 0){
    var temp = this.storage1.pop();
    this.storage2.push(temp);
  }
  var result = this.storage2.pop();
  while (this.storage2.length > 0){
    temp = this.storage2.pop();
    this.storage1.push(temp);
  }
  return result;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
  return this.storage1[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
  return this.storage1.length === 0;
};