//References
//https://en.wikipedia.org/wiki/Algebra_of_sets

var A = [9,2,3];
var B = [1,4,3];
var regExU = /[A-Z] union [A-Z]/g;
var regExN = /[A-Z] intersection [A-Z]/g;
var regExdiff = /[A-Z]\/[A-Z]/g;

//var string = 'dsadAUBdasANFdasd'
var fullString2;
var fullString3;


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
  fullString2;
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[0];
  newString[1] = ' \u222A ';
  newString[2] = found[found.length -1];
  
  newString = newString.join('');
  fullString2 = string.replaceAll(regExU, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
  console.log(fullString2);
  }
  else{
    fullString2 = string;
    //console.log(newString);
  }
}

//union(A,B);
//unionWritter(string);

function intersection(){
    var setIntersection = A.filter(value => B.includes(value));
    console.log('A' + '\u2229'+ ' ' +'B =' + ' ' + '{'+ setIntersection+ '}');

}
function intersectionWritter(string){
  var found = string.match(regExN);
  fullString3;
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[0];
  newString[1] = ' \u2229 ';
  newString[2] = found[found.length -1];
  
  newString = newString.join('');
  fullString3 = string.replaceAll(regExN, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
  console.log(fullString3);
  }
  else{
    fullString3 = string;
    //console.log(newString);
  }
}


//intersection(A,B);
//intersectionWritter(string);


function sDifference(){
 
     setDifference =     A.filter(value => !B.includes(value));
     console.log('A'+'/'+'B =' + ' ' + '{'+ setDifference+ '}');


}

//sDifference(A,B);

export{union,unionWritter,intersection,intersectionWritter,sDifference,fullString2,fullString3}

