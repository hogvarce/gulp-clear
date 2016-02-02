function greeter(person : Person) {
    return "Привет, " + person.firstname + " " + person.lastname;
}

var user = {firstname: "Jane", lastname: "User"};

var div = document.createElement('div'),
    txt = document.createTextNode(greeter(user));

div.appendChild(txt)
document.body.appendChild(div);
