function SetUsername(username) {


  //complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const abhi = new createUser("abhi", "abhi@a.com", "1235");
console.log(abhi);
