
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'

import{statementSplitter,consequenceSplitter,splitStatement,splitConsequence,show} from  "../proposition/propositionParser.js";

import{assumption,consequenceOfAssumption,contradiction} from '../proof/contradictionProof.js'

import{contraAssumption,consequenceOfContraAssumption,contrapositive} from '../proof/contraPositiveProof.js'

import{deMorgan,fullString} from '../Logic_demorganRules/demorganRules.js'

import{union,unionWritter,intersection,intersectionWritter,sDifference,fullString2,fullString3} from '../Sets/setAlgebra.js'

import{universalWritter,existentialWritter,fullString4,fullString5,regExistential,regUniversal} from '../Quantifiers/quantifiers.js'


var readline = rl.default;
var proposition;
var statement;
var consequence;

var rlp1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});



rlp1.question(`Enter statement   `, (statement) => {

      deMorgan(statement);
      statement = fullString;

      unionWritter(statement);
      statement = fullString2;

      intersectionWritter(statement);
      statement = fullString3;

      universalWritter(statement);
      statement = fullString4;

      existentialWritter(statement);
      statement = fullString5;
      //statement = fullString3;
      //statement = statement;

      if(show == true){
      console.log('\n');
      successor(x);

      console.log('\n');
      transitive(x,y,z);

      console.log('\n');
      reflexive(x);

      console.log('\n');
      closure(x,y);

      console.log('\n');
      }
      console.log('-----Worksheet-----');
      
      
            
      // close the stream
      statementSplitter(statement);
      console.log(statement)
      console.log(fullString5)
      
      //rlp1.close();


//});

rlp1.question(`Enter consequence   `, (consequence) => {

      deMorgan(consequence);

      unionWritter(consequence);
      consequence = fullString2;

      intersectionWritter(consequence);
      consequence = fullString3;

      universalWritter(consequence);
      consequence = fullString4;

      existentialWritter(consequence);
      consequence = fullString5;

    //consequence = consequence;
    consequenceSplitter(consequence);
 //proposition is shown

rlp1.close();

proposition = ( statement +"." +" " + consequence )
console.log ("Proposition:" );
console.log("\n");

// claim and direct proof
console.log("--  proof --");
console.log(`Claim: \n `+ splitStatement.join(' ') + ' ' +'=>' + ' ' +splitConsequence.join(' '));
console.log("Proof:");


console.log('--By Contradiction --');
contradiction(splitStatement,consequence);

console.log('--By Contrapositive --');
contrapositive(splitStatement,consequence);


});
});




export{proposition,statement,consequence};
