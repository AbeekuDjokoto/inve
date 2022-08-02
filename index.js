import express from "express";
import productRouteapi from "./routes/productRoutes.js";
import mongoose from "mongoose";
// import { DB_URL } from "./config.js";


mongoose.connect('mongodb+srv://AbeekuDjokoto:manchesterunited12@cluster0.5y7fu.mongodb.net/inventoryDatabase').then(() => {
    console.log("Connected to DB");
  }).catch((error) => {
    console.log("Failed to connect to db:", error.name);
  });

const app = express();
const port = 8082;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Inventory");
});

app.use(productRouteapi);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
