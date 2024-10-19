// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../backend/config/db.js";
// import Product from "./models/product.model.js";
// import mongoose, { mongo } from "mongoose";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //middleware, allows us to access json data in the body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
