// symbol类型
// symbol代表唯一

let a10: symbol = Symbol(1);
let a11: symbol = Symbol(1);
console.log(a10, a11);
// 返回false
console.log(a10 === a11);

// Symbol.for会全局寻找是否注册过这个key,有的话直接用，没有的话新创建
console.log(Symbol.for("xiaoman") === Symbol.for("xiaoman"));

// 场景
// let obj20 = {
//   name: 1,
//   ...a10,
//   name: 80,
// };
let obj20 = {
  name: 1,
  a10: 111,
  a11: 222,
};

console.log(obj20);

let obj21 = {
  name: 1,
  [a10]: 111,
  [a11]: 222,
};
console.log(obj21);

// for in 不能读到symbol
for (const key in obj21) {
  console.log(key);
}

// keys也不行
console.log(Object.keys(obj21));

// 也不行
console.log(Object.getOwnPropertyNames(obj21));

// 只能读symbol
console.log(Object.getOwnPropertySymbols(obj21));

// 这个可以都读到
console.log(Reflect.ownKeys(obj21));

// 1.生成器 generate
function* gen() {
  yield "xiaoman";
  yield Promise.resolve("zhongxiaoman");
  yield "chaodaman";
}

const man = gen();
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());

// 迭代器 前置类型
let set: Set<number> = new Set([1, 1, 1, 2, 2, 2, 33]); //天然去重
console.log(set);
let map: Map<any, any> = new Map();
let Arr10 = [1, 2, 3];
map.set(Arr10, "xiaoman");
console.log(map.get(Arr10));

// 伪数组
function args() {
  console.log(args, arguments);
  // arguments.pop()
}
// let list = document.querySelectorAll("div");
// list.pop()

// 迭代器 Symbol.iterator
const each = (value: any) => {
  let It: Iterator<any> = value[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = It.next();
    if (!next.done) {
      console.log(next.value);
    }
  }
};

each(map);
each(set);
// each(args);

// 迭代器的语法糖
for (const value of set) {
  console.log(value);
}

// for of 对象不能用,因为对象没有iterator

// 解构 底层原理也是调用iterator
let [a30, b30, c30] = [4, 5, 6];
console.log(a30, b30, c30);

// 对象支持for of 相当于实现iterator
let obj22 = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current > this.max) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          return {
            value: this.current++,
            done: false,
          };
        }
      },
    };
  },
};
for (const value of obj22) {
  console.log(value);
}

let x = [...obj22];
console.log(x);
let x1 = { ...obj22 };
console.log(x1);
