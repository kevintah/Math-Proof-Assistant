//References
//https://en.wikipedia.org/wiki/Peano_axioms
//https://mathcs.org/analysis/reals/logic/numbers.html

var x;
var y;
var z;

var naturalNumbers = [];
naturalNumbers.push("x");
naturalNumbers.push("y");
naturalNumbers.push("z");


function successor(x){
  console.log("x+1"+ "is the successor of x");
}

function transitive(x,y,z){
  if (x ==y && y ==z && x ==z){
    console.log("x ==y && y ==z && x ==z" + " "+ "hence transitivity" );
  }
}

function reflexive(x){
    x==x;
   console.log("x==x" + " " + "hence reflexive");
}

function closure(x,y){
   
       naturalNumbers.push('x+y');
       naturalNumbers.push('x*y');
       naturalNumbers.push('x-y');
     
   
   console.log("if x is a natural number and y is a natural number");
   console.log('\n');
   console.log("then (x+y) is a natural number");
   console.log('\n');

   console.log("then (x*y) is a natural number");
   console.log('\n');

   console.log("then (x-y) is a natural number");
   console.log('\n');


   console.log("a subset of natural numbers must include" + JSON.stringify(naturalNumbers));
   console.log('\n');
   console.log('the sum, difference, product of natural numbers is a natural number')

}

export{successor,transitive,reflexive,closure,x,y,z,naturalNumbers}

