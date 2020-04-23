function getRandomNumber(number) {
    let arr=[];
     let max = 100;
     let min = 0;
        for ( let i = 0 ; arr.length < number; i++ ){
        i = Math.floor(Math.random()*(max-min+1))+min;  
        arr.push(i);
    }
       return (arr);
}
     console.log(getRandomNumber(10));