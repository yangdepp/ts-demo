function greeter(person: string) {
  return 'Hello,' + person;
}
let user = 'yang'
// let user = [1, 2, 3];  //此处会进行类型检查,编译不通过

console.log(greeter(user))