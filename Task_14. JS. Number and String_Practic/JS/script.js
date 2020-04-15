let a
function randomNuber(min,max) {
    a = Math.floor(Math.random() * (max - min + 1) + min);
    return a;
}

function whatNumber(a) {
    if (a % 2) {
         return( "  - neparne chuslo");}
    else
        {return( "  - parne chuslo");}
    
}
console.log(randomNuber(0, 100) + whatNumber(a));

let str= ('lorem ipsum is simply dummy');
b = str.substr(0,5);
let d = str.replace("lorem", b.toUpperCase());
console.log(d);


let st1=prompt("vvedit rjadok 1"), st2=prompt("vvedit rjadok 2");
   function GetLongerString(st1,st2) {
         (st1.length>st2.length) ? console.log(st1 + " - dovshe") : console.log(st2 + " - dovshe"); 
        }
    GetLongerString(st1,st2)