/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = nums.slice();
  this.storage = nums.slice();
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.storage = this.original.slice();
  return this.storage;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let i = this.storage.length;

  while (i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    [this.storage[i], this.storage[randomIndex]] = [this.storage[randomIndex], this.storage[i]];
  }

  return this.storage;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
