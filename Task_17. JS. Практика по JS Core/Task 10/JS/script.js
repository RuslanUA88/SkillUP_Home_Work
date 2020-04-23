let arr = [1, 2, 3];
    let pushArr=(arr)=> {
        for ( let i = 6; i >3 ; i--){ arr.unshift(i)}
        return arr;
    };

    console.log(pushArr(arr));