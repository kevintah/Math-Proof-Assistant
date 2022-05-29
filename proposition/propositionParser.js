import{isInteger} from '../definitions/integers/integers.js';
import{evenOdd}  from '../definitions/evenOdd/evenOdd.js';
import{divides,sum,product,difference} from '../language/language.js';
//import{consequence,contradiction,notProposition} from '../Proof/contradictionProof.js';


// Parse proposition


function integerSubproof(proposition){
var toParse = proposition;
var parsed = toParse.split(" ");

//sanity checks
//console.log(parsed);
//console.log(typeof(parsed[0]));

if(typeof(parsed[0]) =='string' && isNaN(Number(parsed[0])) == false){
  n = Number(parsed[0] && parsed[3]=='integer');
}

if(parsed != null){
  for(i = 0; i < parsed.length ; i++){
      if(parsed[i]== 'sum'){
        console.log('test1');
      };
      if(parsed[i]== 'difference'){
        console.log('test2');
      };
      if(parsed[i]== 'product'){
        console.log('test3');
      };

      if(parsed[i]=='divides'){
        console.log('test4');
    };
  }
}



//write Proof
var n = Number(parsed[0]);
console.log(' ' + isInteger(n)) ;

}


var consequence ={

  "state": true,
  

};


function notProposition(proposition){
  var toParse = proposition;
  var parsed = toParse.split(" ");

for( i = parsed.length -1; i>0; i--){
  parsed[i+1]= parsed[i];
}
 parsed[2] = parsed[1];
 parsed[2] = "not";
 var stringedParse = parsed.join(" ");
 console.log(stringedParse);
}

function contradiction(proposition){
if( notProposition(proposition)== false){
    consequence.state = true;
}

}






export{integerSubproof,notProposition};
