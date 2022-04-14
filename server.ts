import express from "express";
import config from "config";
import mongoose from "mongoose";
import cors from "cors"
import items from "./routes/api/items";

const port = config.get("port") as number;
const db = config.get("mongoUri") as string;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/items", items);

mongoose
  .connect(db)
  .then(() => console.log("Mongo connected..."))
  .catch((err : Error) => console.log(err));

app.listen(port, () => {
  console.log(`server listening on port :${port} `);
});
