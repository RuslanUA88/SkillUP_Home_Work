let arr=[];
let symbol = prompt('Input your sumbol : ');
let number = prompt('Input your number : ');
function arrayFill(symbol, number) {
    for (i=0; i < number; i++){
        arr.push(" ' " + symbol + " ' ");
    }
    return arr;
}
alert(arrayFill(symbol,number));