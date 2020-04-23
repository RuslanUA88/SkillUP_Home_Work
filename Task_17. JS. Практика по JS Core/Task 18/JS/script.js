
// let ob= {
//     a : getLine(1),
//     b : getLine(2),
//     c : getLine(3),
//     d : getLine(4),
//     e : getLine(5),
//     f : getLine(6),
//     g : getLine(7),
//     j : getLine(8),
//     k : getLine(9)
// }
// function getLine(z){ 
//     let arr=[];
//     for( i = 0; i<=10; i++){
//     arr[i]=( z  + ' x ' + i + ' = ' + (z*i)); 
//  } return arr;
// }

// console.log(ob.a, ob.b, ob.c, ob.d, ob.e, ob.f, ob.g, ob.j, ob.k);



function getLine(){ 
       let arr=[];
       for (z=1; z<10; z++){
            for( i = 1; i<=10; i++){
    arr.push( z  + ' x ' + i + ' = ' + (z*i)); }
    } return arr;
}
console.log(getLine());