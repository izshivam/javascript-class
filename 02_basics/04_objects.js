// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);


const user = [
    {
        id: 1,
    email:"hitesh@.com"
    },
    {
        id: 1,
    email:"hitesh@.com"
    },
    {
        id: 1,
    email:"hitesh@.com"
    },
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


//*****************************************************//
//*****Objects De-Structure**********//

const course = {
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor: "Shivam"
}

//courseInnstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course
// console.log(courseInstructor);
console.log(instructor);


//*********** JSON************//

// {
//     "name": "Hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// https://api.github.com/users/hiteshchoudhary //