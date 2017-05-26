'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
            5
         /    
       3   
 */


let node5 = new Node(5);
let node3 = new Node(3);

node5.left = node3;



