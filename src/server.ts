import express from "express";
import router from "./routes/routes";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3001, () => {
  console.log("server running in localhost:3001");
});
