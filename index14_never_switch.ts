// never 类型

type A20 = string & number;
function xm(): never {
  throw new Error("xiaoman");
}
function xm2(): never {
  while (true) {}
}

type A21 = void | number | never;
type A22 = "唱" | "跳" | "rap";
function kun(value: A22) {
  switch (value) {
    case "唱":
      break;
    case "跳":
      break;
    case "rap":
      break;

    default:
      // 兜底逻辑
      const error: never = value;
      break;
  }
}
