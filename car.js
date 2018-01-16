class Car{
    //constructor called when an instance is created
    constructor(){
        //properties are accessible externally
        this.wheels = 4;
        this.speed = 85.5;
        this.colour = "orange";
        this.flatTyres = [false, false, true, false];
    }
    
    //methods are accessible externally
    accelerate(){
        this.speed++;
    }
}

let myCar = new Car();
console.log(myCar);

console.log("Tyre 1 flat? " + myCar.flatTyres[0]);

myCar.colour = "red";
console.log("Colour is " + myCar.colour);

console.log("Speed is " + myCar.speed);
myCar.accelerate();
console.log("New speed is " + myCar.speed);

let myOtherCar = new Car();

myOtherCar.colour = "pink";

console.log("Colour of my car is " + myCar.colour);
console.log("Colour of my other car is " + 
             myOtherCar.colour);


class Car{
    constructor(){
        this.wheels = 4;
        this.speed = 85.5;
        this.colour = "orange";
        this.flatTyres = [false, false, true, false];
    }
    accelerate(){
        this.speed++;
    }
    //rate parameter used within method - defaults to 10
    accelerateBy(rate = 10){        
        this.speed += rate;
        //return new value
        return this.speed;          
    }
}

let myCar = new Car();
console.log(myCar.accelerateBy());
console.log(myCar.accelerateBy(-30));



class Car{
    constructor(wheels = 4, speed = 0, colour = "blue"){
        this.wheels = wheels;
        this.speed = speed;
        this.colour = colour;
        this.flatTyres = [false, false, true, false];
    }
    accelerate(){
        this.speed++;
    }
    accelerateBy(rate = 10){ 
        this.speed += rate;
        return this.speed;
    }
}

let car1 = new Car(3, 50, "red");
console.log(car1);
let car2 = new Car(3, 20);
console.log(car2);
let car3 = new Car(undefined, undefined, "orange");
console.log(car3);



class Car{
    constructor(params){
        this.wheels = 4;
        this.speed = params.speed;
        this.colour = params.colour;
        this.flatTyres = [false, false, true, false];
    }
    accelerate (){
        this.speed++;
    }
    accelerateBy(rate){
        this.speed += rate;
        return this.speed;
    }
     toString(){
        return "This car is " + this.colour;
    }
}

let myCar = new Car({colour: "green", speed: 30});
console.log("Speed is " + myCar.speed);
console.log("Colour is " + myCar.colour);

let myOtherCar = new Car({colour:"red"});

console.log("Speed is " + myOtherCar.speed);
console.log("Colour is " + myOtherCar.colour);



class Car{
    constructor(params){
        this.wheels = 4;
        this.speed = (typeof params.speed !== "undefined") ? 
			params.speed : 0;
        this.colour = (typeof params.colour !== "undefined") ? 
			params.colour : "blue";
        this.flatTyres = [false, false, true, false];
    }
    accelerate (){
        this.speed++;
    }
    accelerateBy(rate){
        this.speed += rate;
        return this.speed;
    }
     toString(){
        return "This car is " + this.colour;
    }
}

let myOtherCar = new Car({speed: 30});
console.log("Speed is " + myOtherCar.speed);
console.log("Colour is " + myOtherCar.colour);







class Car{
 constructor(params){
        this.wheels = 4;
        this.speed = (typeof params.speed !== "undefined") ? 
			params.speed : 0;
        this.colour = (typeof params.colour !== "undefined") ? 
			params.colour : "blue";
        this.flatTyres = [false, false, true, false];
    }    accelerate(){
        this.speed++;
    }
    accelerateBy(rate = 10){ 
        this.speed += rate;
        return this.speed;
    }
    //override toString method
    toString(){
        return "This car is " + this.colour;
    }
}

let myCar = new Car({colour:"orange"});
alert(myCar);

let fab1 = new Car({colour: "pink"});
fab1.guns = 2;

//can also use bracket notation
fab1["ammo"] = 100;

fab1.fire = function(){
	if(this.ammo > 0){
		console.log("Bang");
		this.ammo--;
	}
}
fab1.fire();
myCar.fire(); //throws an error


console.log(fab1);

Car.prototype.fuelType = "Petrol"; //use class name
console.log(myCar);


if(typeof myCar.guns !== "undefined"){
	myCar.fire();
} else {
	console.log("No defense");
}

if(typeof fab1.guns !== "undefined"){
	fab1.fire();
} else {
	console.log("No defense");
}



class Tree {
    constructor(){
        this.branches = 7;
        this.kind = "Oak" 
    }
}
let myTree = new Tree();

console.log(myCar instanceof Car); 	// True
console.log(myTree instanceof Car); 	// False
console.log(myCar instanceof Tree); 	// False




myCar = new Car({speed:100, colour:"red"});
myOtherCar = new Car({colour: "blue"});
fab1 = new Car({colour: "pink", speed: 40}); 

class Garage{
    constructor(cars){
        this.cars = cars;
    }
}

let myGarage = new Garage([myCar, myOtherCar, fab1]);

console.log(myGarage);

for (let i = 0; i < myGarage.cars.length; i++){
	console.log("\nCar " + (i + 1) + ":");
	console.log("Speed: " + myGarage.cars[i].speed);
	console.log("Colour: " + myGarage.cars[i].colour);
}






class RaceCar extends Car{
    constructor(colour = "red", spoiler = true){
        super(colour);
        this.spoiler = spoiler;
    }
}
let mySportsCar = new RaceCar();





