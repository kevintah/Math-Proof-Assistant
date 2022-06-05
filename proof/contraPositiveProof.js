//References
//https://en.wikipedia.org/wiki/Contraposition

import{statementSplitter,consequenceSplitter,splitConsequence,splitStatement} from '../proposition/propositionParser.js';

var newStatement2;
function contraAssumption(splitStatement){
//takes statement and negates
    splitStatement[0] ='!(';

};   



function consequenceOfContraAssumption(splitConsequence){
  splitConsequence =  splitConsequence.split('');
  splitConsequence.unshift('!(') ;
  splitConsequence.unshift('=>') ;
  splitConsequence[splitConsequence.length - 1] = ')';
  //splitConsequence[1] = splitConsequence[0];
  //splitConsequence[0] = '!('
  //console.log(splitConsequence);
}


function contrapositive(splitStatement,splitConsequence){
  contraAssumption(splitStatement);
  consequenceOfContraAssumption(splitConsequence);
  //splitConsequence[1] = '!';
  //console.log(splitConsequence);
  //splitConsequence.push(')');
  newStatement2 = splitStatement.concat(' => !('+ splitConsequence + ')'); 
  //console.log(newStatement2);
  newStatement2= newStatement2.join(' ');
  console.log(newStatement2);
  //console.log(splitConsequence);
}

export{contraAssumption,consequenceOfContraAssumption,contrapositive,newStatement2}


  