let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Eius veritatis';

    function getSortStr(str){
        let arr = str.split( ' ');
        function compareLength(a, b) {
            if (a.length > b.length) return 1;
            if (a.length == b.length) return 0;
            if (a.length < b.length) return -1;
          }
          arrSort=arr.sort(compareLength);    
    return arrSort.join(' ');
}
console.log(getSortStr(str));
