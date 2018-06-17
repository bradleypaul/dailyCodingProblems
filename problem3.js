/*Given the root to a binary tree, implement serialize(root),
 which serializes the tree into a string,
  and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
*/

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const serialize = root => {
    return JSON.stringify(root);
}

const deserialize = s => {
    return JSON.parse(s);
}

node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
console.log(deserialize(serialize(node)).left.left.val);