

let firstDate = new Date(2010,01,01); 
let secondDate = new Date(2011,01,01); 

function diffDate(firstDate, secondDate){
    return (secondDate - firstDate);
}
console.log ( "the difference is " + diffDate(firstDate, secondDate)/86400000 + " days" );
console.log( "the difference is " + diffDate(firstDate, secondDate)/3600000 + " hours" );
