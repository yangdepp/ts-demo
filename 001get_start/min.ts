//  函数接收参数类型检测，及函数返回值类型限定

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b
}

console.log(add(1, 2))
console.log(add('hello', 'yangdepp'))


//  选择排序
//  数组类型的两种定义方法
function selectSort(a: Array<number>): number[] {
  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j;
      }
    }
    let temp = a[minIndex];
    a[minIndex] = a[i];
    a[i] = temp;
  }
  return a;
}

console.log(selectSort([9, 1, 5, 7, 3, 2, 0, 3]))


//  即使指定返回一个值，也可以不返回，抛一个错
//  枚举
enum Gender {
  Male,
  Female
}
interface Person {
  gender: Gender;
}
function marry(a: Person, b: Person): [Person, Person] {
  if (a.gender !== b.gender) {
    return [a, b]
  } else {
    throw new Error('gender is same')
  }
}

let a = { gender: Gender.Male }
let b = { gender: Gender.Female }
console.log(marry(a, b))