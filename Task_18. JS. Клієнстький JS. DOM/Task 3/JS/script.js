function changeAllTagColor(tag,color){
let element=document.getElementsByTagName(tag)
for(i=0; i<element.length; i++){
    element[i].style.backgroundColor = color;
    }
}
changeAllTagColor("li","blue");

function getElementsNumber(tag){
    let elem = document.getElementsByTagName(tag)
    return "Number of element with tag name <" + tag + "> is : " + elem.length;
}

console.log(getElementsNumber("li"))