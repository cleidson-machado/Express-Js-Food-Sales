const { Person } = require("./person.entity");

class User extends Person {
  constructor(
    name,
    surname,
    age,
    bodyheight,
    gender,
    cpf,
    email,
    password,
    levelAccess
  ) {
    super(name, surname, age, bodyheight, gender);

    this.cpf = cpf;
    this.email = email;
    this.password = password;
    this.levelAccess = levelAccess;
  }

  get getUserData() {
    return (
      this.id +
      " " +
      this.name +
      " " +
      this.surname +
      " " +
      this.cpf +
      " " +
      this.password +
      " " +
      this.levelAccess
    );
  }

  set setUserData(data) {
    this.name = data[0];
    this.surname = data[1];
    this.age = data[2];
    this.bodyheight = data[3];
    this.gender = data[4];
    this.cpf = data[5];
    this.email = data[6];
    this.password = data[7];
    this.levelAccess = data[8];
  }
}

module.exports = {
  User,
};
