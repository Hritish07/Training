console.log('Add n edit a Div');
let divElem = document.createElement('div');


let text = document.createTextNode('Click to Edit');
divElem.appendChild(text);

divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');

divElem.setAttribute('style','border: 2px solid black')
let container = document.querySelector('.container');
let first =document.getElementById('myfirst');

container.insertBefore(divElem,first);
console.log(divElem,container,first);


divElem.addEventListener('click',function () {
    let noTextArea = document.getElementsByClassName('textarea').length;
    
    let html=elem.innerHTML;
    divElem.innerHTML= `<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>`;
    
    
})

