namespace duckType {
  // 鸭子类型
  // 主类型
  interface A {
    name: string;
    age: number;
  }

  //子类型
  interface B {
    name: string;
    age: number;
    sex: string;
  }

  let a: A = {
    name: "xxxxxxx",
    age: 33,
  };

  let b: B = {
    name: "aaaaa",
    age: 33,
    sex: "man",
  };

  // 协变
  a = b;
  // b = a

  // 逆变
  let fna = (params: A) => {};

  let fnb = (params: B) => {};

  // fna = fnb;
  fnb = fna;
}
