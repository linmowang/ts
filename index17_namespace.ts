//  namespace
namespace E {
  export const a = 1;
}

console.log(E.a);

// 嵌套namespace
namespace F {
  export namespace C {
    export const a = 1;
  }
}

console.log(F.C.a);

// 别名
import AAA = F.C;
console.log(AAA.a);

// 合并
namespace E {
  export const b = 2;
}

console.log(E.a, E.b);
