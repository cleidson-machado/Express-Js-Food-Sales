class Person {
  constructor(id, name, surname, age, bodyheight, gender) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.bodyheight = bodyheight;
    this.gender = gender;
  }
  get getBasicData() {
    return this.name + " " + this.age + " " + this.gender + " " + this.id;
  }
}

module.exports = {
  Person,
};
