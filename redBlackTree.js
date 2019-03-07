class Node {
  constructor(id) {
    this.id = id;
    this.left = null;
    this.right = null;
    this.color = 'red';
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    let stack = [];
    let inserted = false;

    if (this.root === null) {
      this.root = newNode;
      this.root.color = 'black';
      return;
    }
    let current = this.root;

    while (!inserted) {
      stack.push(current);
      if (newNode.id < current.id) {
        if (current.left !== null) {
          current = current.left;
        } else {
          current.left = newNode;
          current = current.left;
          inserted = true;
        }
      } else {
        if (current.right !== null) {
          current = current.right;
        } else {
          current.right = newNode;
          current = current.right;
          inserted = true;
        }
      }
    }

    let parent = stack.pop();
    if (parent.color === 'black') {
      return;
    }

    let grandparent = stack[stack.length - 1];
    let uncle = (parent.id < grandparent.id) ? grandparent.right : grandparent.left;

    while (stack.length > 0) {
      if (uncle.color === 'red') {
        parent.color = 'black';
        uncle.color = 'black';
        grandparent.color = 'red';
        current = grandparent;
        stack.pop();
        if (stack.length === 0) {
          break;
        }
        parent = stack.pop();
        if (stack.length === 0) {
          current = parent;
          break;
        }
        grandparent = stack.pop();
        uncle = (parent.id < grandparent.id) ? grandparent.right : grandparent.left;
      } else {
        current = this.transform(current, parent, uncle, grandparent);
        if (stack.length === 0) {
          break;
        }
        parent = stack.pop();
        if (stack.length === 0) {
          current = parent;
          break;
        }
        grandparent = stack.pop();
        uncle = (parent.id < grandparent.id) ? grandparent.right : grandparent.left;
      }
    }

  }

  transform(current, parent, uncle, grandparent) {
    if (parent.id < grandparent.id) {
      if (current.id < parent.id) {
        // left left case
        let temp = parent.right;
        parent.right = grandparent;
        grandparent.left = temp;
        [parent.color, grandparent.color] = [grandparent.color, parent.color];
        return parent;
      } else {
        // left right case
        let temp = current.left;
        current.left = parent;
        parent.right = temp;

        temp = current.right;
        current.right = grandparent;
        grandparent.left = temp;
        [current.color, grandparent.color] = [grandparent.color, current.color];
        return current;
      }
    } else {
      if (current.id < parent.id) {
        // right right case
        let temp = parent.left;
        parent.left = grandparent;
        grandparent.left = temp;
        [parent.color, grandparent.color] = [grandparent.color, parent.color];
        return parent;
      } else {
        // right left case
        let temp = current.right;
        current.right = parent;
        parent.right = temp;

        temp = current.left;
        current.left = grandparent;
        grandparent.right = temp;
        [current.color, grandparent.color] = [grandparent.color, current.color];
        return current;
      }
    }
  }

  delete() {

  }

  contains() {

  }
}


let rbTree = new RedBlackTree();



rbTree.insert(7);
rbTree.insert(3);
rbTree.insert(18);
rbTree.insert(10);
rbTree.insert(22);
rbTree.insert(8);
rbTree.insert(11);
rbTree.insert(26);


console.log(rbTree.root.right);
