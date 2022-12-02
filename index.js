const express = require("express");

const port = 3306;

const cookieParser = require("cookie-parser");

const cors = require("cors");

const routes = require("src/routes/index");

const app = express();

require("src/database");

app.listen(port, () => console.log("servdor ligado na porta ${port}"));

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use(routes);