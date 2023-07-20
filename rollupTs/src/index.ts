const b: string = "string";
const a: number = 1111;

console.log(a);

if (process.env.NODE_ENV === "development") {
  console.log("开发");
} else {
  console.log("生产");
}
