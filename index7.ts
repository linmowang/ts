// 类型断言 | 联合类型 | 交叉类型

// 交叉类型
let phone: number | string = 123323423;
phone = "021-sdfsdfsd";

let fn1 = function (type: number | boolean): boolean {
  return !!type;
};

// 联合类型
interface People {
  name: string;
  age: number;
}

interface Man {
  sex: number;
}

const xiaoman = (man: People & Man): void => {
  console.log(man);
};

xiaoman({ name: "姬小满", age: 180, sex: 0 });

// 类型断言
let fn4 = function (num: number | string): void {
  console.log((num as string).length);
};

fn4(122323);

interface A {
  run: string;
}

interface B1 {
  build: string;
}

let fn5 = (type: A | B1): void => {
  console.log((type as A).run);
  console.log((<A>type).run);
};

(window as any).a;

const fn6 = (type: any): boolean => {
  return type as boolean;
};

// let bbb = fn(1)
