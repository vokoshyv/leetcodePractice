/*
robot paths
input: integer
output: integer

number of different paths to travel from top left corner to 
bottom right corner of a matrix that is NxN

 */

(function(){
'use strict';

class RobotPaths{
  
  constructor(){
    this.matrix = [];
    this.size = 0;
    this.count = 0;
    this.paths = [];
    this.run;
  }

  setSize(N){
    this.size = N;
    for (let i = 0; i < N; i++){
      this.matrix.push([]);
      for (let j = 0; j < N; j++){
        this.matrix[i].push(0);
      }
    }
  }

  printMatrix(i){
    if (i === this.paths.length){
      clearInterval(this.run);
      console.log("RESULT: ", this.count);
      return;
    }
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    this.paths[i].forEach((row)=>{
      console.log(row);
    });
    console.log('\n\n\n\n\n\n');
  }

  countPaths(){
    this.count = 0;
    this.paths = [];
    this.traverse(0, 0);
    this.printPaths();
  }

  printPaths(){
    var i = 0;
    var that = this;
    this.run = setInterval(()=>{
      that.printMatrix(i)
      i++;
    }, 10);
  }

  traverse(x, y){
    if (x < 0 || y < 0 || x >= this.size || y >= this.size){
      return;
    } else if (this.matrix[y][x] === 1){
      return;
    } else if (x === this.size - 1 && y === this.size - 1){
      this.count++;
      this.matrix[y][x] = 1;
      this.recordMatrix();
      this.matrix[y][x] = 0;
      this.recordMatrix();
      return;
    }

    this.matrix[y][x] = 1;
    this.recordMatrix();

    this.traverse(x+1, y);
    this.traverse(x-1, y);
    this.traverse(x, y+1);
    this.traverse(x, y-1);

    this.matrix[y][x] = 0;
    this.recordMatrix();
  }

  recordMatrix(){
    var that = this;
    this.paths.push(that.hardCopy(that.matrix));
  }

  hardCopy(matrix){
    return matrix.map((row)=>{
      return row.slice();
    }).slice();
  }


}

var test = new RobotPaths();

test.setSize(4);
console.log(test.countPaths());



})();