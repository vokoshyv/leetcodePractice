/*********************************************************************************** 
  *                                 Homework V                                     *
  *                                                                                *
  *  Problem: Binary Search Tree                                                   *
  *                                                                                *
  *  Prompt: Create a BinarySearchTree class/constructor.                          *
  *          Name it binarySearchTree (js) or binary_search_tree (rb/py).          *
  *                                                                                *
  *          Part 1: Create a node class for your binarySearchTree.                *
  *                  Your node class will take an integer value and output         *
  *                  an object with the following properties:                      *
  *                                                                                *
  *                  node.value: input value                                       *
  *                  node.leftChild: a pointer to the left child Node              * 
  *                  node.rightChild: a pointer to the right child Node            *
  *                                                                                *
  *                  Example: { value: 1, leftChild: null, rightChild: null }      *
  *                                                                                *
  *          Part 2: Create the BinarySearchTree class.                            *
  *                  It should contain the following properties:                   *
  *                                                                                *
  *                  root: pointer to the root node                                *
  *                  size: number of nodes in the BinarySearchTree                 *
  *                                                                                *
  *                  The BinarySearchTree will also have the following properties: *
  *                                                                                *
  *                  insert: method that takes takes an input value, and creates a *
  *                          new node with the given input.  The method will then  *
  *                          find the correct place to add the new node. (Remember *
  *                          that nodes with values larger than the parent node go *
  *                          to the right, and smaller values go to the left.)     *
  *                                                                                *
  *                  search: method that will search to see if a node with a       *
  *                          specified value exists.  If present returns true,     *
  *                          else returns false.                                   *
  *                                                                                *
  *  Input:  N/A                                                                   *
  *  Output: A BinarySearchTree instance                                           *
  *                                                                                *
  *  What are the time and auxilliary space complexities of the various methods?   *
  *                                                                                *
  **********************************************************************************/


 /**
  *  Extra Credit: Remove
  *
  *  Prompt: Create a remove method on your BinarySearchTree that will remove and
  *          return a given value from the tree and retie the tree so it remains
  *          properly sorted.
  **/



var node = function(value){
  this.value = value;
  this.right = null;
  this.left = null;
}


var binarySearchTree = function(){
  this.root = null;
  this.size = 0;
}

binarySearchTree.prototype.insert = function(value){
  if (this.root === null){
    // when the tree is empty
    this.root = new node(value);
    this.size++;
  } else {
    // when stuff has already been inserted
    var findAndInsert = function(currentNode){

      if (value > currentNode.value){
        if (currentNode.right === null){
          currentNode.right = new node(value);
        } else {
          findAndInsert(currentNode.right);
        }
      } else if (value < currentNode.value){
        if (currentNode.left === null){
          currentNode.left = new node(value);
        } else {
          findAndInsert(currentNode.left);
        }
      }
    }

    findAndInsert(this.root);

    this.size++;

  }
}

binarySearchTree.prototype.search = function(target){
  var check = false;

  var traverse = function(currentNode){
    if (check){
      return;
    } else if (currentNode === null){
      return;
    } else if (currentNode.value === target){
      check = true;
      return;
    }

    if (target > currentNode.value){
      traverse(currentNode.right);
    } else if (target < currentNode.value){
      traverse(currentNode.left);
    }
  }

  traverse(this.root);
  return check;
}

binarySearchTree.prototype.delete = function(deleteValue){
  var temp = [];

  var roundUp = function(currentNode){
    if (currentNode === null){
      return;
    } else {
      if (currentNode.value !== deleteValue){
        temp.push(currentNode.value);
      }
    }

    roundUp(currentNode.right);
    roundUp(currentNode.left);
  }

  roundUp(this.root);

  if (temp.length === this.size){
    console.log('deleteValue: ' + deleteValue + ' was not found in binary search tree');
    return;
  }

  // create temporary tree
  var tempTree = new binarySearchTree();

  // iterate through all of the found values that weren't the target
  // and insert them into the new tree
  temp.forEach(function(value){
    tempTree.insert(value);
  })

  // reinitialize the root as the tempTree root
  this.root = tempTree.root;

  // reduce size of tree
  this.size--;
  
  console.log(deleteValue + ' has been deleted from the tree');
}

// var test = new binarySearchTree();

// test.insert(5);
// test.insert(3);
// test.insert(8);
// test.insert(1);
// test.insert(2);
// test.insert(4);
// test.insert(10);
// test.delete(3);
