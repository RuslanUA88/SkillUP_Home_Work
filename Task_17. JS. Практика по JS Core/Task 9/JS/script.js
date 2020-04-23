let arr = ['a', 'b', 'c'];
    let pushArr=(arr)=> {
        for ( let i = 1; i <4; i++){ arr.push(i)}
        return arr;
    };

    console.log(pushArr(arr));