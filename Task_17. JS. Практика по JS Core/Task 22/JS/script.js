 let arr = [1, 2, -3, 4, 5, -1, 7, -1, 10];

let positivArr = arr.filter(function(isPositiv) { return isPositiv > 0;});
console.log( positivArr );

// function isPositive (arr){
//     let positivArr=[];
//     for (let i=0; i< arr.length; i++){
//         if (arr[i]>0)
//         positivArr.push(arr[i]);
//     }
//     return positivArr;
// }
// console.log(isPositive(arr));



// function isPositiv(arr) {
//          let positivArr=[];
//          for (let i=0; i< arr.length; i++){
//         positivArr[i]=(arr[i]>0)? true : false;
//   }return positivArr
//  }
// console.log(isPositiv(arr));

// let filterArr= arr.filter(item => isPositiv(arr) == true);
// console.log(filterArr);


 