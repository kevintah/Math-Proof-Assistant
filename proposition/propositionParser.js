import{proposition,statement,consequence} from '../whiteBoard/whiteBoard.js';



var splitStatement;
var splitConsequence;
var regEx = /([^pq!=><)('=>'])/g;
function statementSplitter(statement){
  //verify syntax
  while (statement !== null) {
  if(regEx.test(statement) == true){
    console.log('bad syntax');
  }
}
splitStatement = statement.split(" ");
splitStatement.unshift('if');
console.log(splitStatement);
}

function consequenceSplitter(consequence){
  //verify syntax
  if (consequence !== null){

  if(regEx.test(consequence) == true){
    console.log('bad syntax');
  }
 }
  splitConsequence = consequence.split(" ");
  console.log(splitConsequence);
  }




export{statementSplitter,consequenceSplitter,splitStatement,splitConsequence};

