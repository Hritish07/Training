console.log('Prototype inheritance')


/*
const proto={
        slogan: function(){
            return`this company is the best`;
        },
        changeName: function(name){
            this.name= newname

        }
    }
    let hri = Object.create(proto);
    hri.name="hritish"
    hri.roll="programer"
    //hri.changeName("guddu")
    console.log(hri);
*/
function Employee(name,salary){
    this.name=name;
    this.salary=salary;
    this.experiance=this.experiance;
}
Employee.prototype.slogan = function(){
    return`this is the best. regards ${this.name}`;

}
let harry = new Employee('harry',858735784,84);
console.log(harry)












