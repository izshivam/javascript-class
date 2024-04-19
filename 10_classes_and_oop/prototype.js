// let myName = "Shivam     "
// let myChannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivam = function(){
    console.log(`shivam is present in all objects`);
}

Array.prototype.heyShivam = function(){
    console.log(`Shivam says hello`);
}

// heroPower.shivam()
// myHeros.shivam()
// myHeros.heyShivam()
// heroPower.heyShivam()



//** Inheritance **/

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsename = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsename.trueLength()
"shivam".trueLength()
"iceTea".trueLength()