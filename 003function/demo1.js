function sum(x, y) {
    return String(x + y);
}
sum(1, 2);
// 传入多余的参数会报错
// sum(1,2,3)
//---------------------------------------------------
var sum1 = function (x, y) {
    return x + y;
};
sum1(1, 2);
//----------------------------------------------------
// ts中的箭头用来表示函数的定义，左边是输入类型（括号括起来），右边是输出类型
var mysum = function (x, y) {
    return x + y;
};
mysum(1, 2);
// 通过接口的方式来定义一个函数需要符合的形状
var mySearch;
mySearch = function (x, y) {
    return x.search(y) != -1;
};
mySearch('hello world', 'world');
//---------------------------------------------------
//可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + '' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
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
function push(array) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    rest.forEach(function (item) {
        array.push(item);
    });
    return array;
}
var a = [];
push(a, 1, 2, 3, '4');
