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
