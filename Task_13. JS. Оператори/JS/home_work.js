



  function chainToSwitch(val){
      let answer =""
  switch (val) {
  case "bob":
    answer = ("Marley");
  break;
  case 42:
    answer = ("The Answer");
  break;
  case 1:
    answer = ( "There is no #1");
  break;
  case 7:
    answer = ("Ate Nine");
  break;
  default:
    answer = ('Я таких значень не знаю');
  }
  return answer
}
console.log(chainToSwitch(7));


  function findGreater(a, b) {
    return (a > b)? "a is greater" :"b is greater";
  }
console.log(findGreater(2, 10));

 let i = 10;
 while(i >= 0){
     console.log(i);
     i--;
 }



 function findNumber(c, d){
      if(c > d) {
    console.log( "d is greater");
  }
  else {
    for (let w = c + 1; w < d; w++) {
        if ( w % 2 == 1) {
            console.log(w);
        }
    } 
  }
  return ;
 }
 console.log(findNumber(2,13));