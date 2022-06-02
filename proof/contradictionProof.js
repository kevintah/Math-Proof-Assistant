//References
//https://en.wikipedia.org/wiki/Contradiction

import{statementSplitter,consequenceSplitter,splitConsequence,splitStatement} from '../proposition/propositionParser.js';

var newStatement;
function assumption(splitStatement){
//takes statement and negates
    splitStatement.unshift('negation of:');

};   



function consequenceOfAssumption(splitConsequence){
  //example a natural number times a is also a natural number
  splitConsequence = splitConsequence;

}


function contradiction(splitStatement,consequence){
  assumption(splitStatement);
  consequenceOfAssumption(consequence);
  splitConsequence.unshift('then');
  newStatement = splitStatement.concat(splitConsequence); 
  console.log(newStatement);
}

export{assumption,consequenceOfAssumption,contradiction}
