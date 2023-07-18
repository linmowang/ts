//任意类型
// any 与 unknown

interface Data100 {
  name: string;
  money: number;
}

class Bank implements Data100 {
  name: string;
  money: number;
  constructor(name: string, money: number) {
    this.name = name;
    this.money = money;
  }
}

let a: Data100 = new Bank("xiaoman", 3000);
let a2: any = new Bank("xiaoman", 3000);

// unknown 只能赋值给自身 或者是any
let a3: unknown = "9999";
let a4: unknown = { name: "xiaoman" };
// unknown不能读属性
// a4.name = "lvbu";
let a5: any = { name: "xiaoman" };
a5.name = "lvbu";
