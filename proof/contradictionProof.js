//References
//https://en.wikipedia.org/wiki/Contradiction

import{statementSplitter,consequenceSplitter,splitConsequence,splitStatement} from '../proposition/propositionParser.js';

var newStatement;
function assumption(splitStatement){
//takes statement and negates
    splitStatement[0] ='Assumption: ! ('

};   



function consequenceOfAssumption(splitConsequence){
  //example a natural number times a is also a natural number
  splitConsequence = splitConsequence;

}


function contradiction(splitStatement,consequence){
  assumption(splitStatement);
  consequenceOfAssumption(consequence);
  splitConsequence.unshift('=>');
  newStatement = splitStatement.concat( splitConsequence); 
  newStatement = newStatement.join(' ');
  console.log(newStatement);
  console.log('This is a contradiction');
}

export{assumption,consequenceOfAssumption,contradiction}
