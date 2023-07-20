// 代码雨
let canvas: HTMLCanvasElement = document.querySelector(
  "#canvas"
) as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

let str2: string[] = "XMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSBXMZSWSSB".split("");
let Arr: number[] = Array(Math.ceil(canvas.width / 10)).fill(0);
// console.log(Arr);
const rain = () => {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  Arr.forEach((item, index) => {
    ctx.fillText(
      str2[Math.floor(Math.random() * str2.length)],
      index * 10,
      item + 10
    );

    // Arr[index] = item > canvas.height ? 0 : item + 10; //平滑
    Arr[index] =
      item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10; //随机大
  });
};

setInterval(rain, 40);
