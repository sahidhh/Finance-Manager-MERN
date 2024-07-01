/* This code snippet is setting up a Node.js server using Express framework along with MongoDB for
database operations. Here's a breakdown of what each part of the code is doing: */
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express();
const port = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());

const mongoURI: string =
  "mongodb+srv://sahidh:nE7qvVM7eyxEXLcv@personalfinancetracker.cttcuqe.mongodb.net/";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on ${port}`);
});
