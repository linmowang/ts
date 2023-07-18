// 泛型

function xiaoman10(a: number, b: number): Array<number> {
  return [a, b];
}

function strFn(a: string, b: string): Array<string> {
  return [a, b];
}

function xiaoman11<T>(a: T, b: T): Array<T> {
  return [a, b];
}

xiaoman11(1, 2);
xiaoman11("sss", "bbb");
xiaoman11(true, false);

type A100<T> = string | number | T;
let a40: A100<boolean> = true;
let a41: A100<undefined> = undefined;

interface Data10<T> {
  msg: T;
}

let data10: Data10<string> = {
  msg: "xiaoman",
};

function add10<T, K = number>(a: T, b: K): Array<T | K> {
  return [a, b];
}

add10(1, false);
add10(false, 1);

// axios使用泛型去定义返回对象 ./index17-html

// 泛型约束
function add20<T extends number>(a: T, b: T) {
  return a + b;
}

// add20(undefined, undefined);
add20(1, 2);

interface Len {
  length: number;
}

function fn10<T extends Len>(a: T) {
  a.length;
}

fn10("1111");
fn10([1, 2, 3]);
// fn10(12322323)
// fn10(false)

let obj200 = {
  name: "jixiaoman",
  sex: 0,
};
// keyof 把对象的key 推断成联合类型 Key = "name" | "sex"
type Key = keyof typeof obj200;
function ob<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
// ob(obj, 'age')
ob(obj200, "name");

// keyof高级用法

interface P1 {
  name: string;
  age: number;
  sex: string;
}

type Options2<T extends object> = {
  [Key in keyof T]?: T[Key];
};

type B10 = Options2<P1>;
