let arr = [[1, 2, 3], [4, 5], [6]];

function getSumOfArray(arr){
    let resalt=[];
    for(let i=0; i <arr.length; i++){
     let intermediateResult = arr[i].reduce((sum, current) => sum + current);
     resalt.push(intermediateResult);
}
    return resalt.reduce((sum, current) => sum + current);
}

console.log(getSumOfArray(arr));
