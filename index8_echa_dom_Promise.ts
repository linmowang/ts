//内置对象

// ecma
let num1: Number = new Number(1);
let date: Date = new Date();
let ref: RegExp = new RegExp(/\w/);

let error: Error = new Error("错了");
let xht: XMLHttpRequest = new XMLHttpRequest();

// dom HTML(元素名称)ELement
let div = document.querySelector("div");
let input = document.querySelector("input");
let footer = document.querySelector("footer");
let footer2 = document.querySelector("footer") as Element;

let div2: NodeList = document.querySelectorAll("div footer");
let div3: NodeListOf<HTMLDivElement | HTMLElement> =
  document.querySelectorAll("div footer");

let local: Storage = localStorage;
let lo: Location = location;
let promise: Promise<number> = new Promise((r) => r(1));
promise.then((res) => {
  res.toString();
});

let promise2: Promise<string> = new Promise((r) => r("xiaoman"));
promise2.then((res) => {
  res.indexOf("2");
  res.length;
});

let cookie: string = document.cookie;

// 代码雨 ./index8-codeRain
