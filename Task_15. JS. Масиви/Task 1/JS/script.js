function randomNumber(number) {
    let arr=[];
    let arrFilter=[];
     let max = 100;
     let min = -100;
        for ( let r = 0 ; arr.length < number; r++ ){
        r = Math.floor(Math.random()*(max-min+1))+min;  
        arr.push(r);
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>10){
            arrFilter.push(arr[i]);
        }
    }
       console.log(arr);
       return (arr, arrFilter);
}
     console.log(randomNumber(10));
