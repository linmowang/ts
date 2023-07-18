//  基类 抽象类

// abstract 抽象类所不能实例化
// abstract 抽象函数所不能实现
abstract class Vue1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }

  abstract init(name: string): void;
}

class React extends Vue1 {
  constructor(name: string) {
    super(name);
  }

  init(name: string) {}

  setName(name: string) {
    this.name = name;
  }
}

const react = new React("react");
react.setName("xiaoman");
console.log(react.getName());
