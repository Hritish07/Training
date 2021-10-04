console.log('event');
document.getElementById("heading").addEventListener("mouseover", function (e) {
    let variable;
    console.log('you have to click')
    variable=e.target;
    //variable=e.target.className;
   // variable = e.target.classList;
    //variable = e.target.id;
    
   // variable=e.offsetX;
   // variable=e.offsetY;
   variable=e.clientX;

    console.log(variable);
    //location.href="http://squarepage.epizy.com/";    
});






