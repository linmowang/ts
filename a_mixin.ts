// Mixin

namespace aMixin {
  interface Name {
    name: string;
  }
  interface Age {
    age: number;
  }
  interface Sex {
    sex: number;
  }

  let a: Name = { name: "xiaoman" };
  let b: Age = { age: 12 };
  let c: Sex = { sex: 1 };
  let obj = Object.assign(a, b, c);

  // 类Mixin
  class A {
    type: boolean = false;
    changeType() {
      this.type = !this.type;
    }
  }

  class B {
    name: string = "";
    getName(): string {
      return this.name;
    }
  }

  class C implements A, B {
    type: boolean = false;
    name: string = "xiaoman";
    changeType() {}
    getName() {
      return this.name;
    }
  }

  mixins(C, [A, B]);
  function mixins(curCls: any, itemCls: any[]) {
    itemCls.forEach((item) => {
      Object.getOwnPropertyNames(item.prototype).forEach((name) => {
        curCls.prototype[name] = item.prototype[name];
      });
    });
  }

  let ccc = new C();
  console.log(ccc.type);
  ccc.changeType();
  console.log(ccc.type);
}
