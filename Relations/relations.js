//References
//https://www.mathwarehouse.com/algebra/relation/math-function.php
//https://en.wikipedia.org/wiki/Relation_(mathematics)
// A relation is an ordered pair 
//https://www.mathwarehouse.com/ordered-pairs/interactive-ordereded-pairs.php
//https://www.cliffsnotes.com/study-guides/calculus/precalculus/functions/relations-vs-functions

var A = [1,2,3,4,5,6,7];
var B = [4,5,2,1,4,5,6];
var C = [[1,3],[32,3],[3,2]];

var AB = [];

function createRelation(A,B){
  if(A.length < B.length || A.length == B.length){

  for(var i = 0; i = A.length; i++){

    AB[i] = [A[i], B[i]];
     
  }
  
   console.log(AB);

}

if(B.length < A.length){

  for(var i = 0; i = B.length; i++){

    AB[i] = [A[i], B[i]];
     
  }
 console.log(AB);
}

}


function checkRelation(C){

  if(Array.isArray(C) == true){
    for(var i = 0; i < C.length; i++ ){
      if(Array.isArray(C[i]) == true && C[i].length == 2){
        console.log(" This is a relation");
      }
    }
  }

}


checkRelation(C);
createRelation(A,B);

export{checkRelation,createRelation}