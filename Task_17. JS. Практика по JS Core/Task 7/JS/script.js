let str;
function getStringByFor(str){
    let arr=[''];
    for (let i = 1; i < 10; i++) { 
        arr.push(i);
     }
     return (str=arr.join('-') + '-');
}
console.log(getStringByFor(str));