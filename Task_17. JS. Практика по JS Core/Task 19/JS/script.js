let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function rever(arr){
    let arrReverse=[];
for (let i = 0; i < arr.length; i++) {
    arrReverse[i]=arr[arr.length -1 - i];
} return arrReverse;
}
console.log(rever(arr));