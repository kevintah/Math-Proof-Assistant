//References
//https://towardsdatascience.com/proving-inequalities-aab03b0588d5
//https://adrianmejia.com/data-structures-for-beginners-trees-binary-search-tree-tutorial/
//https://javascript.plainenglish.io/data-structures-binary-tree-f8da24fe9602
//https://codepen.io/arlenross/pen/PozNYbL


import rl from "readline-promise";
var readline = rl.default;
var rlp1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});



class simplify {
constructor(operation,left,right) {
this.operation=operation;
this.left=left;
this.right=right;

}
}

//const add = (a, b) => a+'+'+ b


let add = function (a, b) {
  if(isNaN(a) !== true && isNaN(b) !== true){
  return a + b;
  }
  else{
   return a +'+'+ b
  }
};
    


//const sub = (a, b) => a +'-'+ b
let sub = function (a, b) {
  if(isNaN(a) !== true && isNaN(b) !== true){
  return a - b;
  }
  else{
   return a +'-'+ b
  }
};
//const mul = (a, b) => a +'*'+ b
let mul = function (a, b) {
  if(isNaN(a) !== true && isNaN(b) !== true){
  return a * b;
  }
  else{
   return a +'*'+ b
  }
};
//const div = (a, b) => a +'/'+ b
let div = function (a, b) {
  if(isNaN(a) !== true && isNaN(b) !== true){
  return a / b;
  }
  else{
   return a +'/'+ b
  }
};

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
  var l, r
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
  new simplify(div,'x',4), 
  new simplify(sub,14,'y')
  )
)

console.log(tree);
console.log(tree.collapse())


rlp1.question(`Please enter algebraic expression  `, tree2 => {
console.log(tree2);
console.log(eval(tree2));

  rlp1.close();
});

