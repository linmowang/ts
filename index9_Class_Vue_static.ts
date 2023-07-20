// class 类

// class 基础
// ./index9-vue 实现一个基础vue逻辑

// class readonly private(只能自己使用) protected(只能子类和自己使用) plublic(默认)
class Cls1 {
  constructor(str: string) {}
  private onlyCls1Use() {
    console.log(11);
  }

  protected canChiidUse() {
    console.log(222);
  }

  public allCanUse() {
    this.onlyCls1Use();
    this.canChiidUse();
  }
}

class ClsChildren extends Cls1 {
  constructor() {
    super("xiaoman"); // 父类的prototype.constructor.call
    // this.onlyCls1Use()
    this.canChiidUse();
    this.allCanUse();
  }

  static xxx() {}

  static version() {
    // this.allCanUse()
    this.xxx();
    return "1.0.0";
  }
}

// 静态方法
// Promise.all();
ClsChildren.version();

// get set
class Ref {
  _value: any;
  constructor(value: any) {
    this._value = value;
  }

  get value() {
    return this._value + " vvv";
  }

  set value(newVal) {
    this._value = newVal + " xiaoman";
  }
}

const ref1 = new Ref("hahaha");
ref1.value = "huairen";
console.log(ref1.value);
