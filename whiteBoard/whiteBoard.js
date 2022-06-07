
import rl from "readline-promise";

import{successor,transitive,reflexive,closure,x,y,z,naturalNumbers} from '../peanoAxioms/naturalNumbers_Peano.js'

import{statementSplitter,consequenceSplitter,splitStatement,splitConsequence,show} from  "../proposition/propositionParser.js";

import{assumption,consequenceOfAssumption,contradiction} from '../proof/contradictionProof.js'

import{contraAssumption,consequenceOfContraAssumption,contrapositive} from '../proof/contraPositiveProof.js'

import{deMorgan,fullString,slick1,slick2,nar,nar2} from '../Logic_demorganRules/demorganRules.js'

import{union,unionWritter,intersection,intersectionWritter,sDifference,fullString2,fullString3} from '../Sets/setAlgebra.js'

import{universalWritter,existentialWritter,fullString4,fullString5,regExistential,regUniversal} from '../Quantifiers/quantifiers.js'

//import{getMap,generateSet_2,getSets,checkBijection,functionString,set_1,set_2} from '../mathFunctions/mathFunctions.js'

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



rlp1.question(`Enter consequence   `, (consequence) => {

      var regEx1 = /[wxyz]/g;
      var regEx2 = /[ABCPQ]/g;
      var regEx3 = /(exist)/g;
      var regEx4 = /(for all)/g;
      var regEx5 = /(union)/g;
      var regEx6 = /(intersection)/g;
      var regEx7 = /[v]/g;
      var regEx8 = /[\^]/g;
      var regEx9 = /[!]/g;
      //var string1 = 'A=[1,2,3,4,5,6] B=[1,2,3,4,5,6]';
      //var stringMap = 'map(x => x**2)';
      var regExSet = /([A-Z][=]\[)([0-9][,])+[0-9]\]/g;
      var regExCSet = /(f:[A-Z]->[A-Z] is )[a-z]+/g;
      var regExdmap = /map\(x =>(.*)/g;
      
            
              //verify syntax
              if(statement !== null && regEx1.test(statement) == false &&  regEx2.test(statement) == false && regEx3.test(statement) == false && regEx4.test(statement) == false && regEx5.test(statement) == false&& regEx6.test(statement) == false && regEx7.test(statement) == false && regEx8.test(statement) == false && regEx9.test(statement) == false&& regExSet.test(statement) == false && regExCSet.test(statement) == false && regExdmap.test(statement) == false){
                console.log('bad syntax');
                return 0;
              }
      
      
      
            saveStatement = statement;
            consequence2 = consequence;
      
            var regUniversal = /\!\(for all [a-z] in [A-Z]\)/g;
            var foundSet = saveStatement.match(regExSet);
            //universalWritter(found);
            if(foundSet != null){
      
                 
                  
                  
                  var functionString;
                  var dmap = x => x * 2;
                  
                  var set_1 = [];
                  var set_2 =[];
                  var generatedSet_2 =[];
                  
                  function getSets(string1){
                  if(string1 !== null && regExSet.test(string1) == true){
                    console.log(string1);
                    var arr1 = string1.split(' ');
                    console.log(arr1);
                    var arr2_1 = arr1[0];
                    console.log(arr2_1);
                    var arr2_1_1 = arr2_1.split('=')
                    console.log(arr2_1_1);
                    var set1 = arr2_1_1[1];
                    set1 = set1.split();
                    set1 = set1[0];
                    console.log(set1);
                  
                    var arr2 = string1.split(' ');
                    var arr3_1 = arr2[1];
                    var arr3_1_1 = arr3_1.split('=')
                    var set2 = arr3_1_1[1];
                    
                    set2 = set2.split();
                    set2 = set2[0];
                    console.log(set1 + ' ' + set2);
                  
                    for(var i=1; i<set1.length-1; i++){
                      if(i%2 !=0){
                       set_1[i-1] = set1[i];
                      }
                    }
                    for(var i=1; i<set2.length-1; i++){
                      if(i%2 !=0){
                       set_2[i-1] = set2[i];
                      }
                    }
                    set_1=set_1.join('').split(''); 
                    set_2=set_2.join('').split(''); 
                  }
                  }
                  
                  function getMap(consequence){
                        functionString = consequence.split('').join('');
                        console.log(functionString);
                  }
                  
                  function generateSet_2(set_1){
                    getMap(consequence);
                    generatedSet_2 = eval('set_2.'+functionString); 
                   
                    console.log(generatedSet_2);
                  }
                  
                  
                  function checkBijection(set_1,set_2){
                  
                    if(set_1.length == set_2.length){
                    
                    console.log('f is a  ' + consequence + ' from set1 to set2');
                  
                    console.log('f is one to one and onto');
                  
                    console.log('f is a bijection');
                    }
                  }
                  
                  
             getSets(statement);
             checkBijection(set_1,set_2);
             console.log(set_1);
             generateSet_2(set_1);
             console.log(set_2);
      
             return 0;
            }
      
            
      
      
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
