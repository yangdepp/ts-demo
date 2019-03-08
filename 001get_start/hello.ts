class Student {
  fullName: string;
  //  public相当于定义了一个类的一个同名属性
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("yang", "J", "Deep");
console.log(user)  //  Student {firstName: "yang", middleInitial: "J", lastName: "Deep", fullName: "yang J Deep"}
console.log(greeter(user))

//  greeter函数传入的是一个Person的interface，他要求有两个属性（firstName，lastName）
//  new 出来的Student实例，有四个属性（firstName、middleInitial、lastName、fullName），所以符合参数
