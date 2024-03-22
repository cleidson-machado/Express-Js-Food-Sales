const express = require("express");
const mongoConnDb = require("./src/database/mongoConnection");
const morgan = require("morgan");
const app = express();

const port = 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  mongoConnDb().then(() => {
    console.log(`Server is runing on http://localhost:${port}`);
  });
});
