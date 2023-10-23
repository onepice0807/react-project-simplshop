const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 4000;

// cors 설정
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// json 파일을 읽어와 (String) json으로 parse
const productsDataRaw = fs.readFileSync("./products.json", "utf8");
const productsData = JSON.parse(productsDataRaw);

// 컨트롤러단 처리
app.get("/", (req, resp) => {
  resp.send(
    `<h1>Welcome Node Server!</h1><div>today is ${new Date().toLocaleDateString()}</div>`
  );
});

app.get("/products", (req, resp) => {
  resp.json(productsData.products);
});

app.get("/options", (req, resp) => {
  resp.json(productsData.options);
});

// 4000번 포트에 리스너 테스트
app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
