
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'

import{statementSplitter,consequenceSplitter,splitStatement,splitConsequence} from  "../proposition/propositionParser.js";

import{assumption,consequenceOfAssumption,contradiction} from '../proof/contradictionProof.js'


const readline = rl.default;
var proposition;
var statement;
var consequence;

const rlp1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});



rlp1.question(`Enter statement   `, (statement) => {
     statement = statement;

      console.log('\n');
      successor(2);

      console.log('\n');
      transitive(x,y,z);

      console.log('\n');
      reflexive(x);

      console.log('\n');
      closure(x,y);

      console.log('\n');

      console.log('-----Worksheet-----');

      
            
      // close the stream
      statementSplitter(statement);
      
      //rlp1.close();


//});

rlp1.question(`Enter consequence   `, (consequence) => {
    consequence = consequence;
    consequenceSplitter(consequence);
 //proposition is shown

rlp1.close();

proposition = ( statement +"." +" " + consequence )
console.log ("Proposition:" );
console.log("\n");

// claim and direct proof
console.log("--  proof --");
console.log(`Claim: \n `+ splitStatement.join(' ') + ' ' +'then' + ' ' +splitConsequence.join(' '));
console.log("Proof:");


console.log('--By Contradiction --');
contradiction(splitStatement,consequence);


});
});




export{proposition,statement,consequence};
