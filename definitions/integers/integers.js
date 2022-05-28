//This is an attempt of defining an integer on a computer without prior knowledge.
//A work in progress


function isInteger(n){
  if(n == 0){
    console.log("n is 0. Zero is an integer")
    console.log ("n is an integer");
  }
  
  if(n!=0 && n %1 == 0){
    console.log(n + " "+ "mod 1 is 0, so it is an integer ");
    console.log (n+ " "+" is an integer");
    }
    else{
    console.log(n +" " + "is not an integer");
  }
    return("Checked above to see" +' ' + n + ' ' + "is an integer");
  }
  
  export { isInteger };