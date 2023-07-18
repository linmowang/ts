// 接口和对象类型

// 重名就重合
interface Axxsxs {
  name: string;
}

let e: Axxsxs = {
  name: "xiaoman",
  Ikun: "Ikun",
};

interface Axxsxs {
  Ikun: string;
}

// 任意key [propName: string]:any 可以忽略其他属性
interface Axxbxb {
  name: string;
  age: number;
  [propName: string]: any;
}

let e2: Axxbxb = {
  name: "1",
  age: 12,
  a1: "323",
  a2: 323,
  a3: true,
};

// ? readonly
interface Axxcxc {
  name: string;
  age?: number;
}
let e3: Axxcxc = {
  name: "xiaoman",
};
let e4: Axxcxc = {
  name: "xiaoman",
  age: 11,
};

interface Axxcxd {
  readonly id: number;
  readonly cb: () => boolean;
}

let e5: Axxcxd = {
  id: 3223,
  cb: () => {
    return false;
  },
};

// e5.id = 111
// e5.cb = () => {return true}

// 接口继承
interface B {
  xxx: string;
}
interface Axxdxd extends B {
  readonly id: number;
  readonly cb: () => boolean;
}

let e6: Axxdxd = {
  xxx: "111",
  id: 3223,
  cb: () => {
    return false;
  },
};

// interface 定义函数类型
interface Fn {
  (name: string): number[];
}

const fn: Fn = (name: string) => {
  return [1];
};
