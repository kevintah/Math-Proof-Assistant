//References
//https://medium.com/@jepedesu/this-week-i-learned-7-e1c3c9417029#:~:text=De%20Morgan's%20Laws,to%20transform%20a%20logic%20expression.
//https://www.whitman.edu/mathematics/higher_math_online/section01.03.html

import{universalWritter,existentialWritter,fullString4,fullString5,regExistential,regUniversal} from '../Quantifiers/quantifiers.js'

import{proposition,statement,consequence,saveStatement,consequence2} from '../whiteBoard/whiteBoard.js'


//var string = '!(for all x in Q)';
var fullString;
var consequence2Array;
var consequence3Array;
var nar;
var nar2;


function deMorgan1(string){
    
  var regEx = /!\([A-Z]v[A-Z]\)/g;
  var found = string.match(regEx);
  if(found != null){

  found = found.toString('');
  var newString= [];
  
  newString[0] = found[1];
  newString[1] = found[0];
  newString[2] = found[2];
  newString[3] = '^';
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

  var regEx = /!\([A-Z]\^[A-Z]\)/g;
  var found = string.match(regEx);
  if(found != null){
  found = found.toString('');
  var newString= [];
  
  newString[0] = found[1];
  newString[1] = found[0];
  newString[2] = found[2];
  newString[3] = 'v';
  newString[4] = '!';
  newString[5] = found[4];
  newString[6] = found[5];
  newString = newString.join('');
  fullString = string.replaceAll(regEx, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
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
  //console.log(found);

  var newString= [];
  
  newString[0] = 'there';
  newString[1] = ' exist';
  newString[2] = ' ' + found[2];
  newString[3] = ' ' + found[3];
  newString[4] = ' ' + found[4];

  
  //console.log(newString[4]);
  //console.log('newString' + newString);

  var hFix = newString[4];
  hFix = hFix.toString('');
  hFix = hFix.split('');
  hFix = hFix[1];

  newString[4] = ' ' + hFix;

  //console.log(hFix);
 
  newString = newString.join('');
  fullString = string.replaceAll(regUniversal, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);

 
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
  //console.log(found);

  var newString= [];
  
  newString[0] = 'for';
  newString[1] = ' all';
  newString[2] = ' ' + found[2];
  newString[3] = ' ' + found[3];
  newString[4] = ' ' + found[4];

  
  //console.log(newString[4]);
  //console.log('newString' + newString);

  var hFix = newString[4];
  hFix = hFix.toString('');
  hFix = hFix.split('');
  hFix = hFix[1];

  newString[4] = ' ' + hFix;

  //console.log(hFix);
 
  newString = newString.join('');
  fullString = string.replaceAll(regExistential, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
  console.log(string + ' == ' + fullString);
  }
  else{
    fullString = string;
  }
}




//deMorgan4(string);





function slick1(saveStatement){
  var regUniversal = /\!\(for all [a-z] in [A-Z]\)/g;
  var found = saveStatement.match(regUniversal);
  //universalWritter(found);
  if(found != null){

    found = found.toString('');
    found = found.split(' ');
    //console.log(found);
  
    var newString= [];
    
    newString[0] = 'there';
    newString[1] = ' exist';
    newString[2] = ' ' + found[2];
    newString[3] = ' ' + found[3];
    newString[4] = ' ' + found[4];

  
    //console.log(newString[4]);
    //console.log('newString' + newString);
  
    var hFix = newString[4];
    hFix = hFix.toString('');
    hFix = hFix.split('');
    hFix = hFix[1];
  
    newString[4] = ' ' + hFix;
  
    //console.log(hFix);
    

   
    //newString = newString.join('');



    console.log(consequence2); 
    consequence2Array = consequence2.split('');
    consequence2Array.unshift('!');
    consequence2Array.unshift('^');
    var interArr = newString.concat(consequence2Array);
    nar = interArr.join('');
    
 
}
}

function slick2(saveStatement){
  var regExistential = /\!\(there exist [a-z] in [A-Z]\)/g;
  var found = saveStatement.match(regExistential);
  //universalWritter(found);
  if(found != null){

    console.log('+++++++++++++++++++++++++++++++++++++++++++++'+ consequence2); 
    consequence3Array = consequence2.split('');
    consequence3Array.unshift('!');
    //consequence3Array.unshift('^');
    nar2 = consequence3Array.join('');
    
 
}
}





function deMorgan(string){
   deMorgan1(string);
   deMorgan2(string);
   deMorgan3(string);
   deMorgan4(string);
   //console.log(fullString);
}
  


//deMorgan(string);

export{deMorgan,fullString,slick1,slick2,nar,nar2}