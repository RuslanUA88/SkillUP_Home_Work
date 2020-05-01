

 function repeatLorem(n){
     let paragraf = document.getElementsByTagName("p")
     let arrOfParagraf=[];
     for (i=0; i<paragraf.length; i++){
         if(paragraf[i].innerText.includes("Lorem") === true){
             arrOfParagraf.push(paragraf[i]);
          }
     } arrOfParagraf.length=n;
     return arrOfParagraf;
 }
 console.log(repeatLorem(7));