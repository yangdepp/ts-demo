class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {  //在构造函数上
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(greeter(user))
