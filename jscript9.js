console.log('traversing');
 
let cont = document.querySelector('.no');
cont= document.querySelector('.container');

//console.log(cont.childNodes)
//console.log(cont.children)
/*let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[8].nodeType;

console.log(nodeName);
console.log(nodeType);*/


let container = document.querySelector('.container');
//console.log(container.children[1].children[0].children);
//console.log(container.firstChild);
//console.log(container.firstElementChild);

//console.log(container.lasttChild);
//console.log(container.lastElementChild);

//console.log(container.childElementCount);
//console.log(container.childNodes);
console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);








