import{proposition,statement,consequence} from '../whiteBoard/whiteBoard.js';
import{deMorgan,fullString} from '../Logic_demorganRules/demorganRules.js'


var show = false;
var splitStatement;
var splitConsequence;
var regEx = /([^[a-z][A-Z]!=><)('=>''not'^v|'elem''union''intersection''||'&&'])/g;
function statementSplitter(statement){
  //verify syntax
  if(statement !== null && regEx.test(statement) == true){
    console.log('bad syntax');
  }else{

show = true;

deMorgan(statement);
statement = fullString;
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

