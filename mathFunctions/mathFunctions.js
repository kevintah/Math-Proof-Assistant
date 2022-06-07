//References
//https://www.whitman.edu/mathematics/higher_math_online/section04.01.html
//https://en.wikipedia.org/wiki/Function_(mathematics)
//https://en.wikipedia.org/wiki/Homomorphism
//https://stackoverflow.com/questions/16312528/check-if-an-array-contains-any-element-of-another-array-in-javascript


// form 

// statement : A = [] B = []
// consequence f: A -> B is injective (one-to-one)
// consequence f: A -> B is surjective (onto)
// consequence f: A -> B is bijective

//import{proposition,statement,consequence,consequence2,saveStatement} from '../whiteBoard/whiteBoard.js'

var string1 = 'A=[1,2,3,4,5,6] B=[1,2,3,4,5,6]';
var regExSet = /([A-Z][=]\[)([0-9][,])+[0-9]\]/g;
var regExCSet = /(f:[A-Z]->[A-Z] is )[a-z]+/g;

var set_1 = [];
var set_2 =[];

function getSets(string){
if(string !== null && regExSet.test(string) == true){
  var arr1 = string1.split(' ');
  var arr2_1 = arr1[0];
  var arr2_1_1 = arr2_1.split('=')
  var set1 = arr2_1_1[1];
  set1 = set1.split();
  set1 = set1[0];

  var arr2 = string1.split(' ');
  var arr3_1 = arr2[1];
  var arr3_1_1 = arr3_1.split('=')
  var set2 = arr3_1_1[1];
  
  set2 = set2.split();
  set2 = set2[0];
  console.log(set1 + ' ' + set2);

  for(var i=1; i<set1.length-1; i++){
    if(i%2 !=0){
     set_1[i-1] = set1[i];
    }
  }
  for(var i=1; i<set2.length-1; i++){
    if(i%2 !=0){
     set_2[i-1] = set2[i];
    }
  }
  set_1=set_1.join('').split(''); 
  set_2=set_2.join('').split(''); 
}
}


function checkBijection(set_1,set_2){

  if(set_2.every( ai => set_1.includes(ai) ) &&  set_1.every( ai => set_2.includes(ai) )){
  console.log('f is a bijection');
  }
}


getSets(string1);
checkBijection(set_1,set_2);
console.log(set_1);
console.log(set_2);
