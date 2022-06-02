import{proposition,statement,consequence} from '../whiteBoard/whiteBoard.js';

var splitStatement;
var splitConsequence;

function statementSplitter(statement){

splitStatement = statement.split(" ");
console.log(splitStatement);
}

function consequenceSplitter(consequence){

  splitConsequence = consequence.split(" ");
  console.log(splitConsequence);
  }

export{statementSplitter,consequenceSplitter,splitStatement,splitConsequence};

