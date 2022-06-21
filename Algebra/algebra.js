//References
//https://towardsdatascience.com/proving-inequalities-aab03b0588d5
//https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
//https://javascript.plainenglish.io/data-structures-binary-tree-f8da24fe9602
//https://codepen.io/arlenross/pen/PozNYbL

var expression = '3*x + 4*x';

class simplify {
constructor(operation,left,right) {
this.operation=operation;
this.left=left;
this.right=right;

}
}

const add = (a, b) => a + b
const sub = (a, b) => a - b
const mul = (a, b) => a * b
const div = (a, b) => a / b

class simplifyTree {
constructor(head) {
this.head=head;
}
}

/////////////////////////////////////////

const isNode = n => 
  typeof(n) === 'object' && n.left && n.right

//collapse method mirrored from refference
//Binary Tree - Methods

simplifyTree.prototype.collapse = function(node) { 
  node ||= this.head
  let l, r
  if(isNode(node.left)) {
    l = this.collapse(node.left)
  }
  if(isNode(node.right)) {
    r = this.collapse(node.right)
  }
  
  l ||= node.left
  r ||= node.right
  
  return node.operation(l, r)
}

////////////////////////////////////////

var tree = new simplifyTree(
  new simplify (add, 
  new simplify(mul,3,4), 
  new simplify(sub,14,7)
  )
)
console.log(tree);
console.log(tree.of);
console.log(tree.collapse());