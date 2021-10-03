let element = document.getElementById('myfirst');

//element=element.className
//element=element.childNodes;
//element=element.parentNode;
//element.style.color = 'cyan';
//element.style.background='darkgray';
element.style.color='red';
element.innerText="Hritish Ranjan Jena" ;
element.innerHTML="<b>Hritish Ranjan Jena</b>";
//console.log(element.innerHTML);

//queryselector is the single line selector in DOM.
//let sel = document.querySelector('#myfirst');

 sel = document.querySelector('.child ');
 sel.style.color='blue';
//console.log(sel);


let ele =document.getElementsByClassName('container');
console.log(ele[0].getElementsByClassName('child'));










