"use strict";
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
console.log(user);
function getAdminUser() {
    const user = {
        name: "admin",
        id: 123,
    };
    return user;
}
