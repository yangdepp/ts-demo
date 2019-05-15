function sum(x: number, y: number): string {
  return String(x + y);
}

sum(1, 2);
// 传入多余的参数会报错
// sum(1,2,3)
//---------------------------------------------------

const sum1 = function(x: number, y: number): number {
  return x + y;
};
sum1(1, 2);

//----------------------------------------------------

// ts中的箭头用来表示函数的定义，左边是输入类型（括号括起来），右边是输出类型
let mysum: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};
mysum(1, 2);
//--------------------------------------------------

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// 通过接口的方式来定义一个函数需要符合的形状
let mySearch: SearchFunc;
mySearch = function(x: string, y: string) {
  return x.search(y) != -1;
};

mySearch('hello world', 'world');

//---------------------------------------------------
//可选参数
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + '' + lastName;
  } else {
    return firstName;
  }
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
//-----------------------------------------------

//剩余参数
// function push(array: Array<number | string> = [], ...rest: Array<number | string>): Array<number | string> {
//   rest.forEach(item => {
//     array.push(item);
//   });
//   return array;
// }
// let a: Array<string | number> = [];
// push(a, 1, 2, 3, '4');

// 泛型
function push<T>(array: Array<T>, ...rest: Array<T>): Array<T> {
  rest.forEach(item => {
    array.push(item);
  });
  return array;
}
let a: Array<string | number> = [];
push(a, 1, 2, 3, '4');
