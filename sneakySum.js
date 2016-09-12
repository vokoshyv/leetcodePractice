/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var MathClass = function(){
  this.storage = [];
  this.sign = '+';
};

MathClass.prototype.add = function(){
  if (this.sign === '+'){
    this.storage.push(1);
  } else {
    if (this.storage.length > 0){
      this.storage.pop();
    } else {
      
    }
  }

}

var getSum = function(a, b) {

};

console.log(getSum(3, -5));