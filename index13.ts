// 类型推论

let str20 = "xiaoman";
// str20 = 123;

// 没有初始赋值 会认为是any
let str21;
str21 = 456;
str21 = null;

// 别名
type s = string;
let str22: s = "xiaomanb";

type s1 = () => {};
type s2 = number[] & A;

interface A10 extends A {}

// type 中extends 是包含的意思
// 左边的值 会作为右边类型的子类型
// 左边1是number类型所以包含number
// 类型基础到具体分层级
// 1. any unknown
// Object
// Number String
// number string
// never

// 这里 左边1是number不包含never, 所以是0
type num = 1 extends number ? 1 : 0;
type num2 = 1 extends never ? 1 : 0;
