//References
//https://en.wikipedia.org/wiki/Peano_axioms
//https://mathcs.org/analysis/reals/logic/numbers.html

var x,y,z;

const naturalNumbers = new Set();
naturalNumbers.add(x);
naturalNumbers.add(y);
naturalNumbers.add(z);


function successor(x){
  return x+1;
  console.log("x+1"+ "is the successor of x");
}

function transitive(x,y,z){
  if (x ==y && y ==z && x ==z){
    console.log("x ==y && y ==z && x ==z" + " "+ "hence transitivity" );
  }
}

function reflexive(x){
    x==x;
   console.log("x==x" + "hence reflexive");
}

function closure(x,y){
   for(x in naturalNumbers){
     for(y in naturalNumbers){
       naturalNumbers.add(x+y);
       naturalNumbers.add(x*y);
       naturalNumbers.add(x-y);
       naturalNumbers.add(x/y);
     }
   }
}

export{successor,transitive,reflexive,closure,x,y,z,naturalNumbers}

