
import{integerSubproof,notProposition,contradiction} from '../proposition/propositionParser.js';
import rl from "readline-promise";
const readline = rl.default;

const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});

rlp.question(`Enter proposition   `, (proposition) => {
  //proposition is shown

      console.log('-----Worksheet-----');

      // log user details
      console.log("-- Direct proof --");
      console.log(`Claim: \n ${proposition}`);
      console.log("Proof:");
      
      integerSubproof(proposition);  
      
      notProposition(proposition);

      contradiction(proposition);

      // close the stream
      rlp.close();


 

});
