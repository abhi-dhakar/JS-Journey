const User = {
  _email: "h@abhi.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const abhi = Object.create(User);
console.log(abhi.email);
