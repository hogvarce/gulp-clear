"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
})();
var SuperUser = (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser() {
        _super.apply(this, arguments);
    }
    return SuperUser;
})(User);
var user = new User("asda");
var superuser = new SuperUser();
user.name = 45745;
console.log(user);
