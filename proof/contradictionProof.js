
var consequence ={

     "state": true,
     

};


function notProposition(proposition){
  proposition = !proposition;
  return proposition;
}

function contradiction(proposition){
   if( notProposition(proposition)== false){
       consequence.state = true;
   }

   }

   export{consequence,contradiction,notProposition}