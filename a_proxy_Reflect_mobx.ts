//  proxy

let person = { name: "xiaoman", age: 24 };

// proxy 只支持引用类型 支持对象 数组 函数 set map

person.name;
person.name = "xxx";
// let personProxy = new Proxy(person, {
//   // 取值
//   get() {},
//   // 赋值
//   // person name xxx person
//   set(target, key, value, receiver) {
//     return true;
//   },
//   // 拦截函数的调用
//   apply() {},
//   // 拦截in操作符
//   has() {},
//   // 拦截forin
//   ownKeys() {},
//   // 拦截new操作符
//   construct() {},
//   // 拦截删除操作符
//   deleteProperty(target) {},
// });

let personProxy = new Proxy(person, {
  get(target, key, receiver) {
    if (target.age <= 18) {
      return Reflect.get(target, key, receiver);
    } else {
      return "xiaoman 成年了";
    }
  },
});

console.log(personProxy.age);

// mobx observable

const list: Set<Function> = new Set();

const autorun = (cb: Function) => {
  if (!list.has(cb)) {
    list.add(cb);
  }
};

const observable = <T extends object>(params: T) => {
  return new Proxy(params, {
    set(target, key, value, receiver) {
      let result = Reflect.set(target, key, value, receiver);
      list.forEach((fn) => fn());
      return result;
    },
  });
};

const personProxy2 = observable({ name: "xiaoman", attr: "小满很强" });
autorun(() => {
  console.log("小满有变化了");
});

personProxy2.attr = "小满锤子强";
