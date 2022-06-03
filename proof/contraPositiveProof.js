//References
//https://en.wikipedia.org/wiki/Contraposition

import{statementSplitter,consequenceSplitter,splitConsequence,splitStatement} from '../proposition/propositionParser.js';

var newStatement;
function contraAssumption(splitStatement){
//takes statement and negates
    splitStatement[0] ='not';

};   



function consequenceOfContraAssumption(splitConsequence){

  //splitConsequence.unshift('not');

}


function contrapositive(splitStatement,consequence){
  contraAssumption(splitStatement);
  consequenceOfContraAssumption(consequence);
  splitConsequence[1] = 'not';
  //console.log(splitConsequence);
  splitConsequence.push(consequence);
  newStatement = splitStatement.concat(splitConsequence); 
  newStatement = newStatement.join(' ');
  console.log(newStatement);
}

export{contraAssumption,consequenceOfContraAssumption,contrapositive}


  