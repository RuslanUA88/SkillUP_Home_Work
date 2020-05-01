//console.log(document.body.childNodes);
// for(let i=0;  i<document.body.children.length; i++){
//   //console.log(document.body.children[i]);
// }
// console.log(document.body.children[2]);


 
let li = document.getElementsByTagName('li')
li[1].innerText='bla bla bla'
document.body.backgroundColor= 'red'
let div = document.getElementsByTagName('div');
div[2].style.backgroundColor = 'red';

document.getElementById('scales').setAttribute('checked', 'checked');

let clas = document.getElementsByTagName('p');
for (i=0; i<clas.length; i++){
  clas[i].classList.toggle('text')
}

function addLi(number){
  for (let i=1; i<= number; i++){
    let newLi = document.createElement('li');
    newLi.innerText =i;
    document.body.children[3].append(newLi); 
  }
};
addLi(5);