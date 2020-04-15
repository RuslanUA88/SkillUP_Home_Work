    let str = prompt('Input text');
    let word = prompt('Input search word');
    function searchString(str, word){
        let a,b;
       for (a=0; (str.indexOf(word, a) >= 0 && str.indexOf(word, a) < str.length); a++){
        b = str.indexOf(word, a);
        console.log(b);
        }
        return b;
        }
        searchString(str, word);
