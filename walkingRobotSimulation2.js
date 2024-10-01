/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.width = width;
    this.height = height;
    this.heightPlusWidth = width + height;
    this.x = 0;
    this.y = 0;    
    this.direction = "East";
    this.xDelta = 1;
    this.yDelta = 0;
};

Robot.prototype.changeDirection = function() {
    if (this.direction === "East") {
        this.direction = "North";
        this.xDelta = 0;
        this.yDelta = 1;
    } else if (this.direction === "North") {
        this.direction = "West";
        this.xDelta = -1;
        this.yDelta = 0;
    } else if (this.direction === "West") {
        this.direction = "South";
        this.xDelta = 0;
        this.yDelta = -1;
    } else if (this.direction === "South") {
        this.direction = "East";
        this.xDelta = 1;
        this.yDelta = 0;
    }
};

Robot.prototype.proceedOneStep = function() {
    if (this.direction === "East" && this.x === (this.width - 1)) {
        this.changeDirection();
    } else if (this.direction === "North" && this.y === (this.height - 1)) {
        this.changeDirection();
    } else if (this.direction === "West" && this.x === 0) {
        this.changeDirection();
    } else if (this.direction === "South" && this.y === 0) {
        this.changeDirection();
    }

    this.x += this.xDelta;
    this.y += this.yDelta;
}

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    if (this.x === 0 && this.y === 0 && num > 0) {
        this.proceedOneStep();
        num--;
    }

    num = num % (2 * this.heightPlusWidth - 4);

    while (num > 0) {
        this.proceedOneStep();
        num--;
    }
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return [this.x, this.y];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    return this.direction;    
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */