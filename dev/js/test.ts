"use strict"
class User {
    private name: string;
    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User{

}

var user = new User("asda");
var superuser = new SuperUser();
user.name = 45745;

console.log(user);
