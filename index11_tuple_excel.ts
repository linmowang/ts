// 元祖类型

let arr10: [number, boolean] = [1, false];
arr10[0] = 666;
// arr10.push(null)
arr10.push(2);

let arr11: readonly [number, boolean] = [1, false];
// arr11.push(2)

let arr12: readonly [x: number, y?: boolean] = [1];
// type first= arr12[0]
type first = (typeof arr)[0];
type second = (typeof arr)["length"];

// 引用场景 excel
let excel: [string, string, number][] = [
  ["xiaoman", "女", 18],
  ["xiaoman", "男", 18],
];
