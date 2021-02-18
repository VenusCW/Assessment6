const express = require("express");
const app = express();
app.use(express.json());
const port= 3000;

const jellyBeans= require("./routes");
app.use("/", jellyBeans);
app.listen(port,() => console.log('Listening on port: ${port}.'));

