console.log('Welcome to Node App');
//if a user add a notes to the loacal storage.

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click',function (e) {
    let addtxt = document.getElementById('addtxt');
    let notes = localStorage.getItem("notes");
    if(notes== null){
        notesobj=[];
    }
    else{
        notesobj= JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    addtxt.value="";
    console.log(notesobj);


    
})