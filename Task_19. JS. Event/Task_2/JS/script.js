let blockInputs=document.getElementById("block")
let divNew=document.createElement("div")
let textValue= document.getElementById("textValue")
let arrOfValue=[];
 
add.onclick= function(){
  divNew = blockInputs.cloneNode(true);
   form.insertBefore(divNew,form.children[0]);
   }

remove.onclick= function(){
  form.firstElementChild.remove();
}

submitBtn.onclick = function(){
  let inputText=document.getElementsByTagName("input")
  for(i=0; i<inputText.length; i++){
    arrOfValue.push(inputText[i].value)
  }
  console.log(arrOfValue)
}
