console.log('making elements');
let elements = document.createElement('li');
//add aclass name to li element
/*elements.className='childul';
elements.id='creayedLI';
elements.setAttribute('title','mytitle');
elements.innerText='new elements';
*/

let ul=document.querySelector('ul.this');
ul.appendChild(elements);
//console.log(ul);

console.log(elements);

let elem2= document.createElement('h3');
elem2.id='elem2';
elem2.className='elem2';
let tnode= document.createTextNode('this is a created node for elem2');
elem2.appendChild(tnode);
elements.replaceWith(elem2);
let myul= document.getElementById('myul');
//myul.replaceChild(elements,document.getElementById('fui'));
pr=elements.getAttribute('class'); 
console.log(elem2,pr);










