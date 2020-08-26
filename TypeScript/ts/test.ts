interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
console.log(user);

function getAdminUser(): User {
  const user: User = {
    name: "admin",
    id: 123,
  };

  return user;
}

// function deleteUser(user: User) {
//   // ...
// }

// const btn = document.querySelector("#btn")!;
// btn?.addEventListener("click", () => {});
