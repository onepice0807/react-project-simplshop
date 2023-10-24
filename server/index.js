const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

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

let orderList = [];
app.post("/order", (req, resp) => {
  const orderNumber = Math.floor(Math.random() * 100000);
  let order = { orderNumber: orderNumber, price: req.body.totals.total };
  orderList.push(order);
  resp.status(200).json(orderList);
});

// 4000번 포트에 리스너 테스트
app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
