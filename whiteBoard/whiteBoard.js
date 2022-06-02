
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'
const readline = rl.default;

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

rlp.question(`Enter proposition   `, (proposition) => {
  //proposition is shown
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

      // log user details
      console.log("-- Direct proof --");
      console.log(`Claim: \n ${proposition}`);
      console.log("Proof:");
            
      // close the stream
      rlp.close();


});
