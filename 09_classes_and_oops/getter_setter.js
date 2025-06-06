class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}abhi`;
  }

  set password(value) {
    this._password = value;
  }
}

const abhishek = new User("abhi@a.ai", "abcde");
console.log(abhishek.email);
