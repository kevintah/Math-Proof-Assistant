//References
//https://medium.com/@jepedesu/this-week-i-learned-7-e1c3c9417029#:~:text=De%20Morgan's%20Laws,to%20transform%20a%20logic%20expression.
//https://www.whitman.edu/mathematics/higher_math_online/section01.03.html

var string = 'sddsdssgrhs!(a^b)ghgddsfgs!(avb)ds'
function deMorgan1(string){

  var regEx = /!\([a-z]v[a-z]\)/g;
  var found = string.match(regEx);
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
  var fullString = string.replaceAll(regEx, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
}


function deMorgan2(string){

  var regEx = /!\([a-z]\^[a-z]\)/g;
  var found = string.match(regEx);
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
  var fullString = string.replaceAll(regEx, newString); 
  console.log(string)
  console.log(found);
  console.log(newString);
  console.log(string + ' == ' + fullString);
}


function deMorgan(string){
   deMorgan1(string);
   deMorgan2(string);
}

deMorgan(string);


export{deMorgan}