var MinStack = function () {
    this.stack1 = [];
    this.stack2 = [];
};

const getLastOfArray = (arr) => {
    return arr[arr.length - 1];
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack1.push(val);

    if (this.stack2.length > 0) {
        this.stack2.push(Math.min(getLastOfArray(this.stack2), val));
    } else {
        this.stack2.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack2.pop();
    return this.stack1.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return getLastOfArray(this.stack1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return getLastOfArray(this.stack2);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */