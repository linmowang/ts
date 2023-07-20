// 枚举

// 数字枚举
enum Color {
  red,
  green,
  blue,
}

enum Color2 {
  red = 1,
  green,
  blue,
}
enum Color3 {
  red = 1,
  green = 5,
  blue = 6,
}

// 字符串
enum Color4 {
  red = "red",
  green = "green",
  blue = "blue",
}

// 接口枚举
interface A30 {
  red: Color.red;
}

let obj30: A30 = {
  red: Color.red,
};

// const 枚举 const 不会编译成对象 编译成常量
const enum Types {
  success,
  fail,
}

let code: number = 0;
if (code === Types.success) {
}

// 反向映射
enum Types10 {
  success = 456,
}
let success10: number = Types10.success;
let key = Types10[success10];
console.log(`value---${success10}`, `key---${key}`);
