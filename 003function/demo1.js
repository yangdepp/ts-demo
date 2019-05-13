function sum(x, y) {
    return String(x + y);
}
sum(1, 2);
// 传入多余的参数会报错
// sum(1,2,3)
var sum1 = function (x, y) {
    return x + y;
};
sum1(1, 2);
// ts中的箭头用来表示函数的定义，左边是输入类型（括号括起来），右边是输出类型
var mysum = function (x, y) {
    return x + y;
};
mysum(1, 2);
