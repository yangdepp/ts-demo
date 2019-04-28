//  函数接收参数类型检测，及函数返回值类型限定
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add('hello', 'yangdepp'));
//  选择排序
//  数组类型的两种定义方法
function selectSort(a) {
    for (var i = 0; i < a.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < a.length; j++) {
            if (a[j] < a[minIndex]) {
                minIndex = j;
            }
        }
        var temp = a[minIndex];
        a[minIndex] = a[i];
        a[i] = temp;
    }
    return a;
}
console.log(selectSort([9, 1, 5, 7, 3, 2, 0, 3]));
//  即使指定返回一个值，也可以不返回，抛一个错
//  枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
function marry(a, b) {
    if (a.gender !== b.gender) {
        return [a, b];
    }
    else {
        throw new Error('gender is same');
    }
}
var a = { gender: Gender.Male };
var b = { gender: Gender.Female };
console.log(marry(a, b));
