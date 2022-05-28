import{isInteger} from '../definitions/integers/integers.js';
import{evenOdd}  from '../definitions/evenOdd/evenOdd.js';

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

//write Proof
var n = Number(parsed[0]);
console.log(' ' + isInteger(n)) ;

}

export{integerSubproof};
