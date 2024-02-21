class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        // if the value already exists in the bst
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < current.val) {
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);

    } else if (current.right === null) {
      current.right = new Node(val);
      return this;
    }
    return this.insertRecursively(val, current.right)
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    let found = false;
    
    if (val === current) return current;

    while (current && !found) {
      if (val < current.val) {
          current = current.left;
        }
        else if (val > current.val) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (!found) return undefined;
      return current;
    }
    

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (current === null) return undefined;
    if (val < current.val) {
      if (current.left === null) return undefined;
      return this.findRecursively(val, current.left);
    } else if (val > current.val) {
      if (current.right === null) return undefined;
      return this.findRecursively(val, current.right);
     }
     return current;
  }
  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * current, left, right
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let results = [];
    let current = this.root;

    function traverse(node) {
      // current
      results.push(node.val);

      // move left, traverse whole left side
      node.left && traverse(node.left);

      // move right, traverse whole right side
      node.right && traverse(node.right);
    }

    traverse(current);
    return results;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * left subtree, current, right subtree
   * Return an array of visited nodes. */

  dfsInOrder() {
    let results = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      results.push(node.val);
      node.right && traverse(node.right);
    }

    traverse(current);
    return results;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * left subtree, right subtree, current
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let results = [];
    let current = this.root;

    function traverse(node) {
      node.left && traverse(node.left);
      node.right && traverse(node.right);
      results.push(node.val);      
    }

    traverse(current);
    return results;
  }

  /** bfs(): Traverse the array using BFS.
   * Breadth First Search:
   * Visit all the nodes, level by level.
   * Return an array of visited nodes. */

  bfs() {
    let results = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift(); // remove first element in the queue
      results.push(node.val); // add that value to the final results
      if (node.left) { 
        queue.push(node.left); // add left node to the queue
      }
      if (node.right) {
        queue.push(node.right); // add right node to the queue
      }
     }
     return results;
  }
}

module.exports = BinarySearchTree;
