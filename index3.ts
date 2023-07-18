// object、Object、{} 的区别

// Object代表原形链上的基础
let b2: Object = {};
let b3: Object = 112;
let b4: Object = "";
let b5: Object = true;

// object代表引用类型
let c: object = {};
// let c1:object = 123
// let c1:object = true
let c4: object = [];
let c5: object = () => {};

// {} = new Object()
let d: {} = {};
let d1: {} = [];
let d2: {} = 123;
let d3: {} = { nane: 1 };
// {}无法赋值属性因为它被认为是个空对象
// d3.name = 1
