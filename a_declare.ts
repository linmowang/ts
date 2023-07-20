// 声明文件 c++ .hw文件

// axios库自带声明文件
import axios from "axios";

// express库没有声明文件
import express from "express";

// 需要使用@types/express去补充  热门库都有@types/(库名)
// import "@types/express";

// 冷门库需要手写声明文件
// ./typings/express.d.ts

axios.get("http://localhost:3000/user");

const app = express();
const router = express.Router();
app.use("/api", router);
router.get("api", (req, res) => {
  res.json({
    code: 200,
  });
});

app.listen(9001, () => {
  console.log(111);
});

console.log(express_a.toFixed());
