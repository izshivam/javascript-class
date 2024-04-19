class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email
    }
    set email(value){
       this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}shivam`
    }

    set password(value){
        // this._password = value.toUpperCase()
        this._password = value
    }
}

const shivam = new User("s@shivam.ai", "abc")
// console.log(shivam.password);
console.log(shivam.email);