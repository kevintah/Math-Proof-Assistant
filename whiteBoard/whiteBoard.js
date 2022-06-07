
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'

import{statementSplitter,consequenceSplitter,splitStatement,splitConsequence,show} from  "../proposition/propositionParser.js";

import{assumption,consequenceOfAssumption,contradiction} from '../proof/contradictionProof.js'

import{contraAssumption,consequenceOfContraAssumption,contrapositive} from '../proof/contraPositiveProof.js'

import{deMorgan,fullString,slick1,slick2,nar,nar2} from '../Logic_demorganRules/demorganRules.js'

import{union,unionWritter,intersection,intersectionWritter,sDifference,fullString2,fullString3} from '../Sets/setAlgebra.js'

import{universalWritter,existentialWritter,fullString4,fullString5,regExistential,regUniversal} from '../Quantifiers/quantifiers.js'


var readline = rl.default;
var proposition;
var statement;
var saveStatement;
var consequence;
var consequence2;

var rlp1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});



rlp1.question(`Enter statement   `, (statement) => {

var regEx1 = /[wxyz]/g;
var regEx2 = /[ABCPQ]/g;
var regEx3 = /(exist)/g;
var regEx4 = /(for all)/g;
var regEx5 = /(union)/g;
var regEx6 = /(intersection)/g;
var regEx7 = /[v]/g;
var regEx8 = /[\^]/g;
var regEx9 = /[!]/g;
      
        //verify syntax
        if(statement !== null && regEx1.test(statement) == false &&  regEx2.test(statement) == false && regEx3.test(statement) == false && regEx4.test(statement) == false && regEx5.test(statement) == false&& regEx6.test(statement) == false && regEx7.test(statement) == false && regEx8.test(statement) == false && regEx9.test(statement) == false){
          console.log('bad syntax');
          return 0;
        }



      saveStatement = statement;
      consequence2 = consequence;


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

     



      consequence2 = consequence;

      slick1(saveStatement);
      if(nar != null){
            consequence = nar;
      }

      slick2(saveStatement);
      if(nar2 != null){
            consequence = nar2;
      }

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




export{proposition,statement,consequence,consequence2,saveStatement};
