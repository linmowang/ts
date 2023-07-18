// 函数

function add(a: number, b: number): number {
  return a + b;
}
const add2 = (a: number, b: number): number => {
  return a + b;
};

function add3(a: number = 10, b: number): number {
  return a + b;
}

function add4(a?: number, b?: number): number {
  if (a && b) {
    return a + b;
  }

  return a || b || 0;
}

interface User {
  name: string;
  age: number;
}
function add5(user: User): User {
  return user;
}

interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;
}

// ts可以定义this的类型
let obj: Obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num);
  },
};

// 函数重载
let user: number[] = [1, 2, 3];

function findNum(): number[]; //查所有
function findNum(id: number): number[]; //查id
function findNum(add: number[]): number[]; //添加数组到user中
function findNum(ids?: number | number[]): number[] {
  if (typeof ids === "number") {
    return user.filter((v) => v === ids);
  } else if (Array.isArray(ids)) {
    user.push(...ids);
    return user;
  } else {
    return user;
  }
}

console.log(findNum());
console.log(findNum(3));
console.log(findNum([4, 5, 6]));
