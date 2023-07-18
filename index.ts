// 基础类型

let str: string = "xiaoman";
let num: number = Infinity;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let b1: boolean = true;
let n: null = null;
let b: undefined = undefined;
// 严格模式不能void = null
// let v1: void = null;
let v1: null = null;
let v2: undefined = undefined;

function funName(params: string): void {
  console.log(params);
  return;
}
