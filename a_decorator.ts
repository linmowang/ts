// 装饰器
import axios from "axios";
import "reflect-metadata";
namespace ADecorator {
  // 类装饰器 ClassDecorator
  const Base: ClassDecorator = (target) => {
    // 使用这个可以增加Http的属性和方法
    target.prototype.__xiaoman = "xiaoman";
    target.prototype.fn = () => {
      console.log("woshihah");
    };
  };

  @Base
  class Http {
    // ...
  }

  const http = new Http() as any;
  console.log(http.__xiaoman);
  http.fn();

  // 传值 装饰器工厂   闭包 | 函数柯力化
  const Base2 = (name: string) => {
    const fn: ClassDecorator = (target) => {
      // 使用这个可以增加Http的属性和方法
      target.prototype.__xiaoman = name;
      target.prototype.fn = () => {
        console.log("woshihah");
      };
    };

    return fn;
  };

  // 方法装饰器 MethodDecorator
  const Get = (url: string) => {
    const fn: MethodDecorator = (
      target,
      key,
      descriptor: PropertyDescriptor
    ) => {
      // console.log(target, key, descriptor);
      axios.get(url).then((res) => {
        descriptor.value(res.data);
      });
    };
    return fn;
  };

  @Base2("xiao yu")
  class Http2 {
    // ...

    @Get("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
    getList(data: any) {
      // console.log(data);
    }
  }

  // 参数装饰器 ParameterDecorator
  const Result = () => {
    const fn: ParameterDecorator = (target, key, index) => {
      console.log("ParameterDecorator: ", target, key, index);
      Reflect.defineMetadata("targetKey", "result", target);
    };

    return fn;
  };

  const Get2 = (url: string) => {
    const fn: MethodDecorator = (
      target,
      key,
      descriptor: PropertyDescriptor
    ) => {
      const targetKey = Reflect.getMetadata("targetKey", target);
      console.log("targetKey:", targetKey);

      axios.get(url).then((res) => {
        descriptor.value(targetKey ? res.data[targetKey] : res.data);
      });
    };
    return fn;
  };

  const Name: PropertyDecorator = (target, key) => {
    console.log(target, key);
  };

  @Base2("xiao yu")
  class Http3 {
    @Name
    xiaoman: string;
    constructor() {
      this.xiaoman = "xiaoman";
    }
    @Get2("https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10")
    getList(@Result() data: any) {
      // console.log("Http3:", data);
    }
  }
}
