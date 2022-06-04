//References
//https://en.wikipedia.org/wiki/Algebra_of_sets

var A = [9,2,3];
var B = [1,4,3];
var regExU = /[A-Z]U[A-Z]/g;
var regExN = /[A-Z]N[A-Z]/g;
var regExdiff = /[A-Z]D[A-Z]/g;
var string = 'dsadAUBdasANFdasd'


var setUnion;
var setintersection;
var subset;
var setDifference;

function union(A,B){

   
   setUnion = A.concat(B);
   console.log('A' + '\u222A'+ ' ' +'B =' + ' ' + '{'+ setUnion + '}');
}

function unionWritter(string){
  var found = string.match(regExU);
  var fullString2;
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[0];
  newString[1] = '\u222A';
  newString[2] = found[2];
  
  newString = newString.join('');
  fullString2 = string.replaceAll(regExU, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  }
  else{
    fullString2 = string;
    console.log(newString);
  }
}

union(A,B);
unionWritter(string);

function intersection(){
    var setIntersection = A.filter(value => B.includes(value));
    console.log('A' + '\u2229'+ ' ' +'B =' + ' ' + '{'+ setIntersection+ '}');

}
function intersectionWritter(string){
  var found = string.match(regExN);
  var fullString2;
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[0];
  newString[1] = '\u2229';
  newString[2] = found[2];
  
  newString = newString.join('');
  fullString2 = string.replaceAll(regExN, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  }
  else{
    fullString2 = string;
    console.log(newString);
  }
}


intersection(A,B);
intersectionWritter(string);


function sDifference(){
 
     setDifference =     A.filter(value => !B.includes(value));
     console.log('A'+'/'+'B =' + ' ' + '{'+ setDifference+ '}');


}

sDifference(A,B);

export{union,unionWritter,intersection,intersectionWritter,sDifference}

