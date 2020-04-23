let max = 10;
let min = 1;

function getRandomNumber(number) {
    let arr=[];
        for ( let r = 0 ; arr.length < number; r++ ){
        r = Math.floor(Math.random()*(max-min+1))+min;  
        arr.push(r);
    }
         return (arr);
}
     console.log(getRandomNumber(10));