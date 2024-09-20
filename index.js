class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName = () => {
    return this.name;
  };

  getAge = () => {
    return this.age;
  };
}

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }

  getAddress = () => {
    return this.address;
  };

  getPrice = () => {
    return this.price;
  };

  getResidents = () => {
    return this.residents;
  };

  addResident = (resident) => {
    this.residents.push(resident);
  };
}

let Pedro = new Person("Pedro", 19);
let David = new Person("David", 22);
let house = new House("new", 200000, [Pedro, David]);
let Paolo = new Person("Paolo", 19);
house.addResident(Paolo);

class Programmer extends Person {
  constructor(name, age, company, salary, language) {
    super(name, age);
    this.company = company;
    this.salary = salary;
    this.language = language;
  }

  sayHi() {
    return console.log(
      `Hi, I am a programmer, my name is ${this.name} and I work for ${this.company}`
    );
  }
}

// let programmer = new Programmer("Dan", 19, "Amazon", 100000, "TypeScript");
// programmer.sayHi();

