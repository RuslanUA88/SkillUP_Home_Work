let str = prompt('Input some strim');

function trimString(str,maxlength){
    let a = maxlength - 3;
   return (str.length > maxlength)? (str.substr(0, a) + '...') : str;
 }
console.log(trimString( str,5));