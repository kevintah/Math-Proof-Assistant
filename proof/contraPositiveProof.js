//References
//https://en.wikipedia.org/wiki/Contraposition

var assumption  = (proposition) => {
  //Not proposition  (~ at least part of proposition)
  //example: a is a natural number
  //Not proposition is a

  
  };   
  
  assumption;
  
  
  var consequence = (consequence) => {
    //example negate(a natural number times a is also a natural number)
    consequence = !consequence;
  
  }
  
  
  function contradiction(assumption){
    if( consequence == true){
      console.log('proven by contraposition')
    }
  
  }
  
  