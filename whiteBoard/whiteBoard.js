
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'

import{splitter} from  "../proposition/propositionParser.js";

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
      splitter(statement);
      //rlp1.close();


//});

rlp1.question(`Enter consequence   `, (consequence) => {
    consequence = consequence;
 //proposition is shown

rlp1.close();

proposition = ( statement +"." +" " + consequence )
console.log ("Proposition:" );
console.log("\n");
console.log(proposition) ;

// claim and direct proof
console.log("-- Direct proof --");
console.log(`Claim: \n ${proposition}`);
console.log("Proof:");
});
});




export{proposition,statement,consequence};
