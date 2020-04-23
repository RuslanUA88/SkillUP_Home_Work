let arr = [1, 2, 2, 3, 2, 4, 5, 6, 7];
function findNumberOfItems(arr){
    let sum=0;
    let i;
    for ( i=0; i<arr.length; i++){
           sum = sum + arr[i];
           if (sum >10){ break}
    }
        console.log(sum);
        return (i+1);
}
console.log(findNumberOfItems(arr));