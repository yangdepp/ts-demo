var Student = /** @class */ (function () {
    //  public相当于定义了一个类的一个同名属性
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("yang", "J", "Deep");
console.log(user); //  Student {firstName: "yang", middleInitial: "J", lastName: "Deep", fullName: "yang J Deep"}
console.log(greeter(user));
//  greeter函数传入的是一个Person的interface，他要求有两个属性（firstName，lastName）
//  new 出来的Student实例，有四个属性（firstName、middleInitial、lastName、fullName），所以符合参数
