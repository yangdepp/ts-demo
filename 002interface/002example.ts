interface Person {
  name: string;
  age?: number;
  [k: string]: string | number;
}

let tom: Person = {
  name: '1',
  age: 999,
};

let arr: (number | string)[] = [1, 2, '3'];
let arr2: Array<number | string> = [1, 2, 3, null];

interface NumberArray {
  [k: number]: number;
}

let arr3: NumberArray = [1, 2, 3, 4, null];

// function xxx(x, y) {
//   return x + y;
// }

// let xxx1 = (x, y) => x + y;
