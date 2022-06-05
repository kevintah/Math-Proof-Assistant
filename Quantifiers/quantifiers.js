//References
//https://www.whitman.edu/mathematics/higher_math_online/section01.02.html

var regUniversal = /for all [a-z] in [A-Z]/g;
var regExistential = /there exist [a-z] in [A-Z]/g;
var fullString4;
var string = 'for all x in Q(x)';
var string2 = 'there exist x in Q(x)';


function universalWritter(string){
  var found = string.match(regUniversal);
  if(found != null){
  found = found.toString('');
  found = found.split(' ');
  console.log(found);
  var newString= [];
  
  newString[0] = ' \u2200 ';
  newString[1] = found[2];
  newString[2] = ' in ';
  newString[3] = found[found.length -1];
  
  newString = newString.join('');
  fullString4 = string.replaceAll(regUniversal, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
  console.log(fullString4);
  }
  else{
    fullString4 = string;
    //console.log(newString);
  }
}

universalWritter(string);


function existentialWritter(string){
  var found = string.match(regExistential);
  if(found != null){
  found = found.toString('');
  found = found.split(' ');
  console.log(found);
  var newString= [];
  
  newString[0] = ' \u2203 ';
  newString[1] = found[2];
  newString[2] = ' in ';
  newString[3] = found[found.length -1];
  
  newString = newString.join('');
  fullString4 = string.replaceAll(regExistential, newString); 
  //console.log(string)
  //console.log(found);
  //console.log(newString);
  console.log(fullString4);
  }
  else{
    fullString4 = string;
    //console.log(newString);
  }
}

existentialWritter(string2);