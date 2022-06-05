//References
//https://medium.com/@jepedesu/this-week-i-learned-7-e1c3c9417029#:~:text=De%20Morgan's%20Laws,to%20transform%20a%20logic%20expression.
//https://www.whitman.edu/mathematics/higher_math_online/section01.03.html

import{universalWritter,existentialWritter,fullString4,fullString5,regExistential,regUniversal} from '../Quantifiers/quantifiers.js'

var string = '!(there exist x in Q)';
var fullString;
function deMorgan1(string){
    
  var regEx = /!\([a-z]|[a-z]\)/g;
  var found = string.match(regEx);
  if(found != null){

  found = found.toString('');
  var newString= [];
  
  newString[0] = found[1];
  newString[1] = found[0];
  newString[2] = found[2];
  newString[3] = '&';
  newString[4] = '!';
  newString[5] = found[4];
  newString[6] = found[5];
  newString = newString.join('');
  fullString = string.replaceAll(regEx, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
  }
  else{
    fullString = string;
  }
}


function deMorgan2(string){

  var regEx = /!\([a-z]\&[a-z]\)/g;
  var found = string.match(regEx);
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[1];
  newString[1] = found[0];
  newString[2] = found[2];
  newString[3] = '|';
  newString[4] = '!';
  newString[5] = found[4];
  newString[6] = found[5];
  newString = newString.join('');
  fullString = string.replaceAll(regEx, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
  }
  else{
    fullString = string;
  }
}


function deMorgan3(string){
  var regUniversal = /\!\(for all [a-z] in [A-Z]\)/g;
  var found = string.match(regUniversal);
  //universalWritter(found);
  if(found != null){
  found = found.toString('');
  found = found.split(' ');
  console.log(found);

  var newString= [];
  
  newString[0] = 'there';
  newString[1] = 'exist';
  newString[2] = ' ' + found[2];
  newString[3] = ' ' + found[3];
  newString[4] = ' ' + found[4];
 
  newString = newString.join('');
  fullString = string.replaceAll(regUniversal, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
  }
  else{
    fullString = string;
  }
}


//deMorgan3(string);

function deMorgan4(string){
  var regExistential = /\!\(there exist [a-z] in [A-Z]\)/g;
  var found = string.match(regExistential);
  //universalWritter(found);
  if(found != null){
  found = found.toString('');
  found = found.split(' ');
  console.log(found);

  var newString= [];
  
  newString[0] = 'for ';
  newString[1] = 'all';
  newString[2] = ' ' + found[2];
  newString[3] = ' ' + found[3];
  newString[4] = ' ' + found[4];
 
  newString = newString.join('');
  fullString = string.replaceAll(regExistential, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
  }
  else{
    fullString = string;
  }
}


deMorgan4(string);




function deMorgan(string){
   deMorgan1(string);
   deMorgan2(string);
   deMorgan3(string);
   deMorgan4(string);
   console.log(fullString);
}

//deMorgan(string);

export{deMorgan,fullString}