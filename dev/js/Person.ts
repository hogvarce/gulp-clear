class Person {
    firstname: string;
    lastname: string;
    constructor(firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

class Customer extends Person {
    constructor(firstname: string, lastname: string){
        super(firstname, lastname);
    }
    greeter(str) {
        return (arguments.length < 1) ?
            str + ", " + this.firstname + " " + this.lastname :
            str + ", " + this.firstname;
    }
}
