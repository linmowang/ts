// 数组

let arr: number[] = [1, 2, 3, 4, 5];
let arr1: string[] = ["sss", "sss"];

let arr2: Array<number> = [1, 2, 3, 4, 5];
let arr3: Array<boolean> = [true, false];

interface X {
  name: string;
}

let arr4: X[] = [{ name: "12" }, { name: "32" }];

// 多维
let arr5: number[][] = [[1], [2], [3]];
let arr6: Array<Array<number>> = [[1], [2], [3]];

let arr7: any[] = [1, "sad", true, {}];
let arr8: [number, string, boolean, object] = [1, "sad", true, {}];

function fn2(...args: string[]) {
  // arguments是伪数组 所以any[] 不能代表
  // let a: any[] = arguments;
  let a: IArguments = arguments;
}

fn2("1", "2");

// IArguments实现
interface X1 {
  callee: Function;
  length: number;
  [index: number]: any;
}

function fn3(...args: string[]) {
  let a: X1 = arguments;
}

fn3("1", "2");
