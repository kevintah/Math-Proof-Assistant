import{proposition,statement,consequence} from '../whiteBoard/whiteBoard.js';


var show = false;
var splitStatement;
var splitConsequence;
var regEx = /([^pq!=><)('=>''not'^v|])/g;
function statementSplitter(statement){
  //verify syntax
  if(statement !== null && regEx.test(statement) == true){
    console.log('bad syntax');
  }else{

show = true;
splitStatement = statement.split(" ");
splitStatement.unshift('if');
//console.log(splitStatement);
}
}

function consequenceSplitter(consequence){
  //verify syntax
show = false;
  if(statement !== null && regEx.test(consequence) == true){
    console.log('bad syntax');
  }else{
 
  show = true;
  splitConsequence = consequence.split(" ");
  //console.log(splitConsequence);
  }

}


export{statementSplitter,consequenceSplitter,splitStatement,splitConsequence,show};

