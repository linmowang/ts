// infer 占位符

namespace infer {
  // 定义一个类型 如果传入数组类型就返回数组元素的类型，否则 传入什么类型就返回什么类型

  type TYPE<T> = T extends Array<any> ? T[number] : T;
  type A = TYPE<(string | number)[]>;
  type B = TYPE<boolean>;

  // infer可以简化上面操作
  type TYPE2<T> = T extends Array<infer U> ? U : T;
  type A1 = TYPE<(string | number)[]>;
  type B2 = TYPE<boolean>;

  type T = [111, "222"];
  type uni = TYPE2<T>;

  // infer类型提取
  type Arr = ["a", "b", "c"];
  type First<T extends any[]> = T extends [infer one, infer two, infer three]
    ? one
    : [];

  type First2<T extends any[]> = T extends [infer one, ...any[]] ? one : [];

  type Second<T extends any[]> = T extends [infer one, infer two, infer three]
    ? two
    : [];

  type Last<T extends any[]> = T extends [...any[], infer last] ? last : [];
  type Rest<T extends any[]> = T extends [...infer Rest, infer last]
    ? Rest
    : [];

  type a = First<Arr>;
  type a2 = First2<Arr>;
  type a3 = Second<Arr>;
  type a4 = Last<Arr>;
  type a5 = Rest<Arr>;

  // infer递归
  type Arra = [1, 2, 3, 4];
  type Reverse<T extends any[]> = T extends [infer First, ...infer rest]
    ? [...Reverse<rest>, First]
    : T;

  type Arrb = Reverse<Arra>;
  // type Arrb = [4, 3, 2, 1];
}
