// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const abhi = new User("abhi", "abhi@gmail.com", "123");

console.log(abhi.encryptPassword());
console.log(abhi.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const nagar = new User("nagar", "nagar@gmail.com", "123");

console.log(nagar.encryptPassword());
console.log(nagar.changeUsername());
