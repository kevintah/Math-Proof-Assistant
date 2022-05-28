function evenOdd(a){
  if (a % 2 == 0){
    console.log(a + " " + "is even")
    return (a + "is even");
  }
  else{
    console.log(a + "is odd");
    return (a + "is odd");
  }
}

export{evenOdd};