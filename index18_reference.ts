/// <reference path="index18_1.ts" />
/// <reference path="index18_2.ts" />
/// <reference types="node" />

// 三斜线跟import一样也是导入文件

namespace Y {
  export const a = 5;
}

console.log(Y.a, H.b, U.c);
