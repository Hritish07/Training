console.log('ES6 classes and Inheritance ');


class Employee {
    constructor(givenname, givenexperiance, givendivision) {
        this.name = givenname;
        this.experiance = givenexperiance;
        this.division = givendivision;
    }
    slogan() {
        return ` i am ${this.name} and this is best company`;
    }

    joiningYear() {
        return 2020 - this.experiance;
    }


}
//harry= new Employee("harry",34,"Division");
//console.log(harry.joiningYear());
class Programer extends Employee {
    constructor(givenname, givenexperiance, givendivision, language, github) {
        super(givenname, givenexperiance, givendivision)
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if (this.language == 'python') {
            return `Python`;
        }
        else {
            return `Javascript`;
        }

    }
    static multiply(a,b){
        return a*b;
    }
}
hrj10= new Programer("Hritish",3,"pogr","Python","hritsh07");
console.log(hrj10);
console.log(hrj10);


































