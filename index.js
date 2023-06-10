import express from "express";
const app = express();

//require("dotenv").config();
import { configDotenv } from "dotenv";

const postsRouter = require("./routes/posts.router");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/gaji", postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
