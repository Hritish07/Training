
//object literals 
let car = {
    name: 'maruti800',
    topspeed: 80,
    run: function () {
        console.log('car is running');

    }
}
//console.log(car);

//constructor
function generalcars(givenname, givenspeed) {
    this.name = givenname;
    this.topspeed = givenspeed;
    this.run = function () {
        console.log(`${this.name} is running`);


    }
    this.analyze = function () {
        console.log(`This car is slower by ${200 - this.topSpeed} Km/H than Mercedes`)


    }



}
car1 = new generalcars('Audi', 290);
car2 = new generalcars('Honda', 290);
car3 = new generalcars('Marutis', 290);
console.log(car2);















