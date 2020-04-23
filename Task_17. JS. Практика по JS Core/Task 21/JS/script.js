let digit = prompt('Input digit');

function getDigitsSum(digit){
    let digitArr=digit.split('');
    let finish=[];
     for (i=0; i < digitArr.length; i++){
        finish.push(parseInt(digitArr[i]));
     } 
     return finish.reduce((sum, current) => sum + current);
}

console.log(getDigitsSum(digit));