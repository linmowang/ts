interface MyEvent {
  on: (key: string, cb: Function) => void;
  emit: (key: string, ...args: Array<any>) => void;
  off: (key: string, fn: Function) => void;
  once: (key: string, cb: Function) => void;
}

interface List {
  [key: string]: Array<Function>;
}

class Dispatch implements MyEvent {
  list: List;
  constructor() {
    this.list = {};
  }
  on(key: string, cb: Function) {
    const cbLists = this.list[key] || [];
    cbLists.push(cb);
    this.list[key] = cbLists;
  }

  emit(key: string, ...args: Array<any>) {
    const cbLists = this.list[key];
    if (cbLists && cbLists.length) {
      cbLists.forEach((cb) => {
        // cb(...args);
        cb.apply(this, args);
      });
    } else {
      console.log("该事件未监听");
    }
  }

  off(key: string, fn: Function) {
    const cbLists: Array<Function> = this.list[key];
    if (cbLists && fn) {
      const index = cbLists.findIndex((item) => item === fn);
      cbLists.splice(index);
    } else {
      console.log(`对应${key}事件未监听`);
    }
  }

  once(key: string, cb: Function) {
    let deFun = (...args: Array<any>) => {
      // this.emit.apply(this, [key, ...args]);
      cb.apply(this, args);
      this.off(key, deFun);
    };

    this.on(key, deFun);
  }
}

const a = new Dispatch();
a.on("key", (...args: Array<any>) => {
  console.log(...args);
});

const fun = (...args: Array<any>) => {
  console.log(...args);
};

a.on("key", fun);
a.off("key", fun);

a.emit("key", 1, false, "3322");

a.once("key2", fun);
a.emit("key2", 1, false, "sdfsdfsdf");
a.emit("key2", 1, false, "sdfsdfsdfvv");
