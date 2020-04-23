function getDigitsSum(digit){
    digitStr = String(digit);
    let digitArr=digitStr.split('');
    let finish=[];
     for (i=0; i < digitArr.length; i++){
        finish.push(parseInt(digitArr[i]));
     } 
     return finish.reduce((sum, current) => sum + current);
}

     function getNumber(number){
         let arrNumber=[];
             for (let i=100; i < 1000; i++){
                 if (getDigitsSum(i) == number)
                     arrNumber.push(i);
             } return arrNumber;
     }
     console.log(getNumber(9));
