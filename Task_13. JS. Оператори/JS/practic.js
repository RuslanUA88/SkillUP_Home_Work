
// Практика по JS.Оператори

 let a = prompt("Vvedit chuslo")
 if(a > 0){
     console.log(1)
 } else if (a <0){
    console.log(-1)
 } else {console.log(0)}


 let b = 1;
let n;
 (b > 0)?  n = true : n = false ;
 console.log(n);


 c = 5; d = 3;
 console.log((c>d) && (c===d));
 console.log(true && 0 && ('c' < 'Z'));
 console.log((c>d) || true || ('2'==2) || (false == ''));
 console.log((c<d) && (0 == false));
 console.log(!(2==2) || (true && ''));


 let e = prompt("Vvedit cufry");
 switch(e) {
     case '1': console.log('a');
         break;
     case '2': console.log('b');
         break;
     case '3': console.log('c');
         break;
     default: console.log('z');
         break;
 }


 for ( let i = 1; i <=9; i++ ) {
     console.log( i * i );
 }
    

 let i = 1;
     while (i <=9) {
     console.log( i * i );
         i++;
     }
     
    let x = prompt("Vvedit X");
    let y = prompt("Vvedit Y");
    function biggest(x, y){
        if (x > y) {
            return true;
        }
    }
        if ( biggest(x, y) ) {
            console.log( 'X > Y' );
          } else {
            console.log( 'X <= Y' )
          }
